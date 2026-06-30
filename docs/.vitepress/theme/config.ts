import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Liyao Docs',
  description: 'Deployment / Guide / Overview',

  base: '/BlockPilotDocs/',

  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '总览', link: '/' },
      { text: '指南', link: '/guide/quick-start' },
      { text: '部署', link: '/deploy/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' }
          ]
        }
      ],
      '/deploy/': [
        {
          text: '部署',
          items: [
            { text: '部署总览', link: '/deploy/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Irenare404/BlockPilotDoc' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 liyao'
    }
  }
})