import { useGameStore } from '../store/gameStore';
import './VictoryScreen.css';

const VictoryScreen = () => {
  const { resetGame, player, collectedParts } = useGameStore();

  const totalParts = collectedParts.reduce((sum, p) => sum + p.count, 0);
  const uniqueParts = collectedParts.length;

  return (
    <div className="victory-screen">
      {/* 紙吹雪 */}
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              '--delay': `${Math.random() * 3}s`,
              '--x': `${Math.random() * 100}vw`,
              '--rotation': `${Math.random() * 360}deg`,
              '--color': ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#C3B1E1'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}
      </div>

      <div className="victory-container">
        <div className="victory-badge">
          <span className="crown">👑</span>
        </div>

        <h1 className="victory-title">クリア！</h1>
        <p className="victory-subtitle">全てのダンジョンを制覇した！</p>

        <div className="final-stats">
          <div className="stat-row">
            <span className="stat-icon">⭐</span>
            <span className="stat-name">最終レベル</span>
            <span className="stat-value">Lv.{player.level}</span>
          </div>
          <div className="stat-row">
            <span className="stat-icon">📚</span>
            <span className="stat-name">集めた部首</span>
            <span className="stat-value">{totalParts}個</span>
          </div>
          <div className="stat-row">
            <span className="stat-icon">🎯</span>
            <span className="stat-name">部首の種類</span>
            <span className="stat-value">{uniqueParts}種類</span>
          </div>
        </div>

        <div className="collection-preview">
          <h3>獲得した部首</h3>
          <div className="parts-showcase">
            {collectedParts.slice(0, 12).map((part, index) => (
              <span
                key={index}
                className="showcase-part"
                style={{ backgroundColor: part.color }}
              >
                {part.label}
              </span>
            ))}
            {collectedParts.length > 12 && (
              <span className="more-parts">+{collectedParts.length - 12}</span>
            )}
          </div>
        </div>

        <div className="victory-message">
          <p>おめでとう！</p>
          <p>漢字の部首マスターになった！</p>
        </div>

        <button className="restart-btn" onClick={resetGame}>
          <span className="btn-icon">🔄</span>
          もう一度遊ぶ
        </button>
      </div>
    </div>
  );
};

export default VictoryScreen;
