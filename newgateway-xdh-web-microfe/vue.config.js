const path = require('path')
const fs = require('fs')
const config = require('./config/index')

const VueConfig = require('./config/vue/config')
const VueLibsConfig = require('./config/vue/libs.config')
const VueDocsConfig = require('./config/vue/docs.config')
const VueAppConfig = require('./config/vue/app.config')
const VueBridgeConfig = require('./config/vue/bridge.config')

const appsDir = `./${config.appsConfigDir}`
const appsPath = path.join(__dirname, appsDir)

let configs = {
  bridge: VueBridgeConfig,
  libs: VueLibsConfig,
  docs: VueDocsConfig,
  default: VueConfig
}

if (fs.existsSync(appsPath)) {
  const appConfigFiles = fs.readdirSync(appsPath)
  appConfigFiles.forEach(name => {
    configs[`app/${name}`] = VueAppConfig(require(`${appsDir}/${name}`))
  })
}

module.exports = configs[process.env.CMD] || VueConfig
