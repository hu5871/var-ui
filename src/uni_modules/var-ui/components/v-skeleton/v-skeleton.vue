<template>
  <view v-if="loading" :class="bem.b()">
    <!-- loadding -->
    <view style="width: 100%" :class="[bem.e('content'), avatar ? 'flex' : '']">
      <!-- avatar -->
      <view
        v-if="avatar"
        class="v-skeleton__row-animation"
        style="
          overflow: hidden;
          position: relative;
          margin-right: 32rpx;
          width: 68rpx;
          height: 68rpx;
          border-radius: 50%;
        "
      />
      <view :class="avatar ? 'flex-1' : ''">
        <view
          v-for="(_, idx) in rows"
          :key="idx"
          :class="[
            bem.e('row'),
            bem.e(`row-${idx + 1}`),
            animation ? bem.e('row-animation') : '',
          ]"
          :style="{
            marginTop: idx > 0 ? `20${unit}` : 0,
            width:
              typeof rowsWidth[idx] === 'number'
                ? `${rowsWidth[idx]}%` || '100%'
                : rowsWidth[idx],
            ...rowStyle,
          }"
        >
        </view>
      </view>
    </view>
  </view>
  <!-- no-loadding -->
  <slot v-else></slot>
</template>

<script setup lang="ts">
import { CSSProperties, computed, watch } from "vue";
import { createNamespace } from "../../lib/utils/create";
import { skeletonProps } from "./v-skeleton";
const bem = createNamespace("skeleton");

// props
const props = defineProps(skeletonProps);

// computed
const rowStyle = computed<CSSProperties>(() => {
  const unit = props.unit;

  return {
    overflow: "hidden",
    position: "relative",
    height: `24${unit}`,
    background: props.background,
    borderRadius: `8${unit}`,
  };
});
</script>

<style scoped>
.v-skeleton__row-animation::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.06) 25%,
    rgba(0, 0, 0, 0.15) 37%,
    rgba(0, 0, 0, 0.06) 63%
  );
  background-size: 400% 100%;
  animation-name: skeleton-animation;
  animation-duration: 1.4s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  z-index: 1;
}

/* keyframes */
@keyframes skeleton-animation {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
