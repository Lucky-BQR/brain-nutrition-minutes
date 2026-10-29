// D2-1 图解卡片。事实以 1-课程笔记.md 第 18–24 章为准。
import * as I from '../src/illus.mjs';
import { page, C, cards, steps, map, types, tiles, memo, hero, compare } from '../src/poster.mjs';

export const html = page({
  title: '胃肠、疼痛与脑雾',
  sub: '脑营养学课堂笔记 · 第二天 第1段 · 图解＋知识要点',
  core: [
    '消化是一切营养方案的地基：补剂“没效”先查消化，<b>首先解决胃酸</b>。',
    '<b>胃肠不好 = 脑干不好</b>：看小舌、测咽反射来查，漱口和呼吸训练来练。',
    '补剂治的是<b>脑区</b>，不是症状：疼痛按部位找脑区，脑雾先修<b>血脑屏障</b>。',
  ],
  sections: [
    { title: '一张图看懂：迷走神经管哪里', html: hero(I.vagusMap()) },
    {
      title: '胃肠不好，先查迷走神经',
      html: cards([
        { c: C.purple, ill: I.brainGut(), title: '脑肠轴', pill: '大脑 ⇄ 胃肠', points: ['肠道和大脑<b>同步发炎</b>：一方不好，另一方也不好。', '长期肠胃差的人常处在“发蒙”状态，却不自知。', '“迷走神经坏了”指<b>脑干里的核团</b>坏了，不是神经纤维。'] },
        { c: C.blue, ill: I.sickStomach(), title: '受损信号', pill: '饱饿感失调', points: ['不明原因<b>腹胀、腹痛</b>，饿了就痛却查不出溃疡。', '<b>吃一点就饱</b>，或完全没有饱腹感。', '稍吃多就恶心；眼镜度数稍偏就想吐；坐车时<b>酸水</b>不停往嘴里涌。'] },
        { c: C.green, ill: I.mouth(5, true), title: '两步查体', pill: '看小舌 + 测咽反射', points: ['发“啊”时小舌应居中，<b>偏向哪侧，对侧更差</b>。', '棉签碰咽后壁左右两侧：<b>1～2 下</b>咽反射为正常。', '没反应（太弱）或没碰到就干呕（太强）都属异常。'] },
      ]),
    },
    {
      title: '怎么激活迷走神经',
      html: steps([
        { ill: I.gargle(), title: '漱口', tag: '最直接', text: '人人能学会；漱完一直好是脑干问题，好两天又回退是<b>大脑问题</b>。' },
        { ill: I.breathe(), title: '按腹 + 吸三呼六', tag: '长效', text: '仰卧屈髋屈膝、收下巴，他人用体重压腹部中间；<b>吸 3 秒、呼 6 秒</b>，练 5～7 分钟。' },
        { ill: I.oximeter(), title: '血氧仪验证', tag: '判断练对没有', text: '<b>血氧升、心率降</b>＝进入副交感；心率一直快，查斜角肌代偿。' },
        { ill: I.noSelfPress(), title: '别自己按腹', tag: '注意', text: '自己按会动用胸廓和斜角肌，<b>越练越交感</b>；反复练不好要看大脑。' },
      ]),
    },
    {
      title: '疼痛：补剂治的是脑区',
      html:
        map({
          left: I.brainSide(),
          right: I.bodyZones(),
          keys: [
            { color: '#86d19a', title: '大脑皮层 → 上肢痛、肩痛', text: '手的自由、精细动作最依赖大脑；肩痛源于同侧大脑过弱或过强。' },
            { color: '#f5c518', title: '基底核 → 下楼、下蹲时膝痛', text: '唯一特例，管离心控制；先排查踝关节，卧位放腿看是否一卡一卡。' },
            { color: '#7fa6f4', title: '小脑 · 前庭 → 躯干痛、下肢痛', text: '躯干不稳，肌肉代偿收紧而痛；一字步站立看是否晃动。' },
          ],
          note: '疼痛是中枢整合后的输出 · 软骨磨损 ≠ 疼痛，关键在关节稳定',
        }) +
        types(
          [
            { c: { ...C.blue, bg: '#eef3ff', line: '#d6e1fd', ink: '#2f58d4' }, title: '小脑外侧型', desc: '随时焦虑、晕车晕船、常喝酒，伴躯干痛', chips: ['维生素 B1 ≥200mg', '镁', 'DHA'], ill: I.pills('#60a5fa', '#dbeafe') },
            { c: C.purple, title: '小脑中线型', desc: '人多、环境复杂时难受，一字步站不稳', chips: ['维生素 E', '辅酶 Q10 约 500mg', '谷胱甘肽'], ill: I.pills('#a78bfa', '#ede9fe') },
          ],
          '躯干痛 + 焦虑，要帮的是小脑 · 焦虑特别重加 B12 + 磷脂酰丝氨酸 · 动作也不稳加锌 · 两型都坏就都补'
        ),
    },
    {
      title: '脑雾、脂肪与铁：5 个关键营养素',
      html:
        tiles([
          { c: C.yellow, ill: I.vitD(), name: '维生素 D3', role: '调节免疫，修复血脑屏障的重中之重', use: '感冒好了再用<br>1 万单位起' },
          { c: C.tan, ill: I.ginseng(), name: '西洋参', role: '草药里最重要的一味，可配黄芪、枸杞', use: '要煮着喝到没味<br>不要泡水' },
          { c: { ...C.blue, bg: '#eef7ff', line: '#d3e8fb' }, ill: I.fishOil(), name: 'DHA', role: '能进大脑，细胞膜和髓鞘的原料', use: '成人约<br>1000mg/天' },
          { c: C.red, ill: I.mito(), name: '辅酶 Q10', role: '他汀会抑制它再生；大脑能量的来源', use: '长期服他汀者补<br>不可擅自停他汀' },
          { c: { ...C.pink, bg: '#fff0f3', line: '#f9d0da', ink: '#be123c' }, ill: I.rbc(), name: '铁', role: '缺铁的本质是缺氧，和缺胃酸一样普遍', use: '先漱口 5 分钟<br>再服铁剂 + 维 C' },
        ]) + memo('简化记忆：<b>感冒后、撞头后、中风后</b>的脑雾，先修血脑屏障；整套方案在<b>感冒好了之后</b>再吃。'),
    },
    {
      title: '四个容易混淆的点',
      html: compare([
        ['胃酸过多 / 胃酸不足', '“胃酸过多”是阶段性的，本质仍是胃酸不足。'],
        ['迷走神经坏 / 纤维坏', '坏的是脑干里的神经核团，不是那根神经本身。'],
        ['软骨磨损 / 疼痛', '磨损不等于痛，关键在关节稳不稳。'],
        ['吃 GABA 有效 / 好事', '口服 GABA 本进不了大脑，有效反而提示血脑屏障可能漏了。'],
      ]),
    },
  ],
  source: '课程来源：D2-1（2025.11.21 第二天 第1段）· 主讲 钱笛',
});
