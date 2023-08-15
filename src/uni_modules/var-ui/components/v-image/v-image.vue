<template>
  <view :class="[bem.b(),_class]" class="relative  overflow-hidden" :style="_style" >
    <view class="relative w-full h-full">
      <image :lazyLoad="lazyLoad"  :show-menu-by-longpress="props.showMenuByLongPress" :style="_style" :class="{ 'image-error': _error }"
        :src="props.src" @click.stop="handleClick" @load="handleLoad" @error="handleError" :mode="props.mode">
      </image>
      <view class="absolute top-0 inset-x-0 inset-y-0" style="z-index: -1;">
        <slot></slot>
      </view>
    </view>
    <view class="absolute inset-x-0 inset-y-0 flex justify-center items-center" v-if="props.loading && _loadding">
      <slot name="loading">
        <v-icon :size="60" :rota="true" color="#c1c1c1" :name="loadIcon"></v-icon>
      </slot>
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
import vIcon from '../v-icon/v-icon.vue';
import { createNamespace } from '../../lib/utils/create';
import { computed, ref, onMounted, watch, inject, getCurrentInstance } from 'vue';
import { customRadius, customWorH, _defineProps } from '../../lib/share/customProps';
import { imageProps } from './v-image';

const bem = createNamespace('image')
const props = defineProps({ ..._defineProps, ...imageProps });
const emits = defineEmits(['load', 'error', 'click'])
const proxy = getCurrentInstance()?.proxy || null;
const imageList = inject('imageGroupList', computed(() => []))
const _loadding = ref(true)
const _error = ref(false)
const _style = computed(() => {
  if(props.mode === 'widthFix' && props.height == 'auto'){
    uni.$var.utils.error('v-image组件的mode为widthFix时需要设置高度，否则会造成图片没有高度')
  }
  if(props.width.toString().indexOf('%') !== -1 || props.height.toString().indexOf('%') !== -1){
    // uni.$var.utils.error('v-image 组件宽高不建议设置百分比,这在列表中可能忽大忽小')
  }
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(props.height, props.unit),
    'border-radius': customRadius(props.round, props.unit),
    ...props._style
  }
})



let parent: any = proxy?.$parent
while (parent) {
  if (parent?.name == 'image-group' || !parent) {
    break;
  } else {
    parent = parent?.$parent || undefined
  }
}
if (parent?.pushSrc) {
  parent.pushSrc(props.src)
}



const handleClick = (e: any) => {
  if (props.isPreview) {
    let list = imageList.value.length > 0 ? imageList.value : [props.src];
    uni.previewImage({
      urls: list,
      current: props.src
    })
  }
  emits('click', e)
}

const handleLoad = (e: any) => {
  _loadding.value = false
  emits('load', e)
}
function handleError(event: Event) {
  console.error("图片加载错误:", event)
  _loadding.value = false
  _error.value = true
  emits('error', event)
}
</script>

<style  scoped>
.image-loadding {
  animation: loading 1s linear infinite;
  background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat center center;
  background-size: 30%;
}

.image-error {
  background: #f2f2f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAiAQMAAAAatXkPAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAAIZJREFUCNdlzjEKwkAUBNAfEGyCuYBkLyLuxRYW2SKlV1JSeA2tUiZg4YrLjv9PGsHqNTPMSAQuyAJgRDHSyvBPwtZoSJXakeJI9iuRLGDygdl6V0yKDtyMAeMPZySj8yfD+UapvRPj2JOwkyAooSV5IwdDjPdCPspe8LyTl9IKJvDETKKRv6vnlUasgg0fAAAAAElFTkSuQmCC) no-repeat center center;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>