<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-cell v-for="item in list" :key="item.page" @click="toPage(item.page)" :title="item.text"></v-cell>
    </v-card>
  </v-root>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      list: [
        { page: '/pages/common/root', text: '页面根节点' },
        { page: '/pages/common/card', text: '卡片容器' },
        { page: '/pages/common/text', text: '文本' },
        { page: '/pages/common/button', text: '按钮' },
        { page: '/pages/common/icon', text: '图标' },
        { page: '/pages/common/html', text: '富文本解析' },
      ]
    }
  },
  methods: {
    toPage (path) {
      uni.navigateTo({
        url: path
      })
    }
  }
}
</script>

<style></style>