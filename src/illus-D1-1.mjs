// D1-1 图解卡片用的矢量插画（SVG）。示意图，非解剖比例。风格与 src/illus.mjs 一致。
const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;

/* ---------- 一张图看懂：食物进嘴之前，消化就开始了 ---------- */
export function digestStart() {
  const callout = (n, x, y, title, desc) => `<g ${F}><circle cx="${x}" cy="${y}" r="19" fill="#f6747a" stroke="#fff" stroke-width="3" filter="url(#ds-sh)"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${x + 30}" y="${y + 1}" font-size="20" font-weight="800" fill="#1f2937">${title}</text>
<text x="${x + 30}" y="${y + 25}" font-size="14.5" fill="#4b5563">${desc}</text></g>`;
  const lead = (d) => `<path d="${d}" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="4 4"/>`;
  const row = (y, c, t) => `<circle cx="20" cy="${y - 5}" r="4" fill="${c}"/><text x="32" y="${y}" font-size="13.5" fill="#374151">${t}</text>`;
  return `<svg viewBox="0 0 860 500" width="100%" aria-label="看见、闻到食物，咀嚼和唾液启动消化，信号经脑干和迷走神经唤醒胃肠" ${F}>
<defs>
<filter id="ds-sh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#f6747a" flood-opacity=".35"/></filter>
<filter id="ds-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
<linearGradient id="ds-skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1ea"/><stop offset="1" stop-color="#fde3d6"/></linearGradient>
<linearGradient id="ds-sto" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient>
<linearGradient id="ds-bowl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dbeafe"/></linearGradient>
<radialGradient id="ds-bs"><stop offset="0" stop-color="#fde047" stop-opacity=".85"/><stop offset="1" stop-color="#fde047" stop-opacity="0"/></radialGradient>
<radialGradient id="ds-warm"><stop offset="0" stop-color="#fde047" stop-opacity=".6"/><stop offset="1" stop-color="#fde047" stop-opacity="0"/></radialGradient>
<marker id="ds-arr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#8b5cf6"/></marker>
<marker id="ds-arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#f08a24"/></marker>
</defs>
<!-- 躯干（正面） -->
<path d="M488 200L488 214C462 222 436 226 426 242C416 256 414 282 416 314L424 420L428 494L604 494L608 420L616 314C618 282 616 256 606 242C596 226 570 222 544 214L544 200Z" fill="url(#ds-skin)" stroke="#efc3ae" stroke-width="2"/>
<!-- 胃肠被唤醒的光晕 -->
<circle cx="560" cy="350" r="52" fill="url(#ds-warm)"/><circle cx="516" cy="440" r="70" fill="url(#ds-warm)"/>
<!-- 食管 -->
<path d="M502 190L506 262L512 300Q516 316 536 320" fill="none" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<!-- 胃 -->
<g transform="translate(72 16)"><path d="M455 298c23-8 57 2 63 26 6 24-12 46-38 48-18 1-34-6-36-18-2-10 10-14 20-10 12 4 26-2 28-14 2-14-16-20-30-16Z" fill="url(#ds-sto)" stroke="#df7590" stroke-width="1.8"/><path d="M486 312c10 4 16 12 16 22" fill="none" stroke="#fde4ea" stroke-width="3" stroke-linecap="round"/></g>
<!-- 大肠框 + 小肠 -->
<path d="M438 490L437 408Q437 400 445 400L588 400Q596 400 596 408L597 490" fill="none" stroke="#e9a19a" stroke-width="18" stroke-linecap="round"/>
<path d="M428 420h18M428 444h18M428 468h18M470 392v16M510 392v16M550 392v16M588 420h18M588 444h18M588 468h18" stroke="#d4847c" stroke-width="1.5"/>
<ellipse cx="516" cy="446" rx="60" ry="30" fill="#fcd6d1"/>
<path d="M468 426c18-8 38 8 58-2s40 4 44 14c4 12-16 16-34 8s-38 8-54 0-24 8-12 16c12 10 36 0 56 4s34 0 42 6" fill="none" stroke="#f29a9a" stroke-width="8" stroke-linecap="round"/>
<!-- 头部（侧面，面朝左），颈部与躯干相接处不描边 -->
<path d="M488 232L488 188C476 180 462 176 450 174C438 172 432 164 434 156C435 151 438 149 436 146C431 145 429 141 432 138L436 136C430 134 430 129 434 126C428 126 422 123 423 119L437 99C441 94 441 88 440 80C440 48 466 24 502 24C552 24 590 58 590 112C590 146 574 176 548 190L546 232" fill="url(#ds-skin)" stroke="#efc3ae" stroke-width="2" stroke-linejoin="round"/>
<path d="M436 136L450 138" stroke="#d48c7e" stroke-width="1.8" stroke-linecap="round"/>
<!-- 眼睛 -->
<path d="M448 72c8-4 18-4 26-1" fill="none" stroke="#6b4f3a" stroke-width="2.4" stroke-linecap="round"/>
<path d="M452 84c4-5 14-6 20-1-6 5-15 5-20 1Z" fill="#fff" stroke="#6b4f3a" stroke-width="1.6"/><circle cx="458" cy="84" r="2.8" fill="#3f2a1e"/>
<!-- 大脑、小脑、脑干 -->
<path d="M478 80C472 52 494 32 524 32C558 30 584 52 584 80C584 96 576 106 562 108C548 110 538 104 526 106C508 110 484 106 478 80Z" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M494 60c6-8 14-8 18 0M502 84c6-7 14-7 20 0M526 50c5-5 12-5 16 0M548 70c6-6 14-6 18 0M558 92c4-4 10-4 14 0" fill="none" stroke="#fde4ea" stroke-width="2.4" stroke-linecap="round"/>
<ellipse cx="566" cy="114" rx="15" ry="8.5" fill="#f9b9c6" stroke="#e98ca1" stroke-width="1.4"/>
<circle cx="538" cy="146" r="26" fill="url(#ds-bs)"/>
<path d="M528 104C530 128 532 152 536 186L548 186C546 152 544 128 542 104Z" fill="#f7a541" stroke="#dc7a12" stroke-width="1.6"/>
<!-- 唾液 -->
<path d="M446 141c2.4 3.4 3.6 5.6 3.6 7a3.6 3.6 0 0 1-7.2 0c0-1.4 1.2-3.6 3.6-7Z" fill="#7cc4f2" stroke="#3b9ad9" stroke-width="1"/>
<path d="M456 146c1.8 2.6 2.8 4.2 2.8 5.3a2.8 2.8 0 0 1-5.6 0c0-1.1 1-2.7 2.8-5.3Z" fill="#7cc4f2" stroke="#3b9ad9" stroke-width="1"/>
<!-- 咀嚼：下巴上下动 -->
<path d="M420 146q-8 13 0 26" fill="none" stroke="#f08a24" stroke-width="2.4" stroke-linecap="round" marker-start="url(#ds-arr2)" marker-end="url(#ds-arr2)"/>
<!-- 神经：三叉神经（下巴 → 脑干）、迷走神经（脑干 → 胃肠） -->
<g stroke-linecap="round" fill="none">
<path d="M482 152C496 146 512 140 532 138" stroke="#fde68a" stroke-width="8" opacity=".75" filter="url(#ds-glow)"/>
<path d="M540 184C536 214 528 244 526 276C524 298 536 312 552 322M526 276C520 318 512 360 510 402" stroke="#fde68a" stroke-width="9" opacity=".75" filter="url(#ds-glow)"/>
<path d="M482 152C496 146 512 140 532 138" stroke="#f2a516" stroke-width="3"/>
<path d="M540 184C536 214 528 244 526 276C524 298 536 312 552 322M526 276C520 318 512 360 510 402" stroke="#f2a516" stroke-width="3.4"/>
<path d="M552 322l14-4M510 402l-20 12M510 402l20 10M524 300l-14 8" stroke="#f2a516" stroke-width="2.4"/>
</g>
<g fill="#f2a516"><circle cx="482" cy="152" r="4"/><circle cx="566" cy="318" r="4"/><circle cx="490" cy="414" r="4"/><circle cx="530" cy="412" r="4"/><circle cx="510" cy="308" r="4"/></g>
<g font-size="12" font-weight="700" fill="#b45309"><text x="474" y="132">三叉神经</text><text x="548" y="258">迷走神经</text></g>
<g stroke="#f5b335" stroke-width="2.4" stroke-linecap="round"><path d="M604 318l8-6M606 346h10M600 372l8 6"/></g>
<!-- 一碗面 + 香气 -->
<ellipse cx="340" cy="198" rx="22" ry="4.5" fill="#bfdbfe"/>
<path d="M294 152H386C384 178 366 196 340 196C314 196 296 178 294 152Z" fill="url(#ds-bowl)" stroke="#60a5fa" stroke-width="1.8"/>
<path d="M302 168H378" stroke="#93c5fd" stroke-width="2.2" stroke-dasharray="7 5"/>
<ellipse cx="340" cy="152" rx="46" ry="9" fill="#fef3c7" stroke="#60a5fa" stroke-width="1.8"/>
<path d="M302 152c6-5 10 3 16-2s10 3 16-2 10 3 16-2 10 3 16-2 10 3 14-2" fill="none" stroke="#f2c46d" stroke-width="2.4" stroke-linecap="round"/>
<ellipse cx="322" cy="147" rx="11" ry="6" fill="#fff" stroke="#e5e7eb"/><circle cx="322" cy="147" r="4" fill="#fbbf24"/>
<path d="M348 148c4-8 12-10 18-6-4 6-10 9-18 6Z" fill="#4ade80" stroke="#16a34a" stroke-width="1"/>
<g fill="none" stroke="#cbd5e1" stroke-width="2.4" stroke-linecap="round"><path d="M322 136c-6-8 6-12 0-20s6-12 0-20"/><path d="M340 134c-6-8 6-12 0-20s6-12 0-20"/><path d="M358 136c-6-8 6-12 0-20s6-12 0-20"/></g>
<path d="M352 90C378 78 402 94 420 114" fill="none" stroke="#a78bfa" stroke-width="2.2" stroke-dasharray="2 5" stroke-linecap="round" marker-end="url(#ds-arr)"/>
<g fill="#c4b5fd"><circle cx="372" cy="84" r="2.4"/><circle cx="392" cy="88" r="2.4"/><circle cx="406" cy="100" r="2.4"/></g>
<!-- 连锁反应 -->
<g transform="translate(638 190)">
<rect width="214" height="112" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="16" y="26" font-size="13.5" font-weight="800" fill="#b45309">咀嚼、唾液不足的连锁反应</text>
${row(52, '#f6747a', '嚼不成食糜 → 营养不良')}${row(76, '#a78bfa', '杀菌不足 → 菌群失调')}${row(100, '#60a5fa', '牙龈发炎 → 牙周病')}
</g>
<!-- 深夜吃播 -->
<g transform="translate(26 330)">
<rect width="272" height="112" rx="14" fill="#fff" stroke="#ddd6fe" stroke-width="1.6"/>
<text x="16" y="26" font-size="13.5" font-weight="800" fill="#6d28d9">深夜吃播：只看不吃也有代价</text>
${row(52, '#a78bfa', '看完视频就去吃，大脑会关联起来')}${row(76, '#a78bfa', '以后一看就启动消化、胰岛素提前分泌')}${row(100, '#a78bfa', '胰岛素抵抗加重，消化系统不得休息')}
</g>
${lead('M262 48C340 44 410 60 450 82')}
${lead('M156 146C220 138 270 124 314 110')}
${lead('M262 258C340 240 400 200 442 150')}
${lead('M633 120C610 126 580 134 548 140')}
${lead('M633 368C618 364 604 358 592 352')}
${callout('01', 36, 52, '看见 · 想到食物', '唾液、胃酸和消化酶预先启动')}
${callout('02', 36, 150, '闻到香味', '流口水、更饿，肚子咕咕叫')}
${callout('03', 36, 262, '咀嚼 · 唾液', '嚼成食糜；唾液杀菌、助消化')}
${callout('04', 652, 120, '唤醒脑干', '下巴活动经三叉神经传入')}
${callout('05', 652, 368, '胃肠开始工作', '信号顺迷走神经传到胃肠')}
</svg>`;
}

/* ---------- 卡片角图 ---------- */
// 全脑都差：脑功能图上到处是蓝色
export const brainBlue = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M14 50C6 28 28 8 58 8C90 6 112 22 112 46C112 62 102 70 90 70C78 72 68 66 58 68C40 72 18 70 14 50Z" fill="#e0ecff" stroke="#3b82f6" stroke-width="1.8"/>
<g opacity=".8"><ellipse cx="32" cy="40" rx="12" ry="9" fill="#2563eb"/><ellipse cx="60" cy="22" rx="14" ry="8" fill="#1d4ed8"/><ellipse cx="88" cy="34" rx="12" ry="10" fill="#3b82f6"/><ellipse cx="62" cy="50" rx="13" ry="8" fill="#1e40af"/><ellipse cx="96" cy="58" rx="8" ry="6" fill="#2563eb"/></g>
<path d="M28 26c6-6 14-6 18 0M70 36c6-5 12-5 16 0M40 58c5-4 11-4 14 0" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" opacity=".85"/>
<ellipse cx="92" cy="76" rx="13" ry="7" fill="#93c5fd" stroke="#2563eb" stroke-width="1.4"/>
<path d="M70 68c1 6 2 12 4 18h8c-2-6-3-12-3-18Z" fill="#f7a541" stroke="#dc7a12" stroke-width="1.2"/>
</svg>`;

// 内脏觉：胃肠的信号上传给大脑
export const gutSignal = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<defs><linearGradient id="gs-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient></defs>
<path d="M78 8C66 4 54 12 54 24c0 10 8 17 17 18h18c9-1 17-8 17-18 0-12-12-20-28-16Z" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.6"/>
<path d="M64 20c4-4 8-4 11 0M80 16c3-3 8-3 10 1M70 32c4-3 9-3 12 0" fill="none" stroke="#fde4ea" stroke-width="2.2" stroke-linecap="round"/>
<path d="M12 52c14-6 32 0 35 14 3 14-7 22-22 22-10 0-18-4-19-10-1-6 6-8 11-6 6 2 13-1 13-7 1-7-8-10-16-8Z" fill="url(#gs-g)" stroke="#df7590" stroke-width="1.6"/>
<path d="M40 46c6-6 10-10 16-14M48 54c6-6 12-10 18-14M56 62c6-6 12-10 18-14" fill="none" stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="1 4.5"/>
<path d="M84 50l-1 10h9l-12 16 2-12h-8Z" fill="#fde68a" stroke="#f2a516" stroke-width="1.4" stroke-linejoin="round"/>
</svg>`;

// 神经元三要素：氧气、养分、刺激
export const neuronFuel = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<path d="M84 60L62 50M84 60L70 76M84 60L90 40M84 60l28 18" stroke="#4ade80" stroke-width="3" stroke-linecap="round"/>
<path d="M62 50l-6-5M62 50l-7 2M70 76l-7 2M70 76l-1 7M90 40l-5-5M90 40l5-5" stroke="#4ade80" stroke-width="2" stroke-linecap="round"/>
<circle cx="84" cy="60" r="11" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.8"/><circle cx="84" cy="60" r="4" fill="#16a34a"/>
<circle cx="44" cy="16" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.6"/><text x="44" y="21" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">O₂</text>
<circle cx="76" cy="18" r="10" fill="#f87171" stroke="#dc2626" stroke-width="1.6"/><path d="M76 8c0-4 2-6 5-7" fill="none" stroke="#65a30d" stroke-width="2" stroke-linecap="round"/><ellipse cx="72" cy="14" rx="3" ry="2" fill="#fff" opacity=".6"/>
<path d="M106 4l-7 14h7l-4 13 12-17h-7l4-10Z" fill="#fde68a" stroke="#f2a516" stroke-width="1.4" stroke-linejoin="round"/>
</svg>`;

/* ---------- 补剂“没效”的三个原因 ---------- */
const cap = (x, y, rot, a = '#f59e0b', b = '#fef3c7', w = 24, h = 10) =>
  `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${b}" stroke="${a}" stroke-width="1"/><path d="M${x + h / 2} ${y}H${x + w / 2}V${y + h}H${x + h / 2}a${h / 2} ${h / 2} 0 0 1 0-${h}Z" fill="${a}"/></g>`;

// 消化不了：补剂在胃里原样转一圈
export const cantDigest = () => `<svg viewBox="0 0 130 88" aria-hidden="true">
<defs><linearGradient id="cd-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient></defs>
<path d="M30 6L32 18" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<path d="M34 16c22-9 56-2 62 22 7 26-12 44-40 46-18 1-34-6-36-18-2-10 10-14 20-10 12 5 28-1 30-13 1-13-16-18-30-14Z" fill="url(#cd-g)" stroke="#df7590" stroke-width="1.8"/>
${cap(52, 30, -20, '#60a5fa', '#dbeafe')}${cap(62, 50, 15)}${cap(36, 62, -5, '#a78bfa', '#ede9fe')}
<path d="M84 60c10 4 18 4 26 0" fill="none" stroke="#9ca3af" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="3 4"/>
<path d="M106 54l6 6-8 4" fill="none" stroke="#9ca3af" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

// 吸收不了：营养在肠壁外弹开
export const cantAbsorb = () => `<svg viewBox="0 0 130 88" aria-hidden="true">
<rect x="6" y="62" width="118" height="22" rx="6" fill="#f8b4c0" stroke="#e98ca1" stroke-width="1.6"/>
<path d="M14 64v-12a5 5 0 0 1 10 0v12M32 64v-14a5 5 0 0 1 10 0v14M50 64v-12a5 5 0 0 1 10 0v12M68 64v-14a5 5 0 0 1 10 0v14M86 64v-12a5 5 0 0 1 10 0v12M104 64v-14a5 5 0 0 1 10 0v14" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.6"/>
<g fill="#fbbf24" stroke="#d97706" stroke-width="1"><circle cx="30" cy="22" r="5"/><circle cx="56" cy="14" r="5"/><circle cx="80" cy="26" r="5"/></g>
<path d="M30 30v8M30 30l-3 4M30 30l3 4M56 22v10M56 22l-3 4M56 22l3 4M80 34v6M80 34l-3 4M80 34l3 4" stroke="#9ca3af" stroke-width="2" stroke-linecap="round"/>
<circle cx="108" cy="20" r="12" fill="#fff" stroke="#ef4444" stroke-width="3"/><path d="M102 14l12 12M114 14l-12 12" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// 被过度消耗：炎症让需求从 500 涨到 1500
export const overUse = () => `<svg viewBox="0 0 130 88" aria-hidden="true" ${F}>
<path d="M30 80c-14 0-22-10-20-22 2-10 10-14 10-26 8 6 10 12 10 18 4-6 4-12 2-20 12 8 20 20 18 32-1 10-8 18-20 18Z" fill="#fb923c" stroke="#ea580c" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M30 80c-6 0-10-5-9-11 1-5 5-7 6-12 5 4 9 9 9 14 0 6-3 9-6 9Z" fill="#fde68a"/>
<rect x="66" y="58" width="20" height="22" rx="3" fill="#86efac" stroke="#16a34a" stroke-width="1.4"/>
<rect x="96" y="24" width="20" height="56" rx="3" fill="#fff" stroke="#f97316" stroke-width="1.8" stroke-dasharray="4 3"/>
<text x="76" y="52" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">500</text>
<text x="106" y="18" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c">1500</text>
<path d="M62 82h58" stroke="#9ca3af" stroke-width="1.6" stroke-linecap="round"/>
</svg>`;

// 跟着食物走：从碗到马桶
export const foodJourney = () => `<svg viewBox="0 0 150 88" aria-hidden="true">
<path d="M8 40H54C53 54 44 62 31 62S9 54 8 40Z" fill="#e0f2fe" stroke="#60a5fa" stroke-width="1.6"/>
<ellipse cx="31" cy="40" rx="23" ry="5" fill="#fef3c7" stroke="#60a5fa" stroke-width="1.6"/>
<path d="M18 30c-3-4 3-6 0-10M30 28c-3-4 3-6 0-10M42 30c-3-4 3-6 0-10" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
<path d="M40 70C62 88 90 86 104 66" fill="none" stroke="#f08a24" stroke-width="2.4" stroke-dasharray="4 5" stroke-linecap="round"/>
<path d="M98 66l7-2 1 7" fill="none" stroke="#f08a24" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="114" y="14" width="26" height="30" rx="4" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.6"/>
<path d="M100 44H144C144 58 136 66 124 66H120C108 66 100 58 100 44Z" fill="#fff" stroke="#94a3b8" stroke-width="1.6"/>
<path d="M116 66l-2 12h20l-2-12" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.6"/>
<rect x="120" y="20" width="10" height="4" rx="2" fill="#cbd5e1"/>
</svg>`;

/* ---------- 嗅觉：直通边缘系统 ---------- */
export const smellPath = () => `<svg viewBox="0 0 330 260" aria-label="嗅神经直通边缘系统和海马，其他感觉要经脑干、丘脑中转" ${F}>
<defs><linearGradient id="sp-skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4ee"/><stop offset="1" stop-color="#fde3d6"/></linearGradient>
<marker id="sp-a" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#f2a516"/></marker>
<marker id="sp-b" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#94a3b8"/></marker>
<marker id="sp-c" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#a78bfa"/></marker></defs>
<path d="M150 260L150 238C128 240 104 240 92 234C82 230 76 224 78 216C72 214 70 208 74 204C68 202 66 196 70 192C60 192 40 188 36 182L56 148C60 136 58 122 58 106C58 60 104 24 170 24C246 24 306 70 306 136C306 180 288 214 262 232L258 260" fill="url(#sp-skin)" stroke="#efc3ae" stroke-width="2" stroke-linejoin="round"/>
<path d="M72 198L86 199" stroke="#d48c7e" stroke-width="1.6" stroke-linecap="round"/>
<path d="M78 126C64 90 90 44 144 38C200 30 266 50 286 96C296 122 284 146 258 150C236 154 220 146 204 148C180 152 158 160 134 158C108 156 86 150 78 126Z" fill="#f3efff" stroke="#a78bfa" stroke-width="1.8"/>
<path d="M100 96c18-24 44-18 54-34M150 58c18 16 44 0 62 16M224 66c16 14 32 8 42 32M96 126c-6-12 0-24 10-28" fill="none" stroke="#ddd6fe" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="250" cy="170" rx="32" ry="16" fill="#dbeafe" stroke="#7fa6f4" stroke-width="1.6"/>
<path d="M228 166c14-6 30-6 44 0M230 176c14-4 28-4 40 0" fill="none" stroke="#a9c4fb" stroke-width="1.6" stroke-linecap="round"/>
<path d="M196 150C198 182 202 216 206 254L222 254C220 216 216 182 214 150Z" fill="#f7c08a" stroke="#e39243" stroke-width="1.6"/>
<ellipse cx="222" cy="108" rx="20" ry="12" fill="#c7d2fe" stroke="#6366f1" stroke-width="1.6"/>
<path d="M126 142C136 128 158 124 174 132C186 138 198 138 206 130C206 144 192 154 176 152C164 151 156 146 146 148C138 150 130 150 126 142Z" fill="#fdba74" stroke="#ea7a12" stroke-width="1.6"/>
<path d="M46 184C58 178 72 170 86 163" fill="none" stroke="#fbc4cf" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="96" cy="152" rx="13" ry="5.5" fill="#fde68a" stroke="#f2a516" stroke-width="1.6"/>
<path d="M60 178C72 172 84 164 94 156C104 150 114 146 124 143" fill="none" stroke="#f2a516" stroke-width="3.4" stroke-linecap="round" marker-end="url(#sp-a)"/>
<path d="M6 200L28 190" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 4" marker-end="url(#sp-c)"/>
<g fill="#c4b5fd"><circle cx="10" cy="186" r="2.6"/><circle cx="16" cy="210" r="2.6"/><circle cx="4" cy="214" r="2.2"/></g>
<path d="M210 236C210 196 212 156 218 124" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="5 4" stroke-linecap="round" marker-end="url(#sp-b)"/>
<path d="M212 96C204 80 194 70 180 62" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-dasharray="5 4" stroke-linecap="round" marker-end="url(#sp-b)"/>
<g font-weight="800" text-anchor="middle"><text x="132" y="84" font-size="14" fill="#6d28d9">大脑皮层</text><text x="222" y="113" font-size="12.5" fill="#4338ca">丘脑</text><text x="152" y="120" font-size="12.5" fill="#c2410c">边缘系统 · 海马</text><text x="106" y="178" font-size="12.5" fill="#b45309">嗅球</text></g>
<text x="234" y="226" font-size="12.5" font-weight="800" fill="#b4621d">脑干</text>
<text x="226" y="138" font-size="12" fill="#64748b">其他感觉</text>
</svg>`;

// 嗅觉的三个作用：激活消化、记忆与场景、情绪
export const smellUses = () => `<svg viewBox="0 0 180 300" aria-label="嗅觉与消化、场景记忆、情绪相关" ${F}>
<defs><linearGradient id="su-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient></defs>
<circle cx="90" cy="50" r="44" fill="#fff7db" stroke="#f5b335" stroke-width="2"/>
<path d="M76 24L77 32" stroke="#f6c2cc" stroke-width="6" stroke-linecap="round"/>
<path d="M80 30c18-7 44-1 48 18 5 20-9 34-30 36-14 1-26-5-28-14-1-8 8-11 15-8 9 4 21-1 23-10 1-10-12-14-23-11Z" fill="url(#su-g)" stroke="#df7590" stroke-width="1.6"/>
<g stroke="#f5b335" stroke-width="2.4" stroke-linecap="round"><path d="M58 30l-6-4M54 46h-8M58 62l-6 4"/></g>
<circle cx="90" cy="150" r="44" fill="#f3efff" stroke="#a78bfa" stroke-width="2"/>
<rect x="62" y="126" width="56" height="44" rx="5" fill="#fff" stroke="#8b5cf6" stroke-width="2"/>
<path d="M64 168l18-22 12 14 8-9 14 17Z" fill="#86efac" stroke="#16a34a" stroke-width="1.2" stroke-linejoin="round"/>
<circle cx="104" cy="138" r="6" fill="#fcd34d" stroke="#f59e0b" stroke-width="1.2"/>
<circle cx="90" cy="250" r="44" fill="#fdf0f5" stroke="#f472b6" stroke-width="2"/>
<circle cx="84" cy="254" r="22" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<circle cx="77" cy="249" r="2.6" fill="#3f2a1e"/><circle cx="91" cy="249" r="2.6" fill="#3f2a1e"/>
<path d="M75 260c5 6 13 6 18 0" fill="none" stroke="#c2410c" stroke-width="2.2" stroke-linecap="round"/>
<path d="M112 228c-3-5-11-4-11 2 0 5 6 9 11 13 5-4 11-8 11-13 0-6-8-7-11-2Z" fill="#f472b6" stroke="#db2777" stroke-width="1.2"/>
</svg>`;

// 对比框角图：感冒病毒、老人
export const virus = () => `<svg viewBox="0 0 70 50" aria-hidden="true">
<g stroke="#16a34a" stroke-width="2.4" stroke-linecap="round"><path d="M34 6v6M34 38v6M15 25h6M47 25h6M21 12l4 4M43 34l4 4M47 12l-4 4M21 38l4-4"/></g>
<g fill="#22c55e"><circle cx="34" cy="5" r="2.6"/><circle cx="34" cy="45" r="2.6"/><circle cx="14" cy="25" r="2.6"/><circle cx="54" cy="25" r="2.6"/></g>
<circle cx="34" cy="25" r="12" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.8"/><circle cx="30" cy="22" r="2.4" fill="#16a34a"/><circle cx="38" cy="29" r="2" fill="#16a34a"/>
</svg>`;

export const elder = () => `<svg viewBox="0 0 70 50" aria-hidden="true">
<circle cx="28" cy="16" r="10" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<path d="M18 14c2-8 16-10 20-2" fill="none" stroke="#d1d5db" stroke-width="4" stroke-linecap="round"/>
<circle cx="24" cy="17" r="3" fill="none" stroke="#6b7280" stroke-width="1.2"/><circle cx="32" cy="17" r="3" fill="none" stroke="#6b7280" stroke-width="1.2"/>
<path d="M12 48c0-12 7-20 16-20s16 8 16 20Z" fill="#c4b5fd" stroke="#8b5cf6" stroke-width="1.6"/>
<path d="M54 18v24M48 18h12" stroke="#a16207" stroke-width="3" stroke-linecap="round"/>
<path d="M50 10c3-2 6-2 8 0" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
</svg>`;

/* ---------- 嗅觉记忆测试与康复 ---------- */
const bottle = (x, y, label, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
<rect x="7" y="0" width="10" height="9" rx="2" fill="#374151"/><rect x="5" y="8" width="14" height="5" rx="1.5" fill="#6b7280"/>
<rect x="0" y="12" width="24" height="34" rx="6" fill="#d97706" opacity=".85"/><rect x="3" y="16" width="5" height="22" rx="2.5" fill="#fff" opacity=".35"/>
<rect x="3" y="24" width="18" height="14" rx="3" fill="#fff"/>${label}</g>`;
const dot = (c) => `<circle cx="12" cy="31" r="5" fill="${c}"/>`;

// 四瓶基础精油：丁香、柠檬、玫瑰、桉树
export const oils4 = () => `<svg viewBox="0 0 130 88" aria-hidden="true">
${bottle(6, 30, dot('#92400e'))}${bottle(36, 30, dot('#facc15'))}${bottle(66, 30, dot('#f472b6'))}${bottle(96, 30, dot('#22c55e'))}
<g fill="none" stroke="#c4b5fd" stroke-width="2" stroke-linecap="round"><path d="M18 22c-3-4 3-6 0-10"/><path d="M48 22c-3-4 3-6 0-10"/><path d="M78 22c-3-4 3-6 0-10"/><path d="M108 22c-3-4 3-6 0-10"/></g>
</svg>`;

// 随机测、认错就纠正，约 80% 说对
export const score80 = () => `<svg viewBox="0 0 130 88" aria-hidden="true" ${F}>
<rect x="8" y="8" width="76" height="74" rx="10" fill="#fff" stroke="#fbcfa0" stroke-width="1.8"/>
<g stroke-linecap="round" stroke-linejoin="round" fill="none" stroke-width="3">
<path d="M18 24l5 5 9-10" stroke="#22c55e"/><path d="M18 42l5 5 9-10" stroke="#22c55e"/><path d="M18 60l5 5 9-10" stroke="#22c55e"/>
<path d="M58 18l10 10M68 18L58 28" stroke="#ef4444"/><path d="M57 42l5 5 9-10" stroke="#22c55e"/><path d="M57 60l5 5 9-10" stroke="#22c55e"/></g>
<path d="M40 14v62" stroke="#f3e8d8" stroke-width="1.6"/>
<circle cx="104" cy="44" r="22" fill="#fff7ed" stroke="#f08a24" stroke-width="2.4"/>
<text x="104" y="50" text-anchor="middle" font-size="16" font-weight="900" fill="#c2410c">80%</text>
</svg>`;

// 扩大气味库：逐步到约 12 种
export const oils12 = () => {
  const cs = ['#92400e', '#facc15', '#f472b6', '#22c55e', '#a78bfa', '#fb923c', '#38bdf8', '#ef4444', '#84cc16', '#e879f9', '#14b8a6', '#f59e0b'];
  let g = '';
  cs.forEach((c, i) => {
    g += bottle(6 + (i % 6) * 20, 6 + Math.floor(i / 6) * 40, dot(c), 0.72);
  });
  return `<svg viewBox="0 0 130 88" aria-hidden="true">${g}</svg>`;
};

// 联结个人记忆：闻到气味，想起一个画面
export const smellMemory = () => `<svg viewBox="0 0 140 88" aria-hidden="true">
<path d="M40 88V70C48 62 50 50 48 36C46 18 36 8 24 8C14 8 8 16 8 26C8 32 6 36 4 40L0 48C2 52 6 52 8 52C8 58 10 62 16 62C22 64 28 70 28 88" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M18 26c3-2 7-2 10 0" fill="none" stroke="#6b4f3a" stroke-width="1.8" stroke-linecap="round"/>
<circle cx="56" cy="40" r="3" fill="#ede9fe" stroke="#a78bfa" stroke-width="1.2"/><circle cx="64" cy="30" r="4.5" fill="#ede9fe" stroke="#a78bfa" stroke-width="1.2"/>
<path d="M78 6h46a12 12 0 0 1 12 12v32a12 12 0 0 1-12 12H78a12 12 0 0 1-12-12V18A12 12 0 0 1 78 6Z" fill="#f5f3ff" stroke="#a78bfa" stroke-width="1.6"/>
<rect x="72" y="40" width="58" height="16" rx="4" fill="#bbf7d0"/>
<circle cx="118" cy="20" r="7" fill="#fcd34d" stroke="#f59e0b" stroke-width="1.2"/>
<path d="M82 40l10-14 10 14Z" fill="#fca5a5" stroke="#ef4444" stroke-width="1.2" stroke-linejoin="round"/><rect x="85" y="40" width="14" height="10" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
<path d="M112 50V38" stroke="#92400e" stroke-width="2.4" stroke-linecap="round"/><circle cx="112" cy="34" r="7" fill="#4ade80" stroke="#16a34a" stroke-width="1.2"/>
</svg>`;
