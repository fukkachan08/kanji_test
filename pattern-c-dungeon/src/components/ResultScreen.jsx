import { useGameStore } from '../store/gameStore';
import './ResultScreen.css';

const ResultScreen = () => {
  const { currentBattle, returnToMap, player } = useGameStore();

  if (!currentBattle) return null;

  const { monster, kanji } = currentBattle;

  return (
    <div className="result-screen">
      <div className="result-container">
        <div className="result-header">
          <span className="trophy-emoji">🏆</span>
          <h2 className="result-title">勝利！</h2>
        </div>

        <div className="defeated-monster">
          <span className="monster-emoji-large">{monster.emoji}</span>
          <p className="monster-defeated-text">
            {monster.name}を倒した！
          </p>
        </div>

        <div className="rewards-section">
          <h3 className="rewards-title">獲得したもの</h3>
          <div className="reward-item">
            <span className="reward-icon">✨</span>
            <span className="reward-text">経験値: +{monster.isBoss ? 50 : 20} XP</span>
          </div>
          <div className="reward-item">
            <span
              className="reward-part"
              style={{ backgroundColor: monster.dropPart.color }}
            >
              {monster.dropPart.label}
            </span>
            <span className="reward-text">部首をゲット！</span>
          </div>
        </div>

        <div className="kanji-story">
          <div className="story-kanji">{kanji.character}</div>
          <p className="story-text">{kanji.story}</p>
        </div>

        <button className="continue-btn" onClick={returnToMap}>
          冒険を続ける
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
