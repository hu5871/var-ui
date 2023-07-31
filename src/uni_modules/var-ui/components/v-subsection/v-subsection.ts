import { ExtractDefaultPropTypes, PropType } from 'vue';
export const subsectionProps = {
  modelValue: {
    type:Array as PropType<any[]>,
    default:[]
  },
  active:{
    type:Number,
    default:0
  },
  mode:{
    type:String as PropType<'button'|'default'>,
    default:'default'
  },
  border:{
    type:Number,
    default:.5,
  },
  titleKey:{
    type:String,
    default:'title'
  },
  idKey:{
    type:String,
    default:'id'
  },
  width:{
    type:[Number,String] as PropType<string|number>,
    default:'auto'
  },
  height:{
    type:[Number,String] as PropType<string|number>,
    default: 70
  },
  unit:{
    type:String,
    default:'rpx'
  },
  bgColor:{
    type:String,
    default:'#FFFFFF'
  },
  fontSize:{
    type:Number,
    default: 26
  },
  color:{
    type:String,
    default: '#1F2937'
  },
  activeColor:{
    type:String,
    default: '#FFFFFF'
  },
  activeBgColor:{
    type:String,
    default: '#2d8cf0'
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0,16]
  },
  padding: {
    type: Number as PropType<number>,
    default: 8
  },
  activeWeight: {
    type: Number as PropType<number>,
    default:500
  },
  round: {
    type: [Number, Array] as PropType<number | number[]>,
    default: 6
  },
} as const


export type SubsectionProps = ExtractDefaultPropTypes<typeof subsectionProps>
