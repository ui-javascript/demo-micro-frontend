<template>
  <el-popover v-model="visible"
              placement="bottom"
              trigger="click"
              :width="popoverWidth"
              popper-class="xdh-tree-select__popover">
    <div :class="{'xdh-tree-select__bd': true, 'xdh-tree': isDashed}">
      <el-scrollbar>
        <el-tree
          v-bind="selfProps"
          v-on="$listeners"
          :default-expanded-keys="checkedKeys"
          :default-checked-keys="checkedKeys"
          :indent="isDashed ? 18 : indent"
          ref="tree"></el-tree>
      </el-scrollbar>
      <select-footer
        :clear="showClearBtn"
        :submit="showOkBtn"
        @on-clear="clearChecked"
        @on-submit="handleSelected">
        <slot name="footer"></slot>
      </select-footer>
    </div>
    <div class="xdh-tree-select__reference" slot="reference" ref="reference">
      <slot :value="values" :nodes="currentCheckedNodes">
        <el-input v-model="inputVal"
                  :clearable="filterable"
                  :readonly="!filterable"
                  suffix-icon="el-icon-caret-bottom"
                  :placeholder="placeholder"/>
      </slot>
    </div>
  </el-popover>
</template>


<script>
  /**
   * treeSelect树状选择组件
   * @module widgets/xdh-tree-select
   */
  import {Tree} from 'element-ui'
  import {addResizeListener, removeResizeListener} from 'element-ui/lib/utils/resize-event'
  import {throttle} from '@/utils/util'
  import SelectFooter from './select-footer.vue'

  const treeProps = Object.assign({}, Tree.props)

  export default {
    name: 'XdhTreeSelect',
    components: {
      SelectFooter
    },
    /**
     * 参数属性
     * @property {Boolean} [isDashed = false] 是否使用带虚线模式的树组件（isDashed为 true的 情况下，indent将被固定位18px）
     * @property {Boolean} [showCheckbox = true] 节点是否可被选择
     * @property {Number} [width] popOver容器组件的宽度
     * @property {Array} [value] 选择组件 进行数据双向绑定的变量
     * @property {Boolean} [showClearBtn = true] 是否显示下方清空按钮
     * @property {Boolean} [showOkBtn = true] 是否显示下方确定按钮
     * @property {String} [placeholder] 输入框的占位文字
     * @property {Boolean} [highlight-current = true] 默认是否高亮当前选中节点
     * @property {Boolean} [filterable = false] 是否可搜索
     */
    props: {
      ...treeProps,
      isDashed: {
        type: Boolean,
        default: false
      },
      // 重写默认显示checkbox
      showCheckbox: {
        type: Boolean,
        default: true
      },
      width: {
        type: Number
      },
      value: {
        type: [Array, String, Number]
      },
      showClearBtn: {
        type: Boolean,
        default: true
      },
      showOkBtn: {
        type: Boolean,
        default: true
      },
      // 输入框显示选择的项
      placeholder: {
        type: String,
        default: '请选择'
      },
      highlightCurrent: {
        type: Boolean,
        default: true
      },
      filterable: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      data(val) {
        this.$nextTick(() => {
          let nodes = this.$refs.tree.getCheckedNodes()
          if (!this.showCheckbox) { // 单选树
            nodes = this.$refs.tree.getCurrentNode() ? [this.$refs.tree.getCurrentNode()] : []
          }
          this.currentCheckedNodes = nodes
          this.valueToLabel(this.value)
        })
      },
      value(val) {
        this.valueToLabel(val)
      },
      inputVal(val) {
        if (this.filterable) this.$refs.tree.filter(val);
      },
      visible(val) {
        if (val && this.filterable) {
          this.inputVal = ''
        } else {
          this.inputVal = undefined
        }
      }
    },
    data() {
      return {
        popoverWidth: 'auto',
        visible: false,
        currentCheckedNodes: [],
        values: [],
        currentInputValue: undefined
      }
    },
    computed: {
      checkedKeys() {
        return Array.isArray(this.value) ? this.value : [this.value]
      },
      inputVal: {
        get() {
          if (this.currentInputValue === undefined) {
            return this.showCheckbox ? `已选择${this.values.length}项` : (this.values || []).join(',')
          }
          return this.currentInputValue
        },
        set(newValue) {
          this.currentInputValue = newValue
        }
      },
      /**
       * 重写 tree $Props
       */
      selfProps() {
        let selfProps = {...this.$props}
        const treePropsKeys = Object.keys(treeProps)
        Object.keys(selfProps).forEach(item => {
          if (!treePropsKeys.includes(item)) {
            delete selfProps[item]
          }
        })
        // 插入 筛选方法
        if (this.filterable) selfProps.filterNodeMethod = this.filterTreeNode
        return selfProps
      }
    },
    methods: {
      setPopoverWidth() {
        let width = this.width ? this.width : this.$refs.reference.getBoundingClientRect().width - 25
        this.popoverWidth = width
      },
      /**
       * 清空所有选中项, 点击清除按钮是执行
       * @Function clearChecked
       */
      clearChecked() {
        if (this.showCheckbox) {
          this.$refs.tree.setCheckedNodes([])
        } else {
          this.$refs.tree.setCurrentNode({})
        }
      },
      /**
       * 确认选中方法，在点击确认按钮时执行
       * @Function handleSelected
       */
      handleSelected() {
        let nodes = this.$refs.tree.getCheckedNodes()
        if (!this.showCheckbox) { // 单选树
          nodes = this.$refs.tree.getCurrentNode() ? [this.$refs.tree.getCurrentNode()] : []
        }
        this.currentCheckedNodes = nodes
        this.visible = false
        /**
         * 点击确认时派发事件，输出为选中的节点对象数组
         * @event on-selected
         * @param {Array} [nodes] 选中节点的数组
         * @param {Object} [nodes.item] 选中节点数组的完整对象
         */
        if (this.nodeKey) {
          let keys = nodes.map(node => node[this.nodeKey])
          /**
           * 双向绑定input事件（直接用v-model监听）， 输出为选中的字符值数组
           * @event input
           * @param {Array} [keys] 选中节点值得数组
           * @param {String} [keys.item] 节点数据中作为显示label的字符串值
           */
          if (this.showCheckbox) {
            this.$emit('input', keys)
          } else {
            this.$emit('input', keys[0])
          }
        }
        this.$emit('on-selected', nodes)
        this.updateInput(nodes)
      },
      /**
       * 输入框的id 转换成 label
       * @param val Array 输入框的ID
       */
      valueToLabel(val) {
        val = Array.isArray(val) ? val : [val]
        this.values = []
        let cDataMap = d => {
          d.map(res => {
            if (val.includes(res[this.nodeKey])) {
              this.values.push(res[this.props.label])
            }
            cDataMap(res[this.props.children] || [])
          })
        }
        cDataMap(this.data || [])
        this.$nextTick(() => {
          // 选中回填
          if (this.showCheckbox) {
            this.$refs.tree.setCheckedKeys(val)
          } else {
            this.$refs.tree.setCurrentKey(val[0])
          }
        })
      },
      /**
       * 根据树勾选更新输入框数据
       * @param node Array 当前勾选对象数组
       */
      updateInput(node) {
        this.values = []
        node.map(n => {
          this.values.push(n[this.props.label])
        })
      },
      /**
       * 树节点筛选
       * @param value
       * @param data
       * @returns {boolean}
       */
      filterTreeNode(value, data) {
        if (!value) return true;
        return data[this.props.label].indexOf(value) !== -1;
      }
    },
    created() {
      this.handleSetPopoverWidth = throttle(this.setPopoverWidth, this, true)
      this.valueToLabel(this.value)
    },
    mounted() {
      if (this.value) {
        let nodes = this.$refs.tree.getCheckedNodes()
        if (!this.showCheckbox) { // 单选树
          nodes = this.$refs.tree.getCurrentNode() ? [this.$refs.tree.getCurrentNode()] : []
          this.$refs.tree.setCurrentKey(this.value)
        }
        this.currentCheckedNodes = nodes
        this.inputVal = this.currentInputValue = (this.showCheckbox ? `已选择${this.values.length}项` : (this.values || []).join(','))
      }
      this.setPopoverWidth()
      addResizeListener(this.$refs.reference, this.handleSetPopoverWidth)
    },
    beforeDestroy() {
      removeResizeListener(this.$refs.reference, this.handleSetPopoverWidth)
    }
  }
</script>
