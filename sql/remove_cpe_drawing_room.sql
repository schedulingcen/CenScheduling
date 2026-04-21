-- Remove retired CPE "Drawing Room" from Supabase (optional; app also hides this row).
-- If DELETE fails due to FK from schedules.room_id, reassign or clear those rows first.

DELETE FROM public.rooms
WHERE dept_id = 'cpe'
  AND (
    id = 'cpe_draw_rm'
    OR UPPER(TRIM(name)) = 'DRAWING ROOM'
  );
