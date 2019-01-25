<template>
  <div class="page-block">
    <slot></slot>
    <div v-show="showCode" class="code">
      <slot name="code"></slot>
    </div>
    <div class="switch" v-draggable>
      <el-radio-group size="small" v-model="mode">
        <el-radio-button label="preview">预览</el-radio-button>
        <el-radio-button label="code">源码</el-radio-button>
      </el-radio-group>

    </div>
  </div>
</template>

<script>
  import Draggable from '@/utils/directives/draggable.js'
  import data from '../mock/data'

  export default {
    name: 'PageBlock',
    directives: {
      Draggable
    },
    data() {
      return {
        mode: 'preview',
        pages: data.pages
      }
    },
    computed: {
      showCode() {
        return this.mode === 'code'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-block {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .code {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
  }

  .switch {
    position: absolute;
    z-index: 4000;
    left: calc(100% - 200px);
    top: 100px;
    opacity: 0.9;
    padding: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .change-page {
    margin-left: 20px;
  }

</style>
