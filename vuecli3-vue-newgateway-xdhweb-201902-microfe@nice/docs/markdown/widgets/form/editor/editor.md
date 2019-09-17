<script>
import { content } from './content.js'
export default {
  data() {
    return {
      opt1: {
        uiColor: '#429ED0',
        height: '100'
      },
      opt2: {
        height: '100'
      },
      opt3: content.opt3,
      editorHTML1: content.sample1,
      editorHTML2: content.sample2,
      editorHTML3: content.sample3,
      baseUpload: 'http://192.168.0.34:3000/imgUpload'
    }
  },
  methods: {
    edChangeHandle(data) {
      console.log(data)
    },
    getData() {
      alert(this.$refs.myEditor.getData())
    }
  }
}
</script>
## editor 富文本编辑器

### 基础用法双向绑定。文档： [xdh-editor](#/src/widgets%2Fmodule-widgets_xdh-editor.html)
:::demo
```html
<template>
  <div>
    <div class="case-wrap">
      <xdh-editor ref="myEditor" cus-id="test1" :options="opt1" v-model="editorHTML1" @on-change="edChangeHandle"></xdh-editor>
    </div>
    <el-button @click="getData">调用getData()弹出内容</el-button>
    <h3>数据双向绑定展示如下</h3>
    <div class="test" v-html="editorHTML1"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        opt1: {
          uiColor: '#429ED0',
          height: '100'
        },
        editorHTML1: content.sample1
      }
    },
    methods: {
    }
  }
</script>
```
:::

### 简化toolbar用法与图片上传
:::demo
```html
<template>
  <div>
    <div class="case-wrap">
      <xdh-editor ref="myEditor2" cus-id="test2" :options="opt2" :simple="true" v-model="editorHTML2" :base-upload="baseUpload"></xdh-editor>
    </div>
    <div class="test" v-html="editorHTML2"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        opt2: {
          height: '100'
        },
        editorHTML2: content.sample2,
        baseUpload: 'http://192.168.0.34:3000/imgUpload'
      }
    },
    methods: {
      edChangeHandle(data) {
        console.log(data)
      },
      getData() {
        alert(this.$refs.myEditor2.getData())
      }
    }
  }
</script>
```
:::

### 自定义toolbar用法
:::demo
```html
<template>
  <div>
    <div class="case-wrap">
      <xdh-editor ref="myEditor3" cus-id="test3" :options="opt3" v-model="editorHTML3"></xdh-editor>
    </div>
    <div class="test" v-html="editorHTML3"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        opt3: content.opt3,
        editorHTML3: content.sample3
      }
    },
    methods: {
      edChangeHandle(data) {
        console.log(data)
      },
      getData() {
        alert(this.$refs.myEditor2.getData())
      }
    }
  }
</script>
```
:::
### 其他备注
* xdh-editor 基于 ckeditor4 封装，参考文档：https://ckeditor.com/ckeditor-4
* ckeditor.js（主js文件）与组件一同封装，其他辅助文件如 lang.js / skin.js 和 plugins等文件 均存放在 项目的static内
* xdh-editor 使用 “无easyimage”plugin版本的 ckeditor4封装，并且 自行安装"image2"plugin 支持图片的操作，并且image2插件有部分个性化的修改代码。因此建议尽量保留此版本中“static/ckeditor/” 中的文件，尤其是plugins。
* 由于ckeditor其他依赖文件存放在‘/static’中，因此，项目开发时，请务必配置‘src/config.js’内的“DEPLOY_SUB_DIR”常量值（为项目最终部署在的主域名下的子级文件夹路径）
