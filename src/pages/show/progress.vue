<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="300">
      <view>普通使用</view>
      <v-progress :percent="percent" />

      <view style="display: flex; aligin-items: center; margin-top: 12px">
        <v-button @click="add" type="primary">增加</v-button>
        <v-button style="margin-left: 10px" @click="decrease" type="primary"
          >减少</v-button
        >
      </view>
    </v-card>

    <v-card :height="300">
      <view>自定义颜色</view>
      <v-progress activeBgColor="#6a36d5" :percent="percent" />

      <view style="display: flex; aligin-items: center; margin-top: 12px">
        <v-button @click="add" type="primary">增加</v-button>
        <v-button style="margin-left: 10px" @click="decrease" type="primary"
          >减少</v-button
        >
      </view>
    </v-card>
  </v-root>
</template>

<script setup lang="ts">
import { ref } from "vue";

const percent = ref(10);

const add = () => {
  percent.value = percent.value + 10 >= 100 ? 100 : percent.value + 10;
};

const decrease = () => {
  percent.value = percent.value - 10 <= 0 ? 0 : percent.value - 10;
};
</script>
