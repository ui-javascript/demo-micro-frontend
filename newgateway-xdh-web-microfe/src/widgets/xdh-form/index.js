// let formData = [{
//   label: '字段中文名称',
//   name:'表单域字段名',
//   type: '输入框类型：radio / checkbox / input /  select / datePicker / dateTimePicker / upload',
//   props: {}, // 实例化参数选项
//   rules: [],// 验证规则
//   group: {
//     // 分组
//   }
// }]

import XdhForm from './xdh-form.vue'
XdhForm.install = function (Vue) {
  Vue.component(XdhForm.name, XdhForm)
}
export default XdhForm
