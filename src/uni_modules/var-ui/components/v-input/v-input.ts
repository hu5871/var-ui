import { ExtractDefaultPropTypes, PropType } from 'vue';
import {  IconProps } from '../v-icon/v-icon';
import { genDefaultObjectProps } from '../../lib/share/iconDefaultProp';

type InputType ='textarea' | 'password' | 'text'|'number'|'idcard'|'idcard'|'tel'|'safe-password'|'nickname' 
type ConfirmType ='send'|'search'|'next'|'go'|'done'

export const inputProps = {
  type:{
    type:String as PropType<InputType>,
    default:'text'
  },
  modelValue:{
    type:[String,Number] as PropType<string|number>,
    default:''
  },
  placeholder:{
    type:String as PropType<string>,
    default:'请输入内容'
  },
  clear:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  clearConfig:{
    type:Object as PropType<IconProps>,
    default: ()=>genDefaultObjectProps({name:'icon-close-circle-outline'})
  },
  passwordConfig:{
    type:Object as PropType<IconProps>,
    default: ()=>genDefaultObjectProps({name:'icon-eye-off-outline'})
  },
  focusColor:{
    type:String as PropType<string>,
    default:''
  },
  focusIconColor:{
    type:String as PropType<string>,
    default:''
  },
  placeholderStyle:{
    type:Object as PropType<Record<string,string>>,
    default:()=>({})
  },
  password:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  showNumber:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  maxLength:{
    type:Number as PropType<number>,
    default:-1
  },
  disabled:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  confirmHold:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  cursorSpacing:{
    type: Number as PropType<number>,
    default: 24
  },
  confirmType:{
    type:String as PropType<ConfirmType>,
    default:'done'
  },
  autoBlur: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  adjustPosition:{
    type:Boolean as PropType<boolean>,
    default:true
  },
  holdKeyboard:{
    type: Boolean as PropType<boolean>,
    default: false
  },
  focus:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  isFocusClear:{
    type:Boolean,
    default:true
  },
  iconSize:{
    type:Number,
    default: 40
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0, 0]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [0,10]
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 68
  },
  autoHeight:{
    type:Boolean,
    default: false
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '100%'
  },
  bgColor:{
    type:String as PropType<string>,
    default: '#f5f5f5'
  },
  round:{
    type:Number as PropType<number>,
    default:18
  },
  fontColor:{
    type:String as PropType<string>,
    default: ''
  },
  align:{
    type:String as PropType<'left' | 'right' | 'center'>,
    default: 'left'
  },
  fontSize:{
    type:Number as PropType<number>,
    default:30
  },
  isPrefix:{
   type:Boolean as PropType<boolean>,
   default: false
  },
  prefixIconProp:{
    type:Object as PropType<IconProps>,
    default: ()=>genDefaultObjectProps()
  },
  prefixText:{
    type:String,
    default:''
  },
  prefixTextConfig:{
    type:Object as PropType<Record<string,any>>,
    default:()=>({
      width:'auto',
      unit:'rpx',
      color:'',
      fontSize:28
    })
  },
  suffixIconProp:{
    type:Object as PropType<IconProps>,
    default: ()=>genDefaultObjectProps()
  },
  isSuffix:{
    type:Boolean as PropType<boolean>,
    default: false
   },
  suffixText:{
    type:String,
    default:''
  },
  suffixTextConfig:{
    type:Object as PropType<Record<string,any>>,
    default:()=>({
      width:'auto',
      unit:'rpx',
      color:'',
      fontSize:28
    })
  },
} as const

export type InputProps = ExtractDefaultPropTypes<typeof inputProps>
