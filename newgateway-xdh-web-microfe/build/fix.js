/**
 * 修复 node_modules 源码的bug
 */
const fs = require('fs')
const chalk = require('chalk')
const ELEMENT_UI_FILE = 'node_modules/element-ui/lib/element-ui.common.js'
const AXIOS_FILE = 'node_modules/axios/lib/adapters/xhr.js'
const GOJS_FILE = 'node_modules/gojs/release/go.js'
const CONTEXTMENU_FILE = 'node_modules/v-contextmenu/src/components/Contextmenu.vue'

function fixElementUI() {
  try {
    let content = fs.readFileSync(ELEMENT_UI_FILE, 'utf-8')
    // flag1 与 flag2 互换位置
    const flag1 = `xhr.open('post', action, true);`
    const flag2 = `if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }`;
    if (content.includes('/*flag1*/')) {
      console.log(`fix ${ELEMENT_UI_FILE} ${chalk.yellow(`fixed`)}`)
      return
    }
    
    if (content.includes(flag1) && content.includes(flag2)) {
      content = content
        .replace(flag1, `/*flag1*/${flag1}/*flag1*/`)
        .replace(flag2, `/*flag2*/${flag2}/*flag2*/`)
      
      
      content = content.replace(`/*flag1*/${flag1}/*flag1*/`, `/*flag1*/${flag2}/*flag1*/`)
        .replace(`/*flag2*/${flag2}/*flag2*/`, `/*flag2*/${flag1}/*flag2*/`)
      
      fs.writeFileSync(ELEMENT_UI_FILE, content, 'utf-8')
      
      console.log(`fix ${ELEMENT_UI_FILE} ${chalk.green(`success`)}`)
    } else {
      console.log(`fix ${ELEMENT_UI_FILE} ${chalk.red(`fail`)}`)
    }
  } catch (e) {
    console.log(`fix ${ELEMENT_UI_FILE} ${chalk.red(`fail`)}`)
  }
}

function fixAxios() {
  try {
    let content = fs.readFileSync(AXIOS_FILE, 'utf-8')
    // flag1 移到 flag2 的前面
    const flag1 = `if (config.withCredentials) {
      request.withCredentials = true;
    }`
    const flag2 = `request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);`
    if (content.includes('/*flag2*/')) {
      console.log(`fix ${AXIOS_FILE} ${chalk.yellow(`fixed`)}`)
      return
    }
    if (content.includes(flag1) && content.includes(flag2)) {
      
      content = content
        .replace(flag1, `/*flag1*/${flag1}/*flag1*/`)
        .replace(flag2, `/*flag2*/${flag2}/*flag2*/`)
      
      content = content
        .replace(flag2, `${flag1} \n ${flag2}`)
        .replace(`/*flag1*/${flag1}/*flag1*/`, '')
      
      
      fs.writeFileSync(AXIOS_FILE, content, 'utf-8')
      
      console.log(`fix ${AXIOS_FILE} ${chalk.green(`success`)}`)
    } else {
      console.log(`fix ${AXIOS_FILE} ${chalk.red(`fail`)}`)
    }
  } catch (e) {
    console.log(`fix ${AXIOS_FILE} ${chalk.red(`fail`)}`)
  }
}

function fixGojs() {
  try {
    let content = fs.readFileSync(GOJS_FILE, 'utf-8')
    if (content.includes('/*flag*/')) {
      console.log(`fix ${GOJS_FILE} ${chalk.yellow(`fixed`)}`)
      return
    }
    // 破解gojs
    const flag = '7eba17a4ca3b1a8346'
    const index = content.indexOf(flag)
    if (index > 0) {
      const start = index - 8, end = index + 33 + flag.length
      const section = content.substring(start, end)
      content = content.replace(section, `function(){return true;};/*flag*/`)
      fs.writeFileSync(GOJS_FILE, content, 'utf-8')
      
      console.log(`fix ${GOJS_FILE} ${chalk.green(`success`)}`)
    } else {
      console.log(`fix ${GOJS_FILE} ${chalk.red(`fail`)}`)
    }
  } catch (e) {
    console.log(`fix ${GOJS_FILE} ${chalk.red(`fail`)}`)
  }
}

function fixVContextMenu() {
  const minTopExp = `contextmenuPosition.top = Math.max(contextmenuPosition.top, 0)`
  const minLeftExp = `contextmenuPosition.left = Math.max(contextmenuPosition.left, 0)`
  try {
    let content = fs.readFileSync(CONTEXTMENU_FILE, 'utf-8')
    const editTopTarget = 'contextmenuPosition.top -= contextmenuHeight'
    const editLeftTarget = 'contextmenuPosition.left -= contextmenuWidth'
    if (content.includes('/* modify */')) {
      console.log(`fix ${CONTEXTMENU_FILE} ${chalk.yellow(`fixed`)}`)
      return
    }
    content = content
    .replace(editTopTarget,
      `/* modify */
        ${editTopTarget}
        ${minTopExp}
      /* modify */`
    )
    .replace(editLeftTarget,
      `/* modify */
        ${editLeftTarget}
        ${minLeftExp}
      /* modify */`
    )
    fs.writeFileSync(CONTEXTMENU_FILE, content, 'utf-8')
    console.log(`fix ${CONTEXTMENU_FILE} ${chalk.green(`success`)}`)
  } catch (e) {
    console.log(`fix ${CONTEXTMENU_FILE} ${chalk.red(`fail`)}`)
  }
}

fixElementUI()
fixAxios()
fixGojs()
fixVContextMenu()
