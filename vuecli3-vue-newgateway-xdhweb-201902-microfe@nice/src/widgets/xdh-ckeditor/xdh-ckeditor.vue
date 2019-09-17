<template>
  <div class="xdh-ckeditor" :id="componentId">
    <textarea ref="textarea" v-model="currentValue" style="display: none;"></textarea>

    <div class="xdh-ckeditor__err" v-show="error">
      <slot name="error">{{message}}</slot>
    </div>

  </div>
</template>

<script>

  /**
   * 基于CKEditor5的富文本编辑器 xdh-ckeditor
   * @module widgets/xdh-ckeditor
   *
   */

  import CKEditor from 'CK/build/ckeditor'
  import UploadAdapter from './uploadAdapter'

  const Toolbar = {
    simple: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'undo',
      'redo'],
    classic: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'alignment',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo'
    ],
    document: [
      'heading',
      '|',
      'fontsize',
      'fontfamily',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'code',
      'highlight',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'link',
      'blockquote',
      'imageUpload',
      'insertTable',
      'mediaEmbed',
      '|',
      'undo',
      'redo'
    ]
  }

  // todo: 预设工具(文字对齐、字体、大小、颜色、填充颜色)、主题

  /**
   * 上传的文件转换成base64
   * @private
   * @param loader
   * @return {Promise<any>}
   */
  function fileToBase64(loader) {
    return new Promise((resolve, reject) => {
      if (!window.FileReader) {
        return reject(new Error('浏览器不支持FileReader'))
      }
      let reader = new FileReader()
      reader.onload = function (e) {
        loader.uploadTotal = e.total;
        loader.uploaded = e.loaded;
        resolve({
          default: reader.result
        })
      }
      reader.onerror = function (e) {
        reject(e)
      }
      reader.readAsDataURL(loader.file)
    })
  }

  /**
   * 插槽
   * @member slots
   * @property {string} error 定义验证显示信息
   */

  export default {
    name: 'XdhCkeditor',
    /**
     * 属性参数
     * @property {string} [name=content] textarea 原生name名称
     * @property {string} [value] 编辑器值
     * @property {string|array} [toolbar=classic] 工具条，支持：simple、classic、document
     * @property {Object} [config] CKEditor 实例化配置参数
     * @property {String} [height] 编辑器高度，如果不设置，即根据输入内容适应
     * @property {Function} [unload] 自定义上传图片方法，接收 loader 对象，必须返回Promise，resolve({default:'图片url'})
     * @property {Boolean} [readonly=false] 是否只读
     * @property {Boolean} [required=false] 是否必填
     * @property {string} [message] 检验错误提示文字
     */
    props: {
      // 表单域原生name
      name: {
        type: String,
        default: 'content'
      },
      // 内容
      value: {
        type: String,
        default: ''
      },
      // simple classic  document
      toolbar: {
        type: [String, Array],
        default: 'classic'
      },
      // ckeditor5 配置
      config: {
        type: Object,
        default() {
          return {
            language: 'zh-cn'
          }
        }
      },
      // 高度
      height: {
        type: String
      },
      // 图片上传方法，需要返回Promise
      upload: {
        type: Function
      },
      readonly: {
        type: Boolean,
        default: false
      },
      required: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: '此项为必填项！'
      }
    },
    data() {
      return {
        currentValue: this.value,
        error: false
      }
    },
    computed: {
      ckeditorConfig() {
        return {
          toolbar: Toolbar[this.toolbar] || this.toolbar,
          ...this.config
        }
      },
      componentId() {
        return `xdh-ckeditor-${this._uid}`
      }
    },
    watch: {
      currentValue(val) {
        this.$emit('input', val)
        /**
         * 内容变化时触发
         * @event on-change
         * @param {string} val 新内容
         */
        this.$emit('on-change', val)
        if (this.required) {
          if (val && val !== '<p>&nbsp;</p>') {
            this.error = false
          } else {
            this.error = true
          }
        }
      },
      readonly(val) {
        if (this.ckeditor) {
          this.ckeditor.isReadOnly = val
        }
      },
      height: {
        immediate: true,
        handler(val) {
          val && this.setStyle(val)
        }
      },
      value(val) {
        if (this.getData() !== val) {
          this.setData(val)
        }
      }
    },
    methods: {
      initEditor() {
        CKEditor.create(this.$refs.textarea, this.ckeditorConfig)
          .then(editor => {
            this.ckeditor = editor
            this.ckeditor.isReadOnly = this.readonly
            this.ckeditor.plugins.get('FileRepository').createUploadAdapter = loader => {
              return new UploadAdapter(loader, this.upload || fileToBase64)
            }
            this.bindEvents(editor)
          }).catch(e => {
          console.log('init CKEditor error', e)
        })
      },
      bindEvents(editor) {
        editor.model.document.on('change:data', () => {
          this.currentValue = this.getData()
        })
        editor.editing.view.document.on('focus', evt => {
          this.$emit('focus', evt, editor)
        })

        editor.editing.view.document.on('blur', evt => {
          this.$emit('blur', evt, editor)
        })
      },
      /**
       * 获取编辑器内容
       * @function getData
       * @return {*}
       */
      getData() {
        if (this.ckeditor) {
          return this.ckeditor.getData()
        }
        return null
      },
      /**
       * 设置编辑器内容
       * @function setData
       * @param {string} val 文本
       */
      setData(val) {
        this.currentValue = val
        this.ckeditor && this.ckeditor.setData(val)
      },
      setStyle(height) {
        // 由于 ckeditor 没有参数和接口调整编辑器的高度，这里采用在页面加载css来实现设置制定高度
        if (!this.styleElement) {
          this.styleElement = document.createElement('style')
          document.getElementsByTagName('head')[0].appendChild(this.styleElement)
        }
        this.styleElement.innerText = `#${this.componentId} .ck-editor__editable {
        height: ${height}; }`
      }
    },
    created() {
      this.ckeditor = null
      this.styleElement = null
    },
    mounted() {
      this.initEditor()
    },
    beforeDestroy() {
      // 销毁样式元素
      if (this.styleElement) {
        this.styleElement.parentNode.removeChild(this.styleElement)
      }
      // 销毁 ckeditor
      this.ckeditor && this.ckeditor.destroy()
      this.ckeditor = null
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/vars";

  .xdh-ckeditor__err {
    padding: 5px;
    color: $--color-danger;
  }
</style>
