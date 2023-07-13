<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :margin="[16,16]" :padding="[0]" :height="200">
      <v-text label="基本使用"></v-text>
      <view class="flex justify-between">
        <v-popover bgColor="#6e6e6e">
          <v-button type="primary" size="small">下方显示</v-button>
          <template v-slot:content>
            <v-card :margin="[0]" :isRow="true" bgColor="#6e6e6e"   :width="350" _contentClass="justify-between">
             <v-button >按钮1</v-button>
             <v-button >按钮2</v-button>
             <v-button >按钮3</v-button>
            </v-card>
          </template>
        </v-popover>
      </view>
    </v-card>
    <v-card :margin="[16,0]" :padding="[19, 116]" :height="200">
      <v-text label="内容条件满足居中时居中"></v-text>
      <view class="flex justify-between">
        <v-popover position="t"  bgColor="red">
          <v-button type="primary" size="small">居中</v-button>
          <template v-slot:content>
            <v-card  :margin="[0]" :height="100" bgColor="red" :width="200">
              <v-text :fontSize="26" label="今天是个好日子"></v-text>
            </v-card>
          </template>
        </v-popover>
      </view>
    </v-card>
    <v-card :margin="[16,0]" :padding="[19, 16]" :height="200">
      <v-text label="调整为上方显示"></v-text>
      <view class="flex justify-between">
        <v-popover position="t"  bgColor="red">
          <v-button type="primary" size="small">上方显示</v-button>
          <template v-slot:content>
            <v-card  :margin="[0]" :height="100" bgColor="red" :width="200">
              <v-text :fontSize="26" label="今天是个好日子"></v-text>
            </v-card>
          </template>
        </v-popover>
      </view>
    </v-card>
    <v-card :margin="[16,0]" :padding="[19,16]" :height="200">
      <v-text label="调整为左边显示"></v-text>
      <view class="flex justify-end">
        <v-popover position="l"  pointerColor="#6e6e6e">
          <v-button type="primary" size="small">左边显示</v-button>
          <template v-slot:content>
            <v-image :round="16" :width="250" :height="250"  :src="ohImag"></v-image>
          </template>
        </v-popover>
      </view>
    </v-card>
    <v-card :margin="[16,0]" :padding="[19, 16]" :height="200">
      <v-text label="调整为右边显示"></v-text>
      <view class="flex justify-between">
        <v-popover position="r">
          <v-button type="primary" size="small">右边显示</v-button>
          <template v-slot:content>
            <v-card :height="100" bgColor="transprant" :width="200" _contentClass="justify-center">
              <v-input ></v-input>
            </v-card>
          </template>
        </v-popover>
      </view>
    </v-card>
  </v-root>
</template>

<script>
import ohImag from '../../static/oh.webp'
export default {
  components: {
  },
  data () {
    return {
      ohImag
    }
  }
}
</script>

<style></style>