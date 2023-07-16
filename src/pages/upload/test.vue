
<template>

  <!-- url="https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload" -->
  <vUpload v-model="uploadList" :url="url" @fail="handlefail" @success="handleSuccess"   @oversize="handleOversize" @remove="uploadRemove" @beforeUpload="uploadBefore"
    @afterUpload="uploadAfter">
    </vUpload>
    <vUpload v-model="uploadVideoList" :width="500" :height="399" fileType="video" :url="url" @fail="handlefail" @success="handleSuccess"   @oversize="handleOversize" @remove="uploadRemove" @beforeUpload="uploadBefore"
    @afterUpload="uploadAfter">
      <template v-slot:upload>
        <v-button  type="primary">上传</v-button>
      </template>
    </vUpload>
</template>

<script setup lang="ts">
import { ref } from "vue";

const uploadList = ref(['https://img.yzcdn.cn/vant/leaf.jpg'])
const uploadVideoList = ref([])
// const url=''
const url='https://mockapi.eolink.com/tNYKNA7ac71aa90bcbe83c5815871a5b419601e96a5524d/upload'
function uploadRemove(item) {
  console.log(item)
}
function handleOversize(item) {
  console.log('handleOversize',item)
}
function uploadBefore(data) {
  setTimeout(() => {
    data.callback(data.data)
  }, 3000)
}
async function uploadAfter(res) {
  const { data, callback } = res
  // for (let index = 0; index < data.length; index++) {
  //   await delay(3000)
  //   data[index].status = '上传成功'
  //   data[index].statusCode = 2
  // }
}

function handlefail(item){
  console.log('handlefail',item)

}
function handleSuccess(){

}
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

</script>

<style></style>