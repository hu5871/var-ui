import { BorderStyle,AlignMode } from '../../types';
import { ExtractDefaultPropTypes, PropType } from 'vue';

export const cellProps = {
  padding: {
    type: Array as PropType<number[]>,
    default: () => [10, 16, 0]
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [5, 16]
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
  leftColor:{
    type:String,
    default:''
  },
  rightIcon:{
    type:String,
    default:'icon-chevron-forward-outline'
  },
  rightSize:{
    type:Number,
    default:42
  },
  valueAlign:{
    type:String as PropType<AlignMode>,
    default:'end'
  },
  rightColor:{
    type:String,
    default:'#ccc'
  },
  isReverse:{
    type:Boolean,
    default:false
  },
  isTitle:{
    type:Boolean,
    default:true
  },
  isBorder:{
    type:Boolean,
    default:true
  },
  border:{
    type:Number,
    default:1
  },
  borderColor:{
    type:String,
    default:'#c1c1c1'
  },
} as const


export type CellProps = ExtractDefaultPropTypes<typeof cellProps>
