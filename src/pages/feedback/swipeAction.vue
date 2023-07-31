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