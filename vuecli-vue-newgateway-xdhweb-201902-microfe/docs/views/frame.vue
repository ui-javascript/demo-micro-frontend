<template>
  <layout :sidebar="false">
    <iframe class="frame" :src="url" frameborder="0"></iframe>
  </layout>
</template>

<script>
  import Layout from '../components/layout'

  export default {
    components: {
      Layout
    },
    data() {
      return {
        url: window.location.pathname + this.$route.params.url
      }
    },
    watch: {
      '$route'(val) {
        this.url = window.location.pathname + val.params.url
      }
    }
  }
</script>

<style lang="scss" scoped>
  .frame {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
  }
</style>
