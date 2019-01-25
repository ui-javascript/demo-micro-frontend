<script>
  import XdhLineBasic from 'E/charts/line/xdh-line-basic'
  import XdhLineStacked from 'E/charts/line/xdh-line-stacked'

  export default {
    components: {
      XdhLineBasic,
      XdhLineStacked
    },
    data() {
      return {
        data1: {
          '星期一': 2450,
          '星期二': 2250,
          '星期三': 2220,
          '星期四': 2142,
          '星期五': 800,
          '星期六': 1690,
          '星期日': 1590
        },
        data2: {
           '类别一': {
             '星期一': 240,
             '星期二': 250,
             '星期三': 220,
             '星期四': 212,
             '星期五': 80,
             '星期六': 690,
             '星期日': 590
           },
           '类别二': {
             '星期一': 250,
             '星期二': 220,
             '星期三': 620,
             '星期四': 242,
             '星期五': 700,
             '星期六': 169,
             '星期日': 159
           },
           '类别三': {
             '星期一': 245,
             '星期二': 225,
             '星期三': 222,
             '星期四': 214,
             '星期五': 80,
             '星期六': 163,
             '星期日': 159
           }
        }
      }
    }
  }
</script>

## 折线图 Line

基于 Xdh-Echarts 组件对常用图表进行拓展封装,基于 ECharts Line 配置, 按相应格式传入数据就能渲染, 同时兼容[Echarts](#/widgets/echarts)相关属性方法配置

### 基础单线图 xdh-line-basic

适用于单条数据趋势展示等

#### 拓展属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 显示数据,格式参考示例 | Object | - | - |
| is-fill | 填充面积图 | Boolean | true/false | false |

:::demo
```html
<template>
   <xdh-line-basic width="100%" height="300px" :data="data1"></xdh-line-basic>
</template>
<script>
  import XdhLineBasic from 'E/charts/line/xdh-line-basic'
  export default {
    components: {
      XdhLineBasic
    },
    data() {
      return {
        data1: {
          '星期一': 2450,
          '星期二': 2250,
          '星期三': 2220,
          '星期四': 2142,
          '星期五': 800,
          '星期六': 1690,
          '星期日': 1590
        }
      }
    }
  }
</script>
```
:::

#### 填充面积图
:::demo
```html
<template>
   <xdh-line-basic width="100%" height="300px" is-fill :data="data1"></xdh-line-basic>
</template>
<script>
  import XdhLineBasic from 'E/charts/line/xdh-line-basic'
  export default {
    components: {
      XdhLineBasic
    },
    data() {
      return {
        data1: {
          '星期一': 2450,
          '星期二': 2250,
          '星期三': 2220,
          '星期四': 2142,
          '星期五': 800,
          '星期六': 1690,
          '星期日': 1590
        }
      }
    }
  }
</script>
```
:::

### 堆叠多线图 xdh-line-stacked

适用于多条数据总量趋势展示、多条数据对比展示等

#### 拓展属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 显示数据,格式参考示例 | Object | - | - |
| is-fill | 填充面积图 | Boolean | true/false | false |
| stacked | 数据堆叠 | Boolean | true/false | true |

:::demo
```html
<template>
   <xdh-line-stacked width="100%" height="300px" :data="data2"></xdh-line-stacked>
</template>
<script>
  import XdhLineStacked from 'E/charts/line/xdh-line-stacked'
  export default {
    components: {
      XdhLineStacked
    },
    data() {
      return {
        data2: {
          '类别一': {
            '星期一': 240,
            '星期二': 250,
            '星期三': 220,
            '星期四': 212,
            '星期五': 80,
            '星期六': 690,
            '星期日': 590
          },
          '类别二': {
            '星期一': 250,
            '星期二': 220,
            '星期三': 620,
            '星期四': 242,
            '星期五': 700,
            '星期六': 169,
            '星期日': 159
          },
          '类别三': {
            '星期一': 245,
            '星期二': 225,
            '星期三': 222,
            '星期四': 214,
            '星期五': 80,
            '星期六': 163,
            '星期日': 159
          }
        }
      }
    }
  }
</script>
```
:::

#### 堆叠面积图

:::demo
```html
<template>
   <xdh-line-stacked width="100%" height="300px" is-fill :data="data2"></xdh-line-stacked>
</template>
<script>
  import XdhLineStacked from 'E/charts/line/xdh-line-stacked'
  export default {
    components: {
      XdhLineStacked
    },
    data() {
      return {
        data2: {
          '类别一': {
            '星期一': 240,
            '星期二': 250,
            '星期三': 220,
            '星期四': 212,
            '星期五': 80,
            '星期六': 690,
            '星期日': 590
          },
          '类别二': {
            '星期一': 250,
            '星期二': 220,
            '星期三': 620,
            '星期四': 242,
            '星期五': 700,
            '星期六': 169,
            '星期日': 159
          },
          '类别三': {
            '星期一': 245,
            '星期二': 225,
            '星期三': 222,
            '星期四': 214,
            '星期五': 80,
            '星期六': 163,
            '星期日': 159
          }
        }
      }
    }
  }
</script>
```
:::

#### 不堆叠面积图

:::demo
```html
<template>
   <xdh-line-stacked width="100%" height="300px" is-fill :stacked="false" :data="data2"></xdh-line-stacked>
</template>
<script>
  import XdhLineStacked from 'E/charts/line/xdh-line-stacked'
  export default {
    components: {
      XdhLineStacked
    },
    data() {
      return {
        data2: {
          '类别一': {
            '星期一': 240,
            '星期二': 250,
            '星期三': 220,
            '星期四': 212,
            '星期五': 80,
            '星期六': 690,
            '星期日': 590
          },
          '类别二': {
            '星期一': 250,
            '星期二': 220,
            '星期三': 620,
            '星期四': 242,
            '星期五': 700,
            '星期六': 169,
            '星期日': 159
          },
          '类别三': {
            '星期一': 245,
            '星期二': 225,
            '星期三': 222,
            '星期四': 214,
            '星期五': 80,
            '星期六': 163,
            '星期日': 159
          }
        }
      }
    }
  }
</script>
```
:::
