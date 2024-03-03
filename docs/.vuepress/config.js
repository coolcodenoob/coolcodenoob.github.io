import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
    ],
  }),

  lang: 'zh-CN',
  title: 'coolcodenoob',
  description: '这是coolcodenoob的一个知识站点',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
})
