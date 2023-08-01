<template>
  <view :class="[b()]">
    <input style="height: 68rpx; background: skyblue" />
  </view>
</template>
<script setup lang="ts">
import { createNamespace } from "../../lib/utils/create";
import { customWorH } from "../../lib/share/customProps";
import { codeInputProps } from "./v-code-input";

const b = createNamespace("code-input").b;
const props = defineProps(codeInputProps);
</script>
