/**
 * 静态 HTTP 服务器
 * @author chenhuachun@xdh.net.cn
 */
const path = require('path')
const server = require('pushstate-server')
const opn = require('opn')
const chalk = require('chalk')
const commander = require('commander');
const packageJSON = require('../package.json');
const config = require('../config/index')
const sysUrl = require('url')

const opts = {
  docs: {
    port: config.docsPreviewServerPort,
    directory: `./${config.docsOutputDir}`,
    baseUrl: config.docsBaseUrl
  },
  dist: {
    port: config.previewServerPort,
    directory: `./${config.outputDir}`,
    baseUrl: config.baseUrl
  }
}

/**
 * 启动http服务器
 * @param {string} dir 网站目录
 * @param {number} port 启动端口
 */
function start(dir, port = 3000) {
  const current = opts[dir] || {
    port: port,
    directory: `./${dir}`
  }
  const url = `http://localhost:${current.port}${sysUrl.format(path.join('/', current.baseUrl))}`
  server.start(current);
  console.log(chalk.green(`> HTTP Server [${dir}] listening at ` + url))
  opn(url)
}

commander.version(packageJSON.version)
  .option('-n, --name <name>', '服务器名称')
  .option('-n, --port <name>', '服务启动端口')
  .parse(process.argv);

if (commander.name) {
  start(commander.name, commander.port)
}
