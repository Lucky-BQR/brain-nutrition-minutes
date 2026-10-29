// 全课总览用的插画。示意图，非解剖比例。
const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;

/* ---------- 一张图看懂：两天课程怎么走 ---------- */
export function courseMap() {
  const D1 = '#f08a24';
  const D2 = '#8b5cf6';
  const callout = (n, x, y, color, title, desc, desc2 = '') => `<g ${F}>
<circle cx="${x}" cy="${y}" r="19" fill="${color}" stroke="#fff" stroke-width="3"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${x + 30}" y="${y + 1}" font-size="19" font-weight="800" fill="#1f2937">${title}</text>
<text x="${x + 30}" y="${y + 25}" font-size="14.5" fill="#4b5563">${desc}</text>${desc2 ? `<text x="${x + 30}" y="${y + 46}" font-size="14.5" fill="#4b5563">${desc2}</text>` : ''}</g>`;
  const lead = (d, color) => `<path d="${d}" fill="none" stroke="${color}" stroke-width="1.6" stroke-dasharray="4 4"/>`;
  return `<svg viewBox="0 0 860 560" width="100%" aria-label="第一天跟着食物走一遍消化系统，第二天从大脑讲到全局问题" ${F}>
<defs>
<linearGradient id="cm-skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1ea"/><stop offset="1" stop-color="#fde3d6"/></linearGradient>
<linearGradient id="cm-liver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4675d"/><stop offset="1" stop-color="#a8403a"/></linearGradient>
<linearGradient id="cm-sto" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient>
<linearGradient id="cm-heart" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f87171"/><stop offset="1" stop-color="#d63a4f"/></linearGradient>
<radialGradient id="cm-glow"><stop offset="0" stop-color="#c4b5fd" stop-opacity=".75"/><stop offset="1" stop-color="#c4b5fd" stop-opacity="0"/></radialGradient>
<radialGradient id="cm-glow2"><stop offset="0" stop-color="#fdba74" stop-opacity=".6"/><stop offset="1" stop-color="#fdba74" stop-opacity="0"/></radialGradient>
</defs>
<!-- 两天的标签 -->
<rect x="16" y="10" width="318" height="36" rx="18" fill="#fff1e0"/>
<text x="175" y="34" text-anchor="middle" font-size="16" font-weight="800" fill="#c55f0a">第一天 · 跟着食物走一遍消化系统</text>
<rect x="526" y="10" width="318" height="36" rx="18" fill="#efe9ff"/>
<text x="685" y="34" text-anchor="middle" font-size="16" font-weight="800" fill="#6d28d9">第二天 · 从大脑管内脏，到全局问题</text>
<!-- 身体 -->
<path d="M408 170 L408 196 C382 206 344 210 318 228 C304 240 300 266 302 298 L314 406 L320 548 L540 548 L546 406 L558 298 C560 266 556 240 542 228 C516 210 478 206 452 196 L452 170 Z" fill="url(#cm-skin)" stroke="#efc3ae" stroke-width="2"/>
<ellipse cx="430" cy="112" rx="56" ry="64" fill="url(#cm-skin)" stroke="#efc3ae" stroke-width="2"/>
<circle cx="430" cy="98" r="58" fill="url(#cm-glow)"/>
<path d="M430 66c-24-6-46 8-46 30 0 18 14 32 30 34h32c16-2 30-16 30-34 0-22-22-36-46-30Z" fill="#d9ccff" stroke="#8b5cf6" stroke-width="1.8"/>
<path d="M430 68v58" stroke="#8b5cf6" stroke-width="1.4"/>
<path d="M395 92c6-8 14-8 18 0M397 108c6-7 14-7 20 0M405 78c5-5 12-5 16 0M465 92c-6-8-14-8-18 0M463 108c-6-7-14-7-20 0M455 78c-5-5-12-5-16 0" fill="none" stroke="#f1ebff" stroke-width="2.4" stroke-linecap="round"/>
<path d="M425 124c0 8 1 14 2 20h6c1-6 2-12 2-20Z" fill="#f7a541" stroke="#dc7a12" stroke-width="1.4"/>
<!-- 口：第一天的起点 -->
<circle cx="430" cy="158" r="20" fill="url(#cm-glow2)"/>
<path d="M415 155c8 9 22 9 30 0-4 10-26 10-30 0Z" fill="#f08a96" stroke="#d4606f" stroke-width="1.6"/>
<!-- 甲状腺 -->
<path d="M424 190c-6-8-16-6-16 4s8 12 16 6M436 190c6-8 16-6 16 4s-8 12-16 6M422 196h16" fill="#f9b4d4" stroke="#db2777" stroke-width="1.4"/>
<!-- 食管 -->
<path d="M431 170 L433 334 Q437 346 457 346" fill="none" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<g transform="translate(0 46)">
<path d="M418 186C395 182 362 196 352 230c-8 28-5 54 2 66 13 4 42 0 60-6 6-30 8-75 4-104Z" fill="#fcdbe2" stroke="#f0a3b4" stroke-width="1.8"/>
<path d="M442 186C465 182 498 196 508 230c8 28 5 54-2 66-13 4-42 0-60-6-6-30-8-75-4-104Z" fill="#fcdbe2" stroke="#f0a3b4" stroke-width="1.8"/>
<path d="M450 250c-8-10-24-6-23 8 1 14 18 26 26 33 10-8 25-20 23-34-2-14-18-16-26-7Z" fill="url(#cm-heart)" stroke="#c03548" stroke-width="1.6"/>
<path d="M410 372c20-8 60-6 90 0 6 4 2 10-6 10-24-2-54 2-80 2-10-2-10-10-4-12Z" fill="#f9cf6a" stroke="#d9a32c" stroke-width="1.6"/>
<path d="M330 304c20-8 80-6 116 2 6 6 0 16-16 24-25 12-60 22-85 20-11-10-17-28-15-46Z" fill="url(#cm-liver)" stroke="#8f352f" stroke-width="1.6"/>
<ellipse cx="404" cy="348" rx="8" ry="13" transform="rotate(-25 404 348)" fill="#86c873" stroke="#4f9a42" stroke-width="1.6"/>
<path d="M455 298c23-8 57 2 63 26 6 24-12 46-38 48-18 1-34-6-36-18-2-10 10-14 20-10 12 4 26-2 28-14 2-14-16-20-30-16Z" fill="url(#cm-sto)" stroke="#df7590" stroke-width="1.8"/>
<g fill="#fde68a" stroke="#f59e0b" stroke-width="1"><circle cx="492" cy="322" r="3"/><circle cx="500" cy="334" r="2.4"/><circle cx="488" cy="338" r="2"/></g>
<path d="M352 466 L351 394 Q351 388 358 388 L506 388 Q513 388 513 395 L514 466" fill="none" stroke="#e9a19a" stroke-width="20" stroke-linecap="round"/>
<path d="M342 410h20M342 432h20M342 454h20M380 380v16M410 380v16M440 380v16M470 380v16M504 404h20M504 428h20M504 452h20" stroke="#d4847c" stroke-width="1.6"/>
<ellipse cx="432" cy="436" rx="62" ry="32" fill="#fcd6d1"/>
<path d="M382 414c18-8 38 8 58-2s40 4 46 14c6 12-16 16-34 8s-38 8-54 0-26 8-14 16c12 10 36 0 56 4s38 0 48 8" fill="none" stroke="#f29a9a" stroke-width="9" stroke-linecap="round"/>
<g fill="#6cc48a"><rect x="400" y="424" width="9" height="4" rx="2" transform="rotate(20 404 426)"/><rect x="452" y="446" width="9" height="4" rx="2" transform="rotate(-30 456 448)"/><rect x="430" y="458" width="9" height="4" rx="2"/></g>
</g>
<!-- 药瓶：第二天收尾的补剂取舍 -->
<g transform="translate(572 456)">
<rect x="0" y="12" width="44" height="58" rx="9" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
<rect x="4" y="0" width="36" height="14" rx="4" fill="#a78bfa" stroke="#7c3aed" stroke-width="1.4"/>
<rect x="6" y="30" width="32" height="22" rx="3" fill="#ede9fe"/>
<path d="M12 41h20M22 35v12" stroke="#7c3aed" stroke-width="2.4" stroke-linecap="round"/>
<g transform="rotate(-25 66 54)"><rect x="52" y="48" width="30" height="12" rx="6" fill="#fde68a"/><path d="M58 48H67V60H58a6 6 0 0 1 0-12Z" fill="#f59e0b"/></g>
</g>
${lead('M300 160 C350 162 390 160 413 158', D1)}
${lead('M300 372 C320 372 336 372 352 370', D1)}
${lead('M262 492 C320 492 360 486 392 480', D1)}
${lead('M578 110 C530 110 500 104 478 100', D2)}
${lead('M578 250 C520 250 480 214 456 198', D2)}
${lead('M622 488 C624 488 626 488 625 488', D2)}
${callout('01', 36, 150, D1, 'D1-1 · 口鼻：消化的起点', '嗅觉、咀嚼、唾液唤醒下游消化')}
${callout('02', 36, 362, D1, 'D1-2 · 胃到大肠', '胃酸第一关，再到胆胰肝和菌群')}
${callout('03', 36, 482, D1, 'D1-3 · 小肠', 'SIBO、肠漏、寄生虫，修补肠漏')}
${callout('04', 600, 100, D2, 'D2-1 · 大脑 · 脑干', '迷走神经、疼痛的脑区', '血脑屏障与脑雾')}
${callout('05', 600, 240, D2, 'D2-2 · 全身问题', '贫血、脱发、免疫、甲状腺', '断食、代谢、节律、老年')}
${callout('06', 644, 478, D2, 'D2-3 · 补剂取舍', '各目标的首选')}
</svg>`;
}

/* ---------- 6 段卡片角图 ---------- */
export const plateAroma = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M36 26c-5-6 5-10 0-16M58 22c-5-6 5-10 0-16M80 26c-5-6 5-10 0-16" fill="none" stroke="#fb923c" stroke-width="2.6" stroke-linecap="round"/>
<ellipse cx="58" cy="60" rx="46" ry="20" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
<ellipse cx="58" cy="57" rx="34" ry="13" fill="#f1f5f9"/>
<circle cx="44" cy="53" r="8" fill="#86c873"/><circle cx="60" cy="50" r="7" fill="#f87171"/><circle cx="72" cy="56" r="7" fill="#fbbf24"/><circle cx="54" cy="60" r="6" fill="#fde68a"/>
</svg>`;

export const acidStomach = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<defs><linearGradient id="as-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient></defs>
<path d="M30 8L32 22" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<path d="M36 20c18-8 46-2 52 20 6 22-10 40-34 42-16 1-30-6-32-17-2-10 10-13 18-9 11 5 24-1 25-12 1-12-14-17-26-13Z" fill="url(#as-g)" stroke="#df7590" stroke-width="2"/>
<g fill="#fde68a" stroke="#f59e0b" stroke-width="1.2"><path d="M96 16c4 6 6 9 6 12a6 6 0 0 1-12 0c0-3 2-6 6-12Z"/><path d="M106 40c3 4 4 6 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8Z"/></g>
<text x="62" y="58" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">H⁺</text>
</svg>`;

export const gutBugs = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<ellipse cx="58" cy="46" rx="46" ry="32" fill="#fcd6d1"/>
<path d="M22 32c14-8 28 6 42-2s30 4 34 12c4 10-12 14-26 8s-28 8-40 0-20 8-10 14c10 8 28 0 42 4s28 0 36 6" fill="none" stroke="#f29a9a" stroke-width="7" stroke-linecap="round"/>
<g fill="#6cc48a" stroke="#3f9a5c" stroke-width="1"><rect x="40" y="24" width="12" height="5" rx="2.5" transform="rotate(20 46 26)"/><rect x="74" y="50" width="12" height="5" rx="2.5" transform="rotate(-30 80 52)"/><rect x="50" y="62" width="12" height="5" rx="2.5"/><circle cx="96" cy="26" r="4"/><circle cx="20" cy="56" r="3.4"/></g>
</svg>`;

/* ---------- 各目标首选 ---------- */
export const grapes = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M56 6c0 6-2 10-6 14" fill="none" stroke="#7c5a2e" stroke-width="2.6" stroke-linecap="round"/>
<path d="M58 12c10-8 24-6 28 2-10 6-22 6-28-2Z" fill="#84cc16" stroke="#4d7c0f" stroke-width="1.4"/>
<g fill="#8b5cf6" stroke="#6d28d9" stroke-width="1.4">
<circle cx="38" cy="28" r="8"/><circle cx="54" cy="28" r="8"/><circle cx="70" cy="30" r="8"/>
<circle cx="46" cy="42" r="8"/><circle cx="62" cy="43" r="8"/><circle cx="54" cy="56" r="8"/><circle cx="40" cy="55" r="7"/><circle cx="62" cy="68" r="7"/></g>
<g fill="#fff" opacity=".55"><circle cx="35" cy="25" r="2"/><circle cx="51" cy="25" r="2"/><circle cx="43" cy="39" r="2"/><circle cx="59" cy="40" r="2"/><circle cx="51" cy="53" r="2"/></g>
</svg>`;

export const turmeric = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M14 44c4-10 18-12 26-6 6-8 20-8 26 0 8-4 18 0 18 8-2 8-12 10-18 6-6 6-18 6-24 0-8 6-24 6-28-8Z" fill="#f6b04b" stroke="#c97c12" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M30 40l4 8M50 36l2 9M68 42l3 6" stroke="#c97c12" stroke-width="1.4" stroke-linecap="round"/>
<path d="M66 70c4-10 30-10 34 0Z" fill="#fbbf24" stroke="#d99a00" stroke-width="1.4"/>
<circle cx="74" cy="64" r="1.6" fill="#f59e0b"/><circle cx="86" cy="62" r="1.6" fill="#f59e0b"/><circle cx="92" cy="66" r="1.4" fill="#f59e0b"/>
</svg>`;

export const magnesium = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<path d="M14 62c8-24 30-34 52-30-6 22-28 34-52 30Z" fill="#86c873" stroke="#4f9a42" stroke-width="1.6"/>
<path d="M18 60c14-10 28-18 44-24" fill="none" stroke="#4f9a42" stroke-width="1.4"/>
<g fill="#d9f0c4" stroke="#7fae55" stroke-width="1.2"><ellipse cx="30" cy="74" rx="7" ry="4" transform="rotate(-20 30 74)"/><ellipse cx="46" cy="76" rx="7" ry="4" transform="rotate(15 46 76)"/><ellipse cx="60" cy="72" rx="7" ry="4" transform="rotate(-10 60 72)"/></g>
<rect x="66" y="8" width="36" height="36" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
<text x="84" y="33" text-anchor="middle" font-size="17" font-weight="800" fill="#047857">Mg</text>
</svg>`;

/* ---------- 原则步骤 ---------- */
export const scales = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M60 12v62M38 80h44" stroke="#8a6a2f" stroke-width="3.4" stroke-linecap="round"/>
<path d="M22 24h76" stroke="#8a6a2f" stroke-width="3" stroke-linecap="round"/>
<circle cx="60" cy="12" r="5" fill="#f6b04b" stroke="#c97c12" stroke-width="1.6"/>
<path d="M22 24l-12 26h24ZM98 24l-12 26h24Z" fill="none" stroke="#b9a27a" stroke-width="1.6"/>
<path d="M8 50c2 10 26 10 28 0Z" fill="#fde68a" stroke="#d99a00" stroke-width="1.6"/>
<path d="M84 50c2 10 26 10 28 0Z" fill="#fde68a" stroke="#d99a00" stroke-width="1.6"/>
<g transform="rotate(-20 22 44)"><rect x="12" y="40" width="20" height="8" rx="4" fill="#60a5fa"/></g>
<circle cx="92" cy="44" r="4" fill="#f87171"/><circle cx="102" cy="45" r="4" fill="#86c873"/><circle cx="97" cy="38" r="4" fill="#a78bfa"/>
</svg>`;

export const calendar = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<rect x="22" y="14" width="76" height="66" rx="10" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
<path d="M22 32h76" stroke="#94a3b8" stroke-width="2"/><rect x="23" y="15" width="74" height="16" rx="9" fill="#fde68a"/>
<path d="M40 8v14M80 8v14" stroke="#64748b" stroke-width="3.4" stroke-linecap="round"/>
<g fill="#e2e8f0"><rect x="32" y="40" width="10" height="9" rx="2"/><rect x="48" y="40" width="10" height="9" rx="2"/><rect x="64" y="40" width="10" height="9" rx="2"/><rect x="80" y="40" width="10" height="9" rx="2"/><rect x="32" y="56" width="10" height="9" rx="2"/><rect x="48" y="56" width="10" height="9" rx="2"/></g>
<path d="M64 62l6 6 12-14" fill="none" stroke="#22c55e" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
