<script>
  import china from '@/widgets/xdh-echarts/map/china.json'
  import dark from '@/widgets/xdh-echarts/themes/dark.js'

  function createData() {
    const texts = ['阿德', '紧凑', '语句', '区分', '高级', '实用', '阿德', '紧凑', '语句', '区分', '高级', '实用']
    return texts.map(item => {
      return {
        name: item,
        value: Math.ceil(Math.random() * 100)
      }
    })
  }
  var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
          '7a', '8a', '9a','10a','11a',
          '12p', '1p', '2p', '3p', '4p', '5p',
          '6p', '7p', '8p', '9p', '10p', '11p'];
  var days = ['Saturday', 'Friday', 'Thursday',
          'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

  var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
  export default {
    components: {},
    data() {
      return {
        geo: china,
        theme: dark,
        options5: {
          series: [{
              type: 'liquidFill',
              data: [0.6, 0.5, 0.4, 0.3]
          }]
        },
        options4: {
           tooltip: {},
           visualMap: {
               max: 20,
               inRange: {
                   color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
               }
           },
           xAxis3D: {
               type: 'category',
               data: hours
           },
           yAxis3D: {
               type: 'category',
               data: days
           },
           zAxis3D: {
               type: 'value'
           },
           grid3D: {
               boxWidth: 200,
               boxDepth: 80,
               viewControl: {
                   // projection: 'orthographic'
               },
               light: {
                   main: {
                       intensity: 1.2,
                       shadow: true
                   },
                   ambient: {
                       intensity: 0.3
                   }
               }
           },
           series: [{
               type: 'bar3D',
               data: data.map(function (item) {
                   return {
                       value: [item[1], item[0], item[2]],
                   }
               }),
               shading: 'lambert',

               label: {
                   textStyle: {
                       fontSize: 16,
                       borderWidth: 1
                   }
               },

               emphasis: {
                   label: {
                       textStyle: {
                           fontSize: 20,
                           color: '#900'
                       }
                   },
                   itemStyle: {
                       color: '#900'
                   }
               }
           }]
        },
        options3: {
           series: [
                    {
                      type: 'wordCloud',
                      shape: 'square',
                      rotationRange: [0, 90],
                      gridSize: 10,
                      sizeRange: [12, 60],
                      width: '100%',
                      height: '100%',
                      textStyle: {
                        normal: {
                          fontFamily: 'sans-serif',
                          fontWeight: 'bold',
                          color: function () {
                            return 'rgb(' + [
                              Math.round(Math.random() * 160),
                              Math.round(Math.random() * 160),
                              Math.round(Math.random() * 160)
                            ].join(',') + ')';
                          }
                        },
                        emphasis: {
                          shadowBlur: 10,
                          shadowColor: '#333'
                        }
                      },
                      data: createData()
                    }
                  ]
        },
        options1: {
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
              data: ['销量']
            },
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
        },
        options2: {
          title : {
              text: 'iphone销量',
              subtext: '纯属虚构',
              left: 'center'
          },
          tooltip : {
              trigger: 'item'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data:['iphone3','iphone4','iphone5']
          },
          visualMap: {
              min: 0,
              max: 2500,
              left: 'left',
              top: 'bottom',
              text:['高','低'],           // 文本，默认为数值文本
              calculable : true
          },
          toolbox: {
              show: true,
              orient : 'vertical',
              left: 'right',
              top: 'center',
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          series : [
              {
                  name: 'iphone3',
                  type: 'map',
                  mapType: 'china',
                  roam: false,
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name: '北京市',value: Math.round(Math.random()*1000)},
                      {name: '天津市',value: Math.round(Math.random()*1000)},
                      {name: '上海市',value: Math.round(Math.random()*1000)},
                      {name: '重庆市',value: Math.round(Math.random()*1000)},
                      {name: '河北省',value: Math.round(Math.random()*1000)},
                      {name: '河南省',value: Math.round(Math.random()*1000)},
                      {name: '云南省',value: Math.round(Math.random()*1000)},
                      {name: '辽宁省',value: Math.round(Math.random()*1000)},
                      {name: '黑龙江省',value: Math.round(Math.random()*1000)},
                      {name: '湖南省',value: Math.round(Math.random()*1000)},
                      {name: '安徽省',value: Math.round(Math.random()*1000)},
                      {name: '山东省',value: Math.round(Math.random()*1000)},
                      {name: '新疆省',value: Math.round(Math.random()*1000)},
                      {name: '江苏省',value: Math.round(Math.random()*1000)},
                      {name: '浙江省',value: Math.round(Math.random()*1000)},
                      {name: '江西省',value: Math.round(Math.random()*1000)},
                      {name: '湖北省',value: Math.round(Math.random()*1000)},
                      {name: '广西省',value: Math.round(Math.random()*1000)},
                      {name: '甘肃省',value: Math.round(Math.random()*1000)},
                      {name: '山西省',value: Math.round(Math.random()*1000)},
                      {name: '内蒙古自治区',value: Math.round(Math.random()*1000)},
                      {name: '陕西省',value: Math.round(Math.random()*1000)},
                      {name: '吉林省',value: Math.round(Math.random()*1000)},
                      {name: '福建省',value: Math.round(Math.random()*1000)},
                      {name: '贵州省',value: Math.round(Math.random()*1000)},
                      {name: '广东省',value: Math.round(Math.random()*1000)},
                      {name: '青海省',value: Math.round(Math.random()*1000)},
                      {name: '西藏省',value: Math.round(Math.random()*1000)},
                      {name: '四川省',value: Math.round(Math.random()*1000)},
                      {name: '宁夏省',value: Math.round(Math.random()*1000)},
                      {name: '海南省',value: Math.round(Math.random()*1000)},
                      {name: '台湾省',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)},
                      {name: '澳门特别行政区',value: Math.round(Math.random()*1000)}
                  ]
              },
              {
                  name: 'iphone4',
                  type: 'map',
                  mapType: 'china',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name: '北京市',value: Math.round(Math.random()*1000)},
                      {name: '天津市',value: Math.round(Math.random()*1000)},
                      {name: '上海市',value: Math.round(Math.random()*1000)},
                      {name: '重庆市',value: Math.round(Math.random()*1000)},
                      {name: '河北省',value: Math.round(Math.random()*1000)},
                      {name: '安徽省',value: Math.round(Math.random()*1000)},
                      {name: '新疆省',value: Math.round(Math.random()*1000)},
                      {name: '浙江省',value: Math.round(Math.random()*1000)},
                      {name: '江西省',value: Math.round(Math.random()*1000)},
                      {name: '山西省',value: Math.round(Math.random()*1000)},
                      {name: '内蒙古自治区',value: Math.round(Math.random()*1000)},
                      {name: '吉林省',value: Math.round(Math.random()*1000)},
                      {name: '福建省',value: Math.round(Math.random()*1000)},
                      {name: '广东省',value: Math.round(Math.random()*1000)},
                      {name: '西藏省',value: Math.round(Math.random()*1000)},
                      {name: '四川省',value: Math.round(Math.random()*1000)},
                      {name: '宁夏省',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)},
                      {name: '澳门特别行政区',value: Math.round(Math.random()*1000)}
                  ]
              },
              {
                  name: 'iphone5',
                  type: 'map',
                  mapType: 'china',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name: '北京市',value: Math.round(Math.random()*1000)},
                      {name: '天津市',value: Math.round(Math.random()*1000)},
                      {name: '上海市',value: Math.round(Math.random()*1000)},
                      {name: '广东省',value: Math.round(Math.random()*1000)},
                      {name: '台湾省',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)}
                  ]
              }
          ]
        }
      }
    }
  }
</script>
## Echarts组件
ECharts组件, 提供Vue组件封装，异步加载echarts库, 内置了标签云扩展。文档： [xdh-echarts](#/src/widgets%2Fmodule-widgets_xdh-echarts.html)

### 基础用法

:::demo
```html
<template>
   <xdh-echarts :options="options1" width="100%" height="300px" toggle></xdh-echarts>
</template>
<script>
  export default {
    data() {
      return {
        options1: {
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
              data: ['销量']
            },
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
        }
      }
    }
  }
</script>
```
:::

:::tip
设置 toggle 可开启全屏切换
:::

### 地图应用
通过import 地图geoJson注册地图

:::demo
```html
<template>
  <xdh-echarts :options="options2"
               :geo="geo"
                map="china"
                width="100%"
                height="500px"></xdh-echarts>
</template>
<script>
  import china from '@/widgets/xdh-echarts/map/china.json'
  export default {
    data() {
      return {
        geo: china,
        options2: {
          title : {
              text: 'iphone销量',
              subtext: '纯属虚构',
              left: 'center'
          },
          tooltip : {
              trigger: 'item'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data:['iphone3','iphone4','iphone5']
          },
          visualMap: {
              min: 0,
              max: 2500,
              left: 'left',
              top: 'bottom',
              text:['高','低'],           // 文本，默认为数值文本
              calculable : true
          },
          toolbox: {
              show: true,
              orient : 'vertical',
              left: 'right',
              top: 'center',
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          series : [
              {
                  name: 'iphone3',
                  type: 'map',
                  mapType: 'china',
                  roam: false,
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name: '北京市',value: Math.round(Math.random()*1000)},
                      {name: '天津市',value: Math.round(Math.random()*1000)},
                      {name: '上海市',value: Math.round(Math.random()*1000)},
                      {name: '重庆市',value: Math.round(Math.random()*1000)},
                      {name: '河北省',value: Math.round(Math.random()*1000)},
                      {name: '河南省',value: Math.round(Math.random()*1000)},
                      {name: '云南省',value: Math.round(Math.random()*1000)},
                      {name: '辽宁省',value: Math.round(Math.random()*1000)},
                      {name: '黑龙江省',value: Math.round(Math.random()*1000)},
                      {name: '湖南省',value: Math.round(Math.random()*1000)},
                      {name: '安徽省',value: Math.round(Math.random()*1000)},
                      {name: '山东省',value: Math.round(Math.random()*1000)},
                      {name: '新疆省',value: Math.round(Math.random()*1000)},
                      {name: '江苏省',value: Math.round(Math.random()*1000)},
                      {name: '浙江省',value: Math.round(Math.random()*1000)},
                      {name: '江西省',value: Math.round(Math.random()*1000)},
                      {name: '湖北省',value: Math.round(Math.random()*1000)},
                      {name: '广西省',value: Math.round(Math.random()*1000)},
                      {name: '甘肃省',value: Math.round(Math.random()*1000)},
                      {name: '山西省',value: Math.round(Math.random()*1000)},
                      {name: '内蒙古省',value: Math.round(Math.random()*1000)},
                      {name: '陕西省',value: Math.round(Math.random()*1000)},
                      {name: '吉林省',value: Math.round(Math.random()*1000)},
                      {name: '福建省',value: Math.round(Math.random()*1000)},
                      {name: '贵州省',value: Math.round(Math.random()*1000)},
                      {name: '广东省',value: Math.round(Math.random()*1000)},
                      {name: '青海省',value: Math.round(Math.random()*1000)},
                      {name: '西藏省',value: Math.round(Math.random()*1000)},
                      {name: '四川省',value: Math.round(Math.random()*1000)},
                      {name: '宁夏省',value: Math.round(Math.random()*1000)},
                      {name: '海南省',value: Math.round(Math.random()*1000)},
                      {name: '台湾省',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)},
                      {name: '澳门特别行政区',value: Math.round(Math.random()*1000)}
                  ]
              },
              {
                  name: 'iphone4',
                  type: 'map',
                  mapType: 'china',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name: '北京市',value: Math.round(Math.random()*1000)},
                      {name: '天津市',value: Math.round(Math.random()*1000)},
                      {name: '上海市',value: Math.round(Math.random()*1000)},
                      {name: '重庆市',value: Math.round(Math.random()*1000)},
                      {name: '河北省',value: Math.round(Math.random()*1000)},
                      {name: '安徽省',value: Math.round(Math.random()*1000)},
                      {name: '新疆省',value: Math.round(Math.random()*1000)},
                      {name: '浙江省',value: Math.round(Math.random()*1000)},
                      {name: '江西省',value: Math.round(Math.random()*1000)},
                      {name: '山西省',value: Math.round(Math.random()*1000)},
                      {name: '内蒙古省',value: Math.round(Math.random()*1000)},
                      {name: '吉林省',value: Math.round(Math.random()*1000)},
                      {name: '福建省',value: Math.round(Math.random()*1000)},
                      {name: '广东省',value: Math.round(Math.random()*1000)},
                      {name: '西藏省',value: Math.round(Math.random()*1000)},
                      {name: '四川省',value: Math.round(Math.random()*1000)},
                      {name: '宁夏省',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)},
                      {name: '澳门特别行政区',value: Math.round(Math.random()*1000)}
                  ]
              },
              {
                  name: 'iphone5',
                  type: 'map',
                  mapType: 'china',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {name: '北京市',value: Math.round(Math.random()*1000)},
                      {name: '天津市',value: Math.round(Math.random()*1000)},
                      {name: '上海市',value: Math.round(Math.random()*1000)},
                      {name: '广东省',value: Math.round(Math.random()*1000)},
                      {name: '台湾省',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)},
                      {name: '香港特别行政区',value: Math.round(Math.random()*1000)}
                  ]
              }
          ]
        }
      }
    }
  }
</script>
```
:::

### 更换主题
:::demo
```html
<template>
   <xdh-echarts :theme="theme" :options="options1" width="100%" height="300px"></xdh-echarts>
</template>
<script>
  import dark from '@/widgets/xdh-echarts/themes/dark.js'
  export default {
    data() {
      return {
        theme: dark,
        options1: {
            title: {
              text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
              data: ['销量']
            },
            xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }]
        }
      }
    }
  }
</script>
```
:::

### ECharts GL
:::demo
```html
<template>
  <xdh-echarts :options="options4" gl height="400px"></xdh-echarts>
</template>
<script>
  var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
          '7a', '8a', '9a','10a','11a',
          '12p', '1p', '2p', '3p', '4p', '5p',
          '6p', '7p', '8p', '9p', '10p', '11p'];
  var days = ['Saturday', 'Friday', 'Thursday',
          'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

  var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
export default {
  data() {
    return {
      options4: {
           tooltip: {},
           visualMap: {
               max: 20,
               inRange: {
                   color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
               }
           },
           xAxis3D: {
               type: 'category',
               data: hours
           },
           yAxis3D: {
               type: 'category',
               data: days
           },
           zAxis3D: {
               type: 'value'
           },
           grid3D: {
               boxWidth: 200,
               boxDepth: 80,
               viewControl: {
                   // projection: 'orthographic'
               },
               light: {
                   main: {
                       intensity: 1.2,
                       shadow: true
                   },
                   ambient: {
                       intensity: 0.3
                   }
               }
           },
           series: [{
               type: 'bar3D',
               data: data.map(function (item) {
                   return {
                       value: [item[1], item[0], item[2]],
                   }
               }),
               shading: 'lambert',

               label: {
                   textStyle: {
                       fontSize: 16,
                       borderWidth: 1
                   }
               },

               emphasis: {
                   label: {
                       textStyle: {
                           fontSize: 20,
                           color: '#900'
                       }
                   },
                   itemStyle: {
                       color: '#900'
                   }
               }
           }]
      }
    }
  }
}
</script>
```
:::

### 标签云扩展
:::demo
```html
<template>
  <xdh-echarts :options="options3" word-cloud height="400px"></xdh-echarts>
</template>
<script>

export default {
  data() {
    return {
        options3: {
           series: [
                    {
                      type: 'wordCloud',
                      shape: 'square',
                      rotationRange: [0, 90],
                      gridSize: 10,
                      sizeRange: [12, 60],
                      width: '100%',
                      height: '100%',
                      textStyle: {
                        normal: {
                          fontFamily: 'sans-serif',
                          fontWeight: 'bold',
                          color: function () {
                            return 'rgb(' + [
                              Math.round(Math.random() * 160),
                              Math.round(Math.random() * 160),
                              Math.round(Math.random() * 160)
                            ].join(',') + ')';
                          }
                        },
                        emphasis: {
                          shadowBlur: 10,
                          shadowColor: '#333'
                        }
                      },
                      data: createData()
                    }
                  ]
        }
    }
  }
}

// 标签云选项
 {

    series: [{
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        maskImage: maskImage,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [12, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [-90, 90],
        rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },

        // Data is an array. Each array item must have name and value property.
        data: [{
            name: 'Farrah Abraham',
            value: 366,
            // Style of single text
            textStyle: {
                normal: {},
                emphasis: {}
            }
        }]
    }]
}

</script>
```
:::

### 液体充填扩展

参数相关文档 [echarts-liguidfill](#/libs/echarts-liguidfill)

:::demo
```html
<template>
  <xdh-echarts :options="options5" liquid-fill height="400px"></xdh-echarts>
</template>
<script>

export default {
  data() {
    return {
        options5: {
          series: [{
              type: 'liquidFill',
              data: [0.6, 0.5, 0.4, 0.3]
          }]
        }
    }
  }
}
</script>
```
:::

### 属性参数
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| geo | 需要注册的地图geoJson， 目录 /widgets/xdh-echarts/map 下包含全国各地的地图 | Object | -  | - |
| map | 需要注册的地图名称， map 和 geo 需要同时设置 | String | - | - |
| options | echarts 配置项 | Object | - | - |
| theme | 主题配置对象，目录 /widgets/xdh-echarts/themes 下包含几种主题供选择 | Object | - | - |
| width | 图表的宽度 | String | - | 100% |
| height | 图表的高度 | String | - | 100% |
| loading | 是否显示loading效果 | Boolean | - | false|
| group | 分组标识 | String/Number | - | - |

### 方法
| 方法名 | 说明 | 参数 |
|----|----|----|
| resize | 改变图表尺寸，在容器大小发生改变时将会自动调用。 | - |
| clear | 清空当前实例，会移除实例中所有的组件和图表。清空后调用 getOption 方法返回一个{}空对象。 | - |
| dispatchAction | 触发图表行为，例如图例开关legendToggleSelect, 数据区域缩放dataZoom，显示提示框showTip等等，更多见 action 和 events 的文档。 | payload |
| setGroup | 图表的分组，用于联动 | name |

### 事件
事件名称与ECharts保持一致， [http://echarts.baidu.com/api.html#events](http://echarts.baidu.com/api.html#events) 该文档描述了所有 ECharts 的事件列表

<br/>

***

<br/>

