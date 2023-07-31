<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
       <v-text label="基本使用"></v-text>
       <v-rate :margin="[20,0]" :count="5" v-model="value1"></v-rate>
       <v-text label="支持一半"></v-text>
       <v-rate :margin="[20,0]" :count="5" :half="true" v-model="value2"></v-rate>
       <v-text label="图标替换"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart" activeIcon="icon-heart" :count="5" :half="true" v-model="value3"></v-rate>
       <v-text label="最小选中数量"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart" :min="3" activeIcon="icon-heart" :count="5" :half="true" v-model="value4"></v-rate>
       <v-text label="禁用"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart" :disabled="true" activeIcon="icon-heart" :count="5" :half="true" v-model="value5"></v-rate>
       <v-text label="只能点击"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart"  :touchable="false" activeIcon="icon-heart" :count="5" :half="true" v-model="value6"></v-rate>
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
    value4(val){
      console.log('val',val)
    }
  },
  methods: {
    
  }
}
</script>

<style></style>