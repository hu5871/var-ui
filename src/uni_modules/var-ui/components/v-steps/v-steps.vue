<template>
  <view :id="id" :style="stepsStyle"  class="flex relative" :class="[!vertical ? 'flex-row items-center' : 'flex-col']" ref="contentbody">
    <slot name="default"></slot>
  </view>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, onBeforeUnmount, onMounted, provide, ref } from 'vue';
import { stepsProps } from './v-steps';
import { createNamespace } from '../../lib/utils/create';
import { customWorH } from '../../lib/share/customProps';


const proxy = getCurrentInstance()?.proxy || null
const props = defineProps({ ...stepsProps })
const CName='vSteps'
const bem = createNamespace('steps-item')

const id=bem.be('id',props?._?.uid||uni.$var.utils.genUid(2))
const size=ref({
  width:0,
  height:0,
})
const errorList=ref<number[]>([])
const cacheList = ref<any[]>([])
onMounted(()=>{
  getRect()
})
const vertical=computed(()=>props.vertical)
const stepsStyle=computed(()=>{
  if(vertical.value && (!(props.height) || props.height == 'auto')){
    uni.$var.utils.error('v-steps component prop vertical is true, height attribute is required,700rpx is used by default')
    return {
      height: customWorH(700,'rpx')
    }
  }
  return {
    height: customWorH(props.height,props.unit)
  }
})


function getRect(){
  uni.$var.utils.getRect(`#${id}`,proxy).then(ret=>{
    size.value.width=ret?.width||0
    size.value.height=ret?.height||0
  })
}
function addItem(ctx: any) {
  if (cacheList.value.find(t => t == ctx)) return
  cacheList.value.push(ctx)
}
function deleItem(ctx: any){
  const index = cacheList.value.findIndex(t => t.id == ctx)
  if(index!==-1){
  cacheList.value.splice(index, 1)
  }
}
function addErrorItem(index: number) {
  if (errorList.value.find(t => t == index)) return
  errorList.value.push(index)
}
function deleErrorItem(i: number){
  const index = errorList.value.findIndex(t => t == i)
  if(index!==-1){
   errorList.value.splice(index, 1)
  }
}

provide('vStepsVertical',vertical)
provide('vStepsCacheList',cacheList)
provide('vStepsErrorList',errorList)
provide('vStepsCurrent',computed(()=> props.current))
provide('vStepsLineColor',computed(()=> props.lineColor))
provide('vStepsActiveColor',computed(()=> props.activeColor))
provide('vStepsIconConfig',computed(()=> ({
  icon:props.icon,
  activeIcon:props.activeIcon,
  iconColor:props.iconColor,
  iconSize:props.iconSize
})))

provide('vStepsWidthSize',size)

onBeforeUnmount(() => {
  cacheList.value = []
  errorList.value=[]
})
defineExpose({
  CName,
  addItem,
  deleItem,
  addErrorItem,
  deleErrorItem
})
</script>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<style></style>