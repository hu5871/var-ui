# swipeAction 滑动单元格

该组件一般用于左滑唤出操作菜单的场景。

<webview url="/pages/feedback/swipeAction"></webview>

```vue
<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
      <v-card>
        <v-swipe-action>
          <v-swipe-action-item  :options="options1" @click="handleClick">
           <view class="flex items-center">
            滑动单元格1
           </view>
          </v-swipe-action-item>
          <v-swipe-action-item   :options="options2" :clickClose="false" @click="handleClick2">
           <view class="flex items-center">
            滑动单元格2(手动控制菜单关闭)
           </view>
          </v-swipe-action-item>
          <v-swipe-action-item   :borderBottom="1" :options="options3" @click="handleClick">
           <view class="flex items-center">
            滑动单元格3(底部边框)
           </view>
          </v-swipe-action-item>
        </v-swipe-action>
      </v-card>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      options1:[
        {
          text:'删除',
          id:1,
          size:28,
          color:'#ffffff',
          bgColor:'#ea3a24',
        },
        {
          icon:'icon-bookmarks',
          iconSize:20,
          text:'收藏',
          id:2
        },
        {
          icon:'icon-arrow-redo-circle',
          id:3
        }
      ],
      options2:[
        {
          icon:'icon-backspace',
          iconColor:'#fff',
          bgColor:'#ea3a24',
          width:80,
          borderRadius:'999px',
          id:1
        }
      ],
      options3:[
        {
          icon:'icon-bookmarks',
          iconSize:20,
          iconPosition:'right',
          text:'收藏',
          id:2
        },
      ],
    }
  },
  methods: {
    handleClick({item,index}) {
     console.log(item,index)
     uni.showToast({title:item.text ?? '按钮'+index,icon:'none'})
    },
    handleClick2({item,index,close}) {
      this.$refs.root.showModal({model:'loading',title:'稍等片刻'})
      setTimeout(()=>{
        this.$refs.root.hideModal()
        close()
      },3000)
    }
  }
}
</script>

<style></style>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### swipeItem Props

|     参数     |      类型      |     默认值     | 描述                                             | 可选值                          |
| :----------: | :------------: | :------------: | :----------------------------------------------- | ------------------------------- |
|   options    |     Array      | SwipeOptions[] | 滑动出来的操作菜单配置（类型见下方SwipeOptions） |                                 |
|   disabled   |    Boolean     |     false      | 是否可滑动                                       |                                 |
|  clickClose  |    Boolean     |      true      | 是否点击菜单后自动关闭                           |                                 |
|   duration   |     Number     |      300       | 动画持续事件（ms）                               |                                 |
|  threshold   |     Number     |       30       | 滑动小与这个距离将关闭（px）                     |                                 |
|    width     | Number\|String |      auto      | 容器宽                                           |                                 |
|    height    | Number\|String |       80       | 容器高                                           |                                 |
| borderBottom |     Number     |       0        | 底部边框                                         |                                 |
| borderColor  |     String     |    \#919398    | 边框颜色                                         |                                 |
|     unit     |     String     |      rpx       | 像素                                             |                                 |
|   bgColor    |     String     |    #FFFFFF     | 背景色                                           |                                 |
|    margin    |     Array      |     [4,0]      | 外边距                                           | 拟同css ,数组长度可为1、2、3、4 |
|   padding    |     Array      |     [0,16]     | 内边距                                           | 拟同css ,数组长度可为1、2、3、4 |

#### options详细类型

```typescript
export interface SwipeOptions{
  id:string|number;
  // 文本
  text?:string;
  size?:number;
  color?:string;
  // 背景
  bgColor:string;
  // icon
  iconPosition?:string; // icon在左侧或右侧 默认左侧 可选 left|right
  icon?:string;
  iconSize?:number;
  iconColor?:string;
  // 圆
  borderRadius?:number|string;
  // 宽
  width:string|number;
}
```



### 插槽

| name    | 描述     |      |
| ------- | -------- | ---- |
| default | 内容插槽 |      |
| right   | 菜单插槽 |      |
|         |          |      |



### 事件

| 事件名 | 回调参数       | 描述                                           |
| ------ | -------------- | ---------------------------------------------- |
| change | value          | 当前操作菜单的状态0:关闭 1:展开                |
| click  | *{index,item}* | 当点击时触发（回调参数可解构获得索引和当前项） |
