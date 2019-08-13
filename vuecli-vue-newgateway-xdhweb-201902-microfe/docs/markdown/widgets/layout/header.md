## xdh-header 页面头部

<script>
export default {
  data() {
    return {
        searchTypes: [
          {label: '文本', value: '1'},
          {label: '图片', value: '2'}
        ],
        tools: [
          {id: 1, icon: 'iconfont icon-home', text: '首页'},
          {id: 2, icon: 'el-icon-setting', text: '设置'}
        ],
      nav: [{
             id: 1,
             text: '处理中心',
             icon: 'el-icon-goods'
           }, {
             id: 2,
             text: '我的工作台',
             icon: 'el-icon-setting',
             children: [{
               id: 21,
               text: '选项一',
               icon: 'el-icon-goods',
               children: [
                 {
                   id: 31,
                   text: '选项一',
                   icon: 'el-icon-goods'
                 }
               ]
             }, {
               id: 22,
               text: '选项二'
             }, {
               id: 23,
               text: '选项三'
             }]
           }, {
             id: 3,
             text: '消息中心',
             icon: 'el-icon-phone'
           }, {
             id: 4,
             text: '订单管理',
             icon: 'el-icon-news'
           }]
    }
  }
}
</script>

### 基础用法。文档： [xdh-header](#/src/widgets%2Fmodule-widgets_xdh-header.html)
:::demo
```html
<template>
 <xdh-header title="某某系统名称" layout="logo, title">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>
```
:::

### 显示导航菜单
:::demo
```html
<template>
 <xdh-header title="某某系统名称" layout="logo, title, nav" :nav="nav">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>
<script>
export default {
  data() {
    return {
      nav: [{
             id: 1,
             text: '处理中心',
             icon: 'el-icon-goods'
           }, {
             id: 2,
             text: '我的工作台',
             icon: 'el-icon-setting',
             children: [{
               id: 21,
               text: '选项一',
               icon: 'el-icon-goods',
               children: [
                 {
                   id: 31,
                   text: '选项一',
                   icon: 'el-icon-goods'
                 }
               ]
             }, {
               id: 22,
               text: '选项二'
             }, {
               id: 23,
               text: '选项三'
             }]
           }, {
             id: 3,
             text: '消息中心',
             icon: 'el-icon-phone'
           }, {
             id: 4,
             text: '订单管理',
             icon: 'el-icon-news'
           }]
    }
  }
}
</script>


```
:::
### 菜单居右
:::demo
```html
<template>
 <xdh-header title="某某系统名称" layout="logo, title, -> ,nav" :nav="nav">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>
<script>
export default {
  data() {
    return {
      nav: [{
             id: 1,
             text: '处理中心',
             icon: 'el-icon-goods'
           }, {
             id: 2,
             text: '我的工作台',
             icon: 'el-icon-setting',
             children: [{
               id: 21,
               text: '选项一',
               icon: 'el-icon-goods',
               children: [
                 {
                   id: 31,
                   text: '选项一',
                   icon: 'el-icon-goods'
                 }
               ]
             }, {
               id: 22,
               text: '选项二'
             }, {
               id: 23,
               text: '选项三'
             }]
           }, {
             id: 3,
             text: '消息中心',
             icon: 'el-icon-phone'
           }, {
             id: 4,
             text: '订单管理',
             icon: 'el-icon-news'
           }]
    }
  }
}
</script>

```
:::

### 显示搜索输入框
:::demo
```html
<template>
 <xdh-header title="某某系统名称" search-width="400px" :search-types="searchTypes" layout="logo, title, -> ,search">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>
<script>
export default {
  data() {
    return {
        searchTypes: [
          {label: '文本', value: '1'},
          {label: '图片', value: '2'}
        ],
        tools: [
          {id: 1, icon: 'iconfont icon-home', text: '首页'},
          {id: 2, icon: 'el-icon-setting', text: '设置'}
        ],
      nav: [{
             id: 1,
             text: '处理中心',
             icon: 'el-icon-goods'
           }, {
             id: 2,
             text: '我的工作台',
             icon: 'el-icon-setting',
             children: [{
               id: 21,
               text: '选项一',
               icon: 'el-icon-goods',
               children: [
                 {
                   id: 31,
                   text: '选项一',
                   icon: 'el-icon-goods'
                 }
               ]
             }, {
               id: 22,
               text: '选项二'
             }, {
               id: 23,
               text: '选项三'
             }]
           }, {
             id: 3,
             text: '消息中心',
             icon: 'el-icon-phone'
           }, {
             id: 4,
             text: '订单管理',
             icon: 'el-icon-news'
           }]
    }
  }
}
</script>

```
:::

### 显示用户信息和工具按钮

:::demo
```html
<template>
 <xdh-header title="某某系统名称"
             search-width="400px"
             :tools="tools"
              user-icon="iconfont icon-user"
              user-text="超级管理员"
             layout="logo, title ,search, -> ,user, tool">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>

```
:::

### 设置尺寸

:::demo
```html
<template>
 <xdh-header size="large"
             title="某某系统名称"
             search-width="300px"
             :tools="tools"
              user-icon="iconfont icon-user"
              user-text="超级管理员"
             layout="logo, title ,search, -> ,user, tool">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>

```
:::

:::demo
```html
<template>
 <xdh-header size="small"
             title="某某系统名称"
             search-width="400px"
             :tools="tools"
             :tool-inline="true"
              user-icon="iconfont icon-user"
              user-text="超级管理员"
             layout="logo, title ,search, -> ,user, tool">
   <img slot="logo" src="../../../assets/xdh.png">
 </xdh-header>
</template>

```
:::

