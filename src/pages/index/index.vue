<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card bgColor="#f4f4f4" :height="200">
      <view class="flex flex-1">
        <view class="flex-1 flex-col ml-20 flex justify-center ">
          <v-transition :width="300" :height="100" v-model:show="nameShow" mode="slide-left">
            <v-card :margin="[0]" transparent :width="300">
              <v-image mode="scaleToFill" :src="logo" :width="200" :height="70"></v-image>
            </v-card>
          </v-transition>
          <v-transition width="100%" :height="100" v-model:show="nameShow" mode="slide-right">
            <v-card :margin="[0]" transparent width="100%" _contentClass="justify-center">
              <v-text label="Uniapp 多端兼容的 Vue3 TypeScript 组件库"></v-text>
            </v-card>
          </v-transition>
        </view>
      </view>
    </v-card>
    <v-card>
      <view class="flex justify-center">
        <v-text label="通用组件"></v-text>
      </view>
      <view class="flex flex-wrap justify-around">
        <v-card @click="toPage(item.page)" :margin="[16, 0]" bgColor="#74c3fa" width="49%" :height="120" isRow
          _contentClass="justify-between items-center" v-for="item in common" :key="item.title">
          <v-icon :color="item.iconColor" :name="item.icon"></v-icon>
          <v-text color="white" :label="item.title"></v-text>
        </v-card>
      </view>
    </v-card>
    <v-card :margin="[16]">
      <view class="flex justify-center">
        <v-text label="展示组件"></v-text>
      </view>
      <view class="flex flex-wrap justify-around">
        <v-card @click="toPage(item.page)" :margin="[16, 0]" bgColor="#5dbe8a" width="49%" :height="120" isRow
          _contentClass="justify-between items-center" v-for="item in show" :key="item.title">
          <v-icon :color="item.iconColor" :name="item.icon"></v-icon>
          <v-text color="white" :label="item.title"></v-text>
        </v-card>
      </view>
    </v-card>
    <v-card :margin="[16]">
      <view class="flex justify-center">
        <v-text label="反馈组件"></v-text>
      </view>
      <view class="flex flex-wrap justify-around">
        <v-card @click="toPage(item.page)" :margin="[16, 0]" bgColor="#fed71a" width="49%" :height="120" isRow
          _contentClass="justify-between items-center" v-for="item in feedback" :key="item.title">
          <v-icon :color="item.iconColor" :name="item.icon"></v-icon>
          <v-text color="white" :label="item.title"></v-text>
        </v-card>
      </view>
    </v-card>
    <v-card :margin="[16]">
      <view class="flex justify-center">
        <v-text label="表单组件"></v-text>
      </view>
      <view class="flex flex-wrap justify-around">
        <v-card @click="toPage(item.page)" :margin="[16, 0]" bgColor="#ef632b" width="49%" :height="120" isRow
          _contentClass="justify-between items-center" v-for="item in form" :key="item.title">
          <v-icon :color="item.iconColor" :name="item.icon"></v-icon>
          <v-text color="white" :label="item.title"></v-text>
        </v-card>
      </view>
    </v-card>
    <v-card :margin="[16]">
      <view class="flex justify-center">
        <v-text label="导航组件"></v-text>
      </view>
      <view class="flex flex-wrap justify-around">
        <v-card @click="toPage(item.page)" :margin="[16, 0]" bgColor="#ba2f7b" width="49%" :height="120" isRow
          _contentClass="justify-between items-center" v-for="item in navigation" :key="item.title">
          <v-icon :color="item.iconColor" :name="item.icon"></v-icon>
          <v-text color="white" :label="item.title"></v-text>
        </v-card>
      </view>
    </v-card>


  </v-root>
</template>

<script>

import logo from '../../static/var-logo.png'
export default {
  components:{
  },
  data () {
    return {
      logo,
      nameShow: true,
      common: [
        {
          title: 'root 根节点',
          icon: 'icon-albums',
          iconColor: 'white',
          page: '/pages/common/root'
        },
        {
          title: 'card 卡片容器',
          icon: 'icon-card',
          iconColor: 'white',
          page: '/pages/common/card'
        },
        {
          title: 'text 文本',
          icon: 'icon-language',
          iconColor: 'white',
          page: '/pages/common/text'
        },
        {
          title: 'button 按钮',
          icon: 'icon-tablet-landscape',
          iconColor: 'white',
          page: '/pages/common/button'
        },
        {
          title: 'icon 图标',
          icon: 'icon-fast-food',
          iconColor: 'white',
          page: '/pages/common/icon',
        },
        {
          title: 'html 富文本',
          icon: 'icon-newspaper',
          iconColor: 'white',
          page: '/pages/common/html',
        },
      ],
      show: [
        {
          icon: 'icon-person-circle',
          iconColor: 'white',
          page: '/pages/show/avatar',
          title: 'avatar 头像'
        },
        {
          icon: 'icon-person-circle',
          iconColor: 'white',
          page: '/pages/show/list',
          title: 'list 列表'
        },
        {
          icon: 'icon-chevron-forward-circle',
          iconColor: 'white',
          page: '/pages/show/cell',
          title: 'cell 单元格'
        },
        {
          icon: 'icon-hourglass-outline',
          iconColor: 'white',
          page: '/pages/show/countdown',
          title: 'countdown 倒计时'
        },
        {
          icon: 'icon-images-outline',
          iconColor: 'white',
          page: '/pages/show/image',
          title: 'image 图片'
        },
        {
          icon: 'icon-infinite',
          iconColor: 'white',
          page: '/pages/show/countup',
          title: 'countup 数字滚动'
        },
        {
          icon: 'icon-link-outline',
          iconColor: 'white',
          page: '/pages/show/tabs',
          title: 'tabs 选项卡'
        },
        {
          icon: 'icon-journal',
          iconColor: 'white',
          page: '/pages/show/indexed',
          title: 'indexed 索引列表'
        },
        {
          icon: 'icon-remove',
          iconColor: 'white',
          page: '/pages/show/line',
          title: 'line 分割线'
        },
        {
          icon: 'icon-grid-outline',
          iconColor: 'white',
          page: '/pages/show/grid',
          title: 'grid 九宫格'
        },
        {
          icon: 'icon-ellipsis-vertical',
          iconColor: 'white',
          page: '/pages/show/steps',
          title: 'steps 步骤条'
        },
        {
          icon: 'icon-water-outline',
          iconColor: 'white',
          page: '/pages/show/watermark',
          title: 'watermark 水印'
        },
      ],
      feedback: [
        {
          icon: 'icon-chatbox',
          iconColor: 'white',
          page: '/pages/feedback/popover',
          title: '气泡提示'
        },
        {
          icon: 'icon-checkbox',
          iconColor: 'white',
          page: '/pages/feedback/message',
          title: 'message提示'
        },
        {
          icon:'icon-volume-medium-outline',
          iconColor: 'white',
          page: '/pages/feedback/noticebar',
          title: '滚动消息通知'
        },
        {
          icon: 'icon-menu',
          iconColor: 'white',
          page: '/pages/feedback/collapse',
          title: '折叠面板'
        },
        {
          icon: 'icon-copy-outline',
          iconColor: 'white',
          page: '/pages/feedback/popup',
          title: '弹出层'
        },
        {
          icon: 'icon-stop',
          iconColor: 'white',
          page: '/pages/feedback/mask',
          title: '遮罩层'
        },
        {
          icon: 'icon-tablet-portrait-outline',
          iconColor: 'white',
          page: '/pages/feedback/modal',
          title: '模态框'
        },
        {
          icon: 'icon-ticket',
          iconColor: 'white',
          page: '/pages/feedback/transition',
          title: '动画'
        },
      ],
      form: [
        {
          icon: 'icon-tablet-landscape-outline',
          iconColor: 'white',
          page: '/pages/form/input',
          title: '输入框'
        },
        {
          icon: 'icon-person-add',
          iconColor: 'white',
          page: '/pages/form/form',
          title: '表单'
        },
        {
          icon: 'icon-calendar-number',
          iconColor: 'white',
          page: '/pages/form/calendar',
          title: '日历'
        },
        {
          icon: 'icon-checkmark-circle',
          iconColor: 'white',
          page: '/pages/form/checkbox',
          title: '复选框'
        },
        {
          icon: 'icon-ellipse',
          iconColor: 'white',
          page: '/pages/form/radio',
          title: '单选框'
        },
        {
          icon: 'icon-browsers',
          iconColor: 'white',
          page: '/pages/form/picker',
          title: '选择器'
        },
        {
          icon: 'icon-time',
          iconColor: 'white',
          page: '/pages/form/datetime',
          title: '时间选择器'
        },
        {
          icon: 'icon-star',
          iconColor: 'white',
          page: '/pages/form/rate',
          title: '评分'
        },
        {
          icon: 'icon-stats-chart',
          iconColor: 'white',
          page: '/pages/form/stepper',
          title: '步进'
        },
        {
          icon: 'icon-git-commit-outline',
          iconColor: 'white',
          page: '/pages/form/slider',
          title: '滑动选择器'
        },
        {
          icon: 'icon-toggle',
          iconColor: 'white',
          page: '/pages/form/switch',
          title: 'switch开关'
        },
        {
          icon: 'icon-cloud-upload',
          iconColor: 'white',
          page: '/pages/form/upload',
          title: '上传'
        },
      ],
      navigation: [
        {
          icon: 'icon-navigate',
          iconColor: 'white',
          page: '/pages/navigation/navbar',
          title: 'navbar 标题导航'
        },
        {
          icon: 'icon-newspaper',
          iconColor: 'white',
          page: '/pages/navigation/sidebar',
          title: 'sidebar 侧边导航'
        },
        {
          icon: 'icon-link',
          iconColor: 'white',
          page: '/pages/navigation/subsection',
          title: 'subsection 分段器'
        },
      ]
      //   showCustomModel:false,
      //   customMap:{
      //     color:'',
      //     name:''
      //   },
      //   inputValue: '',
      //   checkBoxValue: false,
      //   checkBoxValue1: true,
      //   checkboxGroupValue: ['grape'],
      //   radioGroupValue: '',
      //   showTransition: false,
      //   switchValue: true,
      //   stepperValue: 0,
      //   rate0: 0,
      //   rate1: 0,
      //   slider: 0,
      //   slider1: [0, 10],
      //   slider2: 0,
      //   slider3: [0, 10],
      //   calendar: ['2023yy04/05-', 1681504101009, 1681504000, new Date()],
      //   calendar1: ['2023yy04/05-', 1681504101009, 1681504000, new Date()],
      //   calendar2: ['2023yy04/05-', 1681504101009, 1681504000, new Date(), 1934812800000],
      //   mask: false,
      //   dateTime1: '2023年12月22日',
      //   dateTime2: '2023/12月',
      //   dateTime3: '2023年12月22 13时13分12秒',
      //   dateTime4: '13时13分12秒',
      //   popup: false,
      //   popupMode: 'bottom',
      //   popDatePicker1: false,
      //   popDatePicker2: false,
      //   popDatePicker3: false,
      //   popDatePicker4: false,
      //   columns: [
      //     {
      //       text: '北京',
      //       children: [
      //         {
      //           text: '市辖区',
      //           children: [
      //             {
      //               text: '朝阳区'
      //             },
      //             {
      //               text: '西城区'
      //             }
      //           ]
      //         }
      //       ]
      //     },
      //     {
      //       text: '广东省',
      //       children: [
      //         {
      //           text: '深圳',
      //           children: [
      //             {
      //               text: '宝安区'
      //             },
      //             {
      //               text: '南山区'
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ],
    }
  },

  created () {
  },
  methods: {
    toPage (page) {
      uni.navigateTo({
        url: page
      })
    },
  }
}
</script>

<style></style>