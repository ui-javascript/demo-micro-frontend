## 风格

在使用 Xdh-web 开发时，建议按约定风格编码，有利于更好的协作开发，风格内容节选自 [Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide)

### 组件数据

组件的 data 必须是一个函数。

```js
// bad
export default {
  data: {
    foo: 'bar'
  }
}

// good
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

### 组件样式设置作用域

在单文件组件中, 使用 `scoped` 特性, 尽可能的避免不必要样式冲突

```xml
<!-- bad -->
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>

<!-- good -->
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>

```

### 自闭合组件

在单文件组件中没有内容的组件、字符串模板和 JSX 中应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

### 指令缩写

指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

```html
<!-- bad -->
<input
  v-bind:value="value"
  v-on:input="onInput"
>

<!-- good -->
<input
  :value="value"
  @input="onInput"
>
```

### Props 换行

多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

```html
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

### Props 顺序

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

### 组件选项的顺序

组件选项应该有统一的顺序。

```js
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
};
```

### 组件/实例选项中的空行

组件选项较多时，建议在属性之间添加空行。

```js
export default {
  computed: {
    formattedValue() {
      // ...
    },

    styles() {
      // ...
    }
  },

  methods: {
    onInput() {
      // ...
    },

    onChange() {
      // ...
    }
  }
};
```

### 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，标签之间留有空行，
且 `<style>` 要放在最后，因为另外两个标签至少要有一个。

```html
<template>
...
</template>

<script>
/* ... */
</script>

<style>
/* ... */
</style>
```
