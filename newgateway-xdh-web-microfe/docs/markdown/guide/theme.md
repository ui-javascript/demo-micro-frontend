## 定制主题

框架默认主题风格采用 ElementUI 的主题 theme-chalk

### 修改默认主题

如果默认的theme-chalk 主题满足不了需求，需要对主题的颜色进行更换，可以修改主题的scss配置文件，文件路径:
`
/src/style/variables/_default.scss
`

当然，你也可以在variables目录下新建一个配置文件，然后更改
`
/src/style/_vars.scss
`
导入你新建立的配置文件，这样可以保留原来的配置备份，预防配置改错了无法复原

:::tip
由于主题文件是需要预编译，修改了配置文件，需要执行 npm run libs  命令重新生产主题css
:::



### 如何实现在线更换主题

当需求需要在线更换主题，如可在线切换网站主题颜色，这样同时存在多套主题。XDH-WEB v3.x 开始支持在线更换ElementUI的主题配色，使用方法如：

:::demo
```html
<template>
   <el-color-picker size="small" v-model="color"></el-color-picker>
</template>
<script>
import themeMixin from '@/utils/theme'
export default {
   mixins: [themeMixin()],
   computed: {
      color: {
        get() {
          return this.$store.state.uiTheme.color
        },
        set(val) {
          this.$store.commit('uiTheme/change', val)
        }
      }
   }
}
</script>
```
:::

:::tip
如果直接在router-view异步加载的页面，不受公共组件的影响，可以在异步加载的页面注入themeMixin，可同步切换主题
:::

### 高级定制主题

如单纯更换主题演示满足不了需求，需要更多的定制，可以利用css的优先级来定制主题。 建立文件夹 `/src/style/skins`  在改文件夹下存放需要定制的主题，一个文件表示一个皮肤。
如需两个主题 green.scss  和 red.scss

然后在 `/src/style/index.scss` 引入全部的主题
```scss
// 通用基础样式
@import "base";

@import "skins/green";
@import "skins/red";
```

主题文件的写法

```scss
.green {
   // 对主题的应用样式定义
}
```

在公共组件注入

```js
import skinMixin from '@/utils/skin'
 export default {
   mixins: [skinMixin()]
}
```


