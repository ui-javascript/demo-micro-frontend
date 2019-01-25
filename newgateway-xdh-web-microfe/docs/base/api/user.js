/*! create time: 2018-3-8 15:43:27 */

// ajax
import ajax from '@/utils/ajax'

/**
 * FETCH_USER
 * @type {string}
 */
export const FETCH_USER = '/demo/api/user/list'

/**
 * fetchUser
 * @param data
 * @returns {promise}
 */
export const fetchUser = function (data) {
  return ajax({
    method: 'get',
    data: data,
    url: FETCH_USER
  })
}

/**
 * GET_USER
 * @type {string}
 */
export const GET_USER = '/demo/api/user/info/:id'

/**
 * getUser
 * @param id
 * @param data
 * @returns {promise}
 */
export const getUser = function (id, data) {
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: GET_USER
  })
}

/**
 * ADD_USER
 * @type {string}
 */
export const ADD_USER = '/demo/api/user/save'

/**
 * addUser
 * @param data
 * @returns {promise}
 */
export const addUser = function (data) {
  return ajax({
    method: 'post',
    data: data,
    url: ADD_USER
  })
}

/**
 * UPDATE_USER
 * @type {string}
 */
export const UPDATE_USER = '/demo/api/user/update'

/**
 * updateUser
 * @param data
 * @returns {promise}
 */
export const updateUser = function (data) {
  return ajax({
    method: 'post',
    data: data,
    url: UPDATE_USER
  })
}

/**
 * REMOVE_USER
 * @type {string}
 */
export const REMOVE_USER = '/demo/api/user/delete/:id'

/**
 * removeUser
 * @param id
 * @param data
 * @returns {promise}
 */
export const removeUser = function (id, data) {
  return ajax({
    method: 'get',
    params: {
      id
    },
    data: data,
    url: REMOVE_USER
  })
}
