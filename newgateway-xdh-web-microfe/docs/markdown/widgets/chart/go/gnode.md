<script>
import gmap from '@/widgets/xdh-go/gmap'
import gnode from '@/widgets/xdh-go/gnode'
import go from 'gojs'
  export default {
    components: {
      gmap,
      gnode  
    },
    data() {
      return {
        go,
        model: 'GraphLinksModel',
         nodes2: [
        { key: 'A', category: 'a', loc: '0 0' },
        { key: 'B', category: 'b', loc: '0 100' },
        { key: 'C', category: 'c', loc: '100 0' }
       ],
       nodeLoc: '',
        links: [
          {from: 'A', to: 'B'},
          {from: 'A', to: 'C'}
        ]
      }
    },
    methods: {
      config($, go) {
        return {
          initialContentAlignment: go.Spot.Center
        }
      },
      nodeTemplateMap4() {
        return this.$refs.map1.getMap();
      },
      linkTemplateMap4() {
        return this.$refs.link1.getTemplate();
      },
      shiftNode() {
          let diagram = this.$refs.go4.diagram
          diagram.startTransaction('shift node')
          let data = diagram.model.nodeDataArray[1] 
          let node = diagram.findNodeForData(data) 
          let p = node.location.copy() 
          p.x += 10
          if (p.x > 100) p.x = 0
          node.location = p
          this.nodeLoc = data.loc;
          diagram.commitTransaction('shift node')
      },
      layout($, go) {
        return new go.TreeLayout()
      }
    }
  }
</script>
## GoJS 图表

### gnode和gmap
gojs的模板定义，有一个固定的形式, 可以总结为 $(节点类型， 名称， 参数， 子节点)，根据这个固定形式，组件gnode可通过vue的模板定义节点，转译成gojs的模板对象。
举个例子：
```
<gnode ref="node1" :gtype="go.Node" :gname="'Auto'">
      <gnode :gtype="go.Shape" :gname="'Rectangle'" :fill="'color'"></gnode>
      <gnode :gtype="go.TextBlock" :gparam="textParam" :text="'key'"></gnode>
    </gnode>
    <gnode ref="link1" :gtype="go.Link" :gparam="{routing: go.Link.Orthogonal, corner: 5}">
      <gnode :gtype="go.Shape" :gparam="{strokeWidth: 3, stroke: '#555'}"></gnode>
    </gnode>
```
gnode可实现原有的数据绑定，双向绑定，数据转换等，但如同vue模板需要渲染函数辅助一样，如果有gnode不方便实现的定义形式，还是需要用到原生的gojs模板定义。

gmap则是对go.Map的封装，也可以通过vue模板定义的方式，将节点添加进模板。可用于nodeTemplateMap,linkTemplateMap,groupTemplatMap


#### gnode和gmap使用示例

:::demo 该例中包含了gmap和gnode的使用，包含数据单向绑定，双向绑定，数据转换等实现方法
```html
<template>
  <div class="index-page">
      <xdh-go
      :nodes="nodes2"
      :links="links"
      :type="model"
      :node-template-map="nodeTemplateMap4"
      :link-template="linkTemplateMap4"
      :config="config"
      ref="go4"
      height="200px"
    ></xdh-go>
    <el-row>
       <el-button type="primary" @click="shiftNode">移动节点B</el-button>
    </el-row>
    <el-row>
      {{nodeLoc}}
    </el-row>
      <gmap ref="map1">
        <gnode
          v-for="(item, idx) in [['a', 'red'], ['b', 'blue'], ['c', 'green']]"
          :key="idx"
          :map-key="item[0]"
          :gtype="go.Node"
          :gname="'Horizontal'"
          :gparam="{background: item[1]}"
          :location="{target: 'loc', parse: go.Point.parse, fun: ['makeTwoWay', [go.Point.stringify]]}"
        >
            <gnode
              :gtype="go.TextBlock"
              :gparam="{margin: 12, stroke: '#ffffff'}"
              :gname="'Default Text'"
              :text="'key'"
            ></gnode>
        </gnode>
    </gmap>
    <gnode ref="link1" :gtype="go.Link" :gparam="{routing: go.Link.Orthogonal, corner: 5}">
         <gnode :gtype="go.Shape" :gparam="{strokeWidth: 3, stroke: '#555'}"></gnode>
    </gnode>
    </div>
</template>
<script>
  import gnode from '@/widgets/xdh-go/gnode'
import gmap from '@/widgets/xdh-go/gmap'
import go from 'gojs'
export default {
 components: {
    gnode,
    gmap
  },
  data() {
    return {
      go,
      model: 'GraphLinksModel',
      nodes2: [
        { key: 'A', category: 'a', loc: '0 0' },
        { key: 'B', category: 'b', loc: '0 100' },
        { key: 'C', category: 'c', loc: '100 0' }
      ],
      links: [{ from: 'A', to: 'B' }, { from: 'A', to: 'C' }],
      nodeLoc: ''
    }
  },
  methods: {
    config($, go) {
      return {
        initialContentAlignment: go.Spot.Center
      }
    },
    shiftNode() {
      let diagram = this.$refs.go4.diagram
      diagram.startTransaction('shift node')
       let data = diagram.model.nodeDataArray[1] 
      let node = diagram.findNodeForData(data) 
      let p = node.location.copy() 
      p.x += 10
      if (p.x > 100) p.x = 0
      node.location = p
      this.nodeLoc = data.loc;
      diagram.commitTransaction('shift node')
    },
    nodeTemplateMap4() {
      return this.$refs.map1.getMap();
    },
    linkTemplateMap4() {
      return this.$refs.link1.getTemplate();
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

如果某些节点模板作为gmap的子元素内容太多，可以将其抽离成组件，只要在组件Props中继承mapKey,在mehtods中继承getTemplate即可

nodeTemp1.vue
```
<template>
   <gnode ref="node1">
     <gnode> ... </gnode>
     ...
   </gnode>
</template>
<script>
export default {
  props: {
    mapKey: {
      type: String
    }
  },
  methods: {
    getTemplate() {
       return this.$refs.node1.getTemplate();
    }
  }
}
</sciprt>
```

使用时
```
<gmap ref="map2">
   <node-temp1 :map-key="'a'"></node-temp1>
</gmap>
```

#### gnode属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| gtype | 节点类型, 必填 | Function | - | go.Node |
| gname | 节点名称 | String | - | '' |
| gparam | 节点参数 | Object | - | {} |
| map-key | 在作为gmap子节点时需要设置, 可省 | String | - | '' |
#### gnode其它自由定义的属性对照
| 说明| gojs定义 | 模板定义 |
|----|----|----|----|----|
| 数据单向绑定 | new go.Binding('location', 'loc') | :location="'loc'" |
| 数据转换 | new go.Binding('location', 'loc', go.Point.parse) | :location="{target: 'loc', parse: go.Point.parse}" |
| 数据双向绑定 | new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify) | :location="{target: 'loc', parse: go.Point.parse, fun: ['makeTwoWay', [go.Point.stringify]]}" |
| 其它 | new go.Binding('color', 'color').ofModel() | :color="{target: 'color', fun: ['ofModel']}" |

#### gnode插槽
| name  |说明                              |
| ------ | ---------------------------------------- |
| default | 定义gnode子节点 |

#### gnode方法
| 方法名 | 说明 | 参数 | 返回值|
| ---- | ---- | ---- | ----|
| getTemplate |  获得节点模板 | - | gojs节点模板对象 |

#### gmap属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| key-type | go.Map的key类型限定 | String | - | null |
| value-type | go.Map的value类型限定 | Object, String, Function | - | null |

#### gmap插槽
| name |说明                              |
| ------ |---------------------------------------- |
| default | gnode子节点 |
#### gmap方法
| 方法名 | 说明 | 参数 |返回值|
| ---- | ---- | ---- |----|
| getMap |  获得节点模板的map | - | gojs模板Map对象 |

