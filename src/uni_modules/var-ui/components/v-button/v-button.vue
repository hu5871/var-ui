<template>
  <view :class="['flex', block ? 'flex-1' : '']">
    <vCard   :bg-color="_customProps.bgColor"
      :round="_customProps.round" :width="_customProps.width" :height="_customProps.height" :border="_customProps.border"
      :border-color="_customProps.borderColor" :border-style="_customProps.borderStyle" :margin="props.margin"
      :padding="[0]" :_class="`overflow-hidden flex ${props._class}`" :inline-block="block || true" :is-header="false"
      :_style="props._style" :color="_customProps.color" >
      <button :hoverClass="`${hoverClass}`" :hoverStartTime='hoverStartTime' :hoverStayTime="overStayTime" :formType="formType" :openType="openType" :appParameter="appParameter" @getphonenumber="getphonenumber"
        @getuserinfo="getuserinfo" @error="error" @opensetting="opensetting" @launchapp="launchapp" @click="handleClick"
        :class="[bem.b(), 'flex', 'justify-center items-center']" :style="_style">
        <v-icon v-if="icon" :margin="[0, 6]" :rota="iconRota" :name="icon" :size="iconSize" :color="iconColor"></v-icon>
        <vText :class="bem.e('label')" :color="_customProps.color" :font-size="_customProps.fontSize">
          <slot></slot>
        </vText>
      </button>
    </vCard>
  </view>
</template>

<script lang="ts" setup>
import { computed, watch } from 'vue'
import vCard from '../v-card/v-card.vue'
import vText from '../v-text/v-text.vue'
import { buttonProps } from './v-button'
import { createNamespace } from '../../lib/utils/create'
import { customBorder, customPOrM, customWorH, _defineProps } from '../../lib/share/customProps'
import Processor from 'postcss/lib/processor'
const bem = createNamespace('button')
const themeColor: Record<string, string> = {
  primary: '#2d8cf0',
  warning: '#ff9090',
  default: 'white',
  success: '#39b54a',
  error: '#ee3f4d'
}
const size = computed<Record<string, any>>(() => {
  return {
    block: { w: "100%", h: 80, fontSize: 28, round: 12 },
    mini: { w: 'auto', h: 46, fontSize: 21, round: 12 },
    small: { w: 'auto', h: 56, fontSize: 22, round: 13 },
    normal: { w: 'auto', h: 70, fontSize: 26, round: 13 },
    middle: { w: 'auto', h: 80, fontSize: 30, round: 13 },
    large: { w: 'auto', h: 88, fontSize: 32, round: 14 },
  }
})
const emit = defineEmits(['click', 'getphonenumber','getuserinfo','error','opensetting','launchapp'])
const props = defineProps({ ..._defineProps, ...buttonProps })
const typeColor = computed(() => {
  if (!(props.type in themeColor)) {
    console.warn(`target <vars-button> component is not exist  '${props.type}'  type`)
    return 
  }
  return themeColor[props.type] || ''
})

const computedBgColor = computed(() => {
  if (props.plain) return 'transparent'
  return props?.type && !props?.bgColor ? typeColor.value : props.bgColor
})
const computedBorderColor = computed(() => {
  if (props.plain) return props.bgColor || themeColor[props.type]
  return props.borderColor
})
const computedColor = computed(() => {
  if (props.plain) return props.color
  return props?.type && props.type !== 'default' ? 'white' : props.color
})
const _customProps = computed(() => {
  return {
    block: props.block ? '100%' : 0,
    bgColor: computedBgColor.value,
    height: props.block ? 80 : props.height || size.value[props.size].h,
    width: props.block ? size.value['block'].w : props.width || (props.size ? size.value[props.size].w : ''),
    round: (props.round || props.round == 0) || size.value[props.size].round,
    fontSize: props.fontSize || props.block ? size.value['block'].fontSize : size.value[props.size].fontSize,
    margin: props.margin,
    border: props.plain ? (props.border || 3) : props.border,
    borderStyle: props.borderStyle,
    borderColor: computedBorderColor.value,
    color: computedColor.value
  }
})
const _style = computed(() => {
  return {
    height: _customProps.value.height + props.unit,
    width: props.block ? '100%' : customWorH(_customProps.value.width, props.unit),
    'background-color': 'rgba(255,255,255,0)',
    'padding': customPOrM(props.padding, 'rpx'),

  }
})


const getphonenumber = (res: any) => {
  emit('getphonenumber', res)
}
const getuserinfo = (res: any) => {
  emit("getuserinfo", res);
}
const error = (res: any) => {
  emit("error", res);
}
const opensetting = (res: any) => {
  emit("opensetting", res);
}
const launchapp = (res: any) => {
  emit("launchapp", res);
}

const handleClick = (e: any) => {
  emit('click', e)
}
</script>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  },
}
</script>

<style>
.v-button::after {
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  border-radius: 0px !important;
}

.v-button__label {
  line-height: 1;
}

.v-button__hover {
  background-color: rgba(0, 0, 0, 0.1) !important;
  transition: background-color 0.3s ease-out !important;
}
</style>