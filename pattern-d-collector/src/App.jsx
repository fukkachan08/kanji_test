import { useGameStore } from './store/gameStore';
import Home from './components/Home';
import BreakPuzzle from './components/BreakPuzzle';
import Result from './components/Result';
import Collection from './components/Collection';
import './App.css';

function App() {
  const { screen } = useGameStore();

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return <Home />;
      case 'puzzle':
        return <BreakPuzzle />;
      case 'result':
        return <Result />;
      case 'collection':
        return <Collection />;
      default:
        return <Home />;
    }
  };

  return <div className="app">{renderScreen()}</div>;
}

export default App;
