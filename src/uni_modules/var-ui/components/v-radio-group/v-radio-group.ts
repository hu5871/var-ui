import { ExtractDefaultPropTypes, PropType } from 'vue';
import { iconProps } from '../v-icon/v-icon';
export type Size = 'mini' | 'small' | 'normal' | 'middle' | 'large'

export const radioGroupProps = {
  modelValue:{
    type: [String, Number] as PropType<string|number>,
    default:''
  },
  disabled:{
    type:Boolean,
    default:false
  },
  direction:{
    type:String as PropType<'row'|'col'>,
    default:'row'
  }
} as const


export type radioGroupProps = ExtractDefaultPropTypes<typeof radioGroupProps>
