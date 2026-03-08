# 漢字学習Webアプリ Claude Code 指示書集

> 対象：中学1年生配当漢字（約300字）  
> プラットフォーム：Webアプリ（HTML/CSS/JavaScript または React）  
> 共通思想：視覚認知（腹側経路）×ワーキングメモリ強化×色コーデ

---

# 【共通カラーコード定義】（全パターン共通で使うこと）

| 要素 | 役割 | カラー | HEX |
|---|---|---|---|
| へん | 漢字の左側パーツ | 珊瑚オレンジ | `#FF6B6B` |
| つくり | 漢字の右側パーツ | スカイブルー | `#4ECDC4` |
| かんむり | 漢字の上部パーツ | サニーイエロー | `#FFE66D` |
| あし | 漢字の下部パーツ | ミントグリーン | `#A8E6CF` |
| かこい / にょう | 囲む・折れるパーツ | ラベンダー | `#C3B1E1` |
| 独体字（部首単体） | 分解できない漢字 | ライトグレー | `#B0BEC5` |

---

---

# 📦 パターン A：パズル組み立て型「漢字ビルダー」

## アプリ概要
漢字を構成する部品（へん・つくり・かんむりなど）が色分けされたブロックとして画面に散らばっており、ドラッグ＆ドロップで正しい位置に組み合わせることで漢字を完成させるパズルゲーム。

## Claude Codeへの指示

```
## プロジェクト名
KanjiBuilder - 漢字パズル組み立てWebアプリ

## 技術スタック
- React（Vite）
- CSS Modules または Tailwind CSS
- react-dnd または @dnd-kit/core（ドラッグ＆ドロップ）
- 状態管理：useState / useReducer（外部ライブラリ不要）

## ディレクトリ構成
src/
  components/
    KanjiBoard.jsx        # メインの組み立てボード
    PuzzlePiece.jsx       # 各パーツのブロック
    DropZone.jsx          # 配置先ゾーン（へん・つくりなど）
    ScorePanel.jsx        # スコア・進捗表示
    StoryPopup.jsx        # 正解時に出るミニストーリー
  data/
    kanjiData.js          # 漢字データ（下記フォーマット参照）
  hooks/
    useKanjiGame.js       # ゲームロジック
  App.jsx
  main.jsx

## 漢字データのフォーマット（kanjiData.js）
以下のフォーマットで中学1年生配当漢字を20字以上定義すること。

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
    layout: "leftright",  // leftright / topbottom / surround
    story: "水（さんずい）が青い空を映して、透き通るほどきれいな様子。",
    hint: "さんずいは水に関係する漢字によく使われるよ"
  },
  // ...以下同フォーマットで続ける
];

## ゲームの流れ
1. 画面上部に「この漢字を作ろう！」として読みと意味が表示される（文字そのものは非表示）
2. 画面下部に色分けされたパーツブロックがシャッフルして並ぶ（ダミーパーツ含む）
3. プレイヤーがドラッグして正しいDropZoneにパーツを配置する
4. 全パーツが正しく配置されたら「カチッ」というアニメーション＋正解エフェクト
5. ミニストーリーポップアップが出て漢字の意味・成り立ちを表示
6. 次の漢字へ進む

## ゲームモード
- 【通常モード】制限なし、じっくり考える
- 【タイムアタックモード】1問30秒、タイマー表示
- 【記憶モード】パーツを3秒だけ表示→隠す→配置（ワーキングメモリ強化）

## UI要件
- パーツブロックは角丸（border-radius: 12px）で影付き（box-shadow）
- 各パーツは上記カラーコードで色分け（背景色＋白いラベル文字）
- DropZoneは点線のボーダーで示し、正解パーツが入ったら色が変わる
- 正解アニメーション：パーツが「はまる」ような縮小→拡大のバウンス効果
- 不正解時：パーツが赤くなりもとの場所に戻る（シェイクアニメーション）
- スコアパネル：連続正解数（コンボ）、総正解数、かかった時間を表示
- レスポンシブ：スマホ縦持ちでも快適に動くこと（min-width: 320px対応）

## アクセシビリティ
- パーツにaria-labelを付ける
- キーボード操作でも動くよう tabIndex を設定
- 色だけでなくラベルテキストも必ず表示する（色覚多様性への配慮）

## 追加実装（余裕があれば）
- localStorage でスコア・進捗を保存
- 間違えた漢字を「復習リスト」に自動追加
- BGM・効果音（Tone.js または 簡易AudioContext）
```

---

---

# 📖 パターン B：ストーリーカード型「漢字ものがたり」

## アプリ概要
漢字1字ずつに「成り立ちストーリー」が紐付いており、アニメーションするイラスト＋テキストで意味を直感的に理解できるフラッシュカード型アプリ。スワイプで次の漢字へ進み、理解度を自己評価する。

## Claude Codeへの指示

```
## プロジェクト名
KanjiMonogatari - 漢字ストーリーカードWebアプリ

## 技術スタック
- React（Vite）
- CSS Animations（外部ライブラリ最小化）
- Framer Motion（カードスワイプアニメーション用）
- Canvas API または SVG（漢字の成り立ちアニメーション描画）

## ディレクトリ構成
src/
  components/
    CardDeck.jsx          # カードのスタック表示
    KanjiCard.jsx         # 1枚のカード（表・裏）
    StoryAnimation.jsx    # SVGアニメーション（成り立ち図）
    PartsBadge.jsx        # 色分けパーツバッジ
    SelfRating.jsx        # 理解度自己評価ボタン
    ProgressBar.jsx       # 進捗バー
  data/
    kanjiData.js
  hooks/
    useCardDeck.js
  App.jsx

## 漢字データのフォーマット
export const kanjiList = [
  {
    id: "kanji_001",
    character: "森",
    reading: "もり / シン",
    meaning: "木がたくさん集まった場所",
    parts: [
      { label: "木", type: "base", color: "#A8E6CF", position: "top" },
      { label: "木", type: "base", color: "#A8E6CF", position: "bottom-left" },
      { label: "木", type: "base", color: "#A8E6CF", position: "bottom-right" }
    ],
    story: {
      scene1: "1本の木が立っています。",
      scene2: "もう1本増えました。林（はやし）になりました。",
      scene3: "さらに1本！木が3本集まると「森」のできあがり。"
    },
    etymology: "象形文字。木を3つ重ねて、多くの木＝森を表した。",
    memoryTip: "木×3＝森！数で覚えよう",
    svgSteps: [
      { step: 1, description: "木を1本描く" },
      { step: 2, description: "木を2本にする（林）" },
      { step: 3, description: "木を3本にする（森）" }
    ]
  }
];

## カードのUI仕様

### カード表面（問題面）
- 中央に漢字を大きく表示（font-size: 120px、毛筆風フォント：Noto Serif JP）
- 下部に「読み」を小さく表示
- カード右上に「パーツバッジ」を色分けして並べる
  例：[🟠 さんずい] [🔵 青] のようなタグ形式
- カード背景色：白、淡いグラデーション（漢字の種別で変える）

### カード裏面（解説面）
- 上部：SVGアニメーションで成り立ちを3ステップで図示
  （アニメーションは自動再生、タップで再生）
- 中部：ストーリーテキスト（scene1→scene2→scene3 を順に表示）
- 下部：パーツを色分けブロックで横並び表示
- 最下部：語呂合わせ・記憶ヒント（memoryTip）を黄色いふきだしで表示

### カード操作
- タップでカードをフリップ（表→裏）
- 裏面で理解度ボタン表示：
  [😕 もう一度] [🤔 なんとなく] [😄 わかった！] [⭐ 完璧！]
- スワイプ左：スキップ
- スワイプ右：正解済みとしてスタックから除外

## 学習セッション設計
- 1セッション：10〜15枚
- セッション終了後：
  - 正解率グラフ（棒グラフ、CSSのみで実装）
  - 「もう一度苦手な字だけ」ボタン
  - 今日の一言（漢字に関係した豆知識をランダム表示）

## SVGアニメーション実装方針
- 複雑な手書き風アニメーションは不要
- stroke-dashoffset アニメーションで「書き順風」の線描画をシンプルに実装
- 各漢字に3〜5ステップの図（円・四角・線の組み合わせで表現）
- 実装が難しい場合はCSSクラスの切り替えで透明度アニメーションで代替可

## 色・フォント
- フォント：Noto Serif JP（Google Fonts）
- カード背景：#FFFDF7（和紙風）
- パーツバッジは共通カラーコードを使用
- 理解度ボタン：グラデーションなし、フラットデザイン

## 追加実装（余裕があれば）
- 間隔反復アルゴリズム（SM-2の簡易版）でカード出現頻度を調整
- 漢字の書き順をなぞれるキャンバス（touch対応）
- 保護者・教師向けの進捗確認ページ（/progress）
```

---

---

# ⚔️ パターン C：RPGクエスト型「漢字ダンジョン」

## アプリ概要
プレイヤーがダンジョンを探索し、モンスター（漢字の化身）と戦う。バトルは漢字パーツの組み立てや読み当てクイズで行い、正解でダメージを与える。部首をコレクションしてキャラクターを強化できる。

## Claude Codeへの指示

```
## プロジェクト名
KanjiDungeon - 漢字RPGダンジョンWebアプリ

## 技術スタック
- React（Vite）
- Canvas API（ダンジョンマップ描画）または CSSグリッドで擬似マップ
- Zustand（ゲーム状態管理）
- CSS Animations（バトルエフェクト）

## ディレクトリ構成
src/
  components/
    DungeonMap.jsx        # マップ画面（グリッド探索）
    BattleScreen.jsx      # バトル画面
    KanjiPuzzle.jsx       # バトル中のパズル問題
    PlayerStatus.jsx      # HP・レベル・所持部首
    MonsterCard.jsx       # モンスター（漢字の化身）表示
    PartsCollection.jsx   # コレクションした部首一覧
    ResultScreen.jsx      # バトル結果
  data/
    kanjiData.js          # 漢字データ
    monsterData.js        # モンスターデータ
    dungeonData.js        # ダンジョン構造
  store/
    gameStore.js          # Zustand store
  hooks/
    useBattle.js
  App.jsx

## ゲームデータのフォーマット

### kanjiData.js（漢字データ）
export const kanjiList = [
  {
    id: "kanji_001",
    character: "炎",
    reading: "ほのお / エン",
    meaning: "燃え上がる火",
    parts: [
      { id: "p1", label: "火", type: "base", display: "火", color: "#FF6B6B", position: "top" },
      { id: "p2", label: "火", type: "base", display: "火", color: "#FF6B6B", position: "bottom" }
    ],
    layout: "topbottom",
    rarity: "common",  // common / uncommon / rare（ドロップ率に影響）
    story: "火が2つ重なって激しく燃える様子。",
    monsterPower: 30   // このモンスターの攻撃力
  }
];

### monsterData.js（モンスター＝漢字の化身）
export const monsters = [
  {
    id: "monster_001",
    kanjiId: "kanji_001",
    name: "炎のオーガ",
    emoji: "👹",          // アイコン（絵文字で簡易表現）
    hp: 60,
    attackPower: 20,
    dropPart: { label: "火", color: "#FF6B6B" },  // 倒すと手に入る部首
    questType: "puzzle",  // puzzle / reading / meaning（バトル問題タイプ）
    dungeonFloor: 1
  }
];

### dungeonData.js（ダンジョン構造）
export const dungeon = {
  floors: [
    {
      floor: 1,
      name: "さんずいの洞窟",
      theme: "水",
      themeColor: "#4ECDC4",
      rooms: 5,          // 部屋数
      monsters: ["monster_002", "monster_003"],
      boss: "monster_010",
      bgEmoji: "🌊"
    }
  ]
};

## ゲームの流れ

### 1. ワールドマップ
- ダンジョンが「水の洞窟」「火の山」「土の砦」など部首テーマ別に分かれている
- CSSグリッド（5×5マス）でマップを表示、各マスに草・壁・扉・モンスターを配置
- プレイヤーキャラクター（絵文字 🧙）を矢印キー＋タップで移動

### 2. エンカウント（バトル開始）
- モンスターのいるマスに進むとバトル画面へ遷移
- モンスターが「漢字の化身」として登場（絵文字＋漢字名）
- 「この漢字の正体を暴け！」というナレーション

### 3. バトルフェーズ
バトルはターン制。以下の問題タイプからランダム出題：

**Ａ：パズルバトル（questType: "puzzle"）**
  - 色分けされたパーツブロックが飛んでくる演出
  - ドラッグ＆ドロップで漢字を組み立てる
  - 正解：プレイヤーの攻撃エフェクト（⚡ アニメーション）＋ダメージ
  - 不正解：モンスターの反撃（HP減少）

**Ｂ：読みバトル（questType: "reading"）**
  - 漢字が表示され、4択の読みから選ぶ
  - 10秒タイマー付き

**Ｃ：意味バトル（questType: "meaning"）**
  - 意味のヒントが出て漢字を4択から選ぶ

### 4. バトル結果
- 勝利：部首コマ（例：「火」の部首ピース）をドロップ
- レベルアップ：一定数クリアでプレイヤーがレベルアップ
- 部首コレクション画面に追加される

### 5. 部首コレクション＆強化
- 集めた部首を組み合わせて「新しい漢字を解放」する
- 例：「氵」+「青」＝「清」を覚える権利をアンロック
- コレクション画面は色別カード一覧で表示

## UI要件

### バトル画面レイアウト
```
┌─────────────────────────┐
│  [モンスター絵文字＋名前]  │  ← HPバー（赤）
│     👹 炎のオーガ        │
│     HP: ████░░  60/60   │
├─────────────────────────┤
│   【問題エリア】          │
│  パーツをここに並べよ！   │
│  [🟠炎上] [🟠火炎]      │
│       ↓ DropZone        │
├─────────────────────────┤
│  🧙 あなた               │  ← HPバー（緑）
│  HP: ████████  80/80    │
│  [所持部首: 火×2 水×1]  │
└─────────────────────────┘
```

### エフェクト
- 正解攻撃：画面をオレンジに一瞬フラッシュ＋⚡マークのCSSアニメーション
- 被ダメージ：画面端が赤くなるvignetteエフェクト
- レベルアップ：紙吹雪エフェクト（CSS confetti）

### 色・テーマ
- 全体のUIは「ダーク＋ポップ」：背景 #1A1A2E、パネル #16213E
- 漢字パーツは共通カラーコードで明るく色付け（ダーク背景で映える）
- フォント：Noto Serif JP（漢字）＋ M PLUS Rounded 1c（UI）

## データ永続化
- localStorage を使用してゲームのセーブデータを保存
  - プレイヤーステータス（HP・レベル・経験値）
  - クリア済みダンジョン
  - コレクション済み部首・漢字リスト

## 追加実装（余裕があれば）
- ボスモンスターに「弱点属性」（部首テーマ）を設定し、一致する部首で攻撃力2倍
- フロアクリア後に「今日の漢字まとめ」を振り返り画面として表示
- シェア機能：「今日○体倒した！」をテキストでコピー
```

---

---

# 🚀 全パターン共通：Claude Codeへの最初の一言

各パターンを始める際は、以下の文章をそのまま Claude Code に貼り付けてください。

## パターンA 開始コマンド
```
上記の「KanjiBuilder」仕様書に従ってWebアプリを作成してください。
まず`npm create vite@latest kanji-builder -- --template react`でプロジェクトを作成し、
必要なパッケージをインストールした後、kanjiData.jsに中学1年配当漢字を20字定義してから
コア機能（パズル組み立て）を実装してください。
UIはスマホ縦持ち対応のレスポンシブで、色分けは仕様書のカラーコードに従ってください。
```

## パターンB 開始コマンド
```
上記の「KanjiMonogatari」仕様書に従ってWebアプリを作成してください。
まず`npm create vite@latest kanji-monogatari -- --template react`でプロジェクトを作成し、
Framer Motionをインストール後、kanjiData.jsに中学1年配当漢字を20字定義してから
カードフリップとストーリーアニメーション機能から実装してください。
SVGアニメーションが難しい場合はCSSのopacityアニメーションで代替してください。
```

## パターンC 開始コマンド
```
上記の「KanjiDungeon」仕様書に従ってRPG風Webアプリを作成してください。
まず`npm create vite@latest kanji-dungeon -- --template react`でプロジェクトを作成し、
zustandをインストール後、kanjiData.js・monsterData.js・dungeonData.jsを定義してから
ダンジョンマップ移動→バトル画面の順で実装してください。
マップはCSSグリッドで実装し、Canvas APIは使わなくて構いません。
```

---

# 📝 補足メモ

- **まず動かすことを優先**：SVGアニメーションや音響は後回しにして、コア体験（パズル・カード・バトル）を先に完成させること
- **漢字データは最初20字でOK**：「明、国、語、数、理、社、英、音、体、力、心、手、目、口、耳、山、川、火、水、木」あたりが中1配当で部首が明確でおすすめ
- **デプロイ**：完成後は`npm run build`で静的ファイルを生成し、Vercel・Netlify・GitHub Pagesに無料でデプロイ可能