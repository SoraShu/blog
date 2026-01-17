import * as React from "react";
import Giscus from "@giscus/react";
import { GISCUS_CONFIG } from "@/config/site.config";
import { t, type Locale } from "@/i18n";

interface GiscusCommentsProps {
  locale?: Locale;
}

export function GiscusComments({ locale = "zh-CN" }: GiscusCommentsProps) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const hasConfig = Boolean(
    GISCUS_CONFIG.repo &&
      GISCUS_CONFIG.repoId &&
      GISCUS_CONFIG.category &&
      GISCUS_CONFIG.categoryId
  );

  React.useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!hasConfig) {
    return null;
  }

  const lang = locale === "en" ? "en" : "zh-CN";

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">{t("comments.title", locale)}</h2>
      <Giscus
        id="comments"
        repo={GISCUS_CONFIG.repo}
        repoId={GISCUS_CONFIG.repoId}
        category={GISCUS_CONFIG.category}
        categoryId={GISCUS_CONFIG.categoryId}
        mapping={GISCUS_CONFIG.mapping}
        strict={GISCUS_CONFIG.strict}
        reactionsEnabled={GISCUS_CONFIG.reactionsEnabled}
        emitMetadata={GISCUS_CONFIG.emitMetadata}
        inputPosition={GISCUS_CONFIG.inputPosition}
        theme={theme}
        lang={lang}
        loading={GISCUS_CONFIG.loading}
      />
    </section>
  );
}
