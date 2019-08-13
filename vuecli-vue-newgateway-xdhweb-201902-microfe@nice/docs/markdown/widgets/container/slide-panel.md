## SlidePanel 滑动面板

### 基础用法。文档： [xdh-slide-panel](#/src/widgets%2Fmodule-widgets_xdh-slide-panel.html)

继承 xdh-panel 所有属性参数

:::demo
```html
<template>
  <div style="height: 500px; border:1px solid #ccc;">
    <xdh-slide-panel title="标题" icon="el-icon-setting" width="200px" :collapsed.sync="collapsed1"></xdh-slide-panel>
    <xdh-slide-panel title="标题" width="200px" :collapsed.sync="collapsed2" position="right"></xdh-slide-panel>
    <xdh-slide-panel title="标题" height="200px" width="50%" :collapsed.sync="collapsed3" position="top"></xdh-slide-panel>
    <xdh-slide-panel :title="null" height="200px" width="50%" :collapsed.sync="collapsed4" position="bottom"></xdh-slide-panel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed1: false,
      collapsed2: false,
      collapsed3: false,
      collapsed4: false
    }
  }
}
</script>
```
:::
