import { expandedLessonsByModule } from "@/data/course-content";
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

const modulePresentationById: Record<string, Pick<ModuleRow, "title" | "description">> = {
  "f35868c6-ef6d-4d2e-937e-f8fd6fe69a5e": {
    title: "Foundations of Aviation Environmental Performance",
    description:
      "Understand environmental performance in aviation as a systems challenge and learn to evaluate life-cycle impacts, trade-offs, evidence and controlled action.",
  },
  "80601dab-e1d8-4fba-b7eb-14c4d1cc1b63": {
    title: "Aviation and Climate Change: CO2 and Non-CO2 Effects",
    description:
      "Understand how carbon dioxide, nitrogen oxides, particles and contrails affect climate, including the importance of location, timing, metric and uncertainty.",
  },
  "a976f431-fb64-45ea-aa08-6c330022521c": {
    title: "Sustainable Aviation Fuel (SAF)",
    description:
      "Learn the regulated SAF category, why certified life-cycle greenhouse-gas intensity varies by pathway, and how technical approval, traceability and scale affect claims.",
  },
  "e7c6459a-7eb1-452d-94eb-3d37037004b0": {
    title: "Hydrogen-Propelled Aviation and the ZEROe R&D Programme",
    description:
      "Explore hydrogen properties, aircraft architectures and ZEROe as ongoing research and development for a future hydrogen-propelled aircraft, including life-cycle and non-CO2 limits.",
  },
  "2075611c-3d65-4554-9344-ecc3527a0b97": {
    title: "Operational Efficiency and Airspace",
    description:
      "Evaluate defined reductions in fuel burn and climate effects through flight planning, air traffic management, ground operations and maintenance, subject to safety and operational constraints.",
  },
  "addd634c-87e8-43c6-9095-b785a0c80c51": {
    title: "CORSIA and Environmental Regulation",
    description:
      "Understand CORSIA, EU ETS, ReFuelEU Aviation and monitoring, reporting and verification without confusing compliance, physical reductions and environmental attributes.",
  },
  "54e69658-1cba-4e40-b56c-3450274fe03b": {
    title: "Circular Economy in Aerospace Manufacturing",
    description:
      "Apply prevention, life extension, controlled reuse and verified material recovery to aerospace design, production, maintenance and end-of-life decisions.",
  },
  "ead97f8a-17ee-4635-bdae-d430a9a08365": {
    title: "Aviation Emissions-Reduction Roadmap to 2050",
    description:
      "Connect technology, fuels, operations, infrastructure and policy while distinguishing Airbus actions from the ATAG, IATA and ICAO aviation-sector objectives of net-zero carbon emissions by 2050.",
  },
};

const quizTextReplacements: Record<string, string> = {
  "Foundations of Aviation Sustainability — Knowledge Check":
    "Foundations of Aviation Environmental Performance — Knowledge Check",
  "Roadmap to Net-Zero Aviation — Knowledge Check":
    "Aviation Emissions-Reduction Roadmap to 2050 — Knowledge Check",
  "Hydrogen Aviation and the ZEROe Programme — Knowledge Check":
    "Hydrogen-Propelled Aviation and the ZEROe R&D Programme — Knowledge Check",
  "Why is aviation sustainability best treated as a systems challenge?":
    "Why should aviation environmental performance be treated as a systems challenge?",
  "Because every sustainability decision has a single obvious answer":
    "Because every environmental decision has a single obvious answer",
  "What is the correct response when a sustainability option involves trade-offs?":
    "What is the correct response when an environmental option involves trade-offs?",
  "Which example is an actionable sustainability objective?":
    "Which example is an actionable environmental objective?",
  "Become greener soon": "Use an unspecified positive environmental slogan",
  "Support sustainability whenever possible": "Support environmental goals without defining an action",
  "How should a future environmental benefit be communicated?":
    "How should a future emissions or resource-reduction estimate be communicated?",
  "Whenever it is called green, regardless of production":
    "Whenever it is given an undefined colour label, regardless of production",
  "When can hydrogen offer strong climate benefits?":
    "When can a hydrogen-propelled aircraft have lower life-cycle greenhouse-gas emissions than a defined kerosene reference?",
  "When production and liquefaction use genuinely low-carbon energy and the full system is assessed":
    "When production and liquefaction use energy meeting a quantified life-cycle threshold and the full system is compared with a defined reference",
  "What determines the pace of hydrogen-aircraft deployment?":
    "What determines the pace of future hydrogen-propelled aircraft deployment?",
  "Fuel colour": "An undefined fuel colour label",
  "It guarantees zero emissions": "It removes the need to measure any remaining emissions",
  "Why does net-zero aviation require a portfolio of levers?":
    "Why do the ATAG, IATA and ICAO aviation-sector objectives of net-zero carbon emissions by 2050 require a portfolio of levers?",
};

function applyModulePresentation(module: ModuleRow): ModuleRow {
  return { ...module, ...(modulePresentationById[module.id] ?? {}) };
}

function replaceQuizText(text: string): string {
  return quizTextReplacements[text] ?? text;
}

export async function listModulesWithLessonCount() {
  const { data: modules, error } = await supabase
    .from("modules")
    .select("id,title,description,cover_image_url,order_index,status")
    .eq("status", "published")
    .order("order_index");

  if (error) throw error;

  return ((modules ?? []) as ModuleRow[]).map((module) => {
    const presentedModule = applyModulePresentation(module);
    const lessonIds = (expandedLessonsByModule[module.id] ?? []).map((item) => item.id);
    return {
      ...presentedModule,
      lessonCount: lessonIds.length,
      lessonIds,
    };
  });
}

export async function getModuleDetail(moduleId: string) {
  const { data: mod, error: moduleError } = await supabase
    .from("modules")
    .select("id,title,description,cover_image_url,order_index,status")
    .eq("id", moduleId)
    .eq("status", "published")
    .maybeSingle();

  if (moduleError) throw moduleError;
  if (!mod) return null;

  const { data: quiz, error: quizError } = await supabase
    .from("quizzes")
    .select("id,module_id,title,passing_score")
    .eq("module_id", moduleId)
    .maybeSingle();

  if (quizError) throw quizError;

  let quizWithQuestions: QuizRow | null = null;
  if (quiz) {
    const { data: questions, error: questionError } = await supabase
      .from("quiz_questions")
      .select("id,quiz_id,question,order_index")
      .eq("quiz_id", quiz.id)
      .order("order_index");

    if (questionError) throw questionError;

    const typedQuestions = (questions ?? []) as Array<Omit<QuizQuestionRow, "options">>;
    const questionIds = typedQuestions.map((question) => question.id);
    const { data: options, error: optionError } = questionIds.length
      ? await supabase
          .from("quiz_options")
          .select("id,question_id,option_text,order_index")
          .in("question_id", questionIds)
          .order("order_index")
      : { data: [], error: null };

    if (optionError) throw optionError;

    quizWithQuestions = {
      ...(quiz as Omit<QuizRow, "questions">),
      title: replaceQuizText(quiz.title),
      questions: typedQuestions.map((question) => ({
        ...(question as Omit<QuizQuestionRow, "options">),
        question: replaceQuizText(question.question),
        options: ((options ?? []) as QuizOptionRow[]).filter(
          (option) => option.question_id === question.id,
        ).map((option) => ({
          ...option,
          option_text: replaceQuizText(option.option_text),
        })) as QuizOptionRow[],
      })),
    };
  }

  return {
    module: applyModulePresentation(mod as ModuleRow),
    lessons: (expandedLessonsByModule[moduleId] ?? []) as LessonRow[],
    quiz: quizWithQuestions,
  };
}

export async function gradeQuiz(
  quizId: string,
  answers: Record<string, string>,
): Promise<QuizGrade> {
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
