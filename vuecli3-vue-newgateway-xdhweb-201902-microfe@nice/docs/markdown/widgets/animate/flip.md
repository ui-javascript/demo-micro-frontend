<script>
  export default {
    data() {
      return {
        todayTimer: null,
        todayTime: [],
        timer: null,
        firstNumber: 0,
        secondNumber: 0,
        baseTimer: null,
        baseNumber: 9
      }
    },
    methods: {
      // 9到0倒计时
      setBaseNumber() {
        this.baseTimer = window.setInterval(() => {
          this.baseNumber > 0 ? this.baseNumber-- : this.baseNumber = 9
        }, 1000)
      },
      setTimes() {
        // 计时器翻页
        this.timer = window.setInterval(() => {
          if (this.secondNumber < 9) this.secondNumber++
          else {
            if (this.secondNumber === 9) {
              this.firstNumber < 9 ? this.firstNumber++ : this.firstNumber = 0
            }
            this.secondNumber = 0
          }
        }, 1000)
      },
      // 设置当前时间翻页
      setTodayTime() {
        this.todayTimer = window.setInterval(() => {
          const time = new Date(),
            hours = this.zeroPadding(time.getHours()),
            minutes = this.zeroPadding(time.getMinutes()),
            seconds = this.zeroPadding(time.getSeconds());

          this.todayTime = hours.split('').concat(minutes.split('').concat(seconds.split('')))
        }, 1000)
      },
      // 补全0
      zeroPadding(num, digit = 2) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    },
    mounted() {
      this.setBaseNumber()
      this.setTimes()
      this.setTodayTime()
    },
    beforeDestroy() {
      window.clearInterval(this.timer)
      window.clearInterval(this.todayTimer)
      window.clearInterval(this.baseTimer)
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .timer .xdh-flip /deep/ {
    margin: 0 10px;
  }
</style>

## 翻牌时钟效果
### 基础用法
:::demo
```html
<template>
  <xdh-flip :number="baseNumber"></xdh-flip>
</template>

<script>
  import XdhFlipTimer from '../widgets/xdh-flip'

  export default {
    components: {
      XdhFlipTimer
    },
    data() {
      return {
        baseTimer: null,
        baseNumber: 9
      }
    },
    methods: {
      // 9到0倒计时
      setBaseNumber() {
        this.baseTimer = window.setInterval(() => {
          this.baseNumber > 0 ? this.baseNumber-- : this.baseNumber = 9
        }, 1000)
      }
    },
    mounted() {
      this.setBaseNumber()
    },
    beforeDestroy() {
      window.clearInterval(this.baseTimer)
    }
  }
</script>
```
:::

### 自定义尺寸和背景颜色
:::demo
```html
<template>
<div class="timer">
  <xdh-flip :number="firstNumber" size="mini"></xdh-flip>
  <xdh-flip :number="firstNumber" size="small"></xdh-flip>
  <xdh-flip :number="firstNumber"></xdh-flip>

  <xdh-flip :number="secondNumber" color="#008345"></xdh-flip>

  <xdh-flip :number="secondNumber"></xdh-flip>
</div>
</template>

<script>
  import XdhFlipTimer from '../widgets/xdh-flip'

  export default {
    components: {
      XdhFlipTimer
    },
    data() {
      return {
        timer: null,
        firstNumber: 0,
        secondNumber: 0,
        size: {
          fontSize: 100,
          width: 150,
          height: 100
        }
      }
    },
    methods: {
      setTimes() {
        // 计时器翻页
        this.timer = window.setInterval(() => {
          if (this.secondNumber < 9) this.secondNumber++
          else {
            if (this.secondNumber === 9) {
              this.firstNumber < 9 ? this.firstNumber++ : this.firstNumber = 0
            }
            this.secondNumber = 0
          }
        }, 1000)
      }
    },
    mounted() {
      this.setTimes()
    },
    beforeDestroy() {
      window.clearInterval(this.timer)
    }
  }
</script>
```
:::

### 显示时间
:::demo
```html
<template>
  <div class="timer">
      <xdh-flip v-for="(time,index) in todayTime" :key="index" :number="time"></xdh-flip>
  </div>
</template>

<script>
  import XdhFlipTimer from '../widgets/xdh-flip'

  export default {
    components: {
      XdhFlipTimer
    },
    data() {
      return {
        todayTimer: null,
        todayTime: []
      }
    },
    methods: {
      // 设置当前时间翻页
      setTodayTime() {
        this.todayTimer = window.setInterval(() => {
          const time = new Date(),
            hours = this.zeroPadding(time.getHours()),
            minutes = this.zeroPadding(time.getMinutes()),
            seconds = this.zeroPadding(time.getSeconds());

          this.todayTime = hours.split('').concat(minutes.split('').concat(seconds.split('')))
        }, 1000)
      },
      // 补全0
      zeroPadding(num, digit = 2) {
        let zero = '';
        for (let i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    },
    mounted() {
      this.setTodayTime()
    },
    beforeDestroy() {
      window.clearInterval(this.todayTimer)
    }
  }
</script>
```
:::

### 属性
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|number|要显示的数字,只能为0-9的正整数|String,Number|0~9|-|
|color|翻页时钟的背景色|String|-|#333|
|fontSize|翻页时钟的字体大小|String|-||
|size|翻页时钟的尺寸，支持三种|String|mini,small,medium|medium|
