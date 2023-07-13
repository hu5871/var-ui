<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-cell v-for="item in list" :key="item.page" @click="toPage(item.page)" :title="item.text"></v-cell>
    </v-card>
  </v-root>
</template>

<script>

export default {
 
  data () {
    return {
      list: [
        { page: '/pages/show/avatar', text: 'avatar 头像' },
        { page: '/pages/show/cell', text: 'cell 单元格' },
        { page: '/pages/show/countdown', text: 'countdown 倒计时' },
        { page: '/pages/show/image', text: 'image 图片' },
        { page: '/pages/show/countup', text: 'countup 数字滚动' },
        { page: '/pages/show/tabs', text: 'tabs 选项卡' },
        { page: '/pages/show/indexed', text: 'indexed 索引列表' },
        { page: '/pages/show/line', text: 'line 分割线' },
        { page: '/pages/show/grid', text: 'grid 九宫格' },
        { page: '/pages/show/steps', text: 'steps 步骤条' },
        { page: '/pages/show/watermark', text: 'watermark 水印' },
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