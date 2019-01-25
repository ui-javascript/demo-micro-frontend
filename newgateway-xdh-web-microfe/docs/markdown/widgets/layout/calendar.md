<script>
  import date from '@/utils/date'
  import XdhCalendar from '@/widgets/xdh-calendar'
  import {Calendar, cDay} from '@/utils/lunar'

  export default {
    components: {
      XdhCalendar
    },
    data() {
      return {
        date1: new Date(),
        date2: '2010-12-1',
        date3: new Date(),
        lunarDay: []
      }
    },
    mounted() {
      this.getLunarDay(this.date3)
    },
    methods: {
      parseDate(dateStr) {
        return date(dateStr, 'yyyy/MM/dd')
      },
      getLunarDay(dateStr) {
        let obj = typeof dateStr === 'string' ? new Date(dateStr.replace(/-/g, '/')) : dateStr
        const year = obj.getFullYear(), month = obj.getMonth()
        const prevMonth = new Date(year, month - 1, 1);
        const nextMonth = new Date(year, month + 1, 1);
        let today = new Date()
        let ty = parseInt(today.getFullYear())
        let tm = parseInt(today.getMonth())
        let td = parseInt(today.getDate())
        let prevLunar = new Calendar(prevMonth.getFullYear(), prevMonth.getMonth(), ty, tm, td)
        let lunar = new Calendar(year, month, ty, tm, td)
        let nextLunar = new Calendar(nextMonth.getFullYear(), nextMonth.getMonth(), ty, tm, td)
        let prevLunarArray = Array.from(prevLunar)
        let lunarArray = Array.from(lunar)
        let nextLunarArray = Array.from(nextLunar)
        const array = prevLunarArray.concat(lunarArray).concat(nextLunarArray)
        this.lunarDay = array.map(item => {
          return {
            date: new Date(item.sYear, item.sMonth - 1, item.sDay),
            content: this.formatLunarDay(item),
            festival: !!item.lunarFestival
          }
        })
      },
      formatLunarDay(calEl) {
        let str = calEl.lDay === 1 ? `<b>${calEl.lMonth}月</b>` : cDay(calEl.lDay)
        let festival = calEl.lunarFestival
        if (calEl.lMonth === 4 && festival.includes('端午节')) {
          festival = ''
        }
        str = festival ? festival.split(' ')[0] : str
        return str
      },
      setLunar(dateStr) {
        const day = this.lunarDay.filter(n => {
          return n.date.getTime() === dateStr.getTime()
        })
        return day[0].content
      }
    }
  }
</script>
## 日历组件

### 基础用法
:::demo
```html
<template>
<div>
<xdh-calendar v-model="date1">
  <template slot="day-content" slot-scope="scope">
    <div v-if="scope.day === 1">特别的日子：<p>{{parseDate(scope.date)}}</p></div>
  </template>
  <template slot="month-content" slot-scope="scope">
    <div v-if="scope.month%2===0">
      特别的月份
    </div>
  </template>
</xdh-calendar>
{{date1}}
</div>
</template>
<script>
  import date from '@/utils/date'
    import XdhCalendar from '@/widgets/xdh-calendar'

    export default {
      components: {
        XdhCalendar
      },
      data() {
        return {
          date1: new Date()
        }
      },
      methods: {
        parseDate(dateStr) {
          return date(dateStr, 'yyyy/MM/dd')
        }
      }
    }
</script>
```
:::

### 自定义农历显示和自动切换月份日期
:::demo
```html
<template>
<div>
<xdh-calendar ref="calendar3"
              v-model="date3"
              @on-select-month="getLunarDay"
              auto-switch>
  <template slot="day-content" slot-scope="scope">
    <div v-html="setLunar(scope.date)"></div>
    <div v-if="scope.day === 1">特别的日子</div>
  </template>
  <template slot="month-content" slot-scope="scope">
    <div v-if="scope.month%2===0">
      特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份特别的月份
    </div>
  </template>
</xdh-calendar>

{{date3}}
</div>
</template>
<script>
  import date from '../utils/date'
  import XdhCalendar from '../widgets/xdh-calendar'
  import {Calendar, cDay} from '@/utils/lunar'

  export default {
    components: {
      XdhCalendar
    },
    data() {
      return {
        date3: new Date(),
        lunarDay: []
      }
    },
    mounted() {
      this.getLunarDay(this.date3)
    },
    methods: {
      getLunarDay(dateStr) {
        let obj = typeof dateStr === 'string' ? new Date(dateStr.replace(/-/g, '/')) : dateStr
        const year = obj.getFullYear(), month = obj.getMonth()
        const prevMonth = new Date(year, month - 1, 1);
        const nextMonth = new Date(year, month + 1, 1);
        let today = new Date()
        let ty = parseInt(today.getFullYear())
        let tm = parseInt(today.getMonth())
        let td = parseInt(today.getDate())
        let prevLunar = new Calendar(prevMonth.getFullYear(), prevMonth.getMonth(), ty, tm, td)
        let lunar = new Calendar(year, month, ty, tm, td)
        let nextLunar = new Calendar(nextMonth.getFullYear(), nextMonth.getMonth(), ty, tm, td)
        let prevLunarArray = Array.from(prevLunar)
        let lunarArray = Array.from(lunar)
        let nextLunarArray = Array.from(nextLunar)
        const array = prevLunarArray.concat(lunarArray).concat(nextLunarArray)
        this.lunarDay = array.map(item => {
          return {
            date: new Date(item.sYear, item.sMonth - 1, item.sDay),
            content: this.formatLunarDay(item),
            festival: !!item.lunarFestival
          }
        })
      },
      formatLunarDay(calEl) {
        let str = calEl.lDay === 1 ? `<b>${calEl.lMonth}月</b>` : cDay(calEl.lDay)
        let festival = calEl.lunarFestival
        if (calEl.lMonth === 4 && festival.includes('端午节')) {
          festival = ''
        }
        str = festival ? festival.split(' ')[0] : str
        return str
      },
      setLunar(dateStr) {
        const day = this.lunarDay.filter(n => {
          return n.date.getTime() === dateStr.getTime()
        })
        return day[0].content
      }
    }
  }
</script>
```
:::

### 卡片模式
:::demo
```html
<template>
<xdh-calendar v-model="date2"
              style="width:300px;height:300px;border:1px solid rgb(217, 217, 217);border-radius: 4px;"
              :full-screen="false"></xdh-calendar>
{{date2}}
</template>
<script>
  import date from '@/utils/date'
    import XdhCalendar from '@/widgets/xdh-calendar'

    export default {
      components: {
        XdhCalendar
      },
      data() {
        return {
          date2: '2010-12-1'
        }
      }
    }
</script>
```
:::
