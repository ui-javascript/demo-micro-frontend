<template>
  <xdh-layout class="xdh-admin-lte"
              fixed
              :west="west">
    <!-- 左侧布局 -->
    <div slot="west" class="xdh-admin-lte__sidebar" :class="{'is-collapsed':collapsed}">
      <!-- 系统名称 -->
      <div class="xdh-admin-lte__brand">
        <img :src="logo" v-if="logo">
        <span v-show="!collapsed">{{title}}</span>
      </div>

      <!-- 导航菜单 -->
      <xdh-menu-toggle class="xdh-admin-lte__menu"
                       popper-class="xdh-admin-lte__popper"
                       :collapse="collapsed"
                       @select="handleMenuSelect"
                       v-bind="menuOptions"></xdh-menu-toggle>
    </div>

    <!-- 右侧布局 -->
    <xdh-layout class="xdh-admin-lte__main" :fixed="fixed" :north="{height:'50px'}">

      <!-- 头部 -->
      <div class="xdh-admin-lte__header clearfix" slot="north">
        <!-- 折叠菜单按钮 -->
        <div class="xdh-admin-lte__switch"
             :class="{'is-collapsed':collapsed}"
             @click="handleSwitch">
          <i class="iconfont icon-collapsed"></i>
        </div>
        <!-- 导航Tabs -->
        <xdh-nav-tabs class="xdh-admin-lte__tabs"
                      v-if="tabs !== null"
                      :style="tabsStyle"
                      @on-remove="onTabRemove"
                      @on-click="onTabClick"
                      v-bind="tabsOptions"></xdh-nav-tabs>

        <!-- 头部工具区-->
        <div ref="tool"
             v-if="$slots.tool"
             class="xdh-admin-lte__tool">
          <!-- 工具插槽 -->
          <slot name="tool"></slot>
        </div>

      </div>

      <div ref="body" class="xdh-admin-lte__body">
        <!-- 页面内容插槽 -->
        <slot></slot>
      </div>


      <div slot="south" class="xdh-admin-lte__footer">
        <!-- 底部插槽 -->
        <slot name="footer">
          <span>{{copyright}}</span>
          <span class="version">{{version}}</span>
        </slot>
      </div>
    </xdh-layout>

  </xdh-layout>
</template>

<script>

  /**
   * XdhAdminLte 后台系统界面布局
   * @module extension/xdh-admin-lte
   */


  import XdhLayout from '@/widgets/xdh-layout'
  import XdhMenuToggle from '@/widgets/xdh-menu-toggle'
  import XdhNavTabs from '@/widgets/xdh-nav-tabs'
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import {debounce, traverse} from '@/utils/util'

  // 菜单数据项默认映射
  const menuDefaultProp = {
    id: 'id',
    text: 'text',
    icon: 'icon',
    children: 'children',
    group: 'group',
    route: 'route'
  }

  // NavTabs组件默认参数
  const defaultTabOptions = {
    store: 'XdhAdminTabs',
    router: false
  }

  /**
   * 根据菜单项目路径查找到数据项
   * @param {Array} data 菜单数据
   * @param {Array} path 菜单项目路径, el-menu select事件回调参数 indexPath
   * @param {Object} prop 数据项字段映射
   * @return {*}
   */
  const findItem = function (data, path, prop) {
    if (data && data.length > 0 && path && path.length > 0) {
      let array = data, item = null
      path.forEach(id => {
        item = array.find(n => n[prop.id].toString() === id.toString())
        if (item) {
          array = item[prop.children] || []
        }
      })
      return item
    }
    return null
  }

  /**
   * 插槽
   * @member slots
   * @property {string} tool 自定义右上角工具区
   * @property {string} -  页面内容
   * @property {string} footer 底部
   */


  export default {
    name: 'XdhAdminLte',
    components: {
      XdhLayout,
      XdhMenuToggle,
      XdhNavTabs
    },
    /**
     * 属性参数
     * @property {Boolean} [fixed=true] 固定头部底部
     * @property {String} [logo] 品牌logo地址
     * @property {Object} [title]  系统名称
     * @property {Object} [menu] XdhMenuToggle组件实例化参数
     * @property {Object} [tabs] XdhNavTabs组件实例化参数， 如设置null 将不显示tabs
     * @property {string} [copyright] 底部文字信息
     * @property {string} [version] 版本号
     */
    props: {
      // 固定头部、底部
      fixed: {
        type: Boolean,
        default: true
      },
      // logo 地址
      logo: {
        type: String
      },
      // 系统名称
      title: {
        type: String
      },
      // XdhMenuToggle组件实例化参数
      menu: {
        type: Object
      },
      // XdhNavTabs组件实例化参数
      tabs: {
        type: Object,
        default() {
          return {}
        }
      },
      copyright: {
        type: String,
        default: '技术支持：珠海市新德汇信息技术有限公司 @ 2018'
      },
      version: {
        type: String,
        default: '版本：v3.0.0'
      }
    },
    data() {
      return {
        collapsed: false,
        menuActive: null,
        toolWidth: 0
      }
    },
    computed: {
      west() {
        return {
          width: this.collapsed ? '64px' : '250px'
        }
      },
      tabsStyle() {
        return {
          width: `calc(100% - 60px - ${this.toolWidth}px)`
        }
      },
      menuOptions() {
        return {
          collapsed: this.collapsed,
          props: menuDefaultProp,
          defaultActive: this.menuActive,
          ...this.menu
        }
      },
      tabsOptions() {
        return {
          ...defaultTabOptions,
          ...this.tabs

        }
      }
    },
    watch: {
      '$route.path': {
        immediate: true,
        handler(val) {
          // 路由切换，router-view内容滚动到顶部
          this.$refs.body && (this.$refs.body.scrollTop = 0)

          // NavTabs是路由模式
          const tab = this.tabsOptions
          if (tab.router) {
            const prop = {...menuDefaultProp, ...this.menuOptions.props}
            const item = traverse(this.menuOptions.data, true, n => n[prop.id] === val)
            if (item) {
              this.$nextTick(() => {
                this.pushTab(item, tab.store, prop)
              })
            }
          }
          if (this.menuOptions.router) this.menuActive = val
        }
      }
    },
    methods: {
      handleSwitch() {
        this.collapsed = !this.collapsed
      },
      handleMenuSelect(index, path) {
        // 菜单数据属性字段映射
        const prop = {...menuDefaultProp, ...this.menuOptions.props}
        // 根据点击的当前菜单项目，获取菜单节点的数据
        const item = findItem(this.menuOptions.data || [], path, prop)
        // NavTabs实例化参数
        const tab = this.tabsOptions
        // 非路由模式时，把点击的菜单项目加入到navTabs
        if (!tab.router) {
          this.pushTab(item, tab.store, prop)
        }
        /**
         * 左侧菜单点击时触发
         * @event menu-select
         * @param {string} index 菜单的key
         * @param {String[]} path 菜单路径
         * @param {object} item 菜单项数据
         */
        this.$emit('menu-select', index, path, item)
      },
      pushTab(item, store = defaultTabOptions.store, prop = menuDefaultProp) {
        if (this.tabs === null) return
        this.$store.commit(`${store}/push`, {
          tab: {
            label: item[prop.text],
            icon: item[prop.icon],
            name: item[prop.id].toString(),
            closable: true
          }
        })
      },
      onTabRemove(name, selected) {
        /**
         * navtabs 删除时触发
         * @event tab-remove
         * @param {string} name tab名称
         * @param {string} selected 将要切换到的tab名称
         */
        this.$emit('tab-remove', name, selected)
      },
      onTabClick(item) {
        /**
         * navtabs 点击时触发
         * @event tab-click
         * @param {object} item tab实例
         */
        this.$emit('tab-click', item)
      },
      setToolWidth() {
        if (this.$refs.tool) {
          this.toolWidth = this.$refs.tool.getBoundingClientRect().width
        }
      }
    },
    mounted() {
      this.proxySetToolWidth = debounce(this.setToolWidth, 50, true, this)
      this.setToolWidth()
      if (this.$refs.tool) {
        addResizeListener(this.$refs.tool, this.proxySetToolWidth)
      }
    },
    beforeDestroy() {
      if (this.$refs.tool) {
        removeResizeListener(this.$refs.tool, this.proxySetToolWidth)
      }
    }
  }
</script>
