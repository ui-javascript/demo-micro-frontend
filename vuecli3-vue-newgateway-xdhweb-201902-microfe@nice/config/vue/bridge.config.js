module.exports = {
  pages: {
    bridge: {
      entry: 'build/libs/bridge.js'
    }
  },
  publicPath: '',
  outputDir: 'public/lib/bridge',
  chainWebpack: config => {
    config.plugins.delete('copy')
  }
}
