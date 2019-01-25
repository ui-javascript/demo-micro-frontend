<script>
export default {
  data() {
    return {
       closed1: true,
       closed2: true,
       minimized: false,
       maximized: false,
       closed3: true,
       closed4: true
    }
  },
  methods: {
    openWindow2() {
      this.minimized = false
      this.maximized = false
      this.closed2 = false
    }
  }
}
</script>

## Window 窗体组件

用来做弹窗或容器展示内容。文档： [xdh-window](#/src/widgets%2Fmodule-widgets_xdh-window.html)

### 基础用法

:::demo
```html
<template>
  <div>
    <el-button @click="closed1 = false">打开弹窗</el-button>
    <xdh-window :closed.sync="closed1" title="标题" width="400px" height="200px">
       我是内容...
    </xdh-window>
  </div>
</template>

<script>
export default {
  data() {
    return {
       closed1: true
    }
  }
}
</script>
```
:::

### 定义图标和最大化、最小化功能

:::demo 通过 `maximizable` `minimizable` `collapsible `开启最大化、最小化、可折叠功能，设置 `maximized`  `minimized` 控制状态
```html
<template>
  <div>
    <el-button @click="openWindow2">打开弹窗</el-button>
    <xdh-window :closed.sync="closed2"
                title="标题"
                width="400px"
                height="200px"
                icon="el-icon-setting"
                maximizable
                minimizable
                collapsible
                :maximized.sync="maximized"
                :minimized.sync="minimized">
       我是内容...
    </xdh-window>
  </div>
</template>

<script>
export default {
  data() {
    return {
       closed2: true,
       minimized: false,
       maximized: false
    }
  },
  methods: {
    openWindow2() {
      this.minimized = false
      this.maximized = false
      this.closed2 = false
    }
  }
}
</script>
```
:::

### 自定义工具按钮
:::demo 通过插槽 `tools` 定义操作按钮， `footer` 定义底部内容
```html
<template>
  <div>
    <el-button @click="closed3 = false">打开弹窗</el-button>
    <xdh-window :closed.sync="closed3" title="标题" width="400px" height="200px">
      <template slot="tools">
        <i class="el-icon-setting"></i>
        <i class="el-icon-edit"></i>
      </template>
       我是内容...
       <div slot="footer">底部内容</div>
    </xdh-window>
  </div>
</template>
```
:::


### 内联模式

:::demo  `inline` 启用内联模式 `shadow` 边框是否加阴影 `closable` 是否显示关闭按钮
```html
<template>
  <div>
    <xdh-window inline :shadow="true" :closable="false" title="标题" width="100%" height="200px">
     这里是内容....
    </xdh-window>
  </div>
</template>
```
:::


### draggable 和 resizable

:::demo
```html
<template>
  <div>
    <el-button @click="closed4 = false">打开弹窗</el-button>
    <xdh-window :closed.sync="closed4"
                title="标题"
                width="400px"
                height="200px"
                left="300px"
                top="200px"
                draggable
                resizable>
       我是内容...
    </xdh-window>
  </div>
</template>
```
:::



### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 标题文字, 为null时即不显示头部 | String | - | - |
| icon | 标题旁边的图标样式名称 | String | - | - |
| width | 窗体宽度 | String | - | auto |
| height | 窗体高度 | String | - | auto |
| left | 窗体左位置，inline为true是无效， left、top同时为null时，自动居中 | String | - | null |
| top | 窗体顶位置，inline为true是无效， left、top同时为null时，自动居中 | String | - | null |
| closable | 是否显示关闭按钮 | Boolean | - | true |
| collapsible | 是否显示折叠按钮 | Boolean | - | false |
| maximizable | 是否显示最大化按钮 | Boolean | - | false |
| minimizable | 是否显示最小化按钮 | Boolean | - | false |
| closed | 是否关闭状态，支持sync修饰符进行双向绑定 | Boolean | - | false |
| collapsed | 是否折叠收起状态，支持sync修饰符进行双向绑定 | Boolean | - | false |
| minimized | 是否最小化状态，支持sync修饰符进行双向绑定 | Boolean | - | false |
| maximized | 是否最大化状态，支持sync修饰符进行双向绑定 | Boolean | - | false |
| modal | 是否显示遮罩层，inline为true是无效 | Boolean | - | true |
| draggable | 窗体支持拖拽配置参数, 参数对象参考v-draggable | Boolean/Object | - | false |
| resizable | 窗体支持改变尺寸配置参数, 参数对象参考v-resizable | Boolean/Object | - | false |
| headerHeight | 头部高度 | String | - | 40px |
| footerHeight | 底部高度 | String | - | 40px |
| z-index | 窗体层级 | Number | - | 1000 |
| shadow | 是否显示窗体阴影 | Boolean | - | true |
| inline | 是否以内联方式显示 | Boolean | - | false |

### 插槽

| name | 说明 |
|-----|-----|
| - | 窗体内容 |
| title | 定义标题内容，设置了改插槽，参数title将无效 |
| tools | 定义操作按钮 |
| footer | 定义底部内容 |

###  事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-collapsed | 折叠状态改变时触发 | collapsed： true 收起/false 展开|
| on-minimized | 最小化时触发 | - |
| on-maximized | 最大化状态改变时触发 | maximized： true 最大化/false 恢复默认 |
| on-closed | 关闭时触发 | - |
| on-start-drag | 开始拖拽时触发 | e：拖拽对象 |
| on-stop-drag | 停止拖拽时触发 | e：拖拽对象 |
| on-drag | 拖拽时触发 | e：拖拽对象 |
| on-start-resize | 开始改变尺寸时触发 | e：resize对象 |
| on-stop-resize | 停止改变尺寸时触发 | e：resize对象 |
| on-resize | 改变尺寸时触发 | e：resize对象 |

### Draggable Options
```javascript
/**
 * 拖拽类实例化默认参数
 */
const defaultOptions = {

  // 拖拽句柄元素选择器
  handle: null,

  // 限制拖拽方向可选: v 垂直、h 水平，默认不限制
  axis: null,

  // 延时开始拖拽
  delay: 100,

  // 限制拖拽范围
  range: {
    left: -10000,
    top: -10000,
    width: 10000,
    height: 10000
  },
  // 在元素范围内
  target: null,

  // 克隆拖拽，boolean 或 function
  clone: false,

  // 拖拽放置后动画返回原来位置，clone不为false时才有效
  revert: true,

  // 分组名称， 与droppable配合使用
  group: null,

  // 是否禁用拖拽
  disabled: false,

  // 开始拖拽时回调
  onStartDrag: noop,

  // 结束拖拽时回调
  onStopDrag: noop,

  // 正在拖拽时回调
  onDrag: noop
}
```

### Resizable Options

```javascript
const defaultOptions = {
  disabled: false,
  handles: 'all', // 可resize的方向，可选值 e/s/w/n/all
  minWidth: 20,
  minHeight: 20,
  maxWidth: 10000,
  maxHeight: 10000,
  edge: 5, // 距离边缘多少时显示鼠标Cursor
  onStartResize: noop,
  onStopResize: noop,
  onResize: noop
}
```
