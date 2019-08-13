## Table组件

在 el-table的基础上扩展功能，支持列、行拖拽排序 和 无限滚动加载。 参数设置完全兼容el-table。文档： [xdh-table](#/src/widgets%2Fmodule-widgets_xdh-table.html)

### 基础用法

启用行、列拖拽排序，和滚动加载更多内容，自定义表头的筛选

:::demo
```html
<template>
    <xdh-table :data="data"
               :columns="columns"
               column-sortable
               row-sortable
               height="500"
               v-loading="loading"
               @on-reach-bottom="handleReachBottom"
               @on-filter="handleFilter"
               :open-filter="handleOpenFilter"
               border>
               <template slot="city" slot-scope="scope">
                 <el-tag>{{scope.row.city}}</el-tag>
               </template>

               <template slot-scope="scope">
                  <el-button size="small" type="primary">编辑</el-button>
               </template>

               <template slot="name-filter" slot-scope="scope">
                  <div>请输入数字筛选</div>
                 <el-form :inline="true" size="mini">
                   <el-form-item :label="scope.label">
                     <el-input-number v-model="numValue" :min="1" :max="10"></el-input-number>
                   </el-form-item>
                   <el-form-item>
                     <el-button type="primary" @click="handleFilter(scope,numValue)">筛选</el-button>
                   </el-form-item>
                 </el-form>
               </template>
    </xdh-table>
</template>
<script>
 export default {
    data() {
      return {
        count: 0,
        loading: false,
        data: [],
        columns: [
          {
            type: 'selection'
          },
          {
            label: 'ID',
            prop: 'id'
          }, {
            label: '日期',
            prop: 'date',
            filterType: 'date',
            filterable: true
          }, {
           label: '姓名',
           prop: 'name',
           filterable: true
         }, {
            label: '省份',
            prop: 'province',
            filterType: 'dict',
            filterable: true,
            renderHeader: this.renderColumnHeader
         }, {
            label: '城市',
            prop: 'city',
            filterType: 'string',
            filterable: true
         }, {
            label: '操作'
         }
        ],
        numValue: 1
      }
    },
    methods: {
      loadData(len) {
        for(let i=0; i<len; i++){
          ++this.count
          this.data.push({
            id: this.count,
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区'
          })
        }
      },
      handleReachBottom() {
       if(this.loading) return

        this.loading = true
        setTimeout(()=>{
          this.loadData(10)
          this.loading = false
        }, 1000)
      },
      renderColumnHeader(h, {column, $index}) {
        return h('span',
          {style: {color: '#f00'}},
          '新标题')
      },
      handleFilter(props, value) {
        alert(props.prop+':'+value)
      },
      handleOpenFilter(props) {
        return new Promise((resolve, reject) => {
          const data = [
            {value: 1, label: '1'},
            {value: 2, label: '2'},
            {value: 3, label: '3'},
            {value: 123, label: '123'}
          ]
          resolve(data)
        });
      }
    },
    created() {
      this.loadData(10)
    }
  }
</script>
```
:::
