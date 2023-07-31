# watermark 水印

用于展示敏感内容的背景水印

<webview url="/pages/show/watermark"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :margin="[16]">
      <v-text label="图片"></v-text>
      <v-watermark :height="800"  :image="logo" :spacing="20"></v-watermark>
    </v-card>
    <v-card :margin="[16]">
      <v-text label="文本"></v-text>
      <v-watermark :height="800" :fontSize="60" text="var-ui" :spacing="20"></v-watermark>
    </v-card>
  </v-root>
</template>

<script>
import logo from '../../static/var-logo.png'
export default {
  data () {
    return {
      logo,
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

|    参数     |      类型      |   默认值   | 描述                                                         | 可选值                  |
| :---------: | :------------: | :--------: | :----------------------------------------------------------- | ----------------------- |
|    width    | String\|Number |    auto    | 容器宽度                                                     |                         |
|   height    | String｜Number |    100%    | 容器高度                                                     |                         |
|    text     |     String     |     -      | 水印的文本                                                   |                         |
|   rotate    |     Number     |     0      | 旋转角度                                                     |                         |
|  fontSize   |     Number     |     30     | 字体大小                                                     |                         |
|    color    |     String     |  \#1F2937  | 字体颜色                                                     |                         |
|  fontStyle  |    *String*    |   normal   | 字体样式                                                     | normal、italic、oblique |
| fontVariant |     String     |   normal   | 设置小型大写字母的字体显示文本                               | normal、small-caps      |
| fontWeight  | String\|Number |    400     | 字体粗细                                                     |                         |
| lineHeight  |     Number     |     14     | 行高                                                         |                         |
| fontFamily  |     String     | sans-serif | 字体                                                         |                         |
|    image    |     String     |     -      | 图片                                                         |                         |
| imageWidth  |     Number     |    100     | 图片宽（并不代表最终的大小，考虑canvas缩放和计算比例使图片能完整显示） |                         |
| imageHeight |     Number     |     40     | 图片高并不代表最终的大小，考虑canvas缩放和计算比例使图片能完整显示） |                         |
|   opacity   |     Number     |     .6     | 透明度                                                       |                         |
|   spacing   |     Number     |     20     | 安全距离                                                     |                         |
|             |                |            |                                                              |                         |
|             |                |            |                                                              |                         |
|             |                |            |                                                              |                         |

### 插槽

| name    |      |      |
| ------- | ---- | ---- |
| default |      |      |

