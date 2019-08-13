## NavTabs 导航选项卡

### 基础用法

:::demo 导航tabs需要跨路由共享数据，通常需要使用store保存数据
```html
<template>
  <div>
    <el-button @click="handleAdd" style="margin-bottom:20px;">add</el-button>
    <xdh-nav-tabs label="首页" name="/widgets/nav-tabs#home" :closable="false" :store="store"></xdh-nav-tabs>
  </div>
</template>
<script>
  import createStoreModule from '@/widgets/xdh-nav-tabs/store'
  const STORE_NAME = 'nav-tabs-demo'

  export default {
    data() {
      return {
         store: STORE_NAME,
         count: 0
      }
    },
    methods: {
      handleAdd() {
        this.$store.commit({
          type: `${this.store}/push`,
          tab: {
            label: `Tab ${++this.count}`,
            name: `/widgets/nav-tabs#tab${this.count}`,
            closable: true
          }
        })
      }
    },
    created() {
      // 注册导航tabs store模块
      if (!this.$store.state[STORE_NAME]) {
        this.$store.registerModule(STORE_NAME, createStoreModule())
      }
    }
  }

</script>
```
:::

## 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| label | 显示文字 | String | - | - |
| name | 选项卡名称，通常设为路由的 path | String | - | - |
| closable | 是否能关闭 | Boolean | - | true |
| store | store的模块名称 | String | - | xdhNavTabs |
