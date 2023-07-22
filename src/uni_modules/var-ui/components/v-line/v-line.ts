import { ExtractDefaultPropTypes, PropType } from "vue";

export const lineProps = {
  height: {
    type: [Number, String] as PropType<number | string>,
    default: 2,
  },
  unit: {
    type: String,
    default: "rpx",
  },
  border: {
    type: Number,
    default: 2,
  },
  align: {
    type: String as PropType<"start" | "end" | "center">,
    default: "center",
  },
  lienColor: {
    type: String,
    default: "#dfe1e5",
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0, 16],
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    default: "auto",
  },
  showLeftLine: {
    type: Boolean,
    default: true,
  },
  showRightLine: {
    type: Boolean,
    default: true,
  },
  leftLineColor: {
    type: String,
    default: "",
  },
  rightLineColor: {
    type: String,
    default: "",
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#6b6b70",
  },
  fontSize: {
    type: Number,
    default: 28,
  },
  label: {
    type: String,
    default: "",
  },
} as const;

export type LineProps = ExtractDefaultPropTypes<typeof lineProps>;
