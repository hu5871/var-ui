<template>
  <view class="flex flex-col overflow-hidden mx-20" :class="[props._class]" :style="_style">
    <slot></slot>
  </view>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<script lang="ts" setup>
import { createNamespace } from '../../lib/utils/create'
import VCell from '../v-cell/v-cell.vue'
import vCard from '../v-card/v-card.vue'
import { provide, toRaw,ref, watch, computed} from 'vue'
import { collapseProps } from './v-collapse'
import { customRadius, _defineProps } from '../../lib/share/customProps'

const bem = createNamespace('collapse')
const props=defineProps({ ..._defineProps, ...collapseProps })
const config=ref(({...props}))


const _style=computed(() => {
  return { 
    'border-radius':customRadius(props.round, props.unit)
  }
})
const findActive=(arr:Array<string|number>,val:string | number)=>{
  return !!(arr.find(item=>{
    return item == val
  }))
}
function changeKey(val:string|number){
  if(Array.isArray(config.value.activeKey)){
    if(findActive(config.value.activeKey,val)){
      config.value.activeKey=config.value.activeKey.filter(item=>{
        return item != val
      })
    }else{
      config.value.activeKey.push(val)
    }
  }else{
    config.value.activeKey= config.value.activeKey == val ? '' :val
  }
  
} 
provide('collapseConfig',config)
provide('collapseSetKey',changeKey)

defineExpose({
  changeKey
})
</script>

<style>

</style>