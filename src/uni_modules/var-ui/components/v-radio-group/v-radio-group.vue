<template>
  <view :class="['flex', props.direction === 'row' ? 'flex-row' : 'flex-col']">
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
<script setup lang="ts">

import vCard from '../v-card/v-card.vue'
import vText from '../v-text/v-text.vue'
import vIcon from '../v-icon/v-icon.vue'
import { _defineProps } from '../../lib/share/customProps'
import { radioGroupProps } from './v-radio-group';
import { computed, getCurrentInstance, inject, nextTick, provide, ref, watch } from 'vue';
const tagName = 'v-radio-group'

const props = defineProps({ ..._defineProps, ...radioGroupProps })
const emits = defineEmits(['update:modelValue', 'change'])
const proxy = getCurrentInstance()?.proxy || null;
const uid = computed(() => proxy?._.uid)

let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined

  }
}
const __modelValue = ref<string | number>(props.modelValue)
provide(`${tagName}-${uid.value}`, __modelValue)
provide(`${tagName}-direction-${uid.value}`, computed(()=>props.direction))
const disabled = ref(props.disabled)
const change = () => {
  emits('change', __modelValue.value)
  nextTick(() => {
    parentFormItem?.validate('change', () => {
    })
  })
}
watch(() => props.modelValue, (newVal) => {
  __modelValue.value = newVal
}, { deep: true })

const activeItem = (item: string | number) => {
  __modelValue.value = item
  emits('update:modelValue', __modelValue.value)
  change()
}
defineExpose({ parentUid: uid.value, tagName, gropuValue: __modelValue.value, disabled, activeItem })

</script>

<style></style>