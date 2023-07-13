

<template>
  <view v-if="showValue"
    :class="[bem.b(), 'fixed','left-0','right-0', options.isMask ? 'isMask' : '', 'flex', 'justify-center', 'items-center', 'shadow']"
    :style="{ width: sys.width + 'px', height: sys.height - sys.windowTop + 'px', top: navHeight + 'px',zIndex:zIndex }">
    <v-card v-if="showValue" :bg-color="options.bgColor" :width="props.width" :round="props.round" :margin="[20, 0]"
      :height="props.height"  :is-row="false" :unit="props.unit" _class="relative scale" :is-header="false">
      <slot>
        <view class="flex flex-col justify-center flex-1 items-center ">
          <v-icon :color="options.iconColor" :rota="options.rota" :size="options.size" :name="options.icon">
          </v-icon>
          <!-- <view class="flex items-center"> -->
          <v-text _class="w-full mt-30" :label="options.title"></v-text>
          <!-- </view> -->
        </view>
      </slot>
    </v-card>
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
import Vcard from '../v-card/v-card.vue'
import VIcon from '../v-icon/v-icon.vue'
import VText from '../v-text/v-text.vue'
import { Config, MessageOptions } from "../../types";
import { inject, ref, Ref, computed, nextTick, onBeforeUnmount } from "vue";
import { _defineProps } from "../../lib/share/customProps";
import { createNamespace } from '../../lib/utils/create'
import { messageProps } from "./v-message";
import getWindowSize from "../../lib/share/getwindowSize";
const bem = createNamespace('message')
const props = defineProps({ ..._defineProps, ...messageProps })
const sys = getWindowSize()
const pages = getCurrentPages()
const { route } = pages[pages.length - 1]
let navHeight = sys.value.windowTop
// let navHeight = sys.value.windowTop + sys.value.statusBarHeight
const _style = computed(() => {
  return {
    width: props.width + props.unit,
    height: props.height + props.unit,
  }
})
const showValue = ref(false)
const model = computed<{
  [key: string]: Partial<MessageOptions>
}>(() => {
  return {
    loading: {
      icon: 'icon-loading',
      rota: true,
      size: 88,
      title: '加载中'
    },
    success: {
      icon: 'icon-checkmark-circle-outline',
      iconColor: '#4DFF4D',
      size: 98,
      title: '成功'
    },
    fail: {
      icon: 'icon-close-circle-outline',
      iconColor: '#FF0000',
      size: 98,
      title: '失败'
    },
    warn: {
      icon: 'icon-alert-circle-outline',
      iconColor: '#FFC14D',
      size: 98,
      title: '警告'
    }
  }
})
const options = ref<Partial<MessageOptions>>({
  model: '',
  icon: '',
  iconColor: 'black',
  size: 100,
  title: '',
  isMask: true,
  bgColor: 'white',
  rota: false,
  duration: 1500
})
let timer = NaN

const showModal = (op: Partial<MessageOptions>) => {
  let res: Partial<MessageOptions> = { ...options.value, }
  if (op?.model && (op.model in model.value)) {
    Object.assign(res, model.value[op.model])
  }
  options.value = Object.assign(res, op)
  showValue.value = true
  if (!isNaN(timer)) {
    clearTimeout(timer)
    timer = NaN
  }
  if (op.model !== 'loading') {
    timer = setTimeout(() => {
      showValue.value = false
    }, options.value.duration)
  }
}
const hideModal = () => {
  if (!isNaN(timer)) {
    clearTimeout(timer)
    timer = NaN
  }
  showValue.value = false
}

onBeforeUnmount(()=>{
  clearTimeout(timer)
})

defineExpose<{
  showModal: (op: MessageOptions) => void;
  hideModal: () => void;
}>({
  showModal,
  hideModal
})
</script>

<style>
.isMask {
  z-index: 10075 !important;
  animation: anibackground 0.5s;
  background-color: rgba(0, 0, 0, 0.35);
  transition-duration: 0.5s;
  transition-property: background;
  transition-timing-function: ease;
  transition-delay: 0.3s;
}

.scale {
  animation: aniscale 0.3s;
}


@keyframes anibackground {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, 0.35);
  }
}


@keyframes aniscale {
  0% {
    opacity: 0;
    transform: scale(0.7, 0.7);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1)
  }
}
</style>