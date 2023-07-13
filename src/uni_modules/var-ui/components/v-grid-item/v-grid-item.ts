import { ExtractDefaultPropTypes, PropType } from 'vue';

export const gridItemProps = {
  hoverClass:{
    type:String,
    default:'v-grid-item__hover'
  },
  hoverStartTime:{
    type:Number,
    default:10
  },
  hoverStayTime:{
    type:Number,
    default:60
  },
  unit:{
    type:String,
    default:'rpx'
  }
} as const


export type GridItemProps = ExtractDefaultPropTypes<typeof gridItemProps>
