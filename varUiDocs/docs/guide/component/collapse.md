# collapse 折叠面板
  通过折叠面板收纳内容区域,需要配合collapse-item组件

<webview url="/pages/feedback/collapse"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
      <v-collapse>
        <v-collapse-item name="item1" valueAlign="start" value="标题1">
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
        <v-collapse-item name="item2" valueAlign="end" value="标题2">
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
        <v-collapse-item name="item3" valueAlign="center" value="标题3">
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
        <v-collapse-item name="item4" valueAlign="end" value="标题4">
          <template v-slot:value>
            <v-text :fontSize="26" :margin="[0,16]"> 插槽自定义 </v-text>
          </template>
          <template v-slot:right>
            <v-icon color="red" name="icon-rocket"></v-icon>
          </template>
          <v-card :margin="[0]" :height="300"></v-card>
        </v-collapse-item>
      </v-collapse>
  </v-root>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
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
| activeKey | *String*, *Number*, *Array* |     []    | 展开的节点name列表                               |                                                     |

### collapse-item Props

|   参数   |        类型        |         默认值          | 描述            | 可选值 |
| :------: | :----------------: | :---------------------: | :-------------- | ------ |
|   name   | *String*, *Number* |            -            | 展开的节点 name |        |
|  height  | *Number*, *String* |          auto           | 高度            |        |
| openIcon |      *String*      | icon-chevron-up-outline | 打开的icon      |        |

### 共有的Props

|    参数    |  类型  |            默认值            | 描述                | 可选值 |
| :--------: | :----: | :--------------------------: | :------------------ | ------ |
|  *title*   | String |              -               | title文本           |        |
| valueColor | String |              -               | value的文本颜色     |        |
| valueSize  | Number |              28              | value的文本字体大小 |        |
|  leftIcon  | String |              -               | 左侧icon            |        |
|  leftSize  | Number |              42              | 左侧icon大小        |        |
| leftColor  | String |              -               | 左侧icon颜色        |        |
| rightIcon  | String | icon-chevron-forward-outline | 右侧icon            |        |
| rightSize  | Number |              42              | 右侧icon大小        |        |
| valueAlign | String |            start             | value的对齐方式     |        |
| rightColor | String |             #ccc             | 右侧icon颜色        |        |

### 插槽

| name    | 描述 |      |
| ------- | ---- | ---- |
| default |      |      |
|         |      |      |
|         |      |      |

