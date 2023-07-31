import { ExtractDefaultPropTypes, PropType } from 'vue';


export const listProps = {
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => ([])
  },
  that:{
    type:Object,
    default: null
  },
  isVirtual: {
    type: Boolean,
    default: false
  },
  isWaterfall: {
    type: Boolean,
    default: false
  },
  isRefresh: {
    type: Boolean,
    default: true
  },
  isLoadMore: {
    type: Boolean,
    default: true
  },
  //下拉刷新超出阈值后继续下拉位移衰减的比例
  refresherRate: {
    type: Number,
    default: 0.2
  },
  //下拉刷新触发的最大下拉角度，默认为40度，下拉角度小于设定值时，自定义下拉刷新动画不会被触发
  refresherAngle: {
    type: Number,
    default: 40
  },
  //设置滚动条位置时使用动画过渡
  scrollWithAnimation: {
    type: Boolean,
    default: false
  },
  // 距离底部/右边 多少距离触发 scrolltolower事件  默认为100rpx
  lowerThreshold: {
    type: Number,
    default: 100
  },
  //设置下拉刷新阈值，默认为80rpx
  refresherThreshold: {
    type: Number,
    default: 80
  },
  refresherSustainedText: {
    type: String,
    default: '继续下拉'
  },
  refresherReleaseText: {
    type: String,
    default: '释放刷新'
  },
  refreshingText: {
    type: String,
    default: '正在刷新'
  },
  refresherComplateText: {
    type: String,
    default: '刷新完成'
  },
  // 是否是显示滚动条 
  showScrollbar: {
    type: Boolean,
    default: false
  },
  isRefresherOpenLayer: {
    type: Boolean,
    default: false
  },
  // 加载更多
  loadMoreType: {
    type: String,
    default: 'auto',// auto 触底后触发加载  'click': 点击后触发加载
  },
  loadMoreClickText: {
    type: String,
    default: '点击加载更多'
  },
  loadMoringText: {
    type: String,
    default: '加载中'
  },
  noMoreText: {
    type: String,
    default: '没有更多了'
  },
  // 瀑布流 prop 
  itemKey: {
    type: String,
    default: ''
  },
  column: {
    type: Number,
    default: 2
  },
  columnGap: {
    type: Number,
    default: 5
  },
  // 虚拟列表
  // fixed:为固定高度 取第一个元素为默认高度，auto为动态高度
  virtualType:{
    type:String as PropType<'fixed'|'auto'>,
    default:'fixed'
  },
  //预加载几页,视图内显示的元素越少，页数应该越大，不然快速滚动会导致白屏
  virtualPageSize: {
    type:Number,
    default:7
  },
  margin: {
    type: Array as PropType<number[]>,
    default: () => [0]
  },
  padding: {
    type: Array as PropType<number[]>,
    default: () => [0]
  },
  bgColor:{
    type:String as PropType<string>,
    default:'transparent'
  },
  width: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: 'auto'
  },
  height: {
    type: [Number, String] as PropType<number | string>,
    required: false,
    default: '100%'
  },

} as const

export type ListProps = ExtractDefaultPropTypes<typeof listProps>
