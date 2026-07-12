export type LocalProgress = {
  completedLessons: string[];
  quizScores: Record<string, number>;
};

const STORAGE_KEY = "aeroskills-anonymous-progress-v1";

const emptyProgress: LocalProgress = {
  completedLessons: [],
  quizScores: {},
};

export function readLocalProgress(): LocalProgress {
  if (typeof window === "undefined") return emptyProgress;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress;

    const parsed = JSON.parse(raw) as Partial<LocalProgress>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      quizScores:
        parsed.quizScores && typeof parsed.quizScores === "object" ? parsed.quizScores : {},
    };
  } catch {
    return emptyProgress;
  }
}

export function writeLocalProgress(progress: LocalProgress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function setLessonCompletion(lessonId: string, completed: boolean) {
  const progress = readLocalProgress();
  const next = new Set(progress.completedLessons);

  if (completed) next.add(lessonId);
  else next.delete(lessonId);

  writeLocalProgress({ ...progress, completedLessons: [...next] });
}

export function saveQuizScore(quizId: string, score: number) {
  const progress = readLocalProgress();
  writeLocalProgress({
    ...progress,
    quizScores: {
      ...progress.quizScores,
      [quizId]: score,
    },
  });
}

export function clearLocalProgress() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
