const _import = require('../utils/view-import/' + process.env.NODE_ENV)

export default {
  routes: [
    {
      path: '/',
      component: _import('index')
    },
    {
      path: '*',
      component: _import('404')
    }
  ]
}
