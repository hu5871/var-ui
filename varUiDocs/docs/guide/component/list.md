# list 列表

  list作为高性能列表组件内置三种常见列表**普通列表**、**瀑布流列表**、**虚拟列表**，满足绝大部分应用场景，默认支持**下拉刷新**和**上拉加载**

<webview url="/pages/show/list"></webview>

##### 普通列表

```vue
<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-list  @down="handleDown" @loadMore="handleLoadMore">
      <view v-for="item in 100" :key='item'>{{item}}</view>
    </v-list>
  </v-root>
</template>
```

##### 瀑布流列表

```vue
<template>
<v-list ref="list" itemKey="id" v-model="list" bgColor="rgb(245, 245, 245)" :column="2"
      :isWaterfall="true" @down="handleDown" @loadMore="handleLoadMore">
      <template v-slot:waterfall1="{ colList }">
        <v-card :margin="[10, 0]" v-for="item in colList" :key="item.id">
          <v-image :round="20" width="100%" mode="heightFix" :src="item.image"></v-image>
          <v-text :fontSize="34">{{ item.title }}</v-text>
          <v-text :margin="[item.isLong ? 20 : 10, 0]" :textOverflow="item.isLong ? 2 : 1">{{ item.text }}</v-text>
        </v-card>
      </template>
      <template v-slot:waterfall2="{ colList }">
        <v-card :margin="[10, 0]" v-for="item in colList" :key="item.id">
          <v-image :round="20" width="100%" mode="heightFix" :src="item.image"></v-image>
          <v-text :fontSize="34">{{ item.title }}</v-text>
          <v-text :margin="[item.isLong ? 20 : 10, 0]" :textOverflow="item.isLong ? 2 : 1">{{ item.text }}</v-text>
        </v-card>
      </template>
    </v-list>
</template>
<script>
export default {
 
  data () {
    return {
      list: [],
     longText: '灰太狼来了狗熊岭，教会了光头强制造武器',
      shortText: '免费且开源'
    }
  },
  created () {
    this.list = [...this.list, ...this.createList()]
  },
  methods: {
    createList (i = '') {
      let cList = []
      if (this[`list${i}`].length >= 500) return cList
      for (let index = 0; index < 10; index++) {
        let isLong = Math.random() > .3
        cList.push({
          id: this.list.length + index,
          image: `https://picsum.photos/300/150?t=${new Date().getTime()}`,
          title: `(${this.list.length + index + 1}) 这是标题`,
          text: isLong ? this.longText : this.shortText,
          isLong
        })
      }
      return cList
    },
    clearList () {
      this.list = []
    },
    handleDown ({ callback }, type) {
      setTimeout(() => {
        this.list = [...[]]
        nextTick(() => {
          this.list = [].concat(...this.createList())
        })
        callback()
      }, 3000)
    },
    handleLoadMore ({ callback }, type) {
      if (type === 'none') {
        callback(true)
        return
      }
      setTimeout(() => {
        const list = this.createList()
        console.log('list', list)
        this.list = [...this.list, ...list]
        callback(Boolean(!list.length))
      }, 2000)
    },
  }
}
</script>

<style></style>
```



##### 虚拟列表

```vue
<template>
    <v-list ref="list"  v-model="list2" bgColor="rgb(245, 245, 245)"
      :isVirtual="true" @down="handleDownVirtual" @loadMore="handleLoadMoreVirtual">
       <template v-slot:list="{ item, index }">
        <view style="height:200rpx;">
          <view class="flex flex-row h-full items-center">
              <v-image :round="10" :height="200" :src="item.img"></v-image>
              <view class="flex-1 h-full ml-10 flex flex-col justify-between">
                <v-text :fontSize="34" :label="item.title"></v-text>
                <v-text :textOverflow="2" :label="item.desc"></v-text>
                <view class style="height: 2rpx;background-color: brown;"></view>
              </view>
            </view>
        </view>
      </template>
    </v-list>
</template>
<script>
export default {
  data () {
    return {
      list2: [],
     longText: '灰太狼来了狗熊岭，教会了光头强制造武器',
      shortText: '免费且开源'
    }
  },
  created () {
    
  },
  methods: {
    createList(){
    let list=new Array(100).fill(0).map((t, index) => ({
      id:index,
      title: `第${index}行`,
      desc: this.longText,
     }))
      return list
    },
    handleDown ({ callback }) {
      setTimeout(() => {
        this.list2 = [...[]]
        nextTick(() => {
          this.list2 = [].concat(...this.createList())
        })
        callback()
      }, 3000)
    },
    handleLoadMore ({ callback }) {
     
      setTimeout(() => {
        const list = this.createList()
        this.list2 = [...this.list2, ...list]
        callback(Boolean(!list.length))
      }, 2000)
    },
  }
}
</script>
```

### 兼容性

计划是所有组件全端兼容

| app-vue | 微信小程序 | h5   |
| --- | --- | --- |
| 支持 | 支持(虚拟列表不支持小程序) | 支持 |

### Props

| 参数 | 类型 | 默认值 | 描述 | 可选值 |
| :--: | :--: | :--: | :-- | ---- |
| modelValue | Array | [] | 列表数据（普通列表不需要传入） |  |
| *isVirtual* | Boolean | false | 是否使用虚拟列表 |  |
| isWaterfall | Boolean | false | 是否使用瀑布流列表 |  |
| isRefresh |    Boolean    | true | 是否启用下拉刷新 |  |
| isLoadMore | Boolean | true | 是否启用上拉加载 |  |
| refresherRate | Number | .2 | 下拉刷新超出阈值后继续下拉位移衰减的比例 |  |
|   refresherAngle   | Number |    40    | 下拉刷新触发的最大下拉角度，默认为40度，下拉角度小于设定值时，自定义下拉刷新动画不会被触发 |                                           |
| lowerThreshold | Number |    100    | 距离底部/右边 多少距离触发 scrolltolower事件  默认为100rpx |                                           |
|   refresherThreshold   |    Number     |    80    | 设置下拉刷新阈值，默认为80rpx              |                                           |
| refresherSustainedText |    String     |    继续下拉 | 下拉过程未达刷新阀值的文本         |  |
| refresherReleaseText |    String     |   释放刷新   | 下拉已达刷新阀值的文本             |                                           |
| refreshingText |    String    | 正在刷新 | 刷新中的文本        |                                           |
| refresherComplateText |  String |    刷新完成    | 已完成刷新                      |                                           |
| loadMoreType |     String     | auto | 上拉加载的类型：auto为到达距离触发loadMore事件，click为点击加载 | auto、click |
| loadMoreClickText | String | 点击加载更多 | 点击加载的文本 |  |
| loadMoringText | String | 加载中 | 上拉加载中的文本 | |
| noMoreText | String | 没有更多了 | 全部加载完成，没有更多数据的文本 | |
| itemKey | String | - | 瀑布流和虚拟列表需要的唯一Key | |
| column | Number | 2 | 瀑布流的列数 | |
| columnGap | Number | 5 | 安全距离 | |
| virtualType | String | fixed | 虚拟列表的类型：fixed（每一项都是固定高度） | fixed |
| virtualPageSize | *Number* | 5 | 留存加载几页,视图内显示的元素越少，页数应该越大，不然快速滚动会导致白屏 | |
|  |  |  |  | |
|  |  |  |  | |
|  |  |  |  | |
|  |  |  |  | |
|  |  |  |  | |
|  |  |  |  | |

### 插槽

#### 瀑布流插槽

根据column自行推算，比如column2,生成waterfall1、waterfall2对应个数的插槽name

#### 虚拟列表插槽

list

| name      |
| --------- |
| waterfall |
| list      |

### 事件

| 事件名   | 参数                          | 描述                                                         |
| -------- | ----------------------------- | ------------------------------------------------------------ |
| down     | {callback}  callback:Function | 下拉加载与后端交互完成后执行callback回调函数结束下拉         |
| loadMore | {callback} callback:Function  | 上拉加载与后端交互完成后执行callback回调函数结束下拉，callback参数为Boolean类型 true 为已全部加载，没有更多数据，false为还有更多数据等待加载 |
|          |                               |                                                              |

### ref方法

因为瀑布流数据经过分列处理，所以不能直接更改v-model的原数组（尾部追加数据、清空数组除外），额外提供了两个方法来满足更新、删除数据

| 事件       | 参数                                       | 描述                             |      |
| ---------- | ------------------------------------------ | -------------------------------- | ---- |
| updateItem | 参数1:itemKey对应的值，参数2: 这一项的数据 | 根据唯一key 更新瀑布流对应的数据 |      |
| deleteItem | itemKey对应的值                            | 根据唯一key 删除瀑布流对应的数据 |      |
|            |                                            |                                  |      |

