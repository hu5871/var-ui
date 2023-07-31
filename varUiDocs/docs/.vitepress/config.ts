import { defineConfig } from 'vitepress'
import { nav } from './config/nav'
import { sidebar } from './config/sidebar'
import { PluginTable } from './plugin'
import type MarkdownIt from 'markdown-it'

export default defineConfig({
  title: 'var-ui',
  lastUpdated: true,
  description: 'var-ui使用vue3、typescript编写的Uniapp跨端通用组件库',
  lang: 'cn-ZH',
  base: '/',
  /**
   * 缓存目录
   * @see cacheDir https://vitepress.vuejs.org/config/app-configs#cachedir
   */
  cacheDir: '../../node_modules',
  /**
   * 主题配置
   *
   * @see theme-config https://vitepress.vuejs.org/guide/migration-from-vitepress-0#theme-config
   */
  themeConfig: {
    footer: {
    },
    /**
     * 最后更新时间的文案显示
     *
     * @see lastUpdatedText https://vitepress.vuejs.org/config/theme-configs#lastupdatedtext
     */
    lastUpdatedText: '最后更新时间',
    /**
     * 配置导航栏图表
     *
     * @see socialLinks https://vitepress.vuejs.org/config/theme-configs#sociallinks
     */
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hu5871/var-ui'
      }
    ],
    nav,
    sidebar
  },
  /**
   * 自定义 markdown 解析器
   *
   * @see markdown https://vitepress.vuejs.org/config/app-configs#markdown
   */
  markdown: {
    /**
     * 配置 Markdown-it 实例
     *
     * @param { Object } md markdown 实例
     */
    config: (md: MarkdownIt): void => {
      md.use(PluginTable)
    }
  },

})
