/**
 单独打包主题样式文件 配置
 @author chenhuachun@xdh.net.cn
 */

const RemoveThemeUselessFiles = require('../../build/plugins/remove-theme-useless-files')
const config = require('../index')

const outputDir = `public/${config.themeOutputDir}`

module.exports = {
  pages: {
    widgets: {
      // webpack入口文件只支持js， 因此需要在js文件import css文件，达到对css单独打包
      entry: 'build/libs/widgets.js'
    },
    element: {
      entry: 'build/libs/element.js'
    }
  },
  outputDir: outputDir,
  configureWebpack: {
    plugins: [
      new RemoveThemeUselessFiles(outputDir)
    ]
  },
  chainWebpack: config => {
    config.plugins.delete('copy')
  }
}
