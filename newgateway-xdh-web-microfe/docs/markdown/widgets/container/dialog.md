## Dialog 对话框

继承 Window, 参考window组件文档。文档： [xdh-dialog](#/src/widgets%2Fmodule-widgets_xdh-dialog.html)


### 基础用法

:::demo
```html
<template>
  <div>
    <el-button @click="closed1 = false">打开弹窗</el-button>
    <xdh-dialog :closed.sync="closed1" title="标题" width="400px" height="200px">
       我是内容...
    </xdh-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
       closed1: true
    }
  }
}
</script>
```
:::
