import { Ref } from "vue";


declare global {
  interface Uni {
    $var: VarUi,
  }
  interface VarUi {
    currentTheme: string;
    utils: Utils
    hooks: Hooks
  }
}



export type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'double'
export type AlignMode = 'start' | 'center' | 'end'
export interface SideBarTitleList {
  top: number;
  height: number;
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  iconActiveColor: string;
  iconSize: Number
}
export interface Config {
  top: number | string
}

export interface MessageOptions {
  model: string;
  title: string;
  icon: string;
  duration: number;
  rota: boolean;
  bgColor: string;
  size: number;
  isMask: boolean;
  iconColor: string;
}
/** 支持日期和时间的基本存储和检索。 */
// export interface Date {
//     /** 返回日期的字符串表示形式。字符串的格式取决于区域设置。 */
//     toString(): string;
//     /** 以字符串值形式返回日期。 */
//     toDateString(): string;
//     /** 以字符串值形式返回时间。 */
//     toTimeString(): string;
//     /** 以适合主机环境当前区域设置的字符串值的形式返回一个值。 */
//     toLocaleString(): string;
//     /** 以适合主机环境当前区域设置的字符串值形式返回日期。 */
//     toLocaleDateString(): string;
//     /** 以适合主机环境当前区域设置的字符串值形式返回时间。 */
//     toLocaleTimeString(): string;
//     /** 返回自世界协调时（UTC）1970年1月1日午夜以来存储的时间值(以毫秒为单位)。 */
//     valueOf(): number;
//     /** 获取以毫秒为单位的时间值。 */
//     getTime(): number;
//     /** 使用当地时间获取年份。 */
//     getFullYear(): number;
//     /** 使用世界协调时获取年份 (UTC)。 */
//     getUTCFullYear(): number;
//     /** 使用本地时间获取月份。 */
//     getMonth(): number;
//     /** 使用通用协调时间(UTC)获取日期对象的月份。 */
//     getUTCMonth(): number;
//     /** 使用本地时间获取每月的某一天。 */
//     getDate(): number;
//     /**使用世界协调时获取每月的某一天 (UTC)。 */
//     getUTCDate(): number;
//     /** 使用本地时间获取一周中的某一天。 */
//     getDay(): number;
//     /** 使用世界协调时获取一周中的某一天 (UTC)。 */
//     getUTCDay(): number;
//     /** 使用本地时间获取日期中的小时数。 */
//     getHours(): number;
//     /** 使用通用协调时(UTC) 间获取日期对象中的小时值。 */
//     getUTCHours(): number;
//     /** 使用本地时间获取日期对象的分钟数。*/
//     getMinutes(): number;
//     /** 使用通用协调时间获取日期对象的分钟数(UTC)。 */
//     getUTCMinutes(): number;
//     /** 使用本地时间获取日期对象的秒数。 */
//     getSeconds(): number;
//     /** 使用通用协调时间(UTC)获取日期对象的秒数。 */
//     getUTCSeconds(): number;
//     /** G使用本地时间设置日期的毫秒数。 */
//     getMilliseconds(): number;
//     /** 使用通用协调时间(UTC)获取日期对象的毫秒数。 */
//     getUTCMilliseconds(): number;
//     /** 获取本地计算机上的时间与世界协调时(UTC)之间的分钟差。 */
//     getTimezoneOffset(): number;
//     /**
//      * 设置日期对象中的日期和时间值。
//      * @param time 一个数值，表示自1970年1月1日格林尼治时间午夜以来经过的毫秒数。
//      */
//     setTime(time: number): number;
//     /**
//      * 使用本地时间设置日期对象中的毫秒值。
//      * @param ms 等于毫秒值的数值。
//      */
//     setMilliseconds(ms: number): number;
//     /**
//      * 使用世界协调时(UTC)设置日期对象中的毫秒值。
//      * @param ms 等于毫秒值的数值。
//      */
//     setUTCMilliseconds(ms: number): number;

//     /**
//      * 使用本地时间设置日期对象中的秒值。
//      * @param sec 一个等于秒值的数值。
//      * @param ms 一个等于毫秒值的数值。
//      */
//     setSeconds(sec: number, ms?: number): number;
//     /**
//      * 使用世界协调时设置日期对象中的秒值。
//      * @param sec 一个等于秒值的数值。
//      * @param ms 一个等于毫秒值的数值。
//      */
//     setUTCSeconds(sec: number, ms?: number): number;
//     /**
//      * 使用本地时间设置日期对象中的分钟值。
//      * @param min 一个等于分钟值的数值。
//      * @param sec 一个等于秒值的数值。
//      * @param ms 一个等于毫秒值的数值。
//      */
//     setMinutes(min: number, sec?: number, ms?: number): number;
//     /**
//      * 使用世界协调时(UTC)设置日期对象中的分钟值。
//      * @param min 一个等于分钟值的数值。
//      * @param sec 一个等于秒值的数值。
//      * @param ms 一个等于毫秒值的数值。
//      */
//     setUTCMinutes(min: number, sec?: number, ms?: number): number;
//     /**
//      * 使用本地时间设置日期对象中的小时值。
//      * @param hours 一个等于小时值的数值。
//      * @param min 一个等于分钟值的数值。
//      * @param sec 一个等于秒值的数值。
//      * @param ms 一个等于毫秒值的数值。
//      */
//     setHours(hours: number, min?: number, sec?: number, ms?: number): number;
//     /**
//      * 使用世界协调时(UTC)设置日期对象中的小时值。
//      * @param hours 一个等于小时值的数值。
//      * @param min 一个等于分钟值的数值。
//      * @param sec 一个等于秒值的数值。
//      * @param ms 一个等于毫秒值的数值。
//      */
//     setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
//     /**
//      * 使用本地时间设置Date对象的每月某一天的数值。
//      * @param date 等于一个月中某一天的数值。
//      */
//     setDate(date: number): number;
//     /**
//      * 使用世界协调时(UTC)在Date对象中设置月份中的数字日。
//      * @param date等于一个月中某一天的数值。
//      */
//     setUTCDate(date: number): number;
//     /**
//      * 使用本地时间设置Date对象中的月份值。
//      * @param month 等于月份的数值。一月份的值为0，其他月份的值会连续出现。
//      * @param date 表示一个月中某一天的数值。如果未提供该值，则使用调用getDate方法得到的值。
//      */
//     setMonth(month: number, date?: number): number;
//     /**
//      * 使用世界协调(UTC)时在日期对象中设置月份值。
//      * @param month 等于月份的数值。一月份的值为0，其他月份的值会连续出现。
//      * @param date 表示一个月中某一天的数值。如果未提供该值，则使用对getUTCDate方法的调用的值。
//      */
//     setUTCMonth(month: number, date?: number): number;
//     /**
//      * 使用本地时间设置日期对象的年份。
//      * @param year 年份的数值。
//      * @param month 当月从零开始的数值(1月为0，12月为11)。如果指定了numDate，则必须指定。
//      * @param date 等于一个月中某一天的数值。
//      */
//     setFullYear(year: number, month?: number, date?: number): number;
//     /**
//      * 使用世界协调时(UTC)在日期对象中设置年份值。
//      * @param year 等于年份的数值。
//      * @param month 等于月份的数值。一月份的值为0，其他月份的值会连续出现。如果提供了numDate，则必须提供。
//      * @param date 等于一个月中某一天的数值。
//      */
//     setUTCFullYear(year: number, month?: number, date?: number): number;
//     /** 返回使用世界协调时(UTC)转换为字符串的日期。 */
//     toUTCString(): string;
//     /** 以ISO格式的字符串值形式返回日期。 */
//     toISOString(): string;
//     /** 由JSON.stringify方法调用，以实现对象数据的转换，从而实现JavaScript对象符号(JSON)序列化。 */
//     toJSON(key?: any): string;
// }


export interface GetWindowSize {
  width: number;
  height: number;
  top: number | undefined;
  statusBarHeight: number | undefined;
}

export interface GetBrowser {
  isSafari: string;
  isWebView: boolean
}

export interface TransfromDateObject {
  year: number;
  month: number;
  day: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}
export interface CheckNetwork {
  isConnected: boolean;
  networkType: string;
}
export interface Utils {
  debounce: (func: () => any, wait?: number, immediate?: boolean) => void
  throttle:(func:()=>{}, wait:number, immediate:boolean) => void
  getWindowSize: () => Ref<GetWindowSize>;
  toPx: (num: number | string) => number;
  genUid: (length: number) => number;
  deepClone: (obj: any) => any;
  getBrowser: () => GetBrowser;
  getDevice: () => 'android' | 'ios';
  isObject: (val: any) => boolean;
  isPromise: (val: any) => boolean;
  isUrl: (value: string) => boolean;
  error: (str: string) => void;
  isTimestampInSeconds: (timestamp: number) => boolean;
  isTimestampInMilliseconds: (timestamp: number) => boolean;
  transfromDate: (val: string | number | Date) => TransfromDateObject;
  getRect(target: string, ctx: any, all?: false): Promise<UniApp.NodeInfo>;
  getRect(target: string, ctx: any, all: true): Promise<UniApp.NodeInfo[]>;
  getRect(target: string, ctx: any, all?: boolean): Promise<UniApp.NodeInfo | UniApp.NodeInfo[]>;
  copyText(text: string, callback: (success: boolean, result?: any) => void): void;
  sleep(num: number): Promise<true>;
  deleteStorage:(key: string)=>boolean;
  getStorage:(key: string)=>any;
  setStorage:(key: string,value:any)=>boolean;
  clearStorage:()=>boolean;
}


export interface Hooks {
  useNetWork: () => Ref<CheckNetwork>;
}