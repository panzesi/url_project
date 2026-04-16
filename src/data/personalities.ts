
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
    id: "threePoint",
    name: "三分雨神",
    emoji: "🎯",
    description: "你是球场的狙击手！三分线外就是你的领地，无论防守多么严密，你总能找到出手空间，用一记记精准的三分雨打垮对手的信心。你是现代篮球的宠儿，拉开空间的专家！",
    strengths: ["精准的远投能力", "出色的投篮节奏", "强大的心理素质", "拉开空间的威胁"],
    color: "#FF6B35",
    iconName: "target",
    primaryTrait: "shooter"
  },
  {
    id: "bigMan",
    name: "内线巨兽",
    emoji: "🦍",
    description: "你是篮下的统治者！在内线你就像一头野兽，篮板球是你的囊中之物，盖帽是你的拿手好戏。对手看到你在篮下，都不敢轻易突进来。你是球队的禁区守护神！",
    strengths: ["强大的篮板能力", "出色的护筐意识", "内线得分手段", "身体对抗优势"],
    color: "#1A365D",
    iconName: "shield",
    primaryTrait: "dominant"
  },
  {
    id: "playmaker",
    name: "传球魔术师",
    emoji: "🎭",
    description: "你是球场上的指挥官！你的传球就像变魔术一样，总是能在最意想不到的时机找到空位的队友。你不贪恋出手，而是用你的视野和传球让全队都参与进来，你是真正的团队球员！",
    strengths: ["出色的传球视野", "优秀的控球技术", "无私的打球风格", "良好的篮球智商"],
    color: "#FFD93D",
    iconName: "users",
    primaryTrait: "unselfish"
  },
  {
    id: "defender",
    name: "防守铁闸",
    emoji: "🛡️",
    description: "你是对手的噩梦！你的防守就像一道铁闸，让对方的头号得分手寸步难行。你充满斗志，永不放弃，每一次防守都全力以赴。你用防守改变比赛的走势！",
    strengths: ["出色的防守意识", "坚韧的意志品质", "良好的脚步移动", "强大的比赛阅读"],
    color: "#2D3748",
    iconName: "lock",
    primaryTrait: "lockdown"
  },
  {
    id: "driver",
    name: "突破狂人",
    emoji: "⚡",
    description: "你是球场上的闪电侠！你的第一步快如闪电，突破犀利无比，对手根本跟不上你的脚步。你总是能撕裂对方的防线，杀向篮下完成得分或制造犯规。你是进攻的利器！",
    strengths: ["出色的爆发力", "犀利的突破能力", "强大的终结能力", "制造犯规的意识"],
    color: "#E53E3E",
    iconName: "zap",
    primaryTrait: "athletic"
  },
  {
    id: "rhythm",
    name: "节奏大师",
    emoji: "🎵",
    description: "你是球场上的DJ！你掌控着比赛的节奏，快慢自如，让对手跟着你的节奏走。你用你的节奏变化打乱对方的防守部署，在最舒服的节奏下得分。你是智慧型球员的代表！",
    strengths: ["优秀的节奏控制", "出色的篮球智商", "稳定的比赛节奏", "冷静的头脑"],
    color: "#805AD5",
    iconName: "music",
    primaryTrait: "smart"
  },
  {
    id: "allAround",
    name: "全能战士",
    emoji: "🦸",
    description: "你是球场上的全能战士！得分、篮板、助攻、抢断、盖帽，你样样精通。你没有明显的短板，在任何位置都能做出贡献。你是球队的万金油，哪里需要哪里搬！",
    strengths: ["全面的技术能力", "优秀的身体素质", "良好的适应能力", "无私的团队精神"],
    color: "#38B2AC",
    iconName: "star",
    primaryTrait: "versatile"
  },
  {
    id: "clutch",
    name: "关键先生",
    emoji: "💎",
    description: "你是天生的大心脏！比赛越到关键时刻，你越能挺身而出。当球队需要有人站出来时，你总是第一个挺身而出，用一记记关键球拯救球队。你是为大场面而生的球员！",
    strengths: ["强大的心理素质", "关键时刻的表现", "出色的抗压能力", "领袖气质"],
    color: "#D69E2E",
    iconName: "crown",
    primaryTrait: "killer"
  }
];

export const calculatePersonality = (scores: Record&lt;string, number&gt;): Personality =&gt; {
  const personalityScores: Record&lt;string, number&gt; = {
    threePoint: (scores.threePoint || 0) + (scores.shooter || 0),
    bigMan: (scores.bigMan || 0) + (scores.rebounder || 0) + (scores.postMove || 0),
    playmaker: (scores.playmaker || 0) + (scores.teamPlayer || 0) + (scores.unselfish || 0) + (scores.ballHandler || 0),
    defender: (scores.defender || 0) + (scores.lockdown || 0) + (scores.tough || 0),
    driver: (scores.driver || 0) + (scores.athletic || 0),
    rhythm: (scores.rhythm || 0) + (scores.smart || 0) + (scores.patient || 0),
    allAround: (scores.allAround || 0) + (scores.versatile || 0) + (scores.skilled || 0),
    clutch: (scores.clutch || 0) + (scores.killer || 0) + (scores.leader || 0)
  };

  let maxScore = -1;
  let resultId = "allAround";

  for (const [id, score] of Object.entries(personalityScores)) {
    if (score &gt; maxScore) {
      maxScore = score;
      resultId = id;
    }
  }

  return personalities.find(p =&gt; p.id === resultId) || personalities[6];
};
