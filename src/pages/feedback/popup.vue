<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-text :margin="[16,0]" label="基本使用 可以滑动容器关闭"></v-text>
    <v-card :isRow="true" _contentClass="justify-around">
      <v-button @click="handleClick('left')" type="primary" size="small">左边弹出</v-button>
      <v-button @click="handleClick('top')" type="primary" size="small">顶部弹出</v-button>
      <v-button @click="handleClick('center')" type="primary" size="small">居中</v-button>
      <v-button @click="handleClick('bottom')" type="primary" size="small">底部弹出</v-button>
      <v-button @click="handleClick('right')" type="primary" size="small">右边弹出</v-button>
    </v-card>
    <v-popup v-model:show="show" :mode="mode">
      <v-card v-if="mode == 'left' || mode == 'right'" :width="300">
      </v-card>
      <v-card v-if="mode == 'top' || mode == 'bottom'" :height="500">
      </v-card>
      <v-card v-if="mode == 'center'" :width="300" :height="300">
      </v-card>
    </v-popup>
  </v-root>
</template>

<script>
import VCard from '../../var-ui/components/v-card/v-card.vue'
export default {
  components: {
    VCard
  },
  data () {
    return {
      show: false,
      mode: 'left'
    }
  },
  methods: {
    handleClick (mode) {
      mode && (this.mode = mode)
     this.show=true
    }
  }
}
</script>

<style></style>