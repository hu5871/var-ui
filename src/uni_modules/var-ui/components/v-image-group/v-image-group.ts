
import { ExtractDefaultPropTypes, PropType } from 'vue';

export const imageGroupProps = {
   width:{
    type: String,
		default: 'auto'
   }
} as const


export type ImageGroupProps = ExtractDefaultPropTypes<typeof imageGroupProps>
