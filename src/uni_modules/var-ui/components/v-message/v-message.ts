import { ExtractDefaultPropTypes } from 'vue';

export const messageProps = {
  width:{
    type: Number,
    default:300
  },
  height:{
    type: Number,
    default:250
  },
  round:{
    type: Number,
    default:30
  },
  zIndex:{
    type:Number,
    default:10075
  }
} as const


export type MessageProps = ExtractDefaultPropTypes<typeof messageProps>
