<script>
  export default {
    data() {
      return {
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
      config($, go) {
        return {
          initialContentAlignment: go.Spot.Center
        }
      },
      nodeTemplate($, go, color) {
        return $(go.Node, 'Horizontal', {background: color},
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

### 基础用法。文档： [xdh-go](#/src/widgets%2Fmodule-widgets_xdh-go.html)

:::demo
```html
<template>
    <xdh-go :nodes="nodes"
            :links="links"
            :type="model"
            :node-template-map="nodeTemplateMap"
            :link-template="linkTemplate"
            :config="config"
            :layout="layout"
            ref="go"
            height="200px"></xdh-go>
</template>
<script>
  export default {
    data() {
      return {
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
      config($, go) {
        return {
          initialContentAlignment: go.Spot.Center
        }
      },
      nodeTemplate($, go, color) {
        return $(go.Node, 'Horizontal', {background: color},
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
```
:::

