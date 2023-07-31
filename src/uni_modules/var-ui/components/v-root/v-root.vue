<template>
  <view :class="[bem.b(), 'v-view-hide-scroll']" class="flex w-full">
    <view class="w-full" :style="styles">
      <view class="h-full flex flex-1 flex-col">
        <slot name="default"></slot>
      </view>
    </view>
    <v-message ref="msg"></v-message>
  </view>
</template>

<script lang="ts" setup>
import vCard from '../v-card/v-card.vue'
import vMessage from '../v-message/v-message.vue'
import getWindowSize from '../../lib/share/getwindowSize'
import { provide, Ref, ref, computed, onMounted, reactive, nextTick, watch } from 'vue'
import { customBorder, customPOrM, customRadius, customWorH, _defineProps } from '../../lib/share/customProps'
import { rootProps } from './v-root';
import { Config, MessageOptions } from '../../types'
import { createNamespace } from '../../lib/utils/create'
const msg = ref<{
  showModal: (op: MessageOptions) => void;
  hideModal: () => void;
} | null>()

const bem = createNamespace('root')

const props = defineProps({ ..._defineProps, ...rootProps })
const emits = defineEmits(['netWorkChange'])
const size = getWindowSize()



const styles = computed(() => {
  return {
    'min-height': customWorH(size.value.height - size.value.windowTop, 'px'),
    'width': customWorH(size.value.width, 'px'),
    'margin': customPOrM(props.margin, props.unit),
    'padding': customPOrM(props.padding, props.unit),
    background: props.bgColor,
    color: props.color,
    ...props._style
  }
})
const setConfig = ref<Config>({
  top: 0
})
const pose = reactive<{
  showModal: ((op: MessageOptions) => void) | null | undefined;
  hideModal: (() => void) | null | undefined;
}>({
  showModal: null,
  hideModal: null
})


const netWork = uni.$var.hooks.useNetWork()
watch(() => netWork.value, (val) => {
  emits('netWorkChange', val)
}, { deep: true })
onMounted(() => {
  nextTick(() => {
    pose.showModal = msg?.value?.showModal
    pose.hideModal = msg?.value?.hideModal
  })
})

provide('setConfig', setConfig)
provide('getConfig', computed(() => {
  return setConfig.value
}))

defineExpose(pose)
</script>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<style>
.v-root {
  padding-bottom: constant(safe-area-inset-bottom) !important;
  /* 兼容 iOS 设备 */
  padding-bottom: env(safe-area-inset-bottom) !important;
  /* 兼容 iPhone X 及以上设备 */
}
</style>