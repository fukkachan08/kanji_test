// ダンジョン構造データ

export const dungeon = {
  floors: [
    {
      floor: 1,
      name: "さんずいの洞窟",
      theme: "水",
      themeColor: "#4ECDC4",
      rooms: 5,
      monsters: ["monster_001", "monster_002", "monster_003"],
      boss: "monster_004",
      bgEmoji: "🌊",
      description: "水の力が満ちる洞窟。さんずいの部首を持つ漢字の魔物が棲む。"
    },
    {
      floor: 2,
      name: "炎の山",
      theme: "火",
      themeColor: "#FF6B6B",
      rooms: 5,
      monsters: ["monster_005", "monster_006", "monster_007"],
      boss: "monster_008",
      bgEmoji: "🔥",
      description: "灼熱の炎が燃え盛る山。火にまつわる漢字の魔物が待ち構える。"
    },
    {
      floor: 3,
      name: "深緑の森",
      theme: "木",
      themeColor: "#A8E6CF",
      rooms: 5,
      monsters: ["monster_009", "monster_010", "monster_011"],
      boss: "monster_012",
      bgEmoji: "🌲",
      description: "古代の木々が生い茂る森。木偏の漢字が力を持つ。"
    },
    {
      floor: 4,
      name: "人里の迷宮",
      theme: "人",
      themeColor: "#FFE66D",
      rooms: 5,
      monsters: ["monster_013", "monster_014", "monster_015"],
      boss: "monster_016",
      bgEmoji: "🏘️",
      description: "人の念が渦巻く不思議な迷宮。にんべんの漢字が出現する。"
    },
    {
      floor: 5,
      name: "言霊の塔",
      theme: "言",
      themeColor: "#C3B1E1",
      rooms: 5,
      monsters: ["monster_017", "monster_018", "monster_019"],
      boss: "monster_020",
      bgEmoji: "🗼",
      description: "言葉の力が宿る神秘の塔。ごんべんの漢字が試練を与える。"
    }
  ]
};

// マップタイルの種類
export const tileTypes = {
  GRASS: { id: "grass", emoji: "🟩", walkable: true },
  WALL: { id: "wall", emoji: "🧱", walkable: false },
  DOOR: { id: "door", emoji: "🚪", walkable: true },
  MONSTER: { id: "monster", emoji: null, walkable: true }, // emojiはモンスターデータから
  BOSS: { id: "boss", emoji: null, walkable: true },
  PLAYER: { id: "player", emoji: "🧙", walkable: true },
  TREASURE: { id: "treasure", emoji: "📦", walkable: true },
  START: { id: "start", emoji: "🌟", walkable: true },
  EXIT: { id: "exit", emoji: "🚪", walkable: true }
};

// フロアごとのマップを生成
export const generateFloorMap = (floorNumber) => {
  // 5x5の基本マップ
  const baseMap = [
    ["wall", "wall", "wall", "wall", "wall"],
    ["wall", "grass", "grass", "grass", "wall"],
    ["wall", "grass", "grass", "grass", "wall"],
    ["wall", "grass", "grass", "grass", "wall"],
    ["wall", "wall", "wall", "wall", "wall"]
  ];

  // フロアに応じたマップバリエーション
  const maps = {
    1: [
      ["wall", "wall", "exit", "wall", "wall"],
      ["wall", "grass", "monster", "grass", "wall"],
      ["wall", "monster", "grass", "grass", "wall"],
      ["wall", "grass", "grass", "monster", "wall"],
      ["wall", "wall", "start", "wall", "wall"]
    ],
    2: [
      ["wall", "exit", "wall", "wall", "wall"],
      ["wall", "grass", "monster", "monster", "wall"],
      ["wall", "grass", "wall", "grass", "wall"],
      ["wall", "monster", "grass", "grass", "wall"],
      ["wall", "wall", "wall", "start", "wall"]
    ],
    3: [
      ["wall", "wall", "wall", "exit", "wall"],
      ["wall", "monster", "grass", "grass", "wall"],
      ["wall", "grass", "monster", "grass", "wall"],
      ["wall", "grass", "grass", "monster", "wall"],
      ["wall", "start", "wall", "wall", "wall"]
    ],
    4: [
      ["exit", "wall", "wall", "wall", "wall"],
      ["grass", "monster", "grass", "monster", "wall"],
      ["grass", "grass", "wall", "grass", "wall"],
      ["grass", "grass", "monster", "grass", "wall"],
      ["wall", "wall", "wall", "start", "wall"]
    ],
    5: [
      ["wall", "wall", "exit", "wall", "wall"],
      ["wall", "monster", "boss", "monster", "wall"],
      ["wall", "grass", "wall", "grass", "wall"],
      ["wall", "monster", "grass", "grass", "wall"],
      ["wall", "wall", "start", "wall", "wall"]
    ]
  };

  return maps[floorNumber] || baseMap;
};

export default dungeon;
