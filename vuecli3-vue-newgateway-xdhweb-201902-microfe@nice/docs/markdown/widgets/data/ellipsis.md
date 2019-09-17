
## Ellipsis 文本自动省略号

如果文本内容没有超过容器的宽度或者设置的行数，则不会出现tooltip。

### 基础用法。文档： [xdh-ellipsis](#/src/widgets%2Fmodule-widgets_xdh-ellipsis.html)

:::demo
```html
<template>
  <div style="width:200px;">
    <xdh-ellipsis>这段文字没超过200px宽度</xdh-ellipsis>
    <xdh-ellipsis>{{text}}</xdh-ellipsis>
  </div>
</template>
<script>
export default{
  data(){
    return{
      text:'超过200px宽度：我是一串很长的文字文字文字文字文字文字文字文字文字文字文字文字文字知道吗？？？？'
    }
  }
}
</script>
```
:::

### 多行自动省略号
:::demo
```html
<template>
  <div style="width:200px;">
    <xdh-ellipsis :lines="3">不止3行：我是一串很长的文字文字文字文字文字文字文字文字文字文字文字文字文字知道吗？？？？</xdh-ellipsis>
  </div>
</template>
```
:::

### 自定义tooltip的内容
:::demo
```html
<template>
  <div style="width:200px;">
    <xdh-ellipsis content="123">{{text}}</xdh-ellipsis>
  </div>
</template>
<script>
export default{
  data(){
    return{
      text:'超过200px宽度：我是一串很长的文字文字文字文字文字文字文字文字文字文字文字文字文字知道吗？？？？'
    }
  }
}
</script>
```
:::

### tooltip支持带样式显示
:::demo
```html
<template>
  <div style="width:200px;">
    <xdh-ellipsis>
      <div><span style="color:#12d55a">1233333</span>{{text}}</div>
    </xdh-ellipsis>
  </div>
</template>
<script>
export default{
  data(){
    return{
      text:'超过200px宽度：我是一串很长的文字文字文字文字文字文字文字文字文字文字文字文字文字知道吗？？？？'
    }
  }
}
</script>
```
:::


### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| lines | 限制显示行数 | Number | - | 1 |
