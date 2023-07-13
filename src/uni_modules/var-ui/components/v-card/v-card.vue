<template>
  <view  @click="handleClick" :hoverClass="hoverClass"
    @longpress="handleLongpress" @touchend="handleTouchend" @touchstart="handleTouchstart"
    @touchcancel="handleTouchcancel" @mousedown="handleMousedown" @mouseup="handleMouseup" @mouseleave="handleMouseleave"
    :class="[bem.b(), 'flex', props.isRow ? 'flex-row' : ' flex-col',scrollY ? 'overflow-y-auto' : '', props._class, ]"
    :style="[styles, styleBgColor]"  :hoverStartTime="hoverStartTime" :hoverStayTime="hoverStayTime">
    <!-- overflow-x-auto overflow-y-auto -->
    <view class="flex flex-grow-1"
      :class="[props.height === '100%' ? 'height-0' : '', props.isRow ? 'flex-row flex-wrap break-all' : ' flex-col', props._contentClass,]">
      <slot name="default"></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { createNamespace } from '../../lib/utils/create'
import { customBorder, customPOrM, customRadius, customWorH, _defineProps } from '../../lib/share/customProps';
import { cardProps } from './v-card';
import { computed } from 'vue';
const bem = createNamespace('card')
const props = defineProps({ ..._defineProps, ...cardProps })
const emits = defineEmits(["click", "longpress", "touchend", "touchstart", "touchcancel", "mousedown", "mouseup", "mouseleave"]);
const styles = computed(() => {
  return {
    'border-radius': customRadius(props.round, props.unit),
    ...(props.height === 0 ? {} : { 'height': customWorH(props.height, props.unit) }),
    'min-height': customWorH(props.minHeight, props.unit),
    'width': customWorH(props.width, props.unit),
    'margin': customPOrM(props.margin, props.unit),
    'border': props.border ? customBorder(props.border, props.borderStyle, props.borderColor) : '',
    'padding': customPOrM(props.padding, props.unit),
    'display': 'flex',
    color: props.color,
    fontSize: props.fontSize + props.unit,
    boxShadow: `
       0rpx -${props.shadow * 3.5}rpx ${props.shadow * 6.7}rpx ${props.shadowColor}, 
       0rpx ${props.shadow * 3.5}rpx ${props.shadow * 6.7}rpx ${props.shadowColor}
       `,
    ...props._style
  }
})

const styleBgColor = computed(() => {
  return {
    'background-color': props?.transparent ? 'rgba(255,255,255,0)' : `${props.bgColor}`,
  }
})

const handleClick = (e: Event) => {
  emits('click', e)
}
const handleLongpress = (e: Event) => {
  emits('longpress', e)
}
const handleTouchend = (e: Event) => {
  emits('touchend', e)
}
const handleTouchstart = (e: Event) => {
  emits('touchstart', e)
}
const handleTouchcancel = (e: Event) => {
  emits('touchcancel', e)

}
const handleMousedown = (e: Event) => {
  emits('mousedown', e)

}
const handleMouseup = (e: Event) => {
  emits('mouseup', e)
}
const handleMouseleave = (e: Event) => {
  emits('mouseleave', e)
}
</script>

<script lang="ts">
export default {
  options: {
    virtualHost: true
  },
}
</script>

<style>


</style>