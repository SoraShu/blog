import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SITE_LOCALE } from "@/config/site.config"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(SITE_LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat(SITE_LOCALE, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
