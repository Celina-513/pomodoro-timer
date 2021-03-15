import React, { useState } from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import useInterval from "./utils/useInterval";
//import TimerChoices from "./pomodoro/TimerChoices";
//import MainButtons from "./pomodoro/MainButtons";
//import Active from "./pomodoro/Active";

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [focusTimeRemaining, setFocusTimeRemaining] = useState(focusDuration * 60);
  const [breakTimeRemaining, setBreakTimeRemaining] = useState(breakDuration * 60);

  //this is for the progress bar
  const focusDurationInSeconds = focusDuration * 60;
  const focusTimeElapsed = focusDurationInSeconds - focusTimeRemaining;
  const focusPercentComplete = parseFloat((focusTimeElapsed / focusDurationInSeconds) * 100);

  const breakDurationInSeconds = breakDuration * 60;
  const breakTimeElapsed = breakDurationInSeconds - breakTimeRemaining;
  const breakPercentComplete = parseFloat((breakTimeElapsed / breakDurationInSeconds) * 100);

  const audio = new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`);
  
  useInterval(
    () => {
      //countdown the focus timer and play the sound when its finished
      setFocusTimeRemaining((currentTime) => {
        if (currentTime > 0) {
          return currentTime - 1
        }
        audio.play();
        setOnBreak((prevState) => !prevState);
        return currentTime;
      })
    },
    isTimerRunning && !onBreak ? 1000 : null
  );

  useInterval(
    () => {
      //when the focusTimeRemaining gets to 0, countdown the break timer and play the sound when its finished
      if (focusTimeRemaining === 0) {
        setBreakTimeRemaining((currentTime) => {
          if (currentTime > 0) {
            return currentTime - 1
          }
          audio.play();
          return currentTime;
        })
      }
    },
    isTimerRunning && onBreak ? 1000 : null
  );

  function playPause() {
    setShowActive(true);
    setIsTimerRunning((prevState) => !prevState);
  }

  const stopHandler = () => {
    setShowActive(false);
    setIsTimerRunning(false);
    setOnBreak(false);
    setFocusDuration(25);
    setBreakDuration(5);
    setFocusTimeRemaining(1500);
    setBreakTimeRemaining(300);
  }

  const handleFocusIncrease = () => {
    setFocusDuration((currentDuration) => currentDuration < 60 ? currentDuration + 5 : currentDuration);
    setFocusTimeRemaining((currentTime) => currentTime < 3600 ? currentTime + 300 : currentTime);
  }
  const handleFocusDecrease = () => {
    setFocusDuration((currentDuration) => currentDuration >= 10 ? currentDuration - 5 : currentDuration);
    setFocusTimeRemaining((currentTime) => currentTime >= 600 ? currentTime - 300 : currentTime);
  }
  const handleBreakIncrease = () => {
    setBreakDuration((currentDuration) => currentDuration < 15 ? currentDuration + 1 : currentDuration);
    setBreakTimeRemaining((currentTime) => currentTime < 900 ? currentTime + 60 : currentTime);
  }
  const handleBreakDecrease = () => {
    setBreakDuration((currentDuration) => currentDuration > 1 ? currentDuration - 1 : currentDuration);
    setBreakTimeRemaining((currentTime) => currentTime > 60 ? currentTime - 60 : currentTime);
  }
  
  return (
    <div className="App">
      <header className="App-header container">
        <h1>Pomodoro Timer</h1>
      </header>
      <div className="container">
        <div className="pomodoro">
        <Pomodoro focusDuration={focusDuration} breakDuration={breakDuration} handleFocusIncrease={handleFocusIncrease} handleFocusDecrease={handleFocusDecrease} handleBreakIncrease={handleBreakIncrease} handleBreakDecrease={handleBreakDecrease} isTimerRunning={isTimerRunning} playPause={playPause} stopHandler={stopHandler} showActive={showActive} focusTimeRemaining={focusTimeRemaining} focusPercentComplete={focusPercentComplete} breakTimeRemaining={breakTimeRemaining} breakPercentComplete={breakPercentComplete} />   
        </div>
      </div>
    </div>
  );
}

export default App;



