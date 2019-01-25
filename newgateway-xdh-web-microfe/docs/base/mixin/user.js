/*! build time: 2018-3-8 15:43:27 */

// fetchUser, getUser, addUser, updateUser, removeUser
import {
  fetchUser,
  getUser,
  addUser,
  updateUser,
  removeUser
} from '../api/user'

// mixin
export default {
  data() {
    return {
      user: {
        list: [],
        page: null,
        limit: null,
        total: 0,
        model: null
      }
    }
  },
  methods: {
    fetchUser(data) {
      return fetchUser(data).then(res => {
        this.user.list = res.list
        this.user.page = Number.parseInt(res.page)
        this.user.limit = Number.parseInt(res.limit)
        this.user.total = Number.parseInt(res.total)
        return res
      })
    },
    getUser(id, data) {
      return getUser(id, data).then(res => {
        this.user.model = Object.assign({}, data, res || {})
        return res
      })
    },
    addUser(data, index) {
      return addUser(data, index).then(res => {
        this.user.model = Object.assign({}, data, res || {})
        if (index !== undefined) {
          this.user.list.splice(index, 0, this.user.model)
        } else {
          this.user.list.push(this.user.model);
        }
        return res
      })
    },
    updateUser(data, index) {
      return updateUser(data, index).then(res => {
        this.user.model = Object.assign({}, data, res || {})
        if (index !== undefined) {
          this.user.list.splice(index, 1, this.user.model)
        }
        return res
      })
    },
    removeUser(id, data, index) {
      return removeUser(id, data, index).then(res => {
        if (index !== undefined) {
          this.user.list.splice(index, 1)
        }
        return res
      })
    }
  }
}
