<template>
  <xdh-admin fixed
             :copyright="info.copyright"
             :header="header"
             :sidebar="sidebar"
             :menu="menuOptions"
             :tabs="tabs"
             nav-type="tab"
             collapsible
             footer-in-main>
       <span class="sys-theme" slot="header-tool">
      <el-color-picker size="small" v-model="color"></el-color-picker>
    </span>
    <slot></slot>
  </xdh-admin>
</template>

<script>
  import XdhAdmin from 'E/xdh-admin'
  import themeMixin from '@/utils/theme'
  import data from '../mock/data'

  export default {
    mixins: [themeMixin()],
    components: {
      XdhAdmin
    },
    props: {
      sidebar: {
        type: Boolean,
        default: true
      },
      tabs: Object,
      menu: Object
    },
    data() {
      return {
        info: data.info,
        header: {
          navRouter: true,
          navDefaultActive: '',
          layout: 'logo,title,->,nav,tool',
          nav: data.nav.items,
          ...data.info
        }
      }
    },
    computed: {
      color: {
        get() {
          return this.$store.state.uiTheme.color
        },
        set(val) {
          this.$store.commit('uiTheme/change', val)
        }
      },
      menuOptions() {
        return {
          router: true,
          uniqueOpened: true,
          props: {id: 'path', text: 'text', icon: 'icon', children: 'children', group: 'group'},
          ...this.menu
        }
      }
    },
    watch: {
      '$route.path': {
        immediate: true,
        handler(val) {
          const category = val.split('/')[1]
          const item = data.nav.items.find(item => item.id.includes(category))
          if (item) {
            if (item.children) {
              this.header.navDefaultActive = val
            } else {
              this.header.navDefaultActive = item.id
            }
          }
        }
      }
    },
    created() {
      document.title = this.header.title
    }
  }
</script>


<style scoped lang="scss">
  .sys-theme {
    margin-top: 13px;
    margin-left: 10px;
    display: inline-block;
    /deep/ .el-color-picker__trigger {
      background: #fff;
    }
  }
</style>
