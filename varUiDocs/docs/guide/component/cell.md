# cell 单元格
  cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。

<webview url="/pages/show/cell"></webview>

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
       <v-cell title="标题1" value="value"></v-cell>
      <v-cell title="标题2" leftIcon="icon-pencil" rightIcon="icon-pricetag" value="value"></v-cell>
      <v-cell title="标题3" >
        <template v-slot:value>
          <v-input ></v-input>
        </template>
      </v-cell>
      <v-cell value="value">
        <template v-slot:title>
          <v-input ></v-input>
        </template>
      </v-cell>
  </v-root>
</template>
```


### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持 | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| title | String | - | 标题 |  |
| *titleColor* | String | - | 标题颜色 |  |
| titleSize | Number | 28 | 标题字体大小 |  |
| value |    String    | - | 右侧文本 |  |
| valueColor | String | - | 右侧文本颜色 |  |
| valueSize | Number | 28 | 右侧文本大小 |  |
|   leftIcon   | String |    -    | 左侧icon名称               |                                           |
| leftSize | Number |    42    | 左侧icon大小             |                                           |
|   leftColor   |  String |    -    | 左侧icon颜色                       |                                           |
|  rightIcon   | String  | icon-chevron-forward-outline | 右侧icon名称                          |                                 |
|  lrightSize  | Number  |              42              | 右侧icon大小                          |                                 |
|  rightColor  | String  |              -               | 右侧icon颜色                          |                                 |
|  valueAlign  | String  |             end              | value默认撑满剩余宽度，可设置对其方式 | start、center、end |
|   isTitle    | Boolean |             true             | 是否显示title内容区                   |                                 |
|   isBorder   | Boolean |             true             | 是否显示底部border                    |                                 |
|    border    | Number  |              1               | border线粗                            |                                 |
| borderColor  | String  |           #c1c1c1            | border颜色                            |                                 |
|    margin    |  Array  |            [0,0]             | 外边距                                | 拟同css ,数组长度可为1、2、3、4 |
|   padding    |  Array  |            [0,0]             | 内边距                                | 拟同css ,数组长度可为1、2、3、4 |
|    _class    | String  |              -               | 最外层容器的class类名 多个空格隔开    | |
| _style | Object | {} | 最外层容器的样式 | |

### 插槽

| 名称  | 描述         |
| ----- | ------------ |
| left  | 左侧icon插槽 |
| title | title插槽    |
| value | value插槽    |
| right | 右侧icon插槽 |

### 事件

| 事件名 | 参数 |
| ------ | ---- |
| click  |      |

