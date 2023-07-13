import { ExtractDefaultPropTypes, PropType } from 'vue';

export const rateProps = {
  modelValue:{
    type:Number,
    default:0
  },
  count:{
    type:Number,
    default:5
  },
  color:{
    type:String,
    default:'#b2b2b2'
  },
  activeColor:{
    type:String,
    default:'#FA3534'
  },
  half:{
    type:Boolean,
    default:false
  },
  icon:{
    type:String,
    default:'star-outline'
  },
  activeIcon:{
    type:String,
    default:'star'
  },
  itemSpace:{
    type:Number,
    default:30
  },
  min:{
    type:Number,
    default:0
  },
  size:{
    type:Number,
    default:40
  },
  disabled:{
    type:Boolean,
    default:false
  },
  readonly:{
    type:Boolean,
    default:false
  },
  touchable:{
    type:Boolean,
    default:true
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [0]
  },
  unit:{
    type:String,
    default:'rpx'
  },
  itemStyle:{
    type:Object,
    default:()=>({})
  }

} as const


export type RateProps = ExtractDefaultPropTypes<typeof rateProps>
