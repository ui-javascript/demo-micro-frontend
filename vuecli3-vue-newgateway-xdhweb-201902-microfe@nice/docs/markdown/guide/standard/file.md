## 结构

### 工程结构

对工程主要目录结构简单的介绍

|目录|类型|说明|
|----|----|----|
|build|文件夹|编译、发布工程源码|
|coder|文件夹|代码生成器|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schemas|文件夹|实体配置文件目录|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;templates|文件夹|实体文件生成配置模板|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config.js|js|代码生成器配置|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js|js|代码生成器入口|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schema.md|markdown|实体配置说明文档|
|config|文件夹|项目工程配置|
|dist|文件夹|项目打包后生成的文件目录，即发布需要的全部代码存放目录(此命名为默认配置)|
|examples|文件夹|demo工程运行后的文档源码目录|
|node_modules|文件夹|Node工具模块，通过npm run install 从 SVN export|
|release|文件夹|工程⾃动化持续集成脚本|
|src|文件夹|项目源码目录|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;assets|文件夹|静态资源、图片、字体|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base|文件夹|底层代码、由代码⽣成器⽣成|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components|文件夹|业务组件|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;helper|文件夹|项⽬级⼯具函数|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mapping|文件夹|数据转换层|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mock|文件夹|模拟数据模板|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;router|文件夹|路由|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;store|文件夹|数据状态管理|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style|文件夹|样式SCSS|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;utils|文件夹|公共⼯具、类、函数|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;views|文件夹|视图、⻚⾯|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;widgets|文件夹|公共基础组件|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.vue|vue|根组件|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config.js|js|项⽬全局配置⽂件|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;main.js|js|程序⼊⼝⽂件|
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;themes.js|js|用于实现在线主题切换配置|
|static|文件夹|静态资源，此目录下的所有文件都不会编译|
|test|文件夹|单元测试目录|
|index.html|html|项目HTML根模板|
|favicon.ico|ico|项目访问标签上的icon|
|余下些文件为 各工具的配置文件|

### VUE文件结构
 一个 vue 页面组件文件包含的基本代码块
```xml
<template>
  // 组件模板代码
</template>
<script>
  // 组件vue js 代码
  export default {
    name: 'demo'
  }
</script>
<style type="text/scss" lang="scss" scoped>
  // 组件局部样式代码
</style>
```
