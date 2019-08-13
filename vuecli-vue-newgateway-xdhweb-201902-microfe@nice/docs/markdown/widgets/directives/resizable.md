## v-resizable

改变元素尺寸

### 基础用法
:::demo
```html
<template>
  <div class="resize" v-resizable></div>
</template>
<style>
.resize{
  width: 100px;
  height:100px;
  background: #ccc;
}
</style>
<script>
import resizable from '@/utils/directives/resizable'
export default {
  directives: {
    resizable
  }
}
</script>
```
:::

### 限制方向

:::demo
```html
<template>
  <div class="resize" v-resizable="{handles:'w,e'}"> 水平方向 </div>
  <p></p> <p></p>
  <div class="resize" v-resizable="{handles:'n,s'}"> 垂直方向 </div>
</template>
<style>
.resize{
  width: 100px;
  height:100px;
  background: #ccc;
}
</style>
<script>
import resizable from '@/utils/directives/resizable'
export default {
  directives: {
    resizable
  }
}
</script>
```
:::

### 限制尺寸
:::demo
```html
<template>
  <div class="resize" v-resizable="{minWidth: 100, minHeight:100, maxWidth: 200, maxHeight:200}"> </div>
</template>
<style>
.resize{
  width: 100px;
  height:100px;
  background: #ccc;
}
</style>
<script>
import resizable from '@/utils/directives/resizable'
export default {
  directives: {
    resizable
  }
}
</script>
```
:::
