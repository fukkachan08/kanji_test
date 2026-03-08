// 漢字データ（20字以上）
// カラーコード定義:
// へん: #FF6B6B（漢字の左側パーツ）
// つくり: #4ECDC4（漢字の右側パーツ）
// かんむり: #FFE66D（漢字の上部パーツ）
// あし: #A8E6CF（漢字の下部パーツ）
// かこい/にょう: #C3B1E1（囲む・折れるパーツ）
// 独体字: #B0BEC5（分解できない漢字）

export const kanjiList = [
  // 水系（さんずい）
  {
    id: "kanji_001",
    character: "海",
    reading: "うみ / カイ",
    meaning: "広大な海",
    parts: [
      { id: "p1", label: "氵", type: "へん", display: "氵", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "毎", type: "つくり", display: "毎", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "水（氵）と毎で、どこまでも広がる海を表す。"
  },
  {
    id: "kanji_002",
    character: "河",
    reading: "かわ / カ",
    meaning: "大きな川",
    parts: [
      { id: "p1", label: "氵", type: "へん", display: "氵", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "可", type: "つくり", display: "可", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "水（氵）が流れる大きな川。"
  },
  {
    id: "kanji_003",
    character: "池",
    reading: "いけ / チ",
    meaning: "水がたまった場所",
    parts: [
      { id: "p1", label: "氵", type: "へん", display: "氵", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "也", type: "つくり", display: "也", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "水（氵）がたまっている場所。"
  },
  {
    id: "kanji_004",
    character: "泳",
    reading: "およ（ぐ） / エイ",
    meaning: "水中を進む",
    parts: [
      { id: "p1", label: "氵", type: "へん", display: "氵", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "永", type: "つくり", display: "永", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "水（氵）の中を永く進む様子。"
  },
  // 火系（ひへん・れんが）
  {
    id: "kanji_005",
    character: "炎",
    reading: "ほのお / エン",
    meaning: "燃え上がる火",
    parts: [
      { id: "p1", label: "火", type: "かんむり", display: "火", color: "#FFE66D", position: "top" },
      { id: "p2", label: "火", type: "あし", display: "火", color: "#A8E6CF", position: "bottom" }
    ],
    layout: "topbottom",
    rarity: "rare",
    story: "火が2つ重なって激しく燃える様子。"
  },
  {
    id: "kanji_006",
    character: "焼",
    reading: "や（く） / ショウ",
    meaning: "火で燃やす",
    parts: [
      { id: "p1", label: "火", type: "へん", display: "火", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "尭", type: "つくり", display: "尭", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "火で物を焼く様子。"
  },
  {
    id: "kanji_007",
    character: "煙",
    reading: "けむり / エン",
    meaning: "火から出る煙",
    parts: [
      { id: "p1", label: "火", type: "へん", display: "火", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "因", type: "つくり", display: "因垔", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "火から立ち上る煙。"
  },
  // 木系（きへん）
  {
    id: "kanji_008",
    character: "森",
    reading: "もり / シン",
    meaning: "木が多く茂る場所",
    parts: [
      { id: "p1", label: "木", type: "かんむり", display: "木", color: "#FFE66D", position: "top" },
      { id: "p2", label: "林", type: "あし", display: "林", color: "#A8E6CF", position: "bottom" }
    ],
    layout: "topbottom",
    rarity: "rare",
    story: "木が3つで、深い森を表す。"
  },
  {
    id: "kanji_009",
    character: "林",
    reading: "はやし / リン",
    meaning: "木が並ぶ場所",
    parts: [
      { id: "p1", label: "木", type: "へん", display: "木", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "木", type: "つくり", display: "木", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "木が2つ並んで林を表す。"
  },
  {
    id: "kanji_010",
    character: "村",
    reading: "むら / ソン",
    meaning: "人が住む集落",
    parts: [
      { id: "p1", label: "木", type: "へん", display: "木", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "寸", type: "つくり", display: "寸", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "木のそばに人が住む村。"
  },
  // 人系（にんべん）
  {
    id: "kanji_011",
    character: "休",
    reading: "やす（む） / キュウ",
    meaning: "体を休める",
    parts: [
      { id: "p1", label: "亻", type: "へん", display: "亻", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "木", type: "つくり", display: "木", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "人が木のそばで休む様子。"
  },
  {
    id: "kanji_012",
    character: "体",
    reading: "からだ / タイ",
    meaning: "身体",
    parts: [
      { id: "p1", label: "亻", type: "へん", display: "亻", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "本", type: "つくり", display: "本", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "人の本となる体。"
  },
  {
    id: "kanji_013",
    character: "作",
    reading: "つく（る） / サク",
    meaning: "物を作る",
    parts: [
      { id: "p1", label: "亻", type: "へん", display: "亻", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "乍", type: "つくり", display: "乍", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "人が手を動かして作る。"
  },
  // 言系（ごんべん）
  {
    id: "kanji_014",
    character: "話",
    reading: "はな（す） / ワ",
    meaning: "言葉を交わす",
    parts: [
      { id: "p1", label: "言", type: "へん", display: "言", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "舌", type: "つくり", display: "舌", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "言葉を舌で話す。"
  },
  {
    id: "kanji_015",
    character: "読",
    reading: "よ（む） / ドク",
    meaning: "文字を読む",
    parts: [
      { id: "p1", label: "言", type: "へん", display: "言", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "売", type: "つくり", display: "売", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "言葉を目で読む。"
  },
  {
    id: "kanji_016",
    character: "語",
    reading: "かた（る） / ゴ",
    meaning: "言葉・語る",
    parts: [
      { id: "p1", label: "言", type: "へん", display: "言", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "吾", type: "つくり", display: "吾", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "common",
    story: "自分（吾）の言葉を語る。"
  },
  // 金系（かねへん）
  {
    id: "kanji_017",
    character: "銀",
    reading: "ぎん / ギン",
    meaning: "白い金属",
    parts: [
      { id: "p1", label: "金", type: "へん", display: "金", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "艮", type: "つくり", display: "艮", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "rare",
    story: "輝く金属、銀。"
  },
  {
    id: "kanji_018",
    character: "鉄",
    reading: "てつ / テツ",
    meaning: "強い金属",
    parts: [
      { id: "p1", label: "金", type: "へん", display: "金", color: "#FF6B6B", position: "left" },
      { id: "p2", label: "失", type: "つくり", display: "失", color: "#4ECDC4", position: "right" }
    ],
    layout: "leftright",
    rarity: "rare",
    story: "金属の中でも強い鉄。"
  },
  // 囲み系（くにがまえ）
  {
    id: "kanji_019",
    character: "国",
    reading: "くに / コク",
    meaning: "国家・国土",
    parts: [
      { id: "p1", label: "囗", type: "かこい", display: "囗", color: "#C3B1E1", position: "surround" },
      { id: "p2", label: "玉", type: "独体字", display: "玉", color: "#B0BEC5", position: "center" }
    ],
    layout: "surround",
    rarity: "common",
    story: "宝玉を囲んで守る国。"
  },
  {
    id: "kanji_020",
    character: "園",
    reading: "その / エン",
    meaning: "庭・公園",
    parts: [
      { id: "p1", label: "囗", type: "かこい", display: "囗", color: "#C3B1E1", position: "surround" },
      { id: "p2", label: "袁", type: "独体字", display: "袁", color: "#B0BEC5", position: "center" }
    ],
    layout: "surround",
    rarity: "common",
    story: "囲われた庭園。"
  },
  // 独体字
  {
    id: "kanji_021",
    character: "山",
    reading: "やま / サン",
    meaning: "高く盛り上がった地形",
    parts: [
      { id: "p1", label: "山", type: "独体字", display: "山", color: "#B0BEC5", position: "single" }
    ],
    layout: "single",
    rarity: "common",
    story: "山の形をそのまま表した象形文字。"
  },
  {
    id: "kanji_022",
    character: "川",
    reading: "かわ / セン",
    meaning: "流れる水",
    parts: [
      { id: "p1", label: "川", type: "独体字", display: "川", color: "#B0BEC5", position: "single" }
    ],
    layout: "single",
    rarity: "common",
    story: "水が流れる様子を表した象形文字。"
  },
  {
    id: "kanji_023",
    character: "日",
    reading: "ひ / ニチ",
    meaning: "太陽・一日",
    parts: [
      { id: "p1", label: "日", type: "独体字", display: "日", color: "#B0BEC5", position: "single" }
    ],
    layout: "single",
    rarity: "common",
    story: "太陽の形を表した象形文字。"
  },
  {
    id: "kanji_024",
    character: "月",
    reading: "つき / ゲツ",
    meaning: "月・一ヶ月",
    parts: [
      { id: "p1", label: "月", type: "独体字", display: "月", color: "#B0BEC5", position: "single" }
    ],
    layout: "single",
    rarity: "common",
    story: "三日月の形を表した象形文字。"
  },
  // しんにょう系
  {
    id: "kanji_025",
    character: "道",
    reading: "みち / ドウ",
    meaning: "通る道",
    parts: [
      { id: "p1", label: "辶", type: "にょう", display: "辶", color: "#C3B1E1", position: "surround" },
      { id: "p2", label: "首", type: "独体字", display: "首", color: "#B0BEC5", position: "main" }
    ],
    layout: "nyou",
    rarity: "common",
    story: "首を向けて進む道。"
  }
];

export default kanjiList;
