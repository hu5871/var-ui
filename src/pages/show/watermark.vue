<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="500">
      <v-watermark :image="logo" ></v-watermark>
    </v-card>
    <v-card :margin="[16]" :height="500">
      <v-watermark :imageRepeat="false" imagePosition="right-bottom" :image="logo">
        right-bottom
      </v-watermark>
    </v-card>
    <v-card :margin="[16]" :height="500">
      <v-watermark :imageRepeat="false" imagePosition="left-bottom" :image="logo">
        left-bottom
      </v-watermark>
    </v-card>
    <v-card :margin="[16]" :height="500">
      <v-watermark :imageRepeat="false" imagePosition="left-top" :image="logo">
        left-top
      </v-watermark>
    </v-card>
    <v-card :margin="[16]" :height="500">
      <v-watermark :imageRepeat="false" imagePosition="right-top" :image="logo">
        right-top
      </v-watermark>
    </v-card>
    <v-card :margin="[16]" :height="500">
      <v-watermark :imageRepeat="false" imagePosition="center" :image="logo">
        center
      </v-watermark>
    </v-card>
  </v-root>
</template>

<script>
import logo from '../../static/var-logo.png'
export default {
  data () {
    return {
      logo
    }
  }
}
</script>

<style></style>