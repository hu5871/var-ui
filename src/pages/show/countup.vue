<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-text :margin="[16,0]" label="基本使用"></v-text>
      <v-countup :endValue="1000"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="倒计"></v-text>
      <v-countup :startValue="1000" :endValue="0"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="小数"></v-text>
      <v-countup :startValue="1.99" :decimalPlaces="2" :endValue="1999.99"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="分割符"></v-text>
      <v-countup :startValue="1.99" separator="," :decimalPlaces="2" :endValue="1999.99"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="前后缀"></v-text>
      <v-countup prefixLabel="¥" suffixLabel="面值" :startValue="1.99" separator="," :decimalPlaces="2" :endValue="1999.99"></v-countup>
    </v-card>
    <v-card :margin="[16,16]">
      <v-text :margin="[16,0]" label="手动控制"></v-text>
      <v-countup ref="countup" :endValue="19999.99"></v-countup>
      <v-button @click="handleClick('start')" :margin="[16,0]" type="primary" size="mini">开始或继续</v-button>
      <v-button @click="handleClick('pause')"  :margin="[16,0]" type="warning" size="mini">暂停</v-button>
      <v-button @click="handleClick('reset')"  :margin="[16,0]" type="warning" size="mini">重置</v-button>
    </v-card>
  </v-root>
</template>

<script>
import vCountup from '../../var-ui/components/v-countup/v-countup.vue'
export default {
  components: { vCountup },
   data(){
    return {
    }
   },
   methods:{
    handleClick(str){
      this.$refs.countup[str]() 
    }
   }
}
</script>

<style></style>