<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-text label="基本使用 默认step为1 有步进感"></v-text>
      <v-slider :margin="[26, 0]" v-model="value1"></v-slider>
      <v-text label="基本使用 不使用step 自然滑动"></v-text>
      <v-slider :margin="[26, 0]" :natureMove="true" popoverPostion="b"  v-model="value1"></v-slider>
      <v-text label="基本使用 显示气泡框"></v-text>
      <v-slider :margin="[26, 0]" :showPopover="true" :natureMove="true" popoverPostion="t"  v-model="value1"></v-slider>
      <v-text label="区间"></v-text>
      <v-slider :range="true" :margin="[26, 0]" popoverPostion="b" v-model="value2"></v-slider>
      <v-text label='垂直方向'></v-text>
      <v-slider  :margin="[26, 0]" direction="col" :width="6" :height="200" popoverPostion="r" :showPopover="true" v-model="value3"></v-slider>
      <v-text label='垂直方向 区间'></v-text>
      <v-slider  :margin="[26, 0]" :range="true" direction="col" :width="6" :height="300" popoverPostion="r" :showPopover="true" v-model="value2"></v-slider>
    </v-card>

    <v-card >
      <v-text label="自定义 button"></v-text>
      <v-slider :margin="[26, 0]" :showPopover="true" v-model="value1">
        <template v-slot:btn>
          <v-button type="primary" :height="20"></v-button>
        </template>
      </v-slider>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
      value1: 0,
      value2: [0,10],
      value3: [0,100],
      value4: 0,
      value5: 0,
      value6: 0,
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style></style>