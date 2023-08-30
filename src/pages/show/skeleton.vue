<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <view style="padding: 32rpx; background: #fff">
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <view style="padding: 16rpx">
        <v-skeleton :animation="false">no-loadding</v-skeleton>
      </view>

      <v-text :margin="[16, 0]" label="动画效果"></v-text>
      <view style="padding: 16rpx">
        <v-skeleton>no-loadding</v-skeleton>
      </view>

      <v-text
        :margin="[16, 0]"
        label="自定义段落宽度(相对于父容器的%)"
      ></v-text>
      <view style="padding: 16rpx">
        <v-skeleton :rowsWidth="[20, 60, 65, 100]">no-loadding</v-skeleton>
      </view>

      <v-text :margin="[16, 0]" label="自定义段落宽度(自定义单位)"></v-text>
      <view style="padding: 16rpx">
        <v-skeleton :rowsWidth="['32rpx', '64rpx', '100rpx', 100]"
          >no-loadding</v-skeleton
        >
      </view>

      <v-text :margin="[16, 0]" label="显示头像"></v-text>
      <v-switch :width="80" :height="40" v-model="isLoading"></v-switch>
      <view style="padding: 16rpx">
        <v-skeleton :loading="!isLoading" avatar :rowsWidth="[40, 60, 80, 100]">
          <view class="flex">
            <image
              style="
                width: 68rpx;
                height: 68rpx;
                border-radius: 50%;
                margin-right: 32rpx;
              "
              src="https://avatars.githubusercontent.com/u/92789120?v=4"
            />
            <view style="font-size: 24rpx">
              <view>人生</view>
              <view style="margin-top: 12rpx"
                >就像没有第二个参数的 useEffect</view
              >
              <view style="margin-top: 12rpx"
                >就像是已经步入 useEffect 的返回函数</view
              >
            </view>
          </view>
        </v-skeleton>
      </view>
    </view>
  </v-root>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(false);
</script>
