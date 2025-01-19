import { useState, useEffect } from 'react'
import './App.css'
import { SecondsCounter } from './SecondsCounter';
import { TimerControls } from './TimerControls';

function App() {
  const [seconds, setSeconds] = useState(0);
  

  useEffect(() => {
    console.log('useEffect', seconds)

    return () => console.log()
  }u);

  

  };
 
  return (
    <div className="App">
    




    <SecondsCounter firstName="Gonzalo" sisterName="Navia" />
      





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

