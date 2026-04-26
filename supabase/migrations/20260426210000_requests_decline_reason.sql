-- Optional: persist chair decline explanations for room requests (app reads `decline_reason`).
alter table public.requests
  add column if not exists decline_reason text;

comment on column public.requests.decline_reason is 'Reason provided by the approving department when declining a request.';
