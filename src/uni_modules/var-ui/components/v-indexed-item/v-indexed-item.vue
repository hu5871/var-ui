
<template>
  <view :id="`id_${props.id}`">
    <slot name="title">
      <v-cell :round="0" :margin="[0]" :bg-color="props.titleBgColor" :title="props.id" :border="0" :right-icon="''">
      </v-cell>
    </slot>
    <v-card :round="0" :margin="[0]" :height="props.height" :width="props.width">
      <slot></slot>
    </v-card>
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
import vCell from '../v-cell/v-cell.vue'
import { computed, getCurrentInstance, inject, onMounted, ref } from "vue";
import { _defineProps } from "../../lib/share/customProps";
import { indexedItemProps } from './v-indexed-item';
const proxy = getCurrentInstance()?.proxy || null
const props = defineProps({ ..._defineProps, ...indexedItemProps })
const setIndexedKey = inject<(key:any) => void>('setIndexedKey', () => ({}))
const id = '#id_' + props.id
const _height = ref(0)
const getClientHeight = () => {
  uni.createSelectorQuery()
    .in(proxy)
    .select(id)
    .boundingClientRect()
    .exec(ret => {
      _height.value = ret[0].height
      setIndexedKey({
        height: _height.value,
        id: props.id
      })
    })
}
onMounted(() => {
  getClientHeight()
})

</script>

<style>

</style>