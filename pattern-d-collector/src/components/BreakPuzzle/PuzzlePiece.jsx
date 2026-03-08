import { useDraggable } from '@dnd-kit/core';
import './PuzzlePiece.css';

// クイズモード（パズル中）は色なし、結果表示時は色あり
const QUIZ_MODE_COLOR = '#E8E8E8'; // パズル中の統一色

const PuzzlePiece = ({ part, isDragging = false, showColor = false }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: part.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  // パズル中は色を隠す
  const bgColor = showColor ? part.color : QUIZ_MODE_COLOR;

  return (
    <div
      ref={setNodeRef}
      className={`puzzle-piece ${isDragging ? 'dragging' : ''}`}
      style={{
        ...style,
        backgroundColor: bgColor,
      }}
      {...listeners}
      {...attributes}
      aria-label={`${part.label}のパーツ`}
    >
      <span className="piece-display">{part.display}</span>
      {/* ラベルも隠す（ヒントになるため） */}
    </div>
  );
};

export default PuzzlePiece;
