<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <view
      class="m-32 p-32 text-center flex justify-content"
      style="
        flex-direction: column;
        background-color: #fafafa;
        border: 1px dashed #ddd;
      "
    >
      <view style="margin-bottom: 24rpx">效果展示</view>
      <v-code-input
        :value="value"
        :maxlength="currentLength"
        :mode="currentMode"
        @onFinish="onFinish"
        :isFillText="isFillText"
      ></v-code-input>
    </view>
    <view class="m-32">
      <view
        class="mb-24"
        style="border-left: 8rpx solid #ddd; padding-left: 12rpx"
        >初始值</view
      >
      <v-subsection
        mode="button"
        @change="change2"
        v-model="list2"
        v-model:active="active2"
        bgColor="#ddd"
        activeBgColor="#fff"
        activeColor="#000"
      ></v-subsection>
    </view>
    <view class="m-32">
      <view
        class="mb-24"
        style="border-left: 8rpx solid #ddd; padding-left: 12rpx"
        >输入长度选择</view
      >
      <v-subsection
        mode="button"
        @change="change"
        v-model="list"
        v-model:active="active"
        bgColor="#ddd"
        activeBgColor="#fff"
        activeColor="#000"
      ></v-subsection>
    </view>
    <view class="m-32">
      <view
        class="mb-24"
        style="border-left: 8rpx solid #ddd; padding-left: 12rpx"
        >模式选择</view
      >
      <v-subsection
        mode="button"
        @change="change1"
        v-model="list1"
        v-model:active="active1"
        bgColor="#ddd"
        activeBgColor="#fff"
        activeColor="#000"
      ></v-subsection>
    </view>
    <view class="m-32">
      <view
        class="mb-24"
        style="border-left: 8rpx solid #ddd; padding-left: 12rpx"
        >是否采用*号替代</view
      >
      <v-subsection
        mode="button"
        @change="change3"
        v-model="list3"
        v-model:active="active3"
        bgColor="#ddd"
        activeBgColor="#fff"
        activeColor="#000"
      ></v-subsection>
    </view>
  </v-root>
</template>
<script setup lang="ts">
import { ref } from "vue";

const currentLength = ref(4);
const currentMode = ref("box");
const value = ref("");
const isFillText = ref(false);

const active = ref(0);
const list = [
  {
    title: 4,
    id: 1,
  },
  {
    title: 6,
    id: 2,
  },
  {
    title: 8,
    id: 3,
  },
];
const change = ({ item }: any) => {
  currentLength.value = item.title;
};

const active1 = ref(0);
const list1 = [
  {
    title: "box",
    id: 1,
  },
  {
    title: "bottomLine",
    id: 2,
  },
  {
    title: "middleLine",
    id: 3,
  },
];
const change1 = ({ item }: any) => {
  currentMode.value = item.title;
};

const active2 = ref(0);
const list2 = [
  {
    title: "空",
    value: "",
    id: 1,
  },
  {
    title: "1234",
    value: "1234",
    id: 2,
  },
  {
    title: "6666",
    value: "6666",
    id: 3,
  },
];
const change2 = ({ item }: any) => {
  value.value = item.value;
};

const active3 = ref(0);
const list3 = [
  {
    title: "否",
    value: false,
    id: 1,
  },
  {
    title: "是",
    value: true,
    id: 2,
  },
];
const change3 = ({ item }: any) => {
  isFillText.value = item.value;
};

const onFinish = (code: string) => {
  console.log("[code]", code);
};
</script>
