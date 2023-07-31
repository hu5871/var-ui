<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-button type="primary" @click="handleClick" block>显示</v-button>
    <v-mask v-model:show="show"></v-mask>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      show: false,
     
    }
  },
  methods: {
    handleClick(){
      this.show=true
    }
  }
}
</script>

<style></style>