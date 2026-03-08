import { useGameStore } from '../store/gameStore';
import MonsterCard from './MonsterCard';
import PlayerStatus from './PlayerStatus';
import KanjiPuzzle from './KanjiPuzzle';
import './BattleScreen.css';

const BattleScreen = () => {
  const { currentBattle, effect } = useGameStore();

  if (!currentBattle) return null;

  const { monster, kanji } = currentBattle;

  return (
    <div className={`battle-screen ${effect ? `effect-${effect}` : ''}`}>
      {/* 攻撃エフェクト */}
      {effect === 'attack' && (
        <div className="attack-effect">
          <span className="lightning">⚡</span>
          <span className="lightning delay-1">⚡</span>
          <span className="lightning delay-2">⚡</span>
        </div>
      )}

      {/* ダメージエフェクト */}
      {effect === 'damage' && (
        <div className="damage-overlay" />
      )}

      <div className="battle-container">
        {/* モンスター表示 */}
        <div className="monster-area">
          <MonsterCard monster={monster} />
        </div>

        {/* 問題エリア */}
        <div className="puzzle-area">
          <KanjiPuzzle />
        </div>

        {/* プレイヤー表示 */}
        <div className="player-area">
          <PlayerStatus />
        </div>
      </div>
    </div>
  );
};

export default BattleScreen;
