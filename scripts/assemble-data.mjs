import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dataPath = path.join(root, 'data.js');
const genPath = path.join(root, '_generated_subjects.js');

let data = fs.readFileSync(dataPath, 'utf8');
const gen = fs.readFileSync(genPath, 'utf8');

const startMarker = 'const SUBJECTS_DATA = [';
const i0 = data.indexOf(startMarker);
if (i0 === -1) throw new Error('SUBJECTS_DATA not found');
const afterSubjectsMarker = '\n\n// PDF has no weekly matrix';
const iSched = data.indexOf(afterSubjectsMarker);
if (iSched === -1) throw new Error('block after SUBJECTS not found');
const i1 = data.lastIndexOf('];', iSched);
if (i1 === -1 || i1 < i0) throw new Error('end of SUBJECTS not found');
const afterSubjects = data.slice(i1 + 2);

const head = data.slice(0, i0);
const newData = head + gen.trim() + '\n' + afterSubjects;
fs.writeFileSync(dataPath, newData, 'utf8');
console.log('data.js SUBJECTS_DATA replaced');
