import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const ie = fs.readFileSync(path.join(root, '_ie_curriculum_block.txt'), 'utf8').trim();
const cpe = execSync('node scripts/gen-cpe-curriculum.mjs', { encoding: 'utf8', cwd: root }).trim();
const dataJs = fs.readFileSync(path.join(root, 'data.js'), 'utf8');
const start = dataJs.indexOf('// Admin curriculum catalog');
const end = dataJs.indexOf('];', start) + 2;
if (start < 0 || end < 2) throw new Error('CURRICULUM_DATA block not found');
const newBlock = `// Admin curriculum catalog (separate from subject master list used for scheduling links)
// IE: Copy of CEN SCHEDULING - IE_INFORMATION.pdf (codes, subjects, units = Lec+Lab total).
// CPE: CEN SCHEDULING CPE_INFORMATION.pdf — same.
const CURRICULUM_DATA = [
  { id:'cc_me_1', dept:'me', year:'1st Year', semester:'1st Semester', courseCode:'ME 100', courseName:'Mechanical Engineering Orientation Block', subjectCode:'COE01', subjectName:'Mechanical Engineering Orientation', units:2, section:'BSME IGM' },
${ie},
${cpe},
];`;
fs.writeFileSync(path.join(root, 'data.js'), dataJs.slice(0, start) + newBlock + dataJs.slice(end));
console.log('data.js CURRICULUM_DATA patched');
