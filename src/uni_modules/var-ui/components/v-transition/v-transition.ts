import { ExtractDefaultPropTypes, PropType } from 'vue';
// fade 淡入
// fade-up 上滑淡入
// fade-down 下滑淡入
// fade-left 左滑淡入
// fade-right 右滑淡入
// slide-up 上滑进入
// slide-down 下滑进入
// slide-left 左滑进入
// slide-right 右滑进入
// zoom-in 缩放
// zoom-out 缩放
export type Mode = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in' | 'zoom-out'
export const transitionProps = {
  show:{
    type:Boolean,
    default:false
  },
  duration:{
    type:Number,
    default:300
  },
  mode: {
    type: String as PropType<Mode>,
    default: 'fade',
  },
  timingFunction:{
    type:String,
    default: 'ease-out'
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 0
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 0
  },
  animationEndClose:{
    type: [Boolean, String] as PropType<boolean>,
    default: false
  },
  _style: {
    type: Object,
    default: () => ({})
  },
} as const


export type TransitionProps = ExtractDefaultPropTypes<typeof transitionProps>
