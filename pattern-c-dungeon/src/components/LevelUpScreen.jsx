import { useGameStore } from '../store/gameStore';
import './LevelUpScreen.css';

const LevelUpScreen = () => {
  const { player, returnToMap } = useGameStore();

  return (
    <div className="levelup-screen">
      {/* 紙吹雪エフェクト */}
      <div className="confetti-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              '--delay': `${Math.random() * 2}s`,
              '--x': `${Math.random() * 100}vw`,
              '--rotation': `${Math.random() * 360}deg`,
              '--color': ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A8E6CF', '#C3B1E1'][Math.floor(Math.random() * 5)]
            }}
          />
        ))}
      </div>

      <div className="levelup-container">
        <div className="levelup-badge">
          <span className="star">⭐</span>
          <span className="star delay-1">⭐</span>
          <span className="star delay-2">⭐</span>
        </div>

        <h1 className="levelup-title">レベルアップ！</h1>

        <div className="new-level">
          <span className="level-label">Lv.</span>
          <span className="level-number">{player.level}</span>
        </div>

        <div className="stat-changes">
          <div className="stat-change">
            <span className="stat-icon">❤️</span>
            <span className="stat-name">最大HP</span>
            <span className="stat-arrow">→</span>
            <span className="stat-new">{player.maxHp}</span>
          </div>
          <div className="stat-change">
            <span className="stat-icon">⚔️</span>
            <span className="stat-name">攻撃力</span>
            <span className="stat-arrow">→</span>
            <span className="stat-new">{player.attack}</span>
          </div>
          <div className="stat-change hp-restored">
            <span className="stat-icon">✨</span>
            <span className="stat-name">HPが全回復！</span>
          </div>
        </div>

        <button className="continue-btn" onClick={returnToMap}>
          続ける
        </button>
      </div>
    </div>
  );
};

export default LevelUpScreen;
