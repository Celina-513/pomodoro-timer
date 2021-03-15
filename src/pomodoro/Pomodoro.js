import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import MainButtons from "./MainButtons";
import TimerChoices from "./TimerChoices";
import Active from "./Active";

function Pomodoro(props) {
  const {focusDuration, breakDuration, handleFocusIncrease, handleFocusDecrease, handleBreakIncrease, handleBreakDecrease, isTimerRunning, stopHandler, showActive, focusTimeRemaining, focusPercentComplete, breakTimeRemaining, breakPercentComplete, playPause} = props;
  return (
    <>
    <TimerChoices focusDuration={focusDuration} breakDuration={breakDuration} handleFocusIncrease={handleFocusIncrease} handleFocusDecrease={handleFocusDecrease} handleBreakIncrease={handleBreakIncrease} handleBreakDecrease={handleBreakDecrease} isTimerRunning={isTimerRunning}/>
    <MainButtons isTimerRunning={isTimerRunning} playPause={playPause} stopHandler={stopHandler} />
    <Active showActive={showActive} isTimerRunning={isTimerRunning} focusTimeRemaining={focusTimeRemaining} focusDuration={focusDuration} focusPercentComplete={focusPercentComplete} breakDuration={breakDuration} breakTimeRemaining={breakTimeRemaining} breakPercentComplete={breakPercentComplete} />
    </>
  )
}

export default Pomodoro;


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