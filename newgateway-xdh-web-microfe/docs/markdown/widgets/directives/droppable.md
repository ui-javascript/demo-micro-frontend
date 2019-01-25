## v-droppable

元素放置区指令

### 基础用法
:::demo
```html
<template>
  <div class="wrapper">
    <div class="box" v-draggable="{group:'a', clone:true}"></div>
    <div ref="drop" class="drop" v-droppable="{accept:'a',onDrop:onDrop}"></div>
  </div>
</template>
<style scoped>
.wrapper{
   height: 200px;
   position:relative;
}
.box {
  background: #ccc;
  height: 50px;
  width: 50px;
  position: absolute;
  z-index:2;
}
.drop {
  border:1px solid red;
  height: 100px;
  position:relative;
  top: 70px;
}
.xdh-droppable--enter{
  background:yellow;
}
</style>
<script>
import draggable from '@/utils/directives/draggable'
import droppable from '@/utils/directives/droppable'
export default {
  directives: {
    draggable,
    droppable
  },
  methods: {
    onDrop(e) {
      console.log('dropp!', e)
    }
  }
}
</script>
```
:::
