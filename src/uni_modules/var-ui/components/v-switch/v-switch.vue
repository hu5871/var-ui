<template>
  <v-card :_class="[bem.be('view', 'switch')]" :round="props.round" :margin="props.margin"
    :_style="{ overflow: 'hidden', padding: space + 'px' }" :bgColor="__modelValue ? props.activeBgColor : props.bgColor"
    :width="switchStyle.width" :height="switchStyle.height" :unit="props.unit">
    <view
      :class="['relative', 'flex', '-flex-1', 'overflow-hidden', 'items-center', containerClass, disabled ? 'opacity-6' : '']"
      :style="[containerStyle]" @click="handleChange(!__modelValue)">
      <view class="flex -flex-1 flex-row justify-between  items-center ">
        <view class="-flex-1 flex justify-center" v-if="props.label.length > 0">
          <v-text :margin="[0]" :color="props.leftLabelColor" :padding="[0]" :fontSize="height * 0.4"
            :label="props.label[0]"></v-text>
        </view>
        <view class="-flex-1 flex justify-center" v-if="props.label.length > 1">
          <v-text :margin="[0]" :color="props.rightLabelColor" :padding="[0]" :fontSize="height * 0.4"
            :label="props.label[1]"></v-text>
        </view>
      </view>
      <view :class="['absolute', bem.be('view', 'transition'), 'flex', 'items-center',]"
        :style="{ width: iconCardProp.width, height: iconCardProp.height, transform: `translateX(${translateX})`, }">
        <v-card :margin="[0]" :padding="[0]" :_style="{ transform: `scale(${props.scale})` }" :width="iconCardProp.width"
          :height="iconCardProp.height" :round="props.round">
          <view v-if="__modelValue" class="flex -flex-1 items-center justify-center">
            <slot name="ball" :hegiht="height">
              <v-icon v-if="props.icon" :size="height * .7" :color="props.activeBgColor" :name='props.icon'></v-icon>
            </slot>
          </view>
        </v-card>
      </view>
    </view>
  </v-card>
</template>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, ref, watch } from 'vue';
import { _defineProps } from '../../lib/share/customProps'
import { createNamespace } from '../../lib/utils/create';
import vCard from '../v-card/v-card.vue'
import vIcon from '../v-icon/v-icon.vue'
import { switchProps } from './v-switch';

const proxy = getCurrentInstance()?.proxy || null
const bem = createNamespace('switch')
const props = defineProps({ ..._defineProps, ...switchProps })
const height = computed(() => props.height)
const emits = defineEmits(['update:modelValue'])
const space = computed(() => uni.upx2px(props.space))
const disabled = computed(() => props.disabled)
const scale = computed(() => {
  if (props.scale < 0 || props.scale > 1) return 1
  return props.scale
})
const __modelValue = ref(props.modelValue)

const containerClass = computed(() => props.containerClass)
const containerStyle = computed(() => ({
  ...props.containerStyle
}))
const switchStyle = computed(() => {
  return {
    width: uni.upx2px(props.width) + 'px',
    height: uni.upx2px(height.value) + 'px',
  }
})
const iconCardProp = computed(() => {
  return {
    width: (uni.upx2px(props.width / 2) - (space.value * 2)) + 'px',
    height: (uni.upx2px(height.value) - (space.value * 2)) + 'px'
  }
})

let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined
  }
}
const translateX = ref(space.value + 'px')
const computedTargetBallWidth = computed(() => {
  return props.width / 2 - space.value
})
const handleChange = async (newVal: boolean) => {
  if (props.disabled) return
  if (typeof props.asyncFun === 'function') {
    let promiseResult: any = await props.asyncFun()
    if (typeof promiseResult === 'function') {
      promiseResult = await promiseResult();
    }
    if (!promiseResult) return
  }
  __modelValue.value = newVal
  emits('update:modelValue', __modelValue.value)
  nextTick(() => {
    parentFormItem?.validate('change', () => {
    })
  })
}
watch(() => props.modelValue, (newVal) => {
  if (disabled.value) return
  __modelValue.value = newVal
  translateX.value = __modelValue.value ? uni.upx2px(computedTargetBallWidth.value) + 'px' : space.value + 'px'
}, { immediate: true })
</script>

<style  scoped>
.v-switch-view__switch {
  transition-timing-function: ease;
  transition-property: background-color;
  transition-duration: 0.4s;
  transition-delay: 0ms;
}

.v-switch-view__transition {
  transition-property: transform;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.3, 1.05, 0.4, 1.05);
}
</style>