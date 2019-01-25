## Panel 面板

### 基础用法。文档： [xdh-panel](#/src/widgets%2Fmodule-widgets_xdh-panel.html)

:::demo 可设置标题、图标、和工具

```html
<template>
  <xdh-panel title="标题文字" icon="el-icon-menu">
    <template slot="tool">
      <i class="el-icon-caret-bottom"></i>
    </template>
    这是内容...
  </xdh-panel>
</template>
```
:::

### 主题风格

:::demo 可设置 `theme` 实现不同颜色

```html
<template>
  <xdh-panel title="标题文字" theme="primary">
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="success">
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="warning">
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="danger">
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="info">
    这是内容...
  </xdh-panel>

</template>
```
:::

### 简约风格

:::demo 可设置 `simple` 为false 显示简约风格

```html
<template>
  <xdh-panel title="标题文字" theme="primary" simple>
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="success" simple>
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="warning" simple>
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="danger" simple>
    这是内容...
  </xdh-panel>

  <xdh-panel title="标题文字" theme="info" simple>
    这是内容...
  </xdh-panel>

</template>
```
:::

### 充满父容器
:::demo 可设置 `fit` 为true 可适配父容器的尺寸

```html
<template>
  <div style="width: 500px; height:300px">
      <xdh-panel title="标题文字" theme="primary" :fit="true">
        <div style="height:600px">内容</div>
      </xdh-panel>
  </div>
</template>
```
:::

### 阴影和边框
:::demo
```html
<template>
  <div>
      <xdh-panel title="标题文字" theme="primary" border shadow>
        有边框，有阴影
      </xdh-panel>
      <xdh-panel title="标题文字" theme="primary" :border="false" shadow>
        无边框，有阴影
      </xdh-panel>
      <xdh-panel title="标题文字" theme="primary" :border="false">
        无边框，无阴影
      </xdh-panel>

      <xdh-panel :title="null" :border="false">
        无边框，无阴影, 无标题
      </xdh-panel>
   </div>
</template>
```
:::

### 插槽

:::demo
```html
<template>
      <xdh-panel title="标题文字" theme="primary" border shadow>
        <h3 slot="title"> 插槽定义标题 </h3>
        <template slot="tool">
          <el-button type="primary" size="mini">新增</el-button>
          <el-button type="warning" size="mini">发布</el-button>
        </template>
        <div>占位文字</div>
        <div slot="footer" style="height:100%; background:#eee;">
          底部占位文字
        </div>
      </xdh-panel>
</template>
```
:::


### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 标题文字 | String | - | - |
| icon | 标题文字前的icon | String | - | - |
| simple | 是否简洁模式 | Boolean | - | false |
| theme | 主题颜色 | String | primary / success / warning / danger / info | primary |
| shadow | 是否显示阴影 | Boolean | - | false |
| header-height | 头部标题栏的高度 | String | - | 40px |
| footer-height | 底部标题栏的高度 | String | - | 40px |
| fit | 是否充满父容器 | Boolean | - | false |
