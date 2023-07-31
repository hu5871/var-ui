# html 富文本解析
  该组件一般用于富文本解析场景，组件使用的是[mp-html文档](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=uni-app)

<webview url="/pages/common/html"></webview>

```vue
<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)" :padding="[16,20]">
     <v-html :content="content"></v-html>
  </v-root>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
      content:`<p>这是一个段落</p>`
    }
  },
}
</script>

<style></style>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   | nvue |
| --- | --- | --- | --- |
| 支持 | 支持 | 支持 | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| content | String | - | 解析的html字符串 |  |

### 其他配置

其他更多的配置功能，如获取页面的所有图片数组，跳转页内锚点，视频播放等，如需更多的配置信息，请移步`mp-html`项目文档：[mp-html文档](https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=uni-app)
