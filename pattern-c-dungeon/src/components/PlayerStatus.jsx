import { useGameStore } from '../store/gameStore';
import './PlayerStatus.css';

const PlayerStatus = ({ compact = false }) => {
  const { player, collectedParts } = useGameStore();

  const hpPercent = (player.hp / player.maxHp) * 100;
  const xpPercent = (player.xp / (player.level * 100)) * 100;

  // コレクションを数で並び替え
  const topParts = [...collectedParts]
    .sort((a, b) => b.count - a.count)
    .slice(0, compact ? 3 : 6);

  if (compact) {
    return (
      <div className="player-status compact">
        <div className="player-info-row">
          <span className="player-emoji">🧙</span>
          <span className="player-level">Lv.{player.level}</span>
        </div>
        <div className="hp-bar-mini">
          <div
            className="hp-bar-fill"
            style={{ width: `${hpPercent}%` }}
          />
        </div>
        <div className="parts-mini">
          {topParts.map((part, index) => (
            <span
              key={index}
              className="part-badge-mini"
              style={{ backgroundColor: part.color }}
            >
              {part.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="player-status">
      <div className="player-header">
        <span className="player-emoji large">🧙</span>
        <div className="player-info">
          <span className="player-name">あなた</span>
          <span className="player-level-badge">Lv.{player.level}</span>
        </div>
      </div>

      <div className="stat-bars">
        <div className="stat-row">
          <span className="stat-label">HP</span>
          <div className="stat-bar-bg hp">
            <div
              className="stat-bar-fill hp"
              style={{ width: `${hpPercent}%` }}
            />
          </div>
          <span className="stat-value">{player.hp}/{player.maxHp}</span>
        </div>

        <div className="stat-row">
          <span className="stat-label">XP</span>
          <div className="stat-bar-bg xp">
            <div
              className="stat-bar-fill xp"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
          <span className="stat-value">{player.xp}/{player.level * 100}</span>
        </div>
      </div>

      {topParts.length > 0 && (
        <div className="collected-parts">
          <span className="parts-label">所持部首:</span>
          <div className="parts-list">
            {topParts.map((part, index) => (
              <span
                key={index}
                className="part-badge"
                style={{ backgroundColor: part.color }}
              >
                {part.label}×{part.count}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerStatus;
