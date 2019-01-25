<template>
  <xdh-layout class="xdh-admin"
              :north="northOptions"
              :west="westOptions"
              :fixed="fixed"
              :footer-in-main="footerInMain">
    <!-- 头部组件-->
    <slot name="header" slot="north">
      <xdh-header class="xdh-admin__header"
                  :class="{'is-fixed-width':this.fixedWidth}"
                  v-bind="headerOptions"
                  @on-nav-select="onNavSelect"
                  @on-search="onSearch"
                  @on-tool-click="onToolClick">
        <slot name="header-logo" slot="logo"></slot>
        <slot name="header-title" slot="title"></slot>
        <slot name="header-search" slot="search"></slot>
        <slot name="header-nav" slot="nav"></slot>
        <slot name="header-user" slot="user"></slot>
        <slot name="header-tool" slot="tool"></slot>
        <slot name="header-slot"></slot>
      </xdh-header>
    </slot>

    <!-- 侧边栏 -->
    <slot v-if="sidebar" name="sidebar" slot="west">
      <div class="xdh-admin__sidebar">
        <div v-if="collapsible" class="xdh-admin__switch" @click="handleSidebarSwitch">
          <i class="iconfont icon-collapsed" :class="{'is-collapsed': menuCollapsed}"></i>
        </div>
        <!-- 前置插槽 -->
        <slot name="menu-prepend"></slot>
        <xdh-menu-toggle class="xdh-admin__menu"
                         :class="{'collapsible':collapsible}"
                         popper-class="xdh-admin__popper"
                         :collapse="menuCollapsed"
                         v-bind="menuOptions"
                         @select="handleMenuSelect">
        </xdh-menu-toggle>
        <!-- 后置插槽 -->
        <slot name="menu-append"></slot>
      </div>
    </slot>

    <!-- 主体内容 -->
    <div ref="main" class="xdh-admin__main">
      <!-- 导航tabs -->
      <xdh-nav-tabs v-if="navType==='tab'"
                    class="xdh-admin__tabs"
                    @on-remove="onTabRemove"
                    @on-click="onTabClick"
                    v-bind="tabsOptions"></xdh-nav-tabs>
      <!--面包屑-->
      <xdh-breadcrumb v-if="navType==='breadcrumb'"
                      class="xdh-admin__breadcrumb"
                      v-bind="breadcrumb">
        <slot name="breadcrumb-tool" slot="tool"></slot>
      </xdh-breadcrumb>

      <div ref="body" class="xdh-admin__body" :class="bodyClasses">
        <slot></slot>
      </div>
    </div>

    <!-- 底部-->
    <slot v-if="footer" name="footer" slot="south">
      <div class="xdh-admin__footer"
           :class="{'is-fixed-width':this.fixedWidth}">
        {{copyright}}
      </div>
    </slot>
  </xdh-layout>
</template>

<script>

  /**
   * XdhAdmin 后台系统界面布局
   * @module extension/xdh-admin
   */

  import XdhLayout from '@/widgets/xdh-layout'
  import XdhNavTabs from '@/widgets/xdh-nav-tabs'
  import XdhBreadcrumb from '@/widgets/xdh-breadcrumb'
  import XdhHeader from '@/widgets/xdh-header'
  import XdhMenuToggle from '@/widgets/xdh-menu-toggle'
  import {traverse} from '@/utils/util'

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
   * @property {string} header 自定义头部
   * @property {string} header-logo 头部logo
   * @property {string} header-title 头部标题
   * @property {string} header-search 头部搜索框
   * @property {string} header-nav 头部导航菜单
   * @property {string} header-user 头部用户信息
   * @property {string} header-tool 头部工具区
   * @property {string} header-slot 头部自定义内容
   * @property {string} sidebar 自定义侧边栏
   * @property {string} menu-prepend 左侧菜单前置内容
   * @property {string} menu-append 左侧菜单后置内容
   * @property {string} breadcrumb-tool 面包屑工具区
   * @property {string} footer 自定义底部内容
   */


  export default {
    name: 'XdhAdmin',
    components: {
      XdhLayout,
      XdhNavTabs,
      XdhHeader,
      XdhMenuToggle,
      XdhBreadcrumb
    },
    /**
     * 属性参数
     * @property {Object} [header] 头部XdhHeader组件实例参数对象
     * @property {string} [menuWidth=250px] 左侧菜单栏宽度
     * @property {Boolean} [collapsible=false] 左侧菜单栏能否折叠
     * @property {Object} [menu]  XdhMenuToggle组件实例化参数
     * @property {Object} [tabs]  XdhNavTabs组件实例化参数，在navType=tab 时有效
     * @property {string} [copyright] 底部文字信息
     * @property {Boolean} [fixed=false] 高度固定100%适应
     * @property {Boolean} [footerInMain=false] 底部放入main里面
     * @property {Boolean} [footer=true] 是否显示底部
     * @property {Boolean} [sidebar=true] 是否显示侧边栏
     * @property {Object} [breadcrumb] 面包屑实例化参数，在navType=breadcrumb 时有效
     * @property {string} [navType=none] 导航类型，可选值 tab、breadcrumb、none
     * @property {Boolean} [fixedWidth=false] 内容区域宽度是否固定1200px
     */
    props: {
      // XdhHeader组件实例化参数
      header: {
        type: Object,
        default() {
          return {}
        }
      },
      // 左侧菜单栏宽度
      menuWidth: {
        type: String,
        default: '250px'
      },
      // 左侧菜单栏能否折叠
      collapsible: {
        type: Boolean,
        default: false
      },
      // XdhMenuToggle组件实例化参数
      menu: {
        type: Object,
        default() {
          return {}
        }
      },
      // XdhNavTabs组件实例化参数
      tabs: {
        type: Object,
        default() {
          return {}
        }
      },
      // 面包屑组件实例化参数
      breadcrumb: {
        type: Object,
        default() {
          return {}
        }
      },
      copyright: {
        type: String,
        default: '技术支持： 珠海市新德汇信息技术有限公司 @ 2018'
      },
      // 高度固定100%适应
      fixed: {
        type: Boolean,
        default: false
      },
      // 底部放入main里面
      footerInMain: {
        type: Boolean,
        default: false
      },
      // 是否显示底部
      footer: {
        type: Boolean,
        default: true
      },
      // 是否显示侧边栏
      sidebar: {
        type: Boolean,
        default: true
      },

      // 小导航类型，支持 navTab / breadcrumb
      navType: {
        type: String,
        default: 'none',
        validator() {
          return ['tab', 'breadcrumb', 'none']
        }
      },
      // 内容区域宽度固定
      fixedWidth: {
        type: Boolean,
        default: false
      }

    },
    data() {
      return {
        menuCollapsed: false,
        menuActive: null,
        headerNavActive: null
      }
    },
    computed: {
      menuOptions() {
        return {
          collapsed: this.menuCollapsed,
          props: menuDefaultProp,
          defaultActive: this.menuActive,
          ...this.menu
        }
      },
      headerOptions() {
        return {
          navDefaultActive: this.headerNavActive,
          ...this.header
        }
      },
      westOptions() {
        return {
          width: this.menuCollapsed ? '64px' : this.menuWidth
        }
      },
      northOptions() {
        const map = {
          'default': '60px',
          'large': '80px',
          'small': '50px'
        }
        return {
          height: map[this.headerOptions.size || 'default']
        }
      },
      tabsOptions() {
        return {
          ...defaultTabOptions,
          ...this.tabs

        }
      },
      bodyClasses() {
        return {
          'is-fixed-width': this.fixedWidth,
          'has-tab': this.navType !== 'none'
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
          if (this.headerOptions.navRouter) this.headerNavActive = val

        }
      }
    },
    methods: {
      pushTab(item, store = defaultTabOptions.store, prop = menuDefaultProp) {
        this.$store.commit(`${store}/push`, {
          tab: {
            label: item[prop.text],
            icon: item[prop.icon],
            name: item[prop.id].toString(),
            closable: true
          }
        })
      },
      handleSidebarSwitch() {
        this.menuCollapsed = !this.menuCollapsed
        /**
         * 侧边栏折叠切换时触发
         * @event sidebar-switch
         * @param {boolean} collapsed 是否折叠
         */
        this.$emit('sidebar-switch', this.menuCollapsed)
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
      onNavSelect(index, path) {
        /**
         * 头部菜单点击时触发
         * @event header-nav-select
         * @param {string} index 菜单的key
         * @param {String[]} path 菜单路径
         */
        this.$emit('header-nav-select', index, path)
      },
      onSearch(keyword, type) {
        /**
         * 头部点击搜索时触发
         * @event header-search
         * @param {string} keyword 关键字
         * @param {String} type 搜索类型
         */
        this.$emit('header-search', keyword, type)
      },
      onToolClick(item) {
        /**
         * 头部工具按钮点击时触发
         * @event header-tool-click
         * @param {object} item 项数据
         */
        this.$emit('header-tool-click', item)
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
      }
    }
  }

</script>

