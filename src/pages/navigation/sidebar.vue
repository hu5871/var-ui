<template>
  <v-root bgColor="rgb(245, 245, 245)">
      <v-sidebar :height="800"  v-model:active="active" :sideHeight="80" sideBgColor="#f7c444">
        <v-sidebar-item title="热门">
          <v-card :margin="[0]" bgColor="red" :height="300">
            热门
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="主食">
          <v-card :margin="[0]" :height="400">
            主食
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="小菜">
          <v-card :margin="[0]" bgColor="red" :height="500">
            小菜
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="滋补高汤">
          <v-card :margin="[0]" :height="600">
            滋补高汤
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="包装">
          <v-card :margin="[0]" bgColor="red" :height="300">
            包装
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="小料">
          <v-card :margin="[0]" :height="300">
            小料
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="米面">
          <v-card :margin="[0]" bgColor="red" :height="300">
            米面
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="蔬菜">
          <v-card :margin="[0]" :height="300">
            蔬菜
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="肉食">
          <v-card :margin="[0]" bgColor="red" :height="300">
            肉食
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="商家">
          <v-card :margin="[0]" :height="300">
            商家
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="测试">
          <v-card :margin="[0]" bgColor="red" :height="300">
            测试
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="筷子">
          <v-card :margin="[0]" :height="300">
            筷子
          </v-card>
        </v-sidebar-item>
        <v-sidebar-item title="加料">
          <v-card :margin="[0]" bgColor="red" :height="300">
            加料
          </v-card>
        </v-sidebar-item>
      </v-sidebar>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {

  }
}
</script>

<style></style>