import { ExtractDefaultPropTypes, PropType } from 'vue';


interface RequiredIcon{
   color: string;
   name: string;
   size: number;
}
 
export const formItemProps = {
   prop: {
      type: String as PropType<string>,
      default: ''
   },
   borderBottom: {
      type: Boolean,
      default: true
   },
   rules: {
      type: [Array, Object] as PropType<Record<any,any>[]|Record<any,any>>,
      default: () => ([])
   },
   labelWidth: {
      type: [Number, String] as PropType<number | string>,
      required: false,
      default: 'auto'
   },
   requiredIcon:{
      type:Object as PropType<RequiredIcon>,
      default:()=>({
         color:'#F53F3F',
         name:'icon-medical',
         size:2
      })
   },
   required:{
      type: Boolean,
      default: false
   },
   label: {
      type: String,
      default: ''
   },
   labelStyle: {
      type:Object,
      default:()=>({})
   }
} as const


export type FormItemProps = ExtractDefaultPropTypes<typeof formItemProps>
