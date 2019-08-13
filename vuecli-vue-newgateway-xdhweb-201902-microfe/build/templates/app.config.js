const _ = require('lodash')
module.exports = _.template(`
module.exports = {
  // 站点名称标识
  name: '<%=name%>',
  
  // 部署访问目录
  baseUrl: '<%=baseUrl%>',
  
  // 开发环境启动服务端口号
  port: <%=port%>,
  
  // 打包发布目录
  outDir: '<%=outDir%>',
  
  // 扩展的静态资源目录
  extendContentBase: []
}
`)
