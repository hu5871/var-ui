<p align="center">
    <img alt="logo" src="https://www.varui.org.cn/static/var-logo.png" width="220" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">varUI</h3>
<h3 align="center">h5、小程序、app高效的组件库</h3>

## [官方文档：https://doc.varui.org.cn](https://doc.varui.org.cn)
## [H5体验地址：https://www.varui.org.cn](https://www.varui.org.cn)

### 微信小程序预览

您可以通过**微信**扫码，查看最佳的演示效果。
<br>
<br>
<img src="https://www.varui.org.cn/static/mp.png" width="220" height="220" >



### 安装&使用

- 安装：目前只支持通过uniapp 官方的插件市场进行安装

  [插件市场：https://ext.dcloud.net.cn/plugin?id=13549](https://ext.dcloud.net.cn/plugin?id=13549)

- 使用：

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

  ```json
  "easycom": {
  	    "autoscan": true,
  	    "custom": {
  	      "^v-(.*)": "/components/var-ui/components/v-$1/v-$1.vue"
  	    }
  }
  ```

  


### 关于PR
  varUI 目前只有作者在新增功能，也希望有开发者加入并提PR.但是需要最基本的兼容H5、App、微信小程序。目前并不支持nvue，也希望有人加入并提供更多的支持。

