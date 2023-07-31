
<template>
  <view :class="[bem.b(), 'flex']" :style="[containerStyle]">
    <view :class="[bem.be('view', 'content'), 'relative', 'flex', 'flex-wrap']" @click="handeClick"
      @mousedown="handleStart" @mousemove.stop="handleTouchMove" @mouseup.stop="handleTouchEnd" @touchstart="handleStart"
      @touchmove.stop="handleTouchMove" @touchend.stop="handleTouchEnd">
      <view :class="[bem.be('view', 'item')]" v-for="(item, index) in count" :key="index">
        <view :class="[bem.bem('view', 'item', 'icon__content'), 'relative']" :style="[itemStyle]">
          <view :data-index="index + 1" :class="[bem.bem('view', 'item', 'icon')]">
            <v-icon :style="{ width: `${props.size / 2}px` }" :padding="[0, 0]" :size="props.size" 
              :color="activeIndex >= index + 1 ? props.activeColor : props.color"
              :name="activeIndex >= index + 1 ? props.activeIcon : props.icon"></v-icon>
          </view>
          <view v-if="props.half"  :style="{ width: `${props.size / 4}px` }" :data-index="index + .5"  :class="[bem.bem('view', 'item', 'icon'),'absolute','top-0' ,'left-0','overflow-hidden']">
            <v-icon  
              :size="props.size" :padding="[0]"
              :color="Math.ceil(activeIndex) >= index + .5 ? props.activeColor : props.color"
              :name="Math.ceil(activeIndex) >= index + .5 ? props.activeIcon : props.icon"></v-icon>
          </view>
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
import { createNamespace } from "../../lib/utils/create";
import { rateProps } from "./v-rate";
import vIcon from "../v-icon/v-icon.vue";
import { computed, getCurrentInstance, nextTick, onMounted, ref, watch } from "vue";
import { customPOrM, _defineProps } from "../../lib/share/customProps";

const proxy = getCurrentInstance()?.proxy || null
const bem = createNamespace('rate')
const props = defineProps({ ..._defineProps, ...rateProps })
const emits = defineEmits(['update:modelValue', 'move'])
const min = computed(() => props.min)
const boundary = (value: number) => {
  return value < min.value ? min.value : value
}
const activeIndex = ref(boundary(props.modelValue))

const containerStyle = computed(() => {
  return {
    padding: customPOrM(props.padding, props.unit),
    margin: customPOrM(props.margin, props.unit),
    'touch-action': 'none'
  }
})
watch(() => props.modelValue, (newVal: number) => {
  activeIndex.value = boundary(newVal)
  emits('update:modelValue', activeIndex.value)
}, {
  immediate: true
})
const count = computed(() => props.count)
const itemStyle = computed(() => {
  return {
    "margin-right": `${uni.upx2px(props.itemSpace)}px`,
    ...props.itemStyle
  }
})

const rateBoxLeft = ref<number>(0), rateContainerHeight = ref(0), rateItemWidth = ref(0)

// ios 事件上touch比click先触发
const isMoving = ref<boolean>(false)
const getRect = (target: string, all = false) => {
  return new Promise((resolve) => {
    uni.createSelectorQuery()
      .in(proxy)[all ? 'selectAll' : 'select'](target)
      .boundingClientRect((rect: any) => {
        resolve(rect)
      })
      .exec()
  })
}

let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined

  }
}
onMounted(() => {
  getRect(`.${bem.b()}`).then((res: any) => {
    rateBoxLeft.value = res.left
  })
  getRect(`.${bem.be('view', 'content')}`).then((res: any) => {
    rateContainerHeight.value = res.height
  })

  getRect(`.${bem.be('view', 'item')}`).then((res: any) => {
    rateItemWidth.value = res.width
  })
})

const space = computed(() => {
  let val = 0
  if (props.unit == 'px') {
    val = props.itemSpace * 2
  }
  if (props.unit == 'rpx' || props.unit == 'upx') {
    val = uni.upx2px(props.itemSpace)
  }
  return val
})


const getActiveIndex = (e: any, isClick: boolean = false) => {
  if (props.disabled) return
  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  getRect('.v-rate-view__item--icon', true).then((res: any) => {
    const list = res
      .sort(function (cur: any, next: any) { return cur.dataset.index - next.dataset.index; })
    const target = list.find(function (item: any) { return x >= item.left && x <= item.right && y <= (item.bottom + (item.height / 3)) });
    if (target) {
      let index = target.dataset.index;
      if (target.left == 0 && x < target.width / 3) {
        index = 0
      }
      activeIndex.value = boundary(index)
      nextTick(() => {
        emits('update:modelValue', activeIndex)
      })
    }
  })
}
const isStart = ref(false)
const handeClick = (e: any) => {
  if (props.disabled) return
  if (uni.getSystemInfoSync().platform.toLowerCase() === 'os' && isMoving.value) return
  e && typeof (e.stopPropagation) === 'function' && e.stopPropagation()
  isStart.value = false
  const x = e.touches[0].clientX
  const y = e.touches[0].clientY
  getRect('.v-rate-view__item--icon', true).then((res: any) => {
    let target = res.find(function (item: any) { return x >= item.left && x <= item.right && y <= (item.bottom + (item.height / 3)) });
    console.log('target', target)
    if (target) {
      let index = target.dataset.index;
      const oldIndex = activeIndex.value
      activeIndex.value = index === 1 && oldIndex == index ? boundary(0) : boundary(index)
      nextTick(() => {
        emits('update:modelValue', activeIndex)
        parentFormItem?.validate('change', () => {
        })
      })
    }
  })
}
const handleStart = (e: any) => {
  if (!props.touchable) return
  e && typeof (e.stopPropagation) === 'function' && e.stopPropagation()
  isStart.value = true
}
const handleTouchMove = (e: any) => {
  if (!props.touchable || !isStart.value) return
  e && typeof (e.stopPropagation) === 'function' && e.stopPropagation()
  getActiveIndex(e);
  emits('move', e)
}

const handleTouchEnd = (e: any) => {
  if (!props.touchable || !isStart.value) return
  e && typeof (e.stopPropagation) === 'function' && e.stopPropagation()
  isStart.value = false
}
</script>

<style></style>