## Dock 程序坞

模拟 Mac OS 程序坞 动效

:::demo
```html
<template>
  <div class="wrapper" :style="{background: `url(${img})`}">

    <xdh-dock :data.sync="bottomItems" :item-size="itemSize" :sortable="sortable" placement="bottom">
      <template slot="item" slot-scope="{item, ratio}">
        <el-tooltip effect="dark" :content="item.name" placement="top" :open-delay="500">
          <span class="app" :class="item.icon" :style="getStyle(item, ratio)">
        </span>
        </el-tooltip>
      </template>
    </xdh-dock>

    <xdh-dock :data.sync="topItems" :item-size="itemSize" :sortable="sortable" placement="top">
      <template slot="item" slot-scope="{item, ratio}">
        <el-tooltip effect="dark" :content="item.name" placement="bottom" :open-delay="500">
          <span class="app" :class="item.icon" :style="getStyle(item, ratio)">
        </span>
        </el-tooltip>
      </template>
    </xdh-dock>

    <xdh-dock :data.sync="leftItems" :item-size="itemSize" :sortable="sortable" placement="left">
      <template slot="item" slot-scope="{item, ratio}">
        <el-tooltip effect="dark" :content="item.name" placement="right" :open-delay="500">
          <span class="app" :class="item.icon" :style="getStyle(item, ratio)">
        </span>
        </el-tooltip>
      </template>
    </xdh-dock>


    <xdh-dock :data.sync="rightItems" :item-size="itemSize" :sortable="sortable" placement="right">
      <template slot="item" slot-scope="{item, ratio}">
        <el-tooltip effect="dark" :content="item.name" placement="left" :open-delay="500">
          <span class="app" :class="item.icon" :style="getStyle(item, ratio)">
        </span>
        </el-tooltip>
      </template>
    </xdh-dock>

  </div>

</template>

<script>

  import XdhDock from '@/widgets/xdh-dock/xdh-dock.vue'
  import icons from '@/base/icons'
  import bg from 'E/xdh-login/images/login.jpg'

  export default {
    components: {
      XdhDock
    },
    data() {
      return {
        img:bg,
        topItems: this.getApp(10),
        bottomItems: this.getApp(10),
        leftItems: this.getApp(8),
        rightItems: this.getApp(8),
        itemSize: 50,
        sortable: {
          sort: true,
          group: {
            name: 'A',
            pull: true,
            put: true
          }
        }
      }
    },
    methods: {
      randomColor() {
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16)
      },
      getApp(count) {
        const start = Math.floor(Math.random() * 100)
        const apps = icons.slice(start, start + count)
        return apps.map(a => {
          return {
            icon: a,
            name: a,
            color: this.randomColor()
          }
        })
      },
      getStyle(item, ratio) {
        const size = this.itemSize * ratio
        return {
          background: item.color,
          fontSize: `${size}px`,
          lineHeight: `${size}px`
        }
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    position: relative;
    width: 100%;
    height: 600px;
  }

  .app {
    background: #0f74a8;
    color: #fff;
    font-size: 40px;
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 50px;
    border-radius: 5px;
    text-align: center;
  }


</style>

```
:::
