import { useEffect, useState } from 'react';
import { useGameStore } from './store/gameStore';
import FloorSelect from './components/FloorSelect';
import DungeonMap from './components/DungeonMap';
import BattleScreen from './components/BattleScreen';
import ResultScreen from './components/ResultScreen';
import LevelUpScreen from './components/LevelUpScreen';
import GameOverScreen from './components/GameOverScreen';
import VictoryScreen from './components/VictoryScreen';
import PlayerStatus from './components/PlayerStatus';
import PartsCollection from './components/PartsCollection';
import './App.css';

function App() {
  const { gameState, initGame, floorMap, goToFloorSelect } = useGameStore();
  const [showCollection, setShowCollection] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);

  useEffect(() => {
    // ゲーム初期化
    if (!floorMap) {
      initGame();
    }
  }, [floorMap, initGame]);

  // スタート画面
  if (showStartScreen) {
    return (
      <div className="start-screen">
        <div className="start-container">
          <div className="start-logo">
            <span className="logo-emoji">🏰</span>
            <h1 className="start-title">漢字ダンジョン</h1>
            <p className="start-subtitle">Kanji Dungeon</p>
          </div>

          <div className="start-description">
            <p>モンスターを倒して漢字の部首を集めよう！</p>
            <p>クイズに正解してダメージを与えよう！</p>
          </div>

          <div className="start-features">
            <div className="feature">
              <span className="feature-icon">👹</span>
              <span className="feature-text">モンスターバトル</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📚</span>
              <span className="feature-text">部首コレクション</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <span className="feature-text">レベルアップ</span>
            </div>
          </div>

          <button
            className="start-btn"
            onClick={() => {
              setShowStartScreen(false);
              goToFloorSelect();
            }}
          >
            <span className="btn-icon">⚔️</span>
            冒険を始める
          </button>

          <p className="start-hint">矢印キー / WASD / タップで移動</p>
        </div>
      </div>
    );
  }

  // ゲーム画面のレンダリング
  const renderGameScreen = () => {
    switch (gameState) {
      case 'floorSelect':
        return <FloorSelect />;
      case 'map':
        return <DungeonMap />;
      case 'battle':
        return <BattleScreen />;
      case 'result':
        return <ResultScreen />;
      case 'levelup':
        return <LevelUpScreen />;
      case 'gameover':
        return <GameOverScreen />;
      case 'victory':
        return <VictoryScreen />;
      default:
        return <DungeonMap />;
    }
  };

  return (
    <div className="app">
      {/* ヘッダー（マップ画面のみ表示） */}
      {gameState === 'map' && (
        <header className="game-header">
          <PlayerStatus compact />
          <button
            className="collection-btn"
            onClick={() => setShowCollection(true)}
          >
            <span>📚</span>
            <span className="btn-label">部首</span>
          </button>
        </header>
      )}

      {/* メインゲーム画面 */}
      <main className="game-main">
        {renderGameScreen()}
      </main>

      {/* コレクション画面（オーバーレイ） */}
      {showCollection && (
        <PartsCollection onClose={() => setShowCollection(false)} />
      )}
    </div>
  );
}

export default App;
