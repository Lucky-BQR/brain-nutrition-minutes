// 全课总览图解卡片。事实以 1-课程笔记.md（第 32 章“各目标的首选”“两天总结”）、3-实用建议清单.md（课上反复强调的原则）为准。
import * as I from '../src/illus.mjs';
import * as O from '../src/illus-总览.mjs';
import { page, C, cards, steps, tiles, memo, hero, compare } from '../src/poster.mjs';

const dur = (t) => ` <span style="font-size:13.5px;font-weight:700;color:#6b7280;letter-spacing:0">${t}</span>`;

export const html = page({
  title: '先消化，后取舍',
  sub: '脑营养学课堂笔记 · 全课总览（两天 6 段）· 图解＋知识要点',
  core: [
    '<b>先管消化，再谈补剂</b>：消化不好，吞再多补剂也是浪费，先解决胃酸。',
    '<b>先给氧气和养分，再做训练</b>：营养、免疫、代谢是影响全脑的全局因素。',
    '补剂按<b>机制</b>选、吃够量、给足观察期，不搞“大包围”，钱花在<b>首选</b>上。',
  ],
  sections: [
    {
      title: '一张图看懂：两天课程怎么走',
      html: hero(O.courseMap()) + '<div class="hero-note">第一天从口鼻一路讲到小肠；第二天从管内脏的大脑讲起，再到贫血、免疫、代谢等全身问题，最后落到补剂的取舍。</div>',
    },
    {
      title: '6 段速览',
      html:
        cards([
          { c: C.orange, ill: O.plateAroma(), title: 'D1-1' + dur('2 小时 45 分'), pill: '总论 · 消化起点', points: ['营养、免疫、代谢是影响全脑的<b>全局因素</b>。', '补剂没效，多半是<b>消化不了、吸收不了</b>或被过度消耗。', '咀嚼、唾液、<b>嗅觉</b>都是消化的启动键。'] },
          { c: C.pink, ill: O.acidStomach(), title: 'D1-2' + dur('3 小时'), pill: '胃 · 胆 · 肝 · 菌群', points: ['反酸多半是<b>胃酸不足</b>，不该长期抑酸。', '胃酸不足会连锁影响<b>胰酶、胆汁</b>、矿物质和菌群。', '肝解毒变差会表现在<b>皮肤</b>上；菌群靠改善生态。'] },
          { c: C.green, ill: O.gutBugs(), title: 'D1-3' + dur('58 分钟'), pill: '小肠 · 肠漏 · 寄生虫', points: ['<b>SIBO</b> 可用吃菊粉后的反应初判，杀菌前先解决胃酸。', '<b>肠漏</b>让大分子入血，引发过敏、自体免疫和全身炎症。', '修补肠漏以<b>谷氨酰胺</b>为首。'] },
        ]) +
        '<div style="height:12px"></div>' +
        cards([
          { c: C.purple, ill: I.brainGut(), title: 'D2-1' + dur('2 小时 41 分'), pill: '脑干 · 疼痛 · 脑雾', points: ['<b>胃肠不好 = 脑干不好</b>：看小舌、测咽反射。', '疼痛按部位找<b>脑区</b>，补剂治的是脑区。', '脑雾先修<b>血脑屏障</b>；补铁先保证胃酸和维 C。'] },
          { c: C.red, ill: I.rbc(), title: 'D2-2' + dur('3 小时'), pill: '贫血 · 免疫 · 断食', points: ['<b>贫血就是缺氧</b>：铁、B12、叶酸一起看。', '脱发先按<b>模式</b>找原因；维生素 D 是核心免疫调节剂。', '<b>断食</b>改善代谢、免疫和抗衰，中途不能进食。'] },
          { c: C.blue, ill: I.pills(), title: 'D2-3' + dur('23 分钟'), pill: '首选 · 两天总结', points: ['一切的前提是<b>消化</b>。', '不搞“大包围”，钱花在<b>首选</b>的几样上。', '效果取决于<b>工艺</b>和是否<b>吃够量</b>。'] },
        ]),
    },
    {
      title: '各目标的首选（老师的课程总结）',
      html:
        tiles([
          { c: C.purple, ill: O.grapes(), name: '白藜芦醇', role: '<b>抗衰老、抗氧化</b>首选；排第一，但最贵', use: '要吃就一次吃够量<br>喝红酒补不到' },
          { c: C.yellow, ill: O.turmeric(), name: '姜黄素', role: '<b>广泛性消炎</b>首选，“到哪里都能消炎”', use: '看实际有效含量<br>逐步加量自己测试' },
          { c: { ...C.blue, bg: '#eef7ff', line: '#d3e8fb' }, ill: I.fishOil(), name: '鱼油', role: '<b>大人小孩都能吃</b>，对大脑有帮助', use: '全身抗炎看 EPA<br>护脑看 DHA' },
        ]) +
        '<div style="height:10px"></div>' +
        tiles([
          { c: C.orange, ill: I.vitD(), name: '维生素 D', role: '<b>免疫调节</b>：最重要的免疫调节剂', use: '规格要选对<br>大剂量时配镁' },
          { c: C.red, ill: I.rbc(), name: '铁', role: '<b>最容易拖后腿</b>：缺铁就是缺氧', use: '先漱口 5 分钟<br>再服铁剂 + 维 C' },
          { c: C.green, ill: O.magnesium(), name: '镁', role: '<b>到处都起作用</b>：什么活动都要用，消耗大', use: '早上普通镁，晚上苏糖酸镁<br>别吃氧化镁' },
        ]) +
        memo('B 族、维 C 日常补够即可；同时吃 EPA、姜黄素、白藜芦醇<b>不会抗炎过强</b>，通常只会不够。'),
    },
    {
      title: '课上反复强调的原则',
      html: steps([
        { ill: O.acidStomach(), title: '先管消化', tag: '一切的前提', text: '消化不好，吞再多补剂也是浪费；任何消化问题先解决<b>胃酸</b>。' },
        { ill: O.scales(), title: '看清机制再选', tag: '不搞大包围', text: '先判断缺什么、机制是什么，再针对机制用；补剂跟钱挂钩，要<b>算账</b>。' },
        { ill: I.pills('#60a5fa', '#dbeafe'), title: '单品、吃够量', tag: '剂量要够', text: '推荐量常偏保守；优先<b>成分明确的单一补剂</b>，少用复方和草药混合物。' },
        { ill: O.calendar(), title: '观察期给足', tag: '两周到半年', text: '一般两周到两三个月，<b>最长半年</b>；先在自己身上试，自己判断。' },
      ]),
    },
    {
      title: '五个容易混淆的点',
      html: compare([
        ['补剂没效 / 补剂没用', '先查三件事：消化不了、吸收不了，还是被炎症等过度消耗了。'],
        ['复合维生素 / 单一补剂', '复合维生素各成分含量太少，也没法按需调整；需要什么就买单独的。'],
        ['补剂原料 / 成品', '身体能不能用上取决于工艺；除菊粉外，不要直接吃补剂原料。'],
        ['反式白藜芦醇 / 普通白藜芦醇', '没区别，是炒概念，不必为此多花钱。'],
        ['还原型 / 普通谷胱甘肽', '要抗氧化用还原型；帮肝脏解毒，普通型就够。'],
      ]),
    },
  ],
  source: '课程来源：两天 6 段录音（2025.11.20–21）· 主讲 钱笛',
});
