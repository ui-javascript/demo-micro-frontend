<script>
  const avatar = require('D/assets/bem.png')
  export default {
    data() {
      return {
        avatar: avatar
      }
    }
  }
</script>
## 命名

原则用英文，选取简单常见、有意义的单词，可以一个词描述的，不要用多词组合，单词简写要用常见的

### 文件夹/文件/URL命名

小写， 单词用“-”分隔，如：
```xml
folder
some-folder

file.js
some-file.js

http://127.0.0.1:8080/#/system-admin/person-detail

```

### Vue文件相关

* **组件名称** <br>
   JS定义以大写开头驼峰式，如：
   ```xml
   CamelCase
   
   import CamelCase from './camel-case.vue'
   ```
   模板用全小写， 单词用“-”分隔，如：
   ```xml
   camle-case

   <camle-case></camle-case>
   ```
* **紧密耦合的组件名** <br>
  和父组件紧密耦合的子组件应该以父组件名作为前缀命名
  ```xml
  // bad
  components/
  |- TodoList.vue
  |- TodoItem.vue
  └─ TodoButton.vue
  
  // good
  components/
  |- TodoList.vue
  |- TodoListItem.vue
  └─ TodoListItemButton.vue
  ```
   
* **组件属性** <br>
   JS定义以小写开头驼峰式，如：
   ```xml
   camelCase

   prop :{
    camelCase：‘’
   }
   ```
   模板用全小写， 单词用“-”分隔，如：
   ```xml
   camle-case

   <div camle-case='100'></div>
   ```

* **事件名称** <br>
   全小写，加“on-”前缀 单词用“-”分隔，如：
   ```xml
   on-change

   this.$emit('on-change', data)
   ```

### JS命名

|类型|规范|示例|
|----|----|----|
|常量|全字符大写，单词用 '_' 分隔 |FETCH_USERS、GET_USERS|
|变量、函数|小写开头驼峰式|camelCase|
|类、特殊意义的命名空间|大写开头驼峰式|CamelCase|
|方法、函数|a.  动词 或 动词+名称 组合 <br/>b.  get 必须要有返回值||
|布尔值变量|is  或 has 前缀||
|私有属性或方法|用 '_' 或 '__' 前缀||
|事件处理函数|handle前缀 或 Handler 后缀||

### CSS的命名

采用BEM规范命名，即块（block）、元素（element）、修饰符（modifier）的缩写，利⽤不同的区块，功能以及样式来给元素命名

<img :src='avatar'></img>

```xml
.tabs{}
.tabs__item{}
.tabs__item—active{}

SCSS写法
.tabs{
  &__item{
    &—active{}
  }
}
```
