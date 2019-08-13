/**
 * 模拟一个树结构
 * @param Mock Mock实例
 * @param url 请求的url
 * @param query 查询参数对象
 * @returns {{code: number, data: {list}, message: string}}
 */

export const createTree = function (Mock, url, query) {
  let root = Mock.mock({
    'list|30': [{
      'id|+1': 1,
      'label': '@ctitle',
      'parentId': null
    }]
  })
  let data = Mock.mock({
    'list|100': [{
      'id|+1': 31,
      'label': '@ctitle',
      'parentId': function () {
        return Math.floor(Math.random() * 50)
      }
    }]
  })
  return {code: 0, data: {list: root.list.concat(data.list)}, message: ''}
}
