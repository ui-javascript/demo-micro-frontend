<script>
  import XdhLogin from 'E/xdh-login'

  export default {
    data() {
      return {
        align: '',
        theme: 'light',
        showPki: false
      }
    },
    components: {
      XdhLogin
    },
    methods: {
      handleLogin(model) {
        this.$message.success(`登录成功！用户名：${model.user}，密码：${model.password}`);
      }
    }
  }
</script>


## 登录页

### 基础用法
:::demo
```html
<template>
  <div style="height: 700px">
    <xdh-login @on-login="handleLogin"></xdh-login>
  </div>
</template>

<script>
  import XdhLogin from 'E/xdh-login'

  export default {
    components: {
      XdhLogin
    },
    methods: {
      handleLogin(model) {
        this.$message.success(`登录成功！用户名：${model.user}，密码：${model.password}`);
      }
    }
  }
</script>
```
:::

### 其它使用

:::demo
```html
<template>
  <el-row>
     <el-col :span="24">
       <el-radio-group v-model="align" size="mini">
         <el-radio-button label="">默认排列</el-radio-button>
         <el-radio-button label="left">left</el-radio-button>
         <el-radio-button label="right">right</el-radio-button>
       </el-radio-group>
       &nbsp;
       <el-radio-group v-model="theme" size="mini">
         <el-radio-button label="light">light</el-radio-button>
         <el-radio-button label="dark">dark</el-radio-button>
       </el-radio-group>
       &nbsp;
       <el-radio-group v-model="showPki" size="mini">
         <el-radio-button :label="true">显示PKI</el-radio-button>
         <el-radio-button :label="false">取消PKI</el-radio-button>
       </el-radio-group>
     </el-col> 
     <el-col :span="24">
        <hr>
         <xdh-login @on-login="handleLogin" :align="align" :theme="theme" :show-pki="showPki"></xdh-login>
     </el-col> 
  </el-row>
</template>

<script>
  import XdhLogin from 'E/xdh-login'

  export default {
    components: {
      XdhLogin
    },
    methods: {
      handleLogin(model) {
        this.$message.success(`登录成功！用户名：${model.user}，密码：${model.password}`);
      }
    }
  }
</script>
```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| background | 背景图片url | String | - | - |
| theme | 主题 | String | light / dark | light |
| logo | 系统logo Url | String | - | - |
| title | 系统标题 | String | - | - |
| footnote | 系统注脚 | String | - | - |
| show-pki | 显示 PKI 登录 | Boolean | true / false | false |
| align | 登录窗口排列 | String | left / right | - |


### Events 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-login | 用户名登录触发 | 一个参数：用户输入数据对象 { user: 输入用户名, password：输入用户密码 } |
| on-login-pki | PKI 登录触发 | - |


### slots 插槽

| name | 说明 |
|-----|-----|
| header | 页头插槽 |
| footer | 页底插槽 |
