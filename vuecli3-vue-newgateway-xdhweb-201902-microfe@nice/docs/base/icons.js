function fixIconfont(array) {
  return array.map(item => {
    return 'iconfont icon-' + item
  })
}

export default [
  {
    label: 'elementUI图标',
    list: [
      'el-icon-info', 'el-icon-error', 'el-icon-success', 'el-icon-warning', 'el-icon-question',
      'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up',
      'el-icon-caret-left', 'el-icon-caret-bottom', 'el-icon-caret-top', 'el-icon-caret-right', 'el-icon-d-arrow-left',
      'el-icon-d-arrow-right', 'el-icon-minus', 'el-icon-plus', 'el-icon-remove', 'el-icon-circle-plus',
      'el-icon-remove-outline', 'el-icon-circle-plus-outline', 'el-icon-close', 'el-icon-check',
      'el-icon-circle-close', 'el-icon-circle-check', 'el-icon-circle-close-outline', 'el-icon-circle-check-outline',
      'el-icon-zoom-out', 'el-icon-zoom-in', 'el-icon-d-caret', 'el-icon-sort', 'el-icon-sort-down', 'el-icon-sort-up',
      'el-icon-tickets', 'el-icon-document', 'el-icon-goods', 'el-icon-sold-out', 'el-icon-news', 'el-icon-message',
      'el-icon-date', 'el-icon-printer', 'el-icon-time', 'el-icon-bell', 'el-icon-mobile-phone', 'el-icon-service',
      'el-icon-view', 'el-icon-menu', 'el-icon-more', 'el-icon-more-outline', 'el-icon-star-on', 'el-icon-star-off',
      'el-icon-location', 'el-icon-location-outline', 'el-icon-phone', 'el-icon-phone-outline', 'el-icon-picture',
      'el-icon-picture-outline', 'el-icon-delete', 'el-icon-search', 'el-icon-edit', 'el-icon-edit-outline', 'el-icon-rank',
      'el-icon-refresh', 'el-icon-share', 'el-icon-setting', 'el-icon-upload', 'el-icon-upload2', 'el-icon-download',
      'el-icon-loading'
    ]
  },
  {
    label: 'web应用',
    list: fixIconfont([
      'earth','area-map','heart','star-on', 'star-half','adjust', 'anchor', 'bullseye','target','paper','drip', 'trophy',
      'speaker','filter','flask','lightning', 'code-branch', 'plug','dropper','light','compass',
      'camera-old','life-buoy','umbrella','tableware','coffee','doctor-hat','gift','express-package',
      'briefcase','bag','bag-v2', 'survival', 'check'
    ])
  },
  {
    label: '分析研判公安物品类',
    list: fixIconfont([
      'brain','cooperation','sign-review', 'alarm', 'alarm','balance','split-screen-compare',
      'evaluation','copy-comparison', 'collision','manage-circuit', 'collaboration', 'collaboration-system',
      'Tandem','relation','synthetic-combat', 'teamwork', 'cuff', 'firearms','hammer', 'shield', 'security-shield',
      'badge','danger'
    ])
  },
  {
    label: 'web基本',
    list: fixIconfont([
      'home','internet', 'gantt','sketchpad-theme','map-site', 'row','gearmore','gearset', 'spanner', 'wrench', 'refresh',
      'load','dashboard', 'loading', 'login', 'exit','bedbug','component', 'components','cloud','cloud-link', 'cloud-upload', 'cloud-download',
      'inquiry', 'zoomout', 'enlarge','accurate-search','cloud-search', 'rank','collapsed'
    ])
  },
  {
    label: '文本编辑',
    list: fixIconfont([
      'save','print', 'edit', 'pencil','delete','like','badreview', 'undo', 'reply', 'exchange','fenxiang', 'redo','share',
      'loop', 'rss', 'rise','fall','direction', 'indicator', 'bookmark','magic','link', 'link-off', 'columns',
      'copy-rect','paste', 'copy','crop', 'indent-remove','file-text','files','annex','history','reset','recall',
      'list-v4', 'list-v3', 'list-v2', 'num-list','list','sheet', 'four-squares', 'nine-squares'
    ])
  },
  {
    label: '文件',
    list: fixIconfont([
      'folder', 'folder-open','tag', 'tags', 'ticket', 'upload','download','note', 'file', 'archive','approval','record', 'news', 'newspaper',
      'bill','book', 'inbox','envelope', 'envelope-open', 'excel', 'image', 'pdf', 'ppt', 'txt', 'word', 'zip','avi',
      'audio','case-file'
    ])
  },
  {
    label: '手机及电脑设备',
    list: fixIconfont([
      'keyborad','fax','call', 'fixed-telephone', 'phone','pad','notebook','supervision','computer','tv',
      'pc','desktop','server-host','servicer','database', 'chip', 'server'
    ])
  },
  {
    label: '交通工具',
    list: fixIconfont([
      'car-collision','car-v2','car','taxi', 'ambulance','truck','bus', 'bike', 'moto','train', 'subway',
      'ship','airplane', 'warplane','rocket'
    ])
  },
  {
    label: '建筑场所地图',
    list: fixIconfont([
      'map','location','map-thumbtack', 'pin','flag', 'high-road','map-indicator', 'prison', 'university',
      'high-building','story-building','floor-building','build','building','hospital','map-oil','map-gas',
      'map-ruler', 'circler-layout','map-connect','map-direction','map-finger','map-site','org','locus', 'orbit', 'traffic-light',
      'video-camera', 'monitor-camera', 'bayonet-camera','base-signal','map-architecture'
    ])
  },
  {
    label: '消息窗口',
    list: fixIconfont([
      'comment-v2', 'comment', 'chat','chat-border','news-success', 'news-warn', 'news-info', 'news-failure','close-rect',
      'mini','window-full','window'
    ])
  },
  {
    label: '支付及社交',
    list: fixIconfont([
      'qq', 'dingtalk', 'fly-letter', 'mitalk', 'momo', 'microblog', 'wechat','pay-jingdong', 'pay-taobao', 'union-pay', 'alipay','card-solid','card',
      'rmb','purse'
    ])
  },
  {
    label: '用户及任务特征',
    list: fixIconfont([
      'women', 'men','lady', 'gentleman','children', 'corpse','where', 'bed','baby-child','user-women', 'user-man',
      'organiz', 'user','group','anonymous','doctor','police','policeman','thief','team','organization','victim', 'theft',
      'palm', 'fingerprint','dna', 'address-book', 'id-card','work-card','credentials','name-card'
    ])
  },
  {
    label: '手机日历时间',
    list: fixIconfont([
      'calendar-v2', 'calendar','time', 'clock','electricity', 'signal', 'wifi', 'bell', 'bell-off','lock',
      'lock-off-v2', 'lock-off', 'visible', 'invisible', 'power','music','film','camera','vcr','record-video', 'image', 'mic-on', 'mic-off',
      'slider','bluetooth', 'usb','sound', 'qrcode','bar-code'
    ])
  },
  {
    label: '图表',
    list: fixIconfont([
      'chart-bar','chart-trend','chart-line','pie-chart'
    ])
  },
  {
    label: '排序方向',
    list: fixIconfont([
      'sort','sort-down', 'sort-up', 'sort-desc', 'sort-asc', 'double-arrow-up', 'double-arrow-down', 'double-arrow-right',
      'double-arrow-left', 'bold-arrow-up', 'bold-arrow-down', 'bold-arrow-right', 'bold-arrow-left', 'link-arrow-up', 'link-arrow-down', 'link-arrow-right', 'link-arrow-left',
      'move','link-arrow-h', 'link-arrow-v', 'insert-top', 'insert-bottom', 'insert-right', 'insert-left', 'mono-top', 'mono-bottom', 'mono-right', 'mono-left',
      'arrow-up', 'arrow-right', 'arrow-down','arrow-left'
    ])
  },
  {
    label: '媒体播放',
    list: fixIconfont([
      'random','soound-min', 'sound-max', 'mute','full','backward', 'mid','next-step', 'prev-step', 'pop', 'expand', 'go','pause', 'pause-circle',
      'play', 'inside-play', 'prev', 'next', 'stop', 'stop-circle'
    ])
  },
  {
    label: '符号表单',
    list: fixIconfont([
      'checkbox-ok', 'double-circle', 'radio-on', 'radio-off', 'minus-fill', 'minus-border','minus','plus-fill', 'plus-border', 'plus',
      'checkbox-off', 'checkbox-on','multiply', 'ok', 'mi', 'question','warning', 'careful', 'message', 'no', 'percentage','number-sign'
    ])
  },
]
