# text 文本
  普通文本容器

<webview url="/pages/common/text"></webview>

```vue
<template>
    <v-text label='文本'>
    </v-root>
    <v-text >
       文本
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
| color | String | - | 文本颜色 | 合法的颜色值 |
| width | String\|Number | auto | 容器宽度 | String类型支持带单位，Number类型根据unit拼接单位 |
| fontSize | Number | 28 | 字体大小 |  |
| textOverflow | Number | 0 | 溢出隐藏 | 0:不隐藏 1：为一行  2： 两行 |
| unit |     String     | rpx | 单位 |  |
| containerClass | String | - | 容器类名 |  |
| label | String | - | 文本内容 ，也可直接在标签写 |  |
|     margin     |     Array      | [0,0]  | 外边距                      | 拟同css ,数组长度可为1、2、3、4                  |
|    padding     |     Array      | [0,0]  | 内边距                      | 拟同css ,数组长度可为1、2、3、4                  |
|                |                |        |                             |  |
|  |  |  |  |  |

### 插槽

| name    |
| ------- |
| default |

