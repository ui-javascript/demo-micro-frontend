<template>
  <div class="xdh-editor">
    <textarea ref="xdhEditor" :id="cusId" :name="cusId" cols="30" rows="10" v-model="value"></textarea>
  </div>
</template>

<script>
  /**
   * layout布局组件
   * @module widgets/xdh-editor
   * @example
   * // 使用说明
   */
  import {debounce} from '@/utils/util'
  import {simpleToolConf, baseImgConf} from './ckeditor/xdh-editor-config'
  window.CKEDITOR_BASEPATH = `${location.pathname}ckeditor/`
  if(!window.CKEDITOR_CREATE) {
    window.CKEDITOR_CREATE = {}
  }
  if(!window.CKEDITOR) {
    require('./ckeditor/ckeditor')
  }

  export default {
    name: 'XdhEditor',
    /**
     * 属性参数
     * @property {String} [cusId = 'xdhEditor'] 组件的唯一id。使用此组件时必须传入一个唯一的ID（特别是生成多个editor时）
     * @property {boolean} [simple = false] 是否使用订制简化toolbar。
     * @property {String} [baseUpload = ""] 图片上传服务器api，默认为空，但开发时建议添加，可使用更好的图片处理功能
     * @property {Object} [options] ckeditor 的配置项，详细请查看ckeditor4文档。  PS：baseUpload和simple属性已经对部分配置项进行订制配置，注意使用时产生冲突
     * @property {String} [value = ""] xdh-editor 编辑时双向绑定的数据变量， 内容为 html格式字符串
     */
    props: {
      cusId: {
        type: String,
        default: 'xdhEditor'
      },
      simple: {
        type: Boolean,
        default: false
      },
      baseUpload: {
        type: String,
        default: ''
      },
      options: {
        type: Object
      },
      // 双向绑定数据， 支持sync修饰符
      value: {
        type: String
      }
    },
    data() {
      return {
        editor: null,
        trueOption: {
        }
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      /**
       * ckeditor的初始化函数，调用时使用‘window.CKEDITOR’构造函数生成实例
       * @Function initEditor
       */
      initEditor() {
        if (this.simple) { // 使用简易菜单
          this.trueOption = this._madeSimple(this.trueOption)
        }
        if (this.baseUpload) { // 使用自定义图片上传
          this.trueOption = this._defineImgUpload(this.trueOption)
        }
        this.trueOption = Object.assign({}, this.trueOption, this.options)
        this.editor = window.CKEDITOR.replace(this.$refs.xdhEditor, this.trueOption)
        window.CKEDITOR_CREATE[`${this.cusId}`] = true
        this.editor.on('change', debounce((event) => {
          /**
           * 表单内容变更事件
           * @event on-change
           * @param {String} [value] 编辑中的内容
           */
          this.$emit('on-change', this.editor.getData())
          /*
           * 使用v-model
           * @event input
           * @param {String} [value] 编辑中的内容
           */
          this.$emit('input', this.editor.getData())
        }, 1000))
        this.editor.on('fileUploadRequest', (event) => {
          /**
           * 图片粘贴到编辑内容时触发的文件上传事件
           * @event on-upload
           * @param {Object} [data] 上传的文件属性
           */
          this.$emit('on-upload', event.data)
        })
      },
      destroy() {
        this.editor && this.editor.destroy()
        this.editor = null
      },
      /**
       * 内部获取编辑内容的函数
       * @Function getData
       */
      getData() {
        if(this.editor) {
          return this.editor.getData()
        }
      },
      _madeSimple(option) {
        return Object.assign({}, option, simpleToolConf)
      },
      _defineImgUpload(option) {
        let obj = baseImgConf(this.baseUpload)
        return Object.assign({}, option, obj)
      }
    },
    created() {
      try { // 判断
        let dom = document.querySelector(`#${this.cusId}`)
        if(dom) {
          let err = new Error('此组件传入的cusId已经被使用') // {text: '重复ID使用'}
          throw err
        }
      } catch(err) {
        console.log(err)
      }
    },
    mounted() {
      if(window.CKEDITOR_CREATE[`${this.cusId}`]) {
        return
      }
      this.initEditor()
    },
    activated() {
      if (!this.editor) {
        this.initEditor()
      }
    },
    deactivated() {
      this.destroy()
    },
    beforeDestroy() {
      if(window.CKEDITOR_CREATE) {
        window.CKEDITOR_CREATE[`${this.cusId}`] = false
      }
      this.destroy()
    }
  }
</script>
