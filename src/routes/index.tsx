import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { withHubLanguage } from "@/lib/language";

export const Route = createFileRoute("/")({
  component: HomeRedirect,
});

function HomeRedirect() {
  useEffect(() => {
    const language =
      new URLSearchParams(window.location.search).get("hubLang") === "es" ? "es" : "en";
    window.location.replace(withHubLanguage("/modules", language));
  }, []);

  return <p className="p-8 text-sm text-muted-foreground">Opening learning modules…</p>;
}
