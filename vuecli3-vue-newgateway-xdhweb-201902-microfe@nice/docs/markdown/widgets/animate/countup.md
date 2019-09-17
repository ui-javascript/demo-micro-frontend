<style lang="scss" scoped type="text/css">
  .countup-box {
    padding: 20px;
    font-size: 18px;
  }
</style>

<script>
  // 计数器

  export default {
    data() {
      return {
        startVal: 0,
        endVal: 500,
        message: null
      }
    },
    methods: {
      restart() {
        this.$refs.countup.restart()
      },
      start() {
        this.$refs.countup.start()
      },
      pauseResume() {
        this.$refs.countup.pauseResume()
      },
      reset() {
        this.$refs.countup.reset()
      },
      update() {
        this.$refs.countup.update()
      },
      handleComplete() {
        this.message = '计数完成！'
      }
    }
  }
</script>

## 计数器
### 基础用法
:::demo
```html
<template>
  <div style="width:800px;margin:0 auto;">
    <el-form :inline="true" style="margin-top:10px;">
      <el-form-item label="开始值">
        <el-input v-model.number="startVal"></el-input>
      </el-form-item>
      <el-form-item label="结束值">
        <el-input v-model.number="endVal"></el-input>
      </el-form-item>
    </el-form>

    <xdh-countup ref="countup"
                 :start-val="startVal"
                 :end-val="endVal"
                 @on-complete="handleComplete"></xdh-countup>

    <el-button @click="start">开始计数</el-button>
    <el-button @click="pauseResume">暂停/恢复</el-button>
    <el-button @click="reset">重置计数器</el-button>
    <el-button @click="update">更新计数器</el-button>
    <el-button @click="restart">重新启动计数器</el-button>

    <div>{{message}}</div>
  </div>
</template>

<style lang="scss" scoped type="text/css">
  .countup-box {
    padding: 20px;
    font-size: 18px;
  }
</style>

<script>
  // 计数器
  export default {
    data() {
      return {
        startVal: 0,
        endVal: 500,
        message: null
      }
    },
    methods: {
      restart() {
        this.$refs.countup.restart()
      },
      start() {
        this.$refs.countup.start()
      },
      pauseResume() {
        this.$refs.countup.pauseResume()
      },
      reset() {
        this.$refs.countup.reset()
      },
      update() {
        this.$refs.countup.update()
      },
      handleComplete() {
        this.message = '计数完成！'
      }
    }
  }
</script>
```
:::

### 属性
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|autoPlay|是否自动开始计数|Boolean|true / false|false|
|startVal|初始值|Number|-|0|
|endVal|结束值|Number|-|-|
|decimals|数值精度|Number|-|0|
|duration|动画持续时间，单位为秒|Number|-|2|
|useEasing|是否显示渐入渐出效果|Boolean|true / false|true|
|useGrouping|是否采用带格式的值，与separator搭配用|Boolean|true / false|true|
|separator|分隔值的符号|String|-|,|
|decimal|小数点的格式|String|-|.|
|prefix|计数器的前缀|String|-|-|
|suffix|计数器的后缀|String|-|-|

### 事件
|事件名称|说明|回调参数|
|----|----|----|
|on-complete|计数器计数完成时触发|-|

### 方法
|方法名|说明|参数|
|----|----|----|
|start|启动计数器|-|
|pauseResume|切换暂停/恢复计数器|-|
|reset|重置计数器|-|
|update|更新计数器的结束时间|共1个参数：计数结束值（必填）|
|restart|当重新设置参数时，需重新启动计数器按照最新的参数进行计数|-|
