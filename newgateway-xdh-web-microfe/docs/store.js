import Vue from 'vue'
import Vuex from 'vuex'
import modules from './base/modules'
// import mock from '@/utils/mock'
import {getAsyncImageMock} from './mock/data/random-img/index'

const asyncImgAPI = function(query) {
  return new Promise(function(res) {
    setTimeout(() => {
      let img = getAsyncImageMock(query)
      res(img)
    }, 500)
  })
}

Vue.use(Vuex)
const asyncimg = {
  state: {
    imgurl: null
    // model: null
  },
  mutations: {
    GET_ASYNC_IMAGE(state, payload) {
      state.imgurl = payload.model
    }
  },
  actions: {
    GET_ASYNC_IMAGE({commit}, {data} = {}) {
      // console.log('asyncImgAPI', asyncImgAPI)
      return asyncImgAPI(data).then((res) => {
        commit({
          type: 'GET_ASYNC_IMAGE',
          model: res.data
        })
        return res.data
      })
    }
  }
}
export default new Vuex.Store({
  modules: {...modules, asyncimg},
  state: {},
  mutations: {},
  actions: {}
})
