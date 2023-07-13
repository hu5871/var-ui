<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-text :fontSize="32" label="弹窗"></v-text>
      <v-cell title="请选择内容" @click="() => { show = true }" :value="value"></v-cell>
      <v-picker v-model:show="show" :columns="columns" @confirm="confirm"></v-picker>
    </v-card>
    <v-card :margin="[16,16]">
      <v-text :fontSize="32" label="直接展示"></v-text>
      <v-picker :isPop="false" v-model:show="show"  :columns="columns" @confirm="confirm"></v-picker>
    </v-card>
  </v-root>
</template>

<script>
import vRoot from '../../var-ui/components/v-root/v-root.vue'
import vCard from '../../var-ui/components/v-card/v-card.vue'
import vCalendar from '../../var-ui/components/v-calendar/v-calendar.vue'

export default {
  components: {
    vCalendar,
    vRoot,
    vCard
  },
  data () {
    return {
      show: false,
      value: '',
      columns: [
        {
          text: '水果',
          children: [
            {
              text: '苹果',
            },
            {
              text: '梨子',
            },
            {
              text: '香蕉',
            },
            {
              text: '橘子',
            },
          ]
        },
        {
          text: '零食',
          children: [
            {
              text: '薯片',
            },
            {
              text: '辣条',
            },
            {
              text: '雪糕',
            },
            {
              text: '气泡水',
            },
          ]
        },
        {
          text: '城市',
          children: [
            {
              text: '北京',
            },
            {
              text: '上海',
            },
            {
              text: '深圳',
            },
            {
              text: '广州',
            },
          ]
        }
      ]
    }
  },
  methods: {
    confirm (e) {
      const { valueStr } = e
      this.value = valueStr
    }
  }
}
</script>

<style></style>