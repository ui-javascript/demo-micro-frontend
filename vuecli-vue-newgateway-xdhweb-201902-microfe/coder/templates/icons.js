const _ = require('lodash')

module.exports = _.template(`
function fixIconfont (elArray, array) {
  return elArray.concat(array.map(item => {
    return 'iconfont icon-' + item
  }))
}
export default fixIconfont(<%=elItems%>, <%=items%>)
`)
