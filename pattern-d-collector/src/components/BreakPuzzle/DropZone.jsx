import { useDroppable } from '@dnd-kit/core';
import './DropZone.css';

const QUIZ_MODE_COLOR = '#E8E8E8';

const DropZone = ({ id, placedPart, expectedType, onRemove, showColor = false }) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  // パズル中は色を隠す
  const bgColor = showColor && placedPart ? placedPart.color : QUIZ_MODE_COLOR;

  return (
    <div
      ref={setNodeRef}
      className={`drop-zone ${isOver ? 'over' : ''} ${placedPart ? 'filled' : ''}`}
      onClick={placedPart ? onRemove : undefined}
    >
      {placedPart ? (
        <div
          className="placed-part"
          style={{ backgroundColor: bgColor }}
        >
          <span className="part-display">{placedPart.display}</span>
        </div>
      ) : (
        <div className="zone-hint">
          <span className="zone-type">?</span>
        </div>
      )}
    </div>
  );
};

export default DropZone;
