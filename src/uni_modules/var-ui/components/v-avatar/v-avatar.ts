import { ExtractDefaultPropTypes, PropType } from 'vue';

export const avatarProps = {
  padding:{
    type:Array as PropType<number[]>,
    default: () => [0]
  },
  icon:{
    type:String,
    default:''
  },
  size: {
   type:Number,
   default:90
  },
  color:{
    type:String,
    default:''
  },
  round:{
    type: Number,
    default:10
  },
  imgMode:{
    type:String,
    default:'aspectFill'
  }
} as const


export type avatatProps = ExtractDefaultPropTypes<typeof avatarProps>
