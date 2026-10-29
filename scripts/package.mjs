// 用法：node scripts/package.mjs
// 把 output/ 下 7 份纪要整理成给客户的交付文件夹（目录页 + 网页 + PDF + 图片），并打成 zip。
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { loadRows, indexPage } from '../src/catalog.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NAME = '脑营养学智能纪要（客户版）';
const DEST = path.join(ROOT, '交付', NAME);

await fs.rm(DEST, { recursive: true, force: true });
await fs.mkdir(path.join(DEST, '图片'), { recursive: true });

const rows = await loadRows(ROOT);
const prefix = (r) => (r.id === '总览' ? '00 全课总览' : r.id);
for (const r of rows) {
  const out = path.join(ROOT, 'output', r.id);
  for (const ext of ['html', 'pdf']) {
    await fs.copyFile(path.join(out, `${r.meta.fileName}.${ext}`), path.join(DEST, `${r.meta.fileName}.${ext}`));
  }
  for (const f of await fs.readdir(path.join(out, 'images'))) {
    await fs.copyFile(path.join(out, 'images', f), path.join(DEST, '图片', `${prefix(r)} ${f}`));
  }
}

const poster = (r) => `图片/${prefix(r)} 图解卡片.png`;
const index = indexPage(
  rows,
  { doc: (r) => `${r.meta.fileName}.html`, pdf: (r) => `${r.meta.fileName}.pdf`, poster, thumb: poster },
  { footer: '每份纪要的结构相同：图解卡片、总结（三级要点和配图）、章节速览、关键内容、金句时刻。网页版是单个文件，图片已内嵌，可以单独发送；“图片”文件夹里是所有图解卡片和配图的原图。' }
);
await fs.writeFile(path.join(DEST, '打开这里-目录.html'), index, 'utf8');

const zip = path.join(ROOT, '交付', `${NAME}.zip`);
await fs.rm(zip, { force: true });
// 路径含中文，直接传 -Command 会被转码弄坏，改用 -EncodedCommand（UTF-16LE base64）。
const ps = `$ProgressPreference = 'SilentlyContinue'; Compress-Archive -LiteralPath '${DEST}' -DestinationPath '${zip}' -Force`;
execFileSync('powershell', ['-NoProfile', '-EncodedCommand', Buffer.from(ps, 'utf16le').toString('base64')], { stdio: 'inherit' });
await fs.access(zip);
console.log('交付文件夹：', path.relative(ROOT, DEST));
console.log('压缩包：', path.relative(ROOT, zip));
