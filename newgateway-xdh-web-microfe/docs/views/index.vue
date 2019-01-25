<template>
  <div class="wrapper">
    <xdh-title title="统计" border></xdh-title>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in info" :key="index">
        <xdh-info-box shadow="never"
                      :title="item.text"
                      :number="item.count"
                      :theme="item.theme"
                      :icon="item.icon">

        </xdh-info-box>
      </el-col>

    </el-row>

    <xdh-title title="示例" border></xdh-title>
    <el-row :gutter="20" class="sample">
      <el-col :span="8">
        <xdh-panel title="扩展" fit>
          <xdh-list :data="data.extension.items"
                    layout="horizontal"
                    :column="2"
                    :gutter="10"
                    :split="false"
                    justify="space-between">
            <template slot-scope="scope">
              <router-link :to="scope.item.path">
                <el-tag class="link">
                  {{scope.item.text}}
                </el-tag>
              </router-link>
            </template>
          </xdh-list>
        </xdh-panel>
      </el-col>
      <el-col :span="8">
        <xdh-panel title="页面" fit>
          <xdh-list :data="data.pages.items"
                    layout="horizontal"
                    :column="2"
                    :gutter="10"
                    :split="false"
                    justify="space-between">
            <template slot-scope="scope">
              <router-link :to="scope.item.path">
                <el-tag class="link">
                  {{scope.item.text}}
                </el-tag>
              </router-link>
            </template>
          </xdh-list>
        </xdh-panel>
      </el-col>

      <el-col :span="8">
        <xdh-panel title="在线工具" fit>
          <xdh-list :data="data.tools.items"
                    layout="horizontal"
                    :column="2"
                    :gutter="10"
                    :split="false"
                    justify="space-between">
            <template slot-scope="scope">
              <router-link :to="scope.item.path">
                <el-tag class="link">
                  {{scope.item.text}}
                </el-tag>
              </router-link>
            </template>
          </xdh-list>
        </xdh-panel>
      </el-col>
    </el-row>

    <xdh-title title="组件库" border></xdh-title>


    <el-row :gutter="10">
      <el-col :span="6" v-for="(item, index) in data.widgets.items" class="item-col" :key="index">
        <xdh-panel :title="item.text" fit>
          <xdh-list :data="item.children" size="mini">
            <template slot-scope="scope">
              <xdh-ellipsis :tooltip="false">
                <router-link :to="scope.item.path">{{scope.item.text}}</router-link>
              </xdh-ellipsis>
            </template>
          </xdh-list>
          <span slot="tool">共 {{item.children.length}} 个</span>
        </xdh-panel>
      </el-col>

    </el-row>

  </div>
</template>

<script>

  import XdhInfoBox from '@/widgets/xdh-info-box'
  import XdhPanel from '@/widgets/xdh-panel'
  import XdhTitle from '@/widgets/xdh-title'
  import XdhList from '@/widgets/xdh-list'
  import XdhEllipsis from '@/widgets/xdh-ellipsis'
  import data from '../mock/data'

  export default {
    components: {
      XdhInfoBox,
      XdhPanel,
      XdhTitle,
      XdhList,
      XdhEllipsis
    },
    data() {
      return {
        data: data,
        info: [
          {
            text: '组件数',
            count: data.widgets.count,
            icon: 'iconfont icon-components',
            theme: ''
          },
          {
            text: '辅助工具',
            count: data.utils.count,
            icon: 'iconfont icon-spanner',
            theme: 'success'
          },
          {
            text: '扩展',
            count: data.extension.count,
            icon: 'iconfont icon-gearmore',
            theme: 'warning'
          },
          {
            text: '示例页面',
            count: data.pages.count,
            icon: 'el-icon-document',
            theme: 'danger'
          }
        ],
      }
    }

  }
</script>


<style scoped lang="scss">
  @import "../../src/style/vars";

  .wrapper {
    > .el-row {
      padding-bottom: 20px;
    }
  }

  .item-col {
    height: 480px;
    margin-bottom: 10px;
    /deep/ {
      .xdh-list__item:hover {
        background: $--color-primary-light-9;
      }
    }
  }

  .link {
    margin-bottom: 10px;
  }

  .sample > .el-col {
    height: 200px;
  }


</style>

