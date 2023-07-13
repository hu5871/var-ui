<template>
  <template v-if="isPop">
    <v-picker joinStr="" v-model:show="_show" :confirmText="confirmText" :confirmColor="confirmColor"
      :titleText="titleText" :titleColor="titleColor" :cancelText="cancelText" :cancelColor="cancelColor" :height="height"
      :containerStyle="containerStyle" :itemStyle="itemStyle" :columns="columns" @change="onChange" @close="handleClose"
      @confirm="handleConfirm" :defaultIndex="_valueIndex" :maxLevel="maxLevel">
    </v-picker>
  </template>
  <template v-else>
    <v-picker joinStr="" :height="height" :isPop="false" :containerStyle="containerStyle" :itemStyle="itemStyle"
      :columns="columns" @change="onChange" :defaultIndex="_valueIndex" :maxLevel="6"></v-picker>
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
import vPicker from '../v-picker/v-picker.vue';
import { ColData, DataRegexMap, datetimeProps, Mode } from './v-datetime-picker';
import { computed, nextTick, ref, watch } from 'vue';


const props = defineProps({ ...datetimeProps })
const emits = defineEmits(['change', 'update:modelValue', 'update:show', 'close', 'confirm'])
const mode = computed<Mode>(() => props.mode)
const _value = ref(props.modelValue)
const _valueArr = ref<string[]>([])
const _valueIndex = ref<number[]>([])
const _show = ref(props.show)

const dataRegexMap: DataRegexMap<RegExp> = {
  'date': /^(\d{4})?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2}))?(?:\D*(\d{1,2}))?(?:\D*(\d{1,2}))?$/,
  'year-month': /^(\d{4})?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?$/,
  'date-time': /^(\d{4})?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?$/,
  'time': /^(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?(?:\D*(\d{1,2})\D*)?$/
}

function handleRegexRes(arr: RegExpMatchArray|string[]) {
  if (!arr.length) return []
  const map: DataRegexMap<(arr: RegExpMatchArray|string[]) => string[]> = {
    date,
    "year-month": yearMonth,
    'date-time': dateTime,
    time
  }
  function date(arr: RegExpMatchArray|string[]) {
    return arr.slice(1, 4)
  }
  function yearMonth(arr: RegExpMatchArray|string[]) {
    return arr.slice(1, 3)
  }

  function dateTime(arr: RegExpMatchArray|string[]) {
    return arr.slice(1, 7)
  }
  function time(arr: RegExpMatchArray|string[]) {
    return arr.slice(1, 4)
  }
  return map[mode.value](arr)
}

watch(() => props.show, (val) => {
  if (val) {
    init()
  }
  _show.value = val
})
watch(() => _show.value, (val) => {
  if (!val) {
    emits('update:show', val)
  }
})




let modeMap: Record<string, any> = {
  'date': getDate,
  'year-month': getDate,
  'date-time': getDate,
  'time': getTime
}
const startTimeStamp = computed(() => props.startTimeStamp)
const endTimeStamp = computed(() => props.endTimeStamp)
const r = /(?:[yY]{4}([^yYmMdDhHsS\s]+))?(?:[mM]{2}([^yYmMdDhHsS\s]+))?(?:[dD]{2}([^yYmMdDhHsS\s]+))?(?:[hH]{2}([^yYmMdDhHsS\s]+))?(?:[mM]{2}([^yYmMdDhHsS\s]+))?(?:[sS]{2}([^yYmMdDhHsS\s]+))?/
const getJoinString = computed(() => {
  const format = props.format
  const [str, yearSuffix = '', monthSuffix = '', daySuffix = '', hourSuffix = '', minuteSuffix = '', secondSuffix = ''] = format.match(r) || []
  return {
    yearSuffix,
    monthSuffix,
    daySuffix,
    hourSuffix,
    minuteSuffix,
    secondSuffix
  }
})

let getItemPointer = 0
let val = ''
function getIndexItem(arr: ColData[]) {
  if (_valueArr.value[getItemPointer] === undefined) return []
  let list: any[] = []
  let i = 0

  while (arr.length >= i) {
    if (arr[i].value == Number(_valueArr.value[getItemPointer])) {
      list.push(i)
      val += arr[i].text
      getItemPointer++
      if (arr[i]?.children?.length) {
        let li = getIndexItem(arr[i]!.children!)
        list = [...list, ...li]
      }
      break
    }
    i++
  }
  getItemPointer = 0
  return list
}
const columns = computed(() => {
  if (!modeMap[mode.value]) {
    console.error('check prop mode is not exist or not is legal value, in v-datatime-picker components')
    return []
  }
  let list: ColData[] = (mode.value === 'year-month' || mode.value === 'date-time' || mode.value === 'date') ? modeMap[mode.value](mode.value === 'year-month', mode.value == 'date-time') : modeMap[mode.value]()
  if (props.customData && typeof props.customData === 'function') {
    list = props.customData(list)
  }
  _valueIndex.value = getIndexItem(list)
  _value.value = val
  nextTick(() => {
    val = ''
    emits('update:modelValue', _value.value)
  })
  return list
})

function init() {
  _value.value = props.modelValue
  if (typeof _value.value === 'string') {
    const res = _value.value.match(dataRegexMap[mode.value])
    if (res) {
      _valueArr.value = handleRegexRes(res)
      _valueIndex.value = getIndexItem(columns.value)
    }
  }else if( _value.value  instanceof Date){
     const res= getConcreteDate(_value.value)
     if(res){
      let sortDateArr=[res.year+'', res.month+'', res.day+'', res.hours+'', res.minutes+'', res.seconds+'']
      _valueArr.value= mode.value === 'time' ? sortDateArr.slice(3, 6) : sortDateArr
      _valueIndex.value = getIndexItem(columns.value)
     }
  }
}
init()
function handleClose() {
  _show.value = false
  emits('close')
}
function handleConfirm() {
  _show.value = false
  emits('update:modelValue', _value.value)
  emits('confirm', {
    valueStr: _value.value
  })
}
function onChange(data: any) {
  const list = data.data
  let modelString = ''
  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    modelString += `${item.text}`
  }
  _valueIndex.value = data.indexs
  _value.value = modelString
  emits('change', data)
}

function getConcreteDate(date: Date) {
  let year, month, day, hours, minutes, seconds
  year = date.getFullYear()
  month = date.getMonth() + 1
  day = date.getDate()
  hours = date.getHours()
  minutes = date.getMinutes()
  seconds = date.getSeconds()
  return {
    year,
    month,
    day,
    hours,
    minutes,
    seconds
  }
}
function genHourMinutesSeconds({ hourSuffix, minuteSuffix, secondSuffix }: Record<string, string>): ColData[] {
  const hours = []
  const minutes = []
  const seconds = []
  if (props.isSecond) {
    // 秒数数据
    for (let i = 0; i <= 59; i++) {
      seconds.push({
        text: i.toString().padStart(2, '0').padEnd(3, secondSuffix),
        value: i,
      })
    }
  }

  // 分钟数据
  for (let i = 0; i <= 59; i++) {
    minutes.push({
      text: i.toString().padStart(2, '0').padEnd(3, minuteSuffix),
      children: [...seconds],
      value: i,
    })
  }
  // 小时数据
  for (let i = 0; i <= 23; i++) {
    hours.push({
      value: i,
      text: i.toString().padStart(2, '0').padEnd(3, hourSuffix),
      children: [...minutes]
    })
  }
  return hours
}
function getDate(isDay: boolean = false, isTime: boolean = false) {
  const { year: startYear, month: startMonth, day: startDay, hours: startHours, minutes: startMinutes, seconds: startSeconds } = getConcreteDate(new Date(startTimeStamp.value))
  const { year: endYear, month: endMonth, day: endDay, hours: endHours, minutes: endMinutes, seconds: endSeconds } = getConcreteDate(new Date(endTimeStamp.value))
  let list: ColData[] = []
  const { yearSuffix, monthSuffix, daySuffix, hourSuffix, minuteSuffix, secondSuffix } = getJoinString.value
  let HMS

  if (isTime) {
    HMS = genHourMinutesSeconds({ hourSuffix, minuteSuffix, secondSuffix })
  }
  for (let i = startYear; i <= endYear; i++) {
    const currentDate = new Date(i, 0, 1);
    const data: ColData = {
      value: i,
      text: String(i) + yearSuffix,
      children: []
    }
    for (let m = 0; m < 12; m++) {
      let month = m + 1
      if (startYear == i && startMonth > month) {
        continue
      }
      const monthDate: ColData = {
        value: month,
        text: month < 10 ? `0${month}${monthSuffix}` : `${month}${monthSuffix}`, // 将月份加 1
        children: [],
      };
      if (isDay) {
        data.children!.push(monthDate)
        continue
      }
      const daysInMonth = new Date(currentDate.getFullYear(), m + 1, 0).getDate();
      for (let day = 1; day <= daysInMonth; day++) {
        if (startYear == i && startMonth >= month && startDay > day) {
          continue
        }
        const dayData: ColData = {
          value: day,
          text: day < 10 ? `0${day}${daySuffix}` : `${day}${daySuffix}`,
          children: []
        };
        if (isTime && HMS && HMS.length) {
          dayData.children = HMS
        }
        monthDate.children!.push(dayData);
      }
      data.children!.push(monthDate)
    }
    list.push(data)
  }

  return list
}
function getTime() {
  const { hourSuffix, minuteSuffix, secondSuffix } = getJoinString.value
  return [...genHourMinutesSeconds({ hourSuffix, minuteSuffix, secondSuffix })] as ColData[]
}
</script>

<style></style>