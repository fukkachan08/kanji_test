import { useEffect, useCallback } from 'react';
import { useGameStore } from '../store/gameStore';
import { dungeon, tileTypes } from '../data/dungeonData';
import { monsters } from '../data/monsterData';
import './DungeonMap.css';

const DungeonMap = () => {
  const {
    currentFloor,
    floorMap,
    player,
    defeatedMonsters,
    movePlayer
  } = useGameStore();

  const floorData = dungeon.floors.find(f => f.floor === currentFloor);

  // キーボード操作
  const handleKeyDown = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        e.preventDefault();
        movePlayer(0, -1);
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        e.preventDefault();
        movePlayer(0, 1);
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        e.preventDefault();
        movePlayer(-1, 0);
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        e.preventDefault();
        movePlayer(1, 0);
        break;
      default:
        break;
    }
  }, [movePlayer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // タイルのレンダリング
  const renderTile = (tileType, x, y) => {
    const isPlayer = player.position.x === x && player.position.y === y;
    const posKey = `${x},${y}`;
    const isDefeated = defeatedMonsters.includes(posKey);

    let emoji = '';
    let tileClass = 'tile';

    switch (tileType) {
      case 'wall':
        emoji = '🧱';
        tileClass += ' tile-wall';
        break;
      case 'grass':
        emoji = '';
        tileClass += ' tile-grass';
        break;
      case 'start':
        emoji = '🌟';
        tileClass += ' tile-start';
        break;
      case 'exit':
        emoji = '🚪';
        tileClass += ' tile-exit';
        break;
      case 'monster':
        if (isDefeated) {
          emoji = '';
          tileClass += ' tile-grass';
        } else {
          const floorMonsters = floorData?.monsters || [];
          const monsterId = floorMonsters[Math.floor(Math.random() * floorMonsters.length)];
          const monster = monsters.find(m => m.id === monsterId);
          emoji = monster?.emoji || '👾';
          tileClass += ' tile-monster';
        }
        break;
      case 'boss':
        if (isDefeated) {
          emoji = '';
          tileClass += ' tile-grass';
        } else {
          const bossId = floorData?.boss;
          const boss = monsters.find(m => m.id === bossId);
          emoji = boss?.emoji || '👹';
          tileClass += ' tile-boss';
        }
        break;
      default:
        emoji = '';
        tileClass += ' tile-grass';
    }

    // タップで移動
    const handleTileClick = () => {
      const dx = x - player.position.x;
      const dy = y - player.position.y;

      // 隣接タイルのみ移動可能
      if (Math.abs(dx) + Math.abs(dy) === 1) {
        movePlayer(dx, dy);
      }
    };

    return (
      <div
        key={`${x}-${y}`}
        className={tileClass}
        onClick={handleTileClick}
        style={{
          '--theme-color': floorData?.themeColor || '#4ECDC4'
        }}
      >
        {isPlayer ? (
          <span className="player-sprite">🧙</span>
        ) : (
          <span className="tile-emoji">{emoji}</span>
        )}
      </div>
    );
  };

  if (!floorMap) {
    return <div className="dungeon-loading">Loading...</div>;
  }

  return (
    <div className="dungeon-container">
      <div className="floor-header">
        <span className="floor-emoji">{floorData?.bgEmoji}</span>
        <h2 className="floor-title">
          Floor {currentFloor}: {floorData?.name}
        </h2>
        <span className="floor-emoji">{floorData?.bgEmoji}</span>
      </div>

      <div className="dungeon-grid">
        {floorMap.map((row, y) => (
          row.map((tile, x) => renderTile(tile, x, y))
        ))}
      </div>

      <div className="control-pad">
        <button className="control-btn up" onClick={() => movePlayer(0, -1)}>
          <span>^</span>
        </button>
        <div className="control-row">
          <button className="control-btn left" onClick={() => movePlayer(-1, 0)}>
            <span>&lt;</span>
          </button>
          <button className="control-btn right" onClick={() => movePlayer(1, 0)}>
            <span>&gt;</span>
          </button>
        </div>
        <button className="control-btn down" onClick={() => movePlayer(0, 1)}>
          <span>v</span>
        </button>
      </div>

      <p className="control-hint">
        矢印キー / WASD / タップで移動
      </p>
    </div>
  );
};

export default DungeonMap;
