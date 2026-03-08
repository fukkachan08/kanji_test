import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CardDeck from './components/CardDeck';
import ProgressBar from './components/ProgressBar';
import SessionComplete from './components/SessionComplete';
import { useCardDeck } from './hooks/useCardDeck';
import { kanjiList } from './data/kanjiData';
import './App.css';

function App() {
  const [isStarted, setIsStarted] = useState(false);

  const {
    currentCard,
    cards,
    currentIndex,
    progress,
    stats,
    weakCards,
    isSessionComplete,
    rateCard,
    skipCard,
    markAsCorrect,
    restartWithWeakCards,
    restartAll,
  } = useCardDeck(kanjiList);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleRestartAll = () => {
    restartAll();
  };

  const handleRestartWeak = () => {
    restartWithWeakCards();
  };

  if (!isStarted) {
    return (
      <div className="app">
        <div className="start-screen">
          <motion.div
            className="start-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="app-title">
              <span className="title-kanji">漢</span>
              <span className="title-text">KanjiMonogatari</span>
            </h1>
            <p className="app-subtitle">ストーリーで覚える漢字学習</p>

            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">📖</span>
                <span className="feature-text">漢字の成り立ちをストーリーで学ぶ</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">パーツを色分けして視覚的に理解</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💡</span>
                <span className="feature-text">記憶のコツで忘れない</span>
              </div>
            </div>

            <div className="kanji-preview">
              <span className="preview-kanji">森</span>
              <span className="preview-kanji">休</span>
              <span className="preview-kanji">明</span>
              <span className="preview-more">...</span>
              <span className="preview-count">{kanjiList.length}字</span>
            </div>

            <motion.button
              className="start-button"
              onClick={handleStart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              学習をはじめる
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="header-title">KanjiMonogatari</h1>
        <ProgressBar {...progress} />
      </header>

      <main className="app-main">
        <AnimatePresence mode="wait">
          {isSessionComplete ? (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="complete-container"
            >
              <SessionComplete
                stats={stats}
                weakCards={weakCards}
                onRestartWeak={handleRestartWeak}
                onRestartAll={handleRestartAll}
              />
            </motion.div>
          ) : (
            <motion.div
              key="deck"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="deck-container"
            >
              <CardDeck
                cards={cards}
                currentIndex={currentIndex}
                onRate={rateCard}
                onSkip={skipCard}
                onMarkCorrect={markAsCorrect}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="app-footer">
        <p>中学1年配当漢字 {kanjiList.length}字</p>
      </footer>
    </div>
  );
}

export default App;
