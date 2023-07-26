/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
export const sidebar = {
  '/guide': [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/introduction/index' },
        { text: '快速开始', link: '/guide/quickstart/index' },
        { text: '更新日志', link: '/guide/update/index' },
      ]
    },
    {
      text: '通用组件',
      items: [
        { text: 'root 根节点', link: '/guide/component/root' },
        { text: 'card 卡片', link: '/guide/component/card' },
        { text: 'text 文本', link: '/guide/component/text' },
        { text: 'button 按钮', link: '/guide/component/button' },
        { text: 'icon 图标', link: '/guide/component/icon' },
        { text: 'html 富文本', link: '/guide/component/html' },
      ]
    },
    {
      text: '展示组件',
      items: [
        { text: 'avatar 头像', link: '/guide/component/avatar' },
        { text: 'list 列表', link: '/guide/component/list' },
        { text: 'cell 单元格', link: '/guide/component/cell' },
        { text: 'countDown 倒计时', link: '/guide/component/countDown' },
        { text: 'image 图片', link: '/guide/component/image' },
        { text: 'countup 数字滚动', link: '/guide/component/countup' },
        { text: 'tabs 选项卡', link: '/guide/component/tabs' },
        { text: 'indexed 索引列表', link: '/guide/component/indexed' },
        { text: 'line 分割线', link: '/guide/component/line' },
        { text: 'grid 九宫格', link: '/guide/component/grid' },
        { text: 'steps 步骤条', link: '/guide/component/steps' },
        { text: 'watermark 水印', link: '/guide/component/watermark' },
      ]
    },
    {
      text:'表单组件',
      items: [
        { link: '/guide/component/input', text: 'input 输入框' },
        { link: '/guide/component/form', text: 'form 表单' },
        { link: '/guide/component/calendar', text: 'calendar 日历' },
        { link: '/guide/component/checkbox', text: 'checkbox 复选框' },
        { link: '/guide/component/radio', text: 'radio 单选框' },
        { link: '/guide/component/picker', text: 'picker 选择器' },
        { link: '/guide/component/datetime', text: 'datetime 时间选择器' },
        { link: '/guide/component/rate', text: 'rate 评分' },
        { link: '/guide/component/stepper', text: 'stepper 步进器' },
        { link: '/guide/component/slider', text: 'slider 滑动选择器' },
        { link: '/guide/component/switch', text: 'switch 开关' },
        // { link: '/guide/component/upload', text: 'upload 上传' },
      ]
    },
    {
      text:'反馈组件',
      items: [
        { link: '/guide/component/popover', text: 'popover 气泡提示' },
        { link: '/guide/component/message', text: 'message 提示' },
        { link: '/guide/component/swipeAction', text: 'swipeAction 滑动单元格' },
        { link: '/guide/component/collapse', text: 'collapse 折叠面板' },
        { link: '/guide/component/noticebar', text: 'noticebar 滚动消息' },
        { link: '/guide/component/popup', text: 'popup 弹出层' },
        { link: '/guide/component/mask', text: 'mask 遮罩层' },
        { link: '/guide/component/modal', text: 'modal 模态框' },
        { link: '/guide/component/transition', text: 'transition 动画' },
      ]
    },
    {
      text:'导航组件',
      items: [
        { link: '/guide/component/navbar', text: 'navbar 标题导航' },
        { link: '/guide/component/sidebar', text: 'sidebar 侧边导航' },
        { link: '/guide/component/subsection', text: 'subsection 分段器' },
      ]
    }
  ],
  '/api': [
    {
      text: '工具函数',
      items: [
        { text: '本地缓存', link: '/api/storeage' },
        { text: '防抖 & 节流', link: '/api/debounce' },
        { text: '深克隆', link: '/api/deepclone' },
        { text: '是否浏览器', link: '/api/getBrowser' },
        { text: 'ios|android', link: '/api/getDevice' },
        { text: '获取节点信息', link: '/api/getRect' },
        { text: '是否对象类型', link: '/api/isObject' },
        { text: '是否Promise', link: '/api/isPromise' },
        { text: '是否时间戳', link: '/api/isTimestamp' },
        { text: '是否Url', link: '/api/isUrl' },
        { text: '延时', link: '/api/sleep' },
        { text: '本地缓存', link: '/api/storage' },
      ]
    },
  ],
}
