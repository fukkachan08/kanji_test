import { useDroppable } from '@dnd-kit/core';
import styles from './DropZone.module.css';

export const DropZone = ({
  id,
  placedPart,
  expectedType,
  isCorrect,
  isWrong,
  layout,
  position
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: { expectedType }
  });

  const getZoneLabel = () => {
    const labels = {
      hen: 'へん',
      tsukuri: 'つくり',
      kanmuri: 'かんむり',
      ashi: 'あし',
      kakoi: 'かこい',
      nyou: 'にょう'
    };
    return labels[expectedType] || 'パーツ';
  };

  const getPositionLabel = () => {
    if (layout === 'leftright') {
      return position === 0 ? '左' : '右';
    } else if (layout === 'topbottom') {
      return position === 0 ? '上' : '下';
    } else if (layout === 'surround') {
      return position === 0 ? '外側' : '内側';
    }
    return '';
  };

  return (
    <div
      ref={setNodeRef}
      className={`
        ${styles.zone}
        ${isOver ? styles.over : ''}
        ${placedPart ? styles.filled : ''}
        ${isCorrect ? styles.correct : ''}
        ${isWrong ? styles.wrong : ''}
      `}
      style={placedPart ? { '--part-color': placedPart.color } : {}}
      aria-label={`${getPositionLabel()}の${getZoneLabel()}を置く場所`}
      role="region"
    >
      {placedPart ? (
        <div className={styles.placedPart}>
          <span className={styles.display}>{placedPart.display}</span>
          <span className={styles.label}>{placedPart.label}</span>
        </div>
      ) : (
        <div className={styles.placeholder}>
          <span className={styles.positionLabel}>{getPositionLabel()}</span>
          <span className={styles.typeLabel}>{getZoneLabel()}</span>
        </div>
      )}
    </div>
  );
};

export default DropZone;
