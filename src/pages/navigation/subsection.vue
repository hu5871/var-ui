<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[16]" label="基本使用"></v-text>
      <v-subsection v-model="list1" v-model:active="active1"></v-subsection>
      <v-text :margin="[16]" label="按钮风格"></v-text>
      <v-subsection bgColor="#f4f4f4" :margin="[16]" mode="button" v-model="list2" v-model:active="active2"></v-subsection>
      <v-text :margin="[16]" label="圆角"></v-text>
      <v-subsection bgColor="#f4f4f4" :round="99" :margin="[16]" mode="button" v-model="list2" v-model:active="active2"></v-subsection>
      <v-text :margin="[16]" label="激活字体加粗"></v-text>
      <v-subsection bgColor="#f4f4f4" :activeWeight="900" :margin="[16]" mode="button" v-model="list2" v-model:active="active2"></v-subsection>
      <v-text :margin="[16]" label="颜色"></v-text>
      <v-subsection  activeBgColor="#f7c444" :activeWeight="900" :margin="[16]"  v-model="list2" v-model:active="active2"></v-subsection>
      <v-subsection bgColor="#f4f4f4" @change="handleChange"  activeBgColor="#f7c444" :activeWeight="900" mode="button" :margin="[16]"  v-model="list2" v-model:active="active2"></v-subsection>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      active1: 0,
      active2: 0,
      list1:[
        {
          title:'全部',
          id:1
        },
        {
          title:'待付款',
          id:2
        },
        {
          title:'已付款',
          id:3
        },
        {
          title:'待发货',
          id:4
        },
      ],
      list2:[
        {
          title:'前端',
          id:1
        },
        {
          title:'后端',
          id:2
        },
        {
          title:'大数据',
          id:3
        },
        {
          title:'人工智能',
          id:4
        },
        {
          title:'哇哈哈',
          id:5
        },
      ]
    }
  },
  methods: {
    handleChange({index,item}){
      console.log(index,item)
    }
  }
}
</script>

<style></style>