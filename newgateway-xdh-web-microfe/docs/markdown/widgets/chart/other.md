<script>
  import XdhWaterwave from 'E/charts/other/xdh-waterwave'
  import dark from '@/widgets/xdh-echarts/themes/dark.js'

  export default {
    components: {
      XdhWaterwave
    },
    data() {
      return {
        theme: dark
      }
    }
  }
</script>

## 其它图表 Other

独立配置, **不兼容 Echart 相关配置**, 但可以使用 Echart 主题配色

### 水波图 xdh-waterwave

适用于动态数据占比等相关业务展示

#### 属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 数据名称 | String | - | - |
| height | 图形显示高度 | Number | - | 160 |
| percent | 数据占比量 | Number | - | 0 |
| theme | 主题颜色,两种方式：1.直接引入src/widgets/xdh-echarts/themes , 2.直接传入一个色值字符串，如：'red' '#d48265' | Object / String | - | - |

:::demo
```html
<template>
   <xdh-waterwave title="某某数据占比" :height="180"  :percent="43" :theme="theme"></xdh-waterwave>
</template>
<script>
  import XdhWaterwave from 'E/charts/other/xdh-waterwave'
  import dark from '@/widgets/xdh-echarts/themes/dark.js'

  export default {
    components: {
        XdhWaterwave
     },
    data() {
      return {
        theme: dark
    }
  }
</script>
```
:::
