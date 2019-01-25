/*! build time: 2018-3-8 15:44:50 */

// FETCH_USER, GET_USER, ADD_USER, UPDATE_USER, REMOVE_USER
import {
  FETCH_USER,
  GET_USER,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER
} from '../types'

// fetchUser, getUser, addUser, updateUser, removeUser
import {
  fetchUser,
  getUser,
  addUser,
  updateUser,
  removeUser
} from '../api/user'

// store module
export default {
  state: {
    list: [],
    page: null,
    limit: null,
    total: 0,
    model: null
  },
  mutations: {
    [FETCH_USER](state, payload) {
      state.list = payload.list;
      state.page = payload.page;
      state.limit = payload.limit;
      state.total = payload.total;
    },
    [GET_USER](state, payload) {
      state.model = payload.model
    },
    [ADD_USER](state, payload) {
      if (payload.index !== undefined) {
        state.list.splice(payload.index, 0, payload.model)
      } else {
        state.list.push(payload.model);
      }
    },
    [UPDATE_USER](state, payload) {
      if (payload.index !== undefined) {
        state.list.splice(payload.index, 1, payload.model)
      }
    },
    [REMOVE_USER](state, payload) {
      if (payload.index !== undefined) {
        state.list.splice(payload.index, 1)
      }
    }
  },
  actions: {
    [FETCH_USER]({
      commit
    }, {
      data
    } = {}) {
      return fetchUser(data).then(res => {
        commit({
          type: FETCH_USER,
          list: res.list,
          page: Number.parseInt(res.page),
          limit: Number.parseInt(res.limit),
          total: Number.parseInt(res.total)
        })
        return res
      })
    },
    [GET_USER]({
      commit
    }, {
      id,
      data
    } = {}) {
      return getUser(id, data).then(res => {
        commit({
          type: GET_USER,
          model: res
        })
        return res
      })
    },
    [ADD_USER]({
      commit
    }, {
      data,
      index
    } = {}) {
      return addUser(data).then(res => {
        commit({
          type: ADD_USER,
          model: Object.assign({}, data, res),
          index: index
        })
        return res
      })
    },
    [UPDATE_USER]({
      commit,
      state
    }, {
      data,
      index
    } = {}) {
      return updateUser(data).then(res => {
        commit({
          type: UPDATE_USER,
          index: index,
          model: Object.assign({}, state.list[index], data, res)
        })
        return res
      })
    },
    [REMOVE_USER]({
      commit
    }, {
      id,
      data,
      index
    } = {}) {
      return removeUser(id, data).then(res => {
        commit({
          type: REMOVE_USER,
          index: index
        })
        return res
      })
    }
  }
}
