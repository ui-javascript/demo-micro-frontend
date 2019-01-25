const {exec} = require('child_process')
const program = require('commander')
const chalk = require('chalk')
const fs = require('fs')
const rm = require('rimraf')
const packageJSON = require('../package')
const configPath = 'public/config.js'

function copyFile(from, to) {
  const content = fs.readFileSync(from, {encoding: 'utf-8'})
  fs.writeFileSync(to, content, {encoding: 'utf-8'})
}

program
  .version(packageJSON.version)
  .option('-c, --config <path>', '配置文件路径')
  .option('-a, --app <app>', '应用名称')
  .option('-o, --out <path>', '输出目录')
  .option('-u, --url <path>', 'baseUrl')
  .parse(process.argv)

let cmd = 'npm run fix && npm run build:libs && npm run coder && {{baseUrl}} npm run build'
let baseUrl = ''
if (program.app) {
  cmd += ':' + program.app
}

if (program.out) {
  cmd += ' -- --dest ' + program.out
}

if (program.url) {
  baseUrl = `node node_modules/cross-env/dist/bin/cross-env.js BASE_URL=${program.url}`
}
cmd = cmd.replace('{{baseUrl}}', baseUrl)

if (program.config) {
  copyFile(configPath, program.config.replace('.js', '.bak.js'))
  copyFile(program.config, configPath)
}

console.log(cmd)
console.log(chalk.yellow('running......'))
rm.sync('./node_modules/.cache')
exec(cmd, function (err) {
  // 还原config.js
  if (program.config) {
    copyFile(program.config.replace('.js', '.bak.js'), configPath)
    fs.unlinkSync(program.config.replace('.js', '.bak.js'))
  }
  if (err) {
    console.log(chalk.red('build error'), err)
    return
  }
  console.log(chalk.green('build completed!'))
})

