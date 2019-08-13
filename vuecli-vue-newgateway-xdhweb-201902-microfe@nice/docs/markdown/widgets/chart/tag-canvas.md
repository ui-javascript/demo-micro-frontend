<script>
  import XdhTagCanvas from '@/widgets/xdh-tag-canvas'

  export default {
    components: {
      XdhTagCanvas
    },
    data() {
      return {
        tags: [],
        options: {
          maxSpeed: 0.05,
          minSpeed: 0.01,
          textColour: null,
          textHeight: 25,
          fadeIn: 800,
          depth: 0.97,
          minBrightness: 0.2,
          wheelZoom: false,
          reverse: true,
          shuffleTags: true,
          shadowOffset: [1, 1],
          stretchX: 4.7,
          initial: [0, 0.1],
          clickToFront: 600
        }
      }
    },
    methods: {
      createTags(count) {
        let tags = []
        for (let i = 1; i < count; i++) {
          tags.push({
            text: 'Tag ' + i,
            color: '#ff0000'
          })
        }
        return tags
      },
      pause() {
        this.$refs.tag.pause()
      },
      resume() {
        this.$refs.tag.resume()
      },
      reload() {
        this.$refs.tag.reload()
      },
      update() {
        this.$refs.tag.update()
      },
      tagToFront() {
        this.$refs.tag.tagToFront({
          index: 5,
          active: 1
        })
      },
      rotateTag() {
        this.$refs.tag.rotateTag({index: 2, lat: 30, lng: -45})
      },
      setSpeed() {
        this.$refs.tag.setSpeed([0.5, -0.25])
      }
    },
    mounted() {
      setTimeout(() => {
        this.tags = this.createTags(20)
      }, 100)

    }
  }
</script>
## TagCanvas 标签云

基于 tagcanvas.js 实现，文档： [xdh-tag-canvas](#/src/widgets%2Fmodule-widgets_xdh-tag-canvas.html)
### 基础用法

:::demo
```html
<template>
  <div style="text-align: center;">
    <div style="height: 400px">
      <xdh-tag-canvas ref="tag" :data="tags" :options="options">
      </xdh-tag-canvas>
    </div>
    <el-button @click="pause">pause</el-button>
    <el-button @click="resume">resume</el-button>
    <el-button @click="reload">reload</el-button>
    <el-button @click="update">update</el-button>
    <el-button @click="tagToFront">tagToFront</el-button>
    <el-button @click="rotateTag">rotateTag</el-button>
    <el-button @click="setSpeed">setSpeed</el-button>
  </div>
</template>

<script>
  import XdhTagCanvas from '@/widgets/xdh-tag-canvas'

  export default {
    components: {
      XdhTagCanvas
    },
    data() {
      return {
        tags: [],
        options: {
          maxSpeed: 0.05,
          minSpeed: 0.01,
          textColour: null,
          textHeight: 25,
          fadeIn: 800,
          depth: 0.97,
          minBrightness: 0.2,
          wheelZoom: false,
          reverse: true,
          shuffleTags: true,
          shadowOffset: [1, 1],
          stretchX: 4.7,
          initial: [0, 0.1],
          clickToFront: 600
        }
      }
    },
    methods: {
      createTags(count) {
        let tags = []
        for (let i = 1; i < count; i++) {
          tags.push({
            text: 'Tag ' + i,
            color: '#ff0000'
          })
        }
        return tags
      },
      pause() {
        this.$refs.tag.pause()
      },
      resume() {
        this.$refs.tag.resume()
      },
      reload() {
        this.$refs.tag.reload()
      },
      tagToFront() {
        this.$refs.tag.tagToFront({
          index: 5,
          active: 1
        })
      },
      rotateTag() {
        this.$refs.tag.rotateTag({index: 2, lat: 30, lng: -45})
      },
      setSpeed() {
        this.$refs.tag.setSpeed([0.5, -0.25])
      }
    },
    mounted() {
      setTimeout(() => {
        this.tags = this.createTags(20)
      }, 100)

    }
  }
</script>

```
:::
