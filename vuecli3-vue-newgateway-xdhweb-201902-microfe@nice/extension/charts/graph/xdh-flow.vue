<template>
  <xdh-echarts :options="optionsSelf" v-bind="$attrs" v-on="$listeners"></xdh-echarts>
</template>

<script>
  import XdhEcharts from '@/widgets/xdh-echarts'

  /**
   * 流程图
   * @module extension/charts/graph/xdh-flow
   *
   */
  export default {
    name: 'XdhFlow',
    components: {
      XdhEcharts
    },
    /**
     * 属性参数 props
     *
     * @property {boolean} [open-flow = true] 开启流动效果
     * @property {boolean} [open-mouse = true] 节点开启鼠标响应
     * @property {object} [effect = {}] 流动效果配置 参数参考 http://echarts.baidu.com/option.html#series-lines.effect
     * @property {object} [lineStyle = {}] 连接线条配置 参数参考 http://echarts.baidu.com/option.html#series-graph.lineStyle
     * @property {object} options.graphic 设置背景相关信息
     * @link http://echarts.baidu.com/option.html#graphic
     * @property {array} data 数据节点集合 二维节点数组 内部存放 nodes 节点,请根据关标流动线路配置数据
     * @property data = [
     *                [nodes,nodes,nodes]   // 此处数组内部存放节点对象数据，会按照顺序连成一条线
     *                ...
     *              ]
     * @property {object} nodes 节点对象 当节点位置重复时，后面节点数据会替换之前的节点
     * @property {number} [nodes.type = 1] 节点类型  0 : 连线上的拐点等  1 : 起始节点
     * @property {array} nodes.value 节点位置坐标  根据设计图尺寸取 [x, y] ,注：左上角坐标为[0, 0]
     * @link 其它参考 http://echarts.baidu.com/option.html#series-graph.data
     *
     */
    props: {
      // 数据
      data: {
        type: Array
      },
      // 流动效果
      effect: {
        type: Object,
        default() {
          return {}
        }
      },
      // 连接线条
      lineStyle: {
        type: Object,
        default() {
          return {}
        }
      },
      // 节点开启鼠标响应
      openMouse: {
        type: Boolean,
        default: true
      },
      // 开启流动效果
      openFlow: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      optionsSelf() {
        let d = this.data
        // 各节点、直角的位置
        let nodes = []
        // 连接线条
        let links = []
        // 流动方向
        let flow = []
        // 缓存已画线条
        let cacheLinks = []
        // 缓存已描节点
        let cacheNodes = []

        // 相关数据处理
        d.forEach((item, index) => {
          let tempFlow = {
            name: '',
            coords: []
          }
          // 单组流动线条方向处理
          item.forEach((subItem, subIndex) => {
            // 当前标点
            let currentCoords = Array.isArray(subItem.value) ? subItem.value.join('_') : subItem.value
            let newName = subItem.name || currentCoords
            // 显示节点默认配置
            let defaultNodeStyle = {}
            // 判断节点是否已经存在
            if (!cacheNodes.includes(currentCoords)) {
              cacheNodes.push(currentCoords)
              // 描点
              if (subItem.type !== 0) {
                // 要显示节点默认配置
                defaultNodeStyle = {
                  symbolSize: 50
                }
              }
              nodes.push({
                name: newName,
                ...defaultNodeStyle,
                ...subItem
              })
            } else {
              // 更新之前节点相关信息替换成当前节点
              let tempN = nodes[cacheNodes.indexOf(currentCoords)].name
              links.forEach((link, linkIndex) => {
                if (link.source === tempN) {
                  links[linkIndex].source = newName
                } else if (link.target === tempN) {
                  links[linkIndex].target = newName
                }
              })
              // 显示的节点
              if (subItem.type !== 0) {
                defaultNodeStyle = {
                  symbolSize: 50
                }
              }
              nodes[cacheNodes.indexOf(currentCoords)] = {
                name: newName,
                ...defaultNodeStyle,
                ...subItem
              }
            }

            if (subIndex > 0) {
              // 连线
              let oldName = item[subIndex - 1].name || (Array.isArray(item[subIndex - 1].value) ? item[subIndex - 1].value.join('_') : item[subIndex - 1].value)
              let currentLink = `${oldName}-${newName}`
              if (!cacheLinks.includes(currentLink)) {
                cacheLinks.push(currentLink)
                links.push({
                  source: oldName,
                  target: newName
                })
              }
              // 流动点
              tempFlow.name += '-' + newName
            } else {
              tempFlow.name = newName
            }
            // 流动光标方向
            tempFlow.coords.push(subItem.value)
          })
          // 流动点
          flow.push(tempFlow)
        })

        let _options = {
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            show: false
          },
          xAxis: {
            show: false,
            silent: true,
            max: (value) => {
              return value.max * 1.1;
            },
            min: 0
          },
          yAxis: {
            inverse: true,
            show: false,
            silent: true,
            max: (value) => {
              return value.max * 1.15;
            },
            min: 0
          },
          series: [
            // 节点和线条层
            {
              name: 'node',
              zlevel: 2,
              type: 'graph',
              coordinateSystem: 'cartesian2d',
              symbolSize: 0,
              silent: !this.openMouse,
              label: {
                show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 18
                }
              },
              lineStyle: {
                type: 'dotted',
                width: 3,
                opacity: 1,
                ...this.lineStyle
              },
              nodes: nodes,
              links: links
            },
            // 流动箭头层
            {
              name: 'flow',
              coordinateSystem: 'cartesian2d',
              type: 'lines',
              silent: true,
              polyline: true,
              zlevel: 1,
              effect: {
                show: this.openFlow,
                // period: 10,
                trailLength: 0,
                symbolSize: 15,
                symbol: 'arrow',
                loop: true,
                ...this.effect
              },
              lineStyle: {
                opacity: 0
              },
              data: flow
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
