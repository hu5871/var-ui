### notice-bar 滚动消息

该组件用于滚动通告场景

<webview url="/pages/feedback/noticebar"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="800">
      <v-card>基本使用</v-card>
      <v-notice-bar :text="text1"></v-notice-bar>
      <v-card>纵向滚动</v-card>
      <v-notice-bar :multiple="true"  :height="200" direction="col" :text="text3" :speed="150"></v-notice-bar>
      <v-card>滚动速度</v-card>
      <v-notice-bar :text="text2" :rowSpeed="150"></v-notice-bar>
      <v-card>横向步进</v-card>
      <v-notice-bar direction="col" :step="true" :text="text3" ></v-notice-bar>
      <v-card>纵向步进</v-card>
      <v-notice-bar direction="col" :text="text3"></v-notice-bar>
    </v-card>
  </v-root>
</template>
<script>
export default {
  data () {
    return {
      text1: '熊大和灰太狼在寂静岭搞起了兼职，遇到了酒驾的幽灵海盗驾驶一辆AE86极速驶出峡谷，被黑猫警长逮了个正着。',
      text2: '熊二和懒洋洋偷偷摸摸的从汤姆家带走了哇哈哈',
      text3: [
        '君不见，黄河之水天上来，奔流到海不复回。',
        '君不见，高堂明镜悲白发，朝如青丝暮成雪。',
        '人生得意须尽欢，莫使金樽空对月。',
        '天生我材必有用，千金散尽还复来。',
        '烹羊宰牛且为乐，会须一饮三百杯。',
        '岑夫子，丹丘生，将进酒，杯莫停。',
        '与君歌一曲，请君为我倾耳听。',
        '钟鼓馔玉不足贵，但愿长醉不复醒。',
        '古来圣贤皆寂寞，惟有饮者留其名。',
        '陈王昔时宴平乐，斗酒十千恣欢谑。',
        '主人何为言少钱，径须沽取对君酌。',
        '五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。',
      ],
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

|       参数       |      类型      |                        默认值                         | 描述                                                         | 可选值   |
| :--------------: | :------------: | :---------------------------------------------------: | :----------------------------------------------------------- | -------- |
|    direction     |     String     |                          row                          | 通告滚动模式，row-横向滚动，col-竖向滚动                     | row、col |
|     rowSpeed     |     Number     |                          100                          | 水平滚动时的滚动速度，即每秒滚动多少px，这有利于控制文字无论多少时，都能有一个恒定的速度 |          |
|     colSpeed     |     Number     |                          10                           | 垂直滚动时的滚动速度，即每秒滚动多少px，这有利于控制文字无论多少时，都能有一个恒定的速度 |          |
|       step       |    Boolean     |                         false                         | 步进                                                         |          |
|     duration     |     Number     |                         2000                          | 每次间隔多少ms，步进一次（step有效）                         |          |
|   disableTouch   |    Boolean     |                         true                          | 步进下是否可以滑动内容                                       |          |
|       text       | String\|Array  |                           -                           | row模式为String类型，col模式或者使用step步进为数组           |          |
|     multiple     |    Boolean     |                         false                         | col模式需要多行滚动使用                                      |          |
|      height      | String｜Number |                          32                           | 高度                                                         |          |
|     bgColor      |     String     |                       \#fdf6ec                        | 背景颜色                                                     |          |
|      color       |     String     |                       \#f9ae3d                        | 文本颜色                                                     |          |
|    textStyle     |     Object     |                          {}                           | 文本的样式                                                   |          |
|      _style      |     Object     |                          {}                           | 容器样式                                                     |          |
|     fontSize     |     Number     |                          28                           | 字体大小                                                     |          |
|     isClose      |    Boolean     |                         true                          | 右侧icon点击时间可关闭                                       |          |
|       unit       |     String     |                          rpx                          | 像素单位                                                     |          |
|     isPrefix     |    Boolean     |                         true                          | 是否需要前缀（左侧icon）                                     |          |
|     isSuffix     |    Boolean     |                         true                          | 是否需要后缀（右侧icon）                                     |          |
| *prefixIconProp* |     Object     | *{name:'icon-volume-medium-outline',color:'#f9ae3d'}* | (前缀)icon组件的props                                        |          |
|  suffixIconProp  |     Object     |         *{name:'icon-close',color:'#f9ae3d'}*         | (后缀)icon组件的props                                        |          |

### 事件

| 名称        | 参数                    | 描述             |
| ----------- | ----------------------- | ---------------- |
| close       | 无                      | 点击关闭         |
| suffixClick | 无                      | 点击右侧icon触发 |
| prefixClick | 无                      | 点击左侧icon触发 |
| handleClick | text为数组时参数为index | 点击滚动内容触发 |



### 插槽

| name  | 描述      |      |
| ----- | --------- | ---- |
| left  | 左侧插槽  |      |
| right | right插槽 |      |

