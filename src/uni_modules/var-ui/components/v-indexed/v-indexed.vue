<template>
  <view
    :class="[
      bem.b(),
      'flex',
      'flex-col',
      'relative',
      'flex-grow-1',
      'height-0',
      'overflow-hidden',
    ]"
  >
    <!-- :scroll-into-view="'id_' + currentId" -->
    <scroll-view
      :offset-accuracy="5"
      :scroll-with-animation="false"
      :scroll-top="scrollTop"
      :class="[bem.e('scroll')]"
      :scroll-y="true"
      :style="scrollViewStyle"
      @scroll="change"
    >
      <slot></slot>
    </scroll-view>
    <view
      :id="barId"
      class="absolute top-50 flex pb-5 right-2 shadow round-15 px-12 overflow-hidden"
      :style="{
        transform: 'translateY(-50%)',
        'max-height': '80%',
        'background-color': props.lineBgColor,
      }"
    >
      <scroll-view
        :offset-accuracy="5"
        :scroll-top="barScrollTop"
        :scroll-y="true"
        :scroll-with-animation="true"
        :show-scrollbar="false"
      >
        <view
          v-for="item in indexList"
          :key="item.id"
          class="flex flex-col text-center"
          @click.stop="lineNavClick(item)"
        >
          <v-text
            :color="currentId == item.id ? props.lineActiveColor : 'black'"
            _class="cursor-pointer w-full text-center"
            :label="item.id"
          ></v-text>
        </view>
      </scroll-view>
    </view>
    <view>
      <v-card
        v-if="noticeIdShow"
        :width="100"
        :height="100"
        class="absolute top-50 flex jusitfy-center overflow-hidden rounded items-center left-50 -transform-50 shadow-10"
        :shadow="2.4"
      >
        <v-text
          :color="props.lineActiveColor"
          :font-size="40"
          _class="absolute top-50 left-50 -transform-50"
          :label="currentId"
        ></v-text>
      </v-card>
    </view>
  </view>
</template>
<script lang="ts">
export default {
  options: {
    virtualHost: true,
  },
};
</script>
<script lang="ts" setup>
import vCard from "../v-card/v-card.vue";
import vText from "../v-text/v-text.vue";
import { customWorH, _defineProps } from "../../lib/share/customProps";
import { indexedProps } from "./v-indexed";
import {
  computed,
  getCurrentInstance,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
} from "vue";
import { createNamespace } from "../../lib/utils/create";

const proxy = getCurrentInstance()?.proxy || null;

const bem = createNamespace("indexed");
const props = defineProps({ ..._defineProps, ...indexedProps });
const uuid = uni.$var.utils.genUid(2).toString();
const barId = "line_nav" + uuid;
const barHeight = ref(0);
const scrollViewStyle = computed(() => {
  return {
    width: customWorH(props.width, props.unit),
    height: customWorH(props.height, props.unit),
  };
});

onMounted(() => {
  nextTick(() => {
    uni.$var.utils.getRect(`#${barId}`, proxy).then((ret) => {
      barHeight.value = ret?.height || 0;
    });
  });
});
const _cardProps = computed(() => {
  return {
    height: props.height,
    width: props.width,
    padding: props.padding,
    margin: props.margin,
  };
});
const noticeIdShow = ref(false);

interface ItemKeys {
  id: string;
  height: number;
}
const indexList = ref<ItemKeys[]>([]);
const currentId = ref("");
const isMove = ref(false);

const scrollTop = ref(0);
const barScrollTop = ref(0);
let timer = 0;

const lineNavClick = (item: ItemKeys) => {
  currentId.value = "";
  scrollTop.value = 0;
  noticeIdShow.value = true;
  clearTimeout(timer);
  timer = setTimeout(() => {
    noticeIdShow.value = false;
  }, 800);
  const index = indexList.value.findIndex((ele) => ele.id === item.id);
  currentId.value = item.id;

  barScrollTop.value =
    ((index - 2) * (barHeight.value || 0)) / indexList.value.length;

  const targets = indexList.value.slice(0, index);
  const top =
    targets.reduce((total, current) => {
      return (total += current.height);
    }, 0) || 0.1;

  // scroll-view scroll-top 只有首次设置0有效果 解决方法 先设置一个旧值 等结构发生变化时再更新top
  nextTick(() => {
    scrollTop.value = top;
  });
};

const change = (e: any) => {
  const currentScrollTop = e.detail.scrollTop;
  const list = indexList.value;
  const index = list.findIndex((_, i: number) => {
    const sum = list.slice(0, i + 1).reduce((acc, cur) => acc + cur.height, 0);
    return sum >= currentScrollTop + 1;
  });
  currentId.value = list[index].id;
};

const setIndexedKey = (key: ItemKeys) => {
  if (indexList.value.includes(key)) {
    console.warn("indexed component detected repetition id");
    return;
  }
  indexList.value.push(key);
};
provide("setIndexedKey", setIndexedKey);

nextTick(() => {
  currentId.value = indexList.value[0].id;
});

onBeforeUnmount(() => {
  clearTimeout(timer);
});
</script>

<style>
scroll-view ::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
  color: transparent;
}
</style>
