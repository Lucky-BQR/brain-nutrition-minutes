// D2-2 图解卡片用的矢量插画（SVG）。示意图，非解剖比例。id 统一加 d22- 前缀，避免和其他插画冲突。
const F = `font-family="Noto Sans SC, Microsoft YaHei, sans-serif"`;
const SKIN = '#fde3d6';
const SKIN_L = '#efc3ae';

/* ---------- 一张图看懂：从头到手的自查信号 ---------- */
export function selfCheckMap() {
  const callout = (n, x, y, title, lines) => {
    const tx = x + 30;
    return `<g ${F}><circle cx="${x}" cy="${y}" r="19" fill="#f6747a" stroke="#fff" stroke-width="3" filter="url(#d22-sh)"/>
<text x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="800" fill="#fff">${n}</text>
<text x="${tx}" y="${y + 1}" font-size="20" font-weight="800" fill="#1f2937">${title}</text>
${lines.map((t, i) => `<text x="${tx}" y="${y + 25 + i * 20}" font-size="14.5" fill="#4b5563">${t}</text>`).join('')}</g>`;
  };
  const lead = (d) => `<path d="${d}" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="4 4"/>`;
  const tip = (x, y) => `<circle cx="${x}" cy="${y}" r="3.6" fill="#f6747a"/>`;
  return `<svg viewBox="0 0 860 500" width="100%" aria-label="不验血也能先看的信号：头发、眉毛、睑结膜与嘴唇、甲状腺、指甲" ${F}>
<defs>
<filter id="d22-sh" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#f6747a" flood-opacity=".35"/></filter>
<linearGradient id="d22-skin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1ea"/><stop offset="1" stop-color="#fde3d6"/></linearGradient>
<linearGradient id="d22-hair" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6e5241"/><stop offset="1" stop-color="#4a3628"/></linearGradient>
<linearGradient id="d22-shirt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6e9ff"/><stop offset="1" stop-color="#c7d2fe"/></linearGradient>
<clipPath id="d22-inset"><circle cx="724" cy="424" r="54"/></clipPath>
</defs>
<!-- 身体 -->
<path d="M296 500 L300 432 C302 390 336 362 396 346 L464 346 C524 362 558 390 560 432 L564 500 Z" fill="url(#d22-shirt)" stroke="#a5b4fc" stroke-width="2"/>
<path d="M400 240 L400 344 L430 380 L460 344 L460 240 Z" fill="url(#d22-skin)" stroke="${SKIN_L}" stroke-width="2" stroke-linejoin="round"/>
<path d="M396 346 L430 382 L464 346" fill="none" stroke="#a5b4fc" stroke-width="2.4" stroke-linejoin="round"/>
<!-- 喉结 + 甲状腺（右叶稍大：示意“不对称”） -->
<path d="M423 286 Q430 276 437 286" fill="none" stroke="#e2b29c" stroke-width="2.2" stroke-linecap="round"/>
<ellipse cx="447" cy="312" rx="17" ry="22" fill="#fda4b4" opacity=".35"/>
<g stroke="#e07a93" stroke-width="1.6">
<ellipse cx="415" cy="310" rx="9.5" ry="15" transform="rotate(-16 415 310)" fill="#f7b2c1"/>
<ellipse cx="446" cy="311" rx="12" ry="18" transform="rotate(16 446 311)" fill="#f59bb0"/>
<rect x="416" y="308" width="28" height="9" rx="4.5" fill="#f7b2c1"/>
</g>
<!-- 耳朵 + 头 -->
<ellipse cx="346" cy="178" rx="11" ry="19" fill="url(#d22-skin)" stroke="${SKIN_L}" stroke-width="2"/>
<ellipse cx="514" cy="178" rx="11" ry="19" fill="url(#d22-skin)" stroke="${SKIN_L}" stroke-width="2"/>
<ellipse cx="430" cy="166" rx="86" ry="102" fill="url(#d22-skin)" stroke="${SKIN_L}" stroke-width="2"/>
<!-- 头发 -->
<path d="M347 184 C336 96 378 52 430 50 C482 52 524 96 513 184 C508 146 498 124 480 112 C456 124 404 124 380 112 C362 124 352 146 347 184 Z" fill="url(#d22-hair)"/>
<path d="M392 68 C410 60 434 58 456 64M372 92 C380 80 390 74 402 70" fill="none" stroke="#8d6e5a" stroke-width="3" stroke-linecap="round" opacity=".7"/>
<!-- 眉毛：外侧 1/3 变稀、变短 -->
<path d="M394 138 Q404 133 415 136M445 136 Q456 133 466 138" fill="none" stroke="#4a3628" stroke-width="5" stroke-linecap="round"/>
<path d="M372 145 Q380 139 390 137M470 137 Q480 139 488 145" fill="none" stroke="#a88d7c" stroke-width="3.2" stroke-linecap="round" stroke-dasharray="2 4"/>
<ellipse cx="381" cy="141" rx="15" ry="9" fill="none" stroke="#f6747a" stroke-width="1.6" stroke-dasharray="3 3"/>
<!-- 眼睛 -->
<path d="M378 166 Q393 156 408 166 Q393 175 378 166Z M452 166 Q467 156 482 166 Q467 175 452 166Z" fill="#fff" stroke="#c9a08a" stroke-width="1.4"/>
<circle cx="393" cy="166" r="5.5" fill="#4b3a2f"/><circle cx="467" cy="166" r="5.5" fill="#4b3a2f"/>
<circle cx="395" cy="164" r="1.6" fill="#fff"/><circle cx="469" cy="164" r="1.6" fill="#fff"/>
<!-- 右眼下睑翻开：看血管之间的底色 -->
<path d="M451 170 Q467 194 483 170 Q467 180 451 170Z" fill="#fbe9ec" stroke="#e9a9b6" stroke-width="1.4"/>
<path d="M458 176 Q462 182 461 186M470 177 Q474 181 476 184" fill="none" stroke="#e57a8c" stroke-width="1.1" stroke-linecap="round"/>
<!-- 鼻 + 嘴 -->
<path d="M432 176 Q423 198 435 206" fill="none" stroke="#e2b29c" stroke-width="2" stroke-linecap="round"/>
<path d="M408 228 Q419 221 430 226 Q441 221 452 228 Q430 233 408 228Z" fill="#e9a0ab"/>
<path d="M408 228 Q430 246 452 228 Q430 234 408 228Z" fill="#f2b8c0"/>
<!-- 拉扯测试小框 -->
<g transform="translate(594 22)">
<rect width="258" height="104" rx="14" fill="#fff" stroke="#f3d39a" stroke-width="1.6"/>
<text x="18" y="25" font-size="13.5" font-weight="700" fill="#b45309">拉扯测试：看拉下来的那根</text>
<path d="M32 40 C38 54 26 64 32 80" fill="none" stroke="#4a3628" stroke-width="2.4" stroke-linecap="round"/>
<circle cx="32" cy="85" r="4.6" fill="#fff" stroke="#9ca3af" stroke-width="1.6"/>
<text x="50" y="62" font-size="14" font-weight="800" fill="#1f2937">末端有白点</text>
<text x="50" y="81" font-size="12.5" fill="#6b7280">从毛囊掉，是脱发</text>
<path d="M174 40 C180 50 170 56 174 62M176 70 C170 76 180 84 174 92" fill="none" stroke="#4a3628" stroke-width="2.4" stroke-linecap="round"/>
<path d="M166 62l-6-4M166 70l-6 4M184 62l6-4M184 70l6 4" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
<text x="194" y="62" font-size="14" font-weight="800" fill="#1f2937">中间断</text>
<text x="194" y="81" font-size="12.5" fill="#6b7280">头发太脆</text>
</g>
<!-- 指甲特写 -->
<circle cx="724" cy="424" r="56" fill="#fff" stroke="#f3d39a" stroke-width="1.6" stroke-dasharray="5 4"/>
<g clip-path="url(#d22-inset)">
<path d="M700 500 L700 404 Q700 374 724 374 Q748 374 748 404 L748 500 Z" fill="url(#d22-skin)" stroke="${SKIN_L}" stroke-width="2"/>
<rect x="708" y="382" width="32" height="44" rx="13" fill="#fbd5dc" stroke="#e9a9b6" stroke-width="1.6"/>
<path d="M716 386v36M724 384v40M732 386v36" stroke="#efb8c3" stroke-width="1.2"/>
<rect x="708.8" y="400" width="30.4" height="7" fill="#fff"/>
<path d="M704 446 Q724 452 744 446" fill="none" stroke="${SKIN_L}" stroke-width="1.6" stroke-linecap="round"/>
</g>
<!-- 不宁腿小框 -->
<g transform="translate(24 392)">
<rect width="262" height="92" rx="14" fill="#fff" stroke="#e2dcfb" stroke-width="1.6"/>
<text x="16" y="27" font-size="14.5" font-weight="800" fill="#5b45d6">不宁腿也要想到贫血</text>
<text x="16" y="52" font-size="13" fill="#374151">老年女性夜里腿难受、放哪都不舒服、</text>
<text x="16" y="73" font-size="13" fill="#374151">自己抖：先怀疑贫血，别随便补钙</text>
</g>
<!-- 指引线 -->
${lead('M290 90 C320 94 346 100 372 100')}${tip(372, 100)}
${lead('M256 182 C300 180 340 160 368 147')}${tip(368, 147)}
${lead('M582 182 C540 182 512 180 484 178')}${tip(484, 178)}
${lead('M584 196 C540 212 492 226 456 228')}${tip(456, 228)}
${lead('M274 322 C330 324 370 318 404 314')}${tip(404, 314)}
${lead('M600 326 C602 360 630 392 672 406')}
${callout('01', 36, 86, '头发 · 拉扯测试', ['约 30 根，掉 3 根以上算脱发'])}
${callout('02', 36, 178, '眉毛外侧 1/3', ['变短、脱落：先查甲状腺'])}
${callout('03', 600, 178, '睑结膜 · 嘴唇', ['不看血管，看血管之间的底色', '发白、没有血色提示贫血'])}
${callout('04', 36, 318, '甲状腺', ['在喉结两侧，比两边是否对称'])}
${callout('05', 600, 300, '指甲', ['中间分层发白、出现竖纹', '可能缺铁，也可能末梢循环差'])}
</svg>`;
}

/* ---------- 贫血卡片角图 ---------- */
const cell = (x, y, r) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="#ef4444" stroke="#c81e1e" stroke-width="1.6"/><circle cx="${x}" cy="${y}" r="${(r * 0.48).toFixed(1)}" fill="#f87171"/>`;

export const rbcSmall = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<circle cx="38" cy="46" r="27" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-dasharray="4 4"/>
${cell(38, 46, 13)}${cell(82, 30, 11)}${cell(98, 60, 10)}${cell(68, 68, 9)}
<circle cx="104" cy="16" r="10" fill="#f3f4f6" stroke="#9ca3af" stroke-width="1.4"/><text x="104" y="20" text-anchor="middle" font-size="10" font-weight="800" fill="#4b5563">Fe</text>
</svg>`;

export const rbcBig = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M10 44C8 24 26 10 44 12c20 2 34 16 30 36-4 20-24 30-42 26C16 70 11 58 10 44Z" fill="#f87171" stroke="#c81e1e" stroke-width="1.8"/>
<path d="M28 42c0-9 8-15 16-14 9 1 14 9 12 17-2 9-11 13-18 11-6-2-10-7-10-14Z" fill="#fca5a5"/>
<path d="M76 54c0-14 10-24 22-24 12 0 20 10 18 23-2 14-12 22-23 21-11-1-17-9-17-20Z" fill="#f87171" stroke="#c81e1e" stroke-width="1.8"/>
<path d="M96 32l-4 9 6 5-5 9 5 7" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112 22l5-5M114 32l6-1" stroke="#f59e0b" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;

export const dnaLeaf = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<g stroke-linecap="round">
<path d="M14 42v-8M20 49v-22M26 42v-8M38 42v-8M44 49v-22M50 42v-8M62 42v-8M68 49v-22M74 42v-8" stroke="#cbd5e1" stroke-width="2.4"/>
<path d="M8 38 C14 22 26 22 32 38 S50 54 56 38 S74 22 80 38" fill="none" stroke="#22a06b" stroke-width="3.2"/>
<path d="M8 38 C14 54 26 54 32 38 S50 22 56 38 S74 54 80 38" fill="none" stroke="#60a5fa" stroke-width="3.2"/>
</g>
<path d="M86 80 C82 58 96 44 116 40 C118 62 106 78 86 80Z" fill="#86d19a" stroke="#3f9b5c" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M89 77 Q100 62 113 44" fill="none" stroke="#3f9b5c" stroke-width="1.4" stroke-linecap="round"/>
</svg>`;

/* ---------- 脱发卡片角图：三种模式 ---------- */
const headBase = () => `<path d="M30 88 Q32 74 48 72 L72 72 Q88 74 90 88 Z" fill="#c7d2fe"/>
<path d="M54 64v10h12V64Z" fill="${SKIN}"/>
<ellipse cx="33" cy="48" rx="4" ry="7" fill="${SKIN}" stroke="${SKIN_L}" stroke-width="1.4"/><ellipse cx="87" cy="48" rx="4" ry="7" fill="${SKIN}" stroke="${SKIN_L}" stroke-width="1.4"/>
<ellipse cx="60" cy="44" rx="27" ry="31" fill="${SKIN}" stroke="${SKIN_L}" stroke-width="1.6"/>
<circle cx="51" cy="50" r="2.2" fill="#4b3a2f"/><circle cx="69" cy="50" r="2.2" fill="#4b3a2f"/>
<path d="M54 61 Q60 64 66 61" fill="none" stroke="#e2a08e" stroke-width="1.6" stroke-linecap="round"/>`;

export const hairEven = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
${headBase()}
<path d="M34 42 C32 22 46 12 60 12 C74 12 88 22 86 42" fill="#a08672" opacity=".28"/>
<g fill="none" stroke="#5b4636" stroke-width="1.4" stroke-linecap="round">
<path d="M36 40 C36 30 40 22 46 18M42 34 C44 26 48 20 54 16M50 30 C52 22 56 16 62 14M60 28 C62 22 66 16 72 15M68 30 C72 24 76 20 80 20M76 34 C80 28 82 26 84 30"/>
</g>
<g fill="none" stroke="#7a5f4c" stroke-width="1.4" stroke-linecap="round">
<path d="M98 34 C102 40 98 46 102 52M106 50 C110 56 106 62 110 68M14 46 C10 52 14 58 10 64"/>
</g>
</svg>`;

export const hairRecede = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
${headBase()}
<path d="M33 48 C31 26 44 13 60 13 C76 13 89 26 87 48 L82 40 Q80 26 72 25 Q66 29 60 34 Q54 29 48 25 Q40 26 38 40 Z" fill="#5b4636"/>
<path d="M46 20 C52 16 62 15 70 17" fill="none" stroke="#8d6e5a" stroke-width="2" stroke-linecap="round" opacity=".8"/>
<g fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M44 40v-11M40 33l4-4 4 4M76 40v-11M72 33l4-4 4 4"/>
</g>
</svg>`;

export const hairPatch = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
${headBase()}
<path d="M33 50 C29 24 44 12 60 12 C76 12 91 24 87 50 C85 40 80 33 72 31 C64 35 56 35 48 31 C40 33 35 40 33 50 Z" fill="#5b4636"/>
<circle cx="47" cy="22" r="6.5" fill="${SKIN}"/><circle cx="73" cy="20" r="5.5" fill="${SKIN}"/><circle cx="80" cy="34" r="4" fill="${SKIN}"/>
<g fill="none" stroke="#ef4444" stroke-width="1.4" stroke-dasharray="2.5 2.5"><circle cx="47" cy="22" r="9.5"/><circle cx="73" cy="20" r="8.5"/></g>
</svg>`;

/* ---------- 免疫与甲状腺卡片角图 ---------- */
export const brainLR = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<ellipse cx="60" cy="78" rx="20" ry="8" fill="#ddd6fe" stroke="#8b5cf6" stroke-width="1.6"/>
<path d="M58 8 C36 6 16 22 16 42 C16 60 30 72 58 72 Z" fill="#fde2c0" stroke="#e8913a" stroke-width="1.8"/>
<path d="M62 8 C84 6 104 22 104 42 C104 60 90 72 62 72 Z" fill="#d3e0fc" stroke="#5b8def" stroke-width="1.8"/>
<path d="M26 30 c8-4 14 2 22-2M24 50 c8-4 16 2 24-2M88 30 c-8-4-14 2-22-2M96 50 c-8-4-16 2-24-2" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
<text x="38" y="46" text-anchor="middle" font-size="14" font-weight="800" fill="#c2410c">左↑</text>
<text x="82" y="46" text-anchor="middle" font-size="14" font-weight="800" fill="#2f58d4">右↓</text>
</svg>`;

export const glutenMilk = () => `<svg viewBox="0 0 120 88" aria-hidden="true" ${F}>
<path d="M8 40 C4 24 20 16 32 22 C40 14 60 18 56 34 L53 78 L13 78 Z" fill="#f2c27d" stroke="#c99a5c" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M16 42 C14 32 24 28 32 32 C38 26 50 30 48 40 L46 70 L20 70 Z" fill="#fdecc8"/>
<path d="M75 22 h20 v8 l6 9 v40 a4 4 0 0 1 -4 4 h-28 a4 4 0 0 1 -4 -4 v-40 l6 -9 Z" fill="#fff" stroke="#94a3b8" stroke-width="1.8" stroke-linejoin="round"/>
<rect x="74" y="13" width="22" height="9" rx="2.5" fill="#60a5fa"/>
<rect x="70" y="50" width="30" height="18" rx="3" fill="#dbeafe"/>
<text x="85" y="64" text-anchor="middle" font-size="12" font-weight="800" fill="#2563eb">奶</text>
</svg>`;

export const thyroidNeck = () => `<svg viewBox="0 0 120 88" aria-hidden="true">
<path d="M32 0 L32 88 L88 88 L88 0 Z" fill="${SKIN}"/>
<path d="M22 0 Q60 26 98 0 Z" fill="#f6cdb9"/>
<path d="M32 0 V88 M88 0 V88" stroke="${SKIN_L}" stroke-width="1.8"/>
<path d="M53 40 Q60 30 67 40" fill="none" stroke="#e2b29c" stroke-width="2.2" stroke-linecap="round"/>
<ellipse cx="74" cy="60" rx="16" ry="20" fill="#fda4b4" opacity=".35"/>
<g stroke="#e07a93" stroke-width="1.6">
<ellipse cx="47" cy="59" rx="9" ry="14" transform="rotate(-16 47 59)" fill="#f7b2c1"/>
<ellipse cx="73" cy="60" rx="11" ry="17" transform="rotate(16 73 60)" fill="#f59bb0"/>
<rect x="48" y="57" width="26" height="8" rx="4" fill="#f7b2c1"/>
</g>
<path d="M100 50h12M100 50l4-4M100 50l4 4M20 50H8M20 50l-4-4M20 50l-4 4" fill="none" stroke="#0f7f78" stroke-width="2" stroke-linecap="round"/>
</svg>`;

/* ---------- 断食步骤 ---------- */
function clock(cx, cy, r, frac, col) {
  const ri = r - 5;
  let face;
  if (frac >= 1) face = `<circle cx="${cx}" cy="${cy}" r="${ri}" fill="${col}" opacity=".28"/>`;
  else {
    const a = frac * 2 * Math.PI;
    const x = (cx + ri * Math.sin(a)).toFixed(1);
    const y = (cy - ri * Math.cos(a)).toFixed(1);
    face = `<path d="M${cx} ${cy} L${cx} ${cy - ri} A${ri} ${ri} 0 ${frac > 0.5 ? 1 : 0} 1 ${x} ${y} Z" fill="${col}" opacity=".3"/>`;
  }
  return `<rect x="${cx - 4}" y="${cy - r - 7}" width="8" height="6" rx="2" fill="${col}"/>
<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" stroke="${col}" stroke-width="2.6"/>${face}
<path d="M${cx} ${cy}V${(cy - ri * 0.72).toFixed(1)}M${cx} ${cy}H${(cx + ri * 0.5).toFixed(1)}" stroke="#374151" stroke-width="2.2" stroke-linecap="round"/><circle cx="${cx}" cy="${cy}" r="2.4" fill="#374151"/>`;
}
export const fast16 = () => `<svg viewBox="0 0 160 88" aria-hidden="true">${clock(80, 50, 31, 16 / 24, '#3b82f6')}</svg>`;
export const fast48 = () => `<svg viewBox="0 0 160 88" aria-hidden="true">${clock(52, 50, 25, 1, '#22a06b')}${clock(108, 50, 25, 1, '#22a06b')}</svg>`;
export const fast72 = () => `<svg viewBox="0 0 160 88" aria-hidden="true">${clock(32, 52, 21, 1, '#d99e00')}${clock(80, 52, 21, 1, '#d99e00')}${clock(128, 52, 21, 1, '#d99e00')}</svg>`;

export const noSnack = () => `<svg viewBox="0 0 160 88" aria-hidden="true">
<path d="M52 8 L60 34" stroke="#f472b6" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="45" cy="30" rx="19" ry="5" fill="#f5e6d0" stroke="#b98a4e" stroke-width="1.6"/>
<path d="M26 30 L30 80 H60 L64 30" fill="#e7c9a1" stroke="#b98a4e" stroke-width="1.8" stroke-linejoin="round"/>
<circle cx="38" cy="72" r="3.4" fill="#5b4636"/><circle cx="46" cy="74" r="3.4" fill="#5b4636"/><circle cx="54" cy="71" r="3.4" fill="#5b4636"/><circle cx="42" cy="65" r="3.4" fill="#5b4636"/><circle cx="51" cy="64" r="3.4" fill="#5b4636"/>
<path d="M78 50 A30 30 0 0 0 138 50 Z" fill="#f87171"/>
<path d="M78 50 A30 30 0 0 0 138 50" fill="none" stroke="#22a06b" stroke-width="6"/>
<path d="M82 50 A26 26 0 0 0 134 50" fill="none" stroke="#bbf7d0" stroke-width="2"/>
<g fill="#1f2937"><ellipse cx="96" cy="58" rx="1.8" ry="3"/><ellipse cx="108" cy="64" rx="1.8" ry="3"/><ellipse cx="120" cy="58" rx="1.8" ry="3"/><ellipse cx="108" cy="54" rx="1.8" ry="3"/></g>
<circle cx="138" cy="20" r="14" fill="#fff" stroke="#ef4444" stroke-width="3.4"/><path d="M131 13l14 14M145 13L131 27" stroke="#ef4444" stroke-width="3.4" stroke-linecap="round"/>
</svg>`;

/* ---------- 节律与老年营养格子 ---------- */
export const sunrise = () => {
  const rays = [-150, -120, -90, -60, -30]
    .map((d) => {
      const a = (d * Math.PI) / 180;
      return `M${(55 + 30 * Math.cos(a)).toFixed(1)} ${(60 + 30 * Math.sin(a)).toFixed(1)}L${(55 + 40 * Math.cos(a)).toFixed(1)} ${(60 + 40 * Math.sin(a)).toFixed(1)}`;
    })
    .join('');
  return `<svg viewBox="0 0 110 84" aria-hidden="true">
<rect x="6" y="60" width="98" height="14" rx="4" fill="#dcfce7"/>
<path d="M31 60 A24 24 0 0 1 79 60 Z" fill="#fcd34d" stroke="#f59e0b" stroke-width="2"/>
<path d="${rays}" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
<path d="M6 60H104" stroke="#86c873" stroke-width="2.4" stroke-linecap="round"/>
</svg>`;
};

const capsule = (x, y, a, b, rot = -30, w = 40, h = 16) =>
  `<g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${b}"/><path d="M${x + h / 2} ${y}H${x + w / 2}V${y + h}H${x + h / 2}a${h / 2} ${h / 2} 0 0 1 0-${h}Z" fill="${a}"/><rect x="${x + 5}" y="${y + 3}" width="${w / 2 - 8}" height="3" rx="1.5" fill="#fff" opacity=".6"/></g>`;

export const melatonin = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M50 8 C30 10 18 26 18 42 C18 60 32 72 50 72 C60 72 68 68 74 62 C56 62 42 50 42 34 C42 22 48 14 56 10 C54 8.6 52 8 50 8 Z" fill="#fde68a" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round"/>
<path d="M80 12l2 5 5 2-5 2-2 5-2-5-5-2 5-2Z M92 32l1.4 3.6 3.6 1.4-3.6 1.4-1.4 3.6-1.4-3.6-3.6-1.4 3.6-1.4Z" fill="#a5b4fc"/>
${capsule(62, 54, '#a78bfa', '#ede9fe', -24, 40, 16)}
</svg>`;

export const eyeLutein = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<path d="M8 40 Q52 4 96 40 Q52 76 8 40 Z" fill="#fff" stroke="#64748b" stroke-width="2.2" stroke-linejoin="round"/>
<circle cx="52" cy="40" r="16" fill="#7dd3fc" stroke="#0284c7" stroke-width="1.8"/>
<circle cx="52" cy="40" r="7" fill="#0f172a"/><circle cx="56" cy="36" r="2.6" fill="#fff"/>
<g fill="#fbbf24" stroke="#f59e0b" stroke-width="1"><circle cx="92" cy="62" r="5"/><circle cx="100" cy="68" r="5"/><circle cx="92" cy="74" r="5"/><circle cx="84" cy="68" r="5"/></g>
<circle cx="92" cy="68" r="4" fill="#ea580c"/>
</svg>`;

export const cabbageJuice = () => `<svg viewBox="0 0 110 84" aria-hidden="true">
<circle cx="38" cy="48" r="28" fill="#bbf7d0" stroke="#22a06b" stroke-width="2"/>
<path d="M14 40 C24 30 40 28 52 36 M18 58 C28 50 44 50 58 58 M36 22 C30 34 30 52 38 74" fill="none" stroke="#4ade80" stroke-width="2.2" stroke-linecap="round"/>
<path d="M12 46 C10 30 22 18 38 20 C30 26 24 36 24 50 Z" fill="#86efac" stroke="#22a06b" stroke-width="1.6" stroke-linejoin="round"/>
<path d="M74 26 H102 L98 78 H78 Z" fill="#fff" stroke="#94a3b8" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M76 40 H100 L98 78 H78 Z" fill="#4ade80" opacity=".85"/>
<circle cx="84" cy="56" r="2" fill="#bbf7d0"/><circle cx="92" cy="66" r="1.6" fill="#bbf7d0"/><circle cx="90" cy="48" r="1.4" fill="#bbf7d0"/>
</svg>`;
