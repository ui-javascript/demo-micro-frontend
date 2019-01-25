
## capture 快速截图

### 基础用法。文档： [xdh-capture](#/src/widgets%2Fmodule-widgets_xdh-capture.html)
:::demo
```html
<template>
  <div>
    <xdh-capture :options="opt"
                 :dom="capDom"
                 @on-capture="showDom"
                 @on-output="showTime">
      <el-button slot="button">屏幕截取</el-button>
    </xdh-capture>
    <img style="width:400px" src="https://t10.baidu.com/it/u=1804875816,1207727146&fm=173&app=25&f=JPEG?w=528&h=346&s=4A40CD19707A4B9AD099754C0300E070" alt=""/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        capDom: document.body,
        startTime: 0,
        opt: {
          width: 900,
          height: 900
        }
      }
    },
    methods: {
      showDom(dom) {
        this.startTime = new Date().getTime()
      },
      showTime(imgData) {
        let now = new Date().getTime();
        alert(`耗时: ${now - this.startTime}秒`)
      }
    }
  }
</script>
```
:::
