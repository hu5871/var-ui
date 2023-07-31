# mask 遮罩层
 创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景

<webview url="/pages/feedback/mask"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
   
    <v-mask v-model:show="show"></v-mask>
  </v-root>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      show: false,
     
    }
  },
  methods: {
  
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
| show | Boolean | false    | 控制遮罩层显示与隐藏                           |                   |
| width | Number,String |     0     | 默认跟随窗口宽度                                             |                                                     |
| *contentClass* | String |     -     | 容器的类名                                                  |                                                     |
| overlayClickClose | Boolean | true | 是否点击遮罩层可关闭 |        |
|  transparent  | Boolean |  false  | 遮罩层是否透明                                           |  |
|  _class  | String |     -     | 外层容器的类名                                   |  |
| filterBlur | Number |     0     | 滤镜效果，会使遮罩层后面的内容模糊                              |                                                     |
| duration | Number |   300 | 打开或关闭的动画效果持续时间                                   |  |
| bgColor | String | rgba(0,0,0,0.35) | 背景颜色                                                |  |
| zIndex | Number | 999 | 层级 |  |

### 插槽

无