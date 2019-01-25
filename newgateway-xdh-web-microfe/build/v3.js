const process = require('child_process');
const fs = require('fs')
const path = require('path')
const rm = require('rimraf')
const copy = require('copy-concurrently')
const config = require('../config')
const SRC_REMOTE_PATH = config.upgrade.repository
const _ = require('lodash')
const tempDir = config.upgrade.tempDir
const TEMP_ROOT = path.resolve(__dirname, `../${tempDir}`)
const DEST_ROOT = path.resolve(__dirname, '../')
const version = require('../package').version
const EXCLUDED = [
  '/src/assets',
  '/src/base',
  '/src/components',
  '/src/helper',
  '/src/mapping',
  '/src/mock',
  '/src/router',
  '/src/store',
  '/src/style/components',
  '/src/style/skins',
  '/src/style/variables',
  '/src/style/index.scss',
  '/src/style/base.scss',
  '/src/style/_vars.scss',
  '/src/style/element.scss',
  '/src/views',
  '/src/config.js',
  '/src/main.js',
  '/src/App.vue',
  '/test/',
  '/coder/schemas',
  '/coder/config.js',
  '/release/',
  '/public/'
]
const appConfigRender = _.template(`
module.exports = {
  name: '<%=name%>',
  baseUrl: '<%=baseUrl%>',
  port: <%=port%>,
  outDir: '<%=outDir%>',
  extendContentBase: []
}`)

// 项目工程根目录
const ROOT = path.join(__dirname, '../')

// apps 配置文件目录
const APPS_CONFIG_PATH = path.join(ROOT, 'config/apps')

let packageSiteScripts = {}


function isExcluded(src) {
  return !!EXCLUDED.filter(item => {
    let path = src.split(tempDir)[1]
    return path.indexOf(item) === 0 || path.indexOf(item.replace(/\//g, '\\')) === 0
  })[0]
}

// 克隆最新版本资源
function cloneSrc() {
  return new Promise((reslove, reject) => {
    let cmd = config.upgrade.type === 'git'
      ? `git clone -b v3.x ${SRC_REMOTE_PATH} ${TEMP_ROOT}`
      : `svn export ${SRC_REMOTE_PATH} ${TEMP_ROOT}`;
    process.exec(cmd, function (err) {
      if (err) {
        console.log(err)
        reject(err)
        return
      }
      console.log('download completed!')
      reslove()
    })
  })
}

// 复制文件替换本地工程文件
function copyDir(src, dest) {
  let files = fs.readdirSync(src)
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }
  files.forEach(file => {
    if (file === '.git' || file === '.svn') {
      return
    }
    let srcPath = path.join(src, file)
    let destPath = path.join(dest, file)
    if (isExcluded(srcPath)) {
      return
    }
    let stat = fs.lstatSync(srcPath)
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
      console.log('copy', destPath)
    }
  })
}

// 删除文件
function removeDir(dir, callback) {
  if (fs.existsSync(dir)) {
    rm(dir, function (err) {
      if (err) {
        console.log(err)
        return
      }
      callback && callback()
    })
  }
}

// 重新下载node_modules
function install() {
  process.exec(`npm run install`, function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('install completed!')
  })
}

// 把当前package.json 的 site 命令备份起来
function savePackageSitesScript() {
  const packageJson = path.join(DEST_ROOT, 'package.json')
  const content = fs.readFileSync(packageJson, 'utf-8')
  const contentJSON = JSON.parse(content)
  const regex = /^(dev_|build_|dev:|build:)/
  for (let name in contentJSON.scripts) {
    if (regex.test(name) && (!name.includes('libs') || !name.includes('docs'))) {
      packageSiteScripts[name] = contentJSON.scripts[name]
    }
  }
}

// 把备份的package.json 的 site 命令还原到文件
function restorePackageSitesScript() {
  const packageJson = path.join(DEST_ROOT, 'package.json')
  const content = fs.readFileSync(packageJson, 'utf-8')
  const contentJSON = JSON.parse(content)
  for (let name in packageSiteScripts) {
    const newName = name.replace('_', ':')
    const nameArray = newName.split(':')
    const cmd = `node node_modules/cross-env/dist/bin/cross-env.js CMD=app/${nameArray[1]}.js npm run ${nameArray[0]}`
    contentJSON.scripts[newName] = cmd
  }
  fs.writeFileSync(packageJson, JSON.stringify(contentJSON, '', '\t'), 'utf-8')
}

// 适配v2.x 升级到 v3.x
function upToV3(callback) {
  createAppsConfig()
  Promise.all([
    copy(path.join(ROOT, 'sites'), path.join(ROOT, 'apps')),
    copy(path.join(ROOT, 'static'), path.join(ROOT, 'public')),
    copy(path.join(ROOT, 'index.html'), path.join(ROOT, 'public/index.html')),
    copy(path.join(ROOT, 'favicon.ico'), path.join(ROOT, 'public/favicon.ico'))
  ]).then(() => {
    const files = [
      'examples',
      'build',
      'config/build.js',
      'config/dev.js',
      'config/demo.js',
      'config/proxy.js',
      '.babelrc',
      '.eslintrc.js',
      '.postcssrc.js',
      'favicon.ico',
      'index.html',
      'site.js',
      'update.js',
      'sites',
      'static'
    ]
    files.forEach(file => {
      rm.sync(path.join(__dirname, '..', file))
    })
    callback()
  })
}

function writeAppConfigFile(options) {
  
  if (!fs.existsSync(APPS_CONFIG_PATH)) {
    fs.mkdirSync(APPS_CONFIG_PATH)
  }
  const content = appConfigRender(options)
  const filePath = path.join(APPS_CONFIG_PATH, options.name + '.js')
  return fs.writeFileSync(filePath, content, 'utf-8')
}

function createAppsConfig() {
  const apps = fs.readdirSync('./sites')
  apps.forEach(name => {
    const f = require(`./sites/${name}/config.js`)
    writeAppConfigFile({
      name: name,
      port: f.dev.port,
      baseUrl: '/',
      outDir: `/${name}`
    })
  })
}

console.log('upgrade starting...')

// 1. 备份package.json的命令
savePackageSitesScript()

// 2. 从代码库拉取最新的源码
cloneSrc().then(r => {
  
  // 适配升级到v3
  if (parseInt(version) === 2) {
    upToV3(function () {
      
      // 3. 替换本地工程文件
      copyDir(TEMP_ROOT, DEST_ROOT)
      
      // 4. 删除临时文件
      removeDir(TEMP_ROOT)
      
      // 5. 恢复package.json的命令
      restorePackageSitesScript()
      
      console.log('upgrade completed!')
    })
  }
  
})


