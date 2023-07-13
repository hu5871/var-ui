<template>
  <v-root bgColor="rgb(245, 245, 245)">

    <v-card bgColor="#ccc" :margin="[16, 16]">
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <v-button>按钮</v-button>
      <v-text :margin="[16, 0]" label="按钮Size"></v-text>
      <view class="flex flex-wrap">
        <v-button :margin="[16, 10]" size="mini">mini</v-button>
        <v-button :margin="[16, 10]" size="small">small</v-button>
        <v-button :margin="[16, 10]" size="normal">normal</v-button>
        <v-button :margin="[16, 10]" size="middle">middle</v-button>
        <v-button :margin="[16, 10]" size="large">large</v-button>
      </view>
      <v-button :margin="[16, 0]" :block="true">block</v-button>
    </v-card>
    <v-card bgColor="#ccc" :margin="[16, 16]">
      <view class="flex flex-wrap justify-around">
        <v-button type="primary">主要</v-button>
        <v-button type="warning">警告</v-button>
        <v-button type="default">默认</v-button>
        <v-button type="success">成功</v-button>
      </view>
    </v-card>
    <v-card bgColor="#ccc" :margin="[16, 16]">
      <view class="flex flex-wrap justify-around">
        <v-button plain type="primary">镂空</v-button>
      </view>
    </v-card>
    <v-card bgColor="#ccc" :margin="[16, 16]">
      <v-text :margin="[16, 0]" label="图标"></v-text>
      <view class="flex">
        <v-button :margin="[0, 20]" type="primary" icon="icon-add-circle" iconColor="white">添加</v-button>
        <v-button type="primary" icon="icon-loading" iconColor="white" :iconRota="true">加载</v-button>
      </view>
      <v-text :margin="[16, 0]" label="圆角"></v-text>
      <view class="flex">
        <v-button :margin="[0, 20]" :round="999" type="primary" icon="icon-add-circle" iconColor="white">添加</v-button>
        <v-button type="primary" :round="999" icon="icon-loading" iconColor="white" :iconRota="true">加载</v-button>
      </view>

      <v-text :margin="[26, 0]" label="自定义"></v-text>
      <view>
        <v-button :width="customMap.width" :height="customMap.height" :block="customMap.block" :margin="[12, 20]" :bgColor="selectColor.bgColor" :color="selectColor.color" :round="customMap.round">自定义配置按钮</v-button>
      </view>
      <v-cell title="颜色">
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
            <v-input type="number" v-model="customMap.round" ></v-input>
        </template>
      </v-cell>
      <v-cell title="宽">
        <template v-slot:value>
            <v-input v-model="customMap.width" ></v-input>
        </template>
      </v-cell>
      <v-cell title="高">
        <template v-slot:value>
            <v-input v-model="customMap.height" ></v-input>
        </template>
      </v-cell>
      <v-cell title="块">
        <template v-slot:value>
            <v-switch v-model="customMap.block" ></v-switch>
        </template>
      </v-cell>
    </v-card>
    <v-popup mode="center" v-model:show="showCustomModel">
      <v-card :width="500">
        <view class="flex justify-center">
          <v-text :margin="[20, 0]" :fontSize="36" label="自定义颜色"></v-text>
        </view>
        <v-input :margin="[10, 0]" :isPrefix="true" :clear="true" prefixText="背景颜色" v-model="customMap.bgColor"></v-input>
        <v-input :margin="[10, 0]" :isPrefix="true" :clear="true" prefixText="文字颜色" v-model="customMap.color"></v-input>
        <v-button @click="confirmColor" :block="true" type="primary" :round="9999">确定</v-button>
      </v-card>
    </v-popup>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      selectColor: {
        text: '默认',
        bgColor: '#3c9cff',
        color: 'white'
      },
      showCustomModel: false,
      customMap: {
        bgColor: '#3c9cff',
        color: 'white',
        round: 999,
        width: 'auto',
        height:70,
        block:false
      },
    }
  },
  watch: {

  },
  onUnload(){
   
  },
  methods: {
    customColor () {
      this.showCustomModel = true
    },
    updateSelectColor (color, text) {
      this.selectColor.bgColor = color;
      this.selectColor.text = text
    },
    confirmColor () {
      this.selectColor.bgColor = this.customMap.bgColor
      this.selectColor.color = this.customMap.color
      this.selectColor.text = '自定义'
      this.showCustomModel = false
    },
  }
}
</script>

<style></style>