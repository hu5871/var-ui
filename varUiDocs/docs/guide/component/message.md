# message 消息提示
  消息提示弹出层，向用户反馈执行结果等场景。

<webview url="/pages/feedback/message"></webview>

```vue
<template>
   <v-root>
     <v-message ref="message"></v-message>
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
| width | Number |     350     | 宽度                                             |                                                     |
| height | Number |     3000     | 高度                                        |                   |
| *round* | Number |     30     | 圆角                                                   |                                                     |
| zIndex | Number | 10075 | 层级 |  |
|  |  |  |  |  |

### 默认提供的模式

| 模式名称 | 描述                                    |
| -------- | --------------------------------------- |
| loading  | loading状态，不会自动关闭，需要手动关闭 |
| success  | 成功状态，倒计时关闭                    |
| fail     | 失败状态，倒计时关闭                    |
| warn     | 警告状态，倒计时关闭                    |



### ref方法

| 方法名称  | 参数                | 描述         |
| --------- | ------------------- | ------------ |
| showModal | options对象，见下方 | 显示消息提示 |
| hideModal | 无                  | 关闭消息提示 |
|           |                     |              |

### options参数

| 键        | 值                                         | 描述               |
| --------- | ------------------------------------------ | ------------------ |
| model     | loading、success、fail、warn, 不填为自定义 | 默认提供的模式     |
| icon      | -                                          | icon名称           |
| iconColor | -                                          | icon颜色           |
| size      | 100                                        | icon大小           |
| title     | -                                          | 标题               |
| isMask    | true                                       | 遮罩层             |
| bgColor   | white                                      | 背景色             |
| rota      | false                                      | icon是否旋转       |
| duration  | 1500                                       | 倒计时关闭（毫秒） |



### 插槽

无