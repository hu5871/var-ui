<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :margin="[16]">
      <v-text label="图片"></v-text>
      <v-watermark :height="800"  :image="logo" :spacing="20"></v-watermark>
    </v-card>
    <v-card :margin="[16]">
      <v-text label="文本"></v-text>
      <v-watermark :height="800"  text="var-ui" :spacing="20"></v-watermark>
    </v-card>
  </v-root>
</template>

<script>
import logo from '../../static/var-logo.png'
export default {
  data () {
    return {
      logo,
    }
  }
}
</script>

<style></style>