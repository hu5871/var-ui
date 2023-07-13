import { ExtractDefaultPropTypes, PropType } from 'vue';
export const switchProps = {
  modelValue:{
    type:Boolean,
    default:false
  },
  width:{
    type:Number,
    default:120
  },
  height:{
    type:Number,
    default: 60
  },
  round:{
    type:Number,
    default: 9999
  },
  bgColor:{
    type:String,
    default:'#ededed'
  },
  activeBgColor:{
    type:String,
    default:'#2f7cf6'
  },
  disabled:{
    type:Boolean,
    default:false
  },
  scale:{
    type:Number,
    default:1
  },
  space:{
    type:Number,
    default:2
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0, 0]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [0, 0]
  },
  containerClass:{
    type:String,
    default:""
  },
  containerStyle:{
    type:Object,
    default:()=>({})
  },
  icon:{
    type:String,
    default:""
  },
  label:{
    type:Array,
    default:()=>([])
  },
  leftLabelColor:{
    type:String,
    default:'white'
  },
  rightLabelColor:{
    type:String,
    default:'black'
  },
  asyncFun:{
    type:[Promise,Function,Boolean]  as PropType<Promise<boolean>|(()=>boolean)| boolean>,
    default:()=> false
  }
} as const


export type SwitchProps = ExtractDefaultPropTypes<typeof switchProps>
