<template>
  <view class="flex flex-col flex-1">
    <view v-if="showList" class="flex  flex-wrap">
      <view class="mr-10 mb-10" v-for="(item, index) in list" :key="item.__uid">
        <v-card :round="round" :margin="[0]" :padding="[0]" :width="width" :height="height" _class="overflow-hidden" _contentClass=" overflow-y-hidden">
          <view class="relative flex-1">
            <v-image v-if="item.isImage" :width="width" :height="height" :src="item.url">
            </v-image>
            <video style="width:100%; height:100%" @play="handlePlay" :controls="true" v-else-if="item.isVideo" :src="item.url"></video>
            <slot name="mask">
              <view class="absolute bottom-0 left-0 right-0 top-0 flex">
                <view @click="handleDelate(item, index)" class="absolute top-0 right-0">
                  <v-icon :color="deleteIconColor" :size="deleteIconSize" :name="deleteIconName"></v-icon>
                </view>
                <view @click="uploadRequest(item, index)" v-if="item.statusCode == 3" :style="maskLayerStyle"
                  class="flex flex-1 items-center justify-center">
                  <v-icon color="white" :size="40" name="icon-reload"></v-icon>
                </view>
              </view>
            </slot>
            <view class="absolute bottom-0 left-0 right-0 ">
              <slot name="bottom" :data="{ item, index }">
              </slot>
            </view>
          </view>
        </v-card>
      </view>
      <view @click="chooseFile" v-if="isUpload" class="mb-10">
        <slot name="upload">
          <v-card :round="round" bg-color="#ccc" :margin="[0]" :padding="[0]" :width="width" :height="height"
            _class="overflow-hidden">
            <slot name="icon">
              <view class="flex flex-1 justify-center items-center">
                <v-icon :size="addIconSize" color="white" name="icon-add"></v-icon>
              </view>
            </slot>
          </v-card>
        </slot>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<script lang="ts" setup>
import { computed, getCurrentInstance, nextTick, ref, toRaw, watch } from 'vue';
import { customWorH } from '../../lib/share/customProps';
import vImage from '../v-image/v-image.vue';
import vCard from '../v-card/v-card.vue';
import vIcon from '../v-icon/v-icon.vue'
import { CheckFunParam, FileStatusMap, FileLoadOrUniFileType, uploadProps } from './v-upload';

const proxy = getCurrentInstance()?.proxy || null
const emits = defineEmits(['remove', 'update:modelValue', 'oversize', 'beforeUpload', 'afterUpload', 'fail', 'success'])
const props = defineProps({ ...uploadProps })
const deletable = ref(props.deletable)
const disabled = computed(() => props.disabled)
const maskLayerStyle = computed(() => {
  return {
    background: `rgba(0,0,0,0.2)`,
  }
})
const list = ref<FileLoadOrUniFileType[]>([])
const fileType = computed(() => props.fileType)
const maxCount = computed(() => {
  const remaining = props.maxCount - list.value.length;
  return Math.min(Math.max(remaining, 0), props.maxCount);
})
const fileMaxSize = computed(() => props.fileMaxSize)
const multiple = computed(() => props.multiple)
const imageSizeType = computed(() => props.imageSizeType)
const capture = computed(() => props.capture)
const compressed = computed(() => props.compressed)
const maxDuration = computed(() => props.maxDuration)
const camera = computed(() => props.camera)
const isUpload = ref(false)
watch(() => [props.modelValue, props.deletable, props.maxCount], () => {
  list.value = formatFileList()
  deletable.value = props.deletable
  isUpload.value = !!maxCount.value
}, {
  immediate: true,
  deep: true
})

let parentFormItem: any = proxy?.$parent
while (parentFormItem) {
  if (parentFormItem?.vFormItem || !parentFormItem) {
    break;
  } else {
    parentFormItem = parentFormItem?.$parent || undefined
  }
}
function sleep(time:number){
  return new Promise(resolve =>{
    setTimeout(resolve, time)
  })
}
async function handlePlay(){
 await sleep(500)
}
function formatFileList() {
  const fileList: any[] = props.modelValue
  const fileType = props.fileType
  const list = []
  for (let i = 0; i < fileList.length; i++) {
    const item = fileList[i];
    if (i + 1 > props.maxCount || !item) {
      break
    }
    let itemMap: FileLoadOrUniFileType = {}
    if (typeof item === 'string') {
      itemMap.url = uni.$var.utils.isUrl(item) ? item : ''
    }
    if (item.__uid) {
      list.push(item)
      continue
    }
    Object.assign(Object.assign(itemMap, typeof item === 'string' ? {} : item), {
      __uid: uni.$var.utils.genUid(),
      isImage: fileType === 'image',
      isVideo: fileType === 'video',
      deletable: typeof (item.deletable) === 'boolean' ? item.deletable : deletable.value,
    })
    list.push(itemMap)
  }
  return list
}


async function handleDelate(item: FileLoadOrUniFileType, index: number) {
  if (typeof props.onRemoveFile === 'function') {
    let p: any = await props.onRemoveFile(item);
    if (typeof p === 'function') {
      p = await p(item);
    }
    if (!p) return false;
  }
  list.value.splice(index, 1)
  emits("remove", {value:item,index:index+1})
  nextTick(() => {
    emits("update:modelValue", [...list.value])
  })
}

async function chooseFile() {
  if (disabled.value) return;
  const fileType = props.fileType
  const multiple = props.multiple
  const capture = props.capture
  const compressed = props.compressed
  const maxDuration = props.maxDuration
  const imageSizeType = props.imageSizeType
  const camera = props.camera
  const maxCount = props.maxCount
  checkLoadFile({ fileType, multiple, capture, compressed, maxDuration, imageSizeType, camera, maxCount }).then(async (res) => {
    onBeforeUpload(res);
  })
}
const emitData = {
  data: null,
  callback: (val: FileLoadOrUniFileType[] | boolean) => {
    if (typeof val !== 'boolean' || !Array.isArray(val)) {
      uni.$var.utils.error('Upload the bepreUpload and afterUpload events of the component Calback parameter type is array or Boolean')
      return
    }
    return val
  }
}
async function onBeforeUpload(val: FileLoadOrUniFileType[]) {
  if (props.beforeUpload && typeof props.beforeUpload === 'function') {
    let res = props.beforeUpload(val)
    if (uni.$var.utils.isPromise(res)) {
       await res.then((data:any) => {
        res =data
      })
    }else if(typeof res === 'function') {
      res = await res(val)
    }
    if (!res) {
      return
    }
    onAfterUpload(res)
    return
  }
  let res: FileLoadOrUniFileType[] | boolean = val
  emits('beforeUpload', {
    data: val,
    callback: (val: FileLoadOrUniFileType[] | boolean) => {
      if (typeof val !== 'boolean' && !Array.isArray(val)) {
        uni.$var.utils.error('Upload the `bepreUpload` events of the component Calback parameter type is Array or Boolean')
        return
      }

      res = val
    }
  })
  if (typeof val == 'boolean') {
    return
  }
  onAfterUpload(res)
}

async function onAfterUpload(waitList: FileLoadOrUniFileType[]) {
  if (!waitList.length) {
    emits('update:modelValue', [])
    return
  }
  waitList.forEach(item => {
    item.status = '等待上传'
    item.statusCode = 0
    list.value.push(item)
  })
  for (let i = 0; i < waitList.length; i++) {
    const item = waitList[i];
    await uploadRequest(item, list.value.findIndex(f => f.__uid === item.__uid))
  }
  emits('afterUpload', {
    data: waitList
  })
  nextTick(() => {
    emits("update:modelValue", [...list.value])
    parentFormItem?.validate('change', () => {
    })
  })
}
const statusCode: FileStatusMap = {
  max: -1,
  wait: 0,
  loadding: 1,
  success: 2,
  fail: 3
}
function uploadRequest(item: FileLoadOrUniFileType, index: number) {
  const url = props.url;
  const name = props.fileName
  const formData = props.formData || {}
  const header = props.header || {}
  item.status = '上传中'
  item.statusCode = 1
  return new Promise(resolve => {
    const task = uni.uploadFile({
      url: url,
      filePath: item.path,
      name: name || item.name || '默认文件名',
      formData: { name: item.name, ...formData },
      header,
      success: res => {
        if (res.statusCode !== 200) {
          list.value[index].status = '上传失败'
          list.value[index].statusCode = statusCode.fail
          emits('fail', list.value[index])
          return
        }
        list.value[index].status = '上传成功'
        list.value[index].statusCode = statusCode.success
        emits('success', {value:list.value[index],res})
      },
      fail: (rej) => {
        list.value[index].statusCode = statusCode.fail;
        list.value[index].status = "上传失败";
        emits('fail', list.value[index])
      },
      complete: res => {
        resolve(true)
      }
    })
    task.onProgressUpdate(res => {
      if (res.progress > 0) {
        list.value[index].progress = res?.progress;
      }
    });
  })
}



function checkLoadFile({ fileType, multiple, capture, compressed, maxDuration, imageSizeType, camera, maxCount }: CheckFunParam): Promise<FileLoadOrUniFileType[]> {
  return new Promise((resolve, reject) => {
    switch (fileType) {
      case 'image':
        uni.chooseImage({
          count: multiple ? maxCount : 1,
          sourceType: typeof capture === 'string' ? [capture] : Array.isArray(capture) ? [...capture] : [],
          sizeType: typeof imageSizeType === 'string' ? imageSizeType : Array.isArray(imageSizeType) ? [...imageSizeType] : [],
          success: (res) => {
            if (!res.tempFilePaths?.length) {
              reject('未选择文件')
              return
            }
            let files: UniApp.ChooseImageSuccessCallbackResultFile | File | UniApp.ChooseImageSuccessCallbackResultFile[] | File[] = res.tempFiles;
            let list: FileLoadOrUniFileType[] = []
            if (!Array.isArray(files)) {
              files = [files] as UniApp.ChooseImageSuccessCallbackResultFile[] | File[]
            }
            for (let i = 0; i < files.length; i++) {
              const item = files[i];
              if (item.size > fileMaxSize.value) {
                emits('oversize', item)
                continue
              }
              if (i + 1 > props.maxCount) {
                break
              }
              list.push({
                __uid: uni.$var.utils.genUid(2),
                file: item,
                isImage: true,
                deletable: deletable.value,
                url: item!.path,
                status: '等待上传',
                statusCode: statusCode.wait,
                progress: 0,
                name: item.name
              })
            }
            resolve(list)
          },
          fail: reject
        })
        break
      case 'video':
        uni.chooseVideo({
          sourceType: typeof capture === 'string' ? [capture] : Array.isArray(capture) ? [...capture] : [],
          compressed,
          maxDuration,
          camera,
          success: (res) => {
            if (!res.tempFilePath) {
              reject('未选择文件')
              return
            }
            let files: UniApp.ChooseImageSuccessCallbackResultFile | File | UniApp.ChooseImageSuccessCallbackResultFile[] | File[] = res;
            let list: FileLoadOrUniFileType[] = []
            if (!Array.isArray(files)) {
              files = [files] as UniApp.ChooseImageSuccessCallbackResultFile[] | File[]
            }
            for (let i = 0; i < files.length; i++) {
              const item = files[i];
              if (item.size > fileMaxSize.value) {
                emits('oversize', item)
                continue
              }
              if (i + 1 > props.maxCount) {
                break
              }
              list.push({
                __uid: uni.$var.utils.genUid(2),
                file: item,
                isVideo: true,
                deletable: deletable.value,
                url: res!.tempFilePath,
                status: '等待上传',
                statusCode: statusCode.wait,
                progress: 0,
                name: item.name
              })
            }
            resolve(list)
          },
          fail: reject
        })
        break
      // #ifdef MP-WEIXIN
      // 只有微信小程序才支持chooseMedia接口
      case 'media':
        wx.chooseMedia({
          count: multiple ? maxCount : 1,
          sourceType: typeof capture === 'string' ? [capture] : Array.isArray(capture) ? [...capture] : [],
          sizeType: typeof imageSizeType === 'string' ? imageSizeType : Array.isArray(imageSizeType) ? [...imageSizeType] : [],
          maxDuration,
          camera,
          success: (res) => {
            
          },
          fail: reject
        })
        break
      // #endif
    }
  })
}

</script>

<style></style>