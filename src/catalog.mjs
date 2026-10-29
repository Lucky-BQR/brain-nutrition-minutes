// 7 份纪要的清单和目录页模板。交付包（scripts/package.mjs）和网站（scripts/site.mjs）共用。
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const SEGS = [
  { id: '总览', slug: 'overview', desc: '全课一张图解卡片、课程主线、6 段导航、各目标的首选、课上反复强调的原则' },
  { id: 'D1-1', slug: 'd1-1', desc: '营养是影响全脑的全局因素；消化的起点；嗅觉与记忆', time: '2:45:33' },
  { id: 'D1-2', slug: 'd1-2', desc: '胃酸与反流、胆汁与肝、皮肤、菌群', time: '3:00:00' },
  { id: 'D1-3', slug: 'd1-3', desc: '小肠细菌过度生长、肠漏、寄生虫、修补肠漏方案', time: '0:58:30' },
  { id: 'D2-1', slug: 'd2-1', desc: '迷走神经与脑干、疼痛、血脑屏障、DHA、铁', time: '2:40:44' },
  { id: 'D2-2', slug: 'd2-2', desc: '贫血、脱发、免疫与甲状腺、断食、代谢、节律、老年营养', time: '2:59:54' },
  { id: 'D2-3', slug: 'd2-3', desc: '补剂收尾、各目标首选、两天总结、答疑', time: '0:23:22' },
];

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 读出每份的 meta 和图解卡片标题
export async function loadRows(root) {
  const rows = [];
  for (const s of SEGS) {
    const { meta } = await import(pathToFileURL(path.join(root, 'content', `${s.id}.mjs`)).href);
    const { html } = await import(pathToFileURL(path.join(root, 'content', `${s.id}.poster.mjs`)).href);
    const title = html.match(/<div class="ttl">([^<]+)<\/div>/)[1];
    rows.push({ ...s, meta, title });
  }
  return rows;
}

// link：{ doc(r), pdf(r), poster(r), thumb(r) } 返回各链接地址；pdfName(r) 可选，作下载文件名
export function indexPage(rows, link, { footer, head = '' }) {
  const items = rows
    .map(
      (r) => `<article class="it">
<a class="th" href="${esc(link.doc(r))}"><img src="${esc(link.thumb(r))}" alt="${esc(r.title)}" loading="lazy"></a>
<div class="tx"><div class="no">${r.id === '总览' ? '全课总览' : `${esc(r.meta.docTitle.replace('脑营养学 · ', ''))} · ${r.time}`}</div>
<h2><a href="${esc(link.doc(r))}">${esc(r.title)}</a></h2><p>${esc(r.desc)}</p>
<div class="ln"><a href="${esc(link.doc(r))}">打开网页版</a><a href="${esc(link.pdf(r))}"${link.pdfName ? ` download="${esc(link.pdfName(r))}"` : ''}>PDF</a><a href="${esc(link.poster(r))}">图解卡片大图</a></div></div>
</article>`
    )
    .join('\n');
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>脑营养学 · 智能纪要</title>${head}
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:"Noto Sans SC","Microsoft YaHei UI","PingFang SC",sans-serif;color:#1f2329;background:#f7f7fa;line-height:1.7}
main{max-width:920px;margin:0 auto;padding:44px 20px 60px}
h1{font-size:32px;font-weight:900;letter-spacing:1px}
.sub{color:#646a73;margin-top:4px}
.notice{margin:16px 0 26px;background:#fff7e8;border:1px solid #ffe2b8;border-radius:10px;padding:10px 14px;color:#8a5a00;font-size:14.5px}
.it{display:grid;grid-template-columns:200px 1fr;gap:18px;background:#fff;border:1px solid #e6e8ee;border-radius:16px;padding:14px;margin-bottom:14px}
.th{display:block;height:150px;border-radius:10px;overflow:hidden;border:1px solid #eef0f4}
.th img{width:100%;height:100%;object-fit:cover;object-position:top}
.no{font-size:13.5px;color:#8b8f99;font-weight:600}
h2{font-size:22px;font-weight:900;margin:2px 0 4px}
h2 a{color:#1d2766;text-decoration:none}
p{color:#4b5563;font-size:15px}
.ln{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.ln a{font-size:14px;font-weight:700;color:#4c43c9;background:#f1efff;border-radius:8px;padding:4px 12px;text-decoration:none}
.ln a:first-child{background:#4c43c9;color:#fff}
footer{margin-top:24px;font-size:13px;color:#8b8f99}
@media (max-width:600px){main{padding:28px 16px 48px}.it{grid-template-columns:1fr}.th{height:180px}h1{font-size:26px}}
</style></head><body><main>
<h1>脑营养学 · 智能纪要</h1>
<div class="sub">主讲：钱笛　｜　2025 年 11 月 20–21 日　｜　两天 6 段录音，共约 12 小时 48 分</div>
<div class="notice">本纪要整理自课堂录音，仅供学习参考，不构成医疗建议。</div>
${items}
<footer>${footer}</footer>
</main></body></html>`;
}
