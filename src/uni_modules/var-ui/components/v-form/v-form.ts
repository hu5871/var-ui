import { ExtractDefaultPropTypes, PropType } from 'vue';


export const formProps = {
   modelValue: {
      type: Object,
      default: () => ({})
   },
   rules: {
      type: Object,
      default: () => ({})
   },
   labelWidth: {
      type: [Number, String] as PropType<number | string>,
      required: false,
      default: 160
   },
   labelAlign:{
      type:String,
      default:'left'
   },
   labelStyle: {
      type:Object,
      default: () => ({})
   }

} as const


export type FormProps = ExtractDefaultPropTypes<typeof formProps>
