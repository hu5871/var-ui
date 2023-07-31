<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card isRow  >
      <v-button :margin="[0,16]" @click="handleClick(1)" type="primary">正常</v-button>
      <v-button :margin="[0,16]" @click="handleClick(2)" type="primary">异步</v-button>
      <v-button :margin="[0,16]" @click="handleClick(3)" type="primary">胶囊按钮</v-button>
      <v-button :margin="[0,16]" @click="handleClick(4)" type="primary">单取消</v-button>
      <v-button :margin="[0,16]" @click="handleClick(5)" type="primary">单确认</v-button>
    </v-card>
    <v-modal v-model:show="show1" title="标题1">
      <view class="overflow-y-auto">
        <view v-for="item in 100" :key="item">
          {{ item }}
        </view>
      </view>
    </v-modal>
    <v-modal v-model:show="show2" :asyncClose="sleep" title="标题2">
      <view class="overflow-y-auto">
        <view v-for="item in 100" :key="item">
          {{ item }}
        </view>
      </view>
    </v-modal>
    <v-modal v-model:show="show3" capsuleBtn title="标题3" cancelBgColor="#d0dfe6" cancelColor="white" confirmBgColor="#fecc11">
      <view class="overflow-y-auto">
        <view v-for="item in 100" :key="item">
          {{ item }}
        </view>
      </view>
    </v-modal>
    <v-modal v-model:show="show4" capsuleBtn title="标题4" :showConfirmButton="false" cancelColor="white" cancelBgColor="#fecc11">
      <view class="overflow-y-auto">
        <view v-for="item in 100" :key="item">
          {{ item }}
        </view>
      </view>
    </v-modal>
    <v-modal v-model:show="show5" capsuleBtn title="标题5" :showCancelButton="false" confirmBgColor="#fecc11">
      <view class="overflow-y-auto">
        <view v-for="item in 100" :key="item">
          {{ item }}
        </view>
      </view>
    </v-modal>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
    }
  },
  watch: {
    show1 () {
      console.log('show')
    }
  },
  methods: {
    sleep () {
      this.$refs.root.showModal({model:'loading',title:"稍等"})
      return new Promise(resolve => {
        setTimeout(() => {
          this.$refs.root.hideModal()
          resolve(true)
        }, 1500);
      })
    },
    handleClick (index) {
      this[`show${index || ''}`] = true
    }
  }
}
</script>

<style></style>