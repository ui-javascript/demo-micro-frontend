<script>

  import contextmenu from '@/utils/directives/contextmenu'

  export default {
    directives: {
      contextmenu: contextmenu
    },
    data() {
      return {
        menu1: [
          {
            text: '菜单A'
          },
          {
            icon: 'iconfont icon-role',
            text: '菜单B',
            divider: true,
            children: [
              {
                icon: 'iconfont icon-role',
                text: '菜单菜单菜单B-1'
              },
              {
                icon: 'iconfont icon-role',
                text: '菜单B-2'
              },
              {
                icon: 'iconfont icon-role',
                text: '菜单B-3'
              }
            ]
          },
          {
            icon: 'iconfont icon-role',
            text: '菜单C'
          }
        ]
      }
    },
    methods: {
      click1(item, vm, event) {
        this.$message({
          type:'success',
          message:'点击了： '+item.text
        })
        // 处理点击菜单后的触发动作
      }
    }

  }
</script>
<style lang="scss" scoped type="text/css">
  .action-box {
    height: 150px;
    width: 100%;
    text-align: center;
    line-height: 150px;
    font-size: 3rem;
    background-color: #eee;
    color: #fff;
    font-weight: bold;
  }
</style>
## 鼠标右键菜单

### 基础用法。文档： [xdh-contextmenu](#/src/widgets%2Fmodule-widgets_xdh-contextmenu.html)
:::demo
```html
<template>
  <div>
    <xdh-contextmenu ref="contextmenus1" :data="menu1" @on-click="click1">
    </xdh-contextmenu>
    <div class="action-box" v-contextmenu:contextmenus1>
      右键触发区域
    </div>
  </div>
</template>

<script>
  import XdhContextmenu from '../widgets/xdh-contextmenu'
  import contextmenu from '../utils/directives/contextmenu'

  export default {
    components: {
      XdhContextmenu
    },
    directives: {
      contextmenu: contextmenu
    },
    data() {
      return {
        menu1: [
          {
            text: '菜单B'
          },
          {
            icon: 'iconfont icon-role',
            text: '菜单B',
            divider: true,
            children: [
              {
                icon: 'iconfont icon-role',
                text: '菜单菜单菜单B-1'
              },
              {
                text: '菜单B-2'
              },
              {
                icon: 'iconfont icon-role',
                text: '菜单B-3'
              }
            ]
          },
          {
            icon: 'iconfont icon-role',
            text: '菜单B'
          }
        ]
      }
    },
    methods: {
      click1(item, vm, event) {
        // 处理点击菜单后的触发动作
      }
    }

  }
</script>
```
:::

### 属性

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|data|菜单列表对象数组|array|-|-|
|prop|data属性数据映射|object|-|查看prop详情|
|theme|主题|string|default / bright|default|
|event-type|触发其显示的事件类型|string|事件名|contextmenu|
|auto-placement|自动切换显示方位|boolean|true / false|true|

### prop属性

映射参数匹配 data 属性的数据

|参数|说明|类型|默认映射值|
|----|----|----|----|
|id|数据唯一主键|string|id|
|icon|菜单字体图标|string|icon|
|text|菜单显示文字|string|text|
|children|子菜单集合|string|children|
|divider|底部是否有分隔线|string|divider|
|disabled|菜单是否禁用|string|disabled|
|autoHide|被点击后菜单是否自动隐藏|string|autoHide|

### data属性参数

对传入数据对应关系说明，与 prop 属性映射同步

|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|id|数据唯一主键|string / number|-|-|
|icon|菜单字体图标Class|string|-|-|
|text|菜单显示文字|string|-|-|
|children|子菜单集合|array|-|-|
|divider|底部是否有分隔线|boolean|true / false|false|
|disabled|菜单是否禁用|boolean|true / false|false|
|autoHide|被点击后菜单是否自动隐藏|boolean|true / false|true|


### 插槽

|name|说明|作用域对象
|----|----|----|
|text|用于自定义菜单项显示|item|

### 事件

|事件名称|说明|回调参数|
|----|----|----|
|on-click|菜单项被点击时触发|共4个参数，依次为: 点击的菜单项原始数据、菜单显示时附加传入的参数,默认为null、菜单的vm、菜单的event|
|on-mouseenter|鼠标移动到菜单上时触发的事件|共4个参数，依次为: 点击的菜单项原始数据、菜单显示时附加传入的参数,默认为null、菜单的vm、菜单的event|
|on-mouseleave|鼠标从菜单上离开时触发的事件|共4个参数，依次为: 点击的菜单项原始数据、菜单显示时附加传入的参数,默认为null、菜单的vm、菜单的event|
|on-show|菜单显示时触发的事件|菜单组件的 vm|
|on-hide|菜单隐藏时触发的事件|菜单组件的 vm|
|on-trigger|设定的事件被触发(event-type属性的事件)|触发 设定 事件区域的 vnode|

### 方法

|方法名|说明|参数|
|----|----|----|
|show|显示菜单|共2个参数,依次为：1、 { top: number, left: number }，top 和 left 均为菜单相对浏览器窗口的值（必填）; 2、附加参数（可选），触发操作菜单项时使用|
|hide|隐藏菜单|-|
|hideAll|隐藏所有菜单|-|
