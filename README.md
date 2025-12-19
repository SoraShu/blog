# Astro Blog Theme

一个现代化的博客主题，使用 Astro + shadcn/ui 构建。支持博文内容与主题分离，通过 git submodule 管理。

## ✨ 特性

- 🌓 暗色/亮色模式切换
- 📱 响应式设计
- 🏷️ 标签分类系统
- 📅 时间线归档
- 🔗 友情链接页面
- 📡 RSS 订阅支持
- 🔍 SEO 优化（结构化数据、Open Graph）
- 🌏 中英文混排支持
- ☁️ Cloudflare Pages 部署支持
- 📦 博文内容可作为独立仓库（submodule）管理

## 📁 项目结构

```
blog-theme/                    # 主题仓库
├── astro.config.mjs          # Astro 配置
├── package.json
├── .env.example              # 环境变量模板
├── content/                   # 📝 内容目录（可作为 git submodule）
│   ├── blog/                 # 博文 Markdown 文件
│   ├── friends.json          # 友链数据
│   └── about.md              # 关于页面内容
├── src/
│   ├── config/
│   │   └── site.config.ts    # 统一站点配置
│   ├── content.config.ts     # 内容集合定义
│   ├── components/           # 组件
│   ├── layouts/              # 布局
│   ├── pages/                # 页面
│   └── styles/               # 样式
└── public/                    # 静态资源
```

## 🚀 快速开始

### 1. 克隆主题仓库

```bash
# 克隆主题
git clone https://github.com/yourusername/blog-theme.git my-blog
cd my-blog

# 如果内容是 submodule，初始化它
git submodule update --init --recursive
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 配置站点

复制环境变量模板并修改：

```bash
cp .env.example .env
```

编辑 `.env` 文件设置你的站点信息：

```env
SITE_TITLE="我的博客"
SITE_DESCRIPTION="我的个人博客"
SITE_URL="https://yourdomain.com"
SITE_AUTHOR="你的名字"
SOCIAL_GITHUB="https://github.com/yourusername"
```

或者直接编辑 `src/config/site.config.ts`。

### 4. 本地开发

```bash
pnpm dev
```

访问 http://localhost:4321

### 5. 构建

```bash
pnpm build
```

## ☁️ Cloudflare Pages 部署

### 方式一：通过 Cloudflare Dashboard

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** > **Create application** > **Pages**
3. 连接你的 GitHub 仓库
4. 配置构建设置：
   - **Framework preset**: Astro
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
5. 添加环境变量（参考 `.env.example`）
6. 点击 **Save and Deploy**

### 方式二：使用 Wrangler CLI

```bash
# 安装 wrangler
pnpm add -D wrangler

# 登录
npx wrangler login

# 部署
npx wrangler pages deploy dist
```

### 环境变量配置

在 Cloudflare Pages 设置中添加以下环境变量：

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `SITE_TITLE` | 站点标题 | `我的博客` |
| `SITE_URL` | 站点 URL | `https://yourblog.pages.dev` |
| `SITE_AUTHOR` | 作者名 | `你的名字` |
| `SOCIAL_GITHUB` | GitHub 链接 | `https://github.com/xxx` |

## 📝 内容管理

### 将内容设为独立仓库（推荐）

如果你想将博文内容独立管理：

```bash
# 1. 在 content/ 目录创建独立仓库
cd content
git init
git remote add origin https://github.com/yourusername/blog-content.git
git add .
git commit -m "Initial content"
git push -u origin main

# 2. 在主题仓库中作为 submodule 添加
cd ..
rm -rf content
git submodule add https://github.com/yourusername/blog-content.git content
```

### 博文格式

在 `content/blog/` 中创建 `.md` 或 `.mdx` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-01-15
tags: ["标签1", "标签2"]
author: "作者名"
draft: false
---

文章正文内容...
```

### 友链配置

编辑 `content/friends.json`：

```json
[
  {
    "id": "friend-1",
    "name": "友站名称",
    "url": "https://friend.site",
    "avatar": "https://avatar.url",
    "description": "友站描述"
  }
]
```

## 🎨 自定义配置

### 站点配置

主要配置文件：`src/config/site.config.ts`

- 站点标题、描述、URL
- 作者信息
- 社交链接
- 导航菜单
- 语言/地区设置
- 内容路径（支持自定义 submodule 位置）

### 主题样式

- 全局样式：`src/styles/global.css`
- 组件：`src/components/ui/`（基于 shadcn/ui）

## 📄 许可

MIT License
