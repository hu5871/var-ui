import { ExtractDefaultPropTypes, PropType } from 'vue';
export type Size ='mini' | 'small' |'normal' |'middle' |'large' 
  export const cardProps = {
    _contentClass: {
      type: String,
      default: ''
    },
    hoverClass: String,
    hoverStartTime:{
      type: Number,
      default:60
    },
    hoverStayTime:{
      type: Number,
      default:100
    },
    scrollY:{
      type: Boolean,
      default:false
    },
    height: {
      type: [Number, String] as PropType<number | string>,
      required: false,
      default: 'auto'
    },
    fontSize:{
      type:Number,
      default:28
    },
    minHeight: {
      type: [Number, String] as PropType<number | string>,
      required: false,
      default: 'auto'
    },
    isRow: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String] as PropType<number | string>,
      default: 'auto'
    },
    shadow: {
      type: Number,
      default: 0
    },
    shadowColor: {
      type: String,
      default: 'rgba(0,0,0,0.07)'
    }
  } as const


export type CardProps = ExtractDefaultPropTypes<typeof cardProps>
