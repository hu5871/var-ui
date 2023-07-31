import { ExtractDefaultPropTypes, PropType } from 'vue';
export const sliderProps = {
  modelValue:{
    type:[Number,Array] as PropType<number|number[]>,
    default:0
  },
  showPopover:{
    type:Boolean,
    default:false
  },
  range:{
    type:Boolean,
    default:false
  },

  // step 步进有顿挫感 natureMove设置true时 不使用step
  natureMove:{
    type:Boolean,
    default:false
  },
  popoverPostion:{
    type:String as PropType<'t' | 'b'>,
    default:'t'
  },
  direction:{
    type:String as PropType<'row'|'col'>,
    default:"row"
  },
  pointerColor:{
    type:String,
    default:"#cfccc9"
  },
  bubbleBgColor:{
    type:String,
    default:"#b3b5b8"
  },
  width:{
    type:[Number,String] as PropType<number|string>,
    default: '100%'
  },
  height:{
    type:[Number,String] as PropType<number|string>,
    default: 6
  },
  round:{
    type:Number,
    default: 99999
  },
  lineColor:{
    type:String,
    default:'#e0e0e0'
  },
  activeColor:{
    type:String,
    default:"#3c9cff"
  },
  max:{
    type:Number,
    default:100
  },
  min:{
    type:Number,
    default:0
  },
  buttonWidth:{
    type:Number,
    default:40
  },
  buttonHeight:{
    type:Number,
    default:40
  },
  buttonBgColor:{
    type:String,
    default:'#e0e0e0'
  },
  step:{
    type:Number,
    default:1
  },
  disabled:{
    type:Boolean,
    default:false
  }
} as const


export type SliderProps = ExtractDefaultPropTypes<typeof sliderProps>
