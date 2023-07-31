<template>
  <view class="flex  flex-row overflow-hidden" :style="_contentStyle">
    <view :id="sidebarId" class="flex flex-row overflow-hidden" :style="_sideStyle">
      <scroll-view :scroll-top="barScrollTop" :scroll-into-view="itemSideId" :scroll-y="true" :style="{ height: '100%' }"
        :scroll-with-animation="true" enhanced :show-scrollbar="false">
        <view :id="`sidebar_item_id_${index}`" @click="activeEmit(index)"
          class="flex flex-row justify-center items-center"
          :style="[_sideItemStyle, active === index ? _sideItemActiveStyle : {}, index == lastIndex ? bottomRightRound : {}, index == nextIndex ? topRightRound : {}]"
          v-for="(item, index) in titleList" :key="item.title">
          <v-icon :name="item.icon" :size="item.iconSize"
            :color="active === index ? item.iconActiveColor : item.iconColor" v-if="item.icon"></v-icon>
          <v-text :color="active === index ? props.activeColor : props.color" :label="item.title"></v-text>
        </view>
      </scroll-view>
    </view>
    <view :id="sideContentId" :class="[titleList.length ? '' : 'opacity-0']" class="flex flex-col flex-grow-1">
      <scroll-view :scroll-into-view="intoView" :scroll-top="contentScrollTop" @scroll="handleScrollChange" :style="{ height: '100%' }"
        :scroll-y="true" enhanced :scroll-with-animation="true" :show-scrollbar="false">
        <slot></slot>
      </scroll-view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import vText from "../v-text/v-text.vue";
import { ComponentPublicInstance, computed, getCurrentInstance, nextTick, onBeforeUnmount, onMounted, provide, Ref, ref, watch } from "vue";
import { customWorH } from "../../lib/share/customProps";
import { sidebarProps } from "./v-sidebar";
import { SideBarTitleList } from "../../types";

const CName = 'vSidebar'
const proxy = getCurrentInstance()?.proxy || null
const props = defineProps({ ...sidebarProps })
const emits = defineEmits(['update:active'])
const uid = proxy?._?.uid || uni.$var.utils.genUid(2)


const titleList = ref<SideBarTitleList[]>([])



const cacheList = ref<ComponentPublicInstance[]>([])
const active = computed(() => {
  return props.active
})

const lastIndex = computed(() => {
  return Math.max(active.value - 1, 0)
})
const nextIndex = computed(() => {
  return Math.min(active.value + 1, titleList.value.length - 1)
})
const _contentStyle = computed(() => ({
  width: customWorH(props.width, props.unit),
  height: customWorH(props.height, props.unit),
  background: props.bgColor,
  ...props._style
}))

const _sideStyle = computed(() => ({
  width: customWorH(props.sideWidth, props.unit),
}))

const _sideItemStyle = computed(() => ({
  height: customWorH(props.sideHeight, props.unit),
  background: props.sideBgColor,
  color: props.sideColor
}))


const _sideItemActiveStyle = computed(() => ({
  background: props.activeBgColor,
  color: props.activeColor
}))

const bottomRightRound = computed(() => ({
  'border-bottom-right-radius': '10% 18%',
}))

const topRightRound = computed(() => ({
  'border-top-right-radius': '10% 18%',
}))
const sidebarId = 'side_bar' + uid
const sideContentId = 'side_content' + uid
const barHeight = ref(0)
const contentHeight = ref(0)

const barScrollTop = ref(0)
const itemSideId = ref('')
const contentScrollTop = ref(0)
const intoView=ref('')
onMounted(() => {
  nextTick(() => {
    uni.$var.utils.getRect(`#${sidebarId}`, proxy).then(ret => {
      barHeight.value = ret?.height || 0
    })
    uni.$var.utils.getRect(`#${sideContentId}`, proxy).then(ret => {
      contentHeight.value = ret?.height || 0
    })
  })
})

provide('vSideBarTitleList', cacheList)
provide('vSideBarActive', active)
provide('vSideBarLastIndex', lastIndex)
provide('vSideBarNextIndex', nextIndex)
const clickFlag = ref(false)
function activeEmit(index: number, change?: boolean) {
  if (active.value == index) return
  !change && (clickFlag.value = true)
  barScrollTop.value = (index - 1) * (barHeight.value || 0) / titleList.value.length
  if (!change) {
    intoView.value=`sidebar_item_id_${index}`
  }
  uni.$var.utils.debounce(() => {
    clickFlag.value = false
  }, 900)
  emits('update:active', index)
}

// 内容滚动
async function handleScrollChange(e: any) {
  if (clickFlag.value) return;
  let activeIndex = active.value;
  for (let i = 0; i < cacheList.value.length; i++) {
    let that=cacheList.value[i]
    let rect= await uni.$var.utils.getRect(`#sidebar_item_id_${i}`,that)
    if(rect && rect?.top >= 0){
      activeIndex=i
      break
    }
  }
  activeEmit(activeIndex, true)
}
function addItem(item: ComponentPublicInstance, target: Ref<SideBarTitleList>) {
  if (cacheList.value.find(t => t == item)) return
  cacheList.value.push(item)
}

function addItemTitleData(target: SideBarTitleList) {
  if (titleList.value.find(t => t == target)) return
  titleList.value.push(target)
}
function deleItem(item: ComponentPublicInstance, title: String) {
  const index = cacheList.value.findIndex(t => t == item)
  if (index !== -1) {
    cacheList.value.splice(index, 1)
  }
  const tI = titleList.value.findIndex(t => t.title == title)
  if (tI !== -1) {
    titleList.value.splice(tI, 1)
  }
}

onBeforeUnmount(() => {
  cacheList.value = []
})
defineExpose({
  CName,
  activeEmit,
  addItemTitleData,
  addItem,
  deleItem,
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