<script>
  export default {
    data() {
      return {
        collapsed: false,
        north: {
          height: '100px',
          split: true
        },
        west: {
          split: true
        },
        east: {
          split: true
        },
        south: {
          height: '100px',
          split: true
        }
      }
    },
    methods: {
      handleResize(region, e) {
        console.log(region, e)
      },
      handleCollapsed() {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>

## Layout 布局

简化 el-container 的使用。文档： [xdh-layout](#/src/widgets%2Fmodule-widgets_xdh-layout.html)

### 常见页面布局

:::demo
```html
<template>
 <div class="layout-demo">
    <xdh-layout>
      <div slot="north">North</div>
      <div>Main</div>
    </xdh-layout>

   <xdh-layout>
      <div slot="north">North</div>
      <div>Main</div>
      <div slot="south">South</div>
    </xdh-layout>

   <xdh-layout>
      <div slot="north">North</div>
      <div slot="west">West</div>
      <div>Main</div>
      <div slot="south">South</div>
    </xdh-layout>

   <xdh-layout>
      <div slot="north">North</div>
      <div slot="west">West</div>
      <div>Main</div>
      <div slot="east">East</div>
      <div slot="south">South</div>
    </xdh-layout>

   <xdh-layout footer-in-main>
      <div slot="north">North</div>
      <div slot="west">West</div>
      <div>Main</div>
      <div slot="south">South</div>
    </xdh-layout>

  </div>
</template>
<style lang="scss">
.layout-demo {
  width: 100%;

  .xdh-layout{
    margin-top: 40px;
  }

  .xdh-layout__north, .xdh-layout__south {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

   .xdh-layout__south {
      line-height: 40px;
   }

  .xdh-layout__main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .xdh-layout__west, .xdh-layout__east {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>
```
:::

### 可定义各区块的尺寸

::: demo
```html
<template>
   <xdh-layout class="layout-demo2"
               :north="{height:'100px'}"
               :west="{width:'50%'}"
               :south="{height:'60px'}">
      <div slot="north">North</div>
      <div slot="west">West</div>
      <div>Main</div>
      <div slot="south">South</div>
    </xdh-layout>
</template>

<style lang="scss">
.layout-demo2{
  .xdh-layout__north, .xdh-layout__south {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

   .xdh-layout__south {
      line-height: 60px;
   }

  .xdh-layout__main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .xdh-layout__west, .xdh-layout__east {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>

```
:::

### 固定头部和底部

:::demo
```html
<template>
  <div>
   <xdh-layout class="layout-demo3" fixed>
      <div slot="north">North</div>
      <div slot="west">West</div>
      <div>
          <p v-for="i in 50"> Main </p>
      </div>
      <div slot="south">South</div>
    </xdh-layout>
   </div>
</template>

<style lang="scss">
.layout-demo3{
   height: 400px;
  .xdh-layout__north, .xdh-layout__south {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

   .xdh-layout__south {
      line-height: 40px;
   }

  .xdh-layout__main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .xdh-layout__west, .xdh-layout__east {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>
```
:::


### 设置区域分割

::: demo
```html
<template>
   <xdh-layout class="layout-demo4"
               :north.sync="north"
               :west.sync="west"
               :east.sync="east"
               :south.sync="south">
      <div slot="north">North</div>
      <div slot="west">West</div>
      <div>Main</div>
      <div slot="east">East</div>
      <div slot="south">South</div>
    </xdh-layout>
</template>

<style lang="scss">
.layout-demo4{
  .xdh-layout__north, .xdh-layout__south {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

   .xdh-layout__south {
      line-height: 60px;
   }

  .xdh-layout__main{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .xdh-layout__west, .xdh-layout__east {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
}
</style>
<script>
  export default {
    data() {
      return {
        north: {
          height: '100px',
          split: true
        },
        west: {
          split: true
        },
        east: {
          split: true
        },
        south: {
          height: '100px',
          split: true
        }
      }
    }
  }
</script>

```
:::

### Resizable 和 Collapsed
:::demo
```html
<template>
  <div style="width: 100%; height: 500px;">
    <xdh-layout :west="{resizable:true, width:'30%', collapsed:collapsed}"
                :north="{resizable:true, height:'100px', collapsed:collapsed}"
                :east="{resizable:true, width:'30%', collapsed:collapsed}"
                :south="{resizable:true, height:'100px',collapsed:collapsed}"
                @on-resize="handleResize"
                :fixed="true">
      <div slot="north" class="north">north</div>
      <div slot="north-collapsed" class="north">north-collapsed</div>

      <div slot="west" class="west">west</div>
      <div slot="west-collapsed" class="west">west-collapsed</div>

      <div slot="east" class="east">East</div>
      <div slot="east-collapsed" class="east">east-collapsed</div>

      <div slot="south" class="south">South</div>
      <div slot="south-collapsed" class="south">south-collapsed</div>

      <div class="main">
        <div>
          <el-button @click="handleCollapsed">Toggle Collapsed</el-button>
        </div>
      </div>
    </xdh-layout>
  </div>
</template>
<style>
  .north {
    background: #333;
    height: 100%;
    color: #fff;
  }

  .west {
    background: #999;
    height: 100%;
  }

  .east {
    background: #999;
    height: 100%;
  }

  .south {
    background: #333;
    height: 100%;
    color: #fff;
  }

  .main {
    background: #fff;
    height: 100%;
  }

  .main > div {
    padding: 20px;
  }

  .north-split .icon {
    position: relative;
    top: -2px;
    background: #55a532;
    width: 50px;
    color: #fff;
  }
</style>
<script>
  export default {
    data() {
      return {
        collapsed: false,
        north: {
          height: '100px',
          split: true
        },
        west: {
          split: true
        },
        east: {
          split: true
        },
        south: {
          height: '100px',
          split: true
        }
      }
    },
    methods: {
      handleResize(region, e) {
        console.log(region, e)
      },
      handleCollapsed() {
        this.collapsed = !this.collapsed
      }
    }
  }
</script>
```
:::

### 属性参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| north | 头部配置对象 | Object/Boolean | -  | true |
| south | 底部配置对象 | Object/Boolean | - | true |
| west | 左侧区块配置 | Object/Boolean | -  | true |
| east | 右侧区块配置 | Object/Boolean | -  | true |
| footer-in-main | footer是否放到main里面 | Boolean | -  | false |
| fixed | 是否固定头部和底部 | Boolean | -  | false |

