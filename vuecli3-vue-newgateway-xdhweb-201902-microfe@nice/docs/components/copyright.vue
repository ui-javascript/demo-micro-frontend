<template>
  <div class="copyright">新德汇 前端开发部 出品 @ 2018</div>
</template>

<script>
  export default {
    name: "footer"
  }
</script>

<style scoped lang="scss">
  @import "../../src/style/vars";

  .copyright {
    background: $--background-color-base;
    height: 100%;
    line-height: 40px;
    text-align: right;
    padding-right: 10px;
    color: $--color-info;
  }
</style>