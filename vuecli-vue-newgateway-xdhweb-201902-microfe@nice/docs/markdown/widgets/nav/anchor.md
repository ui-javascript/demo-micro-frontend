
## Anchor 描点定位组件

### 基础用法。文档： [xdh-anchor](#/src/widgets%2Fmodule-widgets_xdh-anchor.html)

:::demo
```html
<template>
  <xdh-layout :west="{width: '210px'}" ref="layout" style="height: 500px;">
    <xdh-anchor slot="west"
                :data="anchors"
                width="200px"
                :container="container"
                @on-change="handleChange">
                   <template slot="tag" slot-scope="{item}" v-if="item.count">
                        <div class="count">
                        {{item.count > 99 ? '99+': item.count}}
                        </div>
                   </template>
                </xdh-anchor>
    <div ref="container" style="height:100%; overflow:auto; position:absolute; width:100%;">
      <div v-for="item in anchors">
        <h3 :id="item.id">{{item.text}}</h3>
        <div style="height: 300px; background: #eee;">{{item.text}} 内容</div>
      </div>
    </div>
  </xdh-layout>
</template>

<script>
  import XdhAnchor from '@/widgets/xdh-anchor'
  import XdhLayout from '@/widgets/xdh-layout'

  export default {
    components: {
      XdhAnchor,
      XdhLayout
    },
    data() {
      return {
        anchors: [
          {id: 'section1', text: '基础信息'},
          {id: 'section2', text: '代表委员', count: 100},
          {id: 'section3', text: '家庭成员'},
          {id: 'section4', text: '职权分工'},
          {id: 'section5', text: '企业关联'}
        ],
        container: null
      }
    },
    methods: {
      handleChange(index) {
        console.log(index)
      }
    },
    mounted() {
      this.container = this.$refs.container;
    }
  }
</script>
<style scoped lang='scss'>
.count{
  position:absolute;
  right:10px;
  padding: 3px 5px;
  background: red;
  border-radius: 10px;
  top: 12px;
  color: #fff;
  line-height: 12px;
}
</style>
```
:::
