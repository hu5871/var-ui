<template>
  <view :class="['flex']">
    <view v-if="!vertical" :id="id"
      :class="[cName, 'relative', 'flex', 'flex-col', 'flex-grow-1', 'items-center', 'overflow']"
      :style="{ width: width }">
      <view class="flex justify-center w-full">
        <v-line v-if="index != null && index == 0" leftLineColor="transparent" :rightLineColor="rightLineColor"
          width="100%" :margin="[0]">
          <template v-slot:label>
            <v-icon :margin="[0, 0]" :name="current >= index ? resIconConfig.activeIcon : resIconConfig.icon"
              :color="isError ? errorColor : current >= index ? activeColor : resIconConfig.iconColor"></v-icon>
          </template>
        </v-line>
        <v-line v-else-if="index != null && index != 0 && !(index >= cacheList.length - 1)" :leftLineColor="leftLineColor"
          :rightLineColor="rightLineColor" width="100%" :margin="[0]">
          <template v-slot:label>
            <v-icon :margin="[0, 0]" :name="current >= index ? resIconConfig.activeIcon : resIconConfig.icon"
              :color="isError ? errorColor : current >= index ? activeColor : resIconConfig.iconColor"></v-icon>
          </template>
        </v-line>
        <v-line v-else-if="index != null && (index >= cacheList.length - 1)" :leftLineColor="leftLineColor"
          rightLineColor="transparent" width="100%" :margin="[0]">


          <template v-slot:label>
            <v-icon :margin="[0, 0]" :name="current >= index ? resIconConfig.activeIcon : resIconConfig.icon"
              :color="isError ? errorColor : current >= index ? activeColor : resIconConfig.iconColor"></v-icon>
          </template>
        </v-line>
      </view>
      <view :class="[bem.e('title'),]">
        <v-text :fontSize="fontSize" :color="color" :label="title"></v-text>
      </view>
    </view>
    <view v-else :id="id" :class="[cName, 'relative', 'flex', 'flex-row', 'flex-grow-1', 'items-start', 'overflow']"
      :style="{ height: height}">
      <view
        :class="['flex', 'h-full', 'flex-col', 'items-center', index != null && (index >= cacheList.length - 1) ? '' : 'justify-center' ]">
        <v-icon :margin="[10,0]" :name="current >= index ? resIconConfig.activeIcon : resIconConfig.icon"
          :color="isError ? errorColor : current >= index ? activeColor : resIconConfig.iconColor"></v-icon>
        <v-line v-if="!(index != null && (index >= cacheList.length - 1))" :bgColor="rightLineColor" height="100%" :vertical="true"></v-line>
      </view>
      <view class="flex flex-col h-full">
        <v-text :margin="[15, 10]" :fontSize="fontSize" :color="color" :label="title"></v-text>
        <view class="flex-grow-1">
          <slot></slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { stepsItemProps } from './v-steps-item';
import { createNamespace } from "../../lib/utils/create";
import VIcon from '../v-icon/v-icon.vue'
import VText from '../v-text/v-text.vue'
import vLine from '../v-line/v-line.vue';
import { computed, getCurrentInstance, inject, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const proxy = getCurrentInstance()?.proxy || null
const bem = createNamespace('steps-item')
const props = defineProps({ ...stepsItemProps })
const cName = bem.b()
const id = bem.be('id', props?._?.uid || uni.$var.utils.genUid(2))


const vertical = inject('vStepsVertical', computed(() => {
  return false
}))
const widthSize = inject('vStepsWidthSize', computed(() => {
  return {
    width: 'auto',
    height: 'auto',
  }
}))
const cacheList = inject('vStepsCacheList', computed(() => []))
const errorList = inject('vStepsErrorList', computed(() => []))


const width = computed(() => {
  if (Number.isNaN(widthSize.value.width)) {
    return widthSize.value.width
  } else if (typeof widthSize.value.width == 'number') {
    return `${widthSize.value.width / cacheList.value.length - 1}px`
  }
  return widthSize.value.width
})
const height = computed(() => {
  if (Number.isNaN(widthSize.value.height)) {
    return widthSize.value.height
  } else if (typeof widthSize.value.height == 'number') {
    return `${widthSize.value.height / cacheList.value.length - 1}px`
  }
  return widthSize.value.height
})

const current = inject('vStepsCurrent', computed(() => 0))
const lineColor=inject('vStepsLineColor',computed(() =>'#dfe1e5'))
const activeColor = inject('vStepsActiveColor', computed(() => ''))
const defaultIconConfig = computed(() => {
  return {
    icon: props.icon,
    activeIcon: props.activeIcon,
    iconColor: props.iconColor,
    iconSize: props.iconSize,
  }
})
const isError = computed(() => {
  return props.error
})


const vStepsIconConfig = inject('vStepsIconConfig', defaultIconConfig)
const resIconConfig = computed(() => {
  return {
    icon: isError.value ? props.errorIcon : (props.icon || vStepsIconConfig.value.icon),
    activeIcon: isError.value ? props.errorIcon : (props.activeIcon || vStepsIconConfig.value.activeIcon),
    iconColor: isError.value ? props.errorColor : (props.iconColor || vStepsIconConfig.value.iconColor),
    iconSize: props.iconSize || vStepsIconConfig.value.iconSize
  }
})

let parent: any = proxy?.$parent
while (parent) {
  if (parent?.CName == 'vSteps' || !parent) {
    break;
  } else {
    parent = parent?.$parent || undefined
  }
}


const index = ref<number>(-1)

const leftLineColor = computed(() => {
  if (Number.isNaN(current.value) || index.value == 0) return 'transparent'
  if (isError.value && errorList.value.find(t => t == index.value)) {
    return props.errorColor
  }
  // (current.value >= index.value || current.value + 1 >= index.value) ? activeColor.value : ''
  return current.value >= index.value ? activeColor.value : lineColor.value
})

const rightLineColor = computed(() => {
  if (index.value >= cacheList.value.length - 1) return 'transparent'
  if (errorList.value.find(t => t - 1 == index.value)) {
    return props.errorColor
  }
  return current.value - 1 >= index.value ? activeColor.value : lineColor.value
})
watch(() => cacheList.value, (val) => {
  index.value = val.findIndex(t => t == proxy)
}, { deep: true })

watch(() => [props.error, index.value], ([val]) => {
  if (!parent || index.value == -1) return
  if (val) {
    parent?.addErrorItem(index.value)
  } else if (!val) {
    parent?.deleErrorItem(index.value)
  }
}, { immediate: true })


onMounted(() => {
  parent?.addItem(proxy)
})

onBeforeUnmount(() => {
  if (parent?.deleItem) {
    parent.deleItem(proxy)
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