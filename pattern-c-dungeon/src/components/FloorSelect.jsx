import { useGameStore } from '../store/gameStore';
import { dungeon } from '../data/dungeonData';
import './FloorSelect.css';

const FloorSelect = () => {
  const { clearedFloors, startFloor, player } = useGameStore();

  return (
    <div className="floor-select-screen">
      <div className="floor-select-container">
        <h1 className="title">
          <span className="title-icon">🏰</span>
          漢字ダンジョン
        </h1>

        <div className="player-summary">
          <span className="player-emoji">🧙</span>
          <div className="player-info">
            <span className="player-level">Lv.{player.level}</span>
            <span className="player-hp">HP: {player.hp}/{player.maxHp}</span>
          </div>
        </div>

        <div className="floors-list">
          {dungeon.floors.map((floor) => {
            const isCleared = clearedFloors.includes(floor.floor);
            const isUnlocked = floor.floor === 1 || clearedFloors.includes(floor.floor - 1);

            return (
              <button
                key={floor.floor}
                className={`floor-card ${isCleared ? 'cleared' : ''} ${!isUnlocked ? 'locked' : ''}`}
                onClick={() => isUnlocked && startFloor(floor.floor)}
                disabled={!isUnlocked}
                style={{ '--theme-color': floor.themeColor }}
              >
                <div className="floor-emoji">{floor.bgEmoji}</div>
                <div className="floor-info">
                  <span className="floor-number">Floor {floor.floor}</span>
                  <span className="floor-name">{floor.name}</span>
                </div>
                <div className="floor-status">
                  {isCleared ? (
                    <span className="status-cleared">✓ クリア</span>
                  ) : !isUnlocked ? (
                    <span className="status-locked">🔒</span>
                  ) : (
                    <span className="status-open">挑戦 →</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <p className="hint-text">
          フロアを選んで冒険を始めよう！
        </p>
      </div>
    </div>
  );
};

export default FloorSelect;
