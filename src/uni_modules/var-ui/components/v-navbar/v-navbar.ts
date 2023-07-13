import { ExtractDefaultPropTypes, PropType } from 'vue';
export const navbarProps = {
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 44
  },
  title: {
    type: String,
    default: ''
  },
  isBoxshad: {
    type: Boolean,
    default: true
  },
  backPath: { 
    type: String, 
    default: '' 
  },
  homePath: { 
    type: String,
    default:''
  },
  leftIcon:{
    type: String,
    default:'icon-chevron-back-outline'
  },
  homeIcon:{
    type: String,
    default:'icon-home'
  },
  backFun: {
    type: Function as PropType<() => boolean>,
    default: ()=>()=> (true)
  }

} as const


export type NavbarProps = ExtractDefaultPropTypes<typeof navbarProps>
