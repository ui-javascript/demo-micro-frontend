<template>
  <xdh-echarts ref="charts" :options="optionsSelf" v-bind="$attrs" v-on="$listeners"></xdh-echarts>
</template>

<script>
  import XdhEcharts from '@/widgets/xdh-echarts'

  /**
   * 多环饼图
   * @module extension/charts/pie/xdh-pie-semiring
   *
   * @example
   *
   * <xdh-gradient-bar :data="data" :options="options" :theme="themes"  style="width: 700px;height: 600px;"></xdh-gradient-bar>
   *
   * import XdhPieSemiring from 'extension/charts/pie/xdh-pie-semiring'
   * import themes from '../widgets/xdh-echarts/themes/shine'
   *
   * data:{
   *     '省纪委': 2450,
   *     '南京': 2250,
   *     '无锡': 2220,
   *     '徐州': 2142,
   *     '常州': 800,
   *     '苏州': 1690,
   *     '南通': 1590,
   *     '连云港': 1387,
   *     '扬州': 1189,
   *     '淮安': 1960,
   *     '宿迁': 2142
   * }
   */
  export default {
    name: 'XdhPieSemiring',
    components: {
      XdhEcharts
    },
    /**
     * 属性参数 props
     * @property {object} data 展示数据 key-value  key:类别名称 value:值 number
     */
    props: {
      data: {
        type: Object
      }
    },
    computed: {
      optionsSelf() {
        let d = this.data
        let tempCountList = [], datalist = [], legendData = [], _series = [], maxCount = 0, _radius = 10
        Object.keys(d).forEach(item => {
          tempCountList.push(d[item])
          datalist.push([item, d[item]])
        })
        maxCount = Math.max.apply(null, tempCountList) / 0.75
        datalist.sort((a, b) => {
          return b[1] - a[1]
        })
        _radius = (80 / datalist.length) > 10 ? 10 : 80 / datalist.length
        datalist.forEach((item, index) => {
          let _index = index + 1
          legendData.push(item[0])
          _series.push({
            name: index,
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [(80 - _radius * _index) + '%', (80 - _radius * index - 1) + '%'],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            data: [
              {
                name: item[0],
                value: item[1]
              },
              {
                value: maxCount - item[1],
                itemStyle: {opacity: 0},
                tooltip: {
                  show: false
                }
              }
            ]
          })
        })
        return (echart, vm) => {
          const _chartH = vm.chart.getHeight()
          let local = {
            left: '50%',
            top: '10.4%',
            padding: [0, 5, 5, 5],
            borderWidth: 0,
            itemHeight: (_radius - 0.8) * _chartH / 200,
            itemGap: _chartH * 0.004
          }
          if (datalist.length > 10) {
            local = {
              right: '5%'
            }
          }
          let _options = {
            legend: {
              ...local,
              type: 'scroll',
              orient: 'vertical',
              data: legendData
            },
            tooltip: {
              trigger: 'item',
              formatter: (params) => {
                return params.name + ': ' + params.value + '(' + (params.percent + 25) + '%)'
              }
            },
            series: _series
          }
          if (this.$attrs.options) {
            _options = Object.assign({}, _options, (typeof this.$attrs.options === 'function' ? this.$attrs.options(echart, vm) : this.$attrs.options) || {})
          }
          return _options
        }
      }
    }
  }
</script>

<style scoped>

</style>
