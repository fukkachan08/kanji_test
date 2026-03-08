import './ProgressBar.css';

function ProgressBar({ completed, total, percentage }) {
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">
          {completed} / {total}
        </span>
        <span className="progress-percentage">
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
