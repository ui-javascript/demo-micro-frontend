<script>
export default {}
</script>
## 概述

Vue是一个以数据驱动的MVVM框架，在开发大型应用时，推荐使用Vuex作数据状态管理。前后端分离开发模式协作时也面临着对接口响应模拟数据需求。
根据Vue推荐的开发实践，在开发一个相对规模较大的应用，底层与后端交互时，代码分为以下几个部分：

| 代码块 | 说明 |
|----|----|
| api | 抽取出API请求 |
| store | 状态管理vuex，包含actions、mutations、modules、 mutation-types |
| mock | 模拟数据模板 |

在实践中，我们发现上述的代码重复率非常高，新增和修改都费力，并且是没技术含量的体力活。 但又必须要这样做，不适合以公共函数的形式重用，为了解决这个重复的体力活，我们开发了代码生成器，用工具来代替体力活。


对于前后端的数据交互都可以归纳为是对实体的 新增、修改、删除、查询。

代码生成器的原理是也是按照对实体的增、删、改、查规范，利用NodeJs根据接口的配置文件（包含请求路径、请求选项、状态管理、模拟数据）按指定模板创建符合Vue开发规范的js文件到工程指定目录下。

### 示例

以下通过一个用户的实体配置，讲解由代码生成器生成的代码文件

1、新建文件 `/coder/schemas/user.js` 以下配置实现用户的增、删、改、查接口调用、状态管理，并响应模拟数据

```javascript
module.exports = {
  vuex: true, // 是否采用vuex模式， 代码模式支持 vuex 和 mixin，false表示采用mixin模式

  // 实体模型
  model: {
    path: '/api/demo/user', // 请求实体api路径

    // 模拟实体属性字段数据
    columns: {
      id: '@guid',
      name: '@cname',
      email: '@email'
    }
  }
}
```

:::tip
新建实体配置文件必须要在/coder/schemas/目录下，可以建目录。
:::

2、运行命令 `npm run coder` 或 `npm run dev`  生成代码，代码文件目录在 `/src/base/`, 目录结构如下：

![Alt text](data:image/png;base64,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)


#### 生成文件代码片段

 /src/base/types.js
```javascript
// user
export const FETCH_USER = 'FETCH_USER'
export const GET_USER = 'GET_USER'
export const ADD_USER = 'ADD_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const REMOVE_USER = 'REMOVE_USER'
```

 /src/base/rules.js
```javascript
import user from '@/base/mock/user'
export default [...user]
```


 /src/base/modules.js
```javascript
import user from '@/base/store/user'
export default {user}
```

:::demo
```html
文件： /src/base/api/user.js
<script>
/*! create time: 2018-3-23 14:48:13 */

// ajax
import ajax from '@/utils/ajax'

/**
 * FETCH_USER
 * @type {string}
 */
export const FETCH_USER = '/api/demo/user/list'

/**
 * fetchUser
 * @param data
 * @returns {promise}
 */
export const fetchUser = function (data) {
  return ajax({
    method: 'get',
    data: data,
    url: FETCH_USER
  })
}

/**
 * GET_USER
 * @type {string}
 */
export const GET_USER = '/api/demo/user/info/:id'

/**
 * getUser
 * @param id
 * @param data
 * @returns {promise}
 */
export const getUser = function (id, data) {
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: GET_USER
  })
}

/**
 * ADD_USER
 * @type {string}
 */
export const ADD_USER = '/api/demo/user/save'

/**
 * addUser
 * @param data
 * @returns {promise}
 */
export const addUser = function (data) {
  return ajax({
    method: 'post',
    data: data,
    url: ADD_USER
  })
}

/**
 * UPDATE_USER
 * @type {string}
 */
export const UPDATE_USER = '/api/demo/user/update'

/**
 * updateUser
 * @param data
 * @returns {promise}
 */
export const updateUser = function (data) {
  return ajax({
    method: 'post',
    data: data,
    url: UPDATE_USER
  })
}

/**
 * REMOVE_USER
 * @type {string}
 */
export const REMOVE_USER = '/api/demo/user/delete/:id'

/**
 * removeUser
 * @param id
 * @param data
 * @returns {promise}
 */
export const removeUser = function (id, data) {
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: REMOVE_USER
  })
}
</script>
```
:::
###
:::demo
```html
文件： /src/base/mock/user.js
<script>
/*! create time: 2018-3-23 14:48:13 */

// FETCH_USER, GET_USER, ADD_USER, UPDATE_USER, REMOVE_USER
import {
  FETCH_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '@/base/api/user'

// Mock
export default [{
  title: 'FETCH_USER',
  url: FETCH_USER,
  params: {
    page: 1,
    limit: 10
  },
  template: {
    code: 0,
    data: {
      page: '{{page}}',
      limit: '{{limit}}',
      total: 1000,
      'list|{{limit}}': [{
        'id': '@guid'
      }]
    }
  }
}, {
  title: 'GET_USER',
  url: GET_USER,
  params: {},
  template: {
    code: 0,
    message: '',
    data: {
      'id': '@guid'
    }
  }
}, {
  title: 'ADD_USER',
  url: ADD_USER,
  params: {},
  template: {
    code: 0,
    message: '添加成功',
    data: {
      'id': '@guid'
    }
  }
}, {
  title: 'UPDATE_USER',
  url: UPDATE_USER,
  params: {},
  template: {
    code: 0,
    message: '更新成功',
    data: true
  }
}, {
  title: 'REMOVE_USER',
  url: REMOVE_USER,
  params: {},
  template: {
    code: 0,
    message: '删除成功',
    data: true
  }
}]
</script>
```
:::
###
:::demo
```html
文件： /src/base/store/user.js
<script>
/*! build time: 2018-3-23 14:48:13 */

// FETCH_USER, GET_USER, ADD_USER, UPDATE_USER, REMOVE_USER
import {
  FETCH_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '@/base/types'

// fetchUser, getUser, addUser, updateUser, removeUser
import {
  fetchUser,
  getUser,
  addUser,
  updateUser,
  removeUser
} from '@/base/api/user'

// store module
export default {
  state: {
    list: [],
    page: null,
    limit: null,
    total: 0,
    model: null
  },
  mutations: {
    [FETCH_USER](state, payload) {
      state.list = payload.list;
      state.page = payload.page;
      state.limit = payload.limit;
      state.total = payload.total;
    },
    [GET_USER](state, payload) {
      state.model = payload.model
    },
    [ADD_USER](state, payload) {
      if (payload.index !== undefined) {
        state.list.splice(payload.index, 0, payload.model)
      } else {
        state.list.push(payload.model);
      }
    },
    [UPDATE_USER](state, payload) {
      if (payload.index !== undefined) {
        state.list.splice(payload.index, 1, payload.model)
      }
    },
    [REMOVE_USER](state, payload) {
      if (payload.index !== undefined) {
        state.list.splice(payload.index, 1)
      }
    }
  },
  actions: {
    [FETCH_USER]({
      commit
    }, {
      data
    } = {}) {
      return fetchUser(data).then(res => {
        commit({
          type: FETCH_USER,
          list: res.list,
          page: Number.parseInt(res.page),
          limit: Number.parseInt(res.limit),
          total: Number.parseInt(res.total)
        })
        return res
      })
    },
    [GET_USER]({
      commit
    }, {
      id,
      data
    } = {}) {
      return getUser(id, data).then(res => {
        commit({
          type: GET_USER,
          model: res
        })
        return res
      })
    },
    [ADD_USER]({
      commit
    }, {
      data,
      index
    } = {}) {
      return addUser(data).then(res => {
        commit({
          type: ADD_USER,
          model: Object.assign({}, data, res),
          index: index
        })
        return res
      })
    },
    [UPDATE_USER]({
      commit,
      state
    }, {
      data,
      index
    } = {}) {
      return updateUser(data).then(res => {
        commit({
          type: UPDATE_USER,
          index: index,
          model: Object.assign({}, state.list[index], data, res)
        })
        return res
      })
    },
    [REMOVE_USER]({
      commit
    }, {
      id,
      data,
      index
    } = {}) {
      return removeUser(id, data).then(res => {
        commit({
          type: REMOVE_USER,
          index: index
        })
        return res
      })
    }
  }
}

</script>
```
:::

### 调用生成的代码

```javascript
  // 引入需要调用的方法名称
  import {FETCH_USER} from '@/base/types'

  export default {
    created() {
      // 触发vuex 的 action
      this.$store.dispatch(FETCH_USER, {
        data: {   // 传递参数需要在data中定义
          limit: 10,
          page: 1
        }
      }).then(res => {
        // 接口调用成功，并响应模拟数据，同时在 store.state.user 也保存着与res相同的数据
        console.log(res)
      })
    }
  }
```

:::tip
采用vuex模式生成的代码，vuex的state存储api成功响应的数据，如上述例子，在state中有一个对应的user属性，默认值是：

```
user = {
   list: [],    // 获取分页列表的实体数据将保存在这里
   page: null,  // 当前的页码
   limit: null, // 每页的数据条数
   total: 0,    // 数据总数
   model: null  // 获取单条实体记录保存到这里
}
```
:::
