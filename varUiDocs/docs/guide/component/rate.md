# rate 评分

 Rate 评分是常见的评分组件，多用于售后等评价情景

<webview url="/pages/form/rate"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
       <v-text label="基本使用"></v-text>
       <v-rate :margin="[20,0]" :count="5" v-model="value1"></v-rate>
       <v-text label="支持一半"></v-text>
       <v-rate :margin="[20,0]" :count="5" :half="true" v-model="value2"></v-rate>
       <v-text label="图标替换"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart" activeIcon="icon-heart" :count="5" :half="true" v-model="value3"></v-rate>
       <v-text label="最小选中数量"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart" :min="3" activeIcon="icon-heart" :count="5" :half="true" v-model="value4"></v-rate>
       <v-text label="禁用"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart" :disabled="true" activeIcon="icon-heart" :count="5" :half="true" v-model="value5"></v-rate>
       <v-text label="只能点击"></v-text>
       <v-rate :margin="[20,0]" icon="icon-heart"  :touchable="false" activeIcon="icon-heart" :count="5" :half="true" v-model="value6"></v-rate>
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
    value4(val){
      console.log('val',val)
    }
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

|    参数     |   类型   |    默认值    | 描述                                        | 可选值                        |
| :---------: | :------: | :----------: | :------------------------------------------ | ----------------------------- |
| modelValue  |  Number  |      0       | 用于v-model双向绑定选中的星星数量 (默认 0 ) |                               |
|    count    |  Number  |      5       | 显示的星星数量                              |                               |
|   *color*   |  String  |   \#b2b2b2   | 颜色                                        |                               |
| activeColor | *String* |   \#FA3534   | 选中时的颜色                                |                               |
|    half     | Boolean  |    false     | 是否允许半星选择 （默认 false ）            |                               |
|    icon     |  String  | star-outline | icon                                        |                               |
| activeIcon  |  String  |     star     | 选中的icon                                  |                               |
|  itemSpace  |  Number  |      30      | 星星之间的距离                              |                               |
|     min     |  Number  |      0       | 最少选中星星的个数 （默认 0 ）              |                               |
|    size     |  Number  |      40      | 星星的大小                                  |                               |
|  disabled   | Boolean  |    false     | 禁用                                        |                               |
|  readonly   | Boolean  |    false     | 只读                                        |                               |
|  touchable  | Boolean  |     true     | 可滑动选中星星                              |                               |
|  itemStyle  |  Object  |      {}      | 自定义每一项样式                            |                               |
|   margin    |  Array   |    [0,0]     | 外边距                                      | 拟同css ,数组长度为1、2、3、4 |
|   padding   |  Array   |    [0,0]     | 内边距                                      | 拟同css ,数组长度为1、2、3、4 |

### 插槽

无