import './MonsterCard.css';

const MonsterCard = ({ monster, showHp = true }) => {
  if (!monster) return null;

  const hpPercent = (monster.currentHp / monster.hp) * 100;
  const hpColor = hpPercent > 50 ? '#4ECDC4' : hpPercent > 25 ? '#FFE66D' : '#FF6B6B';

  return (
    <div className={`monster-card ${monster.isBoss ? 'boss' : ''}`}>
      <div className="monster-emoji-container">
        <span className="monster-emoji">{monster.emoji}</span>
      </div>
      <h3 className="monster-name">{monster.name}</h3>
      {showHp && (
        <div className="monster-hp-container">
          <div className="hp-bar-bg">
            <div
              className="hp-bar-fill"
              style={{
                width: `${hpPercent}%`,
                backgroundColor: hpColor
              }}
            />
          </div>
          <span className="hp-text">
            HP: {monster.currentHp} / {monster.hp}
          </span>
        </div>
      )}
    </div>
  );
};

export default MonsterCard;
