# upload 文件上传

该组件用于上传文件

<webview url="/pages/form/upload"></webview>

```vue
<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[16, 0]" label="基本使用"></v-text>
      <v-upload v-model="value1" :url="url"  
      @oversize="handleOversize" @remove="uploadRemove" 
      @beforeUpload="uploadBefore" @afterUpload="uploadAfter"
      @fail="handleFail" @success="handleSuccess"
      ></v-upload>
    </v-card>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      url:"https://mockapi.eolink.com/I8Injqp01acb460c499e17653f3dea23de36421c8199b66/upload",
      value1: [],
      value2: false,
      value3: false,
      value4: true,
      value5: false
    }
  },
  watch: {

  },
  methods: {
    handleOversize(e){
      console.log(e)
    },
    uploadRemove(e){
      console.log('remove',e)
      this.$refs.root.showModal({
        model:'success',
        title:`删除了第${e.index}个`
      })
    },
    uploadBefore(e){
      console.log('beforeUpload',e)
    },
    uploadAfter(e){
      console.log('afterUpload',e)
    },
    handleFail(e){
     console.log('fail',e)
    },
    handleSuccess(e) {
      console.log('success',e)
      this.$refs.root.showModal({
        model:'success',
        title:`上传成功`
      })
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

|      参数       |              类型              |  默认值  | 描述                | 可选值                          |
| :-------------: | :----------------------------: | :------: | :------------------ | ------------------------------- |
|   modelValue    |             Array              |    []    | v-model双向绑定的值 |                                 |
|       url       |             String             |    -     | 上传接口            |                                 |
|    fileName     |             String             |    -     | 上传时的文件名      |                                 |
|    formData     |             Object             |    {}    |                     |                                 |
|     bgColor     |             String             | \#ededed | 背景色              |                                 |
|  activeBgColor  |             String             | \#2f7cf6 | 为trues是的背景色   |                                 |
|    disabled     |            Boolean             |  false   | 禁用                |                                 |
|    asyncFun     | *Promise*,*Function*,*Boolean* |  false   | 异步控制开关        |                                 |
|      scale      |             Number             |    1     | 缩放                |                                 |
|      space      |             Number             |    2     | 内容贴边距离        |                                 |
|      label      |             Array              |    []    | 文本数组            |                                 |
| leftLabelColor  |             String             |  white   | 左侧文本颜色        |                                 |
| rightLabelColor |             String             |  black   | 右侧文本颜色        |                                 |
|      icon       |            *String*            |    -     |                     |                                 |
|     margin      |             Array              |  [0,0]   | 外边距              | 拟同css ,数组长度可为1、2、3、4 |
|     padding     |             Array              |  [0,0]   | 内边距              | 拟同css ,数组长度可为1、2、3、4 |
| containerClass  |             String             |    -     | 容器的class         |                                 |
| containerStyle  |             Object             |    {}    | 自定义容器的样式    |                                 |
|                 |                                |          |                     |                                 |

### 插槽

无