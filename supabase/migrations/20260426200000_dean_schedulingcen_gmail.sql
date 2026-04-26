-- Allow schedulingcen@gmail.com to list/delete pending_accounts (same as dean_allowed_emails).
INSERT INTO public.dean_allowed_emails (email)
VALUES ('schedulingcen@gmail.com')
ON CONFLICT (email) DO NOTHING;
