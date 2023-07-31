/**
 * 顶部导航栏菜单
 *
 * @see Nav https://vitepress.vuejs.org/guide/theme-nav#nav
 */
export const nav = [
  { text: '指南', link: '/guide/quickstart/index' },
  {
    text: '组件', link: '/guide/component/root', children: [
      {
        text: '通用组件',
        link: '/guide/component/root',
      }
    ]
  },
  { text: 'api', link: '/api/storage' },
  { text: 'css', link: '/css/index' },
]
