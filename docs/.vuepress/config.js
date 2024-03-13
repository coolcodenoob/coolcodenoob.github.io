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
      {
        text: 'Java',
        link: '/',
      },
      {
        text: 'Spring',
        children: [
          {
            text: 'Spring Boot',

            children: [{
              text: 'Spring Boot入门',
              link: '/md/spring/springboot/springboot-overview.md',
            }],
          },
        ],
      },
      {
        text: '算法',
        link: '/',
      },
      {
        text: '数据库',
        children: [
          {
            text: '数据库基础',
            children: [{
              text: 'SQL语言',
              link: '/md/database/basic/sql-lan/sql-language.md',
            }],
          },
        ],
      },
      {
        text: '工具',
        children: [{
          text: 'git详解',
          link: '/md/tools/git.md',
        }],
      },
      {
        text: '杂谈',
        link: '/md/extra/overview.md'
      },
    ],

    // 侧边栏
    sidebar: {
      // 数据库侧边栏
      '/md/database/': [
        {
          text: 'SQL语言',
          collapsible: true,
          children: [{
            text: 'SQL语法',
            link: '/md/database/basic/sql-lan/sql-language.md',
          }],
        },
      ],

      // spring侧边栏
      '/md/spring/': [
        {
          text: 'Spring Boot',
          children: [{
            text: '入门',
            collapsible: true,
            children: [{
              text: 'Spring Boot简介',
              link: '/md/spring/springboot/springboot-overview.md',
            },
            {
              text: 'MVC版HelloWorld',
              link: '/md/spring/springboot/helloworld-mvc.md',
            }
            ],
          }],
        },
      ],

      //工具侧边栏
      '/md/tools': [
        {
          text: 'git详解',
          link: '/md/tools/git.md'
        },
      ],
    },
  }),

  lang: 'zh-CN',
  title: 'coolcodenoob',
  description: '这是coolcodenoob的一个知识站点',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
})
