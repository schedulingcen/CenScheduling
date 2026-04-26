-- Optional status (active | on_leave | inactive) for faculty roster; complements boolean active.
alter table public.professors
  add column if not exists status text;
