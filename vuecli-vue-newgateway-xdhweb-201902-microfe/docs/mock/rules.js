import rules from '../base/rules'
export default [
  ...rules,
  {
    url: '/demo/api/list',
    params: {},
    template: {
      code: 0,
      message: '',
      data: {
        page: '{{page}}',
        limit: '{{limit}}',
        total: 1000,
        'list|{{limit}}': [{
          'id': '@guid',
          'date': '@date',
          'name': '@cname',
          'title': '@ctitle'
        }]
      }
    }
  }
]
