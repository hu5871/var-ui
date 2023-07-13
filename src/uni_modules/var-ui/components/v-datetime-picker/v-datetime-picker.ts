import { ExtractDefaultPropTypes, PropType } from 'vue';

export interface ColData {
  value: number;
  text: string;
  children?:Array<ColData>;
}
export type Mode='date'|'year-month'|'date-time'|'time'
export type DataRegexMap<T> = {
  [key in Mode]: T;
};

const now=new Date()
const startDate=new Date(now.getFullYear()-10,0)
const endDate=new Date(now.getFullYear()+10,11)
export const datetimeProps = {
  modelValue:{
    type:[String,Number,Date] as PropType<string|number| Date>,
    default:''
  },
  show:{
    type:Boolean,
    default:false
  },
  isPop:{
    type:Boolean,
    default:true
  },
  isHeader:{
    type:Boolean,
    default:true
  },
  mode:{
    type:String as PropType<'date'|'year-month'|'date-time'|'time'>,
    default:'date'
  },
  format:{
    type:String as PropType<'yyyy年mm月dd日hh时mm分ss秒'|''>,
    default:'yyyy年mm月dd日hh时mm分ss秒'
  },
  isSecond:{
    type:Boolean,
    default:true
  },
  customData:{
    type:[Function,Boolean] as PropType<boolean|((val:ColData[])=>(ColData[]))>,
    default:false
  },
  startTimeStamp:{
    type:Number,
    default:startDate.getTime()
  },
  endTimeStamp:{
    type:Number,
    default:endDate.getTime()
  },
  maxLevel:{
   type:Number,
   default:6
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 550
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


export type DatetimeProps = ExtractDefaultPropTypes<typeof datetimeProps>
