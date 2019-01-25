<script>
  import ajax from '@/utils/ajax'

  export default {
    data() {
      return {
        data: [
          {
            title: 'Title 1',
            description: '内容描述 this is description.this is description.this is description.this is description'
          },
          {
            title: 'Title 2',
            description: '内容描述 this is description.this is description.this is description.this is description'
          },
          {
            title: 'Title 3',
            description: '内容描述 this is description.this is description.this is description.this is description'
          }
        ],
        data2: [
          {title: '标题A'},
          {title: '标题B'},
          {title: '标题C'},
          {title: '标题D'},
          {title: '标题E'},
          {title: '标题F'}
        ],
        state: {
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
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .title {
    padding: 10px;
    margin: 10px 0;
    background: #eee;
  }
</style>

## List 列表
### 基础用法（竖直布局）
:::demo
```html
<template>
<xdh-list :data="data">
  <template slot-scope="scope">
    <xdh-image-text style="width:100%;">
      <xdh-avatar slot="image">H</xdh-avatar>
      <template slot="text">
        <div>{{scope.item.description}}</div>
      </template>
    </xdh-image-text>
  </template>
</xdh-list>
</template>

<script>
  import ajax from '@/utils/ajax'
  import XdhList from '../widgets/xdh-list'
  import XdhAvatar from '../widgets/xdh-avatar'
  import XdhImageText from '../widgets/xdh-image-text'

  export default {
    components: {
      XdhList,
      XdhAvatar,
      XdhImageText
    },
    data() {
      return {
        data: [
          {
            title: 'Title 1',
            description: '内容描述 this is description.this is description.this is description.this is description'
          },
          {
            title: 'Title 2',
            description: '内容描述 this is description.this is description.this is description.this is description'
          },
          {
            title: 'Title 3',
            description: '内容描述 this is description.this is description.this is description.this is description'
          }
        ]
      }
    }
  }
</script>
```
:::

### 基础用法（水平布局）
:::demo
```html
<template>
<xdh-list :data="data2"
          layout="horizontal"
          :column="4"
          :gutter="10"
          :split="false"
          justify="space-between">
  <template slot-scope="scope">
    <el-card class="box-card" style="margin:10px 0;">
      <div slot="header">
        <span>卡片名称</span>
        <el-button size="mini" type="primary" style="float: right;">操作按钮</el-button>
      </div>
      <div v-for="o in 2" :key="o" class="text item">
        {{scope.item.title}}{{ o }}
      </div>
    </el-card>
  </template>
</xdh-list>
</template>

<script>
  import ajax from '@/utils/ajax'
  import XdhList from '../widgets/xdh-list'

  export default {
    components: {
      XdhList
    },
    data() {
      return {
        data2: [
          {title: '标题A'},
          {title: '标题B'},
          {title: '标题C'},
          {title: '标题D'},
          {title: '标题E'},
          {title: '标题F'}
        ]
      }
    }
  }
</script>
```
:::

### 简单列表（列表拥有大、中、小三种尺寸）
:::demo
```html
<template>
<div class="title">大</div>
<xdh-list :data="data" bordered>
  <template slot-scope="scope">
    {{scope.item.title}}
  </template>
</xdh-list>
<div class="title">中</div>
<xdh-list :data="data"
          bordered
          size="small">
  <template slot-scope="scope">
    {{scope.item.title}}
  </template>
</xdh-list>
<div class="title">小</div>
<xdh-list :data="data"
          bordered
          size="mini">
  <template slot-scope="scope">
    {{scope.item.title}}
  </template>
</xdh-list>
</template>

<script>
  import ajax from '@/utils/ajax'
  import XdhList from '../widgets/xdh-list'

  export default {
    components: {
      XdhList
    },
    data() {
      return {
        data: [
          {
            title: 'Title 1',
            description: '内容描述 this is description.this is description.this is description.this is description'
          },
          {
            title: 'Title 2',
            description: '内容描述 this is description.this is description.this is description.this is description'
          },
          {
            title: 'Title 3',
            description: '内容描述 this is description.this is description.this is description.this is description'
          }
        ]
      }
    }
  }
</script>
```
:::

### 综合应用
可以作为类似table组件嵌套在XdhListPanel进行使用
:::demo
```html
<xdh-list-panel :load="loadData" :state="state" :size="5" :sizes="[5,10]">
  <xdh-list :data="state.list">
    <template slot-scope="scope">
      <xdh-image-text style="width:100%;">
        <xdh-avatar slot="image">H</xdh-avatar>
        <template slot="text">
          <div>{{scope.item.id}}:{{scope.item.title}}</div>
        </template>
      </xdh-image-text>
    </template>
  </xdh-list>
</xdh-list-panel>

<script>
  import ajax from '@/utils/ajax'
  import XdhListPanel from '../widgets/xdh-list-panel'
  import XdhList from '../widgets/xdh-list'
  import XdhAvatar from '../widgets/xdh-avatar'
  import XdhImageText from '../widgets/xdh-image-text'

  export default {
    components: {
      XdhListPanel,
      XdhList,
      XdhAvatar,
      XdhImageText
    },
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
          url: '/demo/api/user/list',
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

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 数据源 | Array | - | - |
| bordered | 是否显示外边框 | Boolean | - | false |
| layout | 设置成 horizontal 则横向样式显示, 设置成 vertical 则竖直样式显示, 默认竖排 | String | - | vertical |
| size | list 的尺寸,包括'mini', 'small', 'medium' | String | - | medium |
| split | 是否展示分割线 | Boolean | - | true |
| gutter | 栅格间隔 | Number | - | 0 |
| column | 列数 | Number | - | 1 |
| justify | flex 布局下的水平排列方式，搭配type使用 | String | - | 'start' |
| type | 布局模式，可选 flex，现代浏览器下有效 | String | - | - |


### 插槽

| name | 说明 |
|-----|-----|
| default | 列表项内容 |
