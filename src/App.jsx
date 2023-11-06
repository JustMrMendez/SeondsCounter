import { useState, useEffect } from 'react'
import './App.css'
import { SecondsCounter } from './SecondsCounter';
import { TimerControls } from './TimerControls';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const formattedTime = new Date(seconds * 1000).toISOString().slice(11, 19);
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const resetTimer = () => {
    setIsActive(true);
    setSeconds(0);
  };

  return (
    <div className="App">
      <SecondsCounter formattedTime={formattedTime} />
      <TimerControls
        onResume={
          () => setIsActive(true)
        }
        onPause={
          () => setIsActive(false)
        }
        isActive={isActive}
        onReset={resetTimer} />
    </div>
  );
}

export default App;

