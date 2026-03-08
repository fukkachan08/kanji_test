import styles from './ScorePanel.module.css';

export const ScorePanel = ({ score, correctCount, currentIndex, totalKanji }) => {
  const progress = ((currentIndex + 1) / totalKanji) * 100;

  return (
    <div className={styles.panel}>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>スコア</span>
          <span className={styles.statValue}>{score}</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>正解数</span>
          <span className={styles.statValue}>{correctCount} / {totalKanji}</span>
        </div>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.progressLabel}>
          進捗: {currentIndex + 1} / {totalKanji}
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={0}
            aria-valuemax={totalKanji}
          />
        </div>
      </div>
    </div>
  );
};

export default ScorePanel;
