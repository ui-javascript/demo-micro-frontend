/**
 * src 的配置文件, 基于 vue.base.config
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

// 自动集成命令支持在环境变量修改 baseUrl
const baseUrl = process.env.BASE_URL || config.baseUrl
const outputDir = path.join(config.outputDir, baseUrl)


module.exports = merge(baseConfig, {
  publicPath: baseUrl,
  outputDir: outputDir,
  devServer: {
    contentBase: util.getContentBase(config.extendContentBase)
  },
  configureWebpack: () => {
    let plugins = [
      // 注入静态配置
      new HTMLInjectConfig(config.baseUrl),
      // 注入主题样式引用
      new HTMLInjectTheme(config.baseUrl, config.themeOutputDir),
      // 复制静态资源目录
      ...util.getCopyPlugins(config.extendContentBase, outputDir)
    ]
    // 生产环境打包dll
    if (process.env.NODE_ENV === 'production') {
      plugins.push(
        new AutoDllPlugin({
          inject: true,
          debug: true,
          filename: '[name]_[hash:8].js',
          path: './js',
          entry: {
            vendor: config.dll
          }
        })
      )
    }
    return Object.assign({}, baseConfig.configureWebpack, {
      plugins: plugins
    })
  }
  
})
