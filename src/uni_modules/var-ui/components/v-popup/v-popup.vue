<template>
  <v-mask :_class="`${bem.b()} overflow-hidden`" v-model:show="isShow" :overlayClickClose='overlayClickClose'
    :contentClass="contentClass" :duration="duration" :bg-color="!showMask ? 'transplate' : opacityStyle" :z-index="1005">
    <v-transition :mode="inMode" :duration="duration + 20" v-model:show="isShow" :height="transitionPropHeight"
      :width="transitionPropWidth" :_class="maskClass">
      <view :ref="`popupcontent`" :id="`popupcontent` + uuid" 
        :class="[containerClass]" @click.stop="$event.stopPropagation()" 
        <!-- #ifdef MP-WEIXIN || MP-QQ   -->
        @touchstart="popupEvent.onTouchStart" @touchmove="popupEvent.onTouchMove" @touchend="popupEvent.onTouchEnd"
        @touchcancel="popupEvent.onTouchEnd" :popupTransform="wxsTransform"
        :change:popupTransform="popupEvent.wxsTransformObserver"
        <!-- #endif -->
        >
        <v-card :margin="[0]" :bgColor="bgColor" :style="containerStyle" _class="overflow-hidden" :padding="[0]"
          :round="roundList" :width="transitionPropWidth" :height="transitionPropHeight" 
          <!-- #ifndef MP-WEIXIN || MP-QQ -->
        @mousedown="onTouchStart"
        @mousemove.prevent="onTouchMove" @mouseup="onTouchEnd" @touchstart="onTouchStart"
        @touchmove.prevent="onTouchMove" @touchend="onTouchEnd"
        <!-- #endif -->
           >
          <slot>
          </slot>
        </v-card>
      </view>
    </v-transition>
    <view></view>
  </v-mask>
</template>
<!-- #ifdef MP-WEIXIN || MP-QQ  -->
<script src="./wxs/index.wxs" module="popupEvent" lang="wxs"></script>
<!-- #endif -->
<script >
import vMask from '../v-mask/v-mask.vue';
import vTransition from '../v-transition/v-transition.vue';
import { getCurrentInstance, nextTick, onMounted, ref, watch, computed } from 'vue';
import { customWorH, _defineProps } from '../../lib/share/customProps';
import { popupProps} from './v-popup';
import getWindowSize from '../../lib/share/getwindowSize';
import { createNamespace } from '../../lib/utils/create';
export default {
  options: {
    virtualHost: true
  },
  components: {
    vMask,
    vTransition,
  },
  emits: ['update:show', 'close','open'],
  props: { ..._defineProps, ...popupProps },
  setup(props, { expose, emit }) {
    const bem = createNamespace('popup')
    const ctx = getCurrentInstance()
    const proxy = getCurrentInstance()?.proxy || null;
    const sys = getWindowSize()
    const opacityStyle = computed(() => `rgba(0,0,0,${props.opacity})`)
    const containerClass = bem.be('view', 'container')
    const mode = computed(() => props.mode)
    const isShow = ref(props.show)
    const uuid = ctx?.uid || uni.$var.utils.genUid(2)
    const isVertical = computed(() => {
      if (mode.value === 'top' || mode.value === 'bottom') {
        return true
      }
      return false
    })
    const c = {
      bottom: 'flex-col justify-end',
      top: 'flex-col justify-start',
      left: 'flex-row',
      right: 'justify-end',
      center: 'items-center justify-center'
    }

    const maskClass = computed(() => {
      return `flex  ${c[mode.value] || ''}`
    })
    const contentClass = computed(() => {
      return `flex flex-1 ${maskClass.value}`
    })
    const transitionMode = {
      bottom: 'fade-up',
      top: 'fade-down',
      left: 'fade-left',
      right: 'fade-right',
      center: 'fade'
    }
    const inMode = computed(() => transitionMode[mode.value])
    const roundList = computed(() => {
      const round = props.round
      let r = {
        bottom: [round, round, 0, 0],
        top: [0, 0, round, round],
        left: [0, round, round, 0],
        right: [round, 0, 0, round],
        center: [round]
      }
      return r[mode.value]
    })

    // 动画组件的高度
    const transitionPropHeight = computed(() => {
      if (props.mode == 'top' || props.mode == 'bottom' || props.mode == 'center') {
        return 'auto'
      }
      return customWorH(sys.value.windowHeight, 'px')
    })
    // 动画组件的宽度度
    const transitionPropWidth = computed(() => {
      if (props.mode == 'top' || props.mode == 'bottom' || props.mode == 'center') {
        return '100%'
      }
      return 'auto'
    })

    let isMobile = true
    // #ifdef H5  
    if (navigator.userAgent.indexOf('Mobile') === -1) {
      isMobile = false
    }
    // #endif

    const containerRect = ref(null)
    watch(() => props.show, (val) => {
      isShow.value = val
      if (val) {
        nextTick(() => {
          // #ifndef H5
          uni.$var.utils.getRect(`#${'popupcontent' + ctx?.uid}`, proxy).then(rect => {
            containerRect.value = rect
          })
          // #endif
          // #ifdef H5
          const el= document.getElementById('popupcontent' + ctx?.uid)
          containerRect.value = {
            width: el?.offsetWidth,
            height: el?.offsetHeight
          }
          // #endif
        })
      }
    })

    watch(() => isShow.value, (val) => {
      if (!val) {
        emit('update:show', false)
        emit('close')
      }else{
        emit('update:show', true)
        emit('open')
      }
    })
    let wxsTransform=ref('')
    const containerStyle = ref({})
    const startPoint = ref({
      x: null,
      y: null,
      time: null
    })

    async function onTouchStart(e) {
      if (mode.value === 'center' || !containerRect.value) return
      const { pageX, pageY } = ('changedTouches' in e) ? e.changedTouches[0] : e
      startPoint.value.x = pageX
      startPoint.value.y = pageY
      startPoint.value.time = e.timeStamp
    }
    let moveDis = 0
    function onTouchMove(e) {
      if (mode.value === 'center' || !containerRect.value) return
      const { pageX, pageY } = ('changedTouches' in e) ? e.changedTouches[0] : e
      if (!startPoint.value.time || !startPoint.value.y || !startPoint.value.x) return
      const vertical = isVertical.value ? 'Y' : 'X'
      moveDis = pageY - startPoint.value.y
      if (mode.value == 'left') moveDis = startPoint.value.x - pageX
      else if (mode.value == 'right') moveDis = pageX - startPoint.value.x
      else if (mode.value == 'top') moveDis = -moveDis

      if (!props.overlayClickClose) moveDis /= 3
      const duration = (e.timeStamp - startPoint.value.time)
      const speed = moveDis / duration
      if (moveDis > 0) {
        if (mode.value == 'left' || mode.value == 'top') moveDis *= -1
         // #ifdef  MP-WEIXIN || MP-QQ 
           wxsTransform.value=`translate${vertical}(${moveDis}px);`
         // #endif
        //  #ifndef MP-WEIXIN || MP-QQ 
        containerStyle.value.transform = `translate${vertical}(${moveDis}px)`
        containerStyle.value.transition = `none`
        // #endif
      }else{
        if (mode.value == 'left' || mode.value == 'top') moveDis *= -1
        // 如果是拉到关闭的阀值 再往回拉 
        containerStyle.value = {}
        wxsTransform.value=''
      }
    }
    const Positive = computed(() => mode.value === 'bottom' || mode.value === 'right')

    function onTouchEnd(e) {
      if (mode.value === 'center' || !containerRect.value) return
      const { width = 0, height = 0 } = containerRect.value
      const vertical = isVertical.value ? 'Y' : 'X'
      const touchAngle = props.touchAngle
      const translateValue = (mode.value === 'top' || mode.value === 'bottom') ? height * touchAngle : width * props.touchAngle
      if((mode.value == 'left' || mode.value == 'top')&& moveDis>0){
        return 
      }
        if (props.overlayClickClose && Positive.value ? (moveDis > translateValue) : (moveDis < translateValue * -1)) {
          moveDis = 0
          close()
        }
        else {
          // #ifdef  MP-WEIXIN || MP-QQ 
            wxsTransform.value=''
          // #endif
          //  #ifndef MP-WEIXIN || MP-QQ 
            containerStyle.value.transform = `translate${vertical}(0)`
            containerStyle.value.transition = `all ease 200ms`
          // #endif
        }
        setTimeout(() => {
          containerStyle.value = {}
          wxsTransform.value=''
        }, 300)
      startPoint.value.time = 0
    }
    function close() {
      isShow.value = false
    }
    function open() {
      isShow.value = true
    }

    expose({
      close,
      open
    })
    return {
      bem,
      containerClass,
      uuid,
      close,
      open,
      isShow,
      inMode,
      isVertical,
      contentClass,
      opacityStyle,
      transitionPropWidth,
      transitionPropHeight,
      maskClass,
      containerStyle,
      wxsTransform,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      roundList
    }
  }
}
</script>
<style></style>