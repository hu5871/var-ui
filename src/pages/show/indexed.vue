<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-tabs v-model="tabs" v-model:active="active" center> </v-tabs>
    <!-- <v-card height="100vh"> -->
    <v-indexed v-if="active === '1'" height="100vh">
      <v-indexed-item v-for="item in list" :key="item.id" :id="item.id">
        <view
          v-if="item.id === 'A'"
          style="padding: 24rpx 0; border-bottom: 1rpx solid #ddd"
          >文本{{ item.id }}</view
        >
        <view style="padding: 24rpx 0; border-bottom: 1rpx solid #ddd"
          >文本{{ item.id }}</view
        >
        <view style="padding: 24rpx 0; border-bottom: 1rpx solid #ddd"
          >文本{{ item.id }}</view
        >
        <view style="padding: 24rpx 0">文本{{ item.id }}</view>
      </v-indexed-item>
    </v-indexed>
    <v-indexed v-if="active === '2'" height="100vh">
      <v-indexed-item v-for="item in list1" :key="item.id" :id="item.id">
        <view
          v-if="item.id === 'A'"
          style="padding: 24rpx 0; border-bottom: 1rpx solid #ddd"
          >文本{{ item.id }}</view
        >
        <view style="padding: 24rpx 0; border-bottom: 1rpx solid #ddd"
          >文本{{ item.id }}</view
        >
        <view style="padding: 24rpx 0; border-bottom: 1rpx solid #ddd"
          >文本{{ item.id }}</view
        >
        <view style="padding: 24rpx 0">文本{{ item.id }}</view>
      </v-indexed-item>
    </v-indexed>
  </v-root>
</template>

<script>
export default {
  created() {
    // ww
    var alphabetArray = [];
    for (let i = 65; i <= 90; i++) {
      var letter = String.fromCharCode(i);
      alphabetArray.push({ id: letter });
    }
    this.list = alphabetArray;

    const arr = [];
    for (let i = 1; i < 15; i++) {
      arr.push({ id: i });
    }
    this.list1 = arr;
  },
  data() {
    return {
      active: "",
      tabs: [
        {
          name: "1",
          title: "基本用法",
        },
        {
          name: "2",
          title: "自定义索引列表",
        },
      ],

      list: [],
      list1: [],
    };
  },
};
</script>

<style></style>
