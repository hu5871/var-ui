# progress 进度条

<webview url="/pages/show/progress"></webview>

用于展示操作的当前进度。

```vue
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
```

### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|     参数      |  类型   | 默认值  | 描述                 |
| :-----------: | :-----: | :-----: | :------------------- |
|    height     | Number  | 16(rpx) | 进度条高度           |
|    percent    | Number  |    0    | 当前进度值           |
|    bgColor    | String  | #f7f7f7 | 背景色               |
| activeBgColor | String  | #40a9ff | 当前进度的背景色     |
|   showPivot   | Boolean |  true   | 是否显示右边进度文字 |
|     unit      | String  |   rpx   | 单位                 |
