# checkbox 复选框

复选框组件一般用于需要多个选择的场景，可配合checkbox-group

<webview url="/pages/form/checkbox"></webview>

```vue
<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[26, 0]" label="基本例子"></v-text>
      <v-checkbox-group v-model="value1">
        <v-checkbox label="苹果" name="apple">
        </v-checkbox>
        <v-checkbox label="猕猴桃" name="kiwifruit">
        </v-checkbox>
        <v-checkbox label="橙子" name="orange">
        </v-checkbox>
      </v-checkbox-group>
      <v-text :margin="[26, 0]"  label="限制最多一个可选中"></v-text>
      <v-checkbox-group :max="1" v-model="value2">
        <v-checkbox label="苹果" name="apple">
        </v-checkbox>
        <v-checkbox label="猕猴桃" name="kiwifruit">
        </v-checkbox>
        <v-checkbox label="橙子" name="orange">
        </v-checkbox>
      </v-checkbox-group>
      <v-text :margin="[26, 0]"  label="图标"></v-text>
      <v-checkbox-group  v-model="value3">
        <v-checkbox label="苹果" name="apple" icon="icon-logo-apple">
        </v-checkbox>
        <v-checkbox label="耳机" name="headset" icon="icon-headset">
        </v-checkbox>
        <v-checkbox label="锤子" name="hammer" icon="icon-hammer">
        </v-checkbox>
      </v-checkbox-group>
      <v-text :margin="[26, 0]" label="纵向"></v-text>
      <v-checkbox-group direction="col" v-model="value4">
        <v-checkbox label="苹果" name="apple">
        </v-checkbox>
        <v-checkbox label="猕猴桃" name="kiwifruit">
        </v-checkbox>
        <v-checkbox label="橙子" name="orange">
        </v-checkbox>
        <v-checkbox bgColor="#f7c444" activeBgColor="#ea3a24" label="颜色" name="color">
        </v-checkbox>
        <v-checkbox label="异步选中" name="async" :asyncSelectedFun="asyncSelectedFun">
        </v-checkbox>
      </v-checkbox-group>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      value1: ['apple'],
      value2: [],
      value3: [],
      value4: [],
    }
  },
  methods:{
    asyncSelectedFun(){
      this.$refs.root.showModal({model:'loading',text:'稍等'})
      return  new Promise(resolve=>{
        setTimeout(()=>{
          this.$refs.root.hideModal()
          resolve(true)
        },2000)
      })
    }
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

包含**icon**组件的props

|       参数       |              类型              |      默认值       | 描述                                   | 可选值 |
| :--------------: | :----------------------------: | :---------------: | :------------------------------------- | ------ |
|    modelValue    |    *String*,Number,Boolean     |       false       | 是否选中，单独使用时可配置             |        |
|       name       |             String             |         -         | 当配合checkbox-group使用时，它是必填的 |        |
|    *disabled*    |           *Boolean*            |       false       | 禁用                                   |        |
|     fontSize     |             Number             |        28         | 字体大小                               |        |
|  containerClass  |             String             |         -         | 容器的类名                             |        |
|  containerStyle  |             Object             |        {}         | 容器的样式                             |        |
|       size       |             Number             |        42         | icon大小                               |        |
|      border      |        *String*,Number,        |         2         | 边框粗细                               |        |
|   borderColor    |             String             |     \#d1d1d1      | 边框颜色                               |        |
|      round       |        *Number*,*Array*        |        [6]        | 圆角                                   |        |
|     bgColor      |            *String*            |       white       | 背景颜色                               |        |
|       icon       |             String             | checkmark-outline | icon                                   |        |
|  activeBgColor   |             String             |      #007aff      | 选中的背景颜色                         |        |
| iconActiveColor  |             String             |       white       | 选中的icon颜色                         |        |
|      label       |             String             |                   | 文本                                   |        |
|   labelMargin    |             Array              |       [0,5]       | margin相同的使用                       |        |
| asyncSelectedFun | *Promise*,*Function*,*Boolean* |       false       | 异步控制选中                           |        |

### checkbox-group Props

| 参数       | 类型    | 默认值   | 描述               | 可选值   |
| ---------- | ------- | -------- | ------------------ | -------- |
| modelValue | Array   | []       | 选中的每一项name   |          |
| disabled   | Boolean | false    | 禁用               |          |
| direction  | String  | row      | 改变checkbox的方向 | row、col |
| max        | Number  | Infinity | 可选中的最大长度   |          |



### 插槽

### 事件

无