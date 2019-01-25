## 消息接收

:::demo
```html
<template>
  <div>
     <div>收到消息：</div>
     <ul>
        <li v-for="item in messages">{{item}}</li>
     </ul>
  </div>
</template>

<script>
import Messager from '@/utils/messager'
export default {
  data() {
    return {
      messager: null,
      messages: []
    }
  },
  methods: {
    send() {
        this.messager.fire('B', {
          text: '回复内容'
        })
    }
  },
  mounted() {
    this.messager = new Messager({
      bridge:'lib/bridge/bridge.html'
    })
   this.messager.on('A', data => {
      this.messages.push(data)
      this.send()
   })
  }
}
</script>

```
::::
