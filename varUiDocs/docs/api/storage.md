# 本地缓存

 均为同步方法，快捷的设置、获取、删除、清空本地缓存，不需要额外手动处理，内部已经为你处理。

### setStorage

使用方法：设置成功返回真，否则flase

```js
uni.$var.utils.setStorage('age',1)
```

参数：

```ts
/**
 * @param {string} key 键值
 * @param {any} value 值
 * @returns Boolean
 */
 function setCookie(key: string, value:any):boolean
```

### getStorage

使用方法：获取成功返回数据，否则为undefined

```js
uni.$var.utils.getStorage('age')
```

参数：

```ts
/**
 * @param {string} key 键值
 * @returns any
 */
 function getStorage(key: string):any
```

### deleteStorage

使用方法：删除成功返回true，否则为false

```js
uni.$var.utils.deleteStorage('age')
```

参数：

```ts
/**
 * @param {string} key 键值
 * @returns boolean
 */
 function deleteStorage(key: string):boolean
```

### clearStorage

使用方法：清空成功返回true，否则为false

```js
uni.$var.utils.clearStorage()
```

参数：

```ts
/**

 * @returns boolean
 */
 function clearStorage():boolean
```

### 
