<script>
  export default {
    data() {
      return {
         data: [
          {
            name: 'account',
            type: 'input',
            label: '账号名称',
            rules: {
              required: true
            }
          },
          {
            name: 'category',
            type: 'select',
            label: '类型',
            props: {
              style: {width: '100%'}
            },
            options: [
              {label: '选项一', value: '1'},
              {label: '选项二', value: '2'}
            ],
            rules: {
              required: true
            }
          },
          {
            name: 'traffic',
            type: 'checkbox',
            label:'交通工具',
            rules: {
              required: true
            },
            options: [
              {label:'飞机', value:1},
              {label:'火车', value:2},
              {label:'汽车', value:3}
            ]
          },
          {
            name: 'range',
            type: 'radio',
            label:'时间段',
            rules: {
              required: true
            },
            options: [
              {label:'上午', value:1},
              {label:'下午', value:2}
            ]
          },
          {
            name: 'time',
            type: 'datePicker',
            label:'日期时间',
            rules: {
              required: true
            }
          },
          {
            name: 'file',
            type: 'upload',
            label:'文件',
            rules: {
              required: true
            }
          },
          {
            name: 'desc',
            type: 'input',
            label: '描述',
            props: {
              type: 'textarea',
              rows: 5
            }
          }
         ],
        data2: [
            {
              type: 'title',
              props: {
                title: '基本信息',
                simple: true,
                border: true,
                theme: 'success'
              }
            },
            {
              name: 'account',
              type: 'input',
              label: '账号名称',
              rules: {
                required: true
              }
            },
            {
              name: 'category',
              type: 'select',
              label: '类型',
              props: {
                style: {width: '100%'}
              },
              options: [
                {label: '选项一', value: 'cate1'},
                {label: '选项二', value: 'cate2'}
              ],
              rules: {
                required: true
              },
              branches: {
                'cate1': [
                  {
                    label: '名称一',
                    type: 'input',
                    name: 'option1'
                  }
                ],
                'cate2': [
                  {label: '名称二', type: 'input', name: 'option2'}
                ]
              }
            }
          ],
          data3: [
            {
              name: 'accounts',
              inline: true,
              children: [this.createItem(0)]
            }
          ]
      }
    },
    methods: {
      handleSubmit(model) {
        console.log(model)
        this.$alert('提交数据')
      },
      createItem(index) {
        return [
          {
            name: 'account',
            label: '账号' + (index + 1),
            type: 'input',
            rules: {required: true},
            props: {
              style: {
                width: '300px'
              }
            }
          }
        ]
      },
      add() {
        let children = this.data3[0].children
        children.push(this.createItem(children.length))
      },
      remove(index) {
        let children = this.data3[0].children
        children.splice(index, 1)
      },
      handleChange(model) {
        console.log(model)
      }
    }
  }
</script>
## From 自定义表单

可通过配置数据创建表单，支持表单分支和子表单。文档： [xdh-form](#/src/widgets%2Fmodule-widgets_xdh-form.html)

### 基础用法

:::demo
```html
<template>
  <xdh-form :data="data" label-width="80px" @on-submit="handleSubmit"></xdh-form>
</template>
<script>
  export default {
    data() {
      return {
         data: [
          {
            name: 'account',
            type: 'input',
            label: '账号名称',
            rules: {
              required: true
            }
          },
          {
            name: 'category',
            type: 'select',
            label: '类型',
            props: {
              style: {width: '100%'}
            },
            options: [
              {label: '选项一', value: '1'},
              {label: '选项二', value: '2'}
            ],
            rules: {
              required: true
            }
          },
          {
            name: 'desc',
            type: 'input',
            label: '描述',
            props: {
              type: 'textarea',
              rows: 5
            }
          }
         ]
      }
    },
    methods: {
      handleSubmit(model) {
        console.log(model)
        this.$alert('提交数据')
      }
    }
  }
</script>
```
:::

### 分支联动
:::demo
```html
<template>
      <xdh-form :data="data2"
                label-width="80px"
                @on-submit="handleSubmit"
                :inline="false">
      </xdh-form>
</template>

<script>
export default {
  data() {

    return {
        data2: [
            {
              type: 'title',
              props: {
                title: '基本信息',
                simple: true,
                border: true,
                theme: 'success'
              }
            },
            {
              name: 'account',
              type: 'input',
              label: '账号名称',
              rules: {
                required: true
              }
            },
            {
              name: 'category',
              type: 'select',
              label: '类型',
              props: {
                style: {width: '100%'}
              },
              options: [
                {label: '选项一', value: 'cate1'},
                {label: '选项二', value: 'cate2'}
              ],
              rules: {
                required: true
              },
              branches: {
                'cate1': [
                  {
                    label: '名称一',
                    type: 'input',
                    name: 'option1'
                  }
                ],
                'cate2': [
                  {label: '名称二', type: 'input', name: 'option2'}
                ]
              }
            }
          ]
        }
      }
    }

  }
}
</script>

```
:::

### 动态字段表单
:::demo
```html
<template>
      <xdh-form :data="data3"
                ref="form"
                label-width="80px"
                @on-submit="handleSubmit"
                :inline="false">
        <template slot="row-append" slot-scope="scope">
          <el-button @click="remove(scope.index)" v-if="scope.index>0">删除</el-button>
          <el-button @click="add">增加</el-button>
        </template>
      </xdh-form>
</template>

<script>
  export default {
    data() {
      return {
          data3: [
            {
              name: 'accounts',
              inline: true,
              children: [this.createItem(0)]
            }
          ]
      }
    },
    methods: {
      handleSubmit(model) {
        console.log(model)
        this.$alert('提交数据')
      },
      createItem(index) {
        return [
          {
            name: 'account',
            label: '账号' + (index + 1),
            type: 'input',
            rules: {required: true},
            props: {
              style: {
                width: '300px'
              }
            }
          }
        ]
      },
      add() {
        let children = this.data3[0].children
        children.push(this.createItem(children.length))
      },
      remove(index) {
        let children = this.data3[0].children
        children.splice(index, 1)
      }
    }
  }
</script>

```
:::
