import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 关闭最近更新时间戳
    lastUpdated: false,
    // 关闭管理贡献者列表
    contributors: false,

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '会计',
        link: '/md/accountant/navigation.md',
      },
    ],

    // 侧边栏
    sidebar: {
      '/md/accountant/': [
        {
          text: '导航',
          link: '/md/accountant/navigation.md',
        },
        {
          text: '会计基础',
          collapsible: true,
          children: [
            {
              text: '会计核算基础知识',
              link: '/md/accountant/basic/accounting_basics/accounting_basics.md',
            },
            {
              text: '会计科目表注释整理',
              link: '/md/accountant/basic/notes_to_the_chart_of_accounts/notes_to_the_chart_of_accounts.md',
            },
          ],
        },
      ]
    },
  }),

  lang: 'zh-CN',
  title: 'coolcodenoob',
  description: '这是coolcodenoob的一个知识站点',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
})
