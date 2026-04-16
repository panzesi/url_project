
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
    text: "在比赛的最后30秒，你们队落后1分，球在你手上，你会？",
    options: [
      {
        id: "a",
        text: "直接干拔三分，一剑封喉",
        personalityPoints: { threePoint: 3, clutch: 2, scorer: 1 }
      },
      {
        id: "b",
        text: "突破杀向篮下，制造犯规或上篮",
        personalityPoints: { driver: 3, scorer: 2, clutch: 1 }
      },
      {
        id: "c",
        text: "找空位的队友，相信他们能投进",
        personalityPoints: { playmaker: 3, teamPlayer: 2 }
      },
      {
        id: "d",
        text: "稳住节奏，寻找最佳机会",
        personalityPoints: { rhythm: 3, smart: 2 }
      }
    ]
  },
  {
    id: 2,
    text: "你最喜欢的球场位置是？",
    options: [
      {
        id: "a",
        text: "控球后卫，掌控全局",
        personalityPoints: { playmaker: 3, rhythm: 2, smart: 1 }
      },
      {
        id: "b",
        text: "得分后卫，疯狂得分",
        personalityPoints: { scorer: 3, threePoint: 2, driver: 1 }
      },
      {
        id: "c",
        text: "前锋，能里能外",
        personalityPoints: { allAround: 3, versatile: 2 }
      },
      {
        id: "d",
        text: "中锋，内线霸主",
        personalityPoints: { bigMan: 3, defender: 2, rebounder: 1 }
      }
    ]
  },
  {
    id: 3,
    text: "在防守端，你更注重什么？",
    options: [
      {
        id: "a",
        text: "锁死对方的头号得分手",
        personalityPoints: { defender: 3, lockdown: 2 }
      },
      {
        id: "b",
        text: "保护篮板球，守护篮筐",
        personalityPoints: { rebounder: 3, bigMan: 2, defender: 1 }
      },
      {
        id: "c",
        text: "抢断快攻，转换得分",
        personalityPoints: { thief: 2, driver: 2, scorer: 1 }
      },
      {
        id: "d",
        text: "团队协防，补位意识",
        personalityPoints: { teamPlayer: 3, smart: 2, defender: 1 }
      }
    ]
  },
  {
    id: 4,
    text: "队友传球给你，你在三分线外空位，你会？",
    options: [
      {
        id: "a",
        text: "毫不犹豫，果断出手",
        personalityPoints: { threePoint: 3, shooter: 2, confident: 1 }
      },
      {
        id: "b",
        text: "假动作晃一下，突破进去",
        personalityPoints: { driver: 3, smart: 2, scorer: 1 }
      },
      {
        id: "c",
        text: "观察队友位置，寻找更好机会",
        personalityPoints: { playmaker: 3, teamPlayer: 2 }
      },
      {
        id: "d",
        text: "运球调整节奏，中距离出手",
        personalityPoints: { rhythm: 2, scorer: 2, smart: 1 }
      }
    ]
  },
  {
    id: 5,
    text: "你的打球风格更像哪位球星？",
    options: [
      {
        id: "a",
        text: "库里 - 三分如雨",
        personalityPoints: { threePoint: 3, shooter: 2, rhythm: 1 }
      },
      {
        id: "b",
        text: "詹姆斯 - 全能战士",
        personalityPoints: { allAround: 3, playmaker: 2, leader: 1 }
      },
      {
        id: "c",
        text: "科比 - 杀手本色",
        personalityPoints: { scorer: 3, clutch: 2, killer: 1 }
      },
      {
        id: "d",
        text: "奥尼尔 - 内线霸主",
        personalityPoints: { bigMan: 3, dominant: 2, rebounder: 1 }
      }
    ]
  },
  {
    id: 6,
    text: "在快攻中，你带球前场3打2，你会？",
    options: [
      {
        id: "a",
        text: "自己杀筐，劲爆扣篮",
        personalityPoints: { driver: 3, athletic: 2, scorer: 1 }
      },
      {
        id: "b",
        text: "传给跟进的队友，轻松得分",
        personalityPoints: { playmaker: 3, teamPlayer: 2, unselfish: 1 }
      },
      {
        id: "c",
        text: "吸引防守，分给底角三分",
        personalityPoints: { smart: 2, playmaker: 2, threePoint: 1 }
      },
      {
        id: "d",
        text: "减速控制节奏，打成功率",
        personalityPoints: { rhythm: 3, smart: 2, patient: 1 }
      }
    ]
  },
  {
    id: 7,
    text: "你最看重的篮球品质是？",
    options: [
      {
        id: "a",
        text: "团队配合，无私分享",
        personalityPoints: { teamPlayer: 3, playmaker: 2, unselfish: 1 }
      },
      {
        id: "b",
        text: "关键时刻，挺身而出",
        personalityPoints: { clutch: 3, killer: 2, leader: 1 }
      },
      {
        id: "c",
        text: "防守强硬，永不放弃",
        personalityPoints: { defender: 3, tough: 2, lockdown: 1 }
      },
      {
        id: "d",
        text: "得分能力，统治比赛",
        personalityPoints: { scorer: 3, dominant: 2, confident: 1 }
      }
    ]
  },
  {
    id: 8,
    text: "在训练中，你最喜欢练习什么？",
    options: [
      {
        id: "a",
        text: "三分球投篮，百发百中",
        personalityPoints: { threePoint: 3, shooter: 2, dedicated: 1 }
      },
      {
        id: "b",
        text: "内线脚步和勾手",
        personalityPoints: { bigMan: 3, postMove: 2, skilled: 1 }
      },
      {
        id: "c",
        text: "传球视野和控球",
        personalityPoints: { playmaker: 3, ballHandler: 2, smart: 1 }
      },
      {
        id: "d",
        text: "防守脚步和体能",
        personalityPoints: { defender: 3, tough: 2, lockdown: 1 }
      }
    ]
  },
  {
    id: 9,
    text: "比赛中遇到比你高大的对手防守你，你会？",
    options: [
      {
        id: "a",
        text: "利用速度突破他",
        personalityPoints: { driver: 3, athletic: 2, scorer: 1 }
      },
      {
        id: "b",
        text: "在外线投篮，拉开空间",
        personalityPoints: { threePoint: 2, shooter: 2, smart: 1 }
      },
      {
        id: "c",
        text: "传球给队友，创造机会",
        personalityPoints: { playmaker: 3, teamPlayer: 2, smart: 1 }
      },
      {
        id: "d",
        text: "用节奏和技巧戏耍他",
        personalityPoints: { rhythm: 3, ballHandler: 2, smart: 1 }
      }
    ]
  },
  {
    id: 10,
    text: "你认为赢球最重要的因素是？",
    options: [
      {
        id: "a",
        text: "超强的个人得分能力",
        personalityPoints: { scorer: 3, dominant: 2, killer: 1 }
      },
      {
        id: "b",
        text: "铜墙铁壁般的防守",
        personalityPoints: { defender: 3, tough: 2, lockdown: 1 }
      },
      {
        id: "c",
        text: "流畅的团队配合",
        personalityPoints: { teamPlayer: 3, playmaker: 2, unselfish: 1 }
      },
      {
        id: "d",
        text: "关键时刻的大心脏",
        personalityPoints: { clutch: 3, killer: 2, leader: 1 }
      }
    ]
  }
];
