<script>
import XdhSelect from '@/widgets/xdh-select/xdh-select.vue'
export default {
  data() {
    return {
      selected1: 3,
      options1: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })(),
      selected2: 3,
      options2: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })(),
      selected3: 3,
      options3: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })(),
      selected4: [3],
      options4: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })(),
      selected5: {id: 3},
      optionMap: {label: 'address', value: 'code'},
      options5: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            address: `广州市越秀区${i}号`,
            code: {id: i}
          });
        }
        return arr;
      })()
    }
  },
  components: {
    XdhSelect
  }
};
</script>

## xdh-select

当一次加载的数据量比较大时，使用该组件可以使渲染出的 dom 节点数量固定，以节省渲染的开销。文档： [xdh-select](#/src/widgets%2Fmodule-widgets_xdh-select.html)

### 基础用法

:::demo  dom-limit 属性默认为true, dom-num 为每页渲染的节点数，最终会渲染 3 页。如 dom-num=5,则最终渲染的 dom 节点会固定在 15 个以内

```html
<template>
  <div>
    <xdh-select v-model="selected1" :dom-num="5" dom-limit :data="options1">
    </xdh-select>
  </div>
</template>

<script>
import XdhSelect from '@/widgets/xdh-select/xdh-select.vue'
export default {
  data() {
    return {
      selected1: 3,
      options1: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })()
    }
  },
  components: {
    XdhSelect
  }
};
</script>
```

:::

### 可搜索

使用搜索功能查找选项
:::demo 支持添加 filterable 开启搜索功能,搜索结果的 dom 节点数也是固定的

```html
<template>
  <div>
    <xdh-select v-model="selected2" :dom-num="5" dom-limit :data="options2" filterable>
    </xdh-select>
  </div>
</template>

<script>
import XdhSelect from '@/widgets/xdh-select/xdh-select.vue'
export default {
  data() {
    return {
      selected2: 3,
      options2: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })()
    }
  },
  components: {
    XdhSelect
  }
};
</script>
```

:::

### 自定义节点

可使用作用域插槽自定义节点样式
:::demo

```html
<template>
  <div>
    <xdh-select v-model="selected3" :dom-num="5" dom-limit :data="options3" filterable>
     <template slot-scope="{item}" slot="options">
       {{item.label}} -- {{item.value}}
       </template>
    </xdh-select>
  </div>
</template>

<script>
import XdhSelect from '@/widgets/xdh-select/xdh-select.vue'
export default {
  data() {
    return {
      selected3: 3,
      options3: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })()
    }
  },
  components: {
    XdhSelect
  }
};
</script>
```
:::

### 多选

支持多选功能
:::demo 注意初始值必须是一个数组，否则会报错

```html
<template>
  <div>
    <xdh-select v-model="selected4" :dom-num="5" :data="options4" multiple>
    </xdh-select>
  </div>
</template>

<script>
import XdhSelect from '@/widgets/xdh-select/xdh-select.vue'
export default {
  data() {
    return {
      selected4: [3],
      options4: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            label: `广州市越秀区${i}号`,
            value: i
          });
        }
        return arr;
      })()
    }
  },
  components: {
    XdhSelect
  }
};
</script>
```
:::

### 自定义选项option-map

当数据源的与规定的label和value不匹配时，可自定义option-map,无需另外转换列表
:::demo

```html 如果value是一个对象，必须设置value-key属性
<template>
  <div>
    <xdh-select v-model="selected5" :option-map="optionMap" :dom-num="5" :data="options5" value-key="id">
    </xdh-select>
  </div>
</template>

<script>
import XdhSelect from '@/widgets/xdh-select/xdh-select.vue'
export default {
  data() {
    return {
      selected5: {id: 3},
      optionMap: {label: 'address', value: 'code'},
      options5: (() => {
        let arr = [];
        for (let i = 1; i <= 2000; i++) {
          arr.push({
            address: `广州市越秀区${i}号`,
            code: {id: i}
          });
        }
        return arr;
      })()
    }
  },
  components: {
    XdhSelect
  }
};
</script>
```
:::

### 其他
除了以上功能外，该组件还继承了el-select的大部分功能，如 远程搜索，创建条目，单选时清空选项等。
详细使用方法可参考element-ui（2.3.7版本）的el-select介绍

[http://element-cn.eleme.io/#/zh-CN/component/select](http://element-cn.eleme.io/#/zh-CN/component/select)

但该组件不支持el-select的分组功能,如果你真的想使用，可以将dom-limit属性设为false,但此时不再支持dom渲染数量限制，用法将与el-select完全一样。

### 新增属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 选项数据数组 | Array | - | [] |
| dom-limit | 是否开启固定节点数 | Boolean | - | true |
| dom-num | 每页渲染的节点数，共渲染3页 | Number | - | 10 |
| option-map | 自定义label,value,disabled名称 | Object | - | null |

### 新增Slot
| name | 说明                              |
| ------ | ---------------------------------------- |
| options | 作用域插槽，添加自定义选项，插槽提供的选项名称为 item |

### 继承自el-select的属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| value-key | 作为 value 唯一标识的键名，绑定值为对象类型时必填 | string | — | value |
| size | 输入框尺寸 | string | medium/small/mini | — |
| clearable | 单选时是否可以清空选项 | boolean | — | false |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| name | select input 的 name 属性 | string | — | — |
| auto-complete | select input 的 autocomplete 属性 | string | — | off |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字 | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字 | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false | boolean | - | true |


### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| blur |	使 input 失去焦点，并隐藏下拉框 | - |
