import { useBattle } from '../hooks/useBattle';
import './KanjiPuzzle.css';

const KanjiPuzzle = () => {
  const {
    question,
    questType,
    kanji,
    selectedParts,
    isAnswering,
    submitChoice,
    selectPart,
    submitPuzzle,
    resetPuzzle
  } = useBattle();

  if (!question || !kanji) return null;

  // 読み問題 or 意味問題
  if (questType === 'reading' || questType === 'meaning') {
    return (
      <div className="kanji-puzzle">
        <div className="puzzle-kanji-display">
          <span className="target-kanji">{kanji.character}</span>
        </div>
        <p className="puzzle-prompt">{question.prompt}</p>
        <div className="choices-grid">
          {question.choices.map((choice, index) => (
            <button
              key={index}
              className={`choice-btn ${isAnswering ? 'disabled' : ''}`}
              onClick={() => !isAnswering && submitChoice(choice)}
              disabled={isAnswering}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // パズル問題
  if (questType === 'puzzle') {
    return (
      <div className="kanji-puzzle">
        <div className="puzzle-kanji-display">
          <span className="target-kanji outline">{kanji.character}</span>
        </div>
        <p className="puzzle-prompt">{question.prompt}</p>

        <div className="puzzle-workspace">
          <div className="selected-parts-area">
            {selectedParts.length === 0 ? (
              <span className="placeholder-text">パーツを選んでね</span>
            ) : (
              selectedParts.map((part, index) => (
                <span
                  key={index}
                  className="selected-part"
                  style={{ backgroundColor: part.color }}
                  onClick={() => selectPart(part)}
                >
                  {part.display}
                </span>
              ))
            )}
          </div>
        </div>

        <div className="parts-selection">
          {question.parts.map((part, index) => {
            const isSelected = selectedParts.some(p => p.id === part.id);
            return (
              <button
                key={index}
                className={`part-btn ${isSelected ? 'selected' : ''}`}
                style={{
                  backgroundColor: isSelected ? part.color : 'transparent',
                  borderColor: part.color,
                  color: isSelected ? '#1a1a2e' : part.color
                }}
                onClick={() => selectPart(part)}
                disabled={isAnswering}
              >
                {part.display}
              </button>
            );
          })}
        </div>

        <div className="puzzle-actions">
          <button
            className="action-btn reset"
            onClick={resetPuzzle}
            disabled={isAnswering || selectedParts.length === 0}
          >
            リセット
          </button>
          <button
            className="action-btn submit"
            onClick={submitPuzzle}
            disabled={isAnswering || selectedParts.length === 0}
          >
            決定！
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default KanjiPuzzle;
