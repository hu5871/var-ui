
<template>
  <template v-if="isPop">
    <v-popup v-model:show="_show" @close="handleClose">
      <view class="v-picker ">
        <slot name="top">
          <view v-if="isHeader" class="flex mt-10 mx-20  justify-between items-center">
            <view class="flex-4 flex  justify-start" @click="handleClose">
              <slot name="cancel">
                <v-text v-if="cancelText" :color="cancelColor" :label="cancelText"></v-text>
              </slot>
            </view>
            <view class="flex-8 flex  justify-center">
              <slot name="title">
                <v-text v-if="titleText" :color="titleColor" :label="titleText"></v-text>
              </slot>
            </view>
            <view @click="handleConfirm" class="flex-4 flex  justify-end">
              <slot name="confirm">
                <v-text v-if="confirmText" :color="confirmColor" :label="confirmText"></v-text>
              </slot>
            </view>
          </view>
        </slot>
        <view class="flex" :style="containerHeight">
          <picker-view @touchmove.stop.prevent class="flex-1" v-for="(item, index) in _currentColumns" :key="index" :value="[_value[index]]"
            @change="onChange($event, index)">
            <picker-view-column>
              <view class="flex justify-center items-center" :style="[_itemStyle(column[labelKey])]"
                v-for="(column, colI) in item" :key="colI">
                {{ column[labelKey] }}
              </view>
            </picker-view-column>
          </picker-view>
        </view>
      </view>
    </v-popup>
  </template>
  <template v-else>
    <view class="flex" :style="containerHeight">
      <picker-view @touchmove.stop.prevent class="w-full" v-for="(item, index) in _currentColumns" :key="index" :value="[_value[index]]"
        @change="onChange($event, index)">
        <picker-view-column>
          <view class="flex justify-center items-center" :style="[_itemStyle(column[labelKey])]"
            v-for="(column, colI) in item" :key="colI">
            {{ column[labelKey] }}
          </view>
        </picker-view-column>
      </picker-view>
    </view>
  </template>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<script lang="ts" setup>
import vPopup from '../v-popup/v-popup.vue';
import { computed, getCurrentInstance, onMounted, ref, watch } from "vue";
import { pickerProps } from "./v-picker";
import { customWorH, _defineProps } from "../../lib/share/customProps";
import { nextTick } from "vue";
const proxy = getCurrentInstance()?.proxy || null;
const emits = defineEmits(['change', 'close', 'update:show', 'confirm'])
const props = defineProps({ ..._defineProps, ...pickerProps })
const _show = ref(props.show)
const _currentColumns = ref<any[][]>([])
const defaultIndex = computed(() => props.defaultIndex)
const _value = ref<number[]>(Array(props.maxLevel).fill(0))
const _valueStr = ref('')
const labelKey = computed(() => props.labelKey)
const childrenKey = computed(() => props.childrenKey)
const level = computed(() => props.maxLevel)
const containerHeight = computed(() => {
  return {
    height: customWorH(props.height, props.unit),
    ...props.containerStyle
  }
})

const _itemStyle = computed(() => {
  return (text: string) => {
    return {
      fontSize: text.length > 7 ? '26upx' : '30upx'
    }
  }
})

watch(() => props.show, (val) => {
  _show.value = val
})
function handleClose() {
  emits('update:show', false)
  emits('close')
}

function handleConfirm() {
  const data = getIndexItem(_currentColumns.value)
  _valueStr.value = data.length ? data.map(item => item[labelKey.value]).join(props.joinStr) : ''
  handleClose()
  emits('confirm', { data, valueStr: _valueStr.value })
}
let defaultPointer = 0
watch(() => props.columns, (val) => {
  defaultPointer = 0
  if (Array.isArray(val)) {
    if ((!defaultIndex.value.length || defaultIndex.value[0] >= val.length)) {
      for (let index = 0; index < _currentColumns.value.length; index++) {
        _value.value.splice(index, 1, 0)
      }
    }
    else {
      for (let index = 0; index < defaultIndex.value.length; index++) {
        const element = defaultIndex.value[index];
        if (element < 0) {
          _value.value.splice(index, 1, 0)
        } else {
          _value.value.splice(index, 1, element)
        }
      }
    }
  }
  const index = (!_value.value.length || _value.value[0] >= val.length) ? 0 : _value.value[0]
  _currentColumns.value = getColumnData(index, val)
  nextTick(() => {
    const data = getIndexItem(_currentColumns.value)
    _valueStr.value = data.length ? data.map(item => item[labelKey.value]).join(props.joinStr) : ''
  })
}, {
  immediate: true,
  deep: true
})
function onChange(e: any, index: number) {
  defaultPointer = 0
  const changeLevel = e.detail.value[0]
  _value.value.splice(index, 1, changeLevel);
  _currentColumns.value = getColumnData(_value.value[0], props.columns)
  const data = getIndexItem(_currentColumns.value)
  for (let index = 0; index < data.length; index++) {
    const element = { ...data[index] };
    delete element[childrenKey.value]
  }
  const indexs = [..._value.value]
  _valueStr.value = data.length ? data.map(item => item[labelKey.value]).join(props.joinStr) : ''
  emits('change', { data: [...data], indexs, valueStr: _valueStr.value })
}

let getItemPointer = 0
function getIndexItem(arr: any[]) {
  let list: any[] = []

  while (arr.length > getItemPointer) {
    let item = arr[getItemPointer][_value.value[getItemPointer]]
    list.push(item)
    getItemPointer += 1
  }
  getItemPointer = 0
  return list
}
function getColumnData(index: number, arr: any[]) {
  let list: any[][] = []
  const column = arr[index]
  if (!column) return list
  list.push(arr)
  if (column[childrenKey.value] && column[childrenKey.value].length && defaultPointer <= level.value) {
    defaultPointer += 1
    const index = (!_value.value[defaultPointer] || _value.value[defaultPointer] < 0 || _value.value[defaultPointer] > column[childrenKey.value].length - 1) ? 0 : _value.value[defaultPointer]
    const children = getColumnData(index, column[childrenKey.value])
    list = [...list, ...children]
  }
  return list
}
</script>

<style></style>