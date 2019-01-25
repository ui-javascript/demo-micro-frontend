<script>
  import icons from '@/base/icons'
  export default {
    data() {
      return {
        icons: icons,
        value1: null,
        value2: null,
        value3: null
      }
    }
  }
</script>
## IconPicker 图标选择器

### 基础用法

:::demo
```html
<template>
  <xdh-icon-picker :data="icons" v-model="value1" size="large"></xdh-icon-picker>
  <xdh-icon-picker :data="icons" v-model="value2"></xdh-icon-picker>
  <xdh-icon-picker :data="icons" v-model="value3" size="small"></xdh-icon-picker>
</template>
<script>
  import icons from '@/base/icons'
  export default {
    data() {
      return {
        icons: icons,
        value1: null,
        value2: null,
        value3: null
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
