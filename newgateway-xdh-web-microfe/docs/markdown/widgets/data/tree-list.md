<script>
  export default {
    data() {
      return {
        data: [
          {
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
          }
        ],
        data2: [
          {
            label: '一级 1',
            children: [
              {
                label: '二级 1-1',
                children: [
                  {
                    label: '三级 1-1-1',
                    children: [
                      {
                        label: '四级 1-1-1-1',
                        children: [
                          {
                            label: '五级 1-1-1-1-1'
                          },
                          {
                            label: '五级 1-1-1-1-2',
                            children: [
                              { label: '六级 1-1-1-1-1-1' },
                              { label: '六级 1-1-1-1-1-2' },
                              { label: '六级 1-1-1-1-1-3' }
                            ]
                          },
                          {
                            label: '五级 1-1-1-1-3'
                          },
                          {
                            label: '五级 1-1-1-1-4'
                          }
                        ]
                      },
                      {
                        label: '四级 1-1-1-2'
                      }
                    ]
                  },
                  {
                    label: '三级 1-1-2'
                  },
                  {
                    label: '三级 1-1-3',
                    children: [
                      {
                        label: '四级 1-1-1-1'
                      },
                      {
                        label: '四级 1-1-1-1',
                        children: [
                          {
                            label: '五级 1-1-1-1-1'
                          },
                          {
                            label: '五级 1-1-1-1-2',
                            children: [
                              { label: '六级 1-1-1-1-1-1' },
                              { label: '六级 1-1-1-1-1-2' },
                              { label: '六级 1-1-1-1-1-3' }
                            ]
                          },
                          {
                            label: '五级 1-1-1-1-3'
                          },
                          {
                            label: '五级 1-1-1-1-4'
                          }
                        ]
                      }
                      // {
                      //   label: '四级 1-1-1-2'
                      // }
                    ]
                  },
                  {
                    label: '三级 1-1-4'
                  }
                ]
              }
            ]
          },
          {
            label: '一级 2'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

## 自定义虚线样式的el-tree组件

通过自定义样式给el-tree 组件添加 虚线连线的效果

### 用法

:::demo  只需要在使用 'el-tree' 组件时，在其父节点上添加 ‘xdh-tree’类名即可。注意：使用虚线模式的el-tree组件，必须使用固定的 indent值（18px）
```html

<template>
  <div class=" xdh-tree ">
    <el-tree :data="data" node-key:="label" show-checkbox>
    </el-tree>
    <hr/>
    <el-tree :data="data2" node-key:="label" show-checkbox>
    </el-tree>
  </div>
</template>

<script>
  export default {
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

### 需要自定义indent时的处理
:::demo 使用“_mixin” 中tree-indent($indent) 将自定义缩进数值传入mixin函数内。注意：使用“tree-indent($indent)” 需要另外使用一个 无scope定义的“style”模块
```html

<template>
  <div class="cus-indent xdh-tree ">
    <el-tree :data="data" node-key:="label" show-checkbox :indent="50">
    </el-tree>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss" >
  @import "../../../../src/style/_mixin";
  .cus-indent.xdh-tree{
    @include tree-indent(50px);
  }
  // 下面为 mixin 的内容
  /*.el-tree {
    background:gray;
    div[role=group]{
      .el-tree-node__expand-icon::after {
        content: '';
        width: $indent - 6px;//calc(12px + 48px - 18px);
        left: $indent * -1 + 12px; //calc( 48px * -1 + 12px );
      }
    }
  }*/
</style>
<script>
  export default {
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
参考 el-tree 的属性
<!--
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

-->
