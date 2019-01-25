/*! create time: 2018-3-8 15:43:27 */

// FETCH_USER, GET_USER, ADD_USER, UPDATE_USER, REMOVE_USER
import {
  FETCH_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '../api/user'

// Mock
export default [{
  title: 'FETCH_USER',
  url: FETCH_USER,
  params: {
    page: 1,
    limit: 10
  },
  template: {
    code: 0,
    data: {
      page: '{{page}}',
      limit: '{{limit}}',
      total: 1000,
      'list|{{limit}}': [{
        'id': '@id',
        'name': '@cname',
        'date': '@date',
        'title': '@ctitle'
      }]
    }
  }
}, {
  title: 'GET_USER',
  url: GET_USER,
  params: {},
  template: {
    code: 0,
    message: '',
    data: {
      'id': '@id',
      'name': '@cname',
      'date': '@date',
      'title': '@ctitle'
    }
  }
}, {
  title: 'ADD_USER',
  url: ADD_USER,
  params: {},
  template: {
    code: 0,
    message: '添加成功',
    data: {
      'id': '@id'
    }
  }
}, {
  title: 'UPDATE_USER',
  url: UPDATE_USER,
  params: {},
  template: {
    code: 0,
    message: '更新成功',
    data: true
  }
}, {
  title: 'REMOVE_USER',
  url: REMOVE_USER,
  params: {},
  template: {
    code: 0,
    message: '删除成功',
    data: true
  }
}]
