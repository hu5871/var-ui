import { ExtractDefaultPropTypes, PropType } from 'vue';
export const textProps = {
  color:{
    type:String,
    default: '#1F2937'
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  weight:{
    type: [Number, String] as PropType<number | string>,
    default: 'normal'
  },
  fontSize:{
    type:Number,
    default: 28
  },
  textOverflow:{
    type:Number,
    default:0 // 0表示不隐藏，1为一行 2 两行
  },
  unit: {
    type: String,
    default: 'rpx'
  },
  containerClass: {
   type:String,
   default:''
  },
  label: {
    type: [String, Number] as PropType<string | number>,
    default:''
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [0]
  },
 
} as const


export type CardProps = ExtractDefaultPropTypes<typeof textProps>
