import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import type { APIContext } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/config/site.config";
import { parsePostId } from "@/i18n";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const allPosts = await getCollection("blog", ({ data }) => !data.draft);
  
  // 创建博文 ID 映射（基础 ID -> 最佳版本）- 优先英文
  const postMap = new Map<string, typeof allPosts[0]>();
  allPosts.forEach((post) => {
    const { baseId, locale: postLocale } = parsePostId(post.id);
    const existing = postMap.get(baseId);
    
    if (!existing) {
      postMap.set(baseId, post);
    } else if (postLocale === 'en') {
      postMap.set(baseId, post);
    }
  });
  
  const posts = Array.from(postMap.values());

  return rss({
    title: `${SITE_TITLE} (English)`,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts
      .sort(
        (a, b) =>
          new Date(b.data.pubDate).valueOf() -
          new Date(a.data.pubDate).valueOf()
      )
      .map((post) => {
        const { baseId, locale: postLocale } = parsePostId(post.id);
        const link = postLocale === 'en' ? `/en/posts/${baseId}/` : `/en/posts/${post.id}/`;
        return {
          title: post.data.title,
          pubDate: post.data.pubDate,
          description: post.data.description,
          link,
          content: sanitizeHtml(parser.render(post.body || ""), {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
          }),
          author: post.data.author,
        };
      }),
    customData: `<language>en</language>`,
  });
}
