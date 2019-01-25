<script>
  import XdhFlow from 'E/charts/graph/xdh-flow'

  export default {
    components: {
      XdhFlow
    },
    data() {
      return {
        options1:{
          graphic: {
            type: 'image',
            top: 0,
            left: '70%',
            style: {
              image: 'http://echarts.baidu.com/images/favicon.png'
            }
          }
        },
        data1: [
             [
               {
                 name: '数据源',
                 value: [70, 160]
               },
               {
                 type: 0,
                 value: [135, 160]
               },
               {
                 type: 0,
                 value: [135, 250]
               },
               {
                 value: [200, 250]
               }
             ],
             [
               {
                 name: '数据源2',
                 value: [70, 160],
                 symbol: 'image://http://echarts.baidu.com/images/favicon.png'
               },
               {
                 name: '流转一',
                 value: [295, 160],
                 label: {
                   normal: {
                     position: 'top'
                   }
                 }
               },
               {
                 name: '流转二',
                 value: [390, 250],
                 label: {
                   normal: {
                     position: 'top'
                   }
                 }
               },
               {
                 type: 0,
                 value: [475, 250]
               },
               {
                 type: 0,
                 value: [475, 330]
               },
               {
                 name: '入库',
                 value: [680, 330],
                 // symbol: 'image://' + require('../assets/flow/icon-zhss.png'),
                 symbolSize: 50,
                 label: {
                   normal: {
                     position: 'right'
                   }
                 }
               }
             ]
         ]
      }
    }
  }
</script>

## 关系图 Graph

基于 Xdh-Echarts 组件对常用图表进行拓展封装, 按相应格式传入数据就能渲染, 同时兼容[Echarts](#/widgets/echarts)相关属性方法配置

### 流程图 xdh-flow

基于 ECharts Lines / graph 配置, 适用于数据流向,任务流程走向等相关业务展示

#### 私有属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| open-flow | 开启流动效果 | Boolean | - | true |
| open-mouse | 节点开启鼠标响应 | Boolean | - | true |
| line-style | 连接线条样式配置,参考 [http://echarts.baidu.com/option.html#series-graph.lineStyle](http://echarts.baidu.com/option.html#series-graph.lineStyle) | Object | - | - |
| effect | 流动效果配置,参考 [http://echarts.baidu.com/option.html#series-lines.effect](http://echarts.baidu.com/option.html#series-lines.effect) | Object | - | - |
| data | 节点数据二维数据,第二维度数组内部存放节点对象数据，会按照顺序连成一条线,data = [[nodes,nodes,nodes],...] | Object | - | - |


#### data 属性中 nodes 对象

当节点位置重复时，后面节点数据会替换之前的节点相关数据
参考 [http://echarts.baidu.com/option.html#series-graph.data](http://echarts.baidu.com/option.html#series-graph.data)
其它参数说明：
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| type | 节点类型, 0 : 连线上的拐点等  1 : 显示的节点 | Number | 0 / 1 | 1 |
| value | 节点位置坐标, 根据设计点位填写，左上角为 [0 , 0] | Array | - | - |


:::demo
```html
<template>
   <xdh-flow width="100%" height="300px" :options="options1" :data="data1"></xdh-flow>
</template>
<script>
  import XdhFlow from 'E/charts/graph/xdh-flow'
  export default {
    components: {
      XdhFlow
    },
    data() {
      return {
        options1:{
          // 可选用此配置设置背景 参考 http://echarts.baidu.com/option.html#graphic
          graphic: {
            type: 'image',
            top:0,
            left: '70%',
            style: {
              image: 'http://echarts.baidu.com/images/favicon.png'
            }
          }
        },
        data1: [
           [
             {
               name: '数据源',
               value: [70, 160]
             },
             {
               type: 0,
               value: [135, 160]
             },
             {
               type: 0,
               value: [135, 250]
             },
             {
               value: [200, 250]
             }
           ],
           [
             {
               name: '数据源2',
               value: [70, 160],
               symbol: 'image://http://echarts.baidu.com/images/favicon.png'
             },
             {
               name: '流转一',
               value: [295, 160],
               label: {
                 normal: {
                   position: 'top'
                 }
               }
             },
             {
               name: '流转二',
               value: [390, 250],
               label: {
                 normal: {
                   position: 'top'
                 }
               }
             },
             {
               type: 0,
               value: [475, 250]
             },
             {
               type: 0,
               value: [475, 330]
             },
             {
               name: '入库',
               value: [680, 330],
               symbolSize: 50,
               label: {
                 normal: {
                   position: 'right'
                 }
               }
             }
           ]
         ]
      }
    }
  }
</script>
```
:::

