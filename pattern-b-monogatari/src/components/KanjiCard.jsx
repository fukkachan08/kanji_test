import { useState } from 'react';
import { motion } from 'framer-motion';
import PartsBadge from './PartsBadge';
import StoryAnimation from './StoryAnimation';
import SelfRating from './SelfRating';
import { PART_TYPE_LABELS } from '../data/kanjiData';
import './KanjiCard.css';

function KanjiCard({ kanji, onRate, isActive = true }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (isActive) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleRate = (rating) => {
    if (onRate) {
      onRate(rating);
      setIsFlipped(false);
    }
  };

  if (!kanji) return null;

  return (
    <div className="kanji-card-wrapper">
      <motion.div
        className="kanji-card-container"
        onClick={handleFlip}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="kanji-card-inner"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* カード表面 */}
          <div className="kanji-card front">
            <div className="card-header">
              <PartsBadge parts={kanji.parts} size="small" />
            </div>

            <div className="card-main">
              <span className="kanji-character">{kanji.character}</span>
            </div>

            <div className="card-footer">
              <p className="kanji-reading">{kanji.reading}</p>
              <p className="flip-hint">タップして詳細を見る</p>
            </div>
          </div>

          {/* カード裏面 */}
          <div className="kanji-card back">
            <div className="back-content" onClick={(e) => e.stopPropagation()}>
              <div className="back-header">
                <span className="back-kanji">{kanji.character}</span>
                <span className="back-reading">{kanji.reading}</span>
              </div>

              <div className="back-story">
                <StoryAnimation
                  story={kanji.story}
                  character={kanji.character}
                  parts={kanji.parts}
                />
              </div>

              <div className="back-etymology">
                <h4>成り立ち</h4>
                <p>{kanji.etymology}</p>
              </div>

              <div className="back-parts">
                <h4>パーツ構成</h4>
                <div className="parts-list">
                  {kanji.parts.map((part, index) => (
                    <div
                      key={`${part.label}-${index}`}
                      className="part-item"
                      style={{ backgroundColor: part.color }}
                    >
                      <span className="part-label">{part.label}</span>
                      <span className="part-type">
                        {PART_TYPE_LABELS[part.type] || part.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="memory-tip">
                <div className="tip-bubble">
                  <span className="tip-icon">💡</span>
                  <p>{kanji.memoryTip}</p>
                </div>
              </div>

              <SelfRating onRate={handleRate} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default KanjiCard;
