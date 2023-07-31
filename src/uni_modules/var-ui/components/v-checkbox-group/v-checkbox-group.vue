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
import { checkboxGroupProps } from './v-checkbox-group';
import { computed, getCurrentInstance, inject, nextTick, provide, ref, watch } from 'vue';
const tagName = 'v-checkbox-group'

const props = defineProps({ ..._defineProps, ...checkboxGroupProps })
const emits = defineEmits(['update:modelValue', 'change'])
const proxy = getCurrentInstance()?.proxy || null;
const uid = computed(() => proxy?._.uid)

const __modelValue = ref<string[] | number[]>([...new Set([...props.modelValue])])
provide(`${tagName}-${uid.value}`, __modelValue)
const disabled = ref(props.disabled)
const maxDisabled = computed(() => __modelValue.value.length >= props.max)
const max = ref(props.max)
provide(`${tagName}-max-${uid.value}`, max)
provide(`${tagName}-direction-${uid.value}`, computed(()=>props.direction))

const change = () => {
  emits('update:modelValue', __modelValue.value)
  emits('change', __modelValue.value)
  nextTick(() => {
    parentFormItem?.validate('change', () => {
    })
  })
}

let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined

  }
}
watch(() => props.modelValue, (newVal) => {
  __modelValue.value = [...new Set([...newVal])]
}, { deep: true })

const activeItem = (item: string | number) => {
  if (__modelValue.value.find(t => t === item)) return
  __modelValue.value.push(item)
  change()
}
const deleteItem = (item: any) => {
  __modelValue.value = __modelValue.value.filter(t => t !== item)
  change()

}
defineExpose({ parentUid: uid.value, tagName, gropuValue: __modelValue.value, disabled, maxDisabled, activeItem, deleteItem })

</script>

<style></style>