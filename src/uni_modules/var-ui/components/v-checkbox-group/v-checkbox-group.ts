import { ExtractDefaultPropTypes, PropType } from 'vue';
import { iconProps } from '../v-icon/v-icon';
export type Size = 'mini' | 'small' | 'normal' | 'middle' | 'large'

export const checkboxGroupProps = {
  modelValue:{
    type:Array as PropType<any[]>,
    default:[]
  },
  disabled:{
    type:Boolean,
    default:false
  },
  direction:{
    type:String as PropType<'row'|'col'>,
    default:'row'
  },
  max:{
    type:Number as PropType<number>,
    default:Infinity
  }
} as const


export type CheckboxGroupProps = ExtractDefaultPropTypes<typeof checkboxGroupProps>
