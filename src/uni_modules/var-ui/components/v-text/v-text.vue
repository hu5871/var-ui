
<template>
  <view  :class="[bem.b(),'flex','items-center',]" :style="_containerStyle">
    <view class="flex">
      <text :class="[bem.e('text'),overflowClass,props._class]" :style="{ fontSize: props.fontSize + props.unit, ..._style }">
        <slot name="default">
          {{ props.label }}
        </slot>
      </text>
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
import { computed } from 'vue';
import { customPOrM, _defineProps } from '../../lib/share/customProps';
import { textProps } from './v-text';
import { createNamespace } from '../../lib/utils/create'
const bem = createNamespace('text')
const props = defineProps({ ..._defineProps, ...textProps })
const _style = computed(() => {
  return {
    color: props.color,
    fontWeight: props.weight,
    ...props._style
  }
})

const overflowClass=computed(()=>{
  if(!props.textOverflow) return
  return  props.textOverflow == 2 ? 'text-overflow-2' :'text-overflow-1'
})
const _containerStyle = computed(() => {
  return {
    'margin': customPOrM(props.margin, props.unit),
    'padding': customPOrM(props.padding,  props.unit),
  }
})

</script>

<style  scoped>
.v-text {
  display: flex;
  flex-shrink: unset;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
  box-sizing: border-box;
  flex-direction: column;
}

</style>