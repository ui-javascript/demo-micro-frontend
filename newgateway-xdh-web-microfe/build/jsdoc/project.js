module.exports = {
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure']
  },
  source: {
    include: [
      'src/base',
      'src/components',
      'src/helper',
      'src/mapping',
      'src/mock',
      'src/router',
      'src/store',
      'src/views',
      'README.md'
    ],
    includePattern: '\\.(vue|js)$'
  },
  plugins: [
    'plugins/markdown',
    '../plugins/jsdoc-for-vue.js'
  ],
  templates: {
    'cleverLinks': false,
    'monospaceLinks': false
  },
  opts: {
    'destination': 'docs/static/project'
  }
}
