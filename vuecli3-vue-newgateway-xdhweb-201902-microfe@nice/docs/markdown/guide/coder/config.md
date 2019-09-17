
## 全局配置

当后端提供的接口与约定的规范不一致的时候，可以通过配置进行相应的调整做适配，但建议还是按前端建议的约定规范。

:::tip
注意：不是任何接口都能通过全局来适配, 要具体问题具体分析。 全局配置的文件路径：`/coder/config.js`
:::



## 常用的配置项

### pathPrefix

配置api请求地址前缀, String类型， 默认为空字符串，即请求和页面所在的服务器， 如果后台服务接口与页面部署的服务器不一样时，可以全局配置，也可以在实体配置prefix选项。

:::tip
注意：配置pathPrefix的值必须要在 `/src/config.js` 中有定义，否则报错。
:::


### methodTypeMap

数据请求类型对应http请求方法的映射， 默认值：
```json
 {
    fetch: 'get',
    get: 'get',
    add: 'post',
    update: 'post',
    remove: 'get'
    batch: 'post'
  }
```

### methodSuffixMap

数据请求类型对应api地址的后缀映射， 默认值：
```json
{
    fetch: '/list',
    get: '/info/:id',
    add: '/save',
    update: '/update',
    remove: '/delete/:id',
    batch: '/remove'
}
```
### methodCommentMap
请求方法对应的中文注释
```json
{
    fetch: '获取<%=cname%>列表',
    get: '获取<%=cname%>单条记录',
    add: '新增<%=cname%>',
    update: '更新<%=cname%>',
    remove: '删除<%=cname%>',
    batch: '批量删除<%=cname%>'
}
 ```

### batchEnabled

是否全局开启生成批量删除，默认值：true
这个设置是新增的，在老版本下缺少这个配置，就是false


### stateListName

store 或 mixin 状态保存列表的字段名称，和接口响应数据对应， 默认：list

### stateModelName

store 或 mixin 状态保存单个实体字段名称，默认：model

### statePageName

store 或 mixin 状态保当前页码的字段名称，和接口响应数据对应， 默认：page

### statePageSizeName

store 或 mixin 状态保存页大小的字段名称，和接口响应数据对应，默认：limit

### stateTotalName

store 或 mixin 状态保存数据总条数字段名称，和接口响应数据对应，默认：total

### mockDataName

Mock响应数据字段名称，默认：data

### mockCodeName

Mock响应状态字段名称，默认：code

### mockMsgName

Mock响应信息说明字段名称，默认：msg

### successCodeValue

Mock响应成功时的code值，默认：0

