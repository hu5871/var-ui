# indexed 索引列表
 常见的索引列表组件,需要配合v-indexed-item组件使用

<webview url="/pages/show/indexed"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card :height="1000">
      <v-indexed :height="1000">
        <v-indexed-item v-for="item in list" :key="item.id" :id="item.id">
          <v-card :height="200" >
          </v-card>
        </v-indexed-item>
      </v-indexed>
    </v-card>
  </v-root>
</template>

<script>
export default {
  created () {
    // 生成包含小写字母a-z的数组
    var alphabetArray = [];
    for (let i = 97; i <= 122; i++) {
      var letter = String.fromCharCode(i);
      alphabetArray.push({id:letter});
    }
    this.list=alphabetArray
  },
  data () {
    return {
      list: [
        
      ]
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

### indexed Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| width | String | auto | 宽度 |  |
| *height* | *Number*, *String* | 700 | 高度 |  |
| round | Number | 30 | 圆角 |  |
| rows |    Number    | 1 | 行 |  |
| lineBgColor | String | white | 右侧选项条背景颜色 |  |
| lineActiveColor | String | \#2d8cf0 | 右侧选项条选中字体颜色 |  |

### indexed-item Props

|      参数       |        类型        |  默认值  | 描述                       | 可选值 |
| :-------------: | :----------------: | :------: | :------------------------- | ------ |
|       id        |       String       |    -     | 唯一键，显示在右边选项条中 |        |
|    *height*     | *Number*, *String* |   auto   | 高度                       |        |
|      width      |       String       |   auto   | 宽度                       |        |
|  titleBgColor   |       String       | \#f7f7f7 | title区域的背景颜色        |        |
|   lineBgColor   |       String       |  white   | 右侧选项条背景颜色         |        |
| lineActiveColor |       String       | \#2d8cf0 | 右侧选项条选中字体颜色     |        |

### 插槽

| name    |
| ------- |
| default |

### 事件

| 事件名 | 参数 |
| ------ | ---- |
| click  |      |

