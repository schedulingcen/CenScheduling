// app.js
// Multi-page: each *.html sets window.CEN_PAGE or it is inferred from the filename.
const ICONS = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V15a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  checkCircle: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  printer: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>',
  inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>',
  beaker: '<path d="M9 3h6"/><path d="M10 9v11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9"/><path d="M8 3l1 6h6l1-6"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  alertTriangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  sun: '<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="6.34" y1="17.66" x2="4.93" y2="19.07"/><line x1="19.07" y1="4.93" x2="17.66" y2="6.34"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  logOut: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  edit: '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  eye: '<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
};
function icon(name, size = 16) {
  const inner = ICONS[name] || ICONS.close;
  return `<span class="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg></span>`;
}

function initAppTheme() {
  let t = 'light';
  try {
    const s = localStorage.getItem('cen_theme');
    if (s === 'dark' || s === 'light') t = s;
  } catch (e) { /* ignore */ }
  document.documentElement.dataset.theme = t;
  return t;
}
function toggleAppTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('cen_theme', next); } catch (e) { /* ignore */ }
}

const CEN_STATE_KEY = 'cen_app_state';
/** Survives browser restart (unlike sessionStorage) so curriculum deletions stay suppressed after sync. */
const CEN_CURRICULUM_TOMBSTONES_KEY = 'cen_curriculum_deleted_slots_v1';
/** Local curriculum drafts kept when cloud save fails/unavailable; merged after every sync. */
const CEN_CURRICULUM_LOCAL_UPSERTS_KEY = 'cen_curriculum_local_upserts_v1';
const CEN_CURRICULUM_LOCAL_DELETES_KEY = 'cen_curriculum_local_deletes_v1';
const CEN_FACULTY_META_OVERRIDES_KEY = 'cen_faculty_meta_overrides_v1';
const CURRICULUM_HOURS_OVERRIDES_KEY = 'cen_curriculum_required_hours_overrides_v1';
/** Contact-hour conversion used by curriculum Hours/Remaining Hours columns. */
const CURRICULUM_LEC_HOURS_PER_UNIT = 1;
const CURRICULUM_LAB_HOURS_PER_UNIT = 6;
const ACCOUNT_ROLE_OVERRIDES_KEY = 'cen_account_role_overrides_v1';
const PENDING_ACCOUNTS_KEY = 'cen_pending_accounts_v1';
const ACCOUNT_BASE_REMOVED_KEY = 'cen_accounts_removed_base_v1';
/** Base accounts that stay in System Accounts even if marked removed in localStorage. */
const NEVER_REMOVE_BASE_ACCOUNT_EMAILS = new Set(['admin@slsu.edu.ph', 'schedulingcen@gmail.com']);
function loadStoredArray(key) {
  try {
    let parsed = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}
function saveStoredArray(key, arr) {
  try { localStorage.setItem(key, JSON.stringify(Array.isArray(arr) ? arr : [])); } catch (_) {}
}
function loadLocalCurriculumUpserts() {
  return loadStoredArray(CEN_CURRICULUM_LOCAL_UPSERTS_KEY).filter(r => r && r.id);
}
function saveLocalCurriculumUpserts(rows) {
  saveStoredArray(CEN_CURRICULUM_LOCAL_UPSERTS_KEY, rows);
}
function loadLocalCurriculumDeletes() {
  return new Set(loadStoredArray(CEN_CURRICULUM_LOCAL_DELETES_KEY).map(curriculumRowIdKey).filter(Boolean));
}
function saveLocalCurriculumDeletes(idsSet) {
  saveStoredArray(CEN_CURRICULUM_LOCAL_DELETES_KEY, [...idsSet]);
}
function rememberLocalCurriculumUpserts(rows) {
  if (!Array.isArray(rows) || !rows.length) return;
  let map = new Map();
  for (let r of loadLocalCurriculumUpserts()) map.set(curriculumRowIdKey(r.id), r);
  for (let r of rows) {
    let k = curriculumRowIdKey(r?.id);
    if (!k) continue;
    map.set(k, { ...r, id: k });
  }
  saveLocalCurriculumUpserts([...map.values()]);
  let del = loadLocalCurriculumDeletes();
  for (let r of rows) {
    let k = curriculumRowIdKey(r?.id);
    if (k) del.delete(k);
  }
  saveLocalCurriculumDeletes(del);
}
function rememberLocalCurriculumDelete(rowId) {
  let key = curriculumRowIdKey(rowId);
  if (!key) return;
  let del = loadLocalCurriculumDeletes();
  del.add(key);
  saveLocalCurriculumDeletes(del);
  let keep = loadLocalCurriculumUpserts().filter(r => curriculumRowIdKey(r?.id) !== key);
  saveLocalCurriculumUpserts(keep);
}
/** Merge local curriculum drafts/deletes so user edits persist across refresh even before cloud sync succeeds. */
function applyLocalCurriculumDraftsToState() {
  if (!Array.isArray(state.curriculum)) state.curriculum = [];
  let del = loadLocalCurriculumDeletes();
  let byId = new Map();
  for (let r of state.curriculum) {
    let k = curriculumRowIdKey(r?.id);
    if (!k || del.has(k)) continue;
    byId.set(k, { ...r, id: k });
  }
  for (let r of loadLocalCurriculumUpserts()) {
    let k = curriculumRowIdKey(r?.id);
    if (!k || del.has(k)) continue;
    byId.set(k, { ...r, id: k });
  }
  state.curriculum = [...byId.values()];
}
function loadAccountRoleOverrides() {
  return loadStoredArray(ACCOUNT_ROLE_OVERRIDES_KEY).filter(x => x && x.email);
}
function saveAccountRoleOverrides(rows) {
  saveStoredArray(ACCOUNT_ROLE_OVERRIDES_KEY, rows);
}
function loadPendingAccounts() {
  return loadStoredArray(PENDING_ACCOUNTS_KEY).filter(x => x && x.email);
}
function savePendingAccounts(rows) {
  saveStoredArray(PENDING_ACCOUNTS_KEY, rows);
}
function loadRemovedBaseAccountEmails() {
  return new Set(
    loadStoredArray(ACCOUNT_BASE_REMOVED_KEY)
      .map(x => String(x || '').trim().toLowerCase())
      .filter(Boolean),
  );
}
function saveRemovedBaseAccountEmails(set) {
  saveStoredArray(ACCOUNT_BASE_REMOVED_KEY, [...set]);
}
function officialBaseAccountsList() {
  return [
    { id: 'admin', name: 'Dr. Maria Corazon B. Abejo', email: 'admin@slsu.edu.ph', role: 'admin', initials: 'MCA', dept: null },
    { id: 'admin_schedulingcen', name: 'CEN Scheduling Admin', email: 'schedulingcen@gmail.com', role: 'admin', initials: 'CS', dept: null },
    { id: 'ie', name: 'Engr. Lynnevel R. Amparo', email: 'ie.chair@slsu.edu.ph', role: 'chairperson', dept: 'ie', initials: 'LA' },
    { id: 'ee', name: 'Engr. Maurino N. Abuel', email: 'ee.chair@slsu.edu.ph', role: 'chairperson', dept: 'ee', initials: 'MA' },
    { id: 'ce', name: 'Engr. John Christopher D. Tayoto', email: 'ce.chair@slsu.edu.ph', role: 'chairperson', dept: 'ce', initials: 'JT' },
    { id: 'me', name: 'Engr. Ronnel S. Nombrefia', email: 'me.chair@slsu.edu.ph', role: 'chairperson', dept: 'me', initials: 'RN' },
    { id: 'ece', name: 'Engr. Pitz Gerald G. Lagrazon', email: 'ece.chair@slsu.edu.ph', role: 'chairperson', dept: 'ece', initials: 'PL' },
    { id: 'cpe', name: 'Engr. Julie Ann Susa-Gili', email: 'cpe.chair@slsu.edu.ph', role: 'chairperson', dept: 'cpe', initials: 'JS' },
  ];
}
function buildMergedSystemAccounts() {
  let removed = loadRemovedBaseAccountEmails();
  let base = officialBaseAccountsList().filter(u => {
    let em = String(u.email || '').trim().toLowerCase();
    return !removed.has(em) || NEVER_REMOVE_BASE_ACCOUNT_EMAILS.has(em);
  });
  let mappedByEmail = new Map();
  for (let u of base) mappedByEmail.set(String(u.email || '').toLowerCase(), { ...u });
  for (let u of loadAccountRoleOverrides()) {
    let email = String(u.email || '').trim().toLowerCase();
    if (!email) continue;
    mappedByEmail.set(email, {
      id: String(u.id || `mapped_${email}`),
      name: String(u.name || email.split('@')[0] || 'User'),
      email,
      role: u.role === 'admin' ? 'admin' : 'chairperson',
      dept: u.role === 'admin' ? null : String(u.dept || ''),
      initials: String(u.initials || initialsFromName(u.name || email)),
    });
  }
  return [...mappedByEmail.values()].sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));
}
function getMergedSystemAccountByEmail(email) {
  let clean = String(email || '').trim().toLowerCase();
  return buildMergedSystemAccounts().find(u => String(u.email || '').trim().toLowerCase() === clean) || null;
}
function renderSystemAccountEditForm(d) {
  let deptOpts = DEPARTMENTS.map(x =>
    `<option value="${escapeHtml(x.id)}" ${x.id === d.dept ? 'selected' : ''}>${escapeHtml(x.code)} - ${escapeHtml(x.name)}</option>`,
  ).join('');
  let roleAdminSel = d.role === 'admin' ? 'selected' : '';
  let roleChairSel = d.role === 'admin' ? '' : 'selected';
  return `<div class="form-grid" id="acctEditRoot">
    <div class="form-group full"><label for="acct_edit_name">Full name</label><input class="form-input" id="acct_edit_name" value="${escapeHtml(d.name || '')}" autocomplete="off"></div>
    <div class="form-group full"><label for="acct_edit_email">Email</label><input class="form-input" id="acct_edit_email" type="email" value="${escapeHtml(d.email || '')}" autocomplete="off"></div>
    <div class="form-group"><label for="acct_edit_role">Role</label><select class="form-select" id="acct_edit_role"><option value="chairperson" ${roleChairSel}>Chairperson</option><option value="admin" ${roleAdminSel}>Admin (Dean)</option></select></div>
    <div class="form-group" id="acct_edit_dept_wrap"><label for="acct_edit_dept">Department</label><select class="form-select" id="acct_edit_dept">${deptOpts}</select></div>
  </div><div id="acctEditAlert"></div>`;
}
function syncSystemAccountDeptFieldUi() {
  let roleEl = document.getElementById('acct_edit_role');
  let wrap = document.getElementById('acct_edit_dept_wrap');
  if (!roleEl || !wrap) return;
  let isAdmin = roleEl.value === 'admin';
  wrap.style.opacity = isAdmin ? '0.55' : '1';
  wrap.querySelectorAll('select,input').forEach(el => { el.disabled = isAdmin; });
}
function initialsFromName(name) {
  let parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'U';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
const PAGE_TO_HTML = {
  dashboard: 'dashboard.html',
  schedule: 'schedule.html',
  requests: 'request.html',
  curriculum: 'curriculum.html',
  section: 'curriculum.html',
  room: 'curriculum.html',
  forms: 'curriculum.html',
  faculty: 'faculty.html',
  accounts: 'accounts.html',
  account: 'account.html',
};
const HTML_TO_PAGE = {
  'dashboard.html': 'dashboard',
  'schedule.html': 'schedule',
  'timetable.html': 'schedule',
  'request.html': 'requests',
  'requests.html': 'requests',
  'curriculum.html': 'curriculum',
  'faculty.html': 'faculty',
  'accounts.html': 'accounts',
  'account.html': 'account',
};

/** Create schedule: stored on each entry as schYear / schSem. */
const SCHEDULE_FORM_YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
/** Create / edit schedule semester values (matches top bar term + curriculum). */
const SCHEDULE_FORM_SEMS = ['1st Semester', '2nd Semester', 'Midyear'];
/** Forms page + export modal (Faculty Load, Pre-Enrollment, Schedule of Subjects). */
const FORMS_SEMESTER_OPTIONS = ['1st Semester', '2nd Semester', 'Midyear'];
/** Semester ordering for schedule cascade & curriculum rows that still use Midyear in data. */
const CURRICULUM_FORM_SEMS = ['1st Semester', '2nd Semester', 'Midyear'];
/** Curriculum page semester dropdowns (filters + Add Subject modal). */
const CURRICULUM_PAGE_SEMS = ['1st Semester', '2nd Semester', 'Midyear'];
const DEFAULT_ACADEMIC_YEAR = '2025-2026';
const TERM_AY_OTHER_VALUE = '__other__';
const SECTION_SAMPLES_BY_DEPT_BASE =
  typeof SECTION_SAMPLES_BY_DEPT !== 'undefined' && SECTION_SAMPLES_BY_DEPT
    ? JSON.parse(JSON.stringify(SECTION_SAMPLES_BY_DEPT))
    : {};
/** Top-of-page context shown on Schedule/Curriculum and used for page-level semester filtering. */
/** Schedule, Requests, and Dashboard Schedule Summary term picker. */
const TERM_HEADER_SEMS = ['1st Semester', '2nd Semester', 'Midyear'];
function normalizeTermSemesterStored(v) {
  let s = String(v || '').trim();
  return TERM_HEADER_SEMS.includes(s) ? s : '1st Semester';
}
function normalizeAcademicYearInput(v) {
  let s = String(v || '').trim();
  if (!s) return '';
  let m = s.match(/^(\d{4})\s*[-/]\s*(\d{4})$/);
  if (!m) return s;
  return `${m[1]}-${m[2]}`;
}
function termSemesterDisplayLabel(sem) {
  if (sem === '1st Semester') return 'FIRST SEMESTER';
  if (sem === '2nd Semester') return 'SECOND SEMESTER';
  if (sem === 'Midyear') return 'MIDYEAR';
  return String(sem || '').toUpperCase();
}
function termHeaderTitle(sem, ay) {
  let s = termSemesterDisplayLabel(sem || '1st Semester');
  let a = normalizeAcademicYearInput(ay) || '____-____';
  return `${s} A.Y ${a}`;
}
function termAcademicYearOptions() {
  let m = String(DEFAULT_ACADEMIC_YEAR).match(/^(\d{4})-(\d{4})$/);
  let baseStart = m ? Number(m[1]) : new Date().getFullYear();
  let selectedAy = normalizeAcademicYearInput(DEFAULT_ACADEMIC_YEAR);
  // Avoid touching lexical `state` here because this function is called during
  // early startup (before `let state = {...}` is initialized).
  try {
    let raw = sessionStorage.getItem(CEN_STATE_KEY);
    if (raw) {
      let parsed = JSON.parse(raw);
      let persistedAy = normalizeAcademicYearInput(parsed?.termAcademicYear);
      if (persistedAy) selectedAy = persistedAy;
    }
  } catch (e) {
    /* ignore */
  }
  let sm = String(selectedAy || '').match(/^(\d{4})-(\d{4})$/);
  let selectedStart = sm ? Number(sm[1]) : baseStart;
  let start = baseStart;
  // Keep exactly 5 options; when selected AY reaches the last 2 slots,
  // slide the window forward so there is always a "next" year available.
  if (Number.isFinite(selectedStart) && selectedStart >= baseStart + 3) {
    start = selectedStart - 2;
  }
  let years = [];
  for (let y = start; y < start + 5; y++) years.push(`${y}-${y + 1}`);
  years.sort((a, b) => String(a).localeCompare(String(b)));
  return years;
}
function curriculumBundleAcademicYears() {
  return termAcademicYearOptions();
}
function curriculumBundleAcademicYearSuffix(ay) {
  return String(ay || '').replace(/[^0-9]/g, '');
}
function curriculumBundleIdForAcademicYear(baseId, ay) {
  let normalizedAy = normalizeAcademicYearInput(ay) || DEFAULT_ACADEMIC_YEAR;
  if (normalizedAy === DEFAULT_ACADEMIC_YEAR) return String(baseId || '');
  return `${String(baseId || '')}__ay${curriculumBundleAcademicYearSuffix(normalizedAy)}`;
}
function curriculumAcademicYearFromIdFallback(rowId) {
  let m = String(rowId || '').match(/__ay(\d{4})(\d{4})$/);
  if (!m) return '';
  return normalizeAcademicYearInput(`${m[1]}-${m[2]}`) || '';
}
function getBundledCurriculumData() {
  if (typeof CURRICULUM_DATA === 'undefined' || !Array.isArray(CURRICULUM_DATA)) return [];
  let years = curriculumBundleAcademicYears();
  let out = [];
  for (let row of CURRICULUM_DATA) {
    if (!row || !row.id) continue;
    let baseAy = normalizeAcademicYearInput(row.academicYear) || DEFAULT_ACADEMIC_YEAR;
    for (let ay of years) {
      out.push({
        ...row,
        id: curriculumBundleIdForAcademicYear(row.id, ay),
        academicYear: ay,
        bundleBaseId: row.id,
        bundleBaseAcademicYear: baseAy,
      });
    }
  }
  return out;
}
function bundledCurriculumRowById(id) {
  if (id == null || id === '') return null;
  let key = curriculumRowIdKey(id);
  let rows = getBundledCurriculumData();
  for (let r of rows) {
    if (curriculumRowIdKey(r?.id) === key) return r;
  }
  return null;
}
function currentTermFilter() {
  return {
    sem: state.termSemester || '1st Semester',
    ay: normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR,
  };
}
function scheduleMatchesCurrentTerm(s, term = currentTermFilter()) {
  return (s.schSem || '').trim() === term.sem
    && (normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) === term.ay;
}
function requestMatchesCurrentTerm(r, term = currentTermFilter()) {
  return (r.schSem || '').trim() === term.sem
    && (normalizeAcademicYearInput(r.schAy) || DEFAULT_ACADEMIC_YEAR) === term.ay;
}
/** Match request rows when id may be string (DOM/Supabase) or legacy number. */
function getStateRequestById(requestId) {
  if (requestId === null || requestId === undefined || requestId === '') return null;
  return state.requests.find(x => String(x.id) === String(requestId)) || null;
}
/** Child room requests created after teaching approval (`parent_teaching_request_id`). */
function requestsLinkedToTeachingParent(parentId) {
  if (parentId == null || parentId === '') return [];
  let pid = String(parentId);
  return state.requests.filter(r => r.parentTeachingRequestId != null && String(r.parentTeachingRequestId) === pid);
}
function requestDaysSortedKey(req) {
  return JSON.stringify([...(Array.isArray(req?.days) ? req.days : [])].map(String).sort());
}
/**
 * Pending follow-up room rows for a teaching parent. Uses DB link when present; otherwise a single-row heuristic
 * when `parent_teaching_request_id` was never persisted (legacy DB).
 */
function pendingTeachingRoomFollowupsForParent(parentReq) {
  if (!parentReq) return [];
  let linked = requestsLinkedToTeachingParent(parentReq.id).filter(r => isPendingRequestStatus(r.status));
  if (linked.length) return linked;
  let candidates = state.requests.filter(
    r =>
      r &&
      r.id !== parentReq.id &&
      !r.parentTeachingRequestId &&
      isPendingRequestStatus(r.status) &&
      r.fromDept === parentReq.fromDept &&
      r.subjectId === parentReq.subjectId &&
      (r.section || '') === (parentReq.section || '') &&
      r.timeStart === parentReq.timeStart &&
      r.timeEnd === parentReq.timeEnd &&
      requestDaysSortedKey(r) === requestDaysSortedKey(parentReq) &&
      String(r.reason || '').trim() === String(REQUEST_ROOM_REASON_CHOICES[0]).trim() &&
      (r.professorId || null) === (parentReq.professorId || null) &&
      String(r.professorOtherName || '') === String(parentReq.professorOtherName || ''),
  );
  if (candidates.length === 1) return candidates;

  let termAy = normalizeAcademicYearInput(parentReq.schAy) || DEFAULT_ACADEMIC_YEAR;
  let loose = state.requests.filter(
    r2 =>
      r2 &&
      r2.id !== parentReq.id &&
      isPendingRequestStatus(r2.status) &&
      r2.fromDept === parentReq.fromDept &&
      r2.toDept &&
      r2.toDept !== parentReq.fromDept &&
      r2.subjectId === parentReq.subjectId &&
      (r2.section || '') === (parentReq.section || '') &&
      (r2.schSem || '') === (parentReq.schSem || '') &&
      (r2.schYear || '') === (parentReq.schYear || '') &&
      (normalizeAcademicYearInput(r2.schAy) || DEFAULT_ACADEMIC_YEAR) === termAy &&
      r2.timeStart === parentReq.timeStart &&
      r2.timeEnd === parentReq.timeEnd &&
      requestDaysSortedKey(r2) === requestDaysSortedKey(parentReq) &&
      r2.roomId &&
      r2.roomId !== REQUEST_ROOM_PENDING_ID,
  );
  if (!loose.length) return [];
  let pid = String(parentReq.id);
  let linkedLoose = loose.filter(x => x.parentTeachingRequestId != null && String(x.parentTeachingRequestId) === pid);
  return linkedLoose.length ? linkedLoose : loose;
}
function firstPendingTeachingRoomFollowup(parentReq) {
  let list = pendingTeachingRoomFollowupsForParent(parentReq);
  if (!list.length) return null;
  let pid = String(parentReq.id);
  return list.find(x => x.parentTeachingRequestId != null && String(x.parentTeachingRequestId) === pid) || list[0];
}
function scheduleAcademicYearForFilter(s) {
  return normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR;
}
function mergeAcademicYearOptions(presets, custom) {
  let out = [];
  let seen = new Set();
  for (let x of [...presets, ...custom]) {
    let ay = normalizeAcademicYearInput(x);
    if (!ay || seen.has(ay)) continue;
    seen.add(ay);
    out.push(ay);
  }
  out.sort((a, b) => String(a).localeCompare(String(b)));
  return out;
}
function rememberCustomAcademicYear(ay) {
  ay = normalizeAcademicYearInput(ay);
  if (!ay) return;
  if (!Array.isArray(state.termAcademicYearCustomOptions)) state.termAcademicYearCustomOptions = [];
  if (!state.termAcademicYearCustomOptions.includes(ay)) state.termAcademicYearCustomOptions.push(ay);
}
/** Semester + academic year controls (Schedule/Requests top bar; Dashboard Schedule Summary). */
function renderTopbarTermPickersMarkup() {
  let sem = state.termSemester || '1st Semester';
  let ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let ayCustom = normalizeAcademicYearInput(state.termAcademicYearCustom || '');
  let ayPresets = termAcademicYearOptions();
  let ayCustomOptions = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions : [];
  let ayList = mergeAcademicYearOptions(ayPresets, ayCustomOptions);
  if (!ayList.includes(ay)) ayList.push(ay);
  ayList.sort((a, b) => String(a).localeCompare(String(b)));
  let ayIsPreset = ayList.includes(ay);
  let ayUseCustom = !!state.termAcademicYearIsCustom || !ayIsPreset;
  let aySelectValue = ayUseCustom ? TERM_AY_OTHER_VALUE : ay;
  let ayOptions = ayList
    .map(x => `<option value="${escapeHtml(x)}" ${x === ay ? 'selected' : ''}>${escapeHtml(x)}</option>`)
    .join('') + `<option value="${TERM_AY_OTHER_VALUE}" ${aySelectValue === TERM_AY_OTHER_VALUE ? 'selected' : ''}>Others:</option>`;
  let ayPresetList = `<datalist id="topbarAcademicYearPresetList">${ayList.map(x => `<option value="${escapeHtml(x)}">`).join('')}</datalist>`;
  let ayEditingOther = !!state.termAcademicYearEditingOther;
  let ayControl = ayEditingOther
    ? `<input class="form-input topbar-term-select topbar-term-select-editable" id="topbarTermAcademicYearOther" value="${escapeHtml(ayCustom || ay)}" placeholder="e.g. 2033-2034" aria-label="Academic Year (editable)" list="topbarAcademicYearPresetList">`
    : `<select class="filter-select topbar-term-select" id="topbarTermAcademicYear" aria-label="Academic Year">${ayOptions}</select>`;
  let semOptions = TERM_HEADER_SEMS
    .map(s => `<option value="${escapeHtml(s)}" ${s === sem ? 'selected' : ''}>${escapeHtml(s)}</option>`)
    .join('');
  return `<select class="filter-select topbar-term-select" id="topbarTermSemester" aria-label="Semester">${semOptions}</select>${ayControl}${ayPresetList}`;
}
function renderTopbarCenter() {
  if (state.page === 'curriculum') {
    return `<div class="curriculum-topbar-left"><div class="page-title page-title-curriculum-left">${escapeHtml(curriculumTopbarDegreeTitle())}</div></div>`;
  }
  if (state.page === 'faculty') {
    return `<div class="page-title">${escapeHtml(getPageTitle())}</div>`;
  }
  if (state.page === 'dashboard') {
    return `<div class="page-title page-title-dashboard">${escapeHtml(getPageTitle())}</div>`;
  }
  let termPages = ['schedule', 'curriculum', 'requests'];
  if (!termPages.includes(state.page)) {
    return `<div class="page-title">${getPageTitle()}</div>`;
  }
  let sem = state.termSemester || '1st Semester';
  let ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let termBarTitle = termHeaderTitle(sem, ay);
  return `<div class="topbar-term-center"><div class="topbar-term-title">${escapeHtml(termBarTitle)}</div><div class="topbar-term-controls">${renderTopbarTermPickersMarkup()}</div></div>`;
}

/** Request a room modal: optional reason dropdown (stored on request as `reason`). */
const REQUEST_ROOM_REASON_CHOICES = [
  'Room Shortage: Requesting a room from another department',
  'Teaching Assignment: Professor is from another department',
];
const REQUEST_ROOM_PENDING_ID = '__room_pending__';
const REQUEST_ROOM_PENDING_MARKER = '__PENDING_ROOM_BOOKING__';
/** Synthetic schedule id prefix: pending outgoing room requests shown gray on timetables until approved. */
const PENDING_REQ_SCHEDULE_PREFIX = '__pending_req__';
/** Shared/common rooms that must remain selectable even if DB room rows are incomplete. */
const COMMON_ROOM_FALLBACKS = [
  { id: 'ee_mdhp304', name: 'MDHP 304', type: 'classroom', dept: 'ee' },
];

/** Stable string key for curriculum row ids (HTML data-* is always string; DB may return number). */
function curriculumRowIdKey(id) {
  return id == null || id === '' ? '' : String(id);
}

/**
 * Same catalog "slot" even when Supabase uses a UUID and `CURRICULUM_DATA` uses `cc_*` ids — without this,
 * deleting the DB row lets `mergeMissingCurriculumRowsInto` re-append the bundled duplicate (row "comes back").
 */
function curriculumRowSuppressionKey(c) {
  if (!c) return '';
  let dept = curriculumFilterDept(c) || '';
  let year = curriculumFilterYear(c) || '';
  let sem = curriculumFilterSemester(c) || '';
  let ay = curriculumAcademicYearForFilter(c) || '';
  let code = normalizeSubjectCode(curriculumCodeFromRow(c));
  let sec = String(c.section || '').trim();
  return `${dept}|${year}|${sem}|${ay}|${code}|${sec}`;
}

/** Append catalog rows from data.js that are not yet in arr (by id). */
function mergeMissingCurriculumRowsInto(arr) {
  let bundled = getBundledCurriculumData();
  if (!bundled.length) return;
  let suppressed = new Set(
    (Array.isArray(state.suppressedCurriculumIds) ? state.suppressedCurriculumIds : []).map(curriculumRowIdKey).filter(Boolean),
  );
  let suppressedSlots = new Set((Array.isArray(state.suppressedCurriculumKeys) ? state.suppressedCurriculumKeys : []).filter(Boolean));
  let seen = new Set(arr.map(c => curriculumRowIdKey(c && c.id)).filter(Boolean));
  for (let b of bundled) {
    let bid = curriculumRowIdKey(b && b.id);
    if (!bid || suppressed.has(bid) || seen.has(bid)) continue;
    let slot = curriculumRowSuppressionKey(b);
    if (slot && suppressedSlots.has(slot)) continue;
    arr.push({ ...b });
    seen.add(bid);
  }
}

/** Department chairs and administrators may add, edit, or delete curriculum rows. */
function canUserMutateCurriculum(u) {
  return !!(u && (u.role === 'chairperson' || u.role === 'admin'));
}

function curriculumFilterDept(c) {
  let d = c.dept;
  if (d) return d;
  return bundledCurriculumRowById(c.id)?.dept;
}
function curriculumFilterYear(c) {
  let y = (c.year || '').trim();
  if (y) return y;
  return (bundledCurriculumRowById(c.id)?.year || '').trim();
}
function curriculumFilterSemester(c) {
  let s = (c.semester || '').trim();
  if (s) return s;
  return (bundledCurriculumRowById(c.id)?.semester || '').trim();
}
/** Curriculum toolbar value: two main semesters only (excludes Midyear in the data filter). */
const CURRICULUM_SEM_FILTER_FIRST_AND_SECOND = 'First and Second Semester';
function migrateCurriculumSemFilterStored(sf) {
  if (sf === '1st and 2nd Semester') return CURRICULUM_SEM_FILTER_FIRST_AND_SECOND;
  return sf;
}
function curriculumRowMatchesSemesterFilter(c, sf) {
  sf = migrateCurriculumSemFilterStored(sf || '') || CURRICULUM_SEM_FILTER_FIRST_AND_SECOND;
  if (sf === 'all') return true;
  if (sf === CURRICULUM_SEM_FILTER_FIRST_AND_SECOND) {
    let sem = curriculumFilterSemester(c);
    return sem === '1st Semester' || sem === '2nd Semester';
  }
  return curriculumFilterSemester(c) === sf;
}
function curriculumSemFilterEffective() {
  let v = state.curriculumSemFilter;
  if (v == null || v === '') return CURRICULUM_SEM_FILTER_FIRST_AND_SECOND;
  return migrateCurriculumSemFilterStored(v);
}

function pageHref(pageId) {
  return PAGE_TO_HTML[pageId] || 'dashboard.html';
}

function resolveInitialPage() {
  const allowed = ['dashboard', 'schedule', 'requests', 'curriculum', 'section', 'room', 'forms', 'faculty', 'accounts', 'account'];
  const file = (location.pathname.split('/').pop() || '').toLowerCase();
  if (file === 'curriculum.html' && (location.hash || '').toLowerCase() === '#section') return 'section';
  if (file === 'curriculum.html' && (location.hash || '').toLowerCase() === '#room') return 'room';
  if (file === 'curriculum.html' && (location.hash || '').toLowerCase() === '#forms') return 'forms';
  if (typeof window.CEN_PAGE === 'string' && allowed.includes(window.CEN_PAGE)) return window.CEN_PAGE;
  return HTML_TO_PAGE[file] || 'dashboard';
}
/** Keep browser URL clean (directory root) while preserving current SPA view. */
function forceRootUrlInAddressBar() {
  try {
    // Multi-page mode: keep actual *.html in the URL so browser refresh
    // returns to the same page instead of loading index.html.
    if (typeof window.CEN_PAGE === 'string' && window.CEN_PAGE.trim()) return;
    let rawPath = location.pathname || '';
    let p = rawPath.toLowerCase();
    if (!p.endsWith('.html')) return;
    if (!window.history || typeof window.history.replaceState !== 'function') return;
    let baseDir = rawPath.replace(/[^/]+$/, '');
    if (!baseDir.endsWith('/')) baseDir += '/';
    window.history.replaceState(window.history.state || {}, '', baseDir);
  } catch (e) {
    /* ignore */
  }
}
function syncPageFromLocationHash() {
  const file = (location.pathname.split('/').pop() || '').toLowerCase();
  if (file !== 'curriculum.html') return;
  const h = (location.hash || '').toLowerCase();
  if (h === '#section') {
    if (state.page !== 'section') {
      state.page = 'section';
      render();
    }
    return;
  }
  if (h === '#room') {
    if (state.page !== 'room') {
      state.page = 'room';
      render();
    }
    return;
  }
  if (h === '#forms') {
    if (state.page !== 'forms') {
      state.page = 'forms';
      render();
    }
    return;
  }
  if (state.page === 'section' || state.page === 'room' || state.page === 'forms') {
    state.page = 'curriculum';
    render();
  }
}

function hydratePersistedData() {
  const raw = sessionStorage.getItem(CEN_STATE_KEY);
  if (!raw) return;
  try {
    mergeCurriculumTombstonesFromLocalStorage();
    const o = JSON.parse(raw);
    if (Array.isArray(o.professors)) {
      state.professors = o.professors.map(p => ({
        ...p,
        name: normalizeProfessorTitle(p?.name),
        note: p.note != null ? String(p.note) : '',
      }));
    }
    if (Array.isArray(o.subjects)) state.subjects = o.subjects;
    if (Array.isArray(o.schedules)) {
      state.schedules = o.schedules.map(s =>
        s && typeof s === 'object' ? { ...s, days: parseScheduleDays(s.days) } : s,
      );
    }
    if (Array.isArray(o.requests)) state.requests = o.requests;
    if (typeof o.nextId === 'number') nextId = o.nextId;
    if (o.filterMode) state.filterMode = o.filterMode;
    if (o.filterDept != null) state.filterDept = o.filterDept;
    if (o.filterSection != null) state.filterSection = o.filterSection;
    if (o.filterFaculty != null) state.filterFaculty = o.filterFaculty;
    if (o.filterRoom != null) state.filterRoom = o.filterRoom;
    /** Must run before `mergeMissingCurriculumRowsInto` so deleted bundle rows are not re-inserted. */
    if (Array.isArray(o.suppressedCurriculumIds)) {
      state.suppressedCurriculumIds = [
        ...new Set([
          ...(state.suppressedCurriculumIds || []).map(curriculumRowIdKey),
          ...o.suppressedCurriculumIds.filter(Boolean).map(curriculumRowIdKey),
        ]),
      ].filter(Boolean);
    }
    if (Array.isArray(o.suppressedCurriculumKeys)) {
      state.suppressedCurriculumKeys = [
        ...new Set([...(state.suppressedCurriculumKeys || []), ...o.suppressedCurriculumKeys.filter(Boolean)]),
      ];
    }
    if (Array.isArray(o.curriculum)) {
      let bundleById = {};
      let bundled = getBundledCurriculumData();
      if (bundled.length) {
        for (let b of bundled) {
          if (b && b.id) bundleById[b.id] = b;
        }
      }
      let merged = o.curriculum.map(c => {
        let base = bundleById[c.id] || {};
        return {
          ...base,
          ...c,
          id: c.id,
          year: c.year || base.year || '1st Year',
          semester: c.semester || base.semester || '1st Semester',
          academicYear: normalizeAcademicYearInput(c.academicYear || base.academicYear) || DEFAULT_ACADEMIC_YEAR,
          requiredHours: Number.isFinite(Number(c.requiredHours)) ? Number(c.requiredHours) : (Number.isFinite(Number(base.requiredHours)) ? Number(base.requiredHours) : null),
        };
      });
      mergeMissingCurriculumRowsInto(merged);
      state.curriculum = merged;
    }
    if (o.curriculumDeptFilter != null) state.curriculumDeptFilter = o.curriculumDeptFilter;
    if (o.curriculumYearFilter != null) state.curriculumYearFilter = o.curriculumYearFilter;
    if (o.curriculumSectionFilter != null) state.curriculumSectionFilter = o.curriculumSectionFilter;
    if (o.curriculumAcademicYearFilter != null) state.curriculumAcademicYearFilter = o.curriculumAcademicYearFilter;
    if (o.curriculumSemFilter != null) state.curriculumSemFilter = migrateCurriculumSemFilterStored(o.curriculumSemFilter);
    if (o.termSemester != null) state.termSemester = normalizeTermSemesterStored(o.termSemester);
    if (o.termAcademicYear != null) state.termAcademicYear = o.termAcademicYear;
    if (o.termAcademicYearCustom != null) state.termAcademicYearCustom = o.termAcademicYearCustom;
    if (o.termAcademicYearIsCustom != null) state.termAcademicYearIsCustom = !!o.termAcademicYearIsCustom;
    if (o.termAcademicYearEditingOther != null) state.termAcademicYearEditingOther = !!o.termAcademicYearEditingOther;
    if (Array.isArray(o.termAcademicYearCustomOptions)) state.termAcademicYearCustomOptions = o.termAcademicYearCustomOptions.map(normalizeAcademicYearInput).filter(Boolean);
    state.termAcademicYear = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    if (o.requestTimetableDept != null) state.requestTimetableDept = o.requestTimetableDept;
    if (o.requestTimetableRoom != null) state.requestTimetableRoom = o.requestTimetableRoom;
    if (o.requestTimetableProfessor != null) state.requestTimetableProfessor = o.requestTimetableProfessor;
    if (o.sectionYearFilter != null) state.sectionYearFilter = o.sectionYearFilter;
    if (o.sectionDeptFilter != null) state.sectionDeptFilter = o.sectionDeptFilter;
    if (o.sectionAcademicYearFilter != null) {
      state.sectionAcademicYearFilter = normalizeAcademicYearInput(o.sectionAcademicYearFilter) || DEFAULT_ACADEMIC_YEAR;
    }
    if (o.roomDeptFilter != null) state.roomDeptFilter = o.roomDeptFilter;
    if (o.roomTypeFilter != null) state.roomTypeFilter = o.roomTypeFilter;
    if (o.roomAcademicYearFilter != null) {
      state.roomAcademicYearFilter = normalizeAcademicYearInput(o.roomAcademicYearFilter) || DEFAULT_ACADEMIC_YEAR;
    }
    if (o.facultyDeptFilter != null) state.facultyDeptFilter = o.facultyDeptFilter;
    if (o.facultyStatusFilter != null) state.facultyStatusFilter = o.facultyStatusFilter;
    if (o.facultySearchQuery != null) state.facultySearchQuery = String(o.facultySearchQuery);
    if (Array.isArray(o.suppressedRoomIds)) {
      state.suppressedRoomIds = [...new Set(o.suppressedRoomIds.filter(Boolean))];
    }
    if (o.dashboardSummaryDay != null && typeof o.dashboardSummaryDay === 'string' && DAYS_WITH_SATURDAY.includes(o.dashboardSummaryDay)) {
      state.dashboardSummaryDay = o.dashboardSummaryDay;
    }
    if (o.formsAcademicYear != null) state.formsAcademicYear = normalizeAcademicYearInput(o.formsAcademicYear) || '';
    if (o.formsSemester != null) state.formsSemester = o.formsSemester;
    if (o.formsYearLevel != null) state.formsYearLevel = o.formsYearLevel;
    if (o.formsSection != null) state.formsSection = o.formsSection;
    if (o.formsFacultyId != null) state.formsFacultyId = o.formsFacultyId;
  } catch (e) { /* ignore */ }
}

/**
 * When using Supabase, `hydratePersistedData` is skipped, but semester/academic year are still
 * stored in `CEN_STATE_KEY` — without this, a full page reload reset the term to defaults and
 * the dashboard Schedule Summary showed no classes even though the DB had rows.
 */
function mergeCurriculumTombstonesFromLocalStorage() {
  if (!sessionStorage.getItem('cen_user')) return;
  try {
    const raw = localStorage.getItem(CEN_CURRICULUM_TOMBSTONES_KEY);
    if (!raw) return;
    const t = JSON.parse(raw);
    if (Array.isArray(t.ids) && t.ids.length) {
      let set = new Set((state.suppressedCurriculumIds || []).map(curriculumRowIdKey));
      for (let x of t.ids) {
        let k = curriculumRowIdKey(x);
        if (k) set.add(k);
      }
      state.suppressedCurriculumIds = [...set];
    }
    if (Array.isArray(t.keys) && t.keys.length) {
      state.suppressedCurriculumKeys = [...new Set([...(state.suppressedCurriculumKeys || []), ...t.keys.filter(Boolean)])];
    }
  } catch (e) { /* ignore */ }
}

function persistCurriculumTombstonesToLocalStorage() {
  if (!state.loggedIn) return;
  try {
    localStorage.setItem(
      CEN_CURRICULUM_TOMBSTONES_KEY,
      JSON.stringify({
        ids: state.suppressedCurriculumIds || [],
        keys: state.suppressedCurriculumKeys || [],
      }),
    );
  } catch (e) { /* private mode / quota */ }
}
function loadFacultyMetaOverrides() {
  try {
    const raw = localStorage.getItem(CEN_FACULTY_META_OVERRIDES_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (_e) {
    return {};
  }
}
function persistFacultyMetaOverrides(map) {
  try {
    localStorage.setItem(CEN_FACULTY_META_OVERRIDES_KEY, JSON.stringify(map && typeof map === 'object' ? map : {}));
  } catch (_e) { /* private mode / quota */ }
}
function rememberFacultyMetaOverride(prof) {
  if (!prof?.id) return;
  const all = loadFacultyMetaOverrides();
  all[prof.id] = {
    note: stripFacultyStatusTagFromNote(prof.note || ''),
    status: professorStatusValue(prof),
    active: prof.active !== false,
  };
  persistFacultyMetaOverrides(all);
}
function removeFacultyMetaOverride(profId) {
  if (!profId) return;
  const all = loadFacultyMetaOverrides();
  if (!(profId in all)) return;
  delete all[profId];
  persistFacultyMetaOverrides(all);
}
function mergeFacultyMetaOverridesIntoState() {
  const all = loadFacultyMetaOverrides();
  if (!all || typeof all !== 'object') return;
  state.professors = (state.professors || []).map(p => {
    const meta = all[p.id];
    if (!meta) return p;
    const st = ['active', 'on_leave', 'inactive'].includes(String(meta.status || '').trim().toLowerCase())
      ? String(meta.status).trim().toLowerCase()
      : professorStatusValue(p);
    return {
      ...p,
      note: meta.note != null ? String(meta.note) : (p.note || ''),
      status: st,
      active: st !== 'inactive',
    };
  });
}

function mergePersistedTermPreferences() {
  /** Same session as login (`cen_user`); avoid requiring `ensureAuth` to have run first (init calls this before first `render`). */
  if (!sessionStorage.getItem('cen_user')) return;
  mergeCurriculumTombstonesFromLocalStorage();
  const raw = sessionStorage.getItem(CEN_STATE_KEY);
  if (!raw) return;
  try {
    const o = JSON.parse(raw);
    if (o.termSemester != null) state.termSemester = normalizeTermSemesterStored(o.termSemester);
    if (o.termAcademicYear != null) {
      state.termAcademicYear = normalizeAcademicYearInput(o.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    }
    if (o.termAcademicYearCustom != null) state.termAcademicYearCustom = o.termAcademicYearCustom;
    if (o.termAcademicYearIsCustom != null) state.termAcademicYearIsCustom = !!o.termAcademicYearIsCustom;
    if (o.termAcademicYearEditingOther != null) state.termAcademicYearEditingOther = !!o.termAcademicYearEditingOther;
    if (Array.isArray(o.termAcademicYearCustomOptions)) {
      state.termAcademicYearCustomOptions = o.termAcademicYearCustomOptions.map(normalizeAcademicYearInput).filter(Boolean);
    }
    if (
      o.dashboardSummaryDay != null &&
      typeof o.dashboardSummaryDay === 'string' &&
      typeof DAYS_WITH_SATURDAY !== 'undefined' &&
      Array.isArray(DAYS_WITH_SATURDAY) &&
      DAYS_WITH_SATURDAY.includes(o.dashboardSummaryDay)
    ) {
      state.dashboardSummaryDay = o.dashboardSummaryDay;
    }
    if (Array.isArray(o.suppressedRoomIds) && o.suppressedRoomIds.length) {
      state.suppressedRoomIds = [...new Set([...(state.suppressedRoomIds || []), ...o.suppressedRoomIds.filter(Boolean)])];
    }
    if (Array.isArray(o.suppressedCurriculumIds) && o.suppressedCurriculumIds.length) {
      state.suppressedCurriculumIds = [
        ...new Set([
          ...(state.suppressedCurriculumIds || []).map(curriculumRowIdKey),
          ...o.suppressedCurriculumIds.filter(Boolean).map(curriculumRowIdKey),
        ]),
      ].filter(Boolean);
    }
    if (Array.isArray(o.suppressedCurriculumKeys) && o.suppressedCurriculumKeys.length) {
      state.suppressedCurriculumKeys = [
        ...new Set([...(state.suppressedCurriculumKeys || []), ...o.suppressedCurriculumKeys.filter(Boolean)]),
      ];
    }
  } catch (e) { /* ignore */ }
}

/** Ensures bundled sample requests exist even when sessionStorage has an older payload (prototype / demo). */
function mergeDefaultRequestsIntoState() {
  if (typeof REQUESTS === 'undefined' || !Array.isArray(REQUESTS)) return;
  let ids = new Set(state.requests.map(r => r && r.id).filter(Boolean));
  for (let r of REQUESTS) {
    if (r && r.id && !ids.has(r.id)) {
      state.requests.push({ ...r });
      ids.add(r.id);
    }
  }
}

let cenHydratedThisLoad = false;

function persistAppData() {
  if (!state.loggedIn) return;
  sessionStorage.setItem(
    CEN_STATE_KEY,
    JSON.stringify({
      professors: state.professors,
      subjects: state.subjects,
      schedules: state.schedules,
      requests: state.requests,
      nextId,
      filterMode: state.filterMode,
      filterDept: state.filterDept,
      filterSection: state.filterSection,
      filterFaculty: state.filterFaculty,
      filterRoom: state.filterRoom,
      curriculum: state.curriculum,
      curriculumDeptFilter: state.curriculumDeptFilter,
      curriculumYearFilter: state.curriculumYearFilter,
      curriculumSectionFilter: state.curriculumSectionFilter,
      curriculumAcademicYearFilter: state.curriculumAcademicYearFilter,
      curriculumSemFilter: state.curriculumSemFilter,
      termSemester: state.termSemester,
      termAcademicYear: state.termAcademicYear,
      termAcademicYearCustom: state.termAcademicYearCustom,
      termAcademicYearIsCustom: state.termAcademicYearIsCustom,
      termAcademicYearEditingOther: state.termAcademicYearEditingOther,
      termAcademicYearCustomOptions: state.termAcademicYearCustomOptions,
      requestTimetableDept: state.requestTimetableDept,
      requestTimetableRoom: state.requestTimetableRoom,
      requestTimetableProfessor: state.requestTimetableProfessor,
      sectionYearFilter: state.sectionYearFilter,
      sectionDeptFilter: state.sectionDeptFilter,
      sectionAcademicYearFilter: state.sectionAcademicYearFilter,
      roomDeptFilter: state.roomDeptFilter,
      roomTypeFilter: state.roomTypeFilter,
      roomAcademicYearFilter: state.roomAcademicYearFilter,
      facultyDeptFilter: state.facultyDeptFilter,
      facultyStatusFilter: state.facultyStatusFilter,
      facultySearchQuery: state.facultySearchQuery,
      suppressedRoomIds: state.suppressedRoomIds,
      suppressedCurriculumIds: state.suppressedCurriculumIds,
      suppressedCurriculumKeys: state.suppressedCurriculumKeys,
      dashboardSummaryDay: state.dashboardSummaryDay,
      formsAcademicYear: state.formsAcademicYear,
      formsSemester: state.formsSemester,
      formsYearLevel: state.formsYearLevel,
      formsSection: state.formsSection,
      formsFacultyId: state.formsFacultyId,
    })
  );
  persistCurriculumTombstonesToLocalStorage();
}

// State
let state = {
  loggedIn: false,
  currentUser: null,
  page: 'dashboard',
  sidebarOpen: false,
  utilitiesNavOpen: false,
  modal: null,
  toast: null,
  filterMode: 'department',
  filterDept: 'ie',
  filterSection: '',
  filterFaculty: '',
  filterRoom: '',
  professors: [...PROFESSORS_DATA].map(p => ({ ...p, name: normalizeProfessorTitle(p?.name), note: p.note != null ? String(p.note) : '' })),
  subjects: [...SUBJECTS_DATA],
  rooms: [...ROOMS],
  schedules: [...SCHEDULES],
  requests: [...REQUESTS],
  curriculum: getBundledCurriculumData(),
  curriculumDeptFilter: 'all',
  curriculumYearFilter: 'all',
  curriculumSectionFilter: 'all',
  curriculumAcademicYearFilter: DEFAULT_ACADEMIC_YEAR,
  curriculumSemFilter: CURRICULUM_SEM_FILTER_FIRST_AND_SECOND,
  /** When set, that semester table (`curriculum-*-first` etc.) is in inline edit mode. */
  curriculumTableEditId: null,
  termSemester: '1st Semester',
  termAcademicYear: DEFAULT_ACADEMIC_YEAR,
  termAcademicYearCustom: '',
  termAcademicYearIsCustom: false,
  termAcademicYearEditingOther: false,
  termAcademicYearCustomOptions: [],
  requestTimetableDept: 'ie',
  requestTimetableRoom: '',
  requestTimetableProfessor: 'all',
  dashboardSummaryDay: 'Monday',
  dashboardSummaryLastSyncKey: '',
  dashboardSummarySyncInFlight: false,
  sectionYearFilter: 'all',
  sectionDeptFilter: 'all',
  sectionAcademicYearFilter: DEFAULT_ACADEMIC_YEAR,
  roomDeptFilter: 'all',
  roomTypeFilter: 'all',
  roomAcademicYearFilter: DEFAULT_ACADEMIC_YEAR,
  facultyDeptFilter: 'all',
  facultyStatusFilter: 'all',
  facultySearchQuery: '',
  /** Without Supabase, deleted bundled-room ids stay hidden until session clears. */
  suppressedRoomIds: [],
  /** User-deleted curriculum ids: omitted from bundle merge so rows stay removed (and DB repair skips re-upserting). */
  suppressedCurriculumIds: [],
  /** Deleted catalog slots (dept|year|sem|ay|code|section): blocks re-merge when DB id ≠ bundled `cc_*` id. */
  suppressedCurriculumKeys: [],
  /** Chair Forms page: default synced from top-bar term on first open (see `normalizeFormsPageState`). */
  formsAcademicYear: '',
  formsSemester: '',
  formsYearLevel: 'all',
  formsSection: 'all',
  formsFacultyId: '',
  /** Accounts page: cloud pending list `{ phase, rows, errorMessage? }` or null. */
  pendingAccountsUi: null,
};
let __cenPendingAccountsFetchGen = 0;
let nextId = 100;
const genId = () => `id_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

function hasSupabaseClient() {
  return !!(window.cenSupabaseReady && window.cenSupabase);
}
/** OAuth return target for dean Supabase session on the Accounts page (whitelist in Supabase Auth URL config). */
function cenAccountsPageAbsoluteUrl() {
  try {
    return new URL('accounts.html', window.location.href).href;
  } catch (_) {
    let base = typeof location !== 'undefined' && location.origin ? location.origin : '';
    return `${base}/accounts.html`;
  }
}
async function startDeanGoogleSyncForPendingAccounts() {
  if (!hasSupabaseClient()) return;
  let { error } = await window.cenSupabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: cenAccountsPageAbsoluteUrl() },
  });
  if (error) window.alert(`Google sign-in failed: ${error.message}`);
}
function loadCurriculumHoursOverrides() {
  try {
    let raw = localStorage.getItem(CURRICULUM_HOURS_OVERRIDES_KEY);
    let obj = raw ? JSON.parse(raw) : {};
    return obj && typeof obj === 'object' ? obj : {};
  } catch (e) {
    return {};
  }
}
function saveCurriculumHoursOverrides(map) {
  try {
    localStorage.setItem(CURRICULUM_HOURS_OVERRIDES_KEY, JSON.stringify(map || {}));
  } catch (e) { /* ignore */ }
}
function rememberCurriculumRequiredHours(curriculumId, hours) {
  if (!curriculumId) return;
  let n = Number(hours);
  if (!Number.isFinite(n)) return;
  let map = loadCurriculumHoursOverrides();
  map[curriculumId] = n;
  saveCurriculumHoursOverrides(map);
}

function normalizeSubjectFromDb(row) {
  if (!row) return null;
  return {
    id: row.id,
    code: row.code,
    name: row.name,
    dept: row.dept_id || row.dept,
    units: row.units,
    active: row.active !== false,
  };
}
function normalizeSubjectToDb(sub) {
  return {
    id: sub.id,
    code: sub.code,
    name: sub.name,
    dept_id: sub.dept,
    units: sub.units ?? null,
    active: sub.active !== false,
  };
}

async function upsertSubjectsDb(subjectRows) {
  const rows = Array.isArray(subjectRows) ? subjectRows : [];
  if (!rows.length) return { error: null };
  let payload = rows.map(normalizeSubjectToDb);
  let res = await window.cenSupabase.from('subjects').upsert(payload, { onConflict: 'id' });
  if (!res.error) return res;
  const msg = String(res.error?.message || '').toLowerCase();
  const missingActive = msg.includes('active') && msg.includes('column');
  if (!missingActive) return res;
  const fallback = payload.map(({ active, ...rest }) => rest);
  return window.cenSupabase.from('subjects').upsert(fallback, { onConflict: 'id' });
}
function normalizeProfessorTitle(name) {
  let raw = String(name || '').trim();
  if (!raw) return raw;
  let hasPhdSuffix = /\s*,?\s*ph\.?\s*d\.?\s*$/i.test(raw);
  if (!hasPhdSuffix) return raw;
  let noPhd = raw.replace(/\s*,?\s*ph\.?\s*d\.?\s*$/i, '').trim();
  if (!noPhd) return raw;
  if (/^dr\.?\s+/i.test(noPhd)) return noPhd;
  return `DR. ${noPhd}`;
}
/** When Supabase has no `professors.status` column, "On leave" is stored in `note` via this prefix (stripped in the UI). */
const FACULTY_NOTE_STATUS_TAG_RE = /^\s*__cen_faculty_status:(active|on_leave|inactive)__(\r?\n|\n)?/i;
function stripFacultyStatusTagFromNote(note) {
  return String(note || '').replace(FACULTY_NOTE_STATUS_TAG_RE, '').trimStart();
}
function parseFacultyStatusFromNote(note) {
  let m = String(note || '').match(FACULTY_NOTE_STATUS_TAG_RE);
  return m ? m[1].toLowerCase() : null;
}
function normalizeProfessorFromDb(row) {
  if (!row) return null;
  let note = row.note != null ? String(row.note) : '';
  let stCol = String(row.status || '').trim().toLowerCase();
  let status;
  if (row.active === false) {
    status = 'inactive';
  } else if (stCol === 'active' || stCol === 'on_leave' || stCol === 'inactive') {
    status = stCol;
  } else {
    let fromTag = parseFacultyStatusFromNote(note);
    if (fromTag) status = fromTag;
    else if (note.toLowerCase().includes('leave')) status = 'on_leave';
    else status = 'active';
  }
  return {
    id: row.id,
    name: normalizeProfessorTitle(row.name),
    short: row.short || '',
    dept: row.dept_id || row.dept,
    active: row.active !== false,
    note,
    status,
  };
}
function normalizeProfessorToDb(prof) {
  let st = String(prof.status || '').trim().toLowerCase();
  if (!['active', 'on_leave', 'inactive'].includes(st)) {
    st = prof.active === false ? 'inactive' : 'active';
  }
  let userNote = stripFacultyStatusTagFromNote(prof.note != null ? String(prof.note) : '').trimEnd();
  let noteForDb =
    st === 'on_leave' ? `__cen_faculty_status:on_leave__${userNote ? `\n${userNote}` : ''}` : userNote;
  return {
    id: prof.id,
    name: normalizeProfessorTitle(prof.name),
    short: prof.short || '',
    dept_id: prof.dept,
    active: st !== 'inactive',
    note: noteForDb,
  };
}
function normalizeRoomFromDb(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    type: row.type || 'classroom',
    dept: row.dept_id || row.dept || '',
  };
}
function normalizeRoomToDb(room) {
  return {
    id: room.id,
    name: room.name,
    type: room.type || 'classroom',
    dept_id: room.dept,
  };
}
/** Retired drawing-room rows for CPE/ME; omit from UI/sync if still in Supabase. CE `ce_draw_rm` is unchanged. */
function isRetiredCpeDrawingRoom(r) {
  if (!r) return false;
  if (r.id === 'cpe_draw_rm' || r.id === 'me_draw_rm') return true;
  let d = r.dept || '';
  if (d !== 'cpe' && d !== 'me') return false;
  return (r.name || '').trim().toUpperCase() === 'DRAWING ROOM';
}
function normalizeCurriculumFromDb(row) {
  if (!row) return null;
  let localHours = loadCurriculumHoursOverrides()[row.id];
  let dbHoursRaw = row.required_hours;
  let dbHours =
    dbHoursRaw === null || dbHoursRaw === undefined || dbHoursRaw === ''
      ? null
      : Number(dbHoursRaw);
  let localHoursNum = Number(localHours);
  let ayFromDb = normalizeAcademicYearInput(row.academic_year || row.academicYear);
  let ayFromId = curriculumAcademicYearFromIdFallback(row.id);
  return {
    id: row.id,
    dept: row.dept_id || row.dept,
    year: row.year || '',
    semester: row.semester || '',
    courseCode: row.course_code || row.courseCode || '',
    subjectName: row.subject_name || row.subjectName || '',
    lecUnits: Number.isFinite(Number(row.lec_units)) ? Number(row.lec_units) : 0,
    labUnits: Number.isFinite(Number(row.lab_units)) ? Number(row.lab_units) : 0,
    units: Number.isFinite(Number(row.units)) ? Number(row.units) : 0,
    requiredHours: dbHours !== null && Number.isFinite(dbHours) && dbHours > 0
      ? dbHours
      : (Number.isFinite(localHoursNum) && localHoursNum > 0 ? localHoursNum : null),
    courseName: row.course_name || row.courseName || row.subject_name || row.subjectName || '',
    subjectCode: row.subject_code || row.subjectCode || '',
    section: row.section || '',
    academicYear: ayFromDb || ayFromId || DEFAULT_ACADEMIC_YEAR,
  };
}
function normalizeCurriculumToDb(row) {
  return {
    id: row.id,
    dept_id: row.dept,
    year: row.year || '',
    semester: row.semester || '',
    course_code: row.courseCode || '',
    subject_name: row.subjectName || '',
    lec_units: Number.isFinite(Number(row.lecUnits)) ? Number(row.lecUnits) : 0,
    lab_units: Number.isFinite(Number(row.labUnits)) ? Number(row.labUnits) : 0,
    units: Number.isFinite(Number(row.units)) ? Number(row.units) : 0,
    required_hours: Number.isFinite(Number(row.requiredHours)) ? Number(row.requiredHours) : null,
    subject_code: row.subjectCode || '',
    section: row.section || '',
    academic_year: normalizeAcademicYearInput(row.academicYear) || DEFAULT_ACADEMIC_YEAR,
  };
}
/**
 * Coerce `days` from the DB/JSON (array, JSON string, or comma-separated) into canonical
 * names matching `DAYS_WITH_SATURDAY` so `days.includes("Monday")` and filters work.
 */
function parseScheduleDays(raw) {
  const order =
    typeof DAYS_WITH_SATURDAY !== 'undefined' && Array.isArray(DAYS_WITH_SATURDAY)
      ? DAYS_WITH_SATURDAY
      : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let arr = [];
  if (raw == null) {
    return [];
  }
  if (Array.isArray(raw)) {
    arr = raw.map(x => (x == null ? '' : String(x)).trim()).filter(Boolean);
  } else if (typeof raw === 'string') {
    let t = raw.trim();
    if (!t) return [];
    // Postgres array-literal fallback (e.g. "{Monday,Wednesday}" or "{\"Saturday\"}").
    if (/^\{.*\}$/.test(t)) {
      let inner = t.slice(1, -1).trim();
      if (!inner) return [];
      arr = inner
        .split(',')
        .map(s => String(s || '').trim().replace(/^"+|"+$/g, '').replace(/\\"/g, '"'))
        .filter(Boolean);
    } else {
    try {
      let j = JSON.parse(t);
      if (Array.isArray(j)) {
        arr = j.map(x => String(x).trim()).filter(Boolean);
      } else {
        arr = t.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean);
      }
    } catch (e) {
      arr = t.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean);
    }
    }
  } else {
    return [];
  }
  const canon = d => {
    let s = String(d).trim();
    if (!s) return null;
    let low = s.toLowerCase();
    for (let day of order) {
      if (day.toLowerCase() === low) return day;
    }
    for (let day of order) {
      if (low.length >= 2 && day.toLowerCase().slice(0, 3) === low.slice(0, 3)) return day;
    }
    for (let day of order) {
      if (day.toLowerCase().startsWith(low)) return day;
    }
    return null;
  };
  return [...new Set(arr.map(canon).filter(Boolean))];
}
function normalizeScheduleFromDb(row) {
  if (!row) return null;
  let pid = row.professor_id;
  let other = (row.professor_other_name || '').trim();
  let legacyOther = pid === PROFESSOR_OTHER_ID || pid === '__other__';
  let appProfId = legacyOther
    ? PROFESSOR_OTHER_ID
    : pid != null && pid !== ''
      ? pid
      : other
        ? PROFESSOR_OTHER_ID
        : null;
  let rid = row.room_id;
  let rOther = (row.room_other_name || '').trim();
  let legacyROther = rid === ROOM_OTHER_ID || rid === '__room_other__';
  let appRoomId = legacyROther
    ? ROOM_OTHER_ID
    : rid != null && rid !== ''
      ? rid
      : rOther
        ? ROOM_OTHER_ID
        : null;
  let roomOtherName = appRoomId === ROOM_OTHER_ID ? (rOther || null) : null;
  return {
    id: row.id,
    subjectId: row.subject_id,
    professorId: appProfId,
    professorOtherName: appProfId === PROFESSOR_OTHER_ID ? (other || null) : null,
    roomId: appRoomId,
    roomOtherName,
    dept: row.dept_id || row.dept,
    section: row.section || '',
    days: parseScheduleDays(row.days),
    timeStart: row.time_start,
    timeEnd: row.time_end,
    color: row.color || 'blue',
    setLabel: row.set_label || null,
    labLabel: row.lab_label || null,
    schYear: row.sch_year || '',
    schSem: row.sch_sem || '',
    schAy: normalizeAcademicYearInput(row.sch_ay || row.schAy) || DEFAULT_ACADEMIC_YEAR,
    createdAt: row.created_at || row.createdAt || null,
    updatedAt: row.updated_at || row.updatedAt || null,
  };
}
function normalizeScheduleToDb(s) {
  let useOtherProf = s.professorId === PROFESSOR_OTHER_ID;
  let useOtherRoom = s.roomId === ROOM_OTHER_ID;
  return {
    id: s.id,
    subject_id: s.subjectId,
    professor_id: useOtherProf ? null : s.professorId || null,
    professor_other_name: useOtherProf ? (s.professorOtherName && String(s.professorOtherName).trim()) || null : null,
    room_id: useOtherRoom ? null : s.roomId || null,
    room_other_name: useOtherRoom ? (s.roomOtherName && String(s.roomOtherName).trim()) || null : null,
    dept_id: s.dept,
    section: s.section,
    days: Array.isArray(s.days) ? s.days : [],
    time_start: s.timeStart,
    time_end: s.timeEnd,
    color: s.color || 'blue',
    set_label: s.setLabel || null,
    lab_label: s.labLabel || null,
    sch_year: s.schYear || null,
    sch_sem: s.schSem || null,
    sch_ay: normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR,
  };
}
function isSupabaseMissingColumnError(err, columnName) {
  let msg = String(err?.message || '');
  return msg.includes(`'${columnName}'`) || msg.includes(`"${columnName}"`) || msg.toLowerCase().includes(columnName.toLowerCase());
}
async function upsertSchedulesDb(rows) {
  let payload = rows.map(normalizeScheduleToDb);
  let res = await window.cenSupabase.from('schedules').upsert(payload, { onConflict: 'id' });
  if (!res.error || !isSupabaseMissingColumnError(res.error, 'sch_ay')) return res;
  let fallback = payload.map(({ sch_ay, ...rest }) => rest);
  return window.cenSupabase.from('schedules').upsert(fallback, { onConflict: 'id' });
}
async function upsertCurriculumDb(rows) {
  let payload = rows.map(normalizeCurriculumToDb);
  let res = await window.cenSupabase.from('curriculum').upsert(payload, { onConflict: 'id' });
  if (!res.error) return res;
  let fallback = payload;
  if (isSupabaseMissingColumnError(res.error, 'academic_year')) {
    fallback = fallback.map(({ academic_year, ...rest }) => rest);
    res = await window.cenSupabase.from('curriculum').upsert(fallback, { onConflict: 'id' });
    if (!res.error) return res;
  }
  if (isSupabaseMissingColumnError(res.error, 'required_hours')) {
    fallback = fallback.map(({ required_hours, ...rest }) => rest);
    return window.cenSupabase.from('curriculum').upsert(fallback, { onConflict: 'id' });
  }
  return res;
}
async function upsertProfessorsDb(rows) {
  let payload = rows.map(normalizeProfessorToDb);
  let res = await window.cenSupabase.from('professors').upsert(payload, { onConflict: 'id' });
  if (!res.error) return res;
  if (isSupabaseMissingColumnError(res.error, 'note')) {
    let fallback = payload.map(({ note, ...rest }) => rest);
    let retry = await window.cenSupabase.from('professors').upsert(fallback, { onConflict: 'id' });
    if (!retry.error) {
      console.warn('professors.note column missing; faculty notes and on-leave tags are not persisted in the database.');
    }
    return retry;
  }
  return res;
}

function normalizeRequestFromDb(row) {
  if (!row) return null;
  let pid = row.professor_id;
  let other = (row.professor_other_name || '').trim();
  let legacyOther = pid === PROFESSOR_OTHER_ID || pid === '__other__';
  let appProfId = legacyOther
    ? PROFESSOR_OTHER_ID
    : pid != null && pid !== ''
      ? pid
      : other
        ? PROFESSOR_OTHER_ID
        : null;
  return {
    id: row.id,
    fromDept: row.from_dept,
    toDept: row.to_dept,
    roomId: row.room_id,
    subjectId: row.subject_id,
    section: row.section,
    professorId: appProfId,
    professorOtherName: appProfId === PROFESSOR_OTHER_ID ? (other || null) : null,
    days: parseScheduleDays(row.days),
    timeStart: row.time_start,
    timeEnd: row.time_end,
    schYear: row.sch_year || '',
    schSem: row.sch_sem || '',
    schAy: normalizeAcademicYearInput(row.sch_ay || row.schAy) || DEFAULT_ACADEMIC_YEAR,
    setLabel: row.set_label || null,
    labLabel: row.lab_label || null,
    reason: row.reason || '',
    reasonComment: row.reason_comment || '',
    declineReason: (() => {
      for (let v of [row.decline_reason, row.declineReason, row.decline_comment, row.declineComment]) {
        if (v != null && String(v).trim() !== '') return String(v).trim();
      }
      return '';
    })(),
    status: normalizeRequestStatusFromDb(row.status),
    created: row.created || null,
    parentTeachingRequestId: row.parent_teaching_request_id || null,
  };
}

function normalizeRequestToDb(req) {
  let useOther = req.professorId === PROFESSOR_OTHER_ID;
  return {
    id: req.id,
    from_dept: req.fromDept,
    to_dept: req.toDept,
    room_id: req.roomId,
    subject_id: req.subjectId,
    section: req.section,
    professor_id: useOther ? null : req.professorId || null,
    professor_other_name: useOther ? (req.professorOtherName && String(req.professorOtherName).trim()) || null : null,
    days: Array.isArray(req.days) ? req.days : [],
    time_start: req.timeStart,
    time_end: req.timeEnd,
    sch_year: req.schYear || null,
    sch_sem: req.schSem || null,
    sch_ay: normalizeAcademicYearInput(req.schAy) || DEFAULT_ACADEMIC_YEAR,
    set_label: req.setLabel || null,
    lab_label: req.labLabel || null,
    reason: req.reason || '',
    reason_comment: req.reasonComment || '',
    decline_reason:
      req.declineReason != null && String(req.declineReason).trim() !== '' ? String(req.declineReason).trim() : null,
    status: req.status || 'pending',
    created: req.created || null,
    parent_teaching_request_id: req.parentTeachingRequestId || null,
  };
}

async function insertRequestDb(req) {
  let payload = normalizeRequestToDb(req);
  let working = [{ ...payload }];
  let res = await window.cenSupabase.from('requests').insert(working);
  if (!res.error) return res;
  let dropped = new Set();
  while (res.error) {
    let droppedAny = false;
    if (isSupabaseMissingColumnError(res.error, 'reason_comment') && !dropped.has('reason_comment')) {
      delete working[0].reason_comment;
      dropped.add('reason_comment');
      droppedAny = true;
    }
    if (isSupabaseMissingColumnError(res.error, 'parent_teaching_request_id') && !dropped.has('parent_teaching_request_id')) {
      delete working[0].parent_teaching_request_id;
      dropped.add('parent_teaching_request_id');
      droppedAny = true;
    }
    if (isSupabaseMissingColumnError(res.error, 'decline_reason') && !dropped.has('decline_reason')) {
      delete working[0].decline_reason;
      dropped.add('decline_reason');
      droppedAny = true;
    }
    if (isSupabaseMissingColumnError(res.error, 'sch_ay') && !dropped.has('sch_ay')) {
      delete working[0].sch_ay;
      dropped.add('sch_ay');
      droppedAny = true;
    }
    if (!droppedAny) return res;
    res = await window.cenSupabase.from('requests').insert(working);
  }
  return res;
}

async function syncRequestsFromSupabase() {
  if (!hasSupabaseClient()) return false;
  try {
    const { data, error } = await window.cenSupabase
      .from('requests')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      console.warn('Supabase requests fetch failed:', error.message);
      return false;
    }
    state.requests = Array.isArray(data)
      ? data.map(normalizeRequestFromDb).filter(Boolean)
      : [];
    return true;
  } catch (err) {
    console.warn('Supabase requests fetch crashed:', err);
    return false;
  }
}

async function syncSchedulesFromSupabase() {
  if (!hasSupabaseClient()) return false;
  try {
    const { data, error } = await window.cenSupabase
      .from('schedules')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) {
      console.warn('Supabase schedules fetch failed:', error.message);
      return false;
    }
    state.schedules = Array.isArray(data)
      ? data.map(normalizeScheduleFromDb).filter(Boolean)
      : [];
    return true;
  } catch (err) {
    console.warn('Supabase schedules fetch crashed:', err);
    return false;
  }
}

async function syncCoreDataFromSupabase() {
  if (!hasSupabaseClient()) return false;
  /** Must run before curriculum merge/repair — otherwise `suppressedCurriculumIds/Keys` are still empty and deleted rows are re-upserted from the bundle. */
  mergePersistedTermPreferences();
  try {
    const [subjectsRes, professorsRes, curriculumRes, schedulesRes, requestsRes, roomsRes] = await Promise.all([
      window.cenSupabase.from('subjects').select('*').order('code', { ascending: true }),
      window.cenSupabase.from('professors').select('*').order('name', { ascending: true }),
      window.cenSupabase.from('curriculum').select('*').order('created_at', { ascending: true }),
      window.cenSupabase.from('schedules').select('*').order('created_at', { ascending: true }),
      window.cenSupabase.from('requests').select('*').order('created_at', { ascending: false }),
      window.cenSupabase.from('rooms').select('*').order('name', { ascending: true }),
    ]);
    if (subjectsRes.error || professorsRes.error || curriculumRes.error || schedulesRes.error || requestsRes.error || roomsRes.error) {
      console.warn('Supabase core sync errors:', {
        subjects: subjectsRes.error?.message,
        professors: professorsRes.error?.message,
        curriculum: curriculumRes.error?.message,
        schedules: schedulesRes.error?.message,
        requests: requestsRes.error?.message,
        rooms: roomsRes.error?.message,
      });
      return false;
    }
    state.subjects = Array.isArray(subjectsRes.data) ? subjectsRes.data.map(normalizeSubjectFromDb).filter(Boolean) : [];
    state.professors = Array.isArray(professorsRes.data) ? professorsRes.data.map(normalizeProfessorFromDb).filter(Boolean) : [];
    mergeFacultyMetaOverridesIntoState();
    let rawCurriculum = Array.isArray(curriculumRes.data) ? curriculumRes.data.map(normalizeCurriculumFromDb).filter(Boolean) : [];
    // Re-upsert bundled `CURRICULUM_DATA` rows missing from DB (accidental deletes).
    let curriculumIdsFromDb = new Set(rawCurriculum.map(c => curriculumRowIdKey(c && c.id)).filter(Boolean));
    let supCurr = new Set((state.suppressedCurriculumIds || []).map(curriculumRowIdKey).filter(Boolean));
    let supSlots = new Set((state.suppressedCurriculumKeys || []).filter(Boolean));
    state.curriculum = rawCurriculum.filter(c => {
      if (!c) return false;
      if (supCurr.has(curriculumRowIdKey(c.id))) return false;
      if (supSlots.has(curriculumRowSuppressionKey(c))) return false;
      return true;
    });
    mergeMissingCurriculumRowsInto(state.curriculum);
    applyLocalCurriculumDraftsToState();
    let bundleBackedIds = new Set();
    let bundled = getBundledCurriculumData();
    if (bundled.length) {
      for (let b of bundled) {
        if (b && b.id) bundleBackedIds.add(curriculumRowIdKey(b.id));
      }
    }
    let curriculumRepairRows = state.curriculum.filter(c => {
      if (!c || !c.id) return false;
      let cid = curriculumRowIdKey(c.id);
      if (supCurr.has(cid)) return false;
      if (supSlots.has(curriculumRowSuppressionKey(c))) return false;
      return bundleBackedIds.has(cid) && !curriculumIdsFromDb.has(cid);
    });
    if (curriculumRepairRows.length > 0) {
      const chunkSize = 150;
      for (let i = 0; i < curriculumRepairRows.length; i += chunkSize) {
        let chunk = curriculumRepairRows.slice(i, i + chunkSize);
        const { error: repairErr } = await upsertCurriculumDb(chunk);
        if (repairErr) {
          console.warn('Curriculum repair upsert failed (bundle rows missing in DB):', repairErr.message);
          break;
        }
      }
    }
    state.schedules = Array.isArray(schedulesRes.data) ? schedulesRes.data.map(normalizeScheduleFromDb).filter(Boolean) : [];
    state.requests = Array.isArray(requestsRes.data) ? requestsRes.data.map(normalizeRequestFromDb).filter(Boolean) : [];
    state.rooms = Array.isArray(roomsRes.data)
      ? roomsRes.data.map(normalizeRoomFromDb).filter(Boolean).filter(r => !isRetiredCpeDrawingRoom(r))
      : [];
    // Re-upsert bundled `ROOMS` rows missing from DB (rooms table incomplete vs. chair dropdown list in data.js).
    let dbRoomIds = new Set(state.rooms.map(r => r.id).filter(Boolean));
    let bundleRooms = typeof ROOMS !== 'undefined' && Array.isArray(ROOMS) ? ROOMS : [];
    let suppressedForRepair = new Set(Array.isArray(state.suppressedRoomIds) ? state.suppressedRoomIds : []);
    try {
      const persistRaw = sessionStorage.getItem(CEN_STATE_KEY);
      if (persistRaw) {
        const po = JSON.parse(persistRaw);
        if (Array.isArray(po.suppressedRoomIds)) po.suppressedRoomIds.forEach(id => id && suppressedForRepair.add(id));
      }
    } catch (e) {
      /* ignore */
    }
    let roomsToRepair = bundleRooms.filter(
      br => br && br.id && !dbRoomIds.has(br.id) && !suppressedForRepair.has(br.id),
    );
    if (roomsToRepair.length > 0) {
      const { error: roomRepairErr } = await window.cenSupabase
        .from('rooms')
        .upsert(roomsToRepair.map(normalizeRoomToDb), { onConflict: 'id' });
      if (roomRepairErr) {
        console.warn('Rooms repair upsert failed (bundle rooms missing in DB):', roomRepairErr.message);
      } else {
        state.rooms = state.rooms
          .concat(
            roomsToRepair.map(r => ({
              id: r.id,
              name: r.name,
              type: r.type || 'classroom',
              dept: r.dept,
            })),
          )
          .filter(r => !isRetiredCpeDrawingRoom(r))
          .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      }
    }
    return true;
  } catch (err) {
    console.warn('Supabase core sync crashed:', err);
    return false;
  }
}

// Helpers
function getSubject(id) {
  let fromState = state.subjects.find(s=>s.id===id);
  if (fromState) return fromState;
  let fromMerged = subjectsSourceForCreateSchedule().find(s => s.id === id);
  if (fromMerged) return fromMerged;
  return (typeof SUBJECTS_DATA !== 'undefined' && Array.isArray(SUBJECTS_DATA))
    ? SUBJECTS_DATA.find(s => s.id === id)
    : null;
}
function getProfessor(id) { return state.professors.find(p=>p.id===id); }
/** Rooms for dropdowns and filters: Supabase rows plus any bundled `ROOMS` ids not in the DB (stale/partial `rooms` table). */
function roomsSourceForApp() {
  let bundle = typeof ROOMS !== 'undefined' && Array.isArray(ROOMS) ? ROOMS : [];
  let dropRetired = arr => (Array.isArray(arr) ? arr.filter(r => !isRetiredCpeDrawingRoom(r)) : []);
  let dropSuppressed = arr => {
    let hid = new Set(Array.isArray(state.suppressedRoomIds) ? state.suppressedRoomIds : []);
    return Array.isArray(arr) ? arr.filter(r => r && !hid.has(r.id)) : [];
  };
  if (!hasSupabaseClient()) {
    let fromSt = Array.isArray(state.rooms) ? state.rooms : [];
    if (fromSt.length === 0) return dropRetired(bundle);
    let ids = new Set(fromSt.map(r => r.id).filter(Boolean));
    let extra = [];
    for (let b of bundle) {
      if (b && b.id && !ids.has(b.id)) {
        extra.push({
          id: b.id,
          name: b.name,
          type: b.type || 'classroom',
          dept: b.dept,
        });
        ids.add(b.id);
      }
    }
    return dropSuppressed(dropRetired(extra.length ? fromSt.concat(extra) : fromSt));
  }
  let fromDb = Array.isArray(state.rooms) ? state.rooms : [];
  if (fromDb.length === 0) {
    return dropSuppressed(dropRetired(bundle));
  }
  let ids = new Set(fromDb.map(r => r.id).filter(Boolean));
  let extra = [];
  for (let b of bundle) {
    if (b && b.id && !ids.has(b.id)) {
      extra.push({
        id: b.id,
        name: b.name,
        type: b.type || 'classroom',
        dept: b.dept,
      });
      ids.add(b.id);
    }
  }
  let merged = extra.length ? fromDb.concat(extra) : fromDb;
  return dropSuppressed(dropRetired(merged));
}

/** Schedule/request uses this id when the user picks "Other" and types a name. */
const PROFESSOR_OTHER_ID = '__other__';
/** Schedule-only: custom room label; Supabase uses null room_id + room_other_name (not used on room requests). */
const ROOM_OTHER_ID = '__room_other__';

/** Supabase FK is to `professors.id`; "Others" uses null professor_id + professor_other_name. */
function isProfessorSelectIdValidForSave(professorIdFromSelect) {
  if (!professorIdFromSelect) return false;
  if (professorIdFromSelect === PROFESSOR_OTHER_ID) return true;
  return !!getProfessor(professorIdFromSelect);
}

/** Supabase FK is to `rooms.id`; "Others" uses null room_id + room_other_name (schedule forms only). */
function isRoomSelectIdValidForSave(roomIdFromSelect) {
  if (!roomIdFromSelect) return false;
  if (roomIdFromSelect === ROOM_OTHER_ID) return true;
  return !!getRoom(roomIdFromSelect);
}

/** When "Others" is selected, map typed text to a catalog room if it matches exactly one name in the list (same dept scope as the form). */
function resolveScheduleRoomFromForm(roomSel, roomOtherText, candidateRooms) {
  let otherTxt = (roomOtherText || '').trim();
  if (roomSel !== ROOM_OTHER_ID) {
    return { roomId: roomSel || '', roomOtherName: null };
  }
  // Strict behavior: when user picks "Others", always keep it as Others.
  // Do not auto-map typed names (e.g. "GYM") to catalog rooms, so room conflict checks are skipped.
  return { roomId: ROOM_OTHER_ID, roomOtherName: otherTxt };
}

function roomDisplayLineFromPick(roomId, roomOtherName) {
  if (roomId === ROOM_OTHER_ID) {
    let t = (roomOtherName || '').trim();
    return t || '—';
  }
  let r = getRoom(roomId);
  return r?.name || '—';
}

function professorDisplayLineFromPick(professorId, professorOtherName) {
  if (!professorId) return '—';
  if (professorId === PROFESSOR_OTHER_ID) {
    let t = (professorOtherName || '').trim();
    return t || '—';
  }
  let p = getProfessor(professorId);
  return p?.short || p?.name || '—';
}
function professorFullNameDisplayLineFromPick(professorId, professorOtherName) {
  if (!professorId) return '—';
  if (professorId === PROFESSOR_OTHER_ID) {
    let t = (professorOtherName || '').trim();
    return t || '—';
  }
  let p = getProfessor(professorId);
  return p?.name || p?.short || '—';
}

function professorDisplayLine(s) {
  return professorDisplayLineFromPick(s.professorId, s.professorOtherName);
}

/** True when the same person is scheduled twice (including matching "Other" names). */
function scheduleProfessorsOverlap(a, b) {
  if (!a.professorId || !b.professorId) return false;
  if (a.professorId !== b.professorId) return false;
  if (a.professorId === PROFESSOR_OTHER_ID) {
    let x = (a.professorOtherName || '').trim().toLowerCase();
    let y = (b.professorOtherName || '').trim().toLowerCase();
    return x.length > 0 && x === y;
  }
  return true;
}
/**
 * True if this professor has no timetable row overlapping the slot (same term as `options.term`).
 * When days/times are incomplete, returns true so lists stay populated until the user finishes the slot.
 */
function professorIsFreeForSlot(professorId, days, timeStart, timeEnd, options) {
  options = options || {};
  if (!professorId || professorId === PROFESSOR_OTHER_ID) return true;
  if (!Array.isArray(days) || days.length === 0 || !timeStart || !timeEnd) return true;
  let term = options.term;
  if (!term || !(term.sem || '').trim()) return true;
  let excludeId = options.excludeScheduleId != null ? options.excludeScheduleId : null;
  let pseudo = {
    professorId,
    professorOtherName: null,
    days,
    timeStart,
    timeEnd,
    dept: '',
    section: '',
    roomId: '',
    roomOtherName: null,
  };
  for (let s of state.schedules) {
    if (excludeId != null && String(s.id) === String(excludeId)) continue;
    if (!scheduleMatchesCurrentTerm(s, term)) continue;
    if (!Array.isArray(s.days) || !s.days.some(d => days.includes(d))) continue;
    if (!timeRangesOverlap(timeStart, timeEnd, s.timeStart, s.timeEnd)) continue;
    if (scheduleProfessorsOverlap(s, pseudo)) return false;
  }
  return true;
}
function filterProfessorsByAvailability(profList, days, timeStart, timeEnd, options) {
  if (!Array.isArray(profList) || !profList.length) return [];
  if (!Array.isArray(days) || days.length === 0 || !timeStart || !timeEnd) return profList.slice();
  return profList.filter(p => professorIsFreeForSlot(p.id, days, timeStart, timeEnd, options));
}
function getRoom(id) {
  let source = roomsSourceForApp();
  let room = source.find(r => r.id === id);
  if (room) return room;
  return ROOMS.find(r => r.id === id);
}
function getDept(id) { return DEPARTMENTS.find(d=>d.id===id); }
/** Faculty-style dept pill (code only) for section/room tables. */
function deptBadgeHtml(deptId) {
  let d = getDept(deptId);
  let code = escapeHtml(d?.code || deptId || '?');
  let cls = escapeHtml(deptId || '');
  return `<span class="badge-dept ${cls}">${code}</span>`;
}
function departmentDisplayNameOnly(deptId) {
  return escapeHtml(getDept(deptId)?.name || deptId || '—');
}
function professorStatusValue(p) {
  let raw = String(p?.status || '').trim().toLowerCase();
  if (raw === 'active' || raw === 'on_leave' || raw === 'inactive') return raw;
  if (p?.active === false) return 'inactive';
  let fromTag = parseFacultyStatusFromNote(p?.note);
  if (fromTag) return fromTag;
  let n = stripFacultyStatusTagFromNote(String(p?.note || '')).toLowerCase();
  if (n.includes('leave')) return 'on_leave';
  return 'active';
}
function professorStatusLabel(status) {
  if (status === 'on_leave') return 'On Leave';
  if (status === 'inactive') return 'Inactive';
  return 'Active';
}
function normalizedPersonNameKey(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/\b(dr|engr|engr\.|ar)\.?\s+/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
function currentUserFacultyNote(u) {
  if (!u) return '';
  let userNameKey = normalizedPersonNameKey(u.name);
  let fromName = state.professors.find(p =>
    normalizedPersonNameKey(p?.name) === userNameKey && (!u.dept || !p?.dept || p.dept === u.dept),
  );
  let fromShort = !fromName
    ? state.professors.find(p =>
      normalizedPersonNameKey(p?.short) === userNameKey && (!u.dept || !p?.dept || p.dept === u.dept),
    )
    : null;
  let match = fromName || fromShort || null;
  return stripFacultyStatusTagFromNote(match?.note || '').replace(/\s+/g, ' ').trim();
}
/** Admin curriculum toolbar: always a concrete program id (no "all"). */
function normalizeCurriculumAdminDeptFilter() {
  if (state.page !== 'curriculum') return;
  let u = state.currentUser;
  if (u?.role !== 'admin') return;
  let df = state.curriculumDeptFilter;
  if (!df || df === 'all' || !DEPARTMENTS.some(d => d.id === df)) {
    state.curriculumDeptFilter = DEPARTMENTS[0]?.id || '';
  }
}
/** Top bar title on Curriculum, e.g. "Curriculum of BS Electrical Engineering". */
function curriculumTopbarDegreeTitle() {
  let u = state.currentUser;
  let ay =
    normalizeAcademicYearInput(state.curriculumAcademicYearFilter) ||
    normalizeAcademicYearInput(state.termAcademicYear) ||
    DEFAULT_ACADEMIC_YEAR;
  let aySuffix = ` (AY ${ay})`;
  if (!u) return `Curriculum${aySuffix}`;
  if (u.role === 'admin') {
    let d = getDept(state.curriculumDeptFilter);
    return d ? `Curriculum of BS ${d.name}${aySuffix}` : `Curriculum${aySuffix}`;
  }
  if (u.dept) {
    let d = getDept(u.dept);
    return d ? `Curriculum of BS ${d.name}${aySuffix}` : `Curriculum${aySuffix}`;
  }
  return `Curriculum${aySuffix}`;
}
function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
/** Curriculum table cells: separate Lec / Lab / Total (PDF-style). */
function curriculumColLec(c) {
  if (c.lecUnits != null && Number.isFinite(Number(c.lecUnits))) return escapeHtml(String(Number(c.lecUnits)));
  if (c.labUnits != null && c.lecUnits == null) return escapeHtml('0');
  if (c.lecUnits == null && c.labUnits == null && c.units != null) return escapeHtml(String(Number(c.units)));
  return '—';
}
function curriculumColLab(c) {
  if (c.labUnits != null && Number.isFinite(Number(c.labUnits))) return escapeHtml(String(Number(c.labUnits)));
  if (c.lecUnits != null && c.labUnits == null) return escapeHtml('0');
  if (c.lecUnits == null && c.labUnits == null && c.units != null) return escapeHtml('0');
  return '—';
}
function curriculumColTotal(c) {
  if (c.units != null && Number.isFinite(Number(c.units))) return escapeHtml(String(Number(c.units)));
  let lec = Number(c.lecUnits);
  let lab = Number(c.labUnits);
  if (Number.isFinite(lec) || Number.isFinite(lab))
    return escapeHtml(String((Number.isFinite(lec) ? lec : 0) + (Number.isFinite(lab) ? lab : 0)));
  return '—';
}
/**
 * Weekly hours for a curriculum row: explicit `requiredHours` / `required_hours` when set, else
 * Lec×{@link CURRICULUM_LEC_HOURS_PER_UNIT} + Lab×{@link CURRICULUM_LAB_HOURS_PER_UNIT}, else total units.
 * (Inline edits store `requiredHours`; it must win over the formula when both exist.)
 */
function curriculumRequiredHoursEffectiveNumber(c) {
  if (!c) return null;
  let raw = c.requiredHours;
  if (raw === null || raw === undefined || raw === '') raw = c.required_hours;
  if (raw !== null && raw !== undefined && raw !== '') {
    let rh = Number(raw);
    if (Number.isFinite(rh) && rh > 0) return rh;
  }
  let lec = Number(c.lecUnits != null ? c.lecUnits : c.lec_units);
  let lab = Number(c.labUnits != null ? c.labUnits : c.lab_units);
  let lecH = Number.isFinite(lec) ? lec * CURRICULUM_LEC_HOURS_PER_UNIT : 0;
  let labH = Number.isFinite(lab) ? lab * CURRICULUM_LAB_HOURS_PER_UNIT : 0;
  if (Number.isFinite(lec) || Number.isFinite(lab)) return lecH + labH;
  let total = Number(c.units);
  if (Number.isFinite(total) && total > 0) return total;
  return null;
}
/** Table cell: required hours (HTML). */
function curriculumRequiredHours(c) {
  let n = curriculumRequiredHoursEffectiveNumber(c);
  if (n == null || !Number.isFinite(n)) return '—';
  return escapeHtml(String(n));
}
/** Numeric required weekly hours (scheduling / remaining column). */
function curriculumRowRequiredHoursNumber(c) {
  let n = curriculumRequiredHoursEffectiveNumber(c);
  if (n == null || !Number.isFinite(n)) return null;
  return n;
}
/** Banner text for curriculum year blocks (formal document style). */
function curriculumYearBlockBannerLabel(yearKey) {
  let y = String(yearKey || '').trim();
  let map = { '1st Year': 'FIRST YEAR', '2nd Year': 'SECOND YEAR', '3rd Year': 'THIRD YEAR', '4th Year': 'FOURTH YEAR' };
  return map[y] || y.toUpperCase();
}
/** Subject master IDs whose codes match this curriculum row (same rules as schedule subject picker). */
function subjectIdsForCurriculumRow(c) {
  let dept = curriculumFilterDept(c);
  if (!dept) return new Set();
  let cc = normalizeSubjectCode(curriculumCodeFromRow(c));
  if (!cc) return new Set();
  let expanded = expandNormalizedCodesForDept(dept, cc);
  let out = new Set();
  for (let s of subjectsSourceForCreateSchedule()) {
    if ((s.dept || '') !== dept) continue;
    if (expanded.has(normalizeSubjectCode(s.code))) out.add(s.id);
  }
  return out;
}
/** Total weekly hours already on the timetable for this catalog row (all sections), same scope as subject code matching. */
function curriculumScheduledWeeklyHoursTotalForRow(c, ayFilter) {
  let dept = curriculumFilterDept(c);
  let year = normalizeCurriculumYearLabel(curriculumFilterYear(c));
  let sem = normalizeCurriculumSemesterLabel(curriculumFilterSemester(c));
  let ay = normalizeAcademicYearInput(ayFilter) || DEFAULT_ACADEMIC_YEAR;
  let sectionFilter = state.curriculumSectionFilter || 'all';
  let subjectIds = subjectIdsForCurriculumRow(c);
  let rowCode = normalizeSubjectCode(curriculumCodeFromRow(c));
  let rowCodesExpanded = expandNormalizedCodesForDept(dept, rowCode);
  if (!subjectIds.size && !rowCodesExpanded.size) return null;
  let total = 0;
  for (let s of state.schedules) {
    if (!s) continue;
    let schedSection = String(s.section || '').trim();
    let deptMatches = (s.dept || '') === dept;
    let legacySectionScopedDeptMatch =
      sectionFilter !== 'all' &&
      schedSection &&
      schedSection === String(sectionFilter).trim() &&
      sectionLabelMatchesDeptProgram(schedSection, dept);
    if (!deptMatches && !legacySectionScopedDeptMatch) continue;
    let schedYear = normalizeCurriculumYearLabel((s.schYear || '').trim());
    let schedYearFromSection = normalizeCurriculumYearLabel(sectionYearFromLabel(s.section));
    let yearMatches =
      schedYear === year ||
      (!schedYear && schedYearFromSection === year) ||
      // Legacy rows may miss year; when a specific section is selected, treat as the row year.
      (!schedYear && !schedYearFromSection && sectionFilter !== 'all');
    if (!yearMatches) continue;
    if (normalizeCurriculumSemesterLabel((s.schSem || '').trim()) !== sem) continue;
    if (scheduleAcademicYearForFilter(s) !== ay) continue;
    if (sectionFilter !== 'all' && String(s.section || '').trim() !== sectionFilter) continue;
    let matchedById = !!(s.subjectId && subjectIds.has(s.subjectId));
    let schedCode = normalizeSubjectCode(getSubject(s.subjectId)?.code || '');
    let matchedByCode = !!(schedCode && rowCodesExpanded.has(schedCode));
    if (!matchedById && !matchedByCode) continue;
    total += scheduleWeeklyHoursFromEntry(s);
  }
  return total;
}
/** Remaining hours to schedule, or a “Scheduled” pill when complete (see `.curriculum-sched-badge--scheduled`). */
function curriculumScheduledHoursCellHtml(c, ayFilter) {
  let subjectIds = subjectIdsForCurriculumRow(c);
  if (!subjectIds.size) return '<span class="curriculum-sched-empty">—</span>';
  let required = curriculumRowRequiredHoursNumber(c);
  if (required == null || !Number.isFinite(required) || required <= 0) return '<span class="curriculum-sched-empty">—</span>';
  let scheduled = curriculumScheduledWeeklyHoursTotalForRow(c, ayFilter);
  if (scheduled == null || !Number.isFinite(scheduled)) scheduled = 0;
  let remaining = Math.max(0, required - scheduled);
  if (remaining < 0.01) {
    return '<span class="curriculum-sched-badge curriculum-sched-badge--scheduled">Scheduled</span>';
  }
  return `<span class="curriculum-sched-badge curriculum-sched-badge--remaining">${escapeHtml(formatHoursValue(remaining))} hrs</span>`;
}
function computedCurriculumHoursFromUnits(lecUnits, labUnits) {
  let lec = Number(lecUnits);
  let lab = Number(labUnits);
  let lecH = Number.isFinite(lec) ? lec * CURRICULUM_LEC_HOURS_PER_UNIT : 0;
  let labH = Number.isFinite(lab) ? lab * CURRICULUM_LAB_HOURS_PER_UNIT : 0;
  return lecH + labH;
}
function getStateCurriculumRowById(rowId) {
  if (rowId == null || rowId === '') return null;
  let want = String(rowId);
  return state.curriculum.find(c => c && String(c.id) === want) || null;
}
function findCurriculumInlineEditRow(rootEl, rowId) {
  if (!rootEl || rowId == null || rowId === '') return null;
  let rid = String(rowId).trim();
  for (let tr of rootEl.querySelectorAll('tbody tr')) {
    for (let inp of tr.querySelectorAll('.curriculum-inline-input')) {
      if (String(inp.getAttribute('data-cd-id') || '').trim() === rid) {
        return tr;
      }
    }
  }
  return null;
}
/** Ensure DB upsert always has academic year (bundle rows may omit it). */
function curriculumRowPayloadForSave(baseRow, patch) {
  let ay =
    normalizeAcademicYearInput(patch?.academicYear) ||
    normalizeAcademicYearInput(baseRow?.academicYear) ||
    normalizeAcademicYearInput(state.curriculumAcademicYearFilter) ||
    normalizeAcademicYearInput(state.termAcademicYear) ||
    DEFAULT_ACADEMIC_YEAR;
  return { ...baseRow, ...patch, academicYear: ay };
}
function nextAcademicYearValue(ay) {
  let norm = normalizeAcademicYearInput(ay);
  let m = String(norm || '').match(/^(\d{4})-(\d{4})$/);
  if (!m) return '';
  let nextStart = Number(m[2]);
  if (!Number.isFinite(nextStart)) return '';
  return `${nextStart}-${nextStart + 1}`;
}
function previousAcademicYearValue(ay) {
  let norm = normalizeAcademicYearInput(ay);
  let m = String(norm || '').match(/^(\d{4})-(\d{4})$/);
  if (!m) return '';
  let prevStart = Number(m[1]) - 1;
  if (!Number.isFinite(prevStart)) return '';
  return `${prevStart}-${prevStart + 1}`;
}
function curriculumCopySlotKey(row) {
  let dept = curriculumFilterDept(row) || '';
  let year = curriculumFilterYear(row) || '';
  let sem = curriculumFilterSemester(row) || '';
  let code = normalizeSubjectCode(curriculumCodeFromRow(row));
  return `${dept}|${year}|${sem}|${code}`;
}
function allCurriculumAcademicYears(seedAy) {
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let presets = typeof termAcademicYearOptions === 'function' ? termAcademicYearOptions() : [];
  let custom = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions : [];
  let set = new Set([termAy, normalizeAcademicYearInput(seedAy) || '', ...presets, ...custom].map(normalizeAcademicYearInput).filter(Boolean));
  for (let c of state.curriculum) set.add(curriculumAcademicYearForFilter(c));
  return [...set].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)));
}
function curriculumAySlotKey(row, ay) {
  let base = curriculumCopySlotKey(row);
  return `${base}|${normalizeAcademicYearInput(ay) || ''}`;
}
async function seedCurriculumForAcademicYearIfMissing(targetAy, deptId) {
  let dstAy = normalizeAcademicYearInput(targetAy);
  if (!dstAy || !deptId) return 0;
  let existingDst = state.curriculum.filter(
    c => curriculumFilterDept(c) === deptId && curriculumAcademicYearForFilter(c) === dstAy,
  );
  if (existingDst.length) return 0;
  let sourceAy = previousAcademicYearValue(dstAy);
  let sourceRows = [];
  while (sourceAy) {
    sourceRows = state.curriculum.filter(
      c => curriculumFilterDept(c) === deptId && curriculumAcademicYearForFilter(c) === sourceAy,
    );
    if (sourceRows.length) break;
    sourceAy = previousAcademicYearValue(sourceAy);
  }
  if (!sourceRows.length) return 0;
  let existingKeys = new Set(
    state.curriculum
      .filter(c => curriculumFilterDept(c) === deptId)
      .map(c => curriculumAySlotKey(c, c.academicYear)),
  );
  let toInsert = [];
  for (let row of sourceRows) {
    let key = curriculumAySlotKey(row, dstAy);
    if (existingKeys.has(key)) continue;
    existingKeys.add(key);
    toInsert.push(
      curriculumRowPayloadForSave(row, {
        id: genId(),
        academicYear: dstAy,
      }),
    );
  }
  if (!toInsert.length) return 0;
  state.curriculum.push(...toInsert);
  if (hasSupabaseClient()) {
    let { error } = await upsertCurriculumDb(toInsert);
    if (error) {
      console.warn('Unable to seed curriculum AY rows in Supabase:', error);
    }
  }
  return toInsert.length;
}
async function copyFilteredCurriculumToNextAcademicYear() {
  let u = state.currentUser;
  if (!canUserMutateCurriculum(u)) return;
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let selectedAy = normalizeAcademicYearInput(state.curriculumAcademicYearFilter) || termAy;
  let srcAy = selectedAy;
  let dstAy = nextAcademicYearValue(srcAy);
  if (!dstAy) {
    showToast('Academic year format must be YYYY-YYYY.');
    return;
  }
  let chairDept = u?.role === 'chairperson' ? u.dept : '';
  let adminDeptFilter = u?.role === 'admin' ? state.curriculumDeptFilter : '';
  let srcRowsForAy = ayVal =>
    state.curriculum.filter(c => {
      if (chairDept && curriculumFilterDept(c) !== chairDept) return false;
      if (adminDeptFilter && curriculumFilterDept(c) !== adminDeptFilter) return false;
      if (state.curriculumYearFilter !== 'all' && curriculumFilterYear(c) !== state.curriculumYearFilter) return false;
      if (curriculumAcademicYearForFilter(c) !== ayVal) return false;
      let sf = curriculumSemFilterEffective();
      if (!curriculumRowMatchesSemesterFilter(c, sf)) return false;
      return true;
    });
  let srcRows = srcRowsForAy(srcAy);
  // UX fallback: if selected AY is empty, copy previous AY into selected AY.
  if (!srcRows.length) {
    let prevAy = previousAcademicYearValue(selectedAy);
    if (prevAy) {
      let prevRows = srcRowsForAy(prevAy);
      if (prevRows.length) {
        srcAy = prevAy;
        dstAy = selectedAy;
        srcRows = prevRows;
      }
    }
  }
  if (!srcRows.length) {
    showToast('No curriculum rows to copy for the current filters (or previous AY fallback).');
    return;
  }
  let existingDst = state.curriculum.filter(c => {
    if (chairDept && curriculumFilterDept(c) !== chairDept) return false;
    if (adminDeptFilter && curriculumFilterDept(c) !== adminDeptFilter) return false;
    return curriculumAcademicYearForFilter(c) === dstAy;
  });
  let existingKeys = new Set(existingDst.map(curriculumCopySlotKey));
  let toInsert = [];
  for (let row of srcRows) {
    let key = curriculumCopySlotKey(row);
    if (!key || existingKeys.has(key)) continue;
    existingKeys.add(key);
    toInsert.push(
      curriculumRowPayloadForSave(row, {
        id: genId(),
        academicYear: dstAy,
      }),
    );
  }
  if (!toInsert.length) {
    showToast(`Next academic year (${dstAy}) already has the same curriculum rows.`);
    return;
  }
  if (!window.confirm(`Copy ${toInsert.length} curriculum row(s) from ${srcAy} to ${dstAy}?`)) return;
  if (hasSupabaseClient()) {
    let { error } = await upsertCurriculumDb(toInsert);
    if (error) {
      window.alert(`Unable to copy curriculum rows in Supabase: ${error.message}`);
      return;
    }
  }
  state.curriculum.push(...toInsert);
  let custom = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions.slice() : [];
  if (!custom.includes(dstAy)) custom.push(dstAy);
  state.termAcademicYearCustomOptions = custom;
  showToast(`Copied ${toInsert.length} row(s) to ${dstAy}.`);
  render();
}
/** Read inline curriculum table inputs and upsert all rows (same semester block). */
async function commitCurriculumTableInlineSave(tableId) {
  let tid = String(tableId || '').trim();
  if (!tid || String(state.curriculumTableEditId || '').trim() !== tid) {
    showToast('Save failed: table is not in edit mode. Click Edit on the semester block first.');
    return;
  }
  if (!canUserMutateCurriculum(state.currentUser)) return;
  let root = document.getElementById(tid);
  if (!root) {
    showToast('Save failed: could not find the curriculum table.');
    return;
  }
  let tbody = root.querySelector('tbody');
  if (!tbody) return;
  let updates = [];
  for (let tr of tbody.querySelectorAll('tr')) {
    let firstInp = tr.querySelector('.curriculum-inline-input');
    if (!firstInp) continue;
    let rid = String(firstInp.getAttribute('data-cd-id') || firstInp.dataset.cdId || '').trim();
    if (!rid) continue;
    let fields = {};
    tr.querySelectorAll('.curriculum-inline-input').forEach(inp => {
      let k = inp.dataset.cdField || inp.getAttribute('data-cd-field');
      if (k) fields[k] = inp.value;
    });
    let orig = getStateCurriculumRowById(rid);
    if (!orig) continue;
    let courseCode = (fields.courseCode || '').trim();
    let subjectName = (fields.subjectName || '').trim();
    if (!courseCode || !subjectName) {
      showToast('Each row must have a code and subject.');
      return;
    }
    let lecU = parseInt(fields.lecUnits, 10);
    let labU = parseInt(fields.labUnits, 10);
    let lecUnits = Number.isFinite(lecU) ? lecU : 0;
    let labUnits = Number.isFinite(labU) ? labU : 0;
    let unitU = parseInt(fields.units, 10);
    let units = Number.isFinite(unitU) ? unitU : lecUnits + labUnits;
    let hoursU = parseFloat(fields.requiredHours);
    let requiredHours = Number.isFinite(hoursU) ? hoursU : computedCurriculumHoursFromUnits(lecUnits, labUnits);
    updates.push(
      curriculumRowPayloadForSave(orig, {
        courseCode,
        subjectName,
        lecUnits,
        labUnits,
        units,
        requiredHours,
        subjectCode: (courseCode || '').replace(/\s+/g, '') || orig.subjectCode || '',
        courseName: subjectName,
      }),
    );
  }
  if (!updates.length) {
    showToast('Nothing to save (no editable rows found).');
    state.curriculumTableEditId = null;
    render();
    return;
  }
  if (!window.confirm(`Save ${updates.length} curriculum row(s) in this table?`)) return;
  if (hasSupabaseClient()) {
    const { error } = await upsertCurriculumDb(updates);
    if (error) {
      window.alert(`Unable to save curriculum in Supabase: ${error.message}`);
      return;
    }
  }
  let subjSync = await ensureSubjectsExistForCurriculumRows(updates);
  if (!subjSync.ok) {
    window.alert(`Curriculum saved, but subject sync failed: ${subjSync.error?.message || 'unknown error'}`);
  }
  for (let row of updates) {
    let i = state.curriculum.findIndex(c => String(c.id) === String(row.id));
    if (i >= 0) state.curriculum[i] = row;
    if (Number.isFinite(Number(row.requiredHours))) rememberCurriculumRequiredHours(row.id, row.requiredHours);
  }
  state.curriculumTableEditId = null;
  showToast('Curriculum saved');
  render();
}
/** Save one inline-edited curriculum row (same semester table); keeps table in edit mode. */
async function commitCurriculumTableInlineSaveRow(tableId, rowId) {
  let tid = String(tableId || '').trim();
  let rid = String(rowId || '').trim();
  if (!tid || !rid || String(state.curriculumTableEditId || '').trim() !== tid) {
    showToast('Save failed: table is not in edit mode. Click Edit on the semester block first.');
    return;
  }
  if (!canUserMutateCurriculum(state.currentUser)) return;
  let root = document.getElementById(tid);
  if (!root) {
    showToast('Save failed: could not find the curriculum table.');
    return;
  }
  let tr = findCurriculumInlineEditRow(root, rid);
  if (!tr) {
    showToast('Save failed: could not find that row. Try Cancel, then Edit again.');
    return;
  }
  let fields = {};
  tr.querySelectorAll('.curriculum-inline-input').forEach(inp => {
    let k = inp.dataset.cdField || inp.getAttribute('data-cd-field');
    if (k) fields[k] = inp.value;
  });
  let orig = getStateCurriculumRowById(rid);
  if (!orig) {
    showToast('Save failed: curriculum row not found in data.');
    return;
  }
  let courseCode = (fields.courseCode || '').trim();
  let subjectName = (fields.subjectName || '').trim();
  if (!courseCode || !subjectName) {
    showToast('Each row must have a code and subject.');
    return;
  }
  let lecU = parseInt(fields.lecUnits, 10);
  let labU = parseInt(fields.labUnits, 10);
  let lecUnits = Number.isFinite(lecU) ? lecU : 0;
  let labUnits = Number.isFinite(labU) ? labU : 0;
  let unitU = parseInt(fields.units, 10);
  let units = Number.isFinite(unitU) ? unitU : lecUnits + labUnits;
  let hoursU = parseFloat(fields.requiredHours);
  let requiredHours = Number.isFinite(hoursU) ? hoursU : computedCurriculumHoursFromUnits(lecUnits, labUnits);
  let updated = curriculumRowPayloadForSave(orig, {
    courseCode,
    subjectName,
    lecUnits,
    labUnits,
    units,
    requiredHours,
    subjectCode: (courseCode || '').replace(/\s+/g, '') || orig.subjectCode || '',
    courseName: subjectName,
  });
  if (!window.confirm(MSG_CONFIRM_SAVE_CURRICULUM_EDIT)) return;
  if (hasSupabaseClient()) {
    const { error } = await upsertCurriculumDb([updated]);
    if (error) {
      window.alert(`Unable to save curriculum in Supabase: ${error.message}`);
      return;
    }
  }
  let subjSync = await ensureSubjectsExistForCurriculumRows([updated]);
  if (!subjSync.ok) {
    window.alert(`Curriculum saved, but subject sync failed: ${subjSync.error?.message || 'unknown error'}`);
  }
  let i = state.curriculum.findIndex(c => String(c.id) === rid);
  if (i >= 0) state.curriculum[i] = updated;
  if (Number.isFinite(Number(updated.requiredHours))) rememberCurriculumRequiredHours(updated.id, updated.requiredHours);
  showToast('Row saved');
  render();
}
/** Display time as 12-hour clock (no AM/PM), e.g. 7:30, 12:00 — for timetables, summaries, forms. */
function fmt12(t) { let [h,m]=t.split(':').map(Number); return `${h % 12 || 12}:${String(m).padStart(2, '0')}`; }
/** 12-hour time with AM/PM for formal letters and faculty load form. */
function fmt12AmPm(t) {
  if (t == null || String(t).trim() === '') return '—';
  let [h, m] = String(t).split(':').map(Number);
  if (!Number.isFinite(h)) return String(t);
  let ap = h >= 12 ? 'PM' : 'AM';
  let h12 = h % 12 || 12;
  return `${h12}:${String(Number.isFinite(m) ? m : 0).padStart(2, '0')} ${ap}`;
}
function slotEndFromRow(row) {
  if (row + 1 < timeSlots.length) return timeSlots[row + 1];
  let [h, m] = timeSlots[row].split(':').map(Number);
  let total = h * 60 + m + 30;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}
/** Latest time a class may end (building close). */
const TIMETABLE_DAY_CLOSE = '21:00';
/** Period end options: 8:00 AM … 9:00 PM (no times past close). */
function timetableTimeEndChoices() {
  return timeSlots.slice(1).filter(t => t <= TIMETABLE_DAY_CLOSE);
}
/** Slot starts allowed for new/edited classes (through 8:30 PM; last row 9:00 is display-only). */
function timetableTimeStartChoices() {
  return timeSlots.filter(t => t < TIMETABLE_DAY_CLOSE);
}
/** Timetable day columns: Mon–Saturday for all programs (including Industrial Engineering). */
function timetableDayColumnsForDept(_deptId) {
  return DAYS_WITH_SATURDAY;
}
/** Day columns for filtered schedule view; same Mon–Sat grid as single-department view. */
function timetableDayColumnsForSchedules(_scheds, fallbackDeptId) {
  return timetableDayColumnsForDept(fallbackDeptId);
}
/** Department that defines the schedule tab timetable columns for the current user/filters. */
function timetableGridDeptForSchedulePage(u) {
  if (!u) return null;
  if (u.role !== 'admin') return u.dept;
  return state.filterDept && state.filterDept !== 'all' ? state.filterDept : null;
}
function timeRangesOverlap(aStart, aEnd, bStart, bEnd) { return aStart < bEnd && aEnd > bStart; }
function scheduleRoomOccupancyKey(s) {
  if (!s) return '';
  if (s.roomId === ROOM_OTHER_ID) {
    // "Others" is treated as unspecified physical space: do not create room-conflict locks.
    return '';
  }
  if (s.roomId != null && s.roomId !== '') return `id:${s.roomId}`;
  let t = (s.roomOtherName || '').trim().toLowerCase();
  return t ? `other:${t}` : '';
}
function roomsBookSameSpace(a, b) {
  const SHARED_ROOM_NAMES = new Set(['GYM', 'MDHP 304']);
  const roomNameUpper = s => {
    if (!s) return '';
    if (s.roomId === ROOM_OTHER_ID) return String(s.roomOtherName || '').trim().toUpperCase();
    let r = getRoom(s.roomId);
    return String(r?.name || '').trim().toUpperCase();
  };
  let na = roomNameUpper(a);
  let nb = roomNameUpper(b);
  if (na && nb && na === nb && SHARED_ROOM_NAMES.has(na)) {
    // Shared large spaces (e.g., GYM) may host multiple classes concurrently.
    return false;
  }
  let ka = scheduleRoomOccupancyKey(a);
  let kb = scheduleRoomOccupancyKey(b);
  return ka !== '' && ka === kb;
}
function isSharedRoomName(name) {
  let n = String(name || '').trim().toUpperCase();
  if (!n) return false;
  // Accept common variants (GYM, GYMNASIUM, MAIN GYM, MDHP 304, etc.)
  let compact = n.replace(/\s+/g, '');
  return n === 'GYM' || n.includes('GYM') || compact === 'MDHP304';
}
/** Timetable "By Room": include rows for this room id or any catalog room with the same name (shared physical space across programs). */
function scheduleMatchesRoomFilter(s, filterRoomId) {
  if (!s || filterRoomId == null || filterRoomId === '' || filterRoomId === ROOM_OTHER_ID) return false;
  let sid = s.roomId == null ? '' : String(s.roomId).trim();
  let fid = String(filterRoomId).trim();
  if (sid !== '' && sid === fid) return true;
  if (s.roomId === ROOM_OTHER_ID) {
    let rf = getRoom(filterRoomId);
    if (!rf?.name) return false;
    let a = (s.roomOtherName || '').trim().toUpperCase();
    let b = (rf.name || '').trim().toUpperCase();
    return a !== '' && a === b;
  }
  let rf = getRoom(filterRoomId);
  if (!rf?.name) return false;
  let targetName = (rf.name || '').trim().toUpperCase();
  let sr = getRoom(s.roomId);
  if (sr?.name && (sr.name || '').trim().toUpperCase() === targetName) return true;
  return false;
}
function roomSlotOccupied(roomId, day, slotStart, slotEnd) {
  return state.schedules.some(s =>
    s.roomId === roomId &&
    Array.isArray(s.days) && s.days.includes(day) &&
    timeRangesOverlap(slotStart, slotEnd, s.timeStart, s.timeEnd)
  );
}
function firstScheduleInRoomSlot(roomId, day, slotStart, slotEnd) {
  return state.schedules.find(s =>
    s.roomId === roomId &&
    Array.isArray(s.days) && s.days.includes(day) &&
    timeRangesOverlap(slotStart, slotEnd, s.timeStart, s.timeEnd)
  );
}
/** Official program prefix on section labels (BSIE = Industrial Engineering, etc.). */
const SECTION_PROGRAM_PREFIX_BY_DEPT = {
  ie: 'BSIE',
  ee: 'BSEE',
  cpe: 'BSCPE',
  ce: 'BSCE',
  me: 'BSME',
  ece: 'BSECE',
};
function deptFromSectionLabel(sectionLabel) {
  let t = String(sectionLabel || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, ' ');
  if (!t) return '';
  for (let [deptId, prefix] of Object.entries(SECTION_PROGRAM_PREFIX_BY_DEPT)) {
    if (t.startsWith(String(prefix || '').toUpperCase())) return deptId;
  }
  return '';
}
function sectionLabelMatchesDeptProgram(sectionLabel, deptId) {
  let prefix = SECTION_PROGRAM_PREFIX_BY_DEPT[deptId];
  if (!prefix) return true;
  let t = String(sectionLabel || '')
    .trim()
    .toUpperCase()
    .replace(/\s+/g, ' ');
  return t.startsWith(prefix);
}
/**
 * @param {string[]} deptIds Department ids whose schedules + sample labels are merged.
 * @param {{ programMatchDept?: string }} [opts] If set, keep only labels that match that dept's program prefix
 *   (avoids showing BSEE/BSCPE sections under an IE chair when a timetable row is mis-tagged).
 */
function mergeSectionOptions(deptIds, opts) {
  opts = opts || {};
  const ids = Array.isArray(deptIds) ? deptIds : [deptIds];
  const fromSched = [...new Set(state.schedules.filter(s => ids.includes(s.dept)).map(s => String(s.section)))];
  const samples = [];
  ids.forEach(id => {
    const arr = SECTION_SAMPLES_BY_DEPT[id];
    if (arr) samples.push(...arr);
    const baseArr = SECTION_SAMPLES_BY_DEPT_BASE[id];
    if (baseArr) samples.push(...baseArr);
  });
  // Keep legacy IE first-year section visible even if sample data is stale in cache.
  if (ids.includes('ie')) samples.push('BSIE IGK');
  let out = [...new Set([...fromSched, ...samples].map(s => String(s || '').trim()).filter(Boolean))].sort((a, b) =>
    String(a).localeCompare(String(b)),
  );
  let scopeDept = opts.programMatchDept;
  if (scopeDept && SECTION_PROGRAM_PREFIX_BY_DEPT[scopeDept]) {
    out = out.filter(s => sectionLabelMatchesDeptProgram(s, scopeDept));
  }
  return out;
}
function sectionYearFromLabel(sectionLabel) {
  let raw = String(sectionLabel || '').trim().toUpperCase();
  if (!raw) return '';
  let token = raw.split(/\s+/)[1] || '';
  let compactMatch = raw.match(/^(?:BSCPE|BSEE|BSCE|BSME|BSECE|BSIE)\s*([IVX]+|[1-4])/);
  if ((!token || token.length < 1) && compactMatch) token = compactMatch[1] || '';
  if (!token && compactMatch) token = compactMatch[1] || '';
  if (!token) {
    let suffix = raw.replace(/^(BSCPE|BSEE|BSCE|BSME|BSECE|BSIE)\s*/, '');
    if (/^IG[A-Z]*$/.test(suffix)) token = 'I';
  }
  token = token.toUpperCase();
  if (/^IG[A-Z]*$/.test(token)) return '1st Year';
  if (/^4/.test(token) || token.startsWith('IV')) return '4th Year';
  if (/^3/.test(token) || token.startsWith('III')) return '3rd Year';
  if (/^2/.test(token) || token.startsWith('II')) return '2nd Year';
  if (/^1/.test(token) || token.startsWith('I')) return '1st Year';
  return '';
}
/** Official CEN program colors by department and year (matches section / curriculum year labels). */
const DEPT_YEAR_TIMETABLE_HEX = {
  ie: { '1st Year': '#b6d7a8', '2nd Year': '#6aa84f', '3rd Year': '#38761d', '4th Year': '#274e13' },
  cpe: { '1st Year': '#d9d2e9', '2nd Year': '#b4a7d6', '3rd Year': '#674ea7', '4th Year': '#351c75' },
  ee: { '1st Year': '#fff2cc', '2nd Year': '#f1c232', '3rd Year': '#bf9000', '4th Year': '#7f6000' },
  ece: { '1st Year': '#ead1dc', '2nd Year': '#c27ba0', '3rd Year': '#741b47', '4th Year': '#4c1130' },
  ce: { '1st Year': '#c9daf8', '2nd Year': '#6d9eeb', '3rd Year': '#1155cc', '4th Year': '#1c4587' },
  me: { '1st Year': '#fce5cd', '2nd Year': '#e69138', '3rd Year': '#b45f06', '4th Year': '#783f04' },
};
function parseHexColor(hex) {
  let h = String(hex || '').trim().replace(/^#/, '');
  if (h.length === 3) h = h.split('').map(c => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null;
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0')).join('');
}
function hexBorderDarker(hex, factor) {
  let rgb = parseHexColor(hex);
  if (!rgb) return hex;
  factor = Math.min(1, Math.max(0, factor));
  return rgbToHex(rgb.r * (1 - factor), rgb.g * (1 - factor), rgb.b * (1 - factor));
}
function relativeLuminanceForHex(hex) {
  let rgb = parseHexColor(hex);
  if (!rgb) return 1;
  let lin = [rgb.r, rgb.g, rgb.b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2];
}
function timetableInnerTextStylesForFill(fillHex) {
  if (relativeLuminanceForHex(fillHex) >= 0.38) return null;
  return {
    subStyle: 'font-weight: 700; font-size: 12px; color: #ffffff;',
    lineStyle: 'font-size: 11px; color: rgba(255,255,255,0.9);',
  };
}
function scheduleYearLabelForPalette(s) {
  let y = (s.schYear || '').trim();
  if (SCHEDULE_FORM_YEARS.includes(y)) return y;
  return sectionYearFromLabel(s.section);
}
/** Fallback slot chrome when dept/year is unknown — concrete hex for print/export. */
function legacyTimetableChromeFromColor(color) {
  const map = {
    blue: { bg: '#EFF6FF', border: '#3B82F6' },
    purple: { bg: '#F5F3FF', border: '#8B5CF6' },
    orange: { bg: '#FFFBEB', border: '#F59E0B' },
    green: { bg: '#F0FDF4', border: '#16A34A' },
  };
  const m = map[color] || map.blue;
  return { bg: m.bg, border: m.border, innerStyles: null };
}
/** How long borrow-request and conflict highlights stay on the timetable before reverting to dept/year colors. */
const SCHEDULE_SPECIAL_HIGHLIGHT_MS = 3 * 24 * 60 * 60 * 1000;
const TT_REQUEST_CHROME = { bg: '#f3f4f6', border: '#6b7280' };
const TT_CONFLICT_CHROME = { bg: '#fef2f2', border: '#dc2626' };
const TT_CONFLICT_SINCE_KEY = 'cen_tt_conflict_since_v1';
function parseScheduleDateMs(iso) {
  if (iso == null || iso === '') return null;
  let d = Date.parse(String(iso));
  return Number.isFinite(d) ? d : null;
}
function loadConflictSinceMap() {
  try {
    let raw = localStorage.getItem(TT_CONFLICT_SINCE_KEY);
    let o = raw ? JSON.parse(raw) : {};
    return o && typeof o === 'object' ? o : {};
  } catch (e) {
    return {};
  }
}
function saveConflictSinceMap(map) {
  try {
    localStorage.setItem(TT_CONFLICT_SINCE_KEY, JSON.stringify(map));
  } catch (e) { /* ignore */ }
}
/** Tracks when each schedule first had a conflict; cleared when resolved. Used for the 3-day red highlight. */
function syncConflictHighlightsAndIds() {
  let map = loadConflictSinceMap();
  let changed = false;
  let alive = new Set(state.schedules.map(s => s.id).filter(Boolean));
  for (let k of Object.keys(map)) {
    if (!alive.has(k)) {
      delete map[k];
      changed = true;
    }
  }
  let conflictIds = new Set();
  for (let s of state.schedules) {
    let has = getConflictPairsForSchedule(s).length > 0;
    if (has) {
      conflictIds.add(s.id);
      if (!map[s.id]) {
        map[s.id] = new Date().toISOString();
        changed = true;
      }
    } else if (map[s.id]) {
      delete map[s.id];
      changed = true;
    }
  }
  if (changed) saveConflictSinceMap(map);
  return { conflictSinceById: map, conflictIds };
}
function timetableDeptYearChrome(s) {
  // Color should follow the section's program (e.g., BSIE* stays IE-colored)
  // even if professor/borrow flow uses a different department id.
  let dept = deptFromSectionLabel(s.section) || s.dept;
  let yearLabel = scheduleYearLabelForPalette(s);
  let fill = dept && yearLabel ? DEPT_YEAR_TIMETABLE_HEX[dept]?.[yearLabel] : null;
  if (fill) {
    let border = hexBorderDarker(fill, 0.28);
    return { bg: fill, border, innerStyles: timetableInnerTextStylesForFill(fill) };
  }
  let legacyColor = s.color === 'orange' ? 'blue' : (s.color || 'blue');
  return legacyTimetableChromeFromColor(legacyColor);
}
function borrowRequestHighlightActive(s) {
  if (s.color !== 'orange') return false;
  let t = parseScheduleDateMs(s.createdAt);
  if (t == null) return false;
  return Date.now() - t < SCHEDULE_SPECIAL_HIGHLIGHT_MS;
}
function conflictHighlightActive(s, conflictSinceById, conflictIds) {
  if (!conflictIds.has(s.id)) return false;
  let t = parseScheduleDateMs(conflictSinceById[s.id]);
  if (t == null) return true;
  return Date.now() - t < SCHEDULE_SPECIAL_HIGHLIGHT_MS;
}
/**
 * Timetable cell chrome: conflict (red) and approved borrow/request (gray) for 3 days, then department × year colors.
 * @param {object} conflictSinceById - from syncConflictHighlightsAndIds()
 * @param {Set} conflictIds - schedules that currently overlap another (same rules as checkConflicts)
 */
function timetableSlotChrome(s, conflictSinceById, conflictIds) {
  if (s && s.pendingRequest) {
    return {
      bg: TT_REQUEST_CHROME.bg,
      border: TT_REQUEST_CHROME.border,
      innerStyles: null,
      slotKind: 'request',
      borderLeftWidth: 6,
    };
  }
  let reqOn = borrowRequestHighlightActive(s);
  let confOn = conflictHighlightActive(s, conflictSinceById, conflictIds);
  if (confOn) {
    return {
      bg: TT_CONFLICT_CHROME.bg,
      border: TT_CONFLICT_CHROME.border,
      innerStyles: null,
      slotKind: 'conflict',
      borderLeftWidth: 6,
    };
  }
  if (reqOn) {
    return {
      bg: TT_REQUEST_CHROME.bg,
      border: TT_REQUEST_CHROME.border,
      innerStyles: null,
      slotKind: 'request',
      borderLeftWidth: 6,
    };
  }
  let base = timetableDeptYearChrome(s);
  return { ...base, slotKind: 'normal', borderLeftWidth: 3 };
}
function sectionOptionsForDeptYear(deptIds, yearLabel) {
  let ids = Array.isArray(deptIds) ? deptIds : [deptIds];
  let mergeOpts = ids.length === 1 && ids[0] ? { programMatchDept: ids[0] } : {};
  let all = mergeSectionOptions(deptIds, mergeOpts);
  if (!yearLabel) return all;
  let fromScheduleYear = new Set(
    state.schedules
      .filter(s => ids.includes(s.dept) && String(s.schYear || '').trim() === yearLabel)
      .map(s => String(s.section || '').trim())
      .filter(Boolean),
  );
  return all.filter(s => {
    let section = String(s || '').trim();
    let labeledYear = sectionYearFromLabel(section);
    // Keep explicit year labels strict; only fallback to schedule-year membership
    // when a legacy section label has no recognizable year token.
    if (labeledYear) return labeledYear === yearLabel;
    return fromScheduleYear.has(section);
  });
}
/** Placeholder for section text fields (shown when the field is empty). */
function sectionInputPlaceholder() {
  return 'Official section label';
}
/** Set A / Set B only; preserves other saved values as an extra option when editing. */
function setABSelectHtml(id, current) {
  const legacy = current && current !== 'Set A' && current !== 'Set B' ? String(current) : '';
  const legacyOpt = legacy
    ? `<option value="${escapeHtml(legacy)}" selected>${escapeHtml(legacy)}</option>`
    : '';
  return `<select class="form-select" id="${id}">
    <option value="">— None —</option>
    <option value="Set A" ${current === 'Set A' ? 'selected' : ''}>Set A</option>
    <option value="Set B" ${current === 'Set B' ? 'selected' : ''}>Set B</option>
    ${legacyOpt}
  </select>`;
}
function scheduleYearSelectHtml(id, selected, extraAttrs = '') {
  const legacy = selected && !SCHEDULE_FORM_YEARS.includes(selected)
    ? `<option value="${escapeHtml(selected)}" selected>${escapeHtml(selected)}</option>`
    : '';
  const opts = SCHEDULE_FORM_YEARS.map(y => `<option value="${escapeHtml(y)}" ${selected === y ? 'selected' : ''}>${escapeHtml(y)}</option>`).join('');
  const attrs = extraAttrs ? ` ${extraAttrs}` : '';
  return `<select class="form-select" id="${id}"${attrs}><option value="">Select year...</option>${opts}${legacy}</select>`;
}
function scheduleSemSelectHtml(id, selected, extraAttrs = '') {
  const legacy = selected && !SCHEDULE_FORM_SEMS.includes(selected)
    ? `<option value="${escapeHtml(selected)}" selected>${escapeHtml(selected)}</option>`
    : '';
  const opts = SCHEDULE_FORM_SEMS.map(s => `<option value="${escapeHtml(s)}" ${selected === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  const attrs = extraAttrs ? ` ${extraAttrs}` : '';
  return `<select class="form-select" id="${id}"${attrs}><option value="">Select semester...</option>${opts}${legacy}</select>`;
}

function normalizeSubjectCode(s) {
  return (s || '').toString().replace(/\s+/g, '').toUpperCase();
}
function normalizeCurriculumYearLabel(v) {
  let raw = String(v || '').trim();
  if (!raw) return '';
  let k = raw.toLowerCase().replace(/[\s_-]+/g, '');
  if (k === '1styear' || k === 'firstyear' || k === 'year1' || k === '1year') return '1st Year';
  if (k === '2ndyear' || k === 'secondyear' || k === 'year2' || k === '2year') return '2nd Year';
  if (k === '3rdyear' || k === 'thirdyear' || k === 'year3' || k === '3year') return '3rd Year';
  if (k === '4thyear' || k === 'fourthyear' || k === 'year4' || k === '4year') return '4th Year';
  return raw;
}
function normalizeCurriculumSemesterLabel(v) {
  let raw = String(v || '').trim();
  if (!raw) return '';
  let k = raw.toLowerCase().replace(/[\s_-]+/g, '');
  if (k === '1stsemester' || k === 'firstsemester' || k === 'sem1') return '1st Semester';
  if (k === '2ndsemester' || k === 'secondsemester' || k === 'sem2') return '2nd Semester';
  if (k === 'midyear' || k === 'summer' || k === 'midyr') return 'Midyear';
  return raw;
}

/** Same course, different naming between curriculum sheet and `subjects` table (common for CPE orientation, NST, PE). */
const SUBJECT_CODE_EQUIV_COMMON = [
  ['NST01', 'NSTP1', 'NST1'],
  ['PEO01', 'PE001', 'PEO1'],
];
const SUBJECT_CODE_EQUIV_BY_DEPT = {
  cpe: [['CPE01', 'COE01']],
};
function subjectCodeEquivalenceSetsForDept(dept) {
  let sets = SUBJECT_CODE_EQUIV_COMMON.map(g => [...g]);
  let extra = SUBJECT_CODE_EQUIV_BY_DEPT[dept];
  if (extra) for (let g of extra) sets.push([...g]);
  return sets;
}
function subjectCodeOZeroVariants(normCode) {
  let base = normalizeSubjectCode(normCode);
  let out = new Set([base]);
  if (!base) return out;
  // Handle common data-entry drift in course codes (letter O vs zero).
  if (base.includes('0')) out.add(base.replace(/0/g, 'O'));
  if (base.includes('O')) out.add(base.replace(/O/g, '0'));
  return out;
}
/** All normalized codes that should match a curriculum or subject code within `dept`. */
function expandNormalizedCodesForDept(dept, normCode) {
  let expanded = subjectCodeOZeroVariants(normCode);
  for (let g of subjectCodeEquivalenceSetsForDept(dept)) {
    let gn = g.map(normalizeSubjectCode);
    if (gn.some(x => expanded.has(x))) {
      for (let x of gn) {
        for (let v of subjectCodeOZeroVariants(x)) expanded.add(v);
      }
    }
  }
  return expanded;
}
function curriculumCodeFromRow(r) {
  let sc = (r.subjectCode || '').toString().replace(/\s+/g, '').trim();
  if (sc) return sc;
  return (r.courseCode || '').toString().replace(/\s+/g, '').trim();
}
function curriculumRowsForDept(dept) {
  if (!dept || dept === 'all' || !Array.isArray(state.curriculum)) return [];
  return state.curriculum.filter(c => (c.dept || '') === dept);
}
function distinctYearsFromCurriculumRows(rows) {
  let set = new Set();
  for (let r of rows) {
    let y = normalizeCurriculumYearLabel(r.year);
    if (y) set.add(y);
  }
  return [...set].sort((a, b) => {
    let ia = SCHEDULE_FORM_YEARS.indexOf(a);
    let ib = SCHEDULE_FORM_YEARS.indexOf(b);
    if (ia >= 0 && ib >= 0) return ia - ib;
    return String(a).localeCompare(String(b));
  });
}
function yearsOptionsForDept(deptKey) {
  let rows = curriculumRowsForDept(deptKey);
  let years = distinctYearsFromCurriculumRows(rows);
  if (!years.length) years = [...SCHEDULE_FORM_YEARS];
  return years;
}
function distinctSemsFromRows(rowList) {
  let set = new Set();
  for (let r of rowList) {
    let s = normalizeCurriculumSemesterLabel(r.semester);
    if (s) set.add(s);
  }
  let ordered = CURRICULUM_FORM_SEMS.filter(s => set.has(s));
  for (let s of set) {
    if (!CURRICULUM_FORM_SEMS.includes(s)) ordered.push(s);
  }
  return ordered;
}
function semsForDeptYear(deptKey, year) {
  let rows = curriculumRowsForDept(deptKey);
  let wantYear = normalizeCurriculumYearLabel(year);
  let forYear = rows.filter(r => normalizeCurriculumYearLabel(r.year) === wantYear);
  if (forYear.length) return distinctSemsFromRows(forYear);
  return [...CURRICULUM_FORM_SEMS];
}
function curriculumAcademicYearForFilter(r) {
  return normalizeAcademicYearInput(r.academicYear) || DEFAULT_ACADEMIC_YEAR;
}
function subjectsSourceForCreateSchedule() {
  // When Supabase is active, only use DB-backed subjects so FK checks pass.
  if (hasSupabaseClient()) {
    return Array.isArray(state.subjects) ? state.subjects.filter(s => s?.id) : [];
  }
  let local = (typeof SUBJECTS_DATA !== 'undefined' && Array.isArray(SUBJECTS_DATA)) ? SUBJECTS_DATA : [];
  return local.filter(s => s?.id);
}

function stableSubjectIdFromDeptAndCode(dept, courseCode) {
  let d = String(dept || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  let c = normalizeSubjectCode(courseCode || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  return `sub_${d || 'dept'}_${c || 'code'}`;
}

function findSubjectByDeptAndCurriculumCode(dept, courseCode) {
  let want = normalizeSubjectCode(courseCode || '');
  if (!dept || !want) return null;
  let source = Array.isArray(state.subjects) ? state.subjects : [];
  for (let s of source) {
    if (!s || s.dept !== dept) continue;
    if (normalizeSubjectCode(s.code || '') === want) return s;
  }
  return null;
}

async function ensureSubjectsExistForCurriculumRows(rows) {
  let list = Array.isArray(rows) ? rows : [];
  let changed = [];
  for (let r of list) {
    let dept = String(r?.dept || '').trim();
    let code = String(r?.courseCode || '').trim();
    let name = String(r?.subjectName || '').trim();
    let units = Number.isFinite(Number(r?.units)) ? Number(r.units) : 0;
    if (!dept || !code || !name) continue;
    let found = findSubjectByDeptAndCurriculumCode(dept, code);
    if (found) {
      let next = { ...found };
      let didChange = false;
      if ((next.name || '').trim() !== name) {
        next.name = name;
        didChange = true;
      }
      if (Number(next.units) !== units) {
        next.units = units;
        didChange = true;
      }
      if (didChange) {
        let i = state.subjects.findIndex(s => s.id === next.id);
        if (i >= 0) state.subjects[i] = next;
        changed.push(next);
      }
      continue;
    }
    let created = {
      id: stableSubjectIdFromDeptAndCode(dept, code),
      code,
      name,
      dept,
      units,
      active: true,
    };
    state.subjects.push(created);
    changed.push(created);
  }
  if (!changed.length || !hasSupabaseClient()) return { ok: true };
  let { error } = await upsertSubjectsDb(changed);
  if (error) {
    console.warn('Unable to upsert auto-created subjects from curriculum rows:', error);
    return { ok: false, error };
  }
  return { ok: true };
}

function subjectsForCreateScheduleSlot(dept, year, sem, ay) {
  let rows = curriculumRowsForDept(dept);
  let ayNorm = normalizeAcademicYearInput(ay) || DEFAULT_ACADEMIC_YEAR;
  let wantYear = normalizeCurriculumYearLabel(year);
  let wantSem = normalizeCurriculumSemesterLabel(sem);
  let forSlot = rows.filter(r =>
    normalizeCurriculumYearLabel(r.year) === wantYear &&
    normalizeCurriculumSemesterLabel(r.semester) === wantSem &&
    curriculumAcademicYearForFilter(r) === ayNorm,
  );
  if (!forSlot.length) return [];
  let source = subjectsSourceForCreateSchedule();
  function findSubjectForCurriculumCode(cc) {
    if (!cc) return null;
    let expanded = expandNormalizedCodesForDept(dept, normalizeSubjectCode(cc));
    for (let s of source) {
      if (s.dept !== dept) continue;
      if (expanded.has(normalizeSubjectCode(s.code))) return s;
    }
    return null;
  }
  let out = [];
  let seenId = new Set();
  let createdSubjects = [];
  for (let r of forSlot) {
    let c = curriculumCodeFromRow(r);
    let sub = findSubjectForCurriculumCode(c);
    if (!sub && dept && c) {
      // Self-heal: synthesize missing subject master entries from curriculum rows.
      sub = {
        id: stableSubjectIdFromDeptAndCode(dept, c),
        code: String(c).trim(),
        name: String(r.subjectName || r.courseName || c).trim(),
        dept,
        units: Number.isFinite(Number(r.units)) ? Number(r.units) : 0,
        active: true,
      };
      if (!state.subjects.some(s => s.id === sub.id)) {
        state.subjects.push(sub);
        createdSubjects.push(sub);
      } else {
        let i = state.subjects.findIndex(s => s.id === sub.id);
        if (i >= 0) state.subjects[i] = { ...state.subjects[i], ...sub };
      }
      source.push(sub);
    }
    if (sub && !seenId.has(sub.id)) {
      seenId.add(sub.id);
      out.push(sub);
    }
  }
  if (createdSubjects.length && hasSupabaseClient()) {
    // Fire-and-forget DB sync so future sessions get the same subject master rows.
    upsertSubjectsDb(createdSubjects).catch(() => {});
  }
  return out;
}
function subjectAllowedByCurriculum(dept, year, sem, subjectId, ay) {
  if (!dept || !year || !sem || !subjectId) return false;
  return subjectsForCreateScheduleSlot(dept, year, sem, ay).some(s => s.id === subjectId);
}
/** Curriculum row for this dept/year/sem/AY + subject (same matching as schedule subject list). */
function curriculumRowForScheduleSubject(dept, year, sem, subjectId, ay) {
  if (!dept || !year || !sem || !subjectId) return null;
  let rows = curriculumRowsForDept(dept);
  let ayNorm = normalizeAcademicYearInput(ay) || DEFAULT_ACADEMIC_YEAR;
  let wantYear = normalizeCurriculumYearLabel(year);
  let wantSem = normalizeCurriculumSemesterLabel(sem);
  let forSlot = rows.filter(r =>
    normalizeCurriculumYearLabel(r.year) === wantYear &&
    normalizeCurriculumSemesterLabel(r.semester) === wantSem &&
    curriculumAcademicYearForFilter(r) === ayNorm,
  );
  let sub = getSubject(subjectId);
  if (!sub || sub.dept !== dept) return null;
  let codeNorm = normalizeSubjectCode(sub.code);
  for (let r of forSlot) {
    let c = curriculumCodeFromRow(r);
    let expanded = expandNormalizedCodesForDept(dept, normalizeSubjectCode(c));
    if (expanded.has(codeNorm)) return r;
  }
  return null;
}
/** Lab column in curriculum has a value → treat as lab subject (Set A/B required). Uses lab units > 0 after normalization. */
function curriculumSubjectHasLabUnits(dept, year, sem, subjectId, ay) {
  let row = curriculumRowForScheduleSubject(dept, year, sem, subjectId, ay);
  if (!row) return false;
  let raw = row.labUnits != null ? row.labUnits : row.lab_units;
  if (raw == null || (typeof raw === 'string' && !String(raw).trim())) return false;
  let lab = Number(raw);
  return Number.isFinite(lab) && lab > 0;
}
function curriculumSubjectAllowedHours(dept, year, sem, subjectId, ay) {
  let row = curriculumRowForScheduleSubject(dept, year, sem, subjectId, ay);
  if (!row) return null;
  return curriculumRequiredHoursEffectiveNumber(row);
}
function scheduleWeeklyHoursFromEntry(entry) {
  let start = parseTimeToMinutes(entry?.timeStart);
  let end = parseTimeToMinutes(entry?.timeEnd);
  if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return 0;
  let dayCount = Array.isArray(entry?.days) ? entry.days.length : 0;
  return ((end - start) / 60) * dayCount;
}
function formatHoursValue(n) {
  let x = Number(n);
  if (!Number.isFinite(x)) return '0';
  let rounded = Math.round(x * 100) / 100;
  if (Math.abs(rounded - Math.round(rounded)) < 1e-9) return String(Math.round(rounded));
  return String(rounded);
}
function scheduledWeeklyHoursForSubjectSlot(entry, excludeScheduleId = null) {
  let ay = normalizeAcademicYearInput(entry?.schAy) || DEFAULT_ACADEMIC_YEAR;
  let section = String(entry?.section || '').trim();
  let total = 0;
  for (let s of state.schedules) {
    if (!s) continue;
    if (excludeScheduleId && s.id === excludeScheduleId) continue;
    if (s.dept !== entry.dept) continue;
    if ((s.schYear || '').trim() !== (entry.schYear || '').trim()) continue;
    if ((s.schSem || '').trim() !== (entry.schSem || '').trim()) continue;
    if ((normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) !== ay) continue;
    if (s.subjectId !== entry.subjectId) continue;
    if (String(s.section || '').trim() !== section) continue;
    total += scheduleWeeklyHoursFromEntry(s);
  }
  return total;
}
function validateEntryHoursWithinCurriculum(entry, excludeScheduleId = null) {
  let allowed = curriculumSubjectAllowedHours(entry.dept, entry.schYear, entry.schSem, entry.subjectId, entry.schAy);
  if (!(Number.isFinite(allowed) && allowed > 0)) return null;
  let proposed = scheduleWeeklyHoursFromEntry(entry);
  let existing = scheduledWeeklyHoursForSubjectSlot(entry, excludeScheduleId);
  let total = existing + proposed;
  if (total > allowed + 1e-9) {
    return `Total scheduled hours exceed curriculum hours: existing ${formatHoursValue(existing)} + new ${formatHoursValue(proposed)} = ${formatHoursValue(total)} (allowed ${formatHoursValue(allowed)}).`;
  }
  return null;
}
const MSG_SET_REQUIRED_FOR_LAB = 'This subject has lab units in Curriculum. Choose Set A or Set B.';
/** Set is enabled only for lab subjects (curriculum lab units > 0). Otherwise disabled and cleared. */
function updateScheduleSetFieldRequirement(labelEl, selectEl, contextComplete, hasLabUnits) {
  if (!labelEl || !selectEl) return;
  const req = '<span class="label-req" aria-hidden="true">*</span>';
  let labFieldActive = contextComplete && hasLabUnits;
  if (!labFieldActive) {
    selectEl.value = '';
    selectEl.disabled = true;
    selectEl.required = false;
    selectEl.setAttribute('aria-required', 'false');
    labelEl.textContent = 'Set';
    return;
  }
  selectEl.disabled = false;
  labelEl.innerHTML = `Set ${req}`;
  selectEl.required = true;
  selectEl.setAttribute('aria-required', 'true');
}
function refreshCreateScheduleSetLabUi() {
  let labelEl = document.getElementById('f_set_label');
  let sel = document.getElementById('f_set');
  if (!labelEl || !sel) return;
  let y = document.getElementById('f_year')?.value || '';
  let sem = document.getElementById('f_sem')?.value || '';
  let sub = document.getElementById('f_subject')?.value || '';
  let ay = normalizeAcademicYearInput(document.getElementById('f_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let deptEl = document.getElementById('f_schedule_dept');
  let admin = state.currentUser?.role === 'admin';
  let picked = admin && deptEl && !deptEl.disabled ? deptEl.value : state.currentUser?.dept;
  let entryDept = picked === 'all' ? (getSubject(sub)?.dept || null) : picked;
  let contextComplete = !!(entryDept && y && sem && sub);
  let hasLab = contextComplete && curriculumSubjectHasLabUnits(entryDept, y, sem, sub, ay);
  updateScheduleSetFieldRequirement(labelEl, sel, contextComplete, hasLab);
}
function refreshViewScheduleSetLabUi() {
  let labelEl = document.getElementById('vs_set_label');
  let sel = document.getElementById('vs_set');
  if (!labelEl || !sel) return;
  let dept = document.getElementById('vs_dept')?.value || '';
  let y = document.getElementById('vs_year')?.value || '';
  let sem = document.getElementById('vs_sem')?.value || '';
  let sub = document.getElementById('vs_subject')?.value || '';
  let ay = normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || '') || DEFAULT_ACADEMIC_YEAR;
  let contextComplete = !!(dept && y && sem && sub);
  let hasLab = contextComplete && curriculumSubjectHasLabUnits(dept, y, sem, sub, ay);
  updateScheduleSetFieldRequirement(labelEl, sel, contextComplete, hasLab);
}
function refreshRequestSetLabUi() {
  let u = state.currentUser;
  let labelEl = document.getElementById('rq_set_label');
  let sel = document.getElementById('rq_set');
  if (!labelEl || !sel || !u?.dept) return;
  let y = document.getElementById('rq_year')?.value || '';
  let sem = document.getElementById('rq_sem')?.value || '';
  let sub = document.getElementById('rq_subject')?.value || '';
  let ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let contextComplete = !!(y && sem && sub);
  let hasLab = contextComplete && curriculumSubjectHasLabUnits(u.dept, y, sem, sub, ay);
  updateScheduleSetFieldRequirement(labelEl, sel, contextComplete, hasLab);
}
function getCreateScheduleDeptForCascade() {
  let u = state.currentUser;
  if (!u) return null;
  let el = document.getElementById('f_schedule_dept');
  if (u.role === 'admin') {
    if (!el) return null;
    let v = el.value;
    return v === 'all' ? null : v;
  }
  return u.dept;
}
function readCreateScheduleSlotFromDom() {
  let days = [...document.querySelectorAll('#modalBackdrop input[id^="day_"]:checked')].map(c => c.value);
  let timeStart = document.getElementById('f_timeStart')?.value || '';
  let timeEnd = document.getElementById('f_timeEnd')?.value || '';
  let sem = (document.getElementById('f_sem')?.value || '').trim() || state.termSemester || '1st Semester';
  let ay = normalizeAcademicYearInput(document.getElementById('f_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  return { days, timeStart, timeEnd, term: { sem, ay } };
}
function getCreateScheduleProfessorCandidateList() {
  let u = state.currentUser;
  if (!u) return [];
  let isAdmin = u.role === 'admin';
  let deptEl = document.getElementById('f_schedule_dept');
  let formDept = isAdmin ? (deptEl?.value || 'all') : u.dept;
  if (isAdmin && (formDept === 'all' || !formDept)) {
    return [...state.professors].sort((a, b) => a.name.localeCompare(b.name));
  }
  if (!formDept) return [];
  return [...state.professors.filter(p => p.dept === formDept)].sort((a, b) => a.name.localeCompare(b.name));
}
function refreshCreateScheduleProfessorOptions() {
  let sel = document.getElementById('f_professor');
  if (!sel || state.modal?.type !== 'addSchedule') return;
  let profList = getCreateScheduleProfessorCandidateList();
  let { days, timeStart, timeEnd, term } = readCreateScheduleSlotFromDom();
  let available = filterProfessorsByAvailability(profList, days, timeStart, timeEnd, { term });
  let prev = sel.value;
  let profBody = available
    .map(p => `<option value="${escapeHtml(p.id)}" ${prev === p.id ? 'selected' : ''}>${escapeHtml(p.name)} (${escapeHtml(getDept(p.dept)?.code || '')})</option>`)
    .join('');
  let profLegacyOpt = '';
  if (prev && prev !== PROFESSOR_OTHER_ID && !available.some(p => p.id === prev)) {
    let px = getProfessor(prev);
    if (px && !profList.some(p => p.id === prev)) {
      profLegacyOpt = `<option value="${escapeHtml(prev)}" selected>${escapeHtml(px.name)} (${escapeHtml(getDept(px.dept)?.code || '')})</option>`;
    }
  }
  sel.innerHTML = `<option value="">Select professor...</option>${profBody}${profLegacyOpt}<option value="${PROFESSOR_OTHER_ID}" ${prev === PROFESSOR_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let selWrap = document.getElementById('f_professor_select_wrap');
  let otherWrap = document.getElementById('f_professor_other_wrap');
  if (prev === PROFESSOR_OTHER_ID) {
    if (selWrap) selWrap.hidden = true;
    if (otherWrap) otherWrap.hidden = false;
  } else {
    if (selWrap) selWrap.hidden = false;
    if (otherWrap) otherWrap.hidden = true;
  }
}
function readViewScheduleEditSlotFromDom() {
  let days = [...document.querySelectorAll('#modalBackdrop input[id^="vsday_"]:checked')].map(c => c.value);
  let timeStart = document.getElementById('vs_timeStart')?.value || '';
  let timeEnd = document.getElementById('vs_timeEnd')?.value || '';
  let sem = (document.getElementById('vs_sem')?.value || '').trim() || '1st Semester';
  let ay = normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  return { days, timeStart, timeEnd, term: { sem, ay } };
}
function refreshViewScheduleProfessorOptions() {
  let sel = document.getElementById('vs_professor');
  if (!sel || state.modal?.type !== 'viewSchedule' || state.modal?.viewScheduleMode !== 'edit') return;
  let draft = state.modal.data || {};
  let listDept = document.getElementById('vs_dept')?.value || draft.dept;
  if (!listDept) return;
  let profList = [...state.professors.filter(p => p.dept === listDept)].sort((a, b) => a.name.localeCompare(b.name));
  let { days, timeStart, timeEnd, term } = readViewScheduleEditSlotFromDom();
  let available = filterProfessorsByAvailability(profList, days, timeStart, timeEnd, { term, excludeScheduleId: draft.id });
  let prev = sel.value;
  let legacy = '';
  if (prev && prev !== PROFESSOR_OTHER_ID && !available.some(p => p.id === prev)) {
    let px = getProfessor(prev);
    if (px) legacy = `<option value="${escapeHtml(prev)}" selected>${escapeHtml(px.name)}</option>`;
  }
  let opts = available.map(p => `<option value="${escapeHtml(p.id)}" ${prev === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('');
  sel.innerHTML = `<option value="" ${!prev ? 'selected' : ''}>—</option>${opts}${legacy}<option value="${PROFESSOR_OTHER_ID}" ${prev === PROFESSOR_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let sw = document.getElementById('vs_professor_select_wrap');
  let ow = document.getElementById('vs_professor_other_wrap');
  if (prev === PROFESSOR_OTHER_ID) {
    if (sw) sw.hidden = true;
    if (ow) ow.hidden = false;
  } else {
    if (sw) sw.hidden = false;
    if (ow) ow.hidden = true;
  }
}
function refreshRequestFormProfessorOptions() {
  let sel = document.getElementById('rq_professor');
  if (!sel || state.modal?.type !== 'newRequest' || currentRequestFormStep() !== 2) return;
  if ((document.getElementById('rq_reason')?.value || '').trim() === REQUEST_ROOM_REASON_CHOICES[1]) return;
  let u = state.currentUser;
  if (!u?.dept) return;
  let toDept = document.getElementById('rq_to_dept')?.value || '';
  let facultyDept = (document.getElementById('rq_reason')?.value || '').trim() === REQUEST_ROOM_REASON_CHOICES[0] ? u.dept : (toDept || u.dept);
  let profList = [...state.professors.filter(p => p.dept === facultyDept)].sort((a, b) => a.name.localeCompare(b.name));
  let days = [...document.querySelectorAll('#modalBackdrop input[id^="rqday_"]:checked')].map(c => c.value);
  let timeStart = document.getElementById('rq_timeStart')?.value || '';
  let timeEnd = document.getElementById('rq_timeEnd')?.value || '';
  let sem = (document.getElementById('rq_sem')?.value || '').trim() || state.termSemester || '1st Semester';
  let ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let available = filterProfessorsByAvailability(profList, days, timeStart, timeEnd, { term: { sem, ay } });
  let prev = sel.value;
  sel.innerHTML =
    `<option value="">Select professor...</option>` +
    available.map(p => `<option value="${escapeHtml(p.id)}" ${prev === p.id ? 'selected' : ''}>${escapeHtml(p.name)} (${escapeHtml(p.short)})</option>`).join('') +
    `<option value="${PROFESSOR_OTHER_ID}" ${prev === PROFESSOR_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let sw = document.getElementById('rq_professor_select_wrap');
  let ow = document.getElementById('rq_professor_other_wrap');
  if (prev === PROFESSOR_OTHER_ID) {
    if (sw) sw.hidden = true;
    if (ow) ow.hidden = false;
  } else {
    if (sw) sw.hidden = false;
    if (ow) ow.hidden = true;
  }
}
/** Populate Year → Semester → Subject from curriculum (DOM-only; Create Schedule modal). */
function initCreateScheduleCurriculumCascade() {
  let yEl = document.getElementById('f_year');
  let sEl = document.getElementById('f_sem');
  let ayEl = document.getElementById('f_ay');
  let subEl = document.getElementById('f_subject');
  let secEl = document.getElementById('f_section');
  let deptEl = document.getElementById('f_schedule_dept');
  if (!yEl || !sEl || !subEl || !secEl) return;
  let lockedSem = (state.termSemester || '1st Semester').trim();
  let lockedAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  if (ayEl) {
    ayEl.value = lockedAy;
    ayEl.readOnly = true;
  }

  function fillYearSelect(years, selected) {
    yEl.innerHTML = '<option value="">Select year...</option>' + years.map(y => `<option value="${escapeHtml(y)}" ${selected === y ? 'selected' : ''}>${escapeHtml(y)}</option>`).join('');
  }
  function fillSemSelect(sems, selected) {
    sEl.innerHTML = '<option value="">Select semester...</option>' + sems.map(s => `<option value="${escapeHtml(s)}" ${selected === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  }
  function fillSubjectSelect(subjects, selectedId) {
    subEl.innerHTML = '<option value="">Select subject...</option>' + subjects.map(s => `<option value="${escapeHtml(s.id)}" ${selectedId === s.id ? 'selected' : ''}>${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
  }
  function fillSectionSelect(sections, selectedSection) {
    let pick = selectedSection || secEl.value || '';
    let opts = sections.map(sec => `<option value="${escapeHtml(sec)}" ${pick === sec ? 'selected' : ''}>${escapeHtml(sec)}</option>`).join('');
    let legacy = pick && !sections.includes(pick) ? `<option value="${escapeHtml(pick)}" selected>${escapeHtml(pick)}</option>` : '';
    secEl.innerHTML = `<option value="">Select section...</option>${opts}${legacy}`;
  }

  function rebuildAll() {
    let d = getCreateScheduleDeptForCascade();
    if (!d) {
      yEl.innerHTML = '<option value="">Select department first...</option>';
      yEl.disabled = true;
      sEl.innerHTML = '<option value="">Select semester...</option>';
      sEl.disabled = true;
      subEl.innerHTML = '<option value="">Select subject...</option>';
      subEl.disabled = true;
      secEl.innerHTML = '<option value="">Select section...</option>';
      secEl.disabled = true;
      refreshCreateScheduleSetLabUi();
      refreshCreateScheduleProfessorOptions();
      return;
    }
    yEl.disabled = false;
    sEl.disabled = true;
    subEl.disabled = false;
    secEl.disabled = false;
    let years = yearsOptionsForDept(d);
    fillYearSelect(years, '');
    fillSemSelect([lockedSem], lockedSem);
    fillSubjectSelect([], '');
    fillSectionSelect(sectionOptionsForDeptYear([d], ''), '');
    refreshCreateScheduleSetLabUi();
    refreshCreateScheduleProfessorOptions();
  }

  rebuildAll();

  yEl.addEventListener('change', () => {
    let d = getCreateScheduleDeptForCascade();
    if (!d) return;
    let y = yEl.value;
    if (!y) {
      fillSemSelect([lockedSem], lockedSem);
      fillSubjectSelect([], '');
      fillSectionSelect(sectionOptionsForDeptYear([d], ''), '');
      refreshCreateScheduleSetLabUi();
      refreshCreateScheduleProfessorOptions();
      return;
    }
    let sems = semsForDeptYear(d, y);
    let useSem = sems.includes(lockedSem) ? lockedSem : '';
    fillSemSelect(useSem ? [useSem] : sems, useSem);
    let ay = normalizeAcademicYearInput(ayEl?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    fillSubjectSelect(useSem ? subjectsForCreateScheduleSlot(d, y, useSem, ay) : [], '');
    fillSectionSelect(sectionOptionsForDeptYear([d], y), '');
    refreshCreateScheduleSetLabUi();
    refreshCreateScheduleProfessorOptions();
  });

  sEl.addEventListener('change', () => {
    let d = getCreateScheduleDeptForCascade();
    let y = yEl.value;
    let sem = sEl.value;
    if (!d || !y || !sem) {
      fillSubjectSelect([], '');
      refreshCreateScheduleSetLabUi();
      refreshCreateScheduleProfessorOptions();
      return;
    }
    let ay = normalizeAcademicYearInput(ayEl?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    fillSubjectSelect(subjectsForCreateScheduleSlot(d, y, sem, ay), '');
    refreshCreateScheduleSetLabUi();
    refreshCreateScheduleProfessorOptions();
  });
  ayEl?.addEventListener('change', () => {
    let d = getCreateScheduleDeptForCascade();
    let y = yEl.value;
    let sem = sEl.value;
    if (!d || !y || !sem) {
      fillSubjectSelect([], '');
      refreshCreateScheduleSetLabUi();
      refreshCreateScheduleProfessorOptions();
      return;
    }
    let ay = normalizeAcademicYearInput(ayEl.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    fillSubjectSelect(subjectsForCreateScheduleSlot(d, y, sem, ay), '');
    refreshCreateScheduleSetLabUi();
    refreshCreateScheduleProfessorOptions();
  });
  subEl.addEventListener('change', refreshCreateScheduleSetLabUi);
  deptEl?.addEventListener('change', rebuildAll);
}
function getBorrowableRooms(u) {
  if (!u) return [];
  if (u.role === 'admin') return [...ROOMS];
  return ROOMS.filter(r => r.dept !== u.dept);
}
/** Departments that own at least one room (for Requests page filter). */
function departmentsWithRoomsList() {
  let ids = new Set(roomsSourceForApp().map(r => r.dept).filter(Boolean));
  return DEPARTMENTS.filter(d => ids.has(d.id));
}
function requestTimetableDepartmentsForUser(u) {
  let list = departmentsWithRoomsList();
  if (u?.role === 'chairperson' && u?.dept) {
    return list.filter(d => d.id !== u.dept);
  }
  return list;
}
/** Rooms from other departments free on every chosen day for the given time range. */
function roomsFreeForBorrowing(u, days, timeStart, timeEnd) {
  if (!u?.dept) return [];
  let borrow = ROOMS.filter(r => r.dept !== u.dept).slice().sort((a, b) => a.name.localeCompare(b.name));
  if (!days.length || !timeStart || !timeEnd) return borrow;
  return borrow.filter(r => days.every(day => !roomSlotOccupied(r.id, day, timeStart, timeEnd)));
}
// Row index matches timeSlots: row 0 = 07:30, row 1 = 08:00, … (30-minute steps from grid start).
function parseTimeToMinutes(t) {
  let m = String(t || '').match(/^\s*(\d{1,2}):(\d{2})/);
  if (!m) return NaN;
  return Number(m[1]) * 60 + Number(m[2]);
}
function timeToRow(t) {
  let mins = parseTimeToMinutes(t);
  if (!Number.isFinite(mins)) return -1;
  return Math.floor((mins - (7 * 60 + 30)) / 30);
}
function timeDuration(s, e) {
  let start = parseTimeToMinutes(s);
  let end = parseTimeToMinutes(e);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return 1;
  let diff = end - start;
  if (diff <= 0) return 1;
  // Use exact half-hour span so adjacent classes (e.g. 7:30-9:00 then 9:00-10:30)
  // do not overlap and generate malformed table columns.
  let slots = Math.ceil(diff / 30);
  return Math.max(1, slots);
}
function timesEqualClock(a, b) {
  let ma = parseTimeToMinutes(a);
  let mb = parseTimeToMinutes(b);
  return Number.isFinite(ma) && Number.isFinite(mb) && ma === mb;
}
/** Another schedule on the same day starts exactly at `timeStart` (blocks rowspan extension through that row). */
function hasScheduleStartingAtOnDay(scheds, day, timeStart, excludeId) {
  return scheds.some(
    s =>
      s &&
      s.id !== excludeId &&
      Array.isArray(s.days) &&
      s.days.includes(day) &&
      timesEqualClock(s.timeStart, timeStart),
  );
}
/** Another schedule on the same day ends exactly at `timeEnd` (used to visually join back-to-back blocks). */
function hasScheduleEndingAtOnDay(scheds, day, timeEnd, excludeId) {
  return scheds.some(
    s =>
      s &&
      s.id !== excludeId &&
      Array.isArray(s.days) &&
      s.days.includes(day) &&
      timesEqualClock(s.timeEnd, timeEnd),
  );
}
/** Rowspan through the time row labeled with the end clock for any block length that is a positive multiple of 30m (including one slot, e.g. 7:30–8:00), unless back-to-back. */
function timeDurationForTimetableGridDisplay(schedule, day, allScheds) {
  let d = timeDuration(schedule.timeStart, schedule.timeEnd);
  let diff = parseTimeToMinutes(schedule.timeEnd) - parseTimeToMinutes(schedule.timeStart);
  if (!Number.isFinite(diff) || diff <= 0 || diff % 30 !== 0) return d;
  if (hasScheduleStartingAtOnDay(allScheds, day, schedule.timeEnd, schedule.id)) return d;
  return d + 1;
}
function hasScheduleStartingAtForRoomDay(scheds, day, roomId, timeStart, excludeId) {
  if (!roomId) return false;
  return scheds.some(
    s =>
      s &&
      s.id !== excludeId &&
      s.roomId === roomId &&
      Array.isArray(s.days) &&
      s.days.includes(day) &&
      timesEqualClock(s.timeStart, timeStart),
  );
}
function timeDurationForRoomDayGridDisplay(schedule, day, roomSchedsSameDay) {
  let d = timeDuration(schedule.timeStart, schedule.timeEnd);
  let diff = parseTimeToMinutes(schedule.timeEnd) - parseTimeToMinutes(schedule.timeStart);
  if (!Number.isFinite(diff) || diff <= 0 || diff % 30 !== 0) return d;
  if (hasScheduleStartingAtForRoomDay(roomSchedsSameDay, day, schedule.roomId, schedule.timeEnd, schedule.id))
    return d;
  return d + 1;
}
function pendingRequestsForUser() {
  let u = state.currentUser;
  if (!u) return 0;
  if (u.role === 'admin') return 0;
  let term = currentTermFilter();
  return state.requests.filter(r =>
    requestMatchesCurrentTerm(r, term) &&
    r.toDept === u.dept &&
    isPendingRequestStatus(r.status),
  ).length;
}

function checkConflicts(entry, excludeId=null) {
  let conflicts = [];
  let entrySem = (entry.schSem || '').trim();
  let entryAy = normalizeAcademicYearInput(entry.schAy) || DEFAULT_ACADEMIC_YEAR;
  if (!entrySem) {
    let t = currentTermFilter();
    entrySem = t.sem;
    entryAy = t.ay;
  }
  let scheds = state.schedules.filter(s => {
    if (s.id === excludeId) return false;
    if ((s.schSem || '').trim() !== entrySem) return false;
    if ((normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) !== entryAy) return false;
    return true;
  });
  let timeOverlap = (as, ae, bs, be) => as < be && ae > bs;
  const isOthersLikeRoom = x =>
    !!x &&
    (x.roomId === ROOM_OTHER_ID || (x.roomId == null || x.roomId === '') || String(x.roomOtherName || '').trim() !== '');
  for (let s of scheds) {
    if(!s.days.some(d=>entry.days.includes(d))) continue;
    if(!timeOverlap(entry.timeStart,entry.timeEnd,s.timeStart,s.timeEnd)) continue;
    if(scheduleProfessorsOverlap(s, entry)){
      let label = professorDisplayLineFromPick(entry.professorId, entry.professorOtherName);
      conflicts.push(`Professor ${label} has class on ${s.days.join('/')} ${fmt12(s.timeStart)}–${fmt12(s.timeEnd)}`);
    }
    // Rule: "Others" room is non-blocking (shared/unspecified), so skip room conflicts.
    if (isOthersLikeRoom(s) || isOthersLikeRoom(entry)) {
      // no-op
    } else if (roomsBookSameSpace(s, entry)) {
      let sRoom = roomDisplayLineFromPick(s.roomId, s.roomOtherName);
      let eRoom = roomDisplayLineFromPick(entry.roomId, entry.roomOtherName);
      if (isSharedRoomName(sRoom) && isSharedRoomName(eRoom)) continue;
      let rn = roomDisplayLineFromPick(entry.roomId, entry.roomOtherName);
      conflicts.push(`Room ${rn} booked on ${s.days.join('/')} ${fmt12(s.timeStart)}–${fmt12(s.timeEnd)}`);
    }
    if(s.section===entry.section && s.dept===entry.dept){
      conflicts.push(`Section ${entry.section} has class on ${s.days.join('/')}`);
    }
  }
  return [...new Set(conflicts)];
}

/** How many schedules in the given list have at least one conflict with another schedule (global). */
function countSchedulesWithConflicts(schedulesToCheck) {
  let n = 0;
  for (let s of schedulesToCheck) {
    if (checkConflicts(scheduleEntryForConflictCheck(s), s.id).length) n++;
  }
  return n;
}

function scheduleEntryForConflictCheck(s) {
  return {
    professorId: s.professorId,
    professorOtherName: s.professorOtherName,
    roomId: s.roomId,
    roomOtherName: s.roomOtherName,
    dept: s.dept,
    section: s.section,
    days: s.days,
    timeStart: s.timeStart,
    timeEnd: s.timeEnd,
    schSem: s.schSem,
    schAy: s.schAy,
  };
}

/** Overlapping schedule rows for `scheduleRow`, each with human-readable reasons (same rules as checkConflicts). */
function getConflictPairsForSchedule(scheduleRow) {
  let entry = scheduleEntryForConflictCheck(scheduleRow);
  let excludeId = scheduleRow.id;
  let pairs = [];
  let entrySem = (entry.schSem || '').trim();
  let entryAy = normalizeAcademicYearInput(entry.schAy) || DEFAULT_ACADEMIC_YEAR;
  if (!entrySem) {
    let t = currentTermFilter();
    entrySem = t.sem;
    entryAy = t.ay;
  }
  for (let other of state.schedules) {
    if (other.id === excludeId) continue;
    if ((other.schSem || '').trim() !== entrySem) continue;
    if ((normalizeAcademicYearInput(other.schAy) || DEFAULT_ACADEMIC_YEAR) !== entryAy) continue;
    if (!other.days.some(d => entry.days.includes(d))) continue;
    if (!(entry.timeStart < other.timeEnd && entry.timeEnd > other.timeStart)) continue;
    let msgs = [];
    if (scheduleProfessorsOverlap(other, entry)) {
      let label = professorDisplayLineFromPick(entry.professorId, entry.professorOtherName);
      msgs.push(`Professor ${label} has class on ${other.days.join('/')} ${fmt12(other.timeStart)}–${fmt12(other.timeEnd)}`);
    }
    if (roomsBookSameSpace(other, entry)) {
      let rn = roomDisplayLineFromPick(entry.roomId, entry.roomOtherName);
      msgs.push(`Room ${rn} booked on ${other.days.join('/')} ${fmt12(other.timeStart)}–${fmt12(other.timeEnd)}`);
    }
    if (other.section === entry.section && other.dept === entry.dept) {
      msgs.push(`Section ${entry.section} has class on ${other.days.join('/')}`);
    }
    msgs = [...new Set(msgs)];
    if (msgs.length) pairs.push({ other, messages: msgs });
  }
  return pairs;
}

function dashboardSchedulesForConflictScope() {
  let u = state.currentUser;
  if (!u) return [];
  let term = currentTermFilter();
  let pool = u.role === 'admin' ? state.schedules : state.schedules.filter(s => scheduleVisibleToChairScope(s, u.dept));
  return pool.filter(s => scheduleMatchesCurrentTerm(s, term));
}
/** All schedules in the current term (every department) for the dashboard Schedule Summary grid. */
function dashboardScheduleSummarySchedules() {
  let term = currentTermFilter();
  let base = state.schedules.filter(s => scheduleMatchesCurrentTerm(s, term));
  let pending = state.requests
    .filter(r => requestMatchesCurrentTerm(r, term) && isPendingRoomRequestForTimetable(r))
    .map(pseudoScheduleFromPendingRequest);
  return [...base, ...pending];
}
function kickDashboardSummaryAutoSync() {
  if (!hasSupabaseClient()) return;
  const term = currentTermFilter();
  const key = `${term.sem}|${term.ay}`;
  if (state.dashboardSummarySyncInFlight) return;
  if (state.dashboardSummaryLastSyncKey === key) return;
  state.dashboardSummarySyncInFlight = true;
  syncCoreDataFromSupabase()
    .catch(() => false)
    .finally(() => {
      state.dashboardSummarySyncInFlight = false;
      state.dashboardSummaryLastSyncKey = key;
      render();
    });
}
/** Schedule Summary day dropdown: Mon–Sat for all users (same as timetable). */
function dashboardSummaryDayOptionsForUser(_u) {
  return DAYS_WITH_SATURDAY;
}
/** Chairpersons may edit or delete only schedules for their own department (e.g. college-wide Schedule Summary is view-only for others' bookings). */
function scheduleMutableByCurrentChair(s) {
  let u = state.currentUser;
  if (!u || !s || u.role !== 'chairperson') return false;
  return s.dept === u.dept;
}

function getDashboardConflictList(schedulesToCheck) {
  return schedulesToCheck
    .map(s => ({ schedule: s, pairs: getConflictPairsForSchedule(s) }))
    .filter(x => x.pairs.length > 0);
}

function renderScheduleConflictSummaryLine(s) {
  let sub = getSubject(s.subjectId);
  let code = sub?.code || '—';
  let days = Array.isArray(s.days) ? s.days.map(d => d.slice(0, 3)).join('/') : '';
  return `${escapeHtml(code)} · ${escapeHtml(s.section || '')} · ${escapeHtml(days)} · ${fmt12(s.timeStart)}–${fmt12(s.timeEnd)}`;
}

function renderDashboardConflictListBody(schedulesToCheck) {
  let list = getDashboardConflictList(schedulesToCheck);
  if (!list.length) {
    return `<p class="conflict-modal-empty">No schedule conflicts detected for ${state.currentUser?.role === 'admin' ? 'any department' : 'your department'}.</p>`;
  }
  return `<p class="form-hint conflict-modal-hint">These entries overlap in time with another class (same professor, room, or section). Select one to see details.</p>
    <ul class="conflict-list" role="list">
      ${list
        .map(
          ({ schedule: s, pairs }) =>
            `<li><button type="button" class="conflict-list-item" data-conflict-detail-id="${escapeHtml(s.id)}"><span class="conflict-list-item-title">${renderScheduleConflictSummaryLine(s)}</span><span class="conflict-list-item-meta">${pairs.length} overlapping class(es)</span></button></li>`,
        )
        .join('')}
    </ul>`;
}

function renderDashboardConflictDetailBody(scheduleId) {
  let s = state.schedules.find(x => x.id === scheduleId);
  if (!s) return `<p class="conflict-modal-empty">Schedule not found.</p>`;
  let pairs = getConflictPairsForSchedule(s);
  if (!pairs.length) {
    return `<p class="conflict-modal-empty">This schedule no longer has conflicts.</p>`;
  }
  let sub = getSubject(s.subjectId);
  let primary = `<div class="conflict-detail-primary"><div class="conflict-detail-section-title">This schedule</div><div class="conflict-detail-card"><strong>${escapeHtml(sub?.code || '—')}</strong> — ${escapeHtml(sub?.name || '')}<div class="conflict-detail-meta">${escapeHtml(s.section || '')} · ${escapeHtml(professorDisplayLine(s))} · ${escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName))}</div><div class="conflict-detail-meta">${(s.days || []).map(d => d.slice(0, 3)).join(', ')} · ${fmt12(s.timeStart)}–${fmt12(s.timeEnd)}</div><button type="button" class="btn btn-outline btn-sm conflict-view-sched-btn" data-conflict-view-sched="${escapeHtml(s.id)}">Open in schedule viewer</button></div></div>`;
  let blocks = pairs
    .map(({ other, messages }) => {
      let os = getSubject(other.subjectId);
      return `<div class="conflict-detail-block"><div class="conflict-detail-section-title">Overlapping class</div><div class="conflict-detail-card"><strong>${escapeHtml(os?.code || '—')}</strong> — ${escapeHtml(os?.name || '')}<div class="conflict-detail-meta">${escapeHtml(other.section || '')} · ${escapeHtml(professorDisplayLine(other))} · ${escapeHtml(roomDisplayLineFromPick(other.roomId, other.roomOtherName))}</div><div class="conflict-detail-meta">${(other.days || []).map(d => d.slice(0, 3)).join(', ')} · ${fmt12(other.timeStart)}–${fmt12(other.timeEnd)}</div><ul class="conflict-reason-list">${messages.map(m => `<li>${escapeHtml(m)}</li>`).join('')}</ul><button type="button" class="btn btn-outline btn-sm conflict-view-sched-btn" data-conflict-view-sched="${escapeHtml(other.id)}">Open in schedule viewer</button></div></div>`;
    })
    .join('');
  return primary + blocks;
}

// Render
function ensureAuth() {
  if (state.loggedIn) return true;
  let userData = sessionStorage.getItem('cen_user');
  if (userData) {
    state.currentUser = JSON.parse(userData);
    state.loggedIn = true;
    return true;
  }
  window.location.href = 'login.html';
  return false;
}

function render() {
  let app=document.getElementById('app');
  if(!ensureAuth()) return;
  if (state.page !== 'accounts') {
    state.pendingAccountsUi = null;
  } else if (state.currentUser?.role === 'admin' && hasSupabaseClient() && !state.pendingAccountsUi) {
    state.pendingAccountsUi = { phase: 'loading', rows: [] };
    let gen = ++__cenPendingAccountsFetchGen;
    (async () => {
      let { data: sessWrap } = await window.cenSupabase.auth.getSession();
      let session = sessWrap?.session;
      if (gen !== __cenPendingAccountsFetchGen || state.page !== 'accounts') return;
      if (!session) {
        let localRows = loadPendingAccounts().map(p => ({
          email: String(p?.email || '').trim().toLowerCase(),
          name: String(p?.name || '').trim() || 'Google User',
          provider: p?.provider || 'google',
          createdAt: p?.createdAt,
        }));
        state.pendingAccountsUi = {
          phase: 'ready',
          rows: localRows,
          cloudAuth: false,
        };
        render();
        return;
      }
      let { data, error } = await window.cenSupabase
        .from('pending_accounts')
        .select('email,name,provider,created_at')
        .order('created_at', { ascending: true });
      if (gen !== __cenPendingAccountsFetchGen || state.page !== 'accounts') return;
      if (error) {
        state.pendingAccountsUi = { phase: 'error', rows: [], errorMessage: error.message };
      } else {
        state.pendingAccountsUi = {
          phase: 'ready',
          rows: (data || []).map(row => ({
            email: String(row.email || '').trim().toLowerCase(),
            name: String(row.name || '').trim() || 'Google User',
            provider: row.provider || 'google',
            createdAt: row.created_at,
          })),
          cloudAuth: true,
        };
      }
      render();
    })();
  }
  if (!cenHydratedThisLoad) {
    if (!hasSupabaseClient()) {
      hydratePersistedData();
      mergeDefaultRequestsIntoState();
    }
    cenHydratedThisLoad = true;
  }
  normalizeCurriculumAdminDeptFilter();
  app.innerHTML=`
    <div class="app">
      <div class="sidebar ${state.sidebarOpen?'open':''}" id="sidebar">${renderSidebar()}</div>
      <div class="overlay ${state.sidebarOpen?'show':''}" id="overlay"></div>
      <div class="main">
        <div class="topbar"><span class="hamburger" id="hamburger" role="button" tabindex="0" aria-label="Open menu">${icon('menu', 22)}</span>${renderTopbarCenter()}<div class="topbar-actions"><button type="button" class="btn btn-outline btn-sm theme-toggle" id="themeToggleBtn" aria-label="${document.documentElement.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}">${document.documentElement.dataset.theme === 'dark' ? icon('sun', 18) : icon('moon', 18)}</button>${state.page==='section'&&(state.currentUser?.role==='chairperson'||state.currentUser?.role==='admin')?`<button type="button" class="btn btn-primary btn-sm btn-schedule-add-pill" id="addSectionBtn">${icon('plus', 16)} Add Section</button>`:''}${state.page==='room'&&(state.currentUser?.role==='chairperson'||state.currentUser?.role==='admin')?`<button type="button" class="btn btn-primary btn-sm btn-schedule-add-pill" id="addRoomBtn">${icon('plus', 16)} Add Room</button>`:''}${state.page==='schedule'&&state.currentUser?.role!=='admin'?`<button type="button" class="btn btn-schedule-clear-all btn-sm" id="clearAllSchedulesBtn">Clear All</button><button type="button" class="btn btn-primary btn-sm btn-schedule-add-pill" id="addSchedBtn">${icon('plus', 16)} Add Schedule</button>`:''}${state.page==='curriculum'&&(state.currentUser?.role==='chairperson'||state.currentUser?.role==='admin')?`<button type="button" class="btn btn-outline btn-sm curriculum-export-btn" id="curriculumExportBtn">${icon('fileText', 16)} Export</button><button type="button" class="btn btn-primary btn-sm" id="addCurriculumBtn">${icon('plus', 16)} Add Subject</button>`:''}${state.page==='requests'&&state.currentUser?.role==='chairperson'?`<button class="btn btn-primary btn-sm" id="requestRoomTopBtn">${icon('plus', 16)} Create a Request</button>`:''}${state.page==='faculty'&&state.currentUser?.role==='admin'?`<button type="button" class="btn btn-primary btn-sm btn-schedule-add-pill" id="addProfBtn">${icon('plus', 16)} Add Professor</button>`:''}</div></div>
        <div class="content">${renderPage()}</div>
      </div>
    </div>
    ${state.modal?renderModal():''}
    ${state.toast?`<div class="toast success">${icon('check', 18)} ${escapeHtml(state.toast)}</div>`:''}
  `;
  bindGlobal();
  bindPage();
  persistAppData();
  scrollToHashFragmentIfAny();
}

/** After SPA render, scroll to element matching location.hash (e.g. dashboard links to #incoming-requests). */
function scrollToHashFragmentIfAny() {
  try {
    let raw = typeof location !== 'undefined' && location.hash ? location.hash.slice(1) : '';
    if (!raw) return;
    let id = decodeURIComponent(raw);
    requestAnimationFrame(() => {
      let el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  } catch (e) {
    /* ignore */
  }
}

function getPageTitle() {
  let titles={dashboard:'Dashboard',schedule:'Timetable Schedule',requests:'Room Requests',curriculum:'Curriculum',section:'Section',room:'Room',forms:'Forms',faculty:'Faculty',accounts:'Accounts',account:'My Account'};
  return titles[state.page]||'Dashboard';
}

function renderSidebar() {
  let u = state.currentUser;
  let pendingIn = pendingRequestsForUser();
  let roleLabel = u.role === 'admin' ? 'CEN Dean' : getDept(u.dept)?.code + ' Chair' || '';
  let facultyNote = currentUserFacultyNote(u);
  let facultyNoteLine = facultyNote
    ? `<div class="user-note" title="${escapeHtml(facultyNote)}">📌 ${escapeHtml(facultyNote)}</div>`
    : '';
  let nav = (id, icn, label, extra = '') =>
    `<a href="${pageHref(id)}" class="nav-item ${state.page === id ? 'active' : ''}" ${id === 'requests' && pendingIn && (u?.role === 'chairperson' || u?.role === 'admin') ? `title="${pendingIn} pending room request(s)"` : ''}><span class="nav-icon">${icon(icn, 18)}</span>${label}${extra}</a>`;
  let curriculumNav = (u.role === 'admin' || u.role === 'chairperson') ? nav('curriculum', 'book', 'Curriculum') : '';
  let isUtilitiesOpen = !!state.utilitiesNavOpen;
  let utilitiesNav = u.role === 'admin'
    ? `
      <a href="#" id="utilitiesNavToggle" class="nav-item ${state.page === 'section' || state.page === 'room' ? 'active' : ''}" aria-expanded="${isUtilitiesOpen ? 'true' : 'false'}" aria-label="Records">
        <span class="nav-icon">${icon('settings', 18)}</span>Records
        <span style="margin-left:auto;font-weight:700;display:inline-block;transform:${isUtilitiesOpen ? 'rotate(90deg)' : 'none'};transform-origin:center;">&gt;</span>
      </a>
      ${isUtilitiesOpen ? `
      <a href="${pageHref('section')}#section" class="nav-item ${state.page === 'section' ? 'active' : ''}" style="padding-left:42px;">Section</a>
      <a href="${pageHref('room')}#room" class="nav-item ${state.page === 'room' ? 'active' : ''}" style="padding-left:42px;">Room</a>
      ` : ''}
    `
    : '';
  let requestsExtra = '';
  if ((u?.role === 'chairperson' || u?.role === 'admin') && pendingIn > 0) {
    requestsExtra = `<span class="badge nav-requests-badge" aria-label="${pendingIn} pending room requests">${pendingIn}</span>`;
  }
  return `
    <a href="${pageHref('dashboard')}" class="sidebar-logo" aria-label="CEN Timetable — Home">
      <img src="assets/cen_logo.png" alt="" class="sidebar-logo-img" width="40" height="40" decoding="async">
      <div class="logo-text">Academic Scheduling<span>College of Engineering</span></div>
    </a>
    <div class="sidebar-nav">
      <div class="nav-section-label">Navigation</div>
      ${nav('dashboard','home','Dashboard')}
      ${nav('schedule','calendar','Schedule')}
      ${u.role === 'chairperson' || u.role === 'admin' ? nav('requests', 'refresh', 'Requests', requestsExtra) : ''}
      ${u.role === 'chairperson' ? `<a href="${pageHref('forms')}#forms" class="nav-item ${state.page === 'forms' ? 'active' : ''}"><span class="nav-icon">${icon('fileText', 18)}</span>Forms</a>` : ''}
      <div class="nav-section-label" style="margin-top:8px">Manage</div>
      ${utilitiesNav}
      ${curriculumNav}
      ${u.role==='admin'?nav('faculty','users','Faculty'):''}
      ${u.role==='admin'?nav('accounts','settings','Accounts'):''}
      ${u.role==='chairperson'?nav('account','user','My Account'):''}
    </div>
    <div class="sidebar-user"><div class="user-avatar">${u.initials}</div><div class="user-info"><div class="user-name">${u.name.split(' ').slice(0,3).join(' ')}</div><div class="user-role">${roleLabel}</div>${facultyNoteLine}</div><span class="logout-btn" id="logoutBtn" role="button" tabindex="0" title="Log out" aria-label="Log out">${icon('logOut', 18)}</span></div>
  `;
}

function renderPage() {
  switch(state.page){
    case 'dashboard': return renderDashboard();
    case 'schedule': return renderSchedulePage();
    case 'requests': return renderRequests();
    case 'curriculum': return renderCurriculum();
    case 'section': return renderSectionPage();
    case 'room': return renderRoomPage();
    case 'forms': return renderFormsPage();
    case 'faculty': return renderFaculty();
    case 'accounts': return renderAccounts();
    case 'account': return renderMyAccount();
    default: return renderDashboard();
  }
}

function renderDashboard() {
  let u = state.currentUser;
  kickDashboardSummaryAutoSync();
  let term = currentTermFilter();
  let myScheds = (u.role === 'admin' ? state.schedules : state.schedules.filter(s => scheduleVisibleToChairScope(s, u.dept)))
    .filter(s => scheduleMatchesCurrentTerm(s, term));
  let schedsForConflicts = myScheds;
  let conflictCount = countSchedulesWithConflicts(schedsForConflicts);
  let roomCount = ROOMS.filter(r => u.role === 'admin' || r.dept === u.dept).length;
  let pendingCount = u.role === 'admin'
    ? 0
    : state.requests.filter(r =>
      requestMatchesCurrentTerm(r, term) &&
      isPendingRequestStatus(r.status) &&
      r.toDept === u.dept,
    ).length;
  let statIc = 'stat-icon dashboard-stat-icon';
  let summaryDayList = dashboardSummaryDayOptionsForUser(u);
  let summaryDay = state.dashboardSummaryDay || 'Monday';
  if (!summaryDayList.includes(summaryDay)) summaryDay = 'Monday';
  let summaryScheds = dashboardScheduleSummarySchedules();
  // If the selected day has no classes, auto-pick the first day in this term that has data.
  let hasDataOnSelectedDay = summaryScheds.some(s => Array.isArray(s.days) && s.days.includes(summaryDay));
  if (!hasDataOnSelectedDay) {
    let firstDayWithData = summaryDayList.find(d => summaryScheds.some(s => Array.isArray(s.days) && s.days.includes(d)));
    if (firstDayWithData) summaryDay = firstDayWithData;
  }
  state.dashboardSummaryDay = summaryDay;
  let dayOpts = summaryDayList.map(
    d => `<option value="${escapeHtml(d)}" ${summaryDay === d ? 'selected' : ''}>${escapeHtml(d)}</option>`,
  ).join('');
  let summaryGrid = renderDashboardRoomSummaryGrid(summaryScheds, summaryDay);
  let dashboardTermPickers = `<div class="topbar-term-controls dashboard-summary-term-controls">${renderTopbarTermPickersMarkup()}</div>`;
  let summaryHint = '';
  let nAllSched = state.schedules.length;
  let nInTerm = summaryScheds.length;
  let nOnSelectedDay = summaryScheds.filter(s => Array.isArray(s.days) && s.days.includes(summaryDay)).length;
  if (nAllSched > 0 && nInTerm === 0) {
    summaryHint = `<p class="form-hint dashboard-summary-hint" role="status">No classes match the current <strong>Semester</strong> and <strong>Academic Year</strong> in the Schedule Summary header. Timetable data may use a different term — change those controls so they match the entries on the Schedule page.</p>`;
  } else if (nInTerm > 0 && nOnSelectedDay === 0) {
    summaryHint = `<p class="form-hint dashboard-summary-hint" role="status">No classes on <strong>${escapeHtml(summaryDay)}</strong> for this term. Choose another day in the list above.</p>`;
  } else if (nAllSched === 0) {
    summaryHint = `<p class="form-hint dashboard-summary-hint" role="status">There are no class schedules in the database yet. Add or import rows on the <a href="${pageHref('schedule')}">Schedule</a> page (or check your connection if you use the cloud database).</p>`;
  }
  return `
    <div class="stats-grid">
      <button type="button" class="stat-card stat-card--clickable" id="dashboardConflictsBtn" aria-label="View list of schedule conflicts">
        <div class="${statIc}">${icon('alertTriangle', 24)}</div><div><div class="stat-num">${conflictCount}</div><div class="stat-label">Conflicts</div></div>
      </button>
      <a href="${pageHref('schedule')}#schedule-timetable" class="stat-card stat-card--clickable" aria-label="Open program timetable (schedule)">
        <div class="${statIc}">${icon('building', 24)}</div><div><div class="stat-num">${roomCount}</div><div class="stat-label">Available Rooms</div></div>
      </a>
      <a href="${pageHref('requests')}#incoming-requests" class="stat-card stat-card--clickable" aria-label="Open room requests — pending incoming">
        <div class="${statIc}">${icon('inbox', 24)}</div><div><div class="stat-num">${pendingCount}</div><div class="stat-label">Pending Requests</div></div>
      </a>
    </div>
    <div class="card dashboard-summary-card">
      <div class="card-header dashboard-summary-card-header">
        <div class="card-title card-title-with-icon">${icon('calendar', 18)} Schedule Summary</div>
        ${dashboardTermPickers}
        <div class="dashboard-summary-header-right">
          <select class="filter-select dashboard-summary-day-select" id="dashboardSummaryDay" aria-label="Schedule summary day">${dayOpts}</select>
          <a href="${pageHref('schedule')}" class="btn btn-outline btn-sm dashboard-summary-view-all-btn">View All</a>
        </div>
      </div>
      ${summaryHint}
      <div class="table-wrap dashboard-summary-wrap">${summaryGrid}</div>
    </div>
  `;
}

function normalizeScheduleFilters() {
  let u = state.currentUser;
  if (!u) return;
  let deptIds = DEPARTMENTS.map(d => d.id);
  if (u.role === 'chairperson' && state.filterMode === 'department') state.filterMode = 'section';
  if (u.role !== 'admin') state.filterDept = u.dept;
  else if (state.filterDept === 'all' || !deptIds.includes(state.filterDept)) state.filterDept = deptIds[0];

  let roomsSource = roomsSourceForApp();

  /** Admin By Room: rooms for selected program only. Otherwise all rooms (admin) or chair dept. */
  let roomsScope =
    u.role === 'admin' && state.filterMode === 'room'
      ? roomsSource.filter(r => r.dept === state.filterDept)
      : u.role === 'admin'
        ? roomsSource
        : roomsSource.filter(r => r.dept === u.dept);
  let roomScopeIds = roomsScope.map(r => r.id);
  if (state.filterRoom === 'all' || state.filterRoom === '' || !roomScopeIds.includes(state.filterRoom)) {
    state.filterRoom = roomScopeIds[0] || state.filterRoom;
  }

  /** Admin By Faculty: faculty for selected program only. Otherwise all professors (admin) or chair dept. */
  let profScope =
    u.role === 'admin' && state.filterMode === 'faculty'
      ? state.professors.filter(p => p.dept === state.filterDept)
      : u.role === 'admin'
        ? state.professors
        : state.professors.filter(p => p.dept === u.dept);
  let profScopeIds = profScope.map(p => p.id);
  if (u.role === 'admin' && state.filterMode === 'faculty') {
    if (state.filterFaculty !== 'all' && (!state.filterFaculty || !profScopeIds.includes(state.filterFaculty))) {
      state.filterFaculty = profScopeIds[0] || '';
    }
  } else if (state.filterFaculty === 'all' || state.filterFaculty === '' || !profScopeIds.includes(state.filterFaculty)) {
    state.filterFaculty = profScopeIds[0] || state.filterFaculty;
  }

  let sectionScope = (u.role === 'admin' && state.filterMode === 'department')
    ? [state.filterDept]
    : [u.dept];
  let secOpts = mergeSectionOptions(sectionScope, sectionScope.length === 1 && sectionScope[0] ? { programMatchDept: sectionScope[0] } : {});
  if (state.filterSection === 'all' || state.filterSection === '' || !secOpts.includes(state.filterSection)) {
    state.filterSection = secOpts[0] || state.filterSection;
  }
}

/**
 * Chair scope for Schedule page:
 * - own department rows are always visible
 * - include cross-dept borrow rows when the section label belongs to the chair's program
 *   (e.g. BSIE section scheduled in an EE room after request approval).
 */
function scheduleVisibleToChairScope(s, chairDept) {
  if (!s || !chairDept) return false;
  if (s.dept === chairDept) return true;
  return deptFromSectionLabel(s.section) === chairDept;
}

function renderSchedulePage() {
  let u = state.currentUser;
  normalizeScheduleFilters();
  let isChair = u.role === 'chairperson';
  let isAdmin = u.role === 'admin';
  let profOptions = (isAdmin ? state.professors : state.professors.filter(p => p.dept === u.dept)).slice().sort((a, b) => a.name.localeCompare(b.name));
  let profOptionsForToolbar = isAdmin && state.filterMode === 'faculty' ? profOptions.filter(p => p.dept === state.filterDept) : profOptions;
  let termSem = state.termSemester || '1st Semester';
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let scheds =
    u.role === 'admin' || state.filterMode === 'room' || state.filterMode === 'faculty'
      ? state.schedules
      : state.schedules.filter(s => scheduleVisibleToChairScope(s, u.dept));
  scheds = scheds.filter(s =>
    (s.schSem || '').trim() === termSem &&
    (normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) === termAy,
  );
  if (state.filterMode === 'faculty') {
    if (u.role === 'admin' && state.filterFaculty === 'all') {
      let idSet = new Set(profOptionsForToolbar.map(p => p.id));
      scheds = scheds.filter(s => {
        if (s.professorId === PROFESSOR_OTHER_ID) return s.dept === state.filterDept;
        return idSet.has(s.professorId);
      });
    } else {
      scheds = scheds.filter(s => s.professorId === state.filterFaculty);
    }
  } else if (state.filterMode === 'room') scheds = scheds.filter(s => scheduleMatchesRoomFilter(s, state.filterRoom));
  else if (state.filterMode === 'department' && u.role === 'admin') {
    scheds = scheds.filter(s => s.dept === state.filterDept && s.section === state.filterSection);
  } else if (state.filterMode === 'section' && u.role === 'chairperson') {
    scheds = scheds.filter(s => s.section === state.filterSection);
  }
  let pendingPseudos = pendingPseudoSchedulesForUserScope(u, { sem: termSem, ay: termAy });
  pendingPseudos = filterPseudoSchedulesForScheduleToolbar(pendingPseudos, u, isAdmin, isChair, profOptionsForToolbar);
  scheds = [...scheds, ...pendingPseudos];
  let sectionScope = (u.role === 'admin' && state.filterMode === 'department')
    ? [state.filterDept]
    : [u.dept];
  let sections = mergeSectionOptions(sectionScope, sectionScope.length === 1 && sectionScope[0] ? { programMatchDept: sectionScope[0] } : {});
  let deptOptions = isAdmin ? DEPARTMENTS : DEPARTMENTS.filter(d => d.id === u.dept);
  let roomsSrc = roomsSourceForApp();
  let roomOptions = (isAdmin ? roomsSrc : roomsSrc.filter(r => r.dept === u.dept)).slice().sort((a, b) => a.name.localeCompare(b.name));
  let roomOptionsForToolbar = isAdmin && state.filterMode === 'room' ? roomOptions.filter(r => r.dept === state.filterDept) : roomOptions;
  let deptSelectHtml = `<select class="filter-select" id="filterDept" aria-label="Program">${deptOptions.map(d => `<option value="${d.id}" ${state.filterDept === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('')}</select>`;
  let sectionSelectHtml = `<select class="filter-select" id="filterSection" aria-label="Section">${sections.map(s => `<option value="${escapeHtml(s)}" ${state.filterSection === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('')}</select>`;
  let filterTabs = isChair
    ? `<div class="filter-tabs"><div class="filter-tab ${state.filterMode === 'section' ? 'active' : ''}" data-filter="section">By Section</div><div class="filter-tab ${state.filterMode === 'faculty' ? 'active' : ''}" data-filter="faculty">By Faculty</div><div class="filter-tab ${state.filterMode === 'room' ? 'active' : ''}" data-filter="room">By Room</div></div>`
    : `<div class="filter-tabs"><div class="filter-tab ${state.filterMode === 'department' ? 'active' : ''}" data-filter="department">By Dept</div><div class="filter-tab ${state.filterMode === 'faculty' ? 'active' : ''}" data-filter="faculty">By Faculty</div><div class="filter-tab ${state.filterMode === 'room' ? 'active' : ''}" data-filter="room">By Room</div></div>`;
  let filtersRow = '';
  if (!isChair && state.filterMode === 'department') filtersRow = `${deptSelectHtml}${sectionSelectHtml}`;
  else if (isChair && state.filterMode === 'section') filtersRow = sectionSelectHtml;
  else if (state.filterMode === 'faculty') {
    let facAllOpt = isAdmin
      ? `<option value="all" ${state.filterFaculty === 'all' ? 'selected' : ''}>All Professors</option>`
      : '';
    let facSelect = `<select class="filter-select" id="filterFaculty" aria-label="Faculty">${facAllOpt}${profOptionsForToolbar.map(p => `<option value="${escapeHtml(p.id)}" ${state.filterFaculty === p.id ? 'selected' : ''}>${escapeHtml(p.name)}${isAdmin ? '' : ` (${escapeHtml(getDept(p.dept)?.code || '')})`}</option>`).join('')}</select>`;
    filtersRow = isAdmin ? `${deptSelectHtml}${facSelect}` : facSelect;
  } else if (state.filterMode === 'room') {
    let roomSelect = `<select class="filter-select" id="filterRoom" aria-label="Room">${roomOptionsForToolbar.map(r => `<option value="${escapeHtml(r.id)}" ${state.filterRoom === r.id ? 'selected' : ''}>${escapeHtml(r.name)}${isAdmin ? '' : ` (${escapeHtml(getDept(r.dept)?.code || '')})`}</option>`).join('')}</select>`;
    filtersRow = isAdmin ? `${deptSelectHtml}${roomSelect}` : roomSelect;
  }
  let printRoomTitleAttr = '';
  if (state.filterMode === 'room') {
    let selectedRoom = getRoom(state.filterRoom);
    let label = selectedRoom?.name || roomDisplayLineFromPick(state.filterRoom, '');
    if (label) printRoomTitleAttr = ` data-print-title="${escapeHtml(label)}"`;
  }
  let timetableGridOpts = { cellLayout: scheduleGridCellLayout() };
  if (state.filterMode === 'room') {
    timetableGridOpts.timetableDays = timetableDayColumnsForSchedules(scheds, state.filterDept);
  } else {
    timetableGridOpts.timetableDays = timetableDayColumnsForDept(timetableGridDeptForSchedulePage(u));
  }
  return `
    <div class="timetable-wrap" id="schedule-timetable">
      <div class="timetable-toolbar">
        ${filterTabs}
        ${filtersRow}
        <div class="timetable-toolbar-actions">
          <div class="export-menu-wrap">
            <button class="btn btn-outline btn-sm" id="exportBtn" aria-haspopup="true" aria-expanded="false">${icon('fileText', 16)} Export</button>
            <div class="export-menu" id="exportMenu" hidden>
              <button type="button" class="export-menu-item" data-export-format="excel">Excel (.xls)</button>
              <button type="button" class="export-menu-item" data-export-format="csv">CSV (.csv)</button>
              <button type="button" class="export-menu-item" data-export-format="pdf">PDF</button>
            </div>
          </div>
          <button class="btn btn-outline btn-sm" id="printBtn">${icon('printer', 16)} Print</button>
        </div>
      </div>
      <div class="timetable-scroll" id="printArea"${printRoomTitleAttr}>${renderTimetableGrid(scheds, timetableGridOpts)}</div>
    </div>
  `;
}

/** Cell lines for main timetable: By Section / By Dept, By Faculty, By Room. */
function scheduleGridCellLayout() {
  if (state.filterMode === 'faculty') return 'faculty';
  if (state.filterMode === 'room') return 'room';
  return 'section';
}

function buildScheduleCellInnerHtml(s, sub, cellLayout, innerStyleOverride, verticalAlignClass = '') {
  let roomLine = escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName));
  let subLine = escapeHtml(sub?.code || '—');
  let profLine = escapeHtml(professorDisplayLine(s));
  let sectionLine = escapeHtml(s.section || '—');
  let timeLine = `${escapeHtml(fmt12(s.timeStart || ''))}–${escapeHtml(fmt12(s.timeEnd || ''))}`;
  let setLine = s.setLabel ? escapeHtml(s.setLabel) : '';
  let subStyle = innerStyleOverride?.subStyle || 'font-weight: 700; font-size: 12px; color: var(--chip-text-primary);';
  let lineStyle = innerStyleOverride?.lineStyle || 'font-size: 11px; color: var(--chip-text-secondary);';
  let parts = [`<div style="${subStyle}">${subLine}</div>`];
  if (cellLayout === 'faculty') {
    parts.push(`<div style="${lineStyle}">${sectionLine}</div>`);
    parts.push(`<div style="${lineStyle}">${timeLine}</div>`);
    if (setLine) parts.push(`<div style="${lineStyle}">${setLine}</div>`);
    parts.push(`<div style="${lineStyle}">${roomLine}</div>`);
  } else if (cellLayout === 'room') {
    parts.push(`<div style="${lineStyle}">${sectionLine}</div>`);
    parts.push(`<div style="${lineStyle}">${timeLine}</div>`);
    if (setLine) parts.push(`<div style="${lineStyle}">${setLine}</div>`);
    parts.push(`<div style="${lineStyle}">${profLine}</div>`);
  } else {
    parts.push(`<div style="${lineStyle}">${timeLine}</div>`);
    if (setLine) parts.push(`<div style="${lineStyle}">${setLine}</div>`);
    parts.push(`<div style="${lineStyle}">${roomLine}</div>`);
    parts.push(`<div style="${lineStyle}">${profLine}</div>`);
  }
  const extraClass = verticalAlignClass ? ` ${verticalAlignClass}` : '';
  return `<div class="tt-cell-lines${extraClass}">${parts.join('')}</div>`;
}

function renderTimetableGrid(scheds, gridOpts) {
  gridOpts = gridOpts || {};
  let cellLayout = gridOpts.cellLayout || 'section';
  let requestView = !!gridOpts.requestView;
  let requestCellClick = requestView && gridOpts.requestCellClick !== false;
  let requestBusyClickable = requestView && gridOpts.requestBusyClickable === true;
  // Hard-limit timetable to exactly Monday-Saturday to prevent stray extra columns.
  const FIXED_TIMETABLE_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let dayCols = FIXED_TIMETABLE_DAYS;
  let { conflictSinceById, conflictIds } = syncConflictHighlightsAndIds();
  let emptyTitle = requestView
    ? (requestCellClick
      ? (d0, d1) => `Available — click to request a room (${d0}–${d1})`
      : (d0, d1) => `Available (${d0}–${d1})`)
    : (d0, d1) => `Click to add schedule (${d0}–${d1})`;
  // Create a 2D array for the grid (rows x columns)
  const rows = timeSlots.length;
  const cols = dayCols.length;
  
  // Initialize empty grid cells
  let grid = Array(rows).fill().map(() => Array(cols).fill(null));
  
  // Place schedules into grid
  scheds.forEach(s => {
    const startRow = timeToRow(s.timeStart);
    const sub = getSubject(s.subjectId);

    (Array.isArray(s.days) ? s.days : []).forEach(rawDay => {
      const day = String(rawDay || '').trim();
      const col = dayCols.indexOf(day);
      if (col >= 0 && startRow >= 0) {
        const rawDuration = timeDurationForTimetableGridDisplay(s, day, scheds);
        // Keep rowspan inside table bounds so malformed/legacy times cannot create phantom columns.
        const duration = Math.max(1, Math.min(rawDuration, rows - startRow));
        grid[startRow][col] = { schedule: s, sub, duration };
      }
    });
  });
  
  // Build HTML table (more reliable than CSS Grid for timetable)
  // Use separate borders so row boundaries do not render through rowspan cells
  // when back-to-back classes share the same boundary time (e.g. 2:30 end/start).
  // Keep the schedule table at its real column width (Time + Monday-Saturday only)
  // so no stretched blank area appears like an extra column.
  let html = '<table class="timetable-table timetable-schedule" style="width:max-content;border-collapse:separate;border-spacing:0;">';
  
  // Header row
  html += '<thead><tr>';
  html += '<th class="timetable-time-col timetable-time-col-header">Time</th>';
  dayCols.forEach(day => {
    html += `<th style="padding: 10px; border: 1px solid var(--border-ui); background: var(--table-header-bg);">${day}</th>`;
  });
  html += '</tr></thead><tbody>';
  
  // Time rows: 7:30 AM … 9:00 PM (last row marks day close; bookable slots end at 8:30 start / 9:00 end)
  // Track active rowspans per column to keep every row perfectly aligned.
  let activeRowspans = Array(cols).fill(0);
  for (let row = 0; row < rows; row++) {
    const time = timeSlots[row];
    const isDayCloseRow = time === TIMETABLE_DAY_CLOSE;
    html += '<tr>';
    html += `<td class="timetable-time-col">${fmt12(time)}</td>`;
    
    for (let col = 0; col < cols; col++) {
      if (activeRowspans[col] > 0) {
        activeRowspans[col] -= 1;
        continue;
      }
      if (isDayCloseRow) {
        html += '<td class="timetable-slot-day-close" style="padding: 4px; border: 1px solid var(--border-ui); background: var(--table-header-bg); opacity: 0.55;" title=""></td>';
        continue;
      }
      const cell = grid[row][col];
      if (cell && row === timeToRow(cell.schedule.timeStart)) {
        const s = cell.schedule;
        const sub = cell.sub;
        const rowspan = cell.duration;
        if (rowspan > 1) activeRowspans[col] = rowspan - 1;
        const chrome = timetableSlotChrome(s, conflictSinceById, conflictIds);
        const bg = chrome.bg;
        const border = chrome.border;
        const bl = chrome.borderLeftWidth || 3;
        const hasPrevAdjacent = hasScheduleEndingAtOnDay(scheds, dayCols[col], s.timeStart, s.id);
        const hasNextAdjacent = hasScheduleStartingAtOnDay(scheds, dayCols[col], s.timeEnd, s.id);
        // When classes are back-to-back on the same day, visually stitch blocks so they
        // look like one continuous lane (no overlap seam at the shared boundary time).
        const joinBorderStyle = `${hasPrevAdjacent ? 'border-top-color:transparent;' : ''}${hasNextAdjacent ? 'border-bottom-color:transparent;' : ''}`;
        const splitLineStyle = '';
        const splitLineOverlay = '';
        const radiusStyle = `border-top-left-radius:${hasPrevAdjacent ? 0 : 6}px;border-top-right-radius:${hasPrevAdjacent ? 0 : 6}px;border-bottom-left-radius:${hasNextAdjacent ? 0 : 6}px;border-bottom-right-radius:${hasNextAdjacent ? 0 : 6}px;`;
        const seamBridgeParts = [];
        if (hasNextAdjacent) seamBridgeParts.push(`0 30px 0 0 ${bg}`);
        const seamBridgeStyle = seamBridgeParts.length ? `box-shadow:${seamBridgeParts.join(',')};` : '';
        const textAlignClass = hasPrevAdjacent ? 'tt-cell-lines--top' : (hasNextAdjacent ? 'tt-cell-lines--bottom' : '');
        const timeRangeLabel = `${fmt12(s.timeStart || '')}–${fmt12(s.timeEnd || '')}`;
        let busyTitle = `Click for details (${timeRangeLabel})`;
        if (chrome.slotKind === 'conflict') busyTitle = 'Conflict — click for details';
        else if (chrome.slotKind === 'request') busyTitle = 'Borrow request — click for details';
        let useClickableBusyCell = !requestView || requestBusyClickable;
        const dataPal = ` data-tt-fill="${escapeHtml(chrome.bg)}" data-tt-border="${escapeHtml(chrome.border)}"`;
        let tdOpen = useClickableBusyCell
          ? `<td rowspan="${rowspan}" data-schedid="${escapeHtml(s.id)}"${dataPal} title="${escapeHtml(busyTitle)}" style="cursor:pointer; padding:${hasPrevAdjacent ? '2px 6px 6px 6px' : (hasNextAdjacent ? '6px 6px 2px 6px' : '6px')}; border: 1px solid var(--border-ui); background: ${bg}; border-left: ${bl}px solid ${border};${joinBorderStyle}${splitLineStyle}${radiusStyle}${seamBridgeStyle}">`
          : `<td rowspan="${rowspan}" class="timetable-slot-busy"${dataPal} title="" style="cursor:default; padding:${hasPrevAdjacent ? '2px 6px 6px 6px' : (hasNextAdjacent ? '6px 6px 2px 6px' : '6px')}; border: 1px solid var(--border-ui); background: ${bg}; border-left: ${bl}px solid ${border};${joinBorderStyle}${splitLineStyle}${radiusStyle}${seamBridgeStyle}">`;
        html += tdOpen;
        html += splitLineOverlay;
        html += buildScheduleCellInnerHtml(s, sub, cellLayout, chrome.innerStyles, textAlignClass);
        html += `</td>`;
      } else {
        const dayName = dayCols[col];
        const tStart = timeSlots[row];
        const tEnd = slotEndFromRow(row);
        let emptyExtraClass = requestView && !requestCellClick ? ' timetable-slot-readonly' : '';
        let emptyCursor = requestView && !requestCellClick ? 'default' : 'pointer';
        html += `<td class="timetable-slot-empty${emptyExtraClass}" data-slot-day="${dayName}" data-slot-start="${tStart}" data-slot-end="${tEnd}" title="${escapeHtml(emptyTitle(fmt12(tStart), fmt12(tEnd)))}" style="cursor:${emptyCursor}; padding: 8px; border: 1px solid var(--border-ui); background: var(--surface); min-height: 28px;"></td>`;
      }
    }
    html += '</tr>';
  }
  
  html += '</tbody></table>';
  
  // Add some CSS for the table
  const style = document.createElement('style');
  if (!document.querySelector('#timetable-table-style-v2')) {
    document.querySelector('#timetable-table-style')?.remove();
    style.id = 'timetable-table-style-v2';
    style.textContent = `
      .timetable-schedule .timetable-time-col,
      .timetable-schedule .timetable-time-col-header {
        text-align: center;
        vertical-align: middle;
        width: 104px;
        padding: 8px 6px;
        border: 1px solid var(--border-ui);
        background: var(--table-header-bg);
        font-family: inherit;
        font-size: 11px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        color: var(--text-primary);
        white-space: nowrap;
      }
      .timetable-schedule tbody .timetable-time-col { background: var(--surface); }
      .timetable-table td, .timetable-table th {
        vertical-align: top;
      }
      .timetable-schedule .timetable-time-col { vertical-align: middle !important; }
      .timetable-table td {
        min-width: 100px;
      }
      .timetable-table td[data-schedid],
      .timetable-table td.timetable-slot-busy {
        border-radius: 6px;
      }
      .timetable-table td[data-schedid]:hover {
        filter: brightness(0.96);
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.06);
      }
      .timetable-table .tt-cell-lines {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2px;
      }
      .timetable-table .tt-cell-lines.tt-cell-lines--top {
        justify-content: flex-start;
      }
      .timetable-table .tt-cell-lines.tt-cell-lines--bottom {
        justify-content: flex-end;
      }
      .timetable-table .tt-cell-lines > div { line-height: 1.2; }
      .timetable-table td.timetable-slot-empty:hover {
        background: var(--blue-light) !important;
        box-shadow: inset 0 0 0 1px rgba(59,130,246,.25);
      }
      .timetable-table td.timetable-slot-readonly:hover {
        background: var(--surface) !important;
        box-shadow: none;
      }
      @media print {
        .timetable-table td, .timetable-table th {
          border-color: #ccc !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  return html;
}

/** All CEN engineering rooms (every program in `DEPARTMENTS`), stable name order. */
function engineeringRoomsForDashboardSummary() {
  let ids = new Set(DEPARTMENTS.map(d => d.id));
  return roomsSourceForApp()
    .filter(r => r && ids.has(r.dept))
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}
/**
 * Room columns for the dashboard Schedule Summary: the full CEN engineering grid plus any
 * catalog room (or legacy id) that appears in the current-term schedules, so no booking is
 * hidden. Same `scheds` + `state.schedules` for every role — everyone sees the college-wide
 * summary when data is synced.
 */
function roomsForDashboardSummary(scheds) {
  const base = engineeringRoomsForDashboardSummary();
  const byId = new Map(base.map(r => [r.id, r]));
  const list = Array.isArray(scheds) ? scheds : [];
  for (const s of list) {
    if (!s || !s.roomId || s.roomId === ROOM_OTHER_ID) continue;
    if (byId.has(s.roomId)) continue;
    const r = getRoom(s.roomId);
    if (r) {
      byId.set(r.id, r);
    } else {
      let short = String(s.roomId);
      if (short.length > 20) short = short.slice(0, 12) + '…';
      byId.set(s.roomId, { id: s.roomId, name: `Unknown room (${short})`, type: 'classroom', dept: '' });
    }
  }
  return Array.from(byId.values()).sort((a, b) =>
    (a.name || '').localeCompare(b.name || '', undefined, { sensitivity: 'base' }),
  );
}
/** Section line for summary cells: "BSCE I GA" style when data uses compact labels. */
function dashboardSummarySectionLine(s) {
  let sec = (s.section || '').trim().toUpperCase();
  if (!sec) return '—';
  let m = sec.match(/^(BSCPE|BSEE|BSCE|BSME|BSECE|BSIE)([IVX]+)([A-Z]+)$/);
  if (m) return `${m[1]} ${m[2]} ${m[3]}`;
  return sec;
}
/** Instructor line: compact uppercase e.g. C.JARABESE */
function dashboardSummaryProfLine(s) {
  if (s.professorId === PROFESSOR_OTHER_ID) return (s.professorOtherName || '—').trim().toUpperCase() || '—';
  let p = getProfessor(s.professorId);
  if (p?.short) return p.short.replace(/\s+/g, '').toUpperCase();
  return (professorDisplayLine(s) || '—').toUpperCase();
}
function buildDashboardSummaryCellInner(s, sub, chrome) {
  let line1 = dashboardSummarySectionLine(s);
  let line2 = sub?.code || '—';
  let line3 = dashboardSummaryProfLine(s);
  let subStyle =
    chrome.innerStyles?.subStyle || 'font-weight:700;font-size:10px;text-align:center;line-height:1.25;color:var(--chip-text-primary, #111);';
  let lineStyle =
    chrome.innerStyles?.lineStyle || 'font-size:10px;text-align:center;line-height:1.25;color:var(--chip-text-secondary, #333);';
  return `<div class="dashboard-summary-cell-inner"><div style="${subStyle}">${escapeHtml(line1)}</div><div style="${lineStyle}">${escapeHtml(line2)}</div><div style="${lineStyle}">${escapeHtml(line3)}</div></div>`;
}
function dashboardSummaryAvailableHoursPerRoom() {
  // 7:30 to 21:00 => 13.5 hours (computed from configured timetable slots).
  return timeSlots.filter(t => t < TIMETABLE_DAY_CLOSE).length * 0.5;
}
function dashboardSummaryRoomUsedHoursForDay(dayScheds, roomId) {
  let total = 0;
  for (let s of dayScheds) {
    if (!s || s.roomId !== roomId) continue;
    let st = parseTimeToMinutes(s.timeStart);
    let en = parseTimeToMinutes(s.timeEnd);
    if (!Number.isFinite(st) || !Number.isFinite(en) || en <= st) continue;
    total += (en - st) / 60;
  }
  return total;
}
function dashboardSummaryRoomUtilClass(pct) {
  if (pct > 85) return 'dashboard-summary-util-high';
  if (pct >= 70) return 'dashboard-summary-util-mid';
  return 'dashboard-summary-util-low';
}
function formatPercent(pct) {
  let x = Number(pct);
  if (!Number.isFinite(x)) return '0%';
  return `${Math.round(x)}%`;
}
/**
 * Room × time grid for dashboard (matches schedule summary layout: TIME / ROOMS header).
 */
function renderDashboardRoomSummaryGrid(scheds, day) {
  let roomList = roomsForDashboardSummary(scheds);
  if (!roomList.length) {
    return '<div class="empty-state">No rooms configured for engineering programs.</div>';
  }
  let { conflictSinceById, conflictIds } = syncConflictHighlightsAndIds();
  let cols = roomList.length;
  let rows = timeSlots.length;
  let grid = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(null));
  let dayScheds = scheds.filter(s => Array.isArray(s.days) && s.days.includes(day) && s.roomId && s.roomId !== ROOM_OTHER_ID);
  dayScheds.forEach(s => {
    let col = roomList.findIndex(r => r.id === s.roomId);
    if (col < 0) return;
    let startRow = timeToRow(s.timeStart);
    let duration = timeDurationForRoomDayGridDisplay(s, day, dayScheds);
    if (startRow < 0 || duration < 1) return;
    if (grid[startRow][col]) return;
    let sub = getSubject(s.subjectId);
    grid[startRow][col] = { schedule: s, sub, duration };
  });
  const availableHours = dashboardSummaryAvailableHoursPerRoom();
  let html = '<table class="dashboard-summary-table"><thead>';
  // Row 1: Utilization % (per room) — must be the first visual row
  html += '<tr class="dashboard-summary-util-header-row">';
  html +=
    '<th scope="row" class="dashboard-summary-corner dashboard-summary-util-label-th">Utilization %</th>';
  for (let col = 0; col < cols; col++) {
    let room = roomList[col];
    let usedHours = dashboardSummaryRoomUsedHoursForDay(dayScheds, room.id);
    let pct = availableHours > 0 ? (usedHours / availableHours) * 100 : 0;
    if (pct < 0) pct = 0;
    if (pct > 100) pct = 100;
    let cls = dashboardSummaryRoomUtilClass(pct);
    let tip = `(${formatHoursValue(usedHours)} hrs in use / ${formatHoursValue(availableHours)} available hrs) × 100`;
    html += `<th scope="col" class="dashboard-summary-util-cell ${cls}" title="${escapeHtml(tip)}">${escapeHtml(formatPercent(pct))}</th>`;
  }
  html += '</tr>';
  // Row 2: TIME / ROOMS + room names
  html += '<tr class="dashboard-summary-rooms-header-row"><th class="dashboard-summary-corner" scope="row">TIME / ROOMS</th>';
  roomList.forEach(r => {
    html += `<th scope="col" class="dashboard-summary-room-th">${escapeHtml(r.name.toUpperCase())}</th>`;
  });
  html += '</tr></thead><tbody>';
  for (let row = 0; row < rows; row++) {
    const time = timeSlots[row];
    const isDayCloseRow = time === TIMETABLE_DAY_CLOSE;
    html += '<tr>';
    html += `<th scope="row" class="dashboard-summary-time-th">${escapeHtml(fmt12(time))}</th>`;
    for (let col = 0; col < cols; col++) {
      if (isDayCloseRow) {
        let isPartOfRowspan = false;
        for (let r = row - 1; r >= 0 && !isPartOfRowspan; r--) {
          const prevCell = grid[r][col];
          if (prevCell && r + prevCell.duration > row) isPartOfRowspan = true;
        }
        if (!isPartOfRowspan) {
          html += '<td class="dashboard-summary-slot-close"></td>';
        }
        continue;
      }
      const cell = grid[row][col];
      if (cell && row === timeToRow(cell.schedule.timeStart)) {
        const s = cell.schedule;
        const sub = cell.sub;
        const rowspan = cell.duration;
        const chrome = timetableSlotChrome(s, conflictSinceById, conflictIds);
        const bg = chrome.bg;
        const border = chrome.border;
        const bl = chrome.borderLeftWidth || 3;
        const dataPal = ` data-tt-fill="${escapeHtml(chrome.bg)}" data-tt-border="${escapeHtml(chrome.border)}"`;
        html += `<td rowspan="${rowspan}" class="dashboard-summary-busy" data-schedid="${escapeHtml(s.id)}"${dataPal} title="View schedule" style="background:${bg};border-left:${bl}px solid ${border};">`;
        html += buildDashboardSummaryCellInner(s, sub, chrome);
        html += '</td>';
      } else if (!cell || row !== timeToRow(cell.schedule.timeStart)) {
        let isPartOfRowspan = false;
        for (let r = row - 1; r >= 0 && !isPartOfRowspan; r--) {
          const prevCell = grid[r][col];
          if (prevCell && r + prevCell.duration > row) isPartOfRowspan = true;
        }
        if (!isPartOfRowspan) {
          html += '<td class="dashboard-summary-empty"></td>';
        }
      }
    }
    html += '</tr>';
  }
  html += '</tbody></table>';
  return html;
}

function exportFileStem() {
  let d = new Date();
  let yyyy = d.getFullYear();
  let mm = String(d.getMonth() + 1).padStart(2, '0');
  let dd = String(d.getDate()).padStart(2, '0');
  let mode = state.filterMode || 'view';
  let pick = '';
  if (mode === 'section' || mode === 'department') pick = state.filterSection || '';
  else if (mode === 'faculty') pick = state.filterFaculty || '';
  else if (mode === 'room') pick = state.filterRoom || '';
  pick = String(pick || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return `timetable-${mode}${pick ? '-' + pick : ''}-${yyyy}${mm}${dd}`;
}
function csvEscape(v) {
  let s = String(v ?? '');
  if (s.includes('"') || s.includes(',') || s.includes('\n')) return `"${s.replace(/"/g, '""')}"`;
  return s;
}
function downloadTextFile(filename, content, mimeType) {
  let blob = new Blob([content], { type: mimeType });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 0);
}

function downloadBlobFile(filename, blob) {
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 0);
}

/** Directory URL for static assets (e.g. /CenScheduling/). */
function cenStaticBaseUrl() {
  if (typeof location === 'undefined' || !location.pathname) return '/';
  let path = location.pathname;
  let i = path.lastIndexOf('/');
  return i >= 0 ? path.slice(0, i + 1) : '/';
}

function ensureJsZipLoaded() {
  if (typeof JSZip !== 'undefined') return Promise.resolve();
  return new Promise((resolve, reject) => {
    let s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js';
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Could not load JSZip'));
    document.head.appendChild(s);
  });
}

function escapeXmlText(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Byte offsets in `word/document.xml` of PRE-ENROLLMENT-template.docx (regenerate if template is replaced).
 * A second embedded form in the template is stripped at export via `trimPreEnrollmentDocxDuplicateFormTail`.
 */
const PRE_ENROLL_DOCX_DOCXML_SLICES = { dataRowsStart: 56596, afterTotalRow: 99920 };

function patchPreEnrollmentDocxPrefix(prefixXml, ctx) {
  let sec = escapeXmlText(String(ctx.section || '').trim());
  let ay = escapeXmlText(ctx.ay || '');
  let sem = escapeXmlText(ctx.sem || '');
  let p = prefixXml.replace(
    /<w:t xml:space="preserve">BSEE IV-GI <\/w:t>/,
    `<w:t xml:space="preserve">${sec} </w:t>`,
  );
  p = p.replace(
    /<w:r w:rsidRPr="00C45665"><w:rPr><w:b\/><w:noProof\/><\/w:rPr><w:t xml:space="preserve">SCHOOL YEAR:  <\/w:t><\/w:r>/,
    `<w:r w:rsidRPr="00C45665"><w:rPr><w:b/><w:noProof/><w:u w:val="single"/></w:rPr><w:t xml:space="preserve">SCHOOL YEAR:  ${ay}</w:t></w:r>`,
  );
  p = p.replace(
    / SEMESTER:<\/w:t><\/w:r><w:r w:rsidRPr="00C45665"><w:rPr><w:b\/><w:noProof\/><\/w:rPr><w:tab\/><\/w:r><w:r w:rsidRPr="00C45665"><w:rPr><w:b\/><w:noProof\/><\/w:rPr><w:tab\/><\/w:r><\/w:p><w:p w14:paraId="6BBB7122"/,
    ` SEMESTER:</w:t></w:r><w:r w:rsidRPr="00C45665"><w:rPr><w:b/><w:noProof/><w:u w:val="single"/></w:rPr><w:t xml:space="preserve"> ${sem}</w:t></w:r></w:p><w:p w14:paraId="6BBB7122"`,
  );
  return p;
}

function fillPreEnrollmentDocxDataRow(rowTemplate, code, name, units, room, day, time) {
  let cells = [code, name, units, room, day, time].map(c => escapeXmlText(c));
  let i = 0;
  return rowTemplate.replace(/<w:t([^>]*)>([^<]*)<\/w:t>/g, (m, attrs, inner) => {
    if (i >= cells.length) return m;
    return `<w:t${attrs}>${cells[i++]}</w:t>`;
  });
}

function fillPreEnrollmentDocxTotalRow(totalRowTemplate, totalStr) {
  let t = escapeXmlText(String(totalStr));
  return totalRowTemplate.replace(
    '</w:rPr><w:t>2</w:t></w:r><w:r w:rsidR="001E684F"><w:rPr><w:bCs/><w:noProof/><w:sz w:val="24"/></w:rPr><w:t>1</w:t></w:r>',
    `</w:rPr><w:t>${t}</w:t></w:r>`,
  );
}

function excelDateSerialFromDate(d) {
  if (!(d instanceof Date) || Number.isNaN(d.getTime())) return '';
  return d.getTime() / 86400000 + 25569;
}

function replaceXlsxCellWithInlineString(sheetXml, cellRef, value) {
  const re = new RegExp(`<c\\s+r="${cellRef}"[^>]*(?:\\/>|>[\\s\\S]*?<\\/c>)`);
  return sheetXml.replace(re, m => {
    const s = m.match(/\ss="([^"]+)"/);
    const sAttr = s ? ` s="${s[1]}"` : '';
    return `<c r="${cellRef}"${sAttr} t="inlineStr"><is><t>${escapeXmlText(value || '')}</t></is></c>`;
  });
}

function replaceXlsxCellWithNumber(sheetXml, cellRef, value) {
  const re = new RegExp(`<c\\s+r="${cellRef}"[^>]*(?:\\/>|>[\\s\\S]*?<\\/c>)`);
  return sheetXml.replace(re, m => {
    const s = m.match(/\ss="([^"]+)"/);
    const sAttr = s ? ` s="${s[1]}"` : '';
    if (value == null || value === '' || Number.isNaN(Number(value))) {
      return `<c r="${cellRef}"${sAttr}/>`;
    }
    return `<c r="${cellRef}"${sAttr}><v>${Number(value)}</v></c>`;
  });
}

function scheduleXlsxSectionRows(ctx, sectionKey) {
  const rows = ctx.scheds
    .filter(s => String(s.section || '').trim() === String(sectionKey || '').trim())
    .sort((a, b) => (getSubject(a.subjectId)?.code || '').localeCompare(getSubject(b.subjectId)?.code || ''));
  let totalUnits = 0;
  const data = rows.map(s => {
    const sub = getSubject(s.subjectId);
    const units = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0;
    totalUnits += units;
    return {
      code: sub?.code || '',
      name: sub?.name || '',
      units,
      day: scheduleDaysToAbbrev(s.days) || '',
      time: s.timeStart && s.timeEnd ? `${fmt12(s.timeStart)}-${fmt12(s.timeEnd)}` : '',
      room: roomDisplayLineFromPick(s.roomId, s.roomOtherName) || '',
      faculty: professorDisplayLineFromPick(s.professorId, s.professorOtherName) || '',
    };
  });
  return { data, totalUnits };
}

async function generateScheduleSubjectsXlsxBlob(ctx) {
  await ensureJsZipLoaded();
  const base = cenStaticBaseUrl() + 'templates/';
  const zipRes = await fetch(base + 'schedule-of-subjects-template.xlsx');
  if (!zipRes.ok) throw new Error('missing schedule xlsx template');
  const zipBuf = await zipRes.arrayBuffer();
  const zip = await JSZip.loadAsync(zipBuf);
  let sheetXml = await zip.file('xl/worksheets/sheet1.xml').async('string');
  const sections = [...new Set(ctx.scheds.map(s => String(s.section || '').trim()).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b),
  );
  const scopedSections =
    ctx.section && ctx.section !== 'all'
      ? [String(ctx.section).trim()]
      : sections;
  const firstSection = scopedSections[0] || '';
  const secondSection = scopedSections[1] || '';
  const first = scheduleXlsxSectionRows(ctx, firstSection);
  const second = scheduleXlsxSectionRows(ctx, secondSection);
  const semAy = scheduleOfSubjectsSemAyUpperPlain(ctx);
  const dateStr = new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  const dateSerial = excelDateSerialFromDate(new Date());

  // Remove template logo/drawing so export only shows generated data.
  sheetXml = sheetXml.replace(/<drawing\b[^>]*\/>/g, '');

  sheetXml = replaceXlsxCellWithInlineString(sheetXml, 'B5', `${ctx.deptCode} Department`);
  sheetXml = replaceXlsxCellWithInlineString(sheetXml, 'E5', `Schedule from Sem/AY : ${semAy}`);
  sheetXml = replaceXlsxCellWithNumber(sheetXml, 'F4', dateSerial);
  sheetXml = replaceXlsxCellWithInlineString(sheetXml, 'A7', `Course/Yr/Section : ${firstSection || '—'}`);
  sheetXml = replaceXlsxCellWithInlineString(
    sheetXml,
    'A19',
    secondSection ? `Course/Yr/Section : ${secondSection}` : '',
  );
  sheetXml = replaceXlsxCellWithInlineString(sheetXml, 'D4', 'Date :');
  sheetXml = replaceXlsxCellWithInlineString(sheetXml, 'G40', 'Page 1 of 1');
  sheetXml = replaceXlsxCellWithInlineString(sheetXml, 'B40', `Generated ${dateStr}`);

  const writeBlock = (startRow, rows, totalRow, totalUnits, hideTotal = false) => {
    for (let i = 0; i < 7; i++) {
      const r = startRow + i;
      const row = rows[i] || null;
      sheetXml = replaceXlsxCellWithInlineString(sheetXml, `A${r}`, row?.code || '');
      sheetXml = replaceXlsxCellWithInlineString(sheetXml, `B${r}`, row?.name || '');
      sheetXml = row ? replaceXlsxCellWithNumber(sheetXml, `C${r}`, row.units) : replaceXlsxCellWithInlineString(sheetXml, `C${r}`, '');
      sheetXml = replaceXlsxCellWithInlineString(sheetXml, `D${r}`, row?.day || '');
      sheetXml = replaceXlsxCellWithInlineString(sheetXml, `E${r}`, row?.time || '');
      sheetXml = replaceXlsxCellWithInlineString(sheetXml, `F${r}`, row?.room || '');
      sheetXml = replaceXlsxCellWithInlineString(sheetXml, `G${r}`, row?.faculty || '');
    }
    sheetXml = replaceXlsxCellWithInlineString(sheetXml, `A${totalRow}`, hideTotal ? '' : 'TOTAL');
    sheetXml = hideTotal
      ? replaceXlsxCellWithInlineString(sheetXml, `C${totalRow}`, '')
      : replaceXlsxCellWithNumber(sheetXml, `C${totalRow}`, totalUnits || 0);
  };
  writeBlock(11, first.data, 18, first.totalUnits);
  writeBlock(24, second.data, 31, second.totalUnits, !secondSection);

  zip.file('xl/worksheets/sheet1.xml', sheetXml);
  return zip.generateAsync({
    type: 'blob',
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
}

/** Remove duplicate centered SLSU / Lucban block after (DEAN/ADVISER) from template tail. */
function stripPreEnrollmentDocxTrailingUniversityFooter(suffixXml) {
  const re =
    /<w:p\b[^>]*>[\s\S]*?<w:t(?:\s[^>]*)?>[^<]*Southern Luzon State University[^<]*<\/w:t>[\s\S]*?<\/w:p>\s*<w:p\b[^>]*>[\s\S]*?<w:t(?:\s[^>]*)?>[^<]*Lucban, Quezon[^<]*<\/w:t>[\s\S]*?<\/w:p>/;
  return suffixXml.replace(re, '');
}

/**
 * Official template may contain a second full pre-enrolment form after the first (duplicate header + table).
 * Keep only the first form's trailing paragraphs (signature, etc.) and final sectPr.
 */
function trimPreEnrollmentDocxDuplicateFormTail(origXml, afterTotalRow) {
  const titleNeedle = '<w:t>PRE-ENROLMENT FORM</w:t>';
  let firstTitle = origXml.indexOf(titleNeedle);
  if (firstTitle >= 0) {
    let secondTitle = origXml.indexOf(titleNeedle, firstTitle + titleNeedle.length);
    if (secondTitle >= 0) {
      // Start cutting at the paragraph that owns the second PRE-ENROLMENT heading.
      let cutAt = origXml.lastIndexOf('<w:p ', secondTitle);
      if (cutAt < 0) cutAt = secondTitle;
      let sectPrFromBody = origXml.indexOf('<w:sectPr', cutAt);
      if (sectPrFromBody > cutAt) return origXml.slice(afterTotalRow, cutAt) + origXml.slice(sectPrFromBody);
      return origXml.slice(afterTotalRow, cutAt);
    }
  }
  const tblNeedle = '<w:tbl>';
  let firstTbl = origXml.indexOf(tblNeedle);
  if (firstTbl < 0) return origXml.slice(afterTotalRow);
  let secondTbl = origXml.indexOf(tblNeedle, firstTbl + tblNeedle.length);
  if (secondTbl < 0) return origXml.slice(afterTotalRow);
  let sectPr = origXml.indexOf('<w:sectPr');
  if (sectPr < 0 || sectPr <= secondTbl) return origXml.slice(afterTotalRow);
  return origXml.slice(afterTotalRow, secondTbl) + origXml.slice(sectPr);
}

/**
 * Build a .docx from `templates/pre-enrollment/PRE-ENROLLMENT-template.docx` with timetable data (same layout as the official file).
 */
async function generatePreEnrollmentDocxBlob(ctx) {
  await ensureJsZipLoaded();
  let base = cenStaticBaseUrl() + 'templates/pre-enrollment/';
  let zipRes = await fetch(base + 'PRE-ENROLLMENT-template.docx');
  if (!zipRes.ok) throw new Error('missing template docx');
  let rowRes = await fetch(base + 'docx-data-row.xml');
  let totalRes = await fetch(base + 'docx-total-row.xml');
  if (!rowRes.ok || !totalRes.ok) throw new Error('missing row fragments');
  let [zipBuf, rowTpl, totalTpl] = await Promise.all([zipRes.arrayBuffer(), rowRes.text(), totalRes.text()]);
  let zip = await JSZip.loadAsync(zipBuf);
  let origXml = await zip.file('word/document.xml').async('string');
  let SL = PRE_ENROLL_DOCX_DOCXML_SLICES;
  let prefix = patchPreEnrollmentDocxPrefix(origXml.slice(0, SL.dataRowsStart), ctx);
  let sec = ctx.section;
  let rows = ctx.scheds
    .filter(s => String(s.section || '').trim() === String(sec || '').trim())
    .sort((a, b) => (getSubject(a.subjectId)?.code || '').localeCompare(getSubject(b.subjectId)?.code || ''));
  let dataRows = '';
  let totalU = 0;
  for (let s of rows) {
    let sub = getSubject(s.subjectId);
    let u = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0;
    totalU += u;
    let timeStr =
      s.timeStart && s.timeEnd ? `${fmt12(s.timeStart)}-${fmt12(s.timeEnd)}` : '—';
    dataRows += fillPreEnrollmentDocxDataRow(
      rowTpl,
      sub?.code || '—',
      sub?.name || '—',
      String(u),
      roomDisplayLineFromPick(s.roomId, s.roomOtherName),
      scheduleDaysToAbbrev(s.days),
      timeStr,
    );
  }
  let totalRow = fillPreEnrollmentDocxTotalRow(totalTpl, String(totalU));
  let suffix = stripPreEnrollmentDocxTrailingUniversityFooter(
    trimPreEnrollmentDocxDuplicateFormTail(origXml, SL.afterTotalRow),
  );
  let newXml = prefix + dataRows + totalRow + suffix;
  zip.file('word/document.xml', newXml);
  return zip.generateAsync({
    type: 'blob',
    mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  });
}
function tableToGridMatrix(tableEl, lineSep = ' | ') {
  let matrix = [];
  let rows = [...tableEl.querySelectorAll('tr')];
  rows.forEach((rowEl, rowIdx) => {
    if (!matrix[rowIdx]) matrix[rowIdx] = [];
    let col = 0;
    [...rowEl.children].forEach(cell => {
      while (matrix[rowIdx][col] != null) col += 1;
      let rowspan = Number(cell.getAttribute('rowspan') || '1');
      let colspan = Number(cell.getAttribute('colspan') || '1');
      let txt = (cell.innerText || '')
        .split('\n')
        .map(t => t.trim())
        .filter(Boolean)
        .join(lineSep);
      for (let r = 0; r < rowspan; r++) {
        if (!matrix[rowIdx + r]) matrix[rowIdx + r] = [];
        for (let c = 0; c < colspan; c++) matrix[rowIdx + r][col + c] = txt;
      }
      col += colspan;
    });
  });
  let maxCols = matrix.reduce((m, r) => Math.max(m, r.length), 0);
  matrix.forEach(r => { for (let i = 0; i < maxCols; i++) if (r[i] == null) r[i] = ''; });
  return matrix;
}
function exportVisibleTimetable(format) {
  // Export exactly what is currently shown by active filters.
  if (format === 'pdf' && state.filterMode === 'faculty') {
    if (!printFacultyScheduleTabForm()) return;
    return;
  }
  let table = document.querySelector('#printArea .timetable-schedule');
  if (!table) { showToast('No timetable to export.'); return; }
  if (format === 'pdf') { window.print(); return; }
  let matrix = tableToGridMatrix(table, format === 'excel' ? '\n' : ' | ');
  if (!matrix.length) { showToast('No timetable data to export.'); return; }
  let roomExportLabel = '';
  if (state.filterMode === 'room') {
    roomExportLabel = getRoom(state.filterRoom)?.name || roomDisplayLineFromPick(state.filterRoom, '');
    if (roomExportLabel) {
      let width = matrix[0]?.length || 1;
      let titleRow = Array(width).fill('');
      titleRow[0] = roomExportLabel;
      matrix.unshift(titleRow);
    }
  }
  let stem = exportFileStem();
  if (format === 'csv') {
    let csv = matrix.map(row => row.map(csvEscape).join(',')).join('\r\n');
    downloadTextFile(`${stem}.csv`, csv, 'text/csv;charset=utf-8;');
    showToast('CSV exported.');
    return;
  }
  if (format === 'excel') {
    let headerCells = [...table.querySelectorAll('thead tr:first-child th')];
    let colCount = headerCells.length || (matrix[0]?.length || 1);
    // Fixed Excel-friendly widths (narrower) so layout fits portrait better.
    let colW = Array(colCount).fill('86pt');
    if (colCount > 0) colW[0] = '58pt'; // Time column
    let colGroup = `<colgroup>${colW.map(w => `<col style="width:${w};mso-width-source:userset;">`).join('')}</colgroup>`;
    let titleRow = roomExportLabel ? `<tr><th class="xls-room-title" colspan="${colCount}">${escapeHtml(roomExportLabel)}</th></tr>` : '';
    let tableRows = [...table.querySelectorAll('tr')].map((tr, idx) => {
      let isHead = idx === 0;
      let cells = [...tr.children].map(cell => {
        let tag = isHead ? 'th' : 'td';
        let rs = Number(cell.getAttribute('rowspan') || '1');
        let cs = Number(cell.getAttribute('colspan') || '1');
        let span = `${rs > 1 ? ` rowspan="${rs}"` : ''}${cs > 1 ? ` colspan="${cs}"` : ''}`;
        let txt = (cell.innerText || '')
          .split('\n')
          .map(t => t.trim())
          .filter(Boolean)
          .join('\n');
        let cls = '';
        let pal = '';
        if (!isHead && cell.dataset?.schedid) {
          cls = ' class="xls-busy"';
          let f = cell.getAttribute('data-tt-fill');
          let b = cell.getAttribute('data-tt-border');
          if (f && b) pal = ` style="background:${f};border-left:3px solid ${b}"`;
        }
        return `<${tag}${span}${cls}${pal}>${escapeHtml(txt)}</${tag}>`;
      }).join('');
      return `<tr>${cells}</tr>`;
    }).join('');
    let html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      @page { size: A4 portrait; margin: 0.45in; }
      body{
        font-family:Arial,sans-serif;margin:0;padding:20px;background:#fff;color:#111;
        mso-page-orientation: portrait;
      }
      .sheet{max-width:560pt;margin:0 auto}
      table{border-collapse:collapse;width:auto;table-layout:fixed;margin:0 auto}
      th,td{border:1px solid #b7b7b7;padding:4px 5px;font-size:11px;line-height:1.2;vertical-align:middle}
      th{font-weight:700;text-align:center}
      td{text-align:center;white-space:pre-line}
      .xls-busy{background:#f8f8f8}
      .xls-room-title{border:none !important;font-size:20px;letter-spacing:.03em;padding:8px 0 12px;text-align:center}
    </style></head><body><div class="sheet"><table>${colGroup}${titleRow}${tableRows}</table></div></body></html>`;
    downloadTextFile(`${stem}.xls`, html, 'application/vnd.ms-excel;charset=utf-8;');
    showToast('Excel exported.');
  }
}

function facultyScheduleTabRowsForPrint() {
  const sem = state.termSemester || '1st Semester';
  const ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  const profId = state.filterFaculty || '';
  if (!profId || profId === 'all') return { prof: null, rows: [], sem, ay };
  const prof = getProfessor(profId);
  const rows = state.schedules
    .filter(
      s =>
        s.professorId === profId &&
        String(s.schSem || '').trim() === sem &&
        (normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) === ay,
    )
    .slice();
  rows.sort((a, b) => {
    let ta = parseTimeToMinutes(a.timeStart);
    let tb = parseTimeToMinutes(b.timeStart);
    if (ta !== tb) return ta - tb;
    return (getSubject(a.subjectId)?.code || '').localeCompare(getSubject(b.subjectId)?.code || '');
  });
  return { prof, rows, sem, ay };
}

function buildFacultyScheduleTabFormHtml() {
  const { prof, rows, sem, ay } = facultyScheduleTabRowsForPrint();
  if (!prof) return '';
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const slots = timeSlots.filter(t => t < TIMETABLE_DAY_CLOSE);
  const grid = Array(slots.length).fill(null).map(() => Array(days.length).fill(null));
  rows.forEach(s => {
    const sub = getSubject(s.subjectId);
    const start = timeToRow(s.timeStart);
    if (start < 0) return;
    s.days.forEach(d => {
      const col = days.indexOf(d);
      if (col < 0) return;
      const dur = timeDurationForTimetableGridDisplay(s, d, rows);
      grid[start][col] = { s, sub, dur };
    });
  });
  let contactHours = 0;
  rows.forEach(s => {
    let st = parseTimeToMinutes(s.timeStart);
    let en = parseTimeToMinutes(s.timeEnd);
    if (!Number.isFinite(st) || !Number.isFinite(en) || en <= st) return;
    contactHours += ((en - st) / 60) * (Array.isArray(s.days) ? s.days.length : 1);
  });
  let bodyRows = [];
  for (let r = 0; r < slots.length; r++) {
    let t = slots[r];
    let t2 = slotEndFromRow(r);
    let tr = `<tr><td class="time">${escapeHtml(fmt12(t))}-${escapeHtml(fmt12(t2))}</td>`;
    for (let c = 0; c < days.length; c++) {
      let cell = grid[r][c];
      if (cell && r === timeToRow(cell.s.timeStart)) {
        let chrome = timetableSlotChrome(cell.s, {}, new Set());
        let code = cell.sub?.code || '—';
        let sec = cell.s.section || '—';
        let room = roomDisplayLineFromPick(cell.s.roomId, cell.s.roomOtherName) || '—';
        tr += `<td rowspan="${cell.dur}" class="busy" style="background:${escapeHtml(chrome.bg)};border-left:3px solid ${escapeHtml(
          chrome.border,
        )}"><div class="code">${escapeHtml(code)}</div><div>${escapeHtml(sec)}</div><div>${escapeHtml(room)}</div></td>`;
      } else {
        let covered = false;
        for (let rr = r - 1; rr >= 0 && !covered; rr--) {
          let prev = grid[rr][c];
          if (prev && rr + prev.dur > r) covered = true;
        }
        if (!covered) tr += '<td></td>';
      }
    }
    tr += '</tr>';
    bodyRows.push(tr);
  }
  const semShort = sem === '1st Semester' ? '1st' : sem === '2nd Semester' ? '2nd' : sem;
  return `<style>
.fsf{font-family:Arial,sans-serif;color:#111;font-size:10pt}
.fsf h2{margin:0 0 6px;text-align:center;font-size:12pt;letter-spacing:.02em}
.fsf .meta{display:flex;justify-content:space-between;margin:0 0 6px;font-size:9pt}
.fsf .meta b{font-weight:700}
.fsf table{width:100%;border-collapse:collapse;table-layout:fixed}
.fsf th,.fsf td{border:1px solid #000;padding:2px 3px;vertical-align:middle;font-size:8.5pt}
.fsf th{background:#f2f2f2;text-align:center}
.fsf td.time{width:14%;text-align:center;white-space:nowrap;font-size:8pt}
.fsf td.busy{text-align:center}
.fsf td.busy .code{font-weight:700}
.fsf .sum{margin-top:6px;font-size:9pt}
.fsf .sum-row{display:flex;gap:10px;max-width:280px}
.fsf .sum-row span:last-child{border-bottom:1px solid #000;min-width:70px;text-align:center}
</style>
<div class="fsf">
  <h2>INDIVIDUAL SCHEDULE OF FACULTY</h2>
  <div class="meta"><div><b>COLLEGE:</b> CEN<br><b>LOCATION:</b> MHDP</div><div style="text-align:right"><b>SCHOOL YEAR:</b> ${escapeHtml(
    ay,
  )}<br><b>SEMESTER:</b> ${escapeHtml(semShort)}<br><b>FACULTY:</b> ${escapeHtml(prof.name || '')}</div></div>
  <table>
    <thead><tr><th>TIME/ DAY</th>${days.map(d => `<th>${d.toUpperCase()}</th>`).join('')}</tr></thead>
    <tbody>${bodyRows.join('')}</tbody>
  </table>
  <div class="sum">
    <div class="sum-row"><span><b>Teaching</b></span><span>${escapeHtml(formatHoursValue(contactHours))}</span></div>
    <div class="sum-row"><span><b>Lesson Preparation</b></span><span>&nbsp;</span></div>
    <div class="sum-row"><span><b>Consultation</b></span><span>&nbsp;</span></div>
    <div class="sum-row"><span><b>Research</b></span><span>&nbsp;</span></div>
    <div class="sum-row"><span><b>Extension</b></span><span>&nbsp;</span></div>
    <div class="sum-row"><span><b>Meeting</b></span><span>&nbsp;</span></div>
    <div class="sum-row"><span><b>Others</b></span><span>&nbsp;</span></div>
    <div class="sum-row"><span><b>Total</b></span><span>${escapeHtml(formatHoursValue(contactHours))}</span></div>
  </div>
</div>`;
}

function printFacultyScheduleTabForm() {
  const { prof } = facultyScheduleTabRowsForPrint();
  if (!prof) {
    showToast('Select one faculty first to print this format.');
    return false;
  }
  let inner = buildFacultyScheduleTabFormHtml();
  if (!inner) {
    showToast('No faculty schedule found for the selected term.');
    return false;
  }
  printHtmlDocumentInHiddenIframe(formsPrintShellDocument('', inner));
  showToast('Printing faculty schedule form…');
  return true;
}
/** Excel export for the curriculum tables currently shown (semester, year level, academic year filters). */
function exportCurriculumTableCsv() {
  if (state.page !== 'curriculum') return;
  mergeMissingCurriculumRowsInto(state.curriculum);
  let u = state.currentUser;
  normalizeCurriculumAdminDeptFilter();
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let curriculumAyFilter = normalizeAcademicYearInput(state.curriculumAcademicYearFilter) || termAy;
  let chairDept = u?.role === 'chairperson' ? u.dept : '';
  let adminDept = u?.role === 'admin' ? state.curriculumDeptFilter : '';
  if (state.curriculumYearFilter !== 'all' && !SCHEDULE_FORM_YEARS.includes(state.curriculumYearFilter)) state.curriculumYearFilter = 'all';
  let rows = state.curriculum.filter(c => {
    if (chairDept && curriculumFilterDept(c) !== chairDept) return false;
    if (adminDept && curriculumFilterDept(c) !== adminDept) return false;
    if (state.curriculumYearFilter !== 'all' && curriculumFilterYear(c) !== state.curriculumYearFilter) return false;
    if (curriculumAcademicYearForFilter(c) !== curriculumAyFilter) return false;
    let sf = curriculumSemFilterEffective();
    if (!curriculumRowMatchesSemesterFilter(c, sf)) return false;
    return true;
  });
  if (!rows.length) {
    showToast('No curriculum rows to export for this filter.');
    return;
  }
  function curriculumExportSemOrder(sem) {
    let s = String(sem || '').trim();
    if (s === '1st Semester') return 0;
    if (s === '2nd Semester') return 1;
    if (s === 'Midyear') return 2;
    return 3;
  }
  let sorted = rows.slice().sort((a, b) => {
    let oa = curriculumExportSemOrder(curriculumFilterSemester(a));
    let ob = curriculumExportSemOrder(curriculumFilterSemester(b));
    if (oa !== ob) return oa - ob;
    return String(a.courseCode || '').localeCompare(String(b.courseCode || ''), undefined, { sensitivity: 'base' });
  });
  let head = ['Academic Year', 'Department', 'Year', 'Semester', 'Code', 'Subject', 'Lec', 'Lab', 'Units', 'Hours'];
  let body = sorted.map(c => {
    let d = getDept(curriculumFilterDept(c));
    let lecN = Number(c.lecUnits);
    let labN = Number(c.labUnits);
    let lecS = Number.isFinite(lecN) ? String(lecN) : '';
    let labS = Number.isFinite(labN) ? String(labN) : '';
    let units = '';
    if (c.units != null && Number.isFinite(Number(c.units))) units = String(Number(c.units));
    else if (lecS || labS) units = String((Number.isFinite(lecN) ? lecN : 0) + (Number.isFinite(labN) ? labN : 0));
    let hoursN = curriculumRequiredHoursEffectiveNumber(c);
    let hours = hoursN != null && Number.isFinite(hoursN) ? String(hoursN) : '';
    return [
      curriculumAyFilter,
      d?.code || curriculumFilterDept(c) || '',
      curriculumFilterYear(c),
      curriculumFilterSemester(c),
      c.courseCode || '',
      c.subjectName || '',
      lecS,
      labS,
      units,
      hours,
    ];
  });
  let rowsHtml = [head, ...body]
    .map(
      (row, idx) =>
        `<tr>${row
          .map(v => {
            let tag = idx === 0 ? 'th' : 'td';
            return `<${tag}>${escapeHtml(v == null ? '' : String(v))}</${tag}>`;
          })
          .join('')}</tr>`,
    )
    .join('');
  let deptSlug =
    u?.role === 'admin'
      ? getDept(state.curriculumDeptFilter)?.code || state.curriculumDeptFilter || 'dept'
      : getDept(chairDept)?.code || chairDept || 'dept';
  let yearSlug = String(state.curriculumYearFilter || 'all').replace(/\s+/g, '-');
  let html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
      @page { size: A4 portrait; margin: 0.45in; }
      body{font-family:Arial,sans-serif;margin:0;padding:20px;background:#fff;color:#111;}
      .sheet{max-width:780pt;margin:0 auto}
      table{border-collapse:collapse;width:100%;table-layout:fixed}
      th,td{border:1px solid #b7b7b7;padding:6px 7px;font-size:11px;line-height:1.25;vertical-align:middle}
      th{font-weight:700;text-align:center;background:#f2f2f2}
      td{text-align:left;word-break:break-word}
    </style></head><body><div class="sheet"><table>${rowsHtml}</table></div></body></html>`;
  let fname = `curriculum-${deptSlug}-${yearSlug}-${curriculumAyFilter.replace(/[^0-9-]+/g, '-')}.xls`;
  downloadTextFile(fname, html, 'application/vnd.ms-excel;charset=utf-8;');
  showToast('Excel exported.');
}

function scheduleExportWizardYearChoices() {
  let presets = typeof termAcademicYearOptions === 'function' ? termAcademicYearOptions() : [];
  let custom = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions : [];
  let set = new Set([...presets, ...custom].map(normalizeAcademicYearInput).filter(Boolean));
  for (let s of state.schedules) set.add(scheduleAcademicYearForFilter(s));
  set.add(normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR);
  return [...set].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)));
}
function normalizeScheduleExportFilterTypes(raw) {
  let list = Array.isArray(raw) ? raw : typeof raw === 'string' ? [raw] : [];
  let allowed = ['all', 'faculty', 'room', 'section'];
  let out = [...new Set(list.filter(v => allowed.includes(v)))];
  if (!out.length) return ['all'];
  if (out.includes('all') && out.length > 1) out = out.filter(v => v !== 'all');
  return out.length ? out : ['all'];
}
function scheduleExportWizardDetailIds(filterType, u) {
  if (filterType === 'all') return ['__all__'];
  if (filterType === 'faculty') {
    let profs = u?.role === 'admin' ? state.professors : state.professors.filter(p => p.dept === u?.dept);
    return profs.map(p => p.id).filter(Boolean);
  }
  if (filterType === 'room') return roomsSourceForApp().map(r => r.id).filter(Boolean);
  if (filterType === 'section') {
    let source = u?.role === 'chairperson' && u?.dept ? state.schedules.filter(s => s.dept === u.dept) : state.schedules;
    let set = new Set(source.map(s => String(s.section || '').trim()).filter(Boolean));
    return [...set].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  }
  return [];
}
function ensureScheduleExportWizardDetailValue(filterType, current, u) {
  if (filterType === 'all') return '__all__';
  let ids = scheduleExportWizardDetailIds(filterType, u);
  if (current && ids.includes(current)) return current;
  return ids[0] || '';
}
function scheduleExportWizardDetailLabel(filterType) {
  if (filterType === 'all') return '';
  if (filterType === 'faculty') return 'Faculty member';
  if (filterType === 'room') return 'Classroom';
  if (filterType === 'section') return 'Section';
  return 'Selection';
}
function buildScheduleExportWizardDetailOptions(filterType, u, selected) {
  if (filterType === 'all') {
    return `<option value="__all__" ${selected === '__all__' ? 'selected' : ''}>All schedules (this year and semester)</option>`;
  }
  if (filterType === 'faculty') {
    let profs =
      u?.role === 'admin'
        ? [...state.professors].sort((a, b) => a.name.localeCompare(b.name))
        : [...state.professors].filter(p => p.dept === u?.dept).sort((a, b) => a.name.localeCompare(b.name));
    if (!profs.length) return '<option value="">— No faculty in scope —</option>';
    return profs.map(p => `<option value="${escapeHtml(p.id)}" ${selected === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('');
  }
  if (filterType === 'room') {
    let rooms = roomsSourceForApp().slice().sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    if (!rooms.length) return '<option value="">— No rooms —</option>';
    return rooms.map(r => `<option value="${escapeHtml(r.id)}" ${selected === r.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('');
  }
  if (filterType === 'section') {
    let sections = scheduleExportWizardDetailIds('section', u);
    if (!sections.length) return '<option value="">— No sections —</option>';
    return sections.map(sec => `<option value="${escapeHtml(sec)}" ${selected === sec ? 'selected' : ''}>${escapeHtml(sec)}</option>`).join('');
  }
  return '';
}
function sortSchedulesExportStable(scheds) {
  let copy = scheds.slice();
  let deptKey = s => (getDept(s.dept)?.name || s.dept || '').toLowerCase();
  let profKey = s => professorDisplayLine(s).toLowerCase();
  copy.sort(
    (a, b) =>
      deptKey(a).localeCompare(deptKey(b)) ||
      String(a.section || '').localeCompare(String(b.section || '')) ||
      profKey(a).localeCompare(profKey(b)) ||
      String(a.timeStart || '').localeCompare(String(b.timeStart || '')),
  );
  return copy;
}
function runScheduleExport(ay, semRaw, selectedTypes, details, closeModalAfterExport = false) {
  let u = state.currentUser;
  if (!selectedTypes.includes('all')) {
    for (let t of selectedTypes) {
      if (!details[t]) {
        showToast(`Select a value for the ${t} filter.`);
        return;
      }
    }
  }
  let pool = state.schedules.filter(s => scheduleAcademicYearForFilter(s) === ay);
  if (semRaw !== 'both') pool = pool.filter(s => (s.schSem || '').trim() === semRaw);
  if (u?.role === 'chairperson') pool = pool.filter(s => s.dept === u.dept);
  if (!selectedTypes.includes('all')) {
    if (selectedTypes.includes('faculty')) {
      pool = pool.filter(s => s.professorId === details.faculty);
    }
    if (selectedTypes.includes('room')) {
      pool = pool.filter(s => scheduleMatchesRoomFilter(s, details.room));
    }
    if (selectedTypes.includes('section')) {
      pool = pool.filter(s => String(s.section || '').trim() === details.section);
    }
  }
  pool = sortSchedulesExportStable(pool);
  if (!pool.length) {
    showToast('No schedules match this export.');
    return;
  }
  let head = ['Academic Year', 'Semester', 'Department', 'Section', 'Subject Code', 'Subject Name', 'Professor', 'Room', 'Days', 'Time Start', 'Time End'];
  let body = pool.map(s => {
    let sub = getSubject(s.subjectId);
    let dept = getDept(s.dept);
    return [
      scheduleAcademicYearForFilter(s),
      s.schSem || '',
      dept?.name || s.dept || '',
      s.section || '',
      sub?.code || '',
      sub?.name || '',
      professorDisplayLine(s),
      roomDisplayLineFromPick(s.roomId, s.roomOtherName),
      (s.days || []).join('/'),
      s.timeStart || '',
      s.timeEnd || '',
    ];
  });
  let csv = [head, ...body].map(r => r.map(csvEscape).join(',')).join('\r\n');
  let semSlug = semRaw === 'both' ? 'both-semesters' : String(semRaw).replace(/\s+/g, '-');
  let filterSlug = selectedTypes.join('-');
  let fname = `schedule-export-${filterSlug}-${ay.replace(/[^0-9-]+/g, '-')}-${semSlug}.csv`;
  downloadTextFile(fname, csv, 'text/csv;charset=utf-8;');
  showToast('Schedule exported.');
  if (closeModalAfterExport) {
    state.modal = null;
    render();
  }
}
function runScheduleExportFromWizard() {
  if (state.modal?.type !== 'scheduleExportWizard') return;
  let ay = normalizeAcademicYearInput(document.getElementById('sew_academic_year')?.value || '') || DEFAULT_ACADEMIC_YEAR;
  let semRaw = document.getElementById('sew_semester')?.value || 'both';
  let selectedTypes = normalizeScheduleExportFilterTypes(
    [...document.querySelectorAll('#modalBackdrop .sew-filter-checkbox:checked')].map(el => el.value),
  );
  let details = {
    faculty: document.getElementById('sew_filter_detail_faculty')?.value || '',
    room: document.getElementById('sew_filter_detail_room')?.value || '',
    section: document.getElementById('sew_filter_detail_section')?.value || '',
  };
  runScheduleExport(ay, semRaw, selectedTypes, details, true);
}
function renderScheduleExportWizardBody() {
  let m = state.modal || {};
  let u = state.currentUser;
  let aySel = normalizeAcademicYearInput(m.exportAy) || DEFAULT_ACADEMIC_YEAR;
  let semSel = m.exportSem || '1st Semester';
  if (!['1st Semester', '2nd Semester', 'both'].includes(semSel)) semSel = '1st Semester';
  let selectedTypes = normalizeScheduleExportFilterTypes(m.exportFilterTypes || m.exportFilterType || 'all');
  let detailState = m.exportFilterDetails && typeof m.exportFilterDetails === 'object' ? m.exportFilterDetails : {};
  let fdFaculty = ensureScheduleExportWizardDetailValue('faculty', detailState.faculty || '', u);
  let fdRoom = ensureScheduleExportWizardDetailValue('room', detailState.room || '', u);
  let fdSection = ensureScheduleExportWizardDetailValue('section', detailState.section || '', u);
  let years = scheduleExportWizardYearChoices();
  if (!years.includes(aySel)) years.push(aySel);
  years.sort((a, b) => String(a).localeCompare(String(b)));
  let yearOpts = years.map(y => `<option value="${escapeHtml(y)}" ${y === aySel ? 'selected' : ''}>${escapeHtml(y)}</option>`).join('');
  let semOpts = [
    ['1st Semester', '1st Semester'],
    ['2nd Semester', '2nd Semester'],
    ['both', 'Both semesters'],
  ]
    .map(([v, lab]) => `<option value="${escapeHtml(v)}" ${semSel === v ? 'selected' : ''}>${escapeHtml(lab)}</option>`)
    .join('');
  let typeButtons = [
    ['all', 'All'],
    ['faculty', 'Faculty'],
    ['room', 'Classroom'],
    ['section', 'Section'],
  ]
    .map(([v, lab]) => {
      let id = `sew_filter_${v}`;
      let on = selectedTypes.includes(v);
      return `<input type="checkbox" class="day-checkbox sew-filter-checkbox" id="${id}" value="${escapeHtml(v)}" ${on ? 'checked' : ''}><label class="day-label" for="${id}">${escapeHtml(lab)}</label>`;
    })
    .join('');
  let showAll = selectedTypes.includes('all');
  let detailHint = showAll
    ? 'Exports every schedule row that matches the academic year and semester above.'
    : 'Only rows matching all selected filters are included.';
  let detailFields = showAll
    ? ''
    : `
      ${selectedTypes.includes('faculty') ? `<div class="form-group"><label class="form-label" for="sew_filter_detail_faculty">${escapeHtml(scheduleExportWizardDetailLabel('faculty'))}</label><select class="form-select" id="sew_filter_detail_faculty" name="sew_filter_detail_faculty" aria-label="${escapeHtml(scheduleExportWizardDetailLabel('faculty'))}" required>${buildScheduleExportWizardDetailOptions('faculty', u, fdFaculty)}</select></div>` : ''}
      ${selectedTypes.includes('room') ? `<div class="form-group"><label class="form-label" for="sew_filter_detail_room">${escapeHtml(scheduleExportWizardDetailLabel('room'))}</label><select class="form-select" id="sew_filter_detail_room" name="sew_filter_detail_room" aria-label="${escapeHtml(scheduleExportWizardDetailLabel('room'))}" required>${buildScheduleExportWizardDetailOptions('room', u, fdRoom)}</select></div>` : ''}
      ${selectedTypes.includes('section') ? `<div class="form-group"><label class="form-label" for="sew_filter_detail_section">${escapeHtml(scheduleExportWizardDetailLabel('section'))}</label><select class="form-select" id="sew_filter_detail_section" name="sew_filter_detail_section" aria-label="${escapeHtml(scheduleExportWizardDetailLabel('section'))}" required>${buildScheduleExportWizardDetailOptions('section', u, fdSection)}</select></div>` : ''}
    `;
  return `<div class="schedule-export-wizard">
    <div class="form-grid schedule-export-wizard-grid">
      <div class="form-group"><label class="form-label" for="sew_academic_year">Academic year</label><select class="form-select" id="sew_academic_year" name="sew_academic_year" aria-label="Academic year" required>${yearOpts}</select></div>
      <div class="form-group"><label class="form-label" for="sew_semester">Semester</label><select class="form-select" id="sew_semester" name="sew_semester" aria-label="Semester" required>${semOpts}</select></div>
      <div class="form-group">
        <span class="form-label">Filter by</span>
        <div class="days-check schedule-export-filter-check">${typeButtons}</div>
      </div>
      ${detailFields}
    </div>
    <p class="form-hint schedule-export-wizard-hint">${escapeHtml(detailHint)}</p>
  </div>`;
}

function normalizeRequestTimetableFilters() {
  let u = state.currentUser;
  if (!u || state.page !== 'requests') return;
  let withRooms = requestTimetableDepartmentsForUser(u);
  let ids = withRooms.map(d => d.id);
  if (!ids.length) return;
  if (!ids.includes(state.requestTimetableDept)) {
    state.requestTimetableDept = ids[0];
  }
  if (!roomsSourceForApp().some(r => r.dept === state.requestTimetableDept)) state.requestTimetableDept = ids[0];
  let deptRoomList = roomsForRequestDeptTimetable(state.requestTimetableDept);
  let roomIds = deptRoomList.map(r => r.id);
  if (!roomIds.length) return;
  if (state.requestTimetableRoom === 'all' || state.requestTimetableRoom === '' || !roomIds.includes(state.requestTimetableRoom)) {
    state.requestTimetableRoom = roomIds[0];
  }
  let deptProfList = professorsForRequestDeptTimetable(state.requestTimetableDept);
  let profIds = deptProfList.map(p => p.id);
  if (state.requestTimetableProfessor !== 'all' && (!state.requestTimetableProfessor || !profIds.includes(state.requestTimetableProfessor))) {
    state.requestTimetableProfessor = 'all';
  }
}
function focusTermForRequest(req) {
  if (!req) return;
  let sem = String(req.schSem || '').trim();
  let ay = normalizeAcademicYearInput(req.schAy);
  if (sem) state.termSemester = normalizeTermSemesterStored(sem);
  if (ay) state.termAcademicYear = ay;
}
function focusRequestTimetableForRequest(req) {
  if (!req) return;
  let toDept = String(req.toDept || '').trim();
  if (toDept) state.requestTimetableDept = toDept;
  let deptRooms = roomsForRequestDeptTimetable(state.requestTimetableDept);
  let wantsRoom = String(req.roomId || '').trim();
  if (wantsRoom && deptRooms.some(r => r.id === wantsRoom)) {
    state.requestTimetableRoom = wantsRoom;
  } else {
    state.requestTimetableRoom = deptRooms[0]?.id || state.requestTimetableRoom;
  }
  state.requestTimetableProfessor = 'all';
}

function roomsForRequestDeptTimetable(deptId) {
  let src = roomsSourceForApp();
  let list = src.filter(r => r.dept === deptId);
  if (!list.length && typeof ROOMS !== 'undefined' && Array.isArray(ROOMS)) {
    list = ROOMS.filter(r => r.dept === deptId);
  }
  return list.slice().sort((a, b) => {
    let la = a.type === 'laboratory', lb = b.type === 'laboratory';
    if (la !== lb) return la ? 1 : -1;
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
  });
}
function professorsForRequestDeptTimetable(deptId) {
  return state.professors
    .filter(p => p.dept === deptId)
    .slice()
    .sort((a, b) => String(a.name || '').localeCompare(String(b.name || ''), undefined, { sensitivity: 'base' }));
}

/** Requests · Available Rooms: Mon–Sat timetable (all programs, including IE). */
function renderRequestDeptDayTimetable(u) {
  normalizeRequestTimetableFilters();
  let term = currentTermFilter();
  let viewDept = state.requestTimetableDept;
  let deptInfo = getDept(viewDept);
  let deptRoomList = roomsForRequestDeptTimetable(viewDept);
  let roomCount = deptRoomList.length;
  let withRooms = requestTimetableDepartmentsForUser(u);
  let canClickRequest = u.role !== 'admin';
  if (!withRooms.length) {
    return `<p class="text-muted" style="padding:12px">No departments have classrooms defined in the system.</p>`;
  }
  if (!roomCount) {
    return `<p class="text-muted" style="padding:12px">No classrooms are registered for <strong>${escapeHtml(deptInfo?.code || viewDept)}</strong>.</p>`;
  }
  let roomFilter = state.requestTimetableRoom;
  let professorFilter = state.requestTimetableProfessor || 'all';
  /** Same as main Schedule "By Room": match id or shared room name; include other depts using this space (e.g. approved borrows). */
  let deptScheds = state.schedules.filter(s => scheduleMatchesRoomFilter(s, roomFilter) && scheduleMatchesCurrentTerm(s, term));
  if (professorFilter !== 'all') {
    deptScheds = deptScheds.filter(s => s.professorId === professorFilter);
  }
  let pendingForRoom = state.requests
    .filter(r => requestMatchesCurrentTerm(r, term) && isPendingRoomRequestForTimetable(r))
    .map(pseudoScheduleFromPendingRequest)
    .filter(s => scheduleMatchesRoomFilter(s, roomFilter));
  if (professorFilter !== 'all') {
    pendingForRoom = pendingForRoom.filter(s => s.professorId === professorFilter);
  }
  deptScheds = [...deptScheds, ...pendingForRoom];
  let deptSelect = `<select class="filter-select request-dept-filter" id="requestTtDept" aria-label="Department (classrooms)">${withRooms.map(d => {
    return `<option value="${d.id}" ${viewDept === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`;
  }).join('')}</select>`;
  let roomSelect = `<select class="filter-select request-room-filter" id="requestTtRoom" aria-label="Filter by room in this department">
    ${deptRoomList.map(r => {
      let tag = r.type === 'laboratory' ? 'Lab' : 'Lec';
      return `<option value="${escapeHtml(r.id)}" ${roomFilter === r.id ? 'selected' : ''}>${escapeHtml(r.name)} · ${tag}</option>`;
    }).join('')}
  </select>`;
  let deptProfList = professorsForRequestDeptTimetable(viewDept);
  let professorSelect = `<select class="filter-select request-prof-filter" id="requestTtProfessor" aria-label="Filter by professor in this department">
    <option value="all" ${professorFilter === 'all' ? 'selected' : ''}>All professors</option>
    ${deptProfList.map(p => `<option value="${escapeHtml(p.id)}" ${professorFilter === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')}
  </select>`;
  let metaRoom = escapeHtml(getRoom(roomFilter)?.name || '');
  let intro;
  if (canClickRequest) {
    intro = `Pick another program’s <strong>department</strong> <strong>room</strong> and <strong>faculty</strong>. The grid shows <strong>all classes using that room</strong> (including your approved borrows in gray). <strong>EMPTY CELLS ARE AVAILABLE</strong> click to start a borrow request.`;
  } else {
    intro = `Pick a <strong>department</strong> and <strong>room</strong>. The grid shows every class using that room, including sections from other programs sharing the same space.`;
  }
  return `
    <p class="request-tt-intro">${intro}</p>
    <div class="timetable-toolbar request-tt-toolbar request-tt-filters-row">${deptSelect}${roomSelect}${professorSelect}<span class="request-tt-meta">${escapeHtml(deptInfo?.code || '')} · ${metaRoom}</span></div>
    <div class="timetable-scroll" id="requestRoomTimetableArea">${renderTimetableGrid(deptScheds, { requestView: true, requestCellClick: canClickRequest, requestBusyClickable: u.role === 'admin', cellLayout: 'room', timetableDays: DAYS_WITH_SATURDAY })}</div>
  `;
}

function renderRequests() {
  let u = state.currentUser;
  normalizeRequestTimetableFilters();
  let term = currentTermFilter();
  let pending = [];
  let outgoing = [];

  if (u.role === 'chairperson') {
    pending = state.requests.filter(
      r =>
        requestMatchesCurrentTerm(r, term) &&
        r.toDept === u.dept &&
        isPendingRequestStatus(r.status),
    );
    outgoing = state.requests.filter(r => r.fromDept === u.dept && requestMatchesCurrentTerm(r, term));
  }

  let requestListsBlock = u.role === 'chairperson' ? `
    <div class="requests-queue-grid">
      <div class="card requests-queue-card requests-queue-card--incoming" id="incoming-requests" style="min-width:0;">
        <div class="card-header">
          <div class="card-title card-title-with-icon">${icon('inbox', 18)} Incoming Requests ${pending.length ? `<span style="background: var(--red); color: #fff; font-size: 10px; padding: 2px 6px; border-radius: 10px; margin-left: 6px;">${pending.length}</span>` : ''}</div>
        </div>
        <div class="card-body requests-queue-card-body">
          <div class="requests-incoming-list-wrap${pending.length === 0 ? ' requests-incoming-list-wrap--empty' : ''}">
            <div class="requests-list ${pending.length === 0 ? 'requests-list--empty' : ''}">
            ${
              pending.length === 0
                ? `<div class="requests-list-empty-state"><div class="requests-list-empty-icon">${icon('checkCircle', 40)}</div><p>No pending requests.</p></div>`
                : pending
                    .map(r => {
                      const room = getRoom(r.roomId);
                      const from = getDept(r.fromDept);
                      const sub = getSubject(r.subjectId);
                      const daysShort = Array.isArray(r.days) ? r.days.map(d => d.slice(0, 3)).join(', ') : '—';
                      const professorPart = r.professorId
                        ? escapeHtml(professorDisplayLineFromPick(r.professorId, r.professorOtherName)) + ' · '
                        : '';
                      const noteText = (requestReasonCommentDisplayText(r) || requestReasonDisplayText(r) || '').trim();
                      const roomPending = requestHasPendingRoom(r);
                      const actionButtons = `<button type="button" class="btn btn-green btn-sm" data-approve="${r.id}">${icon('check', 14)} Accept</button>
                      <button type="button" class="btn btn-danger btn-sm" data-decline="${escapeHtml(String(r.id))}">${icon('close', 14)} Decline</button>`;
                      return `
                <div class="request-card request-card--incoming">
                  <div class="request-icon request-icon-pending">${icon('refresh', 20)}</div>
                  <div class="request-info">
                    <div class="request-title">${roomPending ? 'Room To Be Requested' : (room?.name || 'Unknown Room')} from <span class="badge-dept ${r.fromDept}">${from?.code || '?'}</span></div>
                    <div class="request-meta">${escapeHtml(sub?.code || '—')} · ${escapeHtml(r.section || '—')} · ${professorPart}${escapeHtml(daysShort)} ${fmt12(r.timeStart)}\u2013${fmt12(r.timeEnd)}</div>
                    ${noteText ? `<div class="incoming-request-reason">"${escapeHtml(noteText)}"</div>` : ''}
                    <div class="request-actions incoming-request-actions">
                      ${actionButtons}
                    </div>
                  </div>
                </div>
              `;
                    })
                    .join('')
            }
            </div>
          </div>
        </div>
      </div>

      <div class="card requests-queue-card requests-queue-card--outgoing" style="min-width:0;">
        <div class="card-header">
          <div class="card-title card-title-with-icon">${icon('send', 18)} My Outgoing Requests</div>
          <a href="#available-rooms-timetable" class="btn btn-outline btn-sm">View All</a>
        </div>
        <div class="card-body requests-queue-card-body">
          ${(() => {
            // Once approved, it should no longer stay in Pending.
            const pendingOut = outgoing.filter(r => isPendingRequestStatus(r.status));
            const approvedOut = outgoing.filter(r => r.status === 'approved' || r.status === 'approved_teaching');
            const declinedOut = outgoing.filter(r => isRequestStatusDeclined(r.status));
            const renderOutgoingStatusColumn = (title, list, bucket) => `
              <div class="outgoing-status-col">
                <div class="outgoing-status-col-header">
                  <div class="outgoing-status-col-header-row">
                    <div class="outgoing-status-col-title">${escapeHtml(title)} <span class="outgoing-status-count">${list.length}</span></div>
                    ${
                      list.length > 0
                        ? `<button type="button" class="btn btn-outline btn-sm outgoing-clear-all-btn" data-clear-outgoing-requests="${escapeHtml(bucket)}">Clear all</button>`
                        : ''
                    }
                  </div>
                </div>
                <div class="outgoing-status-col-body">
                  <div class="requests-list ${list.length === 0 ? 'requests-list--empty' : ''}">
                    ${
                      list.length === 0
                        ? `<div class="requests-list-empty-state"><p>No ${escapeHtml(title.toLowerCase())} requests.</p></div>`
                        : list
                            .map(r => {
                              const room = getRoom(r.roomId);
                              const to = getDept(r.toDept);
                              const sub = getSubject(r.subjectId);
                              const teachingNeedsBookAfterApproval = isTeachingAssignmentRequest(r) && requestHasPendingRoom(r)
                                && (r.status === 'approved' || r.status === 'approved_teaching');
                              const needsRoomBooking = r.status === 'approved_teaching' || teachingNeedsBookAfterApproval;
                              const roomPending = requestHasPendingRoom(r);
                              const roomFollow = firstPendingTeachingRoomFollowup(r);
                              const waitingRoomApproval = !!roomFollow && needsRoomBooking && roomPending;
                              const roomFollowRec = roomFollow ? getRoom(roomFollow.roomId) : null;
                              const deptForBadge = waitingRoomApproval ? roomFollow.toDept : r.toDept;
                              const badgeDept = getDept(deptForBadge);
                              const isApprovedFamily =
                                (r.status === 'approved' || r.status === 'approved_teaching') && !waitingRoomApproval;
                              const isDeclined = isRequestStatusDeclined(r.status);
                              const declineNote = requestDeclineReasonDisplayText(r);
                              const statusIcon = isApprovedFamily ? 'check' : (isDeclined ? 'close' : 'refresh');
                              const statusIconColor = isApprovedFamily ? '#16A34A' : (isDeclined ? '#DC2626' : '#D97706');
                              const statusIconBg = isApprovedFamily ? '#F0FDF4' : (isDeclined ? '#FEF2F2' : '#FFFBEB');
                              const roomFollowPending = hasPendingRoomRequestForTeachingParent(r.id);
                              const canBookRoom = needsRoomBooking
                                && roomPending
                                && !roomFollowPending
                                && r.status !== 'approved'
                                && r.status !== 'approved_teaching';
                              const statusLabel = waitingRoomApproval
                                ? `Pending — awaiting ${badgeDept?.code || 'department'} approval`
                                : needsRoomBooking
                                  ? 'Approved — Book Room'
                                  : (r.status.charAt(0).toUpperCase() + r.status.slice(1));
                              const badgeClass = waitingRoomApproval || needsRoomBooking ? 'pending' : (r.status === 'approved' ? 'approved' : r.status);
                              const titleMain = waitingRoomApproval
                                ? `${escapeHtml(roomFollowRec?.name || 'Room')} · awaiting approval`
                                : (roomPending ? 'Room To Be Requested' : (room?.name || (needsRoomBooking ? 'Room To Be Requested' : 'Unknown Room')));
                              return `
                                <div class="request-card request-card--outgoing">
                                  <div class="request-icon request-icon-${escapeHtml(r.status || 'pending')}" style="color:${statusIconColor};background:${statusIconBg};">${icon(statusIcon, 20)}</div>
                                  <div class="request-info">
                                    <div class="request-title">${titleMain} from <span class="badge-dept ${deptForBadge}">${badgeDept?.code || '?'}</span></div>
                                    <div class="request-meta">${sub?.code || '?'} · ${r.section} · ${r.professorId ? escapeHtml(professorDisplayLineFromPick(r.professorId, r.professorOtherName)) + ' · ' : ''}${r.days.map(d => d.slice(0, 3)).join(', ')} ${fmt12(r.timeStart)}–${fmt12(r.timeEnd)}</div>
                                    <div style="margin-top: 6px;"><span class="badge-status ${badgeClass}">${statusLabel}</span></div>
                                    ${
                                      isDeclined && declineNote
                                        ? `<div class="incoming-request-reason request-decline-reason" role="status"><strong>Decline comment:</strong> ${escapeHtml(declineNote)}</div>`
                                        : isDeclined && !declineNote
                                          ? `<div class="incoming-request-reason request-decline-reason request-decline-reason--empty" role="status"><strong>Decline comment:</strong> <span style="color:var(--text-muted);font-style:italic;">Not recorded.</span></div>`
                                          : ''
                                    }
                                    ${
                                      canBookRoom
                                        ? `<div style="margin-top:8px;"><button type="button" class="btn btn-outline btn-sm" data-book-room-request="${escapeHtml(r.id)}">${icon('calendar', 14)} Book a room</button></div>`
                                        : needsRoomBooking && roomPending && roomFollowPending
                                          ? `<div style="margin-top:8px;"><span class="request-book-room-sent-pill" aria-disabled="true">${icon('calendar', 14)} Room request pending</span></div>`
                                          : ''
                                    }
                                  </div>
                                </div>
                              `;
                            })
                            .join('')
                    }
                  </div>
                </div>
              </div>
            `;
            return `
              <div class="outgoing-status-grid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;">
                ${renderOutgoingStatusColumn('Pending', pendingOut, 'pending')}
                ${renderOutgoingStatusColumn('Approved', approvedOut, 'approved')}
                ${renderOutgoingStatusColumn('Declined', declinedOut, 'declined')}
              </div>
            `;
          })()}
        </div>
      </div>
    </div>
  ` : '';

  return `
    ${requestListsBlock}
    <div class="card request-timetable-card" id="available-rooms-timetable" style="margin-bottom:20px">
      <div class="card-header">
        <div class="card-title card-title-with-icon">${icon('calendar', 18)} Available Rooms and Faculty</div>
      </div>
      <div class="card-body request-timetable-card-body" style="padding-top:12px">
        ${renderRequestDeptDayTimetable(u)}
      </div>
    </div>
  `;
}

function renderCurriculumForm(d, opts) {
  d = d || {};
  opts = opts || {};
  let readOnly = !!opts.readOnly;
  let lecV = 3;
  let labV = 0;
  if (d.lecUnits != null || d.labUnits != null) {
    lecV = d.lecUnits != null ? Number(d.lecUnits) : 0;
    labV = d.labUnits != null ? Number(d.labUnits) : 0;
  } else if (d.units != null) {
    lecV = Number(d.units);
    labV = 0;
  }
  if (!Number.isFinite(lecV)) lecV = 0;
  if (!Number.isFinite(labV)) labV = 0;
  let totV = lecV + labV;
  let hoursV = computedCurriculumHoursFromUnits(lecV, labV);
  if (Number.isFinite(Number(d.requiredHours)) && Number(d.requiredHours) >= 0) {
    hoursV = Number(d.requiredHours);
  }
  let isAdminCurr = state.currentUser?.role === 'admin';
  let currDeptId = isAdminCurr ? (d.dept || '') : (state.currentUser?.dept || d.dept || '');
  let deptOpts = isAdminCurr
    ? DEPARTMENTS.map(dept => `<option value="${escapeHtml(dept.id)}" ${currDeptId === dept.id ? 'selected' : ''}>${escapeHtml(dept.code)} — ${escapeHtml(dept.name)}</option>`).join('')
    : `<option value="${escapeHtml(currDeptId)}" selected>${escapeHtml(getDept(currDeptId)?.code || '')} — ${escapeHtml(getDept(currDeptId)?.name || '')}</option>`;
  let ySel = d.year && !SCHEDULE_FORM_YEARS.includes(d.year) ? `<option value="${escapeHtml(d.year)}" selected>${escapeHtml(d.year)}</option>` : '';
  let sSel = d.semester && !CURRICULUM_PAGE_SEMS.includes(d.semester) ? `<option value="${escapeHtml(d.semester)}" selected>${escapeHtml(d.semester)}</option>` : '';
  let yearOpts = SCHEDULE_FORM_YEARS.map(y => `<option value="${escapeHtml(y)}" ${d.year === y ? 'selected' : ''}>${escapeHtml(y)}</option>`).join('');
  let semOpts = CURRICULUM_PAGE_SEMS.map(s => `<option value="${escapeHtml(s)}" ${d.semester === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  let ayVal = normalizeAcademicYearInput(d.academicYear) || normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let dis = readOnly ? 'disabled' : '';
  let deptDis = readOnly || !isAdminCurr ? 'disabled' : '';
  let roInp = readOnly ? 'readonly disabled' : '';
  return `<div class="form-grid form-grid-stacked curriculum-modal-form">
    <div class="form-group full"><label class="form-label" for="cc_dept">Department</label><select class="form-select" id="cc_dept" ${deptDis}>${deptOpts}</select></div>
    <div class="form-grid curriculum-form-year-sem"><div class="form-group"><label class="form-label" for="cc_year">Year</label><select class="form-select" id="cc_year" ${dis}><option value="">Select year...</option>${yearOpts}${ySel}</select></div><div class="form-group"><label class="form-label" for="cc_semester">Semester</label><select class="form-select" id="cc_semester" ${dis}><option value="">Select semester...</option>${semOpts}${sSel}</select></div></div>
    <div class="form-group full"><label class="form-label" for="cc_ay">Academic Year</label><input class="form-input" id="cc_ay" value="${escapeHtml(ayVal)}" placeholder="2025-2026" ${roInp}></div>
    <div class="form-grid curriculum-form-code-subject"><div class="form-group"><label class="form-label" for="cc_courseCode">Code</label><input class="form-input" id="cc_courseCode" placeholder="e.g. IE 100" value="${escapeHtml(d.courseCode || '')}" ${roInp}></div><div class="form-group"><label class="form-label" for="cc_subject">Subject</label><input class="form-input" id="cc_subject" placeholder="Subject title" value="${escapeHtml(d.subjectName || '')}" ${roInp}></div></div>
    <div class="form-grid curriculum-form-units"><div class="form-group"><label class="form-label" for="cc_lecUnits">Lec (units)</label><input class="form-input" id="cc_lecUnits" type="number" min="0" max="12" step="1" value="${escapeHtml(String(lecV))}" ${roInp}></div><div class="form-group"><label class="form-label" for="cc_labUnits">Lab (units)</label><input class="form-input" id="cc_labUnits" type="number" min="0" max="12" step="1" value="${escapeHtml(String(labV))}" ${roInp}></div><div class="form-group"><label class="form-label" for="cc_units_total">Total unit/s</label><input class="form-input" id="cc_units_total" type="text" readonly tabindex="-1" value="${escapeHtml(String(totV))}" aria-live="polite"></div><div class="form-group"><label class="form-label" for="cc_hours">Hours</label><input class="form-input" id="cc_hours" type="number" min="0" max="120" step="0.5" value="${escapeHtml(String(hoursV))}" ${readOnly ? 'readonly tabindex="-1" aria-readonly="true"' : ''} title="${readOnly ? '' : 'Adjust if needed; changing Lec/Lab updates this to the default formula until you edit again.'}"></div></div>
  </div><input type="hidden" id="cc_edit_id" value="${escapeHtml(d.id || '')}">`;
}

function renderCurriculum() {
  mergeMissingCurriculumRowsInto(state.curriculum);
  let u = state.currentUser;
  let isAdminCurriculum = u?.role === 'admin';
  let canMutateCurriculum = canUserMutateCurriculum(u);
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let curriculumAyFilter = normalizeAcademicYearInput(state.curriculumAcademicYearFilter) || termAy;
  let chairDept = u?.role === 'chairperson' ? u.dept : '';
  let adminDeptFilter = isAdminCurriculum ? state.curriculumDeptFilter : '';
  if (state.curriculumYearFilter !== 'all' && !SCHEDULE_FORM_YEARS.includes(state.curriculumYearFilter)) state.curriculumYearFilter = 'all';
  let ayPresets = typeof termAcademicYearOptions === 'function' ? termAcademicYearOptions() : [];
  let ayCustom = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions : [];
  let aySet = new Set([...ayPresets, ...ayCustom].map(normalizeAcademicYearInput).filter(Boolean));
  for (let c of state.curriculum) aySet.add(curriculumAcademicYearForFilter(c));
  aySet.add(termAy);
  let curriculumAyOptions = [...aySet].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)));
  if (!curriculumAyOptions.includes(curriculumAyFilter)) curriculumAyFilter = termAy;
  state.curriculumAcademicYearFilter = curriculumAyFilter;
  let rows = state.curriculum.filter(c => {
    if (chairDept && curriculumFilterDept(c) !== chairDept) return false;
    if (adminDeptFilter && curriculumFilterDept(c) !== adminDeptFilter) return false;
    if (state.curriculumYearFilter !== 'all' && curriculumFilterYear(c) !== state.curriculumYearFilter) return false;
    if (curriculumAcademicYearForFilter(c) !== curriculumAyFilter) return false;
    let sf = curriculumSemFilterEffective();
    if (!curriculumRowMatchesSemesterFilter(c, sf)) return false;
    return true;
  });
  // Hide exact duplicate curriculum slots (same dept/year/sem/code/AY) caused by earlier copy operations.
  let seenCurriculumSlots = new Set();
  rows = rows.filter(c => {
    let key = curriculumAySlotKey(c, c.academicYear);
    if (!key) return true;
    if (seenCurriculumSlots.has(key)) return false;
    seenCurriculumSlots.add(key);
    return true;
  });
  let yearFilterOpts = [['all', 'All Year Levels'], ...SCHEDULE_FORM_YEARS.map(y => [y, y])].map(([y, rawLabel]) => {
    let label = rawLabel === 'all'
      ? 'All Year Levels'
      : rawLabel === '1st Year'
        ? 'First Year'
        : rawLabel === '2nd Year'
          ? 'Second Year'
          : rawLabel === '3rd Year'
            ? 'Third Year'
            : rawLabel === '4th Year'
              ? 'Fourth Year'
              : rawLabel;
    return `<option value="${escapeHtml(y)}" ${state.curriculumYearFilter === y ? 'selected' : ''}>${escapeHtml(label)}</option>`;
  }).join('');
  let sectionScopeDept = chairDept || adminDeptFilter || '';
  let sectionScopeYear = state.curriculumYearFilter === 'all' ? '' : state.curriculumYearFilter;
  let sectionChoices = sectionScopeDept ? sectionOptionsForDeptYear([sectionScopeDept], sectionScopeYear) : [];
  if (state.curriculumSectionFilter !== 'all' && !sectionChoices.includes(state.curriculumSectionFilter)) {
    state.curriculumSectionFilter = 'all';
  }
  let sectionFilterOpts = [`<option value="all" ${state.curriculumSectionFilter === 'all' ? 'selected' : ''}>All Sections</option>`]
    .concat(sectionChoices.map(sec => `<option value="${escapeHtml(sec)}" ${state.curriculumSectionFilter === sec ? 'selected' : ''}>${escapeHtml(sec)}</option>`))
    .join('');
  let academicYearFilterOpts = curriculumAyOptions
    .map(ay => `<option value="${escapeHtml(ay)}" ${curriculumAyFilter === ay ? 'selected' : ''}>${escapeHtml(ay)}</option>`)
    .join('');
  let semFilterVal = curriculumSemFilterEffective();
  let semFilterOpts = [
    ['all', 'All Semester'],
    ['1st Semester', 'First Semester'],
    ['2nd Semester', 'Second Semester'],
    [CURRICULUM_SEM_FILTER_FIRST_AND_SECOND, 'First and Second Semester'],
    ['Midyear', 'Midyear'],
  ]
    .map(
      ([v, lab]) =>
        `<option value="${escapeHtml(v)}" ${semFilterVal === v ? 'selected' : ''}>${escapeHtml(lab)}</option>`,
    )
    .join('');
  let adminDeptToolbar = '';
  if (isAdminCurriculum) {
    let deptFilterOpts = DEPARTMENTS.map(
      dept =>
        `<option value="${escapeHtml(dept.id)}" ${state.curriculumDeptFilter === dept.id ? 'selected' : ''}>${escapeHtml(dept.code)} — ${escapeHtml(dept.name)}</option>`,
    ).join('');
    adminDeptToolbar = `<div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="curriculumDeptFilter" aria-label="Department filter">${deptFilterOpts}</select>
      </div>`;
  }
  let curriculumToolbar = `<div class="curriculum-toolbar-block">
    <div class="curriculum-toolbar-filters">
      ${adminDeptToolbar}
      <div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="curriculumSemFilter" aria-label="Semester filter">${semFilterOpts}</select>
      </div>
      <div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="curriculumYearFilter" aria-label="Year level filter">${yearFilterOpts}</select>
      </div>
      <div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="curriculumSectionFilter" aria-label="Section filter">${sectionFilterOpts}</select>
      </div>
      <div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="curriculumAcademicYearFilter" aria-label="Academic year filter">${academicYearFilterOpts}</select>
      </div>
    </div>
  </div>`;
  function curriculumRenderRowKey(c) {
    if (!c) return '';
    if (c.id != null && c.id !== '') return String(c.id);
    return curriculumAySlotKey(c, curriculumAyFilter) || '';
  }
  const rowSubjectIdsByKey = new Map();
  const visibleCurriculumDepts = new Set();
  for (let c of rows) {
    let rk = curriculumRenderRowKey(c);
    if (!rk) continue;
    rowSubjectIdsByKey.set(rk, subjectIdsForCurriculumRow(c));
    let d = curriculumFilterDept(c);
    if (d) visibleCurriculumDepts.add(String(d));
  }
  const scopedScheduleHoursByKey = new Map();
  const scopedScheduleHoursByCodeKey = new Map();
  const sectionScope = state.curriculumSectionFilter === 'all' ? '' : String(state.curriculumSectionFilter || '').trim();
  for (let s of state.schedules) {
    if (!s) continue;
    let schedSection = String(s.section || '').trim();
    let rawSchedDept = String(s.dept || '');
    let sectionDept = deptFromSectionLabel(schedSection);
    // Section label is the source of truth when legacy rows have mismatched dept tags.
    let effectiveDept = sectionDept || rawSchedDept || '';
    let deptMatches = visibleCurriculumDepts.has(effectiveDept);
    let legacySectionScopedDeptMatch =
      sectionScope &&
      schedSection &&
      schedSection === sectionScope &&
      [...visibleCurriculumDepts].some(d => sectionLabelMatchesDeptProgram(schedSection, d));
    if (!deptMatches && !legacySectionScopedDeptMatch) continue;
    if (scheduleAcademicYearForFilter(s) !== curriculumAyFilter) continue;
    if (sectionScope && String(s.section || '').trim() !== sectionScope) continue;
    let schedHours = scheduleWeeklyHoursFromEntry(s);
    let schedYear = normalizeCurriculumYearLabel(String(s.schYear || '').trim());
    let schedYearFromSection = normalizeCurriculumYearLabel(sectionYearFromLabel(s.section));
    let keyYear = schedYear || schedYearFromSection || '';
    let keyBase = [
      effectiveDept,
      keyYear,
      normalizeCurriculumSemesterLabel(String(s.schSem || '').trim()),
    ];
    if (s.subjectId) {
      let key = [...keyBase, String(s.subjectId)].join('|');
      scopedScheduleHoursByKey.set(key, (scopedScheduleHoursByKey.get(key) || 0) + schedHours);
    }
    let schedCode = normalizeSubjectCode(getSubject(s.subjectId)?.code || '');
    if (schedCode) {
      for (let codeVariant of expandNormalizedCodesForDept(effectiveDept, schedCode)) {
        let cKey = [...keyBase, codeVariant].join('|');
        scopedScheduleHoursByCodeKey.set(cKey, (scopedScheduleHoursByCodeKey.get(cKey) || 0) + schedHours);
      }
    }
    // Legacy fallback: when filtering by a specific section, also index rows with unknown year
    // under a wildcard key so they can still be counted in curriculum remaining-hours.
    if (sectionScope && !keyYear) {
      let wildcardBase = [
        effectiveDept,
        '__ANY_YEAR__',
        normalizeCurriculumSemesterLabel(String(s.schSem || '').trim()),
      ];
      if (s.subjectId) {
        let wKey = [...wildcardBase, String(s.subjectId)].join('|');
        scopedScheduleHoursByKey.set(wKey, (scopedScheduleHoursByKey.get(wKey) || 0) + schedHours);
      }
      if (schedCode) {
        for (let codeVariant of expandNormalizedCodesForDept(effectiveDept, schedCode)) {
          let wcKey = [...wildcardBase, codeVariant].join('|');
          scopedScheduleHoursByCodeKey.set(wcKey, (scopedScheduleHoursByCodeKey.get(wcKey) || 0) + schedHours);
        }
      }
    }
  }
  function curriculumScheduledHoursCellFromIndex(c) {
    let rk = curriculumRenderRowKey(c);
    let subjectIds = rk ? rowSubjectIdsByKey.get(rk) : null;
    let rowCode = normalizeSubjectCode(curriculumCodeFromRow(c));
    let expandedCodes = expandNormalizedCodesForDept(curriculumFilterDept(c), rowCode);
    if ((!subjectIds || !subjectIds.size) && !expandedCodes.size) return '<span class="curriculum-sched-empty">—</span>';
    let required = curriculumRowRequiredHoursNumber(c);
    if (required == null || !Number.isFinite(required) || required <= 0) return '<span class="curriculum-sched-empty">—</span>';
    let dept = curriculumFilterDept(c);
    let year = normalizeCurriculumYearLabel(curriculumFilterYear(c));
    let sem = normalizeCurriculumSemesterLabel(curriculumFilterSemester(c));
    let scheduledById = 0;
    for (let sid of (subjectIds || [])) {
      let key = [dept, year, sem, String(sid)].join('|');
      scheduledById += Number(scopedScheduleHoursByKey.get(key) || 0);
      if (sectionScope) {
        let wildcardKey = [dept, '__ANY_YEAR__', sem, String(sid)].join('|');
        scheduledById += Number(scopedScheduleHoursByKey.get(wildcardKey) || 0);
      }
    }
    let scheduledByCode = 0;
    for (let code of expandedCodes) {
      let key = [dept, year, sem, String(code)].join('|');
      scheduledByCode += Number(scopedScheduleHoursByCodeKey.get(key) || 0);
      if (sectionScope) {
        let wildcardKey = [dept, '__ANY_YEAR__', sem, String(code)].join('|');
        scheduledByCode += Number(scopedScheduleHoursByCodeKey.get(wildcardKey) || 0);
      }
    }
    // Prefer ID-accurate totals, but fall back to code totals for legacy/stale subject IDs.
    let scheduled = Math.max(scheduledById, scheduledByCode);
    let remaining = Math.max(0, required - scheduled);
    if (remaining < 0.01) {
      return '<span class="curriculum-sched-badge curriculum-sched-badge--scheduled">Scheduled</span>';
    }
    return `<span class="curriculum-sched-badge curriculum-sched-badge--remaining">${escapeHtml(formatHoursValue(remaining))} hrs</span>`;
  }
  let schedCol = '<col class="curriculum-col-sched" />';
  let schedTh = '<th scope="col" class="curriculum-th-sched">Remaining hours</th>';
  let rowSched = c => `<td class="curriculum-td-sched">${curriculumScheduledHoursCellFromIndex(c)}</td>`;
  function sortCurriculumRowsForTable(list) {
    return list.slice().sort((a, b) => String(a.courseCode || '').localeCompare(String(b.courseCode || ''), undefined, { sensitivity: 'base' }));
  }
  if (!rows.length) {
    return `
    <div class="curriculum-panel">
      ${curriculumToolbar}
      <div class="curriculum-years-stack">
        <div class="curriculum-empty curriculum-empty-panel">No curriculum rows match these filters.</div>
      </div>
    </div>`;
  }
  function curriculumSemTable(title, semRows, id) {
    let sorted = sortCurriculumRowsForTable(semRows);
    let isEditing = !!(canMutateCurriculum && state.curriculumTableEditId === id);
    let bannerButtons = '';
    if (canMutateCurriculum && (sorted.length > 0 || isEditing)) {
      if (isEditing) {
        bannerButtons = `<div class="curriculum-sem-banner-actions">
          <button type="button" class="btn btn-sm curriculum-banner-cancel-btn" data-curriculum-table-cancel="">Cancel</button>
        </div>`;
      } else {
        bannerButtons = `<button type="button" class="btn btn-sm curriculum-banner-edit-btn" data-curriculum-table-edit="${escapeHtml(id)}">Edit</button>`;
      }
    }
    let bannerInner = `<span class="curriculum-sem-banner-title">${escapeHtml(title)}</span>${bannerButtons}`;
    let headColspan = isEditing ? 8 : 7;
    let bannerRow = `<tr><th colspan="${headColspan}" class="curriculum-th-sem-banner curriculum-th-sem-banner--full${canMutateCurriculum ? ' curriculum-th-sem-banner--toolbar' : ''}" scope="colgroup"><div class="curriculum-sem-banner-inner">${bannerInner}</div></th></tr>`;
    let actionsHead = isEditing
      ? '<th scope="col" class="curriculum-th-actions-head" aria-label="Row actions"></th>'
      : '';
    let actionsCol = isEditing ? '<col class="curriculum-col-actions" />' : '';
    let columnHeadRow = `<tr><th scope="col">Code</th><th scope="col">Subject</th><th scope="col" class="curriculum-th-num">Lec</th><th scope="col" class="curriculum-th-num">Lab</th><th scope="col" class="curriculum-th-num">Unit/s</th><th scope="col" class="curriculum-th-hours">Hours</th>${schedTh}${actionsHead}</tr>`;
    function numericHoursDefault(c) {
      let n = curriculumRequiredHoursEffectiveNumber(c);
      return n != null && Number.isFinite(n) ? String(n) : '';
    }
    function renderBodyRow(c) {
      if (!isEditing) {
        return `<tr><td>${escapeHtml(c.courseCode)}</td><td class="curriculum-td-subj">${escapeHtml(c.subjectName)}</td><td class="curriculum-td-num">${curriculumColLec(c)}</td><td class="curriculum-td-num">${curriculumColLab(c)}</td><td class="curriculum-td-num">${curriculumColTotal(c)}</td><td class="curriculum-td-hours">${curriculumRequiredHours(c)}</td>${rowSched(c)}</tr>`;
      }
      let lecN = c.lecUnits != null && Number.isFinite(Number(c.lecUnits)) ? String(Number(c.lecUnits)) : '';
      let labN = c.labUnits != null && Number.isFinite(Number(c.labUnits)) ? String(Number(c.labUnits)) : '';
      let unitN = '';
      if (c.units != null && Number.isFinite(Number(c.units))) unitN = String(Number(c.units));
      else if (lecN !== '' || labN !== '') unitN = String((parseInt(lecN, 10) || 0) + (parseInt(labN, 10) || 0));
      let hrs = numericHoursDefault(c);
      return `<tr>
        <td><input type="text" class="form-input curriculum-inline-input" data-cd-id="${escapeHtml(c.id)}" data-cd-field="courseCode" value="${escapeHtml(c.courseCode || '')}" autocomplete="off" /></td>
        <td class="curriculum-td-subj"><input type="text" class="form-input curriculum-inline-input" data-cd-id="${escapeHtml(c.id)}" data-cd-field="subjectName" value="${escapeHtml(c.subjectName || '')}" autocomplete="off" /></td>
        <td class="curriculum-td-num"><input type="number" min="0" max="12" step="1" class="form-input curriculum-inline-input curriculum-inline-input--num" data-cd-id="${escapeHtml(c.id)}" data-cd-field="lecUnits" value="${escapeHtml(lecN)}" /></td>
        <td class="curriculum-td-num"><input type="number" min="0" max="12" step="1" class="form-input curriculum-inline-input curriculum-inline-input--num" data-cd-id="${escapeHtml(c.id)}" data-cd-field="labUnits" value="${escapeHtml(labN)}" /></td>
        <td class="curriculum-td-num"><input type="number" min="0" max="24" step="1" class="form-input curriculum-inline-input curriculum-inline-input--num" data-cd-id="${escapeHtml(c.id)}" data-cd-field="units" value="${escapeHtml(unitN)}" /></td>
        <td class="curriculum-td-hours"><input type="number" min="0" max="60" step="0.5" class="form-input curriculum-inline-input curriculum-inline-input--num" data-cd-id="${escapeHtml(c.id)}" data-cd-field="requiredHours" value="${escapeHtml(hrs)}" /></td>
        <td class="curriculum-td-sched">${curriculumScheduledHoursCellFromIndex(c)}</td>
        <td class="curriculum-td-inline-actions"><div class="curriculum-inline-action-buttons"><button type="button" class="curriculum-inline-btn curriculum-inline-btn--delete" data-delcrow="${escapeHtml(c.id)}">Delete</button><button type="button" class="curriculum-inline-btn curriculum-inline-btn--save" data-curriculum-row-save="${escapeHtml(id)}" data-cd-id="${escapeHtml(c.id)}">Save</button></div></td>
      </tr>`;
    }
    let tableExtraClass = isEditing ? ' curriculum-doc-table--inline-edit' : '';
    return `<div class="curriculum-sem-col" id="${escapeHtml(id)}">
      <div class="table-wrap curriculum-table-wrap">
        <table class="curriculum-table curriculum-doc-table${tableExtraClass}${canMutateCurriculum ? '' : ' curriculum-table--readonly'}">
          <colgroup>
            <col class="curriculum-col-cc" />
            <col class="curriculum-col-subj" />
            <col class="curriculum-col-lec" />
            <col class="curriculum-col-lab" />
            <col class="curriculum-col-unit-total" />
            <col class="curriculum-col-hours" />
            ${schedCol}
            ${actionsCol}
          </colgroup>
          <thead>${bannerRow}${columnHeadRow}</thead>
          <tbody>
            ${sorted.map(c => renderBodyRow(c)).join('')}
          </tbody>
        </table>
        ${sorted.length === 0 ? '<div class="curriculum-empty">No subjects for this semester.</div>' : ''}
      </div>
    </div>`;
  }
  let yearsToRender =
    state.curriculumYearFilter !== 'all' ? [state.curriculumYearFilter] : [...SCHEDULE_FORM_YEARS];
  let showMainTwoCols = semFilterVal !== 'Midyear';
  let showFirstCol =
    semFilterVal === 'all' ||
    semFilterVal === '1st Semester' ||
    semFilterVal === CURRICULUM_SEM_FILTER_FIRST_AND_SECOND;
  let showSecondCol =
    semFilterVal === 'all' ||
    semFilterVal === '2nd Semester' ||
    semFilterVal === CURRICULUM_SEM_FILTER_FIRST_AND_SECOND;
  let semGridClass =
    showFirstCol && showSecondCol ? '' : ' curriculum-sem-grid--single';
  let editTableId = state.curriculumTableEditId || '';
  let yearBlocksHtml = yearsToRender
    .map(yr => {
      let slug = yr.replace(/\s+/g, '-');
      let firstId = `curriculum-${slug}-first`;
      let secondId = `curriculum-${slug}-second`;
      let midId = `curriculum-${slug}-mid`;
      let yearRows = rows.filter(c => curriculumFilterYear(c) === yr);
      let firstRows = yearRows.filter(c => curriculumFilterSemester(c) === '1st Semester');
      let secondRows = yearRows.filter(c => curriculumFilterSemester(c) === '2nd Semester');
      let midRows = yearRows.filter(c => curriculumFilterSemester(c) === 'Midyear');
      let left =
        showMainTwoCols && showFirstCol ? curriculumSemTable('First Semester', firstRows, firstId) : '';
      let right =
        showMainTwoCols && showSecondCol ? curriculumSemTable('Second Semester', secondRows, secondId) : '';
      let showMidBand = semFilterVal === 'Midyear' || semFilterVal === 'all';
      let midBlock = showMidBand
        ? `<div class="curriculum-midyear-band">${curriculumSemTable('Midyear', midRows, midId)}</div>`
        : '';
      if (editTableId === firstId) {
        right = '';
        midBlock = '';
      } else if (editTableId === secondId) {
        left = '';
        midBlock = '';
      } else if (editTableId === midId) {
        left = '';
        right = '';
        if (!midBlock) {
          midBlock = `<div class="curriculum-midyear-band">${curriculumSemTable('Midyear', midRows, midId)}</div>`;
        }
      }
      let hasLeft = !!left;
      let hasRight = !!right;
      let useSingleTop = (hasLeft && !hasRight) || (!hasLeft && hasRight);
      let topGrid =
        hasLeft || hasRight
          ? `<div class="curriculum-sem-grid${useSingleTop ? ' curriculum-sem-grid--single' : semGridClass}">${left || ''}${right || ''}</div>`
          : '';
      if (!topGrid && !midBlock) return '';
      return `<section class="curriculum-year-block" aria-labelledby="curriculum-banner-${escapeHtml(slug)}">
        <h3 class="curriculum-year-banner" id="curriculum-banner-${escapeHtml(slug)}">${escapeHtml(curriculumYearBlockBannerLabel(yr))}</h3>
        <div class="curriculum-year-layers">
          ${topGrid}
          ${midBlock}
        </div>
      </section>`;
    })
    .join('');
  return `
    <div class="curriculum-panel">
      ${curriculumToolbar}
      <div class="curriculum-years-stack">
        ${yearBlocksHtml || `<div class="curriculum-empty curriculum-empty-panel">No curriculum rows match these filters.</div>`}
      </div>
    </div>
  `;
}

function sectionRowsForUser() {
  let u = state.currentUser;
  let ayFilter = normalizeAcademicYearInput(state.sectionAcademicYearFilter) || DEFAULT_ACADEMIC_YEAR;
  let deptIds;
  if (u?.role === 'admin') {
    let df = state.sectionDeptFilter || 'all';
    deptIds = df === 'all' ? DEPARTMENTS.map(d => d.id) : [df].filter(Boolean);
  } else {
    deptIds = [u?.dept].filter(Boolean);
  }
  let rows = [];
  for (let deptId of deptIds) {
    if (!deptId) continue;
    let fromSamples = Array.isArray(SECTION_SAMPLES_BY_DEPT[deptId]) ? SECTION_SAMPLES_BY_DEPT[deptId] : [];
    let fromSched = state.schedules
      .filter(s => s.dept === deptId && scheduleAcademicYearForFilter(s) === ayFilter)
      .map(s => s.section);
    let all = [...new Set([...fromSamples, ...fromSched].map(s => String(s || '').trim()).filter(Boolean))];
    all.forEach(sec => rows.push({ dept: deptId, year: sectionYearFromLabel(sec) || '—', section: sec }));
  }
  rows.sort((a, b) =>
    (getDept(a.dept)?.name || a.dept).localeCompare(getDept(b.dept)?.name || b.dept) ||
    String(a.year).localeCompare(String(b.year)) ||
    String(a.section).localeCompare(String(b.section)),
  );
  return rows;
}
function renderSectionForm(d) {
  d = d || {};
  let u = state.currentUser;
  let isAdmin = u?.role === 'admin';
  let deptVal = d.dept || (isAdmin ? DEPARTMENTS[0]?.id : u?.dept) || '';
  let deptOpts = isAdmin
    ? DEPARTMENTS.map(x => `<option value="${escapeHtml(x.id)}" ${deptVal === x.id ? 'selected' : ''}>${escapeHtml(x.code)} — ${escapeHtml(x.name)}</option>`).join('')
    : `<option value="${escapeHtml(deptVal)}" selected>${escapeHtml(getDept(deptVal)?.code || '')} — ${escapeHtml(getDept(deptVal)?.name || '')}</option>`;
  let deptDis = isAdmin ? '' : 'disabled';
  let yearOpts = SCHEDULE_FORM_YEARS.map(y => `<option value="${escapeHtml(y)}" ${d.year === y ? 'selected' : ''}>${escapeHtml(y)}</option>`).join('');
  return `<div class="form-grid form-grid-stacked">
    <div class="form-group"><label class="form-label" for="sec_dept">Department</label><select class="form-select" id="sec_dept" ${deptDis}>${deptOpts}</select></div>
    <div class="form-group"><label class="form-label" for="sec_year">Year</label><select class="form-select" id="sec_year"><option value="">Select year...</option>${yearOpts}</select></div>
    <div class="form-group"><label class="form-label" for="sec_name">Section</label><input class="form-input" id="sec_name" value="${escapeHtml(d.section || '')}" placeholder="e.g. BSIE IGK"></div>
    <input type="hidden" id="sec_edit_dept" value="${escapeHtml(d._oldDept || '')}">
    <input type="hidden" id="sec_edit_section" value="${escapeHtml(d._oldSection || '')}">
  </div>`;
}
function renderSectionPage() {
  let u = state.currentUser;
  if (!(u?.role === 'admin' || u?.role === 'chairperson')) {
    return '<div class="card"><div class="card-body">You do not have access to Sections.</div></div>';
  }
  if (state.sectionYearFilter !== 'all' && !SCHEDULE_FORM_YEARS.includes(state.sectionYearFilter)) state.sectionYearFilter = 'all';
  if (u?.role === 'admin' && state.sectionDeptFilter !== 'all' && !DEPARTMENTS.some(d => d.id === state.sectionDeptFilter)) {
    state.sectionDeptFilter = 'all';
  }
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let sectionAyFilter = normalizeAcademicYearInput(state.sectionAcademicYearFilter) || termAy;
  let ayPresets = typeof termAcademicYearOptions === 'function' ? termAcademicYearOptions() : [];
  let ayCustom = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions : [];
  let aySet = new Set([...ayPresets, ...ayCustom].map(normalizeAcademicYearInput).filter(Boolean));
  for (let s of state.schedules) aySet.add(scheduleAcademicYearForFilter(s));
  aySet.add(termAy);
  let sectionAyOptions = [...aySet].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)));
  if (!sectionAyOptions.includes(sectionAyFilter)) sectionAyFilter = termAy;
  state.sectionAcademicYearFilter = sectionAyFilter;
  let rows = sectionRowsForUser();
  if (state.sectionYearFilter !== 'all') rows = rows.filter(r => r.year === state.sectionYearFilter);
  let yearOpts = [['all', 'All Year Levels'], ...SCHEDULE_FORM_YEARS.map(y => [y, y])]
    .map(([v, rawLabel]) => {
      let lab =
        v === 'all'
          ? 'All Year Levels'
          : rawLabel === '1st Year'
            ? 'First Year'
            : rawLabel === '2nd Year'
              ? 'Second Year'
              : rawLabel === '3rd Year'
                ? 'Third Year'
                : rawLabel === '4th Year'
                  ? 'Fourth Year'
                  : rawLabel;
      return `<option value="${escapeHtml(v)}" ${state.sectionYearFilter === v ? 'selected' : ''}>${escapeHtml(lab)}</option>`;
    })
    .join('');
  let ayOpts = sectionAyOptions
    .map(ay => `<option value="${escapeHtml(ay)}" ${sectionAyFilter === ay ? 'selected' : ''}>${escapeHtml(ay)}</option>`)
    .join('');
  let deptToolbarField = '';
  if (u?.role === 'admin') {
    let deptF = state.sectionDeptFilter || 'all';
    let deptOpts =
      `<option value="all" ${deptF === 'all' ? 'selected' : ''}>All departments</option>` +
      DEPARTMENTS.map(
        d =>
          `<option value="${escapeHtml(d.id)}" ${deptF === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`,
      ).join('');
    deptToolbarField = `<div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="sectionDeptFilter" aria-label="Department filter">${deptOpts}</select>
      </div>`;
  }
  let yearToolbarField = `<div class="curriculum-filter-field curriculum-filter-field--inline">
      <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="sectionYearFilter" aria-label="Year level filter">${yearOpts}</select>
    </div>`;
  let ayToolbarField = `<div class="curriculum-filter-field curriculum-filter-field--inline">
      <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="sectionAcademicYearFilter" aria-label="Academic year filter">${ayOpts}</select>
    </div>`;
  let sectionToolbar = `<div class="curriculum-toolbar-block">
    <div class="curriculum-toolbar-filters">
      ${deptToolbarField}
      ${yearToolbarField}
      ${ayToolbarField}
    </div>
  </div>`;
  return `${sectionToolbar}
    <div class="card"><div class="card-body">
      <div class="table-wrap"><table class="section-page-table"><thead><tr><th class="section-room-dept-icon-th" aria-label="Department code"></th><th>Department</th><th>Section</th><th>Year</th><th>Actions</th></tr></thead><tbody>
        ${rows.map(r => `<tr><td class="section-room-dept-icon-td">${deptBadgeHtml(r.dept)}</td><td>${departmentDisplayNameOnly(r.dept)}</td><td>${escapeHtml(r.section)}</td><td>${escapeHtml(r.year)}</td><td><button class="btn btn-outline btn-sm" data-editsection="${escapeHtml(r.dept)}::${escapeHtml(r.section)}">Edit</button> <button class="btn btn-danger btn-sm" data-delsection="${escapeHtml(r.dept)}::${escapeHtml(r.section)}">Delete</button></td></tr>`).join('')}
      </tbody></table></div>
    </div></div>`;
}

function roomRecordFromCatalog(roomId) {
  if (!roomId) return null;
  let fromState = state.rooms.find(r => r.id === roomId);
  if (fromState) return { ...fromState };
  let bundle = typeof ROOMS !== 'undefined' && Array.isArray(ROOMS) ? ROOMS : [];
  let fromBundle = bundle.find(r => r.id === roomId);
  return fromBundle ? { ...fromBundle, type: fromBundle.type || 'classroom' } : null;
}

function renderRoomForm(d) {
  d = d || {};
  let u = state.currentUser;
  let isAdmin = u?.role === 'admin';
  let deptVal = d.dept || (isAdmin ? DEPARTMENTS[0]?.id : u?.dept) || '';
  let deptOpts = isAdmin
    ? DEPARTMENTS.map(
        x =>
          `<option value="${escapeHtml(x.id)}" ${deptVal === x.id ? 'selected' : ''}>${escapeHtml(x.code)} — ${escapeHtml(x.name)}</option>`,
      ).join('')
    : `<option value="${escapeHtml(deptVal)}" selected>${escapeHtml(getDept(deptVal)?.code || '')} — ${escapeHtml(getDept(deptVal)?.name || '')}</option>`;
  let deptDis = isAdmin ? '' : 'disabled';
  let typeVal = String(d.type || 'classroom').toLowerCase();
  if (typeVal !== 'classroom' && typeVal !== 'laboratory') typeVal = 'classroom';
  return `<div class="form-grid form-grid-stacked">
    <div class="form-group"><label class="form-label" for="room_dept">Department</label><select class="form-select" id="room_dept" ${deptDis}>${deptOpts}</select></div>
    <div class="form-group"><label class="form-label" for="room_name">Room name</label><input class="form-input" id="room_name" value="${escapeHtml(d.name || '')}" placeholder="e.g. MDHP 303" autocomplete="off"></div>
    <div class="form-group"><label class="form-label" for="room_type">Type</label><select class="form-select" id="room_type"><option value="classroom" ${typeVal === 'classroom' ? 'selected' : ''}>Lecture</option><option value="laboratory" ${typeVal === 'laboratory' ? 'selected' : ''}>Laboratory</option></select></div>
    <input type="hidden" id="room_edit_id" value="${escapeHtml(d.id || '')}">
  </div>`;
}

/** Room records page: filter values for `type` column. */
const ROOM_PAGE_TYPE_FILTERS = ['all', 'classroom', 'laboratory'];

/** Timetable type column: LEC / LAB (stored values still classroom / laboratory). */
function roomPageTypeTableAbbrev(t) {
  let x = String(t || '').toLowerCase();
  if (x === 'laboratory') return 'LAB';
  if (x === 'classroom') return 'LEC';
  return '—';
}

function countSchedulesUsingRoom(roomId) {
  if (!roomId || roomId === ROOM_OTHER_ID) return 0;
  return state.schedules.filter(s => s.roomId === roomId).length;
}

function countRequestsUsingRoom(roomId) {
  if (!roomId || roomId === ROOM_OTHER_ID) return 0;
  return state.requests.filter(r => r.roomId === roomId).length;
}

/** Clear Supabase FKs so `rooms` row can be deleted: drop requests for this room; reassign schedules to custom room label. */
async function supabaseDetachRoomDependents(roomId, orphanRoomLabel) {
  let label = (orphanRoomLabel && String(orphanRoomLabel).trim()) || 'Room removed';
  const { error: reqErr } = await window.cenSupabase.from('requests').delete().eq('room_id', roomId);
  if (reqErr) return reqErr;
  let patch = { room_id: null, room_other_name: label };
  let { error: schErr } = await window.cenSupabase.from('schedules').update(patch).eq('room_id', roomId);
  if (schErr && isSupabaseMissingColumnError(schErr, 'room_other_name')) {
    schErr = (await window.cenSupabase.from('schedules').update({ room_id: null }).eq('room_id', roomId)).error;
  }
  if (schErr) return schErr;
  return null;
}

function applyLocalRoomDeleteSideEffects(roomId, rec) {
  let label = (rec?.name && String(rec.name).trim()) || 'Room removed';
  state.schedules = state.schedules.map(s =>
    s.roomId === roomId ? { ...s, roomId: ROOM_OTHER_ID, roomOtherName: label } : s,
  );
  state.requests = state.requests.filter(r => r.roomId !== roomId);
}

function renderRoomPage() {
  let u = state.currentUser;
  if (!(u?.role === 'admin' || u?.role === 'chairperson')) {
    return '<div class="card"><div class="card-body">You do not have access to Rooms.</div></div>';
  }
  if (!ROOM_PAGE_TYPE_FILTERS.includes(state.roomTypeFilter)) state.roomTypeFilter = 'all';
  if (u?.role === 'admin' && state.roomDeptFilter !== 'all' && !DEPARTMENTS.some(d => d.id === state.roomDeptFilter)) {
    state.roomDeptFilter = 'all';
  }
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let roomAyFilter = normalizeAcademicYearInput(state.roomAcademicYearFilter) || termAy;
  let ayPresets = typeof termAcademicYearOptions === 'function' ? termAcademicYearOptions() : [];
  let ayCustom = Array.isArray(state.termAcademicYearCustomOptions) ? state.termAcademicYearCustomOptions : [];
  let aySet = new Set([...ayPresets, ...ayCustom].map(normalizeAcademicYearInput).filter(Boolean));
  for (let s of state.schedules) aySet.add(scheduleAcademicYearForFilter(s));
  aySet.add(termAy);
  let roomAyOptions = [...aySet].filter(Boolean).sort((a, b) => String(a).localeCompare(String(b)));
  if (!roomAyOptions.includes(roomAyFilter)) roomAyFilter = termAy;
  state.roomAcademicYearFilter = roomAyFilter;
  let ayOpts = roomAyOptions
    .map(ay => `<option value="${escapeHtml(ay)}" ${roomAyFilter === ay ? 'selected' : ''}>${escapeHtml(ay)}</option>`)
    .join('');
  let allRooms = roomsSourceForApp().slice();
  allRooms.sort((a, b) => {
    let da = getDept(a.dept)?.name || a.dept || '';
    let db = getDept(b.dept)?.name || b.dept || '';
    if (da !== db) return da.localeCompare(db);
    return String(a.name || '').localeCompare(String(b.name || ''), undefined, { sensitivity: 'base' });
  });
  let rows = allRooms;
  if (u?.role === 'chairperson') {
    rows = rows.filter(r => r.dept === u.dept);
  } else if (u?.role === 'admin' && state.roomDeptFilter !== 'all') {
    rows = rows.filter(r => r.dept === state.roomDeptFilter);
  }
  if (state.roomTypeFilter !== 'all') {
    rows = rows.filter(r => String(r.type || 'classroom').toLowerCase() === state.roomTypeFilter);
  }
  let typeOpts = [
    ['all', 'All room types'],
    ['classroom', 'Lecture'],
    ['laboratory', 'Laboratory'],
  ]
    .map(
      ([v, lab]) =>
        `<option value="${escapeHtml(v)}" ${state.roomTypeFilter === v ? 'selected' : ''}>${escapeHtml(lab)}</option>`,
    )
    .join('');
  let deptToolbarField = '';
  if (u?.role === 'admin') {
    let deptF = state.roomDeptFilter || 'all';
    let deptOpts =
      `<option value="all" ${deptF === 'all' ? 'selected' : ''}>All departments</option>` +
      DEPARTMENTS.map(
        d =>
          `<option value="${escapeHtml(d.id)}" ${deptF === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`,
      ).join('');
    deptToolbarField = `<div class="curriculum-filter-field curriculum-filter-field--inline">
        <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="roomDeptFilter" aria-label="Department filter">${deptOpts}</select>
      </div>`;
  }
  let typeToolbarField = `<div class="curriculum-filter-field curriculum-filter-field--inline">
      <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="roomTypeFilter" aria-label="Room type filter">${typeOpts}</select>
    </div>`;
  let ayToolbarField = `<div class="curriculum-filter-field curriculum-filter-field--inline">
      <select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="roomAcademicYearFilter" aria-label="Academic year filter">${ayOpts}</select>
    </div>`;
  let roomToolbar = `<div class="curriculum-toolbar-block">
    <div class="curriculum-toolbar-filters">
      ${deptToolbarField}
      ${typeToolbarField}
      ${ayToolbarField}
    </div>
  </div>`;
  let tbody =
    rows.length === 0
      ? `<tr><td colspan="6" class="room-page-empty">No rooms match these filters.</td></tr>`
      : rows
          .map(
            r =>
              `<tr><td class="section-room-dept-icon-td">${deptBadgeHtml(r.dept)}</td><td>${departmentDisplayNameOnly(r.dept)}</td><td>${escapeHtml(r.name || '')}</td><td>${escapeHtml(roomPageTypeTableAbbrev(r.type))}</td><td><button type="button" class="btn btn-outline btn-sm" data-editroom="${escapeHtml(r.id)}">Edit</button> <button type="button" class="btn btn-danger btn-sm" data-delroom="${escapeHtml(r.id)}">Delete</button></td></tr>`,
          )
          .join('');
  return `${roomToolbar}
    <div class="card"><div class="card-body">
      <div class="table-wrap"><table class="room-page-table"><thead><tr><th class="section-room-dept-icon-th" aria-label="Department code"></th><th>Department</th><th>Room</th><th>Type</th><th>Actions</th></tr></thead><tbody>
        ${tbody}
      </tbody></table></div>
    </div></div>`;
}

const FORMS_DOC_BADGE = {
  faculty: { class: 'forms-doc-badge--ins', text: 'AA-INS' },
  preenroll: { class: 'forms-doc-badge--mis', text: 'OP-MIS' },
  schedule: { class: 'forms-doc-badge--ins2', text: 'AA-INS' },
};

/** Days → compact schedule label (e.g. MW, TTh, MWF) for form exports. */
function scheduleDaysToAbbrev(days) {
  if (!Array.isArray(days) || !days.length) return '—';
  const order = Array.isArray(DAYS_WITH_SATURDAY) ? DAYS_WITH_SATURDAY : DAYS;
  const ab = { Monday: 'M', Tuesday: 'T', Wednesday: 'W', Thursday: 'Th', Friday: 'F', Saturday: 'Sat' };
  const sorted = days.filter(d => order.includes(d)).sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return sorted.length ? sorted.map(d => ab[d] || d.slice(0, 2)).join('') : '—';
}

function normalizeFormsPageState() {
  let ay = normalizeAcademicYearInput(state.formsAcademicYear) || '';
  if (!ay) {
    ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    state.formsAcademicYear = ay;
  } else {
    state.formsAcademicYear = ay;
  }
  if (!state.formsSemester || !FORMS_SEMESTER_OPTIONS.includes(state.formsSemester)) {
    let ts = state.termSemester || '1st Semester';
    state.formsSemester = FORMS_SEMESTER_OPTIONS.includes(ts) ? ts : '1st Semester';
  }
  if (!['all', ...SCHEDULE_FORM_YEARS].includes(state.formsYearLevel)) state.formsYearLevel = 'all';
  if (state.formsSection == null) state.formsSection = 'all';
}

function formsDeptIdForUser(u) {
  return (u && u.role === 'chairperson' && u.dept) ? u.dept : '';
}

function scheduleMatchesFormsFilters(s, f) {
  if (!s) return false;
  if (scheduleAcademicYearForFilter(s) !== f.ay) return false;
  if ((s.schSem || '').trim() !== f.sem) return false;
  if (s.dept !== f.dept) return false;
  if (f.yearLevel && f.yearLevel !== 'all') {
    let sy = (s.schYear || '').trim();
    if (sy) {
      if (sy !== f.yearLevel) return false;
    } else {
      if (sectionYearFromLabel(s.section) !== f.yearLevel) return false;
    }
  }
  if (f.section && f.section !== 'all') {
    if (String(s.section || '').trim() !== f.section) return false;
  }
  if (f.professorId) {
    if (!s.professorId || s.professorId !== f.professorId) return false;
  }
  return true;
}

/**
 * Build export filter context. `formExportType` is faculty | preenroll | schedule.
 * `overrides` can include: ay, sem, yearLevel, section, dept, facultyId (faculty form only).
 */
function getFormsFilterContext(overrides, formExportType) {
  normalizeFormsPageState();
  let o = overrides && typeof overrides === 'object' ? overrides : null;
  if (!o) {
    let fsel = typeof document !== 'undefined' && document.getElementById('formsFacultySelect');
    if (fsel && fsel.value) state.formsFacultyId = fsel.value;
  }
  let u = state.currentUser;
  let dept = (o && o.dept) || formsDeptIdForUser(u);
  if (!dept) {
    return null;
  }
  let ay = normalizeAcademicYearInput(
    o && o.ay != null && o.ay !== '' ? o.ay : state.formsAcademicYear,
  ) || DEFAULT_ACADEMIC_YEAR;
  let sem = (o && o.sem != null && o.sem !== '' ? o.sem : state.formsSemester) || '1st Semester';
  let yearLevel = (o && o.yearLevel != null ? o.yearLevel : state.formsYearLevel) || 'all';
  let section = (o && o.section != null ? o.section : state.formsSection) || 'all';
  let facultyId;
  if (o && Object.prototype.hasOwnProperty.call(o, 'facultyId')) {
    facultyId = o.facultyId || '';
  } else {
    facultyId = state.formsFacultyId || '';
  }
  let f = { ay, sem, dept, yearLevel, section };
  if (formExportType === 'faculty' && facultyId) {
    f.professorId = facultyId;
  }
  let scheds = state.schedules.filter(s => scheduleMatchesFormsFilters(s, f));
  scheds.sort((a, b) => {
    let ca = (getSubject(a.subjectId)?.code || '').localeCompare(getSubject(b.subjectId)?.code || '');
    if (ca !== 0) return ca;
    return String(a.section || '').localeCompare(String(b.section || ''));
  });
  return {
    ay,
    sem,
    dept,
    yearLevel,
    section,
    facultyId: facultyId || '',
    scheds,
    formExportType: formExportType || 'schedule',
    chair: u,
    chairName: u?.name || 'Program Chair',
    deptName: getDept(dept)?.name || 'Engineering',
    deptCode: getDept(dept)?.code || String(dept).toUpperCase(),
  };
}

function formsSemesterSpelled(sem) {
  if (sem === '2nd Semester') return '2nd';
  if (sem === '1st Semester') return '1st';
  if (sem === 'Midyear') return 'Midyear';
  return (sem || '').toLowerCase();
}

/** Uppercase semester + AY line for Schedule of Subjects (matches official spreadsheet, e.g. 1ST SEMESTER 2025-2026). */
function scheduleOfSubjectsSemAyUpperPlain(ctx) {
  const sem = ctx.sem || '';
  let mid = '';
  if (sem === '1st Semester') mid = '1ST SEMESTER';
  else if (sem === '2nd Semester') mid = '2ND SEMESTER';
  else if (sem === 'Midyear') mid = 'MIDYEAR';
  else mid = String(sem).toUpperCase().replace(/\s+/g, ' ').trim();
  return `${mid} ${ctx.ay || ''}`.trim();
}

/**
 * Schedule of Subjects header: left column To / From / Course·Yr·Section; right column Date / Schedule from Sem/AY.
 * Values are bold + underlined (spreadsheet style). `esc` is escapeHtml or Excel esc().
 */
function buildScheduleOfSubjectsExportMetaBlock(sectionKey, ctx, dateStr, esc, useInlineStyles) {
  const semAy = esc(scheduleOfSubjectsSemAyUpperPlain(ctx));
  const sec = esc(sectionKey != null && String(sectionKey).trim() !== '' ? String(sectionKey).trim() : '—');
  const dept = esc(ctx.deptName);
  const dateE = esc(dateStr);
  if (useInlineStyles) {
    const row = (lbl, valInner) =>
      `<div style="margin:0 0 5px;line-height:1.45">${lbl} <b><u>${valInner}</u></b></div>`;
    return `<table style="width:100%;border-collapse:collapse;margin:0 0 12px;font-size:10.5pt;font-family:Arial,sans-serif"><tr>
<td style="width:50%;vertical-align:top;padding:0 14px 0 0;line-height:1.45">
${row('<b style="white-space:pre">To            :</b>', 'VP-ACAD')}
${row('<b style="white-space:pre">From        :</b>', dept)}
${row('<b>Course/Yr/Section    :</b>', sec)}
</td>
<td style="width:50%;vertical-align:top;line-height:1.45">
${row('<b>Date :</b>', dateE)}
${row('<b>Schedule from Sem/AY      :</b>', semAy)}
</td>
</tr></table>`;
  }
  return `<table class="sos-meta-2col"><tr>
<td class="sos-meta-left">
  <div class="sos-meta-row"><span class="sos-meta-lbl">To            :</span> <span class="sos-val-u">VP-ACAD</span></div>
  <div class="sos-meta-row"><span class="sos-meta-lbl">From        :</span> <span class="sos-val-u">${dept}</span></div>
  <div class="sos-meta-row"><span class="sos-meta-lbl">Course/Yr/Section    :</span> <span class="sos-val-u">${sec}</span></div>
</td>
<td class="sos-meta-right">
  <div class="sos-meta-row"><span class="sos-meta-lbl">Date :</span> <span class="sos-val-u">${dateE}</span></div>
  <div class="sos-meta-row"><span class="sos-meta-lbl">Schedule from Sem/AY      :</span> <span class="sos-val-u">${semAy}</span></div>
</td>
</tr></table>`;
}

function formsPrintShellDocument(title, innerBody) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(
    title,
  )}</title><style>
/* Portrait A4 for all form print/PDF exports (Faculty Load, Pre-Enrollment, etc.). */
@page { size: A4 portrait; margin: 10mm; }
html { height: auto; }
body { font-family: 'Times New Roman', Times, serif; font-size: 10.5pt; color: #111; line-height: 1.25; margin: 0; min-height: 0; height: auto; }
h1.doc-title { text-align: center; font-size: 13pt; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 0.02em; }
.slu-line { text-align: center; font-size: 10pt; margin: 0; }
.slu-line.small { font-size: 9pt; color: #333; }
.meta-block { margin: 10px 0; font-size: 10pt; }
.meta-row { display: flex; justify-content: space-between; margin: 2px 0; flex-wrap: wrap; }
table.form-grid { width: 100%; border-collapse: collapse; margin: 8px 0; }
table.form-grid th, table.form-grid td { border: 1px solid #222; padding: 4px 5px; vertical-align: top; }
table.form-grid th { background: #f2f2f2; font-size: 8.5pt; text-align: center; }
.t-right { text-align: right; }
.t-center { text-align: center; }
.sig { margin-top: 20px; display: flex; justify-content: space-between; font-size: 9.5pt; }
.sig-block { text-align: center; min-width: 200px; }
.footer-ref { font-size: 8pt; margin-top: 16px; color: #444; }
@media print {
  @page { size: A4 portrait; margin: 10mm; }
  html, body { height: auto !important; overflow: visible !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  /* Hide meta footnotes on paper/PDF; not part of the official form. */
  .footer-ref,
  .fl-footer-ref { display: none !important; }
}
</style></head><body>${innerBody}</body></html>`;
}

function buildFacultyLoadFormHtml(ctx) {
  const FL_DEAN = 'DR. MARIA CORAZON B. ABEJO';
  const FL_VP = 'DR. DHENALYN A. DEJELO';
  /** At most this many blank rows after data (single-page print); a few rows if timetable empty. */
  const FL_MAX_EXTRA_EMPTY = 2;
  const FL_EMPTY_WHEN_NONE = 3;
  let facultyId = ctx.facultyId;
  if (!facultyId) {
    return `<p class="slu-line">Select a faculty member on the Forms page, then export again.</p>`;
  }
  let prof = getProfessor(facultyId);
  let profName = prof?.name || 'Faculty';
  let profNameU = profName.toUpperCase();
  let prows = ctx.scheds;
  let semSpell = formsSemesterSpelled(ctx.sem);
  let bodyIntro = `Please be informed of your teaching load/assignment in the College of Engineering this ${semSpell} sem AY ${ctx.ay}.`;
  let unitSum = 0;
  let prepSet = new Set();
  let contactSum = 0;
  let rows = [];
  for (let s of prows) {
    let sub = getSubject(s.subjectId);
    let units = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0;
    unitSum += units;
    if (s.subjectId) prepSet.add(s.subjectId);
    let wk = scheduleWeeklyHoursFromEntry(s);
    contactSum += wk;
    let timeStr =
      s.timeStart && s.timeEnd
        ? `${fmt12AmPm(s.timeStart)} – ${fmt12AmPm(s.timeEnd)}`
        : '—';
    rows.push(`<tr>
  <td>${escapeHtml(sub?.code || '—')}</td>
  <td>${escapeHtml(sub?.name || '—')}</td>
  <td class="fl-tc">${escapeHtml(String(units || ''))}</td>
  <td class="fl-tc">${escapeHtml(formatHoursValue(wk))}</td>
  <td class="fl-tc">${escapeHtml(scheduleDaysToAbbrev(s.days))}</td>
  <td class="fl-tc">${escapeHtml(timeStr)}</td>
  <td>${escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName))}</td>
  <td>${escapeHtml(s.section || '—')}</td>
</tr>`);
  }
  let emptyRow = '<tr><td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
  let extraEmpty = prows.length === 0 ? FL_EMPTY_WHEN_NONE : FL_MAX_EXTRA_EMPTY;
  for (let i = prows.length; i < prows.length + extraEmpty; i++) rows.push(emptyRow);
  let numSubjects = prepSet.size;
  let numPreps = prepSet.size;
  let emptyNote =
    prows.length === 0
      ? `<p class="fl-note">No scheduled classes for this faculty under the selected academic year and semester. Add entries in <strong>Timetable Schedule</strong>, then export again.</p>`
      : '';
  let chairNameU = (ctx.chairName || 'Program Chair').toUpperCase();
  return `<style>
@page { size: A4 portrait; margin: 10mm; }
.fl-doc { font-family: Calibri, Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 11pt; color: #111; line-height: 1.2; padding: 5px 8px 6px; box-sizing: border-box; width: 100%; max-width: 100%; margin: 0; }
.fl-hd { text-align: center; margin: 0 0 4px; }
.fl-hd-line1 { font-weight: 700; font-size: 11pt; margin: 0; letter-spacing: 0.02em; line-height: 1.15; }
.fl-hd-line2 { margin: 0; font-size: 11pt; line-height: 1.15; }
.fl-hd-line3 { font-weight: 700; font-size: 11pt; margin: 0; line-height: 1.15; }
.fl-addr { margin: 0 0 4px; line-height: 1.15; }
.fl-addr-name { font-weight: 700; margin: 0; padding: 0; }
.fl-addr-line { margin: 0; padding: 0; }
/* Blank “insert row” below SLSU-Lucban Quezon (like Excel) before salutation. */
.fl-insert { display: block; margin: 0; padding: 0; line-height: 0; font-size: 0; clear: both; }
.fl-insert-after-addr { min-height: 14px; height: 14px; }
.fl-insert-before-summary { min-height: 12px; height: 12px; margin-top: 2px; }
.fl-insert-before-total { min-height: 10px; height: 10px; margin: 4px 0 2px; }
.fl-insert-before-chair { min-height: 16px; height: 16px; margin: 4px 0 2px; }
.fl-dear { margin: 0 0 2px; font-weight: 700; line-height: 1.2; }
.fl-intro { margin: 0 0 5px; text-align: justify; line-height: 1.2; }
.fl-note { margin: 0 0 5px; color: #333; font-size: 10pt; line-height: 1.2; }
.fl-table { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 0 0 5px; font-size: 9.5pt; line-height: 1.15; }
.fl-table th, .fl-table td { border: 1px solid #000; padding: 2px 4px; vertical-align: middle; word-wrap: break-word; }
.fl-table thead th { background: #fff; font-weight: 700; text-align: center; }
.fl-tc { text-align: center; }
.fl-val { font-weight: 700; margin-left: 4px; }
.fl-blank { border-bottom: 1px solid #000; min-width: 100px; display: inline-block; margin-left: 3px; vertical-align: baseline; }
/* Footer as table + same colgroup as .fl-table so “Contact Hours” starts exactly under Units (col 3). */
.fl-footer-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin: 0 0 8px;
  font-size: 10pt;
  line-height: 1.28;
}
.fl-footer-table td {
  border: none;
  vertical-align: top;
  padding: 0;
}
.fl-footer-table .fl-footer-left-td {
  padding-right: 6px;
}
.fl-footer-table .fl-footer-right-td {
  padding-left: 2px;
}
.fl-footer-line { margin: 0 0 3px; padding: 0; text-align: left; }
.fl-footer-line:last-child { margin-bottom: 0; }
/* Closing lines right-aligned under Room/Section side (Excel). */
.fl-footer-table .fl-footer-right-td .fl-close { margin-top: 6px; text-align: right; line-height: 1.25; }
.fl-close p { margin: 0 0 2px; padding: 0; }
.fl-sig-name { font-weight: 700; margin: 0; }
.fl-sig-title { margin: 2px 0 0; font-weight: 400; }
.fl-foot-sig { display: table; width: 100%; margin-top: 0; font-size: 10pt; line-height: 1.15; }
.fl-insert-before-noted { min-height: 14px; height: 14px; margin-top: 4px; }
.fl-foot-row { display: table-row; }
.fl-foot-cell { display: table-cell; width: 50%; vertical-align: top; padding-top: 2px; }
.fl-foot-label { margin: 0 0 3px; }
.fl-foot-name { font-weight: 700; margin: 0 0 1px; }
.fl-foot-title { margin: 0; }
.fl-footer-ref { font-size: 7pt; margin-top: 3px; color: #555; line-height: 1.1; }
@media print {
  @page { size: A4 portrait; margin: 10mm; }
  html, body { margin: 0 !important; padding: 0 !important; height: auto !important; overflow: visible !important; }
  .fl-doc {
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
    max-width: none !important;
    width: 100% !important;
    overflow: visible !important;
    page-break-inside: auto;
  }
  .fl-footer-ref { display: none !important; }
}
</style>
<div class="fl-doc">
  <header class="fl-hd">
    <p class="fl-hd-line1">SOUTHERN LUZON STATE UNIVERSITY</p>
    <p class="fl-hd-line2">Lucban, Quezon</p>
    <p class="fl-hd-line3">COLLEGE OF ENGINEERING</p>
  </header>
  <div class="fl-addr">
    <p class="fl-addr-name">${escapeHtml(profNameU)}</p>
    <p class="fl-addr-line">College of Engineering</p>
    <p class="fl-addr-line">SLSU-Lucban Quezon</p>
  </div>
  <div class="fl-insert fl-insert-after-addr" aria-hidden="true"></div>
  <p class="fl-dear">Dear ${escapeHtml(profNameU)}</p>
  <p class="fl-intro">${escapeHtml(bodyIntro)}</p>
  ${emptyNote}
  <table class="fl-table" role="grid" aria-label="Teaching load">
    <colgroup>
      <col class="fl-col-code" style="width:8%">
      <col class="fl-col-subject" style="width:30%">
      <col class="fl-col-units" style="width:5%">
      <col class="fl-col-hrs" style="width:6%">
      <col class="fl-col-day" style="width:9%">
      <col class="fl-col-time" style="width:9%">
      <col class="fl-col-room" style="width:13%">
      <col class="fl-col-section" style="width:20%">
    </colgroup>
    <thead>
      <tr>
        <th rowspan="2">Code</th>
        <th rowspan="2">Subject</th>
        <th rowspan="2">Units</th>
        <th rowspan="2">Hrs</th>
        <th colspan="2">Schedule</th>
        <th rowspan="2">Room</th>
        <th rowspan="2">Section/Student</th>
      </tr>
      <tr>
        <th>Day</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
${rows.join('\n')}
    </tbody>
  </table>
  <div class="fl-insert fl-insert-before-summary" aria-hidden="true"></div>
  <table class="fl-footer-table" role="presentation" aria-label="Summary">
    <colgroup>
      <col style="width:8%">
      <col style="width:30%">
      <col style="width:5%">
      <col style="width:6%">
      <col style="width:9%">
      <col style="width:9%">
      <col style="width:13%">
      <col style="width:20%">
    </colgroup>
    <tbody>
      <tr>
        <td colspan="2" class="fl-footer-left-td">
      <p class="fl-footer-line"><strong>Number of Subject</strong> <span class="fl-val">${escapeHtml(String(numSubjects))}</span></p>
      <p class="fl-footer-line"><strong>Number of Preparations</strong> <span class="fl-val">${escapeHtml(String(numPreps))}</span></p>
      <p class="fl-footer-line"><strong>Number of Units</strong> <span class="fl-val">${escapeHtml(String(unitSum))}</span></p>
        </td>
        <td colspan="6" class="fl-footer-right-td">
      <p class="fl-footer-line"><strong>Contact Hours</strong> <span class="fl-val">${escapeHtml(formatHoursValue(contactSum))}</span></p>
      <p class="fl-footer-line"><strong>Unit Workload</strong> <span class="fl-val">${escapeHtml(String(unitSum))}</span></p>
      <p class="fl-footer-line"><strong>Other Assignments</strong> <span class="fl-blank">&nbsp;</span></p>
      <div class="fl-insert fl-insert-before-total" aria-hidden="true"></div>
      <p class="fl-footer-line"><strong>Total</strong> <span class="fl-blank">&nbsp;</span></p>
      <p class="fl-footer-line"><strong>Excess Load</strong> <span class="fl-blank">&nbsp;</span></p>
      <div class="fl-close">
        <p>Very truly yours,</p>
        <div class="fl-insert fl-insert-before-chair" aria-hidden="true"></div>
        <p class="fl-sig-name">${escapeHtml(chairNameU)}</p>
        <p class="fl-sig-title">PROGRAM CHAIR</p>
      </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="fl-insert fl-insert-before-noted" aria-hidden="true"></div>
  <div class="fl-foot-sig">
    <div class="fl-foot-row">
      <div class="fl-foot-cell">
        <p class="fl-foot-label">Noted by:</p>
        <p class="fl-foot-name">${escapeHtml(FL_DEAN)}</p>
        <p class="fl-foot-title">Dean, College of Engineering</p>
      </div>
      <div class="fl-foot-cell">
        <p class="fl-foot-label">Approved by:</p>
        <p class="fl-foot-name">${escapeHtml(FL_VP)}</p>
        <p class="fl-foot-title">VP for Academic Affairs</p>
      </div>
    </div>
  </div>
  <p class="fl-footer-ref">${escapeHtml(ctx.deptName)} &mdash; AY ${escapeHtml(ctx.ay)} &middot; ${escapeHtml(ctx.sem)}. Data from timetable.</p>
</div>`;
}

function buildPreEnrollmentFormHtml(ctx) {
  const sec = ctx.section;
  const peStyle = `<style>
.pe-doc { font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 10.5pt; color: #111; line-height: 1.25; }
.pe-slu1 { text-align: center; font-size: 11pt; font-weight: 700; margin: 0; letter-spacing: 0.02em; }
.pe-slu2 { text-align: center; font-size: 10.5pt; margin: 2px 0 8px; }
.pe-title { text-align: center; font-size: 13pt; font-weight: 700; margin: 0 0 12px; letter-spacing: 0.06em; }
.pe-meta { width: 100%; border-collapse: collapse; margin: 0 0 10px; font-size: 10.5pt; }
.pe-meta td { vertical-align: bottom; padding: 4px 8px 6px 0; }
.pe-meta .pe-lbl { font-weight: 700; white-space: nowrap; }
.pe-meta .pe-blank { border-bottom: 1px solid #000; min-width: 180px; display: inline-block; }
.pe-pay { font-weight: 700; }
.pe-val { font-weight: 700; text-decoration: underline; }
.pe-sec-row { display: flex; justify-content: space-between; align-items: baseline; margin: 10px 0 6px; font-size: 10.5pt; font-weight: 700; }
.pe-sec-code { text-transform: none; }
.pe-subj-h { letter-spacing: 0.02em; }
.pe-grid { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 0 0 14px; font-size: 9.5pt; }
.pe-grid th, .pe-grid td { border: 1px solid #000; padding: 3px 4px; vertical-align: middle; word-wrap: break-word; }
.pe-grid thead th { background: #fff; font-weight: 700; text-align: center; }
.pe-grid tbody td:nth-child(1),
.pe-grid tbody td:nth-child(3),
.pe-grid tbody td:nth-child(4),
.pe-grid tbody td:nth-child(5),
.pe-grid tbody td:nth-child(6) { text-align: center; }
.pe-grid tbody td:nth-child(2) { text-align: left; }
.pe-total td { font-weight: 700; }
.pe-total .pe-total-lbl { text-align: right; }
.pe-total .pe-total-u { text-align: center; }
.pe-sig { margin-top: 22px; text-align: center; font-size: 10.5pt; }
.pe-sig-line { border-bottom: 1px solid #000; width: 220px; margin: 0 auto 4px; min-height: 18px; }
.pe-sig-cap { margin: 0; font-weight: 700; }
@media print {
  .pe-doc { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>`;
  const peHead = `${peStyle}<div class="pe-doc">
<p class="pe-slu1">SOUTHERN LUZON STATE UNIVERSITY</p>
<p class="pe-slu2">Lucban, Quezon</p>
<p class="pe-title">PRE-ENROLMENT FORM</p>`;
  const peStudentBlock = `<table class="pe-meta">
<tr>
  <td colspan="2"><span class="pe-lbl">STUDENT NUMBER:</span> <span class="pe-blank">&nbsp;</span></td>
  <td colspan="2"><span class="pe-pay">PAYMENT:</span> &nbsp; ☐ FULL &nbsp; &nbsp; ☐ PARTIAL</td>
</tr>
<tr>
  <td colspan="2"><span class="pe-lbl">STUDENT NAME:</span> <span class="pe-blank">&nbsp;</span></td>
  <td colspan="2"><span class="pe-lbl">SCHOOL YEAR:</span> <span class="pe-val">${escapeHtml(ctx.ay)}</span></td>
</tr>
<tr>
  <td colspan="2"><span class="pe-lbl">COURSE/YEAR:</span> <span class="pe-blank">&nbsp;</span></td>
  <td colspan="2"><span class="pe-lbl">SEMESTER:</span> <span class="pe-val">${escapeHtml(ctx.sem)}</span></td>
</tr>
</table>`;

  if (!sec || sec === 'all') {
    return `${peHead}
${peStudentBlock}
<p style="margin:12px 0">Choose a <strong>section</strong> in the export dialog (not &ldquo;All&rdquo;) so the subject list matches one class block, then export again.</p>
</div>`;
  }
  let rows0 = ctx.scheds.filter(s => String(s.section || '').trim() === sec);
  if (rows0.length === 0) {
    return `${peHead}
${peStudentBlock}
<div class="pe-sec-row"><span class="pe-sec-code">${escapeHtml(sec)}</span><span class="pe-subj-h">SUBJECTS TO BE TAKEN:</span></div>
<p style="margin:10px 0">No classes scheduled for <strong>${escapeHtml(sec)}</strong> under the current Academic Year, Semester, and year-level filters. Enter timetabled classes first.</p>
</div>`;
  }
  let totalU = 0;
  let bodyRows = rows0.map(s => {
    let sub = getSubject(s.subjectId);
    let u = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0;
    totalU += u;
    return `<tr>
  <td>${escapeHtml(sub?.code || '—')}</td>
  <td>${escapeHtml(sub?.name || '—')}</td>
  <td>${escapeHtml(String(u))}</td>
  <td>${escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName))}</td>
  <td>${escapeHtml(scheduleDaysToAbbrev(s.days))}</td>
  <td>${escapeHtml(fmt12(s.timeStart) + '-' + fmt12(s.timeEnd))}</td>
</tr>`;
  });
  return `${peHead}
${peStudentBlock}
<div class="pe-sec-row"><span class="pe-sec-code">${escapeHtml(sec)}</span><span class="pe-subj-h">SUBJECTS TO BE TAKEN:</span></div>
<table class="pe-grid">
<thead>
<tr>
  <th rowspan="2">SUBJECT<br/>CODE</th>
  <th rowspan="2">SUBJECT DESCRIPTION</th>
  <th rowspan="2">UNITS</th>
  <th rowspan="2">ROOM</th>
  <th colspan="2">SCHEDULE</th>
</tr>
<tr>
  <th>DAY</th>
  <th>TIME</th>
</tr>
</thead>
<tbody>
${bodyRows.join('')}
<tr class="pe-total">
  <td colspan="2" class="pe-total-lbl">TOTAL</td>
  <td class="pe-total-u">${escapeHtml(String(totalU))}</td>
  <td colspan="3"></td>
</tr>
</tbody>
</table>
<div class="footer-ref">OP-MIS-1.06F1, REV.0 &mdash; AY ${escapeHtml(ctx.ay)} ${escapeHtml(ctx.sem)}. Data from timetable.</div>
<div class="pe-sig">
  <div class="pe-sig-line"></div>
  <p class="pe-sig-cap">(DEAN/ADVISER)</p>
</div>
</div>`;
}

function buildScheduleOfSubjectsHtml(ctx) {
  const SOS_DEAN = 'DR. MARIA CORAZON B. ABEJO';
  const dateStr = new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
  const semAy = scheduleOfSubjectsSemAyUpperPlain(ctx);
  const sectionKeys = (() => {
    if (ctx.section && ctx.section !== 'all') return [String(ctx.section).trim()];
    return [...new Set(ctx.scheds.map(s => String(s.section || '').trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  })();
  const sec1 = sectionKeys[0] || '—';
  const sec2 = sectionKeys[1] || '';
  const block1 = scheduleXlsxSectionRows(ctx, sec1);
  const block2 = sec2 ? scheduleXlsxSectionRows(ctx, sec2) : { data: [], totalUnits: 0 };
  const renderRows = rows => {
    const maxRows = 7;
    let out = '';
    for (let i = 0; i < maxRows; i++) {
      const r = rows[i];
      out += `<tr>
  <td>${escapeHtml(r?.code || '')}</td>
  <td>${escapeHtml(r?.name || '')}</td>
  <td class="c">${escapeHtml(r ? String(r.units) : '')}</td>
  <td class="c">${escapeHtml(r?.day || '')}</td>
  <td class="c">${escapeHtml(r?.time || '')}</td>
  <td class="c">${escapeHtml(r?.room || '')}</td>
  <td>${escapeHtml(r?.faculty || '')}</td>
</tr>`;
    }
    return out;
  };
  const styleBlock = `<style>
.sos-doc { font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 10pt; color: #111; line-height: 1.2; }
.sos-title { text-align: center; font-size: 13pt; font-weight: 700; margin: 0 0 8px; letter-spacing: .02em; }
.sos-meta { width: 100%; border-collapse: collapse; margin: 0 0 8px; }
.sos-meta td { vertical-align: top; padding: 1px 0; }
.sos-meta .l { width: 54%; }
.sos-meta .r { width: 46%; text-align: left; }
.sos-line { margin: 0 0 2px; }
.sos-sec { margin: 8px 0 2px; font-size: 10pt; }
.sos-grid { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 0 0 8px; font-size: 9pt; }
.sos-grid th, .sos-grid td { border: 1px solid #000; padding: 2px 4px; vertical-align: middle; }
.sos-grid th { font-weight: 700; text-align: center; background: #fff; }
.sos-grid td.c { text-align: center; }
.sos-total td { font-weight: 700; }
.sos-sign { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 10pt; }
.sos-sign td { width: 50%; vertical-align: top; }
.sos-sign p { margin: 0 0 2px; }
@media print {
  .sos-doc { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>`;
  return `${styleBlock}
<div class="sos-doc">
  <h1 class="sos-title">SCHEDULE OF SUBJECT</h1>
  <table class="sos-meta">
    <tr>
      <td class="l">
        <div class="sos-line"><b>To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> <b><u>VP-ACAD</u></b></div>
        <div class="sos-line"><b>From&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</b> <b><u>${escapeHtml(ctx.deptCode)} Department</u></b></div>
      </td>
      <td class="r">
        <div class="sos-line"><b>Date&nbsp;&nbsp;:</b> <b><u>${escapeHtml(dateStr)}</u></b></div>
        <div class="sos-line"><b>Schedule from Sem/AY&nbsp;&nbsp;:</b> <b><u>${escapeHtml(semAy)}</u></b></div>
      </td>
    </tr>
  </table>

  <div class="sos-sec"><b>Course/Yr/Section : ${escapeHtml(sec1)}</b></div>
  <table class="sos-grid">
    <thead>
      <tr>
        <th rowspan="2">Code</th><th rowspan="2">Subject/Description</th><th rowspan="2">Units</th>
        <th colspan="2">Schedule</th><th rowspan="2">Room</th><th rowspan="2">Faculty</th>
      </tr>
      <tr><th>Day</th><th>Time</th></tr>
    </thead>
    <tbody>
      ${renderRows(block1.data)}
      <tr class="sos-total"><td colspan="2" style="text-align:right">TOTAL</td><td class="c">${escapeHtml(String(block1.totalUnits || 0))}</td><td colspan="4"></td></tr>
    </tbody>
  </table>

  ${sec2 ? `<div class="sos-sec"><b>Course/Yr/Section : ${escapeHtml(sec2)}</b></div>` : ''}
  ${sec2 ? `<table class="sos-grid">
    <thead>
      <tr>
        <th rowspan="2">Code</th><th rowspan="2">Subject/Description</th><th rowspan="2">Units</th>
        <th colspan="2">Schedule</th><th rowspan="2">Room</th><th rowspan="2">Faculty</th>
      </tr>
      <tr><th>Day</th><th>Time</th></tr>
    </thead>
    <tbody>
      ${renderRows(block2.data)}
      <tr class="sos-total"><td colspan="2" style="text-align:right">TOTAL</td><td class="c">${escapeHtml(String(block2.totalUnits || 0))}</td><td colspan="4"></td></tr>
    </tbody>
  </table>` : ''}

<table class="sos-sign">
  <tr>
    <td>
      <p>Prepared by:</p>
      <p><b>${escapeHtml(ctx.chairName || 'PROGRAM CHAIR NAME')}</b></p>
      <p>Dept Prog Chair</p>
    </td>
    <td>
      <p>Approved by:</p>
      <p><b>${escapeHtml(SOS_DEAN)}</b></p>
      <p>Dean College of Engineering</p>
    </td>
  </tr>
</table>
<div class="footer-ref">AA-INS-1.03F4.Rev.0</div>
</div>`;
}

/** Spreadsheet download (opens in Excel) — same data as PDF exports. */
function formsExportAsExcel(ctx, type) {
  const esc = s =>
    String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  let title = 'Export';
  let tableHtml = '';
  if (type === 'faculty') {
    title = 'Faculty Load Form';
    if (!ctx.facultyId) {
      showToast('Select a faculty member before exporting to Excel.');
      return;
    }
    const prof = getProfessor(ctx.facultyId);
    const profName = prof?.name || 'Faculty';
    const profNameU = profName.toUpperCase();
    const semW = formsSemesterSpelled(ctx.sem);
    const intro = `Please be informed of your teaching load/assignment in the College of Engineering this ${semW} sem AY ${ctx.ay}.`;
    const padCount = ctx.scheds.length === 0 ? 3 : 2;
    let unitSum = 0;
    const prepSet = new Set();
    let contactSum = 0;
    const dataRows = ctx.scheds
      .map(s => {
        const sub = getSubject(s.subjectId);
        const u = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0;
        unitSum += u;
        if (s.subjectId) prepSet.add(s.subjectId);
        const wk = scheduleWeeklyHoursFromEntry(s);
        contactSum += wk;
        const timeStr =
          s.timeStart && s.timeEnd ? `${fmt12AmPm(s.timeStart)} – ${fmt12AmPm(s.timeEnd)}` : '';
        return `<tr><td>${esc(sub?.code)}</td><td>${esc(sub?.name)}</td><td>${esc(u)}</td><td>${esc(
          formatHoursValue(wk),
        )}</td><td>${esc(scheduleDaysToAbbrev(s.days))}</td><td>${esc(timeStr)}</td><td>${esc(
          roomDisplayLineFromPick(s.roomId, s.roomOtherName),
        )}</td><td>${esc(s.section)}</td></tr>`;
      })
      .join('');
    let pad = '';
    for (let i = ctx.scheds.length; i < ctx.scheds.length + padCount; i++) {
      pad += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>';
    }
    const chairU = (ctx.chairName || 'Program Chair').toUpperCase();
    tableHtml = `<div style="font-family:Calibri,Arial,sans-serif;font-size:11pt;line-height:1.15;">
<p style="text-align:center;margin:0;line-height:1.15;"><b>SOUTHERN LUZON STATE UNIVERSITY</b></p>
<p style="text-align:center;margin:0;line-height:1.15;">Lucban, Quezon</p>
<p style="text-align:center;margin:0;line-height:1.15;"><b>COLLEGE OF ENGINEERING</b></p>
<p style="margin:4px 0 0;line-height:1.15;"><b>${esc(profNameU)}</b></p>
<p style="margin:0;line-height:1.15;">College of Engineering</p>
<p style="margin:0;line-height:1.15;">SLSU-Lucban Quezon</p>
<div style="height:14px;line-height:0;font-size:0;">&nbsp;</div>
<p style="margin:0;line-height:1.15;"><b>Dear ${esc(profNameU)}</b></p>
<p style="margin:0 0 4px;line-height:1.2;">${esc(intro)}</p>
<table border="1" cellspacing="0" cellpadding="2" style="width:100%;border-collapse:collapse;margin-top:4px;font-size:9.5pt;table-layout:fixed;">
<colgroup>
<col style="width:8%"><col style="width:30%"><col style="width:5%"><col style="width:6%">
<col style="width:9%"><col style="width:9%"><col style="width:13%"><col style="width:20%">
</colgroup>
<thead>
<tr><th rowspan="2">Code</th><th rowspan="2">Subject</th><th rowspan="2">Units</th><th rowspan="2">Hrs</th><th colspan="2">Schedule</th><th rowspan="2">Room</th><th rowspan="2">Section/Student</th></tr>
<tr><th>Day</th><th>Time</th></tr>
</thead>
<tbody>${dataRows || ''}${pad}</tbody>
</table>
<div style="height:12px;line-height:0;font-size:0;">&nbsp;</div>
<table style="width:100%;margin-top:0;font-size:10pt;line-height:1.25;border-collapse:collapse;table-layout:fixed;" cellspacing="0" cellpadding="0">
<colgroup>
<col style="width:8%"><col style="width:30%"><col style="width:5%"><col style="width:6%">
<col style="width:9%"><col style="width:9%"><col style="width:13%"><col style="width:20%">
</colgroup>
<tbody><tr>
<td colspan="2" style="vertical-align:top;padding:0 8px 0 0;border:none;">
<p style="margin:0 0 3px;"><b>Number of Subject</b> ${esc(prepSet.size)}</p>
<p style="margin:0 0 3px;"><b>Number of Preparations</b> ${esc(prepSet.size)}</p>
<p style="margin:0;"><b>Number of Units</b> ${esc(unitSum)}</p>
</td>
<td colspan="6" style="vertical-align:top;padding:0;border:none;">
<p style="margin:0 0 3px;"><b>Contact Hours</b> ${esc(formatHoursValue(contactSum))}</p>
<p style="margin:0 0 3px;"><b>Unit Workload</b> ${esc(unitSum)}</p>
<p style="margin:0 0 3px;"><b>Other Assignments</b></p>
<div style="height:10px;line-height:0;font-size:0;">&nbsp;</div>
<p style="margin:0 0 3px;"><b>Total</b></p>
<p style="margin:0 0 6px;"><b>Excess Load</b></p>
<div style="text-align:right;">
<p style="margin:0 0 2px;">Very truly yours,</p>
<div style="height:14px;line-height:0;font-size:0;">&nbsp;</div>
<p style="margin:0 0 2px;"><b>${esc(chairU)}</b></p>
<p style="margin:0;">PROGRAM CHAIR</p>
</div>
</td>
</tr></tbody>
</table>
<div style="height:14px;line-height:0;font-size:0;">&nbsp;</div>
<table style="width:100%;margin-top:0;font-size:10pt;line-height:1.15;"><tr>
<td style="width:50%;vertical-align:top;"><p style="margin:0 0 2px;">Noted by:</p><p style="margin:0;"><b>${esc('DR. MARIA CORAZON B. ABEJO')}</b></p><p style="margin:0;">Dean, College of Engineering</p></td>
<td style="vertical-align:top;"><p style="margin:0 0 2px;">Approved by:</p><p style="margin:0;"><b>${esc('DR. DHENALYN A. DEJELO')}</b></p><p style="margin:0;">VP for Academic Affairs</p></td>
</tr></table>
</div>`;
  } else if (type === 'preenroll') {
    title = 'Pre-Enrolment';
    if (!ctx.section || ctx.section === 'all') {
      showToast('Choose a specific section in the export form before using Excel.');
      return;
    }
    const sec = ctx.section;
    const theadPe =
      '<thead><tr><th rowspan="2">SUBJECT CODE</th><th rowspan="2">SUBJECT DESCRIPTION</th><th rowspan="2">UNITS</th><th rowspan="2">ROOM</th><th colspan="2">SCHEDULE</th></tr><tr><th>DAY</th><th>TIME</th></tr></thead>';
    const tdC = ' style="text-align:center"';
    const tdL = ' style="text-align:left"';
    const body = ctx.scheds
      .map(s => {
        const sub = getSubject(s.subjectId);
        const u = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : '';
        return `<tr><td${tdC}>${esc(sub?.code)}</td><td${tdL}>${esc(sub?.name)}</td><td${tdC}>${esc(u)}</td><td${tdC}>${esc(
          roomDisplayLineFromPick(s.roomId, s.roomOtherName),
        )}</td><td${tdC}>${esc(scheduleDaysToAbbrev(s.days))}</td><td${tdC}>${esc(
          fmt12(s.timeStart) + '-' + fmt12(s.timeEnd),
        )}</td></tr>`;
      })
      .join('');
    const totalU = ctx.scheds.reduce((sum, s) => {
      const sub = getSubject(s.subjectId);
      return sum + (sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0);
    }, 0);
    const blank = '<span style="border-bottom:1px solid #000;display:inline-block;min-width:160px">&nbsp;</span>';
    tableHtml = `<div style="font-family:Arial,sans-serif;font-size:10.5pt;line-height:1.25;color:#111">
<p style="text-align:center;font-weight:700;font-size:11pt;margin:0">SOUTHERN LUZON STATE UNIVERSITY</p>
<p style="text-align:center;margin:2px 0 8px">Lucban, Quezon</p>
<p style="text-align:center;font-weight:700;font-size:13pt;margin:0 0 12px;letter-spacing:0.06em">PRE-ENROLMENT FORM</p>
<table style="width:100%;border-collapse:collapse;margin:0 0 10px;font-size:10.5pt"><tr>
<td colspan="2" style="padding:4px 8px 6px 0;vertical-align:bottom"><b>STUDENT NUMBER:</b> ${blank}</td>
<td colspan="2" style="padding:4px 8px 6px 0;vertical-align:bottom"><b>PAYMENT:</b> &nbsp; ☐ FULL &nbsp; ☐ PARTIAL</td></tr>
<tr>
<td colspan="2" style="padding:4px 8px 6px 0;vertical-align:bottom"><b>STUDENT NAME:</b> ${blank}</td>
<td colspan="2" style="padding:4px 8px 6px 0;vertical-align:bottom"><b>SCHOOL YEAR:</b> <b><u>${esc(ctx.ay)}</u></b></td></tr>
<tr>
<td colspan="2" style="padding:4px 8px 6px 0;vertical-align:bottom"><b>COURSE/YEAR:</b> ${blank}</td>
<td colspan="2" style="padding:4px 8px 6px 0;vertical-align:bottom"><b>SEMESTER:</b> <b><u>${esc(ctx.sem)}</u></b></td></tr>
</table>
<table style="width:100%;margin:10px 0 6px;font-size:10.5pt;border-collapse:collapse"><tr>
<td style="font-weight:700">${esc(sec)}</td>
<td style="font-weight:700;text-align:right">SUBJECTS TO BE TAKEN:</td>
</tr></table>
<table border="1" cellspacing="0" cellpadding="3" style="border-collapse:collapse;width:100%;font-size:9.5pt">${theadPe}<tbody>${body}<tr><td colspan="2" align="right"><b>TOTAL</b></td><td align="center"><b>${esc(
      String(totalU),
    )}</b></td><td colspan="3"></td></tr></tbody></table>
<p style="font-size:8pt;color:#444;margin-top:10px">OP-MIS-1.06F1, REV.0 &mdash; AY ${esc(ctx.ay)} ${esc(ctx.sem)}</p>
<div style="margin-top:22px;text-align:center;font-size:10.5pt"><div style="border-bottom:1px solid #000;width:220px;margin:0 auto 4px;min-height:16px">&nbsp;</div><p style="margin:0;font-weight:700">(DEAN/ADVISER)</p></div>
</div>`;
  } else {
    title = 'Schedule of Subjects';
    const dateStr = new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' });
    const thead2 =
      '<thead><tr><th rowspan="2">Code</th><th rowspan="2">Subject/Description</th><th rowspan="2">Units</th><th colspan="2">Schedule</th><th rowspan="2">Room</th><th rowspan="2">Faculty</th></tr><tr><th>Day</th><th>Time</th></tr></thead>';
    const tdC = ' style="text-align:center"';
    const tdL = ' style="text-align:left"';
    if (!ctx.scheds.length) {
      tableHtml = `<div style="font-family:Arial,sans-serif;font-size:11pt;">
<h1 style="text-align:center;font-size:14pt;margin:0 0 8px;font-weight:700">SCHEDULE OF SUBJECT</h1>
<div style="height:10px;line-height:0;font-size:0">&nbsp;</div>
${buildScheduleOfSubjectsExportMetaBlock('—', ctx, dateStr, esc, true)}
<p>No rows match the current filters.</p></div>`;
    } else {
      const bySection = {};
      for (const s of ctx.scheds) {
        const k = String(s.section || '—').trim() || '—';
        if (!bySection[k]) bySection[k] = [];
        bySection[k].push(s);
      }
      const keys = Object.keys(bySection).sort((a, b) => a.localeCompare(b));
      const blocks = keys
        .map(k => {
          const list = bySection[k];
          let totalU = 0;
          const rows = list
            .map(s => {
              const sub = getSubject(s.subjectId);
              const u = sub && Number.isFinite(Number(sub.units)) ? Number(sub.units) : 0;
              totalU += u;
              return `<tr><td${tdC}>${esc(sub?.code)}</td><td${tdL}>${esc(sub?.name)}</td><td${tdC}>${esc(
                u,
              )}</td><td${tdC}>${esc(scheduleDaysToAbbrev(s.days))}</td><td${tdC}>${esc(
                fmt12(s.timeStart) + '-' + fmt12(s.timeEnd),
              )}</td><td${tdC}>${esc(roomDisplayLineFromPick(s.roomId, s.roomOtherName))}</td><td${tdL}>${esc(
                professorDisplayLineFromPick(s.professorId, s.professorOtherName),
              )}</td></tr>`;
            })
            .join('');
          return `<div style="margin:0 0 18px;font-family:Arial,sans-serif">
${buildScheduleOfSubjectsExportMetaBlock(k, ctx, dateStr, esc, true)}
<table border="1" cellspacing="0" cellpadding="3" style="border-collapse:collapse;width:100%;font-size:10pt">${thead2}<tbody>${rows}<tr><td colspan="2" align="right"><b>TOTAL</b></td><td align="center"><b>${esc(
            String(totalU),
          )}</b></td><td colspan="4"></td></tr></tbody></table></div>`;
        })
        .join('');
      const chair = esc(ctx.chairName || 'PROGRAM CHAIR NAME');
      const dean = esc('DR. MARIA CORAZON B. ABEJO');
      tableHtml = `<div style="font-family:Arial,sans-serif;font-size:11pt;line-height:1.25">
<h1 style="text-align:center;font-size:14pt;margin:0 0 8px;font-weight:700;letter-spacing:0.04em">SCHEDULE OF SUBJECT</h1>
<div style="height:10px;line-height:0;font-size:0">&nbsp;</div>
${blocks}
<table style="width:100%;margin-top:20px;font-size:10.5pt;border-collapse:collapse"><tr>
<td style="width:33%;vertical-align:top"><div style="margin-bottom:8px">Prepared by:</div><b>${chair}</b><br/>Dept Prog Chair</td>
<td style="width:34%"></td>
<td style="width:33%;vertical-align:top"><div style="margin-bottom:8px">Approved by:</div><b>${dean}</b><br/>Dean College of Engineering</td>
</tr></table>
<p style="font-size:8pt;color:#444;margin-top:12px">AA-INS-1.03F4.Rev.0 &mdash; ${esc(ctx.deptName)}</p>
</div>`;
    }
  }
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${tableHtml}</body></html>`;
  const stem = `${title.replace(/\s+/g, '-')}-${String(ctx.ay).replace(/[^0-9-]+/g, '')}-${(ctx.section && ctx.section !== 'all' ? String(ctx.section) : 'all')
    .replace(/\s+/g, '-')
    .slice(0, 40)}`;
  downloadTextFile(`${stem}.xls`, html, 'application/vnd.ms-excel;charset=utf-8;');
}

function writeExportPopupFallback(win, title, message) {
  if (!win || win.closed) return;
  try {
    win.document.write(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>${escapeHtml(title || 'Export')}</title>
<style>body{font-family:Arial,sans-serif;padding:20px;line-height:1.45;color:#222}h1{font-size:18px;margin:0 0 10px}p{margin:0}</style></head>
<body><h1>${escapeHtml(title || 'Export')}</h1><p>${escapeHtml(message || 'Unable to generate export.')}</p></body></html>`);
    win.document.close();
  } catch (e) {
    /* ignore */
  }
}

/**
 * Prints form HTML from a hidden iframe. Uses srcdoc (not document.write) so the print job is less tied to
 * the parent page’s URL/title in Chrome/Edge. Temporarily clears the top window title during print so the
 * header line does not show “CEN Timetable — Curriculum”. Empty `<title>` in the payload removes the form name.
 * Browser headers/footers (date, URL, page x/y) can still appear unless the user turns off “Headers and footers”
 * in the print dialog (More settings).
 */
function printHtmlDocumentInHiddenIframe(htmlString) {
  let topDoc = document;
  try {
    if (window.top && window.top.document) topDoc = window.top.document;
  } catch (e) {
    /* cross-origin top */
  }
  const savedTitle = topDoc.title;

  const iframe = document.createElement('iframe');
  iframe.setAttribute('aria-hidden', 'true');
  iframe.style.cssText =
    'position:absolute;width:0;height:0;border:0;margin:0;padding:0;overflow:hidden;clip:rect(0,0,0,0);clip-path:inset(50%)';
  document.body.appendChild(iframe);
  const win = iframe.contentWindow;

  const restoreAndRemove = () => {
    try {
      topDoc.title = savedTitle;
    } catch (e) {
      /* ignore */
    }
    try {
      iframe.remove();
    } catch (e) {
      /* ignore */
    }
  };

  win.addEventListener('afterprint', restoreAndRemove, { once: true });

  iframe.addEventListener(
    'load',
    () => {
      try {
        topDoc.title = '';
      } catch (e) {
        /* ignore */
      }
      setTimeout(() => {
        try {
          win.focus();
          win.print();
        } catch (e) {
          restoreAndRemove();
        }
      }, 50);
    },
    { once: true },
  );

  iframe.srcdoc = htmlString;
}

function openFormsOutput(kind, type, options) {
  const o = options && typeof options === 'object' ? options : {};
  const override = o.override;
  const format = o.format || 'pdf';
  const providedWindow = o.popupWindow || null;
  try {
    let ctx = getFormsFilterContext(override, type);
    if (!ctx) {
      writeExportPopupFallback(providedWindow, 'Export failed', 'No department context found for this account.');
      showToast('Unable to build export: sign in as a chairperson.');
      return;
    }
    if (format === 'excel') {
      if (providedWindow && !providedWindow.closed) {
        try { providedWindow.close(); } catch (e) { /* ignore */ }
      }
      try {
        if (type === 'schedule') {
          generateScheduleSubjectsXlsxBlob(ctx)
            .then(blob => {
              const sectionSlug = (ctx.section && ctx.section !== 'all' ? String(ctx.section) : 'all')
                .replace(/\s+/g, '-')
                .slice(0, 40);
              const stem = `Schedule-of-Subjects-${String(ctx.ay).replace(/[^0-9-]+/g, '')}-${sectionSlug}`;
              downloadBlobFile(`${stem}.xlsx`, blob);
              showToast('Excel file downloaded.');
            })
            .catch(() => {
              formsExportAsExcel(ctx, type);
              showToast('Excel-compatible file downloaded.');
            });
          return;
        }
        formsExportAsExcel(ctx, type);
        showToast('Excel-compatible file downloaded.');
      } catch (e) {
        showToast('Could not build spreadsheet.');
      }
      return;
    }
    if (format === 'word' && type === 'preenroll') {
      let inner = buildPreEnrollmentFormHtml(ctx);
      void (async () => {
        try {
          let blob = await generatePreEnrollmentDocxBlob(ctx);
          let fname = `Pre-Enrolment-${(ctx.section || 'section').replace(/\s+/g, '-')}-${ctx.ay}.docx`;
          downloadBlobFile(fname, blob);
          if (kind === 'print') {
            printHtmlDocumentInHiddenIframe(formsPrintShellDocument('', inner));
            if (providedWindow && !providedWindow.closed) {
              try {
                providedWindow.close();
              } catch (e) {
                /* ignore */
              }
            }
            showToast(
              'Pre-Enrolment .docx downloaded. Printing… Turn off Headers and footers (More settings) for a clean PDF.',
            );
          } else {
            showToast('Official Pre-Enrolment template (.docx) downloaded.');
          }
        } catch (e) {
          showToast('Could not build .docx. Ensure templates/pre-enrollment files exist and try again.');
        }
      })();
      return;
    }
    let inner = '';
    let title = 'Form';
    if (type === 'faculty') {
      title = 'Faculty Load Form';
      inner = buildFacultyLoadFormHtml(ctx);
    } else if (type === 'preenroll') {
      title = 'Pre-Enrolment Form';
      inner = buildPreEnrollmentFormHtml(ctx);
    } else if (type === 'schedule') {
      title = 'Schedule of Subjects';
      inner = buildScheduleOfSubjectsHtml(ctx);
    }
    let docTitle = kind === 'print' ? '' : title;
    let full = formsPrintShellDocument(docTitle, inner);
    if (kind === 'print' && format === 'pdf') {
      printHtmlDocumentInHiddenIframe(full);
      if (providedWindow && !providedWindow.closed) {
        try {
          providedWindow.close();
        } catch (e) {
          /* ignore */
        }
      }
      showToast(
        'Printing… In the print dialog, turn off Headers and footers (More settings) to remove date, URL, and page numbers.',
      );
      return;
    }
    let w = providedWindow || window.open('', '_blank');
    if (!w) {
      showToast('Allow pop-ups to view or print this form.');
      return;
    }
    w.document.write(full);
    w.document.close();
  } catch (err) {
    writeExportPopupFallback(providedWindow, 'Export failed', String(err?.message || err || 'Unexpected error'));
    showToast('Export failed. Please try again.');
  }
}

function renderFormsPage() {
  let u = state.currentUser;
  if (!u || u.role !== 'chairperson' || !u.dept) {
    return `<div class="card"><div class="card-body"><p>Forms are available to department chair accounts.</p></div></div>`;
  }
  normalizeFormsPageState();
  let dept = u.dept;
  let ay = normalizeAcademicYearInput(state.formsAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let sem = state.formsSemester || '1st Semester';
  let ayList = mergeAcademicYearOptions(termAcademicYearOptions(), state.termAcademicYearCustomOptions || []);
  if (!ayList.includes(ay)) ayList.push(ay);
  ayList.sort((a, b) => String(a).localeCompare(String(b)));
  let ayOpts = ayList
    .map(
      a =>
        `<option value="${escapeHtml(a)}" ${a === ay ? 'selected' : ''}>${escapeHtml(a)}</option>`,
    )
    .join('');
  let semOpts = FORMS_SEMESTER_OPTIONS.map(
    s => `<option value="${escapeHtml(s)}" ${s === sem ? 'selected' : ''}>${escapeHtml(s)}</option>`,
  ).join('');
  let yearOpts =
    `<option value="all" ${state.formsYearLevel === 'all' ? 'selected' : ''}>All year levels</option>` +
    SCHEDULE_FORM_YEARS.map(
      y => `<option value="${escapeHtml(y)}" ${state.formsYearLevel === y ? 'selected' : ''}>${escapeHtml(y)}</option>`,
    ).join('');
  let sections = mergeSectionOptions([dept], { programMatchDept: dept });
  let secOpts =
    `<option value="all" ${state.formsSection === 'all' || !state.formsSection ? 'selected' : ''}>All sections</option>` +
    sections.map(
      s =>
        `<option value="${escapeHtml(s)}" ${String(state.formsSection) === s ? 'selected' : ''}>${escapeHtml(s)}</option>`,
    ).join('');
  let profs = state.professors.filter(p => p.dept === dept).sort((a, b) => String(a.name).localeCompare(String(b.name)));
  if (state.formsFacultyId && !profs.some(p => p.id === state.formsFacultyId)) {
    state.formsFacultyId = profs[0]?.id || '';
  }
  if (!state.formsFacultyId && profs[0]) state.formsFacultyId = profs[0].id;
  let facOpts = profs.length
    ? profs
        .map(
          p =>
            `<option value="${escapeHtml(p.id)}" ${p.id === state.formsFacultyId ? 'selected' : ''}>${escapeHtml(p.name)}</option>`,
        )
        .join('')
    : '<option value="">(No faculty in roster)</option>';


  const card = (fid, title, desc, tagClass, tagLabel, docBadge) => {
    return `<div class="forms-doc-card" data-form-card="${fid}">
  <div class="forms-doc-thumb" aria-hidden="true">
    <span class="forms-doc-thumbnail-grid"></span>
    <span class="forms-doc-badge ${docBadge.class}">${escapeHtml(docBadge.text)}</span>
  </div>
  <h3 class="forms-doc-name">${escapeHtml(title)}</h3>
  <span class="forms-doc-cat ${tagClass}">${escapeHtml(tagLabel)}</span>
  <p class="forms-doc-desc">${escapeHtml(desc)}</p>
  <div class="forms-doc-actions">
    <button type="button" class="btn btn-primary forms-export-btn" data-form-export="${fid}">${icon('download', 16)} Export</button>
    <button type="button" class="btn btn-outline forms-preview-btn" data-form-preview="${fid}" title="Preview" aria-label="Preview">${icon(
    'eye',
    16,
  )}</button>
  </div>
</div>`;
  };

  return `<div class="forms-doc-grid">
  ${card('faculty', 'Faculty Load Form', 'Teaching load and assignment letter per professor for the semester.', 'forms-tag--faculty', 'Per Faculty', FORMS_DOC_BADGE.faculty)}
  ${card('preenroll', 'Pre-Enrollment Form', 'Subjects to be taken by students per section with room and schedule.', 'forms-tag--section', 'Per Section', FORMS_DOC_BADGE.preenroll)}
  ${card('schedule', 'Schedule of Subjects', 'Official schedule submitted to VP-ACAD per department and section.', 'forms-tag--section2', 'Per Section', FORMS_DOC_BADGE.schedule)}
</div>
<p class="forms-footnote">Click <strong>Export</strong> on a form to choose filters and format; data is loaded from the <strong>database</strong> when you export (if connected). The filter bar above pre-fills the export dialog. Use <strong>Preview</strong> to open a quick print view without the dialog.</p>`;
}

function renderFormsExportModalBody() {
  const formType = state.modal?.formType || 'schedule';
  const u = state.currentUser;
  const dept = u?.dept;
  if (!dept) return '<p>Unavailable.</p>';
  normalizeFormsPageState();
  const ay = normalizeAcademicYearInput(state.formsAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  const sem = state.formsSemester || '1st Semester';
  const yl = state.formsYearLevel || 'all';
  const effectiveYear = formType === 'preenroll' && yl === 'all' ? '4th Year' : yl;
  const sec = state.formsSection != null ? state.formsSection : 'all';
  const ayList = mergeAcademicYearOptions(termAcademicYearOptions(), state.termAcademicYearCustomOptions || []);
  if (!ayList.includes(ay)) ayList.push(ay);
  ayList.sort((a, b) => String(a).localeCompare(String(b)));
  const ayOpts = ayList
    .map(a => `<option value="${escapeHtml(a)}" ${a === ay ? 'selected' : ''}>${escapeHtml(a)}</option>`)
    .join('');
  const semOpts = FORMS_SEMESTER_OPTIONS.map(
    s => `<option value="${escapeHtml(s)}" ${s === sem ? 'selected' : ''}>${escapeHtml(s)}</option>`,
  ).join('');
  const yearScoped = effectiveYear !== 'all' ? effectiveYear : '';
  const sections = sectionOptionsForDeptYear([dept], yearScoped);
  const yearOpts =
    formType === 'preenroll'
      ? SCHEDULE_FORM_YEARS.map(
          y =>
            `<option value="${escapeHtml(y)}" ${
              effectiveYear === y ? 'selected' : ''
            }>${escapeHtml(y)}</option>`,
        ).join('')
      : `<option value="all" ${effectiveYear === 'all' ? 'selected' : ''}>All year levels</option>` +
        SCHEDULE_FORM_YEARS.map(
          y => `<option value="${escapeHtml(y)}" ${effectiveYear === y ? 'selected' : ''}>${escapeHtml(y)}</option>`,
        ).join('');
  const secOpts =
    formType === 'preenroll'
      ? sections.length
        ? sections
            .map(
              (s, i) =>
                `<option value="${escapeHtml(s)}" ${
                  (sec !== 'all' && String(sec) === s) || (sec === 'all' && i === 0) ? 'selected' : ''
                }>${escapeHtml(s)}</option>`,
            )
            .join('')
        : '<option value="">(No sections for selected year level)</option>'
      : `<option value="all" ${sec === 'all' || sec === '' ? 'selected' : ''}>All sections</option>` +
        sections.map(
          s => `<option value="${escapeHtml(s)}" ${String(sec) === s ? 'selected' : ''}>${escapeHtml(s)}</option>`,
        ).join('');
  const dLabel = getDept(dept);
  const deptOpt = dLabel
    ? `<option value="${escapeHtml(dept)}">${escapeHtml(dLabel.code + ' — ' + dLabel.name)}</option>`
    : '';
  const titles = {
    faculty: { head: 'Faculty Load Form', sub: 'Teaching load and assignment for one faculty member (from the timetable).' },
    preenroll: { head: 'Pre-Enrollment Form', sub: 'Subjects per section with room and schedule.' },
    schedule: { head: 'Schedule of Subjects', sub: 'Official schedule by section for your program.' },
  };
  const T = titles[formType] || titles.schedule;
  const formatOpts = (() => {
    const o = [['pdf', 'Save as PDF']];
    if (formType !== 'preenroll') o.push(['excel', 'Excel (.xls spreadsheet)']);
    if (formType === 'preenroll') o.push(['word', 'Word (.docx — official template)']);
    return o.map(([v, lab]) => `<option value="${escapeHtml(v)}">${escapeHtml(lab)}</option>`).join('');
  })();
  let facultyFieldHtml = '';
  if (formType === 'faculty') {
    const fac = state.formsFacultyId || '';
    const profs = state.professors.filter(p => p.dept === dept).sort((a, b) => String(a.name).localeCompare(String(b.name)));
    const profOptsFaculty = profs.map(
      p => `<option value="${escapeHtml(p.id)}" ${p.id === fac ? 'selected' : ''}>${escapeHtml(p.name)}</option>`,
    );
    const profOpts = `<option value="">Select professor…</option>` + profOptsFaculty.join('');
    facultyFieldHtml = `<div class="form-group">
      <label for="fe_professor" class="form-label">Faculty / Professor <span class="label-req" aria-hidden="true">*</span></label>
      <select class="form-select" id="fe_professor" required aria-required="true">${profOpts}</select>
    </div>`;
  }
  return `<div class="forms-export-modal" data-form-export-type="${escapeHtml(formType)}">
  <p class="forms-export-section-label">ACADEMIC PERIOD</p>
  <div class="form-grid forms-export-grid">
    <div class="form-group">
      <label for="fe_ay" class="form-label">Academic year <span class="label-req" aria-hidden="true">*</span></label>
      <select class="form-select" id="fe_ay" required aria-required="true">${ayOpts}</select>
    </div>
    <div class="form-group">
      <label for="fe_sem" class="form-label">Semester <span class="label-req" aria-hidden="true">*</span></label>
      <select class="form-select" id="fe_sem" required aria-required="true">${semOpts}</select>
    </div>
    <div class="form-group">
      <label for="fe_dept" class="form-label">Department <span class="label-req" aria-hidden="true">*</span></label>
      <select class="form-select" id="fe_dept" required disabled title="Your department">${deptOpt}</select>
    </div>
    ${facultyFieldHtml}
    <div class="form-group">
      <label for="fe_year" class="form-label">Year level${
        formType === 'preenroll' ? ' <span class="label-req" aria-hidden="true">*</span>' : ''
      }</label>
      <select class="form-select" id="fe_year" ${formType === 'preenroll' ? 'required aria-required="true"' : ''}>${yearOpts}</select>
    </div>
    <div class="form-group">
      <label for="fe_section" class="form-label">Section${
        formType === 'preenroll' ? ' <span class="label-req" aria-hidden="true">*</span>' : ''
      }</label>
      <select class="form-select" id="fe_section" ${formType === 'preenroll' ? 'required aria-required="true"' : ''}>${secOpts}</select>
    </div>
    <div class="form-group full">
      <label for="fe_format" class="form-label">Export format <span class="label-req" aria-hidden="true">*</span></label>
      <select class="form-select" id="fe_format" required aria-required="true">${formatOpts}</select>
    </div>
  </div>
  <p class="form-hint" style="margin-top:8px">For <strong>Pre-Enrollment</strong>, pick a <strong>year level</strong> and <strong>section</strong> (not &ldquo;All&rdquo;). For <strong>Faculty load</strong>, select the faculty member. Other forms can use &ldquo;All&rdquo; where shown.</p>
  <input type="hidden" id="fe_formType" value="${escapeHtml(formType)}" />
</div>`;
}

function refreshFormsExportSectionOptions() {
  if (state.modal?.type !== 'formsExport') return;
  const yearEl = document.getElementById('fe_year');
  const sectionEl = document.getElementById('fe_section');
  if (!yearEl || !sectionEl) return;
  const formType = state.modal?.formType || 'schedule';
  const dept = state.currentUser?.dept;
  if (!dept) return;
  const yearValue = yearEl.value || 'all';
  const sections = sectionOptionsForDeptYear([dept], yearValue !== 'all' ? yearValue : '');
  const current = sectionEl.value || 'all';
  if (formType === 'preenroll') {
    if (!sections.length) {
      sectionEl.innerHTML = '<option value="">(No sections for selected year level)</option>';
      sectionEl.value = '';
      return;
    }
    sectionEl.innerHTML = sections.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`).join('');
    sectionEl.value = sections.includes(current) ? current : sections[0];
    return;
  }
  const opts = [`<option value="all">All sections</option>`]
    .concat(sections.map(s => `<option value="${escapeHtml(s)}">${escapeHtml(s)}</option>`))
    .join('');
  sectionEl.innerHTML = opts;
  sectionEl.value = current === 'all' || sections.includes(current) ? current : 'all';
}

function renderFaculty() {
  if (state.facultyDeptFilter !== 'all' && !DEPARTMENTS.some(d => d.id === state.facultyDeptFilter)) state.facultyDeptFilter = 'all';
  if (!['all', 'active', 'on_leave', 'inactive'].includes(state.facultyStatusFilter)) state.facultyStatusFilter = 'all';
  let deptF = state.facultyDeptFilter || 'all';
  let statusF = state.facultyStatusFilter || 'all';
  let q = String(state.facultySearchQuery || '').trim().toLowerCase();
  let deptOpts = `<option value="all" ${deptF === 'all' ? 'selected' : ''}>All departments</option>` +
    DEPARTMENTS.map(d => `<option value="${escapeHtml(d.id)}" ${deptF === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('');
  let statusOpts = [
    ['all', 'All status'],
    ['active', 'Active'],
    ['on_leave', 'On Leave'],
    ['inactive', 'Inactive'],
  ].map(([v, lab]) => `<option value="${escapeHtml(v)}" ${statusF === v ? 'selected' : ''}>${escapeHtml(lab)}</option>`).join('');
  let all = state.professors.slice();
  let totalProf = all.length;
  let totalActive = all.filter(p => professorStatusValue(p) === 'active').length;
  let totalOnLeave = all.filter(p => professorStatusValue(p) === 'on_leave').length;
  let totalInactive = all.filter(p => professorStatusValue(p) === 'inactive').length;
  let totalDept = new Set(all.map(p => p.dept).filter(Boolean)).size;
  let rows = state.professors.slice();
  if (deptF !== 'all') rows = rows.filter(p => p.dept === deptF);
  if (statusF !== 'all') rows = rows.filter(p => professorStatusValue(p) === statusF);
  if (q) {
    rows = rows.filter(p => {
      let hay = `${p.name || ''} ${p.short || ''} ${getDept(p.dept)?.name || ''} ${getDept(p.dept)?.code || ''} ${stripFacultyStatusTagFromNote(p.note || '')}`.toLowerCase();
      return hay.includes(q);
    });
  }
  rows.sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));
  let summary = `<div class="stats-grid faculty-stats-grid">
      <div class="stat-card"><div><div class="stat-num">${totalProf}</div><div class="stat-label">Professors</div></div></div>
      <div class="stat-card"><div><div class="stat-num">${totalActive}</div><div class="stat-label">Active</div></div></div>
      <div class="stat-card"><div><div class="stat-num">${totalOnLeave}</div><div class="stat-label">On Leave</div></div></div>
      <div class="stat-card"><div><div class="stat-num">${totalInactive}</div><div class="stat-label">Inactive</div></div></div>
      <div class="stat-card"><div><div class="stat-num">${totalDept}</div><div class="stat-label">Departments</div></div></div>
    </div>`;
  let facultyToolbar = `<div class="curriculum-toolbar-block"><div class="curriculum-toolbar-filters faculty-toolbar-filters">
      <div class="curriculum-filter-field curriculum-filter-field--inline faculty-search-field"><input class="form-input faculty-search-input" id="facultySearchInput" type="search" placeholder="Search name or department" value="${escapeHtml(state.facultySearchQuery || '')}" aria-label="Search faculty"></div>
      <div class="curriculum-filter-field curriculum-filter-field--inline"><select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="facultyDeptFilter" aria-label="Department filter">${deptOpts}</select></div>
      <div class="curriculum-filter-field curriculum-filter-field--inline"><select class="filter-select curriculum-filter-select curriculum-toolbar-filter-select" id="facultyStatusFilter" aria-label="Status filter">${statusOpts}</select></div>
    </div></div>`;
  let tbody = rows.length === 0
    ? `<tr><td colspan="4" class="room-page-empty">No faculty rows match these filters.</td></tr>`
    : rows.map(p => {
        let st = professorStatusValue(p);
        let noteText = stripFacultyStatusTagFromNote(p.note || '').replace(/\s+/g, ' ').trim();
        let noteLine = noteText
          ? `<div class="faculty-note-line" title="${escapeHtml(noteText)}">📌 ${escapeHtml(noteText)}</div>`
          : '';
        return `<tr><td><div class="faculty-name-cell"><div class="faculty-name-text">${escapeHtml(p.name)}</div>${noteLine}</div></td><td class="section-room-dept-icon-td">${deptBadgeHtml(p.dept)}</td><td><span class="badge-status ${escapeHtml(st)}">${escapeHtml(professorStatusLabel(st))}</span></td><td><button class="btn btn-outline btn-sm" data-editprof="${escapeHtml(p.id)}">Edit</button> <button class="btn btn-danger btn-sm" data-delprof="${escapeHtml(p.id)}">Delete</button></td></tr>`;
      }).join('');
  return `${summary}${facultyToolbar}<div class="table-wrap"><table class="faculty-page-table"><thead><tr><th>Name</th><th class="section-room-dept-icon-th" aria-label="Department">Department</th><th>Status</th><th>Actions</th></tr></thead><tbody>${tbody}</tbody></table></div>`;
}

function renderAccounts() {
  let baseByEmail = new Map(officialBaseAccountsList().map(u => [String(u.email || '').toLowerCase(), u]));
  let mappedUsers = buildMergedSystemAccounts();
  let overrideEmailSet = new Set(loadAccountRoleOverrides().map(x => String(x?.email || '').trim().toLowerCase()).filter(Boolean));
  let pendingRows = [];
  let pendingBeforeTable = '';
  let pendingOnlyLoading = '';
  if (state.currentUser?.role === 'admin' && hasSupabaseClient()) {
    let ui = state.pendingAccountsUi;
    if (!ui || ui.phase === 'loading') {
      pendingOnlyLoading = `<div class="card" style="margin-top:14px;"><div class="card-body" style="padding:14px 16px;">Loading pending accounts from Supabase…</div></div>`;
    } else if (ui.phase === 'error') {
      pendingBeforeTable = `<div class="alert" style="margin-top:14px;" role="alert">${icon('alertTriangle', 18)}<span>${escapeHtml(ui.errorMessage || 'Could not load pending accounts.')}</span></div>`;
    } else {
      pendingRows = [...(ui.rows || [])].sort((a, b) => String(a.email || '').localeCompare(String(b.email || '')));
      if (ui.cloudAuth === false) {
        pendingBeforeTable = `<div class="card" style="margin-top:14px;border:1px solid var(--gray-200);"><div class="card-body" style="padding:14px 16px;">
          <p style="margin:0 0 10px;color:var(--gray-700);line-height:1.5;">The demo dean login does not open a Supabase session, so the cloud pending list is hidden. Use <strong>Sign in with Google</strong> with your dean email (the one listed in Supabase <code style="font-size:12px;">dean_allowed_emails</code>, e.g. <code style="font-size:12px;">admin@slsu.edu.ph</code>) to load and manage pending sign-ups from the database.</p>
          <button type="button" class="btn btn-primary btn-sm" id="deanPendingGoogleSyncBtn">${icon('user', 16)} Sign in with Google (load pending)</button>
        </div></div>`;
      }
    }
  } else {
    pendingRows = loadPendingAccounts().sort((a, b) => String(a.email || '').localeCompare(String(b.email || '')));
  }
  let deptOpts = `<option value="" selected>Please assign</option>${
    DEPARTMENTS.map(d => `<option value="${escapeHtml(d.id)}">${escapeHtml(d.code)} - ${escapeHtml(d.name)}</option>`).join('')
  }`;
  let mappedTable = `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Actions</th></tr></thead><tbody>${mappedUsers.map(u => {
    let em = String(u.email || '').trim().toLowerCase();
    let base = baseByEmail.get(em) || null;
    let hasOverride = overrideEmailSet.has(em);
    let source = base ? 'base' : 'override';
    return `<tr><td><strong>${escapeHtml(u.name || '')}</strong></td><td>${escapeHtml(u.email || '')}</td><td><span class="badge-status ${u.role === 'admin' ? 'approved' : 'active'}">${u.role === 'admin' ? 'Admin' : 'Chairperson'}</span></td><td>${u.dept ? `<span class="badge-dept ${escapeHtml(u.dept)}">${escapeHtml(getDept(u.dept)?.code || u.dept)}</span>` : '—'}</td><td><button type="button" class="btn btn-outline btn-sm" data-edit-mapped="${escapeHtml(em)}" data-mapped-source="${escapeHtml(source)}" data-has-override="${hasOverride ? '1' : '0'}">Edit</button> <button type="button" class="btn btn-danger btn-sm" data-del-mapped="${escapeHtml(em)}" data-mapped-source="${escapeHtml(source)}" data-has-override="${hasOverride ? '1' : '0'}">Delete</button></td></tr>`;
  }).join('')}</tbody></table></div>`;
  let pendingTable = pendingOnlyLoading
    ? pendingOnlyLoading
    : `${pendingBeforeTable}${
        pendingRows.length
          ? `<div class="table-wrap" style="margin-top:14px;"><table><thead><tr><th>Name</th><th>Email</th><th>Requested Access</th><th>Assign Department</th><th>Action</th></tr></thead><tbody>${pendingRows.map(p => `<tr><td><strong>${escapeHtml(p.name || 'Google User')}</strong></td><td>${escapeHtml(p.email || '')}</td><td><span class="badge-status pending">Pending</span></td><td><select class="form-select pending-assign-dept">${deptOpts}</select></td><td style="white-space:nowrap;"><button type="button" class="btn btn-primary btn-sm" data-assign-pending="${escapeHtml(p.email || '')}">Assign as Chair</button> <button type="button" class="btn btn-danger btn-sm" data-del-pending="${escapeHtml(p.email || '')}">Delete</button></td></tr>`).join('')}</tbody></table></div>`
          : `<div class="card" style="margin-top:14px;"><div class="card-body" style="padding:14px 16px;">No pending Google sign-ins waiting for dean assignment.</div></div>`
      }`;
  return `<div class="page-header"><div><h2>System Accounts</h2><p style="color:var(--gray-600);margin-top:4px;">Dean can assign pending Google users to a department chair role.</p></div></div>${mappedTable}${pendingTable}`;
}

function renderMyAccount() {
  let u = state.currentUser;
  if (!u) return '';
  let nameVal = escapeHtml(u.name || '');
  let emailVal = escapeHtml(u.email || '');
  return `<div class="card my-account-card"><div class="card-body"><div style="display:flex;gap:16px;margin-bottom:24px"><div style="width:64px;height:64px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff">${escapeHtml(u.initials || '')}</div><div><div id="myacct_header_name" style="font-size:18px;font-weight:700">${escapeHtml(u.name || '')}</div><div style="color:var(--gray-600)">${escapeHtml(u.email || '')}</div></div></div><div id="myacctAlert"></div><div class="form-grid"><div class="form-group full"><label for="myacct_name">Full Name</label><input class="form-input" id="myacct_name" name="name" autocomplete="name" value="${nameVal}"></div><div class="form-group full"><label for="myacct_email">Email</label><input class="form-input form-input-readonly" id="myacct_email" type="email" name="email" autocomplete="email" value="${emailVal}" readonly aria-readonly="true" title="Email is tied to your login and cannot be changed here"></div></div><button type="button" class="btn btn-primary" id="myacctSaveBtn">Save Changes</button></div></div>`;
}

function renderModal() {
  let {type,data}=state.modal;
  if (type === 'addSchedule') {
    const schedFooter = `<button class="btn btn-secondary" id="modalClose2">Cancel</button><button class="btn btn-primary" id="modalSaveBtn">Save Schedule</button>`;
    return modalWrap('Create Schedule', renderScheduleForm(), schedFooter, 'modal-schedule', 'Conflicts are detected automatically before saving');
  }
  if (type === 'viewSchedule') {
    let isDean = state.currentUser?.role === 'admin';
    const delBtn = `<button type="button" class="btn btn-danger" data-delschedid="${escapeHtml(data.id)}">Delete schedule</button>`;
    const editBtn = `<button type="button" class="btn btn-secondary" id="vsEditScheduleBtn">Edit schedule</button>`;
    const editFooter = `<button type="button" class="btn btn-secondary" id="vsCancelEditBtn">Cancel</button><button type="button" class="btn btn-primary" id="modalSaveBtn">Save changes</button>`;
    const closeOnly = `<button type="button" class="btn btn-secondary" id="modalClose2">Close</button>`;
    let chairCanMutate = scheduleMutableByCurrentChair(data);
    let vsMode = state.modal.viewScheduleMode || 'view';
    if (!isDean && !chairCanMutate && vsMode === 'edit') {
      state.modal.viewScheduleMode = 'view';
      vsMode = 'view';
    }
    let vsFooter;
    if (isDean) {
      vsFooter = '';
    } else if (!chairCanMutate) {
      vsFooter = closeOnly;
    } else {
      vsFooter = vsMode === 'view' ? `${editBtn}${delBtn}` : editFooter;
    }
    let vsSubtitle =
      !isDean && !chairCanMutate && state.currentUser?.role === 'chairperson'
        ? 'View only — only the department that created this schedule can edit or delete it.'
        : '';
    return modalWrap('Schedule Details', renderViewSchedule(data), vsFooter, 'modal-view-schedule', vsSubtitle);
  }
  if(type==='addSubject') return modalWrap(data?.id?'Edit Subject':'Add Subject',renderSubjectForm(data));
  if(type==='addProfessor') return modalWrap(data?.id?'Edit Professor':'Add Professor',renderProfessorForm(data));
  if (type === 'addSection') {
    let d = data || {};
    return modalWrap(d._oldSection ? 'Edit Section' : 'Add Section', renderSectionForm(d));
  }
  if (type === 'addRoom') {
    let d = data || {};
    return modalWrap(d.id ? 'Edit Room' : 'Add Room', renderRoomForm(d));
  }
  if (type === 'addCurriculum') {
    let d = data || {};
    let viewOnly = !canUserMutateCurriculum(state.currentUser);
    let title = viewOnly ? (d.id ? 'Subject (view only)' : 'Curriculum') : (d.id ? 'Edit Subject' : 'Add Subject');
    let footer = viewOnly
      ? `<button type="button" class="btn btn-secondary" id="modalClose2">Close</button>`
      : `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="modalSaveBtn">Save</button>`;
    return modalWrap(title, renderCurriculumForm(d, { readOnly: viewOnly }), footer, 'modal-curriculum');
  }
  if (type === 'newRequest') {
    let requestStep = currentRequestFormStep();
    const reqFooter = requestStep === 1
      ? `<button class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="rqNextStepBtn">Next</button>`
      : `<button type="button" class="btn btn-secondary" id="rqPrevStepBtn">Back</button><button class="btn btn-primary" id="modalSaveBtn">Submit Request</button>`;
    return modalWrap('Request a room', renderRequestForm(), reqFooter, 'modal-request', 'Borrow a room from another department');
  }
  if (type === 'approveTeachingAssignment') {
    let footer = `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="modalSaveBtn">Approve Request</button>`;
    return modalWrap('Approve Teaching Assignment', renderTeachingApprovalForm(), footer, 'modal-request', 'Select faculty before approving this request');
  }
  if (type === 'bookTeachingRoom') {
    let footer = `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="modalSaveBtn">Send Room Request</button>`;
    return modalWrap('Book Room For Teaching', renderTeachingRoomBookingForm(), footer, 'modal-request', 'Request a room after teaching assignment approval');
  }
  if (type === 'declineRequest') {
    let footer = `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-danger" id="modalSaveBtn">Decline request</button>`;
    return modalWrap('Decline request', renderDeclineRequestForm(), footer, 'modal-request', 'The requester will see this reason on their Requests page.');
  }
  if (type === 'scheduleExportWizard') {
    const sewFooter = `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="scheduleExportWizardConfirmBtn">${icon('fileText', 16)} Export</button>`;
    return modalWrap(
      'Export schedule',
      renderScheduleExportWizardBody(),
      sewFooter,
      'modal-schedule-export-wizard',
      'Select academic year, semester, and how to organize the export.',
    );
  }
  if (type === 'formsExport') {
    const ft = state.modal?.formType || 'schedule';
    const heads = {
      faculty: { head: 'Faculty Load Form', sub: 'Teaching load and assignment for one faculty member (from the timetable).' },
      preenroll: { head: 'Pre-Enrollment Form', sub: 'Subjects per section with room and schedule.' },
      schedule: { head: 'Schedule of Subjects', sub: 'Official schedule by section for your program.' },
    };
    const H = heads[ft] || heads.schedule;
    const formsExFooter = `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="formsExportModalSubmit">${icon('download', 16)} Export form</button>`;
    return modalWrap(`Export — ${H.head}`, renderFormsExportModalBody(), formsExFooter, 'modal-forms-export', H.sub);
  }
  if (type === 'dashboardConflicts') {
    let step = state.modal.step || 'list';
    let schedulesToCheck = dashboardSchedulesForConflictScope();
    if (step === 'detail' && state.modal.scheduleId) {
      let detailFoot = `<button type="button" class="btn btn-secondary" id="conflictDetailBackBtn">Back to list</button><button type="button" class="btn btn-secondary" id="modalClose2">Close</button>`;
      return modalWrap('Conflict detail', renderDashboardConflictDetailBody(state.modal.scheduleId), detailFoot, 'modal-conflicts', 'This entry overlaps another class in time');
    }
    let listFoot = `<button type="button" class="btn btn-secondary" id="modalClose2">Close</button>`;
    return modalWrap('Schedule conflicts', renderDashboardConflictListBody(schedulesToCheck), listFoot, 'modal-conflicts', 'Select an entry to see what it overlaps with');
  }
  if (type === 'editSystemAccount') {
    let d = state.modal.data || {};
    let foot = `<button type="button" class="btn btn-secondary" id="modalClose2">Cancel</button><button type="button" class="btn btn-primary" id="modalSaveBtn">Save</button>`;
    return modalWrap('Edit account', renderSystemAccountEditForm(d), foot, 'modal-account-edit', 'Changes are stored for this browser (local dean tools).');
  }
  return '';
}

/** Prefill Create Schedule from current Schedule tab filters (user can still change). */
function scheduleFormFilterDefaults() {
  if (state.page !== 'schedule') return {};
  let u = state.currentUser;
  let o = {};
  if (u.role === 'chairperson' && state.filterMode === 'section' && state.filterSection) {
    o.defaultSection = state.filterSection;
  } else if (u.role === 'admin' && state.filterMode === 'department' && state.filterSection) {
    o.defaultSection = state.filterSection;
  }
  if (state.filterMode === 'faculty' && state.filterFaculty && state.filterFaculty !== 'all') {
    o.defaultProfessorId = state.filterFaculty;
  }
  if (state.filterMode === 'room' && state.filterRoom) {
    o.defaultRoomId = state.filterRoom;
  }
  return o;
}

/** Prefill Request form “Available room” from Requests timetable room filter. */
function requestFormBorrowRoomPrefill() {
  if (state.page !== 'requests') return {};
  let rid = state.requestTimetableRoom;
  if (rid && rid !== 'all') return { prefillBorrowRoomId: rid };
  return {};
}

/** Departments (with rooms) the user may borrow from — excludes their own (“Requesting from”) dept. */
function requestFormToDepartmentChoices(u) {
  if (!u?.dept) return [];
  return departmentsWithRoomsList()
    .filter(d => d.id !== u.dept)
    .slice()
    .sort((a, b) => a.code.localeCompare(b.code));
}

/** Picks a valid target dept for the request form (timetable filter when possible, else first choice). */
function resolveRequestFormToDeptId(u, preferredDeptId) {
  let choices = requestFormToDepartmentChoices(u);
  let ids = new Set(choices.map(d => d.id));
  if (preferredDeptId && ids.has(preferredDeptId)) return preferredDeptId;
  return choices[0]?.id || '';
}

/** Request form: do not pre-fill section (schedules may still list legacy names like BSIE IGK from the DB). */
function requestFormDefaultSection() {
  return '';
}

function currentRequestFormStep() {
  if (state.modal?.type !== 'newRequest') return 1;
  return state.modal.requestStep === 2 ? 2 : 1;
}

function validateRequestFormStepOne(showBanner = true) {
  let reasonRq = (document.getElementById('rq_reason')?.value || '').trim();
  if (!reasonRq) {
    if (showBanner) showFormValidationBanner('rqFormAlert', 'Select a reason to continue.');
    return false;
  }
  return true;
}

function isTeachingAssignmentRequest(req) {
  let reason = String(req?.reason || '').trim().toLowerCase();
  let note = String(req?.reasonComment || '').trim().toLowerCase();
  return reason.includes('teaching assignment') || note.includes('teaching assignment');
}

/** Teaching assignment + "select from another department": defer room until after faculty approval. */
function teachingAssignmentUsesDeferredRoomBooking(req) {
  if (!req || !isTeachingAssignmentRequest(req) || req.parentTeachingRequestId) return false;
  if (req.roomId == null || req.roomId === '' || req.roomId === REQUEST_ROOM_PENDING_ID) return true;
  if (String(req.reasonComment || '').includes(REQUEST_ROOM_PENDING_MARKER)) return true;
  if (String(req.reason || '').includes(REQUEST_ROOM_PENDING_MARKER)) return true;
  return false;
}

function requestHasPendingRoom(req) {
  if (!req) return true;
  if (req.status === 'pending_teaching_room') return true;
  if (req.status === 'approved_teaching') {
    let ch = requestsLinkedToTeachingParent(req.id);
    if (ch.some(x => String(x.status) === 'approved')) return false;
    return true;
  }
  if (isTeachingAssignmentRequest(req) && !req.parentTeachingRequestId) {
    if (!teachingAssignmentUsesDeferredRoomBooking(req)) {
      return false;
    }
    if (req.status === 'approved') {
      let children = requestsLinkedToTeachingParent(req.id);
      if (!children.length) return true;
      return !children.some(x => String(x.status) === 'approved');
    }
    if (isPendingRequestStatus(req.status)) {
      return true;
    }
  }
  if (req.roomId == null || req.roomId === '' || req.roomId === REQUEST_ROOM_PENDING_ID) return true;
  return String(req.reasonComment || '').includes(REQUEST_ROOM_PENDING_MARKER)
    || String(req.reason || '').includes(REQUEST_ROOM_PENDING_MARKER);
}

function isPendingRequestStatus(status) {
  return status === 'pending' || status === 'pending_teaching_room';
}

function isPendingRoomRequestForTimetable(r) {
  if (!r) return false;
  if (!isPendingRequestStatus(r.status)) return false;
  let rid = r.roomId;
  if (rid == null || rid === '' || rid === REQUEST_ROOM_PENDING_ID) return false;
  let days = parseScheduleDays(r.days);
  return days.length > 0 && !!r.timeStart && !!r.timeEnd;
}
function pseudoScheduleFromPendingRequest(r) {
  let createdRaw = r.created != null ? String(r.created).trim() : '';
  let createdIso =
    createdRaw && /^\d{4}-\d{2}-\d{2}$/.test(createdRaw) ? `${createdRaw}T12:00:00.000Z` : new Date().toISOString();
  return {
    id: `${PENDING_REQ_SCHEDULE_PREFIX}${r.id}`,
    pendingRequest: true,
    subjectId: r.subjectId,
    professorId: r.professorId,
    professorOtherName: r.professorOtherName || null,
    roomId: r.roomId,
    roomOtherName: null,
    dept: r.fromDept,
    section: r.section || '',
    days: parseScheduleDays(r.days),
    timeStart: r.timeStart,
    timeEnd: r.timeEnd,
    schYear: r.schYear || '',
    schSem: r.schSem || '',
    schAy: normalizeAcademicYearInput(r.schAy) || DEFAULT_ACADEMIC_YEAR,
    color: 'blue',
    setLabel: r.setLabel || null,
    labLabel: r.labLabel || null,
    createdAt: createdIso,
  };
}
function pendingPseudoSchedulesForUserScope(u, term) {
  term = term || currentTermFilter();
  return state.requests
    .filter(r => requestMatchesCurrentTerm(r, term) && isPendingRoomRequestForTimetable(r))
    .filter(r => {
      if (!u) return false;
      if (u.role === 'admin') return true;
      if (u.role === 'chairperson') return r.fromDept === u.dept;
      return false;
    })
    .map(pseudoScheduleFromPendingRequest);
}
function filterPseudoSchedulesForScheduleToolbar(pseudos, u, isAdmin, isChair, profOptionsForToolbar) {
  let out = pseudos.slice();
  if (state.filterMode === 'faculty') {
    if (u.role === 'admin' && state.filterFaculty === 'all') {
      let idSet = new Set(profOptionsForToolbar.map(p => p.id));
      out = out.filter(s => {
        if (s.professorId === PROFESSOR_OTHER_ID) return s.dept === state.filterDept;
        return idSet.has(s.professorId);
      });
    } else {
      out = out.filter(s => s.professorId === state.filterFaculty);
    }
  } else if (state.filterMode === 'room') {
    out = out.filter(s => scheduleMatchesRoomFilter(s, state.filterRoom));
  } else if (state.filterMode === 'department' && isAdmin) {
    out = out.filter(s => s.dept === state.filterDept && s.section === state.filterSection);
  } else if (state.filterMode === 'section' && isChair) {
    out = out.filter(s => s.section === state.filterSection);
  }
  return out;
}

function requestReasonCommentDisplayText(req) {
  return String(req?.reasonComment || '').replace(REQUEST_ROOM_PENDING_MARKER, '').trim();
}

function requestReasonDisplayText(req) {
  return String(req?.reason || '').replace(REQUEST_ROOM_PENDING_MARKER, '').trim();
}
function sameDaysSet(a, b) {
  let aa = Array.isArray(a) ? [...new Set(a.map(String))].sort() : [];
  let bb = Array.isArray(b) ? [...new Set(b.map(String))].sort() : [];
  if (aa.length !== bb.length) return false;
  return aa.every((d, i) => d === bb[i]);
}
function scheduleLooksLinkedToRequest(s, r) {
  if (!s || !r) return false;
  if (String(s.subjectId || '') !== String(r.subjectId || '')) return false;
  if (String(s.section || '') !== String(r.section || '')) return false;
  if (String(s.timeStart || '') !== String(r.timeStart || '')) return false;
  if (String(s.timeEnd || '') !== String(r.timeEnd || '')) return false;
  if (String(s.schYear || '') !== String(r.schYear || '')) return false;
  if (String(s.schSem || '') !== String(r.schSem || '')) return false;
  if ((normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) !== (normalizeAcademicYearInput(r.schAy) || DEFAULT_ACADEMIC_YEAR)) return false;
  if (!sameDaysSet(s.days, r.days)) return false;
  if (String(s.roomId || '') !== String(r.roomId || '')) return false;
  if (String(s.roomOtherName || '') !== String(r.roomOtherName || '')) return false;
  if ((r.professorId || null) !== null && String(s.professorId || '') !== String(r.professorId || '')) return false;
  if ((r.professorOtherName || null) !== null && String(s.professorOtherName || '') !== String(r.professorOtherName || '')) return false;
  return true;
}
async function removeSchedulesLinkedToRequest(r) {
  if (!r) return;
  let linked = state.schedules.filter(s => scheduleLooksLinkedToRequest(s, r));
  if (!linked.length) return;
  if (hasSupabaseClient()) {
    for (let s of linked) {
      const { error } = await window.cenSupabase.from('schedules').delete().eq('id', s.id);
      if (error) {
        window.alert(`Request was declined, but deleting linked timetable rows failed: ${error.message}`);
        return;
      }
    }
    await syncSchedulesFromSupabase();
    return;
  }
  let drop = new Set(linked.map(s => s.id));
  state.schedules = state.schedules.filter(s => !drop.has(s.id));
}

/** Match DB / legacy casing (`Declined`, spaces). */
function normalizeRequestStatusFromDb(raw) {
  let s = String(raw ?? 'pending').trim().toLowerCase().replace(/\s+/g, '_');
  return s || 'pending';
}

function isRequestStatusDeclined(status) {
  return normalizeRequestStatusFromDb(status) === 'declined';
}

/** Text the approver entered when declining; supports alternate column names from older schemas. */
function requestDeclineReasonDisplayText(req) {
  if (!req) return '';
  for (let v of [req.declineReason, req.decline_reason, req.declineComment, req.decline_comment]) {
    if (v != null && String(v).trim() !== '') return String(v).trim();
  }
  return '';
}

function hasPendingRoomRequestForTeachingParent(parentRequestId) {
  if (!parentRequestId) return false;
  let p = getStateRequestById(parentRequestId);
  return p ? pendingTeachingRoomFollowupsForParent(p).length > 0 : false;
}

/** Outgoing requests the chair sent (same scope as dashboard “My Outgoing Requests”). */
function outgoingRequestsForChairDeptAndTerm(u, term = currentTermFilter()) {
  if (!u || u.role !== 'chairperson' || !u.dept) return [];
  return state.requests.filter(r => r.fromDept === u.dept && requestMatchesCurrentTerm(r, term));
}

function partitionOutgoingRequestsByStatusColumn(outgoing) {
  return {
    pending: outgoing.filter(
      r => isPendingRequestStatus(r.status) || r.status === 'approved_teaching' || requestHasPendingRoom(r),
    ),
    approved: outgoing.filter(r => r.status === 'approved' && !requestHasPendingRoom(r)),
    declined: outgoing.filter(r => isRequestStatusDeclined(r.status)),
  };
}

/** Delete order: children before parents (FK `parent_teaching_request_id`). */
function sortRequestRowDeleteIdsChildFirst(rows) {
  let rowById = new Map(rows.map(r => [String(r.id), r]));
  let remaining = new Set(rows.map(r => String(r.id)));
  let out = [];
  while (remaining.size) {
    let batch = [...remaining].filter(id => {
      let childStill = [...remaining].some(cid => {
        if (cid === id) return false;
        let c = rowById.get(cid);
        return c && String(c.parentTeachingRequestId || '') === id;
      });
      return !childStill;
    });
    if (!batch.length) batch = [[...remaining][0]];
    for (let b of batch) {
      out.push(b);
      remaining.delete(b);
    }
  }
  return out;
}

/**
 * Remove all outgoing requests in one dashboard column for the current chair’s department and term only.
 * Deletes linked teaching follow-ups from the same department when their parent is in the cleared set.
 */
async function clearOutgoingRequestsForBucket(bucket) {
  const allowed = new Set(['pending', 'approved', 'declined']);
  if (!allowed.has(bucket)) return;
  let u = state.currentUser;
  if (!u || u.role !== 'chairperson' || !u.dept) return;
  let term = currentTermFilter();
  let outgoing = outgoingRequestsForChairDeptAndTerm(u, term);
  let parts = partitionOutgoingRequestsByStatusColumn(outgoing);
  let list = parts[bucket] || [];
  if (!list.length) {
    showToast(`No ${bucket} outgoing requests to clear.`);
    return;
  }
  let deptLabel = getDept(u.dept)?.code || 'your department';
  if (
    !window.confirm(
      `Permanently delete all ${list.length} ${bucket} outgoing request(s) from ${deptLabel} for this term (${term.sem}, ${term.ay})?\n\nOther departments are not affected. This cannot be undone.`,
    )
  ) {
    return;
  }
  let idSet = new Set(list.map(r => String(r.id)));
  let expanded = [...list];
  for (let r of list) {
    for (let ch of requestsLinkedToTeachingParent(r.id)) {
      if (ch.fromDept !== u.dept || !requestMatchesCurrentTerm(ch, term)) continue;
      let cid = String(ch.id);
      if (!idSet.has(cid)) {
        idSet.add(cid);
        expanded.push(ch);
      }
    }
  }
  let orderedIds = sortRequestRowDeleteIdsChildFirst(expanded);
  if (hasSupabaseClient()) {
    for (let id of orderedIds) {
      const { error } = await window.cenSupabase.from('requests').delete().eq('id', id);
      if (error) {
        window.alert(`Could not delete requests: ${error.message}`);
        await syncRequestsFromSupabase();
        render();
        return;
      }
    }
    await syncRequestsFromSupabase();
  } else {
    let remove = new Set(orderedIds.map(String));
    state.requests = state.requests.filter(r => !remove.has(String(r.id)));
  }
  showToast(`Removed ${orderedIds.length} request(s).`);
  render();
}

function renderTeachingApprovalForm() {
  let reqId = state.modal?.requestId;
  let r = state.requests.find(x => x.id === reqId);
  if (!r) {
    return `<div id="taApproveAlert"><div class="form-validation-alert"><span class="form-validation-alert-text">Request not found.</span></div></div>`;
  }
  let approverDept = r.toDept || state.currentUser?.dept || '';
  let approverDeptInfo = getDept(approverDept);
  let taTerm = {
    sem: (r.schSem || '').trim() || '1st Semester',
    ay: normalizeAcademicYearInput(r.schAy) || normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR,
  };
  let profChoices = filterProfessorsByAvailability(
    state.professors
      .filter(p => p.dept === approverDept && professorStatusValue(p) === 'active')
      .sort((a, b) => a.name.localeCompare(b.name)),
    Array.isArray(r.days) ? r.days : [],
    r.timeStart,
    r.timeEnd,
    { term: taTerm },
  );
  let profOpts = profChoices.map(p => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} (${escapeHtml(p.short)})</option>`).join('');
  return `<div class="request-room-form schedule-form-wrapper">
    <div id="taApproveAlert"></div>
    <div class="form-group full">
      <label class="form-label">Requesting from</label>
      <input class="form-input" readonly tabindex="-1" value="${escapeHtml(getDept(r.fromDept)?.code || r.fromDept || '—')} — ${escapeHtml(getDept(r.fromDept)?.name || '')}">
    </div>
    <div class="form-group full">
      <label class="form-label">Approving department</label>
      <input class="form-input" readonly tabindex="-1" value="${escapeHtml(approverDeptInfo?.code || approverDept || '—')} — ${escapeHtml(approverDeptInfo?.name || '')}">
    </div>
    <div class="form-group full">
      <label class="form-label" for="ta_approve_prof">Assign faculty for this subject <span class="label-req" aria-hidden="true">*</span></label>
      <select class="form-select" id="ta_approve_prof" required ${profChoices.length ? '' : 'disabled'}>
        <option value="">${profChoices.length ? 'Select faculty...' : 'No active faculty available in this department'}</option>
        ${profOpts}
      </select>
      <p class="form-hint">Required before approving a Teaching Assignment request.</p>
    </div>
  </div>`;
}

function renderDeclineRequestForm() {
  let reqId = state.modal?.requestId;
  let r = getStateRequestById(reqId);
  let from = r ? getDept(r.fromDept) : null;
  let sub = r ? getSubject(r.subjectId) : null;
  let roomLine = r ? escapeHtml(roomDisplayLineFromPick(r.roomId, r.roomOtherName)) : '—';
  let summary = r
    ? `${escapeHtml(sub?.code || '—')} · ${escapeHtml(r.section || '—')} · ${roomLine} · ${escapeHtml(from?.code || r.fromDept || '—')} → ${escapeHtml(getDept(r.toDept)?.code || r.toDept || '—')}`
    : 'Could not load request details — you can still type a reason if you retry from the list.';
  let alertInner = !r
    ? `<div class="alert form-validation-alert" role="alert">${icon('alertTriangle', 18)}<span class="form-validation-alert-text">This request was not found in the current list. Close and open Decline again from <strong>Incoming Requests</strong>.</span></div>`
    : '';
  let requesterNote = r ? (requestReasonCommentDisplayText(r) || requestReasonDisplayText(r) || '').trim() : '';
  let requesterNoteBlock = requesterNote
    ? `<div class="decline-modal-requester-note"><strong>Requester&rsquo;s note</strong><span class="decline-modal-requester-note-text">${escapeHtml(requesterNote)}</span></div>`
    : '';
  return `<div class="request-room-form schedule-form-wrapper decline-request-form">
    <div id="declineRequestAlert">${alertInner}</div>
    ${requesterNoteBlock}
    <p class="form-hint decline-request-summary" style="margin-bottom:12px;">${summary}</p>
    <div class="form-group full">
      <label class="form-label" for="decline_reason_comment">Reason for declining <span class="label-req" aria-hidden="true">*</span></label>
      <textarea class="form-input form-textarea decline-reason-input" id="decline_reason_comment" name="decline_reason_comment" rows="5" required placeholder="Explain why this request cannot be approved…" aria-required="true"></textarea>
    </div>
  </div>`;
}

function renderTeachingRoomBookingForm() {
  let baseId = state.modal?.requestId;
  let base = state.requests.find(x => x.id === baseId);
  if (!base) {
    return `<div id="bookRoomAlert"><div class="form-validation-alert"><span class="form-validation-alert-text">Teaching approval request not found.</span></div></div>`;
  }
  let u = state.currentUser;
  let toDeptChoices = requestFormToDepartmentChoices(u);
  let selectedToDeptId = state.modal?.bookToDept || resolveRequestFormToDeptId(u, state.requestTimetableDept);
  if (!toDeptChoices.some(d => d.id === selectedToDeptId)) selectedToDeptId = toDeptChoices[0]?.id || '';
  state.modal.bookToDept = selectedToDeptId;
  let roomsPickAll = roomsFreeForBorrowing(u, Array.isArray(base.days) ? base.days : [], base.timeStart || '', base.timeEnd || '');
  let roomsPick = selectedToDeptId ? roomsPickAll.filter(r => r.dept === selectedToDeptId) : [];
  let roomOpts = roomsPick.map(r => `<option value="${escapeHtml(r.id)}">${escapeHtml(r.name)}</option>`).join('');
  let toDeptOpts = toDeptChoices.map(d => `<option value="${escapeHtml(d.id)}" ${d.id === selectedToDeptId ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('');
  let roomPlaceholder = !selectedToDeptId
    ? 'Select a department first'
    : roomsPick.length
      ? 'Select available room'
      : 'No rooms free for this slot — adjust department';
  let profLine = professorDisplayLineFromPick(base.professorId, base.professorOtherName);
  return `<div class="request-room-form schedule-form-wrapper">
    <div id="bookRoomAlert"></div>
    <div class="schedule-form-inline-row request-room-form-inline-pair">
      <div class="form-group">
        <label class="form-label">Faculty assigned</label>
        <input class="form-input" readonly tabindex="-1" value="${escapeHtml(profLine)}">
      </div>
      <div class="form-group">
        <label class="form-label">Subject</label>
        <input class="form-input" readonly tabindex="-1" value="${escapeHtml(getSubject(base.subjectId)?.code || '—')} — ${escapeHtml(base.section || '—')}">
      </div>
    </div>
    <div class="schedule-form-inline-row request-room-form-inline-pair">
      <div class="form-group">
        <label class="form-label" for="book_to_dept">Request room from <span class="label-req" aria-hidden="true">*</span></label>
        <select class="form-select" id="book_to_dept" ${toDeptChoices.length ? '' : 'disabled'}><option value="">${toDeptChoices.length ? 'Select department...' : 'No available departments'}</option>${toDeptOpts}</select>
      </div>
      <div class="form-group">
        <label class="form-label" for="book_room">Available room <span class="label-req" aria-hidden="true">*</span></label>
        <select class="form-select" id="book_room" ${selectedToDeptId ? '' : 'disabled'}><option value="">${escapeHtml(roomPlaceholder)}</option>${roomOpts}</select>
      </div>
    </div>
    <p class="form-hint">Pick any department/room for the same day/time, then send a room request for approval.</p>
  </div>`;
}

function modalWrap(title, body, footer = `<button class="btn btn-secondary" id="modalClose2">Cancel</button><button class="btn btn-primary" id="modalSaveBtn">Save</button>`, panelClass = '', subtitle = '') {
  const panelCls = 'modal' + (panelClass ? ' ' + panelClass : '');
  const titleBlock = subtitle
    ? `<div class="modal-header-text"><div class="modal-title" id="modalTitleEl">${title}</div><p class="modal-subtitle">${escapeHtml(subtitle)}</p></div>`
    : `<div class="modal-title" id="modalTitleEl">${title}</div>`;
  return `<div class="modal-backdrop" id="modalBackdrop"><div class="${panelCls}" id="modalPanel" role="dialog" aria-modal="true" aria-labelledby="modalTitleEl"><div class="modal-header">${titleBlock}<span class="modal-close" id="modalClose" role="button" tabindex="0" aria-label="Close">${icon('close', 20)}</span></div><div class="modal-body">${body}</div><div class="modal-footer">${footer}</div></div></div>`;
}

function renderScheduleForm() {
  let u = state.currentUser;
  let m = state.modal && state.modal.type === 'addSchedule' ? state.modal : null;
  let slot = m?.slot || null;
  let defSec = (m && m.defaultSection) || '';
  let defProf = (m && m.defaultProfessorId) || '';
  let defRoom = (m && m.defaultRoomId) || '';
  let isAdmin = u.role === 'admin';
  let formDept = state.modal?.formDept;
  if (!isAdmin) formDept = u.dept;
  else if (!formDept || formDept === '') formDept = 'all';

  let profList, roomList, secDeptIds;
  if (isAdmin && formDept === 'all') {
    profList = [...state.professors].sort((a, b) => a.name.localeCompare(b.name));
    roomList = [...ROOMS].sort((a, b) => a.name.localeCompare(b.name));
    secDeptIds = DEPARTMENTS.map(d => d.id);
  } else {
    let d = formDept;
    profList = [...state.professors.filter(p => p.dept === d)].sort((a, b) => a.name.localeCompare(b.name));
    let ownRooms = roomsSourceForApp().filter(r => r.dept === d);
    let commonRooms = roomsSourceForApp().filter(r => isSharedRoomName(r.name));
    let mergedRooms = new Map();
    for (let r of [...ownRooms, ...commonRooms]) {
      if (r?.id) mergedRooms.set(r.id, r);
    }
    roomList = [...mergedRooms.values()].sort((a, b) => a.name.localeCompare(b.name));
    secDeptIds = [d];
  }
  // Hard fallback: keep known shared rooms available in Create Schedule even before/without room-table repair sync.
  for (let fr of COMMON_ROOM_FALLBACKS) {
    if (!roomList.some(r => r && r.id === fr.id)) roomList.push({ ...fr });
  }
  roomList = roomList.slice().sort((a, b) => a.name.localeCompare(b.name));

  let slotDaysInit = slot?.day ? [slot.day] : [];
  let slotTsInit = slot?.timeStart || '';
  let slotTeInit = slot?.timeEnd || '';
  let profTermInit = currentTermFilter();
  let profListForOpts = filterProfessorsByAvailability(profList, slotDaysInit, slotTsInit, slotTeInit, { term: profTermInit });
  let profBody = profListForOpts.map(p => `<option value="${escapeHtml(p.id)}" ${defProf && defProf === p.id ? 'selected' : ''}>${escapeHtml(p.name)} (${escapeHtml(getDept(p.dept)?.code || '')})</option>`).join('');
  let profLegacyOpt =
    defProf && defProf !== PROFESSOR_OTHER_ID && !profListForOpts.some(p => p.id === defProf)
      ? (() => {
          let px = getProfessor(defProf);
          if (!px) return '';
          if (profList.some(p => p.id === defProf)) return '';
          return `<option value="${escapeHtml(defProf)}" selected>${escapeHtml(px.name)} (${escapeHtml(getDept(px.dept)?.code || '')})</option>`;
        })()
      : '';
  let profOpts = profBody + profLegacyOpt + `<option value="${PROFESSOR_OTHER_ID}">Others:</option>`;
  let roomOpts = roomList.map(r => `<option value="${escapeHtml(r.id)}" ${defRoom && defRoom === r.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('');
  let roomLegacyOpt =
    defRoom && !roomList.some(r => r.id === defRoom)
      ? (() => {
          let rx = ROOMS.find(x => x.id === defRoom);
          return rx ? `<option value="${escapeHtml(defRoom)}" selected>${escapeHtml(rx.name)}</option>` : '';
        })()
      : '';
  roomOpts += `<option value="${ROOM_OTHER_ID}">Others:</option>`;
  let timeStartOpts = timetableTimeStartChoices().map(t => `<option value="${t}" ${slot && slot.timeStart === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let timeEndOpts = timetableTimeEndChoices().map(t => `<option value="${t}" ${slot && slot.timeEnd === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let secMergeOpts = secDeptIds.length === 1 && secDeptIds[0] ? { programMatchDept: secDeptIds[0] } : {};
  let secChoices = mergeSectionOptions(secDeptIds, secMergeOpts);
  let secOpts = secChoices.map(s => `<option value="${escapeHtml(s)}" ${defSec && defSec === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  let secLegacyOpt =
    defSec && !secChoices.includes(defSec)
      ? `<option value="${escapeHtml(defSec)}" selected>${escapeHtml(defSec)}</option>`
      : '';
  const req = '<span class="label-req" aria-hidden="true">*</span>';
  let defaultSchAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let lockedSem = (state.termSemester || '1st Semester').trim();

  let deptField;
  if (isAdmin) {
    deptField = `<div class="form-group"><label class="form-label" for="f_schedule_dept">Department ${req}</label><select class="form-select" id="f_schedule_dept" aria-label="Department">
      <option value="all" ${formDept === 'all' ? 'selected' : ''}>All departments</option>
      ${DEPARTMENTS.map(d => `<option value="${d.id}" ${formDept === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('')}
    </select></div>`;
  } else {
    let dInfo = getDept(u.dept);
    deptField = `<div class="form-group"><label class="form-label" for="f_schedule_dept">Department</label><select class="form-select" id="f_schedule_dept" disabled aria-label="Your department"><option value="${escapeHtml(u.dept)}" selected>${escapeHtml(dInfo?.code || '')} — ${escapeHtml(dInfo?.name || '')}</option></select></div>`;
  }
  let deptForDayPickers = !isAdmin ? u.dept : formDept === 'all' || !formDept ? null : formDept;
  let dayColListForForm = timetableDayColumnsForDept(deptForDayPickers);

  return `<div id="conflictAlert"></div>
  <div class="schedule-form-wrapper">
    <div class="schedule-form-inline-row">
      ${deptField}
      <div class="form-group"><label class="form-label" for="f_ay">Academic Year ${req}</label><input class="form-input" id="f_ay" value="${escapeHtml(defaultSchAy)}" placeholder="2025-2026" readonly></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="f_year">Year ${req}</label><select class="form-select" id="f_year"><option value="">Select year...</option></select></div>
      <div class="form-group"><label class="form-label" for="f_section">Section ${req}</label><select class="form-select" id="f_section"><option value="">Select section...</option>${secOpts}${secLegacyOpt}</select></div>
    </div>
    <div class="schedule-form-inline-row schedule-form-row-sem-subject">
      <div class="form-group"><label class="form-label" for="f_sem">Semester ${req}</label><select class="form-select" id="f_sem" disabled><option value="${escapeHtml(lockedSem)}" selected>${escapeHtml(lockedSem)}</option></select></div>
      <div class="form-group"><label class="form-label" for="f_subject">Subject ${req}</label><select class="form-select" id="f_subject"><option value="">Select subject...</option></select></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="f_set" id="f_set_label">Set</label>${setABSelectHtml('f_set', '')}</div>
      <div class="form-group professor-select-group">
        <label class="form-label" id="f_professor_lb">Professor ${req}</label>
        <div class="professor-field-slot">
          <div id="f_professor_select_wrap">
            <select class="form-select" id="f_professor" aria-labelledby="f_professor_lb"><option value="">Select professor...</option>${profOpts}</select>
          </div>
          <div id="f_professor_other_wrap" hidden>
            <div class="professor-other-row">
              <input type="text" class="form-input" id="f_professor_other" autocomplete="off" aria-labelledby="f_professor_lb">
              <button type="button" class="btn btn-outline btn-sm professor-pick-list-btn" id="f_professor_list_btn" aria-label="Choose from faculty list">List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><span class="form-label">Day(s) ${req}</span><div class="days-check">${dayColListForForm.map(d => `<input type="checkbox" class="day-checkbox" id="day_${d}" value="${d}" ${slot && slot.day === d ? 'checked' : ''}><label class="day-label" for="day_${d}">${d.slice(0, 3)}</label>`).join('')}</div></div>
      <div class="form-group room-select-group">
        <label class="form-label" id="f_room_lb">Room ${req}</label>
        <div class="professor-field-slot">
          <div id="f_room_select_wrap">
            <select class="form-select" id="f_room" aria-labelledby="f_room_lb"><option value="">Select room...</option>${roomOpts}${roomLegacyOpt}</select>
          </div>
          <div id="f_room_other_wrap" hidden>
            <div class="professor-other-row">
              <input type="text" class="form-input" id="f_room_other" placeholder="Room name or location" autocomplete="off" aria-labelledby="f_room_lb">
              <button type="button" class="btn btn-outline btn-sm professor-pick-list-btn" id="f_room_list_btn" aria-label="Choose from room list">List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="f_timeStart">Time start ${req}</label><select class="form-select" id="f_timeStart">${timeStartOpts}</select></div>
      <div class="form-group"><label class="form-label" for="f_timeEnd">Time end ${req}</label><select class="form-select" id="f_timeEnd">${timeEndOpts}</select></div>
    </div>
  </div>`;
}

/** Schedule details: read-only until "Edit schedule"; draft in state.modal.data. */
function renderViewSchedule(d) {
  let mode = state.modal?.viewScheduleMode || 'view';
  let sub = getSubject(d.subjectId), dept = getDept(d.dept);
  if (mode === 'view') {
    let daysStr = Array.isArray(d.days) && d.days.length ? d.days.join(', ') : '—';
    let subLine = sub ? `${escapeHtml(sub.code)} — ${escapeHtml(sub.name)}` : '—';
    let deptLine = dept
      ? `<div class="vs-dept-readout"><span class="badge-dept ${dept.id}">${escapeHtml(dept.code)}</span> ${escapeHtml(dept.name)}</div>`
      : '—';
    let ayRead = escapeHtml(normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR);
    return `<div class="schedule-form-wrapper view-schedule-form view-schedule-readonly">
      <div class="form-group full vs-ay-readout-top"><label class="form-label">Academic Year</label><div class="vs-readonly">${ayRead}</div></div>
      <div class="form-group full"><label class="form-label">Department</label><div class="vs-readonly">${deptLine}</div></div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Year</label><div class="vs-readonly">${escapeHtml(d.schYear || '—')}</div></div>
        <div class="form-group"><label class="form-label">Section</label><div class="vs-readonly">${escapeHtml(d.section || '—')}</div></div>
      </div>
      <div class="schedule-form-inline-row schedule-form-row-sem-subject">
        <div class="form-group"><label class="form-label">Semester</label><div class="vs-readonly">${escapeHtml(d.schSem || '—')}</div></div>
        <div class="form-group"><label class="form-label">Subject</label><div class="vs-readonly">${subLine}</div></div>
      </div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Set</label><div class="vs-readonly">${d.setLabel ? escapeHtml(d.setLabel) : 'None'}</div></div>
        <div class="form-group"><label class="form-label">Professor</label><div class="vs-readonly">${escapeHtml(professorFullNameDisplayLineFromPick(d.professorId, d.professorOtherName))}</div></div>
      </div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Day(s)</label><div class="vs-readonly">${escapeHtml(daysStr)}</div></div>
        <div class="form-group"><label class="form-label">Room</label><div class="vs-readonly">${escapeHtml(roomDisplayLineFromPick(d.roomId, d.roomOtherName))}</div></div>
      </div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Time start</label><div class="vs-readonly">${escapeHtml(fmt12(d.timeStart))}</div></div>
        <div class="form-group"><label class="form-label">Time end</label><div class="vs-readonly">${escapeHtml(fmt12(d.timeEnd))}</div></div>
      </div>
    </div>`;
  }
  let listDept = d.dept;
  let isAdmin = state.currentUser.role === 'admin';
  let subList = subjectsForCreateScheduleSlot(listDept, d.schYear || '', d.schSem || '', normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR);
  let profList = [...state.professors.filter(p => p.dept === listDept)].sort((a, b) => a.name.localeCompare(b.name));
  let vsTerm = {
    sem: (d.schSem || '').trim() || '1st Semester',
    ay: normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR,
  };
  let profAvail = filterProfessorsByAvailability(profList, Array.isArray(d.days) ? d.days : [], d.timeStart, d.timeEnd, {
    term: vsTerm,
    excludeScheduleId: d.id,
  });
  let profLegacyEdit = '';
  if (d.professorId && d.professorId !== PROFESSOR_OTHER_ID && !profAvail.some(p => p.id === d.professorId)) {
    let px = getProfessor(d.professorId);
    if (px) profLegacyEdit = `<option value="${escapeHtml(d.professorId)}" selected>${escapeHtml(px.name)}</option>`;
  }
  let roomList = [...roomsSourceForApp().filter(r => r.dept === listDept)].sort((a, b) => a.name.localeCompare(b.name));
  let subOpts = subList.map(x => `<option value="${escapeHtml(x.id)}" ${d.subjectId === x.id ? 'selected' : ''}>${escapeHtml(x.code)} — ${escapeHtml(x.name)}</option>`).join('');
  let subLegacyOpt =
    d.subjectId && !subList.some(x => x.id === d.subjectId)
      ? (() => {
          let sx = getSubject(d.subjectId);
          return sx ? `<option value="${escapeHtml(sx.id)}" selected>${escapeHtml(sx.code)} — ${escapeHtml(sx.name)}</option>` : '';
        })()
      : '';
  let profOpts =
    `<option value="" ${!d.professorId ? 'selected' : ''}>—</option>` +
    profAvail.map(p => `<option value="${escapeHtml(p.id)}" ${d.professorId === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('') +
    profLegacyEdit +
    `<option value="${PROFESSOR_OTHER_ID}" ${d.professorId === PROFESSOR_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let roomOpts = roomList.map(r => `<option value="${escapeHtml(r.id)}" ${d.roomId === r.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('')
    + `<option value="${ROOM_OTHER_ID}" ${d.roomId === ROOM_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let secChoices = mergeSectionOptions([listDept], listDept ? { programMatchDept: listDept } : {});
  let secOpts = secChoices.map(sec => `<option value="${escapeHtml(sec)}" ${String(d.section) === sec ? 'selected' : ''}>${escapeHtml(sec)}</option>`).join('');
  let secLegacyOpt =
    d.section && !secChoices.includes(String(d.section))
      ? `<option value="${escapeHtml(d.section)}" selected>${escapeHtml(d.section)}</option>`
      : '';
  let deptOpts = DEPARTMENTS.map(x => `<option value="${x.id}" ${d.dept === x.id ? 'selected' : ''}>${escapeHtml(x.code)} — ${escapeHtml(x.name)}</option>`).join('');
  let timeStartOpts = timetableTimeStartChoices().map(t => `<option value="${t}" ${d.timeStart === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let timeEndOpts = timetableTimeEndChoices().map(t => `<option value="${t}" ${d.timeEnd === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let setInput = setABSelectHtml('vs_set', d.setLabel || '');
  let vsDayColList = timetableDayColumnsForDept(listDept);
  let daysHtml = `<div class="days-check vs-days-check">${vsDayColList.map(day => `<input type="checkbox" class="day-checkbox" id="vsday_${day}" value="${day}" ${Array.isArray(d.days) && d.days.includes(day) ? 'checked' : ''}><label class="day-label" for="vsday_${day}">${day.slice(0, 3)}</label>`).join('')}</div>`;
  let deptControl = isAdmin
    ? `<select class="form-select" id="vs_dept">${deptOpts}</select>`
    : `<div class="vs-dept-readout">${dept ? `<span class="badge-dept ${dept.id}">${escapeHtml(dept.code)}</span> ${escapeHtml(dept.name)}` : '—'}</div><input type="hidden" id="vs_dept" value="${escapeHtml(d.dept)}">`;
  let vsSectionSelect = `<select class="form-select" id="vs_section"><option value="">Select section...</option>${secOpts}${secLegacyOpt}</select>`;
  let vsSubjectSelect = `<select class="form-select" id="vs_subject"><option value="">Select subject</option>${subOpts}${subLegacyOpt}</select>`;
  let ayVal = normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR;
  let ayReadEdit = escapeHtml(ayVal);
  return `<div id="vsConflictAlert"></div>
  <div class="schedule-form-wrapper view-schedule-form">
    <div class="form-group full vs-ay-readout-top"><label class="form-label">Academic Year</label><div class="vs-readonly">${ayReadEdit}</div></div>
    <input type="hidden" id="vs_ay" name="vs_ay" value="${escapeHtml(ayVal)}">
    <div class="form-group full"><label class="form-label" for="vs_dept">Department</label>${deptControl}</div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="vs_year">Year</label>${scheduleYearSelectHtml('vs_year', d.schYear || '')}</div>
      <div class="form-group"><label class="form-label" for="vs_section">Section</label>${vsSectionSelect}</div>
    </div>
    <div class="schedule-form-inline-row schedule-form-row-sem-subject">
      <div class="form-group"><label class="form-label" for="vs_sem">Semester</label>${scheduleSemSelectHtml('vs_sem', d.schSem || '')}</div>
      <div class="form-group"><label class="form-label" for="vs_subject">Subject</label>${vsSubjectSelect}</div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="vs_set" id="vs_set_label">Set</label>${setInput}</div>
      <div class="form-group"><label class="form-label" for="vs_professor">Professor</label><div class="professor-field-slot"><div id="vs_professor_select_wrap" ${d.professorId === PROFESSOR_OTHER_ID ? 'hidden' : ''}><select class="form-select" id="vs_professor" aria-label="Professor"><option value="">Select professor</option>${profOpts}</select></div><div id="vs_professor_other_wrap" ${d.professorId === PROFESSOR_OTHER_ID ? '' : 'hidden'}><div class="professor-other-row"><input type="text" class="form-input" id="vs_professor_other" value="${escapeHtml(d.professorOtherName || '')}" autocomplete="off" aria-label="Professor name when Others is selected"><button type="button" class="btn btn-outline btn-sm professor-pick-list-btn" id="vs_professor_list_btn" aria-label="Choose from faculty list">List</button></div></div></div></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><span class="form-label">Day(s)</span>${daysHtml}</div>
      <div class="form-group"><label class="form-label" for="vs_room">Room</label><div class="professor-field-slot"><div id="vs_room_select_wrap" ${d.roomId === ROOM_OTHER_ID ? 'hidden' : ''}><select class="form-select" id="vs_room" aria-label="Room"><option value="">Select room</option>${roomOpts}</select></div><div id="vs_room_other_wrap" ${d.roomId === ROOM_OTHER_ID ? '' : 'hidden'}><div class="professor-other-row"><input type="text" class="form-input" id="vs_room_other" value="${escapeHtml(d.roomOtherName || '')}" placeholder="Room name or location" autocomplete="off" aria-label="Room when Others is selected"><button type="button" class="btn btn-outline btn-sm professor-pick-list-btn" id="vs_room_list_btn" aria-label="Choose from room list">List</button></div></div></div></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="vs_timeStart">Time start</label><select class="form-select" id="vs_timeStart">${timeStartOpts}</select></div>
      <div class="form-group"><label class="form-label" for="vs_timeEnd">Time end</label><select class="form-select" id="vs_timeEnd">${timeEndOpts}</select></div>
    </div>
  </div>`;
}

function renderSubjectForm(d){
  let deptOpts=DEPARTMENTS.map(dept=>`<option value="${escapeHtml(dept.id)}" ${d.dept===dept.id?'selected':''}>${escapeHtml(dept.code)} — ${escapeHtml(dept.name)}</option>`).join('');
  return `<div class="form-grid form-grid-stacked"><div class="form-group"><label class="form-label" for="fs_code">Code</label><input class="form-input" id="fs_code" placeholder="Code" value="${escapeHtml(d.code||'')}"></div><div class="form-group"><label class="form-label" for="fs_name">Name</label><input class="form-input" id="fs_name" placeholder="Name" value="${escapeHtml(d.name||'')}"></div><div class="form-group full"><label class="form-label" for="fs_dept">Department</label><select class="form-select" id="fs_dept">${deptOpts}</select></div><div class="form-group"><label class="form-label" for="fs_units">Units</label><input class="form-input" id="fs_units" type="number" value="${d.units!=null?escapeHtml(String(d.units)):'3'}"></div></div>`;
}

function renderProfessorForm(d){
  d = d || {};
  let deptOpts=DEPARTMENTS.map(dept=>`<option value="${escapeHtml(dept.id)}" ${d.dept===dept.id?'selected':''}>${escapeHtml(dept.code)} — ${escapeHtml(dept.name)}</option>`).join('');
  let st = professorStatusValue(d);
  let statusOpts = [
    ['active', 'Active'],
    ['on_leave', 'On Leave'],
    ['inactive', 'Inactive'],
  ].map(([v, lab]) => `<option value="${escapeHtml(v)}" ${st === v ? 'selected' : ''}>${escapeHtml(lab)}</option>`).join('');
  return `<div class="form-grid form-grid-stacked"><input type="hidden" id="fp_edit_id" value="${escapeHtml(d.id||'')}"><div class="form-group full"><label class="form-label" for="fp_name">Full name</label><input class="form-input" id="fp_name" placeholder="Full Name" value="${escapeHtml(d.name||'')}"></div><div class="form-group full"><label class="form-label" for="fp_short">Short name</label><input class="form-input" id="fp_short" placeholder="Short Name" value="${escapeHtml(d.short||'')}"></div><div class="form-group full"><label class="form-label" for="fp_dept">Department</label><select class="form-select" id="fp_dept">${deptOpts}</select></div><div class="form-group full"><label class="form-label" for="fp_status">Status</label><select class="form-select" id="fp_status" aria-label="Faculty status">${statusOpts}</select></div><div class="form-group full"><label class="form-label" for="fp_note">Note</label><textarea class="form-input" id="fp_note" rows="3" placeholder="Optional">${escapeHtml(stripFacultyStatusTagFromNote(d.note||''))}</textarea></div></div>`;
}

function renderRequestForm() {
  let u = state.currentUser;
  let m = state.modal && state.modal.type === 'newRequest' ? state.modal : null;
  let requestStep = currentRequestFormStep();
  if (m) m.requestStep = requestStep;
  let slot = m?.requestSlot || null;
  let prefillBorrowRoomId = m?.prefillBorrowRoomId || '';
  let daysForRooms = slot && slot.day ? [slot.day] : [];
  let timeS = slot?.timeStart || '';
  let timeE = slot?.timeEnd || '';
  let toDeptChoices = requestFormToDepartmentChoices(u);
  let selectedToDeptId = resolveRequestFormToDeptId(u, m?.requestToDept);
  let selectedReason = (m?.requestReason || '').trim();
  let selectedReasonComment = (m?.requestReasonComment || '').trim();
  if (m) m.requestToDept = selectedToDeptId;
  let roomsPickAll = roomsFreeForBorrowing(u, daysForRooms, timeS, timeE);
  let isTeachingAssignmentReason = selectedReason === REQUEST_ROOM_REASON_CHOICES[1];
  if (isTeachingAssignmentReason) {
    // Teaching assignment rule: show complete room pools from requester's dept + selected dept.
    let ownDeptRooms = ROOMS.filter(r => r.dept === u.dept);
    let selectedDeptRooms = selectedToDeptId ? ROOMS.filter(r => r.dept === selectedToDeptId) : [];
    let merged = new Map();
    for (let r of [...ownDeptRooms, ...selectedDeptRooms]) merged.set(r.id, r);
    roomsPickAll = [...merged.values()].sort((a, b) => a.name.localeCompare(b.name));
  }
  let roomsPick = selectedToDeptId
    ? roomsPickAll.filter(r => r.dept === selectedToDeptId || (isTeachingAssignmentReason && r.dept === u.dept))
    : [];
  let req = '<span class="label-req" aria-hidden="true">*</span>';
  let roomPlaceholder = !selectedToDeptId
    ? 'Select a department first'
    : roomsPick.length
      ? 'Select available room'
      : 'No rooms free for this slot — adjust days or times';
  let prefillOk = !!(prefillBorrowRoomId && roomsPick.some(r => r.id === prefillBorrowRoomId));
  let roomAnotherDeptOption = isTeachingAssignmentReason && selectedToDeptId
    ? '<option value="__another_dept_hint__">select from another department</option>'
    : '';
  let roomOpts = roomsPick.map(r => `<option value="${escapeHtml(r.id)}" ${prefillOk && prefillBorrowRoomId === r.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('');
  let myDept = getDept(u.dept);
  let toDeptOpts = toDeptChoices.map(d => `<option value="${escapeHtml(d.id)}" ${d.id === selectedToDeptId ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('');
  let toDeptSelect = toDeptChoices.length
    ? `<select class="form-select" id="rq_to_dept" required aria-label="Requesting to department">${toDeptOpts}</select>`
    : `<select class="form-select" id="rq_to_dept" disabled aria-label="Requesting to department"><option value="">No other departments with rooms</option></select>`;
  let defSection = requestFormDefaultSection();
  let rqSecOpts = mergeSectionOptions([u.dept], u.dept ? { programMatchDept: u.dept } : {})
    .map(s => `<option value="${escapeHtml(s)}" ${defSection && String(defSection) === s ? 'selected' : ''}>${escapeHtml(s)}</option>`)
    .join('');
  let mySubs = [];
  // Reason logic: "Room Shortage" keeps faculty scoped to requester's department.
  // Other reasons may scope faculty to the selected receiving department.
  let facultyDept = selectedReason === REQUEST_ROOM_REASON_CHOICES[0]
    ? u.dept
    : (selectedToDeptId || u.dept);
  let myProfs = [...state.professors.filter(p => p.dept === facultyDept)].sort((a, b) => a.name.localeCompare(b.name));
  let rqProfTerm = {
    sem: (state.termSemester || '1st Semester').trim(),
    ay: normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR,
  };
  let myProfsForRq = !isTeachingAssignmentReason
    ? filterProfessorsByAvailability(myProfs, daysForRooms, timeS, timeE, { term: rqProfTerm })
    : myProfs;
  let subOpts = mySubs.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
  let profOpts = myProfsForRq.map(p => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} (${escapeHtml(p.short)})</option>`).join('')
    + `<option value="${PROFESSOR_OTHER_ID}">Others:</option>`;
  let ts = timetableTimeStartChoices().map(t => `<option value="${t}" ${slot && slot.timeStart === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let te = timetableTimeEndChoices().map(t => `<option value="${t}" ${slot && slot.timeEnd === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let setSelect = `<select class="form-select" id="rq_set"><option value="">— None —</option><option value="Set A">Set A</option><option value="Set B">Set B</option></select>`;
  let rqReasonOpts = REQUEST_ROOM_REASON_CHOICES.map(
    t => `<option value="${escapeHtml(t)}" ${selectedReason === t ? 'selected' : ''}>${escapeHtml(t)}</option>`
  ).join('');
  let rqDayColList = timetableDayColumnsForDept(selectedToDeptId || null);
  let yearHtml = scheduleYearSelectHtml('rq_year', '', 'required');
  let semLock = (state.termSemester || '1st Semester').trim();
  let ayLock = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let semHtml = scheduleSemSelectHtml('rq_sem', semLock, 'required disabled');
  return `<div class="request-room-form schedule-form-wrapper">
    <div id="rqFormAlert"></div>
    <div class="request-form-stepper" aria-label="Request form steps">
      <span class="request-form-stepper-pill ${requestStep === 1 ? 'active' : ''}">1. Request details</span>
      <span class="request-form-stepper-pill ${requestStep === 2 ? 'active' : ''}">2. Schedule details</span>
    </div>
    <div class="request-form-step${requestStep === 1 ? '' : ' hidden'}" data-rq-step="1">
      <div class="form-group full request-room-form-reason">
        <label class="form-label" for="rq_reason">Reason ${req}</label>
        <select class="form-select" id="rq_reason" aria-label="Reason for room request" required>
          <option value="">Select reason</option>
          ${rqReasonOpts}
        </select>
        <p class="form-hint">Helps the receiving department understand why you need to borrow a room.</p>
      </div>
    </div>
    <div class="request-form-step${requestStep === 2 ? '' : ' hidden'}" data-rq-step="2">
      <div class="schedule-form-inline-row request-room-form-inline-pair" role="group" aria-label="Requesting department and requester">
        <div class="form-group">
          <label class="form-label" for="rq_from_dept_read">Requesting from:</label>
          <input class="form-input" id="rq_from_dept_read" readonly tabindex="-1" value="${escapeHtml(myDept?.code || '')} — ${escapeHtml(myDept?.name || '')}">
        </div>
        <div class="form-group">
          <label class="form-label" for="rq_requester_read">Requested by:</label>
          <input class="form-input" id="rq_requester_read" readonly tabindex="-1" value="${escapeHtml(u.name || '')}">
        </div>
      </div>
      <div class="form-group full">
        <label class="form-label" for="rq_ay_read">Academic Year</label>
        <input class="form-input" id="rq_ay_read" readonly tabindex="-1" value="${escapeHtml(ayLock)}">
      </div>
      <div class="schedule-form-inline-row request-room-form-inline-pair" role="group" aria-label="Target department and room">
        <div class="form-group">
          <label class="form-label" for="rq_to_dept">Requesting to: ${req}</label>
          ${toDeptSelect}
        </div>
        <div class="form-group">
          <label class="form-label" for="rq_room">Available room ${req}</label>
          <select class="form-select" id="rq_room" required><option value="">${roomPlaceholder}</option>${roomAnotherDeptOption}${roomOpts}</select>
        </div>
      </div>
      <p class="form-hint">${isTeachingAssignmentReason ? 'Select an available room from your department or the selected department' : 'Select an available room from another department'}</p>
      ${isTeachingAssignmentReason ? '' : `
      <div class="form-group full professor-select-group">
        <label class="form-label" id="rq_professor_lb">Faculty / Instructor ${req}</label>
        <div class="professor-field-slot">
          <div id="rq_professor_select_wrap">
            <select class="form-select" id="rq_professor" aria-labelledby="rq_professor_lb" required><option value="">Select professor...</option>${profOpts}</select>
          </div>
          <div id="rq_professor_other_wrap" hidden>
            <div class="professor-other-row">
              <input type="text" class="form-input" id="rq_professor_other" autocomplete="off" aria-labelledby="rq_professor_lb">
              <button type="button" class="btn btn-outline btn-sm professor-pick-list-btn" id="rq_professor_list_btn" aria-label="Choose from faculty list">List</button>
            </div>
          </div>
        </div>
      </div>`}
      <div class="form-group full">
        <label class="form-label" for="rq_reason_comment">Reason / Comment <span class="form-optional">(optional)</span></label>
        <textarea class="form-input" id="rq_reason_comment" rows="3" maxlength="300" placeholder="Add extra details for your request (optional)">${escapeHtml(selectedReasonComment)}</textarea>
      </div>
      <div class="schedule-form-inline-row request-room-form-inline-pair">
        <div class="form-group">
          <label class="form-label" for="rq_year">Year ${req}</label>
          ${yearHtml}
        </div>
        <div class="form-group">
          <label class="form-label" for="rq_section">Section ${req}</label>
          <select class="form-select" id="rq_section" required><option value="">Select section...</option>${rqSecOpts}</select>
        </div>
      </div>
      <div class="schedule-form-inline-row request-room-form-inline-pair">
        <div class="form-group">
          <label class="form-label" for="rq_sem">Semester ${req}</label>
          ${semHtml}
        </div>
        <div class="form-group">
          <label class="form-label" for="rq_subject">Subject ${req}</label>
          <select class="form-select" id="rq_subject" required><option value="">Select subject...</option>${subOpts}</select>
        </div>
      </div>
      <div class="schedule-form-inline-row request-form-days-set-row request-room-form-inline-pair">
        <div class="form-group">
          <span class="form-label">Day(s) ${req}</span>
          <div class="days-check rq-days-check">${rqDayColList.map(d => `<input type="checkbox" class="day-checkbox" id="rqday_${d}" value="${d}" ${slot && slot.day === d ? 'checked' : ''}><label class="day-label" for="rqday_${d}">${d.slice(0, 3)}</label>`).join('')}</div>
        </div>
        <div class="form-group">
          <label class="form-label" for="rq_set" id="rq_set_label">Set</label>
          ${setSelect}
        </div>
      </div>
      <div class="schedule-form-inline-row request-room-form-inline-pair">
        <div class="form-group">
          <label class="form-label" for="rq_timeStart">Time start ${req}</label>
          <select class="form-select" id="rq_timeStart" required>${ts}</select>
        </div>
        <div class="form-group">
          <label class="form-label" for="rq_timeEnd">Time end ${req}</label>
          <select class="form-select" id="rq_timeEnd" required>${te}</select>
        </div>
      </div>
    </div>
  </div>`;
}

/** Inline / table Delete for curriculum rows (delegated click also calls this). */
async function commitCurriculumRowDelete(rawIdFromDom) {
  if (!canUserMutateCurriculum(state.currentUser)) {
    showToast('Only chairs and administrators can delete curriculum rows.');
    return;
  }
  if (!window.confirm(MSG_CONFIRM_PERM_DELETE_CURRICULUM)) return;
  let delKey = curriculumRowIdKey(rawIdFromDom);
  if (!delKey) {
    showToast('Delete failed: missing row id.');
    return;
  }
  let rowSnapshot = getStateCurriculumRowById(delKey);
  if (hasSupabaseClient()) {
    const { data: deletedRows, error } = await window.cenSupabase.from('curriculum').delete().eq('id', delKey).select('id');
    if (error) {
      window.alert(`Unable to delete curriculum row in Supabase: ${error.message}`);
      return;
    }
    if (!deletedRows || deletedRows.length === 0) {
      window.alert(
        'No row was deleted in the database (wrong id, or your account lacks delete permission). It will still be hidden in this browser until you clear site data.',
      );
    }
  }
  if (!Array.isArray(state.suppressedCurriculumIds)) state.suppressedCurriculumIds = [];
  if (!state.suppressedCurriculumIds.includes(delKey)) state.suppressedCurriculumIds.push(delKey);
  if (rowSnapshot) {
    let sk = curriculumRowSuppressionKey(rowSnapshot);
    if (sk) {
      if (!Array.isArray(state.suppressedCurriculumKeys)) state.suppressedCurriculumKeys = [];
      if (!state.suppressedCurriculumKeys.includes(sk)) state.suppressedCurriculumKeys.push(sk);
    }
  }
  state.curriculum = state.curriculum.filter(c => curriculumRowIdKey(c.id) !== delKey);
  rememberLocalCurriculumDelete(delKey);
  if (rowSnapshot) {
    let dept = curriculumFilterDept(rowSnapshot);
    let code = curriculumCodeFromRow(rowSnapshot);
    let stillExists = state.curriculum.some(c => {
      if (curriculumFilterDept(c) !== dept) return false;
      return normalizeSubjectCode(curriculumCodeFromRow(c)) === normalizeSubjectCode(code);
    });
    if (!stillExists) {
      let sub = findSubjectByDeptAndCurriculumCode(dept, code);
      if (sub?.id) {
        state.subjects = state.subjects.filter(s => s.id !== sub.id);
        if (hasSupabaseClient()) {
          window.cenSupabase.from('subjects').delete().eq('id', sub.id).then(() => {}).catch(() => {});
        }
      }
    }
  }
  showToast('Row removed');
  render();
}

// Event binding
function bindGlobal(){
  if (!window.__cenHashPageSyncBound) {
    window.__cenHashPageSyncBound = '1';
    window.addEventListener('hashchange', syncPageFromLocationHash);
  }
  if (!window.__cenCurriculumDeleteDelegated) {
    window.__cenCurriculumDeleteDelegated = '1';
    document.addEventListener(
      'click',
      e => {
        let t = e.target;
        if (!t || typeof t.closest !== 'function') return;
        let btn = t.closest('[data-delcrow]');
        if (!btn) return;
        e.preventDefault();
        void commitCurriculumRowDelete(btn.getAttribute('data-delcrow'));
      },
      true,
    );
  }
  document.getElementById('logoutBtn')?.addEventListener('click', async ()=>{
    if (!window.confirm(MSG_CONFIRM_LOGOUT)) return;
    try {
      if (hasSupabaseClient()) {
        await window.cenSupabase.auth.signOut({ scope: 'local' });
      }
    } catch (_) {
      // Continue local logout flow even if remote sign-out fails.
    }
    sessionStorage.clear();
    try {
      localStorage.removeItem(CEN_CURRICULUM_TOMBSTONES_KEY);
    } catch (_) {
      /* ignore */
    }
    state.loggedIn = false;
    window.location.replace('login.html?logged_out=1');
  });
  document.getElementById('themeToggleBtn')?.addEventListener('click',()=>{toggleAppTheme();render();});
  document.getElementById('hamburger')?.addEventListener('click',()=>{state.sidebarOpen=!state.sidebarOpen;render();});
  document.getElementById('overlay')?.addEventListener('click',()=>{state.sidebarOpen=false;render();});
  document.getElementById('utilitiesNavToggle')?.addEventListener('click', e => {
    e.preventDefault();
    state.utilitiesNavOpen = !state.utilitiesNavOpen;
    render();
  });
  document.getElementById('modalBackdrop')?.addEventListener('click',e=>{
    if (e.target === e.currentTarget) { state.modal = null; render(); }
  });
  document.getElementById('modalPanel')?.addEventListener('click',e=>{e.stopPropagation();});
  document.getElementById('modalClose')?.addEventListener('click',()=>{state.modal=null;render();});
  document.getElementById('modalClose2')?.addEventListener('click',()=>{state.modal=null;render();});
}

function openModal(modalState) {
  state.sidebarOpen = false;
  if (modalState?.type === 'addCurriculum' && !canUserMutateCurriculum(state.currentUser)) {
    if (!modalState.data?.id) {
      showToast('You can only view curriculum. Chairs and administrators add or edit rows.');
      return;
    }
    state.modal = { type: 'addCurriculum', data: { ...modalState.data } };
    render();
    return;
  }
  state.modal = modalState;
  render();
}

function bindPage(){
  let isDean = state.currentUser?.role === 'admin';
  document.getElementById('myacctSaveBtn')?.addEventListener('click', () => {
    if (state.page !== 'account' || !state.currentUser) return;
    let name = String(document.getElementById('myacct_name')?.value || '').trim();
    if (!name) {
      showFormValidationBanner('myacctAlert', 'Please enter your full name.');
      return;
    }
    let box = document.getElementById('myacctAlert');
    if (box) box.innerHTML = '';
    state.currentUser.name = name;
    state.currentUser.initials = initialsFromName(name);
    try {
      sessionStorage.setItem('cen_user', JSON.stringify(state.currentUser));
    } catch (e) {
      window.alert('Could not save profile in this browser (storage blocked).');
      return;
    }
    showToast('Profile saved');
    render();
  });
  document.getElementById('deanPendingGoogleSyncBtn')?.addEventListener('click', () => {
    startDeanGoogleSyncForPendingAccounts();
  });
  document.getElementById('dashboardConflictsBtn')?.addEventListener('click', () => {
    openModal({ type: 'dashboardConflicts', step: 'list' });
  });
  document.querySelectorAll('[data-conflict-detail-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      let id = btn.getAttribute('data-conflict-detail-id');
      state.modal = { type: 'dashboardConflicts', step: 'detail', scheduleId: id };
      render();
    });
  });
  document.getElementById('conflictDetailBackBtn')?.addEventListener('click', () => {
    state.modal = { type: 'dashboardConflicts', step: 'list' };
    render();
  });
  document.querySelectorAll('[data-conflict-view-sched]').forEach(btn => {
    btn.addEventListener('click', () => {
      let id = btn.getAttribute('data-conflict-view-sched');
      let s = state.schedules.find(x => x.id === id);
      if (!s) return;
      openModal({ type: 'viewSchedule', viewScheduleMode: 'view', data: { ...s, days: Array.isArray(s.days) ? [...s.days] : [] } });
    });
  });
  document.getElementById('clearAllSchedulesBtn')?.addEventListener('click', async () => {
    if (isDean) return;
    let u = state.currentUser;
    let dept = u?.dept;
    if (!dept) return;
    if (!window.confirm('Are you sure you want to clear all Schedules?')) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase.from('schedules').delete().eq('dept_id', dept);
      if (error) {
        window.alert(`Unable to clear schedules: ${error.message}`);
        return;
      }
      await syncSchedulesFromSupabase();
    } else {
      state.schedules = state.schedules.filter(s => s.dept !== dept);
    }
    showToast('Schedules cleared');
    render();
  });
  document.getElementById('addSchedBtn')?.addEventListener('click', () => {
    if (isDean) return;
    openModal({
      type: 'addSchedule',
      formDept: state.currentUser.role === 'admin' ? 'all' : state.currentUser.dept,
      ...scheduleFormFilterDefaults(),
    });
  });
  document.querySelectorAll('[data-filter]').forEach(el=>el.addEventListener('click',()=>{state.filterMode=el.dataset.filter;render();}));
  document.getElementById('filterDept')?.addEventListener('change', e => { state.filterDept = e.target.value; render(); });
  document.getElementById('filterSection')?.addEventListener('change',e=>{state.filterSection=e.target.value;render();});
  document.getElementById('filterFaculty')?.addEventListener('change',e=>{state.filterFaculty=e.target.value;render();});
  document.getElementById('filterRoom')?.addEventListener('change',e=>{state.filterRoom=e.target.value;render();});
  document.getElementById('topbarTermSemester')?.addEventListener('change', e => {
    state.termSemester = normalizeTermSemesterStored(e.target.value);
    render();
  });
  document.getElementById('topbarTermAcademicYear')?.addEventListener('change', e => {
    if (e.target.value === TERM_AY_OTHER_VALUE) {
      state.termAcademicYearIsCustom = true;
      state.termAcademicYearCustom = normalizeAcademicYearInput(state.termAcademicYearCustom || '');
      state.termAcademicYear = state.termAcademicYearCustom || state.termAcademicYear || DEFAULT_ACADEMIC_YEAR;
      state.termAcademicYearEditingOther = true;
    } else {
      state.termAcademicYear = normalizeAcademicYearInput(e.target.value || '') || DEFAULT_ACADEMIC_YEAR;
      state.termAcademicYearCustom = '';
      state.termAcademicYearIsCustom = false;
      state.termAcademicYearEditingOther = false;
    }
    render();
  });
  function applyEditableAcademicYear(v) {
    let customAy = normalizeAcademicYearInput(v || '');
    if (customAy) {
      state.termAcademicYearCustom = customAy;
      state.termAcademicYear = customAy;
      state.termAcademicYearIsCustom = true;
      rememberCustomAcademicYear(customAy);
    }
    state.termAcademicYearEditingOther = false;
    render();
  }
  document.getElementById('topbarTermAcademicYearOther')?.addEventListener('change', e => applyEditableAcademicYear(e.target.value));
  document.getElementById('topbarTermAcademicYearOther')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') applyEditableAcademicYear(e.target.value);
    if (e.key === 'Escape') {
      state.termAcademicYearEditingOther = false;
      render();
    }
  });
  document.getElementById('topbarTermAcademicYearOther')?.addEventListener('blur', e => applyEditableAcademicYear(e.target.value));
  function bindScheduleCellOpenDetails(el) {
    el.addEventListener('click', e => {
      e.stopPropagation();
      let sid = el.dataset.schedid;
      if (sid != null && String(sid).startsWith(PENDING_REQ_SCHEDULE_PREFIX)) {
        let rid = String(sid).slice(PENDING_REQ_SCHEDULE_PREFIX.length);
        let req = getStateRequestById(rid);
        if (req) {
          let sub = getSubject(req.subjectId);
          let room = getRoom(req.roomId);
          let from = getDept(req.fromDept);
          let to = getDept(req.toDept);
          window.alert(
            `Pending room request (not yet approved)\n\nSubject: ${sub?.code || '—'}\nSection: ${req.section || '—'}\n` +
              `Room: ${room?.name || req.roomId || '—'}\nFrom: ${from?.code || req.fromDept || '—'} → To: ${to?.code || req.toDept || '—'}\n` +
              `Time: ${fmt12(req.timeStart)}–${fmt12(req.timeEnd)}`,
          );
        }
        return;
      }
      let s = state.schedules.find(x => x.id === el.dataset.schedid);
      if (s) openModal({ type: 'viewSchedule', viewScheduleMode: 'view', data: { ...s, days: Array.isArray(s.days) ? [...s.days] : [] } });
    });
  }
  document.querySelectorAll('#printArea [data-schedid]').forEach(bindScheduleCellOpenDetails);
  document.querySelectorAll('#requestRoomTimetableArea [data-schedid]').forEach(bindScheduleCellOpenDetails);
  document.querySelectorAll('.dashboard-summary-wrap [data-schedid]').forEach(bindScheduleCellOpenDetails);
  document.getElementById('dashboardSummaryDay')?.addEventListener('change', e => {
    state.dashboardSummaryDay = e.target.value;
    render();
  });
  document.getElementById('vsEditScheduleBtn')?.addEventListener('click', () => {
    if (state.modal?.type !== 'viewSchedule') return;
    if (isDean) return;
    if (!scheduleMutableByCurrentChair(state.modal.data)) return;
    state.modal.viewScheduleMode = 'edit';
    render();
  });
  document.getElementById('vsCancelEditBtn')?.addEventListener('click', () => {
    if (state.modal?.type !== 'viewSchedule') return;
    let s = state.schedules.find(x => x.id === state.modal.data?.id);
    if (s) state.modal.data = { ...s, days: Array.isArray(s.days) ? [...s.days] : [] };
    state.modal.viewScheduleMode = 'view';
    render();
  });
  document.getElementById('vs_dept')?.addEventListener('change', e => {
    if (state.modal?.type !== 'viewSchedule' || state.modal.viewScheduleMode !== 'edit' || state.currentUser.role !== 'admin') return;
    state.modal.data.dept = e.target.value;
    render();
  });
  document.querySelectorAll('#printArea .timetable-slot-empty').forEach(el=>el.addEventListener('click',e=>{
    if (isDean) return;
    e.stopPropagation();
    openModal({
      type: 'addSchedule',
      slot: { day: el.dataset.slotDay, timeStart: el.dataset.slotStart, timeEnd: el.dataset.slotEnd },
      formDept: state.currentUser.role === 'admin' ? 'all' : state.currentUser.dept,
      ...scheduleFormFilterDefaults(),
    });
  }));
  document.getElementById('requestTtDept')?.addEventListener('change', e => {
    state.requestTimetableDept = e.target.value;
    let firstRoom = roomsForRequestDeptTimetable(e.target.value)[0];
    state.requestTimetableRoom = firstRoom ? firstRoom.id : '';
    state.requestTimetableProfessor = 'all';
    render();
  });
  document.getElementById('requestTtRoom')?.addEventListener('change', e => { state.requestTimetableRoom = e.target.value; render(); });
  document.getElementById('requestTtProfessor')?.addEventListener('change', e => { state.requestTimetableProfessor = e.target.value || 'all'; render(); });
    if (state.currentUser?.role !== 'admin') {
    document.querySelectorAll('#requestRoomTimetableArea .timetable-slot-empty').forEach(el => el.addEventListener('click', e => {
      e.stopPropagation();
      let u = state.currentUser;
      openModal({
        type: 'newRequest',
        requestStep: 1,
        requestToDept: resolveRequestFormToDeptId(u, state.requestTimetableDept),
        requestSlot: {
          day: el.dataset.slotDay,
          timeStart: el.dataset.slotStart,
          timeEnd: el.dataset.slotEnd,
        },
        ...requestFormBorrowRoomPrefill(),
      });
    }));
  }
  function closeExportMenu() {
    let menu = document.getElementById('exportMenu');
    let btn = document.getElementById('exportBtn');
    if (menu) menu.hidden = true;
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
  document.getElementById('exportBtn')?.addEventListener('click', e => {
    e.stopPropagation();
    let menu = document.getElementById('exportMenu');
    let btn = document.getElementById('exportBtn');
    if (!menu || !btn) return;
    let willOpen = menu.hidden;
    menu.hidden = !willOpen;
    btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  });
  document.querySelectorAll('#exportMenu [data-export-format]').forEach(el => {
    el.addEventListener('click', e => {
      let fmt = e.currentTarget?.dataset?.exportFormat;
      closeExportMenu();
      if (fmt) exportVisibleTimetable(fmt);
    });
  });
  if (!document.body.dataset.exportOutsideClickBound) {
    document.body.dataset.exportOutsideClickBound = '1';
    document.addEventListener('click', e => {
      let wrap = document.querySelector('.export-menu-wrap');
      if (!wrap || wrap.contains(e.target)) return;
      let menu = document.getElementById('exportMenu');
      let btn = document.getElementById('exportBtn');
      if (menu) menu.hidden = true;
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }
  document.getElementById('printBtn')?.addEventListener('click', () => {
    if (state.filterMode === 'faculty') {
      if (printFacultyScheduleTabForm()) return;
    }
    window.print();
  });
  document.getElementById('f_schedule_dept')?.addEventListener('change', e => {
    if (!state.modal || state.modal.type !== 'addSchedule' || state.currentUser.role !== 'admin') return;
    let { defaultSection, defaultProfessorId, defaultRoomId, ...rest } = state.modal;
    state.modal = { ...rest, formDept: e.target.value };
    render();
  });
  document.getElementById('modalSaveBtn')?.addEventListener('click', async ()=>{
    if (!state.modal) return;
    if (isDean && (state.modal.type === 'addSchedule' || state.modal.type === 'viewSchedule')) return;
    if (state.modal.type === 'addCurriculum' && !canUserMutateCurriculum(state.currentUser)) return;
    let mt = state.modal.type;
    if (mt === 'editSystemAccount') {
      let meta = state.modal.data || {};
      let originalEmail = String(meta.originalEmail || '').trim().toLowerCase();
      let name = String(document.getElementById('acct_edit_name')?.value || '').trim();
      let email = String(document.getElementById('acct_edit_email')?.value || '').trim().toLowerCase();
      let role = document.getElementById('acct_edit_role')?.value === 'admin' ? 'admin' : 'chairperson';
      let dept = String(document.getElementById('acct_edit_dept')?.value || '').trim();
      if (!originalEmail || !email || !name) {
        showFormValidationBanner('acctEditAlert', 'Name and email are required.');
        return;
      }
      if (role === 'chairperson' && !dept) {
        showFormValidationBanner('acctEditAlert', 'Select a department for chair accounts.');
        return;
      }
      if (role === 'admin') dept = '';
      let baseRow = officialBaseAccountsList().find(u => String(u.email || '').trim().toLowerCase() === originalEmail) || null;
      let isBase = !!baseRow;
      let overrides = loadAccountRoleOverrides().filter(x => String(x?.email || '').trim().toLowerCase() !== originalEmail);
      if (email !== originalEmail) overrides = overrides.filter(x => String(x?.email || '').trim().toLowerCase() !== email);
      let removed = loadRemovedBaseAccountEmails();
      if (isBase && originalEmail !== email) removed.add(originalEmail);
      if (isBase && originalEmail !== email && meta.hadOverride) {
        /* old slot was shadowed by override; clearing override already handled by filter above */
      }
      let id = baseRow?.id || meta.id || `mapped_${email.replace(/[^a-z0-9]/g, '') || 'user'}`;
      overrides.push({
        id,
        name,
        email,
        role,
        dept: role === 'admin' ? '' : dept,
        initials: initialsFromName(name),
        updatedAt: new Date().toISOString(),
      });
      saveAccountRoleOverrides(overrides);
      saveRemovedBaseAccountEmails(removed);
      state.modal = null;
      showToast('Account updated');
      render();
      return;
    }
    if (mt === 'declineRequest') {
      let r = getStateRequestById(state.modal?.requestId);
      if (!r) {
        showFormValidationBanner('declineRequestAlert', 'Request not found. Close this dialog and click Decline again on the request card.');
        return;
      }
      let declineText = (document.getElementById('decline_reason_comment')?.value || '').trim();
      if (!declineText) {
        showFormValidationBanner('declineRequestAlert', 'Enter a reason before declining this request.');
        return;
      }
      if (!window.confirm('Decline this request? The requester will see your reason.')) return;
      r.status = 'declined';
      r.declineReason = declineText;
      if (hasSupabaseClient()) {
        let patch = { status: 'declined', decline_reason: declineText };
        let { error } = await window.cenSupabase.from('requests').update(patch).eq('id', r.id);
        if (error && isSupabaseMissingColumnError(error, 'decline_reason')) {
          ({ error } = await window.cenSupabase.from('requests').update({ status: 'declined' }).eq('id', r.id));
          if (!error) {
            console.warn('requests.decline_reason column missing; add it to persist decline reasons in the database.');
          }
        }
        if (error) {
          window.alert(`Unable to decline request in Supabase: ${error.message}`);
          r.status = 'pending';
          delete r.declineReason;
          return;
        }
      }
      await removeSchedulesLinkedToRequest(r);
      state.modal = null;
      showToast('Request declined');
      render();
      return;
    }
    if (mt === 'approveTeachingAssignment') {
      let r = state.requests.find(x => x.id === state.modal?.requestId);
      if (!r) {
        showFormValidationBanner('taApproveAlert', 'Request not found.');
        return;
      }
      let assignedProfId = (document.getElementById('ta_approve_prof')?.value || '').trim();
      if (!assignedProfId) {
        showFormValidationBanner('taApproveAlert', 'Select a faculty member before approving.');
        return;
      }
      if (!window.confirm('Approve this teaching assignment request?')) return;
      if (hasSupabaseClient()) {
        const { error } = await window.cenSupabase
          .from('requests')
          .update({ status: 'approved', professor_id: assignedProfId, professor_other_name: null })
          .eq('id', r.id);
        if (error) {
          showFormValidationBanner('taApproveAlert', `Unable to approve request in Supabase: ${error.message}`);
          return;
        }
      }
      r.status = 'approved';
      r.professorId = assignedProfId;
      r.professorOtherName = null;
      if (requestHasPendingRoom(r)) {
        let pendingTeachReason = r.reason || REQUEST_ROOM_REASON_CHOICES[1];
        if (!String(pendingTeachReason).includes(REQUEST_ROOM_PENDING_MARKER)) {
          pendingTeachReason = `${REQUEST_ROOM_PENDING_MARKER}${pendingTeachReason}`;
        }
        if (hasSupabaseClient()) {
          const { error } = await window.cenSupabase
            .from('requests')
            .update({ status: 'approved', professor_id: assignedProfId, professor_other_name: null, reason: pendingTeachReason })
            .eq('id', r.id);
          if (error) {
            showFormValidationBanner('taApproveAlert', `Unable to update teaching approval state in Supabase: ${error.message}`);
            return;
          }
        }
        r.status = 'approved';
        r.reason = pendingTeachReason;
        state.modal = null;
        window.alert('Teaching assignment approved. The requester can now book a room from another department.');
        render();
        return;
      }
      let assignedProfDept = getProfessor(assignedProfId)?.dept || r.toDept || r.fromDept;
      let approvedAt = new Date().toISOString();
      let approvedSched = {
        id: genId(),
        subjectId: r.subjectId,
        professorId: assignedProfId,
        professorOtherName: null,
        roomId: r.roomId,
        roomOtherName: r.roomOtherName || null,
        dept: assignedProfDept,
        section: r.section,
        days: r.days,
        timeStart: r.timeStart,
        timeEnd: r.timeEnd,
        color: 'blue',
        setLabel: r.setLabel || null,
        labLabel: r.labLabel || null,
        schYear: r.schYear || '1st Year',
        schSem: r.schSem || '1st Semester',
        schAy: normalizeAcademicYearInput(r.schAy) || normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR,
        createdAt: approvedAt,
      };
      if (hasSupabaseClient()) {
        const { error } = await upsertSchedulesDb([approvedSched]);
        if (error) {
          showFormValidationBanner('taApproveAlert', `Request approved but schedule insert failed in Supabase: ${error.message}`);
          return;
        }
        await syncSchedulesFromSupabase();
      } else {
        state.schedules.push(approvedSched);
      }
      state.modal = null;
      window.alert('This teaching assignment request has been approved and assigned to the selected faculty.');
      render();
      return;
    }
    if (mt === 'bookTeachingRoom') {
      let base = getStateRequestById(state.modal?.requestId);
      if (!base) {
        showFormValidationBanner('bookRoomAlert', 'Teaching approval request not found.');
        return;
      }
      let toDeptPick = (document.getElementById('book_to_dept')?.value || '').trim();
      let roomId = document.getElementById('book_room')?.value || '';
      let room = getRoom(roomId);
      if (!toDeptPick || !roomId) {
        showFormValidationBanner('bookRoomAlert', MSG_FORM_INCOMPLETE);
        return;
      }
      if (!room || room.dept !== toDeptPick) {
        showFormValidationBanner('bookRoomAlert', 'Selected room must belong to the selected department.');
        return;
      }
      for (let day of (base.days || [])) {
        if (roomSlotOccupied(roomId, day, base.timeStart, base.timeEnd)) {
          showFormValidationBanner('bookRoomAlert', 'That room is no longer free for one of the selected days.');
          return;
        }
      }
      if (!window.confirm('Send this room request for approval?')) return;
      let req = {
        id: genId(),
        fromDept: base.fromDept,
        toDept: toDeptPick,
        roomId,
        subjectId: base.subjectId,
        section: base.section,
        professorId: base.professorId || null,
        professorOtherName: base.professorOtherName || null,
        days: Array.isArray(base.days) ? [...base.days] : [],
        timeStart: base.timeStart,
        timeEnd: base.timeEnd,
        schYear: base.schYear,
        schSem: base.schSem,
        schAy: normalizeAcademicYearInput(base.schAy) || normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR,
        setLabel: base.setLabel || null,
        labLabel: base.labLabel || null,
        reason: REQUEST_ROOM_REASON_CHOICES[0],
        reasonComment: requestReasonCommentDisplayText(base) || 'Room booking after teaching assignment approval',
        status: 'pending',
        created: new Date().toISOString().slice(0, 10),
        parentTeachingRequestId: base.id,
      };
      if (hasSupabaseClient()) {
        const { error } = await insertRequestDb(req);
        if (error) {
          showFormValidationBanner('bookRoomAlert', `Supabase error: ${error.message}`);
          return;
        }
        await syncRequestsFromSupabase();
        state.modal = null;
        showToast('Room request sent');
        render();
        return;
      }
      state.requests.push(req);
      state.modal = null;
      showToast('Room request sent');
      render();
      return;
    }
    if (mt === 'viewSchedule') {
      if (state.modal.viewScheduleMode !== 'edit') return;
      let draft = state.modal.data;
      if (!draft?.id) return;
      let idx = state.schedules.findIndex(x => x.id === draft.id);
      if (idx < 0) return;
      if (!scheduleMutableByCurrentChair(state.schedules[idx])) return;
      let deptVal = document.getElementById('vs_dept')?.value || draft.dept;
      let days = [...document.querySelectorAll('#modalBackdrop [id^="vsday_"]:checked')].map(c => c.value);
      let profId = document.getElementById('vs_professor')?.value || '';
      let profOtherTxt = (document.getElementById('vs_professor_other')?.value || '').trim();
      let roomSel = document.getElementById('vs_room')?.value || '';
      let roomOtherTxt = (document.getElementById('vs_room_other')?.value || '').trim();
      let entry = {
        id: draft.id,
        subjectId: document.getElementById('vs_subject')?.value || '',
        professorId: profId === PROFESSOR_OTHER_ID ? PROFESSOR_OTHER_ID : (profId || null),
        professorOtherName: profId === PROFESSOR_OTHER_ID ? profOtherTxt : null,
        roomId: roomSel === ROOM_OTHER_ID ? ROOM_OTHER_ID : (roomSel || ''),
        roomOtherName: roomSel === ROOM_OTHER_ID ? roomOtherTxt : null,
        section: document.getElementById('vs_section')?.value || '',
        days,
        timeStart: document.getElementById('vs_timeStart')?.value || '',
        timeEnd: document.getElementById('vs_timeEnd')?.value || '',
        dept: deptVal,
        schYear: (document.getElementById('vs_year')?.value || '').trim() || null,
        schSem: (document.getElementById('vs_sem')?.value || '').trim() || null,
        schAy: normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || '') || null,
        setLabel: (document.getElementById('vs_set')?.value || '').trim() || null,
        labLabel: state.schedules[idx].labLabel ?? null,
        color: state.schedules[idx].color,
      };
      let vsRoomResolveList = [...roomsSourceForApp().filter(r => r.dept === entry.dept)].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      let vsRoomResolved = resolveScheduleRoomFromForm(roomSel, roomOtherTxt, vsRoomResolveList);
      entry.roomId = vsRoomResolved.roomId;
      entry.roomOtherName = vsRoomResolved.roomOtherName;
      if (!entry.subjectId || !profId || !roomSel || !entry.section || !days.length || !entry.timeStart || !entry.timeEnd || !entry.schYear || !entry.schSem || !entry.schAy) {
        showFormValidationBanner('vsConflictAlert', MSG_FORM_INCOMPLETE);
        return;
      }
      if (profId === PROFESSOR_OTHER_ID && !profOtherTxt) {
        showFormValidationBanner('vsConflictAlert', 'Enter the professor or instructor name when Others is selected.');
        return;
      }
      if (roomSel === ROOM_OTHER_ID && !roomOtherTxt) {
        showFormValidationBanner('vsConflictAlert', 'Enter the room or location when Others is selected.');
        return;
      }
      if (!isProfessorSelectIdValidForSave(profId)) {
        showFormValidationBanner('vsConflictAlert', 'Choose a professor from the list, or pick Others: and type the name.');
        return;
      }
      if (!isRoomSelectIdValidForSave(entry.roomId)) {
        showFormValidationBanner('vsConflictAlert', 'Choose a room from the list, or pick Others: and type the name.');
        return;
      }
      if (timeToRow(entry.timeEnd) <= timeToRow(entry.timeStart)) {
        showFormValidationBanner('vsConflictAlert', 'End time must be after start time.');
        return;
      }
      let subj = getSubject(entry.subjectId);
      if (!subj || subj.dept !== entry.dept) {
        showFormValidationBanner('vsConflictAlert', 'Choose a subject that belongs to the selected department.');
        return;
      }
      if (!subjectAllowedByCurriculum(entry.dept, entry.schYear, entry.schSem, entry.subjectId, entry.schAy)) {
        showFormValidationBanner('vsConflictAlert', 'Choose a subject listed in Curriculum for the selected year and semester.');
        return;
      }
      let hoursErrEdit = validateEntryHoursWithinCurriculum(entry, draft.id);
      if (hoursErrEdit) {
        showFormValidationBanner('vsConflictAlert', hoursErrEdit);
        return;
      }
      if (curriculumSubjectHasLabUnits(entry.dept, entry.schYear, entry.schSem, entry.subjectId, entry.schAy) && !((entry.setLabel || '').trim())) {
        showFormValidationBanner('vsConflictAlert', MSG_SET_REQUIRED_FOR_LAB);
        return;
      }
      if (!window.confirm(MSG_CONFIRM_SCHEDULE_OR_REQUEST_SAVE)) return;
      if (entry.roomId !== ROOM_OTHER_ID && getRoom(entry.roomId)?.type === 'laboratory') entry.color = 'purple';
      else entry.color = 'blue';
      let conflicts = checkConflicts(entry, draft.id);
      if (conflicts.length) {
        showFormValidationBanner('vsConflictAlert', conflicts[0]);
        return;
      }
      if (hasSupabaseClient()) {
        const { error } = await upsertSchedulesDb([entry]);
        if (error) {
          showFormValidationBanner('vsConflictAlert', `Supabase error: ${error.message}`);
          return;
        }
        await syncSchedulesFromSupabase();
      } else {
        state.schedules[idx] = { ...state.schedules[idx], ...entry };
      }
      state.modal = null;
      showToast('Schedule updated');
      render();
      return;
    }
    if (mt === 'addSchedule') {
      let days = [...document.querySelectorAll('#modalBackdrop .day-checkbox:checked')].map(c => c.value);
      let fSub = document.getElementById('f_subject');
      if (!fSub) return;
      let setV = (document.getElementById('f_set')?.value || '').trim();
      let deptEl = document.getElementById('f_schedule_dept');
      let pickedDept = state.currentUser.role === 'admin' && deptEl && !deptEl.disabled ? deptEl.value : state.currentUser.dept;
      let entryDept;
      if (state.currentUser.role === 'admin') {
        entryDept = pickedDept === 'all' ? (getSubject(fSub.value)?.dept || null) : pickedDept;
      } else {
        entryDept = state.currentUser.dept;
      }
      let profSel = document.getElementById('f_professor')?.value || '';
      let profOtherAdd = (document.getElementById('f_professor_other')?.value || '').trim();
      let roomSel = document.getElementById('f_room')?.value || '';
      let roomOtherAdd = (document.getElementById('f_room_other')?.value || '').trim();
      let entry = {
        subjectId: fSub.value,
        professorId: profSel === PROFESSOR_OTHER_ID ? PROFESSOR_OTHER_ID : profSel,
        professorOtherName: profSel === PROFESSOR_OTHER_ID ? profOtherAdd : null,
        roomId: roomSel === ROOM_OTHER_ID ? ROOM_OTHER_ID : roomSel,
        roomOtherName: roomSel === ROOM_OTHER_ID ? roomOtherAdd : null,
        section: document.getElementById('f_section')?.value,
        days,
        timeStart: document.getElementById('f_timeStart')?.value,
        timeEnd: document.getElementById('f_timeEnd')?.value,
        dept: entryDept,
        schYear: document.getElementById('f_year')?.value || '',
        schSem: document.getElementById('f_sem')?.value || '',
        schAy: normalizeAcademicYearInput(document.getElementById('f_ay')?.value || '') || '',
        color: 'blue',
        setLabel: setV || null,
        labLabel: null,
      };
      let roomResolveList = [...roomsSourceForApp().filter(r => r.dept === entryDept)].sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      let roomResolved = resolveScheduleRoomFromForm(roomSel, roomOtherAdd, roomResolveList);
      entry.roomId = roomResolved.roomId;
      entry.roomOtherName = roomResolved.roomOtherName;
      if (!entryDept || !entry.subjectId || !profSel || !roomSel || !entry.section || !days.length || !entry.timeStart || !entry.timeEnd || !entry.schYear || !entry.schSem || !entry.schAy) {
        showFormValidationBanner('conflictAlert', MSG_FORM_INCOMPLETE);
        return;
      }
      if (!subjectAllowedByCurriculum(entryDept, entry.schYear, entry.schSem, entry.subjectId, entry.schAy)) {
        showFormValidationBanner('conflictAlert', 'Choose a subject listed in Curriculum for the selected year and semester.');
        return;
      }
      let hoursErrAdd = validateEntryHoursWithinCurriculum(entry);
      if (hoursErrAdd) {
        showFormValidationBanner('conflictAlert', hoursErrAdd);
        return;
      }
      if (curriculumSubjectHasLabUnits(entryDept, entry.schYear, entry.schSem, entry.subjectId, entry.schAy) && !setV) {
        showFormValidationBanner('conflictAlert', MSG_SET_REQUIRED_FOR_LAB);
        return;
      }
      if (profSel === PROFESSOR_OTHER_ID && !profOtherAdd) {
        showFormValidationBanner('conflictAlert', 'Enter the professor or instructor name when Others is selected.');
        return;
      }
      if (roomSel === ROOM_OTHER_ID && !roomOtherAdd) {
        showFormValidationBanner('conflictAlert', 'Enter the room or location when Others is selected.');
        return;
      }
      if (!isProfessorSelectIdValidForSave(profSel)) {
        showFormValidationBanner('conflictAlert', 'Choose a professor from the list, or pick Others: and type the name.');
        return;
      }
      if (!isRoomSelectIdValidForSave(entry.roomId)) {
        showFormValidationBanner('conflictAlert', 'Choose a room from the list, or pick Others: and type the name.');
        return;
      }
      if (timeToRow(entry.timeEnd) <= timeToRow(entry.timeStart)) {
        showFormValidationBanner('conflictAlert', 'End time must be after start time.');
        return;
      }
      if (!window.confirm(MSG_CONFIRM_SCHEDULE_OR_REQUEST_SAVE)) return;
      if (entry.roomId !== ROOM_OTHER_ID && getRoom(entry.roomId)?.type === 'laboratory') entry.color = 'purple';
      let conflicts = checkConflicts(entry);
      if (conflicts.length) {
        showFormValidationBanner('conflictAlert', conflicts[0]);
        return;
      }
      entry.id = genId();
      if (hasSupabaseClient()) {
        const { error } = await upsertSchedulesDb([entry]);
        if (error) {
          showFormValidationBanner('conflictAlert', `Supabase error: ${error.message}`);
          return;
        }
        await syncSchedulesFromSupabase();
      } else {
        state.schedules.push(entry);
      }
      state.modal = null;
      showToast('Schedule saved');
      render();
      return;
    }
    if (mt === 'addSection') {
      let u = state.currentUser;
      if (!(u?.role === 'admin' || u?.role === 'chairperson')) return;
      let dept = (document.getElementById('sec_dept')?.value || (u.role === 'chairperson' ? u.dept : '') || '').trim();
      let year = (document.getElementById('sec_year')?.value || '').trim();
      let section = (document.getElementById('sec_name')?.value || '').trim().toUpperCase();
      let oldDept = (document.getElementById('sec_edit_dept')?.value || '').trim();
      let oldSection = (document.getElementById('sec_edit_section')?.value || '').trim();
      if (!dept || !year || !section) {
        showToast(MSG_FORM_INCOMPLETE);
        return;
      }
      if (!SCHEDULE_FORM_YEARS.includes(year)) {
        showToast('Choose a valid year.');
        return;
      }
      if (!SECTION_SAMPLES_BY_DEPT[dept]) SECTION_SAMPLES_BY_DEPT[dept] = [];
      let target = SECTION_SAMPLES_BY_DEPT[dept].map(s => String(s || '').trim());
      if (oldDept && oldSection && SECTION_SAMPLES_BY_DEPT[oldDept]) {
        SECTION_SAMPLES_BY_DEPT[oldDept] = SECTION_SAMPLES_BY_DEPT[oldDept].filter(s => String(s || '').trim() !== oldSection);
      }
      if (!target.includes(section)) SECTION_SAMPLES_BY_DEPT[dept].push(section);
      if (oldDept && oldSection && (oldDept !== dept || oldSection !== section)) {
        state.schedules = state.schedules.map(s => (s.dept === oldDept && String(s.section || '').trim() === oldSection ? { ...s, dept, section, schYear: year } : s));
      }
      state.modal = null;
      showToast(oldSection ? 'Section updated' : 'Section added');
      render();
      return;
    }
    if (mt === 'addRoom') {
      let u = state.currentUser;
      if (!(u?.role === 'admin' || u?.role === 'chairperson')) return;
      let dept = (document.getElementById('room_dept')?.value || '').trim();
      let name = (document.getElementById('room_name')?.value || '').trim();
      let type = (document.getElementById('room_type')?.value || 'classroom').toLowerCase();
      let editId = (document.getElementById('room_edit_id')?.value || '').trim();
      if (!dept || !name) {
        showToast(MSG_FORM_INCOMPLETE);
        return;
      }
      if (type !== 'classroom' && type !== 'laboratory') type = 'classroom';
      if (u.role === 'chairperson' && dept !== u.dept) {
        showToast('You can only manage rooms for your department.');
        return;
      }
      let existing = editId ? roomRecordFromCatalog(editId) : null;
      if (editId && !existing) {
        showToast('Room not found.');
        return;
      }
      if (editId && u.role === 'chairperson' && existing && existing.dept !== u.dept) {
        showToast('You cannot edit this room.');
        return;
      }
      if (!window.confirm(editId ? MSG_CONFIRM_SAVE_ROOM_EDIT : MSG_CONFIRM_SAVE_ROOM_NEW)) return;
      let roomObj = {
        id: editId || genId(),
        name,
        type,
        dept,
      };
      if (hasSupabaseClient()) {
        const { error } = await window.cenSupabase.from('rooms').upsert([normalizeRoomToDb(roomObj)], { onConflict: 'id' });
        if (error) {
          window.alert(`Unable to save room: ${error.message}`);
          return;
        }
      }
      state.suppressedRoomIds = (state.suppressedRoomIds || []).filter(x => x !== roomObj.id);
      let idx = state.rooms.findIndex(r => r.id === roomObj.id);
      if (idx >= 0) state.rooms[idx] = roomObj;
      else state.rooms.push(roomObj);
      state.rooms = state.rooms.filter(r => !isRetiredCpeDrawingRoom(r)).sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      state.modal = null;
      showToast(editId ? 'Room updated' : 'Room added');
      render();
      return;
    }
    if (mt === 'addSubject') {
      let sub = { id: document.getElementById('saveSubjectBtn')?.dataset.editid || genId(), code: document.getElementById('fs_code').value, name: document.getElementById('fs_name').value, dept: document.getElementById('fs_dept').value, units: parseInt(document.getElementById('fs_units').value), active: true };
      if (sub.code && sub.name) {
        if (!window.confirm(MSG_CONFIRM_SAVE_SUBJECT)) return;
        if (hasSupabaseClient()) {
          const { error } = await upsertSubjectsDb([sub]);
          if (error) {
            window.alert(`Unable to save subject in Supabase: ${error.message}`);
            return;
          }
        }
        if (sub.id.startsWith('id_')) state.subjects.push(sub); else { let i = state.subjects.findIndex(s => s.id === sub.id); if (i >= 0) state.subjects[i] = sub; }
        state.modal = null; showToast('Subject saved'); render();
      }
      return;
    }
    if (mt === 'addProfessor') {
      let editId = (document.getElementById('fp_edit_id')?.value || '').trim();
      let prev = editId ? state.professors.find(p => p.id === editId) : null;
      let statusPick = (document.getElementById('fp_status')?.value || 'active').trim().toLowerCase();
      if (!['active', 'on_leave', 'inactive'].includes(statusPick)) statusPick = 'active';
      let prof = {
        id: editId || genId(),
        name: document.getElementById('fp_name').value,
        short: document.getElementById('fp_short').value,
        dept: document.getElementById('fp_dept').value,
        note: (document.getElementById('fp_note')?.value || '').trim(),
        status: statusPick,
        active: statusPick !== 'inactive',
      };
      if (prof.name && prof.short) {
        if (!window.confirm(MSG_CONFIRM_SAVE_PROFESSOR)) return;
        if (hasSupabaseClient()) {
          const { error } = await upsertProfessorsDb([prof]);
          if (error) {
            window.alert(`Unable to save professor in Supabase: ${error.message}`);
            return;
          }
        }
        if (!editId || !state.professors.some(p => p.id === prof.id)) state.professors.push(prof);
        else {
          let i = state.professors.findIndex(p => p.id === prof.id);
          if (i >= 0) state.professors[i] = prof;
        }
        rememberFacultyMetaOverride(prof);
        state.modal = null; showToast('Professor saved'); render();
      }
      return;
    }
    if (mt === 'addCurriculum') {
      let editId = (document.getElementById('cc_edit_id')?.value || '').trim();
      let courseCode = (document.getElementById('cc_courseCode')?.value || '').trim();
      let subjectName = (document.getElementById('cc_subject')?.value || '').trim();
      let lecU = parseInt(document.getElementById('cc_lecUnits')?.value, 10);
      let labU = parseInt(document.getElementById('cc_labUnits')?.value, 10);
      let lecUnits = Number.isFinite(lecU) ? lecU : 0;
      let labUnits = Number.isFinite(labU) ? labU : 0;
      let units = lecUnits + labUnits;
      let hoursParsed = parseFloat(String(document.getElementById('cc_hours')?.value || '').trim());
      let requiredHours =
        Number.isFinite(hoursParsed) && hoursParsed >= 0
          ? hoursParsed
          : computedCurriculumHoursFromUnits(lecUnits, labUnits);
      let row = {
        dept: document.getElementById('cc_dept')?.value,
        year: (document.getElementById('cc_year')?.value || '').trim(),
        semester: (document.getElementById('cc_semester')?.value || '').trim(),
        academicYear: normalizeAcademicYearInput(document.getElementById('cc_ay')?.value || ''),
        courseCode,
        subjectName,
        lecUnits,
        labUnits,
        units,
        requiredHours,
        courseName: subjectName,
        subjectCode: courseCode.replace(/\s+/g, '') || subjectName.replace(/\s+/g, '').slice(0, 24) || '—',
        section: '',
      };
      if (!row.courseCode || !row.subjectName || !row.year || !row.semester || !row.academicYear) {
        showToast('Complete required curriculum fields before saving.');
        return;
      }
      if (!window.confirm(editId ? MSG_CONFIRM_SAVE_CURRICULUM_EDIT : MSG_CONFIRM_SAVE_CURRICULUM_NEW)) return;
      let savedRows = [];
      if (editId) {
        let i = state.curriculum.findIndex(c => c.id === editId);
        if (i >= 0) state.curriculum[i] = { ...state.curriculum[i], ...row, id: editId };
        savedRows = [{ ...row, id: editId }];
      } else {
        let key = curriculumAySlotKey(row, row.academicYear);
        let exists = state.curriculum.some(c => curriculumAySlotKey(c, c.academicYear) === key);
        if (exists) {
          showToast(`Curriculum row already exists in ${row.academicYear}.`);
          return;
        }
        let newRow = { ...row, id: genId() };
        state.curriculum.push(newRow);
        savedRows = [newRow];
      }
      for (let sr of savedRows) {
        if (Number.isFinite(Number(sr.requiredHours))) {
          rememberCurriculumRequiredHours(sr.id, sr.requiredHours);
        }
      }
      if (hasSupabaseClient()) {
        const { error } = await upsertCurriculumDb(savedRows);
        if (error) {
          window.alert(`Unable to save curriculum in Supabase: ${error.message}`);
          // Keep this edit locally so refresh still shows it while offline / blocked by policy.
          rememberLocalCurriculumUpserts(savedRows);
          let subjSyncLocal = await ensureSubjectsExistForCurriculumRows(savedRows);
          if (!subjSyncLocal.ok) {
            window.alert(`Curriculum saved locally, but subject sync failed: ${subjSyncLocal.error?.message || 'unknown error'}`);
          }
          state.modal = null;
          showToast('Curriculum saved locally');
          render();
          return;
        }
      }
      rememberLocalCurriculumUpserts(savedRows);
      let subjSync = await ensureSubjectsExistForCurriculumRows(savedRows);
      if (!subjSync.ok) {
        window.alert(`Curriculum saved, but subject sync failed: ${subjSync.error?.message || 'unknown error'}`);
      }
      state.modal = null;
      showToast('Curriculum saved');
      render();
      return;
    }
    if (mt === 'newRequest') {
      let days = [...document.querySelectorAll('#modalBackdrop [id^="rqday_"]:checked')].map(c => c.value);
      let roomChoice = document.getElementById('rq_room')?.value || '';
      let roomId = roomChoice === '__another_dept_hint__' ? '' : roomChoice;
      let room = getRoom(roomId);
      let section = (document.getElementById('rq_section')?.value || '').trim();
      let timeStart = document.getElementById('rq_timeStart')?.value || '';
      let timeEnd = document.getElementById('rq_timeEnd')?.value || '';
      let setV = (document.getElementById('rq_set')?.value || '').trim();
      let subId = document.getElementById('rq_subject')?.value || '';
      let schYear = (document.getElementById('rq_year')?.value || '').trim();
      let schSem = (document.getElementById('rq_sem')?.value || '').trim();
      let schAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
      let toDeptPick = document.getElementById('rq_to_dept')?.value || '';
      let reasonRq = (document.getElementById('rq_reason')?.value || '').trim();
      let reasonCommentRq = (document.getElementById('rq_reason_comment')?.value || '').trim();
      let isTeachingAssignmentReason = reasonRq === REQUEST_ROOM_REASON_CHOICES[1];
      let needsRoomBookingFollowup = isTeachingAssignmentReason && roomChoice === '__another_dept_hint__';
      let fallbackRoomIdForPending = '';
      if (needsRoomBookingFollowup) {
        let deptRooms = roomsSourceForApp()
          .filter(x => x.dept === toDeptPick)
          .sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')));
        fallbackRoomIdForPending = deptRooms[0]?.id || '';
        if (!fallbackRoomIdForPending) {
          showFormValidationBanner('rqFormAlert', 'No room record found for the selected department.');
          return;
        }
      }
      let profReq = isTeachingAssignmentReason ? '' : (document.getElementById('rq_professor')?.value || '');
      let profOtherRq = isTeachingAssignmentReason ? '' : (document.getElementById('rq_professor_other')?.value || '').trim();
      if (!toDeptPick || (!roomId && !needsRoomBookingFollowup) || !subId || (!isTeachingAssignmentReason && !profReq) || !section || !days.length || !timeStart || !timeEnd || !schYear || !schSem || !reasonRq) {
        showFormValidationBanner('rqFormAlert', MSG_FORM_INCOMPLETE);
        return;
      }
      if (!subjectAllowedByCurriculum(state.currentUser.dept, schYear, schSem, subId, schAy)) {
        showFormValidationBanner('rqFormAlert', 'Choose a subject listed in Curriculum for the selected year and semester.');
        return;
      }
      let hoursErrReq = validateEntryHoursWithinCurriculum({
        dept: state.currentUser.dept,
        schYear,
        schSem,
        subjectId: subId,
        schAy,
        timeStart,
        timeEnd,
        days,
      });
      if (hoursErrReq) {
        showFormValidationBanner('rqFormAlert', hoursErrReq);
        return;
      }
      if (curriculumSubjectHasLabUnits(state.currentUser.dept, schYear, schSem, subId, schAy) && !setV) {
        showFormValidationBanner('rqFormAlert', MSG_SET_REQUIRED_FOR_LAB);
        return;
      }
      let roomAllowed = room?.dept === toDeptPick || (isTeachingAssignmentReason && room?.dept === state.currentUser.dept);
      if (!needsRoomBookingFollowup && !roomAllowed) {
        showFormValidationBanner('rqFormAlert', isTeachingAssignmentReason
          ? 'Selected room must belong to your department or the selected department.'
          : 'Selected room must belong to the department you are requesting.');
        return;
      }
      if (profReq === PROFESSOR_OTHER_ID && !profOtherRq) {
        showFormValidationBanner('rqFormAlert', 'Enter the professor or instructor name when Others is selected.');
        return;
      }
      if (timeToRow(timeEnd) <= timeToRow(timeStart)) {
        showFormValidationBanner('rqFormAlert', 'End time must be after start time.');
        return;
      }
      if (!needsRoomBookingFollowup) {
        for (let day of days) {
          if (roomSlotOccupied(roomId, day, timeStart, timeEnd)) {
            showFormValidationBanner('rqFormAlert', 'That room is no longer free for one of the selected days.');
            return;
          }
        }
      }
      if (!window.confirm(MSG_CONFIRM_SCHEDULE_OR_REQUEST_SAVE)) return;
      let req = {
        id: genId(),
        fromDept: state.currentUser.dept,
        toDept: toDeptPick,
        roomId: needsRoomBookingFollowup ? fallbackRoomIdForPending : roomId,
        subjectId: subId,
        section,
        professorId: isTeachingAssignmentReason ? null : (profReq === PROFESSOR_OTHER_ID ? PROFESSOR_OTHER_ID : profReq || null),
        professorOtherName: isTeachingAssignmentReason ? null : (profReq === PROFESSOR_OTHER_ID ? profOtherRq : null),
        days,
        timeStart,
        timeEnd,
        schYear,
        schSem,
        schAy,
        setLabel: setV || null,
        labLabel: null,
        reason: needsRoomBookingFollowup ? `${REQUEST_ROOM_PENDING_MARKER}${reasonRq}` : reasonRq,
        reasonComment: needsRoomBookingFollowup
          ? `${REQUEST_ROOM_PENDING_MARKER}${reasonCommentRq ? ` ${reasonCommentRq}` : ''}`
          : reasonCommentRq,
        status: 'pending',
        created: new Date().toISOString().slice(0, 10),
      };
      if (hasSupabaseClient()) {
        insertRequestDb(req)
          .then(({ error }) => {
            if (error) {
              showFormValidationBanner('rqFormAlert', `Supabase error: ${error.message}`);
              return;
            }
            state.requests.push(req);
            focusTermForRequest(req);
            focusRequestTimetableForRequest(req);
            state.modal = null;
            showToast('Request submitted');
            render();
          })
          .catch((err) => {
            showFormValidationBanner('rqFormAlert', `Supabase error: ${err?.message || 'Unable to save request.'}`);
          });
        return;
      }
      state.requests.push(req);
      focusTermForRequest(req);
      focusRequestTimetableForRequest(req);
      state.modal = null;
      showToast('Request submitted');
      render();
    }
  });
  document.querySelectorAll('[data-delschedid]').forEach(el=>el.addEventListener('click', async ()=>{
    if (isDean) return;
    let delTarget = state.schedules.find(x => x.id === el.dataset.delschedid);
    if (!scheduleMutableByCurrentChair(delTarget)) return;
    if (!window.confirm(MSG_CONFIRM_PERM_DELETE_SCHEDULE)) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase.from('schedules').delete().eq('id', el.dataset.delschedid);
      if (error) {
        window.alert(`Unable to delete schedule in Supabase: ${error.message}`);
        return;
      }
      await syncSchedulesFromSupabase();
    } else {
      state.schedules=state.schedules.filter(s=>s.id!==el.dataset.delschedid);
    }
    state.modal=null;showToast('Deleted');render();
  }));
  document.getElementById('requestRoomTopBtn')?.addEventListener('click', () => {
    let u = state.currentUser;
    openModal({
      type: 'newRequest',
      requestStep: 1,
      requestToDept: resolveRequestFormToDeptId(u, state.requestTimetableDept),
      ...requestFormBorrowRoomPrefill(),
    });
  });
  document.getElementById('rqNextStepBtn')?.addEventListener('click', () => {
    if (state.modal?.type !== 'newRequest') return;
    if (!validateRequestFormStepOne(true)) return;
    state.modal.requestStep = 2;
    render();
  });
  document.getElementById('rqPrevStepBtn')?.addEventListener('click', () => {
    if (state.modal?.type !== 'newRequest') return;
    state.modal.requestStep = 1;
    render();
  });
  document.getElementById('rq_to_dept')?.addEventListener('change', e => {
    if (state.modal?.type !== 'newRequest') return;
    state.modal.requestToDept = e.target.value;
    state.modal.prefillBorrowRoomId = '';
    render();
  });
  document.getElementById('rq_reason')?.addEventListener('change', e => {
    if (state.modal?.type !== 'newRequest') return;
    state.modal.requestReason = e.target.value;
    render();
  });
  document.getElementById('rq_reason_comment')?.addEventListener('input', e => {
    if (state.modal?.type !== 'newRequest') return;
    state.modal.requestReasonComment = e.target.value;
  });
  document.getElementById('rq_room')?.addEventListener('change', e => {
    if (state.modal?.type !== 'newRequest') return;
    if (e.target.value !== '__another_dept_hint__') return;
    document.getElementById('rq_to_dept')?.focus({ preventScroll: true });
  });
  document.getElementById('book_to_dept')?.addEventListener('change', e => {
    if (state.modal?.type !== 'bookTeachingRoom') return;
    state.modal.bookToDept = e.target.value;
    render();
  });
  document.querySelectorAll('[data-book-room-request]').forEach(el => el.addEventListener('click', () => {
    let rid = el.getAttribute('data-book-room-request');
    let base = state.requests.find(x => x.id === rid);
    if (!base) return;
    state.modal = {
      type: 'bookTeachingRoom',
      requestId: rid,
      bookToDept: resolveRequestFormToDeptId(state.currentUser, state.requestTimetableDept),
    };
    render();
  }));
  document.querySelectorAll('[data-clear-outgoing-requests]').forEach(el =>
    el.addEventListener('click', () => {
      let bucket = String(el.getAttribute('data-clear-outgoing-requests') || '').trim();
      void clearOutgoingRequestsForBucket(bucket);
    }),
  );
  document.querySelectorAll('[data-approve]').forEach(el=>el.addEventListener('click', async ()=>{
    let r = getStateRequestById(el.dataset.approve);
    if (!r) return;
    if (isTeachingAssignmentRequest(r)) {
      state.modal = { type: 'approveTeachingAssignment', requestId: r.id };
      render();
      return;
    }
    if (!window.confirm('Are you sure you want to accept this request?')) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase
        .from('requests')
          .update({ status: 'approved' })
        .eq('id', r.id);
      if (error) {
        window.alert(`Unable to accept request in Supabase: ${error.message}`);
        return;
      }
    }
    r.status='approved';
    if (r.parentTeachingRequestId) {
      let parentReq = getStateRequestById(r.parentTeachingRequestId);
      if (parentReq) {
        parentReq.status = 'approved';
        parentReq.reason = requestReasonDisplayText(parentReq);
        parentReq.reasonComment = requestReasonCommentDisplayText(parentReq);
      }
      if (hasSupabaseClient()) {
        if (parentReq) {
          let parentReason = requestReasonDisplayText(parentReq);
          let parentReasonComment = requestReasonCommentDisplayText(parentReq);
          let patch = {
            status: 'approved',
            reason: parentReason,
            reason_comment: parentReasonComment,
          };
          let { error: upErr } = await window.cenSupabase.from('requests').update(patch).eq('id', r.parentTeachingRequestId);
          if (upErr && isSupabaseMissingColumnError(upErr, 'reason_comment')) {
            delete patch.reason_comment;
            upErr = (await window.cenSupabase.from('requests').update(patch).eq('id', r.parentTeachingRequestId)).error;
          }
          if (upErr) {
            console.warn('Could not update parent teaching request after room approval:', upErr.message);
          }
        } else {
          let { error: upErr } = await window.cenSupabase.from('requests').update({ status: 'approved' }).eq('id', r.parentTeachingRequestId);
          if (upErr) {
            console.warn('Could not update parent teaching request after room approval:', upErr.message);
          }
        }
        await syncRequestsFromSupabase();
        r = getStateRequestById(el.dataset.approve) || getStateRequestById(r.id) || r;
      }
    }
    focusTermForRequest(r);
    focusRequestTimetableForRequest(r);
    let approvedAt = new Date().toISOString();
    let approvedSched = {id:genId(),subjectId:r.subjectId,professorId:r.professorId||null,professorOtherName:r.professorOtherName||null,roomId:r.roomId,roomOtherName:r.roomOtherName||null,dept:r.toDept||r.fromDept,section:r.section,days:r.days,timeStart:r.timeStart,timeEnd:r.timeEnd,color:'blue',setLabel:r.setLabel||null,labLabel:r.labLabel||null,schYear:r.schYear||'1st Year',schSem:r.schSem||'1st Semester',schAy:normalizeAcademicYearInput(r.schAy)||normalizeAcademicYearInput(state.termAcademicYear)||DEFAULT_ACADEMIC_YEAR,createdAt:approvedAt};
    if (hasSupabaseClient()) {
      const { error } = await upsertSchedulesDb([approvedSched]);
      if (error) {
        window.alert(`Request accepted but schedule insert failed in Supabase: ${error.message}`);
        return;
      }
      await syncSchedulesFromSupabase();
    } else {
      state.schedules.push(approvedSched);
    }
    window.alert('This request has been accepted and added to the timetable.');
    render();
  }));
  document.querySelectorAll('[data-decline]').forEach(el => {
    el.addEventListener('click', () => {
      let rid = el.getAttribute('data-decline');
      if (rid == null || rid === '' || !getStateRequestById(rid)) return;
      state.modal = { type: 'declineRequest', requestId: rid };
      render();
    });
  });
  document.getElementById('addCurriculumBtn')?.addEventListener('click',()=>{openModal({type:'addCurriculum',data:{}});});
  document.querySelectorAll('[data-curriculum-table-edit]').forEach(btn =>
    btn.addEventListener('click', () => {
      if (!canUserMutateCurriculum(state.currentUser)) return;
      let tid = btn.getAttribute('data-curriculum-table-edit');
      if (tid) state.curriculumTableEditId = tid;
      render();
    }),
  );
  document.querySelectorAll('[data-curriculum-table-cancel]').forEach(btn =>
    btn.addEventListener('click', () => {
      state.curriculumTableEditId = null;
      render();
    }),
  );
  document.querySelectorAll('[data-curriculum-table-save]').forEach(btn =>
    btn.addEventListener('click', () => {
      void commitCurriculumTableInlineSave(btn.getAttribute('data-curriculum-table-save'));
    }),
  );
  document.querySelectorAll('[data-curriculum-row-save]').forEach(btn =>
    btn.addEventListener('click', () => {
      void commitCurriculumTableInlineSaveRow(btn.getAttribute('data-curriculum-row-save'), btn.getAttribute('data-cd-id'));
    }),
  );
  document.querySelectorAll('[data-editcrow]').forEach(el=>el.addEventListener('click',()=>{
    if (!canUserMutateCurriculum(state.currentUser)) return;
    let want = curriculumRowIdKey(el.dataset.editcrow);
    let c = state.curriculum.find(x => curriculumRowIdKey(x.id) === want);
    if (c) openModal({ type: 'addCurriculum', data: { ...c } });
  }));
  document.querySelectorAll('[data-viewcrow]').forEach(el=>el.addEventListener('click',()=>{
    let want = curriculumRowIdKey(el.dataset.viewcrow);
    let c = state.curriculum.find(x => curriculumRowIdKey(x.id) === want);
    if (c) openModal({ type: 'addCurriculum', data: { ...c } });
  }));
  document.getElementById('curriculumYearFilter')?.addEventListener('change', e => {
    state.curriculumYearFilter = e.target.value || 'all';
    state.curriculumSectionFilter = 'all';
    state.curriculumTableEditId = null;
    render();
  });
  document.getElementById('curriculumAcademicYearFilter')?.addEventListener('change', async e => {
    state.curriculumAcademicYearFilter = normalizeAcademicYearInput(e.target.value || '') || DEFAULT_ACADEMIC_YEAR;
    state.curriculumTableEditId = null;
    render();
  });
  document.getElementById('sectionYearFilter')?.addEventListener('change', e => {
    state.sectionYearFilter = e.target.value || 'all';
    render();
  });
  document.getElementById('sectionDeptFilter')?.addEventListener('change', e => {
    state.sectionDeptFilter = e.target.value || 'all';
    render();
  });
  document.getElementById('sectionAcademicYearFilter')?.addEventListener('change', e => {
    state.sectionAcademicYearFilter = normalizeAcademicYearInput(e.target.value || '') || DEFAULT_ACADEMIC_YEAR;
    render();
  });
  document.getElementById('roomDeptFilter')?.addEventListener('change', e => {
    state.roomDeptFilter = e.target.value || 'all';
    render();
  });
  document.getElementById('roomTypeFilter')?.addEventListener('change', e => {
    let v = e.target.value || 'all';
    state.roomTypeFilter = ROOM_PAGE_TYPE_FILTERS.includes(v) ? v : 'all';
    render();
  });
  document.getElementById('roomAcademicYearFilter')?.addEventListener('change', e => {
    state.roomAcademicYearFilter = normalizeAcademicYearInput(e.target.value || '') || DEFAULT_ACADEMIC_YEAR;
    render();
  });
  document.getElementById('facultyDeptFilter')?.addEventListener('change', e => {
    state.facultyDeptFilter = e.target.value || 'all';
    render();
  });
  document.getElementById('facultyStatusFilter')?.addEventListener('change', e => {
    state.facultyStatusFilter = e.target.value || 'all';
    render();
  });
  document.getElementById('facultySearchInput')?.addEventListener('input', e => {
    state.facultySearchQuery = e.target.value || '';
    let caret = Number.isFinite(e.target.selectionStart) ? e.target.selectionStart : state.facultySearchQuery.length;
    render();
    queueMicrotask(() => {
      let inp = document.getElementById('facultySearchInput');
      if (!inp) return;
      inp.focus();
      let pos = Math.max(0, Math.min(caret, inp.value.length));
      try {
        inp.setSelectionRange(pos, pos);
      } catch (err) {
        /* ignore */
      }
    });
  });
  document.getElementById('formsFilterAy')?.addEventListener('change', e => {
    state.formsAcademicYear = normalizeAcademicYearInput(e.target.value) || DEFAULT_ACADEMIC_YEAR;
    render();
  });
  document.getElementById('formsFilterSem')?.addEventListener('change', e => {
    state.formsSemester = e.target.value || '1st Semester';
    render();
  });
  document.getElementById('formsYearLevel')?.addEventListener('change', e => {
    state.formsYearLevel = e.target.value || 'all';
    render();
  });
  document.getElementById('formsSection')?.addEventListener('change', e => {
    let v = e.target.value || 'all';
    state.formsSection = v === 'all' ? 'all' : v;
    render();
  });
  document.getElementById('formsFacultySelect')?.addEventListener('change', e => {
    state.formsFacultyId = e.target.value || '';
    persistAppData();
  });
  document.getElementById('formsFilterClear')?.addEventListener('click', () => {
    state.formsAcademicYear = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    state.formsSemester = state.termSemester || '1st Semester';
    state.formsYearLevel = 'all';
    state.formsSection = 'all';
    let u = state.currentUser;
    if (u?.dept) {
      let fp = state.professors
        .filter(p => p.dept === u.dept)
        .sort((a, b) => String(a.name).localeCompare(String(b.name)));
      state.formsFacultyId = fp[0]?.id || '';
    }
    render();
  });
  document.querySelectorAll('[data-form-preview]').forEach(btn => {
    btn.addEventListener('click', () => {
      let t = btn.getAttribute('data-form-preview');
      let fac = document.getElementById('formsFacultySelect');
      if (fac) state.formsFacultyId = fac.value;
      let w = window.open('', '_blank');
      if (!w) {
        showToast('Allow pop-ups to preview exports.');
        return;
      }
      openFormsOutput('view', t, { popupWindow: w });
    });
  });
  document.querySelectorAll('[data-form-export]').forEach(btn => {
    btn.addEventListener('click', () => {
      let t = btn.getAttribute('data-form-export');
      let fac = document.getElementById('formsFacultySelect');
      if (fac) state.formsFacultyId = fac.value;
      openModal({ type: 'formsExport', formType: t || 'schedule' });
    });
  });
  document.getElementById('formsExportModalSubmit')?.addEventListener('click', async () => {
    if (state.modal?.type !== 'formsExport') return;
    let popupWindow = null;
    try {
      const formType = state.modal.formType || 'schedule';
      const get = id => document.getElementById(id);
      const feAy = normalizeAcademicYearInput(get('fe_ay')?.value) || DEFAULT_ACADEMIC_YEAR;
      const feSem = get('fe_sem')?.value || '1st Semester';
      const feYear = get('fe_year')?.value || 'all';
      const feSection = get('fe_section')?.value || 'all';
      const feProf = formType === 'faculty' ? (get('fe_professor')?.value || '').trim() : '';
      const feFormat = (get('fe_format')?.value || 'pdf').toLowerCase();
      if (formType === 'faculty' && !feProf) {
        showToast('Select a faculty or professor.');
        return;
      }
      if (formType === 'preenroll' && (!feSection || feSection === 'all')) {
        showToast('Select a section for the Pre-Enrollment form.');
        return;
      }
      if (formType === 'preenroll' && (!feYear || feYear === 'all')) {
        showToast('Select a year level for the Pre-Enrollment form.');
        return;
      }
      /* Pre-Enrolment .docx is generated in-page; no blank tab needed. */
      const needsPopup = false;
      if (needsPopup) {
        popupWindow = window.open('', '_blank');
        if (!popupWindow) {
          showToast('Allow pop-ups to export this form.');
          return;
        }
      }
      if (hasSupabaseClient()) {
        const ok = await syncCoreDataFromSupabase();
        showToast(
          ok ? 'Loaded the latest data from the database. Building your export…' : 'Database sync had issues; using local data. Building export…',
        );
      }
      const u = state.currentUser;
      const ovr = {
        ay: feAy,
        sem: feSem,
        yearLevel: feYear,
        section: feSection,
        facultyId: formType === 'faculty' ? feProf : '',
      };
      if (u?.dept) ovr.dept = u.dept;
      state.formsAcademicYear = feAy;
      state.formsSemester = feSem;
      state.formsYearLevel = feYear;
      state.formsSection = feSection;
      if (formType === 'faculty') state.formsFacultyId = feProf;
      state.modal = null;
      render();
      openFormsOutput('print', formType, { override: ovr, format: feFormat, popupWindow });
    } catch (err) {
      writeExportPopupFallback(popupWindow, 'Export failed', String(err?.message || err || 'Unexpected error'));
      showToast('Export failed before file generation.');
    }
  });
  document.getElementById('fe_year')?.addEventListener('change', e => {
    state.formsYearLevel = e.target.value || 'all';
    refreshFormsExportSectionOptions();
    let secEl = document.getElementById('fe_section');
    if (secEl) state.formsSection = secEl.value || (state.modal?.formType === 'preenroll' ? '' : 'all');
  });
  document.getElementById('fe_section')?.addEventListener('change', e => {
    state.formsSection = e.target.value || (state.modal?.formType === 'preenroll' ? '' : 'all');
  });
  document.getElementById('addSectionBtn')?.addEventListener('click', () => {
    let u = state.currentUser;
    if (!(u?.role === 'admin' || u?.role === 'chairperson')) return;
    openModal({ type: 'addSection', data: { dept: u.role === 'chairperson' ? u.dept : DEPARTMENTS[0]?.id || '', year: '', section: '' } });
  });
  document.getElementById('addRoomBtn')?.addEventListener('click', () => {
    let u = state.currentUser;
    if (!(u?.role === 'admin' || u?.role === 'chairperson')) return;
    openModal({
      type: 'addRoom',
      data: { id: '', name: '', type: 'classroom', dept: u.role === 'chairperson' ? u.dept : DEPARTMENTS[0]?.id || '' },
    });
  });
  document.querySelectorAll('[data-editroom]').forEach(el =>
    el.addEventListener('click', () => {
      let id = el.getAttribute('data-editroom') || '';
      let rec = roomRecordFromCatalog(id);
      if (!rec) return;
      let u = state.currentUser;
      if (u?.role === 'chairperson' && rec.dept !== u.dept) return;
      openModal({ type: 'addRoom', data: { ...rec } });
    }),
  );
  document.querySelectorAll('[data-delroom]').forEach(el =>
    el.addEventListener('click', async () => {
      let roomId = el.getAttribute('data-delroom') || '';
      let rec = roomRecordFromCatalog(roomId);
      if (!rec) return;
      let u = state.currentUser;
      if (!(u?.role === 'admin' || u?.role === 'chairperson')) return;
      if (u.role === 'chairperson' && rec.dept !== u.dept) return;
      let nSch = countSchedulesUsingRoom(roomId);
      let nReq = countRequestsUsingRoom(roomId);
      let delExtra = [];
      if (nSch) delExtra.push(`${nSch} timetable row(s) will keep their times but use “Other room” with this room’s name`);
      if (nReq) delExtra.push(`${nReq} room request(s) will be deleted`);
      let delMsg =
        delExtra.length > 0 ? `${delExtra.join('. ')}.\n\n${MSG_CONFIRM_PERM_DELETE_ROOM}` : MSG_CONFIRM_PERM_DELETE_ROOM;
      if (!window.confirm(delMsg)) return;
      if (hasSupabaseClient()) {
        const fkErr = await supabaseDetachRoomDependents(roomId, rec.name || '');
        if (fkErr) {
          window.alert(`Unable to clear room usage: ${fkErr.message}`);
          return;
        }
        const { error } = await window.cenSupabase.from('rooms').delete().eq('id', roomId);
        if (error) {
          window.alert(`Unable to delete room: ${error.message}`);
          return;
        }
        let okSch = await syncSchedulesFromSupabase();
        let okReq = await syncRequestsFromSupabase();
        if (!okSch || !okReq) applyLocalRoomDeleteSideEffects(roomId, rec);
      } else {
        applyLocalRoomDeleteSideEffects(roomId, rec);
      }
      /** Hide row even when the room only existed in bundled `ROOMS` merge (not in `state.rooms`), and after DB delete so bundle merge cannot show it again this session. */
      if (!state.suppressedRoomIds.includes(roomId)) state.suppressedRoomIds.push(roomId);
      state.rooms = state.rooms.filter(r => r.id !== roomId);
      showToast('Room deleted');
      render();
    }),
  );
  document.querySelectorAll('[data-editsection]').forEach(el =>
    el.addEventListener('click', () => {
      let raw = el.getAttribute('data-editsection') || '';
      let [dept, section] = raw.split('::');
      if (!dept || !section) return;
      openModal({
        type: 'addSection',
        data: { dept, year: sectionYearFromLabel(section) || '', section, _oldDept: dept, _oldSection: section },
      });
    }),
  );
  document.querySelectorAll('[data-delsection]').forEach(el =>
    el.addEventListener('click', () => {
      let raw = el.getAttribute('data-delsection') || '';
      let [dept, section] = raw.split('::');
      if (!dept || !section) return;
      if (!window.confirm('Delete this section from the section list?')) return;
      if (SECTION_SAMPLES_BY_DEPT[dept]) {
        SECTION_SAMPLES_BY_DEPT[dept] = SECTION_SAMPLES_BY_DEPT[dept].filter(s => String(s || '').trim() !== section);
      }
      showToast('Section deleted');
      render();
    }),
  );
  document.getElementById('curriculumExportBtn')?.addEventListener('click', () => {
    if (state.page !== 'curriculum') return;
    exportCurriculumTableCsv();
  });
  document.getElementById('scheduleExportWizardConfirmBtn')?.addEventListener('click', () => runScheduleExportFromWizard());
  let sewPanel = document.getElementById('modalPanel');
  if (sewPanel?.classList.contains('modal-schedule-export-wizard')) {
    function syncScheduleExportWizardStateFromDom() {
      if (state.modal?.type !== 'scheduleExportWizard') return;
      let ay =
        normalizeAcademicYearInput(document.getElementById('sew_academic_year')?.value || '') || DEFAULT_ACADEMIC_YEAR;
      let sem = document.getElementById('sew_semester')?.value || '1st Semester';
      if (!['1st Semester', '2nd Semester', 'both'].includes(sem)) sem = '1st Semester';
      let selectedTypes = normalizeScheduleExportFilterTypes(
        [...document.querySelectorAll('#modalBackdrop .sew-filter-checkbox:checked')].map(el => el.value),
      );
      let details = {
        faculty: ensureScheduleExportWizardDetailValue(
          'faculty',
          document.getElementById('sew_filter_detail_faculty')?.value || '',
          state.currentUser,
        ),
        room: ensureScheduleExportWizardDetailValue(
          'room',
          document.getElementById('sew_filter_detail_room')?.value || '',
          state.currentUser,
        ),
        section: ensureScheduleExportWizardDetailValue(
          'section',
          document.getElementById('sew_filter_detail_section')?.value || '',
          state.currentUser,
        ),
      };
      state.modal = { ...state.modal, exportAy: ay, exportSem: sem, exportFilterTypes: selectedTypes, exportFilterDetails: details };
    }
    sewPanel.querySelectorAll('.sew-filter-checkbox').forEach(cb =>
      cb.addEventListener('change', e => {
        if (!(e.target instanceof HTMLInputElement)) return;
        let v = e.target.value;
        if (v === 'all' && e.target.checked) {
          sewPanel.querySelectorAll('.sew-filter-checkbox').forEach(x => {
            if (x !== e.target) x.checked = false;
          });
        } else if (v !== 'all' && e.target.checked) {
          let allCb = sewPanel.querySelector('#sew_filter_all');
          if (allCb) allCb.checked = false;
        }
        if (![...sewPanel.querySelectorAll('.sew-filter-checkbox')].some(x => x.checked)) {
          let allCb = sewPanel.querySelector('#sew_filter_all');
          if (allCb) allCb.checked = true;
        }
        syncScheduleExportWizardStateFromDom();
        render();
      }),
    );
    ['sew_filter_detail_faculty', 'sew_filter_detail_room', 'sew_filter_detail_section'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => {
        syncScheduleExportWizardStateFromDom();
      });
    });
    document.getElementById('sew_academic_year')?.addEventListener('change', () => {
      syncScheduleExportWizardStateFromDom();
    });
    document.getElementById('sew_semester')?.addEventListener('change', () => {
      syncScheduleExportWizardStateFromDom();
    });
  }
  document.getElementById('curriculumDeptFilter')?.addEventListener('change', e => {
    state.curriculumDeptFilter = e.target.value || (DEPARTMENTS[0] && DEPARTMENTS[0].id) || '';
    state.curriculumSectionFilter = 'all';
    state.curriculumTableEditId = null;
    render();
  });
  document.getElementById('curriculumSectionFilter')?.addEventListener('change', e => {
    state.curriculumSectionFilter = e.target.value || 'all';
    state.curriculumTableEditId = null;
    render();
  });
  document.getElementById('curriculumSemFilter')?.addEventListener('change', e => {
    state.curriculumSemFilter = e.target.value;
    state.curriculumTableEditId = null;
    render();
  });
  function syncCurriculumUnitsTotal() {
    let lecEl = document.getElementById('cc_lecUnits');
    let labEl = document.getElementById('cc_labUnits');
    let out = document.getElementById('cc_units_total');
    let hoursEl = document.getElementById('cc_hours');
    if (!lecEl || !labEl || !out) return;
    let lec = parseInt(lecEl.value, 10);
    let lab = parseInt(labEl.value, 10);
    let a = Number.isFinite(lec) ? lec : 0;
    let b = Number.isFinite(lab) ? lab : 0;
    out.value = String(a + b);
    if (hoursEl) {
      hoursEl.value = String(computedCurriculumHoursFromUnits(a, b));
    }
  }
  document.getElementById('cc_lecUnits')?.addEventListener('input', syncCurriculumUnitsTotal);
  document.getElementById('cc_labUnits')?.addEventListener('input', syncCurriculumUnitsTotal);
  syncCurriculumUnitsTotal();
  document.getElementById('addProfBtn')?.addEventListener('click',()=>{openModal({type:'addProfessor',data:{}});});
  document.querySelectorAll('[data-editprof]').forEach(el=>el.addEventListener('click',()=>{let p=state.professors.find(x=>x.id===el.dataset.editprof);if(p)openModal({type:'addProfessor',data:{...p}});}));
  document.querySelectorAll('[data-delprof]').forEach(el=>el.addEventListener('click', async ()=>{
    if (!window.confirm(MSG_CONFIRM_PERM_DELETE_PROFESSOR)) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase.from('professors').delete().eq('id', el.dataset.delprof);
      if (error) {
        window.alert(`Unable to delete professor in Supabase: ${error.message}`);
        return;
      }
    }
    removeFacultyMetaOverride(el.dataset.delprof);
    state.professors=state.professors.filter(p=>p.id!==el.dataset.delprof);showToast('Professor deleted');render();
  }));
  document.querySelectorAll('[data-assign-pending]').forEach(btn =>
    btn.addEventListener('click', async () => {
      let email = String(btn.getAttribute('data-assign-pending') || '').trim().toLowerCase();
      if (!email) return;
      let row = btn.closest('tr');
      let dept = String(row?.querySelector('.pending-assign-dept')?.value || '').trim();
      if (!dept) {
        showToast('Choose a department before assigning.');
        return;
      }
      let picked =
        state.pendingAccountsUi?.phase === 'ready'
          ? state.pendingAccountsUi.rows.find(x => String(x?.email || '').trim().toLowerCase() === email)
          : loadPendingAccounts().find(x => String(x?.email || '').trim().toLowerCase() === email);
      let displayName = String(picked?.name || email.split('@')[0] || 'User').trim();
      if (hasSupabaseClient()) {
        let { data: sessWrap } = await window.cenSupabase.auth.getSession();
        if (sessWrap?.session) {
          let { error } = await window.cenSupabase.from('pending_accounts').delete().eq('email', email);
          if (error) {
            window.alert(`Unable to remove pending row in Supabase: ${error.message}`);
            return;
          }
        } else {
          let pending = loadPendingAccounts();
          savePendingAccounts(pending.filter(x => String(x?.email || '').trim().toLowerCase() !== email));
        }
      } else {
        let pending = loadPendingAccounts();
        savePendingAccounts(pending.filter(x => String(x?.email || '').trim().toLowerCase() !== email));
      }
      let overrides = loadAccountRoleOverrides().filter(x => String(x?.email || '').trim().toLowerCase() !== email);
      overrides.push({
        id: `mapped_${email.replace(/[^a-z0-9]/g, '')}`,
        name: displayName,
        email,
        role: 'chairperson',
        dept,
        initials: initialsFromName(displayName),
        assignedAt: new Date().toISOString(),
      });
      saveAccountRoleOverrides(overrides);
      state.pendingAccountsUi = null;
      showToast(`Assigned ${displayName} as ${String(getDept(dept)?.code || dept)} Chair.`);
      render();
    }),
  );
  document.querySelectorAll('[data-del-pending]').forEach(btn =>
    btn.addEventListener('click', async () => {
      let email = String(btn.getAttribute('data-del-pending') || '').trim().toLowerCase();
      if (!email) return;
      if (!window.confirm(`Remove this pending request for ${email}?`)) return;
      if (hasSupabaseClient()) {
        let { data: sessWrap } = await window.cenSupabase.auth.getSession();
        if (sessWrap?.session) {
          let { error } = await window.cenSupabase.from('pending_accounts').delete().eq('email', email);
          if (error) {
            window.alert(`Unable to delete pending row in Supabase: ${error.message}`);
            return;
          }
        } else {
          let pending = loadPendingAccounts().filter(x => String(x?.email || '').trim().toLowerCase() !== email);
          savePendingAccounts(pending);
        }
      } else {
        let pending = loadPendingAccounts().filter(x => String(x?.email || '').trim().toLowerCase() !== email);
        savePendingAccounts(pending);
      }
      state.pendingAccountsUi = null;
      showToast('Pending request removed');
      render();
    }),
  );
  document.querySelectorAll('[data-edit-mapped]').forEach(btn => btn.addEventListener('click', () => {
    if (state.currentUser?.role !== 'admin') return;
    let email = String(btn.getAttribute('data-edit-mapped') || '').trim().toLowerCase();
    if (!email) return;
    let cur = getMergedSystemAccountByEmail(email);
    if (!cur) return;
    let src = String(btn.getAttribute('data-mapped-source') || '');
    let hadOverride = String(btn.getAttribute('data-has-override') || '') === '1';
    openModal({
      type: 'editSystemAccount',
      data: {
        ...cur,
        originalEmail: email,
        hadOverride,
        source: src,
      },
    });
  }));
  document.querySelectorAll('[data-del-mapped]').forEach(btn => btn.addEventListener('click', () => {
    if (state.currentUser?.role !== 'admin') return;
    let email = String(btn.getAttribute('data-del-mapped') || '').trim().toLowerCase();
    if (!email) return;
    let src = String(btn.getAttribute('data-mapped-source') || '');
    let hasOverride = String(btn.getAttribute('data-has-override') || '') === '1';
    if (!window.confirm(`Delete account row for ${email}?`)) return;
    let overrides = loadAccountRoleOverrides();
    if (hasOverride) overrides = overrides.filter(x => String(x?.email || '').trim().toLowerCase() !== email);
    let removed = loadRemovedBaseAccountEmails();
    if (!hasOverride && src === 'base') removed.add(email);
    saveAccountRoleOverrides(overrides);
    saveRemovedBaseAccountEmails(removed);
    showToast('Account removed from list');
    render();
  }));
  /** When "Others:" is chosen, swap dropdown for text input in the same slot; "List" restores the dropdown. */
  function bindProfessorOtherSwap(prefix) {
    let sel = document.getElementById(prefix);
    let selWrap = document.getElementById(prefix + '_select_wrap');
    let otherWrap = document.getElementById(prefix + '_other_wrap');
    let otherIn = document.getElementById(prefix + '_other');
    let listBtn = document.getElementById(prefix + '_list_btn');
    if (!sel || !selWrap || !otherWrap) return;
    let lastSelVal = sel.value;
    let initialSync = true;
    function showDropdown(show) {
      selWrap.hidden = !show;
      otherWrap.hidden = show;
      if (initialSync) return;
      if (!show && otherIn) {
        otherIn.focus();
      } else if (show) {
        sel.focus();
      }
    }
    function syncFromSelect() {
      showDropdown(sel.value !== PROFESSOR_OTHER_ID);
      initialSync = false;
    }
    sel.addEventListener('change', () => {
      let v = sel.value;
      if (v === PROFESSOR_OTHER_ID && lastSelVal !== PROFESSOR_OTHER_ID && otherIn) otherIn.value = '';
      lastSelVal = v;
      syncFromSelect();
    });
    listBtn?.addEventListener('click', () => {
      sel.value = '';
      lastSelVal = '';
      if (otherIn) otherIn.value = '';
      showDropdown(true);
    });
    syncFromSelect();
  }
  /** Schedule create/edit only — not used on room request form. */
  function bindRoomOtherSwap(prefix) {
    let sel = document.getElementById(prefix);
    let selWrap = document.getElementById(prefix + '_select_wrap');
    let otherWrap = document.getElementById(prefix + '_other_wrap');
    let otherIn = document.getElementById(prefix + '_other');
    let listBtn = document.getElementById(prefix + '_list_btn');
    if (!sel || !selWrap || !otherWrap) return;
    let lastSelVal = sel.value;
    let initialSync = true;
    function showDropdown(show) {
      selWrap.hidden = !show;
      otherWrap.hidden = show;
      if (initialSync) return;
      if (!show && otherIn) {
        otherIn.focus();
      } else if (show) {
        sel.focus();
      }
    }
    function syncFromSelect() {
      showDropdown(sel.value !== ROOM_OTHER_ID);
      initialSync = false;
    }
    sel.addEventListener('change', () => {
      let v = sel.value;
      if (v === ROOM_OTHER_ID && lastSelVal !== ROOM_OTHER_ID && otherIn) otherIn.value = '';
      lastSelVal = v;
      syncFromSelect();
    });
    listBtn?.addEventListener('click', () => {
      sel.value = '';
      lastSelVal = '';
      if (otherIn) otherIn.value = '';
      showDropdown(true);
    });
    syncFromSelect();
  }
  bindProfessorOtherSwap('f_professor');
  bindProfessorOtherSwap('rq_professor');
  bindProfessorOtherSwap('vs_professor');
  bindRoomOtherSwap('f_room');
  bindRoomOtherSwap('vs_room');
  if (state.modal?.type === 'newRequest') {
    queueMicrotask(() => {
      if (currentRequestFormStep() === 2) {
        (document.getElementById('rq_professor') || document.getElementById('rq_to_dept'))?.focus({ preventScroll: true });
      } else {
        document.getElementById('rq_reason')?.focus({ preventScroll: true });
      }
      refreshRequestSetLabUi();
      refreshRequestFormProfessorOptions();
    });
  }
  if (state.modal?.type === 'editSystemAccount') {
    queueMicrotask(() => {
      let roleEl = document.getElementById('acct_edit_role');
      if (roleEl) roleEl.onchange = syncSystemAccountDeptFieldUi;
      syncSystemAccountDeptFieldUi();
      document.getElementById('acct_edit_name')?.focus({ preventScroll: true });
    });
  }
  function syncRequestFormSectionAndSubject() {
    let deptId = state.currentUser?.dept;
    let year = document.getElementById('rq_year')?.value || '';
    let sem = document.getElementById('rq_sem')?.value || '';
    let secEl = document.getElementById('rq_section');
    let subEl = document.getElementById('rq_subject');
    if (secEl) {
      let prevSec = (secEl.value || '').trim();
      let sections = sectionOptionsForDeptYear([deptId], year);
      let secStillValid = sections.some(s => String(s) === prevSec);
      let secOpts = sections
        .map(s => `<option value="${escapeHtml(s)}" ${String(prevSec) === String(s) ? 'selected' : ''}>${escapeHtml(s)}</option>`)
        .join('');
      let secLegacy =
        prevSec && !secStillValid
          ? `<option value="${escapeHtml(prevSec)}" selected>${escapeHtml(prevSec)}</option>`
          : '';
      secEl.innerHTML = `<option value="">Select section...</option>${secOpts}${secLegacy}`;
    }
    if (subEl) {
      let prevSub = (subEl.value || '').trim();
      let ay = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
      let subjects = year && sem ? subjectsForCreateScheduleSlot(deptId, year, sem, ay) : [];
      let subOpts = subjects
        .map(s => `<option value="${escapeHtml(s.id)}" ${prevSub === s.id ? 'selected' : ''}>${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`)
        .join('');
      let subLegacy =
        prevSub && !subjects.some(s => s.id === prevSub)
          ? (() => {
              let sx = getSubject(prevSub);
              return sx
                ? `<option value="${escapeHtml(prevSub)}" selected>${escapeHtml(sx.code)} — ${escapeHtml(sx.name)}</option>`
                : '';
            })()
          : '';
      subEl.innerHTML = `<option value="">Select subject...</option>${subOpts}${subLegacy}`;
    }
    refreshRequestSetLabUi();
    refreshRequestFormProfessorOptions();
  }
  document.getElementById('rq_year')?.addEventListener('change', syncRequestFormSectionAndSubject);
  document.getElementById('rq_sem')?.addEventListener('change', syncRequestFormSectionAndSubject);
  document.getElementById('rq_subject')?.addEventListener('change', refreshRequestSetLabUi);
  document.getElementById('vs_year')?.addEventListener('change', e => {
    let year = e.target?.value || '';
    let deptId = document.getElementById('vs_dept')?.value || state.currentUser?.dept;
    let secEl = document.getElementById('vs_section');
    if (!secEl || !deptId) return;
    let selected = secEl.value;
    let sections = sectionOptionsForDeptYear([deptId], year);
    let opts = sections.map(s => `<option value="${escapeHtml(s)}" ${selected === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
    let legacy = selected && !sections.includes(selected) ? `<option value="${escapeHtml(selected)}" selected>${escapeHtml(selected)}</option>` : '';
    secEl.innerHTML = `<option value="">Select section...</option>${opts}${legacy}`;
    let sem = document.getElementById('vs_sem')?.value || '';
    let ay = normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    let subEl = document.getElementById('vs_subject');
    if (subEl) {
      let subjects = year && sem ? subjectsForCreateScheduleSlot(deptId, year, sem, ay) : [];
      let subOpts = subjects.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
      subEl.innerHTML = `<option value="">Select subject</option>${subOpts}`;
    }
    refreshViewScheduleSetLabUi();
  });
  document.getElementById('vs_sem')?.addEventListener('change', () => {
    let year = document.getElementById('vs_year')?.value || '';
    let sem = document.getElementById('vs_sem')?.value || '';
    let ay = normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    let deptId = document.getElementById('vs_dept')?.value || state.currentUser?.dept;
    let subEl = document.getElementById('vs_subject');
    if (!subEl || !deptId) return;
    let subjects = year && sem ? subjectsForCreateScheduleSlot(deptId, year, sem, ay) : [];
    let subOpts = subjects.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
    subEl.innerHTML = `<option value="">Select subject</option>${subOpts}`;
    refreshViewScheduleSetLabUi();
  });
  document.getElementById('vs_ay')?.addEventListener('change', () => {
    let year = document.getElementById('vs_year')?.value || '';
    let sem = document.getElementById('vs_sem')?.value || '';
    let ay = normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    let deptId = document.getElementById('vs_dept')?.value || state.currentUser?.dept;
    let subEl = document.getElementById('vs_subject');
    if (!subEl || !deptId) return;
    let subjects = year && sem ? subjectsForCreateScheduleSlot(deptId, year, sem, ay) : [];
    let subOpts = subjects.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
    subEl.innerHTML = `<option value="">Select subject</option>${subOpts}`;
    refreshViewScheduleSetLabUi();
  });
  document.getElementById('vs_subject')?.addEventListener('change', refreshViewScheduleSetLabUi);
  if (state.modal?.type === 'addSchedule') {
    initCreateScheduleCurriculumCascade();
    queueMicrotask(() => {
      refreshCreateScheduleSetLabUi();
      refreshCreateScheduleProfessorOptions();
    });
  }
  if (state.modal?.type === 'viewSchedule' && state.modal.viewScheduleMode === 'edit') {
    queueMicrotask(() => {
      refreshViewScheduleSetLabUi();
      refreshViewScheduleProfessorOptions();
    });
  }
  document.getElementById('modalBackdrop')?.addEventListener('change', e => {
    let id = e.target?.id || '';
    if (!id) return;
    if (state.modal?.type === 'addSchedule') {
      if (id === 'f_timeStart' || id === 'f_timeEnd' || id === 'f_sem' || id === 'f_ay' || id.startsWith('day_')) {
        refreshCreateScheduleProfessorOptions();
      }
    }
    if (state.modal?.type === 'viewSchedule' && state.modal.viewScheduleMode === 'edit') {
      if (id === 'vs_timeStart' || id === 'vs_timeEnd' || id === 'vs_sem' || id.startsWith('vsday_')) {
        refreshViewScheduleProfessorOptions();
      }
    }
    if (state.modal?.type === 'newRequest' && currentRequestFormStep() === 2) {
      if (id === 'rq_timeStart' || id === 'rq_timeEnd' || id === 'rq_sem' || id.startsWith('rqday_')) {
        refreshRequestFormProfessorOptions();
      }
    }
  });
}

function showToast(msg){state.toast=msg;render();setTimeout(()=>{state.toast=null;render();},3000);}

const MSG_FORM_INCOMPLETE = 'Complete all fields before Submitting Request';
const MSG_CONFIRM_SCHEDULE_OR_REQUEST_SAVE = 'Save to the database? Confirm all fields are correct — this will create or update stored records.';
const MSG_CONFIRM_LOGOUT = 'Log out now? Unsaved changes in open forms will be lost.';
const MSG_CONFIRM_SAVE_SUBJECT = 'Save this subject to the database? Changes apply for scheduling and requests.';
const MSG_CONFIRM_SAVE_PROFESSOR = 'Save this professor to the database?';
const MSG_CONFIRM_SAVE_CURRICULUM_NEW = 'Add this new curriculum row to the database?\n\nClick OK to save, or Cancel to go back without saving.';
const MSG_CONFIRM_SAVE_CURRICULUM_EDIT = 'Update this curriculum row in the database? Existing values will be replaced.\n\nClick OK to save, or Cancel to go back without saving.';
const MSG_CONFIRM_PERM_DELETE_SCHEDULE = 'Permanently delete this schedule? This cannot be undone.';
const MSG_CONFIRM_PERM_DELETE_CURRICULUM = 'Permanently delete this curriculum entry? This cannot be undone.';
const MSG_CONFIRM_PERM_DELETE_PROFESSOR = 'Permanently delete this professor? This cannot be undone.';
const MSG_CONFIRM_SAVE_ROOM_NEW = 'Save this room? It will be available for scheduling and room lists.';
const MSG_CONFIRM_SAVE_ROOM_EDIT = 'Update this room? Existing name, type, or department will be replaced where stored.';
const MSG_CONFIRM_PERM_DELETE_ROOM = 'Permanently delete this room? This cannot be undone.';

function showFormValidationBanner(containerId, message) {
  let box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = `<div class="alert form-validation-alert" role="alert">${icon('alertTriangle', 18)}<span class="form-validation-alert-text">${escapeHtml(message)}</span></div>`;
}

function paintBootScreen() {
  let app = document.getElementById('app');
  if (!app) return;
  let isDark = document.documentElement.dataset.theme === 'dark';
  // Prevent plain white flash before CSS/render settles.
  document.body.style.background = isDark ? '#0f1016' : '#f4f4f7';
  document.body.style.color = isDark ? '#ececf4' : '#1a1a2e';
  app.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;">
      <div style="display:flex;align-items:center;gap:10px;font-family:var(--font, sans-serif);font-size:14px;color:${isDark ? '#ececf4' : '#1a1a2e'};">
        <span style="width:14px;height:14px;border:2px solid ${isDark ? 'rgba(236,236,244,.35)' : 'rgba(26,26,46,.25)'};border-top-color:${isDark ? '#ececf4' : '#7f1919'};border-radius:50%;display:inline-block;animation:cenBootSpin .8s linear infinite;"></span>
        <span>Loading CEN Timetable...</span>
      </div>
    </div>
  `;
  if (!document.getElementById('cen-boot-style')) {
    let style = document.createElement('style');
    style.id = 'cen-boot-style';
    style.textContent = '@keyframes cenBootSpin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
  }
}

// Init
initAppTheme();
paintBootScreen();
state.page = resolveInitialPage();
forceRootUrlInAddressBar();
if (sessionStorage.getItem('cen_user') && hasSupabaseClient()) {
  syncCoreDataFromSupabase().finally(() => {
    render();
  });
} else {
  render();
}