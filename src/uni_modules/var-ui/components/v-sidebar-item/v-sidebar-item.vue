<template>
  <view :id="sidebarItemId" :class="[]" :style="itemStyle">
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance, computed, getCurrentInstance, inject, nextTick, onBeforeUnmount, onMounted, Ref, ref, watch } from "vue";
import { SideBarTitleList } from "../../types";
import { sidebarItemProps } from "../v-sidebar-item/v-sidebar-item";


const proxy = getCurrentInstance()?.proxy || null
const props = defineProps({ ...sidebarItemProps })
const list = inject<Ref<ComponentPublicInstance[]>>('vSideBarTitleList', computed(() => []))
const index = computed(() => list.value.findIndex(t => t == proxy))
const active = inject('vSideBarActive', computed(() => 0))
const lastIndex = inject('vSideBarLastIndex', computed(() => 0))
const nextIndex = inject('vSideBarNextIndex', computed(() => list.value.length - 1))
const sidebarItemId = computed(() => `sidebar_item_id_${index.value}`)

let parent: any = proxy?.$parent
while (parent) {
  if (parent?.CName == 'vSidebar' || !parent) {
    break;
  } else {
    parent = parent?.$parent || undefined
  }
}
const top = ref<number>(0)
const height = ref<number>(0)
const item = computed(() => (
  {
    top: top.value,
    height: height.value,
    id: sidebarItemId.value,
    title: props.title,
    icon: props.icon,
    iconColor: props.iconColor,
    iconActiveColor: props.iconActiveColor,
    iconSize: props.iconSize
  }
))



onMounted(async () => {

  await uni.$var.utils.getRect(`#${sidebarItemId.value}`, proxy).then((rect) => {
    top.value = rect?.top || 0
    height.value = rect?.height || 0
    if (parent && parent?.addItem) {
      parent?.addItem(proxy, item)
    }
    if (parent && parent?.addItemTitleData) {
      nextTick(() => {
        parent?.addItemTitleData(item.value)
      })
    }
  })
})

const itemStyle = computed(() => {
  return {
    height: index.value === list.value.length - 1 ? '100%' : ''
  }
})
onBeforeUnmount(() => {
  if (parent && parent?.deleItem) {
    parent?.deleItem(proxy, props.title)
  }
})

defineExpose({
  sidebarItemId,
  top: top.value,
  height: height.value,
})
</script>

<style></style>