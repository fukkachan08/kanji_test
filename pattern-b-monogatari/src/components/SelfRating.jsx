import { RATING_VALUES } from '../hooks/useCardDeck';
import './SelfRating.css';

const ratingOptions = [
  { value: RATING_VALUES.AGAIN, emoji: '', label: 'もう一度', color: '#FF6B6B' },
  { value: RATING_VALUES.HARD, emoji: '', label: 'なんとなく', color: '#FFE66D' },
  { value: RATING_VALUES.GOOD, emoji: '', label: 'わかった！', color: '#4ECDC4' },
  { value: RATING_VALUES.PERFECT, emoji: '', label: '完璧！', color: '#A8E6CF' },
];

function SelfRating({ onRate }) {
  return (
    <div className="self-rating">
      <p className="rating-prompt">この漢字の理解度は？</p>
      <div className="rating-buttons">
        {ratingOptions.map((option) => (
          <button
            key={option.value}
            className="rating-button"
            style={{
              '--button-color': option.color,
              '--button-hover-color': option.color + 'dd'
            }}
            onClick={() => onRate(option.value)}
          >
            <span className="rating-emoji">{option.emoji}</span>
            <span className="rating-label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelfRating;
