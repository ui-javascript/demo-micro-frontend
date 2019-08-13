## 虚拟滚动表格

需要与xdh-table结合使用

### 基础用法

:::demo
```html
<template>
 <div>
   <div style="padding-bottom:10px;">
     <el-checkbox v-model="auto">自动追加数据</el-checkbox>
     <el-button @click="appendData" style="margin-left:10px;">追加数据</el-button>
     <el-button @click="clearData">清空数据</el-button>
     <el-button @click="loadData(100)">重新载入数据</el-button>


   </div>
    <xdh-virtual-table :items="items" :item-height="48" :limit="20">
      <template slot-scope="scope">
        <xdh-table :columns="columns" :data="scope.data" border height="500" @on-reach-bottom="autoLoadData"></xdh-table>
      </template>
    </xdh-virtual-table>
</div>
</template>
<script>
import XdhVirtualTable from '@/widgets/xdh-virtual-table'
export default {
  components: {
    XdhVirtualTable
  },
  data() {
    return {
      auto: false,
      columns: [
        {
          label: 'ID',
          prop: 'id',
          fixed:true
        }, {
          label: '日期',
          prop: 'date'
        }, {
          label: '姓名',
          prop: 'name'
        }, {
          label: '省份',
          prop: 'province',
          filterType: 'dict'
        }, {
          label: '城市',
          prop: 'city'
        }, {
          label: 'ID',
          prop: 'id'
        }, {
          label: '日期',
          prop: 'date'
        }, {
          label: '姓名',
          prop: 'name'
        }, {
          label: '省份',
          prop: 'province',
          filterType: 'dict'
        }, {
          label: '城市',
          prop: 'city'
        }, {
          label: 'ID',
          prop: 'id'
        }, {
          label: '日期',
          prop: 'date'
        }, {
          label: '姓名',
          prop: 'name'
        }, {
          label: '省份',
          prop: 'province',
          filterType: 'dict'
        }, {
          label: '城市',
          prop: 'city',
          fixed: 'right'
        }
       ],
      items: [],
      count: 0
    }
  },
  methods: {
    loadData(len) {
       this.items = []
       this.count = 0;
      for (let i = 0; i < len; i++) {
        ++this.count
        this.items.push({
          id: this.count,
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区'
        })
      }
    },
    appendData() {
       let items = []
       for (let i = 0; i < 100; i++) {
               ++this.count
               items.push({
                 id: this.count,
                 date: '2016-05-03',
                 name: '王小虎',
                 province: '上海',
                 city: '普陀区'
               })
        }
        this.items = this.items.concat(items)
    },
    autoLoadData() {
      this.auto && this.appendData()
    },
    clearData() {
      this.count = 0;
      this.items = []
    }
  },
  created() {
    this.loadData(100)
  }
}
</script>
```
:::
