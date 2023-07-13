import { ExtractDefaultPropTypes, PropType } from 'vue';

export const maskProps = {
  width:{
    type:[Number,String] as PropType<number|string>,
    default:0
  },
  show: {
    type:Boolean,
    default:false
  },
  contentClass:{
    type:String,
    default:''
  },
  overlayClickClose:{
    type:Boolean,
    default:true
  },
  transparent: {
    type: Boolean,
    default: false
  },
  _class:{
    type: String,
    default:""
  },
  // 滤镜
  filterBlur:{
    type:Number,
    default:0
  },
  duration:{
    type: Number,
    default:300
  },
  bgColor: {
    type: String,
    default: 'rgba(0,0,0,0.35)'
  },
  zIndex:{
    type:[Number, String] as PropType<number | string>,
    default: 999
  }
} as const


export type MaskProps = ExtractDefaultPropTypes<typeof maskProps>
