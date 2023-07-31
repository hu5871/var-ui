<template>
  <view class="flex">
    <slot name="prefix">
      <v-text :margin="[0,5]" :size="props.prefixSize" :color="props.prefixColor" :label="props.prefixLabel"></v-text>
    </slot>
    <slot name="default" :data="disValue">
      <v-text :size="props.fontSize" :color="props.color" :label="disValue"></v-text>
    </slot>
    <slot name="suffix">
      <v-text :margin="[0,5]" :size="props.suffixSize" :color="props.suffixColor" :label="props.suffixLabel"></v-text>
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
import { onMounted, ref } from 'vue';
import { requestAnimationFrame, cancelAnimationFrame } from './requestAnimationFrame'
import { _defineProps } from '../../lib/share/customProps';
import vText from '../v-text/v-text.vue'
import { countupProps } from './v-countup';
const props = defineProps({ ..._defineProps, ...countupProps })

let startTime: number | undefined
let timestamp: number | undefined
let rafId: number | undefined
let startValue: number = 0
let duration = props.duration
let printVal = 0
let disValue = ref('')
let startStatus = false
let modeDown = props.startValue > props.endValue
onMounted(() => {
  start()
})


function start() {
  if (startStatus) return
  startStatus = true
  startValue = printVal || props.startValue
  startTime = undefined
  rafId = requestAnimationFrame(count)

}
function pause() {
  cancelAnimationFrame(rafId);
  startStatus = false
}

function reset() {
  startTime = undefined;
  cancelAnimationFrame(rafId);
  disValue.value = formatNumber(props.startValue);
}
function count(t: number) {
  if (!startTime) startTime = t
  timestamp = t
  const progress = timestamp - startTime;
  if (props.useEasing) {
    if (modeDown) {
      printVal = startValue - easingFn(progress, 0, startValue - props.endValue, duration) || 0;
    } else {
      printVal = easingFn(progress, startValue, props.endValue - startValue, duration);
    }
  } else {
    if (modeDown) {
      printVal = startValue - (startValue - props.endValue) * (progress / duration);
    } else {
      printVal = startValue + (props.endValue - startValue) * (progress / duration);
    }
  }
  if (modeDown) {
    printVal = printVal < props.endValue ? props.endValue : printVal;
  } else {
    printVal = printVal > props.endValue ? props.endValue : printVal
  }
  disValue.value = formatNumber(printVal)
  if (progress < duration) {
    rafId = requestAnimationFrame(count)
  } else {
    printVal = 0
    startStatus = false
  }
}


function isNumber(value: any) {
  return !isNaN((parseFloat(value))) && typeof value === 'number'
}

function formatNumber(num: number) {
  let decimalNum = num.toFixed(props.decimalPlaces);
  decimalNum += '';
  const x = decimalNum.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  if (props.separator && !isNumber(props.separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + props.separator + '$2');
    }
  }
  return x1 + x2;
}
function easingFn(t = 0, b = 0, c = 0, d = 0) {
  let p = (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  return p;
}

defineExpose({
  start,
  pause,
  reset
})
</script>

<style>

</style>