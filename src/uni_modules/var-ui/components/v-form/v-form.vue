<template>
  <view>
    <slot></slot>
  </view>
</template>

<script lang="ts" setup>
import { formProps } from '../v-form/v-form';
import { computed, provide, ref } from 'vue';

const props = defineProps({ ...formProps })
const emits = defineEmits(['update:modelValue'])
const _cloneValue = uni.$var.utils.deepClone(props.modelValue)
const provideProps = computed(() => {
  return {
    labelWidth: props.labelWidth,
    labelStyle: props.labelStyle,
  }
})
const children = ref<any[]>([])
const pushChild = (child: any) => {
  children.value.push(child)
}

function reset() {
  emits('update:modelValue', _cloneValue)
  children.value.forEach(item => {
    item.reset()
  })
}


/**
 * 
 * @param {string} prop  验证单项的prop，为空则是整个form验证
 */
function validate(prop='') {
  return new Promise((resolve, reject) => {
    let isSuccess = false;
    let errors: any = []
    let i = 0
    children.value.forEach(item => {
      if(prop && item.prop != prop){
        return
      }
      item.validate('', (error: any[] | false) => {
        if (error) {
          isSuccess = false
          errors.push(...error)
        }
        if (++i === children.value.length) {
          if (!errors.length) {
            isSuccess = true
          }
          resolve(isSuccess)
        }
      })
    })

  })
}

provide('vFormValue', computed(() => props.modelValue))
provide('vFormLabelAlign', computed(() => props.labelAlign))
provide('vFormProps', provideProps)
provide('vFormPropsRules', computed(() => props.rules))
defineExpose({
  isVForm: true,
  pushChild,
  validate,
  reset
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