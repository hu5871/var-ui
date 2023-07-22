<template>
  <view class="flex items-center">
    <view :class="[b(), 'overflow-hidden', 'flex-1']" :style="progressStyle">
      <view
        :class="[b() + '__active__line']"
        :style="{ transition: 'width 0.4s ease', ...currentProgressStyle }"
      ></view>
    </view>
    <view
      v-if="showPivot"
      :style="{
        marginLeft: 12 + unit,
      }"
      :class="[b() + '__percent']"
      >{{ percent }}%</view
    >
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { createNamespace } from "../../lib/utils/create";
import { progressProps } from "./v-progress";
import { customWorH } from "../../lib/share/customProps";

const b = createNamespace("progress").b;

const props = defineProps(progressProps);

const progressStyle = computed(() => {
  return {
    height: customWorH(props.height, props.unit),
    background: customWorH(props.bgColor, props.unit),
    borderRadius: customWorH(props.height, props.unit),
  };
});

const percent = computed<number>(() =>
  props.percent >= 100 ? 100 : props.percent <= 0 ? 0 : props.percent
);

const currentProgressStyle = computed(() => {
  return {
    background: props.activeBgColor,
    height: customWorH(props.height, props.unit),
    width: percent.value + "%",
    borderRadius: customWorH(props.height, props.unit),
  };
});
</script>
