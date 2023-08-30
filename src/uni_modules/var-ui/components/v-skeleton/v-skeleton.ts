import { ExtractDefaultPropTypes } from "vue";

export const skeletonProps = {
  loading: {
    type: Boolean,
    default: true,
  },
  avatar: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 4,
  },
  animation: {
    type: Boolean,
    default: true,
  },
  background: {
    type: String,
    default: "rgba(0,0,0,.06)",
  },
  // 注意: 当是number数组时，width按照百分比来算，如果是string时，则直接取string
  rowsWidth: {
    type: Array<number | string>,
    default: [],
  },
  unit: {
    type: String,
    default: "rpx",
  },
} as const;

export type SkeletonProps = ExtractDefaultPropTypes<typeof skeletonProps>;
