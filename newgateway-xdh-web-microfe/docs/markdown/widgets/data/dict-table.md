## DictTable 健值对表格

### 基础用法

:::demo
```html
<template>
    <xdh-dict-table :data="items"
                    :group="3"
                    label-align="center"
                    value-align="center"
                    style="width:100%;"></xdh-dict-table>
</template>
<script>
  import XdhDictTable from '@/widgets/xdh-dict-table'

  export default {
    components: {
      XdhDictTable
    },
    data() {
      return {
        items: [],
        count: 0
      }
    },
    methods: {
      loadData(len) {
        for (let i = 0; i < len; i++) {
          ++this.count
          this.items.push({
            label: '姓名' + i,
            value: '王小虎' + i
          })
        }
      }
    },
    created() {
      this.loadData(10)
    }
  }
</script>
```
:::

### 定义插槽内容

:::demo
```html
<template>
    <xdh-dict-table :data="items" :group="2" label-align="right" style="width:100%;">
      <template slot-scope="{item, row, column}" slot="label">
        {{item.label}}
      </template>
      <template slot-scope="{item, row, column}" slot="value">
        {{item.value}}, row: {{row}}, column: {{column}}
      </template>
    </xdh-dict-table>
</template>
<script>
  import XdhDictTable from '@/widgets/xdh-dict-table'

  export default {
    components: {
      XdhDictTable
    },
    data() {
      return {
        items: [],
        count: 0
      }
    },
    methods: {
      loadData(len) {
        for (let i = 0; i < len; i++) {
          ++this.count
          this.items.push({
            label: '姓名' + i,
            value: '王小虎' + i
          })
        }
      }
    },
    created() {
      this.loadData(10)
    }
  }
</script>
```
:::
