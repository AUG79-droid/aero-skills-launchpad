import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { listModulesWithLessonCount } from "@/lib/modules";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Módulos — AeroSkills Sostenibilidad" },
      {
        name: "description",
        content:
          "Explora el catálogo de formación de AeroSkills Sostenibilidad: ocho módulos sobre SAF, hidrógeno ZEROe, CORSIA y más.",
      },
      { property: "og:title", content: "Módulos — AeroSkills Sostenibilidad" },
      {
        property: "og:description",
        content: "Catálogo de formación para empleados de Airbus sobre sostenibilidad en aviación.",
      },
    ],
  }),
  loader: async ({ context }) =>
    context.queryClient.ensureQueryData<Awaited<ReturnType<typeof listModulesWithLessonCount>>>({
      queryKey: ["modules"],
      queryFn: listModulesWithLessonCount,
    }),
  component: ModulesPage,
  errorComponent: ({ error }) => (
    <div className="p-8 text-sm text-destructive">Error al cargar los módulos: {error.message}</div>
  ),
});

function ModulesPage() {
  const modules = Route.useLoaderData() as Awaited<ReturnType<typeof listModulesWithLessonCount>>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <header className="mb-10 flex flex-col gap-2 border-b border-border pb-8">
        <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
          Catálogo de formación
        </span>
        <h1 className="text-3xl leading-tight md:text-4xl">Módulos de Sostenibilidad</h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Ocho módulos que cubren las tecnologías, la regulación y las palancas operacionales con
          las que Airbus descarboniza la aviación comercial. El seguimiento de progreso llegará en
          una fase posterior.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((m) => (
          <Link
            key={m.id}
            to="/modules/$moduleId"
            params={{ moduleId: m.id }}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors duration-[180ms] ease-out hover:border-primary"
          >
            <div className="flex h-32 items-center justify-center border-b border-border bg-secondary">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-center justify-between">
                <span className="font-display text-[10px] uppercase tracking-widest text-muted-foreground">
                  Módulo {String(m.order_index + 1).padStart(2, "0")}
                </span>
                <Badge
                  variant="secondary"
                  className="rounded-sm border border-primary/20 bg-accent text-[10px] font-medium uppercase tracking-wider text-primary"
                >
                  {m.status === "published" ? "publicado" : "borrador"}
                </Badge>
              </div>
              <h2 className="font-display text-lg leading-snug">{m.title}</h2>
              <p className="line-clamp-3 text-sm text-muted-foreground">{m.description}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                <span>{m.lessonCount} lecciones</span>
                <span className="inline-flex items-center gap-1 text-primary transition-transform duration-[180ms] ease-out group-hover:translate-x-0.5">
                  Ver <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
