<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-text :margin="[16,0]" label="自动开始"></v-text>
      <v-countdown ></v-countdown>
    </v-card>
    <v-card :margin="[16,16]">
      <v-text :margin="[16,0]" label="手动控制"></v-text>
      <v-countdown ref="countdown" :auto="false"></v-countdown>
      <v-button @click="handleClick('start')" :margin="[16,0]" type="primary" size="mini">开始或继续</v-button>
      <v-button @click="handleClick('pause')"  :margin="[16,0]" type="warning" size="mini">暂停</v-button>
    </v-card>
  </v-root>
</template>

<script>
export default {
   data(){
    return {
    }
   },
   methods:{
    handleClick(str){
      str=== 'start' ?  this.$refs.countdown.start() : this.$refs.countdown.pause()
    }
   }
}
</script>

<style></style>