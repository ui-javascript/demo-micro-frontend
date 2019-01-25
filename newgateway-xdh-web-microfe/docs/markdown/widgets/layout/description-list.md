<script>
  import XdhDescriptionList  from '@/widgets/xdh-description-list'
  export default {
    components: {XdhDescriptionList},
    data() {
      return {
        list: [
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          }
        ]
      }
    }
  }
</script>

## DescriptionList 描述列表组件

常见于详情页的信息展示。文档： [xdh-description-list](#/src/widgets%2Fmodule-widgets_xdh-description-list.html)

### 基础用法

:::demo

```html

<template>
 <xdh-description-list title="描述列表" :list="list" />
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          }
        ]
      }
    }
  }
</script>
```
:::

### 自定义显示用法

:::demo

```html

<template>
    <xdh-description-list title="描述列表" :list="list" :col="4">

       <template slot="title" slot-scope="prop">
         <b>{{prop.title}}</b>
       </template>

       <div slot-scope="prop">
         <a href="javascript:void(0)">{{prop.item.title}}</a>
         <div>{{prop.item.content}}</div>
       </div>
     </xdh-description-list>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          },
          {
            title: '子标题',
            content: '这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容这个是描述的内容'
          }
        ]
      }
    }
  }
</script>
```
:::


### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 列表标题| String | -  | - |
| list | 列表项数据,如list = [{title:'',content:''}] | Array | -  | - |
| layout | 布局方式 | String | horizontal/vertical | horizontal |
| col | 指定信息最多分几列展示| Number | - | 3 |
| gutter | 列表项间距，单位为 px| Number | - | 20 |


### 插槽

| name | 说明 |
|-----|-----|
| - | 默认插槽,slot-scope = {list:{title:'',content:''}} |
| title | 列表标题区域 slot-scope = {title:''} |
