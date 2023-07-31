<template>
  <v-card :transparent="props.transparent" :margin="props.margin" :padding="[0]" :bg-color="props.bgColor"
    :unit="props.unit" :width="props.width" :height="props.height">
    <view class="flex items-center">
      <v-card @click="handleMinus" @touchstart="onTouchStart('minus')" @touchend.stop="longPressClearTimeout"
        :margin="[0]" :round="props.buttonRound" :_class="[__modelValue <= props.min ? 'opacity-6' : '']" :padding="[0]"
        :bg-color="props.buttonColor" :unit="props.unit" :width="props.height" :height="props.height">
        <view class="flex flex-1 justify-center items-center">
          <v-icon :color="props.buttonIconColor" :userInteractionEnabled="false" :font-size="22"
            name="remove-outline"></v-icon>
        </view>
      </v-card>
      <input @input="handleInput" v-model="__modelValue" type="number" :disabled="props.disabledInput || props.disabled"
        class="flex-1" :style="{ height: `${props.height}${props.unit}`, textAlign: 'center', 'padding': `0 2px` }" />
      <v-card @click="handleAdd" @touchstart="onTouchStart('add')" @touchend.stop="longPressClearTimeout" :margin="[0]"
        :round="props.buttonRound" :_class="[__modelValue >= props.max ? 'opacity-6' : '']" :padding="[0]"
        :bg-color="props.buttonColor" :unit="props.unit" :width="props.height" :height="props.height">
        <view class="flex flex-1 justify-center items-center">
          <v-icon :color="props.buttonIconColor" :userInteractionEnabled="false" :font-size="22"
            name="add-outline"></v-icon>
        </view>
      </v-card>
    </view>
  </v-card>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<script lang="ts" setup>
import { getCurrentInstance, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { _defineProps } from '../../lib/share/customProps';
import vCard from '../v-card/v-card.vue'
import vIcon from '../v-icon/v-icon.vue'
import { stepperProps } from './v-stepper';
const proxy = getCurrentInstance()?.proxy || null


const props = defineProps({ ..._defineProps, ...stepperProps })

const emits = defineEmits(['update:modelValue'])
const __modelValue = ref(props.modelValue < props.min ? props.min : props.modelValue > props.max ? props.max : props.modelValue)
watch(() => props.modelValue, (val, old) => {
  __modelValue.value = val < props.min ? props.min : val > props.max ? props.max : val
})

// 过滤非法的字符
const filter = (value: number | string) => {
  // 只允许0-9之间的数字，"."为小数点，"-"为负数时候使用
  value = String(value).replace(/[^0-9.-]/g, '')
  // 如果只允许输入整数，则过滤掉小数点后的部分
  if (props.integer && value.indexOf('.') !== -1) {
    value = value.split('.')[0]
  }
  return value;
}
const format: (value: number | string) => number = (value: number | string) => {
  value = filter(value)
  let val = props.min

  // 如果为空字符串，那么设置为0，同时将值转为Number类型
  val = value === '' ? 0 : +value
  // 对比最大最小值，取在min和max之间的值
  val = Math.max(Math.min(props.max, val), props.min)
  // 如果设定了最大的小数位数，使用toFixed去进行格式化
  if (props.decimalLength !== null) {
    val = +(val.toFixed(props.decimalLength))
  }
  return val
}
let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined
  }
}

watch(() => [props.integer, props.decimalLength, props.min, props.max], () => {
  const val = format(__modelValue.value);
  if (val !== __modelValue.value) {
    __modelValue.value = val
  }
})
const handleInput = (e: any) => {
  const { value = '' } = e.detail || {}
  if (value === '') return
  let formatted: string | number = filter(value)
  // 最大允许的小数长度
  if (props.decimalLength !== null && formatted.indexOf('.') !== -1) {
    const pair = formatted.split('.');
    formatted = `${pair[0]}.${pair[1].slice(0, props.decimalLength)}`
  }
  nextTick(() => {
    __modelValue.value = format(formatted)
    emits('update:modelValue', __modelValue.value)
  })
}
// 对值扩大后进行四舍五入，再除以扩大因子，避免出现浮点数操作的精度问题
const add = (num1: number, num2: number) => {
  const cardinal = Math.pow(10, 10);
  return Math.round((num1 + num2) * cardinal) / cardinal
}
const onChange = (type: string) => {
  const diff = type === 'minus' ? -props.step : +props.step
  const value = format(add(__modelValue.value, diff))
  if (value < props.min || value > props.max) {
    return
  }
  emits('update:modelValue', value)
  nextTick(() => {
    parentFormItem?.validate('change', () => {
    })
  })
}
const longPressTimer = ref<number>(NaN)
const longPressClearTimeout = () => {
  clearTimeout(longPressTimer.value)
  longPressTimer.value = NaN
}
onMounted(() => {
  // #ifdef H5
  window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  // #endif
})
onBeforeUnmount(() => {
  // #ifdef H5
  window.removeEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  // #endif
})
const longPressStep = (type: string) => {
  // 每隔一段时间，重新调用longPressStep方法，实现长按加减
  longPressClearTimeout()
  longPressTimer.value = setTimeout(() => {
    onChange(type)
    longPressStep(type)
  }, 250);
}
const handleMinus = () => {
  onChange('minus')
}
const handleAdd = () => {
  onChange('add')
}

const onTouchStart = (type: string) => {
  longPressClearTimeout()
  // 一定时间后，默认达到长按状态
  longPressTimer.value = setTimeout(() => {
    onChange(type)
    longPressStep(type)
  }, 600)
}

</script>

<style></style>