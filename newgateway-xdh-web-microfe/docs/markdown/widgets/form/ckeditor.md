## CKEditor5 编辑器

:::tip
  基于CKEditor5定制， 文档：[xdh-ckeditor](#/src/widgets%2Fmodule-widgets_xdh-ckeditor.html)
:::

### 基础用法

:::demo
```html
<template>
  <xdh-ckeditor v-model="value"></xdh-ckeditor>
</template>
<script>
import XdhCkeditor from '@/widgets/xdh-ckeditor'
export default {
  components: {
     XdhCkeditor
  },
  data() {
    return {
      value: 'Hello CKEditor'
    }
  }
}
</script>
```
:::

### 定义工具条
支持的工具包含：
```js
[
      'heading',
      'fontsize',
      'fontfamily',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'highlight',
      'alignment',
      'numberedList',
      'bulletedList',
      'link',
      'blockquote',
      'imageUpload',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo'
  ]
```
:::demo
```html
<template>
  <xdh-ckeditor v-model="value" toolbar="simple"></xdh-ckeditor>
   <br><br>
   <xdh-ckeditor v-model="value" toolbar="classic"></xdh-ckeditor>
   <br><br>
   <xdh-ckeditor v-model="value" toolbar="document"></xdh-ckeditor>
    <br><br>
   <xdh-ckeditor v-model="value" :toolbar="['fontsize','bold']"></xdh-ckeditor>
</template>
<script>
import XdhCkeditor from '@/widgets/xdh-ckeditor'
export default {
  components: {
     XdhCkeditor
  },
  data() {
    return {
      value: 'Hello CKEditor'
    }
  }
}
</script>
```
:::

### 只读

:::demo
```html
<template>
  <xdh-ckeditor value="Hello CKEditor" readonly></xdh-ckeditor>
</template>
<script>
import XdhCkeditor from '@/widgets/xdh-ckeditor'
export default {
  components: {
     XdhCkeditor
  }
}
</script>
```
:::
