<script>
import draggable from '@/utils/directives/draggable'
export default {
  directives: {
    draggable
  },
  data() {
    return {
      target: null
    }
  },
  mounted() {
    this.target = this.$refs.wrapper
  }

}
</script>

## v-draggable
元素拖拽指令

### 基础用法
:::demo
```html
<template>
  <div class="wrapper">
      <div class="box" v-draggable></div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 200px;
  position:relative;
}
.box {
  background: #ccc;
  height: 100px;
  width: 100px;
  position: absolute;
}
</style>
<script>
import draggable from '@/utils/directives/draggable'
export default {
  directives: {
    draggable
  }
}
</script>

```
:::

### 限制拖拽方向
:::demo
```html
<template>
  <div class="wrapper">
      <div class="box" v-draggable="{axis:'v'}">垂直方向</div>
      <div class="box" v-draggable="{axis:'h'}" style="left: 200px">水平方向</div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 200px;
  position:relative;
}
.box {
  background: #ccc;
  height: 100px;
  width: 100px;
  position: absolute;
}
</style>
<script>
import draggable from '@/utils/directives/draggable'
export default {
  directives: {
    draggable
  }
}
</script>

```
:::

### 克隆 与 回弹
:::demo
```html
<template>
  <div class="wrapper">
      <div class="box" v-draggable="{clone: true, revert: true}"></div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 200px;
  position:relative;
}
.box {
  background: #ccc;
  height: 100px;
  width: 100px;
  position: absolute;
}
</style>
<script>
import draggable from '@/utils/directives/draggable'
export default {
  directives: {
    draggable
  }
}
</script>

```
:::

### 限制范围
:::demo
```html
<template>
  <div class="wrapper" id="wrapper">
      <div class="box" v-draggable="{range: {left:0, top:0, width: 200, height:200}}"></div>
  </div>
</template>
```
:::
