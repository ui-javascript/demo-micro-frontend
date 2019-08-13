<script>
  export default {
    data() {
      return {
        model: {
          title: '',
          remark: ''
        },
        model2: {
          title: '我是标题',
          remark: '备注文字说明'
        },
        rules: {
          title: [{required:true, message:'标题是必填项'}]
        },
        closed: true,
        closed2: true,
        closed3: true
      }
    },
    methods: {
      handleInsert(data) {
        // 回调表单数据
        console.log(data)
        // resolve 关闭对话框， reject 阻止关闭
        return Promise.resolve()
      },
       handleUpdate(data) {
        // 回调表单数据
        console.log(data)
        // resolve 关闭对话框， reject 阻止关闭
        return Promise.resolve()
      }
    }
  }
</script>

## DialogForm 对话框表单

对话框表单，通常用在对新增、修改等操作。文档： [xdh-dialog-form](#/src/widgets%2Fmodule-widgets_xdh-dialog-form.html)

### 基础用法

基本的新增表单

:::demo 新增数据，mode 指定 insert 或 update， 支持表单验证和表单提交回调函数

```html
<template>
  <div>
    <el-button @click="closed = false">显示</el-button>
    <xdh-dialog-form mode="insert"
                     title="新增"
                     :model="model"
                     :rules="rules"
                     :closed.sync="closed"
                     :on-insert="handleInsert">
    </xdh-dialog-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          title: '',
          remark: ''
        },
        rules: {
          title: [{required:true, message:'标题是必填项'}]
        },
        closed: true
      }
    },
    methods: {
      handleInsert(data) {
        // 回调表单数据
        console.log(data)
        // resolve 关闭对话框， reject 阻止关闭
        return Promise.resolve()
      }
    }
  }
</script>
```
:::

### 自定义表单项

对表单项模板自定义内容

:::demo 通过作用插槽自定义表单项

```html
<template>
  <div>
    <el-button @click="closed2 = false">显示</el-button>
    <xdh-dialog-form mode="insert"
                     title="新增"
                     :model="model"
                     :rules="rules"
                     :closed.sync="closed2"
                     :on-insert="handleInsert">
      <template slot-scope="scope">
        <el-form-item label="标题" prop="title">
           <el-input v-model="scope.model.title"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="scope.model.remark" type="textarea"></el-input>
        </el-form-item>
      </template>
    </xdh-dialog-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model: {
          title: '',
          remark: ''
        },
        rules: {
          title: [{required:true, message:'标题是必填项'}]
        },
        closed2: true
      }
    },
    methods: {
      handleInsert(data) {
        // 回调表单数据
        console.log(data)
        // resolve 关闭对话框， reject 阻止关闭
        return Promise.resolve()
      }
    }
  }
</script>
```
:::

### 编辑表单

基本的编辑表单

:::demo 通过设置mode 为 update 启动编辑模式，model传入组件的数据是单向的，表单项的值改变了，不会影响model，需要获取当前表单项的值时，可以通过实例的 currentModel 获取
```html
<template>
  <div>
    <el-button @click="closed3 = false">显示</el-button>
    <xdh-dialog-form mode="update"
                     title="编辑"
                     :model="model2"
                     :rules="rules"
                     :closed.sync="closed3"
                     :on-update="handleUpdate">
    </xdh-dialog-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        model2: {
          title: '我是标题',
          remark: '备注文字说明'
        },
        rules: {
          title: [{required:true, message:'标题是必填项'}]
        },
        closed3: true
      }
    },
    methods: {
      handleUpdate(data) {
        // 回调表单数据
        console.log(data)
        // resolve 关闭对话框， reject 阻止关闭
        return Promise.resolve()
      }
    }
  }
</script>
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| mode | 操作模式，新增还是修改 | String | insert/update  | insert |
| title | 对话框标题 | String | - | - |
| closed | 是否关闭，支持双向绑定修饰符 | Boolean | - | true |
| width | 对话框宽度 | String | - | 50% |
| max-height | 最大宽度 | String | - | auto |
| model | 模型数据 | Object | - | - |
| rules | 表单验证规则 | Object | - | - |
| label-position | 表单字段名称对齐方式 | String | - | right |
| label-width | 表单字段名称的宽度 | String | - | 80px |
| size | 表单项的尺寸 | String | medium / small / mini | - |
| on-insert | 增加动作回调函数，需要返回Promise | Function | - | - |
| on-update | 更新动作回调函数，需要返回Promise | Function | - | - |

### 插槽

| name | 说明 |
|-----|-----|
| - | 定义表单项，作用域插槽，参数： model、rules |
| footer | 定义底部按钮区内容 |

### 事件

| 事件名称 | 说明 | 回调参数 |
|----|----|----|
| open | 对话框打开时 | - |
| close | 对话框关闭时 | - |
