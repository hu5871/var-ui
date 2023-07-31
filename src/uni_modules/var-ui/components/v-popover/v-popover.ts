import { ExtractDefaultPropTypes, PropType } from 'vue';


export const popoverProps = {
  // pointerColor 为 '' 时将以bgColor为选择
  pointerColor: {
    type: String,
    default:''
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 'auto'
  },
  round:{
    type: Number as PropType<number>,
    default:10
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  //  停止默认的点击事件展示 气泡框 ，（内容复杂 事件交互无法确定）
  // 设置为true 后 只能通过组件内部的 open和close事件 来控制气泡框的显示和关闭
  stopShowClickEvent:{
    type:Boolean,
    default:false
  },
  // 气泡框 超出窗口时 计算返回的安全贴边距离  单位px
  spce:{
    type:Number,
    default:5
  },
  position: {
    type: String as PropType<'t' | 'b'|'r'|'l'>,
    default: 'b'
  },
  // 是否需要蒙层
  isMask:{
    type: Boolean as PropType<boolean>,
    default: true
  },
  zIndex:{
    type:Number,
    default:1000
  },
  bgColor:{
    type:String,
    default:'#6e6e6e'
  }
} as const


export type PopoverProps = ExtractDefaultPropTypes<typeof popoverProps>
