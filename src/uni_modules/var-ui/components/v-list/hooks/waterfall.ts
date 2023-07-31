import { computed, getCurrentInstance, nextTick, onMounted, ref, watch } from "vue"
import { ListProps } from "../v-list"


export default function useWaterfall(props: ListProps) {
  
  if (!props.isWaterfall) return {
    run,
    handleColList: ref<any[]>([...Array(props.column).fill(([]))].map(item => uni.$var.utils.deepClone(item))),
    column: computed(() => props.column),
    itemWidth:computed(()=>0),
    gapOffset:computed(()=>0),
    updateItem,
    deleteItem,
  }
  const ctx = getCurrentInstance()
  const proxy = ctx?.proxy || null
  const handleList = ref([])
  const cloneList = computed(() => uni.$var.utils.deepClone(props.modelValue))

  const contentRect = ref<UniApp.NodeInfo>({
    width: 0,
    height: 0
  })
  function run() {
    return useWaterfall(props)
  }
  const column = computed(() => props.column)
  // 处理后的每一列的数据
  const handleColList = ref<any[]>([...Array(props.column).fill(([]))].map(item => uni.$var.utils.deepClone(item)))
  // 每一列的宽度
  const itemWidth = computed(() => {
    return ((contentRect.value?.width || 0) / 100) * (100 / (column.value) - (props.columnGap))
  })
  // 安全距离
  const gapOffset = computed(() => {
    return ((contentRect.value?.width || 0) - (itemWidth.value * column.value)) / (column.value - 1)
  })
  // 更新内容
  function updateItem(id: string | number, data: any) {
    const key = props.itemKey
    let i = -1
    if (!key) return uni.$var.utils.error('使用瀑布流列表必须填写 itemKey,且必须是唯一的')
    for (let index = 0; index < handleColList.value.length; index++) {
      const item = handleColList.value[index];
      i = item.findIndex(t => t[key] == id)
      if (i !== -1) {
        item[i] = { ...item[i], ...data }
        break
      }
    }
  }
  // 更新内容
  function deleteItem(id: string | number) {
    const key = props.itemKey
    let i = -1
    if (!key) return uni.$var.utils.error('使用瀑布流列表必须填写 itemKey,且必须是唯一的')
    for (let index = 0; index < handleColList.value.length; index++) {
      const item = handleColList.value[index];
      i = item.findIndex(t => t[key] == id)
      if (i !== -1) {
        item.splice(i, 1)
        break
      }
    }
  }

  watch(() => cloneList.value, (newVal, oldVal) => {
    if (newVal.length) {
      let newValIndex = Array.isArray(oldVal) && oldVal.length > 0 ? oldVal.length : 0
      // 拼接数据
      handleList.value = handleList.value.concat(uni.$var.utils.deepClone(newVal.slice(newValIndex)))
      splitData()
    } else {
      handleList.value = []
      handleColList.value = ([...Array(props.column).fill(([]))].map(item => uni.$var.utils.deepClone(item)))
    }
  })

  // 按列分组处理数据
  async function splitData() {
    let rectArr: UniApp.NodeInfo[] = [];
    if (!handleList.value.length) return
    for (let i = 1; i <= column.value; i++) {
      const rect = await uni.$var.utils.getRect(`.v-list-waterfall__${i}`, proxy);
      rectArr.push(rect);
    }
    let item = handleList.value[0]
    // 因为经过上面两个await节点查询和定时器，数组有可能会变成空[]，导致item的值为undefined
    // 解决多次快速滚动会导致数据乱的问题
    if (!item) return
    const minCol = getMinCol(rectArr);
    handleColList.value[minCol].push(item);
    // 移除临时数组中已处理的数据
    handleList.value.splice(0, 1)
    // 如果还有数据则继续执行
    if (handleList.value.length) {
      let _timeout = 90
      // 部分平台在延时较短的情况会出现BUG
      // #ifdef MP-BAIDU
      _timeout = _timeout < 90 ? 90 : _timeout;
      // #endif
      await uni.$var.utils.sleep(_timeout);
      splitData()
    } else {
      // 分组完成
    }
  }

  //获取高度最小的一列
  function getMinCol(arr: UniApp.NodeInfo[]) {
    const min = Math.min(...arr.map(item => item?.height || 0));
    let minIndex = arr.findIndex((item, index) => {
      return item?.height == min;
    });
    return minIndex < 0 ? 0 : minIndex
  }





  onMounted(() => {
    nextTick(() => {
      if (!props.isWaterfall) return
      if (!props.itemKey) {
        uni.$var.utils.error('使用瀑布流列表或者虚拟列表时必须填写 itemKey,且对应的值必须是唯一的')
      }
      uni.$var.utils.getRect('.v-list__waterfall', ctx).then((ret) => {
        if (ret) {
          contentRect.value = ret
        }
      })
    })
    if (props.isWaterfall) {
      handleList.value = uni.$var.utils.deepClone(cloneList.value)
      splitData()
    }
  })



  return {
    run,
    handleColList,
    column,
    itemWidth,
    gapOffset,
    updateItem,
    deleteItem,
  }
}
