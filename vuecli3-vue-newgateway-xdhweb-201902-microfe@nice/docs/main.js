import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import DemoBlock from './components/demo-block'
import PageBlock from './components/page-block'

import './mock/index'
import '@/widgets/index'
import 'highlight.js/styles/darcula.css'
import './style/docs.scss'

Vue.use(ElementUI)
Vue.component(DemoBlock.name, DemoBlock)
Vue.component(PageBlock.name, PageBlock)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
