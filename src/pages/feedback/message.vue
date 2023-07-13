<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin='[20, 0]' label="基本使用"></v-text>
      <view class="flex justify-around">
        <v-button @click="handleShowMessage('success')" bgColor="#87e48e" color="white" size="small">成功</v-button>
        <v-button @click="handleShowMessage('fail')" bgColor="#FF0000" color="white" size="small">失败</v-button>
        <v-button @click="handleShowMessage('warn')" bgColor="#FFC14D" color="white" size="small">警告</v-button>
        <v-button @click="handleShowMessage('loading')" bgColor="#50abcb" color="white" size="small">加载中</v-button>
        <v-button @click="handleShowMessage('custom')" bgColor="black" color="white" size="small">自定义</v-button>
      </view>
    </v-card>
    <v-card :margin="[16, 16]">
      <v-text :margin='[20, 0]' label="自定义"></v-text>
      <v-cell title="图标">
        <template v-slot:value>
          <v-input  placeholder="图标或图片" v-model="customMap.icon"></v-input>
        </template>
      </v-cell>
      <v-cell title="title">
        <template v-slot:value>
          <v-input v-model="customMap.title"></v-input>
        </template>
      </v-cell>
      <v-cell title="图标大小">
        <template v-slot:value>
          <v-input type="number" v-model="customMap.size"></v-input>
        </template>
      </v-cell>
      <v-cell title="颜色">
        <template v-slot:value>
          <v-input v-model="customMap.iconColor"></v-input>
        </template>
      </v-cell>
      <v-cell title="旋转">
        <template v-slot:value>
          <v-switch v-model="customMap.rota"></v-switch>
        </template>
      </v-cell>
      <v-cell title="显示时间（毫秒）">
        <template v-slot:value>
          <v-input type="number"  v-model="customMap.duration"></v-input>
        </template>
      </v-cell>
    </v-card>
    <v-message ref="message"></v-message>
  </v-root>
</template>

<script>
import VMessage from '../../var-ui/components/v-message/v-message.vue'
export default {
  components: {
    VMessage
  },
  data () {
    return {
      customMap: {
        icon: 'icon-thunderstorm-outline',
        size: 100,
        iconColor: '#ce3bd9',
        rota: false,
        title: '哈喽',
        duration:3000
      }
    }
  },
  methods: {
    handleShowMessage (mode) {
      if (mode == 'custom') {
        if (!this.customMap.icon) {
          this.$refs.message.showModal({ model: 'fail', title: 'icon不能为空' })
          return
        }
        this.$refs.message.showModal(this.customMap)
        return
      }
      this.$refs.message.showModal({ model: mode })
      if (mode == 'loading') {
        setTimeout(() => {
          this.$refs.message.hideModal()
        }, 3000)
      }
    }
  }
}
</script>

<style></style>