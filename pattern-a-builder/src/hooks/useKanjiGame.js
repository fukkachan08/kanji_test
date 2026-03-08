import { useState, useCallback, useMemo } from 'react';
import { kanjiList, dummyParts } from '../data/kanjiData';

// 配列をシャッフルする関数
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useKanjiGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [placedParts, setPlacedParts] = useState({});
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState({});
  const [shuffledKanjiList] = useState(() => shuffleArray(kanjiList));

  const currentKanji = shuffledKanjiList[currentIndex];
  const totalKanji = shuffledKanjiList.length;

  // 現在の漢字のパーツとダミーパーツを混ぜてシャッフル
  const availableParts = useMemo(() => {
    if (!currentKanji) return [];

    // 正解パーツ
    const correctParts = currentKanji.parts;

    // ダミーパーツから2〜3個ランダムに選ぶ
    const numDummies = Math.floor(Math.random() * 2) + 2;
    const selectedDummies = shuffleArray(dummyParts).slice(0, numDummies);

    // 混ぜてシャッフル
    return shuffleArray([...correctParts, ...selectedDummies]);
  }, [currentKanji]);

  // DropZoneに配置されていないパーツのみ
  const remainingParts = useMemo(() => {
    const placedIds = Object.values(placedParts).map(p => p?.id);
    return availableParts.filter(part => !placedIds.includes(part.id));
  }, [availableParts, placedParts]);

  // パーツを配置する
  const placePart = useCallback((zoneId, part) => {
    setPlacedParts(prev => ({
      ...prev,
      [zoneId]: part
    }));
  }, []);

  // パーツを取り除く
  const removePart = useCallback((zoneId) => {
    setPlacedParts(prev => {
      const newParts = { ...prev };
      delete newParts[zoneId];
      return newParts;
    });
  }, []);

  // 正解かどうかチェック
  const checkAnswer = useCallback(() => {
    if (!currentKanji) return { isCorrect: false, wrongZones: [] };

    const wrongZones = [];
    let allCorrect = true;

    currentKanji.parts.forEach((correctPart, index) => {
      const zoneId = `zone_${index}`;
      const placedPart = placedParts[zoneId];

      if (!placedPart || placedPart.id !== correctPart.id) {
        allCorrect = false;
        if (placedPart) {
          wrongZones.push(zoneId);
        }
      }
    });

    // 全てのゾーンが埋まっているかチェック
    const allZonesFilled = currentKanji.parts.every((_, index) => {
      const zoneId = `zone_${index}`;
      return placedParts[zoneId] !== undefined;
    });

    if (!allZonesFilled) {
      allCorrect = false;
    }

    return { isCorrect: allCorrect, wrongZones };
  }, [currentKanji, placedParts]);

  // 答え合わせを実行
  const submitAnswer = useCallback(() => {
    const result = checkAnswer();

    if (result.isCorrect) {
      setIsCorrect(true);
      setScore(prev => prev + 100);
      setCorrectCount(prev => prev + 1);
      setShowStory(true);
    } else {
      // 不正解のゾーンを記録
      const newWrongAttempts = { ...wrongAttempts };
      result.wrongZones.forEach(zoneId => {
        newWrongAttempts[zoneId] = true;
      });
      setWrongAttempts(newWrongAttempts);

      // 少し待ってからリセット
      setTimeout(() => {
        setWrongAttempts({});
      }, 600);
    }

    return result;
  }, [checkAnswer, wrongAttempts]);

  // 次の漢字へ
  const nextKanji = useCallback(() => {
    if (currentIndex < totalKanji - 1) {
      setCurrentIndex(prev => prev + 1);
      setPlacedParts({});
      setShowStory(false);
      setIsCorrect(false);
      setWrongAttempts({});
    }
  }, [currentIndex, totalKanji]);

  // ストーリーポップアップを閉じる
  const closeStory = useCallback(() => {
    setShowStory(false);
  }, []);

  // ゲームをリセット
  const resetGame = useCallback(() => {
    setCurrentIndex(0);
    setPlacedParts({});
    setScore(0);
    setCorrectCount(0);
    setShowStory(false);
    setIsCorrect(false);
    setWrongAttempts({});
  }, []);

  // ヒントを表示
  const getHint = useCallback(() => {
    return currentKanji?.hint || '';
  }, [currentKanji]);

  // 全パーツが配置されているかチェック
  const allPartsPlaced = useMemo(() => {
    if (!currentKanji) return false;
    return currentKanji.parts.every((_, index) => {
      const zoneId = `zone_${index}`;
      return placedParts[zoneId] !== undefined;
    });
  }, [currentKanji, placedParts]);

  return {
    currentKanji,
    currentIndex,
    totalKanji,
    remainingParts,
    placedParts,
    score,
    correctCount,
    showStory,
    isCorrect,
    wrongAttempts,
    allPartsPlaced,
    placePart,
    removePart,
    submitAnswer,
    nextKanji,
    closeStory,
    resetGame,
    getHint
  };
};
