-- Links follow-up "book a room" requests to the teaching-assignment parent row (app: `parent_teaching_request_id` / `parentTeachingRequestId`).
-- Without this column, inserts succeed but the link is dropped and the UI keeps showing "Book a room" after refresh.
alter table public.requests
  add column if not exists parent_teaching_request_id uuid null references public.requests (id) on delete set null;

create index if not exists requests_parent_teaching_request_id_idx
  on public.requests (parent_teaching_request_id)
  where parent_teaching_request_id is not null;

comment on column public.requests.parent_teaching_request_id is 'Teaching-assignment request id when this row is a follow-up room booking to another department.';
