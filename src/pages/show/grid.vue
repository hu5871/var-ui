<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-grid >
      <v-grid-item  v-for="item in list" :key="item.title">
        {{ item.title }}
      </v-grid-item>
    </v-grid>
    <v-grid :margin="[16,16]" :border="2" borderColor="#ccc">
      <v-grid-item  v-for="item in list" :key="item.title">
        {{ item.title }}
      </v-grid-item>
    </v-grid>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          title:'苹果'
        },
        {
          title:'冻梨'
        },
        {
          title:'橙子'
        },
        {
          title:'香蕉'
        },
        {
          title:'西瓜'
        },
        {
          title:'榴莲'
        },
        {
          title:'柠檬'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style></style>