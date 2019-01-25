<script>
import XdhPrint from '@/widgets/xdh-print/xdh-print.vue'
import XdhEcharts from '@/widgets/xdh-echarts/xdh-echarts'
import XdhGo from '@/widgets/xdh-go/xdh-go'
export default {
    components: {
      XdhPrint,
      XdhEcharts,
      XdhGo
    },
    data() {
        return {
              parentDom: `<div class="my-container" style="border-width:0">
                             <div class="my-wrapper"></div>
                         </div>`,
            transfer(dom, root) {
               let title = root.createDom(`<div>自定义标题</div>`);
                let ranges = dom.querySelectorAll('.print-range7');
                for(let i = 0; i < ranges.length; i++) {
                    let t = title.cloneNode(true);
                    root.prependDom(ranges[i], t)
;                }
                return dom;
            },
             styleArray1: [
                   {
                     selector: '.wrapper1',
                     style: {
                        height: 'auto'
                     }
                   },
                   {
                     selector: 'ul>li',
                     style: {
                         color: 'blue'
                     }
                   }
               ],
            list: (function() {
                let arr = [];
                for(let i = 0; i < 50; i++) {
                    arr.push({name: 'item' + i})
                }
                return arr;
            })(),
            genParentDom() {
                let div = document.createElement('div');
                div.innerHTML = `<div class="my-container" style="border-width:0;">
                                <div class="my-wrapper">
                                </div>
                            </div>`;
                                return div.childNodes[0];
            },
            tableData: (function() {
                let arr = [];
                for(let i = 0; i < 50; i++) {
                    arr.push({
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    });
                }
                return arr
            })(),
            model: 'GraphLinksModel',
            nodes: [
                {key: 'A', category: 'a'},
                {key: 'B', category: 'b'},
                {key: 'C', category: 'c'}
            ],
            links: [
                {from: 'A', to: 'B'},
                {from: 'A', to: 'C'}
            ],
            echartOptions: {
                tooltip: {},
                xAxis: {
                data: ['广州', '汕头']
                },
                yAxis: {},
                series: [{
                name: '',
                type: 'bar',
                data: [12, 24]
                }]
            }
        }
    },
      computed: {
      tableData2() {
          let arr = [];
          let l = Math.ceil(this.tableData.length / 15);
          for(let i = 0; i < l; i++) {
              arr.push(this.tableData.slice(i * 15, (i + 1) * 15));
          }
          return arr;
      }
    },
    methods: {
            config($, go) {
                return {
                    initialContentAlignment: go.Spot.Center
                }
            },
            nodeTemplate($, go, color) {
                return $(go.Node, 'Horizontal', {background: color},
                $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
                )
            },
            linkTemplate($, go) {
                return $(go.Link, {routing: go.Link.Orthogonal, corner: 5},
                $(go.Shape, {strokeWidth: 3, stroke: '#555'})
                )
            },
            nodeTemplateMap($, go) {
                const a = this.nodeTemplate($, go, 'red')
                const b = this.nodeTemplate($, go, 'blue')
                const c = this.nodeTemplate($, go, 'green')
                const map = new go.Map()
                map.add('a', a)
                map.add('b', b)
                map.add('c', c)
                return map
            },
            layout($, go) {
                return new go.TreeLayout()
            }
    }
}
</script>

## xdh-print

浏览器普遍支持window.print 方法，但window.print只能打印页面的可见区域，如果要打印滚动区域内的内容就无能为力了。

有些插件能解决此类问题，例如基于jQuery的jq-print。其原理是新建一个iframe，把需打印的dom复制一份放到其中，但会丢失元素的样式，打印出来的效果并不好，并且它基于jquery, 引入到框架中会增加冗余代码。

xdh-print 考虑到这些问题，进行了改进。该组件基于vue,其原理是将需要打印的内容拷贝一份，追加到body下，并且将原页面在打印时隐藏掉，这样就能保留大部分dom元素的样式。同时它给出了一些方法解决样式丢失，canvas元素不显示等问题。

### 基础用法。文档： [xdh-print](#/src/widgets%2Fmodule-widgets_xdh-print.html)


:::demo print-range参数传一个css选择器,指定需要打印的区域，如果选择器匹配到多个区域，则会依次分页打印。你可以利用这一特性灵活处理打印内容。
```html
<template>
  <div>

      <div class="title">打印按钮自定义</div>
      <p>打印按钮默认使用el-button,通过type,btn-class,text参数控制按钮显示，如果仍不能满足需求，可通过名称为button的插槽自定义元素。</p>
      <p>打印时，组件默认将有滚动条的el-table展开打印</p>
      <xdh-print :print-range="'.print-range1'" >
        <el-button type="primary" icon="el-icon-tickets" slot="button"></el-button>
      </xdh-print>

      <el-table
      :data="tableData"
      class="print-range1"
      height="250"
      border
      style="width: 100%">
       <el-table-column
      prop="name"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="250">
    </el-table-column>
    </el-table>

    <div class="title">控制分页打印</div>
    <p>
        如果你希望打印一个表格，每页的行数固定，并且都有表头，可以对表格进行预处理。如代码所示将处理过的表格用.xdh-displaynone隐藏起来，使用.xdh-print-visible 在打印时显示出来。
    </p>
      <xdh-print :print-range="'.print-range2'" btn-type="primary"  btn-class="div-print" btn-text="分页打印">
      </xdh-print>

       <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
       <el-table-column
      prop="name"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="250">
    </el-table-column>
    </el-table>
  <!-- 隐藏表格，在打印时显示 -->
    <div class="xdh-displaynone xdh-print-visible">
   <el-table
   v-for="(item, idx) in tableData2"
   :key="idx"
    :data="item"
      class="print-range2"
      height="250"
      border
      style="width: 100%">
     <el-table-column
      prop="name"
      label="姓名"
      width="100">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="250">
    </el-table-column>
  </el-table>
  </div>

  </div>
</template>
<style type="text/scss" lang="scss">
 .displaynone{
     display:none;
 }
 .title{
     line-height: 40px;
     font-size: 16px;
     font-weight: 600;
 }
</style>
<script>
    import XdhPrint from '@/widgets/xdh-print/xdh-print.vue'
    export default {
        data() {
            return {
                 tableData: (function() {
               let arr = [];
               for(let i = 0; i < 50; i++) {
                   arr.push({
                     name: '王小虎',
                     address: '上海市普陀区金沙江路 1518 弄'
                   });
               }
               return arr
           })()
            }
        },
        computed: {
            tableData2() {
                let arr = [];
                let l = Math.ceil(this.tableData.length / 15);
                for(let i = 0; i < l; i++) {
                    arr.push(this.tableData.slice(i * 15, (i + 1) * 15));
                }
                return arr;
            }
        },
        components: {
            XdhPrint
        }
    }
</script>
```
:::

### 打印canvas元素

:::demo 页面中的canvas元素，如果直接使用window.print是能够打印的，然而使用组件时，canvas元素复制之后，里面的图形便丢失了，这很容易理解，因为canvas内部的图形是依靠canvas的上下文对象画出来的,而复制时却只复制了canvas标签本身。xdh-print解决的办法是将打印区域内的canvas转换成base64格式图片，并替换掉canvas标签。

```html
<template>
    <div>
       <xdh-print print-range=".print-range3"></xdh-print>
        <div class="print-range3">

            <div class="title">echarts</div>

        <xdh-echarts :options="echartOptions" width="580px" height="300px"  id="xdh-echart1" ref="xdhEchart1"></xdh-echarts>

        <div class="title">gojs</div>

        <xdh-go :nodes="nodes"
            :links="links"
            :type="model"
            :node-template-map="nodeTemplateMap"
            :link-template="linkTemplate"
            :config="config"
            :layout="layout"
            height="200px"
            id="xdh-go1" ref="xdhGo1"
            ></xdh-go>
        </div>
    </div>
</template>
<script>
    import XdhPrint from '@/widgets/xdh-print/xdh-print.vue'
    import XdhEcharts from '@/widgets/xdh-echarts/xdh-echarts'
    import XdhGo from '@/widgets/xdh-go/xdh-go'
    export default {
        components: {
          XdhPrint,
          XdhEcharts,
          XdhGo
        },
        data() {
            return {
                model: 'GraphLinksModel',
                nodes: [
                    {key: 'A', category: 'a'},
                    {key: 'B', category: 'b'},
                    {key: 'C', category: 'c'}
                ],
                links: [
                    {from: 'A', to: 'B'},
                    {from: 'A', to: 'C'}
                ],
                echartOptions: {
                    tooltip: {},
                    xAxis: {
                    data: ['广州', '汕头']
                    },
                    yAxis: {},
                    series: [{
                    name: '',
                    type: 'bar',
                    data: [12, 24]
                    }]
                }
            }
        },
        methods: {
            config($, go) {
                return {
                    initialContentAlignment: go.Spot.Center
                }
            },
            nodeTemplate($, go, color) {
                return $(go.Node, 'Horizontal', {background: color},
                $(go.TextBlock, 'Default Text', {margin: 12, stroke: '#ffffff'}, new go.Binding('text', 'key'))
                )
            },
            linkTemplate($, go) {
                return $(go.Link, {routing: go.Link.Orthogonal, corner: 5},
                $(go.Shape, {strokeWidth: 3, stroke: '#555'})
                )
            },
            nodeTemplateMap($, go) {
                const a = this.nodeTemplate($, go, 'red')
                const b = this.nodeTemplate($, go, 'blue')
                const c = this.nodeTemplate($, go, 'green')
                const map = new go.Map()
                map.add('a', a)
                map.add('b', b)
                map.add('c', c)
                return map
            },
            layout($, go) {
                return new go.TreeLayout()
            }
        }
    }
</script>
```
:::

### 样式修正

:::demo 如果打印区域内的元素的样式是通过区域外的类限定的，那么打印区域复制后，样式将不起作用。要修正此问题，可以通过给container-class参数传入一个类名，作为其容器的类名。如果限定的类大于一层，可以通过parent-dom参数传入一个dom对象或者一个返回dom对象的方法，或者可转为dom的字符串，此dom对象将作为父容器，内部必须包含container-class指定的类名。
```html
<template>
  <div>
      <div class="my-container">
          <div class="other">其它非打印内容1</div>
          <div class="my-list print-range4">
              <div class="item">打印内容1</div>
          </div>
      </div>
      <p class="title">打印内容1中，文字应为红色，是通过样式.my-container .my-list .item{
       color: red;
    }限定的，如果打印区域在.my-list，则</p>
      <div class="title">不作修正时效果</div>

      <xdh-print :print-range="'.print-range4'">
      </xdh-print>
      <p>
          说明：因.my-container类丢失，通过.my-container限定的样式不生效</p>
       <div class="title">添加container-class="my-container"修正</div>
      <xdh-print container-class="my-container" :root-style="{'border-width': 0}" :print-range="'.print-range4'" >
          </xdh-print>
       <p>说明：因容器添加了.my-container 类，样式生效，打印结果正确</p>
      <hr>
       <div class="title">多层类修正</div>
        <div class="my-container">
          <div class="other">其它非打印内容2</div>
          <div class="my-wrapper">
              <div class="my-list print-range5">
                  <div class="item">
                      打印内容2
                  </div>
             </div>
          </div>
      </div>
       <p class="title">打印内容2中，文字应为蓝色，是通过my-container .my-wrapper .my-list .item{
       color: red;
    }类限定的。</p>
       <p>当打印区域在.my-list, 因丢失.my-container和.my-wrapper两层类限定，样式不生效</p>
       <p>此时可增加相对应的父容器进行修正</p>
         <xdh-print container-class="my-wrapper" :parent-dom="parentDom"
         :print-range="'.print-range5'">
      </xdh-print>

  </div>
</template>
<script>
export default {
    data() {
        return {
            parentDom: `<div class="my-container" style="border-width:0;">
                            <div class="my-wrapper"></div>
                        </div>`
        }
    }
}
</script>
<style>
    .my-container{
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
    }
    .my-container .my-list .item{
       color: red;
    }
    .my-container .my-wrapper .my-list .item{
        color: blue;
    }
</style>
```
:::

### 样式改变

:::demo 打印的区域中，可能包含有滚动条的表格，或者折叠起来的项目，你可能希望在打印时将其展开。组件已经默认将el-table的滚动条展开，对于其它的样式，你可以使用style-array传入一个数组去改变相关元素的样式，达到自己想要的效果。数组的每个元素须包含一个css选择器和一个style对象。例如：[{selector: '.wrapper1',style: {height: 'auto'}}]

```html
<template>
   <div>
       <p>通过改变样式在打印时展开滚动条或实现其它效果</p>
       <p>这里通过style-array在打印时将滚动区域展开，并将列表文字变成蓝色</p>
        <xdh-print :print-range="'.print-range6'" :style-array="styleArray1">
      </xdh-print>
      <div class="print-range6">
          <ul class="wrapper1">
              <li v-for="item in list">
                 {{item.name}}
              </li>
          </ul>
      </div>
   </div>
</template>
<script>
    export default {
        data() {
           return {
               styleArray1: [
                   {
                     selector: '.wrapper1',
                     style: {
                        height: 'auto'
                     }
                   },
                   {
                     selector: 'ul>li',
                     style: {
                         color: 'blue'
                     }
                   }
               ],
               list: (function() {
                   let arr = [];
                   for(let i = 0; i < 50; i++) {
                       arr.push({name: 'item' + i})
                   }
                   return arr;
               })()
           }
        },
        methods: {

        }
    }
    </script>
    <style>
    .wrapper1{
        height: 100px;
        overflow-y: scroll;
        border: 1px solid #ccc;
    }
    </style>
```
:::

### 自定义DOM处理方法

:::demo 如果以上方法都不能解决需求，组件提供了一个自定义改变dom的方法dom-transfer, 该方法有两个参数，第一个是组件处理后待打印的dom, 第二个是组件对象本身，你可以通过dom操作改变或添加元素，并返回改变后的dom.

```html
<template>
   <div>
      <xdh-print :print-range="'.print-range7'" :dom-transfer="transfer">
      </xdh-print>
      <p>这里通过dom-transfer自定义方法在打印时给每个打印区域头部添加了标题</p>
      <div class="print-range7">
          <ul class="wrapper2">
              <li v-for="item in list">
                 {{item.name}}
              </li>
          </ul>
      </div>
      <div class="print-range7">
          <ul class="wrapper2">
              <li v-for="item in list">
                 {{item.name}}
              </li>
          </ul>
      </div>
   </div>
</template>
<script>
    export default {
        data() {
           return {
               list: (function() {
                   let arr = [];
                   for(let i = 0; i < 50; i++) {
                       arr.push({name: 'item' + i})
                   }
                   return arr;
               })()
           }
        },
        methods: {
          transfer(dom, root) {
            let title = root.createDom(`<div>自定义标题</div>`);
            let ranges = dom.querySelectorAll('.print-range7');
            for(let i = 0; i < ranges.length; i++) {
                let t = title.cloneNode();
                ranges[i].appendChild(t);
            }
            return dom;
          }
        }
    }
    </script>
    <style>
    .wrapper2{
        height: 100px;
        overflow-y: scroll;
        border: 1px solid #ccc;
    }
    </style>
```
:::

### 在浏览器中微调样式

:::demo 在开发时，如果需要预览复制后的打印内容，可以添加keep-preview参数，在关闭打印窗口后，要打印的内容会保留在页面上，你可以通过浏览器开发者工具微调样式并在代码中实现，也可以点击关闭按钮将其关闭。

```html
<template>
   <div>
        <xdh-print :print-range="'.print-range8'" keep-preview>
      </xdh-print>
      <p>keep-preview参数主要在开发时使用，在关闭打印窗口后，能保留打印内容，并通过浏览器开发工具调整样式</p>
      <div class="print-range8">
         <div>打印内容</div>
      </div>
   </div>
</template>
<script>
    export default {
        data() {
           return {
           }
        }
    }
    </script>
```
:::


### Slot
| name | 说明                              |
| ------ | ---------------------------------------- |
| button | 自定义打印按钮 |

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| text | 按钮文字 | string | — | 打印 |
| type | 按钮类型 | string | — | default |
| btn-class | 按钮样式名称 | string | — | — |
| print-range | 打印区域，css选择器，该参数为必须 | string | — | — |
| container-class | 打印内容的容器className | string | — | 'xdh-print-page-container' |
| parent-dom | 作为父容器的dom对象，或者返回dom对象的方法,或者可生成dom的字符串，只能有一个根元素，且dom中必须包含container-class指定的className | HTMLElement,function,string | — | — |
| root-style | 顶层容器的样式,请不要设置position为absolute,relative或static, 否则分页效果会不起作用 | object | — | {} |
| before-print | 在复制打印区域前执行，须返回promise对象 | function | — | — |
| after-print | 在打印完成之后执行 | function | — | — |
| remove-selector | 打印时需要删除的元素选择器 | string | — | '' |
| style-array | 打印时须改变的样式数组，示例:[{selector: '.selector', style: {height: 'auto'}}] | string | — | [] |
| dom-transfer | 自定义修改打印内容的方法 | function | — | — |
| disable-default-style | 禁用默认样式数组，只使用style-array参数 | boolean | — | false |
| keep-preview | 打印后不删除页面打印内容 | boolean | — | false |

### 样式
| 名称 | 说明 |
|----|----|
| xdh-print-page-break | 添加此className后打印时该元素末尾会插入分页符 |
| xdh-print-hide | 添加此className后打印时会隐藏元素 |
| xdh-print-visible | 添加此className后打印时会显示元素 |
| xdh-displaynone | 添加此className后在非打印时会隐藏元素，如果想在页面隐藏元素，打印时显示，可设置class="xdh-displaynone xdh-print-visible" |
