import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, ClipboardCheck } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { getModuleDetail } from "@/lib/modules";

type ModuleDetailData = NonNullable<Awaited<ReturnType<typeof getModuleDetail>>>;

export const Route = createFileRoute("/modules/$moduleId")({
  loader: async ({ params, context }): Promise<ModuleDetailData> => {
    const data = await context.queryClient.ensureQueryData<
      Awaited<ReturnType<typeof getModuleDetail>>
    >({
      queryKey: ["module", params.moduleId],
      queryFn: () => getModuleDetail(params.moduleId),
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.module.title} — AeroSkills` },
          { name: "description", content: loaderData.module.description },
          { property: "og:title", content: loaderData.module.title },
          { property: "og:description", content: loaderData.module.description },
        ]
      : [{ title: "Módulo — AeroSkills" }],
  }),
  component: ModuleDetail,
  notFoundComponent: () => (
    <div className="p-8 text-sm text-muted-foreground">Módulo no encontrado.</div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-8 text-sm text-destructive">Error al cargar el módulo: {error.message}</div>
  ),
});

function ModuleDetail() {
  const { module: mod, lessons, quiz } = Route.useLoaderData() as ModuleDetailData;

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 md:px-10">
      <Link
        to="/modules"
        className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" /> Volver a módulos
      </Link>

      <header className="mb-10 border-b border-border pb-8">
        <div className="mb-3 flex items-center gap-2">
          <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
            Módulo {String(mod.order_index + 1).padStart(2, "0")}
          </span>
          <Badge
            variant="secondary"
            className="rounded-sm border border-primary/20 bg-accent text-[10px] font-medium uppercase tracking-wider text-primary"
          >
            {mod.status === "published" ? "publicado" : "borrador"}
          </Badge>
        </div>
        <h1 className="mb-3 text-3xl leading-tight md:text-4xl">{mod.title}</h1>
        <p className="text-base text-muted-foreground">{mod.description}</p>
      </header>

      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <h2 className="font-display text-sm uppercase tracking-widest">Lecciones</h2>
          <span className="text-xs text-muted-foreground">({lessons.length})</span>
        </div>
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-card">
          {lessons.map((l, i) => (
            <AccordionItem
              key={l.id}
              value={l.id}
              className="border-b border-border last:border-b-0"
            >
              <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-base font-medium">{l.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pl-14 text-sm leading-relaxed text-muted-foreground">
                {l.content.split("\n\n").map((p, idx) => (
                  <p key={idx} className="mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {quiz && (
        <section>
          <div className="mb-4 flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-primary" />
            <h2 className="font-display text-sm uppercase tracking-widest">Evaluación</h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-6 flex items-baseline justify-between border-b border-border pb-4">
              <h3 className="font-display text-lg">{quiz.title}</h3>
              <span className="text-xs text-muted-foreground">
                Nota de aprobado: {quiz.passing_score}%
              </span>
            </div>
            <ol className="flex flex-col gap-6">
              {quiz.questions.map((q, i) => (
                <li key={q.id}>
                  <div className="mb-3 flex items-start gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      P{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium">{q.question}</p>
                  </div>
                  <ul className="ml-8 flex flex-col gap-1.5">
                    {q.options.map((o) => (
                      <li
                        key={o.id}
                        className="flex items-center gap-2 rounded-sm border border-border bg-background px-3 py-2 text-sm text-muted-foreground"
                      >
                        <span className="inline-block h-2 w-2 rounded-full border border-border" />
                        {o.option_text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              La respuesta interactiva está prevista para una fase posterior.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
