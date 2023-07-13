# button 按钮
  卡片 作为容器，轻松配置边距、颜色、阴影、宽高、flex:row|col


<webview url="/pages/common/button"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">

    <v-card bgColor="#ccc" :margin="[16, 16]">
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <v-button>按钮</v-button>
      <v-text :margin="[16, 0]" label="按钮Size"></v-text>
      <view class="flex flex-wrap">
        <v-button :margin="[16, 10]" size="mini">mini</v-button>
        <v-button :margin="[16, 10]" size="small">small</v-button>
        <v-button :margin="[16, 10]" size="normal">normal</v-button>
        <v-button :margin="[16, 10]" size="middle">middle</v-button>
        <v-button :margin="[16, 10]" size="large">large</v-button>
      </view>
      <v-button :margin="[16, 0]" :block="true">block</v-button>
    </v-card>
    <v-card bgColor="#ccc" :margin="[16, 16]">
      <view class="flex flex-wrap justify-around">
        <v-button type="primary">主要</v-button>
        <v-button type="warning">警告</v-button>
        <v-button type="default">默认</v-button>
        <v-button type="success">成功</v-button>
      </view>
    </v-card>
    <v-card bgColor="#ccc" :margin="[16, 16]">
      <view class="flex flex-wrap justify-around">
        <v-button plain type="primary">镂空</v-button>
      </view>
    </v-card>
    <v-card bgColor="#ccc" :margin="[16, 16]">
      <v-text :margin="[16, 0]" label="图标"></v-text>
      <view class="flex">
        <v-button :margin="[0, 20]" type="primary" icon="icon-add-circle" iconColor="white">添加</v-button>
        <v-button type="primary" icon="icon-loading" iconColor="white" :iconRota="true">加载</v-button>
      </view>
      <v-text :margin="[16, 0]" label="圆角"></v-text>
      <view class="flex">
        <v-button :margin="[0, 20]" :round="999" type="primary" icon="icon-add-circle" iconColor="white">添加        </v-button>
        <v-button type="primary" :round="999" icon="icon-loading" iconColor="white" :iconRota="true">加载</v-button>
      </view
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
| type | String | - | 按钮的样式类型 | primary、warning、default、success |
| *size* | String | normal | 按钮大小 | block、mini、small、normal、middle、large |
| open-type | String | - | 开放能力 |  |
| hover-class | String | v-button__hover | 点击效果的类名 |  |
| hover-start-time | Number | 20 | 按住后多久出现点击态，单位毫秒 |  |
| hover-stay-time | Number | 70 | 手指松开后点击态保留时间，单位毫秒 |  |
| block | Boolean | false | 是否占满剩余宽度 |  |
| plain |    Boolean    | false | 镂空 |  |
| bgColor | String | - | 背景颜色 |  |
| color | String | \#1F2937 | 字体颜色 |  |
|   width   | String\Number |    0     | 自定义宽度                         |                                           |
|  height   | String\Number |    0     | 自定义高度                         |                                           |
|   round   |    Number     |    13    | 圆角                               |                                           |
|   icon    |    String     |    -     | icon名称                           |  |
| iconColor |    String     |    -     | icon颜色                           |                                           |
| iconRota  |    Boolean    |  false   | icon是否旋转                       |                                           |
| iconSize  |    Number     |    -     | icon大小                           |                                           |
|  margin   |     Array     |  [0,0]   | 外边距                             | 拟同css ,数组长度可为1、2、3、4 |
| padding | Array | [0,0] | 内边距 | 拟同css ,数组长度可为1、2、3、4 |
| _class | String | - | 最外层容器的class类名 多个空格隔开 | |
| _style | Object | {} | 最外层容器的样式 | |
| fontSize | Number | 0 | 字体大小，默认从size获取对应的大小 | |

### 插槽

| name    |
| ------- |
| default |

### 事件

| 事件名         | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| error          | 当使用开放能力时，发生错误的回调                             |
| opensetting    | 在打开授权设置页并关闭后回调                                 |
| launchapp      | 从小程序打开 App 成功的回调                                  |
| click          |                                                              |
| getphonenumber | 获取用户手机号回调                                           |
| getuserinfo    | open-type="getUserInfo"，用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo |

