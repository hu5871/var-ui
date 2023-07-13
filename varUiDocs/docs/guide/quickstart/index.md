---
title: 快速上手
---

##### 开发指南 var-ui

# 快速上手
安装：目前只支持通过uniapp 官方的插件市场进行安装

[插件市场：https://ext.dcloud.net.cn/plugin?id=13549](https://ext.dcloud.net.cn/plugin?id=13549)

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

## 注意事项