<script>
  export default {
    data() {
      return {
        contentHeight: '150px',
        options1: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 20
          },
          xAxis: {
            show: false,
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        options2: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 20
          },
          xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            show: false,
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        }
      }
    }
  }
</script>

<style scoped>
  .card-box {
    display: flex;
    justify-content: space-between;
  }
</style>

## 图表卡片组件
### 基础用法
:::demo
```html
<template>
<el-row type="flex" :gutter="20" justify="space-between">

  <el-col :span="6">
    <xdh-chart-card title="总销售额"
                    total="¥ 126,560"
                    :content-height="contentHeight">
      <template slot="action">
        <el-tooltip content="统计全部销售额" placement="top" style="margin:0 10px;">
          <i class="el-icon-info"></i>
        </el-tooltip>
        <el-tooltip content="分享" placement="top">
          <i class="el-icon-share"></i>
        </el-tooltip>
      </template>
      <xdh-echarts :options="options1" width="100%" height="100%"></xdh-echarts>
      <template slot="footer">日销售额￥12,423</template>
    </xdh-chart-card>
  </el-col>

  <el-col :span="6">
    <xdh-chart-card title="访问量"
                    total="5,599"
                    :content-height="contentHeight">
      <xdh-echarts :options="options2" width="100%" height="100%"></xdh-echarts>
      <template slot="footer">日访问量1,234</template>
    </xdh-chart-card>
  </el-col>

  <el-col :span="6">
    <xdh-chart-card title="支付笔数"
                    total="6,650"
                    :content-height="contentHeight">
      <div>我是一段内容描述描述描述描述描述描述</div>
      <template slot="footer">转化率60%</template>
    </xdh-chart-card>
  </el-col>

  <el-col :span="6">
    <xdh-chart-card title="运营活动效果"
                    total="78%"
                    :content-height="contentHeight">
      <el-progress :percentage="78"></el-progress>
      <template slot="footer">周同比12%,日同比11%</template>
    </xdh-chart-card>
  </el-col>

</el-row>
</template>

<script>
  export default {
    data() {
      return {
        contentHeight: '150px',
        options1: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 20
          },
          xAxis: {
            show: false,
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {
            show: false
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        },
        options2: {
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 20
          },
          xAxis: {
            show: false,
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            show: false,
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }]
        }
      }
    }
  }
</script>
```
:::

### 新增属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 图表标题 | String | - | - |
| total | 图表总数 | String | - | - |
| shadow | 卡片阴影 | String | 'always', 'hover', 'never' | 'always' |
| contentHeight | 内容高度 | String | - | - |

### 插槽说明
| name | 说明                              |
| ------ | ---------------------------------------- |
| header | 卡片头部内容 |
| footer | 卡片底部内容 |
| action | 卡片头部右侧操作内容 |
| default | 卡片主体内容 |
