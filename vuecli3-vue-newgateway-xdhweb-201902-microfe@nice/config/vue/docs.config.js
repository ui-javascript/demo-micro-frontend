/**
 * 在线文档 配置文件
 * @author chenhuachun@xdh.net.cn
 */

const path = require('path')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')
const HTMLInjectTheme = require('../../build/plugins/html-inject-theme')
const HTMLInjectConfig = require('../../build/plugins/html-inject-config')
const vueMarkdownOptions = require('../../build/plugins/vue-markdown-options')
const baseConfig = require('./base.config')
const config = require('../index')

const reslove = function (dir) {
  return path.join(__dirname, '../../', dir)
}

// 输出目录
const outputDir = path.join(config.docsOutputDir, config.docsBaseUrl)

module.exports = merge(baseConfig, {
  // 开启多线程 vue-markdown-loader 报错
  parallel: false,
  outputDir: outputDir,
  publicPath: config.docsBaseUrl,
  devServer: {
    // 需要设置多个静态文件目录
    contentBase: [reslove('public'), reslove('docs/static'), reslove('node_modules')],
    port: config.docsServerPort,
    // API 代理
    proxy: config.proxy
  },
  configureWebpack: () => {
    let plugins = [
      // 注入静态配置
      new HTMLInjectConfig(),
      
      // 注入主题样式引用
      new HTMLInjectTheme(config.docsBaseUrl, config.themeOutputDir),
      
      // 复制静态文件到打包的目录
      new CopyWebpackPlugin([
        {
          from: reslove('docs/static'),
          to: reslove(outputDir),
          ignore: ['.*']
        }
      ]),
      // GoJS文档
      new CopyWebpackPlugin([
        {
          from: reslove('node_modules/gojs'),
          to: reslove(path.join(outputDir, 'gojs')),
          ignore: ['.*']
        }
      ])
    ]
    // 生产环境打包dll
    if (process.env.NODE_ENV === 'production') {
      new AutoDllPlugin({
        inject: true,
        debug: true,
        filename: '[name]_[hash:8].js',
        path: './js',
        entry: {
          vendor: config.dll
        }
      })
    }
    return Object.assign({
      entry: './docs/main.js'
    }, baseConfig.configureWebpack, {
      plugins: plugins
    })
    
  },
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(vueMarkdownOptions)
  }
})
