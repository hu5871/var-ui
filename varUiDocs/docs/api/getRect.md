# 获取节点信息

获取节点信息，

参数1: 类名、id、data-xxx等

参数2: 上下文

参数3: true为获取多个节点，false为单个节点 (默认false)

使用方法:

```vue

<script setup>
import { getCurrentInstance} from "vue";
const proxy = getCurrentInstance()?.proxy || null
uni.$var.utils.getRect('#list',proxy,true).then((rect)=>{
  
})
</script>
```

rect:

```
id	String	节点的 ID
dataset	Object	节点的 dataset
left	Number	节点的左边界坐标
right	Number	节点的右边界坐标
top	Number	节点的上边界坐标
bottom	Number	节点的下边界坐标
width	Number	节点的宽度
height	Number	节点的高度
```

