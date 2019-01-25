<script>
  export default {
    data() {
      return {
        data1: [
              {
                id: '111',
                label: '标签一'
              },
              {
                id: '222',
                label: '标签2'
              },
              {
                id: '333',
                label: '标签3'
              },
              {
                id: '444',
                label: '标签4'
              },
              {
                id: '555',
                label: '标签5'
              },
              {
                id: '666',
                label: '标签6'
              },
              {
                id: '777',
                label: '标签7'
              },
              {
                id: '888',
                label: '标签8'
              },
              {
                id: '999',
                label: '标签9'
              },
              {
                id: '100',
                label: '标签100'
              }
          ],
          data2: [
              {
                id: '111',
                label: '标签一',
                disabled:true
              },
              {
                id: '222',
                label: '标签2',
                disabled:true
              }
          ],
          data3: [
              {
                id: '111',
                label: '标签一'
              },
              {
                id: '222',
                label: '标签2'
              },
              {
                id: '333',
                label: '标签3'
              },
              {
                id: '444',
                label: '标签4'
              },
              {
                id: '555',
                label: '标签5'
              },
              {
                id: '666',
                label: '标签6'
              },
              {
                id: '777',
                label: '标签7'
              },
              {
                id: '888',
                label: '标签8'
              },
              {
                id: '999',
                label: '标签9'
              },
              {
                id: '1000',
                label: '标签10'
              },
              {
                id: '1001',
                label: '标签11'
              },
              {
                id: '1002',
                label: '标签12'
              },
              {
                id: '1003',
                label: '标签13'
              },
              {
                id: '1004',
                label: '标签14'
              },
              {
                id: '1005',
                label: '标签15'
              },
              {
                id: '1006',
                label: '标签16'
              },
              {
                id: '1007',
                label: '标签17'
              },
              {
                id: '1008',
                label: '标签18'
              },
              {
                id: '1009',
                label: '标签19'
              },
              {
                id: '1020',
                label: '标签20'
              },
              {
                id: '1021',
                label: '标签21'
              },
              {
                id: '1022',
                label: '标签22'
              },
              {
                id: '1023',
                label: '标签23'
              },
              {
                id: '1024',
                label: '标签24'
              },
              {
                id: '1025',
                label: '标签25'
              },
              {
                id: '1026',
                label: '标签26'
              },
              {
                id: '1027',
                label: '标签27'
              },
              {
                id: '1028',
                label: '标签28'
              },
              {
                id: '1029',
                label: '标签29'
              },
              {
                id: '1030',
                label: '标签30'
              }
           ],
         value1: ['222', '444', '666'],
         value2: ['222']
      }
    }
  }
</script>

## TagSelect 标签选择器

### 基础用法。文档： [xdh-tag-select](#/src/widgets%2Fmodule-widgets_xdh-tag-select.html)

:::demo
```html
<template>
 <xdh-tag-select :data="data1" v-model="value1"></xdh-tag-select>
</template>

<script>
  export default {
    data() {
      return {
        data1: [
              {
                id: '111',
                label: '标签一'
              },
              {
                id: '222',
                label: '标签2'
              },
              {
                id: '333',
                label: '标签3'
              },
              {
                id: '444',
                label: '标签4'
              },
              {
                id: '555',
                label: '标签5'
              },
              {
                id: '666',
                label: '标签6'
              },
              {
                id: '777',
                label: '标签7'
              },
              {
                id: '888',
                label: '标签8'
              },
              {
                id: '999',
                label: '标签9'
              },
              {
                id: '100',
                label: '标签100'
              }
          ],
         value: ['222', '444', '666']
      }
    },
    methods: {}
  }
</script>
```
:::

### 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被可选的项目的数量。

:::demo
```html
<template>
 <xdh-tag-select :min="1"  :max="4" :data="data1"></xdh-tag-select>
</template>

<script>
  export default {
    data() {
      return {
        data1: [
              {
                id: '111',
                label: '标签一'
              },
              {
                id: '222',
                label: '标签2'
              },
              {
                id: '333',
                label: '标签3'
              },
              {
                id: '444',
                label: '标签4'
              },
              {
                id: '555',
                label: '标签5'
              },
              {
                id: '666',
                label: '标签6'
              },
              {
                id: '777',
                label: '标签7'
              },
              {
                id: '888',
                label: '标签8'
              },
              {
                id: '999',
                label: '标签9'
              },
              {
                id: '100',
                label: '标签100'
              }
          ]
      }
    },
    methods: {}
  }
</script>
```
:::

### 禁用状态

数据对象增加字段,`disabled:true` 即可。

:::demo
```html
<template>
 <xdh-tag-select :data="data2" v-model="value2"></xdh-tag-select>
</template>

<script>
  export default {
    data() {
      return {
          data2: [
              {
                id: '111',
                label: '标签一',
                disabled:true
              },
              {
                id: '222',
                label: '标签2',
                disabled:true
              }
          ],
         value2: ['222']
      }
    },
    methods: {}
  }
</script>
```
:::

### 开启折叠

通过 `expandable` 属性开启折叠, 然后 `expand` 属性设置初始状态

:::demo
```html
<template>
 <xdh-tag-select :expandable="true" :expand="false" :data="data3"></xdh-tag-select>
</template>

<script>
  export default {
    data() {
      return {
        data3: [
              {
                id: '111',
                label: '标签一'
              },
              {
                id: '222',
                label: '标签2'
              },
              {
                id: '333',
                label: '标签3'
              },
              {
                id: '444',
                label: '标签4'
              },
              {
                id: '555',
                label: '标签5'
              },
              {
                id: '666',
                label: '标签6'
              },
              {
                id: '777',
                label: '标签7'
              },
              {
                id: '888',
                label: '标签8'
              },
              {
                id: '999',
                label: '标签9'
              },
              {
                id: '1000',
                label: '标签10'
              },
              {
                id: '1001',
                label: '标签11'
              },
              {
                id: '1002',
                label: '标签12'
              },
              {
                id: '1003',
                label: '标签13'
              },
              {
                id: '1004',
                label: '标签14'
              },
              {
                id: '1005',
                label: '标签15'
              },
              {
                id: '1006',
                label: '标签16'
              },
              {
                id: '1007',
                label: '标签17'
              },
              {
                id: '1008',
                label: '标签18'
              },
              {
                id: '1009',
                label: '标签19'
              },
              {
                id: '1020',
                label: '标签20'
              },
              {
                id: '1021',
                label: '标签21'
              },
              {
                id: '1022',
                label: '标签22'
              },
              {
                id: '1023',
                label: '标签23'
              },
              {
                id: '1024',
                label: '标签24'
              },
              {
                id: '1025',
                label: '标签25'
              },
              {
                id: '1026',
                label: '标签26'
              },
              {
                id: '1027',
                label: '标签27'
              },
              {
                id: '1028',
                label: '标签28'
              },
              {
                id: '1029',
                label: '标签29'
              },
              {
                id: '1030',
                label: '标签30'
              }
           ]
      }
    },
    methods: {}
  }
</script>
```
:::

### 不同尺寸

组件提供除了默认值以外的三种尺寸(`medium、small、mini`)，可以在不同场景下选择合适的按钮尺寸

:::demo
```html
<template>
   <div>
    <xdh-tag-select :data="data1"></xdh-tag-select>
    <xdh-tag-select size="medium" :data="data1"></xdh-tag-select>
    <xdh-tag-select size="small" :data="data1"></xdh-tag-select>
    <xdh-tag-select size="mini" :data="data1"></xdh-tag-select>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data1: [
              {
                id: '111',
                label: '标签一'
              },
              {
                id: '222',
                label: '标签2'
              },
              {
                id: '333',
                label: '标签3'
              },
              {
                id: '444',
                label: '标签4'
              },
              {
                id: '555',
                label: '标签5'
              },
              {
                id: '666',
                label: '标签6'
              },
              {
                id: '777',
                label: '标签7'
              },
              {
                id: '888',
                label: '标签8'
              },
              {
                id: '999',
                label: '标签9'
              },
              {
                id: '100',
                label: '标签100'
              }
          ]
      }
    }
  }
</script>
```
:::



### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 标签对象数据集合,数据项对象字段包含 id, label 可通过props属性配置| Array | -  | - |
| value | 绑定值，标签 props.id 集合| Array | -  | - |
| min | 可被选中的最小数量 | Number | -  | - |
| max | 可被选中的最大数量 | Number | -  | - |
| size | 选择按钮的尺寸 | String | medium / small / mini | - |
| hide-check-all | 隐藏`全部`按钮, 设置 min/max 时该配置无效 | Boolean | - | false |
| expandable | 是否折叠, 显示`展开/收起`按钮 | Boolean | - | false |
| expand | 初始展开状态,expandable为True 时生效 | Boolean | - | true |

### data 参数个体对象

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| id | 标签唯一标识 | String | -  | - |
| label | 标签显示文本 | String | -  | - |
| disabled | 标签禁止点击 | Boolean | -  | false |

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| id | 标签唯一标识 | String | -  | id |
| label | 标签显示文本 | String | -  | label |
| disabled | 标签禁点击 | String | -  | disabled |


### 插槽

| name | 说明 |
|-----|-----|
| allTag | 全部按钮内容 |


### 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-change | 操作单个标签后触发 | 参数共两个,依次为：第一当前操作的标签数据对象，第二为选中的标签对象数组集 |
| on-checked-all | 全选按钮触发事件|共一个参数当前状态:on-全选中，off-全取消 |
