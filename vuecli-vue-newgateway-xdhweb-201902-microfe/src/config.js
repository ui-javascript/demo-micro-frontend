// 静态配置对象
const staticConfig = window.__config__ || {}

// debug 开关，可以打印日志, 只对 production 环境有效，开发环境默认是开启debug
export const DE_BUG = false

// 请求响应成功code
export const AJAX_SUCCESS = 0

// 请求地址前缀
export const API_HOST = staticConfig['API_HOST'] || 'http://127.0.0.1:8080'


// 规范标准请求参数名称对照表, 可以按需设置
export const STANDARD_WORD_MAP = {
  // code: 'code',
  // page: 'page',
  // total: 'total',
  // data:'data',
  // list: 'list',
  // pages: 'pages',
  // limit: 'limit'
}

// 对 STANDARD_WORD_MAP 进行反转映射
export const TO_STANDARD_WORD_MAP = (function (map) {
  let result = {}
  Object.entries(map).forEach(function (arr) {
    result[arr[1]] = arr[0]
  })
  return result
})(STANDARD_WORD_MAP)
