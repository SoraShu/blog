/**
 * 国际化工具函数
 */

import { translations, type Locale, type TranslationKey } from './translations';

/** 默认语言 */
export const defaultLocale: Locale = 'zh-CN';

/** 支持的语言列表 */
export const locales: Locale[] = ['zh-CN', 'en'];

/**
 * 从 URL 路径获取当前语言
 * - /en/xxx → 'en'
 * - /xxx → 'zh-CN' (默认)
 */
export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments[0] === 'en') {
    return 'en';
  }
  return 'zh-CN';
}

/**
 * 翻译函数
 * @param key 翻译键
 * @param locale 目标语言
 * @param params 插值参数，如 { count: 5 }
 */
export function t(
  key: TranslationKey,
  locale: Locale = defaultLocale,
  params?: Record<string, string | number>
): string {
  let text: string = translations[locale][key] || translations[defaultLocale][key] || key;
  
  if (params) {
    Object.entries(params).forEach(([paramKey, value]) => {
      text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(value));
    });
  }
  
  return text;
}

/**
 * 获取本地化路径
 * @param path 原始路径（如 /about）
 * @param locale 目标语言
 * @returns 本地化后的路径
 * 
 * 示例：
 * - getLocalizedPath('/about', 'zh-CN') → '/about'
 * - getLocalizedPath('/about', 'en') → '/en/about'
 * - getLocalizedPath('/en/about', 'zh-CN') → '/about'
 * - getLocalizedPath('/posts/hello', 'en') → '/en/posts/hello'
 */
export function getLocalizedPath(path: string, locale: Locale): string {
  // 移除现有的语言前缀
  let cleanPath = path.replace(/^\/(en)(?=\/|$)/, '');
  if (!cleanPath.startsWith('/')) {
    cleanPath = '/' + cleanPath;
  }
  if (cleanPath === '') {
    cleanPath = '/';
  }
  
  // 如果是默认语言，直接返回干净路径
  if (locale === defaultLocale) {
    return cleanPath;
  }
  
  // 否则添加语言前缀
  return `/${locale}${cleanPath}`;
}

/**
 * 获取另一个语言的路径
 * @param currentPath 当前路径
 * @param currentLocale 当前语言
 */
export function getAlternateLocalePath(currentPath: string, currentLocale: Locale): { locale: Locale; path: string } {
  const alternateLocale: Locale = currentLocale === 'zh-CN' ? 'en' : 'zh-CN';
  return {
    locale: alternateLocale,
    path: getLocalizedPath(currentPath, alternateLocale),
  };
}

/**
 * 获取导航项
 */
export function getNavItems(locale: Locale) {
  const prefix = locale === 'zh-CN' ? '' : '/en';
  return [
    { title: t('nav.home', locale), href: prefix || '/' },
    { title: t('nav.archive', locale), href: `${prefix}/archive` },
    { title: t('nav.tags', locale), href: `${prefix}/tags` },
    { title: t('nav.friends', locale), href: `${prefix}/friends` },
    { title: t('nav.about', locale), href: `${prefix}/about` },
  ];
}

/**
 * 获取 HTML lang 属性值
 */
export function getHtmlLang(locale: Locale): string {
  return locale === 'zh-CN' ? 'zh-CN' : 'en';
}

/**
 * 获取内容文件路径
 * @param basePath 基础路径（不含扩展名），如 './content/about'
 * @param locale 目标语言
 * @returns 本地化文件路径，如 './content/about_en.md' 或 './content/about.md'
 */
export function getContentPath(basePath: string, locale: Locale): string {
  if (locale === 'zh-CN') {
    return `${basePath}.md`;
  }
  return `${basePath}_${locale}.md`;
}

/**
 * 从博文 ID 解析语言和基础 ID
 * 博文 ID 格式：
 * - 'hello-world' → 中文版本
 * - 'hello-world_en' → 英文版本
 */
export function parsePostId(id: string): { baseId: string; locale: Locale } {
  if (id.endsWith('_en')) {
    return {
      baseId: id.slice(0, -3),
      locale: 'en',
    };
  }
  return {
    baseId: id,
    locale: 'zh-CN',
  };
}

/**
 * 获取博文的另一语言版本 ID
 */
export function getAlternatePostId(id: string): string {
  const { baseId, locale } = parsePostId(id);
  if (locale === 'zh-CN') {
    return `${baseId}_en`;
  }
  return baseId;
}
