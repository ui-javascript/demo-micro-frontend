## Admin 后台界面布局

:::tip
 用作通用后台管理系统界面布局，文档：[xdh-admin](#/src/widgets%2Fmodule-extension_xdh-admin.html)
:::

### 基础用法

常用的上下左右布局，适合菜单内容较多的情况使用， 需要了解
xdh-layout /
xdh-menu /
xdh-menu-toggle /
xdh-header /
xdh-nav-tabs /
xdh-breadcrumb
组件的使用

:::warning
本例子演示的菜单是非路由模式，在实际应用，建议用路由模式， 使用方式与docs站点一样，参考 `/docs/views/layout.vue`
:::

:::demo
```html
<template>
  <div style="height: 800px">
      <xdh-admin :header="header"
                 :menu="menu"
                 :tabs="tabs"
                 nav-type="tab"
                 @menu-select="handleMenuSelect"
                 @tab-remove="handleTabRemove"
                 @tab-click="handleTabClick"
                 footer-in-main
                 collapsible>
         <xdh-grid-layout fit-row :layout="[
          {i: '0', x: 0, y: 0, w: 3, h: 1},
          {i: '1', x: 3, y: 0, w: 3, h: 1},
          {i: '2', x: 6, y: 0, w: 3, h: 1},
          {i: '3', x: 9, y: 0, w: 3, h: 1},

          {i: '4', x: 0, y: 1, w: 12, h: 2},

          {i: '5', x: 0, y: 3, w: 6, h: 2},
          {i: '6', x: 6, y: 3, w: 6, h: 2},

          {i: '7', x: 0, y: 5, w: 12, h: 2}
         ]" :margin="[20,20]">
               <div class="item" slot-scope="scope"></div>
             </xdh-grid-layout>
      </xdh-admin>
  </div>

</template>

<script>
import XdhAdmin from 'E/xdh-admin'
import XdhGridLayout from '@/widgets/xdh-grid-layout'
export default {
  components: {
    XdhAdmin,
    XdhGridLayout
  },
  data() {
     return {
         breadcrumb: {
           data: [
             {
               text: '首页',
               to: '/'
             }, {
               text: '文章列表',
               to: '/list'
             }, {
               text: '详情',
               to: '/list/detail'
             }
           ]
         },
        header: {
          title: '系统名称',
          logo: require('D/assets/xdh.png'),
          layout: 'logo,title,nav,->,user,tool',
          userIcon: 'iconfont icon-user',
          userText: '超级管理员',
          nav: [
            {id:1, text:'首页'},
            {
              id:2,
              text: '我的工作台',
              children: [
                {id:21, text:'选项一'},
                {id:22, text:'选项二'}
              ]
            },
            {id:3, text:'消息中心'},
            {id:4, text:'订单管理'}
          ],
          tools: [{icon:'iconfont icon-exit', text:'退出'}]
        },
        menu: {
          data: [
            {id: 1, text: '导航一', icon:'el-icon-location'},
            {id: 2, text: '导航二', icon:'el-icon-menu'},
            {id: 3, text: '导航三', icon:'el-icon-document'},
            {id: 4, text: '导航四', icon:'el-icon-setting'}
          ]
        },
        tabs: {
          label: '首页',
          name: 'home',
          closable: false
        },
        text: '占位主体内容'
     }
  },
  methods: {
    setText(id) {
     const item = this.menu.data.find(n => {
        return n.id.toString() === id.toString()
     })
      if(item){
        this.text = item.text
      }else{
       this.text = '占位主体内容'
      }
    },
    handleMenuSelect(index) {
      this.setText(index)
    },
    handleTabRemove(name, selected) {
      this.setText(selected)
    },
    handleTabClick(tab) {
        this.setText(tab.name)
    }
  }

}
</script>

```
::::

### 简单页面上下布局 ( 常用分析页布局 )
:::tip
fixed-width 可开启页面内容区是否固定宽度

nav-type 和 breadcrumb 可设置面包屑
:::
:::demo
```html
<template>
 <div style="height: 800px">
   <xdh-admin :fixed="false"
               fixed-width
              :sidebar="false"
              :header="header">
         <xdh-grid-layout :layout="[
          {i: '0', x: 0, y: 0, w: 3, h: 1},
          {i: '1', x: 3, y: 0, w: 3, h: 1},
          {i: '2', x: 6, y: 0, w: 3, h: 1},
          {i: '3', x: 9, y: 0, w: 3, h: 1},

          {i: '4', x: 0, y: 1, w: 12, h: 2},

          {i: '5', x: 0, y: 3, w: 6, h: 2},
          {i: '6', x: 6, y: 3, w: 6, h: 2},

          {i: '7', x: 0, y: 5, w: 12, h: 2}
         ]" :margin="[20,20]">
               <div class="item" slot-scope="scope"></div>
             </xdh-grid-layout>
   </xdh-admin>
 </div>
</template>
<style scoped lang="scss">
  .item {
    height: 100%;
    background: #eee;
  }
</style>
```
:::

### 常用监控页布局

:::demo
```html
 <div style="height: 800px">
   <xdh-admin fixed collapsible>
         <xdh-grid-layout fit-row :layout="[
          {i: '0', x: 0, y: 0, w: 9, h: 2},
          {i: '1', x: 9, y: 0, w: 3, h: 1},
          {i: '2', x: 9, y: 1, w: 3, h: 1},
          {i: '3', x: 0, y: 2, w: 6, h: 1},
          {i: '4', x: 6, y: 2, w: 3, h: 1},
          {i: '5', x: 9, y: 2, w: 3, h: 1}
         ]" :margin="[20,20]">
               <div class="item" slot-scope="scope"></div>
             </xdh-grid-layout>
   </xdh-admin>
 </div>
</template>
```
:::



### 常用工作台布局

:::demo
```html
 <div style="height: 800px">
   <xdh-admin fixed collapsible>
         <xdh-grid-layout fit-row :layout="[
          {i: '0', x: 0, y: 0, w: 12, h: 1},

          {i: '1', x: 0, y: 1, w: 8, h: 2},
          {i: '2', x: 0, y: 3, w: 8, h: 3},

          {i: '3', x: 8, y: 1, w: 4, h: 1},
          {i: '4', x: 8, y: 2, w: 4, h: 2},
          {i: '5', x: 8, y: 4, w: 4, h: 2}
         ]" :margin="[20,20]">
               <div class="item" slot-scope="scope"></div>
             </xdh-grid-layout>
   </xdh-admin>
 </div>
</template>
```
:::
