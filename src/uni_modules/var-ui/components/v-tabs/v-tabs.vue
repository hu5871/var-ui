<template>
  <view :class="[bem.b(),contentHeightFlex1]" class="overflow-hidden" :style="_style">
    <v-sticky v-if="sticky">
      <v-card :zIndex="zIndex" :round="props.round" :margin="props.margin" :padding="props.padding"
        :bg-color="props.bgColor" :width="props.width" :height="props.tabHeight" :color="props.color">
        <view style="white-space:nowrap">
          <scroll-view :scroll-left="scrollLeft" :scroll-with-animation="true"
            :style="{ width: '100%', height: props.tabHeight + props.unit }" enhanced :scroll-x="true"
            :show-scrollbar="false">
            <view ref="tabsContent"
              :class="[bem.e('content'), `flex  flex-row   relative flex-nowrap justify-start  items-center h-full`, center ? 'justify-center' : '']"
              style="flex: 1 0 auto;">
              <view :ref="`tabs_${index}`" class="flex  flex-shrink-0 items-center justify-center"
                :class="[bem.e('item'),]" :style="[customTabWidth]" @click.stop.prevent="handleActiveClick(item, false)"
                v-for="(item, index) in tabsList" :key="item.name" :data-name="item.name" :id="prefixId + item.name">
                <v-card :padding="[0]" :margin="[0, 16]" :width="tabWidth" _class="flex-row  flex-nowrap"
                  :height="props.tabHeight - 8" _contentClass="flex flex-nowrap  justify-center" :round="0">
                  <view class="flex items-center justify-center">
                    <v-icon :margin="[0, 5]" :color="active === item.name ? props.iconActiveColor : props.iconColor"
                      v-if="item.icon" :name="item.icon"></v-icon>
                    <v-text :color="active === item.name ? props.activeColor : props.color" _class="break-normal"
                      v-if="item.title" :label="item.title"></v-text>
                  </view>
                </v-card>
              </view>
              <view class="absolute  bottom-0 w-full" :style="{ width: contentWidth + 'px' }">
                <view class="absolute bottom-0" :style="{
                  width: lineWidth + 'px', height: '3px',
                  'background': props.lineColor,
                  'z-index': 1,
                  'transform': `translateX(${lineX}px)`,
                  opacity: initSuccess ? 1 : 0,
                }" :class="bem.e('line')"></view>
              </view>
            </view>
          </scroll-view>
        </view>
      </v-card>
    </v-sticky>
    <v-card v-else :round="props.round" :margin="props.margin" :padding="props.padding" :bg-color="props.bgColor"
      :width="props.width" :height="props.tabHeight" :color="props.color" _contentClass="overflow-hidden">
      <scroll-view :scroll-left="scrollLeft" :scroll-with-animation="true"
        :style="{ height: props.tabHeight + props.unit }" :scroll-x="true" enhanced :show-scrollbar="false">
        <view ref="tabsContent"
          :class="[bem.e('content'), `flex  flex-row   relative flex-nowrap justify-start  items-center h-full`, center ? 'justify-center' : '']"
          style="flex: 1 0 auto;">
          <view :ref="`tabs_${index}`" class="flex  flex-shrink-0 items-center justify-center" :class="[bem.e('item'),]"
            :style="[customTabWidth]" @click.stop.prevent="handleActiveClick(item, false)"
            v-for="(item, index) in tabsList" :key="item.name" :data-name="item.name" :id="prefixId + item.name">
            <v-card :padding="[0]" :margin="[0, 16]" :width="tabWidth" _class="flex-row  flex-nowrap"
              :height="props.tabHeight - 8" _contentClass="flex flex-nowrap  justify-center" :round="0">
              <view class="flex items-center justify-center">
                <v-icon :margin="[0, 5]" :color="active === item.name ? props.iconActiveColor : props.iconColor"
                  v-if="item.icon" :name="item.icon"></v-icon>
                <v-text :color="active === item.name ? props.activeColor : props.color" _class="break-normal"
                  v-if="item.title" :label="item.title"></v-text>
              </view>
            </v-card>
          </view>
          <view class="absolute  bottom-0 w-full" :style="{ width: contentWidth + 'px', height: '3px' }">
            <view class="absolute bottom-0" :style="{
              width: lineWidth + 'px', height: '3px',
              'background': props.lineColor,
              'z-index': 1,
              borderRadius: '2px',
              'transform': `translateX(${lineX}px)`,
              opacity: initSuccess ? 1 : 0,
            }" :class="bem.e('line')"></view>
          </view>
        </view>
      </scroll-view>
    </v-card>
    <!-- <view :class="[bem.e('content'),'w-full','mt-10',contentHeightFlex1]">
      <slot></slot>
    </view> -->
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
import vCard from '../v-card/v-card.vue'
import vIcon from '../v-icon/v-icon.vue'
import vText from '../v-text/v-text.vue'
import { customWorH, _defineProps } from '../../lib/share/customProps';
import { Tabs, tabsProps } from './v-tabs';
import { ref, provide, getCurrentInstance, nextTick, onMounted, ComponentInternalInstance, watch } from 'vue';
import { createNamespace } from '../../lib/utils/create';
import { computed } from 'vue';


const proxy: ComponentInternalInstance["proxy"] | null = getCurrentInstance()?.proxy || null;
const tabsName = 'tabs'
const bem = createNamespace('tabs')
const prefixId = `${tabsName}_`
const props = defineProps({ ..._defineProps, ...tabsProps })
const emits = defineEmits(['update:active','change'])

const customTabWidth = computed(() => {
  return {
    width: customWorH(props.tabWidth, props.unit)
  }
})

const _style=computed(() =>{
  return {
    width: customWorH(props.width,props.unit),
    height: customWorH(props.height,props.unit),
  }
})


const contentHeightFlex1=computed(() =>{
  return props.height !== 'auto' ? 'flex flex-grow-1 flex-col height-0' :'h-auto'
})

const active = ref(props.active)
const currntId = ref('')
const tabsList = ref<Tabs[]>(props.modelValue)
const tabsContent = ref()
const lineX = ref(0)
const initSuccess = ref(false)
const contentWidth = ref(0)
const tabsListSize = ref<any[]>([])
const getContentWidth = (init: boolean) => {
  uni.createSelectorQuery()
    .in(proxy)
    .selectAll('.v-tabs__item')
    .boundingClientRect()
    .exec(res => {
      if (!res.length) return
      tabsListSize.value = res[0]
      contentWidth.value = res[0].reduce((t: number, c: any) => {
        return t += c.width
      }, 0)
      if (init) {
        const item: any = tabsList.value.find(t => t.name == active.value) || tabsList.value[0]
        if (item) {
          handleActiveClick(item, true)
        }
        nextTick(() => {
          initSuccess.value = true
        })
      }
    })
}
onMounted(() => {
  setTimeout(() => {
    nextTick(() => {
      getContentWidth(true)
    })
  })
})


const lineWidth = ref(props.lineWidth)
const scrollLeft = ref(0)
const handleActiveClick = (item: Tabs, isInit: Boolean) => {
  if (item.name === active?.value && !isInit) return
  const ix = tabsListSize.value.findIndex(c => c.dataset.name == item.name)
  const beforeList = tabsListSize.value.slice(0, ix)
  const tatrget = tabsListSize.value.find(c => c.dataset.name == item.name)?.width / 2
  const offsetLeft = beforeList.reduce((t: number, c: any) => {
    return t += c.width
  }, 0)
  scrollLeft.value = (ix - 2) * (contentWidth.value || 0) / tabsListSize.value.length +tatrget;
  lineWidth.value = props.lineWidth ? props.lineWidth : tatrget / 1.5
  lineX.value = offsetLeft + tatrget - lineWidth.value / 2
  // currntId.value = prefixId + item.name
  nextTick(() => {
    active.value = item.name
    emits('update:active', item.name)
    emits('change',item.name)
  })
}
</script>

<style  scoped>
.v-tabs__line {
  border-bottom: var(--bw)var(--bu) solid var(--bc);
  transition-delay: 0;
  transition-timing-function: ease;
  transition-property: transform, width, opacity;
  transition-duration: .3s;
}
</style>