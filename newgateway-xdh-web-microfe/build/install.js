const {spawn} = require('child_process')
const config = require('../config')

let gitParams = ['clone']
if (config.install.branch) {
  gitParams.push('-b', config.install.branch)
}
gitParams.push(config.install.repository, 'node_modules')

const git = config.install.type === 'git'
    ? spawn('git', gitParams)
    : spawn('svn', ['export', config.install.repository, 'node_modules']);

git.stdout.on('data', (data) => {
  console.log(`${data}`);
});

git.stderr.on('data', (data) => {
  console.log(`${data}`);
});

git.on('close', (code) => {
  if (code === 0) {
    console.log('  install node_modules complete.\n')
  } else {
    console.log('  install node_modules error.\n')
  }
});
