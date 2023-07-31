<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)" :padding="[16, 20]" @netWorkChange="netWorkChange">
    <v-card>
      <v-text>root组件默认提供以下使用较多的功能</v-text>
      <v-text>1、message提示</v-text>
      <v-text>2、网络状态检测 当前状态： <v-text color="red">{{ isConnected ? '已连接' : '未连接' }}</v-text> 网络类型：<v-text color="red">{{
        !networkType || networkType === 'none' ? '未连接' : networkType }}</v-text> </v-text>
      <v-text>3、默认高度为设备窗口的高度</v-text>
      <v-button @click="handleClick" type="primary">点击提示</v-button>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      isConnected: true,
      networkType: ''
    }
  },
  watch: {

  },
  methods: {
    handleClick () {
      this.$refs?.root.showModal({ model: 'success', title: '提示' })
    },
    netWorkChange (val) {
      this.isConnected = val.isConnected
      this.networkType = val.networkType
    }
  }
}
</script>

<style></style>