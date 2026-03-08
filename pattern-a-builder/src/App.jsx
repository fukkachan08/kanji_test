import { useState } from 'react';
import { useKanjiGame } from './hooks/useKanjiGame';
import KanjiBoard from './components/KanjiBoard';
import ScorePanel from './components/ScorePanel';
import StoryPopup from './components/StoryPopup';
import './App.css';

function App() {
  const {
    currentKanji,
    currentIndex,
    totalKanji,
    remainingParts,
    placedParts,
    score,
    correctCount,
    showStory,
    isCorrect,
    wrongAttempts,
    allPartsPlaced,
    placePart,
    removePart,
    submitAnswer,
    nextKanji,
    closeStory,
    resetGame,
    getHint
  } = useKanjiGame();

  const [showHint, setShowHint] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const handleShowHint = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 3000);
  };

  const handleNextKanji = () => {
    if (currentIndex >= totalKanji - 1) {
      closeStory();
      setShowComplete(true);
    } else {
      nextKanji();
    }
  };

  const handleRestart = () => {
    setShowComplete(false);
    resetGame();
  };

  // 完了画面
  if (showComplete) {
    return (
      <div className="app">
        <div className="complete-screen">
          <div className="complete-content">
            <h1 className="complete-title">おめでとう!</h1>
            <div className="complete-icon">🎉</div>
            <p className="complete-message">
              全ての漢字を学習しました!
            </p>
            <div className="complete-stats">
              <div className="complete-stat">
                <span className="complete-stat-label">最終スコア</span>
                <span className="complete-stat-value">{score}</span>
              </div>
              <div className="complete-stat">
                <span className="complete-stat-label">正解数</span>
                <span className="complete-stat-value">{correctCount} / {totalKanji}</span>
              </div>
            </div>
            <button className="restart-button" onClick={handleRestart}>
              もう一度挑戦する
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">漢字ビルダー</h1>
        <p className="app-subtitle">パーツを組み合わせて漢字を作ろう!</p>
      </header>

      <main className="app-main">
        <ScorePanel
          score={score}
          correctCount={correctCount}
          currentIndex={currentIndex}
          totalKanji={totalKanji}
        />

        <KanjiBoard
          currentKanji={currentKanji}
          remainingParts={remainingParts}
          placedParts={placedParts}
          wrongAttempts={wrongAttempts}
          isCorrect={isCorrect}
          allPartsPlaced={allPartsPlaced}
          onPlacePart={placePart}
          onRemovePart={removePart}
          onSubmit={submitAnswer}
          onShowHint={handleShowHint}
        />

        {/* ヒント表示 */}
        {showHint && (
          <div className="hint-popup" role="alert">
            <div className="hint-content">
              <span className="hint-icon">💡</span>
              <span className="hint-text">{getHint()}</span>
            </div>
          </div>
        )}
      </main>

      {/* ストーリーポップアップ */}
      {showStory && (
        <StoryPopup
          kanji={currentKanji}
          onClose={closeStory}
          onNext={handleNextKanji}
          isLastKanji={currentIndex >= totalKanji - 1}
        />
      )}
    </div>
  );
}

export default App;
