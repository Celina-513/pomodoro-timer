import React, { useState } from "react";
import "./App.css";
//import Pomodoro from "./pomodoro/Pomodoro";
import useInterval from "./utils/useInterval";
import TimerChoices from "./pomodoro/TimerChoices";
import MainButtons from "./pomodoro/MainButtons";
import Active from "./pomodoro/Active";

function App() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
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

  // const playAudio = () => { 
  //   const audio = new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`)
  //   return audio.play(); 
  //  } 
  
  useInterval(
    () => {
      //countdown the focus timer and play the sound when its finished
      setFocusTimeRemaining((currentTime) => {
        if (currentTime > 0) {
          return currentTime - 1
        }
        audio.play();
        return currentTime;
      })
    },
    isTimerRunning ? 1000 : null
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
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setShowActive(true);
    setIsTimerRunning((prevState) => !prevState);
  }

  const stopHandler = () => {
    setShowActive(false);
    setIsTimerRunning(false);
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
    setFocusDuration((currentDuration) => currentDuration > 1 ? currentDuration - 1 : currentDuration);
    setFocusTimeRemaining((currentTime) => currentTime > 60 ? currentTime - 60 : currentTime);
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
        <TimerChoices focusDuration={focusDuration} breakDuration={breakDuration} handleFocusIncrease={handleFocusIncrease} handleFocusDecrease={handleFocusDecrease} handleBreakIncrease={handleBreakIncrease} handleBreakDecrease={handleBreakDecrease} isTimerRunning={isTimerRunning}/>
        <MainButtons isTimerRunning={isTimerRunning} playPause={playPause} stopHandler={stopHandler} />
        <Active showActive={showActive} isTimerRunning={isTimerRunning} focusTimeRemaining={focusTimeRemaining} focusDuration={focusDuration} focusPercentComplete={focusPercentComplete} breakDuration={breakDuration} breakTimeRemaining={breakTimeRemaining} breakPercentComplete={breakPercentComplete} />
        </div>
      </div>
    </div>
  );
}

export default App;



// function Pomodoro() { const session = { running: false, paused: false, stopped: true } 
//  [sessionState, setSessionState] = useState(session); 
//  const [onBreak, setOnBreak] = useState(false); 
//  const [focusDuration, setFocusDuration] = useState(25); 
//  const [breakDuration, setBreakDuration] = useState(5); 
//  const [timeRemaining, setTimeRemaining] = useState(0); 
//  const [percentComplete, setPercentComplete] = useState(0); 
//  const [disableButtons, setDisableButtons] = useState(false); 
//  const focusMinMax = [5, 60]; 
//  const breakMinMax = [1, 15]; 
//  const startSession = () => { setSessionState({ running: true, paused: false, stopped: false }); } 
//  const pauseSession = () => { setSessionState({ running: false, paused: true, stopped: false }); } 
//  const stopSession = () => { setDisableButtons(false); setOnBreak(false); setTimeRemaining(0); setPercentComplete(0); setSessionState({ running: false, paused: false, stopped: true }); } 
  // const handleIncrementClick = (type, increment) => { 
  // if (type === "focus") { 
  //   const [min, max] = [...focusMinMax]; 
  //   const newDuration = focusDuration + increment; 
  //   if (newDuration >= min && newDuration <= max) { 
  //     setFocusDuration(newDuration); 
  //   } 
  // } else if (type === "break") { 
  //   const [min, max] = [...breakMinMax]; 
  //   const newDuration = breakDuration + increment; 
  //   if (newDuration >= min && newDuration <= max) { 
  //     setBreakDuration(newDuration); 
  //   } 
  // } }
 
//  const calculatePercentComplete = () => { 
//    if (onBreak) { 
//      const breakInSeconds = breakDuration * 60; 
//      setPercentComplete(Math.trunc(((breakInSeconds - timeRemaining) / breakInSeconds) * 100)); 
//     } else { 
//       const focusInSeconds = focusDuration * 60; setPercentComplete(Math.trunc(((focusInSeconds - timeRemaining) / focusInSeconds) * 100)); 
//     } 
//   } 

//  const playAudio = () => { 
//    const audio = document.getElementsByClassName("audio-element")[0]; 
//    audio.play(); 
//   } 

//  useEffect(calculatePercentComplete, [timeRemaining]);

//  const toggleBreak = () => { 
//    playAudio(); 
//   if (!onBreak) { 
//     setTimeRemaining(breakDuration * 60); 
//   } else { 
//     setTimeRemaining(focusDuration * 60); 
//   } 
//   setOnBreak(prevState => !prevState); setPercentComplete(0); 
// } 
//  useInterval( () => {
//     if (timeRemaining === 0) { 
//       toggleBreak(); 
//     } else { 
//       setTimeRemaining(timeRemaining - 1); 
//     } 
//   }, sessionState.running ? 1000 : null )