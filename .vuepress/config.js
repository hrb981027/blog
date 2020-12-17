module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  title: "秋月无边",
  description: "",
  theme: "reco",
  themeConfig: {
    type: "blog",
    blogConfig: {
      category: {
        location: 3,
        text: '分类'
      },
      tag: {
        location: 4,
        text: '标签'
      },
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/hrb981027' }
      ]
    },
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ],
    sidebar: 'auto',
    lastUpdated: '最后更新时间',
    record: '苏ICP备17067224号-3',
    recordLink: 'https://beian.miit.gov.cn/',
    startYear: '2019',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    }
  }
}
