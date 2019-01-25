module.exports = {
  tags: {
    allowUnknownTags: true,
    dictionaries: ['jsdoc', 'closure']
  },
  source: {
    include: [
      'extension',
      'extension/README.md'
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
    'destination': 'docs/static/extension'
  }
}
