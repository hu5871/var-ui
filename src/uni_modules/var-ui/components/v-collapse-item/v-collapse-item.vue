<template>
  <view :key="props.name" :class="[bem.b()]">
    <v-cell :right-icon="isActive ? props.openIcon : 'icon-chevron-down-outline'" :round="0" :margin="[0]"
      :is-title="false" :is-reverse="isMode.isReverse" :valueAlign="isMode.valueAlign" @click.prevent.stop="uItemClick">
      <template v-slot:value class="flex">
        <slot name="value">
          <view :class="['flex', 'flex-1', `justify-${isMode.valueAlign}`]">
            <v-text :label="value"></v-text>
          </view>
        </slot>
      </template>
      <template #right>
        <slot name="right">
          <view :class="[bem.e('icon'), 'flex', 'mx-10', 'items-center', { activeIcon: isActive }]">
            <v-icon name="icon-chevron-down-outline" :color="props.rightColor" :size="props.rightSize"></v-icon>
          </view>
        </slot>
      </template>
    </v-cell>
    <view ref="itemContainer" :style="{ 'max-height': isActive ? props.height ? '700px' : 0 : 0 }"
      :class="[bem.e('container'), bem.is('is-active', isActive), 'overflow-hidden']">
      <v-card :margin="[0]" :padding="[0]" :bgColor="bgColor" :round="0" height="auto">
        <slot></slot>
      </v-card>
    </view>
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
import { createNamespace } from '../../lib/utils/create';
import { ref, inject, getCurrentInstance, computed, watch, useSlots } from 'vue'
import { _defineProps } from '../../lib/share/customProps'
import { collapsePropsItem } from './v-collapse-item';

const slot = useSlots()
const valueSlot = computed(() => slot.value)

const bem = createNamespace('collapse-item')

const props = defineProps({ ..._defineProps, ...collapsePropsItem })

const emit = defineEmits(['open', 'close'])
const collapseConfig = inject('collapseConfig', computed(() => ({ ...props, activeKey: '' })))
const keys = computed(() => {
  return collapseConfig.value.activeKey
})

const isMode = computed(() => {
  return {
    isReverse: props.isReverse || collapseConfig.value.isReverse,
    valueAlign: props.valueAlign ? props.valueAlign : collapseConfig.value.valueAlign
  }
})
const isActive = ref(false)


if (!props.name) {
  uni.$var.utils.error('prop name is required , collapse-item component')
}
const findActive = (arr: Array<string | number>, val: string | number) => {
  return !!(arr.find(item => {
    return item == val
  }))
}
watch(() => keys.value, () => {
  if (Array.isArray(keys.value)) {
    if (findActive(keys.value, props.name)) {
      isActive.value = true
    } else {
      isActive.value = false
    }
  } else {
    if (keys.value == props.name) {
      isActive.value = true
    } else {
      isActive.value = false
    }
  }
}, { immediate: true, deep: true })
const collapseSetKey = inject('collapseSetKey', (value?: string | number) => {
  isActive.value = !isActive.value
})



const uItemClick = () => {
  collapseSetKey(props.name)
}


</script>

<style  scoped>
.v-collapse-item {}

.v-collapse-item__container {
  transition: all 0.3s;
}

.v-collapse-item__icon {
  transition: all 0.3s;
}

.activeIcon {
  transform: rotate(180deg);
}
</style>