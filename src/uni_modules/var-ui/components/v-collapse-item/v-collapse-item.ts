import { BorderStyle,AlignMode } from '../../types';
import { ExtractDefaultPropTypes, PropType } from 'vue';

export const collapsePropsItem = {
  name:{
    type: [Number, String] as PropType<number | string>,
    default:''
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  title:{
    type:String,
    default:''
  },
  titleColor:{
    type:String,
    default:''
  },
  titleSize:{
    type:Number,
    default:28
  },
  value:{
    type:String,
    default:''
  },
  valueColor:{
    type:String,
    default:''
  },
  valueSize:{
    type:Number,
    default:28
  },
  leftIcon:{
    type:String,
    default:''
  },
  leftSize:{
    type:Number,
    default:42
  },
  openIcon:{
    type:String,
    default:'icon-chevron-up-outline'
  },
  leftColor:{
    type:String,
    default:''
  },
  rightIcon:{
    type:String,
    default:'icon-chevron-down-outline'
  },
  rightSize:{
    type:Number,
    default:42
  },
  valueAlign:{
    type:String as PropType<AlignMode|''>,
    default:''
  },
  rightColor:{
    type:String,
    default:'#ccc'
  },
} as const


export type CollapsePropsItem = ExtractDefaultPropTypes<typeof collapsePropsItem>
