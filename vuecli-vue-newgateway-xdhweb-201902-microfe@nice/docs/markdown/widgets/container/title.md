## Title 标题

标题布局组件

### 基础用法。文档： [xdh-title](#/src/widgets%2Fmodule-widgets_xdh-title.html)

简洁标题

:::demo 可以通过 `border` `icon` 设置标题的边框和标题文字旁边的图标

```html
<template>
  <xdh-title title="这是一个简洁标题示例"></xdh-title>
</template>

<template>
  <xdh-title title="标题带下划线" border></xdh-title>
</template>

<template>
  <xdh-title title="标题带图标" border icon="el-icon-menu"></xdh-title>
</template>
```
:::

### 主题风格

:::demo 可以通过 `theme` 设置不同主题颜色

```html

<template>
  <xdh-title title="标题主题颜色" border theme="primary"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" border theme="success"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" border theme="warning"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" border theme="danger"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" border theme="info"></xdh-title>
</template>

```
:::

### 带背景颜色

:::demo 可以通过 `simple` 设置false, 启用带背景颜色

```html
<template>
  <xdh-title title="标题主题颜色" :simple="false" theme="primary"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" :simple="false" theme="success"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" :simple="false" theme="warning"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" :simple="false" theme="danger"></xdh-title>
</template>

<template>
  <xdh-title title="标题主题颜色" :simple="false" theme="info"></xdh-title>
</template>

```
:::

### 定义工具按钮

:::demo 通过插槽 tool 定义右侧工具

```html
<template>
  <xdh-title title="标题主题颜色" :simple="false" theme="primary">
    <template slot="tool">
      <el-button icon="el-icon-edit" size="mini" type="primary"></el-button>
    </template>
  </xdh-title>
</template>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 标题文字 | String | - | - |
| border | 对话框标题 | Boolean | - | - |
| icon | 标题文字前的icon | String | - | - |
| simple | 是否简洁模式 | Boolean | - | true |
| theme | 主题颜色 | String | primary / success / warning / danger / info | primary |
