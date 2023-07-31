import { ExtractDefaultPropTypes, PropType } from 'vue';
import { BorderStyle } from '../../types';

export const gridProps = {
  col:{
    type:Number,
    default:3
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  itemHeight:{
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 108
  },
  margin:{
    type: Array as PropType<number[]>,
    default:[0]
  },
  border:{
    type:Number,
    default:0
  },
  borderColor: {
    type: String,
    default: 'transparent'
  },
  borderStyle: {
    type: String as PropType<BorderStyle>,
    default: 'solid'
  },
} as const


export type GridProps = ExtractDefaultPropTypes<typeof gridProps>
