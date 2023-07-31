<template>
  <view v-if="show" :class="[bem.b()]" :style="[noticeStyle]"
    class="flex items-center p-10 justify-between overflow-hidden">
    <view v-if="isPrefix" @click.stop.prevent="prefixClick" class="mr-10">
      <slot name="left">
        <v-icon :size="prefixIconProp.size" :rota="prefixIconProp.rota" :color="prefixIconProp.color"
          :name="prefixIconProp.name">
        </v-icon>
      </slot>
    </view>
    <template v-if="direction === 'row'">
      <view @click="handleClick" :class="[contentClass, 'flex', 'overflow-hidden', 'flex-1', 'flex-nowrap']">
        <view :class="[contentTextClass, 'flex', 'flex-row', 'flex-1', 'white-nowrap', 'break-keep-all']"
          :style="[animationStyle]">
          <text :style="[textStyle]">{{ text }}</text>
        </view>
      </view>

    </template>
    <template v-else-if="direction === 'col' && multiple && !step">
      <view :class="[bem.be('scroll', 'view'), 'overflow-hidden']" :style="[customStyle]">
        <view :style="[animationStyle]" :class="[bem.be('scroll', 'content')]"
          class="flex flex-col white-nowrap break-keep-all">
          <view @click="handleClick(index)" v-for="(item, index) in innerList" :key="index">
            <text :style="[textStyle]">{{ item }}</text>
          </view>
        </view>
      </view>
    </template>
    <template v-else>
      <view :class="[contentClass, 'flex', 'overflow-hidden', 'flex-1', 'flex-nowrap']">
        <swiper :disable-touch="disableTouch" :vertical="step ? false : true" circular :interval="duration"
          :autoplay="true" class="flex-1" :style="[customStyle]">
          <swiper-item @click="handleClick(index)" v-for="(item, index) in innerList" :key="index" class="flex-1">
            <text :style="[textStyle]">{{ item }}</text>
          </swiper-item>
        </swiper>
      </view>
    </template>
    <view v-if="isSuffix" class="ml-10" @click.stop.prevent="close">
      <slot name="right">
        <v-icon :name="suffixIconProp.name" :size="suffixIconProp.size" :rota="suffixIconProp.rota"
          :color="suffixIconProp.color">
        </v-icon>
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
import { computed, getCurrentInstance, onBeforeUnmount, onDeactivated, onMounted, ref } from 'vue';
import { noticeProps } from './v-notice-bar';
import VIcon from '../v-icon/v-icon.vue'
import { createNamespace } from '../../lib/utils/create';
import { customWorH } from '../../lib/share/customProps';
import { emit } from 'process';

const bem = createNamespace('notice-bar')
const emits = defineEmits(['close', 'suffixClick','prefixClick','click'])
const props = defineProps({ ...noticeProps })


const proxy = getCurrentInstance()?.proxy || null;
const contentClass = bem.e('content')
const contentTextClass = bem.be('content', 'text')

const show = ref(true)
const showScrollbar = false
const noticeStyle = computed(() => {
  return {
    background: props.bgColor,
    ...props._style
  }
})

const textStyle = computed(() => {
  return {
    color: props.color,
    fontSize: `${props.fontSize}${props.unit}`,
    ...props.textStyle
  }
})
const customStyle = computed(() => {
  return {
    height: customWorH(props.height, props.unit)
  }
})
const animationDuration = ref('')
const animationPlayState = ref('')
const animationStyle = computed(() => {
  let style: any = {
    animationDuration: '0',
    animationPlayState: 'paused'
  }
  console.log(props.direction)
  if (props.direction === 'col' && props.multiple) {
    style.paddingTop = customWorH(props.height, props.unit)
    console.log(style.paddingTop)
  }
  style.animationDuration = animationDuration.value
  style.animationPlayState = animationPlayState.value
  return style
})

const innerList = computed(() => {
  if (props.direction === 'col' && !Array.isArray(props.text)) {
    return [props.text]
  }
  return props.text
})


onMounted(() => {
  init()
})
const scrollSize = ref({
  height: 0
})

async function init() {
  if (props.direction === 'row') {
    initRow()
    return
  }
  if (props.direction === 'col' && props.multiple) {
    uni.$var.utils.sleep(10).then(async () => {
      await uni.$var.utils.getRect(`.${bem.be('scroll', 'view')}`, proxy).then((rect) => {
        if (rect) {
          scrollSize.value = rect
          animationDuration.value = `${rect.height / props.colSpeed}s`
          animationPlayState.value = 'paused'
          setTimeout(() => {
           animationPlayState.value = 'running'
          }, 10)
        }
      })
    })
    return
  }
}

function initRow() {
  let textWidth = 0
  uni.$var.utils.sleep(10).then(async () => {
    await uni.$var.utils.getRect(`.${contentTextClass}`, proxy).then((rect) => {
      if (rect) {
        textWidth = rect.width
        animationDuration.value = `${textWidth / props.rowSpeed}s`
        animationPlayState.value = 'paused'
        setTimeout(() => {
          animationPlayState.value = 'running'
        }, 10)
      }
    })
  })
}
function handleClick(index?:number){
  emits('click',index)
}
function prefixClick(e:any){
  emits('prefixClick', e)
}
function close(e: any) {
  if (props.isClose) {
    show.value = false
    emits('close')
  }
  emits('suffixClick', e)
}


</script>

<style>

.v-notice-bar-content__text {
  padding-left: 100%;
  animation: loop-row linear infinite;
}

.v-notice-bar uni-text {
  white-space: nowrap;
}

.v-notice-bar-scroll__content {
  animation: loop-col linear infinite;
}

.v-notice-bar-scroll__view::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
  -webkit-overflow-scrolling: touch;
}


@keyframes loop-row {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes loop-col {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}
</style>