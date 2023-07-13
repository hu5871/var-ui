import { ExtractDefaultPropTypes, PropType } from 'vue';
export const rootProps = {
  isCustom: {
    type: Boolean,
    default: false
  },
  // flex grow 和 flex-1 填充下 子元素无法通过 百分比获取宽高 开启childFill后通过设置height-0 使子元素获取百分比宽高
  childFill: {
    type: Boolean,
    default: true
  },
  bgColor: {
    type: String,
    default: ''
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0, 0]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [0, 0]
  },
} as const


export type IconProps = ExtractDefaultPropTypes<typeof rootProps>

