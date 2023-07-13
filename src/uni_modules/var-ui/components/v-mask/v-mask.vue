<template>
  <!-- #ifdef H5 -->
  <teleport to="body">
    <!-- #endif -->
    <v-transition @click.stop="handleMaskClick" :duration="duration" v-model:show="maskShow"
      :height="_popoverStyle.height" :_style="_popoverStyle" @touchmove.prevent @mousemove.prevent
      :width="_popoverStyle.width" :_class="`${bem.b()} fixed left-0 ${_class}`">
      <view :class="`relative flex flex-1 ${contentClass}`" @click="slotClick">
        <slot></slot>
      </view>
    </v-transition>
    <!-- #ifdef H5 -->
  </teleport>
  <!-- #endif -->
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { customWorH, _defineProps } from '../../lib/share/customProps';
import { createNamespace } from '../../lib/utils/create';
import getWindowSize from '../../lib/share/getwindowSize';
import { maskProps } from './v-mask';

const bem = createNamespace('mask')

const props = defineProps({ ..._defineProps, ...maskProps })
const emits = defineEmits(['update:show', 'close', 'click'])
const sys = getWindowSize()
watch(() => props.show, (val) => {
  open(val)
})
const maskShow = ref(false)

const _popoverStyle = computed(() => {
  return {
    width: props.width === 0 ? sys.value.width + 'px' : customWorH(props.width, props.unit),
    height: customWorH(props.height || sys.value.windowHeight, props.height ? props.unit : 'px'),
    background: props.transparent ? 'transparent' : props.bgColor,
    top: sys.value.windowTop + 'px',
    'z-index': `${props.zIndex}`,
    ... props.transparent ? {} :{'backdrop-filter': `blur(${props.filterBlur}px)`},
    ...props._style,
  }
})
function open(isOpen: boolean) {
  if (maskShow.value == isOpen) return;
  maskShow.value = isOpen;
}
function slotClick(e: any) {
  try {
    e.stopPropagation()
    e.stopImmediatePropagation()
  } catch (e) {
  }
  if (!props.overlayClickClose) return
  maskShow.value = false
  emits('update:show', false)
}
function handleMaskClick(e: any) {
  e.stopPropagation()
  e.preventDefault()
  if (!props.overlayClickClose) return
  maskShow.value = false
  emits('update:show', false)
}

</script>

<style  scoped>
.v-mask-ani__open {
  opacity: 1;
}

.v-mask-ani__close {
  opacity: 0;
}
</style>