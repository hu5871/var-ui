# subsection 分段器

 该分段器一般用于用户从几个选项中选择某一个的场景

<webview url="/pages/navigation/subsection"></webview>

```vue
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
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|     参数      |      类型      |  默认值  | 描述                                    | 可选值                                                       |
| :-----------: | :------------: | :------: | :-------------------------------------- | ------------------------------------------------------------ |
|  modelValue   |     Array      |    []    | 显示内容的数组                          | 当数组为字符串数组时（['新闻','影视']），内部自动转换        |
|    active     |     Number     |    0     | 当前激活的索引                          |                                                              |
|     mode      |     String     | default  | 展示模式                                | default、button                                              |
|     round     |     Number     |    6     | 圆角                                    |                                                              |
|   titleKey    |     String     |  title   | modelValue为数组对象时须提供的title字段 |                                                              |
|     idKey     |     String     |    id    | modelValue为数组对象时须提供的id字段    |                                                              |
|     width     | String\|Number |   auto   | 容器宽度                                |                                                              |
|    height     | String\|Number |    70    | 容器高度                                |                                                              |
|     unit      |     String     |   rpx    | 像素单位                                |                                                              |
|    border     |     Number     |    .5    | 边框（mode为button不显示）              |                                                              |
|    bgColor    |     String     | #FFFFFF  | 背景颜色                                |                                                              |
| activeBgColor |     String     | \#2d8cf0 | 激活的背景颜色                          |                                                              |
|     color     |     String     | \#1F2937 | 文字颜色                                |                                                              |
|  activeColor  |     String     | \#FFFFFF | 激活的文字颜色                          |                                                              |
| activeWeight  | Number\|String |   500    | 激活的文字粗细                          | 常考css [fontWeight](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight) |
|    margin     |     Array      |  [0,16]  | 外边距                                  |                                                              |
|    padding    |     Number     |    8     | 内边距                                  |                                                              |

### 插槽

无

### 事件

| 事件名 | 回调参数       | 描述                                           |
| ------ | -------------- | ---------------------------------------------- |
| change | *{index,item}* | 当点击时触发（回调参数可解构获得索引和当前项） |

