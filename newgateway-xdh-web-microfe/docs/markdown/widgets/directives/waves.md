<script>
  import waves from '@/utils/directives/waves'
  export default {
    directives: {
      waves
    },
    data() {
      return {
        waves: {
          type: 'center',
          color: 'rgba(248, 4, 4, 0.6)'
        }
      }
    }
  }
</script>

## v-waves

点击出现水波纹效果

### 基础用法

:::demo
```html
<template>
  <div  class="wrapper">
    <div class="box" v-waves></div>
    <div class="box box_a" v-waves></div>
    <div class="box box_b" v-waves></div>
    <div class="box box_c" v-waves></div>
    <div class="box box_d" v-waves></div>
  </div>
</template>
<script>
  import waves from '@/utils/directives/waves'
  export default {
    directives: {
      waves
    }
  }
</script>

<style scoped lang="scss">
@import "@/style/_vars.scss";
.wrapper{
  display: flex;
  .box {
    background: $--color-primary;
    height: 80px;
    width: 200px;
    cursor: pointer;
    &_a{
      background: $--color-success;
    }
    &_b{
      background: $--color-warning;
    }
    &_c{
      background: $--color-danger;
    }
    &_d{
      background: $--color-info;
    }
  }
}
</style>

```
:::


### 自定义使用
 
 波纹固定从容器中心位置扩散，修改波纹颜色等

:::demo
```html
<template>
  <div  class="wrapper">
    <div class="box" v-waves="waves"></div>
    <div class="box box_a" v-waves="waves"></div>
    <div class="box box_b" v-waves="waves"></div>
    <div class="box box_c" v-waves="waves"></div>
    <div class="box box_d" v-waves="waves"></div>
  </div>
</template>
<script>
  import waves from '@/utils/directives/waves'
  export default {
    directives: {
      waves
    },
    data() {
       return {
         waves: {
           type: 'center',
           color: 'rgba(248, 4, 4, 0.6)'
         }
       }
    }
  }
</script>

<style scoped lang="scss">
@import "@/style/_vars.scss";
.wrapper{
  display: flex;
  .box {
    background: $--color-primary;
    height: 80px;
    width: 200px;
    cursor: pointer;
    &_a{
      background: $--color-success;
    }
    &_b{
      background: $--color-warning;
    }
    &_c{
      background: $--color-danger;
    }
    &_d{
      background: $--color-info;
    }
  }
}
</style>

```
:::


### 绑定值 binding.value

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| ele | 波纹作用元素 | Element | - | 绑定的元素区域 |
| type | hit 点击位置扩散 center中心点扩展 | String | hit / center | hit |
| color | 波纹颜色 | String | - | rgba(0, 0, 0, 0.15) |

