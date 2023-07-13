<template>
   <view class="flex flex-wrap">
      <view class=" flex-1 flex items-center mb-10">
         <v-text :margin="[0]" :padding="[0, 5]" color="#F53F3F" :font-size="20" label="*"></v-text>
         <view :class="['w-auto', 'flex', 'flex-wrap', alignClass]" :style="[labelStyle]">
            <v-text :margin="[0]" :padding="[0, 5]" :font-size="30" :label="label"></v-text>
         </view>
         <view class="w-full">
            <slot></slot>
         </view>
      </view>
      <view v-if="!isValidSuccess" class="w-full">
         <v-text color="#d74a3b" :font-size="26" :label="message"></v-text>
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
import vText from '../v-text/v-text.vue';
import Schema from '../../lib/share/async-validator'
import { computed, getCurrentInstance, inject, nextTick, ref } from "vue";
import { customWorH, _defineProps } from "../../lib/share/customProps";
import { formItemProps } from "./v-form-item";
import { isObject } from '../../lib/utils/tools';
const proxy = getCurrentInstance()?.proxy || null;

const props = defineProps({ ..._defineProps, ...formItemProps })
const injectProps = inject('vFormProps', computed(() => ({
   labelWidth: 'auto',
   labelStyle: {},
   labelAlign: 'left'
})))
const formProp=computed(()=> props.prop)

const _value = inject('vFormValue', computed(() => ({})))
const isValidSuccess = ref(true)
const message = ref('')

const vFormLabelAlign = inject('vFormLabelAlign', computed(() => 'left'))
const alignClass = computed(() => {
   return vFormLabelAlign.value === 'left' ? 'justify-start' : vFormLabelAlign.value === 'center' ? 'justify.center' : 'justify-end'
})
let parentForm: any = proxy?.$parent
while (parentForm) {
   if (parentForm?.isVForm || !parentForm) {
      break;
   } else {
      parentForm = parentForm?.$parent || undefined

   }
}


const vFormPropsRules = inject('vFormPropsRules', computed(() => ({})))
const rules = computed<any[]>(() => {
   let parentRules = vFormPropsRules.value[props.prop]
   let currentRules = props.rules
   let rulesArr: any[] = []
   if (Array.isArray(currentRules)) {
      rulesArr.concat(...currentRules)
   } else if (isObject(currentRules)) {
      rulesArr.push(currentRules)
   }
   if (Array.isArray(parentRules)) {
      rulesArr.concat(...parentRules)
   } else if (isObject(parentRules)) {
      rulesArr.push(parentRules)
   }
   return rulesArr
})
const labelStyle = computed(() => {
   return {
      ...props.labelStyle,
      width: customWorH(injectProps.value.labelWidth === 'auto' ? props.labelWidth : injectProps.value.labelWidth, props.unit),
      ...injectProps.value.labelStyle,
   }
})

function validate(event: string, callback: (error: any[]|null) => void) {
   const prop: string = props.prop
   nextTick(() => {
      const propertyVal = getProperty(_value.value, prop)
      const propertyChain = props.prop.split(".");
      const propertyName = propertyChain[propertyChain.length - 1];
      const ruleArr = rules.value
      if (!ruleArr) return;
      for (let i = 0; i < ruleArr.length; i++) {
         const ruleItem = ruleArr[i];
         // 将u-form-item的触发器转为数组形式
         const trigger: string[] = [].concat(ruleItem?.trigger);
         // 如果是有传入触发事件，但是此form-item却没有配置此触发器的话，不执行校验操作
         if (event && !trigger.includes(event)) continue;
         // 实例化校验对象，传入构造规则
         const validatorInstance = new Schema({
            [propertyName]: ruleItem,
         });
         validatorInstance!.validate({
            [propertyName]: propertyVal,
         },
            (errors: any[] | null, fields) => {
               isValidSuccess.value = !errors ? true : false
               message.value = errors ? errors[0].message : ''
               callback(errors)
            }
         );
      }
   })
}

function reset() {
   isValidSuccess.value=false
   message.value=''
}
parentForm.pushChild({
   prop:formProp.value,
   validate:validate.bind(proxy),
   reset:reset.bind(proxy),
})
/**
 * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
 * @param {object} obj 对象
 * @param {string} key 需要获取的属性字段
 * @returns {*}
 */
function getProperty(obj: Record<string, any>, key: string) {
   if (!obj) {
      return
   }
   if (typeof key !== 'string' || key === '') {
      return ''
   }
   if (key.indexOf('.') !== -1) {
      const keys = key.split('.')
      let firstObj = obj[keys[0]] || {}

      for (let i = 1; i < keys.length; i++) {
         if (firstObj) {
            firstObj = firstObj[keys[i]]
         }
      }
      return firstObj
   }
   return obj[key]
}

defineExpose({
   isValidSuccess,
   validate,
   vFormItem: true
})
</script>

<style></style>