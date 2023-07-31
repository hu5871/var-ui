import { ExtractDefaultPropTypes, PropType } from 'vue';

export const stepsProps = {
  current:{
    type:Number,
    default:0
  },
  vertical:{
    type:Boolean,
    default:false
  },
  // vertical 为true时必须填写 height
  height:{
    type:[Number,String] as PropType<string|number>,
    default:''
  },
  unit:{
    type:String,
    default:'rpx'
  },
  iconColor:{
    type:String,
    default:'#ccc'
  },
  iconSize:{
    type:Number,
    default:40
  },
  icon:{
    type:String,
    default:'icon-ellipse'
  },
  activeIcon:{
    type:String,
    default:'icon-checkmark-circle-outline'
  },
  activeColor:{
    type:String,
    default:'#2d8cf0'
  },
  lineColor:{
    type:String,
    default:'#dfe1e5'
  },
  color:{
    type:String,
    default:'#323941'
  },
} as const


export type StepsProps = ExtractDefaultPropTypes<typeof stepsProps>
