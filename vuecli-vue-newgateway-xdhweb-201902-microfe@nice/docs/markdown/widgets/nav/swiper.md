<script>
  import XdhSwiper from '@/widgets/xdh-swiper'

  export default {
    components: {
      XdhSwiper
    },
    data() {
      return {
        swiperOpt1: {
          pageSize: 12,
          columns: 6,
          mode: 'slide',
          iconStyle: {fontSize: '50px', width: '80px', height: '80px'}
        },
        swiperOpt2: {
          pageSize: 12,
          columns: 6,
          iconStyle: {fontSize: '50px'}
        },
        data1: [],
        data2: []
      }
    },
    created() {
      this.data1 = [
        {
          title: '同一个标题(每页显示4个，每行显示2列)',
          pageSize: 6,
          columns: 3,
          data: [
            {icon: 'el-icon-success', title: '社会'},
            {icon: 'el-icon-success', title: '人物'},
            {icon: 'el-icon-success', title: '生物'},
            {icon: 'el-icon-success', title: '人类'},
            {icon: 'el-icon-success', title: '车辆'},
            {icon: 'el-icon-success', title: '时间'},
            {icon: 'el-icon-success', title: '测试'}
          ]
        },
        {
          title: '标题2（系统默认一页显示12个，每行显示6列）',
          data: [
            {icon: 'el-icon-error', title: '人类'},
            {icon: 'el-icon-error', title: '车辆'},
            {icon: 'el-icon-error', title: '时间'},
            {icon: 'el-icon-error', title: '测试'}
          ]
        },
        {
          title: '标题3（系统默认一页显示6个，每行显示3列）',
          pageSize: 6,
          columns: 3,
          iconStyle: {width: '150px', height: '80px'},
          data: [
            {src: require('D/assets/hamburger.png'), title: '人类'},
            {src: require('D/assets/hamburger.png'), title: '测试'},
            {src: require('D/assets/hamburger.png'), title: '车辆'},
            {src: require('D/assets/hamburger.png'), title: '时间'},
            {src: require('D/assets/hamburger.png'), title: '社会'},
            {src: require('D/assets/hamburger.png'), title: '人物'}
          ]
        }
      ]

      for (let i = 0; i < 4; i++) {
        let data = []
        for (let j = 0; j < 15; j++) {
          data.push({icon: 'el-icon-warning', src: '', title: '' + i + j})
        }

        this.data2.push({
          title: 'test' + i,
          data: data
        })
      }
    }
  }
</script>

## Swiper 导航切换器

文档： [xdh-swiper](#/src/widgets%2Fmodule-widgets_xdh-swiper.html)

### 基础应用

:::demo
```html
<template>
    <xdh-swiper style="height:400px;"
                :data="data1"
                v-bind="swiperOpt1">
      <template slot="swiper-title" slot-scope="scope">
        <span style="font-weight: bold;">{{scope.title}}</span>
      </template>
    </xdh-swiper>
</template>

<script>
  export default {
    components: {
      XdhSwiper
    },
    data() {
      return {
        swiperOpt1: {
          pageSize: 12,
          columns: 6,
          mode: 'slide',
          iconStyle: {fontSize: '50px', width: '80px', height: '80px'}
        },
        data1: []
      }
    },
    created() {
      this.data1 = [
        {
          title: '同一个标题(每页显示4个，每行显示2列)',
          pageSize: 6,
          columns: 3,
          data: [
            {icon: 'el-icon-success', title: '社会'},
            {icon: 'el-icon-success', title: '人物'},
            {icon: 'el-icon-success', title: '生物'},
            {icon: 'el-icon-success', title: '人类'},
            {icon: 'el-icon-success', title: '车辆'},
            {icon: 'el-icon-success', title: '时间'},
            {icon: 'el-icon-success', title: '测试'}
          ]
        },
        {
          title: '标题2（系统默认一页显示12个，每行显示6列）',
          data: [
            {icon: 'el-icon-error', title: '人类'},
            {icon: 'el-icon-error', title: '车辆'},
            {icon: 'el-icon-error', title: '时间'},
            {icon: 'el-icon-error', title: '测试'}
          ]
        },
        {
          title: '标题3（系统默认一页显示6个，每行显示3列）',
          pageSize: 6,
          columns: 3,
          iconStyle: {width: '150px', height: '80px'},
          data: [
            {src: require('D/assets/hamburger.png'), title: '人类'},
            {src: require('D/assets/hamburger.png'), title: '测试'},
            {src: require('D/assets/hamburger.png'), title: '车辆'},
            {src: require('D/assets/hamburger.png'), title: '时间'},
            {src: require('D/assets/hamburger.png'), title: '社会'},
            {src: require('D/assets/hamburger.png'), title: '人物'}
          ]
        }
      ]
    }
  }
</script>
```
:::

### 嵌套Slide

:::demo
```html
<template>
    <xdh-swiper style="height:400px;"
                :data="data2"
                v-bind="swiperOpt2">
      <template slot="swiper-title" slot-scope="scope">
        <span style="color: #009d88">{{scope.title}}</span>
      </template>

      <template slot="swiper1-content" slot-scope="scope">
        {{scope.item.title}}
      </template>
    </xdh-swiper>
</template>

<script>
export default {
    components: {
      XdhSwiper
    },
    data() {
      return {
        swiperOpt2: {
          pageSize: 12,
          columns: 6,
          iconStyle: {fontSize: '50px'}
        },
        data2: []
      }
    },
    created() {
      for (let i = 0; i < 4; i++) {
        let data = []
        for (let j = 0; j < 15; j++) {
          data.push({icon: 'el-icon-warning', src: '', title: '' + i + j})
        }

        this.data2.push({
          title: 'test' + i,
          data: data
        })
      }
    }
  }
</script>
```
:::

