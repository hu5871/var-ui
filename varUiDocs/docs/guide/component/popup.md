# popup 弹出层
  弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件提供手势关闭（中部弹出除外）

<webview url="/pages/feedback/popup"></webview>

```vue
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

export default {
  components: {
    
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
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持 | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| show | Boolean |     false     | 控制显示和隐藏                                     |                                                     |
| mode | String |    bottom | 从哪弹出                                       | left、right、top、bottom、center |
| *showMask* | Boolean |     true     | 显示弹出层                                                |                                                     |
| overlayClickClose | Boolean | true | 是否可以通过点击遮罩层关闭 |  |
|  opacity  | Number |  .45  | 透明度                                          |  |
|  round  | Number |     16     | 圆角                                                         |  |
| bgColor | String |     white     | 背景颜色                                                     |                                                     |
| touchAngle |    Number     |   .4   | 手势关闭触摸拖动时，需要拉动范围越小            |  |
| duration | Number |   300   | 动画持续时间                                                 |  |
| width | Number,String | 100% | 宽度（mode为left、right时根据用户内容宽度设置） |  |

### 插槽

| name    | 描述     |
| ------- | -------- |
| default | 内容插槽 |

