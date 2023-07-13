<template>
  <view :class="[bem.b(), 'relative', 'flex']">
    <v-mask v-if="isMask" v-model:show="isShow" bg-color="rgba(255,255,255,0)" :z-index="zIndex"></v-mask>
    <view id="default" ref="default" class="flex flex-row" @click="handleClick" :userInteractionEnabled="false"
      :eventPenetrationEnabled="true">

      <slot></slot>
    </view>
    <view :ref="`content${uuid}`" :id="contentId" v-if="isShow"
      :class="[bem.e('content'), 'absolute', 'flex', TranslateClass, init ? 'opacity-0' : '']"
      :style="[transStyle, contentStyle]">
      <v-card :margin="[0]" :padding="[0]" :width="width" :height="height" :zIndex="zIndex + 1" :unit="unit"
        :round="round" :bgColor="bgColor">
        <slot name="content"></slot>
      </v-card>
      <view class="flex w-full"
        :class="[bem.be('view', 'arrow'), 'relative', 'flex', isY ? 'justify-center' : 'items-center']"
        :style="arrowStyle">
        <view :ref="`arrow${uuid}`" :id="arrowId" :class="[bem.be('arrow', 'item'), 'absolute']" :style="[pointerStyle]">
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { createNamespace } from '../../lib/utils/create';
import { computed, getCurrentInstance, nextTick, onMounted, onUpdated, ref, watch } from 'vue'
import { _defineProps } from '../../lib/share/customProps';
import { popoverProps } from './v-popover';
import vMask from '../v-mask/v-mask.vue';
import vCard from '../v-card/v-card.vue'
import getWindowSize from '../../lib/share/getwindowSize';
const proxy = getCurrentInstance()?.proxy || null
const sys = getWindowSize()
const bem = createNamespace('popover')
const props = defineProps({ ..._defineProps, ...popoverProps })
const isShow = ref(true)
const uuid = uni.$var.utils.genUid(2).toString()
const contentId = bem.be('content', uuid)
const arrowId = bem.be('arrow_item', uuid)
const handleClick = () => {
  if (props.stopShowClickEvent) return
  open()
}
const contentSize = ref<UniApp.NodeInfo>({})
const defaultSize = ref<UniApp.NodeInfo>({})
const arrowSize = ref<UniApp.NodeInfo>({})
const init = ref(true)


const isY = computed(() => {
  return props.position === 't' || props.position === 'b'
})


const TranslateClass = computed(() => {
  let c = ''
  if (isY.value) {
    if (props.position === 't') {
      c = 'flex-col -transform-y-100'
    } else {
      c = 'flex-col flex-col-reverse'
    }
  } else {
    if (props.position === 'l') {
      c = 'flex-row -transform-x-100'
    } else {
      c = 'flex-row  flex-row-reverse'
    }
  }
  return c
})
const cStyle = ref({})
const pStyle = ref({})

const transStyle = computed(() => {
  const {width:defaultWidth =0,height:defaultHeight=0} = defaultSize.value
  const {width:arrowWidth=0,height:arrowHeight=0}=arrowSize.value
  // const defaultWidth = defaultSize.value?.width || 0
  // const defaultHeight = defaultSize.value?.height || 0
  // const arrowHeight = arrowSize.value?.height || 0
  // const arrowWidth = arrowSize.value?.width || 0
  return {
    ...isY.value && props.position == 'b' ? {
      transform: `translateY(${defaultHeight + arrowHeight}px)`
    } : {},
    ...!isY.value && props.position == 'r' ? {
      transform: `translateX(${defaultWidth + arrowWidth}px)`
    } : {}
  }
})
const contentStyle = computed(() => {
  const {width:defaultWidth =0,height:defaultHeight=0,left:defaultLeft=0,right:defaultRight=0,top:defaultTop=0,bottom:defaultBottom=0} = defaultSize.value
  const {width:contentWidth=0,height:contentHeight=0}=contentSize.value
  // const contentWidth = contentSize.value?.width || 0
  // const contentHeight = contentSize.value?.height || 0
  // const defaultLeft = defaultSize.value?.left || 0
  // const defaultTop = defaultSize.value?.top || 0
  // const defaultWidth = defaultSize.value?.width || 0
  // const defaultHeight = defaultSize.value?.height || 0
  // const defaultRight = defaultSize.value?.right || 0
  // const defaultBottom = defaultSize.value?.bottom || 0
  const spce = props.spce
  const style: any = {
    left: '',
    right: '',
  }
  if (!contentWidth || !defaultWidth) {
    return {}
  }
  if (isY.value) {
    if (contentWidth / 2 > defaultLeft + defaultWidth / 2 - spce) {
      style.left = `-${(defaultLeft - spce)}px`
    } else if (contentWidth / 2 > sys.value.width - defaultRight + defaultWidth / 2 -
      spce) {
      style.right = `-${(sys.value.width - defaultRight - spce) < 0 ? 0 : sys.value.width - defaultRight - spce}px`
    } else {
      const left = Math.max(Math.abs((defaultWidth / 2) - (contentWidth / 2)), 0)
      style.left = defaultWidth > contentWidth ? left + 'px' : `-${left}px`
    }
  } else {
    if (contentHeight / 2 > defaultTop + defaultHeight / 2 - spce) {
      style.top = `-${(defaultTop - spce)}px`
    } else if (contentHeight / 2 > sys.value.height - defaultBottom + defaultHeight / 2 - spce) {
      style.bottom = `-${(sys.value.height - defaultBottom - spce) < 0 ? 0 : sys.value.height - defaultBottom - spce}px`
    } else {
      const top = Math.abs((defaultHeight / 2) - (contentHeight / 2))
      style.top = defaultHeight > contentHeight ? top + 'px' : `-${top}px`
    }
  }
  return {
    zIndex: props.zIndex + 1,
    ...props.position === 'b' ? ({ transform: `translateY(${defaultSize.value.height}px)` }) : ({}),
    ...style,
  }
})



const arrowStyle = computed(() => {
  if (isY.value) {
    return {
      width: 'auto',
      height: '8px',
      'background-color': 'transparent'
    }
  } else {
    return {
      width: '8px',
      height: 'auto',
      'background-color': 'transparent'
    }
  }

})

const pointerStyle = computed(() => {
  let style: any = {
    left: '',
    right: ''
  }
  const {width:defaultWidth =0,height:defaultHeight=0,left:defaultLeft=0,right:defaultRight=0,top:defaultTop=0,bottom:defaultBottom=0} = defaultSize.value
  const {width:contentWidth=0,height:contentHeight=0,left:contentLeft=0,right:contentRight=0,top:contentTop=0,bottom:contentBottom=0}=contentSize.value
  const {width:arrowWidth=0,height:arrowHeight=0}=arrowSize.value
  // const contentWidth = contentSize.value?.width ||  0
  // const contentLeft = contentSize.value?.left || 0
  // const contentRight = contentSize.value?.right || 0
  // const defaultLeft = defaultSize.value?.left || 0
  // const defaultWidth = defaultSize.value?.width || 0
  // const defaultRight = defaultSize.value?.right || 0
  // const arrowWidth = arrowSize.value?.width || 0
  // const arrowHeight = arrowSize.value?.height || 0
  // const contentHeight = contentSize.value?.height || 0
  // const contentTop = contentSize.value?.top || 0
  // const defaultTop = defaultSize.value?.top || 0
  // const defaultHeight = defaultSize.value?.height || 0
  // const defaultBottom = defaultSize.value?.bottom || 0
  // const contentBottom = contentSize.value?.bottom || 0
  const spce = props.spce

  if (!contentWidth || !arrowWidth) {
    return {}
  }
  if (isY.value) {
    if (contentWidth / 2 > defaultLeft + defaultWidth / 2 - spce) {
      style.left = defaultLeft + (defaultWidth / 2 - contentLeft - arrowWidth / 2) + 'px'
    } else if (contentWidth / 2 > sys.value.width - defaultRight + defaultWidth / 2 - spce) {
      const right = defaultRight + (defaultWidth / 2 - contentRight - defaultWidth / 2)
      style.right = `${right < 0 ? right * -1 + (arrowWidth / 2) : right}px`
    } else {
      style = {}
    }
    style[props.position === 't' ? 'bottom' : 'top'] = '5px'
  } else {
    if (contentHeight / 2 > defaultTop + defaultHeight / 2 - spce) {
      style.top = defaultTop + (defaultHeight / 2 - contentTop - arrowHeight / 2) + 'px'
    } else if (contentHeight / 2 > sys.value.height - defaultBottom + defaultHeight / 2 - spce) {
      style.bottom = defaultBottom + (defaultHeight / 2 - contentBottom - defaultHeight / 2) + 'px'
    } else {
      style = {}
    }
    style[props.position === 'l' ? 'right' : 'left'] = '5px'
  }
  return {
    transform: `rotate(45deg)`,
    backgroundColor: props.pointerColor == '' ? props.bgColor : props.pointerColor,
    zIndex: 99999 || props.zIndex,
    ...style
  }
})


onMounted(async () => {
  await getContentSize()
  isShow.value = false
  init.value = false
})

let isMobile = true
// #ifdef H5  
if (navigator.userAgent.indexOf('Mobile') === -1) {
  isMobile = false
}
// #endif

function getContentSize() {
  return new Promise(async (resolve) => {
    await uni.$var.utils.getRect('#default', isMobile ? proxy : proxy?.$refs.default).then(res => {
      defaultSize.value = res
    }),
      await uni.$var.utils.getRect(`#${contentId}`, isMobile ? proxy : proxy?.$refs[contentId]).then(res => {
        contentSize.value = res
      })
    await uni.$var.utils.getRect(`#${arrowId}`, isMobile ? proxy : proxy?.$refs[arrowId]).then(res => {
      arrowSize.value = res
    })
    resolve(true)
  })
}



function close() {
  isShow.value = false
}
function open() {
  isShow.value = true
}
defineExpose({
  close: close.bind(proxy),
  open,
  updateArrow:getContentSize
})
</script>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<style  scoped>
.v-popover__content {

}

.v-popover-view__arrow {
  overflow: hidden;
}

.v-popover-arrow__item {
  width: 10px;
  height: 10px;
}
</style>