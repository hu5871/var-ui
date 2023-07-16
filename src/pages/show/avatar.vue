<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card isRow>
      <view class="w-full">
       <v-text :margin="[16,0]" label="icon使用"></v-text>
      </view>
      <v-avatar icon="icon-person-circle" color="#ccc"></v-avatar>
      <v-avatar icon="icon-person-circle" :size="120" color="#ccc"></v-avatar>
    </v-card>
    <v-card isRow>
      <view class="w-full">
       <v-text :margin="[16,0]" label="imageUrl"></v-text>
      </view>
      <v-avatar :round="9999" icon="https://images.unsplash.com/photo-1685118148066-da2c5c61e291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" color="#ccc"></v-avatar>
      <v-avatar icon="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" :size="120" color="#ccc"></v-avatar>
    </v-card>
  </v-root>
</template>

<script>
export default {

}
</script>

<style></style>