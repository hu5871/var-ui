<template>
  <v-mask v-model:show="isShow" :overlayClickClose="overlayClickClose" :zIndex="zIndex" contentClass="justify-center items-center">
    <v-transition @click.stop.prevent v-model:show="isShow" :width="width" :height="height" :zIndex="zIndex + 1"
      _class="flex">
      <v-card :zIndex="zIndex + 1" :_class="`${bem.b()} overflow-hidden`" :margin="[0]" :padding="[0]" :round="round"
        :width="width" :height="height" :bgColor="bgColor">
        <view :ref="contentId" :id="contentId" class="flex flex-grow-1 flex-col justify-between">
          <view :class="[bem.e('head'), 'flex', 'justify-center', 'items-center']">
            <slot name="head">
              <v-text :fontSize="32" :padding="[16, 0]" :label="title"></v-text>
            </slot>
          </view>
          <view :class="[bem.e('body'), 'flex-grow-1', 'height-0']">
            <scroll-view scroll-y style="height:100%" @touchmove.stop>
              <slot name="default"></slot>
            </scroll-view>
          </view>
          <view v-if="!capsuleBtn"
            :class="[bem.e('bottom'), 'flex', 'overflow-hidden', btnReverse ? 'flex-row-reverse' : '']">
            <view v-if="showCancelButton" class="flex-1" @click="close">
              <v-button :round="0" block :bgColor="cancelBgColor" :color="cancelColor">{{ cancelText }}</v-button>
            </view>
            <view v-if="showConfirmButton"  class="flex-1" @click="handleConfirm">
              <v-button :round="0" block :bgColor="confirmBgColor" :color="confirmColor">{{ confirmText }}</v-button>
            </view>
          </view>
          <view v-else
            :class="[bem.e('bottom'), 'flex', 'p-20', 'overflow-hidden', btnReverse ? 'flex-row-reverse' : '']">
            <view v-if="showCancelButton" class="flex-grow-1  flex justify-center items-center">
              <view :style="capsuleBtnWidth">
                <v-button :round="66" block @click="close" :bgColor="cancelBgColor" :color="cancelColor">{{
                  cancelText }}</v-button>
              </view>
            </view>
            <view v-if="showConfirmButton" class="flex-grow-1  flex justify-center items-center">
              <view :style="capsuleBtnWidth">
                <v-button width="80%" block :round="66" @click="handleConfirm" :bgColor="confirmBgColor"
                  :color="confirmColor">{{
                    confirmText }}</v-button>
              </view>
            </view>
          </view>
        </view>
      </v-card>
    </v-transition>
  </v-mask>
</template>

<script lang="ts" setup>
import { _defineProps } from "../../lib/share/customProps";
import { modalProps } from "./v-modal";
import VMask from '../v-mask/v-mask.vue'
import vTransition from "../v-transition/v-transition.vue";
import VCard from '../v-card/v-card.vue'
import { createNamespace } from "../../lib/utils/create";
import { computed, getCurrentInstance, nextTick, onMounted, ref, watch } from "vue";


const proxy = getCurrentInstance()?.proxy || null;
const bem = createNamespace('modal')
const props = defineProps({ ..._defineProps, ...modalProps })
const emits = defineEmits(['update:show', 'confirm'])
const uuid = uni.$var.utils.genUid(2).toString()
const contentId = bem.be('content', uuid)
const isShow = ref(props.show)

const capsuleBtnWidth = computed(() => {
  return {
    width: '80%'
  }
})

watch(() => props.show, (val) => {
  isShow.value = val
})

watch(() => isShow.value, (val) => {
  if (!val) {
    emits('update:show', false)
  }
})


async function handleConfirm() {
  if (typeof props.asyncClose === 'function') {
    let promiseResult: any = await props.asyncClose()
    if (typeof promiseResult === 'function') {
      promiseResult = await promiseResult();
    }
    if (!promiseResult) return
  }
  close()
  emits('confirm')
}
function emitShow(val: boolean) {
  emits('update:show', val)
}
function open() {
  isShow.value = true
  emitShow(true)
}
function close() {
  isShow.value = false
  emitShow(false)
}

defineExpose({
  open,
  close
})
</script>

<style></style>