# root 根节点
  root 作为页面的根节点，轻松配置加载状态，和网络检测



```vue
<template>
    <v-root ref="root">
       
    </v-root>
</template>
```
<webview url="/pages/common/root"></webview>


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持 | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| bgColor | String | - | 背景颜色 | 合法的颜色值 |
| margin | Array | [0,0] | 外边距 | 拟同css ,数组长度为4 |
| padding | Array | [0,0] | 内边距 | 拟同css ,数组长度为4 |

### 插槽

| name    |
| ------- |
| default |

### APIs

| emit事件      | 参数 | 描述                                                         |
| ------------- | ---- | ------------------------------------------------------------ |
| netWorkChange | -    | 网路发生变化时触发,函数参数可得{isConnected,networkType},isConnected是否连接，networkType网络类型 |

#### ref方法

| 方法名    | 参数                                                | 描述            |      |
| --------- | --------------------------------------------------- | --------------- | ---- |
| showModal | *MessageOptions*，见下方，更多信息请查看message组件 | 显示message弹窗 |      |
| hideModal | -                                                   | 关闭message弹窗 |      |
|           |                                                     |                 |      |

#### MessageOptions

| key(键)   | value(默认值) | 类型    | 可选值     | 描述           | 必填                  |
| --------- | ------------- | ------- | ---------- | -------------- | --------------------- |
| model     | -             | String  |            | 模式           | 否                    |
| title     | -             | String  |            | titel文本      | 是                    |
| icon      | -             | String  |            | icon名称       | 当model为空时，为必填 |
| duration  | 1500（毫秒）  | Number  |            | 持续时间       | 否                    |
| rota      | false         | Boolean | true/false | icon是否旋转   | 否                    |
| bgColor   | -             | ring    |            | 弹窗整体颜色   | 否                    |
| size      | 100           | Number  |            | icon大小       | 否                    |
| isMask    | true          | Boolean | true/false | 是否需要遮罩层 | 否                    |
| iconColor | -             | String  |            | icon颜色       | 否                    |

