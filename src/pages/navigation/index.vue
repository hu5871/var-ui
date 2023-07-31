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
        { page: '/pages/navigation/navbar', text: 'navbar 标题导航' },
        { page: '/pages/navigation/sidebar', text: 'sidebar 侧边导航' },
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