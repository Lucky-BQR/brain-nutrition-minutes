// D1-2 图解卡片用的矢量插画（SVG）。示意图，非解剖比例。id 统一加 d12- 前缀，避免和其他插画冲突。
const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;

// 胃酸水滴（黄绿色）
const drop = (x, y, s = 1) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0-7C3-2 5 1 5 3.5A5 5 0 0 1-5 3.5C-5 1-3-2 0-7Z" fill="#d9f99d" stroke="#65a30d" stroke-width="1.3"/>`;
// 向上的橙色小箭头（反流）
const up = (x, y) =>
  `<path d="M${x} ${y + 12}V${y}M${x - 4.5} ${y + 4.5}L${x} ${y}L${x + 4.5} ${y + 4.5}" fill="none" stroke="#f08a24" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
// 胶囊
const capsule = (x, y, a, b, rot = -30, w = 40, h = 16) =>
  `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${b}" stroke="${a}" stroke-width="1.2"/><path d="M${x + h / 2} ${y}H${x + w / 2}V${y + h}H${x + h / 2}a${h / 2} ${h / 2} 0 0 1 0-${h}Z" fill="${a}"/><rect x="${x + 5}" y="${y + 3}" width="${w / 2 - 8}" height="3" rx="1.5" fill="#fff" opacity=".6"/></g>`;
// 杆菌
const germ = (x, y, rot = 0, c = '#86efac', s = '#16a34a') =>
  `<g transform="rotate(${rot} ${x} ${y})"><path d="M${x - 9} ${y}c-4-3-7 1-10-2M${x + 9} ${y}c4 3 7-1 10 2" fill="none" stroke="${s}" stroke-width="1.3" stroke-linecap="round"/><rect x="${x - 9}" y="${y - 4.5}" width="18" height="9" rx="4.5" fill="${c}" stroke="${s}" stroke-width="1.4"/></g>`;

/* ---------- 一张图看懂：胃酸不足的连锁反应 ---------- */
export function acidChain() {
  const callout = (n, x, y, title, desc) => `<g ${F}><circle cx="${x}" cy="${y}" r="19" fill="#f6747a" stroke="#fff" stroke-width="3" filter="url(#d12-sh)"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${x + 30}" y="${y + 1}" font-size="20" font-weight="800" fill="#1f2937">${title}</text>
<text x="${x + 30}" y="${y + 25}" font-size="14.5" fill="#4b5563">${desc}</text></g>`;
  const lead = (d) => `<path d="${d}" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="4 4"/>`;
  const chips = (y, list) => {
    let x = 16;
    return list
      .map((t) => {
        const w = t.length * 14 + 18;
        const r = `<rect x="${x}" y="${y}" width="${w}" height="26" rx="8" fill="#fff8ec" stroke="#f3d39a" stroke-width="1.4"/><text x="${x + w / 2}" y="${y + 18}" text-anchor="middle" font-size="14" font-weight="700" fill="#92400e">${t}</text>`;
        x += w + 10;
        return r;
      })
      .join('');
  };
  return `<svg viewBox="0 0 860 540" width="100%" aria-label="胃酸不足：贲门关不紧而反流，胰酶胆汁不足，铁锌吸收差，小肠细菌过度生长" ${F}>
<defs>
<filter id="d12-sh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#f6747a" flood-opacity=".35"/></filter>
<linearGradient id="d12-skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1ea"/><stop offset="1" stop-color="#fde3d6"/></linearGradient>
<linearGradient id="d12-liver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4675d"/><stop offset="1" stop-color="#a8403a"/></linearGradient>
<linearGradient id="d12-sto" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient>
</defs>
<!-- 身体轮廓 -->
<path d="M412 126 L412 152 C386 162 346 166 320 184 C306 196 302 222 304 254 L316 380 L322 524 L538 524 L544 380 L556 254 C558 222 554 196 540 184 C514 166 474 162 448 152 L448 126 Z" fill="url(#d12-skin)" stroke="#efc3ae" stroke-width="2"/>
<ellipse cx="430" cy="74" rx="50" ry="58" fill="url(#d12-skin)" stroke="#efc3ae" stroke-width="2"/>
<path d="M382 60c2-34 26-50 50-50 26 0 46 16 48 46-10-14-26-22-48-22-22 0-38 10-50 26Z" fill="#6b4f3a"/>
<path d="M406 70c4-4 10-4 14 0M440 70c4-4 10-4 14 0" fill="none" stroke="#6b4f3a" stroke-width="2.4" stroke-linecap="round"/>
<path d="M430 76v10" stroke="#e7b49c" stroke-width="2" stroke-linecap="round"/>
<!-- 张开的嘴和牙齿 -->
<path d="M413 100 Q430 95 447 100 Q445 117 430 118 Q415 117 413 100Z" fill="#8e2f3d"/>
<path d="M415 101 Q430 97 445 101 L444 106 Q430 103 416 106Z" fill="#fff"/>
<circle cx="423" cy="103" r="1.6" fill="#f6d78b"/><circle cx="438" cy="103" r="1.6" fill="#f6d78b"/>
<!-- 肺（淡） -->
<path d="M420 186C397 182 364 196 354 230c-8 28-5 54 2 64 13 4 42 0 60-6 6-30 8-74 4-102Z" fill="#fde7ec" stroke="#f5bccb" stroke-width="1.6"/>
<path d="M444 186C467 182 500 196 510 230c8 28 5 54-2 64-13 4-42 0-60-6-6-30-8-74-4-102Z" fill="#fde7ec" stroke="#f5bccb" stroke-width="1.6"/>
<!-- 胰（在胃后方） -->
<path d="M428 404c2-10 16-12 30-8 22 4 46-4 70-8 12-1 14 9 4 13-22 8-46 13-70 17-18 3-36-2-34-14Z" fill="#f9cf6a" stroke="#d9a32c" stroke-width="1.6"/>
<!-- 肝 + 胆 -->
<path d="M326 306c20-8 76-8 110 0 6 6 0 14-14 22-25 12-60 22-84 20-11-10-16-26-12-42Z" fill="url(#d12-liver)" stroke="#8f352f" stroke-width="1.6"/>
<path d="M340 316c18-4 40-4 60-2" fill="none" stroke="#e7867c" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>
<path d="M410 356c2 12 3 24 4 38" fill="none" stroke="#4f9a42" stroke-width="2.4" stroke-linecap="round"/>
<ellipse cx="404" cy="346" rx="8" ry="13" transform="rotate(-25 404 346)" fill="#86c873" stroke="#4f9a42" stroke-width="1.6"/>
<!-- 食管 -->
<path d="M431 118 L433 160 L435 278 Q437 296 452 300" fill="none" stroke="#f6c2cc" stroke-width="9" stroke-linecap="round"/>
<!-- 胃 -->
<path d="M452 300 C462 286 500 280 522 296 C542 312 546 352 530 374 C516 392 480 398 454 392 L442 388 C436 382 438 372 446 370 L456 370 C478 372 496 362 500 342 C503 326 492 316 474 316 C466 316 460 314 456 312 Z" fill="url(#d12-sto)" stroke="#df7590" stroke-width="1.8"/>
<path d="M512 306c12 8 18 20 18 34" fill="none" stroke="#fde4ea" stroke-width="3" stroke-linecap="round"/>
${drop(518, 330)}${drop(522, 356, 0.9)}${drop(494, 382, 0.85)}${drop(470, 302, 0.8)}
<!-- 贲门：关不紧 -->
<ellipse cx="450" cy="300" rx="11" ry="7" transform="rotate(30 450 300)" fill="none" stroke="#f08a24" stroke-width="2.4" stroke-dasharray="5 3"/>
<!-- 反流：酸往上走 -->
${up(447, 232)}${up(447, 180)}${drop(434, 252, 0.75)}${drop(433, 206, 0.75)}${drop(432, 150, 0.7)}
<!-- 十二指肠 -->
<path d="M444 380 C424 380 412 392 412 408 C412 424 428 432 450 430 C462 429 472 426 480 420" fill="none" stroke="#f4a6a0" stroke-width="11" stroke-linecap="round"/>
<!-- 大肠 -->
<path d="M352 512 L351 446 Q351 438 358 438 L506 438 Q514 438 514 446 L514 512" fill="none" stroke="#e9a19a" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M343 458h18M343 480h18M343 502h18M380 430v16M410 430v16M440 430v16M470 430v16M505 458h18M505 480h18M505 502h18" stroke="#d4847c" stroke-width="1.5"/>
<!-- 小肠 -->
<ellipse cx="432" cy="482" rx="62" ry="30" fill="#fcd6d1"/>
<path d="M384 464c18-8 38 8 58-2s40 4 46 14c6 12-16 16-34 8s-38 8-54 0-26 8-14 16c12 10 36 0 56 4s30 0 40 6" fill="none" stroke="#f29a9a" stroke-width="9" stroke-linecap="round"/>
${germ(404, 482, -20)}${germ(462, 470, 15)}${germ(446, 500, -8)}
<g font-size="9" font-weight="800" text-anchor="middle"><circle cx="420" cy="458" r="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.2"/><text x="420" y="461.5" fill="#4b5563">Fe</text><circle cx="476" cy="496" r="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.2"/><text x="476" y="499.5" fill="#4b5563">Zn</text></g>
<!-- 右上：反酸的真相 -->
<g transform="translate(594 48)">
<rect width="258" height="106" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="18" y="26" font-size="14" font-weight="800" fill="#b45309">关门信号：胃酸浓度</text>
<circle cx="28" cy="50" r="9" fill="#dcfce7" stroke="#22c55e" stroke-width="1.6"/><path d="M23.5 50l3.2 3.2 5.6-6" fill="none" stroke="#16a34a" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
<text x="44" y="55" font-size="15" fill="#1f2937">胃酸够浓 → <tspan font-weight="800" fill="#16a34a">贲门关紧</tspan></text>
<circle cx="28" cy="82" r="9" fill="#fee2e2" stroke="#ef4444" stroke-width="1.6"/><path d="M24 78l8 8M32 78l-8 8" stroke="#dc2626" stroke-width="2.2" stroke-linecap="round"/>
<text x="44" y="87" font-size="15" fill="#1f2937">不足或被稀释 → <tspan font-weight="800" fill="#dc2626">反酸</tspan></text>
</g>
<!-- 左中：全身信号 -->
<g transform="translate(30 186)">
<rect width="262" height="122" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="18" y="26" font-size="14" font-weight="800" fill="#b45309">胃酸不足的全身信号</text>
${chips(40, ['脱发', '皮肤苍白', '易疲劳'])}
${chips(74, ['手脚麻木', '指甲变脆'])}
<text x="18" y="116" font-size="12" fill="#6b7280">营养进不去：缺铁、缺维生素的结果</text>
</g>
${lead('M302 104 C350 106 384 108 410 108')}
${lead('M596 240 C540 242 494 270 462 294')}
${lead('M596 334 C570 334 556 336 540 338')}
${lead('M300 416 C346 416 384 410 412 404')}
${lead('M596 474 C560 474 520 478 492 480')}
${callout('01', 36, 92, '咽喉 · 牙齿 · 肺', '反流沿途腐蚀：声哑、咳痰、烂牙')}
${callout('02', 626, 236, '贲门关不紧', '关门信号不够，一蠕动就上涌')}
${callout('03', 626, 330, '胃：消化 · 杀菌', '蛋白质消化不了，细菌杀不死')}
${callout('04', 36, 412, '十二指肠 · 胰 · 胆', '酸信号不够，胰酶、胆汁都不足')}
${callout('05', 626, 470, '小肠 → 大肠', '铁锌吸收差，细菌过度生长')}
<text x="560" y="532" font-size="12.5" fill="#8c8580">黄绿色水滴：胃酸　橙色箭头：反流</text>
</svg>`;
}

/* ---------- 反流线索卡片角图 ---------- */
export const lungsCough = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M60 4v26" stroke="#f3b6c3" stroke-width="7" stroke-linecap="round"/>
<path d="M60 28l-12 10M60 28l12 10" stroke="#f3b6c3" stroke-width="4" stroke-linecap="round"/>
<path d="M53 32C38 28 22 38 18 58c-3 14 1 22 7 24 10 2 22 0 28-4 2-14 3-32 0-46Z" fill="#fcdbe2" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M67 32C82 28 98 38 102 58c3 14-1 22-7 24-10 2-22 0-28-4-2-14-3-32 0-46Z" fill="#fcdbe2" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M36 50c-4 6-6 14-6 20M84 50c4 6 6 14 6 20" fill="none" stroke="#f5bccb" stroke-width="2" stroke-linecap="round"/>
${drop(60, 16, 0.85)}
<path d="M80 8c4 2 6 6 6 10M88 3c6 3 9 9 9 16" fill="none" stroke="#a78bfa" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;

export const toothDecay = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M28 18c8-10 22-10 32-2 10-8 24-8 32 2 8 12 4 28 0 38-4 12-6 26-14 26-6 0-7-14-12-18-4-3-8-3-12 0-5 4-6 18-12 18-8 0-10-14-14-26-4-10-8-26 0-38Z" fill="#fffdf6" stroke="#c9b99a" stroke-width="2"/>
<path d="M36 24c4 9 16 9 20 2-3-7-14-8-20-2Z" fill="#f6d78b"/><path d="M66 28c4 7 13 7 17 0-3-6-11-6-17 0Z" fill="#f6d78b"/>
<path d="M48 42l4 6-3 6M74 46l-3 5 3 5" fill="none" stroke="#c9b99a" stroke-width="1.6" stroke-linecap="round"/>
<path d="M34 22c3-4 8-6 12-5" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
${drop(104, 22)}${drop(110, 42, 0.8)}${drop(14, 30, 0.8)}
</svg>`;

export const earNose = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M74 6c-20 0-36 14-38 32l-10 14c-1 2 0 4 2 4h6v8c0 6 4 10 10 10h10v14h34V66c8-8 12-18 12-30C100 18 90 6 74 6Z" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.8"/>
<path d="M52 14c10-9 30-11 42-1 6 6 8 14 6 22-4-8-12-12-22-12-10 0-20-3-26-9Z" fill="#6b4f3a"/>
<path d="M86 32c6-4 13 0 13 8s-5 12-10 12c-3 0-4-3-3-6" fill="#fbcfc0" stroke="#e7a58b" stroke-width="1.6"/>
<circle cx="50" cy="36" r="2.4" fill="#3f3f46"/>
<path d="M70 86C70 72 76 60 86 46M70 72C60 62 48 54 32 50" fill="none" stroke="#f08a24" stroke-width="2.2" stroke-dasharray="3.5 3" stroke-linecap="round"/>
${drop(90, 44, 0.75)}${drop(28, 50, 0.75)}
</svg>`;

/* ---------- 处理胃酸不足：步骤图 ---------- */
export const appleVinegar = () => `<svg viewBox="0 0 130 84" aria-hidden="true" ${F}>
<rect x="34" y="3" width="14" height="9" rx="2" fill="#a16207"/>
<path d="M36 12h10v8l8 8v46a6 6 0 0 1-6 6H34a6 6 0 0 1-6-6V28l8-8Z" fill="#fff7ed" stroke="#d6a46a" stroke-width="2"/>
<path d="M29.5 40h23v34a4.5 4.5 0 0 1-4.5 4.5H34a4.5 4.5 0 0 1-4.5-4.5Z" fill="#e7a23c" opacity=".85"/>
<rect x="31" y="46" width="20" height="17" rx="3" fill="#fff"/><text x="41" y="59" text-anchor="middle" font-size="11.5" font-weight="800" fill="#b45309">醋</text>
<path d="M92 36c-6-6-20-4-22 10-2 14 8 30 18 30 4 0 6-2 8-2s4 2 8 2c10 0 18-16 16-30-2-14-16-16-22-10-2 2-4 2-6 0Z" fill="#ef4444" stroke="#c81e1e" stroke-width="1.8"/>
<path d="M95 36c0-6 2-10 6-12" stroke="#7c4a1e" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<path d="M100 26c6-6 14-6 16-2-4 6-12 6-16 2Z" fill="#65a30d"/>
<path d="M78 46c2-4 6-6 10-6" stroke="#fff" opacity=".6" stroke-width="2.4" fill="none" stroke-linecap="round"/>
</svg>`;

export const betaineHCl = () => `<svg viewBox="0 0 130 84" aria-hidden="true" ${F}>
<rect x="26" y="6" width="34" height="11" rx="3" fill="#94a3b8"/>
<rect x="22" y="15" width="42" height="64" rx="9" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
<rect x="26" y="34" width="34" height="27" rx="4" fill="#e0f2fe"/>
<text x="43" y="52.5" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0369a1">HCl</text>
${capsule(70, 50, '#38bdf8', '#e0f2fe', -20, 40, 16)}${capsule(80, 24, '#f59e0b', '#fef3c7', 24, 32, 13)}
</svg>`;

export const smellOil = () => `<svg viewBox="0 0 130 84" aria-hidden="true">
<rect x="18" y="6" width="12" height="13" rx="3" fill="#374151"/>
<path d="M16 19h16v6l4 6v42a6 6 0 0 1-6 6H18a6 6 0 0 1-6-6V31l4-6Z" fill="#d9772b" stroke="#9a3412" stroke-width="1.6"/>
<rect x="15" y="44" width="18" height="16" rx="2" fill="#fff7ed"/><path d="M19 52h10" stroke="#fdba74" stroke-width="2"/>
<path d="M44 30c6-4 10 4 16 0s10 4 16 0M44 44c6-4 10 4 16 0s10 4 16 0M44 58c6-4 10 4 16 0s10 4 16 0" fill="none" stroke="#a78bfa" stroke-width="2.2" stroke-linecap="round"/>
<path d="M102 4c-2 14-10 26-14 36-2 4 0 8 4 8h8c4 0 6 4 4 8l-2 26h30V4Z" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<path d="M95 44c2 2 5 2 7 0" fill="none" stroke="#e7a58b" stroke-width="1.8" stroke-linecap="round"/>
</svg>`;

/* ---------- 肝与皮肤 ---------- */
export const liverDetox = () => `<svg viewBox="0 0 330 260" aria-label="肝把脂溶性毒素改成水溶性再排出" ${F}>
<defs><linearGradient id="d12-lv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d9716a"/><stop offset="1" stop-color="#a8403a"/></linearGradient></defs>
<path d="M30 92C86 58 238 56 300 80c10 6 4 18-12 26-50 26-128 66-194 82-32-16-58-56-64-96Z" fill="url(#d12-lv)" stroke="#8f352f" stroke-width="2"/>
<path d="M54 98c40-18 110-20 170-12" fill="none" stroke="#ee9a90" stroke-width="3.4" stroke-linecap="round" opacity=".7"/>
<ellipse cx="132" cy="186" rx="13" ry="21" transform="rotate(-22 132 186)" fill="#86c873" stroke="#4f9a42" stroke-width="1.8"/>
<text x="116" y="134" text-anchor="middle" font-size="26" font-weight="900" fill="#fff">肝</text>
<text x="164" y="222" font-size="13" fill="#4f7a42" font-weight="700">胆囊</text>
<path d="M40 22c-8 10-12 16-12 22a12 12 0 0 0 24 0c0-6-4-12-12-22Z" fill="#fdba74" stroke="#ea7a12" stroke-width="1.8"/>
<text x="62" y="36" font-size="14" font-weight="800" fill="#c2410c">脂溶性毒素</text>
<text x="62" y="54" font-size="12.5" fill="#6b4f3a">能钻进细胞</text>
<path d="M40 62v14M34 70l6 7 6-7" fill="none" stroke="#ea7a12" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M236 126c10 14 18 30 22 48M252 166l6 10 4-11" fill="none" stroke="#2f80d1" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M266 190c-8 10-12 16-12 22a12 12 0 0 0 24 0c0-6-4-12-12-22Z" fill="#93c5fd" stroke="#2f80d1" stroke-width="1.8"/>
<text x="232" y="246" font-size="14" font-weight="800" fill="#1d6fd1">水溶性</text>
<text x="262" y="160" font-size="13" font-weight="700" fill="#1d6fd1">改结构</text>
</svg>`;

export const handsCompare = () => {
  const hand = (x, skin, line) => {
    const parts = `<rect x="${x + 6}" y="44" width="46" height="52" rx="17"/><rect x="${x + 6}" y="16" width="10" height="38" rx="5"/><rect x="${x + 17}" y="6" width="10" height="46" rx="5"/><rect x="${x + 28}" y="8" width="10" height="44" rx="5"/><rect x="${x + 39}" y="18" width="10" height="34" rx="5"/><rect x="${x - 6}" y="52" width="11" height="30" rx="5.5" transform="rotate(-32 ${x} 67)"/>`;
    return `<g fill="${skin}" stroke="${line}" stroke-width="3.2">${parts}</g><g fill="${skin}">${parts}</g>`;
  };
  return `<svg viewBox="0 0 140 270" aria-label="伸出手和周围的人对比肤色" ${F}>
${hand(10, '#fde3d6', '#e7b49c')}${hand(78, '#f8d98c', '#d9a64a')}
<text x="70" y="124" text-anchor="middle" font-size="15" font-weight="900" fill="#1f2937">对比初筛</text>
<text x="70" y="144" text-anchor="middle" font-size="12.5" fill="#4b5563">手心比手心</text>
<text x="70" y="161" text-anchor="middle" font-size="12.5" fill="#4b5563">手背比手背</text>
<path d="M22 212c20-26 76-26 96 0-20 26-76 26-96 0Z" fill="#fff" stroke="#e7b49c" stroke-width="2"/>
<path d="M26 212c18-21 70-21 88 0" fill="none" stroke="#f6d36b" stroke-width="5" opacity=".75"/>
<path d="M26 212c18 21 70 21 88 0" fill="none" stroke="#f6d36b" stroke-width="5" opacity=".75"/>
<circle cx="70" cy="212" r="15" fill="#8b5e3c"/><circle cx="70" cy="212" r="7" fill="#2b1d14"/><circle cx="65" cy="207" r="3" fill="#fff" opacity=".8"/>
<text x="70" y="256" text-anchor="middle" font-size="12.5" fill="#4b5563">结膜边缘发黄</text>
</svg>`;
};

/* ---------- 菌群格子 ---------- */
export const inulinBag = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<path d="M20 22h44l6 56H14Z" fill="#ead8b6" stroke="#b98a4e" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M20 22l5-10h34l5 10" fill="#d9c294" stroke="#b98a4e" stroke-width="1.8" stroke-linejoin="round"/>
<rect x="24" y="40" width="36" height="21" rx="3" fill="#fff"/><text x="42" y="55" text-anchor="middle" font-size="11.5" font-weight="800" fill="#8a6a2f">菊粉</text>
<path d="M78 66l24-20" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="76" cy="68" rx="13" ry="7.5" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.6"/>
<path d="M65 67c4-8 18-8 22 0Z" fill="#fff" stroke="#e2e8f0" stroke-width="1.2"/>
</svg>`;

export const broccoli = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M48 46l-6 32h22l-6-32Z" fill="#b5e48c" stroke="#65a30d" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M53 56v18" stroke="#86c35a" stroke-width="2" stroke-linecap="round"/>
<g fill="#4ade80" stroke="#15803d" stroke-width="1.8"><circle cx="36" cy="38" r="14"/><circle cx="72" cy="38" r="14"/><circle cx="54" cy="28" r="17"/><circle cx="46" cy="48" r="11"/><circle cx="62" cy="48" r="11"/></g>
<g fill="#22c55e"><circle cx="50" cy="24" r="3"/><circle cx="60" cy="30" r="3"/><circle cx="34" cy="36" r="3"/><circle cx="74" cy="36" r="3"/></g>
</svg>`;

export const probiotic = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
${capsule(10, 34, '#a78bfa', '#ede9fe', -24, 54, 22)}
${germ(78, 22, 20)}${germ(84, 50, -15, '#c4b5fd', '#7c3aed')}${germ(66, 70, 8, '#fde68a', '#d97706')}
<circle cx="24" cy="18" r="11" fill="#fff7ed" stroke="#f59e0b" stroke-width="1.8"/><text x="24" y="23" text-anchor="middle" font-size="13" font-weight="800" fill="#d97706">¥</text>
</svg>`;

export const antibiotic = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<rect x="8" y="16" width="56" height="58" rx="8" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.8"/>
<g fill="#fff" stroke="#cbd5e1" stroke-width="1.6"><circle cx="24" cy="32" r="8"/><circle cx="48" cy="32" r="8"/><circle cx="24" cy="58" r="8"/><circle cx="48" cy="58" r="8"/></g>
${germ(84, 26, 10)}${germ(86, 58, -12, '#c4b5fd', '#7c3aed')}
<path d="M74 16l20 20M94 16L74 36M76 48l20 20M96 48L76 68" stroke="#ef4444" stroke-width="2.4" stroke-linecap="round" opacity=".85"/>
</svg>`;

export const sugarCubes = () => {
  const cube = (x, y, s) =>
    `<path d="M${x} ${y}l${s} ${-s / 2}l${s} ${s / 2}l${-s} ${s / 2}Z" fill="#fff" stroke="#94a3b8" stroke-width="1.6"/><path d="M${x} ${y}v${s}l${s} ${s / 2}v${-s}Z" fill="#e8eef6" stroke="#94a3b8" stroke-width="1.6"/><path d="M${x + s} ${y + s / 2}v${s}l${s} ${-s / 2}v${-s}Z" fill="#d3dce8" stroke="#94a3b8" stroke-width="1.6"/>`;
  return `<svg viewBox="0 0 110 84" aria-hidden="true">
${cube(14, 46, 20)}${cube(54, 46, 20)}${cube(34, 22, 20)}
<g fill="#fff" stroke="#e2e8f0" stroke-width="1"><circle cx="94" cy="20" r="2.4"/><circle cx="100" cy="30" r="1.8"/><circle cx="90" cy="34" r="1.6"/></g>
</svg>`;
};
