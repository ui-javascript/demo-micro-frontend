<script>
  import highlight from '@/utils/directives/highlight'
  export default {
    directives: {
      highlight
    },
    data() {
      return {
        highlight: {
          keyword:['xdh-web', '组件', '模拟数据']
        },
        highlight2: {
          keyword:['xdh-web', '组件', '模拟数据'],
          class: 'content-keyword'
        },
        highlight3: {
          keyword:['xdh-web', '组件', '模拟数据'],
          onclick: this.onKeyword
        }
      }
    },
    methods: {
        onKeyword(val, item){
          this.$message({
            type:'success',
            message:'点击了： ' + val
          })
          console.log('点击了：'+val, item)
        }
    }
  }
</script>
## v-highlight

文本关键字高亮处理

### 基础用法
:::demo
```html
<template>
  <div v-highlight="highlight">xdh-web 是基于Vue + ElementUI 的web项目工程框架，搭配代码生成器，可生成api调用、vuex管理、模拟数据代码； 内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级</div>
</template>
<script>
  import highlight from '@/utils/directives/highlight'
  export default {
    directives: {
      highlight
    },
    data() {
      return {
        highlight: {
          keyword:['xdh-web', '组件', '数据']
        }
      }
    }
  }
</script>
```
:::

### 自定义class
:::demo
```html
<template>
  <div v-highlight="highlight2">xdh-web 是基于Vue + ElementUI 的web项目工程框架，搭配代码生成器，可生成api调用、vuex管理、模拟数据代码； 内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级</div>
</template>
<script>
  import highlight from '@/utils/directives/highlight'
  export default {
    directives: {
      highlight
    },
    data() {
      return {
        highlight2: {
          keyword:['xdh-web', '组件', '模拟数据'],
          class: 'content-keyword'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
/deep/ .content-keyword{
  font-size: 16px;
  font-weight: bold;
  background: red;
}
</style>
```
:::

### 点击操作
:::demo
```html
<template>
  <div v-highlight="highlight3">xdh-web 是基于Vue + ElementUI 的web项目工程框架，搭配代码生成器，可生成api调用、vuex管理、模拟数据代码； 内置常用超过70个组件、扩展；子模块支持前端微服务，可以批量编译打包；独立开发、运行、部署；支持更新升级</div>
</template>
<script>
  import highlight from '@/utils/directives/highlight'
  export default {
    directives: {
      highlight
    },
    data() {
      return {
        highlight3: {
          keyword:['xdh-web', '组件', '模拟数据'],
          onclick: this.onKeyword
        }
      }
    },
    methods(){
      onKeyword(val, item){
        this.$message({
          type:'success',
          message:'点击了： ' + val
        })
        console.log('点击了：'+val, item)
        // 可以做查询 跳转等相关操作，item 及为 highlight3对象，有其它条件也可以通过此对象传递
      }
    }
  }
</script>
```
:::


### 绑定值 binding.value

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| keyword | 要高亮的关键字 | String / Array | - | - |
| class | 高亮关键字自定义样式class, 注：class要为全局设定 | String | - | - |
| onclick | 高亮关键字点击触发的回调函数,默认两个参数：1-当前点击的文本，2-传入的绑定对象 | Function | - | - |

