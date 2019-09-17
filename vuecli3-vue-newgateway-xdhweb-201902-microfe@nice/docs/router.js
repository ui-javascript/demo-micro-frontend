import Vue from 'vue'
import Router from 'vue-router'
import nprogress from 'nprogress'

import {traverse} from '@/utils/util'
import Layout from './views/layout'
import data from './mock/data'

Vue.use(Router)
nprogress.inc(0.2)

function getComponent(item) {
  let component;
  if (item.children && item.children.length > 0) {
    component = () => import('./views/404.vue')
  } else {
    if (item.vue) {
      component = () => import(`./views/${item.vue}.vue`)
    } else {
      component = () => import(`./markdown${item.path}.md`)
    }
  }
  if (item.text === '更新日志') {
    component = () => import('../CHANGELOG.md')
  }
  if (item.text === 'README') {
    component = () => import('../README.md')
  }
  return component
}

function createRoutes(category) {
  let routes = []
  traverse(data[category].items, false, function (item) {
    routes.push({
      path: item.path,
      component: getComponent(item)
    })
  })
  return routes
}

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: () => import('./views/index.vue')
        },
        ...createRoutes('guide'),
        ...createRoutes('element'),
        ...createRoutes('widgets'),
        ...createRoutes('libs'),
        ...createRoutes('extension')
      ]
    },
    ...createRoutes('pages'),
    {
      path: '/src/:url',
      component: () => import('./views/frame.vue')
    },
    {
      path: '/messager-open',
      component: () => import('./markdown/widgets/other/messager-open.md')
    },
    {
      path: '*',
      component: () => import('./views/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
  
})

router.afterEach((to) => {
  nprogress.done()
})

export default router
