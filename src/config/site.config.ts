/**
 * 统一站点配置
 * 支持通过环境变量覆盖默认值
 * 
 * 使用方式:
 * import { siteConfig } from '@/config/site.config';
 */

// ============================================================
// 站点基础配置
// ============================================================

/** 站点标题 */
export const SITE_TITLE = import.meta.env.SITE_TITLE || "My Blog";

/** 站点描述 */
export const SITE_DESCRIPTION = import.meta.env.SITE_DESCRIPTION || "A modern blog built with Astro and shadcn/ui";

/** 站点 URL（不带尾部斜杠） */
export const SITE_URL = import.meta.env.SITE_URL || "https://yourdomain.com";

/** 站点作者 */
export const SITE_AUTHOR = import.meta.env.SITE_AUTHOR || "Blog Author";

/** 站点语言/地区（如 zh-CN, en-US） */
export const SITE_LOCALE = import.meta.env.SITE_LOCALE || "zh-CN";

/** 站点语言代码（从 SITE_LOCALE 派生，用于 RSS 等） */
export const SITE_LANGUAGE = SITE_LOCALE.toLowerCase();

// ============================================================
// 社交链接配置
// ============================================================

export const SOCIAL_LINKS = {
  github: import.meta.env.SOCIAL_GITHUB || "https://github.com/yourusername",
  telegram: import.meta.env.SOCIAL_TELEGRAM || "https://t.me/yourusername",
  email: import.meta.env.SOCIAL_EMAIL || "mailto:your@email.com",
};

// ============================================================
// 导航配置
// ============================================================

export interface NavItem {
  title: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { title: "首页 Home", href: "/" },
  { title: "归档 Archive", href: "/archive" },
  { title: "标签 Tags", href: "/tags" },
  { title: "友链 Friends", href: "/friends" },
  { title: "关于 About", href: "/about" },
];

// ============================================================
// 内容路径配置（用于 git submodule）
// ============================================================

/** 博文目录路径 */
export const CONTENT_BLOG_PATH = import.meta.env.CONTENT_BLOG_PATH || "./content/blog";

/** 友链数据文件路径 */
export const CONTENT_FRIENDS_PATH = import.meta.env.CONTENT_FRIENDS_PATH || "./content/friends.toml";

/** About 页面内容路径 */
export const CONTENT_ABOUT_PATH = import.meta.env.CONTENT_ABOUT_PATH || "./content/about.md";

// ============================================================
// 主题配置
// ============================================================

export const THEME_CONFIG = {
  /** 默认主题 */
  defaultTheme: "system" as "light" | "dark" | "system",
  
  /** 代码高亮主题 */
  shikiThemes: {
    light: "github-light",
    dark: "github-dark",
  },
};

// ============================================================
// 评论系统配置（giscus）
// ============================================================

export const GISCUS_CONFIG = {
  repo: import.meta.env.PUBLIC_GISCUS_REPO || "",
  repoId: import.meta.env.PUBLIC_GISCUS_REPO_ID || "",
  category: import.meta.env.PUBLIC_GISCUS_CATEGORY || "",
  categoryId: import.meta.env.PUBLIC_GISCUS_CATEGORY_ID || "",
  mapping: import.meta.env.PUBLIC_GISCUS_MAPPING || "title",
  strict: import.meta.env.PUBLIC_GISCUS_STRICT || "0",
  reactionsEnabled: import.meta.env.PUBLIC_GISCUS_REACTIONS_ENABLED || "1",
  emitMetadata: import.meta.env.PUBLIC_GISCUS_EMIT_METADATA || "0",
  inputPosition: import.meta.env.PUBLIC_GISCUS_INPUT_POSITION || "top",
  theme: import.meta.env.PUBLIC_GISCUS_THEME || "preferred_color_scheme",
  loading: import.meta.env.PUBLIC_GISCUS_LOADING || "lazy",
} as const;

// ============================================================
// 统一导出对象（便于一次性导入）
// ============================================================

export const siteConfig = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  author: SITE_AUTHOR,
  locale: SITE_LOCALE,
  language: SITE_LANGUAGE,
  social: SOCIAL_LINKS,
  nav: NAV_ITEMS,
  content: {
    blogPath: CONTENT_BLOG_PATH,
    friendsPath: CONTENT_FRIENDS_PATH,
    aboutPath: CONTENT_ABOUT_PATH,
  },
  theme: THEME_CONFIG,
  comments: {
    giscus: GISCUS_CONFIG,
  },
} as const;

export default siteConfig;
