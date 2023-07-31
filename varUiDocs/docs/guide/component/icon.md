# icon 图标
 图标 ：基于字体的图标集

<webview url="/pages/common/icon"></webview>

```vue
<template>
    <v-icon name="icon-alarm" color="red"></v-icon>
    <v-icon name="icon-airplane" color="#3156c6"></v-icon>
    <v-icon name="icon-call" color="green"></v-icon>
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
|     name      | Steing |   -    | icon名称                                                     |                                                     |
|     color     | String |   -    | 颜色                                                         | 合法的颜色值                                        |
|     size      | Number |   42   | 大小                                                         |                                                     |
|    imgMode    | String |        | 如果name是图片链接 可设置mode 参考 [uniapp image mode](https://uniapp.dcloud.net.cn/component/image.html#mode) | 判断name是否是url, [.,/,data:,http,https,ftp]等情况 |
|    margin     | Array  | [0,0]  | 外边距                                                       | 拟同css ,数组长度为1、2、3、4                       |
|    padding    | Array  | [0,0]  | 内边距                                                       | 拟同css ,数组长度为1、2、3、4                       |
| animationName | String |   -    | 动画类名                                                     |                                                     |
|               |        |        |                                                              |                                                     |

### 插槽

| name    |
| ------- |
| default |

