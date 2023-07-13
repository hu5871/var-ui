<template>
  <v-card :margin="margin" :border="border" :borderStyle="borderStyle" :borderColor="borderColor"  :padding="[0]"
    :_class="girdClass"  :width="width" :height="height" :unit="unit" :round="round" :bgColor="bgColor"
    >
    <view :id="girdId" class="flex w-full flex-wrap" :style="outViewStyle">
      <slot></slot>
    </view>

  </v-card>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, provide, ref } from "vue";
import { _defineProps, customPOrM } from "../../lib/share/customProps";
import { createNamespace } from "../../lib/utils/create";
import { gridProps } from "./v-grid";


const proxy = getCurrentInstance()?.proxy || null
const ctx = getCurrentInstance()
const bem = createNamespace('grid')
const girdClass = bem.b()
const girdId = bem.be('view', proxy?._?.uid)
const props = defineProps({ ..._defineProps, ...gridProps })
const CName = 'vGrid'
const gridSize = ref<UniApp.NodeInfo>({ width: 0 })


const outViewStyle = computed(() => {
  return {
  }
})
onMounted(() => {
  // nextTick(() => {
  uni.$var.utils.getRect(`#${girdId}`, ctx).then((rect) => {
    gridSize.value = rect || { width: 0 }
    // })
  })
})


const itemWidth = computed(() => {
  return Math.ceil((gridSize.value!.width || 0) / props.col - 1)
})

const itemHeight = computed(() => props.itemHeight)

const cacheList = ref<{ id: any }[]>([])
provide('vGridWidth', itemWidth)
provide('vGridHeight', itemHeight)
provide('vGridCol', computed(() => props.col))
provide('vGridBorder', computed(() => {
  return {
    border: props.border,
    borderStyle: props.borderStyle,
    borderColor: props.borderColor,
    unit: props.unit
  }
}))

provide('vGridCacheList', cacheList)

onBeforeUnmount(() => {
  cacheList.value = []
})
function addItem(id: any) {
  if (cacheList.value.find(t => t.id == id)) return
  cacheList.value.push({ id })
}

function deleItem(ctx: any) {
  const index = cacheList.value.findIndex(t => t.id == ctx)
  cacheList.value.splice(index, 1)
}
defineExpose({
  CName,
  addItem,
  deleItem
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