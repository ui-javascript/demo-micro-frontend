## Breadcrumb 面包屑

:::tip
在el-breadcrumb的基础上扩展， 文档： [xdh-breadcrumb](#/src/widgets%2Fmodule-widgets_xdh-breadcrumb.html)
:::

<script>
import XdhBreadcrumb from '@/widgets/xdh-breadcrumb'
export default {
  components: {
    XdhBreadcrumb
  },
  data() {
    return {
        data: [
          {text:'开发指南', to: '/guide/readme'},
          {text:'使用实例', to: '/widgets'},
          {text:'面包屑'}
        ]
    }
  }
}
</script>

### 基础用法


:::demo
```html
  <template>
    <xdh-breadcrumb :data="data"></xdh-breadcrumb>
  </template>

<script>
import XdhBreadcrumb from '@/widgets/xdh-breadcrumb'
export default {
  components: {
    XdhBreadcrumb
  },
  data() {
    return {
        data: [
          {text:'开发指南', to: '/guide/readme'},
          {text:'使用实例', to: '/widgets'},
          {text:'面包屑'}
        ]
    }
  }
}
</script>
```
:::

### 定义工具区

:::demo 可通过插槽定义右侧内容
```html
  <template>
    <xdh-breadcrumb :data="data">
      <i slot="tool" class="el-icon-setting"></i>
    </xdh-breadcrumb>
  </template>

<script>
import XdhBreadcrumb from '@/widgets/xdh-breadcrumb'
export default {
  components: {
    XdhBreadcrumb
  },
  data() {
    return {
        data: [
          {text:'开发指南', to: '/guide/readme'},
          {text:'使用实例', to: '/widgets'},
          {text:'面包屑'}
        ]
    }
  }
}
</script>
```
:::


