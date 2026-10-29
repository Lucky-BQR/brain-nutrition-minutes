// 图解卡片（仿"图解＋知识要点"海报）的公共样式和版块。每段的内容写在 content/<段>.poster.mjs。
// 版块用 <section> 分开：build.mjs 按 section 切片，PDF 只在版块之间分页。
import { bulb } from './illus.mjs';

const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
body{background:#fff;font-family:"Noto Sans SC","Microsoft YaHei UI",sans-serif;color:#1f2329;-webkit-font-smoothing:antialiased}
b{font-weight:800}
.poster{width:900px;padding:30px 30px 22px;position:relative;overflow:hidden;
  background:radial-gradient(420px 260px at 96% 2%,#efeaff 0,rgba(239,234,255,0) 70%),radial-gradient(380px 260px at 0% 44%,#fff1e6 0,rgba(255,241,230,0) 70%),radial-gradient(420px 300px at 100% 78%,#e9f6ff 0,rgba(233,246,255,0) 70%),#fff}
.ttl{position:relative;display:inline-block;font-size:56px;font-weight:900;letter-spacing:3px;line-height:1.15;z-index:0}
.ttl::after{content:"";position:absolute;left:-8px;right:-18px;bottom:-2px;height:24px;border-radius:14px;z-index:-1;background:linear-gradient(90deg,#d8d1ff,#ece7ff 70%,rgba(236,231,255,0))}
.sub{font-size:23px;font-weight:600;color:#2b2f45;margin-top:8px;letter-spacing:1px}
.core{display:flex;align-items:center;gap:18px;margin-top:20px;background:#fff8e7;border:1.5px solid #f6e3b5;border-radius:18px;padding:16px 22px}
.core-l{display:flex;align-items:center;gap:8px;padding-right:20px;border-right:2px solid #f0d699;flex:none}
.core-l h3{font-size:31px;font-weight:900;color:#c2410c;letter-spacing:2px}
.core ul{list-style:none}
.core li{position:relative;padding-left:18px;font-size:16.5px;line-height:1.85}
.core li::before{content:"";position:absolute;left:2px;top:12px;width:7px;height:7px;border-radius:50%;background:#1f2329}
.sh{display:inline-block;margin:26px 0 12px;font-size:24px;font-weight:900;color:#1d2766;letter-spacing:1px;padding:5px 30px 6px 16px;border-radius:12px;background:linear-gradient(90deg,#e2ddff,#efecff 75%,rgba(239,236,255,0))}
.hero{border-radius:20px;background:linear-gradient(180deg,#fffaf6,#fff);border:1.5px solid #f8e4d8;padding:10px 6px 4px}
.hero-note{font-size:14px;color:#6b7280;text-align:center;margin-top:4px}
.cards{display:grid;gap:12px}
.pc{position:relative;border-radius:18px;padding:14px 14px 14px;border:1.6px solid var(--line);background:linear-gradient(180deg,var(--bg) 0,#fff 85%)}
.pc-h{font-size:20px;font-weight:900;color:var(--ink);letter-spacing:.5px}
.pc-ill{position:absolute;right:8px;top:8px;width:110px;height:76px}
.pc-ill svg{width:100%;height:100%}
.pc-pill{display:inline-block;margin:10px 0 6px;background:var(--pill);color:var(--ink);font-weight:800;font-size:14px;padding:4px 12px;border-radius:9px}
.pc ul{list-style:none;margin-top:8px}
.pc li{position:relative;padding-left:17px;font-size:15px;line-height:1.6;margin:7px 0;color:#262a33}
.pc li::before{content:"";position:absolute;left:1px;top:8px;width:9px;height:9px;border-radius:50%;background:var(--ink)}
.steps{position:relative;display:grid;gap:12px}
.steps::before{content:"";position:absolute;left:40px;right:40px;top:19px;border-top:2.5px dashed #f6b778;z-index:0}
.st{position:relative;z-index:1;text-align:center}
.st-no{width:38px;height:38px;border-radius:50%;margin:0 auto 8px;display:grid;place-items:center;background:#f08a24;color:#fff;font-weight:900;font-size:16px;box-shadow:0 0 0 5px #fff}
.st-box{border-radius:16px;background:#fff7ee;border:1.5px solid #fbdcbc;padding:10px 10px 12px;height:calc(100% - 46px)}
.st-ill{height:74px;display:flex;justify-content:center}
.st-ill svg{height:100%}
.st-t{font-size:18px;font-weight:900;color:#d4600a;margin-top:6px}
.st-k{display:inline-block;margin:6px 0 6px;font-size:13px;font-weight:800;color:#b45309;background:#ffedd5;padding:2px 10px;border-radius:8px}
.st-d{font-size:14px;line-height:1.6;color:#374151}
.pain{display:grid;grid-template-columns:300px 1fr 132px;gap:8px;align-items:center;border-radius:20px;border:1.5px solid #f5d7e3;background:linear-gradient(180deg,#fff6fa,#fff);padding:12px 14px 12px 6px}
.pain-k{display:flex;flex-direction:column;gap:12px}
.pk{display:flex;gap:10px;align-items:flex-start;border-radius:14px;padding:10px 12px;background:#fff;border:1.5px solid var(--c)}
.pk i{flex:none;width:16px;height:16px;border-radius:50%;background:var(--c);margin-top:4px}
.pk b{display:block;font-size:17px;color:#111827}
.pk span{font-size:14.5px;color:#374151;line-height:1.55}
.pain-note{grid-column:1/-1;font-size:14.5px;color:#9d174d;font-weight:700;text-align:center;padding:6px 0 2px}
.types{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
.ty{position:relative;border-radius:16px;padding:12px 14px 14px;border:1.6px solid var(--line);background:linear-gradient(180deg,var(--bg),#fff 90%)}
.chips{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin-top:8px}
.chips em{font-style:normal;font-size:14px;font-weight:800;color:var(--ink);background:#fff;border:1.5px solid var(--line);border-radius:9px;padding:3px 10px}
.chips i{font-style:normal;font-weight:800;color:var(--ink)}
.ty h4{font-size:18px;font-weight:900;color:var(--ink)}
.ty p{font-size:14.5px;line-height:1.65;color:#374151;margin-top:4px}
.ty p b{color:var(--ink)}
.ty svg{position:absolute;right:12px;top:10px;width:64px;height:46px}
.ty-note{font-size:14px;color:#4b5563;margin-top:8px;text-align:center}
.nut{display:grid;gap:10px}
.nt{border-radius:16px;padding:10px 10px 12px;text-align:center;border:1.5px solid var(--line);background:linear-gradient(180deg,var(--bg),#fff 85%)}
.nt svg{height:66px}
.nt h5{font-size:17px;font-weight:900;color:var(--ink);margin:2px 0 4px}
.nt .r{font-size:13.5px;color:#374151;line-height:1.55;min-height:42px}
.nt .u{margin-top:6px;font-size:13px;line-height:1.5;font-weight:700;color:#111827;background:#fff;border-radius:10px;padding:6px 6px;border:1px dashed var(--line)}
.memo{margin-top:10px;border-radius:12px;background:#f5f3ff;padding:9px 14px;font-size:15px;text-align:center;color:#2e2a55}
.memo b{color:#5b21b6}
.cmp{width:100%;border-collapse:separate;border-spacing:0;border:1.5px solid #d9dde8;border-radius:14px;overflow:hidden;font-size:15px}
.cmp th{background:#eef1f8;text-align:left;padding:10px 16px;font-weight:900;font-size:15.5px}
.cmp td{padding:10px 16px;border-top:1px solid #e3e6ee;line-height:1.55;color:#262a33}
.cmp td:first-child{font-weight:800;color:#111827;white-space:nowrap;border-right:1px solid #e3e6ee;width:30%}
.cmp th:first-child{border-right:1px solid #e3e6ee}
.foot{display:flex;justify-content:space-between;margin-top:16px;font-size:12.5px;color:#8b8f99}
`;

export const li = (arr) => `<ul>${arr.map((t) => `<li>${t}</li>`).join('')}</ul>`;

// 配色：每个卡片/格子传 { bg, line, ink, pill }
export const C = {
  purple: { bg: '#f4f1ff', line: '#e2dcfb', ink: '#5b45d6', pill: '#e9e4ff' },
  blue: { bg: '#eef6ff', line: '#d5e6fb', ink: '#1d6fd1', pill: '#dfeeff' },
  green: { bg: '#effaf1', line: '#d2efd9', ink: '#1f8a4c', pill: '#dcf5e3' },
  pink: { bg: '#fff0f5', line: '#f8d3e2', ink: '#c02f72', pill: '#fde2ed' },
  orange: { bg: '#fff6ec', line: '#fbdcbc', ink: '#c55f0a', pill: '#ffe8d1' },
  yellow: { bg: '#fff8e6', line: '#f6e2b0', ink: '#b45309', pill: '#fdefc8' },
  teal: { bg: '#ecf9f8', line: '#cdece9', ink: '#0f7f78', pill: '#d7f3f0' },
  red: { bg: '#fff1f1', line: '#fbd5d5', ink: '#c81e1e', pill: '#fee2e2' },
  tan: { bg: '#f8f6ee', line: '#e7dfc4', ink: '#8a6a2f', pill: '#efe8d2' },
};
const vars = (c) => `--bg:${c.bg};--line:${c.line};--ink:${c.ink};--pill:${c.pill}`;

// 2～3 张并排卡片：{ c, ill, title, pill, points[] }
export const cards = (items) =>
  `<div class="cards" style="grid-template-columns:repeat(${items.length},1fr)">${items
    .map((o) => `<div class="pc" style="${vars(o.c)}"><div class="pc-ill">${o.ill}</div><div class="pc-h">${o.title}</div><div class="pc-pill">${o.pill}</div>${li(o.points)}</div>`)
    .join('')}</div>`;

// 橙色步骤时间轴：{ ill, title, tag, text }
export const steps = (items) =>
  `<div class="steps" style="grid-template-columns:repeat(${items.length},1fr)">${items
    .map(
      (s, i) =>
        `<div class="st"><div class="st-no">${String(i + 1).padStart(2, '0')}</div><div class="st-box"><div class="st-ill">${s.ill}</div><div class="st-t">${s.title}</div><div class="st-k">${s.tag}</div><div class="st-d">${s.text}</div></div></div>`
    )
    .join('')}</div>`;

// 营养素 / 要点格子：{ c, ill, name, role, use }
export const tiles = (items) =>
  `<div class="nut" style="grid-template-columns:repeat(${items.length},1fr)">${items
    .map((o) => `<div class="nt" style="${vars(o.c)}">${o.ill}<h5>${o.name}</h5><div class="r">${o.role}</div><div class="u">${o.use}</div></div>`)
    .join('')}</div>`;

// 左右对比框：{ c, title, desc, chips[], ill }
export const types = (items, note = '') =>
  `<div class="types" style="grid-template-columns:repeat(${items.length},1fr)">${items
    .map(
      (o) =>
        `<div class="ty" style="${vars(o.c)}"><div><h4>${o.title}</h4><p>${o.desc}</p><div class="chips">${o.chips
          .map((x) => `<em>${x}</em>`)
          .join('<i>+</i>')}</div></div>${o.ill || ''}</div>`
    )
    .join('')}</div>${note ? `<div class="ty-note">${note}</div>` : ''}`;

// 图 + 色块说明 + 图：{ left, keys: [{ color, title, text }], right, note }
export const map = (o) =>
  `<div class="pain"><div>${o.left}</div><div class="pain-k">${o.keys
    .map((k) => `<div class="pk" style="--c:${k.color}"><i></i><div><b>${k.title}</b><span>${k.text}</span></div></div>`)
    .join('')}</div><div>${o.right}</div>${o.note ? `<div class="pain-note">${o.note}</div>` : ''}</div>`;

export const memo = (h) => `<div class="memo">${h}</div>`;
export const hero = (svg) => `<div class="hero">${svg}</div>`;
export const compare = (rows, head = ['容易混淆', '这样区分']) =>
  `<table class="cmp"><thead><tr><th>${head[0]}</th><th>${head[1]}</th></tr></thead><tbody>${rows
    .map(([a, b]) => `<tr><td>${a}</td><td>${b}</td></tr>`)
    .join('')}</tbody></table>`;

// 整张卡片：{ title, sub, core[3], sections: [{ title, html }], source, css }
export function page(o) {
  const secs = o.sections.map((s) => `<section>
<div class="sh">${s.title}</div>
${s.html}
</section>`);
  const foot = `<div class="foot"><span>${o.source}</span><span>整理自课堂录音，仅供学习参考，不构成医疗建议 · 示意图，非解剖比例</span></div>`;
  secs[secs.length - 1] = secs[secs.length - 1].replace(/<\/section>$/, `${foot}
</section>`);
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>${o.title}</title><style>${CSS}${o.css || ''}</style></head><body>
<div class="poster" id="shot">
<section>
<div class="ttl">${o.title}</div>
<div class="sub">${o.sub}</div>
<div class="core"><div class="core-l">${bulb()}<h3>核心结论</h3></div>${li(o.core)}</div>
</section>
${secs.join('\n')}
</div></body></html>`;
}
