## Watermark 水印组件

### 基础用法。文档： [xdh-watermark](#/src/widgets%2Fmodule-widgets_xdh-watermark.html)
:::demo
```html
  <xdh-watermark style="width: 100%; height: 200px" :text="text">
    <p>页面内容，页面内容，页面内容，页面内容，页面内容</p>
    <p>页面内容，页面内容，页面内容，页面内容，页面内容</p>
    <p>页面内容，页面内容，页面内容，页面内容，页面内容</p>
  </xdh-watermark>
  <script>
    export default {
      data() {
        return {
          text: '323232'
        }
      },
      mounted() {
        setTimeout(()=>{
          this.text = '我是水印文字'
        }, 2000)
      }
    }
  </script>
```
:::

### 多行文本
:::demo
```html
  <xdh-watermark style="width: 100%; height: 200px" :text="['第一行文字', '第二行文字']">
    <p>页面内容，页面内容，页面内容，页面内容，页面内容</p>
    <p>页面内容，页面内容，页面内容，页面内容，页面内容</p>
    <p>页面内容，页面内容，页面内容，页面内容，页面内容</p>
  </xdh-watermark>
```
:::
