export function TimerControls({ isActive, onResume,onPause, onReset }) {
  return (
    <div className="timer-controls">
      <button onClick={
        isActive ? onPause : onResume
      }>{
        isActive ? 'Pause' : 'Resume'
      }</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
