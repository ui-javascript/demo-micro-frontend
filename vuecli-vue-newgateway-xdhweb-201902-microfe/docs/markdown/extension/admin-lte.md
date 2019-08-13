## AdminLTE 后台布局

### 基础用法

:::demo
````html
<template>
<div style="height:800px">
  <xdh-admin-lte title="系统名称" :logo="logo" :menu="menu" :tabs="tabs">
    <template slot="tool">
      <xdh-avatar>A</xdh-avatar>
    </template>
    <div>内容</div>
  </xdh-admin-lte>
</div>
</template>

<script>
  import XdhAdminLte from 'E/xdh-admin-lte'
  import XdhAvatar from '@/widgets/xdh-avatar'
  import logo from '@/assets/img/logo.png'

  export default {
    components: {
      XdhAdminLte,
      XdhAvatar
    },
    data() {
      return {
        logo: logo,
        tabs: {
        },
        menu: {
          data: [
            {
              id: '/1',
              text: '导航一',
              group: '分组',
              icon: 'el-icon-location',
              children: [
                {
                  id: '/11',
                  text: '子菜单一',
                  icon: 'el-icon-document'
                },
                {
                  id: '/12',
                  text: '子菜单二',
                  icon: 'el-icon-document'
                },
                {
                  id: '/13',
                  text: '子菜单一',
                  icon: 'el-icon-document'
                },
                {
                  id: 14,
                  text: '子菜单二',
                  icon: 'el-icon-document'
                }
              ]
            },
            {id: 2, text: '导航二', icon: 'el-icon-menu'},
            {id: 3, text: '导航三', icon: 'el-icon-document'},
            {
              id: 4,
              text: '导航四',
              icon: 'el-icon-setting',
              children: [
                {
                  id: 41,
                  text: '子菜单一',
                  icon: 'el-icon-document'
                },
                {
                  id: 42,
                  text: '子菜单二',
                  icon: 'el-icon-document',
                  children: [
                    {
                      id: 411,
                      text: '子菜单一',
                      icon: 'el-icon-document'
                    },
                    {
                      id: 421,
                      text: '子菜单二',
                      icon: 'el-icon-document'
                    },
                    {
                      id: 431,
                      text: '子菜单一',
                      icon: 'el-icon-document'
                    },
                    {
                      id: 441,
                      text: '子菜单二',
                      icon: 'el-icon-document'
                    }
                  ]
                },
                {
                  id: 43,
                  text: '子菜单一',
                  icon: 'el-icon-document'
                },
                {
                  id: 44,
                  text: '子菜单二',
                  icon: 'el-icon-document'
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

````
:::
