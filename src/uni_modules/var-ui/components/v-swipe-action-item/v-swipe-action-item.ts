import { ExtractDefaultPropTypes, PropType } from 'vue';

export interface WxsConfig{
  disabled:boolean;
  threshold:number;
  duration:number;
  nodeInfo:UniApp.NodeInfo
}
export interface SwipeOptions{
  id:string|number;
  // 文本
  text?:string;
  size?:number;
  color?:string;
  // 背景
  bgColor:string;
  // icon
  iconPosition?:string; // icon在左侧或右侧 默认左侧 可选 left|right
  icon?:string;
  iconSize?:number;
  iconColor?:string;
  // 圆
  borderRadius?:number|string;
  // 宽
  width:string|number;
}
export const swipeActionProps = {
  width:{
    type:[Number,String] as PropType<string|number>,
    default:'auto'
  },
  height:{
    type:[Number,String] as PropType<string|number>,
    default: 80
  },
  disabled:{
    type:Boolean,
    default: false
  },
  duration:{
    type:Number,
    default: 300
  },
  threshold:{
    type:Number,
    default:30
  },
  unit:{
    type:String,
    default:'rpx'
  },
  bgColor:{
    type:String,
    default:'#FFFFFF'
  },
  options:{
    type:Array as PropType<SwipeOptions[]>,
    default:()=>([])
  },
  padding:{
    type:Array as PropType<number[]>,
    default:()=>[0,16]
  },
  margin:{
    type:Array as PropType<number[]>,
    default:()=>[4,0]
  },
  // 点击后关闭
  clickClose:{
    type:Boolean,
    default:true
  },
  borderBottom:{
    type:Number,
    default:0
  },
  borderColor:{
    type:String,
    default:'#919398'
  },
} as const


export type SwipeActionProps = ExtractDefaultPropTypes<typeof swipeActionProps>
