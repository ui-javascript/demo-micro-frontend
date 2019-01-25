<script>
  const avatar = require('D/assets/avatar.jpg')
  export default {
    data() {
      return {
        avatar: avatar
      }
    }
  }
</script>
## Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。文档： [xdh-avatar](#/src/widgets%2Fmodule-widgets_xdh-avatar.html)

- 头像有三种尺寸，两种形状可选。
- 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
- 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

### 基础用法

:::demo
```html

<template>
  <xdh-avatar>U</xdh-avatar>

  <xdh-avatar icon="el-icon-delete"></xdh-avatar>

   <xdh-avatar :src="avatar"></xdh-avatar>

  <xdh-avatar size="large">H</xdh-avatar>

  <xdh-avatar size="small">H</xdh-avatar>

  <xdh-avatar size="large" shape="square">H</xdh-avatar>

  <xdh-avatar size="large" shape="square" :src="avatar"></xdh-avatar>

  <xdh-avatar size="xl" shape="square">H</xdh-avatar>

  <xdh-avatar size="xxl" shape="square" :src="avatar"></xdh-avatar>
</template>

<script>
  const avatar = require('D/assets/avatar.jpg')
  export default {
    data() {
      return {
        avatar: avatar
      }
    }
  }
</script>

<style lang="scss" scoped>
.xdh-avatar {
  margin:10px;
}
</style>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| shape | 指定头像的形状，可选值为 circle、square | String | circle/square  | circle |
| size | 设置头像的大小，可选值为 large、small、default | String | xxl/xl/large/small/default | default |
| src | 图片类头像的资源地址 | String | - | -|
| icon | 设置头像的图标样式名 | String | - | - |

