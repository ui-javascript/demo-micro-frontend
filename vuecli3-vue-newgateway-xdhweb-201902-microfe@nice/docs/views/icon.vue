<template>
  <div class="iconfont">
    <h2>字体图标<span class="icon-total">({{allNumber}} 个)</span></h2>
    <el-tabs v-model="activeNames" type="border-card">
      <el-tab-pane v-for="(item , index) in icons" :key="index" :label="item.label" :name="index.toString()">
        <div>
          <xdh-grid :data="item.list" direction="row" justify="flex-start" wrap="wrap" class="icons-grid">
            <template slot-scope="scope">
              <div class="icon-item">
                <i :class="scope.item"></i>
                {{scope.item}}
              </div>
            </template>
          </xdh-grid>
        </div>
      </el-tab-pane>

    </el-tabs>

  </div>
</template>

<script>
  import icons from '../base/icons'

  export default {
    data() {
      return {
        number: 0,
        icons: icons,
        activeNames: '0'
      }
    },
    computed: {
      allNumber() {
        icons.forEach(item => {
          this.number += item.list.length;
        })
        return this.number;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .icon-item {
    border: 1px solid #eee;
    width: 150px;
    height: 110px;
    margin-right: -1px;
    margin-bottom: -1px;
    font-size: 12px;
    text-align: center;
    i {
      font-size: 30px;
      display: block;
      margin: 10px;
    }
  }

  .icon-total {
    font-size: 20px;
    color: yellowgreen;
    margin-left: 20px;
  }

  .icons-grid {
    margin-top: 20px;
  }

  .iconfont /deep/ .el-collapse-item__arrow {
    float: left;
  }
</style>
