<template>
  <div class="memo">
    <p v-for="(item, index) in list" :key="index">
      <a :href="`${path}#${item.link}`">{{item.name}}</a>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        path: location.pathname,
        list: [
          {
            name: 'xdh-layout 布局',
            link: '/widgets/layout'
          },
          {
            name: 'xdh-panel 面板',
            link: '/widgets/panel'
          },
          {
            name: 'xdh-window 弹窗',
            link: '/widgets/window'
          },
          {
            name: 'xdh-grid-layout 网格排版',
            link: '/widgets/grid-layout'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .memo {
    font-size: 16px;
    line-height: 1.5em;
  }
</style>
