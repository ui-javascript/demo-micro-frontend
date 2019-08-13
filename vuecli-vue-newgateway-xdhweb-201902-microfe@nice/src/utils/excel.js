/**
 * Excel 文件读写模块
 * @module utils/excel
 */

import XLSX from 'xlsx';

function setAutoWidth(ws, data) {
  /* set worksheet max width per col */
  const colWidth = data.map(row => row.map(val => {
    /* if null/undefined */
    if (val === null) {
      return {'wch': 10};
      /* if chinese */
    } else if (val.toString().charCodeAt(0) > 255) {
      return {'wch': val.toString().length * 2};
    } else {
      return {'wch': val.toString().length};
    }
  }))
  /* start in the first row */
  let result = colWidth[0];
  for (let i = 1; i < colWidth.length; i++) {
    for (let j = 0; j < colWidth[i].length; j++) {
      if (result[j]['wch'] < colWidth[i][j]['wch']) {
        result[j]['wch'] = colWidth[i][j]['wch'];
      }
    }
  }
  ws['!cols'] = result;
}

function jsonToArray(key, jsonData) {
  return jsonData.map(v => key.map(j => {
    return v[j]
  }));
}

// fix data,return string
function fixData(data) {
  let o = ''
  let l = 0
  const w = 10240
  for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
  o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
  return o
}


// get head from excel file,return array
function getHeaderRow(sheet) {
  const headers = []
  const range = XLSX.utils.decode_range(sheet['!ref'])
  let C
  const R = range.s.r
  /* start in the first row */
  for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({c: C, r: R})]
    /* find the cell in the first row */
    let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
    headers.push(hdr)
  }
  return headers
}

/**
 * 导出文件
 * @param {array} key 列标识数组
 * @param {array} title 列文本数组
 * @param {array} data 行数据
 * @param {string} fileName 导出文件名，不含扩展名
 * @param {boolean} autoWidth 是否设置自动列宽度
 * @return {Promise<any>}
 */
export const write = ({key, data, title, fileName, autoWidth}) => {
  return new Promise(resolve => {
    const wb = XLSX.utils.book_new();
    const arr = jsonToArray(key, data);
    arr.unshift(title);
    const ws = XLSX.utils.aoa_to_sheet(arr);
    if (autoWidth) {
      setAutoWidth(ws, arr);
    }
    XLSX.utils.book_append_sheet(wb, ws, fileName);
    XLSX.writeFile(wb, fileName + '.xlsx');
    resolve()
  })
}

/**
 * 文件转换成JSON数据
 * @param {Object|String} data 文件流
 * @param {String} type 数据类型 array 或 base64
 * @return {{header: Array, results: any[] | * | any[][]}}
 */
export const read = (data, type) => {
  /* if type == 'base64' must fix data first */
  let workbook
  if (type === 'base64') {
    const fixedData = fixData(data)
    workbook = XLSX.read(btoa(fixedData), {type: 'base64'})
  } else {
    workbook = XLSX.read(data, {type: type});
  }
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  const header = getHeaderRow(worksheet);
  const results = XLSX.utils.sheet_to_json(worksheet);
  return {header, results};
}

/**
 * 读取文件
 * @param {Object} file 文件框响应的文件对象
 * @param {object} options 参数选项，可侦听回调函数，如：onloadstart / onprogress / onerror / onload
 * @return {Promise<any>}
 */
export function reader(file, options = {}) {
  const reader = new FileReader()
  reader.readAsArrayBuffer(file)
  return new Promise((resolve, reject) => {
    const opt = {
      ...options,
      onerror(e) {
        options.onerror && options.onerror(e)
        reject(e)
      },
      onload(e) {
        const reuslt = e.target.result
        options.onload && options.onload(reuslt)
        resolve(reuslt)
      }
    }
    Object.keys(opt).forEach(key => {
      reader[key] = opt[key]
    })
  })
  
}

export default {write, read, reader}
