# slider 滑动选择器

 手动选择一个区间范围的场景。

<webview url="/pages/form/slider"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-text label="基本使用 默认step为1 有步进感"></v-text>
      <v-slider :margin="[26, 0]" :showPopover="true" v-model="value1"></v-slider>
      <v-text label="基本使用 不使用step 自然滑动"></v-text>
      <v-slider :margin="[26, 0]" :natureMove="true" popoverPostion="b" :showPopover="true" v-model="value1"></v-slider>
      <v-text label="区间"></v-text>
      <v-slider :range="true" :margin="[26, 0]" popoverPostion="b" :showPopover="true" v-model="value2"></v-slider>
      <v-text label='垂直方向'></v-text>
      <v-slider  :margin="[26, 0]" direction="col" :width="6" :height="200" popoverPostion="r" :showPopover="true" v-model="value3"></v-slider>
      <v-text label='垂直方向 区间'></v-text>
      <v-slider  :margin="[26, 0]" :range="true" direction="col" :width="6" :height="300" popoverPostion="r" :showPopover="true" v-model="value2"></v-slider>
    </v-card>

    <v-card >
      <v-text label="自定义 button"></v-text>
      <v-slider :margin="[26, 0]" :showPopover="true" v-model="value1">
        <template v-slot:btn>
          <v-button type="primary" :height="20"></v-button>
        </template>
      </v-slider>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components:{
  },
  data () {
    return {
      value1: 0,
      value2: [0,10],
      value3: [0,100],
      value4: 0,
      value5: 0,
      value6: 0,
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

|      参数      |     类型      |  默认值  | 描述                                         | 可选值   |
| :------------: | :-----------: | :------: | :------------------------------------------- | -------- |
|   modelValue   | Number,Array  |    0     | 用于v-model双向绑定,范围选择时需要是一个数组 |          |
|  showPopover   |    Boolean    |  false   | 显示的Popover气泡框                          |          |
| popoverPostion |    Boolean    |    t     | 气泡框显示的位置                             |          |
|      step      |    Number     |    1     | 步进                                         |          |
|    *range*     |    Boolean    |  false   | 范围区间                                     |          |
|   natureMove   |   *Boolean*   |  false   | 自然滑动，step有步进感，设置后step无效       |          |
|   direction    |    String     |   row    | row横向，col为纵向                           | row、col |
|  pointerColor  |    String     | \#cfccc9 | 气泡框小箭头的颜色                           |          |
| bubbleBgColor  |    String     | \#b3b5b8 | 气泡框背景颜色                               |          |
|     width      | Number,String |   100%   | 宽度                                         |          |
|     height     | Number,String |    6     | 高度（注意：纵向时必须自定义宽高）           |          |
|     round      |    Number     |  99999   | 拖动的元素圆角                               |          |
|   lineColor    |    String     | \#e0e0e0 | 线条颜色                                     |          |
|  activeColor   |    String     | \#3c9cff | 选中的区间颜色                               |          |
|      max       |    Number     |   100    | 最大值                                       |          |
|      min       |    Number     |    0     | 最小值                                       |          |
|  buttonWidth   |    Number     |    40    | 拖动元素的宽                                 |          |
|  buttonHeight  |    Number     |    40    | 拖动元素的高                                 |          |
| buttonBgColor  |   *String*    | \#e0e0e0 | 拖动元素的颜色                               |          |
|                |               |          |                                              |          |

### 插槽

| name | 描述           |      |
| ---- | -------------- | ---- |
| btn  | 拖动元素的插槽 |      |

