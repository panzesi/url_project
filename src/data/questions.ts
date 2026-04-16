
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  personalityPoints: Record<string, number>;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "在游戏的关键团战时，你会选择哪种方式参与？",
    options: [
      {
        id: "a",
        text: "冲锋在前，独自切入敌方后排",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "保护队友，站在后排为他们挡技能",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "灵活走位，寻找机会骚扰敌人",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "在远处观察，等待最佳时机",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "你最喜欢的游戏风格是？",
    options: [
      {
        id: "a",
        text: "追求极限操作，秀翻全场",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "稳扎稳打，确保团队胜利",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "出其不意，玩弄敌人于股掌之间",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "冷静分析，寻找敌人弱点",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "当队友失误导致团战失败时，你会怎么做？",
    options: [
      {
        id: "a",
        text: "鼓励队友，一起分析问题",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "b",
        text: "保持沉默，专注于下一场战斗",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      },
      {
        id: "c",
        text: "用幽默的方式化解尴尬",
        personalityPoints: { optimistic: 3, energetic: 2, brave: 1 }
      },
      {
        id: "d",
        text: "用魅力感染队友，重新振作",
        personalityPoints: { charming: 3, social: 2, elegant: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "你更倾向于选择哪种类型的英雄？",
    options: [
      {
        id: "a",
        text: "刺客型英雄，追求瞬间爆发",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "坦克型英雄，保护队友",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "法师型英雄，控制和消耗",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      },
      {
        id: "d",
        text: "射手型英雄，远程输出",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "在游戏中遇到逆风局，你会怎么做？",
    options: [
      {
        id: "a",
        text: "鼓励队友，永不放弃",
        personalityPoints: { optimistic: 3, energetic: 2, brave: 1 }
      },
      {
        id: "b",
        text: "专注于自己的发育，寻找翻盘机会",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      },
      {
        id: "c",
        text: "分析局势，制定防守策略",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      },
      {
        id: "d",
        text: "用幽默的方式缓解压力",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "你认为游戏中最重要的品质是什么？",
    options: [
      {
        id: "a",
        text: "个人能力和操作",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "团队合作和沟通",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "战略思维和分析",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      },
      {
        id: "d",
        text: "乐观心态和韧性",
        personalityPoints: { optimistic: 3, energetic: 2, brave: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "在游戏中，你更喜欢哪种玩法？",
    options: [
      {
        id: "a",
        text: "单带推塔，牵制敌人",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "抱团推进，集体行动",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "野区游走，寻找机会",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "线上发育，稳健提升",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "当你获得优势时，你会怎么做？",
    options: [
      {
        id: "a",
        text: "乘胜追击，扩大优势",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "稳健运营，确保胜利",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      },
      {
        id: "c",
        text: "分享资源，帮助队友",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "d",
        text: "戏弄敌人，享受游戏",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "你更喜欢哪种游戏环境？",
    options: [
      {
        id: "a",
        text: "充满挑战和竞争的环境",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "和谐友好的团队氛围",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "轻松愉快的游戏体验",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "安静专注的游戏环境",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "你认为游戏的意义是什么？",
    options: [
      {
        id: "a",
        text: "挑战自我，追求极限",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "结交朋友，团队合作",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "放松心情，享受乐趣",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "锻炼思维，提升策略",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  }
];
