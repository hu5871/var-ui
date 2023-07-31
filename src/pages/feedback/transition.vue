<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-cell v-for="item in list" :key="item.mode" @click="handleClick(item)" :title="item.title"></v-cell>
    </v-card>
    <v-card :margin="[16,16]">
      <v-cell title="动画时间 (毫秒)" >
        <template v-slot:value>
          <v-input type="number" v-model="duration"></v-input>
        </template>
      </v-cell>
    </v-card>
   <v-mask v-model:show="show" transparent contentClass="justify-center items-center" >
    <v-transition :animationEndClose="true" :zIndex="99999" v-model:show="show" :duration="duration" :mode="mode" :width="300" :height="300">
      <v-card :width="300" :height="300" bgColor="#3c9566"></v-card>
    </v-transition>
   </v-mask>
  </v-root>
</template>

<script>

// fade 淡入
// fade-up 上滑淡入
// fade-down 下滑淡入
// fade-left 左滑淡入
// fade-right 右滑淡入
// slide-up 上滑进入
// slide-down 下滑进入
// slide-left 左滑进入
// slide-right 右滑进入
// zoom-in 缩放
// zoom-out 缩放
export default {
  components: {
  },
  data () {
    return {
      show: false,
      mode: '',
      duration:1500,
      list: [
        {
          title: '淡入',
          mode: 'fade'
        },
        {
          title: '上滑淡入',
          mode: 'fade-up'
        },
        {
          title: '下滑淡入',
          mode: 'fade-down'
        },
        {
          title: '左滑淡入',
          mode: 'fade-left'
        },
        {
          title: '右滑淡入',
          mode: 'fade-right'
        },
        {
          title: '上滑进入',
          mode: 'slide-up'
        },
        {
          title: '下滑进入',
          mode: 'slide-down'
        },
        {
          title: '左滑进入',
          mode: 'slide-left'
        },
        {
          title: '右滑进入',
          mode: 'slide-right'
        },
        {
          title: '缩放淡入',
          mode: 'zoom-in'
        },
        {
          title: '缩放淡出',
          mode: 'zoom-out'
        },
      ],
    }
  },
  methods: {
    handleClick (item) {
      this.mode = item.mode
      this.show = true
      // setTimeout(()=>{
      //   this.show = false
      // },this.duration)
    }
  }
}
</script>

<style></style>