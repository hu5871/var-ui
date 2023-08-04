<template>
  <view :class="[b()]" style="position: relative">
    <view class="flex items-center justify-center" style="font-size: 40rpx">
      <view
        v-for="index in maxlength"
        :key="index"
        :class="[
          'flex',
          'items-center',
          'justify-center',
          index - 1 === codeValue.length && isFocus && breathe ? 'breath' : '',
        ]"
        :style="computedCodeItemStyle(index)"
      >
        <view :style="{ marginTop: isFillText ? '8rpx' : 0 }">{{
          isFillText && codeList[index - 1] ? "*" : codeList[index - 1]
        }}</view>
        <!-- line -->
        <view
          v-if="index - 1 === codeValue.length && mode !== 'middleLine'"
          :style="{
            height: '24rpx',
            width: '2rpx',
            background: '#000',
          }"
          :class="[isFocus ? '' : 'breath']"
        ></view>
        <!-- middleLine -->
        <view
          v-if="mode === 'middleLine' && !codeList[index - 1]"
          :style="{
            height: '2rpx',
            width: '36rpx',
            background:
              index - 1 === codeValue.length ? 'rgb(41, 121, 255)' : '#000',
          }"
        ></view>
      </view>
    </view>
    <!-- code-input -->
    <input
      :autoFocus="focus"
      :maxlength="maxlength"
      :value="codeValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        height: 68rpx;
      "
    />
  </view>
</template>
<script setup lang="ts">
import { createNamespace } from "../../lib/utils/create";
import { codeInputProps } from "./v-code-input";
import { computed, ref, watch } from "vue";
import type { CSSProperties } from "vue";
// import { customWorH } from "../../lib/share/customProps";

const b = createNamespace("code-input").b;
const emit = defineEmits(["onFinish", "onChange"]);

const props = defineProps(codeInputProps);

const codeValue = ref(props.defaultValue ?? "");
const isFocus = ref(props.focus ?? false);

const computedCodeItemStyle = (index: number): CSSProperties => {
  const mode = props.mode;
  return {
    width: `56rpx`,
    height: `56rpx`,
    marginLeft: index === 0 ? 0 : "12rpx",
    border:
      mode === "box"
        ? index - 1 === codeValue.value.length && isFocus
          ? "2rpx solid rgb(41, 121, 255)"
          : "2rpx solid rgb(96, 98, 102)"
        : mode === "bottomLine"
        ? "2rpx solid rgb(96, 98, 102)"
        : "none",
    borderTopWidth: mode === "bottomLine" ? 0 : "2rpx",
    borderLeftWidth: mode === "bottomLine" ? 0 : "2rpx",
    borderRightWidth: mode === "bottomLine" ? 0 : "2rpx",
  };
};

const codeList = computed(() => codeValue.value.split(""));

const onInput = (e: any) => {
  codeValue.value = e.detail.value.trim();

  emit("onChange", codeValue.value);

  if (codeValue.value.length === props.maxlength) {
    emit("onFinish", codeValue.value);
  }
};

const onFocus = () => {
  isFocus.value = true;
};
const onBlur = () => {
  isFocus.value = false;
};

watch(
  () => props.value,
  (val) => {
    codeValue.value = val;
  }
);
</script>

<style scoped>
/* 呼吸灯 */
.breath {
  animation: breath 2s infinite ease;
}

@keyframes breath {
  0% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>
