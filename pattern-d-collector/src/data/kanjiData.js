// 漢字データ（中学1年配当漢字）
// カラーコード:
// へん: #FF6B6B（左側）
// つくり: #4ECDC4（右側）
// かんむり: #FFE66D（上部）
// あし: #A8E6CF（下部）
// かこい/にょう: #C3B1E1（囲む・折れる）
// 独体字: #B0BEC5（分解できない）

export const PART_COLORS = {
  hen: '#FF6B6B',      // へん（左）
  tsukuri: '#4ECDC4',  // つくり（右）
  kanmuri: '#FFE66D',  // かんむり（上）
  ashi: '#A8E6CF',     // あし（下）
  kakoi: '#C3B1E1',    // かこい/にょう
  dokutai: '#B0BEC5',  // 独体字
};

export const PART_TYPE_NAMES = {
  hen: 'へん',
  tsukuri: 'つくり',
  kanmuri: 'かんむり',
  ashi: 'あし',
  kakoi: 'かこい',
  nyou: 'にょう',
  dokutai: '独体字',
};

// ===== キャラクター要素 =====

// 属性定義
export const ELEMENTS = {
  water: { name: '水', color: '#4ECDC4', emoji: '💧' },
  fire: { name: '火', color: '#FF6B6B', emoji: '🔥' },
  wood: { name: '木', color: '#A8E6CF', emoji: '🌿' },
  earth: { name: '土', color: '#DEB887', emoji: '🪨' },
  light: { name: '光', color: '#FFE66D', emoji: '✨' },
  mind: { name: '心', color: '#C3B1E1', emoji: '💜' },
  word: { name: '言', color: '#87CEEB', emoji: '💬' },
};

// 性格タイプ
export const PERSONALITIES = {
  cheerful: { name: '元気', emoji: '😄' },
  cool: { name: 'クール', emoji: '😎' },
  gentle: { name: 'やさしい', emoji: '🥰' },
  brave: { name: '勇敢', emoji: '💪' },
  wise: { name: '知的', emoji: '🧠' },
  mysterious: { name: '神秘的', emoji: '🔮' },
};

// レア度
export const RARITIES = {
  N: { name: 'ノーマル', stars: 1, color: '#B0BEC5', glow: 'none' },
  R: { name: 'レア', stars: 2, color: '#4ECDC4', glow: '0 0 10px #4ECDC4' },
  SR: { name: 'スーパーレア', stars: 3, color: '#FFE66D', glow: '0 0 15px #FFE66D' },
  SSR: { name: 'ウルトラレア', stars: 4, color: '#FF6B6B', glow: '0 0 20px #FF6B6B' },
};

export const kanjiList = [
  // ===== さんずい（水系） =====
  {
    id: 'kanji_001',
    character: '海',
    reading: { kun: 'うみ', on: 'カイ' },
    meaning: '広い水をたたえた海',
    parts: [
      { id: 'p1', label: '氵', type: 'hen', display: '氵', color: '#FF6B6B' },
      { id: 'p2', label: '毎', type: 'tsukuri', display: '毎', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '水（氵）と毎日の毎。広大な海は毎日波が打ち寄せる。',
    emoji: '🌊',
    // キャラクター要素
    element: 'water',
    personality: 'brave',
    rarity: 'R',
    catchphrase: 'ぼくの心は海のように広いんだ！',
  },
  {
    id: 'kanji_002',
    character: '清',
    reading: { kun: 'きよ(い)', on: 'セイ' },
    meaning: 'きれい、澄んでいる',
    parts: [
      { id: 'p1', label: '氵', type: 'hen', display: '氵', color: '#FF6B6B' },
      { id: 'p2', label: '青', type: 'tsukuri', display: '青', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '水（氵）が青い空を映して、透き通るほどきれいな様子。',
    emoji: '💧',
    element: 'water',
    personality: 'gentle',
    rarity: 'N',
    catchphrase: 'きれいな心を大切にね',
  },
  {
    id: 'kanji_003',
    character: '池',
    reading: { kun: 'いけ', on: 'チ' },
    meaning: '水がたまった場所',
    parts: [
      { id: 'p1', label: '氵', type: 'hen', display: '氵', color: '#FF6B6B' },
      { id: 'p2', label: '也', type: 'tsukuri', display: '也', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '水（氵）がたまっている場所。',
    emoji: '🏞️',
    element: 'water',
    personality: 'gentle',
    rarity: 'N',
    catchphrase: 'ゆっくり休んでいってね',
  },
  {
    id: 'kanji_004',
    character: '河',
    reading: { kun: 'かわ', on: 'カ' },
    meaning: '大きな川',
    parts: [
      { id: 'p1', label: '氵', type: 'hen', display: '氵', color: '#FF6B6B' },
      { id: 'p2', label: '可', type: 'tsukuri', display: '可', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '水（氵）が流れる大きな川。',
    emoji: '🏞️',
    element: 'water',
    personality: 'cheerful',
    rarity: 'N',
    catchphrase: '流れに乗っていこう！',
  },
  {
    id: 'kanji_005',
    character: '泳',
    reading: { kun: 'およ(ぐ)', on: 'エイ' },
    meaning: '水中を進む',
    parts: [
      { id: 'p1', label: '氵', type: 'hen', display: '氵', color: '#FF6B6B' },
      { id: 'p2', label: '永', type: 'tsukuri', display: '永', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '水（氵）の中を永く進む様子。',
    emoji: '🏊',
    element: 'water',
    personality: 'cheerful',
    rarity: 'R',
    catchphrase: 'どこまでも泳いでいくよ！',
  },

  // ===== 火系 =====
  {
    id: 'kanji_006',
    character: '炎',
    reading: { kun: 'ほのお', on: 'エン' },
    meaning: '燃え上がる火',
    parts: [
      { id: 'p1', label: '火', type: 'kanmuri', display: '火', color: '#FFE66D' },
      { id: 'p2', label: '火', type: 'ashi', display: '火', color: '#A8E6CF' },
    ],
    layout: 'topbottom',
    difficulty: 2,
    story: '火が2つ重なって激しく燃える様子。',
    emoji: '🔥',
    element: 'fire',
    personality: 'brave',
    rarity: 'SR',
    catchphrase: '燃え上がれ、情熱の炎！',
  },
  {
    id: 'kanji_007',
    character: '焼',
    reading: { kun: 'や(く)', on: 'ショウ' },
    meaning: '火で燃やす',
    parts: [
      { id: 'p1', label: '火', type: 'hen', display: '火', color: '#FF6B6B' },
      { id: 'p2', label: '尭', type: 'tsukuri', display: '尭', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 2,
    story: '火で物を焼く様子。',
    emoji: '🍖',
    element: 'fire',
    personality: 'cheerful',
    rarity: 'R',
    catchphrase: 'おいしく焼けたよ！',
  },

  // ===== 木系 =====
  {
    id: 'kanji_008',
    character: '森',
    reading: { kun: 'もり', on: 'シン' },
    meaning: '木が多く茂る場所',
    parts: [
      { id: 'p1', label: '木', type: 'kanmuri', display: '木', color: '#FFE66D' },
      { id: 'p2', label: '林', type: 'ashi', display: '林', color: '#A8E6CF' },
    ],
    layout: 'topbottom',
    difficulty: 2,
    story: '木が3つで、深い森を表す。',
    emoji: '🌲',
    element: 'wood',
    personality: 'mysterious',
    rarity: 'SR',
    catchphrase: '深い森には秘密がいっぱい...',
  },
  {
    id: 'kanji_009',
    character: '林',
    reading: { kun: 'はやし', on: 'リン' },
    meaning: '木が並ぶ場所',
    parts: [
      { id: 'p1', label: '木', type: 'hen', display: '木', color: '#FF6B6B' },
      { id: 'p2', label: '木', type: 'tsukuri', display: '木', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '木が2つ並んで林を表す。',
    emoji: '🌳',
    element: 'wood',
    personality: 'gentle',
    rarity: 'N',
    catchphrase: '仲間と一緒がいちばん！',
  },
  {
    id: 'kanji_010',
    character: '村',
    reading: { kun: 'むら', on: 'ソン' },
    meaning: '人が住む集落',
    parts: [
      { id: 'p1', label: '木', type: 'hen', display: '木', color: '#FF6B6B' },
      { id: 'p2', label: '寸', type: 'tsukuri', display: '寸', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '木のそばに人が住む村。',
    emoji: '🏘️',
    element: 'earth',
    personality: 'gentle',
    rarity: 'N',
    catchphrase: 'みんなで暮らすのが楽しいね',
  },

  // ===== にんべん =====
  {
    id: 'kanji_011',
    character: '休',
    reading: { kun: 'やす(む)', on: 'キュウ' },
    meaning: '体を休める',
    parts: [
      { id: 'p1', label: '亻', type: 'hen', display: '亻', color: '#FF6B6B' },
      { id: 'p2', label: '木', type: 'tsukuri', display: '木', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '人が木のそばで休む様子。',
    emoji: '😴',
    element: 'wood',
    personality: 'gentle',
    rarity: 'N',
    catchphrase: 'たまには休もうよ〜',
  },
  {
    id: 'kanji_012',
    character: '体',
    reading: { kun: 'からだ', on: 'タイ' },
    meaning: '身体',
    parts: [
      { id: 'p1', label: '亻', type: 'hen', display: '亻', color: '#FF6B6B' },
      { id: 'p2', label: '本', type: 'tsukuri', display: '本', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '人の本となる体。',
    emoji: '🧍',
    element: 'earth',
    personality: 'brave',
    rarity: 'R',
    catchphrase: '体が資本だよ！',
  },
  {
    id: 'kanji_013',
    character: '作',
    reading: { kun: 'つく(る)', on: 'サク' },
    meaning: '物を作る',
    parts: [
      { id: 'p1', label: '亻', type: 'hen', display: '亻', color: '#FF6B6B' },
      { id: 'p2', label: '乍', type: 'tsukuri', display: '乍', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '人が手を動かして作る。',
    emoji: '🔨',
    element: 'earth',
    personality: 'cheerful',
    rarity: 'N',
    catchphrase: 'さあ、作ろう！',
  },

  // ===== ごんべん =====
  {
    id: 'kanji_014',
    character: '話',
    reading: { kun: 'はな(す)', on: 'ワ' },
    meaning: '言葉を交わす',
    parts: [
      { id: 'p1', label: '言', type: 'hen', display: '言', color: '#FF6B6B' },
      { id: 'p2', label: '舌', type: 'tsukuri', display: '舌', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '言葉を舌で話す。',
    emoji: '💬',
    element: 'word',
    personality: 'cheerful',
    rarity: 'N',
    catchphrase: 'お話しようよ！',
  },
  {
    id: 'kanji_015',
    character: '読',
    reading: { kun: 'よ(む)', on: 'ドク' },
    meaning: '文字を読む',
    parts: [
      { id: 'p1', label: '言', type: 'hen', display: '言', color: '#FF6B6B' },
      { id: 'p2', label: '売', type: 'tsukuri', display: '売', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '言葉を目で読む。',
    emoji: '📖',
    element: 'word',
    personality: 'wise',
    rarity: 'R',
    catchphrase: '本を読むのが大好きなんだ',
  },
  {
    id: 'kanji_016',
    character: '語',
    reading: { kun: 'かた(る)', on: 'ゴ' },
    meaning: '言葉・語る',
    parts: [
      { id: 'p1', label: '言', type: 'hen', display: '言', color: '#FF6B6B' },
      { id: 'p2', label: '吾', type: 'tsukuri', display: '吾', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 2,
    story: '自分（吾）の言葉を語る。',
    emoji: '🗣️',
    element: 'word',
    personality: 'wise',
    rarity: 'R',
    catchphrase: '物語を語ってあげよう',
  },

  // ===== くにがまえ =====
  {
    id: 'kanji_017',
    character: '国',
    reading: { kun: 'くに', on: 'コク' },
    meaning: '国家・国土',
    parts: [
      { id: 'p1', label: '囗', type: 'kakoi', display: '囗', color: '#C3B1E1' },
      { id: 'p2', label: '玉', type: 'dokutai', display: '玉', color: '#B0BEC5' },
    ],
    layout: 'surround',
    difficulty: 2,
    story: '宝玉を囲んで守る国。',
    emoji: '🏰',
    element: 'earth',
    personality: 'brave',
    rarity: 'SR',
    catchphrase: 'わが国を守る！',
  },
  {
    id: 'kanji_018',
    character: '園',
    reading: { kun: 'その', on: 'エン' },
    meaning: '庭・公園',
    parts: [
      { id: 'p1', label: '囗', type: 'kakoi', display: '囗', color: '#C3B1E1' },
      { id: 'p2', label: '袁', type: 'dokutai', display: '袁', color: '#B0BEC5' },
    ],
    layout: 'surround',
    difficulty: 2,
    story: '囲われた庭園。',
    emoji: '🏞️',
    element: 'wood',
    personality: 'gentle',
    rarity: 'R',
    catchphrase: '庭園でのんびりしよう',
  },

  // ===== 独体字 =====
  {
    id: 'kanji_019',
    character: '山',
    reading: { kun: 'やま', on: 'サン' },
    meaning: '高く盛り上がった地形',
    parts: [
      { id: 'p1', label: '山', type: 'dokutai', display: '山', color: '#B0BEC5' },
    ],
    layout: 'single',
    difficulty: 1,
    story: '山の形をそのまま表した象形文字。',
    emoji: '⛰️',
    element: 'earth',
    personality: 'brave',
    rarity: 'N',
    catchphrase: '山のように動じない心！',
  },
  {
    id: 'kanji_020',
    character: '川',
    reading: { kun: 'かわ', on: 'セン' },
    meaning: '流れる水',
    parts: [
      { id: 'p1', label: '川', type: 'dokutai', display: '川', color: '#B0BEC5' },
    ],
    layout: 'single',
    difficulty: 1,
    story: '水が流れる様子を表した象形文字。',
    emoji: '🏞️',
    element: 'water',
    personality: 'cool',
    rarity: 'N',
    catchphrase: '流れるように生きよう',
  },

  // ===== 日・月 =====
  {
    id: 'kanji_021',
    character: '明',
    reading: { kun: 'あか(るい)', on: 'メイ' },
    meaning: '明るい',
    parts: [
      { id: 'p1', label: '日', type: 'hen', display: '日', color: '#FF6B6B' },
      { id: 'p2', label: '月', type: 'tsukuri', display: '月', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 1,
    story: '太陽と月が一緒になって明るく照らす。',
    emoji: '☀️',
    element: 'light',
    personality: 'cheerful',
    rarity: 'SR',
    catchphrase: '明るく照らすよ！',
  },
  {
    id: 'kanji_022',
    character: '時',
    reading: { kun: 'とき', on: 'ジ' },
    meaning: '時間',
    parts: [
      { id: 'p1', label: '日', type: 'hen', display: '日', color: '#FF6B6B' },
      { id: 'p2', label: '寺', type: 'tsukuri', display: '寺', color: '#4ECDC4' },
    ],
    layout: 'leftright',
    difficulty: 2,
    story: '太陽が動いて時を刻む。',
    emoji: '⏰',
    element: 'light',
    personality: 'wise',
    rarity: 'R',
    catchphrase: '時は金なり！',
  },

  // ===== 心系 =====
  {
    id: 'kanji_023',
    character: '思',
    reading: { kun: 'おも(う)', on: 'シ' },
    meaning: '考える、思う',
    parts: [
      { id: 'p1', label: '田', type: 'kanmuri', display: '田', color: '#FFE66D' },
      { id: 'p2', label: '心', type: 'ashi', display: '心', color: '#A8E6CF' },
    ],
    layout: 'topbottom',
    difficulty: 2,
    story: '田んぼで働きながら心で思う。',
    emoji: '🤔',
    element: 'mind',
    personality: 'wise',
    rarity: 'R',
    catchphrase: 'よく考えてから行動しよう',
  },
  {
    id: 'kanji_024',
    character: '意',
    reading: { kun: '', on: 'イ' },
    meaning: '心の中、考え',
    parts: [
      { id: 'p1', label: '音', type: 'kanmuri', display: '音', color: '#FFE66D' },
      { id: 'p2', label: '心', type: 'ashi', display: '心', color: '#A8E6CF' },
    ],
    layout: 'topbottom',
    difficulty: 2,
    story: '音を心で受け取る意味。',
    emoji: '💭',
    element: 'mind',
    personality: 'mysterious',
    rarity: 'SR',
    catchphrase: '君の意志は何を求めてる？',
  },

  // ===== しんにょう =====
  {
    id: 'kanji_025',
    character: '道',
    reading: { kun: 'みち', on: 'ドウ' },
    meaning: '通る道',
    parts: [
      { id: 'p1', label: '辶', type: 'nyou', display: '辶', color: '#C3B1E1' },
      { id: 'p2', label: '首', type: 'dokutai', display: '首', color: '#B0BEC5' },
    ],
    layout: 'nyou',
    difficulty: 2,
    story: '首を向けて進む道。',
    emoji: '🛤️',
    element: 'earth',
    personality: 'wise',
    rarity: 'SSR',
    catchphrase: '道を究めよ！',
  },
];

// ダミーパーツ（パズルで誤答用）
export const dummyParts = [
  { id: 'dummy_01', label: '口', display: '口', color: '#B0BEC5' },
  { id: 'dummy_02', label: '目', display: '目', color: '#B0BEC5' },
  { id: 'dummy_03', label: '手', display: '手', color: '#B0BEC5' },
  { id: 'dummy_04', label: '足', display: '足', color: '#B0BEC5' },
  { id: 'dummy_05', label: '耳', display: '耳', color: '#B0BEC5' },
  { id: 'dummy_06', label: '石', display: '石', color: '#B0BEC5' },
  { id: 'dummy_07', label: '田', display: '田', color: '#B0BEC5' },
  { id: 'dummy_08', label: '力', display: '力', color: '#B0BEC5' },
];

export default kanjiList;
