# countup 数字滚动
  滚动一个数值，增加某些场景的感官体验

<webview url="/pages/show/countup"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-text :margin="[16,0]" label="基本使用"></v-text>
      <v-countup :endValue="1000"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="倒计"></v-text>
      <v-countup :startValue="1000" :endValue="0"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="小数"></v-text>
      <v-countup :startValue="1.99" :decimalPlaces="2" :endValue="1999.99"></v-countup>
    </v-card>
    <v-card  :margin="[16,16]">
      <v-text :margin="[16,0]" label="分割符"></v-text>
      <v-countup :startValue="1.99" separator="," :decimalPlaces="2" :endValue="1999.99"></v-countup>
    </v-card>
    <v-card :margin="[16,16]">
      <v-text :margin="[16,0]" label="手动控制"></v-text>
      <v-countup ref="countup" :endValue="19999.99"></v-countup>
      <v-button @click="handleClick('start')" :margin="[16,0]" type="primary" size="mini">开始或继续</v-button>
      <v-button @click="handleClick('pause')"  :margin="[16,0]" type="warning" size="mini">暂停</v-button>
      <v-button @click="handleClick('reset')"  :margin="[16,0]" type="warning" size="mini">重置</v-button>
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
    handleClick(str){
      this.$refs.countup[str]() 
    }
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

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| startValue | Number | 0 | 开始的数值 |  |
| *endValue* | Number | 0 | 结束的数值 |  |
| duration | Number | 3000(毫秒) | 滚动时间 |  |
| useEasing |    Boolean    | true | 使用过渡 |  |
| separator | String |  | 千位分割符 |  |
| prefixColor | String | \#1F2937 | 前缀字体颜色 |  |
|   prefixSize   | Number |    28   | 前缀字体大小            |                                           |
| prefixLabel | Number |         | 前缀文本               |                                           |
|  suffixColor  | String  |  \#1F2937  | 后缀字体颜色 |        |
|  suffixSize   | Number  |     28     | 后缀字体大小 |        |
|  suffixLabel  | Number  |            | 后缀文本     |        |
|   fontSize    | Number  |     28     | 字体大小     |        |
|     color     | String  |  \#1F2937  | 字体颜色     |        |
| decimalPlaces | Number  |     0      | 保留小数位数 |        |

### 插槽

| name    | prop data       | 描述     |
| ------- | --------------- | -------- |
| default | data:滚动的数值 | 默认插槽 |
| prefix  |                 | 前缀插槽 |
| suffix  |                 | 后缀插槽 |

### 事件

| 方法  | 参数 | 描述 |
| ----- | ---- | ---- |
| start | 无   | 开始 |
| pause | 无   | 暂停 |
| reset | 无   | 重置 |
