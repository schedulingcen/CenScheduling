// Supabase client bootstrap for browser pages.
// Replace values below with your project credentials from Supabase dashboard.
(function initSupabaseClient() {
  const SUPABASE_URL = 'https://vkecqakqgdbsplldobcu.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zGUz_cLI6FLAmPwqbscDjQ_GXYD3V_P';

  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    window.cenSupabase = null;
    window.cenSupabaseReady = false;
    return;
  }
  if (
    !SUPABASE_URL ||
    SUPABASE_URL.includes('YOUR_PROJECT_ID') ||
    !SUPABASE_PUBLISHABLE_KEY ||
    SUPABASE_PUBLISHABLE_KEY.includes('REPLACE_ME')
  ) {
    window.cenSupabase = null;
    window.cenSupabaseReady = false;
    return;
  }
  window.cenSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  window.cenSupabaseReady = true;
})();
