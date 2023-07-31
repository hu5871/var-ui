<template>
  <view class="flex flex-row" :style="[containerStyle]">
    <view class="flex items-center" @click="checkClick">
      <vCard :margin="props.margin" :round="props.round" :border="props.border" :borderStyle="props.borderStyle"
        :borderColor="!active ? (_disabled || maxDisabled) ? '#e6e6e6' : props.borderColor : props.activeBgColor"
        :padding="[0]" :width="props.size" :height="props.size" :unit="props.unit" :transparent="props.transparent"
        :bgColor="!active ? (_disabled || maxDisabled) ? '#f5f5f5' :  props.bgColor  : props.activeBgColor">
        <view class="flex-1 flex">
          <view  class="flex flex-1 justify-center items-center" v-if="active">
            <v-icon :name="props.icon" :color="props.iconActiveColor" :size="props.round >= props.size ? props.size * .7 :props.size * .9"></v-icon>
          </view>
        </view>
      </vCard>
      <view>
        <v-text :margin="props.labelMargin" :padding="[0]" :label="props.label"></v-text>
      </view>
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
<script setup lang="ts">
import vCard from '../v-card/v-card.vue'
import vText from '../v-text/v-text.vue'
import vIcon from '../v-icon/v-icon.vue'
import { customPOrM, _defineProps } from '../../lib/share/customProps'
import { checkboxProps } from './v-checkbox';
import { computed, ComputedRef, getCurrentInstance, inject, ref, watch } from 'vue';

const proxy = getCurrentInstance()?.proxy || null;
const props = defineProps({ ..._defineProps, ...checkboxProps })
const emits = defineEmits(['update:modelValue'])
const _disabled = ref(props.disabled)
const active = ref((props.modelValue || false))
if (_disabled.value) {
  active.value = false
  emits('update:modelValue', active.value)
}
let parent: any = proxy?.$parent
while (parent) {
  if (parent?.tagName == 'v-checkbox-group' || !parent) {
    break;
  } else {
    parent = parent?.$parent || undefined
  }
}
if (parent) {
  parent.gropuValue.forEach((t: number | string) => {
    if (t === props.name) {
      active.value = true
    }
  })
}
const parentValue: ComputedRef<string[] | number[]> = inject(parent ? `${parent.tagName}-${parent.parentUid}` : '', computed(() => []))
const parentMaxValue: ComputedRef<number> = inject(parent ? `${parent.tagName}-max-${parent.parentUid}` : '', computed(() => Infinity))
const maxDisabled: ComputedRef<boolean> = computed(() => parent && parent.maxDisabled)
const direction :ComputedRef<string>= inject(parent ? `${parent.tagName}-direction-${parent.parentUid}` : '', computed(() => 'row'))
const containerStyle=computed(()=>{
  let mar:number[]=props.margin
  if(direction.value === 'col'){
    // 如果 margin 只设置了左右 则填充 margin-bottom
   if(props.margin.length === 2 && !props.margin[0]){
    mar=[0,props.margin[1],16]
   }
  }
  return {
    margin:customPOrM(mar,props.unit),
    ...props.containerStyle
  }
})


watch(() => parentValue.value, (newVal) => {
  parentValue.value.find(t => {
    if (t === props.name && !active.value && parentValue.value.length - 1 < parentMaxValue.value) {
      active.value = true
    }
  })
}, { deep: true })

const checkClick = async () => {
  if ((parent && parent.disabled) || _disabled.value || (parentValue.value.length >= parentMaxValue.value && !active.value)) return
  if (typeof props.asyncSelectedFun === 'function') {
    let promiseResult: any = await props.asyncSelectedFun()
    if (typeof promiseResult === 'function') {
      promiseResult = await promiseResult();
    }
    if(!promiseResult) return
  }
  active.value = !active.value
  if (parent) {
    active.value && parentValue.value.length < parentMaxValue.value && parent.activeItem(props.name)
    !active.value && parent.deleteItem(props.name)
  }
  emits('update:modelValue', active.value)
}
</script>

<style>

</style>