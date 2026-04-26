-- Pending Google sign-ins (cloud copy; replaces per-browser localStorage).
-- Run in Supabase SQL Editor or via supabase db push.
--
-- After deploy: add more dean emails with:
--   INSERT INTO public.dean_allowed_emails (email) VALUES ('other.dean@school.edu');

CREATE TABLE IF NOT EXISTS public.dean_allowed_emails (
  email TEXT PRIMARY KEY
);

COMMENT ON TABLE public.dean_allowed_emails IS 'Supabase auth emails allowed to list/delete pending_accounts.';

INSERT INTO public.dean_allowed_emails (email)
VALUES ('admin@slsu.edu.ph')
ON CONFLICT (email) DO NOTHING;

CREATE TABLE IF NOT EXISTS public.pending_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT NOT NULL DEFAULT 'Google User',
  provider TEXT NOT NULL DEFAULT 'google',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT pending_accounts_email_lower_chk CHECK (email = lower(email))
);

CREATE UNIQUE INDEX IF NOT EXISTS pending_accounts_email_key ON public.pending_accounts (email);

ALTER TABLE public.pending_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dean_allowed_emails ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS dean_allowed_emails_authenticated_read ON public.dean_allowed_emails;
CREATE POLICY dean_allowed_emails_authenticated_read
  ON public.dean_allowed_emails
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS pending_accounts_insert_own ON public.pending_accounts;
CREATE POLICY pending_accounts_insert_own
  ON public.pending_accounts
  FOR INSERT
  TO authenticated
  WITH CHECK (
    lower(btrim(email)) = lower(btrim(coalesce(auth.jwt() ->> 'email', '')))
  );

DROP POLICY IF EXISTS pending_accounts_select_dean ON public.pending_accounts;
CREATE POLICY pending_accounts_select_dean
  ON public.pending_accounts
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.dean_allowed_emails d
      WHERE lower(d.email) = lower(btrim(coalesce(auth.jwt() ->> 'email', '')))
    )
  );

DROP POLICY IF EXISTS pending_accounts_delete_dean ON public.pending_accounts;
CREATE POLICY pending_accounts_delete_dean
  ON public.pending_accounts
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.dean_allowed_emails d
      WHERE lower(d.email) = lower(btrim(coalesce(auth.jwt() ->> 'email', '')))
    )
  );

GRANT SELECT ON public.dean_allowed_emails TO authenticated;
GRANT SELECT, INSERT, DELETE ON public.pending_accounts TO authenticated;
