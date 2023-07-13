import { ExtractDefaultPropTypes,PropType } from 'vue';
import { IconProps } from '../v-icon/v-icon';
import { genDefaultObjectProps } from '../../lib/share/iconDefaultProp';

export const noticeProps = {
  direction:{
    type:String as PropType<'row'|'col'>,
    default:'row'
  },
  text:{
    type:[String,Array] as PropType<string|string[]>,
    default:''
  },
  bgColor:{
    type:String as PropType<string>,
    default:'#fdf6ec'
  },
  multiple:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  height:{
    type:[String,Number] as PropType<string|number>,
    default:32
  },
  step:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  duration:{
    type:Number as PropType<number>,
    default:2000
  },
  disableTouch:{
    type:Boolean as PropType<boolean>,
    default:true
  },
  color:{
    type:String as PropType<string>,
    default:'#f9ae3d'
  },
  textStyle:{
    type:Object,
    default:()=>({})
  },
  _style:{
    type:Object,
    default:()=>({})
  },
  fontSize:{
    type:Number,
    default:28
  },
  isClose:{
    type:Boolean,
    default:true
  },
  unit:{
    type:String as PropType<string>,
    default:'rpx'
  },
  isPrefix:{
    type:Boolean,
    default:true
  },
  isSuffix:{
    type:Boolean,
    default:true
  },
  prefixIconProp:{
    type:Object as PropType<IconProps>,
    default: ()=>genDefaultObjectProps({name:'icon-volume-medium-outline',color:'#f9ae3d'})
  },
  suffixIconProp:{
    type:Object as PropType<IconProps>,
    default: ()=>genDefaultObjectProps({name:'icon-close',color:'#f9ae3d'})
  },
  rowSpeed:{
    type:Number as PropType<number>,
    default:100
  },
  colSpeed:{
    type:Number as PropType<number>,
    default:10
  }
} as const


export type NoticeProps = ExtractDefaultPropTypes<typeof noticeProps>
