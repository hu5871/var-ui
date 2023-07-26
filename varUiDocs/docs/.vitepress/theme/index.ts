import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { VNode } from 'vue'
import webview from '../../guide/webview/webview.vue'



export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * @see layout-slots https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
       */
      // 'nav-bar-content-before': (): VNode => h(vpSearch)
    })
  },
  enhanceApp({ app }) {
    app.component('webview', webview)
  }
}
