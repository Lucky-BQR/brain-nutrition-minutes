// D1-3 图解卡片用的矢量插画（SVG）。示意图，非解剖比例。id 统一加 d13- 前缀，避免和同页其他插画冲突。
const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;

/* ---------- 一张图看懂：肠漏是怎么发生的 ---------- */
export function leakMap() {
  const callout = (n, x, y, title, lines, anchor = 'start') => {
    const tx = anchor === 'start' ? x + 30 : x - 30;
    return `<g ${F}><circle cx="${x}" cy="${y}" r="19" fill="#f6747a" stroke="#fff" stroke-width="3" filter="url(#d13-sh)"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${tx}" y="${y + 1}" text-anchor="${anchor}" font-size="20" font-weight="800" fill="#1f2937">${title}</text>
${lines.map((l, i) => `<text x="${tx}" y="${y + 25 + i * 21}" text-anchor="${anchor}" font-size="14.5" fill="#4b5563">${l}</text>`).join('')}</g>`;
  };
  const lead = (d) => `<path d="${d}" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="4 4"/>`;
  // 大分子：一串紫色珠子
  const chain = (pts, r = 6) =>
    `<g>${pts
      .slice(1)
      .map((p, i) => `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${p[0]}" y2="${p[1]}" stroke="#7c5ce0" stroke-width="2.4"/>`)
      .join('')}${pts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="#b6a2fb" stroke="#6d4fd6" stroke-width="1.4"/>`).join('')}</g>`;
  // 小分子（消化好的氨基酸等）
  const small = (x, y) => `<circle cx="${x}" cy="${y}" r="4.5" fill="#86d19a" stroke="#4fae6a" stroke-width="1.3"/>`;
  // 肠壁细胞：顶上一排微绒毛
  const cell = (x, w, broken = false) => {
    const villi = broken
      ? ''
      : Array.from({ length: Math.floor((w - 4) / 5) }, (_, i) => `<rect x="${x + 3 + i * 5}" y="95" width="3" height="10" rx="1.5" fill="#f4a3b4"/>`).join('');
    const body = broken
      ? `<path d="M${x} 216V114l5-8 6 6 5-9 5 7 ${w - 21} -4V216Z" fill="#fde1e7" stroke="#e98ca1" stroke-width="1.6" stroke-dasharray="4 3" stroke-linejoin="round"/>
<path d="M${x + 8} 128l6 10-4 8M${x + 18} 150l-4 10" fill="none" stroke="#f0a3b4" stroke-width="1.4" stroke-linecap="round"/>`
      : `<rect x="${x}" y="104" width="${w}" height="112" rx="7" fill="url(#d13-cell)" stroke="#e98ca1" stroke-width="1.6"/>`;
    return `${villi}${body}<ellipse cx="${x + w / 2}" cy="180" rx="${w / 2 - 6}" ry="10" fill="#e17d96" opacity="${broken ? 0.3 : 0.55}"/>`;
  };
  const btn = (x, y, open = false) =>
    open
      ? `<circle cx="${x}" cy="${y}" r="3.6" fill="#fde68a" stroke="#d99e00" stroke-width="1.2" opacity=".9"/>`
      : `<circle cx="${x}" cy="${y}" r="4.4" fill="#f5c518" stroke="#c58a00" stroke-width="1.4"/>`;
  // 抗体：Y 字，(x,y) 为两臂开口处，rot=0 时开口朝上
  const ab = (x, y, rot = 0) =>
    `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M-5 0l5 7 5-7M0 7v10" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const chip = (x, y, t, c) => {
    const w = t.length * 12.5 + 14;
    return `<g><rect x="${x}" y="${y}" width="${w}" height="24" rx="8" fill="${c.bg}" stroke="${c.line}" stroke-width="1.2"/><text x="${x + w / 2}" y="${y + 17}" text-anchor="middle" font-size="12.5" font-weight="700" fill="${c.ink}">${t}</text></g>`;
  };
  const chipRow = (x, y, arr, c) => {
    let cx = x;
    return arr
      .map((t) => {
        const s = chip(cx, y, t, c);
        cx += t.length * 12.5 + 14 + 6;
        return s;
      })
      .join('');
  };
  const OR = { bg: '#fff3e6', line: '#fbd1a6', ink: '#c2410c' };
  const GR = { bg: '#edf9f0', line: '#c6ead0', ink: '#1f8a4c' };

  // 右侧肠漏细胞：宽 26，间隙 14
  const leakCells = [428, 468, 508, 548];
  return `<svg viewBox="0 0 860 500" width="100%" aria-label="肠漏示意：肠壁细胞之间的扣子松开，没被消化打散的大分子挤过缝隙进入血液，引发过敏、自体免疫和炎症" ${F}>
<defs>
<filter id="d13-sh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#f6747a" flood-opacity=".35"/></filter>
<linearGradient id="d13-cell" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fcd3dc"/><stop offset="1" stop-color="#f8b4c3"/></linearGradient>
<linearGradient id="d13-lumen" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffaf0"/><stop offset="1" stop-color="#fff3e2"/></linearGradient>
<linearGradient id="d13-blood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fda4a4"/><stop offset="1" stop-color="#f47b7b"/></linearGradient>
<linearGradient id="d13-flame" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ef4444"/><stop offset=".6" stop-color="#f97316"/><stop offset="1" stop-color="#fbbf24"/></linearGradient>
<marker id="d13-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#a78bfa"/></marker>
</defs>

<!-- 蛇毒比喻 -->
<g transform="translate(14 14)">
<rect width="250" height="114" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="16" y="26" font-size="14" font-weight="800" fill="#b45309">蛇毒的比喻</text>
<path d="M196 22c6-8 14-8 18-2s10 6 14 0 8-6 12 0" fill="none" stroke="#65a30d" stroke-width="4.5" stroke-linecap="round"/>
<ellipse cx="194" cy="22" rx="6.5" ry="4.6" fill="#84cc16" stroke="#4d7c0f" stroke-width="1.2"/><circle cx="192" cy="20.8" r="1.2" fill="#1f2937"/><path d="M188 23l-5 1.5" stroke="#ef4444" stroke-width="1.2" stroke-linecap="round"/>
<text x="16" y="54" font-size="14" fill="#374151">蛇毒是蛋白质，咬伤入血会致命；</text>
<text x="16" y="76" font-size="14" fill="#374151">吸出来、咽下去却没事：</text>
<text x="16" y="98" font-size="14" fill="#374151">它被消化成了<tspan font-weight="800" fill="#1f8a4c">小分子氨基酸</tspan>。</text>
</g>

<!-- 什么会让肠道变漏 -->
<g transform="translate(604 14)">
<rect width="246" height="130" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="16" y="26" font-size="14" font-weight="800" fill="#b45309">什么会让肠道变漏</text>
${chipRow(16, 38, ['喝酒', '甲减', '长期压力'], OR)}
${chipRow(16, 68, ['撞头', '中风', '感染', '特定食物'], OR)}
${chipRow(16, 98, ['麸质', '茄科（敏感者）'], GR)}
</g>

<!-- 放大的肠壁 -->
<rect x="290" y="14" width="300" height="290" rx="20" fill="#fff" stroke="#f3d6c9" stroke-width="1.6"/>
<path d="M291 34a19 19 0 0 1 19-19h260a19 19 0 0 1 19 19v62H291Z" fill="url(#d13-lumen)"/>
<text x="302" y="38" font-size="12" fill="#a8a29e">肠腔</text>
<rect x="338" y="22" width="40" height="21" rx="10.5" fill="#dcf5e3"/><text x="358" y="37" text-anchor="middle" font-size="12.5" font-weight="800" fill="#1f8a4c">正常</text>
<rect x="481" y="22" width="40" height="21" rx="10.5" fill="#fee2e2"/><text x="501" y="37" text-anchor="middle" font-size="12.5" font-weight="800" fill="#c81e1e">肠漏</text>
${[[314, 60], [402, 62], [420, 50], [520, 58], [574, 52], [584, 74]].map(([x, y]) => small(x, y)).join('')}
<!-- 左：细胞紧贴，扣子扣紧 -->
${[302, 330, 358, 386].map((x) => cell(x, 28)).join('')}
${[330, 358, 386].map((x) => btn(x, 112) + btn(x, 125)).join('')}
${small(344, 146)}${small(372, 160)}${small(316, 166)}
${chain([[322, 84], [338, 77], [354, 84], [370, 77], [386, 84]])}
<!-- 右：扣子松开，缝隙变大 -->
${leakCells.map((x, i) => cell(x, 26, i === 2)).join('')}
${[[414, 428], [454, 468], [494, 508], [534, 548]].map(([a, b]) => btn(a + 2, 112, true) + btn(b - 2, 116, true)).join('')}
${chain([[461, 66], [461, 82], [461, 98], [461, 114], [461, 130]])}
${chain([[541, 170], [541, 186], [541, 202], [541, 218]], 5.5)}
<path d="M501 118v84" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3 4" marker-end="url(#d13-arr)"/>
<!-- 血管 -->
<rect x="298" y="234" width="284" height="56" rx="28" fill="url(#d13-blood)" stroke="#e35d5d" stroke-width="1.8"/>
<path d="M318 248h244" stroke="#fecaca" stroke-width="3" stroke-linecap="round" opacity=".7"/>
<text x="314" y="270" font-size="13" font-weight="800" fill="#fff">血液</text>
${[[364, 268], [404, 256], [444, 272], [484, 260]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="11" ry="6.5" fill="#dc2626" stroke="#b91c1c" stroke-width="1.2"/><ellipse cx="${x}" cy="${y}" rx="5" ry="2.6" fill="#f87171"/>`).join('')}
${chain([[506, 274], [520, 266], [534, 274], [548, 266], [562, 274]], 5.5)}

<!-- 三种后果 -->
<path d="M440 292C440 312 336 304 336 326" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#d13-arr)"/>
<path d="M440 292V326" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#d13-arr)"/>
<path d="M440 292C440 312 544 304 544 326" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#d13-arr)"/>
<g>
<rect x="290" y="334" width="92" height="110" rx="14" fill="#f5f8ff" stroke="#c9d8fb" stroke-width="1.6"/>
${chain([[314, 372], [327, 366], [340, 372], [353, 366]], 4.6)}
${ab(327, 357, 180)}${ab(340, 381, 0)}${ab(358, 380, 0)}${ab(316, 382, 0)}
<text x="336" y="414" text-anchor="middle" font-size="14.5" font-weight="800" fill="#1d4ed8">新发过敏</text>
<text x="336" y="432" text-anchor="middle" font-size="12" fill="#6b7280">当成外来物攻击</text>
</g>
<g>
<rect x="394" y="334" width="92" height="110" rx="14" fill="#fff6f8" stroke="#f8cfda" stroke-width="1.6"/>
<path d="M410 366c0-11 8-17 16-15 8 2 10 12 6 20-4 7-12 10-17 7-3-2-5-6-5-12Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.4"/>
<path d="M424 351c2-5 7-7 11-6-2 4-6 6-11 6Z" fill="#65a30d"/>
<path d="M416 366l4 4 4-4 4 4" fill="none" stroke="#7c5ce0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="442" y="373" text-anchor="middle" font-size="16" font-weight="800" fill="#9ca3af">≈</text>
<rect x="452" y="356" width="10" height="26" rx="3" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.2"/><rect x="463" y="356" width="10" height="26" rx="3" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.2"/><rect x="474" y="356" width="10" height="26" rx="3" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.2"/>
<path d="M458 368l4 4 4-4 4 4 4-4 4 4" fill="none" stroke="#7c5ce0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
${ab(468, 354, 180)}
<text x="440" y="414" text-anchor="middle" font-size="14.5" font-weight="800" fill="#be185d">自体免疫</text>
<text x="440" y="432" text-anchor="middle" font-size="12" fill="#6b7280">攻击自身组织</text>
</g>
<g>
<rect x="498" y="334" width="92" height="110" rx="14" fill="#fff7ed" stroke="#fbd5a8" stroke-width="1.6"/>
<path d="M544 392c-12 0-18-8-16-18 2-8 8-10 8-18 6 4 8 8 8 12 2-4 6-6 6-10 6 6 10 12 10 18 0 9-6 16-16 16Z" fill="url(#d13-flame)" stroke="#dc2626" stroke-width="1.4" stroke-linejoin="round"/>
<path d="M544 390c-5 0-8-4-7-8 1-4 4-5 4-9 3 2 4 4 4 6 1-2 3-3 3-5 3 3 4 6 4 9 0 4-3 7-8 7Z" fill="#fde68a"/>
<path d="M514 384c-4 0-6-3-5-6 1-3 3-3 3-6 2 2 3 3 3 5 1-1 2-2 2-3 2 2 3 4 3 6 0 3-2 4-6 4Z" fill="url(#d13-flame)" stroke="#dc2626" stroke-width="1"/>
<path d="M574 384c-4 0-6-3-5-6 1-3 3-3 3-6 2 2 3 3 3 5 1-1 2-2 2-3 2 2 3 4 3 6 0 3-2 4-6 4Z" fill="url(#d13-flame)" stroke="#dc2626" stroke-width="1"/>
${[[524, 356], [566, 354], [512, 368], [578, 368], [544, 348]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6" fill="#f97316"/>`).join('')}
<text x="544" y="414" text-anchor="middle" font-size="14.5" font-weight="800" fill="#c2410c">炎症连锁</text>
<text x="544" y="432" text-anchor="middle" font-size="12" fill="#6b7280">全身炎症升高</text>
</g>

${lead('M218 174C262 172 300 150 326 120')}
${lead('M604 194C566 192 520 160 472 120')}
${lead('M604 288C596 286 584 282 570 278')}
${lead('M246 378H286')}
${lead('M604 392H594')}
${callout('01', 36, 172, '正常：细胞紧贴', ['营养从绒毛吸收，', '大分子挤不过去'])}
${callout('02', 626, 194, '“扣子”松开', ['细胞间隙变大、', '绒毛受损'])}
${callout('03', 626, 288, '大分子直接入血', ['没被消化打散，', '像蛇毒进了血液'])}
${callout('04', 36, 372, '过敏 · 自体免疫', ['免疫系统当它是外来物，', '长得像的自身组织也挨打'])}
${callout('05', 626, 386, '炎症连锁反应', ['周围细胞放出炎症因子，', '全身炎症水平升高'])}
<text x="440" y="484" text-anchor="middle" font-size="15" font-weight="700" fill="#be185d">肠漏不是肠道穿了孔，而是“不容易通过的东西通过了”</text>
</svg>`;
}

/* ---------- SIBO 步骤 ---------- */
// 喂菊粉，看肚子反应
export const inulinTest = () => `<svg viewBox="0 0 150 88" aria-hidden="true" ${F}>
<rect x="8" y="24" width="46" height="56" rx="9" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.8"/>
<rect x="5" y="15" width="52" height="12" rx="5" fill="#86efac" stroke="#22c55e" stroke-width="1.6"/>
<rect x="13" y="38" width="36" height="22" rx="4" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1.2"/>
<text x="31" y="54" text-anchor="middle" font-size="12" font-weight="800" fill="#059669">菊粉</text>
<path d="M15 70h32" stroke="#e5e7eb" stroke-width="6" stroke-linecap="round"/>
<path d="M62 52h13M70 47l5 5-5 5" fill="none" stroke="#f6b778" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="92" y="38" width="38" height="48" rx="15" fill="#a5c8fb" stroke="#5b8def" stroke-width="1.6"/>
<circle cx="111" cy="21" r="14" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<path d="M97 19c0-10 8-15 14-15s14 5 14 15c-4-5-9-7-14-7s-10 2-14 7Z" fill="#6b4f3a"/>
<path d="M104 21l4 2M118 21l-4 2" stroke="#6b4f3a" stroke-width="1.6" stroke-linecap="round"/>
<path d="M106 30q5-4 10 0" fill="none" stroke="#c2410c" stroke-width="1.6" stroke-linecap="round"/>
<circle cx="111" cy="63" r="12" fill="#dbeafe"/>
<path d="M107 63c0-5 7-6 8-1s-3 6-5 4-1-4 1-4" fill="none" stroke="#5b8def" stroke-width="1.8" stroke-linecap="round"/>
<ellipse cx="98" cy="58" rx="5.5" ry="4.2" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.2"/><ellipse cx="124" cy="58" rx="5.5" ry="4.2" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.2"/>
<path d="M135 56c3 2 3 6 0 8M140 52c5 3 5 12 0 16" fill="none" stroke="#a78bfa" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="138" cy="30" r="4" fill="#f5f3ff" stroke="#a78bfa" stroke-width="1.5"/><circle cx="145" cy="20" r="2.8" fill="#f5f3ff" stroke="#a78bfa" stroke-width="1.3"/>
<text x="60" y="34" font-size="12" font-weight="800" fill="#7c3aed">咕咕</text>
</svg>`;

// 菊粉减量：一点点加
export const slowDose = () => {
  // 侧面看的小勺：勺柄在左，勺里一堆粉
  const spoon = (x, y, h) => `<path d="M${x - 32} ${y - 9}L${x - 12} ${y - 1}" stroke="#94a3b8" stroke-width="3.6" stroke-linecap="round"/>
<path d="M${x - 14} ${y}Q${x} ${y + 15} ${x + 14} ${y}Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M${x - 12} ${y}Q${x} ${y - h * 2} ${x + 12} ${y}Z" fill="#fff" stroke="#cbd5e1" stroke-width="1.4"/>`;
  return `<svg viewBox="0 0 150 88" aria-hidden="true" ${F}>
${spoon(40, 74, 2)}${spoon(84, 60, 5)}${spoon(128, 46, 9)}
<path d="M14 46C46 40 84 28 126 12" fill="none" stroke="#f08a24" stroke-width="2.6" stroke-dasharray="5 4" stroke-linecap="round"/>
<path d="M116 9l11 2-6 9" fill="none" stroke="#f08a24" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
};

// 先补胃酸、消化酶：酸能杀菌
export const acidKill = () => `<svg viewBox="0 0 140 88" aria-hidden="true">
<defs><linearGradient id="d13-sto" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient></defs>
<path d="M30 6L32 22" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<path d="M36 20c18-8 46-2 52 20 6 22-10 40-34 42-16 1-30-6-32-17-2-10 10-13 18-9 11 5 24-1 25-12 1-12-14-17-26-13Z" fill="url(#d13-sto)" stroke="#df7590" stroke-width="2"/>
<path d="M58 34c7 3 11 9 11 16" fill="none" stroke="#fde4ea" stroke-width="3" stroke-linecap="round"/>
${[[48, 46], [72, 62], [60, 70]].map(([x, y]) => `<path d="M${x} ${y - 8}c3 4 5 7 5 9a5 5 0 0 1-10 0c0-2 2-5 5-9Z" fill="#d9f99d" stroke="#65a30d" stroke-width="1.3"/>`).join('')}
<rect x="98" y="30" width="30" height="14" rx="7" fill="#a7f3d0" stroke="#10b981" stroke-width="1.6"/>
<path d="M98 37c-4-3-6 3-10 0M128 37c4-3 6 3 10 0" fill="none" stroke="#10b981" stroke-width="1.6" stroke-linecap="round"/>
<path d="M104 24l18 26M122 24l-18 26" stroke="#ef4444" stroke-width="3.4" stroke-linecap="round"/>
</svg>`;

// 小檗碱：黄色药片 + 睡前
export const berberine = () => `<svg viewBox="0 0 140 88" aria-hidden="true" ${F}>
<defs><linearGradient id="d13-bb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fef08a"/><stop offset="1" stop-color="#eab308"/></linearGradient></defs>
<path d="M118 8a16 16 0 1 0 14 24 13 13 0 0 1-14-24Z" fill="#fde68a" stroke="#f59e0b" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M92 14l1.6 3.4 3.4 1.6-3.4 1.6L92 24l-1.6-3.4-3.4-1.6 3.4-1.6Z" fill="#fbbf24"/><circle cx="104" cy="40" r="2" fill="#fbbf24"/>
${[[30, 62], [58, 70], [44, 40], [76, 50]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="url(#d13-bb)" stroke="#ca8a04" stroke-width="1.8"/><path d="M${x - 8} ${y}h16" stroke="#ca8a04" stroke-width="1.6" stroke-linecap="round"/><path d="M${x - 7} ${y - 6}a9 9 0 0 1 6-4" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>`).join('')}
<text x="104" y="70" font-size="13" font-weight="800" fill="#b45309">睡前</text>
</svg>`;

/* ---------- 修补肠漏：营养素格子 ---------- */
export const glutamine = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<defs><linearGradient id="d13-vil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fcd3dc"/><stop offset="1" stop-color="#f6a9b8"/></linearGradient>
<radialGradient id="d13-tip"><stop offset="0" stop-color="#fde047"/><stop offset="1" stop-color="#fde047" stop-opacity="0"/></radialGradient></defs>
<rect x="8" y="66" width="80" height="12" rx="5" fill="#f4a3b4" stroke="#e98ca1" stroke-width="1.4"/>
${[[14, 30], [38, 20], [62, 32]].map(([x, top]) => `<circle cx="${x + 10}" cy="${top + 4}" r="13" fill="url(#d13-tip)"/><path d="M${x} 68V${top + 10}a10 10 0 0 1 20 0V68Z" fill="url(#d13-vil)" stroke="#e98ca1" stroke-width="1.6"/><circle cx="${x + 10}" cy="${top + 6}" r="4" fill="#fbbf24"/>`).join('')}
<path d="M98 8l-9 16h8l-7 16" fill="none" stroke="#f59e0b" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const epaCap = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<defs><linearGradient id="d13-epa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs>
<path d="M6 26c8-12 26-16 40-8l10-9v30l-10-9C32 38 14 37 6 26Z" fill="#8ccff5" stroke="#3b9ad9" stroke-width="1.8" stroke-linejoin="round"/>
<circle cx="18" cy="23" r="2.4" fill="#0f3d5e"/>
<ellipse cx="62" cy="54" rx="34" ry="19" fill="url(#d13-epa)" stroke="#d97706" stroke-width="2"/>
<ellipse cx="50" cy="45" rx="12" ry="4" fill="#fff" opacity=".55"/>
<text x="62" y="61" text-anchor="middle" font-size="17" font-weight="900" fill="#92400e">EPA</text>
</svg>`;

export const turmeric = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M14 46c-4-8 4-14 12-12 2-8 12-10 18-4 6-6 18-4 20 4 8-2 14 6 10 12-2 6-10 8-16 6-6 6-18 6-24 0-8 4-18 2-20-6Z" fill="#d6a15b" stroke="#a16207" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M22 40c4 2 6 6 6 10M46 34c2 4 2 10 0 14M60 40c2 2 4 6 2 10" fill="none" stroke="#b7863f" stroke-width="1.4" stroke-linecap="round"/>
<ellipse cx="74" cy="44" rx="6" ry="8" fill="#f97316" stroke="#c2410c" stroke-width="1.4"/>
<path d="M40 82c4-12 14-16 24-16s20 4 24 16Z" fill="#fb923c" stroke="#ea580c" stroke-width="1.6"/>
<path d="M50 74c4-3 8-4 12-4" fill="none" stroke="#fed7aa" stroke-width="2" stroke-linecap="round"/>
</svg>`;

/* ---------- 辅助：锌 ---------- */
export const zincCopper = () => `<svg viewBox="0 0 70 50" aria-hidden="true" ${F}>
<circle cx="24" cy="25" r="17" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/><circle cx="24" cy="25" r="12.5" fill="none" stroke="#94a3b8" stroke-width="1.3"/>
<text x="24" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="#334155">Zn</text>
<circle cx="54" cy="30" r="10" fill="#fcd9b6" stroke="#c2703a" stroke-width="1.6"/><text x="54" y="34" text-anchor="middle" font-size="9.5" font-weight="800" fill="#9a4a17">Cu</text>
<path d="M54 6v10M50 12l4 4 4-4" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

/* ---------- 补剂标签 ---------- */
export const labelBottle = () => `<svg viewBox="0 0 300 262" aria-label="姜黄素补剂标签示意" ${F}>
<defs><linearGradient id="d13-amber" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c2741f"/><stop offset=".45" stop-color="#e09a45"/><stop offset="1" stop-color="#b8661a"/></linearGradient></defs>
<rect x="22" y="34" width="62" height="22" rx="5" fill="#4b5563" stroke="#374151" stroke-width="1.6"/>
<path d="M28 40v10M38 40v10M48 40v10M58 40v10M68 40v10M78 40v10" stroke="#6b7280" stroke-width="1.4"/>
<path d="M10 72c0-10 8-16 18-16h50c10 0 18 6 18 16v150c0 10-6 16-16 16H26c-10 0-16-6-16-16Z" fill="url(#d13-amber)" stroke="#9a4a17" stroke-width="2"/>
<rect x="16" y="106" width="74" height="86" rx="6" fill="#fff7ed" stroke="#fdba74" stroke-width="1.4"/>
<text x="53" y="134" text-anchor="middle" font-size="15" font-weight="900" fill="#c2410c">姜黄素</text>
<text x="53" y="160" text-anchor="middle" font-size="16" font-weight="900" fill="#1f2937">1000mg</text>
<text x="53" y="180" text-anchor="middle" font-size="11.5" fill="#6b7280">每粒</text>
<path d="M22 80c0 30 0 90 0 130" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".35"/>
<path d="M90 108L118 46M90 190L118 236" stroke="#cbd5e1" stroke-width="1.4" stroke-dasharray="4 4"/>
<rect x="118" y="34" width="180" height="206" rx="12" fill="#fff" stroke="#d9dde8" stroke-width="1.6"/>
<text x="130" y="60" font-size="13" font-weight="800" fill="#6b7280">标签上这样写</text>
<path d="M128 72h160" stroke="#e5e7eb" stroke-width="1.4"/>
<text x="130" y="98" font-size="13.5" fill="#374151">每粒总量</text><text x="288" y="98" text-anchor="end" font-size="14" font-weight="800" fill="#1f2937">1000mg</text>
<rect x="123" y="112" width="170" height="30" rx="8" fill="#ffedd5" stroke="#fb923c" stroke-width="1.6"/>
<text x="130" y="132" font-size="14" font-weight="900" fill="#c2410c">姜黄素</text><text x="288" y="132" text-anchor="end" font-size="14.5" font-weight="900" fill="#c2410c">约 30mg</text>
<text x="130" y="168" font-size="13.5" fill="#374151">姜黄根提取物</text><text x="288" y="168" text-anchor="end" font-size="14" font-weight="800" fill="#1f2937">约 700mg</text>
<path d="M128 182h160" stroke="#f1f2f4" stroke-width="1.2"/>
<text x="130" y="204" font-size="13.5" fill="#374151">辅料</text><text x="288" y="204" text-anchor="end" font-size="14" font-weight="800" fill="#1f2937">约 200mg</text>
<text x="208" y="228" text-anchor="middle" font-size="11.5" fill="#9ca3af">（课上举的例子）</text>
<text x="208" y="258" text-anchor="middle" font-size="13" font-weight="800" fill="#c2410c">只看“姜黄素”这一行</text>
</svg>`;

// 姜黄 → 姜黄粉 → 姜黄素
export const turmericChain = () => {
  const arrow = (y) => `<path d="M66 ${y}v16M60 ${y + 10}l6 6 6-6" fill="none" stroke="#c4a46a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`;
  return `<svg viewBox="0 0 132 300" aria-label="姜黄、姜黄粉与姜黄素" ${F}>
<path d="M22 46c-4-8 4-14 12-12 2-8 12-10 18-4 6-6 18-4 20 4 8-2 14 6 10 12-2 6-10 8-16 6-6 6-18 6-24 0-8 4-18 2-20-6Z" transform="translate(14 0)" fill="#d6a15b" stroke="#a16207" stroke-width="1.8" stroke-linejoin="round"/>
<ellipse cx="96" cy="44" rx="6" ry="8" fill="#f97316" stroke="#c2410c" stroke-width="1.4"/>
<text x="66" y="84" text-anchor="middle" font-size="14" font-weight="800" fill="#8a6a2f">姜黄</text>
${arrow(92)}
<path d="M30 138h72c0 18-16 30-36 30s-36-12-36-30Z" fill="#fff" stroke="#c4a46a" stroke-width="1.8"/>
<path d="M36 138c6-12 18-18 30-18s24 6 30 18Z" fill="#fbbf24" stroke="#d97706" stroke-width="1.4"/>
<text x="66" y="190" text-anchor="middle" font-size="14" font-weight="800" fill="#8a6a2f">姜黄粉</text>
<text x="66" y="207" text-anchor="middle" font-size="11.5" fill="#6b7280">含 1% 就算药用</text>
${arrow(216)}
<g transform="rotate(-20 66 252)"><rect x="46" y="243" width="40" height="18" rx="9" fill="#fb923c" stroke="#ea580c" stroke-width="1.6"/><path d="M66 243h11a9 9 0 0 1 0 18H66Z" fill="#fed7aa"/></g>
<text x="66" y="292" text-anchor="middle" font-size="14" font-weight="900" fill="#c2410c">姜黄素</text>
</svg>`;
};

/* ---------- 寄生虫：卡片角图 ---------- */
export const rawFish = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<ellipse cx="54" cy="64" rx="48" ry="17" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.8"/>
<ellipse cx="54" cy="62" rx="36" ry="11" fill="#eef2f7"/>
${[[30, 64], [44, 59], [58, 64], [72, 59]].map(([x, y]) => `<g transform="rotate(-18 ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="15" ry="6.5" fill="#fdecec" stroke="#f0a3a3" stroke-width="1.3"/><path d="M${x - 9} ${y - 1}q9-4 18 0M${x - 7} ${y + 3}q7-3 14 0" fill="none" stroke="#fff" stroke-width="1.3"/></g>`).join('')}
<path d="M84 64c4-6 10-8 14-6-3 5-8 7-14 6Z" fill="#86c873" stroke="#4f9a42" stroke-width="1.2"/>
<path d="M10 10l30 34M18 6l28 36" stroke="#b7863f" stroke-width="3" stroke-linecap="round"/>
<circle cx="96" cy="24" r="14" fill="#fff" stroke="#64748b" stroke-width="2.4"/><path d="M106 34l9 9" stroke="#64748b" stroke-width="3.4" stroke-linecap="round"/>
<path d="M88 26c3-5 6 3 9-2s5 2 7-1" fill="none" stroke="#f97316" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;

export const dewormPack = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<rect x="10" y="22" width="64" height="56" rx="9" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.8"/>
<path d="M42 26v48M14 50h56" stroke="#d1d5db" stroke-width="1.4"/>
${[[26, 36], [58, 36], [26, 64], [58, 64]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="10" fill="${i === 3 ? '#f3f4f6' : '#fff'}" stroke="#cbd5e1" stroke-width="1.4"/>${i === 3 ? `<path d="M${x - 6} ${y - 4}l12 8" stroke="#cbd5e1" stroke-width="1.4"/>` : `<ellipse cx="${x}" cy="${y}" rx="6.5" ry="5" fill="#fff" stroke="#e5e7eb" stroke-width="1.2"/>`}`).join('')}
<g transform="translate(97 34) rotate(12)"><path d="M0-19L4-9 12-13 9-3 19 0 9 5 11 14 2 10 0 19-2 10-11 14-9 5-19 0-9-3-12-13-4-9Z" fill="#fb923c" stroke="#ea580c" stroke-width="1.4" stroke-linejoin="round"/><path d="M0 18v10" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/><path d="M0 12V-12M0 0l-8-6M0 0l8-6" stroke="#fed7aa" stroke-width="1.2"/></g>
</svg>`;

export const catTray = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<path d="M60 74c14 2 22-6 18-16" fill="none" stroke="#9ca3af" stroke-width="5" stroke-linecap="round"/>
<ellipse cx="40" cy="62" rx="22" ry="20" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.8"/>
<path d="M26 22l4 14h-10ZM54 22l-4 14h10Z" fill="#d1d5db" stroke="#9ca3af" stroke-width="1.6" stroke-linejoin="round"/>
<circle cx="40" cy="38" r="16" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.8"/>
<circle cx="34" cy="36" r="2.2" fill="#374151"/><circle cx="46" cy="36" r="2.2" fill="#374151"/>
<path d="M38 42h4l-2 2Z" fill="#f9a8b4"/><path d="M22 41h10M22 45l10-2M58 41H48M58 45l-10-2" stroke="#9ca3af" stroke-width="1.1" stroke-linecap="round"/>
<path d="M76 64h38l-4 16H80Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M78 66h34" stroke="#f1e4c8" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="96" cy="64" rx="5" ry="3" fill="#92623a"/>
<path d="M95 20l13 23H82Z" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.8" stroke-linejoin="round"/>
<text x="95" y="40" text-anchor="middle" font-size="14" font-weight="900" fill="#d97706">!</text>
</svg>`;
