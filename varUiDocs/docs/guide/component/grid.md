# grid 宫格
  宫格用于把元素进行水平方向分割成等宽区块，是较为常用的布局方式，需要配合grid-item组件使用

<webview url="/pages/show/grid"></webview>

```vue
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
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持 | 支持 |

### grid Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| col | Number | 3 | 列 |  |
| *width* | String | auto | 容器宽度 |  |
| itemHeight | Number,String | 108 | 单项的高度 |  |
| border |    Number    | 0 | border |  |
| borderColor | String | transparent | 边框颜色 |  |
| borderStyle | String | solid | *边框样式* |  |



### 插槽

| name    |
| ------- |
| default |

### 事件

| 事件名 | 参数 |
| ------ | ---- |
| click  | e    |

