# progress 进度条

<webview url="/pages/show/progress"></webview>

用于展示操作的当前进度。

```vue
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
```

### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|       参数       |             类型              | 默认值  | 描述                                              |
| :--------------: | :---------------------------: | :-----: | :------------------------------------------------ |
|       type       |      "line" ｜ "circle"       |  line   | 类型                                              |
|   strokeWidth    |            Number             |    6    | 进度圈边框宽度 （type 为 circle 时生效）          |
|  strokeLinecap   | "round" ｜ "butt" ｜ "square" |  round  | 进度圈两端的形状（type 为 circle 时生效）         |
| isShowCircleText |            Boolean            |  true   | 是否展示进度圈中进度文本（type 为 circle 时生效） |
|      round       |            Number             |   40    | 圆的半径（type 为 circle 时生效）                 |
|      height      |            Number             | 16(rpx) | 进度条高度                                        |
|     percent      |            Number             |    0    | 当前进度值                                        |
|     bgColor      |            String             | #f7f7f7 | 背景色                                            |
|  activeBgColor   |            String             | #40a9ff | 当前进度的背景色                                  |
|    showPivot     |            Boolean            |  true   | 是否显示右边进度文字                              |
|       unit       |            String             |   rpx   | 单位                                              |

### 插槽

目前只有 type 为 circle（进度圈）类型才有，用于自定义展示进度圈内部的文本

| name    |
| ------- |
| default |
