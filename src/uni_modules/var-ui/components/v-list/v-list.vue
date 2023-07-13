<template>
  <view :style="[contentStyle]" class="relative flex flex-col overflow-hidden">
    <slot name="top"></slot>
    <view :class="[bem.e('view-content'), 'flex', 'flex-1', 'flex-col']">
      <scroll-view
       
        :class="[bem.e('scroll'), 'w-full', 'h-full', 'absolute', 'left-0', !showScrollbar ? 'v_list_scroll_hidden' : '']"
        :scroll-y="true" :show-scrollbar="true" :bounces="false" :scroll-with-animation="scrollWithAnimation"
        @scroll="onScroll" @scrolltolower="onScrolltolower">
        <view :class="[bem.e('touch'), 'relative',]" style="height:100%;"
          :data-refresherThreshold="finalRefresherThreshold" :data-scrollTop="scrollTop"
          :data-refresherRate="finalRefresherRate" :data-isRefresh="isRefresh" :data-refresherAngle="refresherAngle"
          :data-loading="loading" <!-- #ifdef APP-VUE || MP-WEIXIN || MP-QQ || H5 -->
          @touchstart="listWxs.onTouchStart" @touchmove="listWxs.onTouchMove" @touchend="listWxs.onTouchEnd"
          @touchcancel="listWxs.onTouchEnd" :change:prop="listWxs.propObserver" :prop="endFlag||scrollTop"
          @mousedown="listWxs.onMousedown" @mousemove="listWxs.onMousemove" @mouseup="listWxs.onMouseup"
          @mouseleave="listWxs.onMouseleave"
          <!-- #endif -->
          >
          <view :class="[bem.e('mian'), 'relative', 'h-full']">
            <view :class="[bem.e('refresh'),]" :style="[{ 'margin-top': `-${finalRefresherThreshold}px`, }]">
              <view :class="[bem.be('refresh', 'container'), 'flex', 'items-center', 'justify-center']"
                :style="[{ height: `${finalRefresherThreshold}px`, }]">
                <text>{{ refresherStatusText }}</text>
              </view>
            </view>
            <view :style="[isVirtual ? virtualStartStyle :  {}]">
              <view
              :style="{ ...isWaterfall  ? {paddingBottom:'50px'} : {}}"
                :class="[bem.e('list'), 'relative', isWaterfall ? `${bem.e('waterfall')}` : '', isVirtual ? `${bem.e('virtual')}` : '']">
                <!-- 普通列表 -->
                <template v-if="!isVirtual && !isWaterfall">
                  <slot></slot>
                </template>
                <template v-else-if="isWaterfall">
                  <view class="flex justify-between flex-row items-start">
                    <view  v-for="(item, index) in handleColList" :key="item[itemKey]" :style="[listStyle]" :class="[`v-list-waterfall__${index+1}`]"
                     >
                      <slot :name="`waterfall${index + 1}`" :colList="item"></slot>
                    </view>
                  </view>
                </template>
                <template v-else-if="isVirtual">
                  <view :class="[bem.e(`virtual_${item.v_list_index}`), 'flex', 'flex-col']"
                    v-for="(item, index) in rangeVirtualList" :key="item.v_list_uid">
                    <slot name="list" :item="item"></slot>
                  </view>
                  <!-- <slot name='vitual' :data="{ _class: bem.e(`virtual_`), list: rangeVirtualList }"></slot> -->
                  <view v-if="virtualType !== 'auto'" class="v-list-endFillHeight" :style="virtualEndStyle"></view>
                </template>
                <view 
                  :class="[bem.e('load-more'), 'w-full', 'flex', 'justify-center', 'items-center']" style="height:40px;">
                  <view v-if="noMore">
                    <v-text :label="noMoreText"></v-text>
                  </view>
                  <view v-else-if="loadMoreLoading && reachBottom">
                    <v-text :label="loadMoringText"></v-text>
                  </view>
                  <view v-else-if="loadMoreType == 'click' && !loadMoreLoading && reachBottom">
                    <v-text @click="handleLoadMore('click')" :label="loadMoreClickText"></v-text>
                  </view>
                </view>
              </view>

            </view>
          </view>
        </view>
      </scroll-view>
      <view v-if="isVirtual && initVirtual" style="z-index: 10000;pointer-events: none;"
        class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <slot name="loading">
          <view style="width:100%" class="flex flex-col items-center">
            <v-icon rota name="loading"></v-icon>
            <v-text :margin="[16, 0]" color="#81868b" label="加载中"></v-text>
          </view>
        </slot>
      </view>
    </view>
  </view>
</template>

<!-- #ifdef APP-VUE || MP-WEIXIN || MP-QQ || H5 -->
<script src="./wxs/index.wxs" module="listWxs" lang="wxs"></script>
<!-- #endif -->
<script>
import vCard from '../v-card/v-card.vue'
import vText from '../v-text/v-text.vue'
import vIcon from '../v-icon/v-icon.vue'
import { customWorH, _defineProps } from '../../lib/share/customProps'
import { listProps } from './v-list'
import { createNamespace } from '../../lib/utils/create';
import { ref, computed ,onMounted, watch, getCurrentInstance,nextTick, provide,defineExpose, onUpdated} from 'vue'
import useWaterfall from './hooks/waterfall'
import useVirtual from './hooks/virtual'

export default {
  options: {
    virtualHost: true,
  },
  props: { ..._defineProps, ...listProps },
  components: {
    vCard,
    vIcon,
    vText
  },
  emits:['refresherTouchstart','down','loadMore','update:modelValue'],
  setup (props, { emit,expose }) {
    const systemInfo = uni.getSystemInfoSync();
    const ctx=getCurrentInstance()
    const proxy=ctx?.proxy || null
    const bem = createNamespace('list')
    const contentStyle=computed(()=>({
      width:customWorH(props.width,props.unit),
      height:customWorH(props.height,props.unit),
      background:props.bgColor
    }))
    const scrollTop = ref(0)
    const isIos=systemInfo.platform === 'ios' //是否ios设备
    // 加载中
    const loading=ref(false)
    //  ------ 下拉刷新 ----
    //下拉刷新状态 0.默认状态 1.松手立即刷新 2.刷新中 3.刷新结束
      const refreshEnum= computed(()=>({
        None:{
          status:-1,
          text:'',
        },
        Default:{
          status:0,
          text:props.refresherSustainedText,
        },
        ReleaseToRefresh: {
          status:1,
          text:props.refresherReleaseText,
        },
        Loading:{
          status:2,
          text:props.refreshingText,
        },
        Complete:{
          status:3,
          text:props.refresherComplateText,
        },
      }))
      const finalRefresherRate=computed(()=>{
        return props.refresherRate
      })
      //最终下拉刷新阈值
      const finalRefresherThreshold=computed(() =>{
        let refresherThreshold = props.refresherThreshold;
        return uni.upx2px(refresherThreshold);
      })
      //刷新最大角度
      const refresherMaxAngle=computed(() =>{
        return props.refresherMaxAngle
      })
      // 下拉刷新状态
      const refresherStatus= ref(refreshEnum.value.Default.status)
      // 下拉刷新过度动画
      const refresherTransition=ref('')
      // 下拉刷新偏移
      const refresherTransform=ref('translateY(0px)')
      const refresherReachMaxAngle=ref(true)
      const refresherStatusText=computed(() =>{
        let text=''
        for (const key in refreshEnum.value) {
          if(refreshEnum.value[key].status === refresherStatus.value){
            text=refreshEnum.value[key].text
          }
        }
        return text
      })
      // ------- end ------
      // ----- touch ----
      // 触摸滑动中
      const isTouchmoving=ref(false)
      // 触摸结束
      const isTouchEnd=ref(false)
      const moveDis=ref(0)
      const oldMoveDis=ref(0)
      function changeRefresherStatus(moveDis,type) {
       if(type == 'move'){
        refresherStatus.value = moveDis >= finalRefresherThreshold.value ? refreshEnum.value.ReleaseToRefresh.status : refreshEnum.value.Default.status
       }else if(type == 'end'){
         refresherStatus.value = moveDis >= finalRefresherThreshold.value ? refreshEnum.value.Loading.status : refreshEnum.value.Default.status
       }
      }
    function onTouchMove(moveDis, touch){
      changeRefresherStatus(moveDis,'move')
    }
    function onTouchEnd(moveDis, touch){
      isTouchEnd.value=true
      changeRefresherStatus(moveDis,'end')
      if(refresherStatus.value === refreshEnum.value.Loading.status){
        refresherEnd()
      }
    }

    const endFlag=ref('')
    function complate(){
      loading.value=false
      refresherStatus.value=refreshEnum.value.Complete.status
      setTimeout(()=>{
        refresherStatus.value =refreshEnum.value.None.status
        endFlag.value=`end${new Date().getTime()}`
      },500)
    }
    function refresherEnd(){
       emit('down',{
        callback:complate
       })
    }
      // ----- end ----   
      onMounted(()=>{
        updateIns('event')
      })
      // 更新 wxs ins
      function updateIns(event){
        if(!event){
          endFlag.value=`start${new Date().getTime()}`
          return
        }
      }
      // ----- waterfall start -----
   
      let {handleColList, column, itemWidth,gapOffset,updateItem=()=>{},deleteItem=()=>{}} =useWaterfall(props)
      // ----- waterfall end -----
      // ----- virtualList start -----
      let { initVirtual,virtualListData, virtualFiexdItemSize,rangeVirtualList, virtualStartStyle,virtualEndStyle,fillStartTopHeight,virtualEndHeight,getViewportList} = useVirtual(props,scrollTop,props.that,emit)
      // ----- virtualList end -----
      const loadMoreLoading=ref(false);// 加载状态
      const noMore=ref(false);//没有更多
   
     const listStyle=computed(() => {
      let style={
        height:'auto',
        width:itemWidth.value+'px'
      }
      if(props.isWaterfall){
        // style.margin=props.columnGap+props.unit
      }
      return style
     })
     const oldScrollTop=ref(0)
     function onScroll (e) {
       endFlag.value && (endFlag.value='')
       oldScrollTop.value=scrollTop.value
       scrollTop.value=e.detail.scrollTop
       if(props.isVirtual && !loadMoreLoading.value){
        uni.$var.utils.throttle(()=>getViewportList(scrollTop.value),1000/60)
       }
      }
      const reachBottom=ref(false)
      function onScrolltolower () {
        reachBottom.value=true
        if(props.loadMoreType ==='click'){
          return
        }
        handleLoadMore()
      }
       // ----- loadMore -----
     
      async  function loadMoreComplete(isNoMore) {
        if(!isNoMore){
          nextTick(()=>{
            getViewportList(oldScrollTop.value,true)
          }) 
        }
        reachBottom.value=false
        loadMoreLoading.value=false
        noMore.value=isNoMore
       }
       function handleLoadMore(){
        if(loadMoreLoading.value) return 
          loadMoreLoading.value=true
          uni.$var.utils.debounce(()=>{
            emit('loadMore',{
            callback:loadMoreComplete
          })
        },100)
      }
      // ----- loadMore end -----
      expose({
        tagName:'vList',
        updateItem,
        deleteItem,
      })
    return {
      bem,
      contentStyle,
      isIos,
      loading,
      // 下拉 
      refresherStatus,
      finalRefresherRate,
      finalRefresherThreshold,
      refresherMaxAngle,
      refresherReachMaxAngle,
      refresherTransition,
      refresherTransform,
      refresherStatusText,
      // end
      // touch
      isTouchmoving,
      isTouchEnd,
      moveDis,
      oldMoveDis,
      onTouchMove,
      onTouchEnd,
      //end
      // loadmore
      loadMoreLoading,
      reachBottom,
      noMore,
      // waterfall
      handleColList,
      itemWidth,
      gapOffset,
      column,
      //virtual
      virtualStartStyle,
      virtualEndStyle,
      fillStartTopHeight,
      virtualEndHeight,
      initVirtual,
      virtualListData,
      virtualFiexdItemSize,
      rangeVirtualList,
     
      listStyle,
      endFlag,
      scrollTop,
      onScroll,
      onScrolltolower,
      handleLoadMore,
      updateIns
    }
  }
}
</script>

<style scoped>
/* #ifndef APP-NVUE */
.v_list_scroll_hidden ::-webkit-scrollbar {
  display: none !important;
  -webkit-appearance: none;
  width: 0 !important;
  height: 0 !important;
  background: transparent;
}

/* #endif */
</style>