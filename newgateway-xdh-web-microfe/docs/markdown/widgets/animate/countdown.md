<script>
  import XdhCountdown  from '@/widgets/xdh-countdown'
  export default {
    components: {XdhCountdown},
    data() {
      return {
        style:'',
        target1:new Date().getTime() + 3900000,
        target2:new Date().getTime() + 70000
      }
    },
    methods: {
      format(time) {
        if(time <= 0) {
          this.style = 'color:#999999'
          return '倒计时结束!'
        }
        const fixedZero = val => {
          return val * 1 < 10 ? `0${val}` : val;
        }
        const s = Math.floor(time / 1000);
        return `倒计时: ${fixedZero(s)} 秒`
      },
      onChange(time) {
        if(time < 60000){
           this.style = 'color:#f56c6c'
        }else {
           this.style = 'color:#999999'
        }
      },
      onEnd() {
        console.log('倒计时结束')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .countdown{
    font-size: 32px;
  }
</style>

## 倒计时

### 基础用法。文档： [xdh-countdown](#/src/widgets%2Fmodule-widgets_xdh-countdown.html)

:::demo
```html
<template>
  <xdh-countdown :target="target1" @on-end="onEnd"/>
</template>

<script>
  import XdhCountdown from 'widgets/xdh-countdown'

  export default {
    components: {
      XdhCountdown
    },
    data(){
      return {
        target1:new Date().getTime() + 3900000
      }
    },
    methods: {
      onEnd() {
        console.log('倒计时结束')
      }
    }
  }
</script>

```
:::

### 自定义显示

:::demo
```html
<template>
  <xdh-countdown class="countdown" :style="style" :format="format" :target="target2" @on-end="onEnd" @on-change="onChange"/>
</template>

<script>
  import XdhCountdown from 'widgets/xdh-countdown'

  export default {
    components: {
      XdhCountdown
    },
    data(){
      return {
        style:'',
        target2:new Date().getTime() + 70000
      }
    },
    methods: {
      format(time) {
        if(time <= 0) {
          this.style = 'color:#999999'
          return '倒计时结束!'
        }
        const fixedZero = val => {
          return val * 1 < 10 ? `0${val}` : val;
        }
        const s = Math.floor(time / 1000);
        return `倒计时: ${fixedZero(s)} 秒`
      },
      onChange(time) {
        if(time < 60000){
           this.style = 'color:#f56c6c'
        }else {
           this.style = 'color:#999999'
        }
      },
      onEnd() {
        console.log('倒计时结束')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .countdown{
    font-size: 32px;
  }
</style>
```
:::


### 属性
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|target|目标时间|Date|-|-|
|format|时间格式化显示,回调参数：当前剩余间隔时间毫秒|Function|-|默认输出格式，hh:mm:ss|
|interval|倒计时间隔 单位 ms|Number|-|1000|

### 事件
|事件名称|说明|回调参数|
|----|----|----|
|on-change|倒计时跳动时触发|共1个参数：下一个显示时间毫秒|
|on-end|倒计时结束时触发|-|
