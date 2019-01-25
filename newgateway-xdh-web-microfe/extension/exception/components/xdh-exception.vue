<template>
  <div class="xdh-exception">
    <div class="xdh-exception__img">
      <div class="xdh-exception__img--block" :style="{backgroundImage:`url(${img})`}"></div>
    </div>
    <div class="xdh-exception__content">
      <div class="xdh-exception__text" v-if="text">{{text}}</div>
      <div class="xdh-exception__desc" v-if="description">{{description}}</div>
      <div class="xdh-exception__actions" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 异常页面
   * @module extensions/xdh-exception
   */
  import './style.scss'

  /**
   * 插槽
   * @member slots
   * @property {string} actions 操作栏
   */

  /**
   * @export
   */
  export default {
    name: 'XdhException',
    /**
     * 属性参数
     * @property {String} [img] 左侧显示的图片
     * @property {String} [text] 显示的报错码
     * @property {String} [description] 显示的报错码对应的详细内容
     */
    props: {
      img: {
        type: String
      },
      text: {
        type: String
      },
      description: {
        type: String
      }
    }
  }
</script>
