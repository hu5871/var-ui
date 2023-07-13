import { ExtractDefaultPropTypes, PropType } from 'vue';
export const stepperProps = {
  modelValue:{
    type:Number,
    default:0
  },
  min:{
    type:Number,
    default:0
  },
  max:{
    type:Number,
    default:Infinity
  },
  step:{
    type:Number,
    default:1
  },
  integer:{
    type:Boolean,
    default:false
  },
  decimalLength:{
    type:Number,
    default:null
  },
  width:{
    type:Number,
    default:200
  },
  height:{
    type:Number,
    default:60
  },
  bgColor:{
    type:String,
    default:'#f5f5f5'
  },
  disabledInput:{
    type:Boolean,
   default:false
  },
  disabled:{
   type:Boolean,
   default:false
  },
  buttonColor:{
    type:String,
    default:'#2f7cf6'
  },
  buttonRound:{
    type:Number,
    default:10
  },
  buttonIconColor:{
    type:String,
    default:'white'
  }
} as const


export type StepperProps = ExtractDefaultPropTypes<typeof stepperProps>
