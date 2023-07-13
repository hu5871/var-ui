import { ExtractDefaultPropTypes, PropType } from 'vue';

export const modalProps = {
  show:{
    type:Boolean,
    default:false
  },
  width:{
    type: Number,
    default:600
  },
  height:{
    type: Number,
    default:400
  },
  round:{
    type: Number,
    default:30
  },
  title:{
    type:String,
    default:''
  },
  zIndex:{
    type:Number,
    default:1000
  },
  // 只对确定按钮有效
  asyncClose:{
    type:[Function,Promise] as PropType<(()=>boolean)|Promise<boolean>>,
    default:()=> {
      return ()=>{
        return  true
      }
    }
  },
  overlayClickClose:{
    type:Boolean as PropType<boolean>,
    default: true
  },
  btnReverse:{
    type:Boolean,
    default:false
  },
  showCancelButton:{
    type:Boolean,
    default:true
  },
  showConfirmButton:{
    type:Boolean,
    default:true
  },
  capsuleBtn:{
    type:Boolean,
    default:false
  },
  confirmText:{
    type:String,
    default:'确定'
  },
  cancelText:{
    type:String,
    default:'取消'
  },
  confirmBgColor:{
    type:String,
    default:'#69aaf8'
  },
  cancelBgColor:{
    type:String,
    default:'white'
  },
  confirmColor:{
    type:String,
    default:'white'
  },
  cancelColor:{
    type:String,
    default:'black'
  },
} as const


export type ModalProps = ExtractDefaultPropTypes<typeof modalProps>
