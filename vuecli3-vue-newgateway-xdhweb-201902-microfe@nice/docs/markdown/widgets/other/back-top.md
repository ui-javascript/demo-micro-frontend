## BackTop 返回顶部

### 基础用法

仅在滚动区是window时才有效。文档： [xdh-back-top](#/src/widgets%2Fmodule-widgets_xdh-back-top.html)

:::demo
```html

<template>
    <xdh-back-top></xdh-back-top>
</template>

```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| height | 页面滚动高度达到该值时才显示组件 | Number | - | 400 |
| bottom | 组件距离底部的距离 | Number | - | 30 |
| right | 组件距离右部的距离 | Number | - | 30 |
| duration | 滚动动画持续时间，单位 毫秒 | Number | - | 1000 |

### 插槽

| name | 说明 |
|-----|-----|
| - | 自定义内容 |

###  事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| click | 点击按钮时触发 | - |
