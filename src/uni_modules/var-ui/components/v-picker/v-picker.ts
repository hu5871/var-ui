import { ExtractDefaultPropTypes, PropType } from 'vue';

export const pickerProps = {
  isPop:{
    type:Boolean,
    default:true
  },
  show:{
    type:Boolean,
    default:false
  },
  isHeader:{
    type:Boolean,
    default:true
  },
  joinStr:{
    type:String,
    default:'-'
  },
  columns:{
    type:Array as PropType<any[]>,
    required:true,
    default:()=>([])
  },
  defaultIndex:{
    type:Array as PropType<number[]>,
    default:()=>([])
  },
  labelKey:{
    type:String,
    default:'text'
  },
  maxLevel:{
   type:Number,
   default:3
  },
  childrenKey:{
    type:String,
    default:'children'
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 600
  },
  containerStyle:{
    type:Object,
    default:()=>({})
  },
  itemStyle:{
    type:Object,
    default:()=>({})
  },
  cancelText:{
    type:String,
    default:'取消'
  },
  confirmText:{
    type:String,
    default:'确认'
  },
  cancelColor:{
    type:String,
    default:'#606266'
  },
  confirmColor:{
    type:String,
    default:'#2d8cf0'
  },
  titleText:{
    type:String,
    default:''
  },
  titleColor:{
    type:String,
    default:'#333'
  },
} as const


export type PickerProps = ExtractDefaultPropTypes<typeof pickerProps>
