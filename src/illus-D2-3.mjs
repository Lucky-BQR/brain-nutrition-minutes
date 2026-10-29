// D2-3 图解卡片用的矢量插画（SVG）。示意图，非解剖比例。可复用的通用插画从 illus.mjs 引入。
import { fishOil, vitD, rbc } from './illus.mjs';

const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;

// 把一张独立的小插画（viewBox 110×84）放进大插画里
const place = (svg, x, y, w = 110, h = 84) => svg.replace('<svg ', `<svg x="${x}" y="${y}" width="${w}" height="${h}" `);

const capsule = (x, y, a, b, rot = -30, w = 40, h = 16) =>
  `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${b}"/><path d="M${x + h / 2} ${y}H${x + w / 2}V${y + h}H${x + h / 2}a${h / 2} ${h / 2} 0 0 1 0-${h}Z" fill="${a}"/><rect x="${x + 5}" y="${y + 3}" width="${w / 2 - 8}" height="3" rx="1.5" fill="#fff" opacity=".6"/></g>`;

// 红色禁止标记
const ban = (cx, cy, r = 12) =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="#ef4444" stroke-width="3.2"/><path d="M${cx - r * 0.7} ${cy - r * 0.7}L${cx + r * 0.7} ${cy + r * 0.7}" stroke="#ef4444" stroke-width="3.2" stroke-linecap="round"/>`;

// 一串葡萄：ox 为第一排中心，oy 为第一排高度
const grapeBunch = (id, ox, oy, r = 8.5) => {
  const rows = [[-1.5, -0.5, 0.5, 1.5], [-1, 0, 1], [-0.5, 0.5], [0]];
  let s = `<defs><radialGradient id="${id}" cx=".35" cy=".35" r=".75"><stop offset="0" stop-color="#c4b5fd"/><stop offset="1" stop-color="#7c3aed"/></radialGradient></defs>`;
  rows.forEach((row, i) =>
    row.forEach((k) => {
      const x = ox + k * r * 1.9;
      const y = oy + i * r * 1.65;
      s += `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#${id})" stroke="#6d28d9" stroke-width="1.3"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.38}" r="${r * 0.26}" fill="#fff" opacity=".6"/>`;
    })
  );
  return s;
};

/* ---------- 货架上的六样首选（各 110×84） ---------- */
const grapeItem = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M52 4C51 10 52 14 54 19" fill="none" stroke="#7c5a3a" stroke-width="3" stroke-linecap="round"/>
<path d="M55 11C62 1 78 1 85 7 77 15 63 17 55 11Z" fill="#86c873" stroke="#4f9a42" stroke-width="1.6"/><path d="M59 11c8-2 16-3 24-4" stroke="#d4f0c6" stroke-width="1.4" fill="none"/>
${grapeBunch('d23-gr1', 50, 25, 8.4)}
${capsule(72, 62, '#8b5cf6', '#ede9fe', -20, 32, 13)}
</svg>`;

const turmericItem = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<defs><linearGradient id="d23-tm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6cd86"/><stop offset="1" stop-color="#d48a35"/></linearGradient></defs>
<g fill="url(#d23-tm)" stroke="#a8682a" stroke-width="1.8" stroke-linejoin="round">
<path d="M42 40c-5-10-4-22 4-27 6-3 11 2 10 8-1 7-5 13-5 19Z"/>
<ellipse cx="26" cy="38" rx="8" ry="9"/>
<path d="M62 40c2-8 8-12 14-10 4 2 4 8 0 12Z"/>
<rect x="10" y="36" width="70" height="26" rx="13"/>
</g>
<path d="M28 39c-1 7 0 14 2 21M46 38c-1 8-1 15 1 22M64 38c-1 8 0 15 1 22" fill="none" stroke="#b77a35" stroke-width="1.4" stroke-linecap="round"/>
<ellipse cx="80" cy="49" rx="6.5" ry="12.5" fill="#f59e0b" stroke="#c2410c" stroke-width="1.6"/><ellipse cx="80" cy="49" rx="3.2" ry="6.5" fill="#fcd34d"/>
<path d="M70 80c3-9 9-13 16-13s13 4 16 13Z" fill="#fbbf24" stroke="#e29a00" stroke-width="1.4"/><path d="M80 72c2-1 5-1 7 0" stroke="#fde68a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
</svg>`;

const mgItem = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<defs><linearGradient id="d23-mg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0fdf4"/><stop offset="1" stop-color="#c6efd3"/></linearGradient></defs>
<rect x="16" y="6" width="58" height="66" rx="12" fill="url(#d23-mg)" stroke="#22a35a" stroke-width="2"/>
<text x="25" y="22" font-size="11" font-weight="700" fill="#15803d">12</text>
<text x="45" y="52" text-anchor="middle" font-size="27" font-weight="900" fill="#15803d">Mg</text>
<text x="45" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">镁</text>
<ellipse cx="88" cy="66" rx="15" ry="10" fill="#fff" stroke="#94a3b8" stroke-width="1.8"/><path d="M76 66h24" stroke="#cbd5e1" stroke-width="1.6"/>
</svg>`;

/* ---------- 一张图看懂：各目标的首选 ---------- */
export function choiceShelf() {
  const callout = (n, x, y, title, d1, d2) => `<g ${F}><circle cx="${x}" cy="${y}" r="19" fill="#f6747a" stroke="#fff" stroke-width="3" filter="url(#cs-sh)"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${x + 30}" y="${y + 1}" font-size="20" font-weight="800" fill="#1f2937">${title}</text>
<text x="${x + 30}" y="${y + 25}" font-size="14.5" fill="#4b5563">${d1}</text>
${d2 ? `<text x="${x + 30}" y="${y + 46}" font-size="14.5" fill="#4b5563">${d2}</text>` : ''}</g>`;
  const lead = (x1, y1, x2, y2) =>
    `<path d="M${x1} ${y1}C${x1 + (x2 - x1) * 0.45} ${y1} ${x2 - (x2 - x1) * 0.45} ${y2} ${x2} ${y2}" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="4 4"/><circle cx="${x2}" cy="${y2}" r="3" fill="#f6747a"/>`;
  const rows = [116, 228, 340]; // 三层货架上物品的中心高度
  const L = 312; // 左列物品 x
  const R = 438; // 右列物品 x
  const wood = 'fill="url(#cs-wood)" stroke="#c99a5c" stroke-width="1.6"';
  return `<svg viewBox="0 0 860 510" width="100%" aria-label="各目标的首选补剂摆在货架上，货架立在消化这块地基上" ${F}>
<defs>
<filter id="cs-sh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#f6747a" flood-opacity=".35"/></filter>
<linearGradient id="cs-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8dfba"/><stop offset="1" stop-color="#e3b783"/></linearGradient>
<linearGradient id="cs-back" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffaf3"/><stop offset="1" stop-color="#fff2e2"/></linearGradient>
<linearGradient id="cs-base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3ea"/><stop offset="1" stop-color="#fde1d1"/></linearGradient>
<linearGradient id="cs-sto" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient>
</defs>
<!-- 招牌 -->
<path d="M398 38v10M462 38v10" stroke="#c99a5c" stroke-width="2"/>
<rect x="370" y="6" width="120" height="34" rx="17" fill="#fff7ee" stroke="#f08a24" stroke-width="1.8"/>
<text x="430" y="29" text-anchor="middle" font-size="16.5" font-weight="900" fill="#c2410c">首选清单</text>
<!-- 货架 -->
<rect x="300" y="58" width="260" height="330" fill="url(#cs-back)" stroke="#f1d7b8" stroke-width="1.4"/>
<rect x="294" y="56" width="12" height="336" rx="3" ${wood}/><rect x="554" y="56" width="12" height="336" rx="3" ${wood}/>
<rect x="286" y="46" width="288" height="14" rx="6" ${wood}/>
<rect x="298" y="160" width="264" height="10" rx="4" ${wood}/>
<rect x="298" y="272" width="264" height="10" rx="4" ${wood}/>
<rect x="290" y="384" width="280" height="12" rx="5" ${wood}/>
<!-- 六样首选 -->
${place(grapeItem(), L, rows[0] - 42)}
${place(turmericItem(), L, rows[1] - 42)}
${place(fishOil(), L + 2, rows[2] - 44)}
${place(vitD(), R + 6, rows[0] - 44)}
${place(rbc(), R + 6, rows[1] - 44)}
${place(mgItem(), R + 4, rows[2] - 42)}
<!-- 地基：消化 -->
<rect x="104" y="398" width="652" height="104" rx="24" fill="url(#cs-base)" stroke="#f3c4a6" stroke-width="1.8"/>
<g transform="translate(150 408)">
<path d="M30 6L32 20" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<path d="M36 18c18-8 46-2 52 20 6 22-10 40-34 42-16 1-30-6-32-17-2-10 10-13 18-9 11 5 24-1 25-12 1-12-14-17-26-13Z" fill="url(#cs-sto)" stroke="#df7590" stroke-width="2"/>
<path d="M58 32c7 3 11 9 11 16" fill="none" stroke="#fde4ea" stroke-width="3" stroke-linecap="round"/>
</g>
<g transform="translate(614 410) scale(1.25)">
<ellipse cx="40" cy="36" rx="34" ry="26" fill="#fcd6d1"/>
<path d="M14 26c12-8 22 6 34-2s20 4 18 14-16 8-26 2-20 6-14 14 20 2 32 8" fill="none" stroke="#f29a9a" stroke-width="7" stroke-linecap="round"/>
</g>
<text x="430" y="444" text-anchor="middle" font-size="24" font-weight="900" fill="#c2410c">一切的前提：消化</text>
<text x="430" y="476" text-anchor="middle" font-size="15" fill="#4b5563">不要跳过消化系统，否则吞再多补剂也是浪费钱</text>
<!-- 指引线 -->
${lead(162, 98, 320, rows[0])}
${lead(142, 210, 318, rows[1])}
${lead(122, 322, 322, rows[2])}
${lead(611, 104, 546, rows[0])}
${lead(611, 216, 540, rows[1])}
${lead(611, 328, 548, rows[2])}
${callout('01', 40, 104, '白藜芦醇', '抗衰老、抗氧化第一位', '要吃就一次吃够量')}
${callout('02', 40, 216, '姜黄素', '广泛消炎首选', '“到哪里都能消炎”')}
${callout('03', 40, 328, '鱼油', '大人小孩都能吃，护脑', '护脑看 DHA，抗炎看 EPA')}
${callout('04', 630, 104, '维生素 D', '免疫调节最重要', '每天超 1 万单位考虑加 K2')}
${callout('05', 630, 216, '铁', '全局最容易拖后腿', '抗拒铁剂的，多吃肝脏')}
${callout('06', 630, 328, '镁', '到处都起作用的金属', '进大脑只靠苏糖酸镁')}
</svg>`;
}

/* ---------- 卡片角图（约 120×88） ---------- */
export const grapeWine = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M34 3C33 8 34 11 35 15" fill="none" stroke="#7c5a3a" stroke-width="2.6" stroke-linecap="round"/>
<path d="M36 8C42 0 55 0 60 5 54 12 42 13 36 8Z" fill="#86c873" stroke="#4f9a42" stroke-width="1.4"/>
${grapeBunch('d23-gr2', 32, 21, 7)}
<path d="M70 30h32c0 17-7 27-16 27s-16-10-16-27Z" fill="#fff" stroke="#94a3b8" stroke-width="1.8"/>
<path d="M71.5 40h29c-1.5 9-7 14-14.5 14s-13-5-14.5-14Z" fill="#be123c" opacity=".85"/>
<path d="M86 57v17" stroke="#94a3b8" stroke-width="2.4"/><path d="M76 76h20" stroke="#94a3b8" stroke-width="2.8" stroke-linecap="round"/>
${ban(104, 20, 11)}
</svg>`;

export const ginsengGoji = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<defs><linearGradient id="d23-gj" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fb7185"/><stop offset="1" stop-color="#dc2626"/></linearGradient></defs>
<path d="M40 8c-4 6-12 6-16 2M44 8c4 6 12 6 16 2" fill="none" stroke="#65a30d" stroke-width="2.6" stroke-linecap="round"/>
<ellipse cx="28" cy="10" rx="7" ry="3.4" fill="#84cc16"/><ellipse cx="56" cy="10" rx="7" ry="3.4" fill="#84cc16"/>
<path d="M36 14c-4 16-4 28 0 36-6 8-12 16-16 26 6-2 14-10 20-18 2 8 4 14 6 20 2-8 2-16 0-22 6 6 14 14 18 20-4-10-10-18-16-24 4-8 4-22 0-38Z" fill="#ecc994" stroke="#b98a4e" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M38 26h8M37 36h10M39 44h6" stroke="#c99a5c" stroke-width="1.4"/>
<g fill="url(#d23-gj)" stroke="#b91c1c" stroke-width="1.2">
<ellipse cx="82" cy="56" rx="8" ry="4.4" transform="rotate(-30 82 56)"/>
<ellipse cx="100" cy="50" rx="8" ry="4.4" transform="rotate(20 100 50)"/>
<ellipse cx="96" cy="68" rx="8" ry="4.4" transform="rotate(-10 96 68)"/>
<ellipse cx="78" cy="74" rx="8" ry="4.4" transform="rotate(25 78 74)"/>
<ellipse cx="110" cy="64" rx="7" ry="4" transform="rotate(-45 110 64)"/>
</g>
<g fill="#65a30d"><circle cx="75" cy="60" r="1.8"/><circle cx="107" cy="53" r="1.8"/><circle cx="103" cy="67" r="1.8"/><circle cx="71" cy="71" r="1.8"/></g>
</svg>`;

export const k2Bone = () => `<svg viewBox="0 0 120 88" aria-hidden="true" font-family="Noto Sans SC, Microsoft YaHei, sans-serif">
<path d="M2 12H56V38H2" fill="#fecdd3" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M2 19H56V31H2Z" fill="#f87171" opacity=".55"/>
<ellipse cx="56" cy="25" rx="8" ry="13" fill="#fda4af" stroke="#e98ca1" stroke-width="1.8"/>
<ellipse cx="56" cy="25" rx="4.2" ry="7.5" fill="#dc2626"/>
<g fill="#fff" stroke="#9ca3af" stroke-width="1.2"><circle cx="12" cy="14.5" r="2.4"/><circle cx="26" cy="35.5" r="2.4"/><circle cx="38" cy="14.5" r="2.4"/><circle cx="44" cy="35.5" r="2.4"/><circle cx="18" cy="35.5" r="1.8"/></g>
<path d="M66 40c10 4 14 12 13 20" fill="none" stroke="#0f7f78" stroke-width="2.6" stroke-linecap="round"/><path d="M73 56l6 6 5-8" fill="none" stroke="#0f7f78" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
<g fill="#fff" stroke="#9ca3af" stroke-width="1.2"><circle cx="72" cy="46" r="2.2"/><circle cx="77" cy="52" r="2.2"/></g>
<circle cx="98" cy="24" r="13" fill="#d7f3f0" stroke="#0f7f78" stroke-width="2"/><text x="98" y="29" text-anchor="middle" font-size="12.5" font-weight="900" fill="#0f7f78">K2</text>
<g fill="#fff7e6" stroke="#d6b98a" stroke-width="1.8"><circle cx="46" cy="68" r="6.5"/><circle cx="46" cy="79" r="6.5"/><circle cx="106" cy="68" r="6.5"/><circle cx="106" cy="79" r="6.5"/><rect x="46" y="66" width="60" height="15" rx="3"/></g>
<rect x="45" y="67.5" width="62" height="12" fill="#fff7e6"/>
<g fill="#fff" stroke="#c8ad7e" stroke-width="1"><circle cx="64" cy="73.5" r="2"/><circle cx="76" cy="73.5" r="2"/><circle cx="88" cy="73.5" r="2"/></g>
</svg>`;

/* ---------- 镁的步骤图（约 140×88） ---------- */
const bottle = (x, y, cap, capLine, label, ink, text, fs = 14) =>
  `<rect x="${x + 6}" y="${y}" width="30" height="10" rx="3" fill="${cap}" stroke="${capLine}" stroke-width="1.6"/>
<rect x="${x}" y="${y + 8}" width="42" height="56" rx="9" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
<rect x="${x + 4}" y="${y + 22}" width="34" height="26" rx="4" fill="${label}"/>
<text x="${x + 21}" y="${y + 40}" text-anchor="middle" font-size="${fs}" font-weight="900" fill="${ink}">${text}</text>`;

export const morningMg = () => `<svg viewBox="0 0 140 88" aria-hidden="true" ${F}>
<path d="M4 72h76" stroke="#fcd9a8" stroke-width="3" stroke-linecap="round"/>
<path d="M18 72a22 22 0 0 1 44 0Z" fill="#fcd34d" stroke="#f59e0b" stroke-width="2"/>
<g stroke="#f59e0b" stroke-width="3" stroke-linecap="round"><path d="M40 40v-10M18 50l-7-6M62 50l7-6M10 64H3M70 64h7"/></g>
${bottle(88, 14, '#60a5fa', '#3b82f6', '#dbeafe', '#1d4ed8', 'Mg')}
</svg>`;

export const eveningMg = () => `<svg viewBox="0 0 140 88" aria-hidden="true" ${F}>
<path d="M24 6a17 17 0 1 0 16 25 14 14 0 1 1-16-25Z" fill="#fcd34d" stroke="#e5a50a" stroke-width="1.6"/>
<path d="M48 10l1.6 4 4 1.6-4 1.6-1.6 4-1.6-4-4-1.6 4-1.6Z" fill="#fcd34d"/>
${bottle(8, 24, '#a78bfa', '#8b5cf6', '#ede9fe', '#6d28d9', 'Mg')}
<g transform="translate(78 10)"><path d="M6 30C2 16 16 4 29 8c8-8 26-5 27 8 8 4 7 18-1 22-4 10-21 11-27 4-11 4-24-2-22-12Z" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M18 22c4-4 9-4 12 0M26 34c4-4 10-4 14 0M38 18c3-3 8-3 10 1" fill="none" stroke="#fde4ea" stroke-width="2.4" stroke-linecap="round"/></g>
<path d="M54 66C72 70 88 66 98 56" fill="none" stroke="#8b5cf6" stroke-width="2.4" stroke-dasharray="4 3" stroke-linecap="round"/><path d="M90 54l9 1-2 9" fill="none" stroke="#8b5cf6" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const noMgO = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
${bottle(30, 14, '#cbd5e1', '#94a3b8', '#f1f5f9', '#475569', '氧化镁', 11)}
${ban(90, 22, 15)}
</svg>`;

export const crampLeg = () => `<svg viewBox="0 0 130 88" aria-hidden="true" ${F}>
<path d="M54 4C44 18 42 34 50 48c4 8 6 14 6 22 -2 6 0 12 6 12H98c6 0 6-8 0-10L78 66c-2-16 2-40 0-62Z" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M52 22c-3 8-2 16 2 22" fill="none" stroke="#f3b9a0" stroke-width="2" stroke-linecap="round"/>
<path d="M40 18l-9 9h9l-9 11" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 14l-5-4M24 30h-7M30 44l-5 4" stroke="#f97316" stroke-width="2.4" stroke-linecap="round"/>
<ellipse cx="22" cy="72" rx="16" ry="10" fill="#fff" stroke="#94a3b8" stroke-width="1.8"/><text x="22" y="76.5" text-anchor="middle" font-size="11" font-weight="900" fill="#16a34a">Mg</text>
</svg>`;

/* ---------- 鱼油对比小图（64×46） ---------- */
const softgel = (id, label) => `<defs><radialGradient id="${id}" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/></radialGradient></defs>
<ellipse cx="24" cy="28" rx="22" ry="14" fill="url(#${id})" stroke="#d48806" stroke-width="1.6"/><ellipse cx="17" cy="22" rx="7" ry="3" fill="#fff" opacity=".55"/>
<text x="24" y="32.5" text-anchor="middle" font-size="12" font-weight="900" fill="#92400e">${label}</text>`;

export const epaGel = () => `<svg viewBox="0 0 64 46" aria-hidden="true" ${F}>${softgel('d23-epa', 'EPA')}
<path d="M54 4c4 6 9 10 7 17-1 4-4 6-8 6s-7-3-7-7c0-4 3-6 4-9 1 3 3 4 4 4 0-3-1-6 0-11Z" fill="#fb923c" stroke="#ea580c" stroke-width="1.2"/>
<path d="M42 2v11M38 9l4 4 4-4" fill="none" stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const dhaGel = () => `<svg viewBox="0 0 64 46" aria-hidden="true" ${F}>${softgel('d23-dha', 'DHA')}
<path d="M44 14c-2-6 4-11 9-10 3-3 10-2 10 3 3 2 2 7-1 8-1 4-8 4-10 2-4 2-8 0-8-3Z" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.4"/>
<path d="M49 10c2-2 4-2 5 0M54 13c2-2 4-2 5 0" fill="none" stroke="#fde4ea" stroke-width="1.4" stroke-linecap="round"/>
</svg>`;

/* ---------- 不作首选的格子（110×84） ---------- */
export const ginkgo = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<defs><linearGradient id="d23-gk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe59a"/><stop offset="1" stop-color="#7cc24e"/></linearGradient></defs>
<path d="M50 80V54" stroke="#6b8e23" stroke-width="3" stroke-linecap="round"/>
<path d="M50 56C31 56 11 42 11 22c0-4 2-8 6-10 10-4 24-2 33 10 9-12 23-14 33-10 4 2 6 6 6 10 0 20-20 34-39 34Z" fill="url(#d23-gk)" stroke="#5a9b2f" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M50 54L21 20M50 54L33 14M50 54L44 24M50 54L56 24M50 54L67 14M50 54L79 20" stroke="#e2f5cf" stroke-width="1.4" stroke-linecap="round"/>
${capsule(72, 64, '#22c55e', '#dcfce7', -20, 30, 12)}
</svg>`;

export const quercetin = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<g stroke="#ef4444" stroke-width="2" stroke-linecap="round">${[0, 45, 90, 135, 180, 225, 270, 315]
  .map((a) => {
    const r = (a * Math.PI) / 180;
    const c = (k) => [34 + Math.cos(r) * k, 40 + Math.sin(r) * k].map((v) => v.toFixed(1));
    const [x1, y1] = c(16);
    const [x2, y2] = c(24);
    return `<path d="M${x1} ${y1}L${x2} ${y2}"/><circle cx="${x2}" cy="${y2}" r="3" fill="#fca5a5"/>`;
  })
  .join('')}</g>
<circle cx="34" cy="40" r="17" fill="#fecaca" stroke="#ef4444" stroke-width="1.8"/>
<g fill="#f87171"><circle cx="28" cy="35" r="3"/><circle cx="40" cy="44" r="3.4"/><circle cx="31" cy="47" r="2.2"/><circle cx="41" cy="33" r="2"/></g>
${capsule(58, 42, '#f59e0b', '#fef3c7', -30, 46, 18)}
</svg>`;

export const comboBottle = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<rect x="38" y="6" width="34" height="12" rx="3" fill="#c4b5fd" stroke="#8b5cf6" stroke-width="1.6"/>
<rect x="32" y="16" width="46" height="62" rx="10" fill="#fff" stroke="#a78bfa" stroke-width="2"/>
<rect x="36" y="32" width="38" height="30" rx="4" fill="#ede9fe"/>
<text x="55" y="52" text-anchor="middle" font-size="14" font-weight="900" fill="#6d28d9">复方</text>
${ban(88, 22, 13)}
</svg>`;

export const rawSack = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<path d="M26 30c-2-10 6-16 14-14 10-6 26-6 34 0 8-2 16 4 14 14 6 14 6 32 0 46H26c-6-12-6-32 0-46Z" fill="#f5e6c8" stroke="#c99a5c" stroke-width="2" stroke-linejoin="round"/>
<path d="M38 24c10 4 28 4 38 0" fill="none" stroke="#a8742e" stroke-width="2.6" stroke-linecap="round"/>
<text x="57" y="60" text-anchor="middle" font-size="16" font-weight="900" fill="#8a6a2f">原料</text>
<path d="M8 80c3-7 8-10 13-10s10 3 13 10Z" fill="#fff" stroke="#d6c4a0" stroke-width="1.4"/>
${ban(94, 20, 12)}
</svg>`;
