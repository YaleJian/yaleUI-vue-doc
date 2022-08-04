const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const {defaultTheme} = require("vuepress");
const sidebar = require("./sidebar");
const navbar = require("./navbar");
module.exports = {
    lang: 'zh-CN',
    title: 'Yale UI 开发指南',
    description: 'Yale UI 开发指南',
    head: [
        ['link', {rel: 'icon', href: '/image/favicon.ico'}]
    ],
    plugins: [
        docsearchPlugin({
          // 配置项
        }),
      ],
    theme: defaultTheme({
        navbar,//导航栏
        sidebar, // 侧边栏数组,所有页面会使用相同的侧边栏
        docsRepo: 'https://github.com/YaleJian/yaleUI-vue-doc.git',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkText: '编辑此页',
        editLinkPattern: ':repo/:branch/:path',
        lastUpdated: true,
        lastUpdatedText: '最近更新'
    }),
  }