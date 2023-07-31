# line 线条
  可做线条和分割线

<webview url="/pages/show/line"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="300">
      <v-text :margin="[16]" :label="'横向'"></v-text>
      <v-line label="分割"></v-line>
      <v-line align="start" label="分割"></v-line>
      <v-line align="end" label="分割"></v-line>
    </v-card>
    <v-card :margin="[16, 16]" :height="300">
      <v-text :margin="[16]" :label="'纵向'"></v-text>
      <view class="flex">
        <v-line :height="200" :vertical="true"></v-line>
        <v-line :height="200" :vertical="true"></v-line>
        <v-line :height="200" :vertical="true"></v-line>
      </view>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
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

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| height | String\|Number | 2 | 纵向时的线条高度 |  |
| *unit* | String | rpx | 单位 |  |
| border | Number | 2 | 线条的高度 |  |
| align |    String    | center | 文字在线条中的对齐方式 | start、end、center |
| lineColor | String | \#dfe1e5 | 线条颜色 |  |
| color | String | \#6b6b70 | 字体颜色 |  |
|   width   | String\Number |    auto    | 自定义宽度                         |                                           |
| showLeftLine | Boolean |    true    | 显示左侧线条                  |                                           |
|   showRightLine   | Boolean |    true    | 显示右侧线条                     |                                           |
| leftLineColor |    String     |    -     | 单独设置左侧线条的颜色             |  |
| rightLineColor |    String     |    -     | 单独设置右侧线条的颜色               |                                           |
| vertical |    Boolean    |  false   | 纵向                   |                                           |
| fontSize |    Number     |    28    | 字体大小                        |                                           |
| label |     String     |  -  | 文本只支持横向线条                 |  |
| margin | Array | [0,0] | 外边距 | 拟同css ,数组长度可为1、2、3、4 |

### 插槽

| name  | 描述           |
| ----- | -------------- |
| left  | 左侧线条的插槽 |
| label | 文本插槽       |
| right | 右侧线条的插槽 |

### 事件

无
