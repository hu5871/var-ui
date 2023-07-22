import { ExtractDefaultPropTypes } from "vue";

export const progressProps = {
  // 进度条高度
  height: {
    type: Number,
    default: 16,
  },
  // 进度值
  percent: {
    type: Number,
    default: 0,
  },
  // 背景色
  bgColor: {
    type: String,
    default: "#f7f7f7",
  },
  // 当前进度的背景色
  activeBgColor: {
    type: String,
    default: "#40a9ff",
  },
  // 是否显示进度文字
  showPivot: {
    type: Boolean,
    default: true,
  },
  unit: {
    type: String,
    default: "rpx",
  },
} as const;

export type ProgressPropsType = ExtractDefaultPropTypes<typeof progressProps>;
