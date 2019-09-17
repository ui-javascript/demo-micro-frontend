/**
 * 程序入口
 * @author chenhuachun@xdh.net.cn
 *
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'

// 发布生产环境需要把模拟数据注释
// import '@/mock/index'

// 初始化样式
import '@/style/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
