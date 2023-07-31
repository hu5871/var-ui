import { BorderStyle, AlignMode } from '../../types';
import { ExtractDefaultPropTypes, PropType } from 'vue';

export const collapseProps = {
  activeKey: {
    type: [String, Number, Array] as PropType<string | number | Array<number|string>>,
    default: () => ([])
  },
  titleColor: {
    type: String,
    default: ''
  },
  titleSize: {
    type: Number,
    default: 28
  },
  valueColor: {
    type: String,
    default: ''
  },
  valueSize: {
    type: Number,
    default: 28
  },
  leftIcon: {
    type: String,
    default: ''
  },
  leftSize: {
    type: Number,
    default: 42
  },
  leftColor: {
    type: String,
    default: ''
  },
  rightIcon: {
    type: String,
    default: 'icon-chevron-forward-outline'
  },
  rightSize: {
    type: Number,
    default: 42
  },
  valueAlign: {
    type: String as PropType<AlignMode>,
    default: 'start'
  },
  rightColor: {
    type: String,
    default: '#ccc'
  },
} as const


export type CollapseProps = ExtractDefaultPropTypes<typeof collapseProps>
