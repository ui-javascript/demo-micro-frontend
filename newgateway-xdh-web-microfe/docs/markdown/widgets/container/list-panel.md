<script>
import ajax from '@/utils/ajax'
export default {
  data() {
    return {
      mode: 'scroll',
      state: {
        total: 0,
        list: []
      },
      state2: {
        total: 0,
        list: []
      },
      state3: {
        total: 0,
        list: []
      },
     state4: {
        total: 0,
        list: []
      }
    }
  },
  methods: {
    loadData(page, limit) {
       return ajax({
          url: '/demo/api/user/list',
          data: {page, limit}
       }).then(res => {
          this.state = res
       })
    },
    loadData2(page, limit) {
       return ajax({
          url: '/demo/api/user/list',
          data: {page, limit}
       }).then(res => {
          this.state2 = res
       })
    },
    loadData3(page, limit) {
       return ajax({
          url: '/demo/api/user/list',
          data: {page, limit}
       }).then(res => {
          this.state3 = res
       })
    },
    loadData4(page, limit) {
       return ajax({
          url: '/demo/api/user/list',
          data: {page, limit}
       }).then(res => {
         if(this.mode === 'scroll') {
           this.state4 = {
              list: this.state4.list.concat(res.list),
              total: res.total
           }
         } else {
           this.state4 = res
         }
       })
    },
    handleClick() {
       this.$refs.listPanel.loadData()
    }
  }
}
</script>

## ListPanel 列表面板

### 基础用法。文档： [xdh-list-panel](#/src/widgets%2Fmodule-widgets_xdh-list-panel.html)

:::demo
```html
<template>
  <xdh-list-panel :load="loadData" :state="state">
     <el-table :data="state.list" height="300" border stripe>
       <el-table-column label="日期" prop="date"></el-table-column>
       <el-table-column label="姓名" prop="name"></el-table-column>
       <el-table-column label="标题" prop="title"></el-table-column>
     </el-table>
  </xdh-list-panel>
</template>

<script>
import ajax from '@/utils/ajax'
export default {
  data() {
    return {
      state: {
        total: 0,
        list: []
      }
    }
  },
  methods: {
    loadData(page, limit) {
       return ajax({
          url: '/demo/api/list',
          data: {page, limit}
       }).then(res => {
          this.state = res
       })
    }
  }
}
</script>
```
:::

### 定义工具按钮

:::demo
```html
<template>
  <xdh-list-panel :load="loadData2" :state="state2">
    <template slot="tool">
      <el-button size="mini" type="primary">新增</el-button>
       <el-button size="mini" type="danger">批量操作</el-button>
    </template>
     <el-table :data="state2.list" height="300" border stripe>
       <el-table-column label="日期" prop="date"></el-table-column>
       <el-table-column label="姓名" prop="name"></el-table-column>
       <el-table-column label="标题" prop="title"></el-table-column>
     </el-table>
  </xdh-list-panel>
</template>

<script>
import ajax from '@/utils/ajax'
export default {
  data() {
    return {
      state2: {
        total: 0,
        list: []
      }
    }
  },
  methods: {
    loadData2(page, limit) {
       return ajax({
          url: '/demo/api/list',
          data: {page, limit}
       }).then(res => {
          this.state2 = res
       })
    }
  }
}
</script>
```
:::

### 手动加载数据

:::demo
```html
<template>
  <xdh-list-panel ref="listPanel" :load="loadData3" :state="state3" :is-auto="false">
    <template slot="tool">
      <el-button size="mini" type="primary" @click="handleClick">点击加载数据</el-button>
    </template>
     <el-table :data="state3.list" height="300" border stripe>
       <el-table-column label="日期" prop="date"></el-table-column>
       <el-table-column label="姓名" prop="name"></el-table-column>
       <el-table-column label="标题" prop="title"></el-table-column>
     </el-table>
  </xdh-list-panel>
</template>

<script>
import ajax from '@/utils/ajax'
export default {
  data() {
    return {
      state3: {
        total: 0,
        list: []
      }
    }
  },
  methods: {
    loadData3(page, limit) {
       return ajax({
          url: '/demo/api/list',
          data: {page, limit}
       }).then(res => {
          this.state3 = res
       })
    },
    handleClick() {
      this.$refs.listPanel.loadData()
    }
  }
}
</script>
```
:::

### 滚动加载

:::demo
```html
<template>
<div style="height:400px">
  <xdh-list-panel fit :mode="mode" :load="loadData4" :state="state4">
    <template slot="tool">
     <el-switch
          v-model="mode"
          active-value="pager"
          active-text="页码"
          inactive-text="滚动"
          inactive-value="scroll">
        </el-switch>
    </template>
     <el-table :data="state4.list" border stripe>
       <el-table-column label="日期" prop="date"></el-table-column>
       <el-table-column label="姓名" prop="name"></el-table-column>
       <el-table-column label="标题" prop="title"></el-table-column>
     </el-table>
  </xdh-list-panel>
</div>
</template>

<script>
import ajax from '@/utils/ajax'
export default {
  data() {
    return {
      state4: {
        total: 0,
        list: []
      }
    }
  },
  methods: {
    loadData4(page, limit) {
       return ajax({
          url: '/demo/api/list',
          data: {page, limit}
       }).then(res => {
          this.state4 = res
       })
    }
  }
}
</script>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| title | 标题文字 | String | - | 列表 |
| icon | 标题文字前的icon | String | - | el-icon-tickets |
| size | 分页每页显示记录条数 | Number | - | 10 |
| sizes | 显示分页每页的记录数选项 | Array | - | \[10, 20, 50, 100\]|
| header-height | 头部标题栏的高度 | String | - | 40px |
| footer-height | 底部标题栏的高度 | String | - | 40px |
| state | 列表的state, 必须包含 list 和 total 如：{total:0, list:\[\]} | Object | - | {total:0, list:\[\]} |
| state-props | state 属性映射 | Object | - | { total: 'total', list: 'list' }|
| load | 加载数据函数，传入参数：page，size，必须要返回Promise | Function | - | - |
| is-auto | 是否在初始化时自动加载数据 | Boolean | - | true |
| pager | 是否显示分页 | Boolean | - | true |

### 方法

| 方法名 | 说明 | 参数 |
|----|----|----|
| reload | 重新调用加载数据方法，分页页面将重置为1 | - |
