import { useEffect, useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { kanjiList, ELEMENTS, PERSONALITIES, RARITIES } from '../../data/kanjiData';
import CharacterCard from '../CharacterCard';
import './Result.css';

const Result = () => {
  const { currentKanjiId, score, combo, nextStage, goToHome, goToCollection } = useGameStore();
  const [showCharacter, setShowCharacter] = useState(false);

  const kanji = kanjiList.find((k) => k.id === currentKanjiId);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCharacter(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!kanji) return null;

  return (
    <div className="result-screen">
      {/* 紙吹雪 */}
      <div className="confetti-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              '--delay': `${Math.random() * 2}s`,
              '--x': `${Math.random() * 100}vw`,
              '--color': ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#C3B1E1'][
                Math.floor(Math.random() * 5)
              ],
            }}
          />
        ))}
      </div>

      <div className="result-container">
        {/* キャラGET演出 */}
        <div className={`character-get ${showCharacter ? 'show' : ''}`}>
          <div className="character-glow" />

          {/* キャラクターカード */}
          <CharacterCard kanji={kanji} size="large" showDetails={false} />

          <p className="get-text">GET!</p>

          {/* キャッチフレーズ吹き出し */}
          {kanji.catchphrase && (
            <div className="catchphrase-bubble">
              <span className="catchphrase-text">「{kanji.catchphrase}」</span>
            </div>
          )}
        </div>

        {/* キャラクター詳細情報 */}
        <div className="character-details-section">
          {/* 属性・性格 */}
          <div className="character-traits">
            <div className="trait-badge element" style={{ backgroundColor: ELEMENTS[kanji.element]?.color }}>
              <span className="trait-emoji">{ELEMENTS[kanji.element]?.emoji}</span>
              <span className="trait-name">{ELEMENTS[kanji.element]?.name}属性</span>
            </div>
            <div className="trait-badge personality">
              <span className="trait-emoji">{PERSONALITIES[kanji.personality]?.emoji}</span>
              <span className="trait-name">{PERSONALITIES[kanji.personality]?.name}</span>
            </div>
            <div className="trait-badge rarity" style={{ borderColor: RARITIES[kanji.rarity]?.color }}>
              <span className="trait-stars">{'★'.repeat(RARITIES[kanji.rarity]?.stars || 1)}</span>
              <span className="trait-name">{RARITIES[kanji.rarity]?.name}</span>
            </div>
          </div>
        </div>

        {/* 漢字情報 */}
        <div className="kanji-info">
          <div className="reading-row">
            {kanji.reading.kun && <span className="kun">{kanji.reading.kun}</span>}
            {kanji.reading.on && <span className="on">（{kanji.reading.on}）</span>}
          </div>
          <p className="meaning">{kanji.meaning}</p>
          <p className="story">{kanji.story}</p>
        </div>

        {/* スコア */}
        <div className="score-section">
          <div className="score-row">
            <span className="score-label">スコア</span>
            <span className="score-value">+{score}</span>
          </div>
          {combo > 1 && (
            <div className="combo-row">
              <span className="combo-label">{combo}コンボ!</span>
            </div>
          )}
        </div>

        {/* パーツ表示 */}
        <div className="parts-section">
          <p className="parts-label">獲得した部首</p>
          <div className="parts-list">
            {kanji.parts.map((part, i) => (
              <div
                key={i}
                className="part-badge"
                style={{ backgroundColor: part.color }}
              >
                <span className="part-display">{part.display}</span>
                <span className="part-name">{part.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ボタン */}
        <div className="result-actions">
          <button className="action-btn next" onClick={nextStage}>
            次へ進む →
          </button>
          <div className="sub-actions">
            <button className="action-btn sub" onClick={goToCollection}>
              図鑑を見る
            </button>
            <button className="action-btn sub" onClick={goToHome}>
              ホームへ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
