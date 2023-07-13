<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
       <v-text label="基本使用 最小值默认0"></v-text>
       <v-stepper :margin="[26,0]" v-model="value1"></v-stepper>
       <v-text label="最大值 10"></v-text>
       <v-stepper :margin="[26,0]" :max="10" v-model="value2"></v-stepper>
       <v-text label="步进 2"></v-text>
       <v-stepper :margin="[26,0]" :step="2"  v-model="value3"></v-stepper>
       <v-text label="默认可小数"></v-text>
       <v-stepper :margin="[26,0]" :step=".5"  v-model="value4"></v-stepper>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      value1:0,
      value2:0,
      value3:0,
      value4:0,
      value5:0,
      value6:0,
    }
  },
  watch:{
   
  },
  methods: {
    
  }
}
</script>

<style></style>