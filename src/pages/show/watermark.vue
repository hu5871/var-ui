<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :margin="[16]">
      <v-text label="图片"></v-text>
      <v-watermark :height="800" :rotate="rotate" :image="logo" :spacing="20"></v-watermark>
    </v-card>
    <v-card :margin="[16]">
      <v-text label="文本"></v-text>
      <v-watermark :height="800" :fontSize="60" text="var-ui" :spacing="20"></v-watermark>
    </v-card>
  </v-root>
</template>

<script>
import logo from '../../static/var-logo.png'
// import vStepper from '../../uni_modules/var-ui/components/v-stepper/v-stepper.vue'
export default {
  // components: { vStepper },
  data () {
    return {
      // logo: 'https://images.unsplash.com/photo-1685118148066-da2c5c61e291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      logo,
      rotate: 0,
      active: 'image',
      list: [
        {
          name: 'image',
          title: '图片'
        },
        {
          name: 'text',
          title: '文本'
        },
      ]
    }
  }
}
</script>

<style></style>