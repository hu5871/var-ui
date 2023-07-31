import { ExtractDefaultPropTypes, PropType } from 'vue';
export const watermarkProps = {
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: '100%'
  },
  text: {
    type: [String] as PropType<String>,
    default: ''
  },
  rotate:{
    type: [Number] as PropType<number>,
    default:0
  },
  fontSize: {
    type: Number,
    default: 30
  },
  color: {
    type: [String] as PropType<String>,
    default: '#1F2937'
  },
  fontStyle: {
    type: [String] as PropType<'normal' | 'italic' | 'oblique'>,
    default: 'normal'
  },
  fontVariant: {
    type: [String] as PropType<'normal' | 'small-caps'>,
    default: 'normal'
  },
  fontWeight: {
    type: [String, Number] as PropType<'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>,
    default: 400
  },
  lineHeight: {
    type: Number,
    default: 14,
  },
  fontFamily:{
    type: [String] as PropType<string>,
    default:'sans-serif'
  },
  zIndex: {
    type: Number,
    default: 1001,
  },
  unit: {
    type: String,
    default: 'rpx'
  },
  image: {
    type: String,
    default: ''
  },
  imageWidth: {
    type: Number,
    default: 100
  },
  imageHeight: {
    type: Number,
    default: 40
  },
  imageSpacing: {
    type: Number,
    default: 60
  },
  opacity: {
    type: Number,
    default: .6
  },
  //重复铺满
  repeat: {
    type: Boolean,
    default: true
  },
  imagePosition: {
    type: String as PropType<'left-top' | 'right-top' | 'left-bottom' | 'right-bottom' | 'center'>,
    default: 'right-bottom'
  },
  // 安全距离 px
  spacing: {
    type: Number,
    default: 20
  }
} as const


export type WatermarkProps = ExtractDefaultPropTypes<typeof watermarkProps>
