<script>
import circleMenu from '@/widgets/xdh-go/menus/circle-menu'
import goMenu from '@/widgets/xdh-go/go-menu'
  export default {
    components: {
      goMenu,
      circleMenu
    },
    data() {
      return {
         listData1: [
        {
          text: '菜单一',
          icon: 'el-icon-menu',
          subMenu: [{ text: '子菜单1_1' }, { text: '子菜单1_2' }, { text: '子菜单1_3' },{ text: '子菜单1_4' }, { text: '子菜单1_5' }, { text: '子菜单1_6' }, { text: '子菜单1_7' }]
        },
        { text: '菜单二',
         icon: 'el-icon-delete',
        subMenu: [{ text: '子菜单2_1' }, { text: '子菜单2_2' }] },
        {
          text: '菜单三',
         icon: 'el-icon-edit',
          subMenu: [{ text: '子菜单3_1' }, { text: '子菜单3_2', subMenu: [{text: '子菜单3_2_1'},{text: '子菜单3_2_2'}] }]
        }
       ],
        listData3: [
        {
          text: '菜单一'
        },
        { text: '菜单二', subMenu: [{ text: '子菜单2_1' }, { text: '子菜单2_2' }] },
        {
          text: '菜单三',
          subMenu: [{ text: '子菜单3_1' }, { text: '子菜单3_2' }]
        }
      ],
        model: 'GraphLinksModel',
        nodes: [
          {key: 'A', category: 'a'},
          {key: 'B', category: 'b'},
          {key: 'C', category: 'c'}
        ],
        links: [
          {from: 'A', to: 'B'},
          {from: 'A', to: 'C'}
        ]
      }
    },
    methods: {
      showMenu3() {
        let left = document.documentElement.clientWidth;
        let top = document.documentElement.clientHeight;
        this.$refs.menu3.show({left: left/2, top: top - 40});
      },
      hideMenu3() {
        this.$refs.menu3.hide()
      },
      tips(menus, levels) {
         this.$message({type: 'info', message: '点击了操作按钮'})
      },
      config($, go) {
        return {
          initialContentAlignment: go.Spot.Center
        }
      },
      config4($, go) {
         return {
           initialContentAlignment: go.Spot.Center,
           click: () => {
             this.$refs.menu4.hide();
           }
         }
      },
      itemClick(event, val) {
           this.$message({type: 'info', message: `点击了${val.text}`});
      },
      nodeTemplate($, go, color) {
        return $(go.Node, 'Horizontal', {background: color},
          $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
        )
      },
      nodeTemplate1($, go, color) {
        return $(go.Node, 'Horizontal', {background: color, contextMenu: this.$refs.menu1.bindMenu() },
          $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
        )
      },
      nodeTemplate2($, go, color) {
        return $(go.Node, 'Horizontal', {background: color, contextMenu: this.$refs.menu2.bindMenu() },
          $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
        )
      },
      nodeTemplate3($, go, color) {
        return $(go.Node, 'Horizontal', {background: color,            mouseHover: (inputEvent, obj) => {
               let event = inputEvent.event;
               this.$refs.menu4.show({left: event.pageX, top: event.pageY});
            } 
          },
          $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
        )
      },
      linkTemplate($, go) {
        return $(go.Link, {routing: go.Link.Orthogonal, corner: 5},
          $(go.Shape, {strokeWidth: 3, stroke: '#555'})
        )
      },
      nodeTemplateMap($, go) {
        const a = this.nodeTemplate($, go, 'red')
        const b = this.nodeTemplate($, go, 'blue')
        const c = this.nodeTemplate($, go, 'green')
        const map = new go.Map()
        map.add('a', a)
        map.add('b', b)
        map.add('c', c)
        return map
      },
      nodeTemplateMap1($, go) {
        const a = this.nodeTemplate1($, go, 'red')
        const b = this.nodeTemplate1($, go, 'blue')
        const c = this.nodeTemplate1($, go, 'green')
        const map = new go.Map()
        map.add('a', a)
        map.add('b', b)
        map.add('c', c)
        return map
      },
      nodeTemplateMap2($, go) {
        const a = this.nodeTemplate2($, go, 'red')
        const b = this.nodeTemplate2($, go, 'blue')
        const c = this.nodeTemplate2($, go, 'green')
        const map = new go.Map()
        map.add('a', a)
        map.add('b', b)
        map.add('c', c)
        return map
      },
      nodeTemplateMap3($, go) {
        const a = this.nodeTemplate3($, go, 'red')
        const b = this.nodeTemplate3($, go, 'blue')
        const c = this.nodeTemplate3($, go, 'green')
        const map = new go.Map()
        map.add('a', a)
        map.add('b', b)
        map.add('c', c)
        return map
      },
      layout($, go) {
        return new go.TreeLayout()
      }
    },
    mounted() {
      setTimeout(() => {
            this.nodes.push({key: 'D', category: 'c'})
            this.links.push({from: 'C', to: 'D'})
      }, 3000)
    }
  }
</script>
## GoJS 图表
## go-menu

go-menu组件通过返回gojs的HTMLInfo对象实现右建菜单功能。 它需要结合具体的菜单组件使用。

框架提供的可选菜单有circle-menu(圆形菜单)，如果需要自定义菜单，可参考src/widgets/xdh-go/menus下的菜单来写，自定义组件请写在src/components文件夹下

#### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 | 参数 |
|----|----|----|----|----|----|
| before-show-menu | 显示菜单前须做的操作，可用于调整菜单项 | Function | - | () => {} | (obj, diagram, tool, menuElement)|
| show-context-menu | 可选，有时你可能想在指定的位置显示菜单，而不是在节点上，或者有更复杂的操作，可自定义方法实现 | String | - | - | (obj, diagram, tool, menuElement)|

#### 插槽
| name  |说明                              |
| ------ | ---------------------------------------- |
| - | 默认插槽，菜单组件 |

#### 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| bindMenu |  返回一个HTMLInfo对象 | - |


## circle-menu
#### 基础用法 
circle-menu实现了一个圆形的菜单

尝试在节点上点击右键

:::demo 通过goMenu的bindMenu() 方法返回一个HTMLInfo对象，可作为diagram或节点的菜单。通过设置inner-radius和item-width可以调节扇形的半径；通过active-color和normal-color可以设置菜单颜色,通过item-style可以设置文字样式
```html
<template>
  <div class="index-page">
    <xdh-go
      :nodes="nodes"
      :links="links"
      :type="model"
      :node-template-map="nodeTemplateMap1"
      :link-template="linkTemplate"
      :config="config"
      :layout="layout"
      ref="go1"
      height="200px"
    ></xdh-go>
    <go-menu ref="menu1">
      <circle-menu
        :menu-list="listData1"
        @on-item-click="itemClick"
        :inner-radius="60"
        :item-width="60"
        :active-color="'rgba(245, 108, 108, 0.8)'"
        :normal-color="'rgba(230, 162, 60, 0.8)'"
        :item-style="{color: '#fff'}"
      >
      </circle-menu>
    </go-menu>
  </div>
</template>

<script>
import XdhGo from '@/widgets/xdh-go'
import goMenu from '@/widgets/xdh-go/go-menu'
import circleMenu from '@/widgets/xdh-go/menus/circle-menu'
export default {
  components: {
    XdhGo,
    goMenu,
    circleMenu
  },
  data() {
    return {
      listData1: [
        {
          text: '菜单一',
          subMenu: [{ text: '子菜单1_1' }, { text: '子菜单1_2' }]
        },
        { text: '菜单二', subMenu: [{ text: '子菜单2_1' }, { text: '子菜单2_2' }] },
        {
          text: '菜单三',
          subMenu: [{ text: '子菜单3_1' }, { text: '子菜单3_2' }]
        }
      ],
      model: 'GraphLinksModel',
      nodes: [
        { key: 'A', category: 'a' },
        { key: 'B', category: 'b' },
        { key: 'C', category: 'c' }
      ],
      links: [{ from: 'A', to: 'B' }, { from: 'A', to: 'C' }]
    }
  },
  methods: {
    itemClick(event, val) {
      this.$message({type: 'info', message: `点击了${val.text}`});
    },
    config($, go) {
      return {
        initialContentAlignment: go.Spot.Center
      }
    },
    nodeTemplate1($, go, color) {
      return $(
        go.Node,
        'Horizontal',
        { background: color, contextMenu: this.$refs.menu1.bindMenu() },
        $(
          go.TextBlock,
          'Default Text',
          { margin: 12, stroke: '#ffffff' },
          new go.Binding('text', 'key')
        )
      )
    },
    linkTemplate($, go) {
      return $(
        go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        $(go.Shape, { strokeWidth: 3, stroke: '#555' })
      )
    },
    nodeTemplateMap1($, go) {m
      const b = this.nodeTemplate($, go, 'blue')
      const c = this.nodeTemplate($, go, 'green')
      const map = new go.Map()
      map.add('a', a)
      map.add('b', b)
      map.add('c', c)
      return map
    },
    layout($, go) {
      return new go.TreeLayout()
    }
  },
  mounted() {
    console.log(this.$refs)
  }
}
</script>

<style scoped lang='scss'>
.index-page {
  text-align: center;
}
.text {
  font-size: 12px;
  text-align: center;
  color: #000;
}
</style>

```
:::

### circle-menu 更多用法 
考虑到会有更多样式及交互的变动，这里还提供了其它用法

尝试在节点上点击右键

:::demo 你可以通过trigger参数设置为mouseover,使鼠标经过时子菜单就弹出；通过center-btn插槽可定义中心操作按钮，通过list-item插槽可定义菜单项的样式；你可以通过定义angle-range来指定菜单的起始和结束的角度值；通过开启sub-range-limit 可将子菜单的显示限制在angle-range定义的范围内
```html
<template>
  <div class="index-page">
    <xdh-go
      :nodes="nodes"
      :links="links"
      :type="model"
      :node-template-map="nodeTemplateMap2"
      :link-template="linkTemplate"
      :config="config"
      :layout="layout"
      ref="go2"
      height="200px"
    ></xdh-go>
    <go-menu ref="menu2">
      <circle-menu
        :menu-list="listData1"
        :trigger="'mouseover'"
        @on-item-click="itemClick"
        :inner-radius="60"
        :item-width="60"
        :angle-range="[90, 270]"
        sub-range-limit
      >
         <template slot="center-btn" slot-scope="{menuList,menuLevels}">
        <el-button style="margin-top: 30px; width: 60px;height:60px;border-radius: 50%;" size="mini" type="success" @click.stop="tips(menuList, menuLevels)">操作</el-button>
      </template>
        <template slot="list-item" slot-scope="{item}">
          <div class="text">
            <i :class="(item.icon || '')" style="font-size: 16px;"></i>
            <div>{{item.text}}</div>
          </div>
        </template>
      </circle-menu>
    </go-menu>
  </div>
</template>

<script>
import XdhGo from '@/widgets/xdh-go'
import goMenu from '@/widgets/xdh-go/go-menu'
import circleMenu from '@/widgets/xdh-go/menus/circle-menu'
export default {
  components: {
    XdhGo,
    goMenu,
    circleMenu
  },
  data() {
    return {
      listData1: [
        {
          text: '菜单一',
          icon: 'el-icon-menu',
           subMenu: [{ text: '子菜单1_1' }, { text: '子菜单1_2' }, { text: '子菜单1_3' },{ text: '子菜单1_4' }, { text: '子菜单1_5' }, { text: '子菜单1_6' }, { text: '子菜单1_7' }]
        },
        { text: '菜单二',
         icon: 'el-icon-delete',
        subMenu: [{ text: '子菜单2_1' }, { text: '子菜单2_2' }] },
        {
          text: '菜单三',
         icon: 'el-icon-edit',
          subMenu: [{ text: '子菜单3_1' }, { text: '子菜单3_2' }]
        }
      ],
      model: 'GraphLinksModel',
      nodes: [
        { key: 'A', category: 'a' },
        { key: 'B', category: 'b' },
        { key: 'C', category: 'c' }
      ],
      links: [{ from: 'A', to: 'B' }, { from: 'A', to: 'C' }]
    }
  },
  methods: {
    itemClick(event, val) {
      this.$message({type: 'info', message: `点击了${val.text}`});
    },
    config($, go) {
      return {
        initialContentAlignment: go.Spot.Center
      }
    },
    nodeTemplate2($, go, color) {
      return $(
        go.Node,
        'Horizontal',
        { background: color, contextMenu: this.$refs.menu2.bindMenu() },
        $(
          go.TextBlock,
          'Default Text',
          { margin: 12, stroke: '#ffffff' },
          new go.Binding('text', 'key')
        )
      )
    },
    linkTemplate($, go) {
      return $(
        go.Link,
        { routing: go.Link.Orthogonal, corner: 5 },
        $(go.Shape, { strokeWidth: 3, stroke: '#555' })
      )
    },
    nodeTemplateMap2($, go) {m
      const b = this.nodeTemplate($, go, 'blue')
      const c = this.nodeTemplate($, go, 'green')
      const map = new go.Map()
      map.add('a', a)
      map.add('b', b)
      map.add('c', c)
      return map
    },
    layout($, go) {
      return new go.TreeLayout()
    }
  },
  mounted() {
    console.log(this.$refs)
  }
}
</script>

<style scoped lang='scss'>
.index-page {
  text-align: center;
}
.text {
  padding-top: 8px;
  font-size: 12px;
  text-align: center;
  color: #000;
}
</style>

```
:::

#### 脱离go-menu单独使用的方法
事实上circle-menu和go-menu是解耦的，你可以单独使用circle-menu，下面是三种常见的使用场景。

:::demo 
```html
<template>
  <div class="index-page">
     <el-row :style="'width:100%;'">
       <el-col :span="8">
           <div class="intro">开启fixed参数可以将菜单固定，不再作为弹出菜单使用</div>
             <circle-menu
            ref="menu4"
              :menu-list="listData3"
              @on-item-click="itemClick"
              :inner-radius="60"
              :item-width="60"
              fixed
              :active-color="'rgba(245, 108, 108, 0.8)'"
              :normal-color="'rgba(230, 162, 60, 0.8)'"
              :item-style="{color: '#fff'}"
            >
            </circle-menu>
       </el-col>
        <el-col :span="8">
          <div  class="intro">或者你也仍然可以作为弹出菜单，但通过调用show和hide两个方法分别控制显示和隐藏</div>
          <el-button type="primary" @click="showMenu3">显示菜单</el-button>
          <el-button type="primary" @click="hideMenu3">关闭菜单</el-button>
            <circle-menu
            ref="menu3"
              :menu-list="listData3"
              @on-item-click="itemClick"
              :inner-radius="60"
              :angle-range="[0,180]"
              :item-width="60"
              :active-color="'rgba(245, 108, 108, 0.8)'"
              :normal-color="'rgba(230, 162, 60, 0.8)'"
              sub-range-limit
              :item-style="{color: '#fff'}"
            >
            </circle-menu>
        </el-col>
        <el-col :span="8">
          <div class="intro">在gojs中，如果希望通过其它事件触发（而不是右键菜单），也需要单独使用circle-menu。下面例子通过节点的鼠标悬停(mouseHover)触发弹出菜单，并通过点击diagram空白处关闭菜单。</div>
           <xdh-go
      :nodes="nodes"
      :links="links"
      :type="model"
      :node-template-map="nodeTemplateMap3"
      :link-template="linkTemplate"
      :config="config4"
      :layout="layout"
      ref="go3"
      height="200px"
    ></xdh-go>
       <circle-menu
            ref="menu4"
              :menu-list="listData3"
              @on-item-click="itemClick"
              :inner-radius="60"
              :item-width="60"
              :active-color="'rgba(245, 108, 108, 0.8)'"
              :normal-color="'rgba(230, 162, 60, 0.8)'"
              sub-range-limit
              :item-style="{color: '#fff'}"
            >
            </circle-menu>
        </el-col>
     </el-row>
  </div>
</template>

<script>
  import XdhGo from '@/widgets/xdh-go'
import circleMenu from '@/widgets/xdh-go/menus/circle-menu'
export default {
  components: {
    circleMenu,
    XdhGo
  },
  data() {
    return {
       listData3: [
        {
          text: '菜单一'
        },
        { text: '菜单二', subMenu: [{ text: '子菜单2_1' }, { text: '子菜单2_2' }] },
        {
          text: '菜单三',
          subMenu: [{ text: '子菜单3_1' }, { text: '子菜单3_2' }]
        }
      ]
    }
  },
  methods: {
     config4($, go) {
         return {
           initialContentAlignment: go.Spot.Center,
           click: () => {
             this.$refs.menu4.hide();
           }
         }
      },
       nodeTemplate3($, go, color) {
        return $(go.Node, 'Horizontal', {background: color, mouseHover: (inputEvent, obj) => {
               let event = inputEvent.event;
               this.$refs.menu4.show({left: event.pageX, top: event.pageY});
            } 
          },
          $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
        )
      },
       nodeTemplateMap3($, go) {
        const a = this.nodeTemplate3($, go, 'red')
        const b = this.nodeTemplate3($, go, 'blue')
        const c = this.nodeTemplate3($, go, 'green')
        const map = new go.Map()
        map.add('a', a)
        map.add('b', b)
        map.add('c', c)
        return map
      },
      linkTemplate($, go) {
        return $(go.Link, {routing: go.Link.Orthogonal, corner: 5},
          $(go.Shape, {strokeWidth: 3, stroke: '#555'})
        )
      },
       layout($, go) {
        return new go.TreeLayout()
      }
      itemClick(event, val) {
         this.$message({type: 'info', message: `点击了${val.text}`});
       },
      showMenu3() {
        let left = document.documentElement.clientWidth;
        let top = document.documentElement.clientHeight;
        this.$refs.menu3.show({left: left/2, top: top - 40});
      },
      hideMenu3() {
        this.$refs.menu3.hide()
      }
  }
}
</script>
<style type="text/scss" lang="scss" scoped>
.intro{
  text-align:left;
  text-indent:2em;
  padding: 10px 15px;
}
</style>
```
:::

#### circle-menu 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| angle-range | 扇形开始位置和结束位置 | Array | - | [-30, 210] |
| prop-map | 菜单选项的名称配置 | Object | - | {text: 'text', subMenu: 'subMenu'} |
| item-key | 菜单的每个菜单项需要有唯一标识，当菜单不想显示文本时，可以使用其它字段作为唯一标识 | String | - | 'text' |
| inner-radius | 扇形内径大小 | Number | - | 60 |
| item-width | 扇形菜单项宽度 | Number | - | 100 |
| sub-range-limit | 值为true时，子菜单的角度范围限制在所设的angleRange范围内,如果菜单要放在角落里，这个限制可保持子菜单可见性 | Boolean | - | false |
| trigger | 子菜单弹出的触发事件 | String | 'click'/'mouseover' | 'click' |
| menu-list | 菜单选项列表 | Array | - | [] |
| itemStyle | 菜单项文字样式 | Object | - | {color: '#333'} |
| active-color | 菜单项选中状态颜色 | String | - | 'rgba(255, 102, 0, 0.5)' |
| normal-color | 菜单项非选中状态颜色 | String | - | 'rgba(140, 197, 255, 0.8)' |
| hover-color | 菜单项鼠标经过颜色，如果不设置则与选中颜色相同 | String | - | '' |
| fixed | 设置成true时，不再作为弹出菜单，而是跟随文档流布局 | Boolean | - | false |

#### circle-menu 插槽
| name | slot-scope |说明                              |
| ------ | ----- |---------------------------------------- |
| list-item | {item} |作用域插槽，菜单选项自定义 |
| center-btn | - | 中心功能按钮插槽 |

#### circle-menu 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 点击菜单项时触发 | (event {Event} 原生事件, item {Object} 当前菜单项对象) |

#### circle-menu 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| resetMenu |  弹出时或者菜单消失时初始化菜单，通常要在go-menu中调用 | - |
| show |	显示菜单 | - |
| hide |	隐藏菜单 | - |



