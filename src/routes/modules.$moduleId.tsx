import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  LockKeyhole,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  readLocalProgress,
  saveQuizScore,
  setLessonCompletion,
} from "@/lib/local-progress";
import { getModuleDetail, gradeQuiz, type QuizGrade } from "@/lib/modules";

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
      : [{ title: "Module — AeroSkills" }],
  }),
  component: ModuleDetail,
  notFoundComponent: () => (
    <div className="p-8 text-sm text-muted-foreground">This module is not available.</div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-8 text-sm text-destructive">Unable to load this module: {error.message}</div>
  ),
});

function ModuleDetail() {
  const { module: mod, lessons, quiz } = Route.useLoaderData() as ModuleDetailData;
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [grade, setGrade] = useState<QuizGrade | null>(null);
  const [previousScore, setPreviousScore] = useState<number | null>(null);
  const [quizError, setQuizError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const progress = readLocalProgress();
    setCompletedLessonIds(progress.completedLessons);
    if (quiz && typeof progress.quizScores[quiz.id] === "number") {
      setPreviousScore(progress.quizScores[quiz.id]);
    }
  }, [quiz]);

  const completedSet = useMemo(() => new Set(completedLessonIds), [completedLessonIds]);
  const completedInModule = lessons.filter((lesson) => completedSet.has(lesson.id)).length;
  const moduleProgress = lessons.length
    ? Math.round((completedInModule / lessons.length) * 100)
    : 0;

  const toggleLesson = (lessonId: string) => {
    const isComplete = completedSet.has(lessonId);
    setLessonCompletion(lessonId, !isComplete);
    setCompletedLessonIds((current) =>
      isComplete ? current.filter((id) => id !== lessonId) : [...current, lessonId],
    );
  };

  const handleQuizSubmit = async () => {
    if (!quiz) return;

    const unanswered = quiz.questions.filter((question) => !answers[question.id]);
    if (unanswered.length > 0) {
      setQuizError(
        `Please answer all questions before submitting (${unanswered.length} remaining).`,
      );
      return;
    }

    setQuizError(null);
    setIsSubmitting(true);

    try {
      const result = await gradeQuiz(quiz.id, answers);
      setGrade(result);
      setPreviousScore(result.score);
      saveQuizScore(quiz.id, result.score);
    } catch (error) {
      setQuizError(
        error instanceof Error
          ? error.message
          : "The assessment could not be marked. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setGrade(null);
    setQuizError(null);
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 md:px-10">
      <Link
        to="/modules"
        className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Back to all modules
      </Link>

      <header className="mb-8 border-b border-border pb-8">
        <span className="font-display text-xs uppercase tracking-widest text-muted-foreground">
          Module {String(mod.order_index + 1).padStart(2, "0")}
        </span>
        <h1 className="mt-3 text-3xl leading-tight md:text-4xl">{mod.title}</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{mod.description}</p>

        <div className="mt-6 rounded-lg border border-border bg-card p-4">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {completedInModule} of {lessons.length} lessons completed on this device
            </span>
            <span>{moduleProgress}%</span>
          </div>
          <div
            className="h-2 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-label="Module completion"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={moduleProgress}
          >
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${moduleProgress}%` }}
            />
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
            <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
            Progress is stored only in this browser. No account, personal profile or individual
            training record is created.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="font-display text-sm uppercase tracking-widest">Lessons</h2>
          <span className="text-xs text-muted-foreground">({lessons.length})</span>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border border-border bg-card">
          {lessons.map((lesson, index) => {
            const isComplete = completedSet.has(lesson.id);

            return (
              <AccordionItem
                key={lesson.id}
                value={lesson.id}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base font-medium">{lesson.title}</span>
                    {isComplete ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-label="Completed" />
                    ) : (
                      <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-label="Not completed" />
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-5 pb-5 pl-14">
                  <div className="text-sm leading-relaxed text-muted-foreground">
                    {lesson.content.split("\n\n").map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleLesson(lesson.id)}
                    className={`mt-5 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${
                      isComplete
                        ? "border-primary/30 bg-accent text-primary hover:bg-primary/10"
                        : "border-border bg-background hover:border-primary hover:text-primary"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    {isComplete ? "Marked as complete" : "Mark lesson as complete"}
                  </button>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>

      {quiz && (
        <section>
          <div className="mb-4 flex items-center gap-2">
            <ClipboardCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            <h2 className="font-display text-sm uppercase tracking-widest">Knowledge check</h2>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 md:p-6">
            <div className="mb-6 flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-lg">{quiz.title}</h3>
              <span className="text-xs text-muted-foreground">
                Pass mark: {quiz.passing_score}%
                {previousScore !== null ? ` · Last score on this device: ${previousScore}%` : ""}
              </span>
            </div>

            <ol className="flex flex-col gap-7">
              {quiz.questions.map((question, questionIndex) => (
                <li key={question.id}>
                  <div className="mb-3 flex items-start gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      Q{String(questionIndex + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium">{question.question}</p>
                  </div>

                  <fieldset className="ml-0 flex flex-col gap-2 sm:ml-8">
                    <legend className="sr-only">Choose one answer</legend>
                    {question.options.map((option) => {
                      const isSelected = answers[question.id] === option.id;

                      return (
                        <label
                          key={option.id}
                          className={`flex cursor-pointer items-start gap-3 rounded-md border px-3 py-3 text-sm transition-colors ${
                            isSelected
                              ? "border-primary bg-accent text-foreground"
                              : "border-border bg-background text-muted-foreground hover:border-primary/60"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            value={option.id}
                            checked={isSelected}
                            onChange={() => {
                              setAnswers((current) => ({
                                ...current,
                                [question.id]: option.id,
                              }));
                              setGrade(null);
                              setQuizError(null);
                            }}
                            className="mt-0.5 h-4 w-4 accent-[var(--accent-color)]"
                          />
                          <span>{option.option_text}</span>
                        </label>
                      );
                    })}
                  </fieldset>
                </li>
              ))}
            </ol>

            {quizError && (
              <p role="alert" className="mt-6 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                {quizError}
              </p>
            )}

            {grade && (
              <div
                className={`mt-6 rounded-lg border p-4 ${
                  grade.passed
                    ? "border-primary/30 bg-accent"
                    : "border-destructive/30 bg-destructive/5"
                }`}
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-0.5 h-5 w-5 shrink-0 ${grade.passed ? "text-primary" : "text-destructive"}`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-sm font-bold">
                      {grade.passed ? "Assessment passed" : "Keep learning and try again"}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Score: {grade.score}% · {grade.correctCount} of {grade.total} correct
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
              <button
                type="button"
                onClick={handleQuizSubmit}
                disabled={isSubmitting || quiz.questions.length === 0}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Marking assessment…" : "Submit answers"}
              </button>
              <button
                type="button"
                onClick={resetQuiz}
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Reset answers
              </button>
              <p className="w-full text-xs leading-relaxed text-muted-foreground sm:ml-auto sm:w-auto sm:max-w-xs sm:text-right">
                Answers are checked securely and are not stored as an individual attempt.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
