import { Ref, computed, getCurrentInstance, nextTick, onMounted, onUpdated, ref, watch } from "vue"
import { ListProps } from "../v-list"


export default function useVirtual(props: ListProps, scrollTop: Ref<number>, that, emit) {
  const initVirtual = ref(true)
  const rangeVirtualList = ref<any[]>([])
  // scroll-view的高度
  const virtualScrollSize = ref<number>(0)
  //fixed模式下的单项的高度
  const virtualFiexdItemSize = ref<number>(0)
  const ctx = getCurrentInstance()
  const proxy = ctx?.proxy || null
  const startIndex = ref(0)
  const endIndex = ref(0)

  const virtualListData = computed(() => {
    let emitFlag=false
    if(!props.isVirtual) return []
    const value = props.modelValue.map((item, index) => {
      if (item?.v_list_uid) return item
      emitFlag=true
      let t: any = {}
      if (typeof item !== 'object') {
        t = {
          value: item
        }
      } else {
        t = { ...item }
      }
      t.v_list_index = index
      t.v_list_uid = uni.$var.utils.genUid(2)
      return t
    })
    if(emitFlag){
      emit('update:modelValue', value)
    }
    return value
  })

  // 预加载的页码
  const virtualPageSize = computed(() => props.virtualPageSize)
  // 总加载区域的高度：预加载的页码 * scrollView的高度
  const loadTotalHeight = computed(() => virtualPageSize.value * (virtualScrollSize.value))
  // 一页多少条数据
  const pageNumberTotal = ref(0)
  // 加上预加载的总计算条数
  const totalCount = ref(0)
  //缓存动态高度的列表
  interface CacheHeight {
    height: number;
    lastHeight: number;
    totalHeight: number;
    index: number;
  }
  const cacheAutoHeightList = ref<CacheHeight[]>([])
  const currentTop = ref(0)

  watch(() => virtualListData.value, (newVal, oldVal) => {
    if (props.isVirtual && newVal.length > oldVal.length) {
      nextTick(() => {
        if (props.virtualType === 'auto') {
          const newStartIndex = Array.isArray(oldVal) && oldVal.length > 0 ? oldVal.length : 0
          const list = newVal.slice(newStartIndex, newVal.length)
          rangeVirtualList.value = rangeVirtualList.value.concat(list)
          getAutoHeight(list)
        }
        if (props.virtualType === 'fixed') {
          getViewportList(currentTop.value)
          // getRangeList()
        }
      })
    }
  })
  const fillStartTopHeight = ref(0)
  const virtualStartStyle = computed(
    () => {
      return {
        transform: fillStartTopHeight.value ? `translateY(${fillStartTopHeight.value}px)` : 'none'
      }
    }
  )
  const virtualEndHeight = ref(0)
  const virtualEndStyle = computed(() => {
    return {
      height: `${virtualEndHeight.value}px`
    }
  })
  onMounted(async () => {
    setTimeout(() => {
      nextTick(async () => {
        uni.$var.utils.getRect(`.v-list__scroll`, proxy).then((rect) => {
          if (rect && rect?.height) {
            virtualScrollSize.value = rect.height
            init()
          }
        })
      })
    }, 1000)
  })

  function init() {
    rangeVirtualList.value.push(virtualListData.value[0])
    setTimeout(()=>{
      nextTick(() => {
        uni.$var.utils.getRect(`.v-list__virtual_0`, proxy).then(rect => {
          if (rect && rect?.height) {
            virtualFiexdItemSize.value = rect.height
            const onePageCount = Math.ceil(virtualScrollSize.value / virtualFiexdItemSize.value)
            totalCount.value = onePageCount * virtualPageSize.value
            startIndex.value = 0
            endIndex.value = Math.min(virtualListData.value.length, totalCount.value)
            virtualEndHeight.value = (virtualListData.value.length - endIndex.value) * virtualFiexdItemSize.value
            getRangeList()
            initVirtual.value = false
          }
        })
      })
    },100)
    
  }
  //根据偏移量计算当前视口的索引
  const currentIndex = ref(0)
  const virtualScrollTimeStamp = ref(0)
  function getViewportList(top = 0) {
    const currentTimeStamp = new Date().getTime();
    currentTop.value = top
    //初始化得到高度和总加载页数
    if ((top !== 0 && virtualScrollTimeStamp.value && currentTimeStamp - virtualScrollTimeStamp.value <= 1000 / 60)) {
      return
    }
    virtualScrollTimeStamp.value = Number(currentTimeStamp);
    if (props.virtualType === 'fixed') {
      let current = Math.floor(top / virtualFiexdItemSize.value);
      currentIndex.value = current
      const start = current - Math.ceil(virtualScrollSize.value / virtualFiexdItemSize.value)
      const end = Math.min(virtualListData.value.length, current + totalCount.value)
      startIndex.value = Math.max(0, start)
      endIndex.value = end
      fillStartTopHeight.value = startIndex.value * virtualFiexdItemSize.value
      virtualEndHeight.value = (virtualListData.value.length - endIndex.value) * virtualFiexdItemSize.value
      getRangeList()
    } 
  }

  // 获取渲染项起始索引
  function getAutoHeightIndex(type = 'start'): number {
    const top = scrollTop.value
    // 每一项距顶部的距离
    let arr = cacheAutoHeightList.value;
    let index = -1;
    let left = 0,
      right = arr.length,
      mid = Math.floor((left + right) / 2);
    if (type === 'start') {
      while (right - left > 1 && type === 'start') {
        // 目标数在左侧
        if (top - loadTotalHeight.value < arr[mid].lastHeight) {
          right = mid;
          mid = Math.floor((left + right) / 2);
        } else if (top - loadTotalHeight.value > arr[mid].lastHeight) {
          // 目标数在右侧
          left = mid;
          mid = Math.floor((left + right) / 2);
        } else {
          index = mid;
          break
        }
      }
    }
    if (type === 'end') {
      let start = startIndex.value
      const bottomRangePageOffset = top + loadTotalHeight.value
      for (let i = start; i < arr.length; i++) {
        const item = arr[i];
        if (item && item.totalHeight > bottomRangePageOffset) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        index = arr.length
      }
      return index
    }
    type === 'start' && (index = left);
    return index;
  }
  const lastIndex = ref({
    start: 0,
    end: 0
  })
  async function getRangeList() {
    const start = startIndex.value
    const end = endIndex.value
    if (lastIndex.value.start !== start || lastIndex.value.end !== end) {
      rangeVirtualList.value = virtualListData.value.slice(start, end)
      console.log(rangeVirtualList.value)
      lastIndex.value.start = start
      lastIndex.value.end = end
    }
   
  }

  async function getAutoHeight(list: any[]) {
    setTimeout(() => {
      nextTick(async () => {
        for (let index = 0; index < list.length; index++) {
          const item = list[index];
          const rect = await uni.$var.utils.getRect(`.v-list__virtual_${item.v_list_index + 1}`, proxy)
          let height = rect?.height || 0
          let lastHeight = cacheAutoHeightList.value.length ? cacheAutoHeightList.value.slice(-1)[0].totalHeight : 0
          cacheAutoHeightList.value.push({
            height,
            lastHeight: lastHeight,
            totalHeight: lastHeight + height,
            index: item.v_list_index
          })
        }
        nextTick(() => {
          getViewportList()
        })
        initVirtual.value && (initVirtual.value = false)
      })
    }, 100)
  }


  return {
    initVirtual,
    virtualListData,
    virtualFiexdItemSize,
    rangeVirtualList,
    virtualStartStyle,
    virtualEndStyle,
    fillStartTopHeight,
    virtualEndHeight,
    getViewportList
  }
}
