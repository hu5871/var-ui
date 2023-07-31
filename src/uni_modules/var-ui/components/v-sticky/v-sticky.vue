<template>
  <view :class="[bem.b(), 'sticky', 'flex', 'flex-col']" :style="_style">
    <view class="flex flex-col">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { createNamespace } from '../../lib/utils/create';
import { stickyProps } from './v-sticky';
import getWindowSize from '../../lib/share/getwindowSize';
import { computed } from 'vue';

const bem = createNamespace('sticky')
const props = defineProps({ ...stickyProps })
const sys = getWindowSize()


const _style=computed(()=>{
  return {
    top: `${props.offsetTop+sys.value.windowTop }px`,
    zIndex: props.zIndex 
  }
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