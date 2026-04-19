/**
 * Fetches curriculum CSV from Google Sheets (gviz) and prints SUBJECTS_DATA JS entries.
 * Run: node scripts/build-subjects-from-sheet.mjs
 * UTF-8 file: node scripts/build-subjects-from-sheet.mjs --write
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SHEET_ID = '1uRMvLeDvg_h5JcAQpvs5Nz8bGCm8rkLXxMBcd9ojrxw';
const SHEETS = [
  { dept: 'ie', name: 'IE_INFORMATION' },
  { dept: 'cpe', name: 'CPE_INFORMATION' },
  { dept: 'ee', name: 'EE_INFORMATION' },
  { dept: 'ece', name: 'ECE_INFORMATION' },
  { dept: 'ce', name: 'CE_INFORMATION' },
  { dept: 'me', name: 'ME_INFORMATION' },
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => resolve(d));
    }).on('error', reject);
  });
}

/** Minimal CSV row parser (handles quoted fields with commas) */
function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      q = !q;
    } else if ((c === ',' && !q) || (c === '\r' && !q)) {
      out.push(cur);
      cur = '';
    } else if (c !== '\r') {
      cur += c;
    }
  }
  out.push(cur);
  return out;
}

const SKIP_CODES = new Set([
  'YEAR', 'CODE', 'SUBJECTS', 'UNITS', 'LEC', 'LAB', 'TOTAL', 'TOTAL ',
  '1ST', '2ND', '3RD', '4TH', 'SEMESTER', 'YR',
]);

function normalizeCode(raw) {
  if (!raw) return '';
  const t = raw.trim().toUpperCase();
  if (SKIP_CODES.has(t) || /SEMESTER|YR|ROOM|SECTION|CLASSROOM|PROFESSOR/i.test(raw)) return '';
  // e.g. "CPE 29" -> "CPE29"
  let c = raw.trim().replace(/\s+/g, '');
  if (!c) return '';
  if (!/^[A-Z0-9][A-Z0-9a-z]*$/i.test(c) && !/^[A-Z]{2,}\d/i.test(c.replace(/\s/g, ''))) return '';
  return c;
}

function looksLikeCode(cell) {
  const c = cell?.trim();
  if (!c || c.length < 2) return false;
  if (/^(ROOMS?|SECTION|CLASSROOMS?|PROFESSORS?)$/i.test(c)) return false;
  if (/^\d/.test(c)) return false;
  if (/SEMESTER|YR$|YEAR/i.test(c)) return false;
  if (SKIP_CODES.has(c.toUpperCase().replace(/\s/g, ''))) return false;
  // Course codes: GEC04, CHM01a, CPE29, IEN 18 -> normalized
  const n = c.replace(/\s+/g, '');
  return /^[A-Z]{2,}[A-Z0-9]*$/i.test(n) || /^[A-Z]+\d/.test(n);
}

function rowToSubject(dept, cells) {
  // Find index of code column: first cell that looks like a course code
  let idx = -1;
  for (let i = 0; i < cells.length; i++) {
    if (looksLikeCode(cells[i])) {
      idx = i;
      break;
    }
  }
  if (idx === -1) return null;
  const codeRaw = cells[idx].trim().replace(/\s+/g, '');
  const name = (cells[idx + 1] || '').trim();
  const lec = parseInt(cells[idx + 2], 10);
  const lab = parseInt(cells[idx + 3], 10);
  if (!name || name.length < 3) return null;
  if (Number.isNaN(lec) && Number.isNaN(lab)) return null;
  const units = (Number.isFinite(lec) ? lec : 0) + (Number.isFinite(lab) ? lab : 0);
  const code = codeRaw;
  const sem = 'catalog';
  return { code, name, units: units || 3, sem, dept };
}

async function main() {
  const seen = new Map(); // dept+code -> one entry
  const legacy = [
    { id: 's1', code: 'IE101', name: 'Engineering Management', dept: 'ie', units: 3, sem: '1st', active: true },
    { id: 's2', code: 'IE102', name: 'Operations Research', dept: 'ie', units: 3, sem: '1st', active: true },
    { id: 's3', code: 'EEN01', name: 'Basic Electrical Engineering', dept: 'ee', units: 3, sem: '1st', active: true },
    { id: 's4', code: 'EEN01L', name: 'Basic EE Laboratory', dept: 'ee', units: 1, sem: '1st', active: true },
    { id: 's5', code: 'CE101', name: 'Engineering Mechanics', dept: 'ce', units: 3, sem: '1st', active: true },
    { id: 's6', code: 'ME101', name: 'Thermodynamics', dept: 'me', units: 3, sem: '1st', active: true },
    { id: 's7', code: 'ECE101', name: 'Electronics 1', dept: 'ece', units: 3, sem: '1st', active: true },
    { id: 's8', code: 'CPE101', name: 'Computer Architecture', dept: 'cpe', units: 3, sem: '1st', active: true },
    { id: 's9', code: 'CPE102', name: 'Data Structures', dept: 'cpe', units: 3, sem: '1st', active: true },
  ];

  for (const { dept, name: sheet } of SHEETS) {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${sheet}`;
    const csv = await fetchText(url);
    const lines = csv.split('\n').filter(Boolean);
    for (const line of lines) {
      const cells = parseCsvLine(line);
      const sub = rowToSubject(dept, cells);
      if (!sub) continue;
      const key = `${sub.dept}|${sub.code}`;
      if (!seen.has(key)) seen.set(key, sub);
    }
  }

  for (const x of legacy) {
    const key = `${x.dept}|${x.code}`;
    if (!seen.has(key)) seen.set(key, { ...x, active: true });
  }

  const list = [...seen.values()].sort((a, b) => {
    const c = a.dept.localeCompare(b.dept);
    if (c !== 0) return c;
    return a.code.localeCompare(b.code, undefined, { numeric: true });
  });

  let n = 0;
  const linesOut = ['const SUBJECTS_DATA = ['];
  for (const s of list) {
    const idCode = String(s.code).replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_|_$/g, '') || 'x';
    const id = s.id || `s_${s.dept}_${idCode}`;
    if (!s.id) n++;
    const sem = s.sem != null ? s.sem : 'catalog';
    const active = s.active !== false;
    linesOut.push(
      `  { id:'${id}', code:'${String(s.code).replace(/'/g, "\\'")}', name:'${String(s.name).replace(/'/g, "\\'")}', dept:'${s.dept}', units:${s.units}, sem:'${sem}', active:${active} },`
    );
  }
  linesOut.push('];');
  const text = linesOut.join('\n');
  if (process.argv.includes('--write')) {
    const outPath = path.join(__dirname, '..', '_generated_subjects.js');
    fs.writeFileSync(outPath, text + '\n', 'utf8');
    console.error(`Wrote ${outPath} (${list.length} subjects, ${n} auto ids)`);
  } else {
    console.log(text);
    console.error(`// Generated ${list.length} subjects (${n} auto ids)`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
