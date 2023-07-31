<template>
  <view @click="handleClick" v-if="isShow" :class="[bem.b(),customClass,_class, 'flex']" :style="[_style]">
      <slot></slot>
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
import { computed, nextTick, ref, watch } from "vue";
import { createNamespace } from "../../lib/utils/create";
import { transitionProps } from "./v-transition";
import { customWorH, _defineProps } from "../../lib/share/customProps";

const bem = createNamespace('transition')
const props = defineProps({ ..._defineProps,...transitionProps })
const emits=defineEmits(['click','close','update:show'])
const show = computed(() => props.show)
const transitonMode = computed(() => props.mode)
const isShow = ref(false)

const _style = computed(() => {
  return {
    transitionDuration: `${props.duration}ms`,
    transitionTimingFunction: props.timingFunction,
    height:customWorH(props.height,props.unit),
    width:customWorH(props.width,props.unit),
    zIndex:props.zIndex,
    ...props._style,
  }
})
const getClassName = computed(() => ({
  enter: `v-${transitonMode.value}-enter v-${transitonMode.value}-enter-active`,
  'enter-to': `v-${transitonMode.value}-enter-to v-${transitonMode.value}-enter-active`,
  leave: `v-${transitonMode.value}-leave v-${transitonMode.value}-leave-active`,
  'leave-to': `v-${transitonMode.value}-leave-to v-${transitonMode.value}-leave-active`
}))
const customClass=computed(() =>props._class)
function handleClick(e:any){
  // try {
  //   e.stopPropagation()
  //   e.stopImmediatePropagation()
  // } catch (e) {
  // }
  emits('click', e);
}
const _class = ref({})
watch(() => show.value, (newVal) => {
  newVal && startEnter()
  !newVal && leave()
}, { immediate: true })

function startEnter() {
  const enter = getClassName.value.enter
  isShow.value = true
  _class.value = enter

  // #ifdef H5
  setTimeout(() => {
    _class.value = getClassName.value['enter-to']
  }, 20)
  // #endif
  // #ifndef H5
  nextTick(() => {
    _class.value = getClassName.value['enter-to']
  })
  // #endif
  if(props.animationEndClose){
    setTimeout(() => {
      emits('update:show',false)
      emits('close')
    },props.duration+20)
  }
}
function leave() {
  if (!isShow.value) return
  _class.value = getClassName.value.leave
  nextTick(() => {
    setTimeout(() => {
      isShow.value = false
    }, props.duration)
    _class.value = getClassName.value['leave-to']
  })
  return true
}
</script>

<style  scoped>
.v-fade-enter-active,
.v-fade-leave-active {
  transition-property: opacity;
}

.v-fade-enter,
.v-fade-leave-to {
  opacity: 0;
}

.v-fade-zoom-enter,
.v-fade-zoom-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

.v-fade-zoom-enter-active,
.v-fade-zoom-leave-active {
  transition-property: transform, opacity;
}

.v-fade-down-enter-active,
.v-fade-down-leave-active,
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-right-enter-active,
.v-fade-right-leave-active,
.v-fade-up-enter-active,
.v-fade-up-leave-active {
  transition-property: opacity, transform;
}

.v-fade-up-enter,
.v-fade-up-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

.v-fade-down-enter,
.v-fade-down-leave-to {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}

.v-fade-left-enter,
.v-fade-left-leave-to {
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}

.v-fade-right-enter,
.v-fade-right-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}

.v-slide-down-enter-active,
.v-slide-down-leave-active,
.v-slide-left-enter-active,
.v-slide-left-leave-active,
.v-slide-right-enter-active,
.v-slide-right-leave-active,
.v-slide-up-enter-active,
.v-slide-up-leave-active {
  transition-property: transform;
}

.v-slide-up-enter,
.v-slide-up-leave-to {
  transform: translate3d(0, 100%, 0);
}

.v-slide-down-enter,
.v-slide-down-leave-to {
  transform: translate3d(0, -100%, 0);
}

.v-slide-left-enter,
.v-slide-left-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.v-slide-right-enter,
.v-slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}

.v-zoom-enter-active,
.v-zoom-leave-active {
  transition-property: transform;
}

.v-zoom-enter,
.v-zoom-leave-to {
  transform: scale(0.95);
}
</style>