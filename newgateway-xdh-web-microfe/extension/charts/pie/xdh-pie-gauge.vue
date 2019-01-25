<template>
  <xdh-echarts ref="charts" :options="optionsSelf" v-bind="$attrs" v-on="$listeners"></xdh-echarts>
</template>

<script>
  import XdhEcharts from '@/widgets/xdh-echarts'

  /**
   * 单环饼图
   * @module extension/charts/pie/xdh-pie-gauge
   *
   * @example
   *
   * <xdh-pie-gauge :data="data" style="width: 700px;height: 600px;"></xdh-gradient-bar>
   *
   * import XdhPieGauge from 'extension/charts/pie/xdh-pie-gauge.vue'
   *
   *  data: {
   *      label: '预约',
   *      count: 321,
   *      total: 564
   *  }
   */
  export default {
    name: 'XdhPieGauge',
    components: {
      XdhEcharts
    },
    /**
     * 属性参数 props
     * @property {object} data 展示数据
     * @property {string} data.label  数据名称
     * @property {number} data.count  数据数量
     * @property {number} data.total  数据占比的总量
     */
    props: {
      data: {
        type: Object
      }
    },
    computed: {
      optionsSelf() {
        let d = this.data
        let _options = {
          title: {
            show: true,
            text: d.label || ''
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
          },
          series: [
            // 中间显示占比文案
            {
              type: 'pie',
              hoverAnimation: false,
              silent: true,
              radius: '58%',
              startAngle: 233,
              labelLine: {
                normal: {
                  show: false
                }
              },
              label: {
                formatter: function (params) {
                  let value = params.value
                  if (value > 100000000) {
                    value = (value / 100000000).toFixed(2) + '亿'
                  } else if (value > 10000000) {
                    value = (value / 10000000).toFixed(2) + '千万'
                  } else if (value > 1000000) {
                    value = (value / 1000000).toFixed(2) + '百万'
                  } else if (value > 10000) {
                    value = (value / 10000).toFixed(2) + '万'
                  }
                  return '{top|' + value + '}\n' + params.name
                },
                rich: {
                  top: {
                    fontWeight: 'bold',
                    fontSize: 38 / 0.7
                  }
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: 18 / 0.7,
                  fontWeight: 'normal'
                }
              },
              data: [
                {
                  name: d.label,
                  value: d.count,
                  itemStyle: {
                    opacity: 0
                  }
                }
              ]
            },
            // 外环占比数据环
            {
              type: 'pie',
              hoverAnimation: false,
              radius: ['60%', '70%'],
              startAngle: 233,
              labelLine: {
                normal: {
                  show: false
                }
              },
              label: {
                normal: {
                  position: 'center'
                }
              },
              data: [
                {
                  name: d.label,
                  value: d.count,
                  label: {
                    show: false
                  }
                },
                {
                  value: d.total - d.count,
                  tooltip: {
                    show: false
                  },
                  itemStyle: {
                    color: 'rgba(0, 0, 0, .2)'
                  }
                },
                {
                  silent: true,
                  value: d.total / 4,
                  tooltip: {
                    show: false
                  },
                  itemStyle: {opacity: 0}
                }
              ]
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
