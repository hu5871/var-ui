# codeInput 验证码输入

该组件一般用于验证用户短信验证码的场景

<webview url="/pages/feedback/codeInput"></webview>

```vue
<template>
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
```

### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|     参数     |            类型             | 默认值 | 描述                       |
| :----------: | :-------------------------: | :----: | :------------------------- |
| defaultValue |           String            |   ""   | 默认展示的 code            |
|    value     |           String            |   ""   | 展示的 code(受控)          |
|  isFillText  |           Boolean           | false  | 是否开启\*号替换 code 展示 |
|   breathe    |           Boolean           |  true  | 是否开启呼吸灯动画         |
|    focus     |           Boolean           |   -    | 是否默认获取焦点           |
|     mode     | box、bottomLine、middleLine |  box   | 输入框的模式               |
|  maxlength   |           Number            |   4    | 验证码的长度               |

### 插槽

无

### 事件

| 事件名   | 描述                                      | 回调参数            |
| -------- | ----------------------------------------- | ------------------- |
| onChange | 当输入内容(code)发生改变时触发的回调      | value：当前输入的值 |
| onFinish | 当输入字符个数达 maxlength 值时触发的回调 | value：当前输入的值 |
