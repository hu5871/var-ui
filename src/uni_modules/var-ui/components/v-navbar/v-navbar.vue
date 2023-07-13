
<template>
  <view :class="[bem.b(), 'overflow-hidden']" :style="{'background-color': _style.background}">
    <view :class="bem.e('status')" :style="{ height: _statusHeight + 'px'}"></view>
    <view
      :class="[bem.e('navbar'), 'fixed', 'left-0', 'right-0', 'flex', 'justify-between', 'shadow-bottom', 'items-center', 'pr-20', 'pl-20', props.isBoxshad ? '' : '']"
      :style="_style"
    >
      <view v-if="pages.length>1" :class="[bem.e('nav_left')]" @click="backPage">
        <slot name="left">
          <vIcon :name="leftIcon"></vIcon>
        </slot>
      </view>
      <view v-else-if="pages.length==1 && homeIcon " @click="backHome">
        <slot name="home">
          <vIcon :name="homeIcon"></vIcon>
        </slot>
      </view>
      <view v-else style="width:40rpx;"></view>
      <view :class="[bem.e('nav_title')]">
        <slot name="title">
          <text>
            {{ props.title }}
          </text>
        </slot>
      </view>
      <view :class="[bem.e('nav_right')]" style="width:40rpx;">
        <slot name="right">
        </slot>
      </view>
    </view>
    <view :class="bem.e('relative')" :style="{ width: _style.width, height: _style.height }"></view>
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
import vIcon from '../v-icon/v-icon.vue'
import { createNamespace } from "../../lib/utils/create";
import { computed, inject, Ref, toRaw } from "vue";
import { Config } from '../../types';
import { _defineProps } from "../../lib/share/customProps"
import { navbarProps } from './v-navbar';
const bem = createNamespace('navbar')
const emit = defineEmits(['backClick'])
const props = defineProps({ ..._defineProps, ...navbarProps })
const sys = uni.getSystemInfoSync()
const pages = getCurrentPages()
// 系统状态栏高度
const _statusHeight = sys.statusBarHeight
const _style = computed(() => {
  return {
    ...props._style,
    width: sys.windowWidth + 'px',
    height: props.height + 'px',
    background: props.transparent ? 'transparent' : props.bgColor,
    color: props.color
  }
})
const { route } = pages[pages.length - 1]
// uni.$var.customNavPage[route].top = toRaw(props.height)
const backPage = async () => {
  const res = await props.backFun()
  if (props.backPath) {
    uni.navigateTo({
      url: props.backPath
    })
    return
  }
  if (res) {
    uni.navigateBack({
      delta: 1
    })
  }
}

const backHome=()=>{
  uni.reLaunch({
			url:props.homePath
	})
}
</script>

<style>



</style>