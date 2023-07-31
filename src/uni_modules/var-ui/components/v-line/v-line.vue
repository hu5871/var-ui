<template>
  <view :class="['flex',!vertical ? 'flex-grow-1' :'h-full']" :style="_style">
    <view v-if="!vertical" :class="['flex-1', 'flex', vertical ? 'flex-col justify-center' : 'flex-row items-center']">
      <slot name="left">
        <view v-if="showLeftLine" :style="leftLineStyle"
          :class="[align == 'start' ? 'flex-grow-2' : '', align == 'center' ? 'flex-grow-1' : '', align == 'end' ? 'flex-grow-10' : '']">
        </view>
      </slot>
      <view v-if="label || labelSlot" :class="['mx-20']">
        <slot name="label">
          <v-text :color="color" :fontSize="fontSize" :label="label"></v-text>
        </slot>
      </view>
      <slot name="right">
        <view v-if="(label || labelSlot) && showRightLine" :style="rightLineStyle"
          :class="[align == 'start' ? 'flex-grow-10' : '', align == 'center' ? 'flex-grow-1' : '', align == 'end' ? 'flex-grow-2' : '']">
        </view>
      </slot>
    </view>
    <view v-else>
      <view :style="colLineStyle">
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { customPOrM, customWorH } from '../../lib/share/customProps';
import { lineProps } from './v-line';

const slot = useSlots()
const props = defineProps({ ...lineProps })
const labelSlot = slot?.label
const _style = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    margin: customPOrM(props.margin, props.unit)
  }
})
const align = computed(() => props.align)
const vertical = computed(() => {
  return props.vertical
})


const rowLineStyle = computed(() => {
  return {
    height: customWorH(props.border, props.unit),
  }
})

const leftLineStyle = computed(() => {
  return {
    ...rowLineStyle.value,
    background: props.leftLineColor || props.lienColor
  }
})

const rightLineStyle = computed(() => {
  return {
    ...rowLineStyle.value,
    background: props.rightLineColor || props.lienColor
  }
})

const colLineStyle = computed(() => {
  return {
    width: customWorH(props.border, props.unit),
    height: customWorH(props.height, props.unit),
    background: props.lienColor
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
<style></style>