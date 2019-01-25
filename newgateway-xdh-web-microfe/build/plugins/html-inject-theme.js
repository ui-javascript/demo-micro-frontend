/**
 * 在html文件注入主题样式文件引用链接
 * @author chenhuachun@xdh.net.cn
 *
 * @example
 *
 * new HTMLInjectTheme('/', 'lib/theme/')
 */
const path = require('path')
const fs = require('fs')
const url = require('url')

/**
 * @class
 */
class HtmlInjectTheme {
  /**
   * 构造函数
   * @param {string} baseUrl 发布目录，与vue.config.js 中的baseUrl一致
   * @param {string} themePath 主题生成的文件存放目录，必须要在public下
   */
  constructor(baseUrl, themePath) {
    const root = url.format(path.join('public', themePath, 'css'))
    const dirPath = path.join(__dirname, '../../', root)
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(path.join(__dirname, '../../', root))
      this.files = files.map(name => {
        return url.format(path.join(baseUrl, themePath, 'css', name))
      })
    } else {
      this.files = []
    }
  }
  
  apply(compiler) {
    compiler.hooks.compilation.tap('HTMLInjectTheme', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('HTMLInjectTheme', (data, callback) => {
        data.assets.css = this.files.concat(data.assets.css)
        callback(null, data)
      })
    })
  }
}

module.exports = HtmlInjectTheme
