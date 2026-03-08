import { useDraggable } from '@dnd-kit/core';
import styles from './PuzzlePiece.module.css';

export const PuzzlePiece = ({ part, isDragging: externalDragging }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: part.id,
    data: { part }
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        '--part-color': part.color,
      }
    : {
        '--part-color': part.color,
      };

  const dragging = isDragging || externalDragging;

  return (
    <div
      ref={setNodeRef}
      className={`${styles.piece} ${dragging ? styles.dragging : ''}`}
      style={style}
      aria-label={`${part.label}のパーツ`}
      role="button"
      tabIndex={0}
      {...listeners}
      {...attributes}
    >
      <span className={styles.display}>{part.display}</span>
      <span className={styles.label}>{part.label}</span>
    </div>
  );
};

export default PuzzlePiece;
