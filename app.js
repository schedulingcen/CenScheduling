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
const PAGE_TO_HTML = {
  dashboard: 'dashboard.html',
  schedule: 'schedule.html',
  requests: 'request.html',
  curriculum: 'curriculum.html',
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
const SCHEDULE_FORM_SEMS = ['1st Semester', '2nd Semester'];
/** Semester ordering for schedule cascade & curriculum rows that still use Midyear in data. */
const CURRICULUM_FORM_SEMS = ['1st Semester', '2nd Semester', 'Midyear'];
/** Curriculum page semester dropdowns (filters + Add Subject modal) — 1st / 2nd only. */
const CURRICULUM_PAGE_SEMS = ['1st Semester', '2nd Semester'];
const DEFAULT_ACADEMIC_YEAR = '2025-2026';
const TERM_AY_OTHER_VALUE = '__other__';
/** Top-of-page context shown on Schedule/Curriculum and used for page-level semester filtering. */
const TERM_HEADER_SEMS = ['1st Semester', '2nd Semester'];
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
  return String(sem || '').toUpperCase();
}
function termHeaderTitle(sem, ay) {
  let s = termSemesterDisplayLabel(sem || '1st Semester');
  let a = normalizeAcademicYearInput(ay) || '____-____';
  return `${s} A.Y ${a}`;
}
function termAcademicYearOptions() {
  let m = String(DEFAULT_ACADEMIC_YEAR).match(/^(\d{4})-(\d{4})$/);
  let start = m ? Number(m[1]) : new Date().getFullYear();
  let years = [];
  for (let y = start; y <= start + 8; y++) years.push(`${y}-${y + 1}`);
  years.sort((a, b) => String(a).localeCompare(String(b)));
  return years;
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
function scheduleAcademicYearForFilter(s) {
  return normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR;
}
function curriculumHistoryAcademicYearOptions(rows, selectedAy) {
  let set = new Set([normalizeAcademicYearInput(selectedAy) || DEFAULT_ACADEMIC_YEAR]);
  for (let s of rows) set.add(scheduleAcademicYearForFilter(s));
  return [...set].filter(Boolean).sort((a, b) => String(b).localeCompare(String(a)));
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
function renderTopbarCenter() {
  if (state.page === 'curriculum') {
    let u = state.currentUser;
    let deptName = u?.dept ? (getDept(u.dept)?.name || '') : '';
    let title = deptName ? `Curriculum of ${deptName}` : 'Curriculum';
    let yearOpts = SCHEDULE_FORM_YEARS.map(y => {
      let label = y === '1st Year' ? 'First Year' : y;
      return `<option value="${escapeHtml(y)}" ${state.curriculumYearFilter === y ? 'selected' : ''}>${escapeHtml(label)}</option>`;
    }).join('');
    return `<div class="curriculum-topbar-left"><div class="page-title page-title-curriculum-left">${escapeHtml(title)}</div><select class="filter-select curriculum-topbar-year" id="topbarCurriculumYearFilter" aria-label="Year filter">${yearOpts}</select></div>`;
  }
  let termPages = ['schedule', 'curriculum', 'requests', 'dashboard'];
  if (!termPages.includes(state.page)) {
    return `<div class="page-title">${getPageTitle()}</div>`;
  }
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
  let dashClass = state.page === 'dashboard' ? ' topbar-term-dashboard' : '';
  return `<div class="topbar-term-center${dashClass}"><div class="topbar-term-title">${escapeHtml(termHeaderTitle(sem, ay))}</div><div class="topbar-term-controls"><select class="filter-select topbar-term-select" id="topbarTermSemester" aria-label="Semester">${semOptions}</select>${ayControl}${ayPresetList}</div></div>`;
}

/** Request a room modal: optional reason dropdown (stored on request as `reason`). */
const REQUEST_ROOM_REASON_CHOICES = [
  'Room Shortage: Requesting a room from another department',
  'Teaching Assignment: Professor is from another department',
];

/** Append catalog rows from data.js that are not yet in arr (by id). */
function mergeMissingCurriculumRowsInto(arr) {
  if (typeof CURRICULUM_DATA === 'undefined' || !Array.isArray(CURRICULUM_DATA)) return;
  let seen = new Set(arr.map(c => c && c.id).filter(Boolean));
  for (let b of CURRICULUM_DATA) {
    if (b && b.id && !seen.has(b.id)) {
      arr.push({ ...b });
      seen.add(b.id);
    }
  }
}

/** Only department chairs may add, edit, or delete curriculum rows (CEN Dean is view-only on Curriculum). */
function canUserMutateCurriculum(u) {
  return !!(u && u.role === 'chairperson');
}

function curriculumFilterDept(c) {
  let d = c.dept;
  if (d) return d;
  return CURRICULUM_DATA?.find(b => b.id === c.id)?.dept;
}
function curriculumFilterYear(c) {
  let y = (c.year || '').trim();
  if (y) return y;
  return (CURRICULUM_DATA?.find(b => b.id === c.id)?.year || '').trim();
}
function curriculumFilterSemester(c) {
  let s = (c.semester || '').trim();
  if (s) return s;
  return (CURRICULUM_DATA?.find(b => b.id === c.id)?.semester || '').trim();
}

function pageHref(pageId) {
  return PAGE_TO_HTML[pageId] || 'dashboard.html';
}

function resolveInitialPage() {
  const allowed = ['dashboard', 'schedule', 'requests', 'curriculum', 'faculty', 'accounts', 'account'];
  if (typeof window.CEN_PAGE === 'string' && allowed.includes(window.CEN_PAGE)) return window.CEN_PAGE;
  const file = (location.pathname.split('/').pop() || '').toLowerCase();
  return HTML_TO_PAGE[file] || 'dashboard';
}

function hydratePersistedData() {
  const raw = sessionStorage.getItem(CEN_STATE_KEY);
  if (!raw) return;
  try {
    const o = JSON.parse(raw);
    if (Array.isArray(o.professors)) state.professors = o.professors;
    if (Array.isArray(o.subjects)) state.subjects = o.subjects;
    if (Array.isArray(o.schedules)) state.schedules = o.schedules;
    if (Array.isArray(o.requests)) state.requests = o.requests;
    if (typeof o.nextId === 'number') nextId = o.nextId;
    if (o.filterMode) state.filterMode = o.filterMode;
    if (o.filterDept != null) state.filterDept = o.filterDept;
    if (o.filterSection != null) state.filterSection = o.filterSection;
    if (o.filterFaculty != null) state.filterFaculty = o.filterFaculty;
    if (o.filterRoom != null) state.filterRoom = o.filterRoom;
    if (Array.isArray(o.curriculum)) {
      let bundleById = {};
      if (typeof CURRICULUM_DATA !== 'undefined' && Array.isArray(CURRICULUM_DATA)) {
        for (let b of CURRICULUM_DATA) {
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
        };
      });
      mergeMissingCurriculumRowsInto(merged);
      state.curriculum = merged;
    }
    if (o.curriculumDeptFilter != null) state.curriculumDeptFilter = o.curriculumDeptFilter;
    if (o.curriculumYearFilter != null) state.curriculumYearFilter = o.curriculumYearFilter;
    if (o.curriculumSemFilter != null) state.curriculumSemFilter = o.curriculumSemFilter;
    if (state.curriculumSemFilter === 'Midyear') state.curriculumSemFilter = 'all';
    if (o.termSemester != null) state.termSemester = o.termSemester;
    if (o.termAcademicYear != null) state.termAcademicYear = o.termAcademicYear;
    if (o.termAcademicYearCustom != null) state.termAcademicYearCustom = o.termAcademicYearCustom;
    if (o.termAcademicYearIsCustom != null) state.termAcademicYearIsCustom = !!o.termAcademicYearIsCustom;
    if (o.termAcademicYearEditingOther != null) state.termAcademicYearEditingOther = !!o.termAcademicYearEditingOther;
    if (Array.isArray(o.termAcademicYearCustomOptions)) state.termAcademicYearCustomOptions = o.termAcademicYearCustomOptions.map(normalizeAcademicYearInput).filter(Boolean);
    state.termAcademicYear = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    if (o.requestTimetableDept != null) state.requestTimetableDept = o.requestTimetableDept;
    if (o.requestTimetableRoom != null) state.requestTimetableRoom = o.requestTimetableRoom;
    if (o.curriculumHistoryAyFilter != null) state.curriculumHistoryAyFilter = o.curriculumHistoryAyFilter;
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
      curriculumSemFilter: state.curriculumSemFilter,
      termSemester: state.termSemester,
      termAcademicYear: state.termAcademicYear,
      termAcademicYearCustom: state.termAcademicYearCustom,
      termAcademicYearIsCustom: state.termAcademicYearIsCustom,
      termAcademicYearEditingOther: state.termAcademicYearEditingOther,
      termAcademicYearCustomOptions: state.termAcademicYearCustomOptions,
      requestTimetableDept: state.requestTimetableDept,
      requestTimetableRoom: state.requestTimetableRoom,
      curriculumHistoryAyFilter: state.curriculumHistoryAyFilter,
    })
  );
}

// State
let state = {
  loggedIn: false,
  currentUser: null,
  page: 'dashboard',
  sidebarOpen: false,
  modal: null,
  toast: null,
  filterMode: 'department',
  filterDept: 'ie',
  filterSection: '',
  filterFaculty: '',
  filterRoom: '',
  professors: [...PROFESSORS_DATA],
  subjects: [...SUBJECTS_DATA],
  rooms: [...ROOMS],
  schedules: [...SCHEDULES],
  requests: [...REQUESTS],
  curriculum: [...CURRICULUM_DATA],
  curriculumDeptFilter: 'all',
  curriculumYearFilter: '1st Year',
  curriculumSemFilter: 'all',
  termSemester: '1st Semester',
  termAcademicYear: DEFAULT_ACADEMIC_YEAR,
  termAcademicYearCustom: '',
  termAcademicYearIsCustom: false,
  termAcademicYearEditingOther: false,
  termAcademicYearCustomOptions: [],
  requestTimetableDept: 'ie',
  requestTimetableRoom: '',
  curriculumHistoryAyFilter: DEFAULT_ACADEMIC_YEAR,
};
let nextId = 100;
const genId = () => `id_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;

function hasSupabaseClient() {
  return !!(window.cenSupabaseReady && window.cenSupabase);
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
function normalizeProfessorFromDb(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    short: row.short || '',
    dept: row.dept_id || row.dept,
    active: row.active !== false,
  };
}
function normalizeProfessorToDb(prof) {
  return {
    id: prof.id,
    name: prof.name,
    short: prof.short || '',
    dept_id: prof.dept,
    active: prof.active !== false,
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
    courseName: row.course_name || row.courseName || row.subject_name || row.subjectName || '',
    subjectCode: row.subject_code || row.subjectCode || '',
    section: row.section || '',
    academicYear: normalizeAcademicYearInput(row.academic_year || row.academicYear) || DEFAULT_ACADEMIC_YEAR,
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
    subject_code: row.subjectCode || '',
    section: row.section || '',
    academic_year: normalizeAcademicYearInput(row.academicYear) || DEFAULT_ACADEMIC_YEAR,
  };
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
    days: Array.isArray(row.days) ? row.days : [],
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
  if (!res.error || !isSupabaseMissingColumnError(res.error, 'academic_year')) return res;
  let fallback = payload.map(({ academic_year, ...rest }) => rest);
  return window.cenSupabase.from('curriculum').upsert(fallback, { onConflict: 'id' });
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
    days: Array.isArray(row.days) ? row.days : [],
    timeStart: row.time_start,
    timeEnd: row.time_end,
    schYear: row.sch_year || '',
    schSem: row.sch_sem || '',
    setLabel: row.set_label || null,
    labLabel: row.lab_label || null,
    reason: row.reason || '',
    status: row.status || 'pending',
    created: row.created || null,
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
    set_label: req.setLabel || null,
    lab_label: req.labLabel || null,
    reason: req.reason || '',
    status: req.status || 'pending',
    created: req.created || null,
  };
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
    state.curriculum = Array.isArray(curriculumRes.data) ? curriculumRes.data.map(normalizeCurriculumFromDb).filter(Boolean) : [];
    // Re-upsert bundled `CURRICULUM_DATA` rows missing from DB (accidental deletes).
    let curriculumIdsFromDb = new Set(state.curriculum.map(c => c.id).filter(Boolean));
    mergeMissingCurriculumRowsInto(state.curriculum);
    let bundleBackedIds = new Set();
    if (typeof CURRICULUM_DATA !== 'undefined' && Array.isArray(CURRICULUM_DATA)) {
      for (let b of CURRICULUM_DATA) {
        if (b && b.id) bundleBackedIds.add(b.id);
      }
    }
    let curriculumRepairRows = state.curriculum.filter(c => c && c.id && bundleBackedIds.has(c.id) && !curriculumIdsFromDb.has(c.id));
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
    let roomsToRepair = bundleRooms.filter(br => br && br.id && !dbRoomIds.has(br.id));
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
  if (!hasSupabaseClient()) {
    return dropRetired(bundle);
  }
  let fromDb = Array.isArray(state.rooms) ? state.rooms : [];
  if (fromDb.length === 0) {
    return dropRetired(bundle);
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
  return dropRetired(merged);
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
  if (!otherTxt || !Array.isArray(candidateRooms) || candidateRooms.length === 0) {
    return { roomId: ROOM_OTHER_ID, roomOtherName: otherTxt || null };
  }
  let norm = otherTxt.toLowerCase();
  let matches = candidateRooms.filter(r => (r.name || '').trim().toLowerCase() === norm);
  if (matches.length === 1) {
    return { roomId: matches[0].id, roomOtherName: null };
  }
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
function getRoom(id) {
  let source = roomsSourceForApp();
  let room = source.find(r => r.id === id);
  if (room) return room;
  return ROOMS.find(r => r.id === id);
}
function getDept(id) { return DEPARTMENTS.find(d=>d.id===id); }
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
/** Required Hours from Lec/Lab units (Lab = 3 hours per lab unit). */
function curriculumRequiredHours(c) {
  let lec = Number(c.lecUnits);
  let lab = Number(c.labUnits);
  let lecH = Number.isFinite(lec) ? lec : 0;
  let labH = Number.isFinite(lab) ? lab * 3 : 0;
  if (lecH > 0 || labH > 0) return escapeHtml(String(lecH + labH));
  let total = Number(c.units);
  if (Number.isFinite(total) && total > 0) return escapeHtml(String(total));
  return '—';
}
function fmt12(t) { let [h,m]=t.split(':').map(Number); return `${h%12||12}:${String(m).padStart(2,'0')} ${h>=12?'PM':'AM'}`; }
/** Display slot start as 7:30, 8:00, … (every row of the timetable time column). */
function fmtSlot24(t) { let [h,m]=t.split(':').map(Number); return `${h}:${String(m).padStart(2,'0')}`; }
function slotEndFromRow(row) {
  if (row + 1 < timeSlots.length) return timeSlots[row + 1];
  let [h, m] = timeSlots[row].split(':').map(Number);
  let total = h * 60 + m + 30;
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}
function timeRangesOverlap(aStart, aEnd, bStart, bEnd) { return aStart < bEnd && aEnd > bStart; }
function scheduleRoomOccupancyKey(s) {
  if (!s) return '';
  if (s.roomId === ROOM_OTHER_ID) {
    let t = (s.roomOtherName || '').trim().toLowerCase();
    return t ? `other:${t}` : '';
  }
  if (s.roomId != null && s.roomId !== '') return `id:${s.roomId}`;
  let t = (s.roomOtherName || '').trim().toLowerCase();
  return t ? `other:${t}` : '';
}
function roomsBookSameSpace(a, b) {
  let ka = scheduleRoomOccupancyKey(a);
  let kb = scheduleRoomOccupancyKey(b);
  return ka !== '' && ka === kb;
}
/** Timetable "By Room": include rows for this room id or any catalog room with the same name (shared physical space across programs). */
function scheduleMatchesRoomFilter(s, filterRoomId) {
  if (!s || filterRoomId == null || filterRoomId === '' || filterRoomId === ROOM_OTHER_ID) return false;
  if (s.roomId === filterRoomId) return true;
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
function mergeSectionOptions(deptIds) {
  const ids = Array.isArray(deptIds) ? deptIds : [deptIds];
  const fromSched = [...new Set(state.schedules.filter(s => ids.includes(s.dept)).map(s => String(s.section)))];
  const samples = [];
  ids.forEach(id => { const arr = SECTION_SAMPLES_BY_DEPT[id]; if (arr) samples.push(...arr); });
  return [...new Set([...fromSched, ...samples])].sort((a, b) => String(a).localeCompare(String(b)));
}
function sectionYearFromLabel(sectionLabel) {
  let token = String(sectionLabel || '').trim().split(/\s+/)[1] || '';
  token = token.toUpperCase();
  if (token.startsWith('IV')) return '4th Year';
  if (token.startsWith('III')) return '3rd Year';
  if (token.startsWith('II')) return '2nd Year';
  if (token.startsWith('I')) return '1st Year';
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
  let dept = s.dept;
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
  let all = mergeSectionOptions(deptIds);
  if (!yearLabel) return all;
  return all.filter(s => sectionYearFromLabel(s) === yearLabel);
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
/** All normalized codes that should match a curriculum or subject code within `dept`. */
function expandNormalizedCodesForDept(dept, normCode) {
  let expanded = new Set([normCode]);
  for (let g of subjectCodeEquivalenceSetsForDept(dept)) {
    let gn = g.map(normalizeSubjectCode);
    if (gn.some(x => x === normCode)) for (let x of gn) expanded.add(x);
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
    let y = (r.year || '').trim();
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
    let s = (r.semester || '').trim();
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
  let forYear = rows.filter(r => (r.year || '').trim() === year);
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
function subjectsForCreateScheduleSlot(dept, year, sem, ay) {
  let rows = curriculumRowsForDept(dept);
  let ayNorm = normalizeAcademicYearInput(ay) || DEFAULT_ACADEMIC_YEAR;
  let forSlot = rows.filter(r =>
    (r.year || '').trim() === year &&
    (r.semester || '').trim() === sem &&
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
  for (let r of forSlot) {
    let c = curriculumCodeFromRow(r);
    let sub = findSubjectForCurriculumCode(c);
    if (sub && !seenId.has(sub.id)) {
      seenId.add(sub.id);
      out.push(sub);
    }
  }
  return out;
}
function subjectAllowedByCurriculum(dept, year, sem, subjectId, ay) {
  if (!dept || !year || !sem || !subjectId) return false;
  return subjectsForCreateScheduleSlot(dept, year, sem, ay).some(s => s.id === subjectId);
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
/** Populate Year → Semester → Subject from curriculum (DOM-only; Create Schedule modal). */
function initCreateScheduleCurriculumCascade() {
  let yEl = document.getElementById('f_year');
  let sEl = document.getElementById('f_sem');
  let ayEl = document.getElementById('f_ay');
  let subEl = document.getElementById('f_subject');
  let secEl = document.getElementById('f_section');
  let deptEl = document.getElementById('f_schedule_dept');
  if (!yEl || !sEl || !subEl || !secEl) return;

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
    let opts = sections.map(sec => `<option value="${escapeHtml(sec)}" ${selectedSection === sec ? 'selected' : ''}>${escapeHtml(sec)}</option>`).join('');
    secEl.innerHTML = '<option value="">Select section...</option>' + opts;
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
      return;
    }
    yEl.disabled = false;
    sEl.disabled = false;
    subEl.disabled = false;
    secEl.disabled = false;
    let years = yearsOptionsForDept(d);
    fillYearSelect(years, '');
    fillSemSelect([], '');
    fillSubjectSelect([], '');
    fillSectionSelect(sectionOptionsForDeptYear([d], ''), '');
  }

  rebuildAll();

  yEl.addEventListener('change', () => {
    let d = getCreateScheduleDeptForCascade();
    if (!d) return;
    let y = yEl.value;
    if (!y) {
      fillSemSelect([], '');
      fillSubjectSelect([], '');
      fillSectionSelect(sectionOptionsForDeptYear([d], ''), '');
      return;
    }
    let sems = semsForDeptYear(d, y);
    fillSemSelect(sems, '');
    fillSubjectSelect([], '');
    fillSectionSelect(sectionOptionsForDeptYear([d], y), '');
  });

  sEl.addEventListener('change', () => {
    let d = getCreateScheduleDeptForCascade();
    let y = yEl.value;
    let sem = sEl.value;
    if (!d || !y || !sem) {
      fillSubjectSelect([], '');
      return;
    }
    let ay = normalizeAcademicYearInput(ayEl?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    fillSubjectSelect(subjectsForCreateScheduleSlot(d, y, sem, ay), '');
  });
  ayEl?.addEventListener('change', () => {
    let d = getCreateScheduleDeptForCascade();
    let y = yEl.value;
    let sem = sEl.value;
    if (!d || !y || !sem) {
      fillSubjectSelect([], '');
      return;
    }
    let ay = normalizeAcademicYearInput(ayEl.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    fillSubjectSelect(subjectsForCreateScheduleSlot(d, y, sem, ay), '');
  });
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
function timeToRow(t) { let [h,m]=t.split(':').map(Number); return Math.floor(((h*60+m)-(7*60+30))/30); }
function timeDuration(s,e) { let [sh,sm]=s.split(':').map(Number), [eh,em]=e.split(':').map(Number); return ((eh*60+em)-(sh*60+sm))/30; }
function pendingRequestsForUser() {
  let u = state.currentUser;
  if (!u) return 0;
  if (u.role === 'admin') return 0;
  let term = currentTermFilter();
  return state.requests.filter(r => r.toDept === u.dept && r.status === 'pending' && requestMatchesCurrentTerm(r, term)).length;
}

function checkConflicts(entry, excludeId=null) {
  let conflicts=[];
  let scheds=state.schedules.filter(s=>s.id!==excludeId);
  let timeOverlap=(as,ae,bs,be)=>as<be&&ae>bs;
  for(let s of scheds){
    if(!s.days.some(d=>entry.days.includes(d))) continue;
    if(!timeOverlap(entry.timeStart,entry.timeEnd,s.timeStart,s.timeEnd)) continue;
    if(scheduleProfessorsOverlap(s, entry)){
      let label = professorDisplayLineFromPick(entry.professorId, entry.professorOtherName);
      conflicts.push(`Professor ${label} has class on ${s.days.join('/')} ${fmt12(s.timeStart)}–${fmt12(s.timeEnd)}`);
    }
    if (roomsBookSameSpace(s, entry)) {
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
    let entry = {
      professorId: s.professorId,
      professorOtherName: s.professorOtherName,
      roomId: s.roomId,
      roomOtherName: s.roomOtherName,
      dept: s.dept,
      section: s.section,
      days: s.days,
      timeStart: s.timeStart,
      timeEnd: s.timeEnd,
    };
    if (checkConflicts(entry, s.id).length) n++;
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
  };
}

/** Overlapping schedule rows for `scheduleRow`, each with human-readable reasons (same rules as checkConflicts). */
function getConflictPairsForSchedule(scheduleRow) {
  let entry = scheduleEntryForConflictCheck(scheduleRow);
  let excludeId = scheduleRow.id;
  let pairs = [];
  for (let other of state.schedules) {
    if (other.id === excludeId) continue;
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
  let pool = u.role === 'admin' ? state.schedules : state.schedules.filter(s => s.dept === u.dept);
  return pool.filter(s => scheduleMatchesCurrentTerm(s, term));
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
  if (!cenHydratedThisLoad) {
    if (!hasSupabaseClient()) {
      hydratePersistedData();
      mergeDefaultRequestsIntoState();
    }
    cenHydratedThisLoad = true;
  }
  app.innerHTML=`
    <div class="app">
      <div class="sidebar ${state.sidebarOpen?'open':''}" id="sidebar">${renderSidebar()}</div>
      <div class="overlay ${state.sidebarOpen?'show':''}" id="overlay"></div>
      <div class="main">
        <div class="topbar"><span class="hamburger" id="hamburger" role="button" tabindex="0" aria-label="Open menu">${icon('menu', 22)}</span>${renderTopbarCenter()}<div class="topbar-actions"><button type="button" class="btn btn-outline btn-sm theme-toggle" id="themeToggleBtn" aria-label="${document.documentElement.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}">${document.documentElement.dataset.theme === 'dark' ? icon('sun', 18) : icon('moon', 18)}</button>${state.page==='schedule'&&state.currentUser?.role!=='admin'?`<button class="btn btn-primary btn-sm" id="addSchedBtn">${icon('plus', 16)} Add Schedule</button>`:''}${state.page==='curriculum'&&state.currentUser?.role==='chairperson'?`<button type="button" class="btn btn-primary btn-sm" id="addCurriculumBtn">${icon('plus', 16)} Add Subject</button>`:''}${state.page==='requests'&&state.currentUser?.role==='chairperson'?`<button class="btn btn-primary btn-sm" id="requestRoomTopBtn">${icon('plus', 16)} Request a Room</button>`:''}</div></div>
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
  let titles={dashboard:'Dashboard',schedule:'Timetable Schedule',requests:'Room Requests',curriculum:'Curriculum',faculty:'Faculty',accounts:'Accounts',account:'My Account'};
  return titles[state.page]||'Dashboard';
}

function renderSidebar() {
  let u = state.currentUser;
  let pendingIn = pendingRequestsForUser();
  let nav = (id, icn, label, extra = '') =>
    `<a href="${pageHref(id)}" class="nav-item ${state.page === id ? 'active' : ''}" ${id === 'requests' && pendingIn && (u?.role === 'chairperson' || u?.role === 'admin') ? `title="${pendingIn} pending room request(s)"` : ''}><span class="nav-icon">${icon(icn, 18)}</span>${label}${extra}</a>`;
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
      <div class="nav-section-label" style="margin-top:8px">Manage</div>
      ${(u.role==='admin'||u.role==='chairperson')?nav('curriculum','book','Curriculum'):''}
      ${u.role==='admin'?nav('faculty','users','Faculty'):''}
      ${u.role==='admin'?nav('accounts','settings','Accounts'):''}
      ${u.role==='chairperson'?nav('account','user','My Account'):''}
    </div>
    <div class="sidebar-user"><div class="user-avatar">${u.initials}</div><div class="user-info"><div class="user-name">${u.name.split(' ').slice(0,3).join(' ')}</div><div class="user-role">${u.role==='admin'?'CEN Dean':getDept(u.dept)?.code+' Chair'||''}</div></div><span class="logout-btn" id="logoutBtn" role="button" tabindex="0" title="Log out" aria-label="Log out">${icon('logOut', 18)}</span></div>
  `;
}

function renderPage() {
  switch(state.page){
    case 'dashboard': return renderDashboard();
    case 'schedule': return renderSchedulePage();
    case 'requests': return renderRequests();
    case 'curriculum': return renderCurriculum();
    case 'faculty': return renderFaculty();
    case 'accounts': return renderAccounts();
    case 'account': return renderMyAccount();
    default: return renderDashboard();
  }
}

function renderDashboard() {
  let u = state.currentUser;
  let term = currentTermFilter();
  let myScheds = (u.role === 'admin' ? state.schedules : state.schedules.filter(s => s.dept === u.dept))
    .filter(s => scheduleMatchesCurrentTerm(s, term));
  let schedsForConflicts = myScheds;
  let conflictCount = countSchedulesWithConflicts(schedsForConflicts);
  let roomCount = ROOMS.filter(r => u.role === 'admin' || r.dept === u.dept).length;
  let pendingCount = u.role === 'admin'
    ? 0
    : state.requests.filter(r => r.status === 'pending' && r.toDept === u.dept && requestMatchesCurrentTerm(r, term)).length;
  let statIc = 'stat-icon dashboard-stat-icon';
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
    <div class="card"><div class="card-header"><div class="card-title card-title-with-icon">${icon('calendar', 18)} Recent Schedules</div><a href="${pageHref('schedule')}" class="btn btn-outline btn-sm">View All →</a></div><div class="table-wrap"><table><thead><tr><th>Subject</th><th>Section</th><th>Professor</th><th>Room</th><th>Days</th><th>Time</th></tr></thead><tbody>${myScheds.slice(0,5).map(s=>{let sub=getSubject(s.subjectId);return `<tr><td><strong>${sub?.code}</strong><br><span style="font-size:11px">${sub?.name}</span></td><td>${s.section}</td><td>${escapeHtml(professorDisplayLine(s))}</td><td>${escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName))}</td><td>${s.days.map(d=>d.slice(0,3)).join(',')}</td><td>${fmt12(s.timeStart)}–${fmt12(s.timeEnd)}</td></tr>`;}).join('')}</tbody></table>${myScheds.length===0?'<div class="empty-state">No schedules yet</div>':''}</div></div>
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
  if (state.filterFaculty === 'all' || state.filterFaculty === '' || !profScopeIds.includes(state.filterFaculty)) {
    state.filterFaculty = profScopeIds[0] || state.filterFaculty;
  }

  let sectionScope = (u.role === 'admin' && state.filterMode === 'department')
    ? [state.filterDept]
    : [u.dept];
  let secOpts = mergeSectionOptions(sectionScope);
  if (state.filterSection === 'all' || state.filterSection === '' || !secOpts.includes(state.filterSection)) {
    state.filterSection = secOpts[0] || state.filterSection;
  }
}

function renderSchedulePage() {
  let u = state.currentUser;
  normalizeScheduleFilters();
  let termSem = state.termSemester || '1st Semester';
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let scheds =
    u.role === 'admin' || state.filterMode === 'room'
      ? state.schedules
      : state.schedules.filter(s => s.dept === u.dept);
  scheds = scheds.filter(s =>
    (s.schSem || '').trim() === termSem &&
    (normalizeAcademicYearInput(s.schAy) || DEFAULT_ACADEMIC_YEAR) === termAy,
  );
  if (state.filterMode === 'faculty') scheds = scheds.filter(s => s.professorId === state.filterFaculty);
  else if (state.filterMode === 'room') scheds = scheds.filter(s => scheduleMatchesRoomFilter(s, state.filterRoom));
  else if (state.filterMode === 'department' && u.role === 'admin') {
    scheds = scheds.filter(s => s.dept === state.filterDept && s.section === state.filterSection);
  } else if (state.filterMode === 'section' && u.role === 'chairperson') {
    scheds = scheds.filter(s => s.section === state.filterSection);
  }
  let sectionScope = (u.role === 'admin' && state.filterMode === 'department')
    ? [state.filterDept]
    : [u.dept];
  let sections = mergeSectionOptions(sectionScope);
  let isChair = u.role === 'chairperson';
  let isAdmin = u.role === 'admin';
  let deptOptions = isAdmin ? DEPARTMENTS : DEPARTMENTS.filter(d => d.id === u.dept);
  let profOptions = (isAdmin ? state.professors : state.professors.filter(p => p.dept === u.dept)).slice().sort((a, b) => a.name.localeCompare(b.name));
  let profOptionsForToolbar = isAdmin && state.filterMode === 'faculty' ? profOptions.filter(p => p.dept === state.filterDept) : profOptions;
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
    let facSelect = `<select class="filter-select" id="filterFaculty" aria-label="Faculty">${profOptionsForToolbar.map(p => `<option value="${escapeHtml(p.id)}" ${state.filterFaculty === p.id ? 'selected' : ''}>${escapeHtml(p.name)}${isAdmin ? '' : ` (${escapeHtml(getDept(p.dept)?.code || '')})`}</option>`).join('')}</select>`;
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
      <div class="timetable-scroll" id="printArea"${printRoomTitleAttr}>${renderTimetableGrid(scheds, { cellLayout: scheduleGridCellLayout() })}</div>
    </div>
  `;
}

/** Cell lines for main timetable: By Section / By Dept, By Faculty, By Room. */
function scheduleGridCellLayout() {
  if (state.filterMode === 'faculty') return 'faculty';
  if (state.filterMode === 'room') return 'room';
  return 'section';
}

function buildScheduleCellInnerHtml(s, sub, cellLayout, innerStyleOverride) {
  let roomLine = escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName));
  let subLine = escapeHtml(sub?.code || '—');
  let profLine = escapeHtml(professorDisplayLine(s));
  let sectionLine = escapeHtml(s.section || '—');
  let setLine = s.setLabel ? escapeHtml(s.setLabel) : '';
  let subStyle = innerStyleOverride?.subStyle || 'font-weight: 700; font-size: 12px; color: var(--chip-text-primary);';
  let lineStyle = innerStyleOverride?.lineStyle || 'font-size: 11px; color: var(--chip-text-secondary);';
  let parts = [`<div style="${subStyle}">${subLine}</div>`];
  if (cellLayout === 'faculty') {
    parts.push(`<div style="${lineStyle}">${sectionLine}</div>`);
    if (setLine) parts.push(`<div style="${lineStyle}">${setLine}</div>`);
    parts.push(`<div style="${lineStyle}">${roomLine}</div>`);
  } else if (cellLayout === 'room') {
    parts.push(`<div style="${lineStyle}">${sectionLine}</div>`);
    if (setLine) parts.push(`<div style="${lineStyle}">${setLine}</div>`);
    parts.push(`<div style="${lineStyle}">${profLine}</div>`);
  } else {
    parts.push(`<div style="${lineStyle}">${roomLine}</div>`);
    parts.push(`<div style="${lineStyle}">${profLine}</div>`);
  }
  return parts.join('');
}

function renderTimetableGrid(scheds, gridOpts) {
  gridOpts = gridOpts || {};
  let cellLayout = gridOpts.cellLayout || 'section';
  let requestView = !!gridOpts.requestView;
  let requestCellClick = requestView && gridOpts.requestCellClick !== false;
  let requestBusyClickable = requestView && gridOpts.requestBusyClickable === true;
  let { conflictSinceById, conflictIds } = syncConflictHighlightsAndIds();
  let emptyTitle = requestView
    ? (requestCellClick
      ? (d0, d1) => `Available — click to request a room (${d0}–${d1})`
      : (d0, d1) => `Available (${d0}–${d1})`)
    : (d0, d1) => `Click to add schedule (${d0}–${d1})`;
  // Create a 2D array for the grid (rows x columns)
  const rows = timeSlots.length;
  const cols = DAYS.length;
  
  // Initialize empty grid cells
  let grid = Array(rows).fill().map(() => Array(cols).fill(null));
  
  // Place schedules into grid
  scheds.forEach(s => {
    const startRow = timeToRow(s.timeStart);
    const duration = timeDuration(s.timeStart, s.timeEnd);
    const sub = getSubject(s.subjectId);
    
    s.days.forEach(day => {
      const col = DAYS.indexOf(day);
      if (col >= 0 && startRow >= 0) {
        grid[startRow][col] = { schedule: s, sub, duration };
      }
    });
  });
  
  // Build HTML table (more reliable than CSS Grid for timetable)
  let html = '<table class="timetable-table timetable-schedule" style="width:100%; border-collapse: collapse;">';
  
  // Header row
  html += '<thead><tr>';
  html += '<th class="timetable-time-col timetable-time-col-header">Time</th>';
  DAYS.forEach(day => {
    html += `<th style="padding: 10px; border: 1px solid var(--border-ui); background: var(--table-header-bg);">${day}</th>`;
  });
  html += '</tr></thead><tbody>';
  
  // Time rows (7:30 AM … 7:30 PM — slot starts; timeSlots in data.js)
  for (let row = 0; row < rows; row++) {
    const time = timeSlots[row];
    html += '<tr>';
    html += `<td class="timetable-time-col">${fmt12(time)}</td>`;
    
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      if (cell && row === timeToRow(cell.schedule.timeStart)) {
        const s = cell.schedule;
        const sub = cell.sub;
        const rowspan = cell.duration;
        const chrome = timetableSlotChrome(s, conflictSinceById, conflictIds);
        const bg = chrome.bg;
        const border = chrome.border;
        const bl = chrome.borderLeftWidth || 3;
        let busyTitle = 'Click for details';
        if (chrome.slotKind === 'conflict') busyTitle = 'Conflict — click for details';
        else if (chrome.slotKind === 'request') busyTitle = 'Borrow request — click for details';
        let useClickableBusyCell = !requestView || requestBusyClickable;
        const dataPal = ` data-tt-fill="${escapeHtml(chrome.bg)}" data-tt-border="${escapeHtml(chrome.border)}"`;
        let tdOpen = useClickableBusyCell
          ? `<td rowspan="${rowspan}" data-schedid="${escapeHtml(s.id)}"${dataPal} title="${escapeHtml(busyTitle)}" style="cursor:pointer; padding: 6px; border: 1px solid var(--border-ui); background: ${bg}; border-left: ${bl}px solid ${border}; border-radius: 6px;">`
          : `<td rowspan="${rowspan}" class="timetable-slot-busy"${dataPal} title="" style="cursor:default; padding: 6px; border: 1px solid var(--border-ui); background: ${bg}; border-left: ${bl}px solid ${border}; border-radius: 6px;">`;
        html += tdOpen;
        html += buildScheduleCellInnerHtml(s, sub, cellLayout, chrome.innerStyles);
        html += `</td>`;
      } else if (!cell || row !== timeToRow(cell.schedule.timeStart)) {
        // Skip cells that are part of a rowspan
        let isPartOfRowspan = false;
        for (let r = row - 1; r >= 0 && !isPartOfRowspan; r--) {
          const prevCell = grid[r][col];
          if (prevCell && r + prevCell.duration > row) {
            isPartOfRowspan = true;
          }
        }
        if (!isPartOfRowspan) {
          const dayName = DAYS[col];
          const tStart = timeSlots[row];
          const tEnd = slotEndFromRow(row);
          let emptyExtraClass = requestView && !requestCellClick ? ' timetable-slot-readonly' : '';
          let emptyCursor = requestView && !requestCellClick ? 'default' : 'pointer';
          html += `<td class="timetable-slot-empty${emptyExtraClass}" data-slot-day="${dayName}" data-slot-start="${tStart}" data-slot-end="${tEnd}" title="${escapeHtml(emptyTitle(fmt12(tStart), fmt12(tEnd)))}" style="cursor:${emptyCursor}; padding: 8px; border: 1px solid var(--border-ui); background: var(--surface); min-height: 28px;"></td>`;
        }
      }
    }
    html += '</tr>';
  }
  
  html += '</tbody></table>';
  
  // Add some CSS for the table
  const style = document.createElement('style');
  if (!document.querySelector('#timetable-table-style')) {
    style.id = 'timetable-table-style';
    style.textContent = `
      .timetable-schedule .timetable-time-col,
      .timetable-schedule .timetable-time-col-header {
        text-align: center;
        vertical-align: middle;
        width: 92px;
        padding: 8px 6px;
        border: 1px solid var(--border-ui);
        background: var(--table-header-bg);
        font-family: var(--mono);
        font-size: 11px;
        font-weight: 600;
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
function exportCurriculumHistoryAcademicYear() {
  if (state.page !== 'curriculum') return;
  let ay = normalizeAcademicYearInput(state.curriculumHistoryAyFilter) || DEFAULT_ACADEMIC_YEAR;
  let scope = state.currentUser?.role === 'admin'
    ? state.schedules
    : state.schedules.filter(s => s.dept === state.currentUser?.dept);
  let rows = scope.filter(s => scheduleAcademicYearForFilter(s) === ay);
  if (!rows.length) {
    showToast('No historical schedules to export for this academic year.');
    return;
  }
  let head = ['Academic Year', 'Semester', 'Department', 'Section', 'Subject Code', 'Subject Name', 'Professor', 'Room', 'Days', 'Time Start', 'Time End'];
  let body = rows.map(s => {
    let sub = getSubject(s.subjectId);
    let dept = getDept(s.dept);
    return [
      scheduleAcademicYearForFilter(s),
      s.schSem || '',
      dept?.code || s.dept || '',
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
  let fname = `curriculum-history-${ay.replace(/[^0-9-]+/g, '-')}.csv`;
  downloadTextFile(fname, csv, 'text/csv;charset=utf-8;');
  showToast('Historical schedule exported.');
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

/** Requests page: Mon–Fri columns; shows classes using selected department's classrooms; chairpersons can click empty slots to start a borrow request. */
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
  /** Same as main Schedule "By Room": match id or shared room name; include other depts using this space (e.g. approved borrows). */
  let deptScheds = state.schedules.filter(s => scheduleMatchesRoomFilter(s, roomFilter) && scheduleMatchesCurrentTerm(s, term));
  let deptSelect = `<select class="filter-select request-dept-filter" id="requestTtDept" aria-label="Department (classrooms)">${withRooms.map(d => {
    return `<option value="${d.id}" ${viewDept === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`;
  }).join('')}</select>`;
  let roomSelect = `<select class="filter-select request-room-filter" id="requestTtRoom" aria-label="Filter by room in this department">
    ${deptRoomList.map(r => {
      let tag = r.type === 'laboratory' ? 'Lab' : 'Lec';
      return `<option value="${escapeHtml(r.id)}" ${roomFilter === r.id ? 'selected' : ''}>${escapeHtml(r.name)} · ${tag}</option>`;
    }).join('')}
  </select>`;
  let metaRoom = escapeHtml(getRoom(roomFilter)?.name || '');
  let intro;
  if (canClickRequest) {
    intro = `Pick another program’s <strong>department</strong> and <strong>room</strong>. The grid shows <strong>all classes using that room</strong> (including your approved borrows in orange). Empty cells are free — click to start a borrow request.`;
  } else {
    intro = `Pick a <strong>department</strong> and <strong>room</strong>. The grid shows every class using that room, including sections from other programs sharing the same space.`;
  }
  return `
    <p class="request-tt-intro">${intro}</p>
    <div class="timetable-toolbar request-tt-toolbar request-tt-filters-row">${deptSelect}${roomSelect}<span class="request-tt-meta">${escapeHtml(deptInfo?.code || '')} · ${metaRoom}</span></div>
    <div class="timetable-scroll" id="requestRoomTimetableArea">${renderTimetableGrid(deptScheds, { requestView: true, requestCellClick: canClickRequest, requestBusyClickable: u.role === 'admin', cellLayout: 'room' })}</div>
  `;
}

function renderRequests() {
  let u = state.currentUser;
  normalizeRequestTimetableFilters();
  let term = currentTermFilter();
  let pending = [];
  let outgoing = [];

  if (u.role === 'chairperson') {
    pending = state.requests.filter(r => r.toDept === u.dept && r.status === 'pending' && requestMatchesCurrentTerm(r, term));
    outgoing = state.requests.filter(r => r.fromDept === u.dept && requestMatchesCurrentTerm(r, term));
  }

  let requestListsBlock = u.role === 'chairperson' ? `
    <div class="requests-queue-grid">
      <div class="card requests-queue-card" id="incoming-requests">
        <div class="card-header">
          <div class="card-title card-title-with-icon">${icon('inbox', 18)} Incoming Requests ${pending.length ? `<span style="background: var(--red); color: #fff; font-size: 10px; padding: 2px 6px; border-radius: 10px; margin-left: 6px;">${pending.length}</span>` : ''}</div>
        </div>
        <div class="card-body requests-queue-card-body">
          <div class="requests-list ${pending.length === 0 ? 'requests-list--empty' : ''}">
            ${
              pending.length === 0
                ? `<div class="requests-list-empty-state"><div class="requests-list-empty-icon">${icon('checkCircle', 40)}</div><p>No pending requests.</p></div>`
                : pending
                    .map(r => {
                      const room = getRoom(r.roomId);
                      const from = getDept(r.fromDept);
                      const sub = getSubject(r.subjectId);
                      return `
                <div class="request-card">
                  <div class="request-icon">${icon('building', 20)}</div>
                  <div class="request-info">
                    <div class="request-title">${room?.name || 'Unknown Room'} — ${r.section}</div>
                    <div class="request-meta">From: <span class="badge-dept ${r.fromDept}">${from?.code || '?'}</span> · ${sub?.code || '?'} · ${r.professorId ? escapeHtml(professorDisplayLineFromPick(r.professorId, r.professorOtherName)) + ' · ' : ''}${r.days.map(d => d.slice(0, 3)).join(', ')} ${fmtSlot24(r.timeStart)}–${fmtSlot24(r.timeEnd)}</div>
                    ${r.reason ? `<div class="request-meta request-reason" style="margin-top: 4px; font-style: italic;">${icon('fileText', 14)} "${escapeHtml(r.reason)}"</div>` : ''}
                    <div class="request-meta" style="margin-top: 4px;">Requested: ${r.created}</div>
                  </div>
                  <div class="request-actions">
                    <button class="btn btn-green btn-sm" data-approve="${r.id}">${icon('check', 14)} Approve</button>
                    <button class="btn btn-danger btn-sm" data-decline="${r.id}">${icon('close', 14)} Decline</button>
                  </div>
                </div>
              `;
                    })
                    .join('')
            }
          </div>
        </div>
      </div>

      <div class="card requests-queue-card">
        <div class="card-header">
          <div class="card-title card-title-with-icon">${icon('send', 18)} My Outgoing Requests</div>
        </div>
        <div class="card-body requests-queue-card-body">
          <div class="requests-list ${outgoing.length === 0 ? 'requests-list--empty' : ''}">
            ${
              outgoing.length === 0
                ? `<div class="requests-list-empty-state"><div class="requests-list-empty-icon">${icon('clipboard', 40)}</div><p>No outgoing requests yet.</p></div>`
                : outgoing
                    .map(r => {
                      const room = getRoom(r.roomId);
                      const to = getDept(r.toDept);
                      const sub = getSubject(r.subjectId);
                      return `
                <div class="request-card">
                  <div class="request-icon">${icon('refresh', 20)}</div>
                  <div class="request-info">
                    <div class="request-title">${room?.name || 'Unknown Room'} from <span class="badge-dept ${r.toDept}">${to?.code || '?'}</span></div>
                    <div class="request-meta">${sub?.code || '?'} · ${r.section} · ${r.professorId ? escapeHtml(professorDisplayLineFromPick(r.professorId, r.professorOtherName)) + ' · ' : ''}${r.days.map(d => d.slice(0, 3)).join(', ')} ${fmtSlot24(r.timeStart)}–${fmtSlot24(r.timeEnd)}</div>
                    <div style="margin-top: 6px;"><span class="badge-status ${r.status}">${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span></div>
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
  ` : '';

  return `
    ${requestListsBlock}
    <div class="card request-timetable-card" id="available-rooms-timetable" style="margin-bottom:20px">
      <div class="card-header">
        <div class="card-title card-title-with-icon">${icon('calendar', 18)} Timetable · Available Rooms</div>
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
    <div class="form-grid curriculum-form-code-subject"><div class="form-group"><label class="form-label" for="cc_courseCode">Course code</label><input class="form-input" id="cc_courseCode" placeholder="e.g. IE 100" value="${escapeHtml(d.courseCode || '')}" ${roInp}></div><div class="form-group"><label class="form-label" for="cc_subject">Subject</label><input class="form-input" id="cc_subject" placeholder="Subject title" value="${escapeHtml(d.subjectName || '')}" ${roInp}></div></div>
    <div class="form-grid curriculum-form-units"><div class="form-group"><label class="form-label" for="cc_lecUnits">Lec (units)</label><input class="form-input" id="cc_lecUnits" type="number" min="0" max="12" step="1" value="${escapeHtml(String(lecV))}" ${roInp}></div><div class="form-group"><label class="form-label" for="cc_labUnits">Lab (units)</label><input class="form-input" id="cc_labUnits" type="number" min="0" max="12" step="1" value="${escapeHtml(String(labV))}" ${roInp}></div><div class="form-group"><label class="form-label" for="cc_units_total">Total unit/s</label><input class="form-input" id="cc_units_total" type="text" readonly tabindex="-1" value="${escapeHtml(String(totV))}" aria-live="polite"></div></div>
  </div><input type="hidden" id="cc_edit_id" value="${escapeHtml(d.id || '')}">`;
}

function renderCurriculum() {
  mergeMissingCurriculumRowsInto(state.curriculum);
  let u = state.currentUser;
  let canMutateCurriculum = canUserMutateCurriculum(u);
  let termAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
  let chairDept = u?.role === 'chairperson' ? u.dept : '';
  if (!SCHEDULE_FORM_YEARS.includes(state.curriculumYearFilter)) state.curriculumYearFilter = '1st Year';
  let rows = state.curriculum.filter(c => {
    if (chairDept && curriculumFilterDept(c) !== chairDept) return false;
    if (curriculumFilterYear(c) !== state.curriculumYearFilter) return false;
    if (curriculumAcademicYearForFilter(c) !== termAy) return false;
    return true;
  });
  let curriculumSubhead = canMutateCurriculum
    ? 'Add course and subject entries by department, year, and semester. Filter the list below.'
    : 'View-only: browse entries by department, year, and semester. Department chairs add and update curriculum rows.';
  let actionsCol = canMutateCurriculum || u?.role === 'admin' ? '<col class="curriculum-col-actions" />' : '';
  let actionsTh = canMutateCurriculum
    ? '<th scope="col" class="curriculum-th-actions" aria-label="Actions"></th>'
    : u?.role === 'admin'
      ? '<th scope="col" class="curriculum-th-actions" aria-label="View"></th>'
      : '';
  let rowCells = c =>
    canMutateCurriculum
      ? `<td class="curriculum-td-actions"><button type="button" class="btn btn-outline btn-sm" data-editcrow="${escapeHtml(c.id)}">Edit</button><button type="button" class="btn btn-danger btn-sm" data-delcrow="${escapeHtml(c.id)}">Delete</button></td>`
      : u?.role === 'admin'
        ? `<td class="curriculum-td-actions"><button type="button" class="btn btn-outline btn-sm" data-viewcrow="${escapeHtml(c.id)}">View</button></td>`
        : '';
  let rowsFirstSem = rows.filter(c => curriculumFilterSemester(c) === '1st Semester');
  let rowsSecondSem = rows.filter(c => curriculumFilterSemester(c) === '2nd Semester');
  function curriculumSemTable(title, semRows) {
    return `<div class="curriculum-sem-col">
      <div class="curriculum-sem-title">${escapeHtml(title)}</div>
      <div class="table-wrap curriculum-table-wrap">
        <table class="curriculum-table">
          <colgroup>
            <col class="curriculum-col-cc" />
            <col class="curriculum-col-subj" />
            <col class="curriculum-col-lec" />
            <col class="curriculum-col-lab" />
            <col class="curriculum-col-unit-total" />
            <col class="curriculum-col-hours" />
            ${actionsCol}
          </colgroup>
          <thead><tr><th scope="col">Course code</th><th scope="col">Subject</th><th scope="col" class="curriculum-th-num">Lec</th><th scope="col" class="curriculum-th-num">Lab</th><th scope="col" class="curriculum-th-num">Unit/s</th><th scope="col">Hours</th>${actionsTh}</tr></thead>
          <tbody>
            ${semRows.map(c => `<tr><td>${escapeHtml(c.courseCode)}</td><td class="curriculum-td-subj">${escapeHtml(c.subjectName)}</td><td class="curriculum-td-num">${curriculumColLec(c)}</td><td class="curriculum-td-num">${curriculumColLab(c)}</td><td class="curriculum-td-num">${curriculumColTotal(c)}</td><td class="curriculum-td-hours">${curriculumRequiredHours(c)}</td>${rowCells(c)}</tr>`).join('')}
          </tbody>
        </table>
        ${semRows.length === 0 ? '<div class="curriculum-empty">No subjects for this semester.</div>' : ''}
      </div>
    </div>`;
  }
  let scheduleScope = state.currentUser?.role === 'admin'
    ? state.schedules
    : state.schedules.filter(s => s.dept === state.currentUser?.dept);
  let historyAyOptions = curriculumHistoryAcademicYearOptions(scheduleScope, state.curriculumHistoryAyFilter || termAy);
  if (!historyAyOptions.includes(state.curriculumHistoryAyFilter)) {
    state.curriculumHistoryAyFilter = historyAyOptions[0] || termAy;
  }
  let historyAy = normalizeAcademicYearInput(state.curriculumHistoryAyFilter) || termAy;
  let historyRows = scheduleScope.filter(s => scheduleAcademicYearForFilter(s) === historyAy);
  let historyAySelect = `<select class="filter-select curriculum-filter-select" id="curriculumHistoryAyFilter" aria-label="Historical schedule academic year">${historyAyOptions.map(ay => `<option value="${escapeHtml(ay)}" ${historyAy === ay ? 'selected' : ''}>${escapeHtml(ay)}</option>`).join('')}</select>`;
  return `
    <div class="curriculum-panel">
      <div class="curriculum-sem-grid">
        ${curriculumSemTable('First Semester', rowsFirstSem)}
        ${curriculumSemTable('Second Semester', rowsSecondSem)}
      </div>
    </div>
    <div class="curriculum-panel curriculum-history-panel">
      <div class="curriculum-history-head">
        <div>
          <div class="card-title card-title-with-icon">${icon('calendar', 18)} Previous Academic Year Schedule </div>
          <div class="curriculum-history-subhead">View saved schedules from current/previous academic years. Export the selected academic year only.</div>
        </div>
        <div class="curriculum-history-actions">${historyAySelect}<button type="button" class="btn btn-outline btn-sm" id="curriculumHistoryExportBtn">${icon('fileText', 16)} Export</button></div>
      </div>
      <div class="table-wrap curriculum-table-wrap">
        <table class="curriculum-history-table">
          <thead><tr><th>Academic Year</th><th>Semester</th><th>Subject</th><th>Section</th><th>Professor</th><th>Room</th><th>Days</th><th>Time</th></tr></thead>
          <tbody>
            ${historyRows.map(s => { let sub = getSubject(s.subjectId); return `<tr><td>${escapeHtml(scheduleAcademicYearForFilter(s))}</td><td>${escapeHtml(s.schSem || '—')}</td><td>${escapeHtml(sub?.code || '—')} — ${escapeHtml(sub?.name || '')}</td><td>${escapeHtml(s.section || '—')}</td><td>${escapeHtml(professorDisplayLine(s))}</td><td>${escapeHtml(roomDisplayLineFromPick(s.roomId, s.roomOtherName))}</td><td>${escapeHtml((s.days || []).map(d => d.slice(0, 3)).join(', '))}</td><td>${escapeHtml(fmt12(s.timeStart))}–${escapeHtml(fmt12(s.timeEnd))}</td></tr>`; }).join('')}
          </tbody>
        </table>
        ${historyRows.length === 0 ? '<div class="curriculum-empty">No historical schedules for this academic year.</div>' : ''}
      </div>
    </div>
  `;
}

function renderFaculty() {
  return `<div class="page-header"><div><h2>Faculty</h2></div><button class="btn btn-primary" id="addProfBtn">${icon('plus', 16)} Add Professor</button></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Short</th><th>Dept</th><th>Status</th><th>Actions</th></tr></thead><tbody>${state.professors.map(p=>`<tr><td>${p.name}</td><td>${p.short}</td><td><span class="badge-dept ${p.dept}">${getDept(p.dept)?.code}</span></td><td><span class="badge-status ${p.active?'active':'inactive'}">${p.active?'Active':'Inactive'}</span></td><td><button class="btn btn-outline btn-sm" data-editprof="${p.id}">Edit</button> <button class="btn btn-danger btn-sm" data-delprof="${p.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`;
}

function renderAccounts() {
  let USERS=[{id:'admin',name:'Dr. Maria Corazon B. Abejo',email:'admin@plm.edu.ph',role:'admin',initials:'MCA',dept:null},
    {id:'ie',name:'Engr. Lynnevel R. Amparo',email:'ie.chair@plm.edu.ph',role:'chairperson',dept:'ie',initials:'LA'},
    {id:'ee',name:'Engr. Maurino N. Abuel',email:'ee.chair@plm.edu.ph',role:'chairperson',dept:'ee',initials:'MA'},
    {id:'ce',name:'Engr. John Christopher D. Tayoto',email:'ce.chair@plm.edu.ph',role:'chairperson',dept:'ce',initials:'JT'},
    {id:'me',name:'Engr. Ronnel S. Nombrefia',email:'me.chair@plm.edu.ph',role:'chairperson',dept:'me',initials:'RN'},
    {id:'ece',name:'Engr. Pitz Gerald G. Lagrazon',email:'ece.chair@plm.edu.ph',role:'chairperson',dept:'ece',initials:'PL'},
    {id:'cpe',name:'Engr. Julie Ann Susa-Gili',email:'cpe.chair@plm.edu.ph',role:'chairperson',dept:'cpe',initials:'JS'}];
  return `<div class="page-header"><div><h2>System Accounts</h2></div></div><div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th></tr></thead><tbody>${USERS.map(u=>`<tr><td><strong>${u.name}</strong></td><td>${u.email}</td><td><span class="badge-status ${u.role==='admin'?'approved':'active'}">${u.role==='admin'?'Admin':'Chairperson'}</span></td><td>${u.dept?`<span class="badge-dept ${u.dept}">${getDept(u.dept)?.code}</span>`:'—'}</td></tr>`).join('')}</tbody></table></div>`;
}

function renderMyAccount() {
  let u = state.currentUser;
  return `<div class="card"><div class="card-body"><div style="display:flex;gap:16px;margin-bottom:24px"><div style="width:64px;height:64px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff">${u.initials}</div><div><div style="font-size:18px;font-weight:700">${u.name}</div><div style="color:var(--gray-600)">${u.email}</div></div></div><div class="form-grid"><div class="form-group full"><label>Full Name</label><input class="form-input" value="${u.name}"></div><div class="form-group full"><label>Email</label><input class="form-input" value="${u.email}"></div></div><button class="btn btn-primary" onclick="showToast('Profile updated')">Save Changes</button></div></div>`;
}

function renderModal() {
  let {type,data}=state.modal;
  if (type === 'addSchedule') {
    const schedFooter = `<button class="btn btn-secondary" id="modalClose2">Cancel</button><button class="btn btn-primary" id="modalSaveBtn">Save Schedule</button>`;
    return modalWrap('Create Schedule', renderScheduleForm(), schedFooter, 'modal-schedule', 'Conflicts are detected automatically before saving');
  }
  if (type === 'viewSchedule') {
    let vsMode = state.modal.viewScheduleMode || 'view';
    let isDean = state.currentUser?.role === 'admin';
    const delBtn = `<button type="button" class="btn btn-danger" data-delschedid="${escapeHtml(data.id)}">Delete schedule</button>`;
    const editBtn = `<button type="button" class="btn btn-secondary" id="vsEditScheduleBtn">Edit schedule</button>`;
    const editFooter = `<button type="button" class="btn btn-secondary" id="vsCancelEditBtn">Cancel</button><button type="button" class="btn btn-primary" id="modalSaveBtn">Save changes</button>`;
    const vsFooter = isDean ? '' : (vsMode === 'view' ? `${editBtn}${delBtn}` : editFooter);
    return modalWrap('Schedule Details', renderViewSchedule(data), vsFooter, 'modal-view-schedule');
  }
  if(type==='addSubject') return modalWrap(data?.id?'Edit Subject':'Add Subject',renderSubjectForm(data));
  if(type==='addProfessor') return modalWrap(data?.id?'Edit Professor':'Add Professor',renderProfessorForm(data));
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
    const reqFooter = `<button class="btn btn-secondary" id="modalClose2">Cancel</button><button class="btn btn-primary" id="modalSaveBtn">Submit Request</button>`;
    return modalWrap('Request a room', renderRequestForm(), reqFooter, 'modal-request', 'Borrow a room from another department');
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
  if (state.filterMode === 'faculty' && state.filterFaculty) {
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
    roomList = [...roomsSourceForApp().filter(r => r.dept === d)].sort((a, b) => a.name.localeCompare(b.name));
    secDeptIds = [d];
  }

  let profBody = profList.map(p => `<option value="${escapeHtml(p.id)}" ${defProf && defProf === p.id ? 'selected' : ''}>${escapeHtml(p.name)} (${escapeHtml(getDept(p.dept)?.code || '')})</option>`).join('');
  let profLegacyOpt =
    defProf && defProf !== PROFESSOR_OTHER_ID && !profList.some(p => p.id === defProf)
      ? (() => {
          let px = getProfessor(defProf);
          return px ? `<option value="${escapeHtml(defProf)}" selected>${escapeHtml(px.name)} (${escapeHtml(getDept(px.dept)?.code || '')})</option>` : '';
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
  let timeStartOpts = timeSlots.slice(0, -1).map(t => `<option value="${t}" ${slot && slot.timeStart === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let timeEndOpts = timeSlots.slice(1).map(t => `<option value="${t}" ${slot && slot.timeEnd === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let secChoices = mergeSectionOptions(secDeptIds);
  let secOpts = secChoices.map(s => `<option value="${escapeHtml(s)}" ${defSec && defSec === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  let secLegacyOpt =
    defSec && !secChoices.includes(defSec)
      ? `<option value="${escapeHtml(defSec)}" selected>${escapeHtml(defSec)}</option>`
      : '';
  const req = '<span class="label-req" aria-hidden="true">*</span>';
  let defaultSchAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;

  let deptRow;
  if (isAdmin) {
    deptRow = `<div class="form-group"><label class="form-label" for="f_schedule_dept">Department ${req}</label><select class="form-select" id="f_schedule_dept" aria-label="Department">
      <option value="all" ${formDept === 'all' ? 'selected' : ''}>All departments</option>
      ${DEPARTMENTS.map(d => `<option value="${d.id}" ${formDept === d.id ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('')}
    </select></div>`;
  } else {
    let dInfo = getDept(u.dept);
    deptRow = `<div class="form-group"><label class="form-label" for="f_schedule_dept">Department</label><select class="form-select" id="f_schedule_dept" disabled aria-label="Your department"><option value="${escapeHtml(u.dept)}" selected>${escapeHtml(dInfo?.code || '')} — ${escapeHtml(dInfo?.name || '')}</option></select></div>`;
  }

  return `<div id="conflictAlert"></div>
  <div class="schedule-form-wrapper">
    ${deptRow}
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="f_year">Year ${req}</label><select class="form-select" id="f_year"><option value="">Select year...</option></select></div>
      <div class="form-group"><label class="form-label" for="f_section">Section ${req}</label><select class="form-select" id="f_section"><option value="">Select section...</option>${secOpts}${secLegacyOpt}</select></div>
    </div>
    <div class="schedule-form-inline-row schedule-form-row-sem-subject">
      <div class="form-group"><label class="form-label" for="f_sem">Semester ${req}</label><select class="form-select" id="f_sem"><option value="">Select semester...</option></select></div>
      <div class="form-group"><label class="form-label" for="f_subject">Subject ${req}</label><select class="form-select" id="f_subject"><option value="">Select subject...</option></select></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="f_ay">Academic Year ${req}</label><input class="form-input" id="f_ay" value="${escapeHtml(defaultSchAy)}" placeholder="2025-2026"></div>
      <div class="form-group"></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="f_set">Set (optional)</label>${setABSelectHtml('f_set', '')}</div>
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
      <div class="form-group"><span class="form-label">Day(s) ${req}</span><div class="days-check">${DAYS.map(d => `<input type="checkbox" class="day-checkbox" id="day_${d}" value="${d}" ${slot && slot.day === d ? 'checked' : ''}><label class="day-label" for="day_${d}">${d.slice(0, 3)}</label>`).join('')}</div></div>
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
    return `<div class="schedule-form-wrapper view-schedule-form view-schedule-readonly">
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
        <div class="form-group"><label class="form-label">Academic Year</label><div class="vs-readonly">${escapeHtml(normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR)}</div></div>
        <div class="form-group"></div>
      </div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Set (optional)</label><div class="vs-readonly">${d.setLabel ? escapeHtml(d.setLabel) : 'None'}</div></div>
        <div class="form-group"><label class="form-label">Professor</label><div class="vs-readonly">${escapeHtml(professorFullNameDisplayLineFromPick(d.professorId, d.professorOtherName))}</div></div>
      </div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Day(s)</label><div class="vs-readonly">${escapeHtml(daysStr)}</div></div>
        <div class="form-group"><label class="form-label">Room</label><div class="vs-readonly">${escapeHtml(roomDisplayLineFromPick(d.roomId, d.roomOtherName))}</div></div>
      </div>
      <div class="schedule-form-inline-row">
        <div class="form-group"><label class="form-label">Time start</label><div class="vs-readonly">${escapeHtml(fmtSlot24(d.timeStart))}</div></div>
        <div class="form-group"><label class="form-label">Time end</label><div class="vs-readonly">${escapeHtml(fmtSlot24(d.timeEnd))}</div></div>
      </div>
    </div>`;
  }
  let listDept = d.dept;
  let isAdmin = state.currentUser.role === 'admin';
  let subList = subjectsForCreateScheduleSlot(listDept, d.schYear || '', d.schSem || '', normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR);
  let profList = [...state.professors.filter(p => p.dept === listDept)].sort((a, b) => a.name.localeCompare(b.name));
  let roomList = [...roomsSourceForApp().filter(r => r.dept === listDept)].sort((a, b) => a.name.localeCompare(b.name));
  let subOpts = subList.map(x => `<option value="${escapeHtml(x.id)}" ${d.subjectId === x.id ? 'selected' : ''}>${escapeHtml(x.code)} — ${escapeHtml(x.name)}</option>`).join('');
  let subLegacyOpt =
    d.subjectId && !subList.some(x => x.id === d.subjectId)
      ? (() => {
          let sx = getSubject(d.subjectId);
          return sx ? `<option value="${escapeHtml(sx.id)}" selected>${escapeHtml(sx.code)} — ${escapeHtml(sx.name)}</option>` : '';
        })()
      : '';
  let profOpts = `<option value="" ${!d.professorId ? 'selected' : ''}>—</option>` + profList.map(p => `<option value="${escapeHtml(p.id)}" ${d.professorId === p.id ? 'selected' : ''}>${escapeHtml(p.name)}</option>`).join('')
    + `<option value="${PROFESSOR_OTHER_ID}" ${d.professorId === PROFESSOR_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let roomOpts = roomList.map(r => `<option value="${escapeHtml(r.id)}" ${d.roomId === r.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('')
    + `<option value="${ROOM_OTHER_ID}" ${d.roomId === ROOM_OTHER_ID ? 'selected' : ''}>Others:</option>`;
  let secChoices = mergeSectionOptions([listDept]);
  let secOpts = secChoices.map(sec => `<option value="${escapeHtml(sec)}" ${String(d.section) === sec ? 'selected' : ''}>${escapeHtml(sec)}</option>`).join('');
  let secLegacyOpt =
    d.section && !secChoices.includes(String(d.section))
      ? `<option value="${escapeHtml(d.section)}" selected>${escapeHtml(d.section)}</option>`
      : '';
  let deptOpts = DEPARTMENTS.map(x => `<option value="${x.id}" ${d.dept === x.id ? 'selected' : ''}>${escapeHtml(x.code)} — ${escapeHtml(x.name)}</option>`).join('');
  let timeStartOpts = timeSlots.slice(0, -1).map(t => `<option value="${t}" ${d.timeStart === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let timeEndOpts = timeSlots.slice(1).map(t => `<option value="${t}" ${d.timeEnd === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let setInput = setABSelectHtml('vs_set', d.setLabel || '');
  let daysHtml = `<div class="days-check vs-days-check">${DAYS.map(day => `<input type="checkbox" class="day-checkbox" id="vsday_${day}" value="${day}" ${Array.isArray(d.days) && d.days.includes(day) ? 'checked' : ''}><label class="day-label" for="vsday_${day}">${day.slice(0, 3)}</label>`).join('')}</div>`;
  let deptControl = isAdmin
    ? `<select class="form-select" id="vs_dept">${deptOpts}</select>`
    : `<div class="vs-dept-readout">${dept ? `<span class="badge-dept ${dept.id}">${escapeHtml(dept.code)}</span> ${escapeHtml(dept.name)}` : '—'}</div><input type="hidden" id="vs_dept" value="${escapeHtml(d.dept)}">`;
  let vsSectionSelect = `<select class="form-select" id="vs_section"><option value="">Select section...</option>${secOpts}${secLegacyOpt}</select>`;
  let vsSubjectSelect = `<select class="form-select" id="vs_subject"><option value="">Select subject</option>${subOpts}${subLegacyOpt}</select>`;
  return `<div id="vsConflictAlert"></div>
  <div class="schedule-form-wrapper view-schedule-form">
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
      <div class="form-group"><label class="form-label" for="vs_ay">Academic Year</label><input class="form-input" id="vs_ay" value="${escapeHtml(normalizeAcademicYearInput(d.schAy) || DEFAULT_ACADEMIC_YEAR)}" placeholder="2025-2026"></div>
      <div class="form-group"></div>
    </div>
    <div class="schedule-form-inline-row">
      <div class="form-group"><label class="form-label" for="vs_set">Set (optional)</label>${setInput}</div>
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
  let deptOpts=DEPARTMENTS.map(dept=>`<option value="${escapeHtml(dept.id)}" ${d.dept===dept.id?'selected':''}>${escapeHtml(dept.code)} — ${escapeHtml(dept.name)}</option>`).join('');
  return `<div class="form-grid form-grid-stacked"><div class="form-group full"><label class="form-label" for="fp_name">Full name</label><input class="form-input" id="fp_name" placeholder="Full Name" value="${escapeHtml(d.name||'')}"></div><div class="form-group full"><label class="form-label" for="fp_short">Short name</label><input class="form-input" id="fp_short" placeholder="Short Name" value="${escapeHtml(d.short||'')}"></div><div class="form-group full"><label class="form-label" for="fp_dept">Department</label><select class="form-select" id="fp_dept">${deptOpts}</select></div></div>`;
}

function renderRequestForm() {
  let u = state.currentUser;
  let m = state.modal && state.modal.type === 'newRequest' ? state.modal : null;
  let slot = m?.requestSlot || null;
  let prefillBorrowRoomId = m?.prefillBorrowRoomId || '';
  let daysForRooms = slot && slot.day ? [slot.day] : [];
  let timeS = slot?.timeStart || '';
  let timeE = slot?.timeEnd || '';
  let toDeptChoices = requestFormToDepartmentChoices(u);
  let selectedToDeptId = resolveRequestFormToDeptId(u, m?.requestToDept);
  let selectedReason = (m?.requestReason || '').trim();
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
  let roomOpts = roomsPick.map(r => `<option value="${escapeHtml(r.id)}" ${prefillOk && prefillBorrowRoomId === r.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('');
  let myDept = getDept(u.dept);
  let toDeptOpts = toDeptChoices.map(d => `<option value="${escapeHtml(d.id)}" ${d.id === selectedToDeptId ? 'selected' : ''}>${escapeHtml(d.code)} — ${escapeHtml(d.name)}</option>`).join('');
  let toDeptSelect = toDeptChoices.length
    ? `<select class="form-select" id="rq_to_dept" required aria-label="Requesting to department">${toDeptOpts}</select>`
    : `<select class="form-select" id="rq_to_dept" disabled aria-label="Requesting to department"><option value="">No other departments with rooms</option></select>`;
  let defSection = requestFormDefaultSection();
  let rqSecOpts = mergeSectionOptions([u.dept]).map(s => `<option value="${escapeHtml(s)}" ${defSection && String(defSection) === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
  let mySubs = [];
  // Reason logic: "Room Shortage" keeps faculty scoped to requester's department.
  // Other reasons may scope faculty to the selected receiving department.
  let facultyDept = selectedReason === REQUEST_ROOM_REASON_CHOICES[0]
    ? u.dept
    : (selectedToDeptId || u.dept);
  let myProfs = [...state.professors.filter(p => p.dept === facultyDept)].sort((a, b) => a.name.localeCompare(b.name));
  let subOpts = mySubs.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
  let profOpts = myProfs.map(p => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)} (${escapeHtml(p.short)})</option>`).join('')
    + `<option value="${PROFESSOR_OTHER_ID}">Others:</option>`;
  let ts = timeSlots.slice(0, -1).map(t => `<option value="${t}" ${slot && slot.timeStart === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let te = timeSlots.slice(1).map(t => `<option value="${t}" ${slot && slot.timeEnd === t ? 'selected' : ''}>${fmt12(t)}</option>`).join('');
  let setSelect = `<select class="form-select" id="rq_set"><option value="">— None —</option><option value="Set A">Set A</option><option value="Set B">Set B</option></select>`;
  let rqReasonOpts = REQUEST_ROOM_REASON_CHOICES.map(
    t => `<option value="${escapeHtml(t)}" ${selectedReason === t ? 'selected' : ''}>${escapeHtml(t)}</option>`
  ).join('');
  let yearHtml = scheduleYearSelectHtml('rq_year', '', 'required');
  let semHtml = scheduleSemSelectHtml('rq_sem', '', 'required');
  return `<div class="request-room-form schedule-form-wrapper">
    <div id="rqFormAlert"></div>
    <div class="form-group full request-room-form-reason">
      <label class="form-label" for="rq_reason">Reason ${req}</label>
      <select class="form-select" id="rq_reason" aria-label="Reason for room request" required>
        <option value="">Select reason</option>
        ${rqReasonOpts}
      </select>
      <p class="form-hint">Helps the receiving department understand why you need to borrow a room.</p>
    </div>
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
    <div class="schedule-form-inline-row request-room-form-inline-pair" role="group" aria-label="Target department and instructor">
      <div class="form-group">
        <label class="form-label" for="rq_to_dept">Requesting to: ${req}</label>
        ${toDeptSelect}
      </div>
      <div class="form-group professor-select-group">
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
      </div>
    </div>
    <div class="form-group full">
      <label class="form-label" for="rq_room">Available room ${req}</label>
      <select class="form-select" id="rq_room" required><option value="">${roomPlaceholder}</option>${roomOpts}</select>
      <p class="form-hint">${isTeachingAssignmentReason ? 'Select an available room from your department or the selected department' : 'Select an available room from another department'}</p>
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
        <div class="days-check rq-days-check">${DAYS.map(d => `<input type="checkbox" class="day-checkbox" id="rqday_${d}" value="${d}" ${slot && slot.day === d ? 'checked' : ''}><label class="day-label" for="rqday_${d}">${d.slice(0, 3)}</label>`).join('')}</div>
      </div>
      <div class="form-group">
        <label class="form-label" for="rq_set">Set (optional)</label>
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
  </div>`;
}

// Event binding
function bindGlobal(){
  document.getElementById('logoutBtn')?.addEventListener('click',()=>{
    if (!window.confirm(MSG_CONFIRM_LOGOUT)) return;
    sessionStorage.clear();
    state.loggedIn = false;
    window.location.href = 'login.html';
  });
  document.getElementById('themeToggleBtn')?.addEventListener('click',()=>{toggleAppTheme();render();});
  document.getElementById('hamburger')?.addEventListener('click',()=>{state.sidebarOpen=!state.sidebarOpen;render();});
  document.getElementById('overlay')?.addEventListener('click',()=>{state.sidebarOpen=false;render();});
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
      showToast('Curriculum is view-only for the dean. Department chairs add or edit rows.');
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
    state.termSemester = e.target.value || '1st Semester';
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
      let s = state.schedules.find(x => x.id === el.dataset.schedid);
      if (s) openModal({ type: 'viewSchedule', viewScheduleMode: 'view', data: { ...s, days: Array.isArray(s.days) ? [...s.days] : [] } });
    });
  }
  document.querySelectorAll('#printArea [data-schedid]').forEach(bindScheduleCellOpenDetails);
  document.querySelectorAll('#requestRoomTimetableArea [data-schedid]').forEach(bindScheduleCellOpenDetails);
  document.getElementById('vsEditScheduleBtn')?.addEventListener('click', () => {
    if (state.modal?.type !== 'viewSchedule') return;
    if (isDean) return;
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
    render();
  });
  document.getElementById('requestTtRoom')?.addEventListener('change', e => { state.requestTimetableRoom = e.target.value; render(); });
    if (state.currentUser?.role !== 'admin') {
    document.querySelectorAll('#requestRoomTimetableArea .timetable-slot-empty').forEach(el => el.addEventListener('click', e => {
      e.stopPropagation();
      let u = state.currentUser;
      openModal({
        type: 'newRequest',
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
  document.getElementById('printBtn')?.addEventListener('click',()=>window.print());
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
    if (mt === 'viewSchedule') {
      if (state.modal.viewScheduleMode !== 'edit') return;
      let draft = state.modal.data;
      if (!draft?.id) return;
      let idx = state.schedules.findIndex(x => x.id === draft.id);
      if (idx < 0) return;
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
    if (mt === 'addSubject') {
      let sub = { id: document.getElementById('saveSubjectBtn')?.dataset.editid || genId(), code: document.getElementById('fs_code').value, name: document.getElementById('fs_name').value, dept: document.getElementById('fs_dept').value, units: parseInt(document.getElementById('fs_units').value), active: true };
      if (sub.code && sub.name) {
        if (!window.confirm(MSG_CONFIRM_SAVE_SUBJECT)) return;
        if (hasSupabaseClient()) {
          const { error } = await window.cenSupabase
            .from('subjects')
            .upsert([normalizeSubjectToDb(sub)], { onConflict: 'id' });
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
      let prof = { id: document.getElementById('saveProfBtn')?.dataset.editid || genId(), name: document.getElementById('fp_name').value, short: document.getElementById('fp_short').value, dept: document.getElementById('fp_dept').value, active: true };
      if (prof.name && prof.short) {
        if (!window.confirm(MSG_CONFIRM_SAVE_PROFESSOR)) return;
        if (hasSupabaseClient()) {
          const { error } = await window.cenSupabase
            .from('professors')
            .upsert([normalizeProfessorToDb(prof)], { onConflict: 'id' });
          if (error) {
            window.alert(`Unable to save professor in Supabase: ${error.message}`);
            return;
          }
        }
        if (prof.id.startsWith('id_')) state.professors.push(prof); else { let i = state.professors.findIndex(p => p.id === prof.id); if (i >= 0) state.professors[i] = prof; }
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
        courseName: subjectName,
        subjectCode: courseCode.replace(/\s+/g, '') || subjectName.replace(/\s+/g, '').slice(0, 24) || '—',
        section: '',
      };
      if (!row.courseCode || !row.subjectName || !row.year || !row.semester || !row.academicYear || units < 1) return;
      if (!window.confirm(editId ? MSG_CONFIRM_SAVE_CURRICULUM_EDIT : MSG_CONFIRM_SAVE_CURRICULUM_NEW)) return;
      if (editId) {
        let i = state.curriculum.findIndex(c => c.id === editId);
        if (i >= 0) state.curriculum[i] = { ...state.curriculum[i], ...row, id: editId };
      } else {
        row.id = genId();
        state.curriculum.push(row);
      }
      let savedRow = editId ? { ...row, id: editId } : row;
      if (hasSupabaseClient()) {
        const { error } = await upsertCurriculumDb([savedRow]);
        if (error) {
          window.alert(`Unable to save curriculum in Supabase: ${error.message}`);
          return;
        }
      }
      state.modal = null;
      showToast('Curriculum saved');
      render();
      return;
    }
    if (mt === 'newRequest') {
      let days = [...document.querySelectorAll('#modalBackdrop [id^="rqday_"]:checked')].map(c => c.value);
      let roomId = document.getElementById('rq_room')?.value || '';
      let room = getRoom(roomId);
      let section = (document.getElementById('rq_section')?.value || '').trim();
      let timeStart = document.getElementById('rq_timeStart')?.value || '';
      let timeEnd = document.getElementById('rq_timeEnd')?.value || '';
      let setV = (document.getElementById('rq_set')?.value || '').trim();
      let subId = document.getElementById('rq_subject')?.value || '';
      let schYear = (document.getElementById('rq_year')?.value || '').trim();
      let schSem = (document.getElementById('rq_sem')?.value || '').trim();
      let schAy = normalizeAcademicYearInput(state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
      let profReq = document.getElementById('rq_professor')?.value || '';
      let profOtherRq = (document.getElementById('rq_professor_other')?.value || '').trim();
      let toDeptPick = document.getElementById('rq_to_dept')?.value || '';
      let reasonRq = (document.getElementById('rq_reason')?.value || '').trim();
      let isTeachingAssignmentReason = reasonRq === REQUEST_ROOM_REASON_CHOICES[1];
      if (!toDeptPick || !roomId || !subId || !profReq || !section || !days.length || !timeStart || !timeEnd || !schYear || !schSem || !reasonRq) {
        showFormValidationBanner('rqFormAlert', MSG_FORM_INCOMPLETE);
        return;
      }
      if (!subjectAllowedByCurriculum(state.currentUser.dept, schYear, schSem, subId, schAy)) {
        showFormValidationBanner('rqFormAlert', 'Choose a subject listed in Curriculum for the selected year and semester.');
        return;
      }
      let roomAllowed = room?.dept === toDeptPick || (isTeachingAssignmentReason && room?.dept === state.currentUser.dept);
      if (!roomAllowed) {
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
      for (let day of days) {
        if (roomSlotOccupied(roomId, day, timeStart, timeEnd)) {
          showFormValidationBanner('rqFormAlert', 'That room is no longer free for one of the selected days.');
          return;
        }
      }
      if (!window.confirm(MSG_CONFIRM_SCHEDULE_OR_REQUEST_SAVE)) return;
      let req = {
        id: genId(),
        fromDept: state.currentUser.dept,
        toDept: toDeptPick,
        roomId,
        subjectId: subId,
        section,
        professorId: profReq === PROFESSOR_OTHER_ID ? PROFESSOR_OTHER_ID : profReq || null,
        professorOtherName: profReq === PROFESSOR_OTHER_ID ? profOtherRq : null,
        days,
        timeStart,
        timeEnd,
        schYear,
        schSem,
        schAy,
        setLabel: setV || null,
        labLabel: null,
        reason: reasonRq,
        status: 'pending',
        created: new Date().toISOString().slice(0, 10),
      };
      if (hasSupabaseClient()) {
        window.cenSupabase
          .from('requests')
          .insert([normalizeRequestToDb(req)])
          .then(({ error }) => {
            if (error) {
              showFormValidationBanner('rqFormAlert', `Supabase error: ${error.message}`);
              return;
            }
            state.requests.push(req);
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
      state.modal = null;
      showToast('Request submitted');
      render();
    }
  });
  document.querySelectorAll('[data-delschedid]').forEach(el=>el.addEventListener('click', async ()=>{
    if (isDean) return;
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
      requestToDept: resolveRequestFormToDeptId(u, state.requestTimetableDept),
      ...requestFormBorrowRoomPrefill(),
    });
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
  document.querySelectorAll('[data-approve]').forEach(el=>el.addEventListener('click', async ()=>{
    let r=state.requests.find(x=>x.id===el.dataset.approve);
    if (!r) return;
    if (!window.confirm('Are you sure you want to approve this request?')) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase
        .from('requests')
        .update({ status: 'approved' })
        .eq('id', r.id);
      if (error) {
        window.alert(`Unable to approve request in Supabase: ${error.message}`);
        return;
      }
    }
    r.status='approved';
    let approvedAt = new Date().toISOString();
    let approvedSched = {id:genId(),subjectId:r.subjectId,professorId:r.professorId||null,professorOtherName:r.professorOtherName||null,roomId:r.roomId,roomOtherName:r.roomOtherName||null,dept:r.fromDept,section:r.section,days:r.days,timeStart:r.timeStart,timeEnd:r.timeEnd,color:'orange',setLabel:r.setLabel||null,labLabel:r.labLabel||null,schYear:r.schYear||'1st Year',schSem:r.schSem||'1st Semester',schAy:normalizeAcademicYearInput(r.schAy)||normalizeAcademicYearInput(state.termAcademicYear)||DEFAULT_ACADEMIC_YEAR,createdAt:approvedAt};
    if (hasSupabaseClient()) {
      const { error } = await upsertSchedulesDb([approvedSched]);
      if (error) {
        window.alert(`Request approved but schedule insert failed in Supabase: ${error.message}`);
        return;
      }
      await syncSchedulesFromSupabase();
    } else {
      state.schedules.push(approvedSched);
    }
    window.alert('This request has been approved and added to the timetable.');
    render();
  }));
  document.querySelectorAll('[data-decline]').forEach(el=>el.addEventListener('click', async ()=>{
    let r=state.requests.find(x=>x.id===el.dataset.decline);
    if (!r) return;
    if (!window.confirm('Are you sure you want to decline this request?')) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase
        .from('requests')
        .update({ status: 'declined' })
        .eq('id', r.id);
      if (error) {
        window.alert(`Unable to decline request in Supabase: ${error.message}`);
        return;
      }
    }
    r.status='declined';
    window.alert('This request has been declined.');
    render();
  }));
  document.getElementById('addCurriculumBtn')?.addEventListener('click',()=>{openModal({type:'addCurriculum',data:{}});});
  document.querySelectorAll('[data-editcrow]').forEach(el=>el.addEventListener('click',()=>{
    if (!canUserMutateCurriculum(state.currentUser)) return;
    let c = state.curriculum.find(x => x.id === el.dataset.editcrow);
    if (c) openModal({ type: 'addCurriculum', data: { ...c } });
  }));
  document.querySelectorAll('[data-viewcrow]').forEach(el=>el.addEventListener('click',()=>{
    let c = state.curriculum.find(x => x.id === el.dataset.viewcrow);
    if (c) openModal({ type: 'addCurriculum', data: { ...c } });
  }));
  document.querySelectorAll('[data-delcrow]').forEach(el=>el.addEventListener('click', async ()=>{
    if (!canUserMutateCurriculum(state.currentUser)) return;
    if (!window.confirm(MSG_CONFIRM_PERM_DELETE_CURRICULUM)) return;
    if (hasSupabaseClient()) {
      const { error } = await window.cenSupabase.from('curriculum').delete().eq('id', el.dataset.delcrow);
      if (error) {
        window.alert(`Unable to delete curriculum row in Supabase: ${error.message}`);
        return;
      }
    }
    state.curriculum=state.curriculum.filter(c=>c.id!==el.dataset.delcrow);showToast('Row removed');render();
  }));
  document.getElementById('curriculumDeptFilter')?.addEventListener('change',e=>{state.curriculumDeptFilter=e.target.value;render();});
  document.getElementById('curriculumYearFilter')?.addEventListener('change',e=>{state.curriculumYearFilter=e.target.value;render();});
  document.getElementById('topbarCurriculumYearFilter')?.addEventListener('change',e=>{state.curriculumYearFilter=e.target.value || '1st Year';render();});
  document.getElementById('curriculumSemFilter')?.addEventListener('change',e=>{state.curriculumSemFilter=e.target.value;render();});
  document.getElementById('curriculumHistoryAyFilter')?.addEventListener('change', e => {
    state.curriculumHistoryAyFilter = normalizeAcademicYearInput(e.target.value || '') || DEFAULT_ACADEMIC_YEAR;
    render();
  });
  document.getElementById('curriculumHistoryExportBtn')?.addEventListener('click', exportCurriculumHistoryAcademicYear);
  function syncCurriculumUnitsTotal() {
    let lecEl = document.getElementById('cc_lecUnits');
    let labEl = document.getElementById('cc_labUnits');
    let out = document.getElementById('cc_units_total');
    if (!lecEl || !labEl || !out) return;
    let lec = parseInt(lecEl.value, 10);
    let lab = parseInt(labEl.value, 10);
    let a = Number.isFinite(lec) ? lec : 0;
    let b = Number.isFinite(lab) ? lab : 0;
    out.value = String(a + b);
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
    state.professors=state.professors.filter(p=>p.id!==el.dataset.delprof);showToast('Professor deleted');render();
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
    queueMicrotask(() => document.getElementById('rq_reason')?.focus({ preventScroll: true }));
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
  }
  document.getElementById('rq_year')?.addEventListener('change', syncRequestFormSectionAndSubject);
  document.getElementById('rq_sem')?.addEventListener('change', syncRequestFormSectionAndSubject);
  document.getElementById('vs_year')?.addEventListener('change', e => {
    let year = e.target?.value || '';
    let deptId = document.getElementById('vs_dept')?.value || state.currentUser?.dept;
    let secEl = document.getElementById('vs_section');
    if (!secEl || !deptId) return;
    let selected = secEl.value;
    let sections = sectionOptionsForDeptYear([deptId], year);
    let opts = sections.map(s => `<option value="${escapeHtml(s)}" ${selected === s ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('');
    secEl.innerHTML = `<option value="">Select section...</option>${opts}`;
    let sem = document.getElementById('vs_sem')?.value || '';
    let ay = normalizeAcademicYearInput(document.getElementById('vs_ay')?.value || state.termAcademicYear) || DEFAULT_ACADEMIC_YEAR;
    let subEl = document.getElementById('vs_subject');
    if (subEl) {
      let subjects = year && sem ? subjectsForCreateScheduleSlot(deptId, year, sem, ay) : [];
      let subOpts = subjects.map(s => `<option value="${escapeHtml(s.id)}">${escapeHtml(s.code)} — ${escapeHtml(s.name)}</option>`).join('');
      subEl.innerHTML = `<option value="">Select subject</option>${subOpts}`;
    }
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
  });
  if (state.modal?.type === 'addSchedule') initCreateScheduleCurriculumCascade();
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

function showFormValidationBanner(containerId, message) {
  let box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = `<div class="alert form-validation-alert" role="alert">${icon('alertTriangle', 18)}<span class="form-validation-alert-text">${escapeHtml(message)}</span></div>`;
}

// Init
initAppTheme();
state.page = resolveInitialPage();
if (sessionStorage.getItem('cen_user') && hasSupabaseClient()) {
  syncCoreDataFromSupabase().finally(() => {
    render();
  });
} else {
  render();
}