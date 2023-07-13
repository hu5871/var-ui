<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-cell v-for="item in list" :key="item.page" @click="toPage(item.page)" :title="item.text"></v-cell>
    </v-card>
  </v-root>
</template>

<script>
import vRoot from '../../var-ui/components/v-root/v-root.vue'
import vCard from '../../var-ui/components/v-card/v-card.vue'
import vCell from '../../var-ui/components/v-cell/v-cell.vue'
export default {
  components: {
    vCell,
    vCard,
    vRoot
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