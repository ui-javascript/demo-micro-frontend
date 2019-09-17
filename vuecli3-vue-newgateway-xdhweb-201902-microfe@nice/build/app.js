const path = require('path')
const {exec, execSync} = require('child_process')
const fs = require('fs')
const commander = require('commander')
const chalk = require('chalk')
const copy = require('copy-concurrently')
const rm = require('rimraf')
const config = require('../config/index')
const appConfigRender = require('./templates/app.config')
const packageJSON = require('../package.json')
const vueConfig = require('../config/vue/config')
const proxyJSON = require('../app.proxy.json')
const url = require('url')
// app保留关键字
const KEY_WORDS = [
  'js',
  'css',
  'lib',
  'ckeditor',
  'img',
  'fonts',
  'libs',
  'docs',
  'bridge'
];

// 项目工程根目录
const ROOT = path.join(__dirname, '../');

// apps 配置文件目录
const APPS_CONFIG_PATH = path.join(ROOT, config.appsConfigDir);

// apps源码目录
const APPS_PATH = path.join(ROOT, config.appsDir);

// app模板目录
const APP_TEMPLATE_PATH = path.join(__dirname, 'templates/app');

const PACKAGE_PATH = path.join(ROOT, 'package.json');

const PROXY_PATH = path.join(ROOT, 'app.proxy.json');

function addAppProxy(options) {
  if (options.outDir === options.publicPath) {
    let proxy = {};
    proxy[url.format(options.publicPath)] = {
      ws: true,
      changeOrigin: true,
      target: `http://localhost:${options.port}/`
    };
    proxyJSON[options.name] = proxy;
    fs.writeFileSync(PROXY_PATH, JSON.stringify(proxyJSON, null, 2), 'utf-8');
  }
}

function writeAppConfigFile(options) {
  if (!fs.existsSync(APPS_CONFIG_PATH)) {
    fs.mkdirSync(APPS_CONFIG_PATH);
  }
  const content = appConfigRender(options);
  const filePath = path.join(APPS_CONFIG_PATH, options.name + '.js');
  return fs.writeFileSync(filePath, content, 'utf-8');
}

function addPackageCmd(name) {
  const dev = `node node_modules/cross-env/dist/bin/cross-env.js CMD=app/${name}.js npm run dev`;
  const build = `node node_modules/cross-env/dist/bin/cross-env.js CMD=app/${name}.js npm run build`;
  
  packageJSON.scripts[`dev:${name}`] = dev;
  packageJSON.scripts[`build:${name}`] = build;
  fs.writeFileSync(PACKAGE_PATH, JSON.stringify(packageJSON, null, 2), 'utf-8');
}

function queue(array, func, finish) {
  if (array.length > 0) {
    let item = array.shift();
    func(item)
      .then(() => {
        queue(array, func, finish);
      })
      .catch(e => {
        queue(array, func, finish);
      });
  } else {
    finish && finish();
  }
}

commander
  .version(packageJSON.version)
  .option('-a, --add <name>', '新增网站')
  .option('-p, --port <name>', '网站端口')
  .option('-u, --url <name>', 'baseUrl')
  .option('-o, --out <name>', 'outputDir')
  .option('-r, --remove <name>', '删除网站')
  .option('-b, --build', '发布所有网站')
  .parse(process.argv);

// 新增应用
if (commander.add) {
  const appConfigPath = url.format(
    path.join(APPS_CONFIG_PATH, `${commander.add}.js`)
  );
  if (KEY_WORDS.includes(commander.add)) {
    console.log(
      chalk.yellow(`${commander.add} 是关键字，不能使用，请更换名称`)
    );
    return;
  }
  if (fs.existsSync(appConfigPath)) {
    console.log(chalk.yellow(`${commander.add} 目录名称已存在，请更换名称`));
    return;
  }
  
  copy(APP_TEMPLATE_PATH, path.join(APPS_PATH, commander.add))
    .then(() => {
      // 子应用如果不设置baseUrl，即由父应用和子应用名称确定
      const outDir = commander.out || url.format(path.join(vueConfig.publicPath, commander.add));
      const baseUrl = commander.url || outDir;
      const options = {
        name: commander.add,
        baseUrl: url.format(baseUrl),
        outDir: url.format(outDir),
        port: commander.port || 8001
      };
      writeAppConfigFile(options);
      addAppProxy(options);
      addPackageCmd(commander.add);
      console.log(chalk.green('创建应用成功!'));
    })
    .catch(r => {
      console.log(chalk.red('创建应用失败!', r));
    });
}

// 删除应用
if (commander.remove) {
  const appConfigPath = path.join(APPS_CONFIG_PATH, `${commander.remove}.js`);
  if (!fs.existsSync(appConfigPath)) {
    console.log(chalk.yellow(`${commander.remove} 目录名称不存在`));
    return;
  }
  const appPath = path.join(APPS_PATH, commander.remove);
  rm.sync(appConfigPath);
  rm.sync(appPath);
  delete packageJSON.scripts[`dev:${commander.remove}`];
  delete packageJSON.scripts[`build:${commander.remove}`];
  fs.writeFileSync(PACKAGE_PATH, JSON.stringify(packageJSON, null, 2), 'utf-8');
  
  delete proxyJSON[commander.remove];
  fs.writeFileSync(PROXY_PATH, JSON.stringify(proxyJSON, null, 2), 'utf-8');
  console.log(chalk.green(`${commander.remove} 删除成功！`));
}

// 发布应用
if (commander.build) {
  const apps = fs.readdirSync(APPS_PATH).filter(dir => !dir.includes('.'));
  const count = apps.length;
  if (count === 0) {
    console.log(chalk.yellow('没有可编译的站点！'));
    return;
  }
  
  let startTime = new Date().getTime();
  console.log(`正在运行代码生成器...`);
  let ret = execSync('npm run coder');
  if (ret) {
    console.log(chalk.green(`生成代码完成！`));
  } else {
    console.log(chalk.red(`生成代码失！`));
  }
  queue(
    apps,
    function (name) {
      return new Promise((resolve, reject) => {
        console.log(`${name} 正在发布......`);
        exec(`npm run build:${name}`, function (err) {
          if (err) {
            console.log(chalk.red(`${name} 发布失败！`));
            console.log(err);
            reject(err);
            return;
          }
          console.log(chalk.green(`${name} 发布成功！`));
          resolve();
        });
      });
    },
    function () {
      const endTime = (new Date().getTime() - startTime) / 1000;
      console.log(
        chalk.green(
          `全部网站发布完成，用时：${endTime}s，平均每个应用耗时：${endTime /
          count}s`
        )
      );
    }
  );
}

if (!commander.add && !commander.remove && !commander.build) {
  console.log(chalk.red('命名参数不正确，请用 npm run app -- --help 查看帮助'));
}
