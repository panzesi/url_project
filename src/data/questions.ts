
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
    text: "在召唤师峡谷中，你更愿意扮演哪种角色？",
    options: [
      {
        id: "a",
        text: "孤身一人在边路闯荡，享受1v1的乐趣",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "保护队友，为他们挡住所有伤害",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "灵活穿梭，用技巧戏耍对手",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "在黑暗中等待，给予致命一击",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 2,
    text: "当你看到敌方残血逃跑时，你会？",
    options: [
      {
        id: "a",
        text: "不顾一切追击，哪怕越塔也要击杀",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "放弃追击，回头帮助队友",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "假装撤退，然后突然回头反杀",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "冷静判断，确保安全再动手",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "在选择英雄时，你更看重什么？",
    options: [
      {
        id: "a",
        text: "帅！颜值就是正义",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "能保护队友，让团队更强大",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "好玩有趣，能整活",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "神秘莫测，让对手猜不透",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "当队友需要帮助时，你会？",
    options: [
      {
        id: "a",
        text: "用帅气的操作解决问题",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "立刻赶到，用身体挡住危险",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "用意想不到的方式帮助他们",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "先观察局势，再制定计划",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "在游戏中失利时，你会？",
    options: [
      {
        id: "a",
        text: "相信自己，下一把一定能赢",
        personalityPoints: { optimistic: 3, energetic: 2, brave: 1 }
      },
      {
        id: "b",
        text: "安慰队友，我们还有机会",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "开个玩笑，让气氛轻松起来",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "分析失败原因，下次改进",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "你最喜欢哪种击杀方式？",
    options: [
      {
        id: "a",
        text: "华丽的连招，秀翻全场",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "配合队友，一起完成击杀",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "出其不意，让对手防不胜防",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "精准打击，一击致命",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "在团队中，你希望自己是？",
    options: [
      {
        id: "a",
        text: "最亮眼的那个",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "最可靠的后盾",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "最有趣的开心果",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "最神秘的杀手锏",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "当遇到强大的对手时，你会？",
    options: [
      {
        id: "a",
        text: "兴奋不已，终于有对手了",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "保护好队友，一起应对",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "用智慧和技巧战胜他",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "仔细观察，寻找他的弱点",
        personalityPoints: { deep: 3, mysterious: 2, thoughtful: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "你希望别人怎么评价你？",
    options: [
      {
        id: "a",
        text: "他真的太帅了！",
        personalityPoints: { free: 3, confident: 2, independent: 1 }
      },
      {
        id: "b",
        text: "有他在就很安心",
        personalityPoints: { protective: 3, reliable: 2, stable: 1 }
      },
      {
        id: "c",
        text: "和他一起玩太开心了",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "他总是能抓住机会",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "在召唤师峡谷，你的终极目标是？",
    options: [
      {
        id: "a",
        text: "成为传说中的英雄",
        personalityPoints: { optimistic: 3, energetic: 2, brave: 1 }
      },
      {
        id: "b",
        text: "和伙伴们一起赢得胜利",
        personalityPoints: { loyal: 3, helpful: 2, responsible: 1 }
      },
      {
        id: "c",
        text: "玩得开心，留下有趣的回忆",
        personalityPoints: { playful: 3, clever: 2, curious: 1 }
      },
      {
        id: "d",
        text: "证明自己的实力",
        personalityPoints: { determined: 3, focused: 2, persistent: 1 }
      }
    ]
  }
];
