<script>
import clipboard from '@/utils/directives/clipboard'
export default {
  directives: {
    clipboard
  },
  data() {
    return {
      input: null,
      options: null,
      cutoptions: null
    }
  },
  mounted() {
    this.options = {
      target: this.$refs.input.$refs.input,
      action: 'copy',
      success: function (e) {
        console.log(`剪切板内容为：${e.text}`)
      }
    },
    this.cutoptions = {
      target: this.$refs.inputs.$refs.input,
      action: 'cut',
      success: function (e) {
        console.log(`剪切板内容为：${e.text}`)
      }
    }
  }

}
</script>

## v-clipboard
元素复制到粘贴板指令

### 基础用法
:::demo
```html
<template>
      <div>
        <el-button v-clipboard="'写在指令内的文本'">复制</el-button>
      </div>
</template>
<script>
import draggable from '@/utils/directives/clipboard'
export default {
  directives: {
    clipboard
  }
}
</script>

```
:::

### 复制输入框的内容
:::demo
```html
<template>
      <div>
        <el-input ref="input"></el-input>
        <el-button v-if="options" v-clipboard="options">复制</el-button>
      </div>
</template>
<script>
import clipboard from '@/utils/directives/clipboard'
export default {
  directives: {
    clipboard
  },
  data() {
    return {
      options: null
    }
  },
  mounted() {
    this.options = {
      target: this.$refs.input.$refs.input,
      action: 'copy',
      success: function (e) {
        console.log(`剪切板内容为：${e.text}`)
      }
    }
  }

}
</script>
```
:::

### 剪切输入框的内容
:::demo
```html
<template>
  <div>
    <el-input ref="inputs"></el-input>
    <el-button v-if="cutoptions" v-clipboard="cutoptions">剪切</el-button>
  </div>
</template>
<script>
import clipboard from '@/utils/directives/clipboard'
export default {
  directives: {
    clipboard
  },
  data() {
    return {
      options: null
    }
  },
  mounted() {
    this.options = {
      target: this.$refs.inputs.$refs.input,
      // 可以使用函数
      action: function () {
        return 'cut'
      },
      success: function (e) {
        console.log(`剪切板内容为：${e.text}`)
      }
    }
  }

}
</script>
```
:::
