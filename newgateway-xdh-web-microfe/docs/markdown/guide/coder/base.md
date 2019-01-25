<script>
export default {}
</script>
## 模型配置

一个标准的模型配置文件如下，建议相同的实体操作都在一个文件里配置。

```javascript
module.exports = {
  vuex: true,             // 是否生成store，如果设置false，不生成store，只会生成mixin, 默认值false
  name: '用户信息',        // 模型名称，用来生成注释文档
  model: {
    path: '/api/users',   // 接口地址路径，必须
    title: '',            // 接口说明，用来生成注释文档
    prefix: '',           // 接口地址前缀，可选，默认为空, 名称必须要在 src/config.js中定义，否则报错
    methods: ['fetch', 'get', 'add', 'update', 'remove', 'batch'],  // 生成请求方法，默认全部，如需要自定义，设置为false
    transform: ''         // 响应数据转换函数，可选，函数名称必须要在 src/mapping/index.js 中定义，否则会报错
    options: {},          // ajax 参数选项，可选
    name:'',              // 自定义方法名称，methods为false，必须要设置
    columns: {},          // 模拟数据字段mock模板，可选
    template: ''          // Mock自定义模板函数名称, 名称必须在/src/mock/templates.js中能找到，设置了该值，columns将失效
    method: '',           // 自定义方法按那种方式生成store或mixin，可选， 在 methods为false时有效,可选值：fetch/get/add/update/remove
    state: ''             // 定义状态保存的名称，methods为false时并且method为空时，必须要设置state 和 name
    disabled: false,      // 是否禁用该配置项， 设置为true，代码生成器将忽略该配置
    cache: false          // 是否开启支持请求接口加入缓存功能
  }
}
```

:::tip
上述配置，除了path是必须要填写之外，其他选项都是可选的， model支持 Array或Object类型配置
:::

### 配置示例
#### 1、实现对一个实体进行增、删、改、查
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user'
  }
}
```
:::tip
当请求响应的数据无组件或页面之间的共享需求时，可以使用mixin模式，把数据存储到组件内部data，而不是存储到store。启用mixin模式，只需设置vuex为false
:::


#### 2、实现对一个实体进行增、删、改、查，并且带模拟数据
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```

#### 3、只需要增、删、改、查中得某些操作，可以指定生成你需要的方法
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    // 需要生成的方法，可以按需要设置
    methods: ['fetch', 'get', 'add', 'update', 'remove']
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```

#### 4、自定义方法配置
当有接口不合适归类为通用的增、删、改、查 或 接口响应数据格式较特别，可以使用自定义方法配置，如：用户登录

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user/login',
    methods: false,
    name: 'login',
    state: 'loginInfo',
    columns: {
      id: '@guid',
      name: '@cname',
      loginTime: '@date'
    }
  }
}
```
上述配置表示调用 login 方法 请求接口返回模拟数据，并存储到store对应实体对象的loginInfo属性里

:::tip
methods为false时，必须要设置name
:::

:::tip
vuex模式，methods为false，并且method为空时，必须要设置state
:::

:::tip
method的值必须是fetch get add update remove batch 中的一个
:::

#### 5、同一个实体模型配置多个方法

model支持Array的配置项, 以下示例配置了user的增、删、改、查，登录、注销接口

```javascript
module.exports = {
  vuex: true,
  model: [
    {
      path: '/api/users',
      columns: {
        id: '@guid',
        name: '@cname'
      }
    },
    {
      path: '/api/user/login',
      methods: false,
      state: 'loginInfo',
      name: 'login',
      columns: {
        id: '@guid',
        name: '@cname',
        loginTime: '@date'
      }
    },
    {
      path: '/api/user/logout',
      methods: false,
      state: 'logoutInfo',
      name: 'logout',
      columns: {
        logoutTime: '@date'
      }
    }
  ]
}

```

#### 6、自定义Ajax参数选项

当api要求特殊，不能通过全局配置来解决时，可以通过配置 `options` 对 ajax的参数进行设置, 如：

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user/login',
    options: {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
}
```

#### 7、自定义模拟数据模板

当需要模拟的数据不能通过定义列columns来满足需求时，可以自定义template， 如模拟一个树结构，需要编写一个模板函数，模板函数必须要在 `/src/mock/templates.js` 中定义，示范代码如下：

```javascript
/**
 * 模拟一个树结构
 * @param Mock Mock实例
 * @param url 请求的url
 * @param query 查询参数对象
 * @returns {{code: number, data: {list}, message: string}}
 */
export const createTree = function (Mock, url, query) {
  let root = Mock.mock({
    'list|30': [{
      'id|+1': 1,
      'label': '@ctitle',
      'parentId': null
    }]
  })
  let data = Mock.mock({
    'list|100': [{
      'id|+1': 31,
      'label': '@ctitle',
      'parentId': function () {
        return Math.floor(Math.random() * 50)
      }
    }]
  })
  return {code: 0, data: {list: root.list.concat(data.list)}, message: ''}
}
```

代码生成器配置

```javascript
module.exports = {
  vuex: true,
  model: [{
    path: '/api/menus/tree',
    methods: false,
    name: 'getTree',
    state: 'tree',
    template: 'createTree' // 调用模板生成模拟数据
  }]
}

```


#### 8、自定义数据转换函数

当需要后端接口响应的数据进行转换时，可以通过配置转换函数来处理。转换函数必须要在 `/src/mapping/index.js` 中定义
```javascript
/**
 * 数据转换函数示例
 * @param json 原始数据，即借口响应的json
 * @param method 接口调用方法名称
 * @param data 请求发送的数据对象
 * @param params 请求的url参数对象
 * @returns {*}
 */
export function dataMap (json, method, data, params) {
  // 对原始数据进行修改后，return 出去
  return json
}

```

代码生成器配置

```javascript
module.exports = {
  vuex: true,
  model: [{
    path: '/api/menus/tree',
    methods: false,
    name: 'getTree',
    state: 'tree',
    transform: 'dataMap' // 调用数据转换函数
  }]
}

```

### 9、指定请求接口地址前缀

请求接口地址前缀默认取全局配置的 pathPrefix ，如果有特殊接口，前缀与全局配置的不同时，可以在文件 `/src/config.js` 新增配置，然后在配置代码生成器。

```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    prefix: 'OTHER_PATH', // 设置与全局配置不同的前缀
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```

### 10、启用接口缓存功能
```javascript
module.exports = {
  vuex: true,
  model: {
    path: '/api/user',
    cache: true
  }
}
```
