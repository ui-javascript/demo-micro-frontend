<template>
  <div class="page-scss">
    <h2>默认主题配色</h2>


    <xdh-title title="主色" border>
      <el-color-picker slot="tool" v-model="color" size="small"></el-color-picker>
    </xdh-title>
    <xdh-grid :data="colors" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item]">
          $--{{scope.item}}
        </div>
      </template>
    </xdh-grid>
    <xdh-title title="辅助色 - success" border></xdh-title>
    <xdh-grid :data="success" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item]">
          $--{{scope.item}}
        </div>
      </template>
    </xdh-grid>

    <xdh-title title="辅助色 - warning" border></xdh-title>
    <xdh-grid :data="warning" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item]">
          $--{{scope.item}}
        </div>
      </template>
    </xdh-grid>

    <xdh-title title="辅助色 - danger" border></xdh-title>
    <xdh-grid :data="danger" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item]">
          $--{{scope.item}}
        </div>
      </template>
    </xdh-grid>
    <xdh-title title="辅助色 - info" border></xdh-title>
    <xdh-grid :data="info" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item]">
          $--{{scope.item}}
        </div>
      </template>
    </xdh-grid>

    <xdh-title title="文字颜色" border></xdh-title>
    <xdh-grid :data="text" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item.code]">
          {{scope.item.name}} <br/>
          $--{{scope.item.code}}
        </div>
      </template>
    </xdh-grid>

    <xdh-title title="边框颜色" border></xdh-title>
    <xdh-grid :data="border" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item.code]">
          {{scope.item.name}} <br/>
          $--{{scope.item.code}}
        </div>
      </template>
    </xdh-grid>
    <xdh-title title="背景颜色" border></xdh-title>
    <xdh-grid :data="['background-color-base']" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item]">
          $--{{scope.item}}
        </div>
      </template>
    </xdh-grid>
    <xdh-title title="链接颜色" border></xdh-title>
    <xdh-grid :data="link" direction="row" justify="flex-start" wrap="wrap" class="box-grid">
      <template slot-scope="scope">
        <div :class="['box-item', scope.item.code]">
          {{scope.item.name}} <br/>
          $--{{scope.item.code}}
        </div>
      </template>
    </xdh-grid>

  </div>
</template>

<script>
  import themeMixin from '@/utils/theme'

  export default {
    mixins: [themeMixin()],
    data() {
      return {
        colors: [
          'color-primary',
          'color-primary-light-1',
          'color-primary-light-2',
          'color-primary-light-3',
          'color-primary-light-4',
          'color-primary-light-5',
          'color-primary-light-6',
          'color-primary-light-7',
          'color-primary-light-8',
          'color-primary-light-9'
        ],
        success: [
          'color-success',
          'color-success-light',
          'color-success-lighter'
        ],
        warning: [
          'color-warning',
          'color-warning-light',
          'color-warning-lighter'
        ],
        danger: [
          'color-danger',
          'color-danger-light',
          'color-danger-lighter'
        ],
        info: [
          'color-info',
          'color-info-light',
          'color-info-lighter'
        ],
        text: [{
          code: 'color-text-primary',
          name: '主要文字'
        }, {
          code: 'color-text-regular',
          name: '常规文字'
        }, {
          code: 'color-text-secondary',
          name: '次要文字'
        }, {
          code: 'color-text-placeholder',
          name: '占位文字'
        }],
        border: [{
          code: 'border-color-base',
          name: '一级边框'
        }, {
          code: 'border-color-light',
          name: '二级边框'
        }, {
          code: 'border-color-lighter',
          name: '三级边框'
        }, {
          code: 'border-color-extra-light',
          name: '四级边框'
        }],
        link: [{
          code: 'link-color',
          name: '默认状态'
        }, {
          code: 'link-hover-color',
          name: '鼠标经过'
        }]
      }
    },
    computed: {
      color: {
        get() {
          return this.$store.state.uiTheme.color
        },
        set(val) {
          this.$store.commit('uiTheme/change', val)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../src/style/vars";

  .xdh-title {
    margin-top: 20px;
  }

  .page-scss {
  }

  .code {
    background: #eee;
    padding: 10px;
    overflow: auto;
  }

  .box-item {
    width: 200px;
    height: 80px;
    text-align: center;
    line-height: 80px;

  }

  .color-primary {
    background: $--color-primary;
  }

  .color-primary-light-1 {
    background: $--color-primary-light-1;
  }

  .color-primary-light-2 {
    background: $--color-primary-light-2;
  }

  .color-primary-light-3 {
    background: $--color-primary-light-3;
  }

  .color-primary-light-4 {
    background: $--color-primary-light-4;
  }

  .color-primary-light-5 {
    background: $--color-primary-light-5;
  }

  .color-primary-light-6 {
    background: $--color-primary-light-6;
  }

  .color-primary-light-7 {
    background: $--color-primary-light-7;
  }

  .color-primary-light-8 {
    background: $--color-primary-light-8;
  }

  .color-primary-light-9 {
    background: $--color-primary-light-9;
  }

  .color-success {
    background: $--color-success;
  }

  .color-success-light {
    background: $--color-success-light;
  }

  .color-success-lighter {
    background: $--color-success-lighter;
  }

  .color-warning {
    background: $--color-warning;
  }

  .color-warning-light {
    background: $--color-warning-light;
  }

  .color-warning-lighter {
    background: $--color-warning-lighter;
  }

  .color-danger {
    background: $--color-danger;
  }

  .color-danger-light {
    background: $--color-danger-light;
  }

  .color-danger-lighter {
    background: $--color-danger-lighter;
  }

  .color-info {
    background: $--color-info;
  }

  .color-info-light {
    background: $--color-info-light;
  }

  .color-info-lighter {
    background: $--color-info-lighter;
  }

  .color-text-primary {
    background: $--color-text-primary;
    color: #fff;
    line-height: 40px;
  }

  .color-text-regular {
    background: $--color-text-regular;
    color: #fff;
    line-height: 40px;
  }

  .color-text-secondary {
    background: $--color-text-secondary;
    color: #fff;
    line-height: 40px;
  }

  .color-text-placeholder {
    background: $--color-text-placeholder;
    color: #fff;
    line-height: 40px;
  }

  .border-color-base {
    background: $--border-color-base;
    line-height: 40px;
  }

  .border-color-light {
    background: $--border-color-light;
    line-height: 40px;
  }

  .border-color-lighter {
    background: $--border-color-lighter;
    line-height: 40px;
  }

  .border-color-extra-light {
    background: $--border-color-extra-light;
    line-height: 40px;
  }

  .background-color-base {
    background: $--background-color-base;
  }

  .link-color {
    background: $--link-color;
    line-height: 40px;
    color: #fff;
  }

  .link-hover-color {
    background: $--link-hover-color;
    line-height: 40px;
    color: #fff;
  }

</style>
