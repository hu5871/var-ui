<template>
  <view :class="[bem.b()]" class="relative overflow-hidden" :style="[style]">
    <view :class="bem.em('touch', 'view')" class="w-full h-full flex items-center">
      <view class="flex-1 flex flex-col justify-between h-full" :style="[defaultStyle]" @click.stop.prevent
        @touchstart="swipeActionWxs.onTouchstart" @touchmove="swipeActionWxs.onTouchmove"
        @touchend="swipeActionWxs.onTouchend" @mousedown="swipeActionWxs.onMousedown"
        @mousemove="swipeActionWxs.onMousemove" @mouseup="swipeActionWxs.onMouseup"
        @mouseleave="swipeActionWxs.onMouseleave" :change:prop="swipeActionWxs.observeProp" :prop="wxsProp"
        :change:config="swipeActionWxs.observeConfig" :config="config">
        <view  class="flex-1 height-0 flex">
          <slot></slot>
        </view>
        <view class="w-full" :style="borderStyle"></view>
      </view>
      <view :class="bem.em('menu', 'view')"
        class="absolute px-4 right-0 top-0 bottom-0 transform-x-100 flex items-center ">
        <slot name="right">
          <view @click.stop="handleClick(item, index)" v-for="(item, index) in options" :key="item.id"
            :style="[itemStyle(item)]" class="h-full  flex items-center justify-center px-15">
            <v-icon v-if="item.icon && (!item.iconPosition || item.iconPosition === 'left')" :name="item.icon"
              :size="item.iconSize" :color="item.iconColor"></v-icon>
            <view v-if="item.icon && item.text && (!item.iconPosition || item.iconPosition === 'left')" class="pr-8">
            </view>
            <v-text v-if="item.text" :color="item.color" :fontSize="item.size" :label="item.text"></v-text>
            <view v-if="item.icon && item.text && item.iconPosition === 'right'" class="pl-8"></view>
            <v-icon v-if="item.icon && item.iconPosition === 'right'" :name="item.icon" :size="item.iconSize"
              :color="item.iconColor"></v-icon>
          </view>
        </slot>
      </view>
    </view>
  </view>
</template>
<!-- #ifdef APP-VUE || MP-WEIXIN || H5 || MP-QQ -->
<script src="./wxs/index.wxs" module="swipeActionWxs" lang="wxs"></script>
<!-- #endif -->
<script lang="ts">
import { computed, getCurrentInstance, inject, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { customPOrM, customRadius, customWorH } from "../../lib/share/customProps";
import { createNamespace } from "../../lib/utils/create";
import { swipeActionProps, SwipeOptions, WxsConfig } from "./v-swipe-action-item";
import vText from '../v-text/v-text.vue';
import vIcon from '../v-icon/v-icon.vue';
export default {
  options: {
    virtualHost: true
  },
  props:{ ...swipeActionProps },
  components:{
    vText,
    vIcon
  },
  emits:['click','change'],
  setup(props, { emit,expose }) {
    const proxy = getCurrentInstance()?.proxy || null
    const bem = createNamespace('swipe-action-item')
    
    let parent: any = proxy?.$parent
    while (parent) {
      if (parent?.CName == 'swipeAction' || !parent) {
        break;
      } else {
        parent = parent?.$parent || undefined
      }
    }

    const wxsProp= ref(0)
    const config = ref<WxsConfig>({
      threshold:props.threshold,
      disabled:props.disabled,
      duration:props.duration,
      nodeInfo:{}
    })
    
    onMounted(() => {
      if (parent) {
        parent.addChild(proxy)
      }
      uni.$var.utils.getRect(`.${bem.em('menu', 'view')}`,proxy).then((nodeInfo) => {
        if(nodeInfo){
          config.value.nodeInfo = nodeInfo
        }
      })
    })


    const style = computed(() => {
      return {
        width: customWorH(props.width, props.unit),
        height: customWorH(props.height, props.unit),
        margin: customPOrM(props.margin, props.unit),
      }
    })

    const defaultStyle = computed(() => {
      return {
        background: props.bgColor,
        zIndex: 3,
        padding: customPOrM(props.padding, props.unit),
      }
    })
    const itemStyle=computed(() => {
      return (item:SwipeOptions)=>{
        return {
          width: customWorH(item.width, props.unit),
          backgroundColor:item?.bgColor,
          borderRadius: item?.borderRadius,
        }
      }
    })

    const borderStyle=computed(() => {
      return {
        borderBottom:`${props.borderBottom}${props.unit} solid ${props.borderColor}`
      }
    })
   

    function handleClick(item:SwipeOptions,index:number){
      emit('click',{item,index,close:itemClose})
      if(props.clickClose){
        itemClose()
      }
    }
    function itemClose(){
      wxsProp.value=0
    }

    function close() {
      // 关闭同一个action下的已开启菜单
      if(parent?.close){
        parent.close(proxy)
      }
    }
    function setStatus({value}:Record<string,number>) {
      wxsProp.value=value
      emit('change',value)
    }
    onBeforeUnmount(()=>{
      if (parent) {
        parent?.removeChild(proxy)
      }
    })

    expose({itemClose})

    return {
      bem,
      style,
      defaultStyle,
      borderStyle,
      itemStyle,
      wxsProp,
      config,
      close,
      handleClick,
      itemClose,
      setStatus
    }
  }
}

</script>

<style></style>