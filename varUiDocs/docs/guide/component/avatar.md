# avatar 头像
  本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。

<webview url="/pages/common/avatar"></webview>

```vue
<template>
   <v-root>
    <v-avatar icon="icon-person-circle" color="#ccc"></v-avatar>
    <v-avatar icon="icon-person-circle" :size="120" color="#ccc"></v-avatar>
    <v-avatar :round="9999" icon="https://images.unsplash.com/photo-1685118148066-da2c5c61e291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" color="#ccc"></v-avatar>
    <v-avatar icon="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" :size="120" color="#ccc"></v-avatar>
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
|  icon   | String |     -      | icon名称                                                     |                                                     |
|  type   | String |     -      | 按钮的样式类型                                               | primary、warning、default、success                  |
| *size*  | Number |     90     | 大小                                                         |                                                     |
| imgMode | String | aspectFill | 如果name是图片链接 可设置mode 参考 [uniapp image mode](https://uniapp.dcloud.net.cn/component/image.html#mode) | 判断name是否是url, [.,/,data:,http,https,ftp]等情况 |
|  color  | String |  \#1F2937  | icon颜色                                                     |  |
|  round  | Number |     10     | 圆角                                                         |  |
| bgColor | String |     -      | 背景颜色                                                     |                                                     |
| margin  | Array  |   [0,0]    | 外边距                                                       | 拟同css ,数组长度可为1、2、3、4 |
| padding | Array  |   [0,0]    | 内边距                                                       | 拟同css ,数组长度可为1、2、3、4 |

### 插槽

无
