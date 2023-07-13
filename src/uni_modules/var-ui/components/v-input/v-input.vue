<template>
  <v-card :transparent="true" :margin="[0]" :padding="[0]">
    <v-card :margin="props.margin" :padding="props.padding" :width="props.width" :height="props.height"
      :round="props.round" :unit="props.unit" :bgColor="isFocus ? props.focusColor : props.bgColor">
      <view :class="[bem.b(), 'flex','flex-1', 'flex-row', 'justify-center', type !== 'textarea' ? 'items-center' :'', 'overflow-hidden']">
        <slot name="left">
          <view v-if="(props.prefixIconProp && prefix.name) || props.prefixText"
            :class="[bem.be('view', 'left'), 'flex', 'items-center', 'pr-16']">
            <v-icon v-if="props.prefixIconProp && prefix.name" :name="prefix.name"
              :color="isFocus && props.focusIconColor ? props.focusIconColor : prefix.color" :rota="prefix.rota"
              :imgMode="prefix.imgMode" :animationName="prefix.animationName" :size="iconSize"
              :animationDuration="prefix.animationDuration" :animationTimingFunction="prefix.animationTimingFunction"
              :animationIterationCount="prefix.animationIterationCount"></v-icon>
            <v-text v-if="props.prefixText" :width="prefixTextConfig.width" :color="prefixTextConfig.color"
              :fontSize="prefixTextConfig.fontSize" :unit="prefixTextConfig.unit" :label="props.prefixText"></v-text>
          </view>
        </slot>
        <view
          :class="[bem.be('view', 'input__content'), 'ml-5', 'relative', 'flex', 'flex-1', 'flex-row', type !== 'textarea' ? 'items-center' :'']">
          <input :userInteractionEnabled="false" :class="[bem.be('view', 'input'), 'flex-1']" :style="[_inputStyle]"
            v-if="props.type !== 'textarea'" :value="__modelValue" :focus="props.focus" @focus="handleFocus"
            @blur="handleBlur" @confirm="handleConfirm" @input="handleInput"
            @keyboardheightchange="(e: any) => emits('keyboardheightchange', e)" :password="showPassword"
            :maxlength="props.maxLength" :disabled="props.disabled" :cursor-spacing="props.cursorSpacing"
            :confirm-type="props.confirmType" :confirm-hold="props.confirmHold" :autoBlur="props.autoBlur"
            :holdKeyboard="props.holdKeyboard" :adjustPosition="props.adjustPosition" :type="props.type"
            :placeholder="props.placeholder" :placeholderStyle="placeholderStyle" />
          <textarea :userInteractionEnabled="false" :class="[bem.be('view', 'textarea'), 'flex-1']"
            :style="[_inputStyle]" v-if="props.type === 'textarea'" :value="__modelValue" :focus="props.focus"
            @focus="handleFocus" @blur="handleBlur" @confirm="handleConfirm" @input="handleInput" :autoHeight="autoHeight"
            @keyboardheightchange="(e: any) => emits('keyboardheightchange', e)" :password="showPassword"
            :maxlength="props.maxLength" :disabled="props.disabled" :cursor-spacing="props.cursorSpacing"
            :confirm-type="props.confirmType" :confirm-hold="props.confirmHold" :autoBlur="props.autoBlur"
            :holdKeyboard="props.holdKeyboard" :adjustPosition="props.adjustPosition" :type="props.type"
            :placeholder="props.placeholder" :placeholderStyle="placeholderStyle"></textarea>
          <view :class="[props.type === 'textarea' ? 'absolute bottom-1 right-0 ' : '', 'flex', 'items-center']">
            <view :class="['pr-4']" :style="{ width: `${iconSize}rpx`, height: `${iconSize}rpx` }" v-if="clear">
              <v-icon v-if="isFocusClear ? (showClear && __modelValue.length > 0) : __modelValue.length > 0"
                @click="handleClear" :name="props.clearConfig.name"
                :color="isFocus && props.focusIconColor ? props.focusIconColor : props.clearConfig.color"
                :rota="props.clearConfig.rota" :imgMode="props.clearConfig.imgMode" :size="iconSize"
                :animationName="props.clearConfig.animationName" :animationDuration="props.clearConfig.animationDuration"
                :animationTimingFunction="props.clearConfig.animationTimingFunction"
                :animationIterationCount="props.clearConfig.animationIterationCount"></v-icon>
            </view>
            <view class="px-10" v-if="props.password && props.type !== 'textarea'">
              <v-icon @click="handlePasswordIcon" :name="passwordIconName" :size="iconSize"
                :color="isFocus && props.focusIconColor ? props.focusIconColor : props.passwordConfig.color"
                :rota="props.passwordConfig.rota" :imgMode="props.passwordConfig.imgMode"
                :animationName="props.passwordConfig.animationName"
                :animationDuration="props.passwordConfig.animationDuration"
                :animationTimingFunction="props.passwordConfig.animationTimingFunction"
                :animationIterationCount="props.passwordConfig.animationIterationCount"></v-icon>
            </view>
            <view v-if="props.showNumber">
              <v-text :color="suffixTextConfig.color" :padding="[0, 5]" :margin="[0]"
                :fontSize="suffixTextConfig.fontSize * .9"
                :label="`${__modelValue.length}${props.maxLength > 0 ? `/${props.maxLength}` : ''}`"></v-text>
            </view>
          </view>

        </view>
        <slot name="right">
          <view v-if="(props.suffixIconProp && suffix.name) || props.suffixText"
            :class="[bem.be('view', 'right'), 'flex', 'items-center']">
            <v-icon v-if="props.suffixIconProp && suffix.name" :name="suffix.name" :size="iconSize"
              :color="isFocus && props.focusIconColor ? props.focusIconColor : suffix.color" :rota="suffix.rota"
              :imgMode="suffix.imgMode" :animationName="suffix.animationName"
              :animationDuration="suffix.animationDuration" :animationTimingFunction="suffix.animationTimingFunction"
              :animationIterationCount="suffix.animationIterationCount"></v-icon>
            <v-text v-if="props.suffixText" :width="suffixTextConfig.width" :color="suffixTextConfig.color"
              :fontSize="suffixTextConfig.fontSize" :unit="suffixTextConfig.unit" :label="props.suffixText"></v-text>
          </view>
        </slot>
      </view>
    </v-card>
  </v-card>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>
<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, ref, watch } from 'vue';
import { customWorH, _defineProps } from '../../lib/share/customProps'
import { createNamespace } from '../../lib/utils/create';
import vCard from '../v-card/v-card.vue'
import vIcon from '../v-icon/v-icon.vue'
import vText from '../v-text/v-text.vue'
import { inputProps } from './v-input';

const proxy = getCurrentInstance()?.proxy || null;

const props = defineProps({ ..._defineProps, ...inputProps })
const emits = defineEmits(['keyboardheightchange', 'update:modelValue', 'input', 'clear', 'focus', 'blur', 'change'])
// 前后缀
const prefix = computed(() => {
  return props.prefixIconProp
})
const prefixTextConfig = computed(() => {
  return props.prefixTextConfig
})
const suffix = computed(() => {
  return props.suffixIconProp
})
const suffixTextConfig = computed(() => {
  return props.suffixTextConfig
})
const bem = createNamespace('input')
const placeholderStyle = computed<string>(() => {
  const styleMap: Record<string, string> = {
    fontSize: `${uni.upx2px(props.fontSize)}px`,
    ...props.placeholderStyle
  }
  let styleString = ''
  for (const key in styleMap) {
    styleString += `${key}: ${styleMap[key]}; `
  }
  return styleString
})
const _inputStyle = computed(() => ({
  width:'auto',
  height: customWorH(props.height, props.unit),
  color: props.fontColor,
  textAlign: props.align,
  fontSize: `${uni.upx2px(props.fontSize)}px`
}))


const __modelValue = ref(props.modelValue)
const passwordIconName = ref(props.passwordConfig.name)
watch(() => props.modelValue, (val) => {
  __modelValue.value = val
})
const showPassword = ref(props.password)
const handlePasswordIcon = () => {
  if (props.password) {
    passwordIconName.value = passwordIconName.value === props.passwordConfig.name ? 'icon-eye-outline' : props.passwordConfig.name
    showPassword.value = !showPassword.value
  }
}
let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined
  }
}


const handleClear = () => {
  __modelValue.value = ''
  emits("update:modelValue", "")
  emits("clear")
}
const isFocus = ref(false)
const showClear = ref(false)
const handleFocus = (e: any) => {
  if (props.focusColor) {
    isFocus.value = true
  }
  showClear.value = true
  emits("focus", e)
}
const handleBlur = (e: any) => {
  setTimeout(() => {
    emits("blur", e)
    isFocus.value && (isFocus.value = false)
    showClear.value = false
  },500)
}
const handleConfirm = () => { }
function change(event: string) {
  nextTick(() => {
    parentFormItem?.validate(event, () => {
    })
  })
}
const handleInput = (e: any) => {
  const val = props.type == 'number' ? Number.isNaN(e.detail.value) ? e.detail.value : Number(e.detail.value) : e.detail.value
  emits('input', val)
  emits('change', val)
  emits('update:modelValue', val)
  change('')
  return e.detail.value;
}
</script>

<style>

</style>