// 配图、纪要网页两种 HTML 模板（图解卡片在 content/<段>.poster.mjs）。只用系统字体（Noto Sans SC / 微软雅黑）。

const FONT = `"Noto Sans SC", "Microsoft YaHei UI", "Microsoft YaHei", "PingFang SC", sans-serif`;

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// 行内标记：**加粗**；换行写 \n 或 <br>
export const inline = (s) =>
  esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
    .replace(/\n|&lt;br&gt;/g, '<br>');

const BASE_CSS = `
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
body{font-family:${FONT};color:#1f2329;-webkit-font-smoothing:antialiased;font-feature-settings:"palt" 0}
b{font-weight:700;color:#1f2329}
`;

/* ---------------- 配图 ---------------- */

const FIG_CSS = `
.fig{width:920px;padding:26px 30px 22px;background:#fff}
.ftbl{width:100%;border-collapse:separate;border-spacing:0;border:1px solid #dee0e3;border-radius:10px;overflow:hidden;font-size:15.5px;line-height:1.6}
.ftbl th{background:#f2f3f5;font-weight:700;text-align:center;padding:14px 16px;border-bottom:1px solid #dee0e3;border-right:1px solid #dee0e3}
.ftbl td{padding:14px 20px;border-bottom:1px solid #dee0e3;border-right:1px solid #dee0e3;vertical-align:middle;color:#2b2f36}
.ftbl tr>*:last-child{border-right:0}
.ftbl tbody tr:last-child td{border-bottom:0}
.ftbl td:first-child{text-align:center;font-weight:500;color:#1f2329}
.fcap{margin-top:16px;text-align:center;font-size:14.5px;color:#646a73;line-height:1.6}
.steps{position:relative;display:grid;gap:28px;padding-top:6px}
.steps::before{content:"";position:absolute;left:0;right:0;top:22px;height:4px;border-radius:2px;background:#eff0f1}
.step{display:flex;flex-direction:column;align-items:center}
.step-no{position:relative;width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-size:16px;color:#1f2329;background:var(--dot)}
.step-box{margin-top:20px;width:100%;flex:1;border-radius:14px;background:var(--bg);padding:18px 22px 18px}
.step-title{text-align:center;font-size:20px;font-weight:500;margin-bottom:4px}
.step-tag{text-align:center;font-size:14px;color:var(--ink);font-weight:700;margin-bottom:10px}
.step-box ul{list-style:none}
.step-box li{position:relative;padding-left:16px;font-size:15px;line-height:1.65;margin:5px 0;color:#2b2f36}
.step-box li::before{content:"";position:absolute;left:2px;top:10px;width:5px;height:5px;border-radius:50%;background:#1f2329}
.fdiv{margin-top:20px;border-top:1px solid #eff0f1}
`;

const STEP_COLORS = {
  blue: { dot: '#d6defd', bg: '#ecf0fe', ink: '#2f58d4' },
  green: { dot: '#c9e9d2', bg: '#e8f5ec', ink: '#22894a' },
  yellow: { dot: '#f6e6b4', bg: '#fbf5e3', ink: '#a5760a' },
  pink: { dot: '#f8d3e2', bg: '#fdf0f5', ink: '#c02f72' },
  purple: { dot: '#ddd9fb', bg: '#f3f2fe', ink: '#4c43c9' },
};

function figTable(f) {
  const cg = f.widths ? `<colgroup>${f.widths.map((w) => `<col style="width:${w}">`).join('')}</colgroup>` : '';
  return `<table class="ftbl">${cg}<thead><tr>${f.columns.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${f.rows
    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`)
    .join('')}</tbody></table>`;
}

function figSteps(f) {
  return `<div class="steps" style="grid-template-columns:repeat(${f.steps.length},1fr)">${f.steps
    .map((s, i) => {
      const c = STEP_COLORS[s.color];
      return `<div class="step" style="--dot:${c.dot};--bg:${c.bg};--ink:${c.ink}"><div class="step-no">${i + 1}</div><div class="step-box"><div class="step-title">${inline(
        s.title
      )}</div>${s.tag ? `<div class="step-tag">${inline(s.tag)}</div>` : ''}<ul>${s.points.map((p) => `<li>${inline(p)}</li>`).join('')}</ul></div></div>`;
    })
    .join('')}</div><div class="fdiv"></div>`;
}

export function figurePage(f) {
  const body = f.type === 'table' ? figTable(f) : figSteps(f);
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>${esc(f.title)}</title><style>${BASE_CSS}${FIG_CSS}</style></head>
<body><div class="fig" id="shot">${body}${f.caption ? `<p class="fcap">${inline(f.caption)}</p>` : ''}</div></body></html>`;
}

/* ---------------- 纪要网页 ---------------- */

const DOC_CSS = `
:root{--ink:#1f2329;--ink2:#646a73;--line:#dee0e3;--soft:#f5f6f7;--link:#245bdb;--bg:#fff}
html,body{background:var(--bg)}
body{font-family:${FONT};color:var(--ink);font-size:16px;line-height:1.75}
.doc{max-width:860px;margin:0 auto;padding:56px 24px 80px}
.doc h1.title{font-size:34px;line-height:1.35;font-weight:700;margin-bottom:22px}
.doc blockquote{border-left:3px solid var(--line);padding:2px 0 2px 14px;color:var(--ink2);margin:6px 0 14px}
.doc blockquote p{margin:2px 0}
.doc .info blockquote{margin:0}
.doc .notice{background:#fff7e8;border:1px solid #ffe2b8;border-radius:8px;padding:10px 14px;color:#8a5a00;font-size:14.5px;margin:12px 0 4px}
.doc h1:not(.title){font-size:26px;line-height:1.4;font-weight:700;margin:44px 0 16px;padding-top:6px}
.doc h2{font-size:20px;font-weight:700;margin:28px 0 10px}
.doc p{margin:10px 0}
.doc ul{padding-left:24px;margin:8px 0}
.doc li{margin:5px 0}
.doc li>ul{margin:4px 0 8px}
.doc ul ul{list-style-type:circle}
.doc ul ul ul{list-style-type:disc}
.doc a{color:var(--link);text-decoration:none}
.doc a:hover{text-decoration:underline}
.doc img{display:block;max-width:100%;margin:14px auto;border-radius:6px}
.doc .poster{margin:20px 0 8px;border:1px solid var(--line);border-radius:14px;overflow:hidden}
.doc .poster img{margin:0;border-radius:0;width:100%}
.doc .fig{margin:18px 0 22px;border:1px solid var(--line);border-radius:8px;padding:6px;background:#fff}
.doc .fig img{margin:0}
.doc .ch-head{margin:24px 0 4px}
.doc .ch-time{display:inline-block;font-variant-numeric:tabular-nums;font-size:15px;min-width:70px;margin-right:8px}
.doc .ch-head+blockquote{margin:4px 0 0;font-size:15px;line-height:1.7}
.doc .quote{font-size:17px;font-weight:500;margin:28px 0 8px}
.doc .quote-note{color:var(--ink2);margin:0 0 4px}
@media (max-width:600px){.doc{padding:32px 16px 60px}.doc h1.title{font-size:27px}.doc h1:not(.title){font-size:22px}.doc .ch-time{min-width:0;display:block}}
@media print{.doc{max-width:none;padding:0}.doc h1.title{font-size:26px;margin-bottom:12px}.doc blockquote{font-size:14px}.doc .notice{margin:8px 0 6px;padding:7px 12px}.doc .poster{margin:10px 0 0;border:0;border-radius:0;overflow:visible}.doc h1.pb{break-before:page;margin-top:0}.doc .poster img{break-inside:avoid}.doc h1:not(.title){break-after:avoid}.doc .fig,.doc img{break-inside:avoid}.doc .ch-head{break-after:avoid}.doc .ch-head+blockquote{break-inside:avoid}.doc .quote{break-after:avoid}.doc>ul>li>strong,.doc li>strong:first-child{display:inline-block;break-after:avoid}.doc ul ul ul>li{break-inside:avoid}.doc li>ul{break-before:avoid}}
@page{size:A4;margin:16mm 15mm 18mm}
`;

export function docPage(title, bodyHtml) {
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(
    title
  )}</title><style>${BASE_CSS}${DOC_CSS}</style></head><body><main class="doc">${bodyHtml}</main></body></html>`;
}
