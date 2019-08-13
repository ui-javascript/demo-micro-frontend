<script>
import XdhInfoBox from '@/widgets/xdh-info-box'
export default {
  components: {
    XdhInfoBox
  },
  data() {
    return {
    }
  }
};
</script>

## InfoBox 信息框

适用于数据统计页面展示,文档： [xdh-info-box](#/src/widgets%2Fmodule-widgets_xdh-info-box.html)

### 基础用法
:::demo
```html
<template>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="6">
      <xdh-info-box title="消息" :number="10000" icon="el-icon-message"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box title="消息" :number="10000" icon="el-icon-message" theme="success"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box title="消息" :number="10000" icon="el-icon-message" theme="warning"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box title="消息" :number="10000" icon="el-icon-message" theme="danger"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box title="消息" :number="10000" icon="el-icon-message" theme="info"></xdh-info-box>
    </el-col>
  </el-row>
  <h2>gradient 底色渐变</h2>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="6">
      <xdh-info-box gradient title="消息" :number="10000" icon="el-icon-message"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient title="消息" :number="10000" icon="el-icon-message" theme="success"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient title="消息" :number="10000" icon="el-icon-message" theme="warning"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient title="消息" :number="10000" icon="el-icon-message" theme="danger"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient title="消息" :number="10000" icon="el-icon-message" theme="info"></xdh-info-box>
    </el-col>
  </el-row>
</template>
```
:::


### background 类型用法
:::demo
```html
<template>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="6">
      <xdh-info-box type="background" title="消息" :number="10000" icon="el-icon-message"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="background" title="消息" :number="10000" icon="el-icon-message" theme="success"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="background" title="消息" :number="10000" icon="el-icon-message" theme="warning"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="background" title="消息" :number="10000" icon="el-icon-message" theme="danger"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="background" title="消息" :number="10000" icon="el-icon-message" theme="info"></xdh-info-box>
    </el-col>
  </el-row>
  <h2>gradient 底色渐变</h2>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="6">
      <xdh-info-box gradient type="background" title="消息" :number="10000" icon="el-icon-message"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="background" title="消息" :number="10000" icon="el-icon-message" theme="success"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="background" title="消息" :number="10000" icon="el-icon-message" theme="warning"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="background" title="消息" :number="10000" icon="el-icon-message" theme="danger"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="background" title="消息" :number="10000" icon="el-icon-message" theme="info"></xdh-info-box>
    </el-col>
  </el-row>
</template>
```
:::

### smallbox 类型用法
:::demo
```html
<template>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="6">
      <xdh-info-box type="smallbox" title="消息" :number="10000" icon="el-icon-message"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="success"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="warning"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="danger"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="info"></xdh-info-box>
    </el-col>
  </el-row>
  <h2>gradient 底色渐变</h2>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="6">
      <xdh-info-box gradient type="smallbox" title="消息" :number="10000" icon="el-icon-message"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="success"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="warning"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="danger"></xdh-info-box>
    </el-col>
    <el-col :span="6">
      <xdh-info-box gradient type="smallbox" title="消息" :number="10000" icon="el-icon-message" theme="info"></xdh-info-box>
    </el-col>
  </el-row>
</template>
```
:::


### slot 插槽的使用
:::demo
```html
<template>
  <el-row type="flex" :gutter="20" justify="space-between">
    <el-col :span="8">
      <xdh-info-box title="理财收益" to="/widgets/info-box" :number="109800" :decimals="2" icon="iconfont icon-purse">
        <el-progress :stroke-width="3" :percentage="70"></el-progress>
        30天内增加70％
      </xdh-info-box>
    </el-col>
    <el-col :span="8">
      <xdh-info-box type="background" to="/widgets/info-box" title="消费" :decimals="2" :number="129381923.22" icon="iconfont icon-card-solid">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="68" status="exception"></el-progress>
        在线消费占68%
      </xdh-info-box>
    </el-col>
    <el-col :span="8">
      <xdh-info-box type="smallbox" to="/widgets/info-box" title="今天收入" :decimals="2" :number="123987888.65" icon="iconfont icon-rmb">
        我的天呐，怎么这么多钱！
      </xdh-info-box>
    </el-col>
  </el-row>
</template>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 标题 | String | - | 标题 |
| number | 数值 | Number | - | 0 |
| decimals | 数值精度到小数点后几位数 | Number | - | 0 |
| icon | 显示的字体图标 **[iconfont](#/guide/icon)** | String | - | - |
| type | 类型 | String | default / background / smallbox | - |
| gradient | 底色渐变 | Boolean | true / false | false |
| theme | 主题 | String | default / success / warning / danger / info | - |
| shadow | 设置阴影显示时机 | String | always / hover / never | 'always' |
| to | 跳转目标路由 | String | - | - |
| more-text | type为 smallbox 时,底部穿梭文案 | String | - | '更多' |

### 插槽

| name | 说明 |
|-----|-----|
| - | 嵌入其它辅助信息 |

### 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-click | 模块点击事件 | - |
