## Tabs 选项卡

选项卡组件, 支持拖拽排序、新增、删除、异步加载组件, 兼容el-tabs组件。文档： [xdh-tabs](#/src/widgets%2Fmodule-widgets_xdh-tabs.html)

<script>
export default {
  data() {
    return {
        data1: [
          {label:'Tab 1', content:'Content 1'},
          {label:'Tab 2', content:'Content 2'},
          {label:'Tab 3', content:'Content 3'},
          {label:'Tab 4', content:'Content 4'}
        ],
        data2: [
          {label: 'Panel 1', component: 'XdhPanel', props:{title:'Panel Title 1'}},
          {label: 'Panel 2', component: 'XdhPanel', props:{title:'Panel Title 2'}, keepAlive: true},
          {label: 'Panel 3', component: 'XdhPanel', props:{title:'Panel Title 3'}, disabled: true},
          {label: 'Panel 4', component: 'XdhPanel', props:{title:'Panel Title 4'}, closable: true}
        ],
        data3: [
          {label: 'Panel 1', component: 'XdhPanel', props:{title:'Panel Title 1'}},
          {label: 'Panel 2', component: 'XdhPanel', props:{title:'Panel Title 2'}},
          {label: 'Panel 3', component: 'XdhPanel', props:{title:'Panel Title 3'}},
          {label: 'Panel 4', component: 'XdhPanel', props:{title:'Panel Title 4'}}
        ],
        data4: [
          {label:'Tab 1', content:'Content 1'},
          {label:'Tab 2', content:'Content 2'},
          {label:'Tab 3', content:'Content 3'},
          {label:'Tab 4', content:'Content 4'}
        ],
        data5: [
          {label:'Tab 5', content:'Content 5'},
          {label:'Tab 6', content:'Content 6'},
          {label:'Tab 7', content:'Content 7'},
          {label:'Tab 8', content:'Content 8'}
        ],
        sortable: {sort:true, group:'groupName'}
    }
  }
}
</script>

### 基础用法
基本用法和el-tabs一致， 接口完全兼容
:::demo
```html

<template>
  <div>
    <xdh-tabs :data="data1"></xdh-tabs>
    <p></p>
    <xdh-tabs :data="data1" type="card" editable></xdh-tabs>
    <p></p>
    <xdh-tabs :data="data1" type="border-card" closable></xdh-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
        data1: [
          {label:'Tab 1', content:'Content 1'},
          {label:'Tab 2', content:'Content 2'},
          {label:'Tab 3', content:'Content 3'},
          {label:'Tab 4', content:'Content 4'}
        ]
    }
  }
}
</script>
```
:::

### 定义工具插槽
:::demo
```html

<template>
  <div>
    <xdh-tabs :data="data1">
      <template slot="tools">

        <el-button type="primary" size="mini">操作</el-button>
      </template>
    </xdh-tabs>
    <p></p>
    <xdh-tabs :data="data1" type="card" editable>
      <template slot="tools">
       <i class="el-icon-setting"></i>
       </template>
    </xdh-tabs>
    <p></p>
    <xdh-tabs :data="data1" type="border-card" closable>
      <template slot="tools">
            <i class="el-icon-info"></i>
       </template>
    </xdh-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
        data1: [
          {label:'Tab 1', content:'Content 1'},
          {label:'Tab 2', content:'Content 2'},
          {label:'Tab 3', content:'Content 3'},
          {label:'Tab 4', content:'Content 4'}
        ]
    }
  }
}
</script>
```
:::

### 加载组件
基本用法和el-tabs一致， 接口完全兼容
:::demo `component`可设置组件名称 或 组件对象，`props` 可设置组件实例化参数，`disabled`设置是否禁用该选项卡，`closable`设置显示关闭按钮，`keepAlive` 可设置是否缓存组件
```html

<template>
  <div>
    <xdh-tabs :data="data2" type="border-card"></xdh-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
        data2: [
          {label: 'Panel 1', component: 'XdhPanel', props:{title:'Panel Title 1'}},
          {label: 'Panel 2', component: 'XdhPanel', props:{title:'Panel Title 2'}, keepAlive: true},
          {label: 'Panel 3', component: 'XdhPanel', props:{title:'Panel Title 3'}, disabled: true},
          {label: 'Panel 4', component: 'XdhPanel', props:{title:'Panel Title 4'}, closable: true}
        ]
    }
  }
}
</script>
```
:::


### 拖拽排序
:::demo `sortable` 可设置启动排序和排序相关参数
```html
<template>
  <div>
    <xdh-tabs :data="data3" type="border-card" sortable></xdh-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
        data3: [
          {label: 'Panel 1', component: 'XdhPanel', props:{title:'Panel Title 1'}},
          {label: 'Panel 2', component: 'XdhPanel', props:{title:'Panel Title 2'}},
          {label: 'Panel 3', component: 'XdhPanel', props:{title:'Panel Title 3'}},
          {label: 'Panel 4', component: 'XdhPanel', props:{title:'Panel Title 4'}}
        ]
    }
  }
}
</script>
```
:::

### 拖拽分组放置

:::demo `data` 支持 `sync` 修饰符进行双向绑定
```html
<template>
  <el-row>
    <el-col :span="11">
      <xdh-tabs :data.sync="data4" type="border-card" :sortable="sortable"></xdh-tabs>
    </el-col>
    <el-col :span="2"><div style="visibility: hidden;">a</div> </el-col>
    <el-col :span="11">
      <xdh-tabs :data.sync="data5" type="border-card" :sortable="sortable"></xdh-tabs>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
        data4: [
          {label:'Tab 1', content:'Content 1'},
          {label:'Tab 2', content:'Content 2'},
          {label:'Tab 3', content:'Content 3'},
          {label:'Tab 4', content:'Content 4'}
        ],
        data5: [
          {label:'Tab 5', content:'Content 5'},
          {label:'Tab 6', content:'Content 6'},
          {label:'Tab 7', content:'Content 7'},
          {label:'Tab 8', content:'Content 8'}
        ],
        sortable: {sort:true, group:'groupName'}
    }
  }
}
</script>
```
:::
