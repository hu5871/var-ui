<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <v-card :margin="[0, 0]" :padding="[0, 0]">
        <view class="flex items-center">
          <v-switch v-model="value1" :margin="[0, 10]"></v-switch>
          <v-switch v-model="value2" :width="140" :height="70"></v-switch>
        </view>
      </v-card>
      <v-text :margin="[16, 0]" label="label"></v-text>
      <v-switch v-model="value3" :label="['关', '开']"></v-switch>

      <v-text :margin="[16, 0]" label="形状"></v-text>
      <v-switch v-model="value4" :width="140" :round="6" :label="['关', '开']"></v-switch>

      <v-text :margin="[16, 0]" label="禁用"></v-text>
      <v-switch v-model="value5" :disabled="true" :width="140" :round="6" :label="['关', '开']"></v-switch>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style></style>