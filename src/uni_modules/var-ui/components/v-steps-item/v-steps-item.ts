import { ExtractDefaultPropTypes, PropType } from 'vue';

export const stepsItemProps = {
  title:{
    type:String,
    default:''
  },
  icon:{
    type:String,
    default:''
  },
  iconColor:{
    type:String,
    default:''
  },
  iconSize:{
    type:Number,
    default:40
  },
  activeIcon:{
    type:String,
    default:''
  },
  error:{
    type:Boolean,
    default:false
  },
  errorColor:{
    type:String,
    default:'#ee3f4d'
  },
  errorIcon:{
    type:String,
    default:'icon-close-circle-outline'
  },
  fontSize:{
    type:Number,
    default:26
  },
  color:{
    type:String,
    default:'#323941'
  },
} as const


export type StepsItemProps = ExtractDefaultPropTypes<typeof stepsItemProps>
