import { ExtractDefaultPropTypes, PropType } from 'vue';

export const sidebarItemProps = {
  title: {
    type: String,
    required: true,
    default: ''
  },
  icon: {
    type: String,
    default: ""
  },
  iconColor: {
    type: String,
    default: ""
  },
  iconActiveColor: {
    type: String,
    default: ""
  },
  iconSize:{
    type: Number,
    default:38
  },
  badge:{
    type: String,
    default:''
  }
} as const


export type SidebarItemProps = ExtractDefaultPropTypes<typeof sidebarItemProps>
