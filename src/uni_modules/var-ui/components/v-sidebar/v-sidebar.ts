import { ExtractDefaultPropTypes, PropType } from 'vue';

export const sidebarProps = {
  active:{
    type:Number,
    default:0
  },
  sideWidth:{
    type:Number,
    default:180
  },
  sideHeight:{
    type:Number,
    default:80
  },
  unit:{
    type:String,
    default:'rpx'
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 700
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: '100%'
  },
  bgColor:{ 
    type: String,
    default:''
  },
  sideColor:{
    type: String,
    default:'white'
  },
  sideBgColor:{
    type: String,
    default:'#f6f8fa'
  },
  color:{
    type: String,
    default:'#2b312c'
  },
  activeColor:{
    type: String,
    default:'#2b312c'
  },
  activeBgColor:{
    type: String,
    default:'white'
  },
  _style: {
    type:Object,
    default:()=>({})
  }
} as const


export type SidebarProps = ExtractDefaultPropTypes<typeof sidebarProps>
