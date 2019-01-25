## 快速上手

本节内容将介绍如何快速搭建页面及其路由配置

### 创建页面
我们在 <font color='#409EFF'>src/views/</font> 目录下新建vue格式页面文件。
#### 示例
新建 <font color='#409EFF'>demo.vue</font> , 写入以下内容:

```html
<template>
  <div>
    <h1>Hello This is Demo Page</h1>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    padding: 50px;
    margin: 0;
    text-align: center;
  }
</style>

<script>
  export default {}
</script>

```
### 添加路由
我们在 <font color='#409EFF'>src/router/</font> 目录下新建 js 格式路由文件, 配置路由后引入合并至
<font color='#409EFF'>src/router/routes.js</font>
:::tip
相关路由配置规则查看 <a href='https://router.vuejs.org/zh-cn/?_blank' target='_blank'>vue-router</a>,
此处建议按照功能模块分别建文件配置路由, 便于维护管理
:::

#### 示例
1. 新建 <font color='#409EFF'>demo.js</font> , 写入以下内容:
```javascript
const _import = require('../utils/view-import/' + process.env.NODE_ENV)

export default [
  {
    path: '/demo',
    component: _import('demo')
  }
]
```
2. 将 <font color='#409EFF'>src/router/demo.js</font> 引入
   <font color='#409EFF'>src/router/routes.js</font>, 如下:
 ```javascript
 import demoRouters from './demo'
 
 const _import = require('../utils/view-import/' + process.env.NODE_ENV)
 
 export default {
   routes: [
     ...demoRouters,
     {
       path: '/',
       component: _import('index')
     },
     {
       path: '/login',
       component: _import('login')
     },
     {
       path: '*',
       component: _import('404')
     }
   ]
 }
 ```
### 开始运行 
至此, 一个简单的demo页面访问配置搭建完成, 在工程目录运行如下命令启动开发模式：
```bash
npm run dev
```
:::tip 
提示<font color='green'> DONE  Compiled successfully </font> 后, 
通过浏览器访问 提示的地址运行开发环境了
:::
