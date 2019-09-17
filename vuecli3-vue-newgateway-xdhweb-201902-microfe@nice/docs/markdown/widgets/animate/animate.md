## Animate.css

### 基础用法

:::demo
```html
<template>
  <div>
     <div class="action">

     <el-select placeholder="进场动画" v-model="enter">
       <el-option-group
           v-for="(group, key) in animates"
           :key="key"
           :label="key">
           <el-option
             v-for="item in group"
             :key="item"
             :label="item"
             :value="item">
           </el-option>
         </el-option-group>
     </el-select>
      <el-select placeholder="离场动画" v-model="leave">
            <el-option-group
                v-for="(group, key) in animates"
                :key="key"
                :label="key">
                <el-option
                  v-for="item in group"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-option-group>
          </el-select>
          <el-button type="primary" @click="action">执行过渡动画</el-button>
          enter: {{enterClass}} / leave: {{leaveClass}}
     </div>
  <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
      <div class="box" v-show="show"></div>
    </transition>
  </div>
</template>
<script>
import animates from 'D/mock/data/animate'
import 'animate.css'
export default {
  data() {
    return {
      animates:animates,
      show: false,
      timer: null,
      enter:'',
      leave: ''
    }
  },
  computed: {
    enterClass() {
      return `animated ${this.enter}`
    },
    leaveClass() {
      return `animated ${this.leave}`
    }
  },
  methods: {
    action() {
      clearTimeout(this.timer)
      this.show = true;
      this.timer = setTimeout(()=>{
        this.show = false
      }, 2000)
    }
  },
  mounted() {
  },
  beforeDestory() {
    clearTimeout(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.box{
 width: 500px;
 height: 500px;
 background: #409eff
}
.action {
  padding-bottom: 20px;
 .el-select,.el-button {
    margin-right: 10px;
 }
}
</style>
```
:::
