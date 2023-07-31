# datetime-picker 时间选择器

 此选择器用于选择日期时间。

<webview url="/pages/form/datetime"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :fontSize="34" label="弹窗使用"></v-text>
      <v-cell title="年月日" @click="() => { dateShow1 = true }" :value="date1.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow1" v-model="date1" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="年月" @click="() => { dateShow2 = true }" :value="date2.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow2" mode="year-month" v-model="date2" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="完整时间" @click="() => { dateShow3 = true }" :value="date3.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow3" mode="date-time" v-model="date3" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="时分秒" @click="() => { dateShow4 = true }" :value="date4.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow4" mode="time" v-model="date4" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="时分" @click="() => { dateShow5 = true }" :value="date5.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow5" :isSecond="false" mode="time" v-model="date5" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
    </v-card>
    <v-card :margin="[16,16]">
      <v-text :fontSize="34" label="view使用"></v-text>
      <v-datetime-picker v-model:show="dateShow3" mode="date-time" :isPop="false" v-model="date3" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      dateShow1: false,
      date1: new Date(),
      dateShow2: false,
      date2: new Date(),
      dateShow3: false,
      date3: new Date(),
      dateShow4: false,
      date4: new Date(),
      dateShow5: false,
      date5: new Date(),
    }
  },
  methods: {
    handleDateChange (date) {
      console.log('date', date)
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

|      参数      |           类型           |  默认值  | 描述                                                         | 可选值                            |
| :------------: | :----------------------: | :------: | :----------------------------------------------------------- | --------------------------------- |
|     isPop      |         Boolean          |   true   | 是否弹窗模式                                                 |                                   |
|      show      |         Boolean          |  false   | isPop为true有效                                              |                                   |
|   *isHeader*   |         Boolean          |   true   | 弹窗顶部关闭icon                                             |                                   |
|   modelValue   | *String*,*Number*,*Date* |    -     | 选择的日期                                                   |                                   |
|      mode      |          String          |   date   | 模式date:年月日、year-month:年月、date-item:年月日时分秒、time:为时分秒 | date、year-month、date-time、time |
|    isSecond    |         Boolean          |   true   | 是否需要秒数                                                 |                                   |
|   customData   |          Array           |    []    | 格式为[{value:'2023',text:'2023',children:[]}]               |                                   |
| startTimeStamp |          Number          |    -     | 默认从十年前开始（时间戳）                                   |                                   |
|  endTimeStamp  |          Number          |    -     | 最大的可选择时间为十年后（时间戳）                           |                                   |
|    maxLevel    |          Number          |    6     | 显示多少列（年月日时分秒）完整6列，根据不同的mode会不一样可以通过设置这个属性减少显示内容 |                                   |
|     height     |          Number          |   500    | 高度                                                         |                                   |
| containerStyle |          Object          |    {}    | 自定义容器样式                                               |                                   |
|   itemStyle    |          Object          |    {}    | 自定义每一项样式                                             |                                   |
|   cancelText   |          String          |   取消   | 取消文本                                                     |                                   |
|  confirmText   |          String          |   确认   | 弹窗模式顶部的确认文本                                       |                                   |
|  cancelColor   |          String          | \#606266 | 取消的文本颜色                                               |                                   |
|  confirmColor  |          String          | \#2d8cf0 | 确认的文本颜色                                               |                                   |
|   titleText    |          String          |    -     | 标题文本                                                     |                                   |
|   titleColor   |          String          | \#333333 | 标题文本颜色                                                 |                                   |

### 插槽

无