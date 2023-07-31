import { ExtractDefaultPropTypes, PropType } from 'vue';

export const countupProps = {
  startValue: {
    type: Number,
    default: 0
  },
  endValue: {
    type: Number,
    default: 0
  },
  duration:{
    type:Number,
    default: 3000
  },
  // 过渡
  useEasing:{
    type:Boolean,
    default: true
  },
  // 千位分割符
  separator: {
    type: String,
    default: ''
  },
  prefixColor: {
    type: String,
    default: '#1F2937'
  },
  prefixSize: {
    type: Number,
    default: 28
  },
  prefixLabel: {
    type: String,
    default: ''
  },
  suffixColor: {
    type: String,
    default: '#1F2937'
  },
  suffixSize: {
    type: Number,
    default: 28
  },
  suffixLabel: {
    type: String,
    default: ''
  },
  fontSize: {
    type: Number,
    default:28
  },
  color: {
    type: String,
    default: '#1F2937'
  },
  // 保留数位
  decimalPlaces: {
    type: Number,
    default: 0
  },

} as const


export type countupProps = ExtractDefaultPropTypes<typeof countupProps>
