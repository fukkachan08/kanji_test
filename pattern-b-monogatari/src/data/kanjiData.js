// カラーコード定義
export const PART_COLORS = {
  hen: '#FF6B6B',      // へん - 漢字の左側パーツ
  tsukuri: '#4ECDC4',  // つくり - 漢字の右側パーツ
  kanmuri: '#FFE66D',  // かんむり - 漢字の上部パーツ
  ashi: '#A8E6CF',     // あし - 漢字の下部パーツ
  kakoi: '#C3B1E1',    // かこい/にょう - 囲む・折れるパーツ
  dokutai: '#B0BEC5',  // 独体字 - 分解できない漢字
};

export const PART_TYPE_LABELS = {
  hen: 'へん',
  tsukuri: 'つくり',
  kanmuri: 'かんむり',
  ashi: 'あし',
  kakoi: 'かこい',
  dokutai: '独体字',
};

export const kanjiList = [
  {
    id: "kanji_001",
    character: "森",
    reading: "もり / シン",
    meaning: "木がたくさん集まった場所",
    parts: [
      { label: "木", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "木", type: "ashi", color: PART_COLORS.ashi, position: "bottom-left" },
      { label: "木", type: "ashi", color: PART_COLORS.ashi, position: "bottom-right" }
    ],
    story: {
      scene1: "1本の木が立っています。",
      scene2: "もう1本増えました。林（はやし）になりました。",
      scene3: "さらに1本！木が3本集まると「森」のできあがり。"
    },
    etymology: "象形文字。木を3つ重ねて、多くの木＝森を表した。",
    memoryTip: "木×3＝森！数で覚えよう"
  },
  {
    id: "kanji_002",
    character: "休",
    reading: "やす(む) / キュウ",
    meaning: "体を休めること",
    parts: [
      { label: "亻", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "木", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "人（亻）が歩いています。",
      scene2: "大きな木を見つけました。",
      scene3: "木のそばで人が休んでいる。これが「休」です。"
    },
    etymology: "会意文字。人が木にもたれて休む様子を表す。",
    memoryTip: "人＋木＝木陰で休む"
  },
  {
    id: "kanji_003",
    character: "明",
    reading: "あか(るい) / メイ・ミョウ",
    meaning: "光があって見やすいこと",
    parts: [
      { label: "日", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "月", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "空に太陽（日）が輝いています。",
      scene2: "夜には月が出てきました。",
      scene3: "日と月、両方の光で世界は「明るい」！"
    },
    etymology: "会意文字。日（太陽）と月が合わさって明るさを表す。",
    memoryTip: "日＋月＝いつも明るい"
  },
  {
    id: "kanji_004",
    character: "男",
    reading: "おとこ / ダン・ナン",
    meaning: "男性のこと",
    parts: [
      { label: "田", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "力", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "広い田んぼがあります。",
      scene2: "そこで力仕事をする人がいます。",
      scene3: "田んぼで力を使う人＝「男」です。"
    },
    etymology: "会意文字。田で力仕事をする者を表す。",
    memoryTip: "田んぼで力仕事をするのが男"
  },
  {
    id: "kanji_005",
    character: "花",
    reading: "はな / カ",
    meaning: "植物の美しい部分",
    parts: [
      { label: "艹", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "化", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "草（艹）が生えています。",
      scene2: "やがて変化が起きました。",
      scene3: "草が変化して美しい「花」が咲きました。"
    },
    etymology: "形声文字。草冠＋化（変化）で、植物が変化して咲くもの。",
    memoryTip: "草が化けて花になる"
  },
  {
    id: "kanji_006",
    character: "語",
    reading: "かた(る) / ゴ",
    meaning: "言葉で話すこと",
    parts: [
      { label: "言", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "吾", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "言葉を発する「言」があります。",
      scene2: "「吾（われ）」は自分のこと。",
      scene3: "自分の言葉で話す＝「語る」です。"
    },
    etymology: "形声文字。言＋吾（音符）で、言葉を述べることを表す。",
    memoryTip: "言葉で吾（われ）を語る"
  },
  {
    id: "kanji_007",
    character: "読",
    reading: "よ(む) / ドク・トク",
    meaning: "文字を声に出すこと",
    parts: [
      { label: "言", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "売", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "言葉（言）があります。",
      scene2: "それを目で追いながら...",
      scene3: "声に出して言葉を伝える＝「読む」です。"
    },
    etymology: "形声文字。言＋売（音符）。",
    memoryTip: "言葉を目で追って読む"
  },
  {
    id: "kanji_008",
    character: "時",
    reading: "とき / ジ",
    meaning: "時間、ある瞬間",
    parts: [
      { label: "日", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "寺", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "太陽（日）が動いています。",
      scene2: "お寺の鐘が時を告げます。",
      scene3: "日の動きを寺の鐘で知る＝「時」です。"
    },
    etymology: "形声文字。日＋寺（音符）で、時間を表す。",
    memoryTip: "日が動きお寺の鐘が鳴る時"
  },
  {
    id: "kanji_009",
    character: "間",
    reading: "あいだ / カン・ケン",
    meaning: "物と物の間の空間",
    parts: [
      { label: "門", type: "kakoi", color: PART_COLORS.kakoi, position: "outer" },
      { label: "日", type: "ashi", color: PART_COLORS.ashi, position: "inner" }
    ],
    story: {
      scene1: "大きな門があります。",
      scene2: "門の隙間から光（日）が差し込みます。",
      scene3: "門の間に見える光＝「間」です。"
    },
    etymology: "会意文字。門の間から月（日）が見える様子。",
    memoryTip: "門の間から日が見える"
  },
  {
    id: "kanji_010",
    character: "聞",
    reading: "き(く) / ブン・モン",
    meaning: "耳で音を感じること",
    parts: [
      { label: "門", type: "kakoi", color: PART_COLORS.kakoi, position: "outer" },
      { label: "耳", type: "ashi", color: PART_COLORS.ashi, position: "inner" }
    ],
    story: {
      scene1: "門の前に立っています。",
      scene2: "耳を澄ませます。",
      scene3: "門の向こうの音を耳で聞く＝「聞」です。"
    },
    etymology: "会意文字。門の中で耳を使って聞く様子。",
    memoryTip: "門の中で耳を使って聞く"
  },
  {
    id: "kanji_011",
    character: "書",
    reading: "か(く) / ショ",
    meaning: "文字を記すこと",
    parts: [
      { label: "聿", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "日", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "筆（聿）を手に取ります。",
      scene2: "明るい日の下で...",
      scene3: "筆を使って文字を書く＝「書」です。"
    },
    etymology: "会意文字。筆（聿）を使って記すことを表す。",
    memoryTip: "筆を持って日の下で書く"
  },
  {
    id: "kanji_012",
    character: "話",
    reading: "はな(す) / ワ",
    meaning: "言葉で伝えること",
    parts: [
      { label: "言", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "舌", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "言葉（言）を使います。",
      scene2: "舌を動かして...",
      scene3: "言葉を舌で発する＝「話す」です。"
    },
    etymology: "形声文字。言＋舌で、言葉を発することを表す。",
    memoryTip: "言葉を舌で話す"
  },
  {
    id: "kanji_013",
    character: "新",
    reading: "あたら(しい) / シン",
    meaning: "初めてのこと、新しいもの",
    parts: [
      { label: "立", type: "hen", color: PART_COLORS.hen, position: "top-left" },
      { label: "木", type: "hen", color: PART_COLORS.hen, position: "bottom-left" },
      { label: "斤", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "木が立っています。",
      scene2: "斧（斤）で木を切ります。",
      scene3: "切り口は新鮮＝「新しい」です。"
    },
    etymology: "形声文字。木を斧で切った新鮮な切り口を表す。",
    memoryTip: "木を斧で切ると新しい面が出る"
  },
  {
    id: "kanji_014",
    character: "親",
    reading: "おや / シン",
    meaning: "父や母のこと",
    parts: [
      { label: "立", type: "hen", color: PART_COLORS.hen, position: "top-left" },
      { label: "木", type: "hen", color: PART_COLORS.hen, position: "bottom-left" },
      { label: "見", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "木の上に立っています。",
      scene2: "遠くを見渡します。",
      scene3: "子供を見守る人＝「親」です。"
    },
    etymology: "形声文字。木の上から子を見守る様子を表す。",
    memoryTip: "木の上から子を見る親"
  },
  {
    id: "kanji_015",
    character: "海",
    reading: "うみ / カイ",
    meaning: "広い塩水の場所",
    parts: [
      { label: "氵", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "毎", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "水（氵）がたくさんあります。",
      scene2: "毎日毎日、波が押し寄せます。",
      scene3: "水が毎日動く場所＝「海」です。"
    },
    etymology: "形声文字。水＋毎（音符）で、広い水を表す。",
    memoryTip: "毎日水が動く＝海"
  },
  {
    id: "kanji_016",
    character: "池",
    reading: "いけ / チ",
    meaning: "水がたまった場所",
    parts: [
      { label: "氵", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "也", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "水（氵）があります。",
      scene2: "地面のくぼみに...",
      scene3: "水がたまった場所＝「池」です。"
    },
    etymology: "形声文字。水＋也（音符）。",
    memoryTip: "水がある也（場所）＝池"
  },
  {
    id: "kanji_017",
    character: "教",
    reading: "おし(える) / キョウ",
    meaning: "知識を伝えること",
    parts: [
      { label: "孝", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "攵", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "子供に大切なことを伝えます。",
      scene2: "手（攵）を使って導きます。",
      scene3: "手で導いて知恵を伝える＝「教える」です。"
    },
    etymology: "会意文字。子に手で教え導く様子を表す。",
    memoryTip: "子を手で導いて教える"
  },
  {
    id: "kanji_018",
    character: "学",
    reading: "まな(ぶ) / ガク",
    meaning: "知識を身につけること",
    parts: [
      { label: "⺍", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "子", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "屋根の下に子供がいます。",
      scene2: "本を読んで勉強しています。",
      scene3: "子供が学ぶ場所＝「学」です。"
    },
    etymology: "会意文字。建物の中で子供が学ぶ様子。",
    memoryTip: "子供が屋根の下で学ぶ"
  },
  {
    id: "kanji_019",
    character: "校",
    reading: "こう / コウ",
    meaning: "学ぶための建物",
    parts: [
      { label: "木", type: "hen", color: PART_COLORS.hen, position: "left" },
      { label: "交", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "木で作った建物があります。",
      scene2: "人々が交わり集まります。",
      scene3: "木の建物で人が交わる＝「校」です。"
    },
    etymology: "形声文字。木＋交（音符・交わる）。",
    memoryTip: "木の建物で人が交わる＝学校"
  },
  {
    id: "kanji_020",
    character: "空",
    reading: "そら / クウ",
    meaning: "何もない上の空間",
    parts: [
      { label: "穴", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "工", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "穴から上を見上げます。",
      scene2: "そこには何もない広い空間。",
      scene3: "穴の向こうに広がる＝「空」です。"
    },
    etymology: "形声文字。穴＋工（音符）で、空虚な空間を表す。",
    memoryTip: "穴から見上げる空"
  },
  {
    id: "kanji_021",
    character: "雨",
    reading: "あめ / ウ",
    meaning: "空から降る水滴",
    parts: [
      { label: "雨", type: "dokutai", color: PART_COLORS.dokutai, position: "whole" }
    ],
    story: {
      scene1: "空に雲があります。",
      scene2: "雲から水滴が落ちてきます。",
      scene3: "上から降る水＝「雨」です。"
    },
    etymology: "象形文字。空から雨が降る様子を表す。",
    memoryTip: "空から落ちる水滴の形"
  },
  {
    id: "kanji_022",
    character: "雪",
    reading: "ゆき / セツ",
    meaning: "空から降る白い結晶",
    parts: [
      { label: "雨", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "ヨ", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "雨（雨かんむり）が降っています。",
      scene2: "でも寒いので凍りました。",
      scene3: "雨が凍った白いもの＝「雪」です。"
    },
    etymology: "会意文字。雨＋彗（掃く）で、掃くように降る雨を表す。",
    memoryTip: "雨が冷えて白くなる＝雪"
  },
  {
    id: "kanji_023",
    character: "電",
    reading: "いなずま / デン",
    meaning: "稲妻、電気のエネルギー",
    parts: [
      { label: "雨", type: "kanmuri", color: PART_COLORS.kanmuri, position: "top" },
      { label: "电", type: "ashi", color: PART_COLORS.ashi, position: "bottom" }
    ],
    story: {
      scene1: "雨雲が広がっています。",
      scene2: "突然、稲妻が走ります！",
      scene3: "雨雲から走る光＝「電」です。"
    },
    etymology: "会意文字。雨雲から稲妻が走る様子。",
    memoryTip: "雨雲からピカッと電気"
  },
  {
    id: "kanji_024",
    character: "車",
    reading: "くるま / シャ",
    meaning: "乗り物、輪のついた道具",
    parts: [
      { label: "車", type: "dokutai", color: PART_COLORS.dokutai, position: "whole" }
    ],
    story: {
      scene1: "丸い車輪があります。",
      scene2: "軸でつながっています。",
      scene3: "上から見た車輪＝「車」です。"
    },
    etymology: "象形文字。車を上から見た形を表す。",
    memoryTip: "車輪を上から見た形"
  },
  {
    id: "kanji_025",
    character: "道",
    reading: "みち / ドウ",
    meaning: "歩くための通り道",
    parts: [
      { label: "⻌", type: "kakoi", color: PART_COLORS.kakoi, position: "left-bottom" },
      { label: "首", type: "tsukuri", color: PART_COLORS.tsukuri, position: "right" }
    ],
    story: {
      scene1: "しんにょう（⻌）は歩くこと。",
      scene2: "首を上げて進みます。",
      scene3: "首を上げて歩く場所＝「道」です。"
    },
    etymology: "形声文字。歩くことを表すしんにょう＋首。",
    memoryTip: "首を上げて道を歩く"
  }
];

export default kanjiList;
