<script>
  export default {
    data() {
      return {
        value1: [],
        value2: [],
        value31: [],
        value32: [],
        value4: ['110000', '110101', '110101001000'],
        value5: [],
        value6: [],
        value7: [],
        customData: [
          {
            value: 100,
            label: '广东省',
            children: [
              {
                value: 1001,
                label: '广州市',
                children: [
                  {
                    value: 10011,
                    label: '越秀区'
                  }
                ]
              }
            ]
          },
          {
            value: 101,
            label: '湖南省',
            children: [
              {
                value: 1011,
                label: '长沙市',
                children: [
                  {
                    value: 10011,
                    label: '岳麓区'
                  }
                ]
              }
            ]
          }
        ],
        selectProps: {
          size: 'mini'
        },
        rules: {
          value1: {type: 'array', required: true, trigger: 'change'},
          value2: {type: 'array', required: true, trigger: 'change'}
        },
        formModel: {
          value1: [],
          value2: []
        }
      }
    },
    methods: {
      handleChange(val) {
        console.log('page', val)
      },
      handleSubmit() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            alert('submit!');
            console.log(JSON.stringify(this.formModel))
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .mod {
    padding: 20px;
  }
</style>

## AreaSelector 中国行政区级联选择
### 基础用法(读取系统默认数据)
:::demo
```html
<template>
    <div class="mod">
      <div>显示全部层级</div>
      <xdh-area-selector v-model="value1" show-all @change="handleChange"></xdh-area-selector>
      {{value1}}
      <div>逐级显示</div>
      <xdh-area-selector v-model="value2"></xdh-area-selector>
      {{value2}}
    </div>
</template>

<script>
export default {
    components: {xdhAreaSelector},
    data() {
      return {
        value1: [],
        value2: []
      }
    },
    methods: {
      handleChange(val) {
        console.log('handleChange', val)
      }
    }
  }
</script>
```
:::

### 自定义数据
:::demo
```html
<template>
    <div class="mod">
      <xdh-area-selector v-model="value31" show-all :custom-data="customData" :level="3"></xdh-area-selector>
      {{value31}}
    </div>
</template>

<script>
export default {
    components: {xdhAreaSelector},
    data() {
      return {
        value31: [],
        customData: [
          {
            value: 100,
            label: '广东省',
            children: [
              {
                value: 1001,
                label: '广州市',
                children: [
                  {
                    value: 10011,
                    label: '越秀区'
                  }
                ]
              }
            ]
          },
          {
            value: 101,
            label: '湖南省',
            children: [
              {
                value: 1011,
                label: '长沙市',
                children: [
                  {
                    value: 10011,
                    label: '岳麓区'
                  }
                ]
              }
            ]
          }
        ],
      }
    }
  }
</script>
```
:::


### 回填数据
:::demo
```html
<template>
    <div class="mod">
      <xdh-area-selector v-model="value4"></xdh-area-selector>
      {{value4}}
    </div>
</template>

<script>
export default {
    components: {xdhAreaSelector},
    data() {
      return {
        value4: ['110000', '110101', '110101001000']
      }
    }
  }
</script>
```
:::

### 指定层级
:::demo
```html
<template>
    <div class="mod">
      <xdh-area-selector v-model="value5" show-all :level="1">
      </xdh-area-selector>
      {{value5}}
    </div>
</template>

<script>
export default {
    components: {xdhAreaSelector},
    data() {
      return {
        value5: []
      }
    }
  }
</script>
```
:::

### 表单验证
:::demo
```html
<template>
    <div class="mod">
      <el-form :model="formModel" :rules="rules" ref="ruleForm">
        <el-form-item label="地址选择1" prop="value1">
          <xdh-area-selector :select-props="selectProps"
                             v-model="formModel.value1"
                             show-all></xdh-area-selector>
        </el-form-item>
        <el-form-item label="地址选择2" prop="value2">
          <xdh-area-selector :select-props="selectProps"
                             v-model="formModel.value2"></xdh-area-selector>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" @click="handleSubmit">submit</el-button>
        </el-form-item>
      </el-form>
      {{formModel.value}}
    </div>
</template>

<script>
export default {
    components: {xdhAreaSelector},
    data() {
      return {
        selectProps: {
          size: 'mini'
        },
        rules: {
          value1: {type: 'array', required: true, trigger: 'change'},
          value2: {type: 'array', required: true, trigger: 'change'}
        },
        formModel: {
          value1: [],
          value2: []
        }
      }
    },
     methods: {
       handleSubmit() {
         this.$refs.ruleForm.validate((valid) => {
           if (valid) {
             alert('submit!');
             console.log(JSON.stringify(this.formModel))
           } else {
             console.log('error submit!!');
             return false;
           }
         });
       }
     }
  }
</script>
```
:::

### 属性
|参数|说明|类型|可选值|默认值|
|----|----|----|----|----|
|selectProps|select 配置项|Object|-|-|
|showAll|true为显示全部下拉框，false为只显示首级下拉框，每级触发|Boolean|true/false|true|
|selectText|省/市/县区/乡镇街道，每个下拉框对应的placeholder|Array|-|'请选择省', '请选择市', '请选择县区', '请选择乡镇街道'|
|level|显示的层级数，至少有1级以上|Number|-|4|
|customData|自定义数据，如果为空则读取系统数据|Array|-|-|

### 事件
|事件名称|说明|回调参数|
|----|----|----|
|change|select改变时触发|areaId 当前选中的下拉框的id|
