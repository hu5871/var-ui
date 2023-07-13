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
        { page: '/pages/feedback/popover', text: '气泡提示' },
        { page: '/pages/feedback/message', text: 'message提示' },
        { page: '/pages/feedback/collapse', text: '折叠面板' },
        { page: '/pages/feedback/popup', text: '弹出层' },
        { page: '/pages/feedback/mask', text: '遮罩层' },
        { page: '/pages/feedback/modal', text: '模态框' },
        { page: '/pages/feedback/transition', text: '动画' },
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