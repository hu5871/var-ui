# popover 气泡提示
  点击指定内容在周围弹出气泡提示，内容可自定义

<webview url="/pages/feedback/popover"></webview>

```vue
<template>
   <v-root>
    <v-popover bgColor="#6e6e6e">
          <v-button type="primary" size="small">下方显示</v-button>
          <template v-slot:content>
            <v-card :margin="[0]" :isRow="true" bgColor="#6e6e6e"   :width="350" _contentClass="justify-between">
             <v-button >按钮1</v-button>
             <v-button >按钮2</v-button>
             <v-button >按钮3</v-button>
            </v-card>
          </template>
        </v-popover>
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
| position | String |     b     | 在哪弹出                                | b、t、l、r |
| zIndex | String |     1000     | 层级                                   |                   |
| *isMask* | Boolean |  true   | 是否需要遮罩层                                                  |                                                     |
| spce | Number | 5 | 如果气泡框跑出屏幕适口，设置返回的安全贴边距离 |  |
|  pointerColor  | String |  -  | 尖角的颜色，为空时跟随bgColor                            |  |
|  round  | Number |     10     | 圆角                                                         |  |
| bgColor | String |   #6e6e6e | 背景颜色                                                     |                                                     |
| width | String,Number |  auto  | 宽度                                                     |  |
| height | String,Number |  auto   | 高度                                                |  |
| stopShowClickEvent | Boolean |  false  | 停止默认的点击事件展示 气泡框 ，（内容复杂 事件交互无法确定）,一般使用不到 |  |

### 插槽

| name    | 描述                 |      |
| ------- | -------------------- | ---- |
| default | 被点击的插槽         |      |
| content | 点击后显示的内容插槽 |      |
|         |                      |      |

