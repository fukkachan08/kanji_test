import { useState, useCallback, useMemo } from 'react';

// 理解度の評価値
export const RATING_VALUES = {
  AGAIN: 1,      // もう一度
  HARD: 2,       // なんとなく
  GOOD: 3,       // わかった
  PERFECT: 4,    // 完璧
};

export function useCardDeck(initialCards) {
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState({});
  const [isSessionComplete, setIsSessionComplete] = useState(false);
  const [skippedCards, setSkippedCards] = useState([]);

  // 現在のカード
  const currentCard = useMemo(() => {
    return cards[currentIndex] || null;
  }, [cards, currentIndex]);

  // 進捗計算
  const progress = useMemo(() => {
    const total = cards.length;
    const completed = currentIndex;
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    return { completed, total, percentage };
  }, [cards.length, currentIndex]);

  // 統計情報
  const stats = useMemo(() => {
    const ratingCounts = {
      [RATING_VALUES.AGAIN]: 0,
      [RATING_VALUES.HARD]: 0,
      [RATING_VALUES.GOOD]: 0,
      [RATING_VALUES.PERFECT]: 0,
    };

    Object.values(ratings).forEach((rating) => {
      if (ratingCounts[rating] !== undefined) {
        ratingCounts[rating]++;
      }
    });

    const totalRated = Object.values(ratings).length;
    const goodOrBetter = ratingCounts[RATING_VALUES.GOOD] + ratingCounts[RATING_VALUES.PERFECT];
    const accuracy = totalRated > 0 ? (goodOrBetter / totalRated) * 100 : 0;

    return {
      ratingCounts,
      totalRated,
      accuracy,
      skippedCount: skippedCards.length,
    };
  }, [ratings, skippedCards]);

  // 苦手な漢字（評価が低いもの）
  const weakCards = useMemo(() => {
    return cards.filter((card) => {
      const rating = ratings[card.id];
      return rating === RATING_VALUES.AGAIN || rating === RATING_VALUES.HARD;
    });
  }, [cards, ratings]);

  // カードを評価して次へ
  const rateCard = useCallback((rating) => {
    if (!currentCard) return;

    setRatings((prev) => ({
      ...prev,
      [currentCard.id]: rating,
    }));

    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsSessionComplete(true);
    }
  }, [currentCard, currentIndex, cards.length]);

  // カードをスキップ
  const skipCard = useCallback(() => {
    if (!currentCard) return;

    setSkippedCards((prev) => [...prev, currentCard]);

    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsSessionComplete(true);
    }
  }, [currentCard, currentIndex, cards.length]);

  // スワイプで正解済みにする
  const markAsCorrect = useCallback(() => {
    rateCard(RATING_VALUES.GOOD);
  }, [rateCard]);

  // 苦手な漢字だけで再スタート
  const restartWithWeakCards = useCallback(() => {
    if (weakCards.length > 0) {
      setCards(weakCards);
      setCurrentIndex(0);
      setRatings({});
      setSkippedCards([]);
      setIsSessionComplete(false);
    }
  }, [weakCards]);

  // 全てのカードで再スタート
  const restartAll = useCallback(() => {
    setCards(initialCards);
    setCurrentIndex(0);
    setRatings({});
    setSkippedCards([]);
    setIsSessionComplete(false);
  }, [initialCards]);

  // 次のカードへ（手動）
  const nextCard = useCallback(() => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsSessionComplete(true);
    }
  }, [currentIndex, cards.length]);

  // 前のカードへ（手動）
  const prevCard = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  return {
    currentCard,
    currentIndex,
    cards,
    progress,
    stats,
    weakCards,
    isSessionComplete,
    ratings,
    rateCard,
    skipCard,
    markAsCorrect,
    restartWithWeakCards,
    restartAll,
    nextCard,
    prevCard,
  };
}

export default useCardDeck;
