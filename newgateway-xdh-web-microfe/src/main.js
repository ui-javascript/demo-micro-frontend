/**
 * 程序入口
 * @author chenhuachun@xdh.net.cn
 *
 */

import Vue from 'vue'
import ElementUI from 'element-ui'

// 根组件
import App from './App.vue'

// 初始化路由
import router from './router'

// 初始化store
import store from './store'

// 全局http请求拦截
import './helper/interceptor'

// 注入路由守卫
import guarder from './helper/guarder'

// 开启模拟数据，编译在生成环境要注释
// import '@/mock/index'

// 应用样式
import './style/index.scss'

// 全局注册element组件
Vue.use(ElementUI)

// 注册路由守卫
guarder(router)

// 关闭控制台开发模式提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
