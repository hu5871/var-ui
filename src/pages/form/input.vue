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
import vRoot from '../../var-ui/components/v-root/v-root.vue'
import vCard from '../../var-ui/components/v-card/v-card.vue'
import vInput from '../../var-ui/components/v-input/v-input.vue'
import vText from '../../var-ui/components/v-text/v-text.vue'
import vIcon from '../../var-ui/components/v-icon/v-icon.vue'
import vButton from '../../var-ui/components/v-button/v-button.vue'
export default {
  components: {
    vCard,
    vInput,
    vText,
    vRoot,
    vIcon,
    vButton
  },
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