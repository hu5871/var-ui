# tabs 选项卡
选项卡 可左右滑动,切换过度

<webview url="/pages/show/tabs"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
      <v-tabs v-model="list" v-model:active="active">
      </v-tabs>
     <v-tabs v-model="list1" v-model:active="active1" iconActiveColor="#fecc11" lineColor="#fecc11" activeColor="#fecc11">
      </v-tabs>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      active:'',
      active1:'',
      list: [
        {
          name: 'title1',
          title: '标题'
        },
        {
          name: 'title2',
          title: '周末要锻炼身体'
        },
        {
          name: 'title3',
          title: '体育中心'
        },
        {
          name: 'title4',
          title: '2002年的第一场雪'
        },
        {
          name: 'title5',
          title: '汽车'
        },
      ],
      list1: [
        {
          name: 'title1',
          title: '标题',
          icon: 'icon-baseball-outline'
        },
        {
          name: 'title2',
          title: '周末要锻炼身体',
          icon: 'icon-barbell'

        },
        {
          name: 'title3',
          title: '体育中心',
          icon: 'icon-body'

        },
        {
          name: 'title4',
          title: '2002年的第一场雪',
          icon: 'icon-cloudy'

        },
        {
          name: 'title5',
          title: '汽车',
          icon: 'icon-cart-outline'

        },
      ]
    }
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
| modelValue | Array | [] | 标签数组，元素为对象，如[{name: '',title:"",icon:""}] |  |
| *color* | String | \#1F2937 | 标签文本颜色 |  |
| active | String\|Number | '' | 选中标签的name属性 |  |
| sticky |    Boolean    | false | 粘性定位 |  |
|    iconColor    |     String     |  \#ccc   | icon颜色                                              |                                 |
| iconActiveColor |     String     | #2d8cf0  | 选中的icon颜色                                        |  |
|   width   | String\Number |    auto | 自定义宽度                         |                                           |
|  height   | String\Number |    auto    | 自定义高度                         |                                           |
|   round   |    Number     |    0    | 圆角                               |                                           |
|   icon    |    String     |    -     | icon名称                           |  |
|    lineWidth    |     Number     |    0     | 底部线宽，默认跟随tab变化                             |                                           |
| lineColor |    String    | \#2d8cf0 | 线的颜色                   |                                           |
| fontSize |    Number     |    -     | 字体大小                         |                                           |
|  margin   |     Array     |  [0,0]   | 外边距                             | 拟同css ,数组长度可为1、2、3、4 |
| padding | Array | [0,0] | 内边距 | 拟同css ,数组长度可为1、2、3、4 |
|     center      |    Boolean     |  false   | 标签居中                                              |                                 |
|    tabWidth     | String\Number  |   auto   | tab宽度                                               |                                 |
|    tabHeight    | String\Number  |    88    | tab高度                                               | |
| tabConentHeight | String\Number  |   auto   | tabs 容器高度                                         | |
|     zIndex      |     Number     |    1     | z-index                                               | |
|      unit       |     string     |   rpx    | 单位                                                  | |
|                 |                |          |                                                       | |

### 插槽

无

### 事件

| 事件名 | 参数 |
| ------ | ---- |
| change | name |

