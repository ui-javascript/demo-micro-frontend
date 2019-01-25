const process = require('child_process');
const fs = require('fs')
const path = require('path')
const rm = require('rimraf')
const crypto = require('crypto');
const config = require('../config')
const SRC_REMOTE_PATH = config.upgrade.repository
const EXCLUDED = config.upgrade.exclude
const tempDir = config.upgrade.tempDir
const TEMP_ROOT = path.resolve(__dirname, `../${tempDir}`)
const DEST_ROOT = path.resolve(__dirname, '../')
const NODE_MODULES = path.resolve(__dirname, '../node_modules')
let packageSiteScripts = {}

function md5File(path) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path)
    return crypto.createHash('md5').update(data, 'utf8').digest('hex');
  } else {
    return null
  }
}

function isExcluded(src) {
  return !!EXCLUDED.filter(item => {
    let path = src.split(tempDir)[1]
    return path.indexOf(item) === 0 || path.indexOf(item.replace(/\//g, '\\')) === 0
  })[0]
}

// 克隆最新版本资源
function cloneSrc() {
  return new Promise((reslove, reject) => {
    const branch = config.upgrade.branch ? `-b ${config.upgrade.branch }` : ''
    let cmd = config.upgrade.type === 'git'
      ? `git clone ${branch} ${SRC_REMOTE_PATH} ${TEMP_ROOT}`
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
      // 文件相同，不处理
      if (md5File(srcPath) === md5File(destPath)) {
        return
      }
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
    contentJSON.scripts[name] = packageSiteScripts[name]
  }
  fs.writeFileSync(packageJson, JSON.stringify(contentJSON, '', '\t'), 'utf-8')
}

console.log('upgrade starting...')

// 1. 备份package.json的命令
savePackageSitesScript()

// 2. 从代码库拉取最新的源码
cloneSrc().then(r => {

  // 3. 替换本地工程文件
  copyDir(TEMP_ROOT, DEST_ROOT)

  // 4. 删除临时文件
  removeDir(TEMP_ROOT)

  // 5. 恢复package.json的命令
  restorePackageSitesScript()

  // 6. 删除node_module目录
  removeDir(NODE_MODULES, () => {
    console.log('install....')
    // 7. 下载最新的node_module
    install()
  })

  console.log('upgrade completed!')
})

