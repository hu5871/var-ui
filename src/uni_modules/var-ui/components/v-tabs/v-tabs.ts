import { ExtractDefaultPropTypes, PropType } from 'vue';

export interface Tabs {
  [key: string]: any;
  name: string | number;
  title: string;
  icon?: string | undefined;
}
export const tabsProps = {
  modelValue:{
    type:Array as PropType<Tabs[]>,
    default:()=>([])
  },
  color: {
    type: String,
    default: '#1F2937'
  },
  active: {
    type: [String, Number] as PropType<string | number>,
    default: ''
  },
  activeColor: {
    type: String,
    default: '#2d8cf0'
  },
  sticky:{
    type:Boolean,
    default:false
  },
  iconColor: {
    type: String,
    default: '#ccc'
  },
  iconActiveColor: {
    type: String,
    default: '#2d8cf0'
  },
  lineWidth: {
    type: Number,
    default: 0
  },
  lineColor: {
    type: String,
    default: '#2d8cf0'
  },
  fontSize: {
    type: Number,
    default: 28
  },
  center: {
    type: Boolean,
    default: false
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 'auto'
  },
  height:{
    type: [Number, String] as PropType<number | string>,
    default: 'auto'
  },
  tabWidth: {
    type: [Number, String] as PropType<number | string>,
    default: 'auto'
  },
  tabHeight: {
    type: [Number, String] as PropType<number | string>,
    default: 88
  },
  tabConentHeight: {
    type: [Number, String] as PropType<number | string>,
    default: 'auto'
  },
  padding: {
    type: Array as PropType<number[]>,
    default: [0]
  },
  margin: {
    type: Array as PropType<number[]>,
    default: [0]
  },
  round: {
    type: Number,
    default: 0
  },
  zIndex:{
    type: Number,
    default:1
  }

} as const


export type TabsProps = ExtractDefaultPropTypes<typeof tabsProps>
