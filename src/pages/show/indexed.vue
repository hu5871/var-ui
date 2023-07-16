<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="1000">
      <v-indexed :height="1000">
        <v-indexed-item v-for="item in list" :key="item.id" :id="item.id">
          <v-card :height="200" >
              
          </v-card>
        </v-indexed-item>
      </v-indexed>
    </v-card>
  </v-root>
</template>

<script>
export default {
  created () {
    // 生成包含小写字母a-z的数组
    var alphabetArray = [];
    for (let i = 97; i <= 122; i++) {
      var letter = String.fromCharCode(i);
      alphabetArray.push({id:letter});
    }
    this.list=alphabetArray
  },
  data () {
    return {
      list: [
        
      ]
    }
  }
}
</script>

<style></style>