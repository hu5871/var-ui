<template>
  <v-root ref="root" bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :margin="[26, 0]" label="基本例子"></v-text>
      <v-checkbox-group v-model="value1">
        <v-checkbox label="苹果" name="apple">
        </v-checkbox>
        <v-checkbox label="猕猴桃" name="kiwifruit">
        </v-checkbox>
        <v-checkbox label="橙子" name="orange">
        </v-checkbox>
      </v-checkbox-group>
      <v-text :margin="[26, 0]"  label="限制最多一个可选中"></v-text>
      <v-checkbox-group :max="1" v-model="value2">
        <v-checkbox label="苹果" name="apple">
        </v-checkbox>
        <v-checkbox label="猕猴桃" name="kiwifruit">
        </v-checkbox>
        <v-checkbox label="橙子" name="orange">
        </v-checkbox>
      </v-checkbox-group>
      <v-text :margin="[26, 0]"  label="图标"></v-text>
      <v-checkbox-group  v-model="value3">
        <v-checkbox label="苹果" name="apple" icon="icon-logo-apple">
        </v-checkbox>
        <v-checkbox label="耳机" name="headset" icon="icon-headset">
        </v-checkbox>
        <v-checkbox label="锤子" name="hammer" icon="icon-hammer">
        </v-checkbox>
      </v-checkbox-group>
      <v-text :margin="[26, 0]" label="纵向"></v-text>
      <v-checkbox-group direction="col" v-model="value4">
        <v-checkbox label="苹果" name="apple">
        </v-checkbox>
        <v-checkbox label="猕猴桃" name="kiwifruit">
        </v-checkbox>
        <v-checkbox label="橙子" name="orange">
        </v-checkbox>
        <v-checkbox bgColor="#f7c444" activeBgColor="#ea3a24" label="颜色" name="color">
        </v-checkbox>
        <v-checkbox label="异步选中" name="async" :asyncSelectedFun="asyncSelectedFun">
        </v-checkbox>
      </v-checkbox-group>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      value1: ['apple'],
      value2: [],
      value3: [],
      value4: [],
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