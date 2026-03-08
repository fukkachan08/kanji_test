import { useState, useEffect, useMemo } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useGameStore } from '../../store/gameStore';
import { kanjiList, dummyParts } from '../../data/kanjiData';
import PuzzlePiece from './PuzzlePiece';
import DropZone from './DropZone';
import './BreakPuzzle.css';

const BreakPuzzle = () => {
  const {
    currentKanjiId,
    placedParts,
    timeLeft,
    combo,
    placePart,
    removePart,
    checkAnswer,
    tickTimer,
    goToHome,
  } = useGameStore();

  const [activePart, setActivePart] = useState(null);
  const [isBreaking, setIsBreaking] = useState(true);
  const [result, setResult] = useState(null); // 'correct' | 'wrong' | null

  const kanji = kanjiList.find((k) => k.id === currentKanjiId);

  // パーツをシャッフル（正解 + ダミー）
  const shuffledParts = useMemo(() => {
    if (!kanji) return [];
    const correctParts = kanji.parts;
    const numDummies = Math.min(2, dummyParts.length);
    const selectedDummies = dummyParts
      .filter((d) => !correctParts.some((c) => c.label === d.label))
      .slice(0, numDummies);
    return [...correctParts, ...selectedDummies].sort(() => Math.random() - 0.5);
  }, [kanji]);

  // 配置されていないパーツ
  const availableParts = shuffledParts.filter(
    (part) => !Object.values(placedParts).includes(part.id)
  );

  // タイマー
  useEffect(() => {
    if (isBreaking || result) return;

    const timer = setInterval(() => {
      tickTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, [isBreaking, result, tickTimer]);

  // 破壊アニメーション
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBreaking(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // ドラッグ開始
  const handleDragStart = (event) => {
    const partId = event.active.id;
    const part = shuffledParts.find((p) => p.id === partId);
    setActivePart(part);
  };

  // ドラッグ終了
  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActivePart(null);

    if (over && over.id.startsWith('zone_')) {
      const zoneIndex = parseInt(over.id.replace('zone_', ''));
      // 既に配置されているパーツがあれば入れ替え
      placePart(over.id, active.id);
    }
  };

  // 答え合わせ
  const handleSubmit = () => {
    const isCorrect = checkAnswer();
    setResult(isCorrect ? 'correct' : 'wrong');

    if (!isCorrect) {
      setTimeout(() => setResult(null), 1000);
    }
  };

  if (!kanji) return null;

  // レイアウトに応じたドロップゾーン
  const renderDropZones = () => {
    const zones = [];
    const numParts = kanji.parts.length;

    for (let i = 0; i < numParts; i++) {
      const zoneId = `zone_${i}`;
      const placedPartId = placedParts[zoneId];
      const placedPart = shuffledParts.find((p) => p.id === placedPartId);

      zones.push(
        <DropZone
          key={zoneId}
          id={zoneId}
          placedPart={placedPart}
          expectedType={kanji.parts[i].type}
          onRemove={() => removePart(zoneId)}
        />
      );
    }

    return zones;
  };

  return (
    <div className={`break-puzzle ${result || ''}`}>
      {/* ヘッダー */}
      <div className="puzzle-header">
        <button className="back-btn" onClick={goToHome}>
          ← 戻る
        </button>
        <div className="timer">
          <span className="timer-icon">⏱️</span>
          <span className={`timer-value ${timeLeft <= 10 ? 'warning' : ''}`}>
            {timeLeft}
          </span>
        </div>
        <div className="combo">
          {combo > 0 && <span className="combo-value">{combo}コンボ!</span>}
        </div>
      </div>

      {/* 漢字表示エリア */}
      <div className="kanji-display-area">
        <div className={`kanji-character ${isBreaking ? 'breaking' : ''}`}>
          {isBreaking ? (
            <>
              <span className="original-kanji">{kanji.character}</span>
              <div className="break-effect">
                {kanji.parts.map((part, i) => (
                  <span
                    key={i}
                    className="break-part"
                    style={{
                      '--delay': `${i * 0.1}s`,
                      '--angle': `${(i - kanji.parts.length / 2) * 30}deg`,
                      backgroundColor: '#E8E8E8', // 色を隠す
                    }}
                  >
                    {part.display}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="puzzle-hint">
              <p className="reading">
                {kanji.reading.kun && <span>{kanji.reading.kun}</span>}
                {kanji.reading.on && <span>（{kanji.reading.on}）</span>}
              </p>
              <p className="meaning">{kanji.meaning}</p>
            </div>
          )}
        </div>
      </div>

      {/* パズルエリア */}
      {!isBreaking && (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          {/* ドロップゾーン */}
          <div className={`drop-zones layout-${kanji.layout}`}>
            {renderDropZones()}
          </div>

          {/* パーツ選択エリア */}
          <div className="parts-area">
            <p className="parts-label">パーツを選んでドラッグ！</p>
            <div className="parts-list">
              {availableParts.map((part) => (
                <PuzzlePiece key={part.id} part={part} />
              ))}
            </div>
          </div>

          {/* ドラッグ中の表示 */}
          <DragOverlay>
            {activePart && <PuzzlePiece part={activePart} isDragging />}
          </DragOverlay>
        </DndContext>
      )}

      {/* 決定ボタン */}
      {!isBreaking && (
        <div className="submit-area">
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={Object.keys(placedParts).length !== kanji.parts.length}
          >
            決定！
          </button>
        </div>
      )}

      {/* 結果表示 */}
      {result === 'wrong' && (
        <div className="wrong-overlay">
          <span className="wrong-icon">✗</span>
        </div>
      )}
    </div>
  );
};

export default BreakPuzzle;
