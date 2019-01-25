## Messager 跨窗口消息

:::demo
```html
<template>
  <div>
    <el-button @click="openPage">打开新窗口</el-button>
    <el-button @click="send" type="primary">给页面发送数据</el-button>
    <div>
        <div>收到响应：</div>
        <ul>
            <li v-for="item in messages">{{item}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import Messager from '@/utils/messager'
export default {
  data() {
    return {
      messager: null,
      messages:[]
    }
  },
  methods: {
    openPage() {
       window.open('/xdh-web-doc/#/messager-open')
    },
    send() {
        this.messager.fire('A', {
          text: '我是发送的内容'
        })
    }
  },
  mounted() {
    this.messager = new Messager({
      bridge:'lib/bridge/bridge.html'
    })
    this.messager.on('B', data => {
       this.messages.push(data)
    })

  }
}
</script>

```
:::






