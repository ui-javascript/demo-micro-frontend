<script>
import XdhPager from '@/widgets/xdh-pager/xdh-pager.vue'
export default {
  data() {
    return {
      pageInfo: {
          limit: 5,
          total: 50,
          currentpage: 1
        }
    }
  },
  components: {
    XdhPager
  },
  methods: {
      pageChange(val) {
        this.pageInfo.currentpage = val;
      }
  }
};
</script>
## Pager 分页组件

简化el-pagination。文档： [xdh-pager](#/src/widgets%2Fmodule-widgets_xdh-pager.html)

### 基础用法

:::demo
```html
<template>
  <div>
    <xdh-pager :total="1000"></xdh-pager>
    <hr/>
    <xdh-pager :total="1000" :page="25"></xdh-pager>
     <hr/>
    <xdh-pager :total="1000" layout="small" :auto-layout="false"></xdh-pager>
     <hr/>
    <xdh-pager :total="1000" layout="mini" :auto-layout="false"></xdh-pager>
     <hr/>
    <xdh-pager :total="1000" layout="simple" :auto-layout="false"></xdh-pager>
     <hr/>
    <xdh-pager :total="1000" layout="simple" :background="false" :auto-layout="false"></xdh-pager>
    <hr/>
     <xdh-pager class="pager" :total="pageInfo.total"
        layout="prev,slot,next"
        :size="pageInfo.limit"
        :page="pageInfo.currentpage"
         :auto-layout="false"
         @current-change="pageChange">
            <span>
               <span>{{pageInfo.currentpage}}/{{Math.ceil(pageInfo.total/pageInfo.limit)}}</span>
            </span>
        </xdh-pager>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageInfo: {
          limit: 5,
          total: 50,
          currentpage: 1
        }
    }
  },
  components: {
    XdhPager
  },
  methods: {
      pageChange(val) {
        this.pageInfo.currentpage = val;
      }
  }
};
</script>
```
:::

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-----|-----|----|----|----|
| sizes | 每页显示个数选择器的选项设置 | Array | - | \[10, 20, 50, 100\] |
| layout | 组件布局，子组件名用逗号分隔 | String | sizes, prev, pager, next, jumper, ->, total, slot | - |
| size | 每页显示条目个数 | Number | - | 10|
| total | 总条目数, 为0时，不显示分页 | Number | - | 0 |
| page | 当前页数，支持 .sync 修饰符 | Number | - | 1 |
| auto-layout | 根据宽度自动切换布局 | Boolean | - | true |
| background | 是否为分页按钮添加背景色 | Boolean | - | true |
| small | 	是否使用小型分页样式 | Boolean | - | true |


### 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| size-change | pageSize 改变时会触发 | 每页条数size|
| current-change | currentPage 改变时会触发| 当前页currentPage|
