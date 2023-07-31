# card 卡片
  卡片 作为容器，轻松配置边距、颜色、阴影、宽高、flex:row|col

<webview url="/pages/common/card"></webview>

```vue
<template>
    <v-card>
       
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
| bgColor | String | - | 背景颜色 | 合法的颜色值 |
| margin | Array | [0,0] | 外边距 | 拟同css ,数组长度可为1、2、3、4 |
| padding | Array | [0,0] | 内边距 | 拟同css ,数组长度可为1、2、3、4 |
| _contentClass | String | - | 插槽内容的父级class类名 多个空格隔开 |  |
| height | String\|Number | auto | 高度 | String类型支持带单位，Number类型根据unit拼接单位 |
| width | String\|Number | auto | 宽度 | 同上 |
| shadow | Number | 0 | 阴影 |  |
| shadowColor | String | rgba(0,0,0,0.07) | 阴影颜色 |  |
| _class | String | - | 最外层容器的class类名 多个空格隔开 |  |
| _style | Object | {} | 最外层容器的样式 |  |
|  |  |  |  |  |

### 插槽

| name    |
| ------- |
| default |

