import { ExtractDefaultPropTypes, PropType } from 'vue';

export const imageProps = {
  src:{
    type:String as PropType<string>,
    default:'',
    required:true
  },
  round:{
    type: [Number, Array] as PropType<number | number[]>,
    default: [0]
  },
  width:{
    type:[Number, String] as PropType<number | string>,
    default:300
  },
  height:{
    type:[Number, String] as PropType<number | string>,
    default: 300
  },
  lazyLoad:{
    type:Boolean,
    default:true
  },
  loading:{
    type:Boolean as PropType<boolean>,
    default:true
  },
  isPreview:{
    type:Boolean,
    default:false,
  },
  showMenuByLongPress:{
    type:Boolean,
    default:false
  },
   mode:{
    type: String,
		default: 'aspectFill'
   },
   loadSize:{
    type:Number,
    default:60
   },
   loadIcon:{
    type: String,
    default: 'loading'
   }
} as const


export type ImageProps = ExtractDefaultPropTypes<typeof imageProps>
