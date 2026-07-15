import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, RotateCcw, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { clearLocalProgress, readLocalProgress } from "@/lib/local-progress";
import { listModulesWithLessonCount } from "@/lib/modules";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Learning Modules — AeroSkills Aviation Environmental Performance" },
      {
        name: "description",
        content:
          "Explore eight anonymous learning modules covering sustainable aviation fuels, hydrogen, climate impacts, regulation, operations and circular manufacturing.",
      },
      { property: "og:title", content: "AeroSkills Aviation Environmental Performance" },
      {
        property: "og:description",
        content: "Anonymous aviation environmental-performance learning for employees.",
      },
    ],
  }),
  loader: async ({ context }) =>
    context.queryClient.ensureQueryData<Awaited<ReturnType<typeof listModulesWithLessonCount>>>({
      queryKey: ["modules"],
      queryFn: listModulesWithLessonCount,
    }),
  component: ModulesRoute,
  errorComponent: ({ error }) => (
    <div className="p-8 text-sm text-destructive">Unable to load the modules: {error.message}</div>
  ),
});

function ModulesRoute() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname !== "/modules" && pathname !== "/modules/") {
    return <Outlet />;
  }

  return <ModulesPage />;
}

function ModulesPage() {
  const modules = Route.useLoaderData() as Awaited<ReturnType<typeof listModulesWithLessonCount>>;
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setCompletedLessonIds(readLocalProgress().completedLessons);
    setIsHydrated(true);
  }, []);

  const completedSet = useMemo(() => new Set(completedLessonIds), [completedLessonIds]);

  const handleClearProgress = () => {
    const confirmed = window.confirm(
      "Delete all learning progress stored in this browser? This action cannot be undone.",
    );
    if (!confirmed) return;

    clearLocalProgress();
    setCompletedLessonIds([]);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
      <header className="mb-8 border-b border-border pb-8">
        <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
          Learning catalogue
        </span>
        <h1 className="mt-2 text-3xl leading-tight md:text-4xl">Aviation Environmental Performance</h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Eight practical modules covering the technologies, regulations and operational levers used
          to assess and reduce defined aviation environmental impacts. No account, name, email
          address or employee identifier is required.
        </p>

        <div className="mt-6 flex flex-col gap-4 rounded-lg border border-primary/20 bg-accent p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium">Anonymous by design</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Your progress stays only in this browser. It is not linked to an account and is not
                sent to the training database.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClearProgress}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            Clear local progress
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => {
          const completedLessons = module.lessonIds.filter((id) => completedSet.has(id)).length;
          const percentage = module.lessonCount
            ? Math.round((completedLessons / module.lessonCount) * 100)
            : 0;

          return (
            <Link
              key={module.id}
              to="/modules/$moduleId"
              params={{ moduleId: module.id }}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-border bg-secondary">
                {module.cover_image_url ? (
                  <img
                    src={module.cover_image_url}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-sm bg-background/90 px-2 py-1 font-display text-[10px] uppercase tracking-widest text-foreground backdrop-blur-sm">
                  Module {String(module.order_index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <h2 className="font-display text-lg leading-snug">{module.title}</h2>
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {module.description}
                </p>

                <div className="mt-auto border-t border-border pt-4">
                  <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{module.lessonCount} lessons</span>
                    <span>{isHydrated ? `${percentage}% complete` : "Local progress"}</span>
                  </div>
                  <div
                    className="h-1.5 overflow-hidden rounded-full bg-muted"
                    role="progressbar"
                    aria-label={`${module.title} completion`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={isHydrated ? percentage : 0}
                  >
                    <div
                      className="h-full rounded-full bg-primary transition-[width] duration-300"
                      style={{ width: `${isHydrated ? percentage : 0}%` }}
                    />
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary transition-transform duration-[180ms] ease-out group-hover:translate-x-0.5">
                    Open module <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
