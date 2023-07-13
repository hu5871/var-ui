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
  unit:{
    type:String,
    default: 'rpx'
  }
} as const


export type WatermarkProps = ExtractDefaultPropTypes<typeof watermarkProps>
