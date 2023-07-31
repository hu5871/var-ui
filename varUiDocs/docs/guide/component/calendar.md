# calendar 日历

 此组件用于单个选择日期，范围选择日期等，提供两种模式直接展示view、弹窗模式

<webview url="/pages/form/calendar"></webview>

```vue
<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card :margin="[20, 16]">
      <v-button >打开日历弹窗</v-button>
      <v-calendar v-model:show="customShow" isPop="true" v-model="customValue"></v-calendar>
    </v-card>
    <v-text>直接展示日历</v-text>
     <v-calendar  isPop="false" v-model="customValue"></v-calendar>
    <v-popup mode="center" v-model:show="showCustomModel">
      <v-card :width="500">
        <view class="flex justify-center">
          <v-text :margin="[20, 0]" :fontSize="36" label="自定义颜色"></v-text>
        </view>
        <v-input :margin="[10, 0]" :isPrefix="true" :clear="true" prefixText="背景颜色" v-model="customMap.bgColor"></v-input>
        <v-input :margin="[10, 0]" :isPrefix="true" :clear="true" prefixText="文字颜色" v-model="customMap.color"></v-input>
        <v-button @click="confrimColor" :block="true" type="primary" :round="9999">确定</v-button>
      </v-card>
    </v-popup>
  </v-root>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      mode: 'single',
      isPop: true,
     
      customShow: false,
      customValue: [],
    }
  },
  methods: {
   
    confirmFun (val) {
      return new Promise(res => {
        if (!val?.length) {
          this.$refs.root.showModal({ model: 'fail', title: '请选择日期' })
          return
        }
        this.$refs.root.showModal({ model: 'loading', title: '请稍等...' })
        setTimeout(() => {
          this.$refs.root.hideModal()
          res(true)
        }, 1000)
      })
    },
    handleClose () {
    },
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

|      参数       |        类型        |     默认值      | 描述                                             | 可选值                  |
| :-------------: | :----------------: | :-------------: | :----------------------------------------------- | ----------------------- |
|   modelValue    |      *Array*       |       []        | 选中的日历时间                                   |                         |
|     *mode*      |      *String*      |     single      | single:单选、multiple:多选、range:范围           | single、multiple、range |
|      show       |      Boolean       |      false      | 显示日历弹窗，isPop为true时有效                  |                         |
|      isPop      |      Boolean       |      true       | 是否弹窗模式                                     |                         |
|   showHeader    |      Boolean       |      true       | 是否显示顶部关闭icon                             |                         |
|    readonly     |      Boolean       |      false      | 只读                                             |                         |
|   rangeLabel    |       Array        | ['开始','结束'] | 范围模式开始和结束的文本                         |                         |
|  asyncSelected  | Function,*Promise* |  (item)=>true   | 根据函数返回值决定是否选中，自行通过item参数判断 |                         |
|   confirmText   |       String       |      确定       | 底部确认按钮的文本                               |                         |
|   confirmFun    |      Function      |   ([])=>true    | 根据函数返回值决定是否符合要求，自行通过参数判断 |                         |
|     format      |      *String*      |   yyyy-mm-dd    | modelValue的每一项的格式                         |                         |
|      space      |       Number       |        4        | 日历每一项的距离                                 |                         |
|  selectBgColor  |       String       |    \#3c9cff     | 选中的背景颜色                                   |                         |
|   selectColor   |       String       |      \#fff      | 选中的文本颜色                                   |                         |
|      round      |       Number       |        6        | 圆角                                             |                         |
| selectItemStyle |       Object       |       {}        | 自定义选中样式                                   |                         |

### 插槽

| name  | 描述                                     |
| ----- | ---------------------------------------- |
| title | 弹窗模式 顶部的插槽                      |
| item  | 自定义每一项插槽 value为这一项的详细日期 |
|       |                                          |

### 事件

无