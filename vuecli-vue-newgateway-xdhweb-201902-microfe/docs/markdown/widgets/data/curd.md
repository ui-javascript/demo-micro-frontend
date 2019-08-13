<script>
import userMixin from 'D/base/mixin/user'
export default {
  data() {
    return {
      query: {
        keyword: ''
      },
      model: {
        name: '',
        title: ''
      },
      query2: {
        keyword: ''
      },
      model2: {
        name: '',
        title: ''
      },
      userMixin: userMixin
    }
  }
}
</script>
## Curd 增删查改

### 基础用法。文档： [xdh-curd](#/src/widgets%2Fmodule-widgets_xdh-curd.html)

:::demo 需要与代码生成器配合，该示例采用 `store`  模式生成 `user` 实体
```html
<template>
  <div style="height:600px">
    <xdh-curd name="user" :query.sync="query" :model="model">

      <!-- 查询表单 -->
      <template slot="filter-items">
        <el-form-item prop="keyword">
          <el-input placeholder="关键字" v-model="query.keyword"></el-input>
        </el-form-item>
      </template>

      <!-- 显示列表 -->
      <template slot="table-columns" slot-scope="scope">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
      </template>

      <!-- 新增/修改弹窗 -->
      <template slot="dialog-form-items" slot-scope="prop">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="prop.model.name"></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="code">
          <el-input v-model="prop.model.title"></el-input>
        </el-form-item>
      </template>

    </xdh-curd>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: {
        keyword: ''
      },
      model: {
        name: '',
        title: ''
      }
    }
  }
}
</script>
```
:::

### Mixin模式

:::demo 需要与代码生成器配合，该示例采用 `mixin`  模式生成 `user`  Mixin
```html
<template>
 <div style="height:600px" style="height:600px">
    <xdh-curd :mixin="userMixin" name="user" :query.sync="query2" :model="model2">

      <!-- 查询表单 -->
      <template slot="filter-items">
        <el-form-item prop="keyword">
          <el-input placeholder="关键字" v-model="query.keyword"></el-input>
        </el-form-item>
      </template>

      <!-- 显示列表 -->
      <template slot="table-columns" slot-scope="scope">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="标题" prop="title"></el-table-column>
      </template>

      <!-- 新增/修改弹窗 -->
      <template slot="dialog-form-items" slot-scope="prop">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="prop.model.name"></el-input>
        </el-form-item>
        <el-form-item label="标题" prop="code">
          <el-input v-model="prop.model.title"></el-input>
        </el-form-item>
      </template>

    </xdh-curd>
  </div>
</template>

<script>
import userMixin from 'D/base/mixin/user'
export default {
  data() {
    return {
      query2: {
        keyword: ''
      },
      model2: {
        name: '',
        title: ''
      },
      userMixin: userMixin
    }
  }
}
</script>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| filter| 是否显示查询条件面板 | Boolean | -  | true |
| filter-title | 查询面板标题文字 | String | - | 查询条件 |
| filter-icon | 查询面板标题文字前的icon | String | - | - |
| collapsible | 查询面板能否折叠 | Boolean | - | false |
| collapsed | 查询面板能否折叠 | Boolean | - | true |
| filter-header-height | 查询面板头部标题栏目的高度 | String | - | 40px |
| filter-footer-height | 查询面板底部的高度 | String | - | 40px |
| list-header-height | 列表标题栏目的高度 | String | - | 40px |
| query | 查询参数对象,支持sync修饰符 | Object | - | - |
| name | 实体对象名称 | String | - | - |
| mixin | mixin对象，如果设置了mixin，启用mixin模式，否则启用store模式 | Object | - | - |
| rules | 新增、修改表单验证规则 | Object | - | - |
| model | 新增或修改实体的字段集合 | Object | - | {} |
| modelKey | 实体的主键字段名称 | String | - | id |
| addable | 显示增加按钮 | Boolean | - | true |
| editable | 显示编辑按钮 | Boolean | - | true |
| removable | 显示删除按钮 | Boolean | - | true |
| handle-column-width | 操作列的宽度 | Number | - | 150 |
| handle-type | 操作按钮类型 | String | button / icon | button |
| handle-fixed | 操作列表是否固定在右侧  | String | Boolean | true |
| list-title | 列表标题文字  | String | - | 列表 |
| list-icon | 列表标题图标  | String | - | el-icon-tickets |
| page-size | 分页页大小  | Number | - | 10 |
| dialog-width | 对话框宽度  | String | - | 500px |
| dialog-form-size | 对话框的表单项尺寸  | String | medium / small / mini | - |
| form-label-width | 对话框宽度  | String | - | 80px |
| fit | 是否充满父容器  | Boolean | - | true |
| is-auto | 是否在初始化时自动加载数据  | Boolean | - | true |
| editDisabled | 设置编辑按钮的Disabled回调函数。传入参数：row 当前行数据  | Function | - | - |
| removeDisabled | 设置删除按钮的Disabled回调函数。传入参数：row 当前行数据  | Function | - | - |

### 插槽

| name | 说明 |
|-----|-----|
| filter-tool | 查询面板工具区 |
| filter-items | 查询条件表单项，必须是el-form-item组件 |
| filter-items-expand| 查询条件扩展表单项，必须是el-form-item组件 |
| filter-footer | 查询面板底部 |
| table-tool | 列表面板工具区 |
| table-columns | 列表表格列，必须是el-table-column组件，作用域插槽，参数：state 状态数据 |
| table-handle-column | 操作功能列内容，作用域插槽，参数：row 当前列数据，$index 当前列索引 |
| dialog-form-items | 新增、修改表单项目，必须是el-form-item组件，作用域插槽，参数：model 表单项对象 |

### 事件

| 事件名称 | 说明 | 回调参数 |
|----|----|----|
| on-success | 请求成功时触发，包括增删改查 | type：请求类型 fetch/add/update/remove， res: 响应数据 |
| on-error | 请求失败时触发，包括增删改查 | type：请求类型 fetch/add/update/remove， err: 错误信息 |
| on-dialog-open | 对话框打开时触发 | mode：表单模式 insert/update， currentModel: 模型数据 |
| on-dialog-close | 对话框关闭时触发 | mode：表单模式 insert/update|

### 方法

| 方法名 | 说明 | 参数 |
|----|----|----|
| reload | 重新调用加载数据方法，分页页面将重置为1 | - |
| refresh | 重新加载列表数据，刷新列表, 分页保持当前页不变 | - |
