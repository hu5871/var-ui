<template>
  <v-root bgColor="rgb(245, 245, 245)" :padding="[0, 20]">
    <v-tabs v-model="tabList" v-model:active="active">
    </v-tabs>
    <view class="flex-grow-1 height-0 flex flex flex-col">
      <v-list v-if="active === '普通列表'" ref="listNone" itemKey="id" v-model="list1" bgColor="rgb(245, 245, 245)"
        @down="(e) => handleDown(e, 'none')" @loadMore="(e) => handleLoadMore(e, 'none')">
        <v-card :margin="[16, 16]" :height="80" v-for="item in list1" :key="item">
          <v-text>{{ item === 1 ? 'list组件默认支持下拉刷新、上拉加载,' : '' }}第{{ item }}条数据</v-text>
        </v-card>
      </v-list>
      <v-list v-if="active === '瀑布流列表'" ref="list" itemKey="id" v-model="list" bgColor="rgb(245, 245, 245)" :column="2"
        :isWaterfall="true" @down="handleDown" @loadMore="handleLoadMore">
        <template v-slot:top>
          <v-card :height="100">
            <view class="flex justify-around">
              <v-button @click="clearList">清空数组</v-button>
              <v-button @click="randomUpdateData" type="warning">更改数据</v-button>
              <v-button @click="deleteData" type="error">删除数据</v-button>
            </view>
          </v-card>
        </template>
        <template v-slot:waterfall1="{ colList }">
          <v-card :margin="[10, 0]" v-for="item in colList" :key="item.id">
            <v-image :round="20" width="100%" mode="heightFix" :src="item.image"></v-image>
            <v-text :fontSize="34">{{ item.title }}</v-text>
            <v-text :margin="[item.isLong ? 20 : 10, 0]" :textOverflow="item.isLong ? 2 : 1">{{ item.text }}</v-text>
          </v-card>
        </template>
        <template v-slot:waterfall2="{ colList }">
          <v-card :margin="[10, 0]" v-for="item in colList" :key="item.id">
            <v-image :round="20" width="100%" mode="heightFix" :src="item.image"></v-image>
            <v-text :fontSize="34">{{ item.title }}</v-text>
            <v-text :margin="[item.isLong ? 20 : 10, 0]" :textOverflow="item.isLong ? 2 : 1">{{ item.text }}</v-text>
          </v-card>
        </template>
      </v-list>
      <v-list v-if="active === '虚拟列表(固定高度)'"  ref="list" itemKey="id" v-model="list2"
        :isVirtual="true" @down="handleDownVirtual" @loadMore="handleLoadMoreVirtual">
        <!-- <block v-slot:vitual="{ data }">
          <view :margin="[0,0]" :style="{height:'200rpx'}" v-for="(item, index) in data.list" :key="item.v_list_uid"
            :class="data._class + item.v_list_index">
            <view class="flex flex-row h-full items-center">
              <v-image :round="10" :height="200" :src="item.img"></v-image>
              <view class="flex-1 h-full ml-10 flex flex-col justify-between">
                <v-text :fontSize="34" :label="item.title"></v-text>
                <v-text :textOverflow="2" :label="item.desc"></v-text>
                <view class style="height: 2rpx;background-color: brown;"></view>
              </view>
            </view>
          </view>
        </block> -->
      <template v-slot:list="{ item, index }">
        <view style="height:200rpx;">
          <view class="flex flex-row h-full items-center">
              <v-image :round="10" :height="200" :src="item.img"></v-image>
              <view class="flex-1 h-full ml-10 flex flex-col justify-between">
                <v-text :fontSize="34" :label="item.title"></v-text>
                <v-text :textOverflow="2" :label="item.desc"></v-text>
                <view class style="height: 2rpx;background-color: brown;"></view>
              </view>
            </view>
        </view>
      </template>
      </v-list>
      <!-- <v-list v-if="active === '虚拟列表(固定高度)'" :that="this" ref="list" itemKey="id" v-model="list2"
        bgColor="rgb(245, 245, 245)" :isVirtual="true" @down="handleDownVirtual" @loadMore="handleLoadMoreVirtual">
        <block v-slot:vitual="{ data }">
          <view :margin="[0,0]" :style="{height:'200rpx'}" v-for="(item, index) in data.list" :key="item.v_list_uid"
            :class="data._class + item.v_list_index">
            <view class="flex flex-row h-full items-center">
              <v-image :round="10" :height="200" :src="item.img"></v-image>
              <view class="flex-1 h-full ml-10 flex flex-col justify-between">
                <v-text :fontSize="34" :label="item.title"></v-text>
                <v-text :textOverflow="2" :label="item.desc"></v-text>
                <view class style="height: 2rpx;background-color: brown;"></view>
              </view>
            </view>
          </view>
        </block>
      </v-list> -->

       <!-- <template v-slot:list="{ item, index }">
        <view style="height:200rpx;">
          <view class="flex flex-row h-full items-center">

            <view class="flex-1 h-full ml-10 flex flex-col justify-between">
              <v-text :fontSize="34" :label="item.title"></v-text>
              <v-text :textOverflow="2" :label="item.desc"></v-text>
              <view class style="height: 2rpx;background-color: brown;"></view>
            </view>
          </view>

        </view>
      </template> -->
      <!-- <v-list v-if="active === '虚拟列表(动态高度)'" ref="list" itemKey="id" v-model="list2" bgColor="rgb(245, 245, 245)"
        :isVirtual="true" virtualType="auto" @down="handleDownVirtual" @loadMore="handleLoadMoreVirtual">
        <template v-slot:list="{ data }">
          <v-card :margin="[16, 0]" :height="data.height">
            <view class="flex flex-row h-full items-center">
              <v-image :height="data.height - 20" :round="18" :src="data.img"></v-image>
              <view class="flex-1 h-full ml-10 flex flex-col justify-around">
                <v-text :fontSize="34">{{ data.title }}</v-text>
                <v-text :textOverflow="2">{{ data.desc }}</v-text>
              </view>
            </view>
          </v-card>
        </template>

      </v-list> -->
    </view>
  </v-root>
</template>

<script>
import { nextTick } from 'vue'

import ohImag from '../../static/oh.webp'

export default {
  data () {
    return {
      tabList: [
        {
          name: '普通列表',
          title: '普通列表'
        },
        {
          name: '瀑布流列表',
          title: '瀑布流列表'
        },
        // #ifndef MP-WEIXIN
        {
          name: '虚拟列表(固定高度)',
          title: '虚拟列表(固定高度)'
        },
        // #endif
      ],
      active: '普通列表',
      list1: [],
      list: [],
      list2: [],
      longText: '灰太狼来了狗熊岭，教会了光头强抓杰瑞',
      shortText: '免费且开源'
    }
  },
  created () {
    this.list1 = new Array(100).fill(0).map((t, index) => index + 1)
    this.list2 = new Array(100).fill(0).map((t, index) => ({
      // img: `https://picsum.photos/300/150?t=${new Date().getTime()}`,
      id: index,
      img: ohImag,
      title: `第${index}行`,
      desc: this.longText,
      height: this.randomHeight()
    }))
    this.list = [...this.list, ...this.createList()]
  },
  mounted () {
    //  setTimeout(()=>{
    //   this.$nextTick(()=>{
    //     uni.$var.utils.getRect(`.v-list__virtual_0`, this).then((rect) => {
    //       console.log(rect)
    //     })
    //   })
    //  },1000)
  },
  methods: {
    createList (i = '') {
      let cList = []
      if (this[`list${i}`].length >= 500) return cList
      for (let index = 0; index < 10; index++) {
        let isLong = Math.random() > .3
        cList.push({
          id: this.list.length + index,
          image: `https://picsum.photos/300/150?t=${new Date().getTime()}`,
          title: `(${this.list.length + index + 1}) 这是标题`,
          text: isLong ? this.longText : this.shortText,
          isLong
        })
      }
      return cList
    },
    clearList () {
      this.list = []
    },
    randomUpdateData () {
      this.list[0].title = '修改了标题' + Math.round(Math.random() * 100)
      this.$refs.list?.updateItem(this.list[0].id, { ... this.list[0] })
    },
    deleteData () {
      const id = this.list[0].id
      const index = this.list.findIndex(item => item.id == id)
      this.list.splice(index, 1)
      this.$refs.list?.deleteItem(id)
    },
    handleDown ({ callback }, type) {
      if (type === 'none') {
        callback()
        return
      }
      setTimeout(() => {
        this.list = [...[]]
        nextTick(() => {
          this.list = [].concat(...this.createList())
        })
        callback()
      }, 3000)
    },

    handleLoadMore ({ callback }, type) {
      if (type === 'none') {
        callback(true)
        return
      }
      setTimeout(() => {
        const list = this.createList()
        this.list = [...this.list, ...list]
        callback(Boolean(!list.length))
      }, 2000)
    },
    handleDownVirtual ({ callback }) {
      setTimeout(() => {
        this.list2 = [...[]]
        nextTick(() => {
          this.list2 = [].concat(...this.createList(2))
        })
        callback()
      }, 3000)
    },
    queryList () {
      const list = []
      let value = this.list2.length
      // if(value>=100){
      //   callback(Boolean(!list.length))
      //   return
      // }
      for (let index = 0; index < 100; index++) {
        list.push({
          id: value + index,
          img: `https://picsum.photos/300/150?t=${new Date().getTime()}`,
          title: `第${value}行`,
          desc: this.longText,
          height: this.randomHeight()
        })
        value++
      }
      console.log(this.$refs.list)
      this.$refs.list.complete(list)
    },
    handleLoadMoreVirtual ({ callback }) {
      const list = []
      let value = this.list2.length
      // if(value>=100){
      //   callback(Boolean(!list.length))
      //   return
      // }

      for (let index = 0; index < 100; index++) {
        list.push({
          id: value + index,
          img: ohImag,
          title: `第${value}行`,
          desc: this.longText,
          height: this.randomHeight()
        })
        value++
      }
      setTimeout(() => {
        this.list2 = [...this.list2, ...list]
        callback(Boolean(!list.length))
      }, 2000)
    },
    randomHeight () {
      let height = Math.ceil(Math.random() * 5) * 150
      return height
    }
  }
}
</script>

<style>
.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx 30rpx;
}

.item-content {
  flex: 1;
  margin-left: 20rpx;
}

.header {
  background-color: red;
  font-size: 24rpx;
  text-align: center;
  padding: 20rpx 0rpx;
  color: white;
}

.item-image {
  height: 150rpx;
  width: 150rpx;
  background-color: #eeeeee;
  border-radius: 10rpx;
}

.item-title {
  font-size: 26rpx;
  border-radius: 5rpx;
  padding: 5rpx 10rpx;
}

.item-detail {
  margin-top: 10rpx;
  border-radius: 10rpx;
  font-size: 28rpx;
  color: #aaaaaa;
  word-break: break-all;
}

.item-line {
  position: absolute;
  bottom: 0rpx;
  left: 0rpx;
  height: 1px;
  width: 100%;
  background-color: #eeeeee;
}
</style>