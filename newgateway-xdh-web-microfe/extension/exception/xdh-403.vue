<template>
  <xdh-exception text="403"
                 description="抱歉，你无权访问该页面"
                 :img="img">
    <slot name="actions" slot="actions">
      <el-button type="primary" size="small" @click="backHome">返回首页</el-button>
    </slot>
  </xdh-exception>
</template>

<script>
  import XdhException from './components/xdh-exception'

  export default {
    name: 'Xdh403',
    components: {
      XdhException
    },
    data() {
      return {
        img: require('./img/403.svg')
      }
    },
    methods: {
      backHome() {
        location.href = location.pathname
      }
    }
  }
</script>
