import { ExtractDefaultPropTypes, PropType } from 'vue';
import { iconProps } from '../v-icon/v-icon';
export type Size = 'mini' | 'small' | 'normal' | 'middle' | 'large'

export const radioProps = {
  modelValue:{
    type:[String,Number,Boolean] as PropType<number|string|boolean>,
    default:''
  },
  disabled:{
    type:Boolean,
    default:false
  },
  mode:{
    type:String as PropType<'radio'|'button'>,
    default:'radio'
  },
  containerClass:{
    type:String as PropType<string>,
    default:''
  },
  fontSize:{
    type:Number as PropType<number>,
    default:28,
  },
  ...iconProps,
  margin:{
    type: Array as PropType<number[]>,
    default: () => [0, 5]
  },
  containerStyle:{
    type:Object,
    default:()=>({})
  },
  name:{
    type:[String,Number] as PropType<number|string>,
    default:''
  },
  size:{
    type:Number as PropType<number>,
    default:42
  },
  border:{
    type:Number as PropType<number>,
    default:2
  },
  borderColor:{
    type:String as PropType<string>,
    default:'#d1d1d1'
  },
  bgColor:{
    type:String as PropType<string>,
    default:'white'
  },
  icon:{
    type:String as PropType<string>,
    default:'checkmark-outline'
  },
  activeBgColor:{
    type:String as PropType<string>,
    default:'#007aff'
  },
  iconActiveColor:{
    type:String as PropType<string>,
    default:'white'
  },
  label:{
    type:String as PropType<string>,
    default:''
  },
  labelMargin:{
   type:Array as PropType<number[]>,
   default:()=>([0,5])
  },
  asyncSelectedFun:{
    type:[Promise,Function,Boolean]  as PropType<Promise<boolean>|(()=>boolean)| boolean>,
    default:()=> false
  }
} as const


export type RadioProps = ExtractDefaultPropTypes<typeof radioProps>
