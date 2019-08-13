<script>
export default {
  data() {
    return {
      model: {
        keyword: '',
        title: ''
      },
       model2: {
        keyword: '',
        title: ''
       }
    }
  },
  methods: {
    handleQuery(model) {
      console.log(model)
    }
  }
}
</script>

## FilterPanel 查询条件面板

### 基础用法。文档： [xdh-filter-panel](#/src/widgets%2Fmodule-widgets_xdh-filter-panel.html)

:::demo

```html

<template>
  <xdh-filter-panel title="查询条件" :model.sync="model" @on-query="handleQuery">
    <el-form-item label="关键字" prop="keyword">
      <el-input v-model="model.keyword"></el-input>
    </el-form-item>
    <el-form-item label="标题" prop="title">
      <el-input v-model="model.title"></el-input>
    </el-form-item>
  </xdh-filter-panel>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          keyword: '',
          title: ''
        }
      }
    },
    methods: {
      handleQuery(model) {
        console.log(model)
      }
    }
  }
</script>

```
:::

### 可折叠扩展

适合筛选条件较多的情况下，把次要的条件隐藏

:::demo 通过插槽 expand 定义展开的查询条件，设置collapsible为true，启用可折叠功能

```html

<template>
  <xdh-filter-panel title="查询条件"
                    :model.sync="model2"
                     @on-query="handleQuery"
                     :collapsible="true">
    <el-form-item label="关键字" prop="keyword">
      <el-input v-model="model2.keyword"></el-input>
    </el-form-item>
    <template slot="expand">
      <el-form-item label="标题" prop="title">
        <el-input v-model="model2.title"></el-input>
      </el-form-item>
    </template>
  </xdh-filter-panel>
</template>

<script>
  export default {
    data() {
      return {
        model2: {
          keyword: '',
          title: ''
        }
      }
    },
    methods: {
      handleQuery(model) {
        console.log(model)
      }
    }
  }
</script>

```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 标题文字 | String | -  | 查询条件 |
| icon | 标题前的icon | String | - | iconfont icon-filter |
| collapsible | 是否开启折叠功能 | Boolean | -  | false |
| collapsed | 初始是否折叠状态,collapsible为true才有效 | Boolean | -  | true |
| headerHeight | 头部标题栏目的高度 | String | -  | 36px |
| footerHeight | 底部的高度 | String | -  | 40px |
| model | 查询模型对象， 支持sync修饰符 | Object | -  | {} |

###  插槽

| name | 说明 |
|-----|-----|
| - | 初始表单项内容 |
| tool | 工具栏内容 |
| expand | 展开的表单项内容 |
| footer | 底部内容 |

### 事件

| 事件名称 | 说明 | 回调参数 |
|----|----|----|
| toggle | 折叠、展开是触发 | isCollapsed：是否折叠 true/false |
| on-query | 点击查询按钮是触发 | model：表单查询字段值对象 |
| reset-expand-fields | 重置展开的表单项时触发 | expandFields：展开的表单项名称数组 |
