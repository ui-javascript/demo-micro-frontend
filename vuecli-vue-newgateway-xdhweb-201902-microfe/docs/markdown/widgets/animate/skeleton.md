<script>
import XdhSkeleton from '@/widgets/xdh-skeleton'
export default {
  components: {
    XdhSkeleton
  },
  data() {
    return {
    }
  }
};
</script>
## Skeleton 加载占位图组件

在需要等待加载内容的位置提供一个占位图。适用于网络较慢，需要长时间等待加载处理的情况下,图文信息内容较多的列表/卡片中。

### 基础用法

最简单的占位效果。
 
:::demo 
 
```html
 <template>
    <xdh-skeleton loading avatar>
      这里就是放你请求数据最终要渲染的列表
    </xdh-skeleton>
 </template>
 
 <script>
 import XdhSkeleton from '@/widgets/xdh-skeleton'
 
 export default {   
   components: {
     XdhSkeleton
   },
   data() {
     return {
     }
   }
 };
 </script>
 ```
 :::
 
 ### 属性
 
 | 参数 | 说明 | 类型 | 可选值 | 默认值 |
 |----|----|----|----|----|
 | loading | 为 true 时，显示占位图。反之则直接展示插槽数据 | Boolean | - | false |
 | active | 是否展示动画效果 | Boolean | - | true |
 | avatar | 是否显示头像占位图 | Boolean / avatarProps | - | false |
 | title | 是否显示标题占位图 | Boolean / titleProps | - | true |
 | paragraph | 是否显示段落占位图 | Boolean / paragraphProps | - | true |

### avatarProps 头像对象属性

 | 参数 | 说明 | 类型 | 可选值 | 默认值 |
 |----|----|----|----|----|
 | size | 设置头像占位图的大小 | String | 'large' / 'small' / 'default | 'default' |
 | shape | 指定头像的形状 | String |  'circle' / 'square'| 'circle' |

### titleProps 标题对象属性

 | 参数 | 说明 | 类型 | 可选值 | 默认值 |
 |----|----|----|----|----|
 | width | 设置标题占位图的宽度 | String | - | - |

### paragraphProps 段落对象属性

 | 参数 | 说明 | 类型 | 可选值 | 默认值 |
 |----|----|----|----|----|
 | rows | 设置头像占位图的大小 | Number | - | 3 |
 | width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | String, Array | - | - |

### 插槽

| name | 说明 |
|-----|-----|
| default | 需要加载的数据列表 |




