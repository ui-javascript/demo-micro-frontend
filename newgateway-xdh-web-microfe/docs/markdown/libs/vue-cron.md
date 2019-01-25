<script>
 import {cron} from 'vue-cron';

  export default {
      components: { cron },
      data() {
        return {
            cronPopover: false,
            cron: ''
        }
      },
      methods: {
        changeCron(val){
            this.cron = val
        }
      }
  }
</script>
## vue-cron

这是一个cron表达式生成插件,基于vue与element-ui实现

github: https://github.com/1615450788/vue-cron

### 引入方式
```js
//全局引入
import Vue from 'vue'
import VueCron from 'vue-cron'

Vue.use(VueCron);

//局部引入
import {cron} from 'vue-cron'

export default {
    template: '<cron/>',
    components: { cron }
}
```

### 示例
:::demo
```html
<template>
    <div class="cron">
   <el-popover v-model="cronPopover">
            <cron @change="changeCron" @close="cronPopover=false"></cron>
            <el-input slot="reference" v-model="cron" placeholder="请输入定时策略"></el-input>
        </el-popover>
    </div>
</template>
<script>
 import {cron} from 'vue-cron';

  export default {
      components: { cron },
      data() {
        return {
            cronPopover: false,
            cron: ''
        }
      },
      methods: {
        changeCron(val){
            this.cron = val
        }
      }
  }
</script>
```
:::

