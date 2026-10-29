// 用法：node scripts/site.mjs   （先跑完 7 份 build.mjs）
// 生成 docs/：GitHub Pages 发布目录。网址用英文文件名；网页里的内嵌图片拆成单独文件，加载更快。
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';
import { loadRows, indexPage, esc } from '../src/catalog.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');
const SITE = 'https://lucky-bqr.github.io/brain-nutrition-minutes/';

await fs.rm(DOCS, { recursive: true, force: true });
for (const d of ['assets', 'pdf', 'images']) await fs.mkdir(path.join(DOCS, d), { recursive: true });
await fs.writeFile(path.join(DOCS, '.nojekyll'), '');

const rows = await loadRows(ROOT);
const NAV_CSS = `<style>.site-nav{position:sticky;top:0;z-index:9;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 16px;background:rgba(255,255,255,.94);border-bottom:1px solid #e6e8ee;font-family:"Noto Sans SC","Microsoft YaHei UI","PingFang SC",sans-serif;font-size:14.5px}
.site-nav a{color:#4c43c9;font-weight:700;text-decoration:none}.site-nav .pdf{background:#4c43c9;color:#fff;border-radius:8px;padding:4px 12px}
@media print{.site-nav{display:none}}</style>`;

for (const r of rows) {
  const src = await fs.readFile(path.join(ROOT, 'output', r.id, `${r.meta.fileName}.html`), 'utf8');
  // 内嵌图片 → assets/<slug>-NN.png；首屏之后的图片懒加载
  let n = 0;
  const files = [];
  let html = src.replace(/src="data:image\/png;base64,([^"]+)"/g, (_, b64) => {
    n += 1;
    const name = `${r.slug}-${String(n).padStart(2, '0')}.png`;
    files.push([name, b64]);
    return `src="assets/${name}"${n > 2 ? ' loading="lazy"' : ''}`;
  });
  for (const [name, b64] of files) await fs.writeFile(path.join(DOCS, 'assets', name), Buffer.from(b64, 'base64'));
  const pdfName = `${r.meta.fileName}.pdf`;
  html = html
    .replace('</head>', `<meta name="description" content="${esc(r.title)}：${esc(r.desc)}">${NAV_CSS}</head>`)
    .replace('<main class="doc">', `<nav class="site-nav"><a href="./">← 全部纪要</a><a class="pdf" href="pdf/${r.slug}.pdf" download="${esc(pdfName)}">下载 PDF</a></nav><main class="doc">`);
  await fs.writeFile(path.join(DOCS, `${r.slug}.html`), html, 'utf8');
  await fs.copyFile(path.join(ROOT, 'output', r.id, pdfName), path.join(DOCS, 'pdf', `${r.slug}.pdf`));
  await fs.copyFile(path.join(ROOT, 'output', r.id, 'images', '图解卡片.png'), path.join(DOCS, 'images', `${r.slug}-poster.png`));
  console.log('页面', `${r.slug}.html`, `（${files.length} 张图）`);
}

// 目录页缩略图：图解卡片顶部，半尺寸
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
for (const r of rows) {
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 800, deviceScaleFactor: 0.6 });
  await page.goto(pathToFileURL(path.join(ROOT, '.build', r.id, '图解卡片.html')).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(DOCS, 'images', `${r.slug}-thumb.png`), clip: { x: 0, y: 0, width: 900, height: 760 } });
  await page.close();
}
await browser.close();

const index = indexPage(
  rows,
  {
    doc: (r) => `${r.slug}.html`,
    pdf: (r) => `pdf/${r.slug}.pdf`,
    pdfName: (r) => `${r.meta.fileName}.pdf`,
    poster: (r) => `images/${r.slug}-poster.png`,
    thumb: (r) => `images/${r.slug}-thumb.png`,
  },
  {
    footer: '每份纪要的结构相同：图解卡片、总结（三级要点和配图）、章节速览、关键内容、金句时刻。点“下载 PDF”可保存打印版。',
    head: `<meta name="description" content="脑营养学两天 6 段课程的智能纪要：图解卡片、总结、章节速览、关键内容、金句时刻。">
<meta property="og:title" content="脑营养学 · 智能纪要"><meta property="og:description" content="两天 6 段课程，每段一张图解卡片 + 文字纪要。"><meta property="og:image" content="${SITE}images/overview-thumb.png">`,
  }
);
await fs.writeFile(path.join(DOCS, 'index.html'), index, 'utf8');
console.log('目录', 'docs/index.html');
