module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
module.exports = {
  
  title: '原启',  // 设置网站标题
  description : 'Adroi',
  base : '/Chanzhehong/Demo/docs/README.md',
  themeConfig : {
    repo: 'vuejs/vuepress',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    lastUpdated: 'Last Updated', // string | boolean
    nav : [
        { text: '主页', link: '/rainbow' },
        { text: '帮助文档', link: '/help' }
    ],
    displayAllHeaders: true,

    sidebar: {
      '/view/': [
        {
          title: 'Group 1',
          children: ['problem.md']
        }
      ]
    },
    // sidebar: [
    //   {
    //     title: '帮助文档',
    //     collapsable: false,
    //   },
    //   {
    //     collapsable: false,
    //     children: [
    //      '/view/install',
    //     ],
    //     nextLink: true,
    //   },
    //   {
    //     collapsable: false,
    //     children: [
    //      '/view/features',
    //     ],
    //     nextLink: true,
    //   },
    //   {
    //     title: 'Group 1 ',
    //     path: '/view/problem',
    //     sidebarDepth: 1,
    //     children: [
    //       '/view/problem',
    //     ],
    //   }
    // ]

    // },
    sidebarDepth : 2
  }
}
