# 防抖 & 节流

### 防抖

一定时间内，只有最后一次操作，再过wait毫秒后才执行函数

使用方法：

```js
uni.$var.utils.debounce(()=>{},500,false)
```

参数：

```typescript
/**
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return 
 */
export function debounce(func:()=>any, wait = 500, immediate = false)
```



### 节流

在一定时间内，只能触发一次

使用方法：

```js
uni.$var.utils.throttle(()=>{},500,true)
```

参数：

```typescript
/**
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return 
 */
export function throttle(func:()=>any, wait = 500, immediate = true)
```

