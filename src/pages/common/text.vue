<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="基本使用"></v-text>
      <v-text label="有一天，小明在学校里上数学课。老师问：“小明，你告诉我，如果你有两个苹果，再给你两个苹果，你一共有几个苹果？”小明想了一下，然后兴奋地回答：“老师，我有四个苹果！”老师笑了笑，摇了摇头说：“小明，你的数学果然不错！但是你要知道，这不是数学课，这是生活常识课！如果你有两个苹果，再给你两个苹果，你就得去看牙医了！”"></v-text>
     
    </v-card>

    <v-card :margin="[16,16]">
      <v-text :margin="[16,0]" label="单行省略"></v-text>
      <v-text _class="text-overflow-1" label="有一天，小明在学校里上数学课。老师问：“小明，你告诉我，如果你有两个苹果，再给你两个苹果，你一共有几个苹果？”小明想了一下，然后兴奋地回答：“老师，我有四个苹果！”老师笑了笑，摇了摇头说：“小明，你的数学果然不错！但是你要知道，这不是数学课，这是生活常识课！如果你有两个苹果，再给你两个苹果，你就得去看牙医了！”"></v-text>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
     
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style></style>