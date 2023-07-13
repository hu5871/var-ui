# modal 模态框
  弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。

<webview url="/pages/feedback/modal"></webview>

```vue
<template>
   <v-root>
    <v-modal v-model:show="show1" title="标题1">
      <view class="overflow-y-auto">
        <view v-for="item in 100" :key="item">
          {{ item }}
        </view>
      </view>
    </v-modal>
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
| show | Boolean |     false     | 显示与隐藏                                                |                                                     |
| width | Number,String |     600     | 宽度                                    |                   |
| *height* | Number,String |     400     | 高度                                                      |                                                     |
| round | Number |    30    | 圆角                            |  |
|  title  | String |  -  | 顶部标题                                           |  |
|  zIndex  | Number |     30     | 层级                                             |  |
| asyncClose | Function,Promise |    ()=>true    | function和promise返回值决定关闭                   |                                                     |
| overlayClickClose | Boolean |   true   | 点击遮罩层关闭                                 |        |
|    btnReverse     |     Boolean      |  false   | 翻转两个按钮的位置              |        |
| showCancelButton  |     Boolean      |   true   | 显示取消按钮                    |        |
| showConfirmButton |     Boolean      |   true   | 显示确认按钮                    |        |
|    capsuleBtn     |     Boolean      |  false   | 胶囊按钮                        |        |
|    confirmText    |      String      |   确定   | 确认按钮的文本                  |        |
|    cancelText     |      String      |   取消   | 取消按钮的文本                  |        |
|  confirmBgColor   |      String      | \#69aaf8 | 确认按钮的背景颜色              |        |
|   cancelBgColor   |      String      |  white   | 取消按钮的背景颜色              |        |
|   confirmColor    |      String      |  white   | 确认按钮的文本颜色              |        |
|    cancelColor    |      String      |  black   | 取消按钮的文本颜色              |        |

### 插槽

| name    | 描述              |      |
| ------- | ----------------- | ---- |
| head    | 顶部title处的插槽 |      |
| default | 内容的插槽        |      |
|         |                   |      |

### ref方法

| 方法名 | 参数 | 描述       |
| ------ | ---- | ---------- |
| open   | 无   | 打开模态框 |
| close  | 无   | 关闭模态框 |
|        |      |            |

