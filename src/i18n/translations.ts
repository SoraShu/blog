/**
 * 国际化翻译字典
 * 支持 zh-CN 和 en 两种语言
 */

export const translations = {
  'zh-CN': {
    // 导航
    'nav.home': '首页',
    'nav.archive': '归档',
    'nav.tags': '标签',
    'nav.friends': '友链',
    'nav.about': '关于',

    // 页面标题和描述
    'page.home.title': '首页',
    'page.home.description': '首页',
    'page.archive.title': '归档',
    'page.archive.description': '所有文章时间线',
    'page.tags.title': '标签',
    'page.tags.description': '所有文章标签',
    'page.friends.title': '友链',
    'page.friends.description': '友情链接',
    'page.about.title': '关于',
    'page.about.description': '关于我和这个博客',
    'page.404.title': '页面未找到',
    'page.404.description': '抱歉，您访问的页面不存在或已被移动。',
    'page.404.backHome': '返回首页',

    // 首页
    'home.latestPosts': '最新文章',
    'home.viewAll': '查看全部 ->',

    // 归档页
    'archive.postsCount': '共 {count} 篇文章',

    // 标签页
    'tags.tagsCount': '共 {count} 个标签',
    'tags.postsCount': '共 {count} 篇文章',
    'tags.backToTags': '<- 返回标签列表',
    'tags.tagPrefix': '标签:',

    // 友链页
    'friends.myFriends': '我的朋友们',

    // 文章相关
    'post.updatedOn': '更新于',
    'post.toc': '目录',
    'post.backToTop': '返回顶部',
    'post.backToHome': '返回主页',

    // 代码块
    'code.copy': '复制',
    'code.copied': '已复制',
    'code.failed': '失败',

    // 版权声明
    'copyright.title': '📜 版权声明',
    'copyright.postTitle': '文章标题:',
    'copyright.postAuthor': '文章作者:',
    'copyright.postLink': '文章链接:',
    'copyright.license': '版权声明:',
    'copyright.licenseText': '本文采用 {license} 许可协议。转载请注明出处。',
    'copyright.rightsReserved': '保留部分权利',

    // 页脚
    'footer.builtWith': '使用 {astro} 和 {shadcn} 构建',
    'footer.rights': '保留所有权利',

    // 语言切换提示
    // 'lang.notice.hasOther': '本文有 {lang} 版本',
    'lang.notice.hasOther': 'This post is also available in {lang}',
    'lang.notice.noOther': '本文暂无{lang}版本，显示原文',
    'lang.name.zh-CN': '中文',
    'lang.name.en': 'English',
    'lang.switch': '切换语言',

    // 通用
    'common.switchLang': '切换到英文',

    // AI 生成内容提示
    'ai.notice.translate': '本文由 AI 辅助翻译',
    'ai.notice.write': '本文由 AI 辅助创作',
    'ai.notice.disclaimer': '内容已经过人工审核，但可能仍存在不准确之处。',
  },
  'en': {
    // Navigation
    'nav.home': 'Home',
    'nav.archive': 'Archive',
    'nav.tags': 'Tags',
    'nav.friends': 'Friends',
    'nav.about': 'About',

    // Page titles and descriptions
    'page.home.title': 'Home',
    'page.home.description': 'Home',
    'page.archive.title': 'Archive',
    'page.archive.description': 'All posts timeline',
    'page.tags.title': 'Tags',
    'page.tags.description': 'All post tags',
    'page.friends.title': 'Friends',
    'page.friends.description': 'Friend links',
    'page.about.title': 'About',
    'page.about.description': 'About me and this blog',
    'page.404.title': 'Page Not Found',
    'page.404.description': 'Sorry, the page you are looking for doesn\'t exist or has been moved.',
    'page.404.backHome': 'Back to home',

    // Home page
    'home.latestPosts': 'Latest Posts',
    'home.viewAll': 'View all ->',

    // Archive page
    'archive.postsCount': '{count} posts in total',

    // Tags page
    'tags.tagsCount': '{count} tags in total',
    'tags.postsCount': '{count} posts',
    'tags.backToTags': '<- Back to tags',
    'tags.tagPrefix': 'Tag:',

    // Friends page
    'friends.myFriends': 'My Friends',

    // Post related
    'post.updatedOn': 'Updated on',
    'post.toc': 'Table of Contents',
    'post.backToTop': 'Back to top',
    'post.backToHome': 'Back to home',

    // Code block
    'code.copy': 'Copy',
    'code.copied': 'Copied',
    'code.failed': 'Failed',

    // Copyright notice
    'copyright.title': '📜 Copyright Notice',
    'copyright.postTitle': 'Title:',
    'copyright.postAuthor': 'Author:',
    'copyright.postLink': 'Link:',
    'copyright.license': 'License:',
    'copyright.licenseText': 'This article is licensed under {license}. Please credit the source when reprinting.',
    'copyright.rightsReserved': 'Some rights reserved',

    // Footer
    'footer.builtWith': 'Built with {astro} & {shadcn}',
    'footer.rights': 'All rights reserved',

    // Language switch notice
    // 'lang.notice.hasOther': 'This post is also available in {lang}',
    'lang.notice.hasOther': '本文有{lang}版本',
    'lang.notice.noOther': 'This post is not available in {lang}, showing original',
    'lang.name.zh-CN': '中文',
    'lang.name.en': 'English',
    'lang.switch': 'Switch Language',

    // Common
    'common.switchLang': 'Switch to Chinese',

    // AI generated content notice
    'ai.notice.translate': 'This article was translated with AI assistance',
    'ai.notice.write': 'This article was written with AI assistance',
    'ai.notice.disclaimer': 'The content has been reviewed, but may still contain inaccuracies.',
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof translations['zh-CN'];
