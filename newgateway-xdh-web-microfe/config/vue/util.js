const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/**
 * 从项目根目录解析路径
 * @param dir
 * @return {string}
 */
const reslove = function (dir) {
  return path.join(__dirname, '../../', dir)
}

exports.reslove = reslove

/**
 * 根据扩展资源目录获取ContentBase
 * @param extend
 * @return {*[]}
 */
exports.getContentBase = function (extend) {
  let contentBase = [reslove('public')]
  if (extend) {
    extend = [].concat(extend)
    const extendPaths = extend.map(item => reslove(item))
    contentBase = contentBase.concat(extendPaths)
  }
  return contentBase
}

/**
 * 获取扩展的资源目录 CopyWebpackPlugin
 * @param extend
 * @param outputDir
 * @return {*}
 */
exports.getCopyPlugins = function (extend, outputDir) {
  if (!extend) return []
  extend = [].concat(extend)
  const extendPaths = extend.map(item => reslove(item))
  return extendPaths.map(item => {
    return new CopyWebpackPlugin([
      {
        from: item,
        to: reslove(outputDir),
        ignore: ['.*']
      }
    ])
  })
}
