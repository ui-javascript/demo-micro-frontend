<script>
export default {}
</script>

## 代码生成器

代码生成器为了用于 优化开发工程师在数据对接这块工作上过多的重复性代码劳动, 同时可以更好的统一管理接口请求。 <br/>
本节内容将介绍代码生成器的配置及页面对生成配置的调用


### 准备

1. 与服务端约定好接口请求地址前缀, 如: *http://192.168.1.8/api/* 

2. 约定好需要对接数据的模块对应接口及规则 <br /> 
  如: 约定一个登录接口 *http://192.168.1.8/api/login* <br/>
```javascript
  // 请求
  {
    name: '',
    password: ''
  }
  // 响应
  {
    code: 0,
    msg: '成功!',
    data:''
  }
```

3. 在工程 <font color='#409EFF'>src/config.js</font> 文件中, 定义一个常量。<br />
  如：
  ```javascript
  export const DEMO_API_HOST = 'http://192.168.1.8/api/'
  ```
  
4. 在工程 <font color='#409EFF'>coder/config.js</font> 文件中, 配置 **pathPrefix**。<br />
  如：
  ```javascript
  // api请求地址前缀
  pathPrefix: 'DEMO_API_HOST'
  ```
:::tip
接口请求地址可以后续开发过程中调整, 但是接口请求响应的数据格式应该尽量提前约定好, 形成接口文档。 <br />
**注：** 默认约定<br/>
数据传输：<font color='#409EFF'> application/json </font> <br />
响应格式：<font color='#409EFF'> {code:0, msg:'成功', data:{}} </font>
:::


### 配置

在工程 <font color='#409EFF'>coder/schemas</font> 目录下新建一个 js 文件。<br />

  示例: 新建一个demo.js文件 , 可以选择多种形式的配置，如下：
  
  1. 默认配置, 使用 VUEX , 即：**vuex:true***

  ```javascript
  // 用户管理相关接口配置  [user/list, user/info/:id, user/save, user/update, user/delete/:id]
  module.exports = {
    vuex: true,
    model: {
      path: 'user' // 接口地址路径，必须     
    }
  }
  ```
  2. 默认配置，使用 mixin , 即：**vuex:false**

  ```javascript
  // 用户管理相关接口配置  [user/list, user/info/:id, user/save, user/update, user/delete/:id]
  module.exports = {
    vuex: false,
    model: {
      path: 'user' // 接口地址路径，必须     
    }
  }
  ```
  3. 自定义配置, 即：**methods: false, name:'userLogin', state:'login'**

  ```javascript
  // 用户登录接口配置  [user/login]
  module.exports = {
    vuex: true,
    model: {
      path: 'login', // 接口地址路径，必须     
      methods: false, // 生成请求方法，默认全部，如需要自定义，设置为false
      name: 'userLogin', // 自定义方法名称，methods为false，必须要设置
      state: 'login' // 定义状态保存的名称，methods为false时设置
    }
  }
  ```
:::tip
配置文件的配置规则可以参考 <font color='#409EFF'> **coder/schema.md** </font> <br/>
***注** <br/> 
  默认配置会自动根据接口请求方式生成约定的接口及其请求函数, **一般固定形式的增删改查操作使用**，即： <br/>
  * 分页列表接口：<font color='#E6A23C'>path + '/list'</font> <br/>
  * 详情接口：<font color='#E6A23C'>path + '/info/:id'</font> <br/>
  * 保存接口：<font color='#E6A23C'>path + '/save'</font> <br/>
  * 更新接口：<font color='#E6A23C'>path + '/update'</font> <br/>
  * 删除接口：<font color='#E6A23C'>path + '/delete/:id'</font> <br/>
  
  自定义配置 **一般适用于单一URL形式的请求**   _如：登录/注销 接口的配置_ <br/> 
  vuex 方式 **适合需要跨页面组件共享数据，数据具备重用性**   _如：用户信息的数据_<br/>
  mixin 方式 **适合一次性的数据请求，数据不具备复用性**   _如：一般管理操作性数据_
:::
  
### 生成代码

打开命令行工具, 进入项目根目录文档，执行 *npm run coder* , 如下:
```shell
E:\demo\xdh-web\src> npm run coder
```
:::tip
执行完成后查看工程 <font color='#409EFF'> **src/base** </font> 目录下是否生成相应的文件? 更多内容查看页面底部  <font color='#409EFF'>番外</font>
:::

### 使用

现在就可以在  <font color='#409EFF'> src/views </font> 目录下的页面文件里使用此接口来获取方法了 <br/>
  例如：<br/>
  <br/>
  1. 在 <font color='#409EFF'>src/views/demo.vue</font> 文件中使用 **形式[1]** 配置用户接口, 代码如下：

```javascript
  <script>
    import {
      FETCH_DEMO // 列表,  可以填多个引入其它函数类型标识
    } from '../base/types'

    import {mapState} from 'vuex' // 引入mapState 获取demo 数据状态

    export default {
      name: 'demo.vue',
      components: {
        ...mapState(['demo'])  // 通过扩展运算符将store.state.demo 映射到当前Vue的this对象上, 通过 this.demo 取值
      },
      directives: {},
      mixins: [],
      data() {
        return {}
      },
      computed: {},
      watch: {},
      methods: {},
      created() {
         // 获取 list 数据
        this.$store.dispatch(FETCH_DEMO).then(r => {
          // 成功,获取成功后的数据, 有两种方式, 1.直接取 res; 2.取刚才通过mapState 映射的 demo 状态数据,方式
          // 选用 VUEX 形式的接口，一般使用第2种方式获取数据, 即: this.demo
        }).catch(err => {
          // 失败
          this.$message(err.msg)
        })
      }
    }
  </script>

  // 同理,其它方法接口调用的方式 示例如下：

  // 增
  // 此处 index 条件为插入数据所在列表的位置下标，可选  
  this.$store.dispatch(ADD_DEMO, {
    data: {
      // 传入新增的对接接口字段和数据
    }
  },index).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })

  // 删
  // 此处 id 条件为删除数据主键, 和接口约定相关
  // 此处 index 条件为删除数据所在列表的位置下标，可选
  this.$store.dispatch(REMOVE_DEMO, id, {
    data: {
      // 传入删除接口的其它条件参数, 可选
    }
  },index).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })

  // 查
  // 此处 id 条件为修改数据主键, 和接口约定相关
  this.$store.dispatch(GET_DEMO, id,  {
    data: {
      // 传入查询接口的其它条件参数, 可选
    }
  }).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })

  // 改
  // 此处 index 条件为修改数据所在列表的位置下标，可选
  this.$store.dispatch(UPDATE_DEMO, {
    data: {
      // 传入需要修改的数据对象
    }
  },index).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  }) 
```

  2. 在 <font color='#409EFF'>src/views/demo.vue</font> 文件中使用 **形式[2]** 配置用户接口, 代码如下：

```javascript
<script>
  import demoMixin from '../base/mixin/demo' // 引入生成的 demo 实例

  export default {
    name: 'demo.vue',
    components: {},
    directives: {},
    mixins: [demoMixin], // 将 demoMinix 混入到当前实例, 然后可以通过 this. 的方式去调用demo里面的实例内容
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {
      // 获取list 数据, 调用 /mixin/demo.js 里面的fetchDemo 函数执行
      this.fetchDemo().then(res => {
        // 成功,获取成功后的响应数据 即 res
        // 通过 this.demo 可以取
      }).catch(err => {
        // 失败
        this.$message(err.msg)
      })
      }
    }
  </script>

  // 同理,其它方法接口调用的方式 示例如下：

  // 增
  // 此处 index 条件为插入数据所在列表的位置下标，可选
  this.addDemo({
    // 传入新增的对接接口字段和数据
  }, index).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })

  // 删
  // 此处 id 条件为删除数据主键,必填, 和接口约定相关
  // 此处 index 条件为删除数据所在列表的位置下标，可选
  this.removeDemo(id, {
    // 传入删除接口的其它条件参数, 可选
  }, index).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })

  // 查
  // 此处 id 条件为修改数据主键,必填, 和接口约定相关
  this.getDemo(id, {
    // 传入查询接口的其它条件参数, 可选
  }).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })

  // 改
  // 此处 index 条件为修改数据所在列表的位置下标，可选
  this.updateDemo({
    // 传入需要修改的数据对象
  }, index).then(res => {
    // 成功
  }).catch(err => {
    // 失败
  })
  
```

  3. 在 <font color='#409EFF'>src/views/login.vue</font> 文件中使用 **形式[3]** 配置登录接口, 代码如下：

```javascript
<script>
  import {USER_LOGIN} from '../base/types'   // 引入生成的demo.js store 文件
  import {mapState} from 'vuex' // 引入mapState 获取demo 数据状态

  export default {
    components: {
      ...mapState(['demo'])  // 通过扩展运算符将store.state.demo 映射到当前Vue的this对象上, 通过 this.demo 取值
    },
    data() {
      return {
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'}
          ]
        },
        loginForm: {
          account: '',
          password: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.$store.dispatch(USER_LOGIN, {
              data: {
                name: this.loginForm.account,
                password: this.loginForm.account
              }
            }).then(res => {
              // 登录成功,获取成功后的数据, 有两种方式, 1.直接取 res; 2.取刚才通过mapState 映射的 demo 状态数据,方式
            }).catch(err => {
              // 登录失败
              this.$message(err.msg)
            })
          }
        })
      }
    }
  }
</script>
```

<br/>
<br/>
<br/>
<br/>

---
### *番外*

解密运行完 *npm run coder* 命令后, XDH-WEB 到底怎么了?

  * 工程 <font color='#409EFF'> src/base </font> 目录下会生成一下堆文件<br />
    如: 上文例子中的 <font color='#409EFF'> coder/schemas/demo.js </font>,
        使用 **[1] [2]方式配置** ， 执行命令后,
        均会生成<font color='#409EFF'> src/base/api/demo.js </font>, 也是页面上的接口请求的汇总文件, 内容如下:
     
```javascript
// src/base/api/demo.js

// DEMO_API_HOST
import { DEMO_API_HOST } from '@/config'    // 引入定义好的接口请求前缀常量
// ajax
import ajax from '@/utils/ajax'   // 引入utils下定义的ajax方法文件

/**
 * FETCH_DEMO
 * @type {string}
 */
export const FETCH_DEMO = DEMO_API_HOST + 'login/list'  // 声明列表查询接口URL, 自动拼接上接口请求前缀

/**
 * fetchDemo
 * @param data
 * @returns {promise}
 */
export const fetchDemo = function (data) { // 声明列表查询函数
  return ajax({
    method: 'get',
    data: data,
    url: FETCH_DEMO
  })
}

/**
 * GET_DEMO
 * @type {string}
 */
export const GET_DEMO = DEMO_API_HOST + 'login/info/:id'  // 声明信息详情查询接口URL

/**
 * getDemo
 * @param id
 * @param data
 * @returns {promise}
 */
export const getDemo = function (id, data) {   // 声明详情查询函数
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: GET_DEMO
  })
}

/**
 * ADD_DEMO
 * @type {string}
 */
export const ADD_DEMO = DEMO_API_HOST + 'login/save'  // 声明数据保存接口URL

/**
 * addDemo
 * @param data
 * @returns {promise}
 */
export const addDemo = function (data) {  //  声明数据保存函数
  return ajax({
    method: 'post',
    data: data,
    url: ADD_DEMO
  })
}

/**
 * UPDATE_DEMO
 * @type {string}
 */
export const UPDATE_DEMO = DEMO_API_HOST + 'login/update'  // 声明数据更新接口URL

/**
 * updateDemo
 * @param data
 * @returns {promise}
 */
export const updateDemo = function (data) {  // 声明数据更新接口函数
  return ajax({
    method: 'post',
    data: data,
    url: UPDATE_DEMO
  })
}

/**
 * REMOVE_DEMO
 * @type {string}
 */
export const REMOVE_DEMO = DEMO_API_HOST + 'login/delete/:id'  // 声明数据删除接口URL

/**
 * removeDemo
 * @param id
 * @param data
 * @returns {promise}
 */
export const removeDemo = function (id, data) {  // 声明数据删除接口函数
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: REMOVE_DEMO
  })
}
```
如果是用 VUEX , 即 **配置方式[1]**, 还会生成
  <font color='#409EFF'> src/base/store/demo.js、 src/base/modules.js、src/base/types.js</font>

如果是用 mixin , 即 **配置方式[2]**, 则会生成
<font color='#409EFF'> src/base/mixin/demo.js</font>

不管哪种方式, 我们查看 <font color='#409EFF'> src/base/store/demo.js，src/base/mixin/demo.js</font> 文件后会发现它们会引用 <font color='#409EFF'> src/base/api/demo.js </font>里的函数， 代码如下：
```javascript
···
// fetchDemo, getDemo, addDemo, updateDemo, removeDemo
import {
  fetchDemo,
  getDemo,
  addDemo,
  updateDemo,
  removeDemo
} from '@/base/api/demo'

···
```
:::tip
  细心的小伙伴应该发现了，不管是选择哪种方式，都会生成一个 **mock 文件夹**, 
  如上, 生成 <font color='#409EFF'> src/base/mock/demo.js </font>, 这里其实就涉及到数据模拟相关的啦，可以看
  <a href='#/guide/mock'>数据模拟</a>章节的介绍
:::