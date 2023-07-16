<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <view class="flex">
        <v-icon name="icon-alarm" color="red"></v-icon>
        <v-icon name="icon-airplane" color="#3156c6"></v-icon>
        <v-icon name="icon-call" color="green"></v-icon>
      </view>
    </v-card>
    <v-card :margin="[16, 16]">
      <v-text :margin="[16, 0]" label="旋转"></v-text>
      <view class="flex">
        <v-icon :rota="true" name="icon-loading" color="red"></v-icon>
      </view>
    </v-card>
    <v-card :margin="[16, 16]">
      <v-text :margin="[16, 0]" label="图片"></v-text>
      <view class="flex">
        <v-icon
          name="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%20height%3D%2232%22%20width%3D%2232%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M13%2C6.81l-5.95%2C6a2.48%2C2.48%2C0%2C0%2C1-3.54%2C0L1.73%2C11a2.53%2C2.53%2C0%2C0%2C1%2C0-3.55L8.07%2C1.09a2%2C2%2C0%2C0%2C1%2C2.84%2C0l.71.71a2%2C2%2C0%2C0%2C1%2C0%2C2.84L6%2C10.28a1%2C1%2C0%2C0%2C1-1.42%2C0l-.35-.36a1%2C1%2C0%2C0%2C1%2C0-1.42L8%2C4.76%22%20fill%3D%22none%22%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"></v-icon>
        <v-icon
          name="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2014%2014%22%3E%3Cg%3E%3Cpath%20d%3D%22M6.13%2C12.06C4.6%2C13.6%2C2%2C14.11.5%2C12.57%2C2.5%2C10.5.5%2C9.5%2C2%2C8a2.9%2C2.9%2C0%2C1%2C1%2C4.09%2C4.1Z%22%20fill%3D%22none%22%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.92%2C1.08A2%2C2%2C0%2C0%2C0%2C11.44.5%2C2%2C2%2C0%2C0%2C0%2C10%2C1.17l-5.38%2C6A2.85%2C2.85%2C0%2C0%2C1%2C6.13%2C8%2C3%2C3%2C0%2C0%2C1%2C6.9%2C9.31L12.83%2C4a2%2C2%2C0%2C0%2C0%2C.67-1.43A2%2C2%2C0%2C0%2C0%2C12.92%2C1.08Z%22%20fill%3D%22none%22%20stroke%3D%22%23000000%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"></v-icon>
      </view>
    </v-card>

    <v-card :margin="[16, 16]" :height="700">
      <v-tabs v-model="list" v-model:active="active" :center="true" tabWidth="30%">
      </v-tabs>
      <v-card height="100%" :margin="[0]" :padding="[0]" :scrollY="true">
        <view v-if="active === 'common'" class="flex flex-1 flex-wrap justify-between">
          <v-card @click="copyIcon(item)" :widht="100" _contentClass="justify-center " :height="100"
            v-for="item in iconJson['common']" :key="item.name">
            <v-icon color="#919398" :name="item.name"></v-icon>
          </v-card>
        </view>
        <view v-if="active === 'outline'" class="flex  flex-wrap justify-between">
          <v-card :widht="100" :height="100" _contentClass="justify-center " v-for="item in iconJson['outline']"
            :key="item.name">
            <v-icon color="#919398" :name="item.name"></v-icon>
          </v-card>
        </view>
        <view v-if="active === 'circle'" class="flex  flex-wrap justify-between">
          <v-card :widht="100" :height="100" _contentClass="justify-center " v-for="item in iconJson['circle']"
            :key="item.name">
            <v-icon color="#919398" :name="item.name"></v-icon>
          </v-card>
        </view>
      </v-card>
    </v-card>
  </v-root>
</template>

<script>
import iconJson from './iconJson.json'
export default {
  components: {
  },
  data () {
    return {
      iconJson: Object.freeze(iconJson),
      active: 'common',
      list: [
        {
          name: 'common',
          title: 'common'
        },
        {
          name: 'outline',
          title: 'outline'
        },
        {
          name: 'circle',
          title: 'circle'
        }
      ]
    }
  },
  methods: {
    copyIcon (item) {
      uni.$var.utils.copyText(item?.name, (success) => {
        if (success) {
          this.$refs.root.showModal({ model: 'success', title: '复制成功' })
        }
      })
    }
  },
}
</script>

<style></style>