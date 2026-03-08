import { useGameStore } from '../../store/gameStore';
import { kanjiList } from '../../data/kanjiData';
import './Home.css';

const Home = () => {
  const { startStage, goToCollection, collectedKanji, totalScore } = useGameStore();

  const progress = collectedKanji.length;
  const total = kanjiList.length;

  return (
    <div className="home-screen">
      <div className="home-container">
        {/* タイトル */}
        <div className="home-header">
          <h1 className="app-title">
            <span className="title-emoji">📚</span>
            漢字コレクター
          </h1>
          <p className="app-subtitle">Kanji Collector</p>
        </div>

        {/* 進捗 */}
        <div className="progress-card">
          <div className="progress-stats">
            <div className="stat">
              <span className="stat-value">{progress}</span>
              <span className="stat-label">/ {total} 字</span>
            </div>
            <div className="stat">
              <span className="stat-value">{totalScore}</span>
              <span className="stat-label">スコア</span>
            </div>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>
        </div>

        {/* ステージ選択 */}
        <div className="stage-section">
          <h2 className="section-title">ステージ選択</h2>
          <div className="stage-grid">
            {kanjiList.slice(0, 10).map((kanji, index) => {
              const isCleared = collectedKanji.includes(kanji.id);
              const isLocked = index > 0 && !collectedKanji.includes(kanjiList[index - 1].id);

              return (
                <button
                  key={kanji.id}
                  className={`stage-btn ${isCleared ? 'cleared' : ''} ${isLocked ? 'locked' : ''}`}
                  onClick={() => !isLocked && startStage(index)}
                  disabled={isLocked}
                >
                  {isLocked ? (
                    <span className="lock-icon">🔒</span>
                  ) : isCleared ? (
                    <>
                      <span className="stage-kanji">{kanji.character}</span>
                      <span className="cleared-badge">✓</span>
                    </>
                  ) : (
                    <>
                      <span className="stage-number">{index + 1}</span>
                      <span className="stage-emoji">{kanji.emoji}</span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* メニュー */}
        <div className="menu-section">
          <button className="menu-btn collection" onClick={goToCollection}>
            <span className="menu-icon">📖</span>
            <span className="menu-label">図鑑</span>
            <span className="menu-count">{progress}字</span>
          </button>
        </div>

        {/* フッター */}
        <p className="home-hint">
          漢字を「割って」組み立て、図鑑をコンプリートしよう！
        </p>
      </div>
    </div>
  );
};

export default Home;
