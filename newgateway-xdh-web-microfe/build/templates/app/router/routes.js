const _import = require('./view-import/' + process.env.NODE_ENV)
export default {
  routes: [
    {
      path: '/',
      component: _import('index')
    }
  ]
}
