import { PART_TYPE_LABELS } from '../data/kanjiData';
import './PartsBadge.css';

function PartsBadge({ parts, size = 'normal' }) {
  // 同じラベルの重複を除く
  const uniqueParts = parts.reduce((acc, part) => {
    const existing = acc.find((p) => p.label === part.label);
    if (!existing) {
      acc.push(part);
    }
    return acc;
  }, []);

  return (
    <div className={`parts-badge-container ${size}`}>
      {uniqueParts.map((part, index) => (
        <span
          key={`${part.label}-${index}`}
          className="parts-badge"
          style={{ backgroundColor: part.color }}
          title={PART_TYPE_LABELS[part.type] || part.type}
        >
          {part.label}
        </span>
      ))}
    </div>
  );
}

export default PartsBadge;
