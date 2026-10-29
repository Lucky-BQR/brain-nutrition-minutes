// 图解卡片用的矢量插画（SVG）。示意图，非解剖比例。
const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;

export const bulb = () => `<svg viewBox="0 0 64 70" width="64" height="70" aria-hidden="true">
<defs><radialGradient id="bg-glow"><stop offset="0" stop-color="#fde68a" stop-opacity=".9"/><stop offset="1" stop-color="#fde68a" stop-opacity="0"/></radialGradient>
<linearGradient id="bg-bulb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1a8"/><stop offset="1" stop-color="#fbbf24"/></linearGradient></defs>
<circle cx="32" cy="27" r="30" fill="url(#bg-glow)"/>
<path d="M32 6C20 6 12 15 12 26c0 8 4 13 8 17 2 2 3 4 3 7h18c0-3 1-5 3-7 4-4 8-9 8-17C52 15 44 6 32 6Z" fill="url(#bg-bulb)" stroke="#e59e0b" stroke-width="2"/>
<path d="M27 43v-8M37 43v-8M27 35c0-4 3-4 3 0s3 4 3 0 4-4 4 0" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
<path d="M19 22c1-6 5-10 11-11" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".8"/>
<rect x="23" y="51" width="18" height="5" rx="2" fill="#9ca3af"/><rect x="24" y="57" width="16" height="5" rx="2" fill="#b6bcc6"/><rect x="27" y="63" width="10" height="4" rx="2" fill="#9ca3af"/>
</svg>`;

/* ---------- 一张图看懂：迷走神经管哪里 ---------- */
export function vagusMap() {
  const callout = (n, x, y, title, desc, anchor = 'start') => {
    const tx = anchor === 'start' ? x + 30 : x - 30;
    return `<g ${F}><circle cx="${x}" cy="${y}" r="19" fill="#f6747a" stroke="#fff" stroke-width="3" filter="url(#vm-sh)"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${tx}" y="${y + 1}" text-anchor="${anchor}" font-size="20" font-weight="800" fill="#1f2937">${title}</text>
<text x="${tx}" y="${y + 25}" text-anchor="${anchor}" font-size="14.5" fill="#4b5563">${desc}</text></g>`;
  };
  const lead = (d) => `<path d="${d}" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="4 4"/>`;
  return `<svg viewBox="0 0 860 490" width="100%" aria-label="迷走神经从脑干出发，管咽喉、心肺和整个消化道" ${F}>
<defs>
<filter id="vm-sh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#f6747a" flood-opacity=".35"/></filter>
<filter id="vm-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
<linearGradient id="vm-skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1ea"/><stop offset="1" stop-color="#fde3d6"/></linearGradient>
<linearGradient id="vm-liver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d4675d"/><stop offset="1" stop-color="#a8403a"/></linearGradient>
<linearGradient id="vm-sto" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient>
<linearGradient id="vm-heart" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f87171"/><stop offset="1" stop-color="#d63a4f"/></linearGradient>
<radialGradient id="vm-bs"><stop offset="0" stop-color="#fde047" stop-opacity=".85"/><stop offset="1" stop-color="#fde047" stop-opacity="0"/></radialGradient>
</defs>
<!-- 身体轮廓 -->
<path d="M410 120 L410 150 C384 160 344 164 318 182 C304 194 300 220 302 252 L314 360 L320 476 L540 476 L546 360 L558 252 C560 220 556 194 542 182 C516 164 476 160 450 150 L450 120 Z" fill="url(#vm-skin)" stroke="#efc3ae" stroke-width="2"/>
<ellipse cx="430" cy="70" rx="52" ry="60" fill="url(#vm-skin)" stroke="#efc3ae" stroke-width="2"/>
<!-- 大脑 -->
<path d="M430 26c-24-6-46 8-46 30 0 18 14 32 30 34h32c16-2 30-16 30-34 0-22-22-36-46-30Z" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M430 28v58" stroke="#e98ca1" stroke-width="1.4"/>
<path d="M395 52c6-8 14-8 18 0M397 68c6-7 14-7 20 0M405 38c5-5 12-5 16 0M465 52c-6-8-14-8-18 0M463 68c-6-7-14-7-20 0M455 38c-5-5-12-5-16 0" fill="none" stroke="#fde4ea" stroke-width="2.4" stroke-linecap="round"/>
<!-- 脑干 -->
<circle cx="430" cy="104" r="22" fill="url(#vm-bs)"/>
<path d="M423 84c0 14 1 28 3 40h8c2-12 3-26 3-40Z" fill="#f7a541" stroke="#dc7a12" stroke-width="1.6"/>
<!-- 食管 -->
<path d="M432 150 L434 288 Q438 300 458 300" fill="none" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<!-- 肺 -->
<path d="M418 186C395 182 362 196 352 230c-8 28-5 54 2 66 13 4 42 0 60-6 6-30 8-75 4-104Z" fill="#fcdbe2" stroke="#f0a3b4" stroke-width="1.8"/>
<path d="M442 186C465 182 498 196 508 230c8 28 5 54-2 66-13 4-42 0-60-6-6-30-8-75-4-104Z" fill="#fcdbe2" stroke="#f0a3b4" stroke-width="1.8"/>
<path d="M398 214c-10 10-18 26-20 44M462 214c10 10 18 26 20 44" fill="none" stroke="#f5bccb" stroke-width="2" stroke-linecap="round"/>
<!-- 心 -->
<path d="M450 250c-8-10-24-6-23 8 1 14 18 26 26 33 10-8 25-20 23-34-2-14-18-16-26-7Z" fill="url(#vm-heart)" stroke="#c03548" stroke-width="1.6"/>
<path d="M436 256c2-4 6-6 10-5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
<!-- 胰 -->
<path d="M410 372c20-8 60-6 90 0 6 4 2 10-6 10-24-2-54 2-80 2-10-2-10-10-4-12Z" fill="#f9cf6a" stroke="#d9a32c" stroke-width="1.6"/>
<!-- 肝 + 胆 -->
<path d="M330 304c20-8 80-6 116 2 6 6 0 16-16 24-25 12-60 22-85 20-11-10-17-28-15-46Z" fill="url(#vm-liver)" stroke="#8f352f" stroke-width="1.6"/>
<path d="M344 314c18-4 40-4 60-2" fill="none" stroke="#e7867c" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>
<ellipse cx="404" cy="348" rx="8" ry="13" transform="rotate(-25 404 348)" fill="#86c873" stroke="#4f9a42" stroke-width="1.6"/>
<!-- 胃 -->
<path d="M455 298c23-8 57 2 63 26 6 24-12 46-38 48-18 1-34-6-36-18-2-10 10-14 20-10 12 4 26-2 28-14 2-14-16-20-30-16Z" fill="url(#vm-sto)" stroke="#df7590" stroke-width="1.8"/>
<path d="M486 312c10 4 16 12 16 22" fill="none" stroke="#fde4ea" stroke-width="3" stroke-linecap="round"/>
<!-- 大肠：上段归迷走神经，下段不归 -->
<path d="M352 466 L351 394 Q351 388 358 388 L462 388" fill="none" stroke="#e9a19a" stroke-width="20" stroke-linecap="round"/>
<path d="M462 388 L506 388 Q513 388 513 395 L514 466" fill="none" stroke="#d9d6d3" stroke-width="20" stroke-linecap="round"/>
<path d="M342 410h20M342 432h20M342 454h20M380 380v16M410 380v16M440 380v16" stroke="#d4847c" stroke-width="1.6"/>
<path d="M484 380v16M504 404h20M504 428h20M504 452h20" stroke="#bdb8b4" stroke-width="1.6"/>
<!-- 小肠 -->
<ellipse cx="432" cy="436" rx="62" ry="32" fill="#fcd6d1"/>
<path d="M382 414c18-8 38 8 58-2s40 4 46 14c6 12-16 16-34 8s-38 8-54 0-26 8-14 16c12 10 36 0 56 4s38 0 48 8" fill="none" stroke="#f29a9a" stroke-width="9" stroke-linecap="round"/>
<!-- 迷走神经 -->
<g stroke-linecap="round" fill="none">
<path id="vg-l" d="M426 124C424 140 418 150 418 166c0 34-6 74-5 134 0 40-4 70-6 102" stroke="#fde68a" stroke-width="9" opacity=".75" filter="url(#vm-glow)"/>
<path d="M434 124C436 140 442 150 442 166c0 30 6 60 6 92 0 26 14 44 26 60" stroke="#fde68a" stroke-width="9" opacity=".75" filter="url(#vm-glow)"/>
<path d="M426 124C424 140 418 150 418 166c0 34-6 74-5 134 0 40-4 70-6 102" stroke="#f2a516" stroke-width="3.4"/>
<path d="M434 124C436 140 442 150 442 166c0 30 6 60 6 92 0 26 14 44 26 60" stroke="#f2a516" stroke-width="3.4"/>
<path d="M419 148l-14 4M415 222l-24 10M413 300l-14 20M410 352l-24 40M448 258l2 6M474 318l-2 50M470 340l-14 46" stroke="#f2a516" stroke-width="2.4"/>
</g>
<g fill="#f2a516"><circle cx="405" cy="152" r="4"/><circle cx="391" cy="232" r="4"/><circle cx="399" cy="320" r="4"/><circle cx="386" cy="392" r="4"/><circle cx="407" cy="404" r="4"/><circle cx="452" cy="266" r="4"/><circle cx="472" cy="368" r="4"/><circle cx="456" cy="386" r="4"/><circle cx="474" cy="318" r="4"/></g>
<!-- 80/20 标签 -->
<g transform="translate(594 74)">
<rect width="258" height="86" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="18" y="24" font-size="13.5" font-weight="700" fill="#b45309">迷走神经是混合神经</text>
<path d="M24 40v24M16 48l8-8 8 8" fill="none" stroke="#3b82f6" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
<text x="40" y="57" font-size="15" fill="#1f2937"><tspan font-weight="800" fill="#2563eb">80%</tspan> 感觉上传</text>
<path d="M160 40v24M152 56l8 8 8-8" fill="none" stroke="#f08a24" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
<text x="176" y="57" font-size="15" fill="#1f2937"><tspan font-weight="800" fill="#ea7a12">20%</tspan> 下行</text>
<text x="40" y="77" font-size="12" fill="#6b7280">胃肠 → 脑干</text><text x="176" y="77" font-size="12" fill="#6b7280">脑干控制胃肠</text>
</g>
${lead('M300 76 C350 80 380 100 410 104')}
${lead('M262 172 C320 172 360 156 403 152')}
${lead('M600 238 C540 238 500 250 474 262')}
${lead('M282 334 C312 334 330 330 344 326')}
${lead('M600 420 C560 420 520 430 494 432')}
${callout('01', 36, 70, '脑干 · 迷走神经核', '功能中枢在这里：胃肠不好 = 脑干不好')}
${callout('02', 36, 166, '咽喉', '看小舌、测咽反射，直接查它')}
${callout('03', 624, 232, '心 · 肺', '脑干自身坏，常以心慌就诊')}
${callout('04', 36, 328, '胃 · 肝 · 胆 · 胰', '管全部消化：胃酸 → 胆汁 → 胰酶')}
${callout('05', 624, 414, '小肠 → 大肠上段', '管吸收，唯独不管排便')}
<text x="560" y="476" font-size="12.5" fill="#8c8580">灰色：大肠下段，不归它管</text>
</svg>`;
}

/* ---------- 卡片角图 ---------- */
export const brainGut = () => `<svg viewBox="0 0 130 84" aria-hidden="true">
<path d="M10 34C6 20 20 8 33 12c8-8 26-5 27 8 8 4 7 18-1 22-4 10-21 11-27 4-11 4-24-2-22-12Z" fill="#fbc4cf" stroke="#e98ca1" stroke-width="1.8"/>
<path d="M22 26c4-4 9-4 12 0M30 38c4-4 10-4 14 0M42 22c3-3 8-3 10 1" fill="none" stroke="#fde4ea" stroke-width="2.4" stroke-linecap="round"/>
<ellipse cx="100" cy="56" rx="24" ry="20" fill="#fcd6d1"/>
<path d="M82 48c8-6 16 4 24-2s14 4 12 10-12 6-18 2-14 4-10 10 14 2 22 6" fill="none" stroke="#f29a9a" stroke-width="5.5" stroke-linecap="round"/>
<path d="M58 30c12-8 26-6 34 4" fill="none" stroke="#8b7cf6" stroke-width="2.6" stroke-linecap="round"/><path d="M86 26l7 8-10 2" fill="none" stroke="#8b7cf6" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M88 74c-12 6-26 4-34-6" fill="none" stroke="#8b7cf6" stroke-width="2.6" stroke-linecap="round"/><path d="M57 76l-4-8 10-2" fill="none" stroke="#8b7cf6" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const sickStomach = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<defs><linearGradient id="ss-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbbcc8"/><stop offset="1" stop-color="#ef8aa1"/></linearGradient></defs>
<path d="M30 10L32 24" stroke="#f6c2cc" stroke-width="7" stroke-linecap="round"/>
<path d="M36 22c18-8 46-2 52 20 6 22-10 40-34 42-16 1-30-6-32-17-2-10 10-13 18-9 11 5 24-1 25-12 1-12-14-17-26-13Z" fill="url(#ss-g)" stroke="#df7590" stroke-width="2"/>
<path d="M58 36c7 3 11 9 11 16" fill="none" stroke="#fde4ea" stroke-width="3" stroke-linecap="round"/>
<path d="M96 14l6-7M100 26l10-3M94 4l2-2" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
<path d="M98 44c4-3 8 3 12 0M98 54c4-3 8 3 12 0" fill="none" stroke="#a78bfa" stroke-width="2.4" stroke-linecap="round"/>
<path d="M12 50c-4 0-6 4-4 8M8 40c-6 0-8 6-6 10" fill="none" stroke="#a78bfa" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;

// 张嘴发“啊”：shift 为小舌偏移量
export const mouth = (shift = 0, swab = false) => `<svg viewBox="0 0 120 92" aria-hidden="true">
<path d="M8 42C18 10 102 10 112 42 102 84 18 84 8 42Z" fill="#f08a96" stroke="#d4606f" stroke-width="2"/>
<path d="M18 42C28 18 92 18 102 42 92 72 28 72 18 42Z" fill="#8e2f3d"/>
<path d="M27 29c18-9 48-9 66 0l-2 6c-17-7-45-7-62 0Z" fill="#fff"/>
<path d="M36 30c10 14 8 26 2 34M84 30c-10 14-8 26-2 34" fill="none" stroke="#c94f61" stroke-width="3" stroke-linecap="round"/>
<path d="M28 60c12-11 52-11 64 0-12 11-52 11-64 0Z" fill="#f27d8e"/><path d="M60 54v10" stroke="#e0607a" stroke-width="1.6"/>
<g transform="rotate(${shift * 3} 60 32) translate(${shift} 0)"><path d="M57 31c-2 9-1 15 3 19 4-4 5-10 3-19Z" fill="#f7a1ad" stroke="#e57a8c" stroke-width="1.2"/></g>
${swab ? `<path d="M118 88L74 50" stroke="#e2e8f0" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="72" cy="48" rx="6" ry="4" transform="rotate(40 72 48)" fill="#fff" stroke="#cbd5e1" stroke-width="1.4"/>` : ''}
</svg>`;

/* ---------- 激活步骤 ---------- */
export const gargle = () => `<svg viewBox="0 0 120 84" aria-hidden="true">
<path d="M38 18h44l-5 62H43Z" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2"/>
<path d="M40 38h40l-3 42H43Z" fill="#7cc4f2" opacity=".85"/>
<circle cx="52" cy="58" r="3" fill="#e0f2fe"/><circle cx="64" cy="66" r="2.4" fill="#e0f2fe"/><circle cx="68" cy="50" r="2" fill="#e0f2fe"/>
<path d="M46 32h28" stroke="#fff" stroke-width="2" opacity=".8"/>
<path d="M90 16c5-4 10 4 15 0M92 28c5-4 10 4 15 0M14 22c5-4 10 4 15 0" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;

export const breathe = () => `<svg viewBox="0 0 160 88" aria-hidden="true" ${F}>
<rect x="4" y="70" width="152" height="10" rx="5" fill="#c7d2fe"/>
<circle cx="22" cy="57" r="11" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<path d="M12 52a11 11 0 0 1 14-6" fill="none" stroke="#6b4f3a" stroke-width="4" stroke-linecap="round"/>
<rect x="32" y="52" width="58" height="17" rx="8.5" fill="#a5b4fc"/>
<path d="M88 62l21-24 21 28" fill="none" stroke="#818cf8" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>
<ellipse cx="135" cy="67" rx="7" ry="4" fill="#6366f1"/>
<path d="M120 6L80 42" stroke="#fde3d6" stroke-width="12" stroke-linecap="round"/>
<path d="M120 6L80 42" stroke="#efc3ae" stroke-width="1" stroke-linecap="round" opacity=".6"/>
<ellipse cx="68" cy="47" rx="15" ry="7" fill="#fde3d6" stroke="#e7b49c" stroke-width="1.6"/>
<path d="M58 44h-6M60 49h-7" stroke="#e7b49c" stroke-width="1.4" stroke-linecap="round"/>
<text x="6" y="16" font-size="11.5" font-weight="800" fill="#ea7a12">吸 3 秒</text><text x="6" y="31" font-size="11.5" font-weight="800" fill="#2563eb">呼 6 秒</text>
</svg>`;

export const oximeter = () => `<svg viewBox="0 0 130 84" aria-hidden="true" ${F}>
<path d="M4 44h70c8 0 12 4 12 10s-4 10-12 10H4Z" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<rect x="34" y="22" width="76" height="52" rx="14" fill="#fff" stroke="#94a3b8" stroke-width="2"/>
<rect x="44" y="30" width="56" height="30" rx="5" fill="#0f172a"/>
<text x="50" y="44" font-size="9" fill="#94a3b8">SpO₂</text><text x="50" y="56" font-size="12" font-weight="800" fill="#4ade80">98↑</text>
<text x="76" y="44" font-size="9" fill="#94a3b8">心率</text><text x="76" y="56" font-size="12" font-weight="800" fill="#fb923c">58↓</text>
<circle cx="72" cy="67" r="3" fill="#cbd5e1"/>
</svg>`;

export const noSelfPress = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<circle cx="56" cy="15" r="11" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.6"/>
<path d="M51 25h10v6h-10Z" fill="#fde3d6"/>
<path d="M34 34q22-8 44 0l6 50H28Z" fill="#a5b4fc" stroke="#818cf8" stroke-width="1.6"/>
<path d="M36 36c-10 14-8 28 12 30M76 36c10 14 8 28-12 30" fill="none" stroke="#fde3d6" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="50" cy="65" rx="9" ry="5.5" fill="#fde3d6" stroke="#e7b49c" stroke-width="1.4"/><ellipse cx="62" cy="65" rx="9" ry="5.5" fill="#fde3d6" stroke="#e7b49c" stroke-width="1.4"/>
<path d="M44 26l-8-5M68 26l8-5M42 31l-9-1M70 31l9-1" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round"/>
<circle cx="100" cy="22" r="14" fill="#fff" stroke="#ef4444" stroke-width="3.4"/><path d="M93 15l14 14M107 15L93 29" stroke="#ef4444" stroke-width="3.4" stroke-linecap="round"/>
</svg>`;

/* ---------- 疼痛地图 ---------- */
export const brainSide = () => `<svg viewBox="0 0 330 260" aria-label="大脑皮层、基底核、小脑示意" ${F}>
<path d="M40 150C20 100 50 40 120 28c70-12 150 12 175 72 15 40-5 70-35 75-30 5-50-5-70-3-30 4-60 18-90 13-30-3-50-10-60-35Z" fill="#bfe7c8" stroke="#5fb97a" stroke-width="2"/>
<path d="M70 110c20-30 50-20 60-40M140 60c20 20 50 0 70 20M222 72c18 18 38 8 48 38M90 150c20-20 50-5 70-20M180 140c20-20 50 0 70-10M118 42c10 18 30 8 40-2M60 140c-8-16 0-30 10-34" fill="none" stroke="#93d4a5" stroke-width="3.2" stroke-linecap="round"/>
<ellipse cx="160" cy="116" rx="36" ry="22" fill="#fcd34d" fill-opacity=".92" stroke="#d99e00" stroke-width="2" stroke-dasharray="5 3"/>
<path d="M197 166c4 30 9 56 12 84h18c-1-28-2-54-2-84Z" fill="#f7c08a" stroke="#e39243" stroke-width="1.8"/>
<path d="M210 184c10-14 30-22 52-22 30 0 48 14 48 30s-20 30-48 30c-26 0-46-12-52-38Z" fill="#b3cbfb" stroke="#5b8def" stroke-width="2"/>
<path d="M222 182c12-8 30-10 50-6M220 196c14-6 36-8 60-2M226 210c14-4 32-4 52 2" fill="none" stroke="#7fa6f4" stroke-width="2" stroke-linecap="round"/>
<g font-weight="800" text-anchor="middle"><text x="96" y="78" font-size="16" fill="#2f7d4a">大脑皮层</text><text x="160" y="122" font-size="15" fill="#8a5a00">基底核</text><text x="266" y="238" font-size="15" fill="#2f58d4">小脑</text><text x="182" y="246" font-size="12.5" fill="#b4621d">脑干</text></g>
</svg>`;

export const bodyZones = () => `<svg viewBox="0 0 180 300" aria-label="疼痛部位示意" ${F}>
<circle cx="90" cy="30" r="21" fill="#fde3d6" stroke="#efc3ae" stroke-width="1.8"/>
<path d="M62 66l-20 52-6 42M118 66l20 52 6 42" fill="none" stroke="#86d19a" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M76 150l-6 66-2 70M104 150l6 66 2 70" fill="none" stroke="#a9c4fb" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="58" y="56" width="64" height="100" rx="22" fill="#a9c4fb" stroke="#5b8def" stroke-width="1.6"/>
<path d="M90 64v84" stroke="#7fa6f4" stroke-width="2" stroke-dasharray="4 4"/>
<circle cx="70" cy="216" r="12" fill="#fcd34d" stroke="#d99e00" stroke-width="1.8"/><circle cx="110" cy="216" r="12" fill="#fcd34d" stroke="#d99e00" stroke-width="1.8"/>
<circle cx="62" cy="68" r="9" fill="#86d19a" stroke="#4fae6a" stroke-width="1.6"/><circle cx="118" cy="68" r="9" fill="#86d19a" stroke="#4fae6a" stroke-width="1.6"/>
</svg>`;

const capsule = (x, y, a, b, rot = -30, w = 40, h = 16) =>
  `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${b}"/><path d="M${x + h / 2} ${y}H${x + w / 2}V${y + h}H${x + h / 2}a${h / 2} ${h / 2} 0 0 1 0-${h}Z" fill="${a}"/><rect x="${x + 5}" y="${y + 3}" width="${w / 2 - 8}" height="3" rx="1.5" fill="#fff" opacity=".6"/></g>`;
export const pills = (a = '#60a5fa', b = '#dbeafe') => `<svg viewBox="0 0 70 50" aria-hidden="true">${capsule(6, 20, a, b, -28)}${capsule(28, 22, '#f59e0b', '#fef3c7', 20, 34, 14)}</svg>`;

/* ---------- 营养素 ---------- */
export const vitD = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<g stroke="#f59e0b" stroke-width="3" stroke-linecap="round"><path d="M38 6v8M38 58v8M10 34h8M58 34h8M18 14l6 6M52 48l6 6M58 14l-6 6M18 54l6-6"/></g>
<circle cx="38" cy="34" r="15" fill="#fcd34d" stroke="#f59e0b" stroke-width="2"/>
${capsule(54, 50, '#fb923c', '#fff7ed', -24, 46, 20)}
</svg>`;

export const ginseng = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M48 6c-4 6-12 6-16 2M52 6c4 6 12 6 16 2" fill="none" stroke="#65a30d" stroke-width="2.6" stroke-linecap="round"/>
<ellipse cx="36" cy="8" rx="7" ry="3.4" fill="#84cc16"/><ellipse cx="64" cy="8" rx="7" ry="3.4" fill="#84cc16"/>
<path d="M44 12c-4 16-4 28 0 36-6 8-12 16-16 26 6-2 14-10 20-18 2 8 4 14 6 20 2-8 2-16 0-22 6 6 14 14 18 20-4-10-10-18-16-24 4-8 4-22 0-38Z" fill="#ecc994" stroke="#b98a4e" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M46 24h8M45 34h10M47 42h6" stroke="#c99a5c" stroke-width="1.4"/>
<circle cx="88" cy="56" r="11" fill="#f6e3bf" stroke="#c99a5c" stroke-width="1.6"/><circle cx="88" cy="56" r="5" fill="none" stroke="#dcb67f" stroke-width="1.4"/>
<circle cx="80" cy="72" r="8" fill="#f6e3bf" stroke="#c99a5c" stroke-width="1.4"/>
</svg>`;

export const fishOil = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M10 38c10-16 34-22 54-12l14-12v40l-14-12C44 52 20 50 10 38Z" fill="#8ccff5" stroke="#3b9ad9" stroke-width="2" stroke-linejoin="round"/>
<circle cx="24" cy="34" r="3" fill="#0f3d5e"/><path d="M38 28c4 6 4 14 0 20" fill="none" stroke="#3b9ad9" stroke-width="1.6"/>
<ellipse cx="78" cy="64" rx="18" ry="11" fill="#fbbf24" stroke="#e29a00" stroke-width="1.8"/><ellipse cx="72" cy="60" rx="6" ry="3" fill="#fff" opacity=".6"/>
</svg>`;

export const mito = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<ellipse cx="50" cy="44" rx="40" ry="22" fill="#fecaca" stroke="#ef4444" stroke-width="2"/>
<path d="M20 44c6-14 10 14 16 0s10 14 16 0 10 14 16 0 10 14 14 0" fill="none" stroke="#f87171" stroke-width="2.6" stroke-linecap="round"/>
<path d="M92 14l-10 18h10l-8 18" fill="none" stroke="#f59e0b" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const rbc = () => `<svg viewBox="0 0 110 84" aria-hidden="true" ${F}>
<circle cx="36" cy="42" r="22" fill="#ef4444" stroke="#c81e1e" stroke-width="1.8"/><circle cx="36" cy="42" r="11" fill="#f87171"/>
<circle cx="72" cy="30" r="16" fill="#ef4444" stroke="#c81e1e" stroke-width="1.6"/><circle cx="72" cy="30" r="8" fill="#f87171"/>
<circle cx="74" cy="64" r="13" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.6"/><text x="74" y="69" text-anchor="middle" font-size="12" font-weight="800" fill="#4b5563">Fe</text>
</svg>`;
