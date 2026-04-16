export interface Personality {
  id: string;
  name: string;
  emoji: string;
  description: string;
  strengths: string[];
  color: string;
  iconName: string;
  primaryTrait: string;
}

export const personalities: Personality[] = [
  {
    id: "yasuo",
    name: "疾风剑豪亚索",
    emoji: "⚔️",
    description: "你就像疾风剑豪亚索一样，自信、独立，追求自由。你喜欢挑战，不惧怕困难，总是相信自己能够克服一切。你有着独特的个人风格，不愿意被束缚，享受自由的感觉。",
    strengths: ["自信独立", "追求自由", "勇敢无畏", "独特风格"],
    color: "#7B68EE",
    iconName: "wind",
    primaryTrait: "free"
  },
  {
    id: "rammus",
    name: "披甲龙龟",
    emoji: "🐢",
    description: "你就像披甲龙龟一样，稳重、可靠，充满保护欲。你总是默默地守护着你关心的人，不计较个人得失。你虽然外表看起来有些笨拙，但内心坚定，是团队中最可靠的后盾。",
    strengths: ["稳重可靠", "保护欲强", "坚韧不拔", "默默奉献"],
    color: "#38B2AC",
    iconName: "shield",
    primaryTrait: "protective"
  },
  {
    id: "fizz",
    name: "小鱼人菲兹",
    emoji: "🐟",
    description: "你就像小鱼人菲兹一样，活泼、机智，喜欢恶作剧。你充满好奇心，总是能发现生活中的乐趣。你思维敏捷，善于应变，总能在关键时刻想出奇招解决问题。",
    strengths: ["活泼开朗", "机智灵活", "好奇心强", "善于创新"],
    color: "#4299E1",
    iconName: "fish",
    primaryTrait: "playful"
  },
  {
    id: "karthus",
    name: "死亡颂唱者·卡尔萨斯",
    emoji: "💀",
    description: "你就像死亡颂唱者卡尔萨斯一样，深沉、神秘，喜欢思考深刻的问题。你有着独特的视角，能够看到事物的本质。你虽然外表看起来有些阴暗，但内心有着自己的坚持和信念。",
    strengths: ["深沉思考", "独特视角", "坚持信念", "洞察力强"],
    color: "#4A5568",
    iconName: "music",
    primaryTrait: "deep"
  },
  {
    id: "vayne",
    name: "暗夜猎手薇恩",
    emoji: "🏹",
    description: "你就像暗夜猎手薇恩一样，专注、坚韧，目标明确。你有着强烈的意志，一旦确定目标就会全力以赴。你不怕困难和挑战，总是能够在逆境中坚持到底。",
    strengths: ["意志坚定", "目标明确", "专注投入", "逆境中成长"],
    color: "#F6AD55",
    iconName: "target",
    primaryTrait: "determined"
  },
  {
    id: "wukong",
    name: "齐天大圣孙悟空",
    emoji: "🐵",
    description: "你就像齐天大圣孙悟空一样，阳光开朗，永不言败。你充满活力，总是能够感染身边的人。你勇敢无畏，喜欢挑战权威，相信自己能够战胜一切困难。",
    strengths: ["阳光开朗", "永不言败", "充满活力", "勇敢无畏"],
    color: "#ED8936",
    iconName: "star",
    primaryTrait: "optimistic"
  },
  {
    id: "ahri",
    name: "九尾妖狐阿狸",
    emoji: "🦊",
    description: "你就像九尾妖狐阿狸一样，魅力四射，优雅迷人。你善于交际，能够轻松赢得他人的好感。你有着独特的魅力，总是能够吸引别人的注意。",
    strengths: ["魅力四射", "优雅迷人", "善于交际", "洞察力强"],
    color: "#F687B3",
    iconName: "heart",
    primaryTrait: "charming"
  },
  {
    id: "braum",
    name: "弗雷尔卓德之心布隆",
    emoji: "🛡️",
    description: "你就像弗雷尔卓德之心布隆一样，忠诚、友善，乐于助人。你总是愿意为朋友付出，是团队中最可靠的伙伴。你有着强烈的责任感，总是能够在关键时刻站出来保护他人。",
    strengths: ["忠诚可靠", "友善助人", "责任感强", "团队精神"],
    color: "#90CDF4",
    iconName: "users",
    primaryTrait: "loyal"
  }
];

export const calculatePersonality = (scores: Record<string, number>): Personality => {
  const personalityScores: Record<string, number> = {
    yasuo: (scores.free || 0) + (scores.confident || 0) + (scores.independent || 0),
    rammus: (scores.protective || 0) + (scores.reliable || 0) + (scores.stable || 0),
    fizz: (scores.playful || 0) + (scores.clever || 0) + (scores.curious || 0),
    karthus: (scores.deep || 0) + (scores.mysterious || 0) + (scores.thoughtful || 0),
    vayne: (scores.determined || 0) + (scores.focused || 0) + (scores.persistent || 0),
    wukong: (scores.optimistic || 0) + (scores.energetic || 0) + (scores.brave || 0),
    ahri: (scores.charming || 0) + (scores.social || 0) + (scores.elegant || 0),
    braum: (scores.loyal || 0) + (scores.helpful || 0) + (scores.responsible || 0)
  };

  let maxScore = -1;
  let resultId = "braum";

  for (const [id, score] of Object.entries(personalityScores)) {
    if (score > maxScore) {
      maxScore = score;
      resultId = id;
    }
  }

  return personalities.find(p => p.id === resultId) || personalities[7];
};
