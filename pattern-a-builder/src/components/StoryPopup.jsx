import styles from './StoryPopup.module.css';

export const StoryPopup = ({ kanji, onClose, onNext, isLastKanji }) => {
  if (!kanji) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.correctBadge}>正解!</span>
        </div>

        <div className={styles.kanjiDisplay}>
          <span className={styles.character}>{kanji.character}</span>
        </div>

        <div className={styles.info}>
          <div className={styles.reading}>
            <span className={styles.infoLabel}>読み方</span>
            <span className={styles.infoValue}>{kanji.reading}</span>
          </div>
          <div className={styles.meaning}>
            <span className={styles.infoLabel}>意味</span>
            <span className={styles.infoValue}>{kanji.meaning}</span>
          </div>
        </div>

        <div className={styles.storySection}>
          <h3 className={styles.storyTitle}>なりたち</h3>
          <p className={styles.storyText}>{kanji.story}</p>
        </div>

        <div className={styles.partsSection}>
          <h4 className={styles.partsTitle}>パーツ</h4>
          <div className={styles.partsList}>
            {kanji.parts.map((part) => (
              <div
                key={part.id}
                className={styles.partItem}
                style={{ backgroundColor: part.color }}
              >
                <span className={styles.partDisplay}>{part.display}</span>
                <span className={styles.partLabel}>{part.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          {isLastKanji ? (
            <button className={styles.finishButton} onClick={onClose}>
              結果を見る
            </button>
          ) : (
            <button className={styles.nextButton} onClick={onNext}>
              次の漢字へ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoryPopup;
