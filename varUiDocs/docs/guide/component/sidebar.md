### sidebar 侧边导航

 主要是应用于类目分类,产品分类,过多时的竖向展示切换。需要配合sidebar-item

<webview url="/pages/navigation/sidebar"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
      <v-sidebar :height="700"  v-model:active="active" :sideHeight="80" sideBgColor="#f7c444">
        <v-sidebar-item title="热门">
          <v-card bgColor="red" :height="300">
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
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|    参数     |     类型      |  默认值  | 描述                                                         | 可选值 |
| :---------: | :-----------: | :------: | :----------------------------------------------------------- | ------ |
|   active    |    Number     |    0     | 默认选中的索引,使用v-model:active双向绑定                    |        |
|  sideWidth  | String,Number |   180    | 左侧菜单宽度                                                 |        |
| sideHeight  | String,Number |    80    | 左侧菜单高度                                                 |        |
|    unit     |    String     |   rpx    | 像素单位                                                     |        |
|   height    | String,Number |   700    | 高度,尽量不要设置百分比值，因为百分比右侧内容会溢出，会使页面滚动 |        |
|    width    |    String     |   100%   | 宽度                                                         |        |
|   bgColor   |    String     |    -     | 背景色                                                       |        |
| sideBgColor |    String     | \#f6f8fa | 左侧菜单背景颜色                                             |        |
|    color    |    String     | \#2b312c | 左侧菜单文本颜色                                             |        |
|  *backFun*  |   Function    | ()=>true | 返回时，对用户离开有什么操作或提示可使用                     |        |
|             |               |          |                                                              |        |

### 插槽

| name  | 描述      |      |
| ----- | --------- | ---- |
| left  | 左侧插槽  |      |
| home  | home插槽  |      |
| title | title插槽 |      |
| right | right插槽 |      |

