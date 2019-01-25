
## async-img 异步图片

### 基础用法。
:::demo
```html
<template>
  <div>
    <h1>正常使用</h1>
    <p>xd-async-img 组件没有大小和其他样式，需要自行定义。图片以自适应的形式居中显示</p>
    <div class="wrap">
      <xdh-async-img style="width: 150px; height: 180px; border: 1px solid gray; margin: 30px" action="GET_ASYNC_IMAGE" id="000001"></xdh-async-img>
      <xdh-async-img style="width: 150px; height: 180px; border: 1px solid gray; margin: 30px" action="GET_ASYNC_IMAGE" id="000002"></xdh-async-img>
    </div>
    <h1>懒加载</h1>
    <div class="scroll-wrap">
      <p v-for="i in 30" :key=`a${i}`>{{i}}</p>
      <xdh-async-img style="width: 150px; height: 180px; border: 1px solid gray;" :lazy="true" action="GET_ASYNC_IMAGE" id="000003"></xdh-async-img>
      <p v-for="i in 30" :key=`b${i}`>{{i}}</p>
    </div>
  </div>
</template>
<style>
.wrap{
  display: flex;
  flex-flow: row nowrap;
  padding: 10px;
  border: 1px solid #ebebeb;
}
.scroll-wrap{
  height: 300px;
  overflow: auto;
  border: 1px solid #ebebeb;
}
</style>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    },
    mounted() {
    }
  }
</script>
```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| action | vuex加载图片的action | String | -  | 'GET_ASYNC_IMAGE' （需要配合代码生成器） |
| id | 获取图片的唯一ID，通常为接口的参数 | String | -  | - |
| default | 可以自定义pending图片 | String | - | - |
| lazy | 是否使用懒加载 | Number | - | - |