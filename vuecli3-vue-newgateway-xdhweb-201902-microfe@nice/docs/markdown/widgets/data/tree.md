<script>
  export default {
    data() {
      return {
        data: [
                {
                  ids: '1',
                  label: '一级 1',
                  children: [{
                    ids: '2',
                    label: '二级 1-1',
                    children: [{
                      ids: '3',
                      label: '三级 1-1-1',
                      children: [
                        {
                          ids: '4', label: '四级 1-1-1-1'
                        },
                        {
                          ids: '5', label: '四级 1-1-1-2'
                        }
                      ]
                    }, {

                      ids: '7',
                      label: '三级 1-1-2'
                    }]
                  }, {
                    ids: '8',
                    label: '二级 1-2'
                  }]
                },
                {
                  ids: '9',
                  label: '一级 2',
                  children: [{
                    ids: '10',
                    label: '二级 2-1',
                    children: [{
                      ids: '11',
                      label: '三级 2-1-1'
                    }]
                  }, {
                    ids: '12',
                    label: '二级 2-2',
                    children: [{
                      ids: '13',
                      label: '三级 2-2-1'
                    }]
                  }]
                },
                {
                  ids: '14',
                  label: '一级 3',
                  children: [{
                    ids: '15',
                    label: '二级 3-1',
                    children: [{
                      ids: '16',
                      label: '三级 3-1-1'
                    }]
                  }, {
                    ids: '17',
                    label: '二级 3-2',
                    children: [{
                      ids: '18',
                      label: '三级 3-2-1'
                    }]
                  }]
                }
              ]
      }
    },
    methods: {
      getCheckedNodes() {
         console.log(this.$refs.tree.$refs.tree.getCheckedNodes());
      },
      getCheckedNodesParent() {
        console.log(this.$refs.tree.getCheckedNodesParent());
      }
    }
  }
</script>

## Tree树形组件

用清晰的层级结构展示信息，可展开或折叠。此控件是在 Element-UI Tree控件上的用法的拓展,基础用法参照官方
文档:[Tree 树形组件](http://element.eleme.io/#/zh-CN/component/tree)(el-tree)，拓展如下。文档： [xdh-tree](#/src/widgets%2Fmodule-widgets_xdh-tree.html)

### 显示连接线

通过 connect 属性可让父子节点虚线连接

:::demo
```html
<template>
    <xdh-tree connect :data="data" node-key="ids" show-checkbox>
    </xdh-tree>
</template>

<script>
  import XdhTree from '../widgets/xdh-tree'
  export default {
    components: {
      XdhTree
    },
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1',
              children: [
                { label: '四级 1-1-1-1' },
                { label: '四级 1-1-1-2' }
              ]
            }, {
              label: '三级 1-1-2'
            }]
          }, {
            label: '二级 1-2'
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
    }
  }
</script>
```
:::

### 获取选中父节点

通过 fetch-parent 属性可以让 getCheckedNodesParent() 获取父节点

:::demo
```html
<template>
    <xdh-tree ref="tree" fetch-parent :data="data" node-key="ids" show-checkbox>
    </xdh-tree>
    <div class="buttons">
      <el-button @click="getCheckedNodesParent">通过 node 获取选中父节点集合</el-button>
      <el-button @click="getCheckedNodes">通过 node 获取选中节点集合</el-button>
    </div>
</template>

<script>
  import XdhTree from '../widgets/xdh-tree'
  export default {
    components: {
      XdhTree
    },
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.$refs.tree.getCheckedNodes());
      },
      getCheckedNodesParent() {
        console.log(this.$refs.tree.getCheckedNodesParent());
      }
    },
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1',
              children: [
                { label: '四级 1-1-1-1' },
                { label: '四级 1-1-1-2' }
              ]
            }, {
              label: '三级 1-1-2'
            }]
          }, {
            label: '二级 1-2'
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
    }
  }
</script>
```
:::


### 属性
支持[ el-tree属性](http://element.eleme.io/#/zh-CN/component/tree#attributes), 同时如下拓展:

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| connect | 父子节点虚线连接显示 | Boolean | true / false | false |
| fetch-parent | 选中结果集过滤子节点,仅保留父节点返回 | Boolean | true / false | false |

### prop

支持[el-tree Prop](http://element.eleme.io/#/zh-CN/component/tree#props)


### 方法

通过 $refs.tree 使用[ el-tree方法 ](http://element.eleme.io/#/zh-CN/component/tree#fang-fa),
同时拓展 tree 组件内部方法如下：

| 方法名 | 说明 | 参数 |
|----|----|----|
| getCheckedNodesParent | 若节点可被选择且过滤子节点（即 show-checkbox 为 true,fetch-parent 为 true），则返回目前被选中的节点的父节点所组成的数组 | - |

### 事件

支持 [ el-tree事件](http://element.eleme.io/#/zh-CN/component/tree#events),
同时如下事件回调参数结果调整：

| 事件名称 | 说明 | 原始回调参数 | 调整后 |
|----|----|----|----|
|check|当复选框被点击的时候触发|共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性|结果集过滤子节点时 ( 即fetch-parent 为 true ), 选中状态对象中 checkedNodes、checkedKeys 两个属性返回目前被选中的节点的父节点所组成的数组|

### 插槽

支持 [ el-tree 插槽 ](http://element.eleme.io/#/zh-CN/component/tree#scoped-slot)
