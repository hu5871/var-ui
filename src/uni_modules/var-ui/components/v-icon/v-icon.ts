import { ExtractDefaultPropTypes, PropType } from 'vue';
export const iconProps = {
  color: {
    type:String,
    default:'#919398'
  },
  size:{
    type: [Number, String] as PropType<number | string>,
    default:42
  },
  imgMode:{
    type:String,
    default:'aspectFill'
  },
  padding:{
    type:Array as PropType<number[]>,
    default:()=>[0]
  },
  margin:{
    type:Array as PropType<number[]>,
    default:()=>[0]
  },
  name:{
    type:String,
    default:'',
    required:true
  },
  rota:{
    type:Boolean,
    default:false
  },
  /**
   * @desc:动画名称
   * @default: 默认Rota
   */
  animationName:{
    type:String,
    default:'rota',
  },
   /**
   * @desc:动画时长
   * @default: 默认1.5
   */
  animationDuration:{
    type:Number,
    default:1.5,
  },
  /**
   * @desc:动画的速度曲线。
   */
  animationTimingFunction:{
    type:String,
    default:'linear',
  },
  /**
   * @desc: 动画次数
   */
   animationIterationCount:{
    type:[String,Number] as PropType<number | string>,
    default:'infinite'
   }
} as const


export type IconProps = ExtractDefaultPropTypes<typeof iconProps>



