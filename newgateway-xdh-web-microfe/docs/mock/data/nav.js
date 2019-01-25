export default [{
  id: '/guide/readme',
  text: '开发指南',
  icon: 'iconfont icon-star-on'
}, {
  id: '/element/layout',
  text: 'ElementUI',
  icon: 'el-icon-location'
}, {
  id: '/widgets/base/color',
  text: '组件库',
  icon: 'iconfont icon-target'
}, {
  id: '/libs/vue-cron',
  text: '第三方类库',
  icon: 'iconfont icon-flask'
}, {
  id: '/src',
  text: '技术文档',
  icon: 'el-icon-document',
  children: [
    {
      id: '/src/widgets%2Findex.html',
      text: 'Widgets'
    }, {
      id: '/src/extension%2Findex.html',
      text: 'Extension'
    }, {
      id: '/src/utils%2Findex.html',
      text: 'Utils'
    }, {
      id: '/src/project%2Findex.html',
      text: 'Project'
    }, {
      id: '/src/schemas%2Findex.html',
      text: 'Schemas'
    }, {
      id: '/src/gojs%2Findex.html',
      text: 'GoJS'
    }
  ]
}]
