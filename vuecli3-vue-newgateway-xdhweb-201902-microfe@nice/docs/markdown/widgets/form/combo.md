<script>
  import XdhCombo from '@/widgets/xdh-combo'

  export default {
    components: {XdhCombo},
    data() {
      return {
        value1: 2,
        value2: [1, 2],
        data1: [
          {value: 1, label: '1'},
          {value: 2, label: '2'},
          {value: 3, label: '3'},
          {value: 123, label: '123'}
        ]
      }
    },
    watch: {
      value(val) {
        console.log(val)
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
.text{padding:5px 0;}
</style>

## Combo 组合框
组合框（combo）显示一个可编辑的文本框和下拉列表。用户可以直接输入文本，或者从下拉列表中选择一个或多个现成的值。

### 基础用法
:::demo
```html
<template>
  <xdh-combo v-model="value1" :option-data="data1" clearable></xdh-combo>
  <div class="text">输入的值为：{{value1}}</div>
</template>
<script>
  export default {
    data() {
      return {
        value1: 2,
        data1: [
          {value: 1, label: '1'},
          {value: 2, label: '2'},
          {value: 3, label: '3'},
          {value: 123, label: '123'}
        ]
      }
    },
    watch: {
      value(val) {
        console.log(val)
      }
    }
  }
</script>
```
:::


### 下拉框多选用法
:::demo
```html
<template>
  <div class="text">需按回车保存自定义的选项内容</div>
  <xdh-combo v-model="value2" multiple :option-data="data1"></xdh-combo>
  <div class="text">输入的值为：{{value2}}</div>
</template>
<script>
  export default {
    data() {
      return {
        value2: 1,
        data1: [
          {value: 1, label: '1'},
          {value: 2, label: '2'},
          {value: 3, label: '3'},
          {value: 123, label: '123'}
        ]
      }
    },
    watch: {
      value(val) {
        console.log(val)
      }
    }
  }
</script>
```
:::

### 新增属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| optionData | options选项数据数组 | Array | - | [] |
| optionProp | 自定义options选项的label,value,disabled名称 | Object | - | null |

### 插槽说明
| name | 说明                              |
| ------ | ---------------------------------------- |
| options | 作用域插槽，添加自定义选项，插槽提供的选项名称为 item |
