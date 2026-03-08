import { RATING_VALUES } from '../hooks/useCardDeck';
import './SessionComplete.css';

function SessionComplete({ stats, weakCards, onRestartWeak, onRestartAll }) {
  const { ratingCounts, accuracy, totalRated, skippedCount } = stats;

  const getGrade = () => {
    if (accuracy >= 90) return { label: '素晴らしい！', color: '#4ECDC4' };
    if (accuracy >= 70) return { label: 'よくできました！', color: '#A8E6CF' };
    if (accuracy >= 50) return { label: 'もう少し！', color: '#FFE66D' };
    return { label: '頑張りましょう！', color: '#FF6B6B' };
  };

  const grade = getGrade();

  return (
    <div className="session-complete">
      <div className="complete-header">
        <h2>学習完了！</h2>
        <div className="grade-badge" style={{ backgroundColor: grade.color }}>
          {grade.label}
        </div>
      </div>

      <div className="stats-section">
        <div className="accuracy-display">
          <div className="accuracy-circle" style={{ '--accent-color': grade.color }}>
            <span className="accuracy-value">{Math.round(accuracy)}</span>
            <span className="accuracy-percent">%</span>
          </div>
          <p className="accuracy-label">理解度</p>
        </div>

        <div className="rating-breakdown">
          <h3>評価の内訳</h3>
          <div className="breakdown-list">
            <div className="breakdown-item">
              <span className="item-emoji"></span>
              <span className="item-label">完璧！</span>
              <span className="item-count">{ratingCounts[RATING_VALUES.PERFECT]}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-emoji"></span>
              <span className="item-label">わかった</span>
              <span className="item-count">{ratingCounts[RATING_VALUES.GOOD]}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-emoji"></span>
              <span className="item-label">なんとなく</span>
              <span className="item-count">{ratingCounts[RATING_VALUES.HARD]}</span>
            </div>
            <div className="breakdown-item">
              <span className="item-emoji"></span>
              <span className="item-label">もう一度</span>
              <span className="item-count">{ratingCounts[RATING_VALUES.AGAIN]}</span>
            </div>
            {skippedCount > 0 && (
              <div className="breakdown-item skipped">
                <span className="item-emoji">⏭️</span>
                <span className="item-label">スキップ</span>
                <span className="item-count">{skippedCount}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="action-buttons">
        {weakCards.length > 0 && (
          <button className="action-button weak" onClick={onRestartWeak}>
            <span className="button-icon">🔄</span>
            <span className="button-text">
              苦手な漢字だけ復習
              <span className="button-count">（{weakCards.length}字）</span>
            </span>
          </button>
        )}
        <button className="action-button all" onClick={onRestartAll}>
          <span className="button-icon">📚</span>
          <span className="button-text">全ての漢字をもう一度</span>
        </button>
      </div>

      {weakCards.length > 0 && (
        <div className="weak-cards-preview">
          <h4>復習が必要な漢字</h4>
          <div className="weak-cards-list">
            {weakCards.map((card) => (
              <span key={card.id} className="weak-card-badge">
                {card.character}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SessionComplete;
