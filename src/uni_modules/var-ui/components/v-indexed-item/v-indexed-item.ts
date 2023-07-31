import { ExtractDefaultPropTypes, PropType } from 'vue';

export const indexedItemProps = {
  id: {
    type: String,
    default: '',
    required: true
  },
  width: {
    type: [Number,String] as PropType<number | string>,
    default:'auto'
  },
  height: {
    type: [Number,String] as PropType<number | string>,
    default: 'auto'
  },
  titleBgColor: { 
    type: String,
    default: '#f7f7f7'
  }
} as const


export type IndexedItemProps = ExtractDefaultPropTypes<typeof indexedItemProps>
