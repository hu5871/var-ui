import { BorderStyle } from "../../types"
import { ExtractDefaultPropTypes, PropType } from "vue"



export const _defineProps = {
  border: {
    type: Number,
    default: 0
  },
  borderColor: {
    type: String,
    default: 'transparent'
  },
  borderStyle: {
    type: String as PropType<BorderStyle>,
    default: 'solid'
  },
  bgColor: {
    type: String,
    default: 'white'
  },
  zIndex:{
    type: Number,
    default:0
  },
  transparent: {
    type: Boolean,
    default: false
  },
  _style: {
    type: Object,
    default: () => ({})
  },
  _class: {
    type: [String,Object] as PropType<string|Record<string,any>>,
    default: ''
  },
  color: {
    type: String,
    default: '#1F2937'
  },
  round: {
    type: [Number, Array] as PropType<number | number[]>,
    default: 14
  },
  roundTl: {
    type: Boolean,
    default: false
  },
  roundTr: {
    type: Boolean,
    default: false
  },
  roundBl: {
    type: Boolean,
    default: false
  },
  roundBr: {
    type: Boolean,
    default: false
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 0
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: '100%'
  },
  unit: {
    type: String,
    default: 'rpx'
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0, 16]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [10, 16]
  },
} as const
export type DefineProps = ExtractDefaultPropTypes<typeof _defineProps>


/**
 * @desc customPOrM 处理自定义内边距或外边距
 * @param arr 数组
 * @param unit 单位
 */
export const customPOrM = (arr: number[], unit: string) => {
  let styleBody = ``
  for (let index = 0; index < arr.length; index++) {
    styleBody += ` ${arr[index] + unit}`
  }
  return styleBody
}
export const customRadius = (radius: number | number[], unit: string) => {
  let styleBody = ``
  if (Array.isArray(radius)) {
    for (let index = 0; index < radius.length; index++) {
      styleBody += ` ${radius[index] + unit}`
    }
  } else {
    for (let index = 0; index < 4; index++) {
      styleBody += ` ${radius + unit}`
    }
  }
  return styleBody
}

export const customBorder = (width: number, style: string, color: string) => {
  return `${width}rpx ${style} ${color}`
}
const unitList: string[] = ['%', 'px', 'em', 'rem', 'vw', 'vh', 'rpx', 'upx']
export const customWorH = (value: string | number, unit: string) => {
  const isExist = unitList.find((u: string) => {
    return String(value).indexOf(u) < 0 ? false : true
  })
  if (!isExist && value !== 'auto') {
    return value + unit
  } else {
    return value
  }
}