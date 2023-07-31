import { ExtractDefaultPropTypes, PropType } from 'vue';

export const indexedProps = {
  width:{
    type: [Number, String] as PropType<number | string>,
    default:'auto'
  },
  height:{
    type: [Number, String] as PropType<number | string>,
    default:700
  },
  round:{
    type: Number,
    default:30
  },
  rows:{
    type:Number,
    default:1
  },
  lineBgColor:{
    type: String,
    default:'white'
  },
  lineActiveColor:{
    type: String,
    default:'#2d8cf0'
  }
} as const


export type IndexedProps = ExtractDefaultPropTypes<typeof indexedProps>
