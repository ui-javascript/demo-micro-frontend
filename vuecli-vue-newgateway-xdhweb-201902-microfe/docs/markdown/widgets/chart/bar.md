<script>
  import XdhBarRankings from 'E/charts/bar/xdh-bar-rankings'

  export default {
    components: {
      XdhBarRankings
    },
    data() {
      return {
        data1: {
           '省纪委': 2450,
           '南京': 2250,
           '无锡': 2220,
           '徐州': 2142,
           '常州': 800,
           '苏州': 1690,
           '南通': 1590,
           '连云港': 1387,
           '扬州': 1189,
           '淮安': 1960
        }
      }
    }
  }
</script>

## 柱状图 Bar

基于 Xdh-Echarts 组件对常用图表进行拓展封装,基于 ECharts Bar 配置, 按相应格式传入数据就能渲染, 同时兼容[Echarts](#/widgets/echarts)相关属性方法配置

### 排行榜 xdh-bar-rankings

适用于数据排名展示等

#### 拓展属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 显示数据,格式参考示例 | Object | - | - |
| is-order | 按顺序排列 | Boolean | true/false | false |

:::demo
```html
<template>
   <xdh-bar-rankings width="100%" height="300px" :data="data1"></xdh-bar-rankings>
</template>
<script>
  import XdhBarRankings from 'E/charts/bar/xdh-bar-rankings'
  export default {
    components: {
      XdhBarRankings
    },
    data() {
      return {
        data1: {
           '省纪委': 2450,
           '南京': 2250,
           '无锡': 2220,
           '徐州': 2142,
           '常州': 800,
           '苏州': 1690,
           '南通': 1590,
           '连云港': 1387,
           '扬州': 1189,
           '淮安': 1960,
           '宿迁': 2142
        }
      }
    }
  }
</script>
```
:::
