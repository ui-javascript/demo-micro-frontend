## TreeTable 表格树

在 el-tree 的基础上扩展的表格树，组件参数与 el-tree 一样。文档： [xdh-tree-table](#/src/widgets%2Fmodule-widgets_xdh-tree-table.html)

### 基础用法

:::demo 适用于固定列宽度的情况， 自适应宽度目前还有bug
```html
<template>
    <xdh-tree-table :data="data" :show-checkbox="true">

       <xdh-tree-table-column prop="name" label="姓名"></xdh-tree-table-column>
       <xdh-tree-table-column prop="title" label="标题" width="200px"></xdh-tree-table-column>
       <xdh-tree-table-column prop="email" label="邮箱" width="200px"></xdh-tree-table-column>
       <xdh-tree-table-column label="操作" width="200px">
         <template slot-scope="scope">
            <el-button size="mini" type="primary">编辑</el-button>
            <el-button size="mini" type="warning">删除({{scope.id}})</el-button>
         </template>
        </xdh-tree-table-column>
    </xdh-tree-table>

</template>
<script>
import Mock from 'mockjs'
import {listToTree} from '@/utils/convert'
function createTree (Mock, url, query) {
  let root = Mock.mock({
    'list|10': [{
      'id|+1': 1,
      'name': '@cname',
      'title': '@ctitle',
      'email': '@email',
      'parentId': null
    }]
  })
  let data = Mock.mock({
    'list|50': [{
      'id|+1': 11,
      'name': '@cname',
       'title': '@ctitle',
       'email': '@email',
      'parentId': function () {
        return Math.floor(Math.random() * 20)
      }
    }]
  })
  return listToTree(root.list.concat(data.list), null)
}

export default {
  data() {
    return {
      data: createTree(Mock)
    }
  }
}
</script>
```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 展示数据 | array| - | - |
| empty-text | 内容为空的时候展示的文本 | String | - | - |
| node-key | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String | - | - |
| props | 配置选项，具体看下表 | object | - | - |
| load | 加载子树数据的方法 | function(node, resolve) | - | - |
| highlight-current | 是否高亮当前选中节点，默认值是 false。 | boolean | - | false |
| default-expand-all | 是否默认展开所有节点 | boolean | - | false |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。 |boolean | - | true |
| auto-expand-parent | 展开子节点的时候是否自动展开父节点 | boolean | - | true |
| default-expanded-keys | 默认展开的节点的 key 的数组 | array | - | - |
| show-checkbox | 节点是否可被选择 | boolean | - | false |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | boolean | - | false |
| default-checked-keys | 默认勾选的节点的 key 的数组 | array | - | - |
| filter-node-method | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data, node) | - | - |
| accordion | 是否每次只打开一个同级树节点展开 | boolean | - | false |
| indent | 相邻级节点间的水平缩进，单位为像素 | number | - | 16 |

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| label | 指定节点标签为节点对象的某个属性值 | string, function(data, node) | - | - |
| children | 指定子树为节点对象的某个属性值 | string, function(data, node) | - | - |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | 	boolean, function(data, node) | - | - |
| isLeaf | 指定节点是否为叶子节点 | boolean, function(data, node) | - | - |

### xdh-tree-table-column 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| label | 显示的标题 | String | - | - |
| prop | 对应列内容的字段名 | String | - | - |
| width | 对应列的宽度 | String | - | - |
