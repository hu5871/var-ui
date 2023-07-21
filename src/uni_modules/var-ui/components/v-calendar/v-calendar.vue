
<template>
  <template v-if="isPop">
    <v-popup v-model:show="_show" @close="handleClose">
      <view :class="[bem.b(), 'w-full', 'h-full']">
        <slot name="title">
          <view v-if="showHeader" class="flex my-10 mx-20  justify-end items-center">
            <v-icon @click="handleClose" name="icon-close-circle" color="#bababa"></v-icon>
          </view>
        </slot>
        <view :class="[bem.be('calendar', 'head'), 'flex', 'w-full']">
          <v-card width="100%" :margin="[0]" :padding="[16, 0]">
            <view class="flex w-full">
              <view class="flex-1 flex justify-center">
                <v-icon color="#606367" @click.stop="changeYear(false)" name="caret-back"></v-icon>
                <v-icon color="#606367" @click.stop="changeMonth(false)" name="chevron-back"></v-icon>
              </view>
              <view class="flex-1 flex justify-center">{{ yearMonth.year }} - {{ yearMonth!.month < 10 ?
                `0${yearMonth!.month}` : yearMonth?.month }}</view>
                  <view class="flex-1 flex justify-center ">
                    <v-icon color="#606367" :margin="[0, 5]" @click.stop="changeMonth(true)"
                      name="chevron-forward"></v-icon>
                    <v-icon color="#606367" :margin="[0, 5]" @click.stop="changeYear(true)" name="caret-forward"></v-icon>
                  </view>
              </view>
          </v-card>
        </view>
        <view class="w-full flex py-10">
          <view class="flex-1 flex justify-center  items-center" v-for="week in weekList" :key="week">{{ week }}</view>
        </view>
        <view v-if="currentWeekTwoArrayList && currentWeekTwoArrayList.length"
          :class="[bem.be('calendar', 'body'), 'flex', 'flex-wrap']">
          <view class='w-full flex' :style="{ height: '49px' }" v-for="(weekItem, i) in currentWeekTwoArrayList">
            <view @click="selectClick(dayItem)" :style="[defaultItemStyle]"
              :class="['flex', 'flex-1', 'justify-center', 'items-center']" v-for="(dayItem, dayIndex) in weekItem">
              <slot name="item" :value="{ dayItem }">
                <view class="w-full h-full flex flex-col flex-1 justify-center items-center"
                  :style="[selectedStyle(dayItem), (dayItem.isLast || dayItem.isNext) ? lastAndNextStyle : null]">
                  <view>
                    <text>{{ dayItem.day }}</text>
                  </view>
                  <view v-if="mode === 'range' && rangeSrartAndEnd.start && rangeSrartAndEnd.end">
                    <text style="fontSize:13upx">{{ dayItem.ymd === rangeSrartAndEnd.start.ymd ? rangeLabel[0] :
                      dayItem.ymd
                        ===
                        rangeSrartAndEnd.end.ymd ? rangeLabel[1] : '' }}</text>
                  </view>
                </view>
              </slot>
            </view>
          </view>
        </view>
        <view :class="[bem.be('calendar', 'foot')]">
          <v-button @click="handleConfirm" :margin="[10, 32]" :block="true" :fontSize="13" :bgColor="selectBgColor"
            :color="selectColor">{{ props.confirmText }}</v-button>
        </view>
      </view>
    </v-popup>
  </template>
  <template v-else>
    <view :class="[bem.b(), 'w-full',]">
      <view :class="[bem.be('calendar', 'head'), 'flex', 'w-full']">
        <v-card width="100%" :margin="[0]" :padding="[16, 0]">
          <view class="flex w-full">
            <view class="flex-1 flex justify-center">
              <v-icon color="#606367" @click.stop="changeYear(false)" name="caret-back"></v-icon>
              <v-icon color="#606367" @click.stop="changeMonth(false)" name="chevron-back"></v-icon>
            </view>
            <view class="flex-1 flex justify-center">{{ yearMonth.year }} - {{ yearMonth!.month < 10 ?
              `0${yearMonth!.month}` : yearMonth?.month }}</view>
                <view class="flex-1 flex justify-center ">
                  <v-icon color="#606367" :margin="[0, 5]" @click.stop="changeMonth(true)"
                    name="chevron-forward"></v-icon>
                  <v-icon color="#606367" :margin="[0, 5]" @click.stop="changeYear(true)" name="caret-forward"></v-icon>
                </view>
            </view>
        </v-card>
      </view>
      <view class="w-full flex py-10">
        <view class="flex-1 flex justify-center  items-center" v-for="week in weekList" :key="week">{{ week }}</view>
      </view>
      <view v-if="currentWeekTwoArrayList && currentWeekTwoArrayList.length"
        :class="[bem.be('calendar', 'body'), 'flex', 'flex-wrap']">
        <view class='w-full flex' :style="{ height: '49px' }" v-for="(weekItem, i) in currentWeekTwoArrayList">
          <view @click="selectClick(dayItem)" :style="[defaultItemStyle]"
            :class="['flex', 'flex-1', 'justify-center', 'items-center']" v-for="(dayItem, dayIndex) in weekItem">
            <slot name="item" :value="{ dayItem }">
              <view class="w-full h-full flex flex-col flex-1 justify-center items-center"
                :style="[selectedStyle(dayItem), (dayItem.isLast || dayItem.isNext) ? lastAndNextStyle : null]">
                <view>
                  <text>{{ dayItem.day }}</text>
                </view>
                <view v-if="mode === 'range' && rangeSrartAndEnd.start && rangeSrartAndEnd.end">
                  <text style="fontSize:13upx">{{ dayItem.ymd === rangeSrartAndEnd.start.ymd ? rangeLabel[0] :
                    dayItem.ymd
                      ===
                      rangeSrartAndEnd.end.ymd ? rangeLabel[1] : '' }}</text>
                </view>
              </view>
            </slot>
          </view>
        </view>
      </view>
      <view :class="[bem.be('calendar', 'foot')]">
        <v-button @click="handleConfirm" :margin="[10, 32]" :block="true" :fontSize="13" :bgColor="selectBgColor"
          :color="selectColor">{{ props.confirmText }}</v-button>
      </view>
    </view>
  </template>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<script lang="ts" setup>
import vPopup from '../v-popup/v-popup.vue';
import { computed, nextTick, ref, watch } from "vue";
import { customPOrM, customWorH, _defineProps, customRadius } from "../../lib/share/customProps";
import { createNamespace } from "../../lib/utils/create";
import { calendarProps, DayData, LoadDate, MonthData, WeekTwoArrayList, YearData, YMD } from "./v-calendar";
import vCard from '../v-card/v-card.vue'
import vText from '../v-text/v-text.vue'
import vButton from '../v-button/v-button.vue'
const bem = createNamespace('calendar')
const emits = defineEmits(['change', 'update:modelValue', 'update:show', 'selectDate', 'close'])
const props = defineProps({ ..._defineProps, ...calendarProps })

const _show = ref(props.show)
const _cacheDate: Record<string, YearData> = {};// 缓存年月日
const _cacheViewDateWeeks = ref<Record<string, WeekTwoArrayList[][]>>({})
const modelValue = computed<number[] | string[] | Date[]>(() => props.modelValue)
const rangeSrartAndEnd = ref<any>({
  start: null,
  end: null
})
watch(() => props.show, (val) => {
  _show.value = val
})
const loadDate = ref<LoadDate>({
  current: null,
  last: null,
  next: null
})
const currentWeekTwoArrayList = ref<WeekTwoArrayList[][]>([])
const yearMonth = ref({
  year: 0,
  month: 0,
})
const weekList = ['日', '一', '二', '三', '四', '五', '六',]
const join = computed<string[]>(() => {
  let YJoinM = ''; // 年与月之间的连接符
  let MJoinD = '';// 月与日之间的连接符
  let end = '';// 结束
  let format = props.format // 格式
  let r = /[yY]{4}([^yYmMdD]+)[mM]{2}([^yYmMdD]+)[dD]{2}([^yYmMdD]+)/
  let res = format.match(r)
  if (res) {
    if (res[1] && res[2]) {
      YJoinM = res[1]
      MJoinD = res[2]
      res[3] ? (end = res[3]) : ''
    } else {
      YJoinM = '-'
      MJoinD = '-'
    }
  } else {
    YJoinM = '-'
    MJoinD = '-'
  }
  return [YJoinM, MJoinD, end]
})
const _cacheSelect = ref<Record<string, WeekTwoArrayList>>({})
const selectValue = ref<string[]>([])

const multipleList = ref<WeekTwoArrayList[]>([])
watch(() => modelValue.value, (val) => {
  nextTick(() => {
    updateSelect(val)
  })
}, {
  immediate: true
})
init()
watch(() => _show.value, (val) => {
  if (!val) {
    emits('update:show', val)
  }
})
function handleClose() {
  _show.value = false
  emits('close')
}
function updateSelect(val: number[] | string[] | Date[]) {
  if (val.length) {
    const mode = props.mode
    const list: Pick<DayData, 'year' | 'month' | 'day' | 'ymd' | 'timeStamp'>[] = val.map(item => {
      let data: any = {}
      if (typeof item == "number") {
        const isSecond = isTimestampInSeconds(item)
        const isTimestamp = isSecond || isTimestampInMilliseconds(item)
        if (isTimestamp) {
          data = transfromFun(isSecond ? item * 1000 : item)
        } else {
          error(`${item} 时间戳不符合规范`)
        }
      } else if (typeof item == "string") {
        let res: RegExpMatchArray | null = useRegxTransformValue(item)
        if (res) {
          let year = res[1] ? Number(res[1]) : -1
          let month = res[1] ? Number(res[3]) : -1
          let day = res[1] ? Number(res[5]) : -1
          data.year = year
          data.month = month
          data.day = day
        }
      } else if (item instanceof Date) {
        data = transfromFun(item)
      }
      const timeStamp = new Date(data.year, data.month - 1, data.day).getTime()
      const { ymd } = formatDate({ year: data.year, month: data.month, day: data.day })
      return {
        ...data,
        timeStamp,
        ymd
      }
    }).filter(item => item)

    if (mode === 'single') {
      selectValue.value = list.length ? [list[0].ymd] : []
    } else if (mode === 'multiple') {
      list.forEach((day) => {
        if (selectValue.value.some(date => date === day.ymd)) {
          return
        }

        selectValue.value.push(day.ymd)
      })
    } else if (mode === 'range') {
      const sortList = list.sort((a, b) => a.timeStamp - b.timeStamp)
      const min = sortList[0]
      const max = sortList[sortList.length - 1]
      const currentYaer = yearMonth.value.year
      for (let i = currentYaer; i <= max.year; i++) {
        getYearData(i)
      }
      rangeSrartAndEnd.value.start = min
      rangeSrartAndEnd.value.end = max
      for (const key in _cacheDate) {
        const date = _cacheDate[key]
        if (date.year >= min.year && date.year <= max.year) {
          const months = date.month
          for (let index = 0; index < months.length; index++) {
            const days = months[index].days
            if (days.length) {
              days.forEach((day) => {
                if (day.timeStamp >= min.timeStamp && day.timeStamp <= max.timeStamp) {
                  if (selectValue.value.some(date => date === day.ymd)) {
                    return
                  }
                  selectValue.value.push(day.ymd)
                }
              })
            }
          }
        }
      }
    }
  }
}

function useRegxTransformValue(value: string): RegExpMatchArray | null {
  let momentRxg = /(\d{4})([\u4E00-\u9FFF\/-\/\s/\D]+)?(\d{2})([\u4E00-\u9FFF\/-])?(\d{2})([\u4E00-\u9FFF\/-\/\s/\D]+)?/;
  let res: RegExpMatchArray | null = value.match(momentRxg)
  return res
}
// 判断时间戳是否是秒
function isTimestampInSeconds(timestamp: number) {
  return timestamp.toString().length === 10;
}
// 判断时间戳是否是毫秒
function isTimestampInMilliseconds(timestamp: number) {
  return timestamp.toString().length === 13;
}

function transfromFun(val: string | number | Date) {
  const transformDate = new Date(val)
  return {
    year: transformDate.getFullYear(),
    month: transformDate.getMonth() + 1,
    day: transformDate.getDate()
  }
}
function genValue(vals: (string | number | Date)[]): YMD[] {
  const value: YMD[] = []
  const defaultValue = vals
  for (let i = 0; i < defaultValue.length; i++) {
    const val = defaultValue[i];
    if (typeof val == "number") {
      const isSecond = isTimestampInSeconds(val)
      const isTimestamp = isSecond || isTimestampInMilliseconds(val)
      if (isTimestamp) {
        value.push(transfromFun(isSecond ? val * 1000 : val))
      } else {
        error(`${val} 时间戳不符合规范`)
      }
    } else if (typeof val == "string") {
      const res = useRegxTransformValue(val)
      let d: YMD = {
        year: 0,
        month: 0,
        day: 0
      }
      if (res) {
        d.year = res[1] ? Number(res[1]) : -1
        d.month = res[1] ? Number(res[3]) : -1
        d.day = res[1] ? Number(res[5]) : -1
        value.push(d)
      }
    } else if (val instanceof Date) {
      value.push(transfromFun(val))
    }
  }
  return value
}

function error(str: string) {
  throw str
}

function init() {
  const now = new Date()
  const displayDate: YMD = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate()
  }
  if (modelValue.value.length) {
    const [val] = genValue([modelValue.value[0]])
    displayDate.year = val.year
    displayDate.month = val.month
    displayDate.day = val.day
  }
  yearMonth.value.year = displayDate.year
  yearMonth.value.month = displayDate.month
  getYearData(displayDate.year)
  updateLoadDate(displayDate.year)
  nextTick(() => {
    update(displayDate.year, displayDate.month)
  })

}

function update(year: number, month: number) {
  currentWeekTwoArrayList.value = _cacheDate[year].month.filter(m => m.month == month)[0].weekList
}
function changeYear(add: boolean) {
  if (add) {
    updateLoadDate(yearMonth.value.year + 1)
    yearMonth.value.year += 1
  } else if (!add) {
    updateLoadDate(yearMonth.value.year - 1)
    yearMonth.value.year -= 1
  }
  update(yearMonth.value.year, yearMonth.value.month)
}

function changeMonth(add: boolean) {
  if (add) {
    if (yearMonth.value.month + 1 > 12) {
      yearMonth.value.year += 1
      yearMonth.value.month = 1
      updateLoadDate(yearMonth.value.year)
    } else {
      yearMonth.value.month += 1
    }
  } else {
    if (yearMonth.value.month - 1 < 1) {
      yearMonth.value.year -= 1
      yearMonth.value.month = 12
      updateLoadDate(yearMonth.value.year)
    } else {
      yearMonth.value.month -= 1
    }
  }
  update(yearMonth.value.year, yearMonth.value.month)
}

async function handleConfirm() {
  if (props.confirmFun && typeof props.confirmFun === 'function') {
    let res = props.confirmFun(selectValue.value)
    if (uni.$var.utils.isPromise(res)) {
      await res.then((data: any) => {
        res = data
      })
    } else if (typeof res === 'function') {
      res = await res(selectValue.value)
    }
    if (!res) {
      return
    }
  }
  emits('update:modelValue', [...selectValue.value])
  handleClose()
}

async function selectClick(item: WeekTwoArrayList) {
  if (item.isLast || item.isNext || props.readonly) return
  if (typeof props.asyncSelected === 'function') {
    let promiseResult: any = await props.asyncSelected(item)
    if (typeof promiseResult === 'function') {
      promiseResult = await promiseResult(item);
    }
    if (!promiseResult) return
  }
  const mode = props.mode
  const modeFun = {
    single,
    multiple,
    range
  }
  await modeFun[mode](item)
}

async function single(item: WeekTwoArrayList) {
  selectValue.value = [item.ymd]
}
async function multiple(item: WeekTwoArrayList) {
  if (selectValue.value.some(date => item.ymd === date)) {
    const index = selectValue.value.findIndex(date => item.ymd === date)
    multipleList.value = multipleList.value.filter(t => t.ymd !== item.ymd)
    selectValue.value.splice(index, 1)
  } else {
    multipleList.value.push(item)
    multipleList.value.sort((a: WeekTwoArrayList, b: WeekTwoArrayList) => {
      // 按照年排序
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      // 按照月排序
      if (a.month !== b.month) {
        return a.month - b.month;
      }
      // 按照日排序
      return a.day - b.day;
    })
    selectValue.value = multipleList.value.map(t => t.ymd)
  }
}
async function range(item: WeekTwoArrayList) {
  if (!rangeSrartAndEnd.value.start || rangeSrartAndEnd.value.end) {
    selectValue.value = [item.ymd]
    if (rangeSrartAndEnd.value.end) {
      rangeSrartAndEnd.value.end = null
    }
    rangeSrartAndEnd.value.start = item
  } else {
    // 如果后选的时间小于 开始的时间则交换位置
    if (item.timeStamp < rangeSrartAndEnd.value.start.timeStamp) {
      rangeSrartAndEnd.value.end = rangeSrartAndEnd.value.start
      rangeSrartAndEnd.value.start = item
    } else {
      rangeSrartAndEnd.value.end = item
    }
    selectRangeItems()
  }

}
// 选中范围内的日期
function selectRangeItems() {
  const { start, end } = rangeSrartAndEnd.value
  const { year: startYear, timeStamp: startTime } = start
  const { year: endYear, timeStamp: endTime } = end

  const rangeList = []
  for (const key in _cacheDate) {
    if (startYear == endYear) {
      rangeList.push(_cacheDate[startYear])
      break
    }
    if (_cacheDate[key].year >= startYear && _cacheDate[key].year <= endYear) {
      rangeList.push(_cacheDate[key])
    }
  }
  const vals: string[] = []
  rangeList.forEach(item => {
    item.month.forEach(month => {
      month.days.forEach(day => {
        if (day.timeStamp >= startTime && day.timeStamp <= endTime) {
          const { ymd } = day
          vals.push(ymd)
        }
      })
    })
  })
  selectValue.value = vals
}
function updateLoadDate(year: number) {
  loadDate.value.current = getYearData(year)
  loadDate.value.last = getYearData(year - 1)
  loadDate.value.next = getYearData(year + 1)
}
// async function sync(): Promise<any> {
//   if (typeof props.syncSelected !== 'function') return
//   let promiseResult: any = await props.syncSelected()
//   if (typeof promiseResult === 'function') {
//     promiseResult = await promiseResult();
//   }
//   if (!promiseResult) return
// }


// function clear() {
//   for (const key in _cacheSelect.value) {
//     _cacheSelect.value[key].isSelect = false
//   }
//   if (props.mode === 'range') {
//     rangeSrartAndEnd.value.start = null
//     rangeSrartAndEnd.value.end = null
//   }
//   return true
// }

// 生成展示列表
function genWeekTwoArrayList(year: number, month: number, monthDays: DayData[], lastDays: number, nextDays: number): WeekTwoArrayList[][] {
  const mapKey = `${year}-${month}`
  if (_cacheViewDateWeeks.value[mapKey]) {
    return _cacheViewDateWeeks.value[mapKey]
  }
  const weeks: WeekTwoArrayList[][] = [];
  let week: WeekTwoArrayList[] = [];
  const getWeekDay = monthDays.find(day => day.day === 1)?.weekday
  const lastMonthDays = Array.from(Array(lastDays), ((t, i) => ({ day: i + 1 })))
  const nextMonthDays = Array.from(Array(nextDays), ((t, i) => ({ day: i + 1 })))
  const patchUnshiftDays: any[] = (lastMonthDays.slice(lastMonthDays.length - getWeekDay!, lastMonthDays.length) || []).map((day) => {
    return { ...day, isLast: true }
  })
  week = [...patchUnshiftDays]
  monthDays.forEach((day, index) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length < 7) {
    const next = 7 - week.length
    const patchPushDays: any[] = (nextMonthDays.slice(0, next) || []).map((day) => {
      return { ...day, isNext: true }
    })
    week = [...week, ...patchPushDays]
  }
  if (week.length > 0) {
    weeks.push(week);
  }
  if (weeks.length < 6) {
    const afterItem = weeks[weeks.length - 1][weeks[weeks.length - 1].length - 1]
    if (afterItem.isNext) {
      const patchPushDays: any[] = (nextMonthDays.slice(afterItem.day, afterItem.day + 7) || []).map((day) => {
        return { ...day, isNext: true }
      })
      weeks.push(patchPushDays);
    }
  }

  _cacheViewDateWeeks.value[mapKey] = weeks
  return weeks
}




const _style = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(props.height, props.unit)
  }
})

const lastAndNextStyle = computed(() => {
  return {
    color: '#9b9b9b'
  }
})
const defaultItemStyle = computed(() => {
  return {
    padding: customPOrM([props.space], props.unit)
  }
})
const selectedStyle = computed(() => {
  return (item: DayData) => {
    if (selectValue.value.some(date => date === item.ymd)) {
      return {
        backgroundColor: props.selectBgColor,
        color: props.selectColor,
        'border-radius': customRadius(props.round, props.unit),
        ...props.selectItemStyle
      }
    } else {
      return {}
    }
  }
})


function formatDate(value: Pick<DayData, 'year' | 'month' | 'day'>): Pick<DayData, 'ymd'> {
  return {
    ymd: `${value.year}${join.value[0]}${value.month < 10 ? `0${value.month}` : value.month}${join.value[1]}${value.day < 10 ? `0${value.day}` : value.day}`
  }
}
/**
 * 根据指定年份生成该年每个月份的数据
 * @param year 指定年份
 * @returns 一年每个月份的数据
 */
function getYearData(year: number): YearData {
  if (_cacheDate[year]) {
    return _cacheDate[year]
  }
  const currentDate = new Date(year, 0, 1);
  const yearData: YearData = {
    year: currentDate.getFullYear(),
    month: []
  };
  for (let month = 0; month < 12; month++) {
    const monthData: MonthData = {
      year: currentDate.getFullYear(),
      month: month + 1, // 将月份加 1
      days: [],
      weekList: [],
      startTimeStamp: new Date(currentDate.getFullYear(), month, 1, 0, 0, 0, 0).getTime(),
      endTimeStamp: new Date(currentDate.getFullYear(), month + 1, 0, 23, 59, 59, 999).getTime(),
    };
    const daysInMonth = new Date(currentDate.getFullYear(), month + 1, 0).getDate();
    const lastYearDecemberOrLastMonth = month + 1 === 1 ? new Date(currentDate.getFullYear() - 1, 12, 0).getDate() : new Date(currentDate.getFullYear(), month - 1, 0).getDate()
    const nextYearJanuaryOrNextMonth = month + 1 === 12 ? new Date(currentDate.getFullYear() + 1, 1, 0).getDate() : new Date(currentDate.getFullYear(), month + 1, 0).getDate()
    const firstDay = new Date(currentDate.getFullYear(), month, 1);
    for (let day = 1; day <= daysInMonth; day++) {
      const timeStamp = firstDay.getTime() + (day - 1) * 86400000; // 一天的毫秒数为 86400000
      const startTimeStamp = timeStamp;
      const endTimeStamp = timeStamp + 86399999; // 一天的毫秒数 - 1

      const dayData: DayData = {
        year: currentDate.getFullYear(),
        month: month + 1, // 将月份加 1
        day,
        weekday: (firstDay.getDay() + day - 1) % 7,
        timeStamp,
        startTimeStamp,
        endTimeStamp,
        ...formatDate({
          year: currentDate.getFullYear(),
          month: month + 1,
          day
        }),
      };
      monthData.days.push(dayData);
    }
    monthData.weekList = genWeekTwoArrayList(yearData.year, month + 1, monthData.days, lastYearDecemberOrLastMonth, nextYearJanuaryOrNextMonth)
    yearData.month.push(monthData);
  }
  _cacheDate[yearData.year] = yearData
  return yearData;
}


</script>

<style></style>