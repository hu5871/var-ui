<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="300">
      <v-text :margin="[16]" :label="'横向'"></v-text>
      <v-line label="分割"></v-line>
      <v-line align="start" label="分割"></v-line>
      <v-line align="end" label="分割"></v-line>
    </v-card>
    <v-card :margin="[16, 16]" :height="300">
      <v-text :margin="[16]" :label="'纵向'"></v-text>
      <view class="flex">
        <v-line :height="200" :vertical="true"></v-line>
        <v-line :height="200" :vertical="true"></v-line>
        <v-line :height="200" :vertical="true"></v-line>
      </view>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style></style>