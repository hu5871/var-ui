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