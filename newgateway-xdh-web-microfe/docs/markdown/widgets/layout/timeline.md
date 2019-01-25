<script>
import XdhTimeline from '@/widgets/xdh-timeline'

export default {
    components: {
      XdhTimeline
    },
    data() {
      return {
        size: 'default',
        icon: '',
        dotSlot: true,
        align: 'startLeft',
        signAlign: 'top',
        data1: [
            {
              date: '2018-11-06',
              list: [
                {
                  time: '09:30 - 10:00',
                  title: '“互联网之光”博览会开幕式',
                  address: '乌镇互联网国际会展中心莲池广场'
                }
              ]
            },
            {
              date: '2018-11-07',
              list: [
                {
                  time: '10:30 - 11:30',
                  title: '开幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '14:00 - 16:00',
                  title: '全体会议',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '16:30 - 18:30',
                  title: '世界互联网领先科技成果发布活动',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '19:00 - 20:30',
                  title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                  address: '云舟宾客中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-08',
              list: [
                {
                  time: '08:30 - 11:30',
                  title: '金融科技与信用社会建设',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '08:30 - 11:35',
                  title: '文明互鉴：网上文化交流共享',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 12:00',
                  title: '网络公益与扶贫：消除饥饿与贫困',
                  address: '乌镇互联网国际会展中心雨读厅（203）'
                },
                {
                  time: '08:45 - 12:10',
                  title: '大数据时代的个人信息保护',
                  address: '乌镇互联网国际会展中心慈云厅（106）'
                },
                {
                  time: '08:45 - 12:00',
                  title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                  address: '西栅景区枕水酒店宫音厅'
                },
                {
                  time: '······',
                  title: '',
                  address: ''
                },
                {
                  time: '14:30 - 18:30',
                  title: '企业家高峰对话：新时代的数字经济',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '19:30 - 20:40',
                  title: '文艺演出',
                  address: '乌镇大剧院'
                }
              ]
            },
            {
              date: '2018-11-09',
              list: [
                {
                  time: '08:00 - 10:50',
                  title: '5G时代：开放合作 共创未来',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 10:30',
                  title: '网络安全论坛',
                  address: '乌镇互联网国际会展中心垄行厅（208）'
                },
                {
                  time: '11:00 - 12:00',
                  title: '闭幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-10',
              list: [
                {
                  time: '12:00',
                  title: '“互联网之光”博览会闭馆',
                  address: '乌镇互联网国际会展中心'
                }
              ]
            }
          ],
          data2: [
              {
                type: 'start',
                bodyColor: 'transparent',
                size: 'large',
                icon: 'iconfont icon-paper',
                date: '2018-11-06',
                list: [
                  {
                    time: '09:30 - 10:00',
                    title: '“互联网之光”博览会开幕式',
                    address: '乌镇互联网国际会展中心莲池广场'
                  }
                ]
              },
              {
                align: 'right',
                date: '2018-11-07',
                list: [
                  {
                    time: '10:30 - 11:30',
                    title: '开幕式',
                    address: '乌镇互联网国际会展中心乌镇厅'
                  },
                  {
                    time: '14:00 - 16:00',
                    title: '全体会议',
                    address: '乌镇互联网国际会展中心乌镇厅'
                  },
                  {
                    time: '16:30 - 18:30',
                    title: '世界互联网领先科技成果发布活动',
                    address: '乌镇互联网国际会展中心乌镇厅'
                  },
                  {
                    time: '19:00 - 20:30',
                    title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                    address: '云舟宾客中心乌镇厅'
                  }
                ]
              },
              {
                align: 'right',
                date: '2018-11-08',
                list: [
                  {
                    time: '08:30 - 11:30',
                    title: '金融科技与信用社会建设',
                    address: '西栅景区枕水酒店龙凤厅'
                  },
                  {
                    time: '08:30 - 11:35',
                    title: '文明互鉴：网上文化交流共享',
                    address: '乌镇互联网国际会展中心通安厅（217）'
                  },
                  {
                    time: '08:30 - 12:00',
                    title: '网络公益与扶贫：消除饥饿与贫困',
                    address: '乌镇互联网国际会展中心雨读厅（203）'
                  },
                  {
                    time: '08:45 - 12:10',
                    title: '大数据时代的个人信息保护',
                    address: '乌镇互联网国际会展中心慈云厅（106）'
                  },
                  {
                    time: '08:45 - 12:00',
                    title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                    address: '西栅景区枕水酒店宫音厅'
                  },
                  {
                    time: '······',
                    title: '',
                    address: ''
                  },
                  {
                    time: '14:30 - 18:30',
                    title: '企业家高峰对话：新时代的数字经济',
                    address: '西栅景区枕水酒店龙凤厅'
                  },
                  {
                    time: '19:30 - 20:40',
                    title: '文艺演出',
                    address: '乌镇大剧院'
                  }
                ]
              },
              {
                align: 'right',
                date: '2018-11-09',
                list: [
                  {
                    time: '08:00 - 10:50',
                    title: '5G时代：开放合作 共创未来',
                    address: '乌镇互联网国际会展中心通安厅（217）'
                  },
                  {
                    time: '08:30 - 10:30',
                    title: '网络安全论坛',
                    address: '乌镇互联网国际会展中心垄行厅（208）'
                  },
                  {
                    time: '11:00 - 12:00',
                    title: '闭幕式',
                    address: '乌镇互联网国际会展中心乌镇厅'
                  }
                ]
              },
              {
                type: 'end',
                signAlign: 'bottom',
                icon: 'iconfont icon-radio-off',
                date: '2018-11-10',
                list: [
                  {
                    time: '12:00',
                    title: '“互联网之光”博览会闭馆',
                    address: '乌镇互联网国际会展中心'
                  }
                ]
              }
          ],
          data3: [
            {
              date: '2018-11-06',
              bodyColor: 'transparent',
              fold: false,
              list: [
                {
                  time: '09:30 - 10:00',
                  title: '“互联网之光”博览会开幕式',
                  address: '乌镇互联网国际会展中心莲池广场',
                  size: 'small'
                }
              ]
            },
            {
              date: '2018-11-07',
              bodyColor: 'transparent',
              fold: false,
              list: [
                {
                  time: '10:30 - 11:30',
                  title: '开幕式',
                  address: '乌镇互联网国际会展中心乌镇厅',
                  size: 'small'
                },
                {
                  time: '14:00 - 16:00',
                  title: '全体会议',
                  address: '乌镇互联网国际会展中心乌镇厅',
                  size: 'small'
                },
                {
                  time: '16:30 - 18:30',
                  title: '世界互联网领先科技成果发布活动',
                  address: '乌镇互联网国际会展中心乌镇厅',
                  size: 'small'
                },
                {
                  time: '19:00 - 20:30',
                  title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                  address: '云舟宾客中心乌镇厅',
                  size: 'small'
                }
              ]
            },
            {
              date: '2018-11-08',
              bodyColor: 'transparent',
              list: [
                {
                  time: '08:30 - 11:30',
                  title: '金融科技与信用社会建设',
                  address: '西栅景区枕水酒店龙凤厅',
                  size: 'small'
                },
                {
                  time: '08:30 - 11:35',
                  title: '文明互鉴：网上文化交流共享',
                  address: '乌镇互联网国际会展中心通安厅（217）',
                  size: 'small'
                },
                {
                  time: '08:30 - 12:00',
                  title: '网络公益与扶贫：消除饥饿与贫困',
                  address: '乌镇互联网国际会展中心雨读厅（203）',
                  size: 'small'
                },
                {
                  time: '08:45 - 12:10',
                  title: '大数据时代的个人信息保护',
                  address: '乌镇互联网国际会展中心慈云厅（106）',
                  size: 'small'
                },
                {
                  time: '08:45 - 12:00',
                  title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                  address: '西栅景区枕水酒店宫音厅',
                  size: 'small'
                },
                {
                  time: '14:30 - 18:30',
                  title: '企业家高峰对话：新时代的数字经济',
                  address: '西栅景区枕水酒店龙凤厅',
                  size: 'small'
                },
                {
                  time: '19:30 - 20:40',
                  title: '文艺演出',
                  address: '乌镇大剧院',
                  size: 'small'
                }
              ]
            },
            {
              date: '2018-11-09',
              bodyColor: 'transparent',
              list: [
                {
                  time: '08:00 - 10:50',
                  title: '5G时代：开放合作 共创未来',
                  address: '乌镇互联网国际会展中心通安厅（217）',
                  size: 'small'
                },
                {
                  time: '08:30 - 10:30',
                  title: '网络安全论坛',
                  address: '乌镇互联网国际会展中心垄行厅（208）',
                  size: 'small'
                },
                {
                  time: '11:00 - 12:00',
                  title: '闭幕式',
                  address: '乌镇互联网国际会展中心乌镇厅',
                  size: 'small'
                }
              ]
            },
            {
              date: '2018-11-10',
              bodyColor: 'transparent',
              list: [
                {
                  time: '12:00',
                  title: '“互联网之光”博览会闭馆',
                  address: '乌镇互联网国际会展中心',
                  size: 'small'
                }
              ]
            }
          ]
      }
    }
}
</script>

## Timeline 时间轴

对一系列信息进行时间排序时，垂直地展示。文档： [xdh-timeline](#/src/widgets%2Fmodule-widgets_xdh-timeline.html)

### 基础用法

:::demo
```html
<template>
  <div>
    <h1 class="xdh-timeline-title">2018第五届世界互联网大会</h1>
    <xdh-timeline :data="data1" body-color="#e5ecfb">
      <template slot="opposite" slot-scope="slotProps">
        <h1>{{slotProps.item.date}}</h1>
      </template>
      <template slot-scope="slotProps">
        <div class="xdh-timeline-card">
          <dl v-for="(item, index) in slotProps.item.list" :key="index">
            <dt>
              <h3 style="display: flex;">
                <span class="xdh-timeline-time">{{item.time}} </span>
                <span>{{item.title}}</span>
              </h3>
            </dt>
            <dd>{{item.address}}</dd>
          </dl>
        </div>
      </template>
    </xdh-timeline>
  </div>
</template>

<script>
import XdhTimeline from '@/widgets/xdh-timeline'

export default {
    components: {
      XdhTimeline
    },
    data() {
      return {
        data1: [
            {
              date: '2018-11-06',
              list: [
                {
                  time: '09:30 - 10:00',
                  title: '“互联网之光”博览会开幕式',
                  address: '乌镇互联网国际会展中心莲池广场'
                }
              ]
            },
            {
              date: '2018-11-07',
              list: [
                {
                  time: '10:30 - 11:30',
                  title: '开幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '14:00 - 16:00',
                  title: '全体会议',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '16:30 - 18:30',
                  title: '世界互联网领先科技成果发布活动',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '19:00 - 20:30',
                  title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                  address: '云舟宾客中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-08',
              list: [
                {
                  time: '08:30 - 11:30',
                  title: '金融科技与信用社会建设',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '08:30 - 11:35',
                  title: '文明互鉴：网上文化交流共享',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 12:00',
                  title: '网络公益与扶贫：消除饥饿与贫困',
                  address: '乌镇互联网国际会展中心雨读厅（203）'
                },
                {
                  time: '08:45 - 12:10',
                  title: '大数据时代的个人信息保护',
                  address: '乌镇互联网国际会展中心慈云厅（106）'
                },
                {
                  time: '08:45 - 12:00',
                  title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                  address: '西栅景区枕水酒店宫音厅'
                },
                {
                  time: '······',
                  title: '',
                  address: ''
                },
                {
                  time: '14:30 - 18:30',
                  title: '企业家高峰对话：新时代的数字经济',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '19:30 - 20:40',
                  title: '文艺演出',
                  address: '乌镇大剧院'
                }
              ]
            },
            {
              date: '2018-11-09',
              list: [
                {
                  time: '08:00 - 10:50',
                  title: '5G时代：开放合作 共创未来',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 10:30',
                  title: '网络安全论坛',
                  address: '乌镇互联网国际会展中心垄行厅（208）'
                },
                {
                  time: '11:00 - 12:00',
                  title: '闭幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-10',
              list: [
                {
                  time: '12:00',
                  title: '“互联网之光”博览会闭馆',
                  address: '乌镇互联网国际会展中心'
                }
              ]
            }
          ]
      }
    }
}
</script>

<style scoped lang="scss">
  h1 {
    margin: 0;
    font-size: 2em;
  }
  .xdh-timeline {
    &-card {
      color: #33459f;
      padding-left: 10px;
    }
    &-title {
      text-align: center;
      font-size: 36px; 
      line-height: 1.3;
      background: rgba(0,0,0,0.03); 
      color: #435fdd;   
    }
    &-time {
      flex: 1 1 150px;
      max-width: 105px;
    }
  }
</style>

```
:::

### 轴节点

通过 size、icon、dot slot 操作节点不同展示

:::demo
```html
<template>
  <div>
    <el-radio-group v-model="size" size="mini">
      <el-radio-button label="default">默认 size</el-radio-button>
      <el-radio-button label="small">small</el-radio-button>
      <el-radio-button label="large">large</el-radio-button>
    </el-radio-group> 
    &nbsp;   
    <el-radio-group v-model="icon" size="mini">
      <el-radio-button label="">无 icon</el-radio-button>
      <el-radio-button label="iconfont icon-internet">显示 iconfont icon-internet</el-radio-button>
    </el-radio-group>
    &nbsp;   
    <el-radio-group v-model="dotSlot" size="mini">
      <el-radio-button :label="true">使用 dot slot</el-radio-button>
      <el-radio-button :label="false">取消 dot slot</el-radio-button>
    </el-radio-group>
    <hr>
    
    <h1 class="xdh-timeline-title">2018第五届世界互联网大会</h1>
    <xdh-timeline :data="data1" body-color="#e5ecfb" :size="size" :icon="icon">
      <template v-if="dotSlot" slot="dot" slot-scope="slotProps">
          <div class="xdh-timeline-item__inner-dot xdh-timeline-dot__custom">
            <i :class="icon"></i>
          </div>
      </template>
      <template slot="opposite" slot-scope="slotProps">
        <h1>{{slotProps.item.date}}</h1>
      </template>
      <template slot-scope="slotProps">
        <div class="xdh-timeline-card">
          <dl v-for="(item, index) in slotProps.item.list" :key="index">
            <dt>
              <h3 style="display: flex;">
                <span class="xdh-timeline-time">{{item.time}} </span>
                <span>{{item.title}}</span>
              </h3>
            </dt>
            <dd>{{item.address}}</dd>
          </dl>
        </div>
      </template>
    </xdh-timeline>
  </div>
</template>

<script>
import XdhTimeline from '@/widgets/xdh-timeline'

export default {
    components: {
      XdhTimeline
    },
    data() {
      return {
        size: 'default',
        icon: '',
        dotSlot: true,
        data1: [
            {
              date: '2018-11-06',
              list: [
                {
                  time: '09:30 - 10:00',
                  title: '“互联网之光”博览会开幕式',
                  address: '乌镇互联网国际会展中心莲池广场'
                }
              ]
            },
            {
              date: '2018-11-07',
              list: [
                {
                  time: '10:30 - 11:30',
                  title: '开幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '14:00 - 16:00',
                  title: '全体会议',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '16:30 - 18:30',
                  title: '世界互联网领先科技成果发布活动',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '19:00 - 20:30',
                  title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                  address: '云舟宾客中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-08',
              list: [
                {
                  time: '08:30 - 11:30',
                  title: '金融科技与信用社会建设',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '08:30 - 11:35',
                  title: '文明互鉴：网上文化交流共享',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 12:00',
                  title: '网络公益与扶贫：消除饥饿与贫困',
                  address: '乌镇互联网国际会展中心雨读厅（203）'
                },
                {
                  time: '08:45 - 12:10',
                  title: '大数据时代的个人信息保护',
                  address: '乌镇互联网国际会展中心慈云厅（106）'
                },
                {
                  time: '08:45 - 12:00',
                  title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                  address: '西栅景区枕水酒店宫音厅'
                },
                {
                  time: '······',
                  title: '',
                  address: ''
                },
                {
                  time: '14:30 - 18:30',
                  title: '企业家高峰对话：新时代的数字经济',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '19:30 - 20:40',
                  title: '文艺演出',
                  address: '乌镇大剧院'
                }
              ]
            },
            {
              date: '2018-11-09',
              list: [
                {
                  time: '08:00 - 10:50',
                  title: '5G时代：开放合作 共创未来',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 10:30',
                  title: '网络安全论坛',
                  address: '乌镇互联网国际会展中心垄行厅（208）'
                },
                {
                  time: '11:00 - 12:00',
                  title: '闭幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-10',
              list: [
                {
                  time: '12:00',
                  title: '“互联网之光”博览会闭馆',
                  address: '乌镇互联网国际会展中心'
                }
              ]
            }
          ]
      }
    }
}
</script>

<style scoped lang="scss">
  h1 {
    margin: 0;
    font-size: 2em;
  }
  .xdh-timeline {
    &-card {
      color: #33459f;
      padding-left: 10px;
    }
    &-title {
      text-align: center;
      font-size: 36px; 
      line-height: 1.3;
      background: rgba(0,0,0,0.03); 
      color: #435fdd;   
    }
    &-time {
      flex: 1 1 150px;
      max-width: 105px;
    }
    &-dot__custom.xdh-timeline-item__inner-dot {
     background: #ffffff !important;
     box-shadow: none !important;
     border:2px solid #435fdd !important;
     margin-top: -2px;
     margin-left: -2px;
     i {
         font-size: 1.7em; 
         color: #435fdd;   
     }
    }
  }
</style>

```
:::
    

### 布局类型
通过 align、sign-align 操作内容区域不同展示

:::demo
```html
<template>
  <div>
    <el-radio-group v-model="align" size="mini">
      <el-radio-button label="startLeft"></el-radio-button>
      <el-radio-button label="startRight"></el-radio-button>
      <el-radio-button label="left"></el-radio-button>
      <el-radio-button label="right"></el-radio-button>
    </el-radio-group>
    &nbsp;
    <el-radio-group v-model="signAlign" size="mini">
      <el-radio-button label="top"></el-radio-button>
      <el-radio-button label="middle"></el-radio-button>
      <el-radio-button label="bottom"></el-radio-button>
    </el-radio-group>
    <hr>
    
    <h1 class="xdh-timeline-title">2018第五届世界互联网大会</h1>
    <xdh-timeline :data="data1" body-color="#e5ecfb" :align="align" :sign-align="signAlign">
      <template slot="opposite" slot-scope="slotProps">
        <h1>{{slotProps.item.date}}</h1>
      </template>
      <template slot-scope="slotProps">
        <div class="xdh-timeline-card">
          <dl v-for="(item, index) in slotProps.item.list" :key="index">
            <dt>
              <h3 style="display: flex;">
                <span class="xdh-timeline-time">{{item.time}} </span>
                <span>{{item.title}}</span>
              </h3>
            </dt>
            <dd>{{item.address}}</dd>
          </dl>
        </div>
      </template>
    </xdh-timeline>
  </div>
</template>

<script>
import XdhTimeline from '@/widgets/xdh-timeline'

export default {
    components: {
      XdhTimeline
    },
    data() {
      return {
        align: 'startLeft',
        signAlign: 'top',
        data1: [
            {
              date: '2018-11-06',
              list: [
                {
                  time: '09:30 - 10:00',
                  title: '“互联网之光”博览会开幕式',
                  address: '乌镇互联网国际会展中心莲池广场'
                }
              ]
            },
            {
              date: '2018-11-07',
              list: [
                {
                  time: '10:30 - 11:30',
                  title: '开幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '14:00 - 16:00',
                  title: '全体会议',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '16:30 - 18:30',
                  title: '世界互联网领先科技成果发布活动',
                  address: '乌镇互联网国际会展中心乌镇厅'
                },
                {
                  time: '19:00 - 20:30',
                  title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                  address: '云舟宾客中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-08',
              list: [
                {
                  time: '08:30 - 11:30',
                  title: '金融科技与信用社会建设',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '08:30 - 11:35',
                  title: '文明互鉴：网上文化交流共享',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 12:00',
                  title: '网络公益与扶贫：消除饥饿与贫困',
                  address: '乌镇互联网国际会展中心雨读厅（203）'
                },
                {
                  time: '08:45 - 12:10',
                  title: '大数据时代的个人信息保护',
                  address: '乌镇互联网国际会展中心慈云厅（106）'
                },
                {
                  time: '08:45 - 12:00',
                  title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                  address: '西栅景区枕水酒店宫音厅'
                },
                {
                  time: '······',
                  title: '',
                  address: ''
                },
                {
                  time: '14:30 - 18:30',
                  title: '企业家高峰对话：新时代的数字经济',
                  address: '西栅景区枕水酒店龙凤厅'
                },
                {
                  time: '19:30 - 20:40',
                  title: '文艺演出',
                  address: '乌镇大剧院'
                }
              ]
            },
            {
              date: '2018-11-09',
              list: [
                {
                  time: '08:00 - 10:50',
                  title: '5G时代：开放合作 共创未来',
                  address: '乌镇互联网国际会展中心通安厅（217）'
                },
                {
                  time: '08:30 - 10:30',
                  title: '网络安全论坛',
                  address: '乌镇互联网国际会展中心垄行厅（208）'
                },
                {
                  time: '11:00 - 12:00',
                  title: '闭幕式',
                  address: '乌镇互联网国际会展中心乌镇厅'
                }
              ]
            },
            {
              date: '2018-11-10',
              list: [
                {
                  time: '12:00',
                  title: '“互联网之光”博览会闭馆',
                  address: '乌镇互联网国际会展中心'
                }
              ]
            }
          ]
      }
    }
}
</script>

<style scoped lang="scss">
  h1 {
    margin: 0;
    font-size: 2em;
  }
  .xdh-timeline {
    &-card {
      color: #33459f;
      padding-left: 10px;
    }
    &-title {
      text-align: center;
      font-size: 36px; 
      line-height: 1.3;
      background: rgba(0,0,0,0.03); 
      color: #435fdd;   
    }
    &-time {
      flex: 1 1 150px;
      max-width: 105px;
    }
    &-dot__custom.xdh-timeline-item__inner-dot {
     background: #ffffff !important;
     box-shadow: none !important;
     border:2px solid #435fdd !important;
     margin: auto;
     i {
         font-size: 1.7em; 
         color: #435fdd;   
     }
    }
  }
</style>

```
:::
    

### 综合使用

通过 data 数据传入设置, 即 props 参数所列, 实现对数据项个性化定制

:::demo
```html
<template>
  <div>
    <h1 class="xdh-timeline-title">2018第五届世界互联网大会</h1>
    <xdh-timeline :data="data2" body-color="#e5ecfb" size="small">
      
      <template slot="dot" slot-scope="slotProps" v-if="slotProps.item.type === 'start'">
        <div class="xdh-timeline-item__inner-dot xdh-timeline-dot__custom" style="border: none !important;">
          <i :class="slotProps.item.icon"></i>
        </div>
      </template>
      
      <template v-if="slotProps.item.type !== 'end'" slot="opposite" slot-scope="slotProps">
        <h1>{{slotProps.item.date}}</h1>
      </template>
      
      <template slot-scope="slotProps">
        <div v-if="slotProps.item.type === 'end'" style="text-align: right;margin-right: 10px; ">
            <dl v-for="(item, index) in slotProps.item.list" :key="index">
              <dt>
                <h2>
                 {{slotProps.item.date}} {{item.time}} &nbsp; {{item.title}}
                </h2>
              </dt>
              <dd>{{item.address}}</dd>
            </dl>
        </div>
        
        <div v-else class="xdh-timeline-card" :style="`${slotProps.item.type === 'start'?'text-align:right' :''}`">
          <dl v-for="(item, index) in slotProps.item.list" :key="index">
            <dt>
              <h2 v-if="slotProps.item.type === 'start'" style="margin-bottom: 5px;">
               {{item.time}} &nbsp; {{item.title}}
              </h2>
              <h3 v-else style="display: flex;">
                <span class="xdh-timeline-time">{{item.time}} </span>
                <span>{{item.title}}</span>
              </h3>
            </dt>
            <dd>{{item.address}}</dd>
          </dl>
        </div>
      </template>
      
    </xdh-timeline>
  </div>
</template>

<script>
import XdhTimeline from '@/widgets/xdh-timeline'

export default {
    components: {
      XdhTimeline
    },
    data() {
      return {
        data2: [
          {
            type: 'start',
            bodyColor: 'transparent',
            size: 'large',
            icon: 'iconfont icon-paper',
            date: '2018-11-06',
            list: [
              {
                time: '09:30 - 10:00',
                title: '“互联网之光”博览会开幕式',
                address: '乌镇互联网国际会展中心莲池广场'
              }
            ]
          },
          {
            align: 'right',
            date: '2018-11-07',
            list: [
              {
                time: '10:30 - 11:30',
                title: '开幕式',
                address: '乌镇互联网国际会展中心乌镇厅'
              },
              {
                time: '14:00 - 16:00',
                title: '全体会议',
                address: '乌镇互联网国际会展中心乌镇厅'
              },
              {
                time: '16:30 - 18:30',
                title: '世界互联网领先科技成果发布活动',
                address: '乌镇互联网国际会展中心乌镇厅'
              },
              {
                time: '19:00 - 20:30',
                title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                address: '云舟宾客中心乌镇厅'
              }
            ]
          },
          {
            align: 'right',
            date: '2018-11-08',
            list: [
              {
                time: '08:30 - 11:30',
                title: '金融科技与信用社会建设',
                address: '西栅景区枕水酒店龙凤厅'
              },
              {
                time: '08:30 - 11:35',
                title: '文明互鉴：网上文化交流共享',
                address: '乌镇互联网国际会展中心通安厅（217）'
              },
              {
                time: '08:30 - 12:00',
                title: '网络公益与扶贫：消除饥饿与贫困',
                address: '乌镇互联网国际会展中心雨读厅（203）'
              },
              {
                time: '08:45 - 12:10',
                title: '大数据时代的个人信息保护',
                address: '乌镇互联网国际会展中心慈云厅（106）'
              },
              {
                time: '08:45 - 12:00',
                title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                address: '西栅景区枕水酒店宫音厅'
              },
              {
                time: '······',
                title: '',
                address: ''
              },
              {
                time: '14:30 - 18:30',
                title: '企业家高峰对话：新时代的数字经济',
                address: '西栅景区枕水酒店龙凤厅'
              },
              {
                time: '19:30 - 20:40',
                title: '文艺演出',
                address: '乌镇大剧院'
              }
            ]
          },
          {
            align: 'right',
            date: '2018-11-09',
            list: [
              {
                time: '08:00 - 10:50',
                title: '5G时代：开放合作 共创未来',
                address: '乌镇互联网国际会展中心通安厅（217）'
              },
              {
                time: '08:30 - 10:30',
                title: '网络安全论坛',
                address: '乌镇互联网国际会展中心垄行厅（208）'
              },
              {
                time: '11:00 - 12:00',
                title: '闭幕式',
                address: '乌镇互联网国际会展中心乌镇厅'
              }
            ]
          },
          {
            type: 'end',
            signAlign: 'bottom',
            icon: 'iconfont icon-radio-off',
            date: '2018-11-10',
            list: [
              {
                time: '12:00',
                title: '“互联网之光”博览会闭馆',
                address: '乌镇互联网国际会展中心'
              }
            ]
          }
        ]
      }
    }
}
</script>

<style scoped lang="scss">
  h1 {
    margin: 0;
    font-size: 2em;
  }
  .xdh-timeline {
    &-card {
      color: #33459f;
      padding-left: 10px;
    }
    &-title {
      text-align: center;
      font-size: 36px; 
      line-height: 1.3;
      background: rgba(0,0,0,0.03); 
      color: #435fdd;   
    }
    &-time {
      flex: 1 1 150px;
      max-width: 105px;
    }
    &-dot__custom, xdh-timeline-item__inner-dot {
     background: #ffffff !important;
     box-shadow: none !important;
     border:2px solid #435fdd !important;
     margin-top: -2px;
     margin-left: -2px;
     i {
         font-size: 1.7em; 
         color: #435fdd;   
     }
    }
  }
</style>

```
:::
    

### 可折叠

通过 props children 把子集节点显示在主轴上,  fold 操作子集节点可以折叠

:::demo
```html
<template>
  <div>
    <h1 class="xdh-timeline-title">2018第五届世界互联网大会</h1>
    <xdh-timeline :data="data3" body-color="#e5ecfb" fold :props="{children:'list'}" align="left">
      <template slot="opposite" slot-scope="slotProps">
        <h1>{{slotProps.item.date}}</h1>
      </template>
      <template slot-scope="slotProps">
        <div class="xdh-timeline-card">
          <dl>
            <dt>
              <h3 style="display: flex;">
                <span class="xdh-timeline-time">{{slotProps.item.time}} </span>
                <span>{{slotProps.item.title}}</span>
              </h3>
            </dt>
            <dd>{{slotProps.item.address}}</dd>
          </dl>
        </div>
      </template>
    </xdh-timeline>
  </div>
</template>

<script>
import XdhTimeline from '@/widgets/xdh-timeline'

export default {
    components: {
      XdhTimeline
    },
    data() {
      return {
        data3: [
          {
            date: '2018-11-06',
            bodyColor: 'transparent',
            fold: false,
            list: [
              {
                time: '09:30 - 10:00',
                title: '“互联网之光”博览会开幕式',
                address: '乌镇互联网国际会展中心莲池广场',
                size: 'small'
              }
            ]
          },
          {
            date: '2018-11-07',
            bodyColor: 'transparent',
            fold: false,
            list: [
              {
                time: '10:30 - 11:30',
                title: '开幕式',
                address: '乌镇互联网国际会展中心乌镇厅',
                size: 'small'
              },
              {
                time: '14:00 - 16:00',
                title: '全体会议',
                address: '乌镇互联网国际会展中心乌镇厅',
                size: 'small'
              },
              {
                time: '16:30 - 18:30',
                title: '世界互联网领先科技成果发布活动',
                address: '乌镇互联网国际会展中心乌镇厅',
                size: 'small'
              },
              {
                time: '19:00 - 20:30',
                title: '“乌镇之夜”欢迎晚宴（凭请柬）',
                address: '云舟宾客中心乌镇厅',
                size: 'small'
              }
            ]
          },
          {
            date: '2018-11-08',
            bodyColor: 'transparent',
            list: [
              {
                time: '08:30 - 11:30',
                title: '金融科技与信用社会建设',
                address: '西栅景区枕水酒店龙凤厅',
                size: 'small'
              },
              {
                time: '08:30 - 11:35',
                title: '文明互鉴：网上文化交流共享',
                address: '乌镇互联网国际会展中心通安厅（217）',
                size: 'small'
              },
              {
                time: '08:30 - 12:00',
                title: '网络公益与扶贫：消除饥饿与贫困',
                address: '乌镇互联网国际会展中心雨读厅（203）',
                size: 'small'
              },
              {
                time: '08:45 - 12:10',
                title: '大数据时代的个人信息保护',
                address: '乌镇互联网国际会展中心慈云厅（106）',
                size: 'small'
              },
              {
                time: '08:45 - 12:00',
                title: '预见互联网未来——世界互联网领先科技成果发布活动专家与企业家论坛',
                address: '西栅景区枕水酒店宫音厅',
                size: 'small'
              },
              {
                time: '14:30 - 18:30',
                title: '企业家高峰对话：新时代的数字经济',
                address: '西栅景区枕水酒店龙凤厅',
                size: 'small'
              },
              {
                time: '19:30 - 20:40',
                title: '文艺演出',
                address: '乌镇大剧院',
                size: 'small'
              }
            ]
          },
          {
            date: '2018-11-09',
            bodyColor: 'transparent',
            list: [
              {
                time: '08:00 - 10:50',
                title: '5G时代：开放合作 共创未来',
                address: '乌镇互联网国际会展中心通安厅（217）',
                size: 'small'
              },
              {
                time: '08:30 - 10:30',
                title: '网络安全论坛',
                address: '乌镇互联网国际会展中心垄行厅（208）',
                size: 'small'
              },
              {
                time: '11:00 - 12:00',
                title: '闭幕式',
                address: '乌镇互联网国际会展中心乌镇厅',
                size: 'small'
              }
            ]
          },
          {
            date: '2018-11-10',
            bodyColor: 'transparent',
            list: [
              {
                time: '12:00',
                title: '“互联网之光”博览会闭馆',
                address: '乌镇互联网国际会展中心',
                size: 'small'
              }
            ]
          }
        ]
      }
    }
}
</script>

<style scoped lang="scss">
   h1 {
      margin: 0;
      font-size: 2em;
    }
  
    .xdh-timeline {
      &-card {
        color: #33459f;
        padding-left: 10px;
      }
      &-title {
        text-align: center;
        font-size: 36px;
        line-height: 1.3;
        background: rgba(0, 0, 0, 0.03);
        color: #435fdd;
      }
      &-time {
        flex: 1 1 150px;
        max-width: 105px;
      }
      &-dot__custom, xdh-timeline-item__inner-dot {
        background: #ffffff !important;
        box-shadow: none !important;
        border: 2px solid #435fdd !important;
        margin-top: -2px;
        margin-left: -2px;
        i {
          font-size: 1.7em;
          color: #435fdd;
        }
      }
    }
</style>

```
:::
    


### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|----|----|
| data | 数据项配置集合, 内部对象为 props 映射字段 | Array | - | - |
| props | 数据项配置字段映射,参考 props参数说明 | Object | - | - |
| size | 节点尺寸  | String | default / small / large | - |
| icon | 节点icon,可以从文档 [图标库](#/guide/icon) 选择 | String | - | - |
| sign-align | 指向箭头放置位置 | String | top / middle / bottom | top |
| align | 布局类型  | String | startLeft / startRight / left / right | - |
| body-color | 数据项容器颜色值，当为 'transparent' 时指向轴点箭标不会显示 | String | - | - |
| fold | 开启折叠功能, 自动把 data 次级 children 内容收缩起来 | Boolean | true / false | false |
| animate-class | 折叠收缩数据项动画class,[入场动画，退出动画] 参考组件库动效 -> [Animate.css](#/widgets/animate/animate) | Array | - | ['fadeIn', 'fadeOut'] |

### props 参数
单个数据项 局部配置参数字段映射

| 参数 | 默认映射 |说明|
|----|----|----|
| size | 'size' | 某项节点尺寸 |
| icon | 'icon' | 某项节点icon |
| align | 'align' | 某项数据布局方向 |
| signAlign | 'signAlign' | 某项箭头访问位置 | 
| bodyColor | 'bodyColor' | 某项容器颜色值,亦可为 当为 'transparent' 时指向轴点箭标不会显示 |
| children | 'children' | 把数据的次级列表 children 下的内容生成主轴节点显示 |
| fold | 'fold' | 某项数据是否可以折叠, 注参数只作用于第一层节点数据 |
| animateClass | 'animateClass' | 某项数据 折叠收缩动画 |


### Events 事件

| 事件名称 | 说明 | 回调参数 |
|-----|-----|----|
| on-state | 节点折叠状态发生变化时触发 | 一个参数：true: 展开  false：折叠 |


### slots 插槽

| name | 说明 |
|-----|-----|
| - | 内容插槽 参数为 {item} 当前项数据 |
| dot | 自定义轴点内容 参数为 {item} 当前项数据 |
| opposite | 内容对向区域 参数为 {item} 当前项数据 |
