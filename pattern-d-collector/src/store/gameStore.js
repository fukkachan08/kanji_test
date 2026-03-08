import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { kanjiList } from '../data/kanjiData';

const initialState = {
  // ゲーム状態
  screen: 'home', // 'home' | 'puzzle' | 'result' | 'collection' | 'quiz'

  // 現在のパズル
  currentKanjiId: null,
  currentStageIndex: 0,

  // パズル状態
  placedParts: {}, // { zoneId: partId }
  timeLeft: 30,
  score: 0,
  combo: 0,

  // コレクション
  collectedKanji: [], // 獲得した漢字のID
  collectedParts: [], // { label, color, count }

  // 統計
  totalCleared: 0,
  totalScore: 0,

  // キャラレベル（読みクイズで上がる）
  kanjiLevels: {}, // { kanjiId: level }
};

export const useGameStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      // 画面遷移
      goToHome: () => set({ screen: 'home' }),
      goToCollection: () => set({ screen: 'collection' }),

      // ステージ開始
      startStage: (stageIndex) => {
        const unlockedKanji = kanjiList.filter((k, i) => i <= stageIndex);
        const kanji = unlockedKanji[stageIndex] || kanjiList[0];

        set({
          screen: 'puzzle',
          currentKanjiId: kanji.id,
          currentStageIndex: stageIndex,
          placedParts: {},
          timeLeft: 30,
          combo: 0,
        });
      },

      // パーツ配置
      placePart: (zoneId, partId) => {
        set((state) => ({
          placedParts: { ...state.placedParts, [zoneId]: partId },
        }));
      },

      // パーツ削除
      removePart: (zoneId) => {
        set((state) => {
          const newParts = { ...state.placedParts };
          delete newParts[zoneId];
          return { placedParts: newParts };
        });
      },

      // 答え合わせ
      checkAnswer: () => {
        const state = get();
        const kanji = kanjiList.find((k) => k.id === state.currentKanjiId);
        if (!kanji) return false;

        // 正解判定
        const correctParts = kanji.parts.map((p) => p.id).sort();
        const placedPartIds = Object.values(state.placedParts).sort();

        const isCorrect =
          correctParts.length === placedPartIds.length &&
          correctParts.every((id, i) => id === placedPartIds[i]);

        if (isCorrect) {
          // 正解処理
          const newScore = state.score + 100 + state.combo * 10 + state.timeLeft * 2;
          const newCombo = state.combo + 1;

          // コレクション更新
          const newCollectedKanji = state.collectedKanji.includes(kanji.id)
            ? state.collectedKanji
            : [...state.collectedKanji, kanji.id];

          // 部首コレクション更新
          const newCollectedParts = [...state.collectedParts];
          kanji.parts.forEach((part) => {
            const existing = newCollectedParts.find((p) => p.label === part.label);
            if (existing) {
              existing.count += 1;
            } else {
              newCollectedParts.push({ label: part.label, color: part.color, count: 1 });
            }
          });

          set({
            screen: 'result',
            score: newScore,
            combo: newCombo,
            collectedKanji: newCollectedKanji,
            collectedParts: newCollectedParts,
            totalCleared: state.totalCleared + 1,
            totalScore: state.totalScore + newScore,
          });

          return true;
        }

        // 不正解
        set({ combo: 0 });
        return false;
      },

      // タイマー更新
      tickTimer: () => {
        set((state) => {
          if (state.timeLeft <= 0) return state;
          return { timeLeft: state.timeLeft - 1 };
        });
      },

      // 次のステージへ
      nextStage: () => {
        const state = get();
        const nextIndex = state.currentStageIndex + 1;

        if (nextIndex < kanjiList.length) {
          get().startStage(nextIndex);
        } else {
          set({ screen: 'home' });
        }
      },

      // リセット
      resetPuzzle: () => {
        set({ placedParts: {} });
      },

      // 全リセット
      resetAll: () => {
        set(initialState);
      },

      // キャラレベルアップ（読みクイズ用）
      levelUpKanji: (kanjiId) => {
        set((state) => ({
          kanjiLevels: {
            ...state.kanjiLevels,
            [kanjiId]: (state.kanjiLevels[kanjiId] || 1) + 1,
          },
        }));
      },
    }),
    {
      name: 'kanji-collector-storage',
      partialize: (state) => ({
        collectedKanji: state.collectedKanji,
        collectedParts: state.collectedParts,
        totalCleared: state.totalCleared,
        totalScore: state.totalScore,
        kanjiLevels: state.kanjiLevels,
      }),
    }
  )
);

export default useGameStore;
