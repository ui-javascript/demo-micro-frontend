<script>
import XdhFileInput from '@/widgets/xdh-file-input'
export default {
  components: {
    XdhFileInput
  },
  data() {
    return {
      fileName1: '',
      fileName2: ''
    }
  },
  methods: {
    fileChange(files) {
      // 获取选中文件数据
      console.log('当前选择文件数据', files)
    },
    fileUpload(files) {
      // 点击上传按钮触发
      console.log('开始上传文件', files)
      
    }
  }
};
</script>

## FileInput 上传输入框

适用于表单内部文件上传展示等,文档： [xdh-file-input](#/src/widgets%2Fmodule-widgets_xdh-file-input.html)

### 基础用法
:::demo
```html
<template>
  <xdh-file-input v-model="fileName1" @on-change="fileChange"></xdh-file-input>
</template>

<script>
  export default {
    data() {
      return {
        fileName1: ''
      }
    },
    methods: {
      fileChange(files) {
        // 获取选中文件数据
        console.log('当前选择文件数据', files)
      }
    }
  }
</script>
```
:::

### 限制上传类型
:::demo
```html
<template>
  <xdh-file-input v-model="fileName1" @on-change="fileChange" accept="image/gif, image/jpeg"></xdh-file-input>
</template>

<script>
  export default {
    data() {
      return {
        fileName1: ''
      }
    },
    methods: {
      fileChange(files) {
        // 获取选中文件数据
        console.log('当前选择文件数据', files)
      }
    }
  }
</script>
```
:::

### 同时上传多个文件
:::demo
```html
<template>
  <xdh-file-input v-model="fileName1" multiple></xdh-file-input>
</template>

<script>
  export default {
    data() {
      return {
        fileName1: ''
      }
    },
    methods: {}
  }
</script>
```
:::

### 显示上传按钮
:::demo
```html
<template>
  <xdh-file-input v-model="fileName2" @on-change="fileChange" upload  @on-upload="fileUpload"></xdh-file-input>
</template>

<script>
  export default {
    data() {
      return {
        fileName2: ''
      }
    },
    methods: {
      fileChange(files) {
        // 获取选中文件数据
        console.log('当前选择文件数据', files)
      },
      fileUpload(files) {
        // 点击上传按钮触发
        console.log('开始上传文件', files)
        
      }
    }
  }
</script>
```
:::

### 尺寸

:::demo
```html
<template>
  <div>
    <xdh-file-input v-model="fileName2" @on-change="fileChange" upload  @on-upload="fileUpload"></xdh-file-input>
    <br/>
    <br/>
    <xdh-file-input  size="medium" v-model="fileName2" @on-change="fileChange" upload  @on-upload="fileUpload"></xdh-file-input>
    <br/>
    <br/>
    <xdh-file-input  size="small" v-model="fileName2" @on-change="fileChange" upload  @on-upload="fileUpload"></xdh-file-input>
    <br/>
    <br/>
    <xdh-file-input  size="mini" v-model="fileName2" @on-change="fileChange" upload  @on-upload="fileUpload"></xdh-file-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fileName2: ''
      }
    },
    methods: {
      fileChange(files) {
        // 获取选中文件数据
        console.log('当前选择文件数据', files)
      },
      fileUpload(files) {
        // 点击上传按钮触发
        console.log('开始上传文件', files)
        
      }
    }
  }
</script>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| value | 绑定值 | String | - | - |
| accept | 上传的文件类型 | String | - | - |
| multiple | 同时选择多个文件 | Boolean | true / false | false |
| size | 输入框尺寸 | String | medium / small / mini | - |
| placeholder | 输入框占位文本 | String | - | 未选择任何文件 |
| upload | 显示上传按钮 | Boolean | true / false | false |

### 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-change | 上传文件变化时触发 | files 上传的文件数据对象 |
| on-upload | 点击上传时触发 | files 上传的文件数据对象 |
