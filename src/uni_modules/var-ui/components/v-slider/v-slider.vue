<template>
  <view
    :class="[bem.b(), `flex relative justify-center items-center`, direction === 'row' ? 'flex-row' : 'flex-col', disabled ? 'cursor-not-allowed	' : '']"
    :style="containerStyle">
    <view ref="line" :class="[fullLineClass, 'relative']" :style="lineStyle">
      <view ref="activeLine" :class="[activeLineClass, 'absolute', direction === 'row' ? 'left-0' : 'top-0']"
        :style="activeLineStyle">
      </view>
      <view :class="['absolute', 'w-full', 'h-full', 'flex', direction !== 'row' ? 'justify-center' : 'items-center']">
        <view :class="['absolute', 'flex', 'justify-center', 'items-center']" :style="[buttonStyle, beforeButtonStyle]"
          :data-index="0" @touchstart.stop.prevent="handleTouchstart" @touchmove.stop.prevent="handleTouchmove"
          @touchend="handleTouchend" @touchcancel="handleTouchend" @mousedown="handleTouchstart"
          @mouseup="handleTouchend">
          <v-popover :stopShowClickEvent="true" :is-mask="false" ref="popover0" bgColor="transparent"
            :pointer-color="pointerColor" :position="popoverPostion">
            <view :class="beforeButtonClass" ref="beforeButton">
              <slot name="btn">
                <v-card :height="buttonHeight" :bgColor="buttonBgColor" :width="buttonWidth" :padding="[0]" :margin="[0]"
                  :round="9999"></v-card>
              </slot>
            </view>
            <template #content>
              <v-card v-if="showPopover" :data-index="0" :bgColor="bubbleBgColor" :width="100" :padding="[0]"
                :margin="[0]" :round="16">
                <view class="flex justify-center">
                  <v-text :margin="[0]">{{ Math.floor(value[0]) }}</v-text>
                </view>
              </v-card>
            </template>
          </v-popover>
        </view>
        <view v-if="isRang" :class="['absolute', 'flex', 'justify-center', 'items-center']"
          :style="[buttonStyle, afterButtonStyle]" :data-index="1" @touchstart.stop.prevent="handleTouchstart"
          @touchmove.stop.prevent="handleTouchmove" @touchend="handleTouchend" @touchcancel="handleTouchend"
          @mousedown="handleTouchstart" @mouseup="handleTouchend">
          <v-popover :stopShowClickEvent="true" :is-mask="false" bgColor="transparent" ref="popover1"
            :pointer-color="pointerColor" :position="popoverPostion">
            <view :class="afterButtonClass" ref="afterButton">
              <slot name="btn">
                <v-card :height="buttonHeight" :bgColor="buttonBgColor" :width="buttonWidth" :padding="[0]" :margin="[0]"
                  :round="9999"></v-card>
              </slot>
            </view>
            <template #content>
              <v-card v-if="showPopover" :data-index="0" :bgColor="bubbleBgColor" :width="100" :padding="[0]"
                :margin="[0]" :round="16">
                <view class="flex justify-center">
                  <v-text :margin="[0]">{{ Math.floor(value[1]) }}</v-text>
                </view>
              </v-card>
            </template>
          </v-popover>
        </view>
      </view>
    </view>
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
import { computed, getCurrentInstance, nextTick, onMounted, ref, watch } from 'vue';
import { customPOrM, customWorH, _defineProps } from '../../lib/share/customProps';
import { createNamespace } from '../../lib/utils/create';
import { sliderProps } from './v-slider';

const proxy = getCurrentInstance()?.proxy || null
const bem = createNamespace('slider')
const fullLineClass = bem.be('full', 'line')
const activeLineClass = bem.be('active', 'line')
const beforeButtonClass = bem.be('before', 'button')
const afterButtonClass = bem.be('after', 'button')
const emits = defineEmits(['update:modelValue'])
const props = defineProps({ ..._defineProps, ...sliderProps })
console.log('props', props.disabled);

// 是否时范围选择
const isRang = computed(() => {
  return props.range
})

const value = ref<number[]>(Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue])
const popover0 = ref()
const popover1 = ref()

// 需要获取的控件信息
const lineSize = ref<UniApp.NodeInfo>({})
const activeLine = ref<UniApp.NodeInfo>({})
const beforButtonSize = ref<UniApp.NodeInfo>({
  width: 0,
  height: 0
})
const afterButtonSize = ref<UniApp.NodeInfo>({
  width: 0,
  height: 0
})
// 容器样式
const containerStyle = computed(() => ({
  width: props.direction === 'row' ? customWorH(props.width, props.unit) : customWorH(props.width, props.unit),
  height: props.direction === 'row' ? customWorH(props.height, props.unit) : customWorH(props.height, props.unit),
  borderRadius: '12px',
  margin: customPOrM(props.margin, props.unit),
}))

// 完整线条样式
const lineStyle = computed(() => {
  return {
    width: props.direction === 'row' ? customWorH(props.width, props.unit) : customWorH(props.width, props.unit),
    height: props.direction === 'row' ? customWorH(props.height, props.unit) : customWorH(props.height, props.unit),
    backgroundColor: props.lineColor,
    borderRadius: '12px',
  }
})



const buttonStyle = computed(() => {
  return {
    width: customWorH(props.buttonWidth, props.unit),
    height: customWorH(props.buttonHeight, props.unit),
    // marginLeft: `-${(beforButtonSize.value?.width || 0) / 2}px`,
    // marginTop: `-${(beforButtonSize.value?.height || 0) / 2}px`,
    [props.direction === 'row' ? 'marginLeft' : 'marginTop']: `-${(beforButtonSize.value[props.direction === 'row' ? 'width' : 'height'] || 0) / 2}px`,
  }
})

const beforeButtonStyle = computed(() => {
  return {
    [props.direction === 'row' ? 'left' : 'top']: `${value.value[0]}%`,
  }
})
const afterButtonStyle = computed(() => {
  return {
    [props.direction === 'row' ? 'left' : 'top']: `${value.value[1]}%`,
  }
})

// 最大值减去最小值 得到 范围模式下线条长度百分比
const getGangWidth = computed(() => {
  return Math.max(...value.value) - Math.min(...value.value)
})


const activeLineStyle = computed(() => {
  return {
    ... (props.direction === 'row' ? {
      ...(isRang.value ? { 'left': `${Math.min(...value.value)}%`, width: `${getGangWidth.value}%`, height: lineStyle.value.height } : { width: `${value.value[0]}%`, height: lineStyle.value.height })
    } : {
      ...(isRang.value ? { 'top': `${Math.min(...value.value)}%`, height: `${getGangWidth.value}%`, width: lineStyle.value.width } : { width: lineStyle.value.width, height: `${value.value[0]}%` })
    }),
    opacity: props.disabled ? 0.6 : 1,
    backgroundColor: props.activeColor,
  }
})

onMounted(() => {
  nextTick(() => {
    //  为什么这里需要判断h5，因为我在使用过程中发现 多个组件同一个页面时 获取到组件宽高都是同一个，解决办法下面是临时办法，出现的原因暂时未知
    // #ifdef H5
    uni.$var.utils.getRect(`.${fullLineClass}`, proxy?.$refs.line, false).then((res) => {
      lineSize.value = res
    })
    // #endif
    // #ifndef H5
    uni.$var.utils.getRect(`.${fullLineClass}`, proxy, false).then((res) => {
      lineSize.value = res
    })
    // #endif

    // #ifdef H5
    uni.$var.utils.getRect(`.${activeLineClass}`, proxy?.$refs.activeLine, false).then((res) => {
      activeLine.value = res
    })
    // #endif
    // #ifndef H5
    uni.$var.utils.getRect(`.${activeLineClass}`, proxy, false).then((res) => {
      activeLine.value = res
    })
    // #endif
    // #ifdef H5
    uni.$var.utils.getRect(`.${beforeButtonClass}`, proxy?.$refs.beforeButton, false).then((res) => {
      beforButtonSize.value = res
    })
    // #endif
    // #ifndef H5
    uni.$var.utils.getRect(`.${beforeButtonClass}`, proxy, false).then((res) => {
      beforButtonSize.value = res
    })
    // #endif
    // #ifdef H5
    uni.$var.utils.getRect(`.${afterButtonClass}`, proxy?.$refs.afterButton, false).then((res) => {
      afterButtonSize.value = res
    })
    // #endif
    // #ifndef H5
    uni.$var.utils.getRect(`.${afterButtonClass}`, proxy, false).then((res) => {
      afterButtonSize.value = res
    })
    // #endif
  })
})

let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined

  }
}


// 拖拽事件处理


const getClientXY = (event: MouseEvent | TouchEvent) => {
  let clientX: number = 0
  let clientY: number = 0
  // #ifdef H5
  if (event.type.startsWith('touch')) {
    clientY = (event as TouchEvent).touches[0].clientY
    clientX = (event as TouchEvent).touches[0].clientX
  } else {
    clientY = (event as MouseEvent).clientY
    clientX = (event as MouseEvent).clientX
  }
  // #endif
  //  #ifndef H5
  clientX = (event as TouchEvent).touches[0].clientX
  clientY = (event as TouchEvent).touches[0].clientY
  // #endif

  return {
    clientX,
    clientY,
  }
}

const beforeCurrentPosition = computed(() => {
  return `${((value.value[0] - min.value) / (max.value - min.value)) * 100
    }%`
})
const afterCurrentPosition = computed(() => {
  return `${((value.value[1] - min.value) / (max.value - min.value)) * 100
    }%`
})
const isDrag = ref(false)
const eventPoint = ref({
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  startPosition: 0,
  newPosition: 0
})
const getRange = () => {
  return props.max - props.min;
}
const resetStatus = () => {
  eventPoint.value.startX = 0
  eventPoint.value.startY = 0
}

const buttonIndex = ref(0)
let isMobile = true
// #ifdef H5  
if (navigator.userAgent.indexOf('Mobile') === -1) {
  isMobile = false
}
// #endif

async function handleTouchstart(e: MouseEvent | TouchEvent) {
  if (props.disabled) {
    return
  }

  isDrag.value = true
  resetStatus()
  const index = e.currentTarget.dataset.index
  buttonIndex.value = index
  const { clientX, clientY } = getClientXY(e)
  const isRow = props.direction === 'row'
  if (isMobile) {
    if (!isRow) {
      eventPoint.value.startY = clientY
    } else {
      eventPoint.value.startX = clientX
    }
  }
  eventPoint.value.startPosition = Number.parseFloat(index ? afterCurrentPosition.value : beforeCurrentPosition.value)
  eventPoint.value.newPosition = eventPoint.value.startPosition
  // #ifdef H5
  // pc端 需要监听事件 使用mouse 离开目标元素就会跳动44px 所以不使用 handleTouchstart事件的坐标
  if (!isMobile) {
    window.addEventListener('mousedown', handleMouseDown)
  }
  window.addEventListener('mousemove', handleTouchmove)
  window.addEventListener('touchmove', handleTouchmove)
  window.addEventListener('mouseup', handleTouchend)
  window.addEventListener('touchend', handleTouchend)
  window.addEventListener('contextmenu', handleTouchend)
  // #endif
}
function handleMouseDown(e: MouseEvent) {
  if (isDrag.value) {
    const { clientX, clientY } = getClientXY(e)
    const isRow = props.direction === 'row'
    if (!isRow) {
      eventPoint.value.startY = clientY
    } else {
      eventPoint.value.startX = clientX
    }
  }
}

const min = computed(() => props.min)
const max = computed(() => props.max)

async function handleTouchmove(e: MouseEvent | TouchEvent) {
  if (props.disabled) return
  if (!isDrag.value) return
  const index = buttonIndex.value
  const { clientX, clientY, } = getClientXY(e)
  let diff = 0
  const isRow = props.direction === 'row'
  if (!isRow) {
    if (!lineSize.value?.height) return
    eventPoint.value.currentY = clientY
    diff = ((eventPoint.value.currentY - eventPoint.value.startY) / lineSize.value.height) * 100
  } else {
    if (!lineSize.value?.width) return
    eventPoint.value.currentX = clientX
    diff = ((eventPoint.value.currentX - eventPoint.value.startX) / lineSize.value.width) * 100
  }
  eventPoint.value.newPosition = eventPoint.value.startPosition + diff
  if (index) {
    popover1.value?.open()
    await popover1.value?.updateArrow()
  } else {
    popover0.value?.open()
    await popover0.value?.updateArrow()
  }
  setPosition(eventPoint.value.newPosition, index)
}
function handleTouchend(e: MouseEvent | TouchEvent) {
  isDrag.value = false
  emits('update:modelValue', isRang.value ? value.value : value.value[0])
  buttonIndex.value = 0
  nextTick(() => {
    popover0.value?.close()
    popover1.value?.close()
    parentFormItem?.validate('change', () => {
    })
  })
  // #ifdef H5
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mousemove', handleTouchmove)
  window.removeEventListener('touchmove', handleTouchmove)
  window.removeEventListener('mouseup', handleTouchend)
  window.removeEventListener('touchend', handleTouchend)
  window.removeEventListener('contextmenu', handleTouchend)
  // #endif
}
const step = computed(() => props.step)
const precision = computed(() => {
  const precisions = [props.min, props.max, props.step].map((item) => {
    const decimal = `${item}`.split('.')[1]
    return decimal ? decimal.length : 0
  })
  return Math.max.apply(null, precisions)
})

const setPosition = async (newPosition: number, index: number) => {
  if (newPosition === null || Number.isNaN(+newPosition)) return
  if (newPosition < 0) {
    newPosition = 0
  } else if (newPosition > 100) {
    newPosition = 100
  }
  const lengthPerStep = 100 / ((max.value - min.value) / step.value)
  if (props.natureMove) {
    value.value[index] = newPosition
  } else {
    const steps = Math.round(newPosition / lengthPerStep)
    let val = steps * lengthPerStep * (max.value - min.value) * 0.01 + min.value
    val = Number.parseFloat(val.toFixed(precision.value))
    value.value[index] = val
  }
  await nextTick()
}
</script>

<style></style>