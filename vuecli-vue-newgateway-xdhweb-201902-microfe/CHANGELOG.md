## 更新日志

### 3.0.0
*2018-10-20*

#### 新特性
- 升级vue-cli3
- 分离element-ui主题打包
- 生产环境自动启动dll预打包
- 增加utils/theme.js 和 utils/skin.js 支持对主题颜色和皮肤的切换

#### 新组件

#### 修复


### 2.1.10
*2018-09-17*
- element-ui 更新到 2.4.7
- xdh-list-panel 增加 on-scroll事件，支持滚动到底部、顶部触发事件
- ajax和代码生成器增加对http转websocket的请求支持
- xdh-anchor 定位bug
- xdh-tabs content 支持html格式
- 修复 list-panel 分页高度错误
- Vue.config.devtools 设置为 true
- xdh-layout main 删除高度 100%, 兼容 chrome 49
- xdh-layout、xdh-list-panel main 高度fixed 子元素height：100% 无效 bug
- xdh-filter-panel 点击重置按钮，默认值被清空， 解决方案：重置按钮删除native-type="reset"
### 2.1.9
*2018-09-03*
- openlayers.js 增加创建文本方法， modify 增加回调函数
- 新增 xdh-anchor组件
- xdh-go 支持nodes 和 links 数据watch
- 新增 xdh-tag-canvas 组件
- xdh-list-panel 支持 title 插槽
- xdh-table 增加 on-reach-top 事件。
- utils/util.js新增 guid/range/rangeLeft/rangeFixed 方法
- xdh-form 修复新增表单项目，已输入的内容会清空的bug
- utils/lunar.js 增加根据日期访问查询节假日函数
- xdh-layout在没有定义collapsed slots时也可以对内容 resizable

### 2.1.8
*2018-08-17*
- utils/ajax.js 支持缓存配置
- 代码生成器支持缓存配置
- xdh-table增加 on-scroll 事件

### 2.1.7
*2018-08-15*
- 更新依赖
```tip
"animate.css": "^3.7.0"
"gojs": "^1.8.27",
"v-contextmenu": "^2.8.0",
"vue": "^2.5.17",
"node-sass": "^4.9.3",
"vue-loader": "^15.3.0",
"vue-style-loader": "^4.1.2",
"vue-template-compiler": "^2.5.17",
"webpack": "^4.16.5",
```
- 修复xdh-window 窗口main高度没撑开的bug
- 修复xdh-scroll滚动bug
- 水印组件支持多行文字

### 2.1.6
*2018-08-13*
- 新增xdh-caldenar组件
- 新增xdh-map组件
- 修复xdh-table 数据为0时，显示不正确问题
- element-ui 更新到 2.4.6

### 2.1.5
*2018-08-02*
- 更新webpack 4.16.3 、webpack-cli 3.1.0 、vue-loader 15.2.6
- upgrade命令支持package.json的site script 命令还原

### 2.1.4
*2018-08-01*
- 更换图标库
- 更新框架文档，新增 开发风格指南
- 修复表格列拖拽在异步数据时无响应问题

### 2.1.3
*2018-07-30*
- 新增 Echart 流程图 配置组件封装
- 优化 xdh-print
- list-panel 插槽支持height参数
- slide-panel 是否创建dom到制定dom下，支持元素Id 和 元素对象
- element-ui 更新到2.4.5

### 2.1.2
*2018-07-24*
- selecttext指令支持事件通知
- 去掉打包时文件过大的警告
- xdh-layout 组件增加折叠支持
- 新增xdh-tree组件

### 2.1.1
*2018-07-20*
- 修复工程与2.0.0兼容问题
- 新增xdh-slide-panel 组件
- 新增echarts 4套主题
- 修复xdh-scroll组件height属性支持字符串问题
- xdh-panel 增加 border 参数
- xdh-layout 删除默认最小高度100%
- xdh-window组件修复垂直居中bug


### 2.1.0
*2018-07-11*
#### 新特性
- 重构项目工程，打包工具升级到webpack4.x
- 支持系统静态文件配置
- 支持多站点、站点间代码可共享
- 重新整理字体图标库
#### 新增组件
- 增加加密、解密模块 crypto-js
- 新增xdh-table组件，支持行、列拖拽排序、无限滚动加载
- 新增xdh-watermark水印组件
- 新增xdh-print打印组件
- 新增xdh-header网站头部组件
- 新增xdh-image-text图文排版组件
- 新增xdh-marquee 无缝跑马灯滚动组件
- 新增截图组件 xdh-capture
- 新增第三方组件 vue-grid-layout
- 新增cookie.js模块
#### 优化和修复bug
- xdh-echarts 支持 EChartsGL、options支持函数类型
- xdh-nav-tabs 支持label插槽
- xdh-scroll 修复拖拽滚动条不能响应事件问题
- resizable.js 修复位置获取不准确问题
- 表单验证提示信息支持定位展示
- 文档站点demo支持打包发布
- 支持命令 npm run build --report 和 npm run build --preview 查看打包报告和预览打包后效果
- ElementUI 更新到 2.4.3

### 2.0.0-alpha.3
*2018-05-22*
- ElementUI 更新到 2.3.9

### 2.0.0-alpha.2
*2018-05-17*
- 支持多主题独立打包
- 新增富文本编辑器组件
- 新增countup 组件
- ElementUI 更新到 2.3.8

### 2.0.0-alpha.1

*2018-04-26*

#### 新特性
- 代码生成器
  - 支持标准的RESTful规范
  - 支持生成批量删除方法
  - 生成代码带jsdoc注释
- Widgets
  - Curd 增加对操作按钮的disabled控制
  - 新增EChart组件
  - 新增Go组件
  - 新增自定义表单组件Form
  - el-tree支持节点连线显示效果
  - 新增Tabs，在el-tabs基础上支持可拖拽排序和放置，异步加载组件
- Utils
  - 新增tween.js 处理缓动动画函数和各类算法
  - 新增util.js 包含防抖和节流处理函数
  - download.js 支持post方式下载文件
- Examples
  - 新增示例、文档站点。支持对基础框架、项目代码通过jsdoc注释生成文档


#### 修复
- 代码生成器
  - 修复删除、增加、批量删除方法没有更新total的问题
- Widgets
  - 修复 Loading 在某些情况下报错问题
  - 修复由于ElementUI resize-event模块更换了造成的xdh-pager报错问题

#### 第三方类库更新
- ElementUI 更新到 2.3.7
- html2canvas 更新到 1.0.0-alpha.12
