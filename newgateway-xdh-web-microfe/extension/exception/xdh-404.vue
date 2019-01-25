<template>
  <xdh-exception text="404"
                 description="抱歉，你访问的页面不存在"
                 :img="img">
    <slot name="actions" slot="actions">
      <el-button type="primary" size="small" @click="backHome">返回首页</el-button>
    </slot>
  </xdh-exception>
</template>

<script>
  import XdhException from './components/xdh-exception'

  export default {
    name: 'Xdh404',
    components: {
      XdhException
    },
    data() {
      return {
        img: require('./img/404.svg')
      }
    },
    methods: {
      backHome() {
        location.href = location.pathname
      }
    }
  }
</script>
