import { ExtractDefaultPropTypes, PropType } from 'vue';
export const swipeActionProps = {
  unit:{
    type:String,
    default:'rpx'
  },
  padding:{
    type:Array as PropType<number[]>,
    default:()=>[0]
  },
  margin:{
    type:Array as PropType<number[]>,
    default:()=>[0]
  },
} as const


export type SwipeActionProps = ExtractDefaultPropTypes<typeof swipeActionProps>
