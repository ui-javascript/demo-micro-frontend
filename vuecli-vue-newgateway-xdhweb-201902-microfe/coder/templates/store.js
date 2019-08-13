const _ = require('lodash')
module.exports = _.template(`
/**
 *  <%=cname%> store module
 *  @module base/store/<%=name%>
 *  @author coder
 */
 
import { <%=importTypeArray.join(', ')%> } from '@/base/types'
import { <%=importApiArray.join(', ')%> } from '@/base/api/<%=kebabCaseName%>'
// store module
export default {
  /**
   * 状态数据
   * @member state
 <%_.each(customStateArray, function(item){ %>
   * @property {*} <%=item.state%> <%=item.title%>响应数据
 <%})%>
   * @property {Array} <%=list%> 获取<%=cname%>列表响应数据
   * @property {Number} <%=page%> 获取<%=cname%>列表响应页码
   * @property {Number} <%=limit%> 获取<%=cname%>列表页大小，每页记录条数
   * @property {Number} <%=total%> 获取<%=cname%>列表数据记录总条数
   * @property {Object} <%=model%> 获取<%=cname%>单条记录
   */
  state: {
   <%_.each(customStateArray, function(item){ %>
     <%=item.state%>: null,
   <%})%>
    <%=list%>: [],
    <%=page%>: null,
    <%=limit%>: null,
    <%=total%>: 0,
    <%=model%>: null
  },
  mutations: {
    <%_.each(items, function(item, i){%>
      <%if(i>0){%>,<%}%>
      
      <%if(item.methodType == 'fetch'){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {Array} [payload.<%=list%>] 数据列表
       * @param {number} [payload.<%=page%>=0] 数据页码
       * @param {number} [payload.<%=limit%>=0] 每页条数
       * @param {number} [payload.<%=total%>=0] 总记录数
       */
        [<%=item.NAME%>](state, payload) {
          state.<%=list%> = payload.<%=list%> || [];
          state.<%=page%> = payload.<%=page%> || 0;
          state.<%=limit%> = payload.<%=limit%> || 0;
          state.<%=total%> = payload.<%=total%> || 0;
        }
      <%}%>
      
      <%if(item.methodType == 'add'){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {number} [payload.index] 新增到列表的位置索引，默认最近到列表最后
       * @param {object} payload.<%=model%> 新增的实体对象
       */
        [<%=item.NAME%>](state, payload) {
          if(payload.index !== undefined) {
            state.<%=list%>.splice(payload.index, 0, payload.<%=model%>)
          }else {
            state.<%=list%>.push(payload.<%=model%>);
          }
          state.<%=total%> += 1
        }
      <%}%>
      
      <%if(item.methodType == 'update'){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不更新源列表数据
       * @param {object} payload.<%=model%> 更新的实体对象
       */
        [<%=item.NAME%>](state, payload) {
          if(payload.index !== undefined) {
            state.<%=list%>.splice(payload.index, 1, payload.<%=model%>)
          }
        }
      <%}%>
      
      <%if(item.methodType == 'remove'){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
       */
        [<%=item.NAME%>](state, payload) {
          if(payload.index !== undefined) {
            state.<%=list%>.splice(payload.index, 1)
          }
          state.<%=total%> -= 1
        }
      <%}%>
      
      <%if(item.methodType == 'get'){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {object} payload.<%=model%> 实体对象
       */
        [<%=item.NAME%>](state, payload) {
          state.<%=model%> = payload.<%=model%>
        }
      <%}%>
      
      <%if(item.methodType == 'batch'){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {number[]} [payload.indexes] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
       */
        [<%=item.NAME%>](state, payload) {
          state.<%=list%> = state.<%=list%>.filter((item, index) => !payload.indexes.includes(index));
          state.<%=total%> -= payload.indexes.length
        }
      <%}%>
      
      
      <%if(['fetch','get','add','update','remove','batch'].indexOf(item.methodType)==-1){%>
      /**
       * <%=item.title%>
       * @function [mutations]<%=item.NAME%>
       * @param {object} state vuex状态
       * @param {object} payload 负载数据
       * @param {object} payload.<%=item.state%> 需保存的数据
       */
       [<%=item.NAME%>](state, payload) {
          state.<%=item.state%> = payload.<%=item.state%>
        }
      <%}%>
      
    <%})%>
    
  },
  actions: {
  
    <%_.each(items, function(item, i){%>
      <%if(i>0){%>,<%}%>
      <%if(item.methodType == 'fetch'){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
     * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit}, {
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
        } = {}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              <%=list%>: res.<%=list%>,
              <%=page%>: Number.parseInt(res.<%=page%>),
              <%=limit%>: Number.parseInt(res.<%=limit%>),
              <%=total%>: Number.parseInt(res.<%=total%>)
            })
            return res
          })
        }
      <%}%>
      
      <%if(item.methodType == 'add'){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     * @param {number} [payload.index] 新增到列表的位置索引，默认最近到列表最后
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
     * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit}, {
              <%_.each(item.params, function(param){%>
                <%=param%>,
              <%})%>
              <%=item.ajaxParam%>,
              index
              <%if(item.cache){%>,cache<%}%>
        } = {}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              <%=model%>: Object.assign({}, <%=item.ajaxParam%>, res),
              index: index
            })
            return res
          })
        }
      <%}%>
      
      <%if(item.methodType == 'update'){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不更新实体在源列表数据
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
     * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit, state}, {
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>,
               index
               <%if(item.cache){%>,cache<%}%>
        }={}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              index: index,
              <%=model%>: Object.assign({}, state.<%=list%>[index], <%=item.ajaxParam%>, res)
            })
            return res
          })
        }
      <%}%>
      
      <%if(item.methodType == 'remove'){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     * @param {number} [payload.index] 源实体在列表的位置索引，如没有index，即不删除实体在源列表数据
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
     * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit}, {
              <%_.each(item.params, function(param){%>
                <%=param%>,
              <%})%>
               <%=item.ajaxParam%>,
               index
               <%if(item.cache){%>,cache<%}%>
        }={}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              index: index
            })
            return res
          })
        }
      <%}%>
      
      <%if(item.methodType == 'get'){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
      * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit}, {
              <%_.each(item.params, function(param){%>
                <%=param%>,
              <%})%>
              <%=item.ajaxParam%>
              <%if(item.cache){%>,cache<%}%>
        }={}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              <%=model%>: res
            })
            return res
          })
        }
      <%}%>
      
      <%if(item.methodType == 'batch'){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     * @param {number[]} [payload.indexes] 源实体在列表的位置索引，如没有indexes，即不删除实体在源列表数据
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
     * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit}, {
              <%_.each(item.params, function(param){%>
                <%=param%>,
              <%})%>
               <%=item.ajaxParam%>,
               indexes
               <%if(item.cache){%>,cache<%}%>
        }={}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
               <%=item.ajaxParam%>
               <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              indexes: indexes || []
            })
            return res
          })
        }
      <%}%>
      
      
      <%if(['fetch','get','add','update','remove', 'batch'].indexOf(item.methodType)==-1){%>
    /**
     * <%=item.title%>
     * @function [actions]<%=item.NAME%>
     * @param {object} context Store实例
     * @param {function} context.commit 提交mutation方法
     * @param {object} payload 负载数据对象
  <%_.each(item.params, function(param){%>
     * @param {string|number} payload.<%=param%>  URL路径参数数据<%=param%>
  <%})%>
     * @param {object} payload.<%=item.ajaxParam%> 请求发送数据<%=item.ajaxParam%>
     <%if(item.cache){%>
     * @param {object|boolean} payload.cache 缓存配置
     <%}%>
      * @returns {Promise} Promise实例
     */
        [<%=item.NAME%>]({commit}, {
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
              <%=item.ajaxParam%>
              <%if(item.cache){%>,cache<%}%>
        }={}) {
          return <%=item.name%>(
              <%_.each(item.params, function(param){%>
                 <%=param%>,
              <%})%>
              <%=item.ajaxParam%>
              <%if(item.cache){%>,cache<%}%>
          ).then(res => {
            commit({
              type: <%=item.NAME%>,
              <%=item.state%>: res
            })
            return res
          })
        }
      <%}%>
      
    <%})%>
  }
}
`)
