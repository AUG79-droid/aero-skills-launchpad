import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { switchHubLanguage, useHubLanguage } from "@/lib/language";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  const language = useHubLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {language === "es" ? "Página no encontrada" : "Page not found"}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {language === "es"
            ? "La página que buscas no existe o ya no está disponible."
            : "The page you are looking for does not exist or is no longer available."}
        </p>
        <div className="mt-6">
          <a
            href={withHubLanguage("/modules", language)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {language === "es" ? "Ir a los módulos" : "Go to learning modules"}
          </a>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const language = useHubLanguage();

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {language === "es" ? "Esta página no se ha podido cargar" : "This page did not load"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {language === "es"
            ? "Algo ha fallado. Inténtalo de nuevo o vuelve al catálogo de aprendizaje."
            : "Something went wrong. Try again or return to the learning catalogue."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {language === "es" ? "Reintentar" : "Try again"}
          </button>
          <a
            href={withHubLanguage("/modules", language)}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {language === "es" ? "Ir a los módulos" : "Go to learning modules"}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AeroSkills — Aviation Environmental Performance" },
      {
        name: "description",
        content:
          "Anonymous aviation environmental-performance learning covering SAF, hydrogen, climate impacts, CORSIA, operational efficiency and circular manufacturing.",
      },
      { property: "og:title", content: "AeroSkills — Aviation Environmental Performance" },
      {
        property: "og:description",
        content:
          "Anonymous aviation environmental-performance learning with no employee account or personal data collection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AeroSkills — Aviation Environmental Performance" },
      {
        name: "twitter:description",
        content:
          "Anonymous aviation environmental-performance learning with no employee account or personal data collection.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: `${import.meta.env.BASE_URL}favicon.ico`, type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const language = useHubLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <header className="flex h-12 items-center gap-2 border-b border-border bg-surface px-4">
              <SidebarTrigger
                aria-label={language === "es" ? "Abrir navegación" : "Open navigation"}
              />
              <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
                AeroSkills /{" "}
                {language === "es"
                  ? "Rendimiento ambiental de la aviación"
                  : "Aviation Environmental Performance"}
              </span>
              <div
                className="ml-auto flex items-center gap-1"
                aria-label={language === "es" ? "Idioma" : "Language"}
              >
                {(["es", "en"] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => switchHubLanguage(item)}
                    aria-pressed={language === item}
                    className={`rounded px-2 py-1 text-xs font-semibold ${language === item ? "bg-primary text-primary-foreground" : "border border-border bg-background"}`}
                  >
                    {item.toUpperCase()}
                  </button>
                ))}
                <a
                  href={`https://aug79-droid.github.io/sustainability-navigator/?lang=${language}#applications`}
                  className="ml-2 hidden text-xs font-medium text-primary underline-offset-4 hover:underline sm:inline"
                >
                  {language === "es" ? "Volver al Hub" : "Return to Hub"}
                </a>
              </div>
            </header>
            <main className="flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
