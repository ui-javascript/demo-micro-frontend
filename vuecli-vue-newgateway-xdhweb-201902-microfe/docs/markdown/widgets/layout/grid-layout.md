## GridLayout 网格布局组件

:::tip
 基于 vue-grid-layout 封装的组件，文档：[xdh-grid-layout](#/src/widgets%2Fmodule-widgets_xdh-grid-layout.html)
:::

### 基础用法

:::demo
```html
<template>
    <xdh-grid-layout :layout="layout" is-draggable is-resizable>
      <div class="grid-item" slot-scope="scope">{{scope.item.i}}</div>
    </xdh-grid-layout>
</template>
<script>
 import XdhGridLayout from '@/widgets/xdh-grid-layout'

  export default {
    components: {
      XdhGridLayout
    },
    data() {
      return {
        layout: [
                  {'x': 0, 'y': 0, 'w': 8, 'h': 1, 'i': '0'},
                  {'x': 8, 'y': 0, 'w': 4, 'h': 1, 'i': '1'},
                  {'x': 0, 'y': 1, 'w': 4, 'h': 1, 'i': '2'},
                  {'x': 4, 'y': 1, 'w': 4, 'h': 1, 'i': '3'},
                  {'x': 8, 'y': 1, 'w': 4, 'h': 1, 'i': '4'}
         ]
      }
    },
    methods: {
      layoutUpdatedEvent(newLayout) {
        console.log('layoutUpdatedEvent', newLayout)
      }
    }
  }
</script>
<style lang="scss" scoped>
.grid-item {
   height: 100%;
   background: #ccc;
}
</style>
```
:::

### 个性化定义各网格内容

:::demo
```html
<template>
    <xdh-grid-layout :layout="layout">
      <div class="grid-item" slot-scope="scope">{{scope.item.i}}</div>

      <div class="grid-item red" slot="1">red</div>
      <div class="grid-item green" slot="3">green</div>

    </xdh-grid-layout>
</template>
<script>
 import XdhGridLayout from '@/widgets/xdh-grid-layout'

  export default {
    components: {
      XdhGridLayout
    },
    data() {
      return {
        layout: [
                  {'x': 0, 'y': 0, 'w': 8, 'h': 1, 'i': '0'},
                  {'x': 8, 'y': 0, 'w': 4, 'h': 1, 'i': '1'},
                  {'x': 0, 'y': 1, 'w': 4, 'h': 1, 'i': '2'},
                  {'x': 4, 'y': 1, 'w': 4, 'h': 1, 'i': '3'},
                  {'x': 8, 'y': 1, 'w': 4, 'h': 1, 'i': '4'}
         ]
      }
    },
    methods: {
      layoutUpdatedEvent(newLayout) {
        console.log('layoutUpdatedEvent', newLayout)
      }
    }
  }
</script>
<style lang="scss" scoped>
.grid-item {
   height: 100%;
   background: #ccc;
   &.red {
      background: red;
   }
   &.green {
      background: green;
   }
}
</style>
```
:::

### 高度自动适应父容器

:::demo
```html
<template>
<div style="height: 800px;">
    <xdh-grid-layout :layout="layout" fit-row is-draggable is-resizable>
       <template slot-scope="scope">
          <xdh-panel :title="scope.item.i" fit>
            {{JSON.stringify(scope.item)}}
          </xdh-panel>
        </template>
    </xdh-grid-layout>
</div>
</template>
<script>
 import XdhGridLayout from '@/widgets/xdh-grid-layout'

  export default {
    components: {
      XdhGridLayout
    },
    data() {
      return {
        layout: [
                  {'x': 0, 'y': 0, 'w': 8, 'h': 1, 'i': '0'},
                  {'x': 8, 'y': 0, 'w': 4, 'h': 1, 'i': '1'},
                  {'x': 0, 'y': 1, 'w': 4, 'h': 1, 'i': '2'},
                  {'x': 4, 'y': 1, 'w': 4, 'h': 1, 'i': '3'},
                  {'x': 8, 'y': 1, 'w': 4, 'h': 1, 'i': '4'}
         ]
      }
    },
    methods: {
      layoutUpdatedEvent(newLayout) {
        console.log('layoutUpdatedEvent', newLayout)
      }
    }
  }
</script>
<style lang="scss" scoped>
.grid-item {
   height: 100%;
   background: #ccc;
}
</style>
```
:::
