import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
  KeyboardSensor
} from '@dnd-kit/core';
import { useState } from 'react';
import DropZone from './DropZone';
import PuzzlePiece from './PuzzlePiece';
import styles from './KanjiBoard.module.css';

export const KanjiBoard = ({
  currentKanji,
  remainingParts,
  placedParts,
  wrongAttempts,
  isCorrect,
  allPartsPlaced,
  onPlacePart,
  onRemovePart,
  onSubmit,
  onShowHint
}) => {
  const [activeId, setActiveId] = useState(null);
  const [activePart, setActivePart] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);

    // パーツを探す
    const part = remainingParts.find(p => p.id === active.id) ||
                 Object.values(placedParts).find(p => p?.id === active.id);
    setActivePart(part);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveId(null);
    setActivePart(null);

    if (!over) return;

    const partId = active.id;
    const zoneId = over.id;

    // DropZoneにドロップした場合
    if (zoneId.startsWith('zone_')) {
      // パーツを探す
      let draggedPart = remainingParts.find(p => p.id === partId);

      // 配置済みパーツからドラッグしている場合
      if (!draggedPart) {
        const sourceZone = Object.entries(placedParts).find(([, p]) => p?.id === partId);
        if (sourceZone) {
          draggedPart = sourceZone[1];
          onRemovePart(sourceZone[0]);
        }
      }

      if (draggedPart) {
        // 既に別のパーツがある場合は交換
        if (placedParts[zoneId]) {
          // 元のパーツは自動的に戻る（stateの更新で）
        }
        onPlacePart(zoneId, draggedPart);
      }
    }

    // パーツエリアにドロップした場合（配置済みパーツを戻す）
    if (zoneId === 'parts-area') {
      const sourceZone = Object.entries(placedParts).find(([, p]) => p?.id === partId);
      if (sourceZone) {
        onRemovePart(sourceZone[0]);
      }
    }
  };

  const getLayoutClass = () => {
    switch (currentKanji?.layout) {
      case 'leftright':
        return styles.layoutLeftRight;
      case 'topbottom':
        return styles.layoutTopBottom;
      case 'surround':
        return styles.layoutSurround;
      default:
        return styles.layoutLeftRight;
    }
  };

  if (!currentKanji) {
    return <div className={styles.loading}>読み込み中...</div>;
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className={styles.board}>
        {/* 問題表示エリア */}
        <div className={styles.questionArea}>
          <div className={styles.questionLabel}>読み方・意味</div>
          <div className={styles.reading}>{currentKanji.reading}</div>
          <div className={styles.meaning}>{currentKanji.meaning}</div>
        </div>

        {/* DropZoneエリア */}
        <div className={styles.dropArea}>
          <div className={`${styles.dropZones} ${getLayoutClass()}`}>
            {currentKanji.parts.map((part, index) => {
              const zoneId = `zone_${index}`;
              return (
                <DropZone
                  key={zoneId}
                  id={zoneId}
                  placedPart={placedParts[zoneId]}
                  expectedType={part.type}
                  isCorrect={isCorrect}
                  isWrong={wrongAttempts[zoneId]}
                  layout={currentKanji.layout}
                  position={index}
                />
              );
            })}
          </div>
        </div>

        {/* コントロールエリア */}
        <div className={styles.controlArea}>
          <button
            className={styles.hintButton}
            onClick={onShowHint}
            aria-label="ヒントを見る"
          >
            ヒント
          </button>
          <button
            className={`${styles.submitButton} ${allPartsPlaced ? styles.active : ''}`}
            onClick={onSubmit}
            disabled={!allPartsPlaced || isCorrect}
            aria-label="答えをチェックする"
          >
            答え合わせ
          </button>
        </div>

        {/* パーツエリア */}
        <div className={styles.partsArea} id="parts-area">
          <div className={styles.partsLabel}>パーツを選んでドラッグしよう</div>
          <div className={styles.partsGrid}>
            {remainingParts.map((part) => (
              <PuzzlePiece
                key={part.id}
                part={part}
                isDragging={activeId === part.id}
              />
            ))}
          </div>
        </div>
      </div>

      <DragOverlay>
        {activePart ? (
          <PuzzlePiece part={activePart} isDragging={true} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanjiBoard;
