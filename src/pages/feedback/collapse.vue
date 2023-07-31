<template>
  <v-root bgColor="rgb(245, 245, 245)">
      <v-collapse>
        <v-collapse-item name="item1" valueAlign="start" value="标题1">
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
        <v-collapse-item name="item2" valueAlign="end" value="标题2">
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
        <v-collapse-item name="item3" valueAlign="center" value="标题3">
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
        <v-collapse-item name="item4" valueAlign="end" value="标题4">
          <template v-slot:value>
            <v-text :fontSize="26" :margin="[0,16]"> 插槽自定义 </v-text>
          </template>
          <template v-slot:right>
            <v-icon color="red" name="icon-rocket"></v-icon>
          </template>
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
      </v-collapse>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
   
  }
}
</script>

<style></style>