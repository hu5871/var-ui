# picker 选择器

 此选择器用于单列，多列，多列联动的选择场景。

<webview url="/pages/form/picker"></webview>

```vue
<template>
   <v-root>
    <v-popover bgColor="#6e6e6e">
          <v-button type="primary" size="small">下方显示</v-button>
          <template v-slot:content>
            <v-card :margin="[0]" :isRow="true" bgColor="#6e6e6e"   :width="350" _contentClass="justify-between">
             <v-button >按钮1</v-button>
             <v-button >按钮2</v-button>
             <v-button >按钮3</v-button>
            </v-card>
          </template>
        </v-popover>
   </v-root>
</template>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| ------- | ---------- | ---- |
| 支持    | 支持       | 支持 |

### Props

|      参数      |        类型        |  默认值  | 描述                       | 可选值 |
| :------------: | :----------------: | :------: | :------------------------- | ------ |
|     isPop      |      Boolean       |   true   | 是否弹窗模式               |        |
|      show      |      Boolean       |  false   | isPop为true有效            |        |
|   *isHeader*   |      Boolean       |   true   | 弹窗顶部关闭icon           |        |
|    joinStr     |       String       |    -     | 选中每列的数据之间的连接符 |        |
|    columns     |       Array        |    []    | 数据源                     |        |
|  defaultIndex  |       Array        |    []    | 默认选中的索引列表         |        |
|    labelKey    |       String       |   text   | 显示文本的key              |        |
|    maxLevel    |       Number       |    3     | 展示的列数                 |        |
|  childrenKey   |       String       | children | 每列对应下一列的key        |        |
|     height     | *Number*, *String* |   600    | 高度                       |        |
| containerStyle |       Object       |    {}    | 自定义容器样式             |        |
|   itemStyle    |       Object       |    {}    | 自定义每一项样式           |        |
|   cancelText   |       String       |   取消   | 弹窗模式顶部的取消文本     |        |
|  confirmText   |       String       |   确认   | 弹窗模式顶部的确认文本     |        |
|  cancelColor   |       String       | \#606266 | 取消的文本颜色             |        |
|  confirmColor  |       String       | \#2d8cf0 | 确认的文本颜色             |        |
|   titleText    |       String       |    -     | 标题文本                   |        |
|   titleColor   |       String       | \#333333 | 标题文本颜色               |        |

### 插槽

| name    | 描述                                        |      |
| ------- | ------------------------------------------- | ---- |
| top     | 弹窗模式下顶部的插槽                        |      |
| cancel  | 取消文本处的插槽，注意cancel插槽在top插槽中 |      |
| title   | 标题文本处的插槽，同上                      |      |
| confirm | 确认文本处的插槽，同上                      |      |

