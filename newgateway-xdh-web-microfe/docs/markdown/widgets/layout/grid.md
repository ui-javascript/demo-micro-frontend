<script>
  export default {
    data() {
      return {
        grid: [
          {
            basis: '40%'
          },
          {
            basis: '60%'
          },
          {
            basis: '60%'
          },
          {
            basis: '40%'
          },
          {
            basis: '30%'
          },
          {
            basis: '40%'
          },
          {
            basis: '30%'
          }
        ],
        list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        list1: [1,2,3,4,5,6,7,8,9,10],
        list2: [11,12,13,14,15,16,17,18,19,20],
        sortable1: {
          sort: false,
          group: {
            name: 'A',
            pull: true,
            put: true
          }
        },
        sortable2: {
          sort: false,
          group: {
            name: 'A',
            pull: true,
            put: true
          }
         }
      }
    }
  }
</script>

## Grid 网格排版

采用css3 flex 布局。文档： [xdh-grid](#/src/widgets%2Fmodule-widgets_xdh-grid.html)

### 基础用法

横向布局

:::demo `direction` 决定主轴的方向(即项目的排列方向, `justify` 定义item在主轴的对齐方式, `wrap` 确定容器内item是否可换行
```html
<template>
  <xdh-grid :data="list" direction="row" justify="flex-start" wrap="wrap">
     <div class="box-wrapper" slot-scope="scope">
         <div class="box">{{scope.item}}</div>
      </div>
  </xdh-grid>
</template>
<style lang="scss" scoped>
  .box-wrapper {
    padding: 10px;

  }
  .box{
    background: #ccc;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
</style>
<script>
  export default {
    data() {
      return {
        list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      }
    }
  }
</script>

```
:::

### 垂直方向布局

:::demo `direction` 决定主轴的方向(即项目的排列方向, `justify` 定义item在主轴的对齐方式, `wrap` 确定容器内item是否可换行
```html
<template>
  <xdh-grid class="grid-demo" :data="list" direction="column" justify="flex-start" wrap="wrap" align-content="flex-start">
     <div class="box-wrapper" slot-scope="scope">
         <div class="box">{{scope.item}}</div>
      </div>
  </xdh-grid>
</template>
<style lang="scss" scoped>
  .grid-demo{
    height: 400px;
  }
  .box{
    background: #ccc;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
</style>
<script>
  export default {
    data() {
      return {
        list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      }
    }
  }
</script>

```
:::

### 定义布局
:::demo
```html
<template>

  <div>
    <xdh-grid :data="grid" justify="space-between" wrap="wrap" class="my-grid">
      <div slot-scope="scope" class="my-panel">
        <xdh-panel :title="`index: ${scope.index}`">
          {{scope.item}}
        </xdh-panel>
      </div>

    </xdh-grid>
  </div>

</template>
<style lang="scss" scoped>

  .my-grid {
    padding: 10px 10px 10px 0;
  }

  .my-panel {
    padding: 0 0 0 10px;
  }
</style>
<script>

  export default {
    data() {
      return {
        grid: [
          {
            basis: '40%'
          },
          {
            basis: '60%'
          },
          {
            basis: '60%'
          },
          {
            basis: '40%'
          },
          {
            basis: '30%'
          },
          {
            basis: '40%'
          },
          {
            basis: '30%'
          }
        ]
      }
    }
  }
</script>

```
:::


### 可拖拽排序
:::demo
```html
<template>
  <xdh-grid :data.sync="list" direction="row" justify="flex-start" wrap="wrap" sortable>
     <div class="box-wrapper" slot-scope="scope">
         <div class="box">{{scope.item}}</div>
      </div>
  </xdh-grid>
</template>
<style lang="scss" scoped>
  .box{
    background: #ccc;
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .xdh-grid__item.sortable-ghost .box{
    background:orange;
     opacity:0.3;
  }

</style>
<script>
  export default {
    data() {
      return {
        list: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      }
    }
  }
</script>

```
:::

### 分组拖放
:::demo
```html
 <template>
    <xdh-panel title="A组">
       <xdh-grid :data.sync="list1" direction="row" justify="flex-start" wrap="wrap" :sortable="sortable1">
           <div class="box-wrapper" slot-scope="scope">
               <div class="box">{{scope.item}}</div>
            </div>
      </xdh-grid>
    </xdh-panel>

    <xdh-panel title="B组">
      <xdh-grid :data.sync="list2" direction="row" justify="flex-start" wrap="wrap" :sortable="sortable2">
           <div class="box-wrapper" slot-scope="scope">
               <div class="box">{{scope.item}}</div>
            </div>
      </xdh-grid>
    </xdh-panel>
 </template>

 <script>
   export default {
     data() {
       return {
        list1: [1,2,3,4,5,6,7,8,9,10],
        list2: [11,12,13,14,15,16,17,18,19,20],
        sortable1: {
          sort: false,
          group: {
            name: 'A',
            pull: true,
            put: true
          }
        },
        sortable2: {
          sort: false,
          group: {
            name: 'A',
            pull: true,
            put: true
          }
         }
       }
     }
   }
 </script>
```
:::

### 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 数据项目, 支持sync修饰符 | Array | - | - |
| sortable | sortablejs 实例化参数选项 | Object/Boolean | - | false |
| beforeAdd | 在添加前回调，如返回false，即阻止添加 | Function | - | - |
| props | 数据项item样式属性映射对象 | - | - | {order, basis, grow, shrink, align}|
| direction |决定主轴的方向(即项目的排列方向） | String |'row', 'row-reverse', 'column', 'column-reverse'| - |
| wrap |确定容器内item是否可换行|String|'nowrap', 'wrap', 'wrap-reverse'| - |
| justify |定义item在主轴的对齐方式|String|'flex-start', 'flex-end', 'center', 'space-between', 'space-around'|-|
| align-items |定义item在交叉轴上的对其方式|String|'flex-start', 'flex-end', 'center', 'baseline', 'stretch'|-|
| align-content |定义多根轴线的对齐方式，如果items只有一根轴线，该设置将不起作用|String|'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'|-|

### sortable 对象
```javascript
{
	group: "name",  // or { name: "...", pull: [true, false, clone], put: [true, false, array] }
	sort: true,  // sorting inside list
	delay: 0, // time in milliseconds to define when the sorting should start
	disabled: false, // Disables the sortable if set to true.
	store: null,  // @see Store
	animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
	handle: ".my-handle",  // Drag handle selector within list items
	filter: ".ignore-elements",  // Selectors that do not lead to dragging (String or Function)
	preventOnFilter: true, // Call `event.preventDefault()` when triggered `filter`
	draggable: ".item",  // Specifies which items inside the element should be draggable
	ghostClass: "sortable-ghost",  // Class name for the drop placeholder
	chosenClass: "sortable-chosen",  // Class name for the chosen item
	dragClass: "sortable-drag",  // Class name for the dragging item
	dataIdAttr: 'data-id',

	forceFallback: false,  // ignore the HTML5 DnD behaviour and force the fallback to kick in

	fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
	fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
	fallbackTolerance: 0, // Specify in pixels how far the mouse should move before it's considered as a drag.

	scroll: true, // or HTMLElement
	scrollFn: function(offsetX, offsetY, originalEvent) { ... }, // if you have custom scrollbar scrollFn may be used for autoscrolling
	scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
	scrollSpeed: 10, // px

	setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
		dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
	}
}

```

### 插槽
| 名称 | 说明 | 参数 |
|----|----|----|
| - | 定义项的内容 | index: 数据索引, item: 数据项|


### 事件
| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-change | 单排序、新增、删除时触发 | 回调参数 data,type,args |
| on-choose | Element is chosen | evt: element index within parent |
| on-start | Element dragging started | evt: element index within parent |
| on-end | Element dragging ended | evt: element index within parent |
| on-add |  Element is dropped into the list from another list | evt: element index within parent |
| on-update | Changed sorting within list | evt: element index within parent |
| on-sort | Called by any change to the list (add / update / remove) | evt: element index within parent|
| on-remove | Element is removed from the list into another list | evt: element index within parent |
| on-filter| Attempt to drag a filtered element | evt: element index within parent |
| on-move | Event when you move an item in the list or between lists | evt: element index within parent |
| on-clone| Called when creating a clone of element | evt: element index within parent |
