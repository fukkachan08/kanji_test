import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { kanjiList, ELEMENTS, PERSONALITIES, RARITIES } from '../../data/kanjiData';
import CharacterCard from '../CharacterCard';
import './Collection.css';

const Collection = () => {
  const { goToHome, collectedKanji, collectedParts, kanjiLevels } = useGameStore();
  const [selectedKanji, setSelectedKanji] = useState(null);

  const progress = collectedKanji.length;
  const total = kanjiList.length;

  const handleKanjiClick = (kanji, isCollected) => {
    if (isCollected) {
      setSelectedKanji(kanji);
    }
  };

  const closeDetail = () => {
    setSelectedKanji(null);
  };

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
            const rarity = RARITIES[kanji.rarity] || RARITIES.N;

            return (
              <div
                key={kanji.id}
                className={`kanji-card ${isCollected ? 'collected' : 'locked'} rarity-${kanji.rarity || 'N'}`}
                style={isCollected ? { '--rarity-color': rarity.color, '--rarity-glow': rarity.glow } : {}}
                onClick={() => handleKanjiClick(kanji, isCollected)}
              >
                {isCollected ? (
                  <>
                    <div className="card-rarity-stars">
                      {'★'.repeat(rarity.stars)}
                    </div>
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

      {/* キャラ詳細モーダル */}
      {selectedKanji && (
        <div className="detail-modal-overlay" onClick={closeDetail}>
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDetail}>×</button>

            <div className="modal-character">
              <CharacterCard
                kanji={selectedKanji}
                level={kanjiLevels[selectedKanji.id] || 1}
                size="large"
                showDetails={true}
              />
            </div>

            {/* キャッチフレーズ */}
            {selectedKanji.catchphrase && (
              <div className="modal-catchphrase">
                「{selectedKanji.catchphrase}」
              </div>
            )}

            {/* キャラ情報 */}
            <div className="modal-info">
              <div className="modal-traits">
                <div className="modal-trait" style={{ backgroundColor: ELEMENTS[selectedKanji.element]?.color }}>
                  <span>{ELEMENTS[selectedKanji.element]?.emoji}</span>
                  <span>{ELEMENTS[selectedKanji.element]?.name}属性</span>
                </div>
                <div className="modal-trait personality">
                  <span>{PERSONALITIES[selectedKanji.personality]?.emoji}</span>
                  <span>{PERSONALITIES[selectedKanji.personality]?.name}</span>
                </div>
              </div>

              <div className="modal-reading">
                {selectedKanji.reading.kun && <span className="kun">{selectedKanji.reading.kun}</span>}
                {selectedKanji.reading.on && <span className="on">（{selectedKanji.reading.on}）</span>}
              </div>

              <p className="modal-meaning">{selectedKanji.meaning}</p>
              <p className="modal-story">{selectedKanji.story}</p>

              {/* 構成部首 */}
              <div className="modal-parts">
                <p className="parts-label">構成部首</p>
                <div className="parts-row">
                  {selectedKanji.parts.map((part, i) => (
                    <div
                      key={i}
                      className="part-chip"
                      style={{ backgroundColor: part.color }}
                    >
                      {part.display}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
