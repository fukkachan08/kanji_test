import { useState, useCallback, useMemo } from 'react';
import { useGameStore } from '../store/gameStore';
import { kanjiList } from '../data/kanjiData';

// 読み方の選択肢を生成
const generateReadingChoices = (correctKanji) => {
  const correctReading = correctKanji.reading.split(' / ')[0]; // 最初の読み
  const choices = [correctReading];

  // 他の漢字から誤答を生成
  const otherKanji = kanjiList.filter(k => k.id !== correctKanji.id);
  const shuffled = otherKanji.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 3 && i < shuffled.length; i++) {
    const reading = shuffled[i].reading.split(' / ')[0];
    if (!choices.includes(reading)) {
      choices.push(reading);
    }
  }

  // 4つになるまで追加
  while (choices.length < 4) {
    const extraReadings = ['やま', 'かわ', 'ひ', 'みず', 'き', 'つき'];
    const extra = extraReadings[Math.floor(Math.random() * extraReadings.length)];
    if (!choices.includes(extra)) {
      choices.push(extra);
    }
  }

  return choices.sort(() => Math.random() - 0.5);
};

// 意味の選択肢を生成
const generateMeaningChoices = (correctKanji) => {
  const correctMeaning = correctKanji.meaning;
  const choices = [correctMeaning];

  const otherKanji = kanjiList.filter(k => k.id !== correctKanji.id);
  const shuffled = otherKanji.sort(() => Math.random() - 0.5);

  for (let i = 0; i < 3 && i < shuffled.length; i++) {
    if (!choices.includes(shuffled[i].meaning)) {
      choices.push(shuffled[i].meaning);
    }
  }

  while (choices.length < 4) {
    const extraMeanings = ['空を飛ぶ', '地面を掘る', '音を出す', '光を放つ'];
    const extra = extraMeanings[Math.floor(Math.random() * extraMeanings.length)];
    if (!choices.includes(extra)) {
      choices.push(extra);
    }
  }

  return choices.sort(() => Math.random() - 0.5);
};

// パズル用のシャッフルされた部品を生成
const generatePuzzleParts = (correctKanji) => {
  const parts = [...correctKanji.parts];

  // ダミーパーツを追加
  const dummyParts = [
    { id: 'dummy1', label: '口', display: '口', color: '#B0BEC5' },
    { id: 'dummy2', label: '日', display: '日', color: '#B0BEC5' },
    { id: 'dummy3', label: '月', display: '月', color: '#B0BEC5' },
    { id: 'dummy4', label: '目', display: '目', color: '#B0BEC5' }
  ];

  // 正解パーツ以外のダミーを追加（1〜2個）
  const correctLabels = parts.map(p => p.label);
  const availableDummies = dummyParts.filter(d => !correctLabels.includes(d.label));
  const numDummies = Math.min(2, availableDummies.length);

  for (let i = 0; i < numDummies; i++) {
    parts.push(availableDummies[i]);
  }

  return parts.sort(() => Math.random() - 0.5);
};

export const useBattle = () => {
  const { currentBattle, damageMonster, damagePlayer, player } = useGameStore();
  const [selectedParts, setSelectedParts] = useState([]);
  const [isAnswering, setIsAnswering] = useState(false);

  const questType = currentBattle?.monster?.questType || 'reading';
  const kanji = currentBattle?.kanji;
  const monster = currentBattle?.monster;

  // 問題生成
  const question = useMemo(() => {
    if (!kanji) return null;

    switch (questType) {
      case 'reading':
        return {
          type: 'reading',
          prompt: `「${kanji.character}」の読み方は？`,
          choices: generateReadingChoices(kanji),
          answer: kanji.reading.split(' / ')[0]
        };
      case 'meaning':
        return {
          type: 'meaning',
          prompt: `「${kanji.character}」の意味は？`,
          choices: generateMeaningChoices(kanji),
          answer: kanji.meaning
        };
      case 'puzzle':
        return {
          type: 'puzzle',
          prompt: `「${kanji.character}」を組み立てよう！`,
          parts: generatePuzzleParts(kanji),
          answer: kanji.parts.map(p => p.id).sort().join(',')
        };
      default:
        return null;
    }
  }, [kanji, questType]);

  // 選択肢回答
  const submitChoice = useCallback((choice) => {
    if (isAnswering || !question) return;

    setIsAnswering(true);

    const isCorrect = choice === question.answer;

    if (isCorrect) {
      // 正解：モンスターにダメージ
      damageMonster(player.attack);
    } else {
      // 不正解：プレイヤーにダメージ
      damagePlayer(monster.attackPower);
    }

    setTimeout(() => {
      setIsAnswering(false);
    }, 700);

    return isCorrect;
  }, [question, isAnswering, damageMonster, damagePlayer, player.attack, monster?.attackPower]);

  // パズル：パーツ選択
  const selectPart = useCallback((part) => {
    setSelectedParts(prev => {
      const exists = prev.find(p => p.id === part.id);
      if (exists) {
        return prev.filter(p => p.id !== part.id);
      }
      return [...prev, part];
    });
  }, []);

  // パズル：回答送信
  const submitPuzzle = useCallback(() => {
    if (isAnswering || !question || question.type !== 'puzzle') return;

    setIsAnswering(true);

    const selectedIds = selectedParts.map(p => p.id).sort().join(',');
    const isCorrect = selectedIds === question.answer;

    if (isCorrect) {
      damageMonster(player.attack);
    } else {
      damagePlayer(monster.attackPower);
    }

    setTimeout(() => {
      setIsAnswering(false);
      setSelectedParts([]);
    }, 700);

    return isCorrect;
  }, [question, selectedParts, isAnswering, damageMonster, damagePlayer, player.attack, monster?.attackPower]);

  // パズルリセット
  const resetPuzzle = useCallback(() => {
    setSelectedParts([]);
  }, []);

  return {
    question,
    questType,
    kanji,
    monster,
    selectedParts,
    isAnswering,
    submitChoice,
    selectPart,
    submitPuzzle,
    resetPuzzle
  };
};

export default useBattle;
