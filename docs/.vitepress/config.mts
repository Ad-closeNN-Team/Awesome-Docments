import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: "Awesome Docments",
  description: "极为普通的教程存放地",
  base: '/Awesome-Docments/',
  head: [['link', { rel: 'icon', href: '/Awesome-Docments/docs/favcion.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '成员', link: '/team/members' },
      { text: 'GitHub', link: 'https://github.com/Ad-closeNN-Team' },
      {
          text: '无关链接',
          items: [
            { text: 'PCL2 启动器本体源代码', link: 'https://github.com/Hex-Dragon/PCL2' },
            { text: '下载 PCL2 启动器正式版', link: 'https://afdian.com/p/0164034c016c11ebafcb52540025c377' },
            { text: 'PCL-Community PCL 非官方社区', link: 'https://github.com/PCL-Community' },
          ]
      }    
    ],
    sidebar: [
      {
        text: '教程',
        items: [
          { text: 'Git 提交具有 Verified 标签', link: '/docs/GitHub Desktop GPG' },
        ]
      },
      {
        text: '',
        items: [
          { text: '成员列表', link: '/team/members' },
          { text: 'GitHub 仓库', link: 'https://github.com/Ad-closeNN-Team/Awesome-Docments'}
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ad-closeNN-Team/Awesome-Docments' }
    ],
    editLink: {
      pattern: 'https://github.com/Ad-closeNN-Team/Awesome-Docments/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '基于 <a href="https://github.com/Ad-closeNN-Team/Awesome-Docments/blob/main/LICENSE" target="_blank">MIT</a> 许可发布',
      copyright: 'Copyright © 2024 <a href="https://github.com/Ad-closeNN-Team" target="_blank">Ad-closeNN-Team</a>'
    },
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
    },
    logo: '/Awesome-Docments/docs/favicon.ico'
  },
  lastUpdated: true
})
