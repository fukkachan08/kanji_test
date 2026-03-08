// モンスターデータ
// questType: "reading"（読み問題）, "meaning"（意味問題）, "puzzle"（パーツパズル）

export const monsters = [
  // フロア1: さんずいの洞窟（水系）
  {
    id: "monster_001",
    kanjiId: "kanji_001",
    name: "海のスライム",
    emoji: "🌊",
    hp: 40,
    attackPower: 10,
    dropPart: { label: "氵", color: "#FF6B6B" },
    questType: "reading",
    dungeonFloor: 1
  },
  {
    id: "monster_002",
    kanjiId: "kanji_002",
    name: "河童",
    emoji: "🐸",
    hp: 50,
    attackPower: 12,
    dropPart: { label: "氵", color: "#FF6B6B" },
    questType: "meaning",
    dungeonFloor: 1
  },
  {
    id: "monster_003",
    kanjiId: "kanji_003",
    name: "池の精霊",
    emoji: "💧",
    hp: 45,
    attackPower: 11,
    dropPart: { label: "也", color: "#4ECDC4" },
    questType: "puzzle",
    dungeonFloor: 1
  },
  {
    id: "monster_004",
    kanjiId: "kanji_004",
    name: "水竜",
    emoji: "🐉",
    hp: 80,
    attackPower: 18,
    dropPart: { label: "永", color: "#4ECDC4" },
    questType: "reading",
    dungeonFloor: 1,
    isBoss: true
  },
  // フロア2: 炎の山（火系）
  {
    id: "monster_005",
    kanjiId: "kanji_005",
    name: "炎のオーガ",
    emoji: "👹",
    hp: 60,
    attackPower: 15,
    dropPart: { label: "火", color: "#FF6B6B" },
    questType: "reading",
    dungeonFloor: 2
  },
  {
    id: "monster_006",
    kanjiId: "kanji_006",
    name: "焼きゴブリン",
    emoji: "🔥",
    hp: 55,
    attackPower: 14,
    dropPart: { label: "火", color: "#FF6B6B" },
    questType: "meaning",
    dungeonFloor: 2
  },
  {
    id: "monster_007",
    kanjiId: "kanji_007",
    name: "煙の魔人",
    emoji: "💨",
    hp: 65,
    attackPower: 16,
    dropPart: { label: "因", color: "#4ECDC4" },
    questType: "puzzle",
    dungeonFloor: 2
  },
  {
    id: "monster_008",
    kanjiId: "kanji_005",
    name: "炎王フレイム",
    emoji: "😈",
    hp: 100,
    attackPower: 22,
    dropPart: { label: "火", color: "#FFE66D" },
    questType: "puzzle",
    dungeonFloor: 2,
    isBoss: true
  },
  // フロア3: 深緑の森（木系）
  {
    id: "monster_009",
    kanjiId: "kanji_008",
    name: "森のトレント",
    emoji: "🌲",
    hp: 70,
    attackPower: 14,
    dropPart: { label: "木", color: "#FFE66D" },
    questType: "reading",
    dungeonFloor: 3
  },
  {
    id: "monster_010",
    kanjiId: "kanji_009",
    name: "林のエルフ",
    emoji: "🧝",
    hp: 55,
    attackPower: 12,
    dropPart: { label: "木", color: "#FF6B6B" },
    questType: "meaning",
    dungeonFloor: 3
  },
  {
    id: "monster_011",
    kanjiId: "kanji_010",
    name: "村のゴーレム",
    emoji: "🗿",
    hp: 80,
    attackPower: 16,
    dropPart: { label: "寸", color: "#4ECDC4" },
    questType: "puzzle",
    dungeonFloor: 3
  },
  {
    id: "monster_012",
    kanjiId: "kanji_008",
    name: "古代樹の精",
    emoji: "🌳",
    hp: 120,
    attackPower: 20,
    dropPart: { label: "林", color: "#A8E6CF" },
    questType: "reading",
    dungeonFloor: 3,
    isBoss: true
  },
  // フロア4: 人里（人系）
  {
    id: "monster_013",
    kanjiId: "kanji_011",
    name: "休息の影",
    emoji: "👤",
    hp: 50,
    attackPower: 13,
    dropPart: { label: "亻", color: "#FF6B6B" },
    questType: "reading",
    dungeonFloor: 4
  },
  {
    id: "monster_014",
    kanjiId: "kanji_012",
    name: "体術マスター",
    emoji: "🥋",
    hp: 65,
    attackPower: 18,
    dropPart: { label: "本", color: "#4ECDC4" },
    questType: "meaning",
    dungeonFloor: 4
  },
  {
    id: "monster_015",
    kanjiId: "kanji_013",
    name: "作り手の幽霊",
    emoji: "👻",
    hp: 60,
    attackPower: 15,
    dropPart: { label: "乍", color: "#4ECDC4" },
    questType: "puzzle",
    dungeonFloor: 4
  },
  {
    id: "monster_016",
    kanjiId: "kanji_012",
    name: "人形遣い",
    emoji: "🎭",
    hp: 130,
    attackPower: 24,
    dropPart: { label: "亻", color: "#FF6B6B" },
    questType: "puzzle",
    dungeonFloor: 4,
    isBoss: true
  },
  // フロア5: 言霊の塔（言系）
  {
    id: "monster_017",
    kanjiId: "kanji_014",
    name: "話すオウム",
    emoji: "🦜",
    hp: 55,
    attackPower: 14,
    dropPart: { label: "言", color: "#FF6B6B" },
    questType: "reading",
    dungeonFloor: 5
  },
  {
    id: "monster_018",
    kanjiId: "kanji_015",
    name: "読書の魔女",
    emoji: "🧙‍♀️",
    hp: 70,
    attackPower: 17,
    dropPart: { label: "売", color: "#4ECDC4" },
    questType: "meaning",
    dungeonFloor: 5
  },
  {
    id: "monster_019",
    kanjiId: "kanji_016",
    name: "語り部の亡霊",
    emoji: "📖",
    hp: 65,
    attackPower: 16,
    dropPart: { label: "吾", color: "#4ECDC4" },
    questType: "puzzle",
    dungeonFloor: 5
  },
  {
    id: "monster_020",
    kanjiId: "kanji_016",
    name: "言霊の王",
    emoji: "👑",
    hp: 150,
    attackPower: 28,
    dropPart: { label: "言", color: "#FFE66D" },
    questType: "reading",
    dungeonFloor: 5,
    isBoss: true
  }
];

export default monsters;
