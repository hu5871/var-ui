
<template>
  <view :class="[bem.b()]" class="flex flex-row items-center overflow-hidden relative" :style="[_style]">
    <view @click="handleSelect(index,item)" v-for="(item, index) in finaList" :key="item[idKey]" :style="[itemStyle(index)]"
      :class="[bem.em('item', index + '')]" class="flex-1 h-full flex justify-center items-center flex-row">
      <v-text :_style="{ zIndex: 2,transitionDuration:'.25s',transitionProperty:'color' }" :weight="active === index ? activeWeight : 'normal'"
        :color="active === index ? activeColor : color" :fontSize="fontSize" :label="item[titleKey]"></v-text>
    </view>
    <view :class="[bem.em('block', 'view')]" class="absolute " :style="[bgBlockStyle]"></view>
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
import vText from '../v-text/v-text.vue'
import { computed, getCurrentInstance, onMounted, ref, watch } from "vue";
import { customPOrM, customRadius, customWorH } from "../../lib/share/customProps";
import { createNamespace } from "../../lib/utils/create";
import { subsectionProps } from "./v-subsection";

const proxy = getCurrentInstance()?.proxy || null
const bem = createNamespace('subsection')

const emits = defineEmits(['update:active','change'])
const props = defineProps({ ...subsectionProps })
const active = computed(() => {
  return props.active
})

watch(() => active.value, () => {
  selectItemLeft()
})

const _style = computed(() => {
  let height = props.height
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(height, props.unit),
    margin: customPOrM(props.margin, props.unit),
    padding: props.mode === 'default' ? 0 : customPOrM([props.padding], props.unit),
    background: props.bgColor,
    'border-radius': customRadius(props.round, props.unit),
  }
})
const itemStyle = computed(() => {
  return (index: number) => {
    return {
      borderWidth: props.mode === 'default' ? props.border + props.unit : 0,
      borderColor: props.activeBgColor,
      borderStyle: 'solid',
      ...index === 0 && props.mode === 'default' ? {
        borderTopLeftRadius: props.round + props.unit,
        borderBottomLeftRadius: props.round + props.unit,
        borderRight: 0
      } : {
        borderRight: (index !== props.modelValue.length - 1 && props.mode === 'default') && 0
      },
      ...index === props.modelValue.length - 1 && props.mode === 'default' ? {
        borderTopRightRadius: props.round + props.unit,
        borderBottomRightRadius: props.round + props.unit,
      } : {},
    }
  }
})

const blockWidth = ref(0)
const blockHeight = ref(0)
const offset = ref(0)
const bgBlockStyle = computed(() => {
  return {
    width: blockWidth.value + 'px',
    height: props.mode === 'default' ? '100%' : blockHeight.value + 'px',
    zIndex: 1,
    left: offset.value + 'px',
    background: props.activeBgColor,
    transitionTimingFunction: `linear`,
    transitionDuration: '0.25s',
    transitionProperty: `left,width`,
    borderRadius: props.mode === 'default' ? {} : customRadius(props.round, props.unit),
  }
})

const finaList = computed(() => {
  const { titleKey, idKey } = props
  const list = props.modelValue.map((item) => {
    if (typeof item == "string") {
      return {
        [titleKey]: item,
        [idKey]: uni.$var.utils.genUid(1)
      }
    }
    return item
  })
  return list
})
let infoList = ref<UniApp.NodeInfo[]>([...Array(props.modelValue.length).fill(({ width: 0 }))])
onMounted(() => {
  setTimeout(async () => {
    getInfoList()
  }, 60)

})

async function getInfoList() {
  for (let i = 0; i < finaList.value.length; i++) {
    const info = await uni.$var.utils.getRect(`.${bem.em('item', i + '')}`, proxy)
    if (!info) {
      setTimeout(() => {
        getInfoList()
        return
      }, 60)
    }
    infoList.value[i] = info
  }
  selectItemLeft()
}

function selectItemLeft() {
  const activeIndex = active.value
  const activeItem = infoList.value.find((_, index) => index == activeIndex)
  blockWidth.value = activeItem?.width || 0
  if (!props.mode || props.mode === 'default') {
    const x = infoList.value.reduce((total, item, index) => {
      return index < activeIndex ? (total += (item?.width || 0)) : total
    }, 0)
    offset.value = x
  } else {
    blockHeight.value = activeItem?.height || 0
    const x = infoList.value.reduce((total, item, index) => {
      return index < activeIndex ? (total += (item?.width || 0)) : total
    }, 0)
    offset.value = x + uni.upx2px(props.padding)
  }
}

function handleSelect(index: number,item:any) {
  if (index === active.value) return
  emits('update:active', index)
  emits('change', {index,item})
}
</script>

<style>

</style>