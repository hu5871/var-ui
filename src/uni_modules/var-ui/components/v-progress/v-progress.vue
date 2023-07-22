<template>
  <view class="flex items-center">
    <view :class="[b(), 'overflow-hidden', 'w-full']" :style="progressStyle">
      <view
        :class="[b() + '__active__line']"
        :style="{ transition: 'width 0.4s ease', ...currentProgressStyle }"
      ></view>
    </view>
    <view
      v-if="showPivot"
      style="margin-left: 12rpx"
      :class="[b() + '__percent']"
      >{{ percent }}%</view
    >
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { createNamespace } from "../../lib/utils/create";
import { progressProps } from "./v-progress";

const b = createNamespace("progress").b;

const props = defineProps(progressProps);

const progressStyle = computed(() => {
  return {
    height: props.height + "rpx",
    background: props.bgColor,
    borderRadius: props.height + "rpx",
  };
});

const percent = computed<number>(() =>
  props.percent >= 100 ? 100 : props.percent <= 0 ? 0 : props.percent
);

const currentProgressStyle = computed(() => {
  return {
    background: props.activeBgColor,
    height: props.height + "rpx",
    width: percent.value + "%",
    borderRadius: props.height + "rpx",
  };
});
</script>
