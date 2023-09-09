<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="300" style="margin-top: 32rpx; padding: 32rpx">
      <view>普通使用</view>
      <v-progress :percent="linePercent" />

      <view style="display: flex; aligin-items: center; margin-top: 12px">
        <v-button @click="add" type="primary">增加</v-button>
        <v-button style="margin-left: 10px" @click="decrease" type="primary"
          >减少</v-button
        >
      </view>
    </v-card>

    <v-card :height="300" style="margin-top: 32rpx; padding: 32rpx">
      <view>自定义颜色</view>
      <v-progress activeBgColor="#6a36d5" :percent="linePercent" />

      <view style="display: flex; aligin-items: center; margin-top: 12px">
        <v-button @click="add" type="primary">增加</v-button>
        <v-button style="margin-left: 10px" @click="decrease" type="primary"
          >减少</v-button
        >
      </view>
    </v-card>

    <v-card style="margin-top: 32rpx; padding: 32rpx">
      <view>进度圈</view>
      <view style="display: flex; align-items: center">
        <v-progress
          type="circle"
          :round="30"
          :percent="circlePercent"
          :strokeLinecap="strokeLinecapList[currentShape]"
        />
        <v-progress
          type="circle"
          activeBgColor="#949CF7"
          :strokeLinecap="strokeLinecapList[currentShape]"
          :round="35"
          :percent="circlePercent"
        />
        <v-progress
          type="circle"
          :strokeLinecap="strokeLinecapList[currentShape]"
          :active-bgColor="currentActiveBg"
          :percent="circlePercent"
        >
          <v-icon
            v-if="circlePercent >= 100"
            name="icon-checkmark"
            color="rgb(82, 196, 26)"
            :size="80"
          />
          <text v-else>
            {{ circlePercent + "%" }}
          </text>
        </v-progress>
      </view>

      <view style="display: flex; aligin-items: center; margin-top: 12px">
        <v-button @click="circleAdd" type="primary">增加</v-button>
        <v-button
          style="margin-left: 10px"
          @click="circleDecrease"
          type="primary"
          >减少</v-button
        >
        <v-button style="margin-left: 10px" @click="handleCircle" type="primary"
          >切换两端的形状</v-button
        >
      </view>
    </v-card>
  </v-root>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const linePercent = ref(10);

const add = () => {
  linePercent.value =
    linePercent.value + 10 >= 100 ? 100 : linePercent.value + 10;
};

const decrease = () => {
  linePercent.value = linePercent.value - 10 <= 0 ? 0 : linePercent.value - 10;
};

const circlePercent = ref(10);

const circleAdd = () => {
  circlePercent.value =
    circlePercent.value + 10 >= 100 ? 100 : circlePercent.value + 10;
};

const circleDecrease = () => {
  circlePercent.value =
    circlePercent.value - 10 <= 0 ? 0 : circlePercent.value - 10;
};

const currentShape = ref(0);
const strokeLinecapList = ["round", "butt", "square"];

const handleCircle = () => {
  currentShape.value = currentShape.value + 1 > 2 ? 0 : currentShape.value + 1;
};

const currentActiveBg = computed(() =>
  circlePercent.value <= 50
    ? "#f5222d"
    : circlePercent.value === 100
    ? "rgb(82, 196, 26)"
    : "#1677ff"
);
</script>
