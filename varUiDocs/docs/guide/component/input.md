# input 输入框

  在文本框内输入或编辑文字。

<webview url="/pages/form/input"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <view>
        <v-text :margin="[16, 0]" :font-size="24" label="基础示例"></v-text>
        <v-input v-model="value1"></v-input>
        <v-text :margin="[16, 0]" :font-size="24" label="文本域"></v-text>
        <v-input v-model="value2" :height="130" type="textarea"></v-input>
        <v-text :margin="[16, 0]" :font-size="24" label="对齐方式 left | center | right"></v-text>
        <v-input v-model="value3" align="center" :clear="true"></v-input>
        <v-text :margin="[16, 0]" :font-size="24" label="清空内容"></v-text>
        <v-input v-model="value3" :clear="true"></v-input>
        <v-text :margin="[16, 0]" :font-size="24" label="密码类型"></v-text>
        <v-input v-model="value4" :clear="true" :password="true" placeholder="请输入密码"></v-input>
        <v-text :margin="[16, 0]" :font-size="24" label="禁用"></v-text>
        <v-input v-model="value5" :disabled="true" placeholder="无法输入内容"></v-input>
        <v-text :margin="[16, 0]" :font-size="24" label="显示文字数量、最大数量"></v-text>
        <v-input v-model="value6"  :showNumber="true" :maxLength="20" placeholder="无法输入内容"></v-input>
      </view>
    </v-card>
    <v-card :margin="[20, 16]">
      <v-text :margin="[26, 0]" :font-size="34" label="样式"></v-text>
      <v-text :margin="[16, 0]" :font-size="24" label="圆形"></v-text>
      <v-input v-model="value7" :round="9999"></v-input>
      <v-text :margin="[16, 0]" :font-size="24" label="背景色、字体色、占位符样式"></v-text>
      <v-input v-model="value8" bgColor="#52bcf9" :placeholderStyle="{color: 'red'}" fontColor="white"></v-input>
    </v-card>
    <v-card :margin="[20, 16]">
      <v-text :margin="[26, 0]" :font-size="34" label="前、后图标"></v-text>
      <v-text :margin="[15,0]" :font-size="24" label="通过prefixIconProp、suffixIconProp定义 v-icon props"></v-text>
      <v-input v-model="value9"  :isPrefix="true" :prefixIconProp="{name:'icon-search',size: 30}" :isSuffix="true" :suffixIconProp="{name:'icon-scan',size: 30}"></v-input>
      <v-text :margin="[26, 0]" :font-size="24" label="前、后文字 "></v-text>
      <v-text :margin="[15,0]" :font-size="24" label="通过prefixTextConfig、suffixTextConfig定义 v-text props"></v-text>
      <v-input v-model="value9" :isPrefix="true"  prefixText="https://" :isSuffix="true" suffixText=".com" ></v-input>
      <v-text :margin="[26, 0]" :font-size="24" label="前、后插槽 如设置插槽icon和文本需自行定义"></v-text>
      <v-input v-model="value9">
        <template v-slot:left>
          <view class="flex items-center">
            <v-icon name="icon-rocket" :size="30"></v-icon>
          </view>
        </template>
        <template v-slot:right>
          <view class="flex items-center">
            <v-button type="primary" size="mini">确定</v-button>
          </view>
        </template>
      </v-input>

    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: "",
      value5: '',
      value6: 'var-ui',
      value7: '',
      value8: '',
      value9: '',
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

|       参数       |     类型      |    默认值     | 描述                                                         | 可选值                                     |
| :--------------: | :-----------: | :-----------: | :----------------------------------------------------------- | ------------------------------------------ |
|       type       |    String     |     text      | 输入框的类型                                                 | textarea、password、text、number、idcard、 |
|   *modelValue*   |    String     |       -       | 双向绑定的值                                                 |                                            |
|      width       | Number,String |     100%      | 宽度                                                         |                                            |
|     *height*     | Number,String |      68       | 高度                                                         |                                            |
|     bgColor      |    String     |   \#f5f5f5    | 背景颜色                                                     |                                            |
|      round       |    Number     |      18       | 圆角                                                         |                                            |
|    fontColor     |    String     |               | 字体颜色                                                     |                                            |
|     fontSize     |    Number     |      30       | 字体大小                                                     |                                            |
|      align       |    String     |     left      | 对齐方式                                                     | left、center、right                        |
|    autoHeight    |    Boolean    |     true      | type 是textarea生效                                          |                                            |
|      clear       |    Boolean    |     false     | 可清除                                                       |                                            |
|   clearConfig    |    Object     | icon组件props | icon组件props                                                |                                            |
|  passwordConfig  |    Object     | icon组件props | icon组件props                                                |                                            |
|      focus       |    Boolean    |     false     | 聚焦                                                         |                                            |
|    focusColor    |    String     |               | 焦点颜色                                                     |                                            |
|  focusIconColor  |    String     |               | 焦点icon颜色                                                 |                                            |
|   placeholder    |    String     |  请输入内容   | 占位符内容                                                   |                                            |
| placeholderStyle |    Object     |      {}       | 占位符内容样式                                               |                                            |
|     password     |    Boolean    |     false     | 密码框                                                       |                                            |
|    showNumber    |    Number     |     false     | 显示字数统计                                                 |                                            |
|    maxLength     |    Number     |      -1       | 最大输入长度                                                 |                                            |
|     disabled     |    Boolean    |     false     | 禁用                                                         |                                            |
|   confirmHold    |    Boolean    |     false     | 点击键盘右下角按钮时是否保持键盘不收起                       |                                            |
|   confirmType    |    String     |     done      | 设置键盘右下角按钮的文字，仅在 type="text" 时生效。          | send、search、next、go、done               |
|  cursorSpacing   |    Number     |      24       | 光标距离                                                     |                                            |
|  adjustPosition  |   *Boolean*   |     true      | 键盘弹起时，是否自动上推页面                                 |                                            |
|     autoBlur     |    Boolean    |     true      | 是否忽略组件内对文本合成系统事件的处理。为 `false` 时将触发 `compositionstart、compositionend、compositionupdate` 事件，且在文本合成期间会触发 `input` 事件 |                                            |
|   holdKeyboard   |    Boolean    |     false     | focus时，点击页面的时候不收起键盘                            |                                            |
|  prefixIconProp  |    Object     | icon组件props | 见icon组件props                                              |                                            |
|    prefixText    |    String     |       -       | 前缀文本                                                     |                                            |
| prefixTextConfig |    Object     |      {}       | 配置文本，见下方 textConfig                                  |                                            |
|  suffixIconProp  |    Object     | icon组件props | 见icon组件props                                              |                                            |

#### textConfig

说明：为什么搞那么多复杂的配置，因为常常给到的输入框前后缀ui图字体不同、颜色不同，明明很小的问题却过多的使用插槽增加代码量、编写css等，

| key      | value | 描述 |
| -------- | ----- | ---- |
| width    | auto  | 宽   |
| unit     | rpx   | 单位 |
| color    | -     | 颜色 |
| fontSize | 28    | 大小 |
|          |       |      |



### 插槽

| name  | 描述 |
| ----- | ---- |
| left  | 左侧 |
| right | 右侧 |
|       |      |

### 事件

| 名称                 | 参数  | 描述                                                         |
| -------------------- | ----- | ------------------------------------------------------------ |
| keyboardheightchange | event | 键盘高度发生变化的时候触发此事件，event.detail = `{height: height, duration: duration}` |
| input                | value | 输入文本触发                                                 |
| change               | value | 输入文本触发                                                 |
| clear                |       | 清空触发                                                     |
| focus                | *e*   | 输入框聚焦时触发                                             |
| blur                 | *e*   | 输入框失去焦点时触发                                         |

