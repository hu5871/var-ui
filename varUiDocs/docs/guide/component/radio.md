# radio 单选框

单选框组件一般用于单选择的场景，配合 radio-group

<webview url="/pages/form/radio"></webview>

```vue
<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[26, 0]" label="基本例子"></v-text>
      <v-radio-group v-model="value">
        <v-radio label="苹果" name="apple"> </v-radio>
        <v-radio label="猕猴桃" name="kiwifruit"> </v-radio>
        <v-radio label="橙子" name="orange"> </v-radio>
      </v-radio-group>
      <v-text :margin="[26, 0]" label="图标"></v-text>
      <v-radio-group v-model="value">
        <v-radio label="苹果" name="apple" icon="icon-logo-apple"> </v-radio>
        <v-radio label="耳机" name="headset" icon="icon-headset"> </v-radio>
        <v-radio label="锤子" name="hammer" icon="icon-hammer"> </v-radio>
      </v-radio-group>
      <v-text :margin="[26, 0]" label="纵向"></v-text>
      <v-radio-group direction="col" v-model="value">
        <v-radio label="苹果" name="apple"> </v-radio>
        <v-radio label="猕猴桃" name="kiwifruit"> </v-radio>
        <v-radio label="橙子" name="orange"> </v-radio>
        <v-radio
          bgColor="#f7c444"
          activeBgColor="#ea3a24"
          label="颜色"
          name="color"
        >
        </v-radio>
        <v-radio
          label="异步选中"
          name="async"
          :asyncSelectedFun="asyncSelectedFun"
        >
        </v-radio>
      </v-radio-group>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data() {
    return {
      value: "apple",
    };
  },
  methods: {
    asyncSelectedFun() {
      this.$refs.root.showModal({ model: "loading", text: "稍等" });
      return new Promise((resolve) => {
        setTimeout(() => {
          this.$refs.root.hideModal();
          resolve(true);
        }, 2000);
      });
    },
  },
};
</script>

<style></style>
```

### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

包含**icon**组件的 props

|       参数       |              类型              |      默认值       | 描述                                  | 可选值        |
| :--------------: | :----------------------------: | :---------------: | :------------------------------------ | ------------- |
|    modelValue    |    _String_,Number,Boolean     |       false       | 是否选中，单独使用时可配置            |               |
|       mode       |             String             |       radio       | 轮廓模式                              | radio、button |
|       name       |             String             |         -         | 当配合 radio-group 使用时，它是必填的 |               |
|    _disabled_    |           _Boolean_            |       false       | 禁用                                  |               |
|     fontSize     |             Number             |        28         | 字体大小                              |               |
|  containerClass  |             String             |         -         | 容器的类名                            |               |
|  containerStyle  |             Object             |        {}         | 容器的样式                            |               |
|       size       |             Number             |        42         | icon 大小                             |               |
|      border      |        _String_,Number,        |         2         | 边框粗细                              |               |
|   borderColor    |             String             |     \#d1d1d1      | 边框颜色                              |               |
|      round       |        _Number_,_Array_        |        [6]        | 圆角                                  |               |
|     bgColor      |            _String_            |       white       | 背景颜色                              |               |
|       icon       |             String             | checkmark-outline | icon                                  |               |
|  activeBgColor   |             String             |      #007aff      | 选中的背景颜色                        |               |
| iconActiveColor  |             String             |       white       | 选中的 icon 颜色                      |               |
|      label       |             String             |                   | 文本                                  |               |
|   labelMargin    |             Array              |       [0,5]       | margin 相同的使用                     |               |
| asyncSelectedFun | _Promise_,_Function_,_Boolean_ |       false       | 异步控制选中                          |               |

### radio-group Props

| 参数       | 类型    | 默认值   | 描述              | 可选值   |
| ---------- | ------- | -------- | ----------------- | -------- |
| modelValue | Array   | []       | 选中的每一项 name |          |
| disabled   | Boolean | false    | 禁用              |          |
| direction  | String  | row      | 改变 radio 的方向 | row、col |
| max        | Number  | Infinity | 可选中的最大长度  |          |

### 插槽

### 事件

无
