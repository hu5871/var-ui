<template>
  <view :class="bem.b()" class="relative overflow-hidden" :style="_style">
    <slot></slot>
    <!-- style="left:-9999px" -->
    <view class="overflow-hidden absolute top-0" style="left:-9999px">
      <canvas ref="vWaterCanvas" id="vWaterCanvas" :canvas-id="canvasId" :style="canvasStyle" <!-- #ifdef MP-WEIXIN -->
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
import { ComponentInternalInstance, computed, getCurrentInstance, nextTick, onMounted, ref, watch } from "vue";
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


const targetWidth = ref(0)
const targetHeight = ref(0)
const finaSize = computed(() => {
  return Math.max(targetWidth.value, targetHeight.value)
})
const imageDataUrl = ref('')
const _style = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(props.height, props.unit),
    backgroundRepeat: "repeat",
    backgroundSize: `${finaSize.value}px`,
    backgroundImage: `url(${imageDataUrl.value})`,
  }
})
const canvasStyle = computed(() => {
  return {
    width: customWorH(finaSize.value * 1.5 + uni.upx2px(props.spacing * 2), 'px'),
    height: customWorH(finaSize.value * 1.5 + uni.upx2px(props.spacing * 2), 'px')
  }
})

watch(() => props, () => {
  initCanvas()
}, {
  deep: true
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
  // #endif
  if (props.image) {
    // #ifdef MP-WEIXIN
    const canvasImage = canvas.createImage();
    canvasImage.crossOrigin = "Anonymous";//跨域访问图像
    canvasImage.src = props.image;
    canvasImage.onload = () => {
      repeatImageCommonLogic(canvasImage, ctx)
    }
    // #endif
    // #ifndef MP-WEIXIN
    uni.getImageInfo({
      src: props.image,
      success(canvasImage) {
        repeatImageCommonLogic(canvasImage)
      },
    })
    // #endif
  } else {
    repeatTextCommonLogic()
  }
}

async function repeatTextCommonLogic() {
  let isMp = false
  // #ifndef MP-WEIXIN
  let ctx = uni.createCanvasContext(canvasId, proxy)
  // #endif
  // #ifdef MP-WEIXIN
  isMp = true
  let { ctx, canvas }: any = await getMpCanvasIns(dpr)
  // #endif
  const { unit, fontSize, color, opacity, fontStyle, fontWeight, spacing, lineHeight, fontVariant, fontFamily, text, rotate } = props
  const size = (unit == "rpx" ? uni.upx2px(fontSize) : fontSize)*dpr
  const height = lineHeight*dpr
  const finaHeight = props.unit == "rpx" ? uni.upx2px(height) : height
  // ctx.setFontSize(size)
  ctx.font = `${fontStyle} ${fontWeight} ${size}px/${finaHeight}px ${''} ${fontVariant} ${fontFamily}`;
  const fontWidth = ctx.measureText(text).width; //获取文本宽度
  targetWidth.value = fontWidth
  setTimeout(async () => {
    // #ifndef MP-WEIXIN
    ctx = uni.createCanvasContext(canvasId, proxy)
    // #endif
    // #ifdef MP-WEIXIN
    let { ctx, canvas }: any = await getMpCanvasIns(dpr)
    // #endif
    const canvasSize = finaSize.value * 1.5 + uni.upx2px(spacing * 2)
    const offsetX = (canvasSize / 2) - (targetWidth.value / 2)
    const offsetY = (canvasSize / 2)
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.globalAlpha = opacity
    ctx.rotate((rotate * Math.PI) / 180);
    ctx.fillStyle = color;
    ctx.font = `${fontStyle} ${fontWeight} ${isMp ? size * dpr : size}px/${isMp ? finaHeight * dpr : finaHeight}px ${''} ${fontVariant} ${fontFamily}`;
    ctx.fillText(text, isMp ? offsetX * dpr : offsetX,isMp ? offsetY * dpr : offsetY);
    // #ifndef MP-WEIXIN
    ctx.draw(false, () => {
      uni.canvasToTempFilePath({
        width: canvasSize,
        height: canvasSize,
        destWidth: canvasSize,
        destHeight: canvasSize,
        canvasId,
        success: function (res) {
          imageDataUrl.value = res.tempFilePath;
        }
      });
    });
    // #endif
    // #ifdef MP-WEIXIN
    imageDataUrl.value = canvas.toDataURL();
    // #endif
  }, 200)
}

function repeatImageCommonLogic(canvasImage: UniApp.GetImageInfoSuccessData, ctx?: UniApp.CanvasContext) {
  const { rotate, spacing, opacity, imageWidth, imageHeight } = props
  const setFinaDpr = imageWidth / imageHeight
  const imageDpr = canvasImage.width / canvasImage.height
  if (setFinaDpr > imageDpr) {
    targetWidth.value = (imageHeight * imageDpr)
    targetHeight.value = imageHeight
  } else {
    targetWidth.value = imageWidth
    targetHeight.value = (imageWidth / imageDpr)
  }

  setTimeout(() => {
    nextTick(async () => {
      let isMp = false
      // #ifndef MP-WEIXIN
      ctx = uni.createCanvasContext(canvasId, proxy)
      // #endif
      // #ifdef MP-WEIXIN
      isMp = true
      const { ctx, canvas }: any = await getMpCanvasIns(dpr)
      // #endif
      const createImageSize = (finaSize.value * 1.5) + uni.upx2px(spacing * 2)
      ctx.clearRect(0, 0, createImageSize, createImageSize);
      ctx.globalAlpha = opacity
      // #ifndef MP-WEIXIN
      const offsetX = (createImageSize / 2) - (targetWidth.value)
      const offsetY = (createImageSize / 2) - (targetHeight.value)
      ctx.translate(targetWidth.value / 2, targetHeight.value / 2);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.drawImage(canvasImage.path, offsetX, offsetY, targetWidth.value, targetHeight.value);
      ctx.draw(false, () => {
        uni.canvasToTempFilePath({
          width: createImageSize,
          height: createImageSize,
          destWidth: createImageSize,
          destHeight: createImageSize,
          canvasId,
          success: function (res) {
            imageDataUrl.value = res.tempFilePath;
          }
        });
      });
      // #endif
      // #ifdef MP-WEIXIN
      const offsetX = (createImageSize / 2) - (targetWidth.value)
      const offsetY = (createImageSize / 2) - (targetHeight.value)
      ctx.translate((targetWidth.value / 2) * dpr, (targetHeight.value / 2) * dpr);
      ctx.rotate((rotate * Math.PI) / 180);
      ctx.drawImage(canvasImage, offsetX * dpr, offsetY * dpr, targetWidth.value * dpr, targetHeight.value * dpr);
      imageDataUrl.value = canvas.toDataURL();
      // #endif
    })
  }, 200)
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