import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { monsters } from '../data/monsterData';
import { dungeon, generateFloorMap } from '../data/dungeonData';
import { kanjiList } from '../data/kanjiData';

const INITIAL_PLAYER_HP = 100;
const INITIAL_PLAYER_MAX_HP = 100;
const HP_PER_LEVEL = 20;
const XP_PER_LEVEL = 100;

const initialState = {
  // プレイヤー状態
  player: {
    hp: INITIAL_PLAYER_HP,
    maxHp: INITIAL_PLAYER_MAX_HP,
    level: 1,
    xp: 0,
    attack: 25,
    position: { x: 2, y: 4 } // スタート位置
  },

  // ゲーム状態
  gameState: 'map', // 'map' | 'battle' | 'result' | 'levelup' | 'gameover' | 'victory' | 'floorSelect'

  // ダンジョン状態
  currentFloor: 1,
  floorMap: null,
  defeatedMonsters: [], // このフロアで倒したモンスターの位置
  clearedFloors: [],

  // バトル状態
  currentBattle: null,

  // コレクション
  collectedParts: [], // { label, color, count }

  // エフェクト
  effect: null // 'attack' | 'damage' | 'levelup' | null
};

export const useGameStore = create(
  persist(
    (set, get) => ({
      ...initialState,

      // ゲーム初期化
      initGame: () => {
        const floorMap = generateFloorMap(1);
        // スタート位置を探す
        let startPos = { x: 2, y: 4 };
        for (let y = 0; y < floorMap.length; y++) {
          for (let x = 0; x < floorMap[y].length; x++) {
            if (floorMap[y][x] === 'start') {
              startPos = { x, y };
              break;
            }
          }
        }
        set({
          ...initialState,
          floorMap,
          player: { ...initialState.player, position: startPos }
        });
      },

      // フロア選択画面へ
      goToFloorSelect: () => {
        set({ gameState: 'floorSelect' });
      },

      // フロア開始
      startFloor: (floorNumber) => {
        const floorMap = generateFloorMap(floorNumber);
        // スタート位置を探す
        let startPos = { x: 2, y: 4 };
        for (let y = 0; y < floorMap.length; y++) {
          for (let x = 0; x < floorMap[y].length; x++) {
            if (floorMap[y][x] === 'start') {
              startPos = { x, y };
              break;
            }
          }
        }
        set({
          currentFloor: floorNumber,
          floorMap,
          defeatedMonsters: [],
          gameState: 'map',
          player: { ...get().player, position: startPos }
        });
      },

      // プレイヤー移動
      movePlayer: (dx, dy) => {
        const state = get();
        if (state.gameState !== 'map') return;

        const newX = state.player.position.x + dx;
        const newY = state.player.position.y + dy;

        // 範囲チェック
        if (newX < 0 || newX >= 5 || newY < 0 || newY >= 5) return;

        const tile = state.floorMap[newY][newX];

        // 壁チェック
        if (tile === 'wall') return;

        // 移動
        set({
          player: { ...state.player, position: { x: newX, y: newY } }
        });

        // タイルに応じたアクション
        const posKey = `${newX},${newY}`;

        if ((tile === 'monster' || tile === 'boss') && !state.defeatedMonsters.includes(posKey)) {
          // モンスターとエンカウント
          get().startBattle(newX, newY, tile === 'boss');
        } else if (tile === 'exit') {
          // 次のフロアへ（ボスを倒していれば）
          const floorData = dungeon.floors.find(f => f.floor === state.currentFloor);
          const bossDefeated = state.defeatedMonsters.some(pos => {
            const [x, y] = pos.split(',').map(Number);
            return state.floorMap[y][x] === 'boss';
          });

          // ボスがいないフロアか、ボスを倒した場合
          const hasBoss = state.floorMap.flat().includes('boss');
          if (!hasBoss || bossDefeated) {
            get().completeFloor();
          }
        }
      },

      // バトル開始
      startBattle: (x, y, isBoss = false) => {
        const state = get();
        const floorData = dungeon.floors.find(f => f.floor === state.currentFloor);

        // このフロアのモンスターからランダムに選択
        let monsterId;
        if (isBoss) {
          monsterId = floorData.boss;
        } else {
          const monsterIds = floorData.monsters;
          monsterId = monsterIds[Math.floor(Math.random() * monsterIds.length)];
        }

        const monster = monsters.find(m => m.id === monsterId);
        const kanji = kanjiList.find(k => k.id === monster.kanjiId);

        set({
          gameState: 'battle',
          currentBattle: {
            monster: { ...monster, currentHp: monster.hp },
            kanji,
            position: { x, y },
            isBoss
          }
        });
      },

      // モンスターにダメージ
      damageMonster: (damage) => {
        const state = get();
        if (!state.currentBattle) return;

        const newHp = Math.max(0, state.currentBattle.monster.currentHp - damage);

        set({
          currentBattle: {
            ...state.currentBattle,
            monster: { ...state.currentBattle.monster, currentHp: newHp }
          },
          effect: 'attack'
        });

        // エフェクトをクリア
        setTimeout(() => set({ effect: null }), 500);

        // モンスター撃破チェック
        if (newHp <= 0) {
          setTimeout(() => get().defeatMonster(), 600);
        }
      },

      // プレイヤーにダメージ
      damagePlayer: (damage) => {
        const state = get();
        const newHp = Math.max(0, state.player.hp - damage);

        set({
          player: { ...state.player, hp: newHp },
          effect: 'damage'
        });

        // エフェクトをクリア
        setTimeout(() => set({ effect: null }), 500);

        // ゲームオーバーチェック
        if (newHp <= 0) {
          setTimeout(() => set({ gameState: 'gameover' }), 600);
        }
      },

      // モンスター撃破
      defeatMonster: () => {
        const state = get();
        if (!state.currentBattle) return;

        const { monster, position, isBoss } = state.currentBattle;
        const posKey = `${position.x},${position.y}`;

        // XP獲得
        const xpGain = isBoss ? 50 : 20;
        const newXp = state.player.xp + xpGain;

        // ドロップ部首を追加
        const dropPart = monster.dropPart;
        const existingPart = state.collectedParts.find(p => p.label === dropPart.label);
        let newCollectedParts;

        if (existingPart) {
          newCollectedParts = state.collectedParts.map(p =>
            p.label === dropPart.label ? { ...p, count: p.count + 1 } : p
          );
        } else {
          newCollectedParts = [...state.collectedParts, { ...dropPart, count: 1 }];
        }

        set({
          defeatedMonsters: [...state.defeatedMonsters, posKey],
          collectedParts: newCollectedParts,
          player: { ...state.player, xp: newXp },
          gameState: 'result'
        });

        // レベルアップチェック
        if (newXp >= state.player.level * XP_PER_LEVEL) {
          setTimeout(() => get().levelUp(), 1500);
        }
      },

      // レベルアップ
      levelUp: () => {
        const state = get();
        const newLevel = state.player.level + 1;
        const newMaxHp = INITIAL_PLAYER_MAX_HP + (newLevel - 1) * HP_PER_LEVEL;

        set({
          player: {
            ...state.player,
            level: newLevel,
            maxHp: newMaxHp,
            hp: newMaxHp, // 全回復
            xp: state.player.xp - state.player.level * XP_PER_LEVEL,
            attack: state.player.attack + 5
          },
          effect: 'levelup',
          gameState: 'levelup'
        });

        setTimeout(() => set({ effect: null }), 2000);
      },

      // フロアクリア
      completeFloor: () => {
        const state = get();
        const newClearedFloors = state.clearedFloors.includes(state.currentFloor)
          ? state.clearedFloors
          : [...state.clearedFloors, state.currentFloor];

        set({ clearedFloors: newClearedFloors });

        if (state.currentFloor >= dungeon.floors.length) {
          // 全フロアクリア
          set({ gameState: 'victory' });
        } else {
          // 次のフロアへ
          get().startFloor(state.currentFloor + 1);
        }
      },

      // マップに戻る
      returnToMap: () => {
        set({
          gameState: 'map',
          currentBattle: null
        });
      },

      // 回復
      heal: (amount) => {
        const state = get();
        const newHp = Math.min(state.player.maxHp, state.player.hp + amount);
        set({
          player: { ...state.player, hp: newHp }
        });
      },

      // リセット
      resetGame: () => {
        const floorMap = generateFloorMap(1);
        let startPos = { x: 2, y: 4 };
        for (let y = 0; y < floorMap.length; y++) {
          for (let x = 0; x < floorMap[y].length; x++) {
            if (floorMap[y][x] === 'start') {
              startPos = { x, y };
              break;
            }
          }
        }
        set({
          ...initialState,
          floorMap,
          player: { ...initialState.player, position: startPos },
          collectedParts: [] // コレクションもリセット
        });
      },

      // 継続（ゲームオーバーから復活）
      continueGame: () => {
        const state = get();
        set({
          player: { ...state.player, hp: state.player.maxHp },
          gameState: 'map',
          currentBattle: null
        });
      }
    }),
    {
      name: 'kanji-dungeon-storage',
      partialize: (state) => ({
        player: state.player,
        currentFloor: state.currentFloor,
        clearedFloors: state.clearedFloors,
        collectedParts: state.collectedParts,
        defeatedMonsters: state.defeatedMonsters
      })
    }
  )
);

export default useGameStore;
