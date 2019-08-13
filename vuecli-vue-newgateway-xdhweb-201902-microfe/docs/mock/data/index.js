import Element from './element'
import Guide from './guide'
import Libs from './libs'
import Nav from './nav'
import Widgets from './widgets'
import Extension from './extension'
import Pages from './pages'
import Animate from './animate'
import Tools from './tools'
import packageJSON from '../../../package'
import logo from '../../assets/xdh.png'
import {traverse} from '@/utils/util'

function getCount(array) {
  let count = 0;
  traverse(array, false, function (item) {
    if (!(item.children && item.children.length > 0)) {
      ++count
    }
  })
  return count
}

function sort(array) {
  array.forEach(item => {
    if (item.children && item.children.length > 0) {
      item.children.sort((a, b) => a.text > b.text)
    }
  })
  return array
}

export default {
  info: {
    copyright: `新德汇 前端开发部 出品 @ 2018 [ v${packageJSON.version} ]`,
    logo: logo,
    title: `新德汇前端基础框架 v${packageJSON.version.split('-')[0]}`,
  },
  guide: {
    items: Guide,
    count: getCount(Guide)
  },
  element: {
    items: Element,
    count: getCount(Element)
  },
  libs: {
    items: Libs,
    count: getCount(Libs)
  },
  nav: {
    items: Nav,
    count: getCount(Nav)
  },
  widgets: {
    items: sort(Widgets),
    count: getCount(Widgets)
  },
  utils: {
    items: [],
    count: 24
  },
  extension: {
    items: Extension,
    count: getCount(Extension)
  },
  pages: {
    items: Pages,
    count: getCount(Pages)
  },
  tools: {
    items: Tools,
    count: getCount(Tools)
  },
  animate: Animate
}
