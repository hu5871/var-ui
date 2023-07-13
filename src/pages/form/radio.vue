<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[26, 0]" label="基本例子"></v-text>
      <v-radio-group v-model="value">
        <v-radio label="苹果" name="apple">
        </v-radio>
        <v-radio label="猕猴桃" name="kiwifruit">
        </v-radio>
        <v-radio label="橙子" name="orange">
        </v-radio>
      </v-radio-group>
      <v-text :margin="[26, 0]"  label="图标"></v-text>
      <v-radio-group  v-model="value">
        <v-radio label="苹果" name="apple" icon="icon-logo-apple">
        </v-radio>
        <v-radio label="耳机" name="headset" icon="icon-headset">
        </v-radio>
        <v-radio label="锤子" name="hammer" icon="icon-hammer">
        </v-radio>
      </v-radio-group>
      <v-text :margin="[26, 0]" label="纵向"></v-text>
      <v-radio-group direction="col" v-model="value">
        <v-radio label="苹果" name="apple">
        </v-radio>
        <v-radio label="猕猴桃" name="kiwifruit">
        </v-radio>
        <v-radio label="橙子" name="orange">
        </v-radio>
        <v-radio bgColor="#f7c444" activeBgColor="#ea3a24" label="颜色" name="color">
        </v-radio>
        <v-radio label="异步选中" name="async" :asyncSelectedFun="asyncSelectedFun">
        </v-radio>
      </v-radio-group>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      value: 'apple'
    }
  },
  methods:{
    asyncSelectedFun(){
      this.$refs.root.showModal({model:'loading',text:'稍等'})
      return  new Promise(resolve=>{
        setTimeout(()=>{
          this.$refs.root.hideModal()
          resolve(true)
        },2000)
      })
    }
  }
}
</script>

<style></style>