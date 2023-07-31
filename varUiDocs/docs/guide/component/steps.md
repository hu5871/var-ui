# steps 步骤条
该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。需要配合steps-item

<webview url="/pages/show/steps"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-steps :current="current">
        <v-steps-item  :title="item.title" v-for="(item, index) in list" :key="index">
        </v-steps-item>
      </v-steps>
    </v-card>
    <v-card :margin="[16]">
      <v-steps :current="current1">
        <v-steps-item :error="index==1"  :title="item.title" v-for="(item, index) in list" :key="index">
        </v-steps-item>
      </v-steps>
    </v-card>
    <v-card :margin="[16]" :height="600">
      <v-steps :height="550" :vertical="true" :current="current2">
        <v-steps-item   :title="item.title" v-for="(item, index) in list" :key="index">
        </v-steps-item>
      </v-steps>
    </v-card>
    <v-card :margin="[16]" :height="600">
      <v-steps :height="550" :vertical="true" :current="current3">
        <v-steps-item :error="index==1"  :title="item.title" v-for="(item, index) in list" :key="index">
          <v-text color="#ccc" :fontSize="28" v-if="index===0">你的审核失败，请你提交更规范的代码</v-text>
        </v-steps-item>
      </v-steps>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      current: -1,
      current1: 1,
      current2:-1,
      current3:1,
      list: [
        {
          title: '开始'
        },
        {
          title: '审核'
        },
        {
          title: '下发'
        },
        {
          title: '结束'
        },
      ],
      timer:null
    }
  },
  mounted(){
  }
}
</script>

<style></style>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持 | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| current | Number | 0 | 当前进度 |  |
| *vertical* | Boolean | false | 纵向 |  |
| height | *Number*,*String* | - | vertical 为true时必须填写 height |  |
| unit |    String    | rpx | 像素单位 |  |
| iconColor | *String* | #ccc | icon默认颜色 |  |
| iconSize | Number | 40 | 字体颜色 |  |
|   icon   | String | icon-ellipse | icon            |                                           |
| activeIcon | String | icon-checkmark-circle-outline | 激活时的icon         |                                           |
|   activeColor   |  String |    \#2d8cf0    | 激活时的icon颜色                     |                                           |
| lineColor |    String     | \#dfe1e5 | 线条的颜色                 |  |
| color |    String     | \#323941 | 字体颜色                       |                                           |

### steps-item Props

|    参数    |   类型   |          默认值           | 描述           | 可选值 |
| :--------: | :------: | :-----------------------: | :------------- | ------ |
|   title    |  String  |             -             | 标题           |        |
|   *icon*   |  String  |             -             | icon           |        |
| iconColor  | *String* |             -             | icon颜色       |        |
|  iconSize  |  Number  |            40             | icon大小       |        |
| activeIcon |  String  |             -             | 激活的icon     |        |
|   error    | Boolean  |           false           | 中断结束的状态 |        |
| errorIcon  |  String  | icon-close-circle-outline | icon           |        |
| errorColor |  String  |         \#ee3f4d          | 激活时的icon   |        |
|  fontSize  |  Number  |            26             | 字体大小       |        |
|   color    |  String  |         \#323941          | 字体颜色       |        |
|            |          |                           |                |        |



### 插槽

| name    | 描述                             |      |
| ------- | -------------------------------- | ---- |
| default | 为垂直方向时，设置右侧内容的插槽 |      |

### 事件

无
