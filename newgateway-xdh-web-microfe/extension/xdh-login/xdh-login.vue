<template>
  <div class="xdh-login" :style="loginBodyStyle" @keyup.enter="login('loginForm')">
    <div :class="cardClasss">
      <!-- 页头插槽 -->
      <slot name="header">
        <dl class="xdh-login__header">
          <dt class="xdh-login__header--logo" v-if="logo">
            <img :src="logo"/>
          </dt>
          <dd class="xdh-login__header--title" v-if="title">
            <h1>{{title}}</h1>
          </dd>
        </dl>
      </slot>
      <!-- 表单输入区域 -->
      <el-form :model="model" :rules="rules" ref="loginForm">
        <el-form-item prop="user" class="xdh-validate--right">
          <el-input v-model="model.user" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="xdh-validate--right">
          <el-input v-model="model.password"
                    placeholder="Password"
                    type="password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin: 10% 0 5%;">
          <el-button v-waves type="primary"
                     :style="`width: ${showPki?'47%':'100%'}`"
                     @click="login('loginForm')">
            登录
          </el-button>
          <el-button v-if="hasPKI" v-waves style="width: 47%"
                     @click="pkiLogin">
            PKI
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 页底插槽 -->
      <slot name="footer">
        <div class="xdh-login__footer" v-if="footnote">
          {{footnote}}
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
  import waves from '@/utils/directives/waves'

  /**
   * XdhLogin 系统登录页面
   * @module extension/xdh-login
   */

  export default {
    name: 'XdhLogin',
    directives: {
      waves
    },
    /**
     * 属性参数
     * @member
     * @property {String} background  显示背景图片或者色值, 如：url('')
     * @property {String} [theme='light'] 主题  light / dark
     * @property {String} logo 系统logo
     * @property {String} title 系统标题
     * @property {String} footnote 系统注脚
     * @property {Boolean} [show-pki = false ] 显示 PKI 登录
     * @property {String} align 登录窗口排列  left / right
     */
    props: {
      background: {
        type: String,
        default: require('./images/login.jpg')
      },
      theme: { // light dark
        type: String,
        default: 'light'
      },
      logo: {
        type: String,
        default: require('@/assets/img/xdh.png')
      },
      title: {
        type: String,
        default: '新德汇前端基础框架'
      },
      footnote: {
        type: String,
        default: '新德汇 前端开发部 出品 @ 2018 [ v3.0.0-alpha.7 ]'
      },
      showPki: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        model: {
          user: '',
          password: ''
        },
        rules: {
          user: [
            {required: true, message: '请输入用户名', trigger: 'change'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'}
          ]
        },
        hasPKI: false
      }
    },
    computed: {
      cardClasss() {
        let result = 'xdh-login__card'
        if (this.theme === 'dark') result += ' xdh-login__card--dark'
        if (['left', 'right'].includes(this.align)) result += ` xdh-login__card--${this.align}`
        return result
      },
      loginBodyStyle() {
        let result = ''
        if (this.background) result += `background: url(${this.background}) no-repeat center center/cover`
        return result
      }
    },
    watch: {
      showPki(val) {
        if (!val) this.hasPKI = val
        setTimeout(() => {
          this.hasPKI = val
        }, 200)
      }
    },
    methods: {
      login(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /**
             * 用户名登录触发
             * @event on-login
             * @property {Object} 一个参数：用户输入数据对象
             */
            this.$emit('on-login', this.model)
          } else {
            console.log('error submit!');
            return false;
          }
        });
      },
      pkiLogin() {
        /**
         * PKI 登录触发
         * @event on-login-pki
         */
        this.$emit('on-login-pki')
      }
    }
  }
</script>
