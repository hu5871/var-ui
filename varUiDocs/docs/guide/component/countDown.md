# countdown 倒计时
  用于某活动的预计时，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作

<webview url="/pages/show/countdown"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
        <v-countdown ></v-countdown>
  </v-root>
</template>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持 | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| date | *Date*, *Number* | 默认一天后的时间戳(毫秒) | 设置倒计日期对象或者时间戳 | Date\时间戳 |
| *time* | Number | 时间戳 | 只能是时间戳 |  |
| auto | Boolean | true | 自动开始倒计时 |  |
| format |    String    | DD天HH小时MM分SS秒 | 格式化 |  |

### 插槽

| name    | prop data                                                    |
| ------- | ------------------------------------------------------------ |
| default | time:   转化后对象{day,hour,minutes,seconds}, value: 格式化后的文本 DD天HH小时MM分SS秒 |

### 事件

| 方法  | 参数 | 描述       |
| ----- | ---- | ---------- |
| start | 无   | 开始倒计时 |
| pause | 无   | 暂停       |
|       |      |            |

