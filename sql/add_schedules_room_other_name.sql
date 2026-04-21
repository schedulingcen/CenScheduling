-- Run in Supabase: SQL Editor → New query → paste → Run.
-- Fixes: "Could not find the 'room_other_name' column of 'schedules' in the schema cache"

ALTER TABLE public.schedules
  ADD COLUMN IF NOT EXISTS room_other_name text;

-- Custom / "Others" room rows use NULL room_id + room_other_name (required for that feature).
ALTER TABLE public.schedules
  ALTER COLUMN room_id DROP NOT NULL;

COMMENT ON COLUMN public.schedules.room_other_name IS
  'Custom room label when room is not in the rooms table (schedule UI only).';
