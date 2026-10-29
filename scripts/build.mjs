// 用法：node scripts/build.mjs D2-1 [--png-only]
// 产出 output/<段>/：图解卡片和配图 PNG（2 倍分辨率）、纪要网页 HTML（图片内嵌，单文件可直接发送）、PDF。
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';
import { marked } from 'marked';
import { figurePage, docPage } from '../src/templates.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

const seg = process.argv[2];
const pngOnly = process.argv.includes('--png-only');
if (!seg) throw new Error('请指定段号，例如 D2-1');

const load = async (name) => import(pathToFileURL(path.join(ROOT, 'content', name)).href);
const { meta, figures } = await load(`${seg}.mjs`);
const { html: posterHtml } = await load(`${seg}.poster.mjs`);
const out = path.join(ROOT, 'output', seg);
const srcDir = path.join(ROOT, '.build', seg); // 截图用的中间文件
const imgDir = path.join(out, 'images');
await fs.mkdir(path.join(srcDir, 'slices'), { recursive: true });
await fs.mkdir(imgDir, { recursive: true });

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--force-color-profile=srgb'] });

async function open(html, name) {
  const file = path.join(srcDir, `${name}.html`);
  await fs.writeFile(file, html, 'utf8');
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(file).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  return page;
}

// 图解卡片：整张 PNG 给客户；另按版块切片，供 PDF 在版块之间分页。
const slices = [];
{
  const page = await open(posterHtml, '图解卡片');
  const el = await page.$('#shot');
  const png = path.join(imgDir, '图解卡片.png');
  await el.screenshot({ path: png });
  console.log('PNG', path.relative(ROOT, png));
  const box = await el.boundingBox();
  const tops = await page.$$eval('#shot > section', (ss) => ss.map((s) => s.getBoundingClientRect().top + window.scrollY));
  const cuts = [box.y, ...tops.slice(1), box.y + box.height];
  for (let i = 0; i < cuts.length - 1; i++) {
    const file = path.join(srcDir, 'slices', `${i + 1}.png`);
    await page.screenshot({ path: file, clip: { x: box.x, y: cuts[i], width: box.width, height: cuts[i + 1] - cuts[i] }, captureBeyondViewport: true });
    slices.push(file);
  }
  await page.close();
}

for (const f of figures) {
  const page = await open(figurePage(f), f.file);
  const png = path.join(imgDir, `${f.file}.png`);
  await (await page.$('#shot')).screenshot({ path: png });
  await page.close();
  console.log('PNG', path.relative(ROOT, png));
}

if (!pngOnly) {
  const dataUri = async (file) => `data:image/png;base64,${(await fs.readFile(file)).toString('base64')}`;

  // 纪要正文：Markdown → HTML。章节时间戳写成 {t 1:03:32}；图片写成 ![图注](images/xxx.png)。
  const raw = await fs.readFile(path.join(ROOT, 'content', `${seg}.md`), 'utf8');
  const md = raw.replace(/\{t ([\d:]+)\}/g, '<span class="ch-time">$1</span>');
  let body = marked.parse(md);
  body = body.replace(/src="([^"]+)"/g, (_, s) => `src="${decodeURI(s)}"`); // marked 会把中文文件名转义
  body = body.replace(/^<h1>(.+?)<\/h1>/, '<h1 class="title">$1</h1>');
  body = body.replace(/<blockquote>\s*<p>(本纪要整理自课堂录音[^<]*)<\/p>\s*<\/blockquote>/, '<p class="notice">$1</p>');
  body = body.replace(/<p>(<span class="ch-time">[\d:]+<\/span>)\s*<strong>/g, '<p class="ch-head">$1<strong>');
  body = body.replace(/<h1>章节速览<\/h1>/, '<h1 class="pb">章节速览</h1>');
  body = body.replace(/<p>(「[^<]+」)<\/p>/g, '<p class="quote">$1</p>');
  body = body.replace(/<p>(—— [^<]+)<\/p>/g, '<p class="quote-note">$1</p>');

  // 网页和 PDF 都用切片拼出整张图解卡片：屏幕上无缝衔接，打印时只在版块之间分页。
  const sliceImgs = (await Promise.all(slices.map(dataUri))).map((s) => `<img src="${s}" alt="">`).join('');
  body = body.replace(
    /<p><img src="images\/图解卡片\.png" alt="([^"]*)"><\/p>/,
    `<div class="poster" role="img" aria-label="$1">${sliceImgs}</div>`
  );
  const figImgs = body.match(/<p><img src="images\/配图[^"]+" alt="[^"]*"><\/p>/g) || [];
  for (const tag of figImgs) {
    const [, src, alt] = tag.match(/src="([^"]+)" alt="([^"]*)"/);
    body = body.replace(tag, `<div class="fig"><img src="${await dataUri(path.join(out, src))}" alt="${alt}"></div>`);
  }

  const htmlFile = path.join(out, `${meta.fileName}.html`);
  await fs.writeFile(htmlFile, docPage(meta.docTitle, body), 'utf8');
  console.log('HTML', path.relative(ROOT, htmlFile));

  const page = await browser.newPage();
  await page.goto(pathToFileURL(htmlFile).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  const pdf = htmlFile.replace(/\.html$/, '.pdf');
  await page.pdf({
    path: pdf,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font-size:8px;color:#8f959e;text-align:center;font-family:'Noto Sans SC','Microsoft YaHei',sans-serif">${meta.docTitle} · <span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
  });
  await page.close();
  console.log('PDF ', path.relative(ROOT, pdf));
}

await browser.close();
