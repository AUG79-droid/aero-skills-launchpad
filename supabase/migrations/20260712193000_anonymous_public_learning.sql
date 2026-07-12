-- Anonymous public learning model
-- No employee account, profile, identifier, personal progress or quiz attempt is stored.

-- Remove tables designed for identifiable individual tracking.
DROP TABLE IF EXISTS public.quiz_attempts CASCADE;
DROP TABLE IF EXISTS public.module_progress CASCADE;
DROP TABLE IF EXISTS public.lesson_progress CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Lock down all remaining learning-content tables.
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_options ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can read published modules" ON public.modules;
DROP POLICY IF EXISTS "Public can read lessons in published modules" ON public.lessons;
DROP POLICY IF EXISTS "Public can read quizzes in published modules" ON public.quizzes;
DROP POLICY IF EXISTS "Public can read questions in published modules" ON public.quiz_questions;
DROP POLICY IF EXISTS "Public can read options in published modules" ON public.quiz_options;

CREATE POLICY "Public can read published modules"
ON public.modules
FOR SELECT
TO anon, authenticated
USING (status = 'published');

CREATE POLICY "Public can read lessons in published modules"
ON public.lessons
FOR SELECT
TO anon, authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.modules AS module
    WHERE module.id = lessons.module_id
      AND module.status = 'published'
  )
);

CREATE POLICY "Public can read quizzes in published modules"
ON public.quizzes
FOR SELECT
TO anon, authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.modules AS module
    WHERE module.id = quizzes.module_id
      AND module.status = 'published'
  )
);

CREATE POLICY "Public can read questions in published modules"
ON public.quiz_questions
FOR SELECT
TO anon, authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.quizzes AS quiz
    JOIN public.modules AS module ON module.id = quiz.module_id
    WHERE quiz.id = quiz_questions.quiz_id
      AND module.status = 'published'
  )
);

CREATE POLICY "Public can read options in published modules"
ON public.quiz_options
FOR SELECT
TO anon, authenticated
USING (
  EXISTS (
    SELECT 1
    FROM public.quiz_questions AS question
    JOIN public.quizzes AS quiz ON quiz.id = question.quiz_id
    JOIN public.modules AS module ON module.id = quiz.module_id
    WHERE question.id = quiz_options.question_id
      AND module.status = 'published'
  )
);

-- Anonymous visitors may read published learning content only.
-- No INSERT, UPDATE or DELETE permission is granted.
REVOKE ALL ON public.modules FROM anon, authenticated;
REVOKE ALL ON public.lessons FROM anon, authenticated;
REVOKE ALL ON public.quizzes FROM anon, authenticated;
REVOKE ALL ON public.quiz_questions FROM anon, authenticated;
REVOKE ALL ON public.quiz_options FROM anon, authenticated;

GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON public.modules TO anon, authenticated;
GRANT SELECT ON public.lessons TO anon, authenticated;
GRANT SELECT ON public.quizzes TO anon, authenticated;
GRANT SELECT ON public.quiz_questions TO anon, authenticated;

-- Deliberately exclude is_correct from the columns available to the browser.
GRANT SELECT (id, question_id, option_text, order_index)
ON public.quiz_options
TO anon, authenticated;

-- Mark an assessment without creating or storing an individual attempt.
-- The browser receives only aggregate result data.
CREATE OR REPLACE FUNCTION public.grade_quiz(
  p_quiz_id uuid,
  p_answers jsonb
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  v_passing_score integer;
  v_total integer;
  v_correct integer;
  v_score integer;
BEGIN
  SELECT quiz.passing_score
  INTO v_passing_score
  FROM public.quizzes AS quiz
  JOIN public.modules AS module ON module.id = quiz.module_id
  WHERE quiz.id = p_quiz_id
    AND module.status = 'published';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Assessment is not available';
  END IF;

  SELECT count(*)::integer
  INTO v_total
  FROM public.quiz_questions AS question
  WHERE question.quiz_id = p_quiz_id;

  SELECT count(*)::integer
  INTO v_correct
  FROM public.quiz_questions AS question
  JOIN public.quiz_options AS option
    ON option.question_id = question.id
   AND option.is_correct = true
  WHERE question.quiz_id = p_quiz_id
    AND (p_answers ->> question.id::text) = option.id::text;

  v_score := CASE
    WHEN v_total = 0 THEN 0
    ELSE round((v_correct::numeric * 100) / v_total)::integer
  END;

  RETURN jsonb_build_object(
    'score', v_score,
    'passed', v_score >= v_passing_score,
    'correct_count', v_correct,
    'total', v_total
  );
END;
$$;

REVOKE ALL ON FUNCTION public.grade_quiz(uuid, jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.grade_quiz(uuid, jsonb) TO anon, authenticated;
