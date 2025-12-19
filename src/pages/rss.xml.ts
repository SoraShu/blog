import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import type { APIContext } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_LANGUAGE } from "@/config/site.config";

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = await getCollection("blog", ({ data }) => !data.draft);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: blog
      .sort(
        (a, b) =>
          new Date(b.data.pubDate).valueOf() -
          new Date(a.data.pubDate).valueOf()
      )
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.id}/`,
        content: sanitizeHtml(parser.render(post.body || ""), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
        author: post.data.author,
      })),
    customData: `<language>${SITE_LANGUAGE}</language>`,
  });
}
