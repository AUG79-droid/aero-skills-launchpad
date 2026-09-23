import { useEffect, useState } from "react";

export type HubLanguage = "es" | "en";

export function getHubLanguage(): HubLanguage {
  if (typeof window === "undefined") return "en";
  return new URLSearchParams(window.location.search).get("hubLang") === "es" ? "es" : "en";
}

export function useHubLanguage() {
  const [language, setLanguage] = useState<HubLanguage>("en");

  useEffect(() => {
    const current = getHubLanguage();
    setLanguage(current);
    document.documentElement.lang = current;
  }, []);

  return language;
}

export function withHubLanguage(path: string, language: HubLanguage) {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const resolvedPath = path.startsWith("/") ? `${base}${path.slice(1)}` : path;
  const separator = resolvedPath.includes("?") ? "&" : "?";
  return `${resolvedPath}${separator}hubLang=${language}`;
}

export function switchHubLanguage(language: HubLanguage) {
  const url = new URL(window.location.href);
  url.searchParams.set("hubLang", language);
  window.location.assign(url.toString());
}
