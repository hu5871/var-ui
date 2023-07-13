### navbar 自定义导航栏

 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到,需要放在页面最顶部

<webview url="/pages/navigation/navbar"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-navbar title="标题" homePath="/pages/index/index"></v-navbar>
    <v-card >
    </v-card>
  </v-root>
</template>

<script>

export default {
   data(){
    return {
    }
   },
   methods:{
    
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

|   参数    |   类型   |          默认值           | 描述                                     | 可选值 |
| :-------: | :------: | :-----------------------: | :--------------------------------------- | ------ |
|  height   |  Number  |            44             | 导航栏的高度                             |        |
|   title   |  String  |             -             | 标题                                     |        |
| backPath  |  String  |             -             | 返回上一页的地址                         |        |
| homePath  |  String  |             -             | 获取不到页面栈时，返回到主页的地址       |        |
| leftIcon  |  String  | icon-chevron-back-outline | 左侧的icon                               |        |
| homeIcon  |  String  |         icon-home         | 获取不到页面栈时，返回到主页的icon       |        |
| *backFun* | Function |         ()=>true          | 返回时，对用户离开有什么操作或提示可使用 |        |

### 插槽

| name  | 描述      |      |
| ----- | --------- | ---- |
| left  | 左侧插槽  |      |
| home  | home插槽  |      |
| title | title插槽 |      |
| right | right插槽 |      |

