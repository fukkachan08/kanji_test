import { useState, useEffect } from 'react';
import './StoryAnimation.css';

function StoryAnimation({ story, character, parts }) {
  const [visibleScenes, setVisibleScenes] = useState([]);

  const scenes = [
    { key: 'scene1', text: story.scene1 },
    { key: 'scene2', text: story.scene2 },
    { key: 'scene3', text: story.scene3 },
  ].filter((scene) => scene.text);

  useEffect(() => {
    setVisibleScenes([]);

    const timers = scenes.map((scene, index) => {
      return setTimeout(() => {
        setVisibleScenes((prev) => [...prev, scene.key]);
      }, (index + 1) * 800);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [story]);

  return (
    <div className="story-animation">
      <div className="story-visual">
        <div className="kanji-assembly">
          {parts.map((part, index) => (
            <span
              key={`${part.label}-${index}`}
              className={`assembly-part ${visibleScenes.includes(`scene${index + 1}`) ? 'visible' : ''}`}
              style={{
                backgroundColor: part.color,
                animationDelay: `${index * 0.3}s`,
              }}
            >
              {part.label}
            </span>
          ))}
          <span
            className={`assembly-result ${visibleScenes.length === scenes.length ? 'visible' : ''}`}
          >
            {character}
          </span>
        </div>
      </div>

      <div className="story-scenes">
        {scenes.map((scene, index) => (
          <p
            key={scene.key}
            className={`story-scene ${visibleScenes.includes(scene.key) ? 'visible' : ''}`}
            style={{ '--scene-index': index }}
          >
            <span className="scene-number">{index + 1}</span>
            {scene.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default StoryAnimation;
