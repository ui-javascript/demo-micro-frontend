<script>
export default {
  data() {
    return {
       value: ['三级 1-1-1'],
       value2: '三级 1-1-1',
       value3: ['三级 1-1-1'],
       value4: ['三级 1-1-1'],
       data: [{
               label: '一级 1',
               children: [{
                 label: '二级 1-1',
                 children: [{
                   label: '三级 1-1-1'
                 }]
               }]
             }, {
               label: '一级 2',
               children: [{
                 label: '二级 2-1',
                 children: [{
                   label: '三级 2-1-1'
                 }]
               }, {
                 label: '二级 2-2',
                 children: [{
                   label: '三级 2-2-1'
                 }]
               }]
             }, {
               label: '一级 3',
               children: [{
                 label: '二级 3-1',
                 children: [{
                   label: '三级 3-1-1'
                 }]
               }, {
                 label: '二级 3-2',
                 children: [{
                   label: '三级 3-2-1'
                 }]
               }]
        }]
    }
  },
  methods: {
    handleSelect(nodes) {
      console.log('handleSelect', nodes)
    }
  }
}
</script>

## TreeSelect 下拉树选择框

在 el-tree 的基础上扩展的下拉树选择，组件参数继承 el-tree。文档： [xdh-tree-select](#/src/widgets%2Fmodule-widgets_xdh-tree-select.html)

### 基础用法

多选下拉树

:::demo  需要设置数据主键 `node-key`
```html

<template>
  <xdh-tree-select :data="data"
                    node-key="label"
                    v-model="value">
  </xdh-tree-select>
</template>

<script>
export default {
  data() {
    return {
       value: ['三级 1-1-1'],
       data: [{
               label: '一级 1',
               children: [{
                 label: '二级 1-1',
                 children: [{
                   label: '三级 1-1-1'
                 }]
               }]
             }, {
               label: '一级 2',
               children: [{
                 label: '二级 2-1',
                 children: [{
                   label: '三级 2-1-1'
                 }]
               }, {
                 label: '二级 2-2',
                 children: [{
                   label: '三级 2-2-1'
                 }]
               }]
             }, {
               label: '一级 3',
               children: [{
                 label: '二级 3-1',
                 children: [{
                   label: '三级 3-1-1'
                 }]
               }, {
                 label: '二级 3-2',
                 children: [{
                   label: '三级 3-2-1'
                 }]
               }]
        }]
    }
  }
}
</script>


```
:::

### 单选下拉树

:::demo 关闭 `show-checkbox` 启用单选模式
```html

<template>
  <xdh-tree-select :data="data"
                    node-key="label"
                    :show-checkbox="false"
                    v-model="value2">
  </xdh-tree-select>
</template>
<script>
export default {
  data() {
    return {
       value2: ['三级 1-1-1'],
       data: [{
               label: '一级 1',
               children: [{
                 label: '二级 1-1',
                 children: [{
                   label: '三级 1-1-1'
                 }]
               }]
             }, {
               label: '一级 2',
               children: [{
                 label: '二级 2-1',
                 children: [{
                   label: '三级 2-1-1'
                 }]
               }, {
                 label: '二级 2-2',
                 children: [{
                   label: '三级 2-2-1'
                 }]
               }]
             }, {
               label: '一级 3',
               children: [{
                 label: '二级 3-1',
                 children: [{
                   label: '三级 3-1-1'
                 }]
               }, {
                 label: '二级 3-2',
                 children: [{
                   label: '三级 3-2-1'
                 }]
               }]
        }]
    }
  }
}
</script>
```
:::

### 带线框下拉树
:::demo `is-dashed` 设置为 true , `is-dashed`为true时开启带连线模式。（注意：id-dashed=true 固定了indent(缩进)为18px）
``` html
<template>
  <xdh-tree-select :data="data" :is-dashed="true"
                    node-key="label"
                    v-model="value3">
  </xdh-tree-select>
</template>

<script>
export default {
  data() {
    return {
       value3: ['三级 1-1-1'],
       data: [{
               label: '一级 1',
               children: [{
                 label: '二级 1-1',
                 children: [{
                   label: '三级 1-1-1'
                 }]
               }]
             }, {
               label: '一级 2',
               children: [{
                 label: '二级 2-1',
                 children: [{
                   label: '三级 2-1-1'
                 }]
               }, {
                 label: '二级 2-2',
                 children: [{
                   label: '三级 2-2-1'
                 }]
               }]
             }, {
               label: '一级 3',
               children: [{
                 label: '二级 3-1',
                 children: [{
                   label: '三级 3-1-1'
                 }]
               }, {
                 label: '二级 3-2',
                 children: [{
                   label: '三级 3-2-1'
                 }]
               }]
        }]
    }
  }
}
</script>
```
:::

### 节点过滤

通过关键字过滤树节点

:::demo
```html

<template>
  <xdh-tree-select :data="data"
                    node-key="label"
                    filterable
                    v-model="value4">
  </xdh-tree-select>
</template>

<script>
export default {
  data() {
    return {
       value4: ['三级 1-1-1'],
       data: [{
               label: '一级 1',
               children: [{
                 label: '二级 1-1',
                 children: [{
                   label: '三级 1-1-1'
                 }]
               }]
             }, {
               label: '一级 2',
               children: [{
                 label: '二级 2-1',
                 children: [{
                   label: '三级 2-1-1'
                 }]
               }, {
                 label: '二级 2-2',
                 children: [{
                   label: '三级 2-2-1'
                 }]
               }]
             }, {
               label: '一级 3',
               children: [{
                 label: '二级 3-1',
                 children: [{
                   label: '三级 3-1-1'
                 }]
               }, {
                 label: '二级 3-2',
                 children: [{
                   label: '三级 3-2-1'
                 }]
               }]
        }]
    }
  }
}
</script>


```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 树数据数组 | Array | - | - |
| node-key | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 | String | - | - |
| props | 配置选项，具体看下表 | Object | - | - |
| show-checkbox | 是否启用多选 | Boolean | - | true |
| value | 当前的值, 多选是数组 | Array/String | - | - |
| show-clear-btn | 显示清空选择按钮 | Boolean | - | true |
| show-ok-btn | 显示确定按钮 | Boolean | - | true |
| placeholder | 输入框显示的占位文本, 单选是有效 | String | - | true |
| filterable | 对树节点进行筛选| Boolean | - | false |


### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| label | 指定节点标签为节点对象的某个属性值 | String | - | - |
| children | 指定子树为节点对象的某个属性值 | String | - | - |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值 | String | - | - |
| isLeaf | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | String | - | - |

###  事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-selected | 确定选择是触发 | nodes：选择的节点数组|
