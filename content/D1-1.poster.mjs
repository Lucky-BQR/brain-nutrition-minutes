// D1-1 图解卡片。事实以 1-课程笔记.md 第 1–7 章中标〔D1-1〕的内容为准（嗅觉康复营养素在 D1-2，不放在这里）。
import * as I from '../src/illus-D1-1.mjs';
import { page, C, cards, steps, map, memo, hero, compare } from '../src/poster.mjs';

// 左右两个框，每框列出几类人（不用“+”连接，所以不用 poster.mjs 的 types）
const vars = (c) => `--bg:${c.bg};--line:${c.line};--ink:${c.ink};--pill:${c.pill}`;
const groups = (items, note = '') =>
  `<div class="types" style="grid-template-columns:repeat(${items.length},1fr)">${items
    .map(
      (o) =>
        `<div class="ty" style="${vars(o.c)}"><div><h4>${o.title}</h4><p>${o.desc}</p><div class="chips">${o.chips
          .map((x) => `<em>${x}</em>`)
          .join('')}</div></div>${o.ill}</div>`
    )
    .join('')}</div>${note ? `<div class="ty-note">${note}</div>` : ''}`;

const nw = (s) => `<span style="white-space:nowrap">${s}</span>`;
const css = `
.ty h4,.ty p{padding-right:66px}
`;

export const html = page({
  title: '补剂、消化与嗅觉',
  sub: '脑营养学课堂笔记 · 第一天 第1段 · 图解＋知识要点',
  core: [
    '全脑都差找<b>全局因素</b>：营养、免疫、代谢；先给<b>氧气和养分</b>，再做训练。',
    '补剂“没效”先查三件事：<b>消化不了、吸收不了、被过度消耗</b>。',
    '消化从<b>看见、闻到</b>食物就开始；<b>咀嚼、唾液、嗅觉</b>是消化的启动键。',
  ],
  css,
  sections: [
    { title: '一张图看懂：食物进嘴之前，消化就开始了', html: hero(I.digestStart()) },
    {
      title: '全脑都差，先给营养再训练',
      html:
        cards([
          { c: C.blue, ill: I.brainBlue(), title: '全脑都差', pill: '营养 · 免疫 · 代谢', points: ['有好有坏：差的脑区自己有问题，<b>直接练它</b>。', '全脑都差：像五个部门全出问题，是<b>“公司”</b>的问题。', '先处理炎症、免疫，给足营养，坏的区域可能<b>自己变好</b>。'] },
          { c: C.pink, ill: I.gutSignal(), title: '内脏觉', pill: '另一半感觉输入', points: ['不在意识层面：能感觉到胃时，那叫<b>腹胀</b>。', '缺失后内脏失控：胃酸、消化酶、蠕动都乱，直至便秘。', '大脑感觉不到内脏会<b>焦虑</b>：长期便秘、腹泻的人普遍焦虑。'] },
          { c: C.green, ill: I.neuronFuel(), title: '神经元三要素', pill: '氧气 · 养分 · 刺激', points: [`常规康复只讲刺激，别忘了${nw('“<b>兵马未动，粮草先行</b>”')}。`, '一练就好、睡一觉又差；怎么练都没反应；一练就加重。', '这三种都是缺氧气或养分，要<b>先给营养再训练</b>。'] },
        ]) + memo('观察窗口期：营养干预运气好<b>两周</b>见效，多数两三个月，最长<b>半年</b>；常是先没反应，然后突然“像换了一个人”。'),
    },
    {
      title: '补剂为什么“没效”',
      html:
        steps([
          { ill: I.cantDigest(), title: '消化不了', tag: '本人不知道', text: '没有消化能力，补剂和食物在胃肠里<b>转一圈就排出去</b>。' },
          { ill: I.cantAbsorb(), title: '吸收不了', tag: '本人也不知道', text: '能消化，但<b>吸收不了</b>；补剂如此，日常食物也一样。' },
          { ill: I.overUse(), title: '被过度消耗', tag: '补充跟不上', text: '例：维生素 C 平时每天需要 500mg，发炎时升到 <b>1500mg</b>。' },
          { ill: I.foodJourney(), title: '跟着食物走一遍', tag: '全课主线', text: '从摆上桌到进入马桶，<b>消化原理</b>约占课件一半篇幅。' },
        ]) + memo('营养学的两个困境：越看书越觉得<b>什么都缺</b>；默认<b>吃进去就有效</b>。'),
    },
    {
      title: '嗅觉：消化的开关，记忆的“后门”',
      html:
        map({
          left: I.smellPath(),
          right: I.smellUses(),
          keys: [
            { color: '#f5b335', title: '激活消化', text: '闻到香味流口水、肚子咕咕叫；嗅觉差，下游消化一定跟着变差。' },
            { color: '#a78bfa', title: '记忆与场景回忆', text: '闻到气味想起的是画面；嗅觉差，记得住却提取不出来。' },
            { color: '#f472b6', title: '情绪唤起', text: '嗅觉减退到一定程度，对应的情绪会慢慢消失，人变得麻木不仁。' },
          ],
          note: '嗅神经不经脑干、丘脑中转，直通边缘系统和海马 · 进食时被味觉补偿，嗅觉退化常不自知',
        }) +
        groups([
          { c: C.orange, title: '嗅觉容易受损', desc: '这些人的嗅觉容易出问题', chips: ['重感冒、新冠后', '呼吸道感染', '撞过头', '某些精神类疾病', '脑退化'], ill: I.virus() },
          { c: C.purple, title: '一定要测', desc: '用四种精油做嗅觉记忆测试', chips: ['长期吃固定食物', '反复感冒', '胃酸怎么调都不足', '老年人'], ill: I.elder() },
        ], '漱口、补甜菜碱都调不回胃酸的人，做嗅觉康复后可能突然就好了'),
    },
    {
      title: '嗅觉记忆测试与康复：既是测试，也是训练',
      html:
        steps([
          { ill: I.oils4(), title: '建立连接', tag: '4 种基础精油', text: '丁香、柠檬、玫瑰、桉树，<b>一次只开一瓶</b>；闭眼闻，不认识就告诉名称。' },
          { ill: I.score80(), title: '随机测、马上纠正', tag: '约 80% 说对', text: '认错马上告诉他；记不住先记牢再换下一种，<b>多轮随机</b>不再认错。' },
          { ill: I.oils12(), title: '扩大气味库', tag: '逐步到约 12 种', text: `只记 4 种作用很微弱；自己再多买七八种，${nw('<b>别用完全陌生</b>的气味')}。` },
          { ill: I.smellMemory(), title: '联结个人记忆', tag: '针对记忆问题', text: '能认出气味后，再问他“<b>想起了什么事、什么画面</b>”。' },
        ]) + memo('嗅觉训练疲劳很快：分辨不出就<b>马上停</b>，休息几分钟再练 · 气味复习：每门课配一种气味，考试带上，<b>别拿错</b>'),
    },
    {
      title: '五个容易混淆的点',
      html: compare([
        ['吃进去 / 补进去', '补剂“没效”多半是消化不了、吸收不了或被过度消耗，不一定是补剂没用。'],
        ['全脑都差 / 每个脑区都练', '全脑都差先找营养、免疫、代谢，全部硬练可能越练越差。'],
        ['代糖 / 伤胰岛', '不会把胰岛功能搞坏；问题是让消化系统在不该启动时预启动。'],
        ['吃得出味道 / 嗅觉正常', '进食时味觉会补偿嗅觉，日常食物又固定，嗅觉退化常不自知。'],
        ['毒性 / 剂量', '“脱离剂量谈毒性”只对一半：鱼腥草、马兜铃酸还有不依赖剂量的基因毒性。'],
      ]),
    },
  ],
  source: '课程来源：D1-1（2025.11.20 第一天 第1段）· 主讲 钱笛',
});
