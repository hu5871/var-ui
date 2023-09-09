import { ExtractDefaultPropTypes, PropType } from "vue";

type Type = "line" | "circle";
type StrokeLinecapType = "round" | "butt" | "square";

export const progressProps = {
  type: {
    type: String as PropType<Type>,
    default: "line",
  },
  // 进度圈的宽度
  strokeWidth: {
    type: Number,
    default: 6,
  },
  // 进度圈两端的形状
  strokeLinecap: {
    type: String as PropType<StrokeLinecapType>,
    default: "round",
  },
  // 是否展示进度圈中进度文本
  isShowCircleText: {
    type: Boolean,
    default: true,
  },
  // 圆的半径（type为circle时生效）
  round: {
    type: Number,
    default: 40,
  },
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
    default: "#1677ff",
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
