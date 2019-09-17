/**
 * 基础公共配置项，提供给src、apps的配置共用
 * @author chenhuachun@xdh.net.cn
 */
const path = require('path')
const appProxy = require('../../app.proxy.json')
const config = require('../index')

function resolve(dir) {
  return path.join(__dirname, '../../', dir)
}

function getProxy(appProxy, baseProxy) {
  let result = {...baseProxy}
  for (let app in appProxy) {
    for (let rule in appProxy[app]) {
      result[rule] = appProxy[app][rule]
    }
  }
  if (Object.keys(result).length > 0) {
    return result
  } else {
    return null
  }
}

module.exports = {
  // 输出目录
  outputDir: config.outputDir,
  
  // 代码检测提示方式
  lintOnSave: config.lintOnSave,
  
  devServer: {
    // 开发环境服务启动端口号
    port: config.devServerPort,
    
    // API 代理
    proxy: getProxy(appProxy, config.proxy)
  },
  
  configureWebpack: {
    // 不显示文件过大优化建议
    performance: {
      hints: false
    },
    resolve: {
      alias: {
        'D': resolve('docs'),
        'A': resolve('apps'),
        'E': resolve('extension'),
        '@': resolve('src'),
        'CK': resolve('ckeditor'),
        'vue$': process.env.NODE_ENV === 'production' ? 'vue' : 'vue/dist/vue.esm.js'
      }
    }
  }
}
