<template>
  <view :class="bem.b()" class="flex flex-col" :style="[_style]">
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
import { ComponentPublicInstance, computed, ref, } from "vue";
import { customPOrM} from "../../lib/share/customProps";
import { createNamespace } from "../../lib/utils/create";
import { swipeActionProps } from "./v-swipe-action";
const bem = createNamespace('swipe-action')

const props = defineProps({ ...swipeActionProps })


const _style = computed(() => {
  return {
    margin: customPOrM(props.margin, props.unit),
    padding: customPOrM(props.padding, props.unit),
  }
})
const children=ref<ComponentPublicInstance[]>([])

function addChild(ctx:ComponentPublicInstance){
  if (children.value.find(t => t == ctx)) return
  children.value.push(ctx)
}
function removeChild(ctx:ComponentPublicInstance){
  const index= children.value.findIndex(t => t == ctx)
  children.value.splice(index,1)
}

function close(current:ComponentPublicInstance){
   for (let i = 0; i < children.value.length; i++) {
    const child =  children.value[i];
    if(child !== current){
      child?.itemClose()
    }
   }
}

defineExpose({
  CName:'swipeAction',
  addChild,
  close,
  removeChild
})
</script>

<style>

</style>