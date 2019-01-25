## 调用方式

代码生成器配置支持vuex 和 mixin 两种模式，调用方式不同，以下分别对两种模式进行调用说明。

### vuex 模式调用

如代码生成器架构配置，新建文件 `/coder/schemas/user.js`, 文件内容如下：

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

上述配置，生成代码后，创建了文件 `/src/base/types.js`， 可以在vue组件内import需要调用的action获取数据，并绑定到模板，如：

```html
<template>
  <div>
      <p v-for="item in user.list"> {{item.name}} </p>
  </div>
</template>
```
```javascript
import {mapState} from 'vuex'
import {FETCH_USER} from '@/base/types'
export default {
  computed: {
    ...mapState(['user'])
  },
  created() {
    // 触发获取列表的 action
    this.$store.dispatch(FETCH_USER,  {
      data: {
        page: 1,
        limit: 10
      }
    })
  }
}
```

也可以使用mapActions 简化调用, 如：

```javascript
import {mapState, mapActions} from 'vuex'
import {FETCH_USER} from '@/base/types'
export default {
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions({
        fetchUser: FETCH_USER
    })
  },
  created() {
    // 触发获取列表的 action
    this.fetchUser({
      data: {
        page: 1,
        limit: 10
      }
    })
  }
}
```
:::tip
注意： vuex 与 mixin模式的调用传参数的方式会有差别， vuex模式，只能传一个参数，参数必须是对象，ajax发送的参数是以data命名。 mixin模式调用方法支持多个参数
:::

请求接口缓存处理

```javascript
    // 开启缓存处理， 数据存储到内存
    this.fetchUser({
      data: {
        page: 1,
        limit: 10
      },
      cache: true,   // 可以是boolean值，或配置对象
      cache: {
        session: true,  // 保存到 sessionStorage
        local: true,    // 保存到 localStorage
        key: 'cachekey' // 自定义缓存key
      }
    })

```

### mixin 模式调用

如代码生成器架构配置，新建文件 `/coder/schemas/user.js`, 文件内容如下：

```javascript
module.exports = {
  vuex: false,  // 启用mixin模式
  model: {
    path: '/api/user',
    columns: {
      id: '@guid',
      name: '@cname'
    }
  }
}
```


上述配置，生成代码后，创建了文件 `/src/base/mixin/user.js`， 可以在vue组件内mixins方式继承 user 的方法获取数据，并绑定到模板，如：

```html
<template>
  <div>
      <p v-for="item in user.list"> {{item.name}} </p>
  </div>
</template>

```
```javascript
import user from '@/base/mixin/user'
export default {
  mixins: [user], // 混合集成 user
  created() {
    // 调用获取列表方法
    this.fetchUser({
      page: 1,
      limit: 10
    })
  }
}
```

请求接口缓存处理

```javascript
    // 开启缓存处理， 数据存储到内存
    this.fetchUser({
        page: 1,
        limit: 10
      }, {
        session: true,  // 保存到 sessionStorage
        local: true,    // 保存到 localStorage
        key: 'cachekey' // 自定义缓存key
      })

```


### 如何去掉模拟数据？

如果后端接口已完成，并且调试通过，或需要发布生产环境，需要删除模拟数据。 可以在 文件 `/src/main.js` 注释 以下代码。

```javascript

// 在不需要模拟数据时，注释以下代码
// import './mock/index'

```

