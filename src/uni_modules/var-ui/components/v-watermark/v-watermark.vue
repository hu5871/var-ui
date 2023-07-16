<template>
  <view :key="onlyId" :class="bem.b()" class="relative overflow-hidden" :style="_style">
    <slot></slot>
    <view class="overflow-hidden absolute top-0 left-0 right-0 bottom-0">
      <canvas :key="onlyId" ref="vWaterCanvas" id="vWaterCanvas" :canvas-id="canvasId" :style="canvasStyle" 
        <!-- #ifdef MP-WEIXIN -->
        type="2d"
        <!-- #endif -->
        ></canvas>
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
import { ComponentInternalInstance, computed, getCurrentInstance, nextTick, onMounted, ref } from "vue";
import { customWorH } from "../../lib/share/customProps";
import { watermarkProps } from "./v-watermark";
import { createNamespace } from '../../lib/utils/create';

const bem = createNamespace('watermark')
const currentIns = getCurrentInstance()
const proxy: ComponentInternalInstance["proxy"] | null = currentIns?.proxy || null;
const props = defineProps({ ...watermarkProps })
const vWaterCanvas = ref()
const onlyId = uni.$var.utils.genUid(1)
const canvasId = `vWaterCanvas_${onlyId}`
const imageDateUrl = ref('')
const _style = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(props.height, props.unit),
  }
})

const canvasStyle = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(props.height, props.unit)
  }
})

const dpr = uni.getSystemInfoSync().pixelRatio;

onMounted(() => {
  nextTick(() => {
    initCanvas()
  })
})



async function initCanvas() {
  const { width = 0, height = 0 } = await uni.$var.utils.getRect(`.${bem.b()}`, proxy)
  // #ifdef MP-WEIXIN
  const { ctx, canvas }: any = await getMpCanvasIns(dpr)
  const canvasWidth = ctx.canvas.width
  const canvasHeight = ctx.canvas.height
  // #endif

  // #ifndef MP-WEIXIN
  const ctx = uni.createCanvasContext(canvasId, proxy)
  const canvasWidth = width
  const canvasHeight = height
  // #endif
  if (!ctx) return
  if (props.image) {
    // #ifdef MP-WEIXIN
    const canvasImage = canvas.createImage();
    canvasImage.crossOrigin = "Anonymous";//跨域访问图像
    canvasImage.src = props.image;
    canvasImage.onload = () => {
      repeatImageCommonLogic(canvasWidth, canvasHeight, canvasImage, ctx)
    }
    // #endif
    // #ifndef MP-WEIXIN
    uni.getImageInfo({
      src: props.image,
      success(canvasImage) {
        repeatImageCommonLogic(canvasWidth, canvasHeight, canvasImage, ctx)
      }
    })
    // #endif
  }
}


function repeatImageCommonLogic(canvasWidth: number, canvasHeight: number, canvasImage: any, ctx: any) {
  const { imageWidth, imageHeight, imageRepeat, imagePosition, spacing, imageOpacity } = props
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  ctx.globalAlpha = imageOpacity;
  // 计算水印图片最终的宽度和高度
  let isMp = false
  // #ifdef MP-WEIXIN
  isMp = true
  // #endif
  const finaImageWidth = (imageWidth ? (canvasImage.width * imageHeight) / canvasImage.height : canvasImage.width) * (isMp ? dpr : 1)
  const finaImageHeight = (imageHeight ? (canvasImage.height * imageWidth) / canvasImage.width : canvasImage.height) * (isMp ? dpr : 1)
  if (imageRepeat) {
    // 计算行数和列数
    const cols = Math.floor((canvasWidth - spacing) / ((finaImageWidth * (isMp ? 2 : 1.5)) + spacing))
    const rows = Math.floor((canvasHeight - spacing) / ((finaImageHeight * (isMp ? 2 : 1)) + spacing))
    // 计算水平和垂直间隔
    const totalSpacingX = canvasWidth - finaImageWidth * cols
    const totalSpacingY = canvasHeight - finaImageHeight * rows
    const spacingX = totalSpacingX / (cols + 1) // 平均水平间隔
    const spacingY = totalSpacingY / (rows + 1) // 平均垂直间隔

    // 绘制水印图片多行多列
    for (let row = 0; row < rows; row++) {
      let i = 0
      for (let col = 0; col < cols; col++) {
        let x: undefined | number
        let y: undefined | number
        if (row % 2 === 0) {
          x = spacingX + (finaImageWidth + spacingX) * col
          y = spacingY + (finaImageWidth + spacingY) * row
        } else {
          // 奇数居中
          if (i + 1 == cols) continue
          x = i % 2 === 0 ? (spacingX + finaImageWidth) * (col + 1) : (spacingX + finaImageWidth) * (col + 1)
          y = spacingY + (finaImageWidth + spacingY) * row
          i++
        }
        // 绘制水印图片
        ctx.drawImage(isMp ? canvasImage : canvasImage.path, x, y, finaImageWidth, finaImageHeight)
      }
    }
    ctx.draw(true);
  } else {
    const position = imagePosition || 'right-bottom'
    let x: undefined | number
    let y: undefined | number
    if (position === 'center') {
      x = (canvasWidth / 2) - (finaImageWidth / 2)
      y = (canvasHeight / 2) - (finaImageHeight / 2)
    } else if (position.indexOf('bottom') !== -1) {
      y = Math.floor((canvasHeight) - (finaImageHeight) - spacing)
      if (position.indexOf('left') !== -1) {
        x = spacing
      } else {
        x = canvasWidth - spacing - finaImageWidth
      }
    } else {
      y = spacing
      if (position.indexOf('left') !== -1) {
        x = spacing
      } else {
        x = canvasWidth - spacing - finaImageWidth
      }
    }
    ctx.drawImage(isMp ? canvasImage : canvasImage.path, x, y, finaImageWidth, finaImageHeight)
    ctx.draw(true);
  }
}

async function getMpCanvasIns(dpr: number) {
  return new Promise((resolve) => {
    uni.createSelectorQuery().in(proxy).select('#vWaterCanvas').fields({ node: true, size: true }).exec((rect) => {
      // 获取设备设备像素比
      const canvas = rect[0].node;
      canvas.width = rect[0].width * dpr;// 设置canvas像素宽
      canvas.height = rect[0].height * dpr;
      let ctx = canvas.getContext('2d');
      resolve({ ctx, canvas })
    })
  });
}
</script>

<style></style>