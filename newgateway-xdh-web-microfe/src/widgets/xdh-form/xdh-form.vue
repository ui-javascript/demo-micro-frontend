<template>
  <el-form ref="form" :model="currentModel" :inline="inline" :size="size" :label-width="labelWidth">
    <xdh-form-items :model="currentModel" :data="data">

      <template slot="upload" slot-scope="scope">
        <slot name="upload" :item="scope.item">
          <el-button>点击选择文件</el-button>
        </slot>
      </template>

      <template slot="custom" slot-scope="scope">
        <slot name="custom" :item="scope.item" :index="scope.index">
        </slot>
      </template>

      <template slot="row-append" slot-scope="scope">
        <slot name="row-append" :columns="scope.columns" :index="scope.index"></slot>
      </template>

    </xdh-form-items>
    <el-form-item v-if="footer">
      <slot name="buttons">
        <el-button type="primary" @click="submit">确定</el-button>
        <el-button @click="reset">重置</el-button>
      </slot>
    </el-form-item>
  </el-form>
</template>

<script>
  /**
   *  自定义表单组件
   *  @module widgets/xdh-form
   */

  import XdhFormItems from './xdh-form-items'
  // 表单字段的初始默认值
  const defaultValue = function (type) {
    return {
      'checkbox': [],
      'upload': []
    }[type] || ''
  }

  /**
   * 把表单配置数据转化成模型对象
   * @private
   * @param {Array} data 表单配置数据
   * @returns {Object} 模型对象
   */
  const dataToModel = function (data) {
    const array = (data || []).filter(n => n.type !== 'title')
    let model = {}
    const parser = function (arr) {
      arr.forEach(item => {
        model[item.name] = item.value || defaultValue(item.type)
        if (item.branches) {
          Object.keys(item.branches).forEach(branch => {
            const branchModel = parser(item.branches[branch])
            Object.assign(model, branchModel)
          })
        }
        if (item.children) {
          model[item.name] = item.children.map(row => {
            let fields = {}
            row.forEach(col => {
              fields[col.name] = col.value || defaultValue(col.type)
            })
            return fields
          })
        }
      })
    }
    parser(array)
    return model
  }

  /**
   * 数据转换成分支对象，如 { branchName: {branch1:[fieldName, fieldName], branch2:[]} }
   * @private
   * @param {Array} data 表单配置数据
   * @returns {Object} 分支对象
   */
  const dataToBranches = function (data) {
    let branches = {}
    const parser = function (arr) {
      arr.forEach(item => {
        if (item.branches) {
          branches[item.name] = {}
          Object.keys(item.branches).forEach(key => {
            let branchValue = item.branches[key]
            branches[item.name][key] = item.branches[key].map(n => n.name)
            parser(branchValue)
          })
        }
      })
    }
    parser(data)
    return branches
  }

  /**
   * 获取全部分支的字段列表
   * @private
   * @param {Object} branches 分支对象
   * @returns {Array} 字段列表
   */
  const getBranchesArray = function (branches) {
    let array = []
    Object.keys(branches).forEach(cate => {
      let branch = branches[cate]
      Object.keys(branch).forEach(key => {
        array = array.concat(branch[key])
      })
    })
    return array
  }

  /**
   * 模型转换成提交到接口的数据数组
   * @private
   */
  const modelToFields = function (model, branches) {
    let fields = []
    // 先获取分支中的字段名称数据组
    const branchArray = getBranchesArray(branches)
    // 递归获取字段值对象{name，value}
    const appendField = function (value, matchBranches) {
      value = Array.isArray(value) ? value : [value]
      value.forEach(val => {
        let branchArray = matchBranches[val] || []
        branchArray.forEach(key => {
          fields.push({name: key, value: model[key]})
          if (branches[key]) {
            appendField(model[key], branches[key])
          }
        })
      })
    }
    Object.keys(model).filter(n => !branchArray.includes(n)).forEach(name => {
      let value = model[name]
      fields.push({name: name, value: value})
      let matchBranches = branches[name]
      if (matchBranches) {
        appendField(value, matchBranches)
      }
    })
    return fields
  }

  const fillModelValue = function (data, model) {
    const modelArr = Object.keys(model)
    modelArr.forEach(key => {
      const modelItem = model[key]
      const matchItem = data.find(item => item.name === key)
      if (matchItem) {
        if (Array.isArray(modelItem) && matchItem.children) {
          modelItem.forEach((m, i) => {
            fillModelValue(matchItem.children[i], m)
          })
        } else {
          matchItem.value = model[key]
        }
      }
    })
  }

  /**
   * 插槽 slots
   * @member slots
   * @property {string} buttons 自定义操作按钮区，如设置该插槽，默认的提交和重置按钮将不显示
   */

  /**
   * 作用域插槽 scopeSlots
   * @member scopeSlots
   * @property {string} upload 定义上传组件显示内容, 作用域插槽，参数：item：配置数据项
   * @property {string} custom 自定义配置内容, 作用域插槽，参数：item：配置数据项
   * @property {string} row-append 定义children的每一行追加内容，参数：columns 当前行的字段集合，index 当前行索引
   */

  export default {
    name: 'XdhForm',
    components: {
      XdhFormItems
    },
    /**
     * props
     * @property {object} [model] 初始化表单模型，可以在这里设置原始的模型键值对
     * @property {FieldConfig[]} data 表单配置数据。 FieldConfig 对象包含以下属性
     * @property {string} data.name 字段名称，即表单域的名称
     * @property {string} data.type 字段输入框类型，支持：input / select / radio / checkbox / datePicker / upload / title / custom
     * @property {string} data.label 字段显示的名称
     * @property {*} data.value 字段默认值
     * @property {object} data.props 输入框组件的实例化参数对象，对应相应的ElementUI组件
     * @property {object|Array} data.rules 验证规则，配置参考ElementUI
     * @property {Array} data.options 输入的选项数据，有两个字段 label 和 value。对 select、radio、checkbox 类型有效
     * @property {Array} data.children 子级表单字段配置，是一个行列的二维数据，数据项是 FieldConfig
     * @property {Boolean} data.inline 子级表单字段是否inline排列， 只对children的字段有效
     * @property {Object} data.branches 表单分支配置，减值对，每一个分支是由FieldConfig组成的数组
     * @property {string} [size] 表单项的尺寸，支持 medium / small / mini
     * @property {string} [labelWidth] 表单字段名称显示的宽度
     * @property {boolean} [footer=true] 是否显示底部按钮区
     */
    props: {
      model: {
        type: Object,
        default() {
          return {}
        }
      },
      data: {
        type: Array
      },
      // 表单尺寸，支持 medium / small / mini
      size: {
        type: String
      },
      // 表单字段名称显示的宽度
      labelWidth: {
        type: String
      },
      inline: {
        type: Boolean,
        default: false
      },
      // 是否显示底部按钮区
      footer: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        currentModel: null,
        branches: null,
        currentData: this.data
      }
    },
    watch: {
      data: {
        deep: true,
        immediate: true,
        handler(data) {
          // 在组件实例化是，根据表单配置数据转换成模型，并合并模型的默认值
          this.currentModel = Object.assign({}, this.model || {}, dataToModel(data || []))
          this.branches = dataToBranches(data || [])
          this.currentData = data
        }
      },
      model: {
        deep: true,
        handler(m) {
          this.currentModel = Object.assign({}, this.currentModel, m || {})
        }
      },
      currentModel: {
        deep: true,
        handler(model) {
          fillModelValue(this.currentData, model)
          this.$emit('on-change', model)
        }
      }

    },
    methods: {
      /**
       * 提交表单
       * @function submit
       */
      submit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            const fields = modelToFields(this.currentModel, this.branches)
            /**
             * 表单提交时触发
             * @event on-submit
             * @param {Object} fields 表单域数组
             */
            this.$emit('on-submit', fields)
          } else {
            return false
          }
        })
      },
      /**
       * 重置表单
       * @function reset
       */
      reset() {
        this.$refs.form.resetFields()
        /**
         * 表单重置时触发
         * @event on-reset
         * @param {Object} model 模型数据对象
         */
        this.$emit('on-reset', this.currentModel)
      }
    },
    created() {
      // console.log(dataToBranches(this.data))
      // console.log(this.currentModel, this)
    }
  }
</script>
