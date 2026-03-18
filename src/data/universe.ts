export type Character = {
  slug: string;
  name: string;
  title: string;
  appearance: string;
  personality: string;
  abilities: string[];
  lineage: string;
  quote: string;
};

export const coreCharacters: Character[] = [
  {
    slug: 'li-songrui',
    name: '李松瑞',
    title: '破罐医师 · 东方龙',
    appearance: '藏青鳞甲与古董白腹鳞，低温体质，龙尾总在地面拖出细微火痕。',
    personality: '冷静、克制、像在观察病灶一样观察世界。',
    abilities: ['望闻问切', '临床处方', '隔离区', '不灭之火·双生形态'],
    lineage: '上古神龙基因融合体，编号 190071。',
    quote: '病不是消失，只是换了一种活法。'
  },
  {
    slug: 'lan-bu',
    name: '岚步',
    title: '邪神共生 · 狼兽人',
    appearance: '灰毛壮躯，肩背如城墙，眼底偶尔掠过不属于人间的红光。',
    personality: '表面迟钝憨厚，战斗时却像被深渊亲自牵引。',
    abilities: ['危险派对', '危险感知', '邪神共生', '狼群呼唤', '月夜狂暴'],
    lineage: '神狼基因与少量神龙基因融合，宿有上古邪神。',
    quote: '我闻得到恐惧，也闻得到谎言。'
  },
  {
    slug: 'poxiao',
    name: '破晓',
    title: '王压调制 · 狮子兽人',
    appearance: '金鬃与长身影，杯子从不离手，像一头披着西装的猛兽。',
    personality: '沉稳、好面子、护短，愤怒时有王者般的荒诞威严。',
    abilities: ['情绪气味捕捉', '羞辱之力', '金钱子弹', '狮王领域', '王之宝藏'],
    lineage: '纯狮系王族血脉，团队年长者。',
    quote: '你可以嘲笑我，但别嘲笑我的杯子。'
  },
  {
    slug: 'canglan',
    name: '苍蓝',
    title: '深海具象 · 鲨鱼兽人',
    appearance: '灰蓝皮肤与旧伤，尾鳍上有像星图一样的裂纹。',
    personality: '寡言、温柔、悲伤时会盯着光源发呆。',
    abilities: ['墨染之手', '苍涛拳', '具象幻想', '深海之主', '流体化'],
    lineage: '鲨系变体，和星辰鱼建立共振链接。',
    quote: '水会记得每一道伤，也会抚平它。'
  },
  {
    slug: 'drake',
    name: '德拉克',
    title: '黄金风压 · 西方龙',
    appearance: '深红鳞片与巨翼，飞行时留下细碎金屑般的轨迹。',
    personality: '贪财、张扬、但关键时刻愿意把宝库砸给同伴。',
    abilities: ['飞行', '西方龙息', '金币感应', '黄金之翼', '龙之宝库'],
    lineage: '西方龙支系，受财神眷顾。',
    quote: '钱会发光，命也会。都得攥紧。'
  }
];

export const dragonOffspring = [
  { name: '蓝蓝', power: '海空双栖，声呐定位，召唤鱼群。' },
  { name: '灰灰', power: '超远距追踪气味，并嗅出“价值”波动。' },
  { name: '金金', power: '感知情绪并擦除负面心绪，短暂黄金化。' },
  { name: '暗暗', power: '再生触手与弱意识操控，能直连邪神。' },
  { name: '亮亮', power: '调光与招财幻象，照见财富流向。' },
  { name: '黑金', power: '暗金辉光，短开阴间小门，播撒恐惧。' }
];

export const uncannyItems = [
  {
    name: '裂纹搪瓷杯',
    behavior: '外表普通，倒入热饮会回放昨天说过的一句话。'
  },
  {
    name: '旧式收银机',
    behavior: '每当无人注视时，金额会自行补成整百。'
  },
  {
    name: '咖啡馆门铃',
    behavior: '凌晨三点会响一次，但门外永远空无一人。'
  },
  {
    name: '白炽灯',
    behavior: '光线会追随最紧张的人，而不是固定照向天花板。'
  }
];
