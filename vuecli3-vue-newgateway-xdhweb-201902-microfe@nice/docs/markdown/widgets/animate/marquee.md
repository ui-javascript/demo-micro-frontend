
<script>
    export default {
        data () {
            return {
                newsList: [{
                      'title': 'A simple, seamless scrolling for Vue.js'
                    }, {
                      'title': 'A curated list of awesome things related to Vue.js'
                    }],
                    listData2: [1, 2, 3, 4, 5, 6, 7, 8],
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            },
            computed: {
                optionSwitch1 () {
                  return {
                    autoPlay: false,
                    switchSingleStep: 140
                    }
                }
             }
       }
</script>


## Marquee 无缝滚动


:::tip
注意：需要给父容器一个height和:data='Array'和overfolw:hidden;左右滚动需要给ul容器一个初始化 css width。文档： [xdh-marquee](#/src/widgets%2Fmodule-widgets_xdh-marquee.html)
:::

### 基础用法
:::demo
```html
<template>
    <xdh-marquee :data="listData" class="xdh-marquee">
            <div v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </div>
    </xdh-marquee>
</template>
<style lang="scss" scoped>
    .xdh-marquee {
        height: 150px;
        overflow: hidden;

        .date{
           margin-left: 50px;
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            }
       }
</script>

```
:::

### 向下滚动
:::demo
```html
<template>
    <xdh-marquee :data="listData" :option="{direction:0}" class="xdh-marquee">
            <div v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </div>
    </xdh-marquee>
</template>
<style lang="scss" scoped>
    .xdh-marquee {
        height: 150px;
        overflow: hidden;

        .date{
           margin-left: 50px;
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            }
       }
</script>

```
:::

### 向左滚动
:::demo
```html
<template>
    <xdh-marquee :data="newsList" :option="{direction: 2, limitMoveNum: 2}" class="seamless-warp2">
        <ul class="item">
            <li v-for="item in newsList" v-text="item.title"></li>
        </ul>
    </xdh-marquee>
</template>
<style lang="scss" scoped>
    .seamless-warp2 {
        overflow: hidden;
        height: 25px;
        width: 380px;
        ul.item {
            margin:0;
            padding:0;
            width: 580px;
            li {
                float: left;
                margin-right: 10px;
            }
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                newsList: [{
                      'title': 'A simple, seamless scrolling for Vue.js'
                    }, {
                      'title': 'A curated list of awesome things related to Vue.js'
                    }]
                 }
            }
       }
</script>

```
:::

### 速度控制
:::demo
```html
<template>
    <xdh-marquee :data="listData" :option="{step: 3}" class="xdh-marquee">
            <div v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </div>
    </xdh-marquee>
</template>
<style lang="scss" scoped>
    .xdh-marquee {
        height: 150px;
        overflow: hidden;

        .date{
           margin-left: 50px;
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            }
       }
</script>

```
:::

### 停顿
:::demo
```html
<template>
    <xdh-marquee :data="listData" :option="{singleHeight: 150, waitTime: 3000}" class="xdh-marquee">
            <div v-for="item in listData">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
            </div>
    </xdh-marquee>
</template>
<style lang="scss" scoped>
    .xdh-marquee {
        height: 150px;
        overflow: hidden;

        .date{
           margin-left: 50px;
        }
    }
</style>
<script>
    export default {
        data () {
            return {
                listData: [{
                   'title': '无缝滚动第一行无缝滚动第一行',
                   'date': '2017-12-16'
                 }, {
                    'title': '无缝滚动第二行无缝滚动第二行',
                    'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第三行无缝滚动第三行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第四行无缝滚动第四行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第五行无缝滚动第五行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第六行无缝滚动第六行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第七行无缝滚动第七行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第八行无缝滚动第八行',
                     'date': '2017-12-16'
                 }, {
                     'title': '无缝滚动第九行无缝滚动第九行',
                     'date': '2017-12-16'
                 }]
                }
            }
       }
</script>

```
:::

