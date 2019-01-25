<template>
  <xdh-exception text="500"
                 description="抱歉，服务器出错了"
                 :img="img">
    <slot name="actions" slot="actions">
      <el-button type="primary" size="small" @click="backHome">返回首页</el-button>
    </slot>
  </xdh-exception>
</template>

<script>
  import XdhException from './components/xdh-exception'

  export default {
    name: 'Xdh405',
    components: {
      XdhException
    },
    data() {
      return {
        img: require('./img/500.svg')
      }
    },
    methods: {
      backHome() {
        location.href = location.pathname
      }
    }
  }
</script>
