<script>
  export default {
    data() {
      return {
        container: null
      }
    },
    mounted() {
       this.container = document.getElementsByClassName('app-layout__content')[0]
    }
  }
</script>
## Affix 图钉组件

使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
注意，offset-top和offset-bottom只可以设置一个，如果都设置，会使用offset-top。
文档： [xdh-affix](#/src/widgets%2Fmodule-widgets_xdh-affix.html)

### 基础用法

:::demo 简单使用，当元素不可见时，直接固定在最顶端。
```html
<template>
   <xdh-affix :container="container">
     <div class="affix-demo">固定在最顶部</div>
   </xdh-affix>
</template>
<script>
  export default {
    data() {
      return {
        container: null
      }
    },
    mounted() {
       this.container = document.getElementsByClassName('app-layout__content')[0]
    }
  }
</script>
<style lang="scss">
  .affix-demo{
     background: green;
     color: #fff;
     height: 50px;
     line-height: 50px;
     padding-left: 20px
  }
</style>
```
:::

### 指定距离固定顶部

:::demo
```html
<template>
   <xdh-affix :container="container" :offset-top="100">
     <div class="affix-demo">在距离顶部100px固定</div>
   </xdh-affix>
</template>
<script>
  export default {
    data() {
      return {
        container: null
      }
    },
    mounted() {
       this.container = document.getElementsByClassName('app-layout__content')[0]
    }
  }
</script>
<style lang="scss">
  .affix-demo{
     background: green;
     color: #fff;
     height: 50px;
     line-height: 50px;
     padding-left: 20px
  }
</style>
```
:::

### 固定底部

:::demo
```html
<template>
  <xdh-affix :container="container" :offset-bottom="0">
    <div class="affix-demo">固定底部</div>
  </xdh-affix>
</template>
<script>
  export default {
    data() {
      return {
        container: null
      }
    },
    mounted() {
       this.container = document.getElementsByClassName('app-layout__content')[0]
    }
  }
</script>
<style lang="scss">
  .affix-demo{
     background: green;
     color: #fff;
     height: 50px;
     line-height: 50px;
     padding-left: 20px
  }
</style>
```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| container | 滚动可视区容器 | Window / HTMLElement | -  | window |
| offset-top | 距离窗口顶部达到指定偏移量后触发 | Number | -  | 0 |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | Number | - | - |

###  插槽

| name | 说明 |
|-----|-----|
| - | 定义需要固定的内容 |

### 方法

无

### 事件

| 事件名称 | 说明 | 回调参数 |
|----|----|----|
| change | 在固定状态发生改变时触发 | true/false |

