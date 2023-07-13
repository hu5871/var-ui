<template>
  <view :style="_style">
    <slot></slot>
    <view class="overflow-hidden fixed">
      <canvas id="waterCanvas" :style='canvasStyle' <!-- #ifdef MP-WEIXIN -->
        type="2d"
        <!-- #endif -->
        <!-- #ifndef MP-WEIXIN  -->
        canvas-id="waterCanvas"
        <!-- #endif -->

        ></canvas>

    </view>
  </view>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { customWorH } from "../../lib/share/customProps";
import { watermarkProps } from "./v-watermark";


const props = defineProps(watermarkProps)


const _style = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    heigth: customWorH(props.height, props.unit)
  }
})

const canvasStyle = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    heigth: customWorH(props.height, props.unit)
  }
})
</script>

<style></style>