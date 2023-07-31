import { ExtractDefaultPropTypes, PropType } from 'vue';

type ButtonType = 'primary' | 'warning' | 'default' | 'success'

type Size = 'block' | 'mini' | 'small' | 'normal' | 'middle' | 'large'
export const buttonProps = {
  size: {
    type: String as PropType<Size>,
    default: 'normal'
  },
  formType: {
    type: String,
    default: ''
  },
  openType: {
    type: String,
    default: ''
  },
  hoverStartTime: {
    type: Number,
    default: 5
  },
  overStayTime: {
    type: Number,
    default: 60
  },
  hoverClass: {
    type: String,
    default: 'v-button__hover'
  },
  appParameter: {
    type: String,
    default: ''
  },
  plain: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  //跟随主题颜色
  isFollowTheme: {
    type: Boolean as PropType<Boolean>,
    default: true
  },
  block: Boolean,
  type: {
    type: String as PropType<ButtonType | string>,
    default: ''
  },
  bgColor: String,
  color: {
    type: String as PropType<string>,
    default: '#1F2937'
  },
  fontSize: {
    type: Number as PropType<Number>,
    default: 0
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0, 0]
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: 0
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 0
  },
  round: {
    type: Number,
    default: 13
  },
  icon: {
    type: String as PropType<string>,
    default: ''
  },
  iconColor: {
    type: String as PropType<string>,
    default: ''
  },
  iconRota: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  iconSize: {
    type: [Number, null] as PropType<Number | null>,
    default: null
  },
} as const


export type IconProps = ExtractDefaultPropTypes<typeof buttonProps>
