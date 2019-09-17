<template>
  <div :class="{'xdh-form--inline': inline}">
    <template v-for="(item, index) in data">
      <!-- 标题 -->
      <xdh-title v-if="isEqual(item, 'title')"
                 v-bind="item.props||{}" :key="`title_${index}`"></xdh-title>
      <!-- input -->
      <el-form-item v-if="isEqual(item, 'input')"
                    :key="`${item.name}_${index}`"
                    :label="item.label"
                    :prop="getProp(item)"
                    :rules="item.rules">
        <el-input v-bind="item.props || {}"
                  v-model="model[item.name]"></el-input>
      </el-form-item>

      <!-- select -->
      <el-form-item v-if="isEqual(item, 'select')"
                    :key="`${item.name}_${index}`"
                    :label="item.label"
                    :prop="getProp(item)"
                    :rules="item.rules">

        <el-select v-bind="item.props || {}"
                   v-model="model[item.name]">
          <el-option v-for="option in item.options || []"
                     :key="option.value"
                     :label="option.label"
                     :value="option.value"></el-option>
        </el-select>
      </el-form-item>

      <!-- radio -->
      <el-form-item v-if="isEqual(item, 'radio')"
                    :key="`${item.name}_${index}`"
                    :label="item.label"
                    :prop="getProp(item)"
                    :rules="item.rules">
        <el-radio-group v-bind="item.props || {}"
                        v-model="model[item.name]">
          <el-radio v-for="option in item.options || []"
                    :key="option.value"
                    :label="option.value">
            {{option.label}}
          </el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- checkbox -->
      <el-form-item v-if="isEqual(item, 'checkbox')"
                    :key="`${item.name}_${index}`"
                    :label="item.label"
                    :prop="getProp(item)"
                    :rules="item.rules">
        <el-checkbox-group v-bind="item.props || {}"
                           v-model="model[item.name]">
          <el-checkbox v-for="option in item.options || []"
                       :key="option.value"
                       :label="option.value">{{option.label}}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <!-- datePicker -->
      <el-form-item v-if="isEqual(item, 'datePicker')"
                    :key="`${item.name}_${index}`"
                    :label="item.label"
                    :prop="getProp(item)"
                    :rules="item.rules">

        <el-date-picker v-bind="item.props || {}"
                        v-model="model[item.name]"></el-date-picker>
      </el-form-item>

      <!-- upload -->
      <el-form-item v-if="isEqual(item, 'upload')"
                    :key="`${item.name}_${index}`"
                    :label="item.label"
                    :prop="getProp(item)"
                    :rules="item.rules">
        <el-upload v-bind="item.props || {action:''}"
                   :file-list="model[item.name]"
                   :on-success="handleUploadSuccess(item)"
                   :before-remove="handleUploadBeforeRemove"
                   :on-remove="handleUploadRemove(item)">
          <slot name="upload" :item="item">
            <el-button>点击选择文件</el-button>
          </slot>
        </el-upload>
      </el-form-item>

      <!-- custom -->
      <el-form-item v-if="isEqual(item, 'custom')"
                    :key="`${item.name}_${index}`">
        <slot name="custom" :item="item" :index="index"></slot>
      </el-form-item>

      <!-- 遍历分支 -->
      <xdh-form-items v-for="(items, name) in item.branches || {}"
                      v-if="isMatchBranch(item, name)"
                      :key="name"
                      :data="items"
                      :model="model"></xdh-form-items>

      <!-- 遍历子表单 -->
      <xdh-form-items v-for="(columns, rowIndex) in item.children || []"
                      class="xdh-form-row"
                      :key="`${item.name}_${rowIndex}`"
                      :inline="item.inline"
                      :data="columns"
                      :root-name="item.name"
                      :rowIndex="rowIndex"
                      :model="model[item.name][rowIndex]">

        <div class="xdh-form-append">
          <slot name="row-append" :columns="columns" :index="rowIndex"></slot>
        </div>
      </xdh-form-items>

    </template>
    <slot></slot>
  </div>
</template>

<script>
  import XdhTitle from '@/widgets/xdh-title'

  export default {
    name: 'XdhFormItems',
    components: {
      XdhTitle
    },
    props: {
      //  [{label, name, type, props, options, value, rules, children, branches}]
      data: {
        type: Array
      },
      // 数据模型
      model: {
        type: Object,
        default() {
          return Object.create(null)
        }
      },
      // 跟字段名称
      rootName: {
        type: String
      },
      // 当前children的行索引
      rowIndex: {
        type: Number
      },
      // 是否inline显示
      inline: {
        type: Boolean
      }
    },
    computed: {},
    methods: {
      isEqual(item = {}, value) {
        if (item.children) {
          return false
        } else {
          const type = item.type
          return type && type.toLowerCase() === value.toLowerCase()
        }
      },
      isMatchBranch(item = {}, name) {
        const value = this.model[item.name]
        return Array.isArray(value) ? value.includes(name) : value === name
      },
      getProp(item) {
        if (this.rootName) {
          return `${this.rootName}.${this.rowIndex}.${item.name}`
        } else {
          return item.name
        }
      },
      handleUploadBeforeRemove(file) {
        return this.$confirm(`确定移除 ${file.name} ?`)
      },
      handleUploadSuccess(item) {
        const handler = function (res, file, fileList) {
          this.model[item.name] = fileList
        }
        return handler.bind(this)
      },
      handleUploadRemove(item) {
        const handler = function (file, fileList) {
          this.model[item.name] = fileList
        }
        return handler.bind(this)
      }
    },
    created() {
      // console.log('this.model', this.model)
      // console.log('root', this.root)
    },
    mounted() {
      // console.log('this.data', this.data)
    }
  }
</script>
