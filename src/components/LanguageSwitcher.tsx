"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";

interface LanguageSwitcherProps {
  currentLocale: "zh-CN" | "en";
  currentPath: string;
}

function getLocalizedPath(path: string, locale: "zh-CN" | "en"): string {
  // Remove existing language prefix
  let cleanPath = path.replace(/^\/(en)(?=\/|$)/, "");
  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }
  if (cleanPath === "") {
    cleanPath = "/";
  }

  // If default locale (zh-CN), return clean path
  if (locale === "zh-CN") {
    return cleanPath;
  }

  // Otherwise add language prefix
  return `/${locale}${cleanPath}`;
}

export function LanguageSwitcher({ currentLocale, currentPath }: LanguageSwitcherProps) {
  // Switch checked = EN (右边), unchecked = 中文 (左边)
  const isEnglish = currentLocale === "en";

  const handleToggle = (checked: boolean) => {
    const newLocale = checked ? "en" : "zh-CN";
    if (newLocale !== currentLocale) {
      const newPath = getLocalizedPath(currentPath, newLocale);
      window.location.href = newPath;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-sm font-medium transition-colors ${
          !isEnglish ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        中文
      </span>
      <Switch
        checked={isEnglish}
        onCheckedChange={handleToggle}
        aria-label="切换语言 / Switch language"
      />
      <span
        className={`text-sm font-medium transition-colors ${
          isEnglish ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        EN
      </span>
    </div>
  );
}
