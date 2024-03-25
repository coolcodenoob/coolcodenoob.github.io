import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    // 关闭最近更新时间戳
    lastUpdated: false,
    // 管理贡献者列表
    contributors: false,

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
            },
            {
              text: '添加H2内存数据库',
              link: '/md/spring/springboot/db-h2-jpa.md',
            },
            {
              text: '定制Banner',
              link: '/md/spring/springboot/springboot-banner.md',
            },
            {
              text: '添加Logback日志',
              link: '/md/spring/springboot/springboot-logback.md',
            },
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
