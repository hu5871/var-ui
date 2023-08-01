import { ExtractDefaultPropTypes } from "vue";

export const codeInputProps = {
  unit: {
    type: String,
    default: "rpx",
  },
} as const;

export type CodeInputPropsType = ExtractDefaultPropTypes<typeof codeInputProps>;
