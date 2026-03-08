import { useGameStore } from '../store/gameStore';
import './GameOverScreen.css';

const GameOverScreen = () => {
  const { continueGame, resetGame, player, collectedParts } = useGameStore();

  const totalParts = collectedParts.reduce((sum, p) => sum + p.count, 0);

  return (
    <div className="gameover-screen">
      <div className="gameover-container">
        <div className="gameover-icon">
          <span className="skull">💀</span>
        </div>

        <h1 className="gameover-title">ゲームオーバー</h1>
        <p className="gameover-subtitle">勇者は力尽きた...</p>

        <div className="stats-summary">
          <div className="summary-item">
            <span className="summary-label">到達レベル</span>
            <span className="summary-value">Lv.{player.level}</span>
          </div>
          <div className="summary-item">
            <span className="summary-label">集めた部首</span>
            <span className="summary-value">{totalParts}個</span>
          </div>
        </div>

        <div className="gameover-actions">
          <button className="action-btn continue" onClick={continueGame}>
            <span className="btn-icon">❤️</span>
            コンティニュー
            <span className="btn-hint">（HP全回復）</span>
          </button>
          <button className="action-btn restart" onClick={resetGame}>
            <span className="btn-icon">🔄</span>
            最初からやり直す
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameOverScreen;
