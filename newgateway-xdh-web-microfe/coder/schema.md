# Schema 配置说明

在schemas文件夹下新建js文件， 一个实体用一个文件表示。 可以再建文件夹细分。 文件格式如下：

```
module.exports = {
  vuex: true, // 是否生成store，如果设置false，不生成store，只会生成mixin
  name: '实体中文名称', // 生成代码注释用到
  model: {
    path: '/api/users', // 接口地址路径，必须
    title：'接口描述信息', // 生成代码注释用到，在methods为false时有效
    prefix: '', // 接口地址前缀，可选，默认为空, 名称必须要在 src/config.js中定义，否则报错
    methods: ['fetch', 'get', 'add', 'update', 'remove'], // 生成请求方法，默认全部，如需要自定义，设置为false
    transform: 'userMap' // 响应数据转换函数，可选，函数名称必须要在 src/mapping/index.js 中定义，否则会报错
    options: {}, // ajax 参数选项，可选
    name:'', // 自定义方法名称，methods为false，必须要设置
    columns: {}, // 模拟数据字段mock模板，可选
    template: '' // Mock自定义模板函数名称, 名称必须在/src/mock/templates.js中能找到，设置了该值，columns将失效
    method: 'fetch', //自定义方法按那种方式生成store或mixin，可选， 在 methods为false时有效
    state: '' // 定义状态保存的名称，methods为false时并且method为空时，必须要设置state 和 name
    disabled: fasle, // 是否禁用该模型
    cache: false, // 是否启用缓存支持boolean和Object， {local:'是否缓存到本地存储', key:'缓存key'},
    socket: false // 是否开启用websocket接收响应数据
  }
}
```
ajax 参数选项 [options](/static/utils/module-utils_axios.html)
