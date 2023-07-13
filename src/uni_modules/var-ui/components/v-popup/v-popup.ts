import { ExtractDefaultPropTypes, PropType } from 'vue';
import {Mode} from '../v-transition/v-transition'

export type TransitionMode = {
  [key in 'bottom' | 'top' | 'left' | 'right' | 'center']: Mode;
}

export type StartPoint={
   [key:string]: number|null
}
export const popupProps = {
  show: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  mode:{
    type:String as PropType<'top' | 'right' | 'bottom' | 'center'|'left'>,
    default: 'bottom'
  },
  showMask:{
   type:Boolean as PropType<boolean>,
   default: true
  },
  overlayClickClose:{
    type:Boolean as PropType<boolean>,
    default: true
  },
  opacity:{
    type:Number as PropType<number>,
    default:.45
  },
  bgColor:{
    type:String,
    default: 'white'
  },
  touchAngle:{
    type:Number as PropType<number>,
    default:.4
  },
  duration:{
    type: Number as PropType<number>,
    default:300
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: '100%'
  },
  round:{
    type:Number,
    default:16
  },
} as const


export type PopupProps = ExtractDefaultPropTypes<typeof popupProps>
