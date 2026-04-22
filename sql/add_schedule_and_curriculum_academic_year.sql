-- Add strict Academic Year support for Schedule and Curriculum filters/forms.
-- Safe to run multiple times.

ALTER TABLE public.schedules
  ADD COLUMN IF NOT EXISTS sch_ay text;

ALTER TABLE public.curriculum
  ADD COLUMN IF NOT EXISTS academic_year text;

UPDATE public.schedules
SET sch_ay = '2025-2026'
WHERE sch_ay IS NULL OR btrim(sch_ay) = '';

UPDATE public.curriculum
SET academic_year = '2025-2026'
WHERE academic_year IS NULL OR btrim(academic_year) = '';

COMMENT ON COLUMN public.schedules.sch_ay IS
  'Academic year for strict timetable filtering, e.g. 2025-2026.';

COMMENT ON COLUMN public.curriculum.academic_year IS
  'Academic year for strict curriculum filtering, e.g. 2025-2026.';
