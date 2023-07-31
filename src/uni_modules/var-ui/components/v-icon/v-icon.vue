<template>
  <view @click="handlerIconClick" :class="[bem.b(), 'flex',_class]" :style="[{ width: props.size + props.unit }, {
    height: props.size + props.unit, padding: customPOrM(props.padding, props.unit),
    margin: customPOrM(props.margin, props.unit),
  }]">
    <text v-if="!isUrl" ref="Icon" :class="[_customProps.name, bem.e(), { spin: props.rota }, 'iconfont', 'relative']"
      :style="style"></text>
    <image v-if="isUrl" ref="icon" :mode="props.imgMode" :render-whole="true" :src="props.name"
      :class="[{ spin: props.rota }]"
      :style="{ width: (props.size || 42) + props.unit, height: (props.size || 42) + props.unit }">
    </image>
  </view>
</template>

<script setup lang="ts">
import { computed, defineProps, onBeforeMount, onMounted, ref } from 'vue'
import { customPOrM, _defineProps } from '../../lib/share/customProps';
import { createNamespace } from '../../lib/utils/create'
import { iconProps } from './v-icon'
import { iconBase } from '../../lib/share/fontData';
const Icon = ref(null)
// #ifdef APP-NVUE || APP-PLUS-NVUE
const domModule = weex.requireModule('dom');
// #endif
const emits = defineEmits(['click'])
const bem = createNamespace('icon')
const props = defineProps({ ..._defineProps, ...iconProps })
const _valueName = ref(props.name)
const isUrl = computed(() => {
  if (
    props.name[0] == '.' ||
    props.name[0] == '/' ||
    props.name.substring(0, 5) == 'data:' ||
    props.name.substring(0, 4) == 'http' ||
    props.name.substring(0, 5) == 'https' ||
    props.name.substring(0, 3) == 'ftp'
  ) {
    return true;
  }
  return false;
});
const _customProps = computed(() => {
  if (!props.name) {
    console.warn('name prop is required')
  }
  return {
    name: props?.name?.startsWith('icon-') ? `${props.name}` : `icon-${props.name}`
  }
})

const style = computed(() => {
  if (!props.size && !props.color) {
    return {}
  }
  return {
    ...(props.size ? {
      'font-size': props.size + props.unit,

    } : {}),

    ...(props.color ? { 'color': props.color } : {}),
    ...props._style
  }
})
const handlerIconClick = (e: any) => {
  emits('click', e)
}

onBeforeMount(() => {
  // #ifdef APP-PLUS-NVUE
  domModule.addRule('fontFace', {
    fontFamily: 'icomoon',
    src: `url(${iconBase})`
  });
  // #endif
})
</script>
<script lang="ts">
export default {
  options: {
    virtualHost: true
  }
}
</script>

<style >
.iconfont {
  font-family: "icomoon" !important;
  font-size: 42rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}



.spin {
  animation: rota 1.5s infinite linear;
}

@keyframes rota {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
