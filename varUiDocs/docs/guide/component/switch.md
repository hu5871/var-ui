# switch 开关选择器

 选择开关用于在打开和关闭状态之间进行切换。

<webview url="/pages/form/switch"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <v-card :margin="[0, 0]" :padding="[0, 0]">
        <view class="flex items-center">
          <v-switch v-model="value1" :margin="[0, 10]"></v-switch>
          <v-switch v-model="value2" :width="140" :height="70"></v-switch>
        </view>
      </v-card>
      <v-text :margin="[16, 0]" label="label"></v-text>
      <v-switch v-model="value3" :label="['关', '开']"></v-switch>

      <v-text :margin="[16, 0]" label="形状"></v-text>
      <v-switch v-model="value4" :width="140" :round="6" :label="['关', '开']"></v-switch>

      <v-text :margin="[16, 0]" label="禁用"></v-text>
      <v-switch v-model="value5" :disabled="true" :width="140" :round="6" :label="['关', '开']"></v-switch>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false
    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style></style>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|      参数       |              类型              |  默认值  | 描述                | 可选值                          |
| :-------------: | :----------------------------: | :------: | :------------------ | ------------------------------- |
|   modelValue    |            Boolean             |  false   | v-model双向绑定的值 |                                 |
|      width      |         Number,String          |   120    | 宽度                |                                 |
|     height      |         Number,Stringg         |    60    | 高度                |                                 |
|      round      |             Number             |   9999   | 圆角                |                                 |
|     bgColor     |             String             | \#ededed | 背景色              |                                 |
|  activeBgColor  |             String             | \#2f7cf6 | 为trues是的背景色   |                                 |
|    disabled     |            Boolean             |  false   | 禁用                |                                 |
|    asyncFun     | *Promise*,*Function*,*Boolean* |  false   | 异步控制开关        |                                 |
|      scale      |             Number             |    1     | 缩放                |                                 |
|      space      |             Number             |    2     | 内容贴边距离        |                                 |
|      label      |             Array              |    []    | 文本数组            |                                 |
| leftLabelColor  |             String             |  white   | 左侧文本颜色        |                                 |
| rightLabelColor |             String             |  black   | 右侧文本颜色        |                                 |
|      icon       |            *String*            |    -     |                     |                                 |
|     margin      |             Array              |  [0,0]   | 外边距              | 拟同css ,数组长度可为1、2、3、4 |
|     padding     |             Array              |  [0,0]   | 内边距              | 拟同css ,数组长度可为1、2、3、4 |
| containerClass  |             String             |    -     | 容器的class         |                                 |
| containerStyle  |             Object             |    {}    | 自定义容器的样式    |                                 |
|                 |                                |          |                     |                                 |

### 插槽

无