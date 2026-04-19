import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const ieBlock = execSync('node scripts/gen-ie-curriculum.mjs', { encoding: 'utf8', cwd: root }).trim();
const cpeBlock = execSync('node scripts/gen-cpe-curriculum.mjs', { encoding: 'utf8', cwd: root }).trim();
let dataJs = fs.readFileSync(path.join(root, 'data.js'), 'utf8');
const reIe = /\s*\{ id:'cc_ie_001'[\s\S]*?\{ id:'cc_ie_066'[^}\r\n]*\}/;
if (!reIe.test(dataJs)) throw new Error('IE block cc_ie_001–066 not found');
dataJs = dataJs.replace(reIe, ieBlock);
const reCpe = /\s*\{ id:'cc_cpe_001'[\s\S]*?\{ id:'cc_cpe_072'[^}\r\n]*\}/;
if (!reCpe.test(dataJs)) throw new Error('CPE block cc_cpe_001–072 not found');
dataJs = dataJs.replace(reCpe, cpeBlock);
dataJs = dataJs.replace(
  /\{ id:'cc_me_1', dept:'me',[^}]+\}/,
  "{ id:'cc_me_1', dept:'me', year:'1st Year', semester:'1st Semester', courseCode:'ME 100', courseName:'Mechanical Engineering Orientation Block', subjectCode:'COE01', subjectName:'Mechanical Engineering Orientation', lecUnits:2, labUnits:0, units:2, section:'BSME IGM' }",
);
fs.writeFileSync(path.join(root, 'data.js'), dataJs);
console.log('data.js updated with lecUnits/labUnits');
