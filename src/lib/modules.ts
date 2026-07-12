import { supabase } from "@/integrations/supabase/client";

export type ModuleRow = {
  id: string;
  title: string;
  description: string;
  cover_image_url: string | null;
  order_index: number;
  status: "draft" | "published";
};

export type LessonRow = {
  id: string;
  module_id: string;
  title: string;
  content: string;
  order_index: number;
};

export type QuizOptionRow = {
  id: string;
  question_id: string;
  option_text: string;
  order_index: number;
};

export type QuizQuestionRow = {
  id: string;
  quiz_id: string;
  question: string;
  order_index: number;
  options: QuizOptionRow[];
};

export type QuizRow = {
  id: string;
  module_id: string;
  title: string;
  passing_score: number;
  questions: QuizQuestionRow[];
};

export type QuizGrade = {
  score: number;
  passed: boolean;
  correctCount: number;
  total: number;
};

export async function listModulesWithLessonCount() {
  const [{ data: modules, error: mErr }, { data: lessons, error: lErr }] = await Promise.all([
    supabase
      .from("modules")
      .select("id,title,description,cover_image_url,order_index,status")
      .eq("status", "published")
      .order("order_index"),
    supabase.from("lessons").select("module_id"),
  ]);
  if (mErr) throw mErr;
  if (lErr) throw lErr;
  const counts = new Map<string, number>();
  for (const l of lessons ?? []) counts.set(l.module_id, (counts.get(l.module_id) ?? 0) + 1);
  return (modules ?? []).map((m) => ({ ...(m as ModuleRow), lessonCount: counts.get(m.id) ?? 0 }));
}

export async function getModuleDetail(moduleId: string) {
  const { data: mod, error: mErr } = await supabase
    .from("modules")
    .select("id,title,description,cover_image_url,order_index,status")
    .eq("id", moduleId)
    .eq("status", "published")
    .maybeSingle();
  if (mErr) throw mErr;
  if (!mod) return null;

  const [{ data: lessons, error: lErr }, { data: quiz, error: qErr }] = await Promise.all([
    supabase
      .from("lessons")
      .select("id,module_id,title,content,order_index")
      .eq("module_id", moduleId)
      .order("order_index"),
    supabase
      .from("quizzes")
      .select("id,module_id,title,passing_score")
      .eq("module_id", moduleId)
      .maybeSingle(),
  ]);
  if (lErr) throw lErr;
  if (qErr) throw qErr;

  let quizWithQuestions: QuizRow | null = null;
  if (quiz) {
    const { data: questions, error: qqErr } = await supabase
      .from("quiz_questions")
      .select("id,quiz_id,question,order_index")
      .eq("quiz_id", quiz.id)
      .order("order_index");
    if (qqErr) throw qqErr;
    const qIds = (questions ?? []).map((q) => q.id);
    const { data: options, error: optErr } = qIds.length
      ? await supabase
          .from("quiz_options")
          .select("id,question_id,option_text,order_index")
          .in("question_id", qIds)
          .order("order_index")
      : { data: [], error: null };
    if (optErr) throw optErr;
    quizWithQuestions = {
      ...(quiz as Omit<QuizRow, "questions">),
      questions: (questions ?? []).map((q) => ({
        ...(q as Omit<QuizQuestionRow, "options">),
        options: (options ?? []).filter((o) => o.question_id === q.id) as QuizOptionRow[],
      })),
    };
  }

  return {
    module: mod as ModuleRow,
    lessons: (lessons ?? []) as LessonRow[],
    quiz: quizWithQuestions,
  };
}

export async function gradeQuiz(quizId: string, answers: Record<string, string>): Promise<QuizGrade> {
  const { data, error } = await (supabase as any).rpc("grade_quiz", {
    p_quiz_id: quizId,
    p_answers: answers,
  });

  if (error) throw error;

  return {
    score: Number(data?.score ?? 0),
    passed: Boolean(data?.passed),
    correctCount: Number(data?.correct_count ?? 0),
    total: Number(data?.total ?? 0),
  };
}
