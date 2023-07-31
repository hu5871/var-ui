<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-cell
        v-for="item in list"
        :key="item.page"
        @click="toPage(item.page)"
        :title="item.text"
      ></v-cell>
    </v-card>
  </v-root>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      list: [
        { page: "/pages/form/input", text: "输入框" },
        { page: "/pages/form/form", text: "表单" },
        { page: "/pages/form/calendar", text: "日历" },
        { page: "/pages/form/checkbox", text: "复选框" },
        { page: "/pages/form/radio", text: "单选框" },
        { page: "/pages/form/picker", text: "选择器" },
        { page: "/pages/form/datetime", text: "时间选择器" },
        { page: "/pages/form/rate", text: "评分" },
        { page: "/pages/form/stepper", text: "步进器" },
        { page: "/pages/form/slider", text: "滑动选择器" },
        { page: "/pages/form/switch", text: "switch开关" },
        { page: "/pages/form/upload", text: "上传" },
      ],
    };
  },
  methods: {
    toPage(path) {
      uni.navigateTo({
        url: path,
      });
    },
  },
};
</script>

<style></style>
