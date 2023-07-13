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
        { page: '/pages/form/input', text: '输入框' },
        { page: '/pages/form/form', text: '表单' },
        { page: '/pages/form/calendar', text: '日历' },
        { page: '/pages/form/checkbox', text: '复选框' },
        { page: '/pages/form/radio', text: '单选框' },
        { page: '/pages/form/picker', text: '选择器' },
        { page: '/pages/form/datetime', text: '时间选择器' },
        { page: '/pages/form/rate', text: '评分' },
        { page: '/pages/form/stepper', text: '步进器' },
        { page: '/pages/form/slider', text: '滑动选择器' },
        { page: '/pages/form/switch', text: 'switch开关' },
        { page: '/pages/form/upload', text: '上传' },
        
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