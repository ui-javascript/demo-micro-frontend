<template>
  <xdh-echarts :options="optionsSelf" v-bind="$attrs" v-on="$listeners"></xdh-echarts>
</template>

<script>
  import XdhEcharts from '@/widgets/xdh-echarts'

  /**
   * 基础单线图
   * @module extension/charts/line/xdh-line-basic
   *
   * @example
   *
   * <xdh-line-basic width="100%" height="300px" :data="data"></xdh-line-basic>
   *
   * import XdhLineBasic from 'E/charts/line/xdh-line-basic'
   *
   * data:{
   *     '星期一': 2450,
   *     '星期二': 2250,
   *     '星期三': 2220,
   *     '星期四': 2142,
   *     '星期五': 800,
   *     '星期六': 1690,
   *     '星期日': 1590
   * }
   */
  export default {
    name: 'XdhLineBasic',
    components: {
      XdhEcharts
    },
    /**
     * 属性参数 props
     * @property {object} data 展示数据集合 key-value  key:类别名称 value:值 number
     * @property {boolean} [is-fill = false] 填充面积图
     */
    props: {
      data: {
        type: Object
      },
      isFill: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      optionsSelf() {
        let d = this.data
        // 数据计算
        let fill = {}, category = [], serverData = []
        Object.keys(d).forEach(key => {
          category.push(key)
          serverData.push(d[key])
        })
        if (this.isFill) {
          fill = {
            areaStyle: {}
          }
        }
        let _options = {
          xAxis: {
            boundaryGap: !this.isFill,
            type: 'category',
            data: category
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: serverData,
              type: 'line',
              ...fill
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
