<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card :margin="[20, 16]" >
      <v-text label="自定义选项" :fontSize="30"></v-text>
      <v-cell title="模式">
        <template v-slot:value>
          <v-radio-group v-model="mode">
            <v-radio name="single" label="单选"></v-radio>
            <v-radio name="multiple" label="多选"></v-radio>
            <v-radio name="range" label="范围"></v-radio>
          </v-radio-group>
        </template>
      </v-cell>
      <v-cell title="弹窗模式">
        <template v-slot:value>
          <v-switch v-model="isPop"></v-switch>
        </template>
      </v-cell>
      <v-cell title="选中颜色">
        <template v-slot:value>
          <v-button :bgColor="selectColor.bgColor" color="white" size="mini">{{ selectColor.text }}</v-button>
        </template>
      </v-cell>
      <v-cell>
        <template v-slot:value>
          <view class="flex flex-1 justify-between">
            <v-button @click="updateSelectColor('#3c9cff', '默认')" bgColor="#3c9cff" color="white"
              size="mini">默认</v-button>
            <v-button @click="updateSelectColor('#f7c444', '小黄')" bgColor="#f7c444" color="white"
              size="mini">小黄</v-button>
            <v-button @click="updateSelectColor('#ea3a24', '小红')" bgColor="#ea3a24" color="white"
              size="mini">小红</v-button>
            <v-button @click="updateSelectColor('#87e48e', '小绿')" bgColor="#87e48e" color="white"
              size="mini">小绿</v-button>
            <v-button @click="customColor" bgColor='black' color="white" size="mini">自定义</v-button>
          </view>
        </template>
        <template v-slot:right>
          <view></view>
        </template>
      </v-cell>
      <v-cell title="圆角">
        <template v-slot:value>
          <v-input type="number" v-model="customMap.round"></v-input>
        </template>
      </v-cell>
      <v-cell :margin='[16,16]' title="值" :value="`${customValue[0]||''} - ${customValue[customValue.length - 1]||''}`">
      </v-cell >
      <v-cell v-if="isPop" title="打开自定义日历" :margin="[16, 16]" @click="() => { customShow = true }" :value="customValue[0]">
      </v-cell>
      <v-calendar :asyncSelected="asyncSelected" v-model:show="customShow" :isPop="isPop" v-model="customValue" :selectBgColor="selectColor.bgColor"
        :selectColor="selectColor.color" :mode="mode" :round="customMap.round"></v-calendar>
    </v-card>
    <v-popup mode="center" v-model:show="showCustomModel">
      <v-card :width="500">
        <view class="flex justify-center">
          <v-text :margin="[20, 0]" :fontSize="36" label="自定义颜色"></v-text>
        </view>
        <v-input :margin="[10, 0]" :isPrefix="true" :clear="true" prefixText="背景颜色" v-model="customMap.bgColor"></v-input>
        <v-input :margin="[10, 0]" :isPrefix="true" :clear="true" prefixText="文字颜色" v-model="customMap.color"></v-input>
        <v-button @click="confrimColor" :block="true" type="primary" :round="9999">确定</v-button>
      </v-card>
    </v-popup>
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
      mode: 'single',
      isPop: true,
      selectColor: {
        text: '默认',
        bgColor: '#3c9cff',
        color: 'white'
      },
      showCustomModel: false,
      customMap: {
        bgColor: '#3c9cff',
        color: 'white',
        round: 6
      },
      customShow: false,
      customValue: [],
    }
  },
  methods: {
    customColor () {
      this.showCustomModel = true
    },
    asyncSelected(item) {
      return true
    },
    confrimColor () {
      this.selectColor.bgColor = this.customMap.bgColor
      this.selectColor.color = this.customMap.color
      this.selectColor.text = '自定义'
      this.showCustomModel = false
    },
    updateSelectColor (color, text) {
      this.selectColor.bgColor = color;
      this.selectColor.text = text
    },
    confirmFun (val) {
      return new Promise(res => {
        if (!val?.length) {
          this.$refs.root.showModal({ model: 'fail', title: '请选择日期' })
          return
        }
        this.$refs.root.showModal({ model: 'loading', title: '请稍等...' })
        setTimeout(() => {
          this.$refs.root.hideModal()
          res(true)
        }, 1000)
      })
    },
    handleClose () {
    },
  }
}
</script>

<style></style>