<template>
  <view :class="[bem.b(),_class]" :style="_style" class="overflow-hidden" @click="emitClick">
    <vCard
      height="auto" :margin="margin"
      :padding="padding"
      :round="round"
      :bg-color="bgColor"
    >
      <view
        :class="[bem.e('header'), isReverse ? 'flex-row-reverse' : '']"
        class="flex justify-between py-10 items-center"
        :style="cellContainer"
      >
        <view v-if="isTitle" class="flex items-center">
          <slot name="left">
            <v-icon v-if="leftIcon" :name="leftIcon" :color="leftColor" :size="leftSize">
            </v-icon>
          </slot>
          <slot name="title">
            <v-text :font-size="titleSize" :color="titleColor" :label="title"></v-text>
          </slot>
        </view>
        <view class="flex flex-1 items-center" :class="isReverse ? 'flex-row-reverse' : ''">
          <view class="flex-1 flex" :class="[valueMode]">
            <slot name="value">
              <v-text :font-size="valueSize" :color="valueColor" :label="value"></v-text>
            </slot>
          </view>
          <slot name="right">
            <v-icon v-if="rightIcon" :name="rightIcon" :color="rightColor" :size="rightSize">
            </v-icon>
          </slot>
        </view>
      </view>
    </vCard>
  </view>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<script setup lang="ts">
import { computed } from 'vue';
import { customBorder, _defineProps } from '../../lib/share/customProps';
import { createNamespace } from '../../lib/utils/create'
import vCard from '../v-card/v-card.vue'
import vIcon from '../v-icon/v-icon.vue'
import VText from '../v-text/v-text.vue'
import { cellProps } from './v-cell';

const bem = createNamespace('cell')
const props = defineProps({ ..._defineProps, ...cellProps })
  
const emits=defineEmits(['click'])
const mode = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end'
}
const cellContainer = computed(() => {
  return {
    'border-bottom': customBorder(props.border, props.borderStyle, props.borderColor)
  }
})
const valueMode = mode[props.valueAlign] 
function emitClick(e:any){
  emits('click',e)
}
</script>

<style>

</style>