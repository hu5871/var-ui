import { ExtractDefaultPropTypes, PropType } from 'vue';
export const stickyProps = {
  offsetTop:{
    type:Number,
    default:0
  },
  zIndex:{
    type:Number,
    default:1
  }
} as const


export type StickyProps = ExtractDefaultPropTypes<typeof stickyProps>
