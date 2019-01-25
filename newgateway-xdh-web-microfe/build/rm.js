const commander = require('commander')
const rm = require('rimraf')
const path = require('path')
const packageJSON = require('../package')

commander.version(packageJSON.version)
  .option('-p, --path <name>', '删除目录路径')
  .parse(process.argv);

if (commander.path) {
  const _path = path.join(__dirname, '../', commander.path)
  rm.sync(_path)
}
