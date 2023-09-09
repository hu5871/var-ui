<template>
  <!-- line 进度条 -->
  <view v-if="type === 'line'" class="flex items-center">
    <view
      :class="[b(), `${b()}-line`, 'overflow-hidden', 'flex-1']"
      :style="progressStyle"
    >
      <view
        :class="[b() + '__active__line']"
        :style="{ transition: 'width 0.3s ease', ...currentProgressStyle }"
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
  <!-- circle 进度圈 -->
  <view
    v-else
    :class="[b(), `${b()}-circle`, 'relative']"
    :style="{ width: circleSize + 'px', height: circleSize + 'px' }"
  >
    <svg
      :width="circleSize"
      :height="circleSize"
      :viewBox="`0 0 ${circleSize} ${circleSize}`"
    >
      <circle
        :cx="circleOffset"
        :cy="circleOffset"
        :r="round"
        stroke="#D1D3D7"
        fill="none"
        :stroke-width="strokeWidth"
      />
      <circle
        class="v-progress-svg-circle"
        fill="none"
        :stroke-linecap="strokeLinecap"
        :transform="`rotate(-90, ${round + strokeWidth}, ${
          round + strokeWidth
        })`"
        :cx="circleOffset"
        :cy="circleOffset"
        :r="round"
        :stroke-width="strokeWidth"
        :stroke="percent === 0 ? 'transparent' : activeBgColor"
        :stroke-dasharray="dasharrayVal"
      />
    </svg>
    <view class="absolute left-50 top-50 -transform-50">
      <slot v-if="isHasSlot"></slot>
      <text v-if="!isHasSlot && isShowCircleText">{{ percent }}%</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";
import { createNamespace } from "../../lib/utils/create";
import { progressProps } from "./v-progress";
import { customWorH } from "../../lib/share/customProps";

const b = createNamespace("progress").b;
const slots = useSlots() as any;

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

// 是否有slot
const isHasSlot = computed(() => {
  return !!slots.default;
});

// 圆的半径
const round = computed(() => props.round);

// 周长:直径*圆周率
const perimeter = computed(() => round.value * 2 * Math.PI);

// 当前填充值
const dasharrayVal = computed(() => {
  return `${(perimeter.value / 100) * percent.value} ${perimeter.value}`;
});

const circleOffset = computed(() => round.value + props.strokeWidth);

// 进度圆大小
const circleSize = computed(() => round.value * 2 + props.strokeWidth * 2);
</script>

<style>
.v-progress-svg-circle {
  transition: stroke-dasharray, stroke, stroke-width, stroke-linecap, 0.3s ease;
}
</style>
