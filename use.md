### 文档

[文档地址](https://doc.varui.org.cn)

### 体验

[h5体验地址](https://www.varui.org.cn)

### 使用方式

需要在`main.js`引入

```js
import App from './App'

// 引入varUI和css
import varUI from '/uni_modules/var-ui/index'
import '/uni_modules/var-ui/lib/css/index.css'

import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
    // 使用
    app.use(varUI)
  return {
    app
  }
}

```

### 配置组件引入

在`pages.json`配置`easycom`规则后，自动按需引入，无需`import`组件，直接引用即可。

```
"easycom": {
	    "autoscan": true,
	    "custom": {
	      "^v-(.*)": "/components/var-ui/components/v-$1/v-$1.vue"
	    }
}
```

