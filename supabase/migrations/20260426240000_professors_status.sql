-- Optional: native status column. The app also encodes "on leave" in `note` when this column is absent.
alter table public.professors
  add column if not exists status text;
