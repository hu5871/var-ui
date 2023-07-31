# stepper 步进器

 该组件一般用于商城购物选择物品数量的场景

<webview url="/pages/form/stepper"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
       <v-text label="基本使用 最小值默认0"></v-text>
       <v-stepper :margin="[26,0]" v-model="value1"></v-stepper>
       <v-text label="最大值 10"></v-text>
       <v-stepper :margin="[26,0]" :max="10" v-model="value2"></v-stepper>
       <v-text label="步进 2"></v-text>
       <v-stepper :margin="[26,0]" :step="2"  v-model="value3"></v-stepper>
       <v-text label="默认可小数"></v-text>
       <v-stepper :margin="[26,0]" :step=".5"  v-model="value4"></v-stepper>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      value1:0,
      value2:0,
      value3:0,
      value4:0,
      value5:0,
      value6:0,
    }
  },
  watch:{
   
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

|      参数       |      类型      |  默认值  | 描述                   | 可选值 |
| :-------------: | :------------: | :------: | :--------------------- | ------ |
|   modelValue    |     Number     |    0     | v-model双向绑定的值    |        |
|       min       |     Number     |    0     | 用户可输入的最小值     |        |
|       max       |     Number     | Infinity | 用户可输入的最大值     |        |
|      step       |     Number     |    1     | 每次步进的值，支持小数 |        |
|    *integer*    |    Boolean     |  false   | 只能整数               |        |
|  decimalLength  |    *Number*    |   null   | 显示的小数位数         |        |
|  disabledInput  |    Boolean     |  false   | 禁用输入框             |        |
|    disabled     |    Boolean     |  false   | 禁用全部               |        |
|      width      | Number,String  |   200    | 宽度                   |        |
|     height      | Number,Stringg |    60    | 高度                   |        |
|     bgColor     |     String     | \#f5f5f5 | 背景色                 |        |
|   buttonColor   |     String     | \#2f7cf6 | 按钮颜色               |        |
|      round      |     Number     |    10    | 按钮圆角               |        |
| buttonIconColor |     String     |  white   | icon颜色               |        |

### 插槽

无