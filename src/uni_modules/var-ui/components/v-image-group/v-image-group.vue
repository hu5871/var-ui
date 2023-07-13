<template>
  <view class="flex flex-warp" :style="{width:props.width+ props.unit}">
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
import { provide, ref,computed } from "vue";
import { defineProps } from "vue";
import { _defineProps } from "../../lib/share/customProps";
import { imageGroupProps } from './v-image-group';

const props =defineProps({ ..._defineProps, ...imageGroupProps})
const name='image-group'
const imageList=ref<string[]>([])
function pushSrc(src:string) {
  imageList.value.push(src)
}

defineExpose({
  name
})
provide('imageGroupList',computed(()=>imageList.value))
</script>

<style>

</style>