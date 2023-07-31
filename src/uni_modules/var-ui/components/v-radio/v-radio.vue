<template>
  <view class="flex flex-row" :style="[containerStyle]">
    <view class="flex items-center" @click="checkClick">
      <view v-if="mode === 'radio'" class="flex items-center">
        <v-card :margin="props.margin" :round="99999" :border="props.border" :borderStyle="props.borderStyle"
          :borderColor="!active ? (_disabled) ? '#e6e6e6' : props.borderColor : props.activeBgColor" :padding="[0]"
          :width="props.size" :height="props.size" :unit="props.unit" :transparent="props.transparent"
          :bgColor="!active ? (_disabled) ? '#f5f5f5' : props.bgColor : props.activeBgColor">
          <view class="flex-1 flex">
            <view class="flex flex-1 justify-center items-center" v-if="active">
              <v-icon :name="props.icon" :color="props.iconActiveColor"
                :size="props.round >= props.size ? props.size * .6 : props.size * .8"></v-icon>
            </view>
          </view>
        </v-card>
        <view>
          <v-text :margin="props.labelMargin" :padding="[0]" :label="props.label"></v-text>
        </view>
      </view>
      <view v-else-if="mode === 'button'">
        <slot name="button"></slot>
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
import vButton from '../v-button/v-button.vue'
import vCard from '../v-card/v-card.vue'
import vText from '../v-text/v-text.vue'
import vIcon from '../v-icon/v-icon.vue'
import { customPOrM, _defineProps } from '../../lib/share/customProps'
import { radioProps } from './v-radio';
import { computed, ComputedRef, getCurrentInstance, inject, ref, watch } from 'vue';

const proxy = getCurrentInstance()?.proxy || null;
const props = defineProps({ ..._defineProps, ...radioProps })
const emits = defineEmits(['update:modelValue'])
const _disabled = ref(props.disabled)
const active = ref((props.modelValue || false))
if (_disabled.value) {
  active.value = false
  emits('update:modelValue', active.value)
}
let parent: any = proxy?.$parent
while (parent) {
  if (parent?.tagName == 'v-radio-group' || !parent) {
    break;
  } else {
    parent = parent?.$parent || undefined
  }
}
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



const parentValue: ComputedRef<string | number> = inject(parent ? `${parent.tagName}-${parent.parentUid}` : '', computed(() => ''))
watch(() => parentValue.value, (newVal) => {
  active.value = newVal === props.name
}, { deep: true, immediate: true })

const checkClick = async () => {
  if ((parent && parent.disabled) || _disabled.value) return
  if (typeof props.asyncSelectedFun === 'function') {
    let promiseResult: any = await props.asyncSelectedFun()
    if (typeof promiseResult === 'function') {
      promiseResult = await promiseResult();
    }
    if (!promiseResult) return
  }
  active.value = !active.value
  if (parent) {
    active.value && parent.activeItem(props.name)
  }
  emits('update:modelValue', active.value)
}
</script>

<style></style>