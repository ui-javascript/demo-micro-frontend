/**
 * 打包主题样式时，删除无用的文件，录入html/js等由webpack生成与主题无关的文件
 * @author chenhuachun@xdh.net.cn
 *
 * @example
 *
 * new RemoveThemeUselessFiles('public/element-ui/')
 *
 */

const path = require('path')
const rimraf = require('rimraf')
const chalk = require('chalk')

/**
 * @class
 */
class RemoveThemeUselessFiles {
  /**
   * 构造函数
   * @param {string} distPath 主题发布路径
   */
  constructor(distPath) {
    this.distPath = distPath
  }
  
  apply(compiler) {
    compiler.hooks.afterEmit.tap('RemoveThemeUselessFiles', () => {
      const files = ['element.html', 'widgets.html', 'favicon.ico', 'js']
      files.forEach(item => {
        const file = path.join(__dirname, '../../', this.distPath, item)
        rimraf(file, function () {
          console.log(file, chalk.green('remove success'))
        })
      })
    })
  }
}

module.exports = RemoveThemeUselessFiles