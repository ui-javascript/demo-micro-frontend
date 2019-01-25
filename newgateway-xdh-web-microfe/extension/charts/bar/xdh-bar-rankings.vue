<template>
  <xdh-echarts :options="optionsSelf" v-bind="$attrs" v-on="$listeners"></xdh-echarts>
</template>

<script>
  import XdhEcharts from '@/widgets/xdh-echarts'

  /**
   * 排行榜图
   * @module extension/charts/bar/xdh-bar-rankings
   *
   * @example
   *
   * <xdh-gradient-bar :data="data" style="width: 700px;height: 600px;"></xdh-gradient-bar>
   *
   * import XdhBarRankings from 'extension/charts/bar/xdh-bar-rankings'
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
    name: 'XdhBarRankings',
    components: {
      XdhEcharts
    },
    /**
     * 属性参数 props
     * @property {object} data 展示数据集合 key-value  key:类别名称 value:值 number
     * @property {boolean} [is-order = false] 按顺序排列
     */
    props: {
      data: {
        type: Object
      },
      isOrder: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      optionsSelf() {
        let d = this.data
        // 数据计算
        let tempCountList = [], datalist = [], maxCount = 0
        Object.keys(d).forEach(item => {
          tempCountList.push(d[item])
          datalist.push([item, d[item]])
        })
        maxCount = Math.max.apply(null, tempCountList) * 1.2
        datalist.sort((a, b) => {
          return this.isOrder ? (b[1] - a[1]) : (a[1] - b[1])
        })
        datalist = datalist.map(item => {
          return [...item, maxCount - item[1]]
        })

        let _options = {
          dataset: {
            source: [
              ['product', 'count', 'total'],
              ...datalist
            ]
          },
          xAxis: {
            type: 'value',
            splitNumber: 9,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            nameLocation: 'start',
            nameGap: 9,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              type: 'bar',
              stack: 'chart',
              z: 3,
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              }
            },
            {
              type: 'bar',
              stack: 'chart',
              silent: true,
              itemStyle: {
                normal: {
                  color: (this.theme && this.theme.backgroundColor) || '#eee'
                }
              }
            }
          ]
        }
        return (echart, vm) => {
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
