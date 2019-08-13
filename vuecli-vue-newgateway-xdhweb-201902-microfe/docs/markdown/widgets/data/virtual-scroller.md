<script>
  import XdhVirtualScroller from '@/widgets/xdh-virtual-scroller'
  import XdhImageText from '@/widgets/xdh-image-text'
  import XdhAvatar from '@/widgets/xdh-avatar'
  import Mock from 'mockjs'

  export default {
    components: {
      XdhVirtualScroller,
      XdhImageText,
      XdhAvatar
    },
    data() {
      return {
        text: Mock.mock('@cword(300, 400)'),
        innerText: Mock.mock('@cword(20)'),
        variableMode: false,
        recycleScroll: {
          scrollerHeight: '400px',
          items: [],
          itemHeight: 38,
          pageMode: false
        },
        dynamicScroll: {
          scrollerHeight: '400px',
          mode: 'dynamic',
          items: [],
          minItemHeight: 54
        }
      }
    },
    watch: {
      variableMode(val) {
        if (val) {
          this.recycleScroll.itemHeight = null
          this.recycleScroll.items.unshift({
            id: 0,
            index: 0,
            value: this.text,
            height: 200
          })
        } else {
          this.recycleScroll.itemHeight = 38
          this.recycleScroll.items.splice(0, 1)
        }
      }
    },
    created() {
      for (let i = 0; i < 10000; i++) {
        this.recycleScroll.items.push(Mock.mock({
          id: i + 1,
          index: i + 1,
          value: this.innerText,
          height: 38 // 为了演示Variable Height Mode而加上，一般如果recycle下如果设置了itemHeight，则可以免除设置此处的height
        }))

        this.dynamicScroll.items.push(Mock.mock({
          id: i,
          index: i,
          value: this.innerText
        }))
      }
    }
  }
</script>
<style lang="scss" scoped>
  .scroller {
    border: 1px solid #50bfff;
    margin-bottom: 20px;

    * {
      box-sizing: border-box;
    }

    .vue-recycle-scroller__item-view {
      .items {
        width: 100%;
        padding: 10px;
        line-height: 18px;
      }
      &.hover {
        .items {
          background: rgba(0, 0, 0, .1);
        }
      }
    }
  }
</style>

## Virtual Scroller 虚拟滚动列表

文档： [xdh-virtual-scroller](#/src/widgets%2Fmodule-widgets_xdh-virtual-scroller.html)

### 固定高度的内容项的滚动

:::demo
```html
<template>
    <div style="width:100%;padding:12px;">
        <el-checkbox v-model="recycleScroll.pageMode">Page Mode</el-checkbox>
        <el-checkbox v-model="variableMode">Variable Height Mode</el-checkbox>

        <xdh-virtual-scroller class="scroller" v-bind="recycleScroll">
          <template slot-scope="scope">
            <xdh-image-text class="items">
              <template slot="text">
                <div>{{scope.item.index}}、{{scope.item.value}}</div>
              </template>
            </xdh-image-text>
          </template>
        </xdh-virtual-scroller>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              text: Mock.mock('@cword(300, 400)'),
              innerText: Mock.mock('@cword(20)'),
              variableMode: false,
              recycleScroll: {
                scrollerHeight: '400px',
                items: [],
                itemHeight: 38,
                pageMode: false
              }
            }
          },
          watch: {
            variableMode(val) {
              if (val) {
                this.recycleScroll.itemHeight = null
                this.recycleScroll.items.unshift({
                  id: 0,
                  index: 0,
                  value: this.text,
                  height: 200
                })
              } else {
                this.recycleScroll.itemHeight = 38
                this.recycleScroll.items.splice(0, 1)
              }
            }
          },
          created() {
            for (let i = 0; i < 10000; i++) {
              this.recycleScroll.items.push(Mock.mock({
                id: i + 1,
                index: i + 1,
                value: this.innerText,
                height: 38 // 为了演示Variable Height Mode而加上，一般如果recycle下如果设置了itemHeight，则可以免除设置此处的height
              }))
            }
          }
    }
</script>

<style lang="scss" scoped>
  .scroller {
    border: 1px solid #50bfff;
    margin-bottom: 20px;

    * {
      box-sizing: border-box;
    }

    .vue-recycle-scroller__item-view {
      .items {
        width: 100%;
        padding: 10px;
        line-height: 18px;
      }
      &.hover {
        .items {
          background: rgba(0, 0, 0, .1);
        }
      }
    }
  }
</style>
```
:::


### 动态高度的内容项的滚动

:::demo
```html
<template>
    <div style="width:100%;padding:12px;">
        <xdh-virtual-scroller class="scroller" v-bind="dynamicScroll">
          <template slot-scope="scope">
            <xdh-image-text class="items">
              <xdh-avatar slot="image">D</xdh-avatar>
              <template slot="text">
                <div>{{scope.item.index}}、{{scope.item.value}}</div>
                <div v-if="scope.index%4===0">{{text}}</div>
              </template>
            </xdh-image-text>
          </template>
        </xdh-virtual-scroller>
    </div>
</template>
<script>
    import Mock from 'mockjs'
    export default {
        data() {
            return {
              text: Mock.mock('@cword(300, 400)'),
              innerText: Mock.mock('@cword(20)'),
              dynamicScroll: {
                scrollerHeight: '400px',
                mode: 'dynamic',
                items: [],
                minItemHeight: 54
              }
            }
          },
          created() {
            for (let i = 0; i < 10000; i++) {
              this.dynamicScroll.items.push(Mock.mock({
                id: i,
                index: i,
                value: this.innerText
              }))
            }
          }
    }
</script>

<style lang="scss" scoped>
  .scroller {
    border: 1px solid #50bfff;
    margin-bottom: 20px;

    * {
      box-sizing: border-box;
    }

    .vue-recycle-scroller__item-view {
      .items {
        width: 100%;
        padding: 10px;
        line-height: 18px;
      }
      &.hover {
        .items {
          background: rgba(0, 0, 0, .1);
        }
      }
    }
  }
</style>
```
:::
