import { useGameStore } from '../../store/gameStore';
import { kanjiList, PART_TYPE_NAMES } from '../../data/kanjiData';
import './Collection.css';

const Collection = () => {
  const { goToHome, collectedKanji, collectedParts, kanjiLevels } = useGameStore();

  const progress = collectedKanji.length;
  const total = kanjiList.length;

  return (
    <div className="collection-screen">
      <div className="collection-container">
        {/* ヘッダー */}
        <div className="collection-header">
          <button className="back-btn" onClick={goToHome}>
            ← 戻る
          </button>
          <h1 className="collection-title">漢字図鑑</h1>
          <div className="progress-badge">
            {progress}/{total}
          </div>
        </div>

        {/* 漢字グリッド */}
        <div className="kanji-grid">
          {kanjiList.map((kanji) => {
            const isCollected = collectedKanji.includes(kanji.id);
            const level = kanjiLevels[kanji.id] || 1;

            return (
              <div
                key={kanji.id}
                className={`kanji-card ${isCollected ? 'collected' : 'locked'}`}
              >
                {isCollected ? (
                  <>
                    <span className="card-emoji">{kanji.emoji}</span>
                    <span className="card-kanji">{kanji.character}</span>
                    <span className="card-reading">
                      {kanji.reading.kun || kanji.reading.on}
                    </span>
                    {level > 1 && (
                      <span className="card-level">Lv.{level}</span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="card-silhouette">?</span>
                    <span className="card-mystery">???</span>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* 部首コレクション */}
        <div className="parts-collection">
          <h2 className="section-title">部首コレクション</h2>
          {collectedParts.length === 0 ? (
            <p className="empty-message">まだ部首を集めていません</p>
          ) : (
            <div className="parts-grid">
              {collectedParts.map((part, index) => (
                <div
                  key={index}
                  className="part-card"
                  style={{ backgroundColor: part.color }}
                >
                  <span className="part-display">{part.label}</span>
                  <span className="part-count">×{part.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 凡例 */}
        <div className="legend">
          <h3 className="legend-title">部首の種類</h3>
          <div className="legend-grid">
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#FF6B6B' }} />
              <span>へん（左）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#4ECDC4' }} />
              <span>つくり（右）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#FFE66D' }} />
              <span>かんむり（上）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#A8E6CF' }} />
              <span>あし（下）</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#C3B1E1' }} />
              <span>かこい・にょう</span>
            </div>
            <div className="legend-item">
              <span className="legend-color" style={{ backgroundColor: '#B0BEC5' }} />
              <span>独体字</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
