import { ELEMENTS, PERSONALITIES, RARITIES } from '../../data/kanjiData';
import './CharacterCard.css';

const CharacterCard = ({ kanji, level = 1, size = 'medium', showDetails = true }) => {
  if (!kanji) return null;

  const element = ELEMENTS[kanji.element] || ELEMENTS.earth;
  const personality = PERSONALITIES[kanji.personality] || PERSONALITIES.cheerful;
  const rarity = RARITIES[kanji.rarity] || RARITIES.N;

  return (
    <div
      className={`character-card size-${size} rarity-${kanji.rarity || 'N'}`}
      style={{ '--rarity-glow': rarity.glow, '--rarity-color': rarity.color }}
    >
      {/* レア度の星 */}
      <div className="rarity-stars">
        {[...Array(rarity.stars)].map((_, i) => (
          <span key={i} className="star">★</span>
        ))}
      </div>

      {/* 属性バッジ */}
      <div
        className="element-badge"
        style={{ backgroundColor: element.color }}
        title={element.name}
      >
        {element.emoji}
      </div>

      {/* メインキャラ表示 */}
      <div className="character-main">
        <span className="character-emoji">{kanji.emoji}</span>
        <span className="character-kanji">{kanji.character}</span>
      </div>

      {/* 読み */}
      <div className="character-reading">
        {kanji.reading.kun || kanji.reading.on}
      </div>

      {/* レベル */}
      {level > 1 && (
        <div className="character-level">Lv.{level}</div>
      )}

      {/* 詳細情報 */}
      {showDetails && (
        <div className="character-details">
          <div className="personality-row">
            <span className="personality-emoji">{personality.emoji}</span>
            <span className="personality-name">{personality.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
