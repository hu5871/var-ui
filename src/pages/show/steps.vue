<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-steps :current="current">
        <v-steps-item  :title="item.title" v-for="(item, index) in list" :key="index">
        </v-steps-item>
      </v-steps>
    </v-card>
    <v-card :margin="[16]">
      <v-steps :current="current1">
        <v-steps-item :error="index==1"  :title="item.title" v-for="(item, index) in list" :key="index">
        </v-steps-item>
      </v-steps>
    </v-card>
    <v-card :margin="[16]" :height="600">
      <v-steps :height="550" :vertical="true" :current="current2">
        <v-steps-item   :title="item.title" v-for="(item, index) in list" :key="index">
        </v-steps-item>
      </v-steps>
    </v-card>
    <v-card :margin="[16]" :height="600">
      <v-steps :height="550" :vertical="true" :current="current3">
        <v-steps-item :error="index==1"  :title="item.title" v-for="(item, index) in list" :key="index">
          <v-text color="#ccc" :fontSize="28" v-if="index==0">你的审核失败，请你提交更规范的代码</v-text>
        </v-steps-item>
      </v-steps>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      current: -1,
      current1: 1,
      current2:-1,
      current3:1,
      list: [
        {
          title: '开始'
        },
        {
          title: '审核'
        },
        {
          title: '下发'
        },
        {
          title: '结束'
        },
      ],
      timer:null
    }
  },
  mounted(){
    this.timer= setInterval(()=>{
      if(this.current >= this.list.length-1){
        this.current =-1
      }
      this.current+=1

      if(this.current2 >= this.list.length-1){
        this.current2 =-1
      }
      this.current2+=1

    },3000)
  },
  beforeUnmount(){
    clearInterval(this.timer)
  }
}
</script>

<style></style>