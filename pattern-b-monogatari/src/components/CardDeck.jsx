import { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import KanjiCard from './KanjiCard';
import './CardDeck.css';

function CardDeck({ cards, currentIndex, onRate, onSkip, onMarkCorrect }) {
  const [exitDirection, setExitDirection] = useState(0);

  // 表示するカード（現在のカードと次の2枚まで）
  const visibleCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <div className="card-deck">
      <AnimatePresence mode="popLayout">
        {visibleCards.map((card, index) => {
          const isTop = index === 0;
          const stackIndex = index;

          return (
            <DraggableCard
              key={card.id}
              card={card}
              isTop={isTop}
              stackIndex={stackIndex}
              onRate={onRate}
              onSkip={onSkip}
              onMarkCorrect={onMarkCorrect}
              setExitDirection={setExitDirection}
            />
          );
        })}
      </AnimatePresence>

      {visibleCards.length === 0 && (
        <div className="empty-deck">
          <p>全てのカードを学習しました！</p>
        </div>
      )}

      <div className="swipe-hints">
        <span className="hint left">← スキップ</span>
        <span className="hint right">正解 →</span>
      </div>
    </div>
  );
}

function DraggableCard({
  card,
  isTop,
  stackIndex,
  onRate,
  onSkip,
  onMarkCorrect,
  setExitDirection,
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  // スワイプインジケーターの透明度
  const skipOpacity = useTransform(x, [-150, -50, 0], [1, 0.5, 0]);
  const correctOpacity = useTransform(x, [0, 50, 150], [0, 0.5, 1]);

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    if (info.offset.x < -threshold) {
      // 左スワイプ = スキップ
      setExitDirection(-1);
      onSkip();
    } else if (info.offset.x > threshold) {
      // 右スワイプ = 正解
      setExitDirection(1);
      onMarkCorrect();
    }
  };

  return (
    <motion.div
      className="draggable-card"
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        zIndex: 10 - stackIndex,
        scale: 1 - stackIndex * 0.05,
        y: stackIndex * 8,
        opacity: isTop ? opacity : 1 - stackIndex * 0.15,
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={isTop ? handleDragEnd : undefined}
      initial={{ scale: 0.9, opacity: 0, y: 50 }}
      animate={{
        scale: 1 - stackIndex * 0.05,
        opacity: 1 - stackIndex * 0.15,
        y: stackIndex * 8,
      }}
      exit={{
        x: 300 * (x.get() > 0 ? 1 : -1),
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 },
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {isTop && (
        <>
          <motion.div
            className="swipe-indicator skip"
            style={{ opacity: skipOpacity }}
          >
            スキップ
          </motion.div>
          <motion.div
            className="swipe-indicator correct"
            style={{ opacity: correctOpacity }}
          >
            正解！
          </motion.div>
        </>
      )}
      <KanjiCard kanji={card} onRate={onRate} isActive={isTop} />
    </motion.div>
  );
}

export default CardDeck;
