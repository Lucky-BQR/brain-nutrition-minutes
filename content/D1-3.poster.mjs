// D1-3 图解卡片。事实以 1-课程笔记.md 第 15–17 章为准；小檗碱、姜黄素剂量存疑，只写“剂量见课件”。
import * as I from '../src/illus.mjs';
import * as J from '../src/illus-D1-3.mjs';
import { page, C, cards, steps, map, types, tiles, memo, hero, compare } from '../src/poster.mjs';

export const html = page({
  title: '细菌、肠漏与寄生虫',
  sub: '脑营养学课堂笔记 · 第一天 第3段 · 图解＋知识要点',
  core: [
    '小肠细菌过度生长先用<b>菊粉</b>试；杀菌前先补<b>胃酸和消化酶</b>，否则会反复。',
    '肠漏让<b>大分子直接入血</b>：引发新发过敏、自体免疫和全身炎症。',
    '修补肠漏四个核心：<b>谷氨酰胺、EPA、姜黄素、维生素 D</b>，一天一次。',
  ],
  sections: [
    { title: '一张图看懂：肠漏是怎么发生的', html: hero(J.leakMap()) },
    {
      title: '小肠细菌过度生长：先试菊粉，再定方案',
      html:
        steps([
          { ill: J.inulinTest(), title: '喂菊粉看反应', tag: '怎么判断', text: '孩子肚子<b>咕咕叫</b>、拒食、<br>不停放屁，原有症状加重；<br>成人一吃就胀。' },
          { ill: J.slowDose(), title: '菊粉减量', tag: '方案一', text: '慢慢喂、<b>一点点加量</b>，<br>建立耐受，让大肠的<br>有益菌慢慢占优势。' },
          { ill: J.acidKill(), title: '先补胃酸、消化酶', tag: '杀菌的前提', text: '细菌能在小肠活下来，<br>说明<b>胃酸、消化酶不够</b>；<br>不先解决，杀完会还原。' },
          { ill: J.berberine(), title: '小檗碱杀菌', tag: '方案二', text: '<b>睡前吃</b>效果最好，<br>剂量见课件；<br>孩子约减半，<b>孕妇不吃</b>。' },
        ]) +
        memo('成人也可用<b>生大蒜</b>：捣碎后在空气中放<b>至少 10 分钟</b>再吃 · 大蒜、肉桂适合大人，小孩直接用小檗碱'),
    },
    {
      title: '修补肠漏：4 个核心 + 2 个辅助',
      html:
        tiles([
          { c: C.pink, ill: J.glutamine(), name: '谷氨酰胺', role: '绒毛尖端细胞的能量来源，<br>让肠细胞重新长好', use: '一定不能少<br>买到什么规格吃什么' },
          { c: C.yellow, ill: J.epaCap(), name: 'EPA', role: '作用于外周，<br>在细胞膜上抗炎', use: '1000mg/天<br>按 EPA 含量算' },
          { c: C.orange, ill: J.turmeric(), name: '姜黄素', role: '跑到哪里抗炎就到哪里，<br>但生物利用度极低', use: '剂量见课件<br>肠道好了就不必吃' },
          { c: { ...C.blue, bg: '#fff9e8', line: '#f6e2b0', ink: '#b45309' }, ill: I.vitD(), name: '维生素 D', role: '调节肠道免疫，<br>促进肠道分泌抗菌肽', use: '1 万单位就够<br>五六千也够' },
        ]) +
        types(
          [
            { c: { ...C.blue, bg: '#f1f5fb', line: '#d8e0ee', ink: '#334e7a' }, title: '辅助：锌', desc: '能提高效率，但不是必须；长期连续补会<b>缺铜</b>，进而影响铁', chips: ['每天 ≤40mg', '间断吃'], ill: J.zincCopper() },
            { c: C.green, title: '辅助：丁酸盐', desc: '偏向大肠的能量来源；肠漏合并<b>结肠炎</b>时加', chips: ['看经济条件'], ill: I.pills('#34d399', '#d1fae5') },
          ],
          '四个核心一起用，<b>一天吃一次</b>就够 · 连续大量补锌时同步吃螺旋藻补铜'
        ),
    },
    {
      title: '看懂补剂标签：姜黄素 ≠ 姜黄',
      html: map({
        left: J.labelBottle(),
        right: J.turmericChain(),
        keys: [
          { color: '#fb923c', title: '只看“姜黄素”的含量', text: '标 1000mg 的一颗，姜黄素可能只有约 30mg，其余是姜黄粉和辅料；越高越好。' },
          { color: '#86d19a', title: '打听口碑，轮换品牌', text: '同一品牌有两个以上的人说好就用，过段时间再打听、轮换。' },
          { color: '#a78bfa', title: '工艺比原料重要', text: '“提高吸收”的宣传老师都不信；多种补剂同吃，很难单独判断哪个有效。' },
        ],
        note: '说明书写“两到三天吃一颗”，老师认为绝对有问题 · 想靠吃姜黄粉补够，可能要吃一碗',
      }),
    },
    {
      title: '寄生虫：越隐蔽越糟糕',
      html: cards([
        { c: C.teal, ill: J.rawFish(), title: '谁容易有', pill: '生食 · 小孩', points: ['<b>吃生食的人一定有</b>：广东鱼生，云南生猪肉、生牛肉。', '生菜洗得掉农药残留，寄生虫有时却还能活下来。', '小孩用<b>嘴</b>探索世界，更容易接触。'] },
        { c: C.orange, ill: J.dewormPack(), title: '怎么驱虫', pill: '定期 · 肠虫清', points: ['老师每年<b>秋季</b>买一版肠虫清，全家各吃一次。', '吃鱼生的人一定定期打；从不吃生食的，<b>两三年</b>一次。', '<b>全身严重感染</b>不能在家驱虫，要住院，防脑水肿。'] },
        { c: C.purple, ill: J.catTray(), title: '要小心', pill: '难查 · 弓形虫', points: ['多与人<b>共生</b>，常没症状，却让免疫莫名被激活。', '不好查：<b>嗜酸性粒细胞</b>可以提示，但不绝对准。', '处理<b>猫粪</b>要小心弓形虫（可致胎儿畸形、流产）。'] },
      ]),
    },
    {
      title: '五个容易混淆的点',
      html: compare([
        ['肠漏 / 肠道穿孔', '肠漏不是穿了孔，是原本过不去的大分子过去了。'],
        ['小檗碱 / 止泻药', '菌群乱时腹泻、便秘都会出现，长期便秘、大便不成形也能用。'],
        ['EPA / DHA', '修补肠漏要 EPA（作用于外周）；DHA 倾向进大脑和视网膜。'],
        ['甲状腺结节 / 只看 T3、T4', '结节多由炎症刺激而来，要看抗体；甲功测七项或九项。'],
        ['酒精、芥末 / 杀寄生虫', '是谣言，即使 100% 的酒精也杀不了；吃生食要定期驱虫。'],
      ]),
    },
  ],
  source: '课程来源：D1-3（2025.11.20 第一天 第3段）· 主讲 钱笛',
  css: '.ty>div{padding-right:72px}',
});
