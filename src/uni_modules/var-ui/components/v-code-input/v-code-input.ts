import { ExtractDefaultPropTypes, PropType } from "vue";

type ModeType = "box" | "bottomLine" | "middleLine";

export const codeInputProps = {
  defaultValue: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  isFillText: {
    type: Boolean,
    default: false,
  },
  breathe: {
    type: Boolean,
    default: true,
  },
  focus: {
    type: Boolean,
    default: true,
  },
  mode: {
    type: String as PropType<ModeType>,
    default: "box",
  },
  maxlength: {
    type: Number,
    default: 4,
  },
  unit: {
    type: String,
    default: "rpx",
  },
} as const;

export type CodeInputPropsType = ExtractDefaultPropTypes<typeof codeInputProps>;
