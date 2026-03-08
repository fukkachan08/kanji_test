import { useGameStore } from '../store/gameStore';
import './PartsCollection.css';

const PartsCollection = ({ onClose }) => {
  const { collectedParts, player, clearedFloors } = useGameStore();

  // 部首タイプごとにグループ化
  const groupedParts = collectedParts.reduce((acc, part) => {
    // 色からタイプを推測
    let type = 'その他';
    if (part.color === '#FF6B6B') type = 'へん';
    else if (part.color === '#4ECDC4') type = 'つくり';
    else if (part.color === '#FFE66D') type = 'かんむり';
    else if (part.color === '#A8E6CF') type = 'あし';
    else if (part.color === '#C3B1E1') type = 'かこい・にょう';
    else if (part.color === '#B0BEC5') type = '独体字';

    if (!acc[type]) acc[type] = [];
    acc[type].push(part);
    return acc;
  }, {});

  const totalParts = collectedParts.reduce((sum, p) => sum + p.count, 0);

  return (
    <div className="collection-overlay">
      <div className="collection-container">
        <div className="collection-header">
          <h2 className="collection-title">
            <span className="title-icon">📚</span>
            部首コレクション
          </h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-label">レベル</span>
            <span className="stat-value">{player.level}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">総部首数</span>
            <span className="stat-value">{totalParts}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">クリアフロア</span>
            <span className="stat-value">{clearedFloors.length}/5</span>
          </div>
        </div>

        <div className="collection-content">
          {Object.keys(groupedParts).length === 0 ? (
            <div className="empty-collection">
              <span className="empty-icon">🎒</span>
              <p>まだ部首を集めていません</p>
              <p className="hint">モンスターを倒して部首をゲットしよう！</p>
            </div>
          ) : (
            Object.entries(groupedParts).map(([type, parts]) => (
              <div key={type} className="collection-group">
                <h3 className="group-title">{type}</h3>
                <div className="parts-grid">
                  {parts.map((part, index) => (
                    <div
                      key={index}
                      className="collection-part"
                      style={{ backgroundColor: part.color }}
                    >
                      <span className="part-character">{part.label}</span>
                      <span className="part-count">×{part.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="collection-legend">
          <h4>部首の種類</h4>
          <div className="legend-items">
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#FF6B6B' }}></span>
              <span>へん（左側）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#4ECDC4' }}></span>
              <span>つくり（右側）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#FFE66D' }}></span>
              <span>かんむり（上部）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#A8E6CF' }}></span>
              <span>あし（下部）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#C3B1E1' }}></span>
              <span>かこい・にょう</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#B0BEC5' }}></span>
              <span>独体字</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsCollection;
