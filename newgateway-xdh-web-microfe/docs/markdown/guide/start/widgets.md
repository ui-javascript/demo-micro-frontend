## 引用组件

在框架目录 `/src/widgets` 下存放着各种公用组件，这些组件的使用大大提高开发的工作效率，也更好的规范项目整体的统一性。<br/>

### 示例

本节内容将介绍在项目开发中怎样去使用这些组件：

1. 根据开发需求，查看是否有相关组件支持，此处可以参考 [示例文档](#/widgets/base/color)。 后面以【头像】组件的使用为例
2. 在使用页面中引入组件
```js
<script>
   import XdhAvatar from '../widgets/xdh-avatar'

   export default {
        ...
    components: {
        XdhAvatar
    }
        ...
   }
</script>
```
3. 在页面模板中使用 效果如下
:::demo
```html

<template>
  <div>
    <xdh-avatar>U</xdh-avatar>

    <xdh-avatar icon="el-icon-delete"></xdh-avatar>

    <xdh-avatar size="large">H</xdh-avatar>

    <xdh-avatar size="small">H</xdh-avatar>

    <xdh-avatar size="large" shape="square">H</xdh-avatar>

    <xdh-avatar size="xl" shape="square">H</xdh-avatar>
  </div>
</template>

```
:::
4. 根据组件的属性参数做相应的配置即可
