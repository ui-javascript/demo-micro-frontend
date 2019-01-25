<template>
  <xdh-echarts :options="optionsSelf" v-bind="$attrs" v-on="$listeners"></xdh-echarts>
</template>

<script>
  import XdhEcharts from '@/widgets/xdh-echarts'

  /**
   * 堆叠多线图
   * @module extension/charts/line/xdh-line-stacked
   *
   * @example
   *
   * <xdh-line-stacked width="100%" height="300px" :data="data"></xdh-line-stacked>
   *
   * import XdhLineStacked from 'E/charts/line/xdh-line-stacked'
   *
   * data:{
   *       '类别一': {
   *        '星期一': 240,
   *         '星期二': 250,
   *        '星期三': 220,
   *        '星期四': 212,
   *        '星期五': 80,
   *        '星期六': 690,
   *        '星期日': 590
   *      },
   *      '类别二': {
   *        '星期一': 250,
   *        '星期二': 220,
   *        '星期三': 620,
   *        '星期四': 242,
   *        '星期五': 700,
   *        '星期六': 169,
   *        '星期日': 159
   *      },
   *      '类别三': {
   *       '星期一': 245,
   *        '星期二': 225,
   *        '星期三': 222,
   *       '星期四': 214,
   *        '星期五': 80,
   *        '星期六': 163,
   *        '星期日': 159
   *      }
   *    }
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
     * @property {boolean} [stacked = true] 数据堆叠
     */
    props: {
      data: {
        type: Object
      },
      isFill: {
        type: Boolean,
        default: false
      },
      stacked: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      optionsSelf() {
        let d = this.data
        // 数据计算
        let fill = {}, legend = [], category = [], tempServer = []
        if (this.isFill) {
          fill = {
            areaStyle: {}
          }
        }
        Object.keys(d).forEach(key => {
          if (!legend.includes(key)) legend.push(key)
          let tempData = []
          Object.keys(d[key]).forEach(key2 => {
            if (!category.includes(key2)) category.push(key2)
            tempData.push({
              name: key2,
              value: d[key][key2]
            })
          })
          tempServer.push({
            name: key,
            data: tempData,
            type: 'line',
            stack: this.stacked ? 'sum' : null,
            ...fill
          })
        })
        let _options = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: legend
          },
          xAxis: {
            boundaryGap: !this.isFill,
            type: 'category',
            data: category
          },
          yAxis: {
            type: 'value'
          },
          series: [
            ...tempServer
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
