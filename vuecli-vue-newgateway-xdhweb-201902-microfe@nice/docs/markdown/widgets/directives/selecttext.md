<style lang="scss" scoped type="text/css">
  .action-area {
    height: 150px;
    line-height: 150px;
    width: 100%;
    text-align: center;
    background-color: #eee;
    font-weight: bold;
  }
</style>

<script>
  // 划词选择使用
  import selecttext from '@/utils/directives/selecttext'
  import XdhContextMenu from '@/widgets/xdh-contextmenu'

  export default {
    directives: {
      selecttext
    },
    components: {
      XdhContextMenu
    },
    data() {
      return {
        menuList: [{
          text: '菜单1'
        }, {
          text: '菜单3'
        }]
      }
    }
  }
</script>
## v-selecttext
划词选择弹出菜单

### 基础用法
:::demo
```html
<template>
  <div>
    <xdh-context-menu ref="selecttext" :data="menuList"></xdh-context-menu>

    <div class="action-area" v-selecttext:selecttext>
      我是一段文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
    </div>
  </div>
</template>

<style lang="scss" scoped type="text/css">
  .action-area {
    height: 150px;
    width: 100%;
    line-height: 150px;
    text-align: center;
    background-color: #eee;
    font-weight: bold;
  }
</style>

<script>
  // 划词选择使用
  import selecttext from '../utils/directives/selecttext'
  import XdhContextMenu from '../widgets/xdh-contextmenu'

  export default {
    directives: {
      selecttext
    },
    components: {
      XdhContextMenu
    },
    data() {
      return {
        menuList: [{
          text: '菜单1'
        }, {
          text: '菜单3'
        }]
      }
    }
  }
</script>
```
:::
