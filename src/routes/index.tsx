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

  const language =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("hubLang") === "es"
      ? "es"
      : "en";
  return (
    <p className="p-8 text-sm text-muted-foreground">
      {language === "es" ? "Abriendo módulos de aprendizaje…" : "Opening learning modules…"}
    </p>
  );
}
