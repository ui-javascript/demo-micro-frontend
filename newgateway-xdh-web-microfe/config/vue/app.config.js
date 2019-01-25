/**
 * app的配置文件模板, 基于 vue.base.config
 * @author chenhuachun@xdh.net.cn
 */
const path = require('path')
const AutoDllPlugin = require('autodll-webpack-plugin')
const merge = require('webpack-merge')
const HTMLInjectTheme = require('../../build/plugins/html-inject-theme')
const HTMLInjectConfig = require('../../build/plugins/html-inject-config')
const util = require('./util')
const baseConfig = require('./base.config')
const config = require('../index')

module.exports = function (options) {
  const outputDir = path.join(config.outputDir, options.outDir)
  
  return merge(baseConfig, {
    // 自动集成命令支持在环境变量修改 baseUrl
    publicPath: process.env.BASE_URL || options.baseUrl,
    outputDir: outputDir,
    devServer: {
      contentBase: util.getContentBase(options.extendContentBase),
      port: options.port,
      proxy: config.proxy
    },
    configureWebpack: () => {
      let plugins = [
        // 注入静态配置
        new HTMLInjectConfig(config.baseUrl),
        // 注入主题样式引用
        new HTMLInjectTheme(options.baseUrl, config.themeOutputDir),
        
        // 复制静态目录
        ...util.getCopyPlugins(options.extendContentBase, outputDir)
      ]
      // 生产环境打包dll
      if (process.env.NODE_ENV === 'production') {
        plugins.push(
          new AutoDllPlugin({
            inject: true,
            debug: false,
            filename: '[name]_[hash:8].js',
            path: './js',
            entry: {
              vendor: config.dll
            }
          })
        )
      }
      return Object.assign({}, baseConfig.configureWebpack, {
        plugins: plugins,
        entry: `./${config.appsDir}/${options.name}/main.js`
      })
    }
    
  })
}
