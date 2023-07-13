<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="800">
      <v-card>基本使用</v-card>
      <v-notice-bar @click="handleClick" :text="text1"></v-notice-bar>
      <v-card>纵向滚动</v-card>
      <v-notice-bar :multiple="true"  :height="200" direction="col" :text="text3" :speed="150"></v-notice-bar>
      <v-card>滚动速度</v-card>
      <v-notice-bar :text="text2" :rowSpeed="150"></v-notice-bar>
      <v-card>横向步进</v-card>
      <v-notice-bar direction="col" :step="true" :text="text3" ></v-notice-bar>
      <v-card>纵向步进</v-card>
      <v-notice-bar direction="col" :text="text3"></v-notice-bar>
    </v-card>
  </v-root>
</template>
<script>
export default {
  data () {
    return {
      text1: '熊大和灰太狼在寂静岭搞起了兼职，遇到了酒驾的幽灵海盗驾驶一辆AE86极速驶出峡谷，被黑猫警长逮了个正着。',
      text2: '熊二和懒洋洋偷偷摸摸的从汤姆家带走了哇哈哈',
      text3: [
        '君不见，黄河之水天上来，奔流到海不复回。',
        '君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        '人生得意须尽欢，莫使金樽空对月。',
        '天生我材必有用，千金散尽还复来。',
        '烹羊宰牛且为乐，会须一饮三百杯。',
        '岑夫子，丹丘生，将进酒，杯莫停。',
        '与君歌一曲，请君为我倾耳听。',
        '钟鼓馔玉不足贵，但愿长醉不复醒。',
        '古来圣贤皆寂寞，惟有饮者留其名。',
        '陈王昔时宴平乐，斗酒十千恣欢谑。',
        '主人何为言少钱，径须沽取对君酌。',
        '五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。',
      ],
    }
  },
  methods:{
    handleClick(){
      console.log(1)
    }
  }
}
</script>

<style></style>