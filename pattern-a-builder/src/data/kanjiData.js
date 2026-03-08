// 中学1年配当漢字のパーツデータ
// カラーコード定義
// へん（左側パーツ）: #FF6B6B
// つくり（右側パーツ）: #4ECDC4
// かんむり（上部パーツ）: #FFE66D
// あし（下部パーツ）: #A8E6CF
// かこい/にょう（囲む・折れるパーツ）: #C3B1E1
// 独体字（分解できない漢字）: #B0BEC5

export const kanjiList = [
  {
    id: "kanji_001",
    character: "清",
    reading: "きよ（い）/ セイ",
    meaning: "きれい・澄んでいる",
    parts: [
      { id: "p1", label: "さんずい", type: "hen", display: "氵", color: "#FF6B6B" },
      { id: "p2", label: "青", type: "tsukuri", display: "青", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "水（さんずい）が青い空を映して、透き通るほどきれいな様子。",
    hint: "さんずいは水に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_002",
    character: "話",
    reading: "はな（す）/ ワ",
    meaning: "話をする・言葉を交わす",
    parts: [
      { id: "p1", label: "ごんべん", type: "hen", display: "言", color: "#FF6B6B" },
      { id: "p2", label: "舌", type: "tsukuri", display: "舌", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "言葉（ごんべん）と舌を使って、人と話をする様子。",
    hint: "ごんべんは言葉に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_003",
    character: "思",
    reading: "おも（う）/ シ",
    meaning: "心で考える",
    parts: [
      { id: "p1", label: "田", type: "kanmuri", display: "田", color: "#FFE66D" },
      { id: "p2", label: "心", type: "ashi", display: "心", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "田んぼ（頭）で心を使って、物事を思い考える。",
    hint: "上下に分かれる漢字だよ"
  },
  {
    id: "kanji_004",
    character: "花",
    reading: "はな / カ",
    meaning: "植物の花",
    parts: [
      { id: "p1", label: "くさかんむり", type: "kanmuri", display: "艹", color: "#FFE66D" },
      { id: "p2", label: "化", type: "ashi", display: "化", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "草（くさかんむり）が変化（化）して美しい花になる。",
    hint: "くさかんむりは植物に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_005",
    character: "時",
    reading: "とき / ジ",
    meaning: "時間・とき",
    parts: [
      { id: "p1", label: "日", type: "hen", display: "日", color: "#FF6B6B" },
      { id: "p2", label: "寺", type: "tsukuri", display: "寺", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "太陽（日）がお寺の上を通り過ぎる、時の流れ。",
    hint: "日へんは太陽や時間に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_006",
    character: "間",
    reading: "あいだ / カン・ケン",
    meaning: "すきま・あいだ",
    parts: [
      { id: "p1", label: "もんがまえ", type: "kakoi", display: "門", color: "#C3B1E1" },
      { id: "p2", label: "日", type: "tsukuri", display: "日", color: "#4ECDC4" }
    ],
    layout: "surround",
    story: "門の間から太陽（日）の光が差し込む隙間。",
    hint: "もんがまえは門で囲むパーツだよ"
  },
  {
    id: "kanji_007",
    character: "国",
    reading: "くに / コク",
    meaning: "国・くに",
    parts: [
      { id: "p1", label: "くにがまえ", type: "kakoi", display: "囗", color: "#C3B1E1" },
      { id: "p2", label: "玉", type: "tsukuri", display: "玉", color: "#4ECDC4" }
    ],
    layout: "surround",
    story: "囲い（くにがまえ）の中に大切な玉（宝）を守る国。",
    hint: "くにがまえは四角く囲むパーツだよ"
  },
  {
    id: "kanji_008",
    character: "読",
    reading: "よ（む）/ ドク",
    meaning: "文字を読む",
    parts: [
      { id: "p1", label: "ごんべん", type: "hen", display: "言", color: "#FF6B6B" },
      { id: "p2", label: "売", type: "tsukuri", display: "売", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "言葉（ごんべん）を売り買いするように、本を読む。",
    hint: "ごんべんは言葉に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_009",
    character: "聞",
    reading: "き（く）/ ブン・モン",
    meaning: "音を聞く",
    parts: [
      { id: "p1", label: "もんがまえ", type: "kakoi", display: "門", color: "#C3B1E1" },
      { id: "p2", label: "耳", type: "tsukuri", display: "耳", color: "#4ECDC4" }
    ],
    layout: "surround",
    story: "門の中で耳を澄まして、外の音を聞く様子。",
    hint: "もんがまえの中に耳が入っているよ"
  },
  {
    id: "kanji_010",
    character: "語",
    reading: "かた（る）/ ゴ",
    meaning: "言葉・語る",
    parts: [
      { id: "p1", label: "ごんべん", type: "hen", display: "言", color: "#FF6B6B" },
      { id: "p2", label: "吾", type: "tsukuri", display: "吾", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "言葉（ごんべん）で自分（吾）の思いを語る。",
    hint: "ごんべんは言葉に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_011",
    character: "池",
    reading: "いけ / チ",
    meaning: "水がたまった池",
    parts: [
      { id: "p1", label: "さんずい", type: "hen", display: "氵", color: "#FF6B6B" },
      { id: "p2", label: "也", type: "tsukuri", display: "也", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "水（さんずい）がたまっている場所が池。",
    hint: "さんずいは水に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_012",
    character: "草",
    reading: "くさ / ソウ",
    meaning: "草・植物",
    parts: [
      { id: "p1", label: "くさかんむり", type: "kanmuri", display: "艹", color: "#FFE66D" },
      { id: "p2", label: "早", type: "ashi", display: "早", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "草は早く生える植物。春になると早く芽を出す。",
    hint: "くさかんむりは植物に関係する漢字だよ"
  },
  {
    id: "kanji_013",
    character: "森",
    reading: "もり / シン",
    meaning: "木がたくさん生えた森",
    parts: [
      { id: "p1", label: "木", type: "kanmuri", display: "木", color: "#FFE66D" },
      { id: "p2", label: "林", type: "ashi", display: "林", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "木が一本、その下に林があると、大きな森になる。",
    hint: "木が3つで森だよ"
  },
  {
    id: "kanji_014",
    character: "明",
    reading: "あか（るい）/ メイ・ミョウ",
    meaning: "明るい・光",
    parts: [
      { id: "p1", label: "日", type: "hen", display: "日", color: "#FF6B6B" },
      { id: "p2", label: "月", type: "tsukuri", display: "月", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "太陽（日）と月が一緒に輝いて、とても明るい。",
    hint: "日と月で明るいを表すよ"
  },
  {
    id: "kanji_015",
    character: "海",
    reading: "うみ / カイ",
    meaning: "海・大きな水",
    parts: [
      { id: "p1", label: "さんずい", type: "hen", display: "氵", color: "#FF6B6B" },
      { id: "p2", label: "毎", type: "tsukuri", display: "毎", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "水（さんずい）が毎日広がっている場所が海。",
    hint: "さんずいは水に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_016",
    character: "空",
    reading: "そら / クウ",
    meaning: "空・からっぽ",
    parts: [
      { id: "p1", label: "うかんむり", type: "kanmuri", display: "宀", color: "#FFE66D" },
      { id: "p2", label: "工", type: "ashi", display: "工", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "屋根（うかんむり）の上に広がる工夫された自然が空。",
    hint: "うかんむりは家や屋根に関係するよ"
  },
  {
    id: "kanji_017",
    character: "遠",
    reading: "とお（い）/ エン",
    meaning: "遠い・はるか",
    parts: [
      { id: "p1", label: "しんにょう", type: "nyou", display: "辶", color: "#C3B1E1" },
      { id: "p2", label: "袁", type: "tsukuri", display: "袁", color: "#4ECDC4" }
    ],
    layout: "surround",
    story: "しんにょうは道を進むこと。遠くまで進んでいく様子。",
    hint: "しんにょうは動きや道に関係するよ"
  },
  {
    id: "kanji_018",
    character: "近",
    reading: "ちか（い）/ キン",
    meaning: "近い・そば",
    parts: [
      { id: "p1", label: "しんにょう", type: "nyou", display: "辶", color: "#C3B1E1" },
      { id: "p2", label: "斤", type: "tsukuri", display: "斤", color: "#4ECDC4" }
    ],
    layout: "surround",
    story: "しんにょうで少し（斤）だけ進む、近い距離。",
    hint: "しんにょうは動きや道に関係するよ"
  },
  {
    id: "kanji_019",
    character: "道",
    reading: "みち / ドウ",
    meaning: "道・みち",
    parts: [
      { id: "p1", label: "しんにょう", type: "nyou", display: "辶", color: "#C3B1E1" },
      { id: "p2", label: "首", type: "tsukuri", display: "首", color: "#4ECDC4" }
    ],
    layout: "surround",
    story: "頭（首）を向けて進んでいく道。",
    hint: "しんにょうは動きや道に関係するよ"
  },
  {
    id: "kanji_020",
    character: "理",
    reading: "ことわり / リ",
    meaning: "道理・すじみち",
    parts: [
      { id: "p1", label: "おうへん", type: "hen", display: "王", color: "#FF6B6B" },
      { id: "p2", label: "里", type: "tsukuri", display: "里", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "王様が里（村）を治める道理。",
    hint: "おうへんは王や宝石に関係するよ"
  },
  {
    id: "kanji_021",
    character: "記",
    reading: "しる（す）/ キ",
    meaning: "記す・書き記す",
    parts: [
      { id: "p1", label: "ごんべん", type: "hen", display: "言", color: "#FF6B6B" },
      { id: "p2", label: "己", type: "tsukuri", display: "己", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "言葉（ごんべん）で自分（己）のことを書き記す。",
    hint: "ごんべんは言葉に関係する漢字によく使われるよ"
  },
  {
    id: "kanji_022",
    character: "雪",
    reading: "ゆき / セツ",
    meaning: "雪・白い結晶",
    parts: [
      { id: "p1", label: "あめかんむり", type: "kanmuri", display: "雨", color: "#FFE66D" },
      { id: "p2", label: "ヨ", type: "ashi", display: "ヨ", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "雨が冷えて、白い雪になって降ってくる。",
    hint: "あめかんむりは天気に関係する漢字だよ"
  },
  {
    id: "kanji_023",
    character: "電",
    reading: "でんき / デン",
    meaning: "電気・いなずま",
    parts: [
      { id: "p1", label: "あめかんむり", type: "kanmuri", display: "雨", color: "#FFE66D" },
      { id: "p2", label: "电", type: "ashi", display: "电", color: "#A8E6CF" }
    ],
    layout: "topbottom",
    story: "雨雲から稲妻（電気）が走る様子。",
    hint: "あめかんむりは天気に関係する漢字だよ"
  },
  {
    id: "kanji_024",
    character: "歌",
    reading: "うた / カ",
    meaning: "歌・うたう",
    parts: [
      { id: "p1", label: "哥", type: "hen", display: "哥", color: "#FF6B6B" },
      { id: "p2", label: "欠", type: "tsukuri", display: "欠", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "兄（哥）が口を開けて（欠）歌を歌う様子。",
    hint: "欠は口を開ける様子を表すよ"
  },
  {
    id: "kanji_025",
    character: "親",
    reading: "おや / シン",
    meaning: "親・身近な人",
    parts: [
      { id: "p1", label: "立木", type: "hen", display: "立木", color: "#FF6B6B" },
      { id: "p2", label: "見", type: "tsukuri", display: "見", color: "#4ECDC4" }
    ],
    layout: "leftright",
    story: "木の上に立って、子供を見守る親の姿。",
    hint: "見は見ることを表すよ"
  }
];

// ダミーパーツ（正解に含まれないパーツ）
export const dummyParts = [
  { id: "dummy_1", label: "にんべん", type: "hen", display: "亻", color: "#FF6B6B" },
  { id: "dummy_2", label: "てへん", type: "hen", display: "扌", color: "#FF6B6B" },
  { id: "dummy_3", label: "きへん", type: "hen", display: "木", color: "#FF6B6B" },
  { id: "dummy_4", label: "火", type: "tsukuri", display: "火", color: "#4ECDC4" },
  { id: "dummy_5", label: "山", type: "tsukuri", display: "山", color: "#4ECDC4" },
  { id: "dummy_6", label: "川", type: "tsukuri", display: "川", color: "#4ECDC4" },
  { id: "dummy_7", label: "たけかんむり", type: "kanmuri", display: "竹", color: "#FFE66D" },
  { id: "dummy_8", label: "力", type: "ashi", display: "力", color: "#A8E6CF" },
  { id: "dummy_9", label: "口", type: "tsukuri", display: "口", color: "#4ECDC4" },
  { id: "dummy_10", label: "石", type: "tsukuri", display: "石", color: "#4ECDC4" }
];
