<script>
  import XdhPieGauge from 'E/charts/pie/xdh-pie-gauge'
  import XdhPieSemiring from 'E/charts/pie/xdh-pie-semiring'

  export default {
    components: {
      XdhPieGauge,
      XdhPieSemiring
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
            '连云港': 1387
        },
        data2: {
           label: '核查',
           count: 321,
           total: 564
        }
      }
    }
  }
</script>

## 饼图 Pie

基于 Xdh-Echarts 组件对常用图表进行拓展封装,基于 ECharts Pie 配置, 按相应格式传入数据就能渲染, 同时兼容[Echarts](#/widgets/echarts)相关属性方法配置

### 多环饼图 xdh-pie-semiring

适用于多重数据占比排名展示

#### 拓展属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 显示数据,格式参考示例 | Object | - | - |

:::demo
```html
<template>
   <xdh-pie-semiring width="100%" height="300px" :data="data1"></xdh-pie-semiring>
</template>
<script>
  import XdhPieSemiring from 'E/charts/pie/xdh-pie-semiring'
  export default {
    components: {
      XdhPieSemiring
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
           '连云港': 1387
        }
      }
    }
  }
</script>
```
:::

### 单环饼图 xdh-pie-gauge

适用于单一类型数据占比展示等

#### 拓展属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 显示数据,格式参考示例 | Object | - | - |

:::demo
```html
<template>
   <xdh-pie-gauge width="100%" height="300px" :data="data2"></xdh-pie-gauge>
</template>
<script>
  import XdhPieGauge from 'E/charts/pie/xdh-pie-gauge'

  export default {
    components: {
      XdhPieGauge
    },
    data() {
      return {
        data2: {
           label: '核查',
           count: 321,
           total: 564
        }
      }
    }
  }
</script>
```
:::

