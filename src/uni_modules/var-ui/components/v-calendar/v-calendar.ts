import { ExtractDefaultPropTypes, PropType } from 'vue';

export type LoadDate={
  current:YearData|null;
  last:YearData|null;
  next:YearData|null;
}

// 定义一个表示一天数据的类型
export type DayData = {
  year: number,
  month: number,
  ymd:string,
  day: number,
  weekday: number,
  timeStamp: number,
  startTimeStamp: number,
  endTimeStamp: number,
}
// 定义一个表示一个月数据的类型
export type MonthData = {
  year: number,
  month: number,
  weekList:WeekTwoArrayList[][],
  days: DayData[],
  startTimeStamp: number,
  endTimeStamp: number,
}
// 定义一个表示一年数据的类型
export type YearData = {
  year: number,
  month: MonthData[],
}

export type YMD=Pick<DayData,'year'|'month'|'day'>

export type WeekTwoArrayList= DayData& {
  isLast?: boolean,
  isNext?: boolean
}
export const calendarProps = {
  modelValue:{
    type:[Array] as PropType<number[]|string[]|Date[]>,
    default:()=>[]
  },
  //  日历的模式 single为单选  ｜ multiple 为多选 ｜ range为范围
  mode:{
    type:String as PropType<'single'|'multiple'|'range'>,
    default:'single'
  },
  show:{
    type:Boolean as PropType<boolean>,
    default:false
  },
  // 是否弹窗模式 默认true
  isPop:{
    type:Boolean as PropType<boolean>,
    default:true
  },
  //  仅当为弹窗模式生效
  showHeader:{
    type:Boolean as PropType<boolean>,
    default:true
  },
  readonly:{
    type:Boolean,
    default:false
  },
  rangeLabel:{
    type:Array as PropType<string[]|number[]>,
    default:()=>(['开始','结束'])
  },
  asyncSelected:{
    type:[Promise,Function,Boolean]  as PropType<Promise<boolean>|((item:WeekTwoArrayList)=>boolean)| boolean>,
    default:(item:WeekTwoArrayList)=> true
  },
  confirmText:{
    type:String as PropType<string>,
    default:'确定'
  },
  confirmFun:{
    type:[Promise,Function,Boolean]  as PropType<Promise<boolean>|(([])=>boolean)| boolean>,
    default:()=> true
  },
  format:{
    type:String,
    default:'yyyy-mm-dd'
  },
  space:{
    type:Number as PropType<number>,
    default:4
  },
  selectBgColor:{
    type:String,
    default:'#3c9cff'
  },
  selectColor:{
    type:String,
    default:'#fff'
  },
  round:{
    type:Number,
    default:6
  },
  selectItemStyle:{
    type:Object as PropType<Record<string,any>>,
    default:()=>({})
  },

} as const


export type CalendarProps = ExtractDefaultPropTypes<typeof calendarProps>
