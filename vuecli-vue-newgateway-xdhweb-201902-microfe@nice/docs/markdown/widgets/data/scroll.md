## Scroll 无限滚动组件

常用于滚动至底部时，触发加载更多数据。当滚动至底部huo顶部时，触发加载更多，需返回 Promise。文档： [xdh-scroll](#/src/widgets%2Fmodule-widgets_xdh-scroll.html)

### 基础用法

无限滚动到底部加载

:::demo
```html
<template>
    <xdh-scroll :on-reach-bottom="handleReachBottom">
        <el-card v-for="(item, index) in list" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </el-card>
    </xdh-scroll>
</template>
<script>
    export default {
        data () {
            return {
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list[this.list.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>
```
:::


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| height | 滚动区域的高度，单位像素 | String/Number | - | 300 |
| loading-text | 加载中的文案 | String | - | 加载中... |
| loading-spinner | 自定义加载图标类名 | String | - | el-icon-loading |
| on-reach-top | 滚动至顶部时触发，需返回 Promise | Function | - | - |
| on-reach-bottom | 滚动至底部时触发，需返回 Promise | Function | - | - |
| on-reach-edge | 滚动至顶部或底部时触发，需返回 Promise | Function | - | - |
| distance-to-edge | 从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。 | Number/Array | - | [20, 20] |

### 插槽

| name | 说明 |
|-----|-----|
| - | 自定义内容 |
