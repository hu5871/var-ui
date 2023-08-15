# image 图片
  image 添加了 loading状态，加载失败的底图资源

<webview url="/pages/show/image"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
     <v-image :width="300" :height="300" src="https://images.unsplash.com/photo-1685118148066" ></v-image>
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
| src | String | - | 资源链接                                                     |  |
| *round* | Number,[Number] | [0] | 圆角 | 为数组是拟同css 4个值 |
| width | Number,String | 300 | 宽度 |  |
| height |    Number,String    | 300 | 高度 |  |
| lazyLoad | Boolean | true | 图片懒加载。只针对page与scroll-view下的image有效 |  |
| loading | Boolean | true | 是否显示loading |  |
|   isPreview   | *Boolean* |    false    | 点击预览图片                 |                                           |
| showMenuByLongPress | Boolean |    false    | 开启长按图片显示识别小程序码菜单         |                                           |
|   mode   |    String    |    aspectFill    | 图片裁剪、缩放的模式 参考 [uniapp image mode](https://uniapp.dcloud.net.cn/component/image.html#mode) |                                           |
| loadSize |    Number    |    60    | loading Icon的大小           |  |
| loadIcon |    String     | loading | icon名称                         |                                           |
|       margin        |      Array      |   [0,0]    | 外边距                                                       | 拟同css ,数组长度可为1、2、3、4 |
|       padding       |      Array      |   [0,0]    | 内边距                                                       | 拟同css ,数组长度可为1、2、3、4 |
|       _class        |     String      |     -      | 最外层容器的class类名 多个空格隔开                           |                                 |
|       _style        |     Object      |     {}     | 最外层容器的样式                                             |                                 |

### 插槽

| name    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| default | 默认等同图片宽高的绝对定位插槽，可根据需求填充内容，修改内容ZIndex使内容在图片上层 |
| loading | 自定义加载loading内容                                        |

### 事件

| 事件名 | 参数 |
| ------ | ---- |
| click  |      |

