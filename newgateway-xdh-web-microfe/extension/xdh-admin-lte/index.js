import VueModule from './xdh-admin-lte'
import './style.scss'

VueModule.install = function (Vue) {
  Vue.component(VueModule.name, VueModule)
}
export default VueModule
