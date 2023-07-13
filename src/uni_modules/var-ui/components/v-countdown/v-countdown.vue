<template>
  <view class="flex">
    <slot :time="time_data" :format="value">
      <v-text :color="props.color" :label="value"></v-text>
    </slot>
  </view>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<script lang="ts" setup>
import vText from '../v-text/v-text.vue'
import { computed, ref, onMounted, watch, onBeforeUnmount } from 'vue';
import { _defineProps } from '../../lib/share/customProps';
import { countdownProps } from './v-countdown';

const props = defineProps({ ..._defineProps, ...countdownProps })
const time = computed(() => {
  const date = new Date().valueOf()
  let t = 0;
  if (isDateType.value && !props.time) {
    t = Number(props.date.valueOf()) - Number(date.valueOf())
  } else {
    //时间戳
    if (!isNaN(Number(props.date)) && !props.time) {
      t = Number(props.date) - Number(date.valueOf())
    } else if (props.time) { // 总毫秒数
      t = props.time
    }
  }
  return t
})
const isDateType = computed(() => {
  return props.date instanceof Date
})


onMounted(() => {
  if (props.auto) {
    start()
  }
})
const value = computed<string>(() => {
  let formatValue = props.format
  formatValue = formatValue.replace(/(DD)/g, String(time_data.value.day));
  formatValue = formatValue.replace(/(HH)/g, String(time_data.value.hour));
  formatValue = formatValue.replace(/(MM)/g, String(time_data.value.minutes));
  formatValue = formatValue.replace(/(SS)/g, String(time_data.value.seconds));
  return formatValue;
});
let time_data = computed(() => {
  return formatTime(time.value - now.value)
});
let intervalId: number | undefined = undefined
let now = ref(0);
let isStart = ref(false)
function start() {
  if (isStart.value) return
  isStart.value = true
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    let lst = now.value + 100;
    if (lst > time.value) {
      clearInterval(intervalId);
      return;
    }
    now.value = lst;
  }, 100)
}
interface timeFormat {
  day: number | string;
  hour: number | string;
  minutes: number | string;
  seconds: number | string;
}
function formatTime(currentTime: number): timeFormat {
  const days = Math.max(Math.floor(currentTime / 1000 / 60 / 60 / 24), 0)
  const hours = Math.max(Math.floor((currentTime / 1000 / 60 / 60) % 24), 0);
  const minutes = Math.max(Math.floor((currentTime / 1000 / 60) % 60), 0);
  const seconds = Math.max(Math.floor((currentTime / 1000) % 60), 0);
  const time: timeFormat = {
    day: days > 9 ? days : "0" + days, //天
    hour: hours > 9 ? hours : "0" + hours, //小时,
    minutes: minutes > 9 ? minutes : "0" + minutes, //分.
    seconds: seconds > 9 ? seconds : "0" + seconds, //秒。
  };
  return time;
}

onBeforeUnmount(()=>{
  clearInterval(intervalId);
  intervalId=undefined
})

// 暂停
function pause() {
  isStart.value = false
  clearInterval(intervalId);
}
defineExpose({
  start,
  pause,

})
</script>

<style></style>