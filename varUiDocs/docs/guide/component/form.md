# form 表单

  此组件一般用于表单场景，可以配置输入框、单选、多选、下拉等组件进行表单验证等。需要配合form-item组件

<webview url="/pages/form/form"></webview>

```vue
<template>
  <view>
    <v-card bgColor="#FFF7E8">
      <v-form ref="form" v-model="value" :rules="rules">
        <v-form-item label="头像" prop="image">
          <v-upload :maxCount="1" v-model="value.image"></v-upload>
        </v-form-item>
        <v-form-item label="名称" prop="name">
          <v-input v-model="value.name"></v-input>
        </v-form-item>
        <v-form-item label="用户信息" prop="userInfo.desc">
          <v-input type="textarea" v-model="value.userInfo.desc"></v-input>
        </v-form-item>
        <v-form-item label="地址" prop="add">
          <v-input v-model="value.add"></v-input>
        </v-form-item>
        <v-form-item label="余额" prop="balance">
          <v-stepper v-model="value.balance"></v-stepper>
        </v-form-item>
        <v-form-item label="性别" prop="sex">
          <v-radio-group v-model="value.sex">
            <v-radio label="女" :name="0"></v-radio>
            <v-radio label="男" :name="1"></v-radio>
          </v-radio-group>
        </v-form-item>
        <v-form-item label="兴趣" prop="checkboxValue">
          <v-checkbox-group v-model="value.checkboxValue">
            <v-checkbox label="吃饭" :name="0"></v-checkbox>
            <v-checkbox label="睡觉" :name="1"></v-checkbox>
            <v-checkbox label="打豆豆" :name="2"></v-checkbox>
          </v-checkbox-group>
        </v-form-item>
        <v-form-item label="城市" prop="city">
          <view @click="showCityPicker">
            <v-input bgColor="transparent" placeholder="请选择城市" v-model="value.city" :disabled="true"></v-input>
          </view>
        </v-form-item>
        <v-form-item label="时间" prop="date">
          <view @click="showDatePicker">
            <v-input bgColor="transparent" placeholder="请选择时间" v-model="value.date" :disabled="true"></v-input>
          </view>
        </v-form-item>
        <v-form-item label="评分" prop="rate">
          <v-rate v-model="value.rate"></v-rate>
        </v-form-item>
        <v-form-item label="已婚" prop="married">
          <v-switch v-model="value.married"></v-switch>
        </v-form-item>
        <v-form-item label="幸运" prop="slider">
          <v-slider v-model="value.slider" :width="500"></v-slider>
        </v-form-item>

      </v-form>
      <view class="flex justify-around mt-20">
        <v-button @click="handleRest" type="primary">重置</v-button>
        <v-button @click="handleValide" type="primary">验证</v-button>
      </view>
      <v-picker :height="300" unit="px" v-model:show="cityShow" :columns="cityJson" @confirm="handleCity"
        @change="handleCity"></v-picker>
      <v-datetime-view v-model:show="dateShow" v-model="value.date" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-view>
    </v-card>
  </view>
</template>

<script>

import cityJson from './city.json'
export default {
  components: {  },
  data () {
    return {
      cityShow: false,
      cityJson: Object.freeze(cityJson),
      dateShow: false,
      value: {
        image: [],
        name: '',
        add: '',
        userInfo: {
          desc:''
        },
        sex: null,
        checkboxValue: [],
        city: '',
        date: '2023-05-11',
        rate: 0,
        married: true,
        slider: 99,
        balance: -1
      },
      rules: {
        image: {
          type: 'array',
          min: 1,
          required: true,
          message: '至多选1项',
          trigger: ['change']
        },
        name: {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['blur', 'change']
        },
        'userInfo.desc': {
          type: 'string',
          required: true,
          max: 103,
          message: '介绍描述',
          trigger: ['blur', 'change']
        },
        sex: {
          type: 'number',
          max: 1,
          required: true,
          message: '请选择男或女',
          trigger: ['blur', 'change']
        },
        add: {
          type: 'string',
          required: true,
          message: '请填地址',
          trigger: ['blur', 'change']
        },
        checkboxValue: {
          type: 'array',
          min: 2,
          required: true,
          message: '至少选两项',
          trigger: ['change']
        },
        rate: {
          type: 'number',
          min: 1,
          max: 5,
          required: true,
          message: '请评分',
          trigger: ['blur', 'change']
        },
        city: {
          type: 'string',
          required: true,
          message: '请选择城市',
          trigger: ['blur', 'change']
        },
        married: {
          type: 'boolean',
          required: true,
          message: '是否已婚',
          trigger: ['blur', 'change']
        },
        slider: {
          type: 'number',
          min: 0,
          max: 100,
          required: true,
          message: '你需要足够幸运',
          trigger: ['blur', 'change']
        },
        balance: {
          type: 'number',
          min: 1,
          required: true,
          message: '你需要足够的余额',
          trigger: ['blur', 'change']
        }
      }
    }
  },
  methods: {
    handleValide () {
      this.$refs.form?.validate().then(res => {
        console.log(res)
      })
    },
    handleRest () {
      this.$refs.form?.reset()
    },
    showCityPicker () {
      this.cityShow = true
    },
    handleCity (data) {
      console.log(data)
      this.value.city = data.valueStr
    },
    showDatePicker () {
      this.dateShow = true

    },
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

|     参数     |     类型      | 默认值 | 描述                                                         | 可选值              |
| :----------: | :-----------: | :----: | :----------------------------------------------------------- | ------------------- |
|    rules     |    Object     |   {}   | 组件验证采用了[async-validator (opens new window)](https://github.com/yiminghe/async-validator) |                     |
| *modelValue* |    Object     |   {}   | 数据                                                         |                     |
|  labelWidth  | Number,String |  160   | lebel宽度                                                    |                     |
|  labelAlign  |    String     |  left  | lebel对齐方式                                                | left、center、right |
|  labelStyle  |    Object     |   {}   | label样式                                                    |                     |

### form-item Props

|      参数      |  类型   |                     默认值                     | 描述                           | 可选值 |
| :------------: | :-----: | :--------------------------------------------: | :----------------------------- | ------ |
|      prop      | String  |                       -                        | 属性名                         |        |
| *borderBottom* | Boolean |                      true                      | 底部边框                       |        |
|     rules      |  Array  |                       []                       | 规则验证                       |        |
|   labelWidth   | String  |                      auto                      | 宽度，默认优先选择form         |        |
|    required    | Boolean |                     false                      | 必填                           |        |
|  requiredIcon  | Object  | `{color:'#f53f3f',name:'icon-medical',size:2}` | 必填项前面的星号，完全可自定义 |        |
|     label      | String  |                       -                        | label文本                      |        |
|   labelStyle   | Object  |                       {}                       | label样式                      |        |

### ref 事件

| 名称     | 参数                                         | 返回值                     | 描述                                                         |
| -------- | -------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| validate | 参数为空是验证全部item项，为某个prop验证单项 | 验证成功为true,否则为false | 验证单个或全部表单项                                         |
| reset    | 无                                           | 无                         | 重置表单。会在开始时克隆一份原数据，重置时更新为原数据，并且清空验证 |
|          |                                              |                            |                                                              |



### 插槽

| name    | 描述 |
| ------- | ---- |
| default |      |
|         |      |
|         |      |

### 事件

无