-- Remove retired ME "Drawing Room" from Supabase (optional; app also hides this row).
-- If DELETE fails due to FK from schedules.room_id, reassign those schedules first.

DELETE FROM public.rooms
WHERE dept_id = 'me'
  AND (
    id = 'me_draw_rm'
    OR UPPER(TRIM(name)) = 'DRAWING ROOM'
  );
