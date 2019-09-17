<script>
export default {
  data() {
    return {
      images: [],
      value: null
    }
  },
  created() {
    for(let i=0; i<20; i++) {
      this.images.push(require(`D/assets/icons/${(i+1)}.png`))
    }
  }
}
</script>

## ImagePicker 图片选择器

### 基础用法。文档： [xdh-image-picker](#/src/widgets%2Fmodule-widgets_xdh-image-picker.html)
:::demo
```html
<template>
  <xdh-image-picker :data="images" v-model="value"></xdh-image-picker>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      value: null
    }
  },
  created() {
    for(let i=0; i<20; i++) {
      this.images.push(require(`D/assets/icons/${(i+1)}.png`))
    }
  }
}
</script>
```
:::


### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 图片src数组| Array | - | - |
| size | 选择器尺寸 | String | 'large', 'small', 'default' | default |
| width | 下拉框的宽度 | Number | - | 260 |
| value | 选中项的值 | String | - | - |
| showClearBtn | 是否显示清除按钮 | Boolean | - | true |
| showOkBtn | 是否显示确定按钮 | Boolean | - | true |

### 插槽

| name | 说明 |
|-----|-----|
| - | 作用域插槽，定义下拉框中没一项的内容，参数：item，index |
| footer | 定义底部内容 |
| reference | 定义触发弹窗的按钮内容 |

### 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| click | 下拉框可选项目点击时触发 | item：被点击项|
| on-clear | 点击清除按钮时触发 | - |
| on-ok | 点击确定按钮时触发 | value：选中项 |
