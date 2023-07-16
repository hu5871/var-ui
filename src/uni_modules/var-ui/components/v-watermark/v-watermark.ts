import { ExtractDefaultPropTypes, PropType } from 'vue';
export const watermarkProps = {
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  height:{
    type: [Number, String] as PropType<number | string>,
    default: '100%'
  },
  zIndex: {
    type: Number,
    default: 1001,
  },
  unit:{
    type:String,
    default: 'rpx'
  },
  image:{
    type:String,
    default: ''
  },
  imageWidth:{
    type: Number,
    default: 80
  },
  imageHeight:{
    type: Number,
    default: 20
  },
  imageOpacity:{
    type: Number,
    default: .2
  },
  // 重复添加image水印 铺满
  imageRepeat:{
    type:Boolean,
    default: true
  },
  imagePosition:{
    type:String as PropType<'left-top'|'right-top'|'left-bottom'|'right-bottom'|'center'>,
    default: 'right-bottom'
  },
  // 安全距离
  spacing:{
    type:Number,
    default:10
  }
} as const


export type WatermarkProps = ExtractDefaultPropTypes<typeof watermarkProps>
