import { ExtractDefaultPropTypes, PropType } from 'vue';

export const countdownProps = {
  date: {
    type: [Date, Number, String] as PropType<number | String>,
    default: new Date(new Date().getTime() + 24*60*60*1000)
  },
  time:{
    type: Number,
    default: 0
  },
  auto:{
    type:Boolean,
    default: true
  },
  format:{
    type:String,
    default:'DD天HH小时MM分SS秒'
  }
} as const


export type countdownProps = ExtractDefaultPropTypes<typeof countdownProps>
