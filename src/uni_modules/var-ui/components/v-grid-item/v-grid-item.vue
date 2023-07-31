
<template>
  <view  @click="handleClick"  :class="[`relative flex flex-col items-center justify-center`,'overflow-hidden']" :style="_itemStyle">
    <slot></slot>
    <view class="absolute w-full top-0 bottom-0"  :hoverClass="hoverClass" :hoverStartTime="hoverStartTime" :hoverStayTime="hoverStayTime"></view>
  </view>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, inject, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { customWorH } from '../../lib/share/customProps';
import { gridItemProps } from './v-grid-item';

const emits=defineEmits(['click'])

const proxy = getCurrentInstance()?.proxy || null
const props = defineProps({ ...gridItemProps })
const col = inject('vGridCol', computed(() => 0))
const itemHeight=inject('vGridHeight',computed(() =>0))
const width = computed(()=>`${100 / col.value}%`)
const border = inject('vGridBorder', computed(() => ({
  border: 0,
  borderColor: 'transparent',
  borderStyle: 'solid',
  unit: 'rpx'
})))


const cacheList = inject('vGridCacheList', computed(() => []))

const calculateBorder = computed(() => {
  const borderStyle = {
    borderRight: '',
    borderBottom: ''
  }
  if (!border.value.border) return
  cacheList.value.forEach((t: { id: any }, index: number) => {
    const len = cacheList.value.length
    if (t.id == proxy && (index + 1) % col.value !== 0) {
      borderStyle.borderRight = `${border.value.border}${border.value.unit} ${border.value.borderStyle} ${border.value.borderColor}`
    }
    const lessNum = len % col.value === 0 ? col.value : len % col.value
    if (t.id == proxy && (index < len - lessNum)) {
      borderStyle.borderBottom = `${border.value.border}${border.value.unit} ${border.value.borderStyle} ${border.value.borderColor}`
    }
  })
  return borderStyle
})
const _itemStyle = computed(() => {
  return {
    width: width.value,
    height: customWorH(itemHeight.value, props.unit),
    'box-sizing': 'border-box',
    ...calculateBorder.value
  }
})

let parent: any = proxy?.$parent
while (parent) {
  if (parent?.CName == 'vGrid' || !parent) {
    break;
  } else {
    parent = parent?.$parent || undefined
  }
}
function handleClick(e:any){
  emits('click',e)
}


onMounted(async () => {
  if (parent?.addItem) {
    parent.addItem(proxy)
  }
})

onBeforeUnmount(() => {
  if (parent?.deleItem) {
    parent.deleItem(proxy)
  }
})
</script>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<style>
.v-grid-item__hover{
  background-color:rgba(0,0,0,.05)
}
</style>